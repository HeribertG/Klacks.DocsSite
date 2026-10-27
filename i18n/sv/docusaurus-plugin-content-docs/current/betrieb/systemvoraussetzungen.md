---
sidebar_position: 1
---
# Systemkrav och uppbyggnad

Klacks körs som en Docker-stack på din egen server. Den här sidan beskriver vilka tjänster som startar och hur du dimensionerar värden — inklusive de mätvärden som rekommendationen bygger på.

## Uppbyggnaden: fem tjänster

On-premise-paketet startar uteslutande det som behövs för driften:

| Tjänst | Image | Uppgift |
|---|---|---|
| `klacks-postgres` | `pgvector/pgvector:pg17` | Databas; vektortillägget ingår redan |
| `klacks-api` | `ghcr.io/heribertg/klacks-api` | Backend; migrerar och fyller databasen vid start |
| `klacks-ui` | `ghcr.io/heribertg/klacks-ui` | Angular-gränssnitt, levereras via nginx |
| `klacks-updater` | `ghcr.io/heribertg/klacks-updater` | installerar signerade uppdateringar (api och ui tillsammans) |
| `klacks-proxy` | `nginx:alpine` | TLS-terminering och reverse proxy |

Tillverkarens interna tjänster (kunskapslager för utveckling, marknadsföring, marknadsplats, pgAdmin, certbot, Blazor-gränssnitt) ingår medvetet **inte**. Som driftansvarig ser du alltså bara din egen stack.

## Vad värden måste ha

- **8 GB RAM och 4 vCPU** som minimum (se beräkningen nedan).
- Docker Desktop (Windows/macOS) eller Docker Engine med Compose v2 (Linux), **amd64 eller arm64**.
- Lediga portar **80 och 443** — kan åsidosättas via `HTTP_PORT` och `HTTPS_PORT`.
- **Utgående** HTTPS-åtkomst till `ghcr.io` (images) och `github.com` (signerat uppdateringsmanifest).
- Valfritt: åtkomst till `klacks-software.ch:7553` för landspaket och språk-plugins från marknadsplatsen.

## Minne: varför 8 GB, och vad som händer på mindre värdar

Klacks kör sina båda sökmodeller (embedder och reranker) **lokalt i processen** `klacks-api`. Båda ONNX-sessionerna ligger kvar permanent i minnet — de laddas inte ur efter varje fråga.

Uppmätt på tillverkarens produktionsvärd den 12.09.2026:

- Processens grundlast: ca 1 017 MB
- Embedder: ca 1 171 MB
- Reranker: ca 116 MB
- Summa: en platå på omkring **2 304 MB**
- Under en gräns på 2 560 MB avslutade kärnan containern vid 2 471 MB (OOM).

Därför sätter den medföljande Compose-filen **3584M** och 3,0 CPU för `klacks-api`, med urladdning vid inaktivitet avstängd. Räknat över hela stacken: 3584M (api) + 2048M (postgres) + 3 × 256M (ui, updater, proxy) = **6400 MiB**; resten av de 8 GB blir kvar åt operativsystem och filcache.

**Mindre värd, till exempel 3 GB för `klacks-api`:** Sätt i `.env` **båda** följande rader — aldrig minnesraden ensam:

```bash
KLACKS_API_MEMORY_LIMIT=2560M
KLACKS_API_IDLE_UNLOAD_MINUTES=30
```

Urladdningen vid inaktivitet frigör en session efter 30 minuter utan åtkomst. Priset: nästa fråga därefter laddar den på nytt (omkring 2,2–2,9 s för embeddern, omkring 1,1 s för rerankern). Värden mellan 1 och 5 höjs till 5, `0` betyder: aldrig urladdning.

## CPU: färre kärnor bromsar bara, de förstör ingenting

Sökningen fungerar även med färre kärnor, men blir långsammare — rerankern är det beräkningsintensiva steget. Uppmätt: 2 994–3 163 ms för 25 kandidater vid 3,0 CPU mot 4 339–4 860 ms vid 1,5 CPU, där tjänsten dessutom tillbringade 7,15 s strypt. För en mindre värd:

```bash
KLACKS_API_CPU_LIMIT=1.5
```

Stackens CPU-kvoter summerar medvetet till 4,75 vid 4 vCPU: en kvot är ett tak, ingen reservation, och tjänsterna toppar aldrig samtidigt.

## Bra att veta

- **Lösenord och nycklar förblir stabila.** `POSTGRES_PASSWORD` är vid första starten inbränt i datavolymen — en senare ändring gör databasen föräldralös. `JWT_SECRET` signerar sessionerna; en ändring loggar ut alla användare. Installationsprogrammet bevarar båda vid varje ny körning.
- **`COMPOSE_PROJECT_NAME=klacks`** är hårdkodat så att värd och uppdateringstjänst pekar på samma Compose-projekt oavsett mappnamn. Ändra det inte efter installationen.
- **`KnowledgeIndex__WarmupEnabled=false` är inget minnesalternativ.** Det flyttar bara uppbyggnaden av sökningen från starten till den första chattfrågan; i kontinuerlig drift är sessionerna lika närvarande. Bara användbart om värden vid starten stupar på minnet.
- **Mer än en API-instans?** Då behöver du en SignalR-backplane. Klacks levererar ingen: ställ själv upp en RESP-kompatibel tjänst (till exempel Valkey — licensierad under BSD-3 sedan 7.4, till skillnad från Redis) och slå på den sticky-upstream (`ip_hash`) som är förberedd i nginx-mallen. Utan backplane körs exakt en `klacks-api`-instans, som vid varje installation idag.
- **Landsprofiler:** Installationsprogrammet känner till 30 profiler: `ae`, `at`, `ch`, `cn`, `cz`, `de`, `dk`, `es`, `fi`, `fr`, `gb`, `gr`, `id`, `il`, `it`, `jp`, `kr`, `li`, `my`, `nl`, `no`, `pl`, `pt`, `ro`, `sa`, `se`, `th`, `tw`, `us`, `vn`. En profil sätter vid första starten språk, land/region och tidszon, helgdagskalender, helg och veckostart, arbetstidsgränser, semesterrätt, tillägg, standardmålsystemet för löneexport (för Schweiz till exempel `abaconnect-ch`) samt branschmallar — för hemtjänsten till exempel planeringsregelmallen ”CH Spitex Standard”. Utan profil startar Klacks neutralt och du konfigurerar allt för hand.

---

*Frågor om driften? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
