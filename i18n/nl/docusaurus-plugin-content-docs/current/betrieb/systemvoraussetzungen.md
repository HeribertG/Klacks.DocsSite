---
sidebar_position: 1
---
# Systeemvereisten en opbouw

Klacks draait als Docker-stack op uw eigen server. Deze pagina beschrijft welke services daarbij starten en hoe u de host dimensioneert — inclusief de meetwaarden waarop de aanbeveling berust.

## De opbouw: vijf services

Het on-premise-pakket start uitsluitend wat voor de werking nodig is:

| Service | Image | Taak |
|---|---|---|
| `klacks-postgres` | `pgvector/pgvector:pg17` | Database; de vectorextensie is al inbegrepen |
| `klacks-api` | `ghcr.io/heribertg/klacks-api` | Backend; migreert en vult de database bij het starten |
| `klacks-ui` | `ghcr.io/heribertg/klacks-ui` | Angular-interface, geleverd via nginx |
| `klacks-updater` | `ghcr.io/heribertg/klacks-updater` | installeert ondertekende updates (api en ui samen) |
| `klacks-proxy` | `nginx:alpine` | TLS-afsluiting en reverse proxy |

Interne diensten van de fabrikant (ontwikkelkennisbank, marketing, marktplaats, pgAdmin, certbot, Blazor-interface) zijn bewust **niet** inbegrepen. U als beheerder ziet dus alleen uw eigen stack.

## Wat de host moet meebrengen

- **8 GB RAM en 4 vCPU** als minimum (zie de berekening hieronder).
- Docker Desktop (Windows/macOS) of Docker Engine met Compose v2 (Linux), **amd64 of arm64**.
- Vrije poorten **80 en 443** — te overschrijven via `HTTP_PORT` en `HTTPS_PORT`.
- **Uitgaande** HTTPS-toegang tot `ghcr.io` (images) en `github.com` (ondertekend updatemanifest).
- Optioneel: toegang tot `klacks-software.ch:7553` voor landenpakketten en taalplugins uit de marktplaats.

## Geheugen: waarom 8 GB, en wat er bij kleinere hosts gebeurt

Klacks draait zijn beide zoekmodellen (embedder en reranker) **lokaal in het proces** `klacks-api`. Beide ONNX-sessies blijven permanent in het geheugen — ze worden niet na elke vraag ontladen.

Gemeten op de productiehost van de fabrikant op 12.09.2026:

- Basisbelasting van het proces: ca. 1.017 MB
- Embedder: ca. 1.171 MB
- Reranker: ca. 116 MB
- Som: een plateau van circa **2.304 MB**
- Onder een grens van 2.560 MB heeft de kernel de container bij 2.471 MB beëindigd (OOM).

Daarom stelt de meegeleverde Compose **3584M** en 3,0 CPU in voor `klacks-api`, met uitgeschakeld ontladen bij inactiviteit. Over de hele stack gerekend: 3584M (api) + 2048M (postgres) + 3 × 256M (ui, updater, proxy) = **6400 MiB**; de rest van de 8 GB blijft over voor besturingssysteem en bestandscache.

**Kleinere host, ongeveer 3 GB voor `klacks-api`:** Zet in de `.env` **beide** volgende regels — nooit de geheugenregel alleen:

```bash
KLACKS_API_MEMORY_LIMIT=2560M
KLACKS_API_IDLE_UNLOAD_MINUTES=30
```

Het ontladen bij inactiviteit geeft een sessie vrij na 30 minuten zonder toegang. De prijs: de eerstvolgende vraag daarna laadt haar opnieuw (circa 2,2–2,9 s voor de embedder, circa 1,1 s voor de reranker). Waarden tussen 1 en 5 worden verhoogd naar 5, `0` betekent: nooit ontladen.

## CPU: minder kernen vertragen alleen, ze breken niets

De zoekfunctie werkt ook met minder kernen, maar wordt trager — de reranker is de rekenintensieve stap. Gemeten: 2.994–3.163 ms voor 25 kandidaten bij 3,0 CPU's tegenover 4.339–4.860 ms bij 1,5 CPU's, waar de service bovendien 7,15 s gedrosseld doorbracht. Voor een kleinere host:

```bash
KLACKS_API_CPU_LIMIT=1.5
```

De CPU-quota van de stack tellen bewust op tot 4,75 bij 4 vCPU: een quotum is een bovengrens, geen reservering, en de services pieken nooit tegelijk.

## Goed om te weten

- **Wachtwoorden en sleutels blijven stabiel.** `POSTGRES_PASSWORD` is bij de eerste start in het data-volume ingebrand — een latere wijziging maakt de database wees. `JWT_SECRET` ondertekent de sessies; een wijziging meldt alle gebruikers af. De installer behoudt beide bij elke nieuwe run.
- **`COMPOSE_PROJECT_NAME=klacks`** is vast ingesteld, zodat host en updateservice ongeacht de mapnaam naar hetzelfde Compose-project wijzen. Na de installatie niet meer wijzigen.
- **`KnowledgeIndex__WarmupEnabled=false` is geen geheugenoptie.** Het verschuift alleen de opbouw van de zoekfunctie van de start naar de eerste chatvraag; in continu gebruik zijn de sessies even aanwezig. Alleen nuttig als de host bij de start op geheugen strandt.
- **Meer dan één API-instantie?** Dan hebt u een SignalR-backplane nodig. Klacks levert er geen mee: zet zelf een RESP-compatibele service neer (bijvoorbeeld Valkey — sinds 7.4 onder BSD-3 gelicentieerd, anders dan Redis) en schakel de in het nginx-sjabloon voorbereide sticky-upstream (`ip_hash`) in. Zonder backplane draait precies één `klacks-api`-instantie, zoals bij elke huidige installatie.
- **Landenprofielen:** De installer kent 30 profielen: `ae`, `at`, `ch`, `cn`, `cz`, `de`, `dk`, `es`, `fi`, `fr`, `gb`, `gr`, `id`, `il`, `it`, `jp`, `kr`, `li`, `my`, `nl`, `no`, `pl`, `pt`, `ro`, `sa`, `se`, `th`, `tw`, `us`, `vn`. Een profiel stelt bij de eerste start taal, land/regio en tijdzone, feestdagenkalender, weekend en begin van de week, arbeidstijdgrenzen, vakantierecht, toeslagen, het standaarddoelsysteem voor de loonexport (voor Zwitserland bijvoorbeeld `abaconnect-ch`) en branchesjablonen in — voor de thuiszorg bijvoorbeeld het planningsregelsjabloon „CH Spitex Standard". Zonder profiel start Klacks neutraal en configureert u alles met de hand.

---

*Vragen over het beheer? [Klacks-community op Discord](https://discord.gg/YRP8p2abVC).*
