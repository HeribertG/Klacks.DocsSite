---
sidebar_position: 1
---
# Systemkrav og opbygning

Klacks kører som en Docker-stack på din egen server. Denne side beskriver, hvilke tjenester der starter, og hvordan du dimensionerer værten — inklusive de måleværdier, anbefalingen bygger på.

## Opbygningen: fem tjenester

On-premise-pakken starter udelukkende det, der er nødvendigt for driften:

| Tjeneste | Image | Opgave |
|---|---|---|
| `klacks-postgres` | `pgvector/pgvector:pg17` | Database; vektorudvidelsen er allerede med |
| `klacks-api` | `ghcr.io/heribertg/klacks-api` | Backend; migrerer og udfylder databasen ved start |
| `klacks-ui` | `ghcr.io/heribertg/klacks-ui` | Angular-brugerflade, leveret via nginx |
| `klacks-updater` | `ghcr.io/heribertg/klacks-updater` | installerer signerede opdateringer (api og ui sammen) |
| `klacks-proxy` | `nginx:alpine` | TLS-afslutning og reverse proxy |

Producentens interne tjenester (udviklings-vidensbase, marketing, markedsplads, pgAdmin, certbot, Blazor-brugerflade) er bevidst **ikke** med. Som driftsansvarlig ser du altså kun din egen stack.

## Hvad værten skal have

- **8 GB RAM og 4 vCPU** som minimum (se beregningen nedenfor).
- Docker Desktop (Windows/macOS) eller Docker Engine med Compose v2 (Linux), **amd64 eller arm64**.
- Frie porte **80 og 443** — kan overskrives via `HTTP_PORT` og `HTTPS_PORT`.
- **Udgående** HTTPS-adgang til `ghcr.io` (images) og `github.com` (signeret opdateringsmanifest).
- Valgfrit: adgang til `klacks-software.ch:7553` til landepakker og sprog-plugins fra markedspladsen.

## Hukommelse: hvorfor 8 GB, og hvad der sker på mindre værter

Klacks driver sine to søgemodeller (embedder og reranker) **lokalt i processen** `klacks-api`. Begge ONNX-sessioner bliver permanent i hukommelsen — de aflæsses ikke efter hvert spørgsmål.

Målt på producentens produktionsvært den 12.09.2026:

- Processens grundbelastning: ca. 1.017 MB
- Embedder: ca. 1.171 MB
- Reranker: ca. 116 MB
- Sum: et plateau på omkring **2.304 MB**
- Under en grænse på 2.560 MB afsluttede kernen containeren ved 2.471 MB (OOM).

Derfor sætter den medfølgende Compose **3584M** og 3,0 CPU til `klacks-api`, med inaktivitetsaflæsning slået fra. Regnet over hele stacken: 3584M (api) + 2048M (postgres) + 3 × 256M (ui, updater, proxy) = **6400 MiB**; resten af de 8 GB bliver tilbage til operativsystem og filcache.

**Mindre vært, for eksempel 3 GB til `klacks-api`:** Sæt i `.env` **begge** følgende linjer — aldrig hukommelseslinjen alene:

```bash
KLACKS_API_MEMORY_LIMIT=2560M
KLACKS_API_IDLE_UNLOAD_MINUTES=30
```

Inaktivitetsaflæsningen frigiver en session efter 30 minutter uden adgang. Prisen: Det næste spørgsmål derefter indlæser den igen (omkring 2,2–2,9 s for embedderen, omkring 1,1 s for rerankeren). Værdier mellem 1 og 5 hæves til 5, `0` betyder: aldrig aflæsning.

## CPU: færre kerner bremser kun, de ødelægger intet

Søgningen fungerer også med færre kerner, men bliver langsommere — rerankeren er det regnetunge trin. Målt: 2.994–3.163 ms for 25 kandidater ved 3,0 CPU'er mod 4.339–4.860 ms ved 1,5 CPU'er, hvor tjenesten derudover tilbragte 7,15 s i drosling. Til en mindre vært:

```bash
KLACKS_API_CPU_LIMIT=1.5
```

Stackens CPU-kvoter summerer bevidst til 4,75 ved 4 vCPU: En kvote er et loft, ikke en reservation, og tjenesterne topper aldrig samtidig.

## Godt at vide

- **Adgangskoder og nøgler forbliver stabile.** `POSTGRES_PASSWORD` er ved første start brændt ind i datavolumet — en senere ændring gør databasen forældreløs. `JWT_SECRET` signerer sessionerne; en ændring logger alle brugere ud. Installeren bevarer begge ved hver ny kørsel.
- **`COMPOSE_PROJECT_NAME=klacks`** er hårdkodet, så vært og opdateringstjeneste uafhængigt af mappenavnet peger på det samme Compose-projekt. Ændr det ikke efter installationen.
- **`KnowledgeIndex__WarmupEnabled=false` er ingen hukommelsesmulighed.** Det flytter kun opbygningen af søgningen fra starten til det første chatspørgsmål; i vedvarende drift er sessionerne lige så til stede. Kun nyttigt, hvis værten ved starten strander på hukommelse.
- **Mere end én API-instans?** Så skal du bruge en SignalR-backplane. Klacks leverer ingen: Stil selv en RESP-kompatibel tjeneste til rådighed (for eksempel Valkey — licenseret under BSD-3 siden 7.4, i modsætning til Redis) og slå den sticky-upstream (`ip_hash`) til, der er forberedt i nginx-skabelonen. Uden backplane kører der præcis én `klacks-api`-instans, som ved enhver installation i dag.
- **Landeprofiler:** Installeren kender 30 profiler: `ae`, `at`, `ch`, `cn`, `cz`, `de`, `dk`, `es`, `fi`, `fr`, `gb`, `gr`, `id`, `il`, `it`, `jp`, `kr`, `li`, `my`, `nl`, `no`, `pl`, `pt`, `ro`, `sa`, `se`, `th`, `tw`, `us`, `vn`. En profil sætter ved første start sprog, land/region og tidszone, helligdagskalender, weekend og ugestart, arbejdstidsgrænser, ferieret, tillæg, standardmålsystemet for løneksport (for Schweiz for eksempel `abaconnect-ch`) samt branchskabeloner — for hjemmeplejen for eksempel planlægningsregelskabelonen „CH Spitex Standard". Uden profil starter Klacks neutralt, og du konfigurerer alt i hånden.

---

*Spørgsmål om driften? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
