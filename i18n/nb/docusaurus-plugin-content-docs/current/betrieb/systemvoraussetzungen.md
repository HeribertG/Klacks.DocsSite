---
sidebar_position: 1
---
# Systemkrav og oppbygning

Klacks kjører som en Docker-stakk på din egen server. Denne siden beskriver hvilke tjenester som starter, og hvordan du dimensjonerer verten — inkludert måleverdiene anbefalingen bygger på.

## Oppbygningen: fem tjenester

On-Premise-pakken starter utelukkende det som trengs for driften:

| Tjeneste | Image | Oppgave |
|---|---|---|
| `klacks-postgres` | `pgvector/pgvector:pg17` | Database; vektorutvidelsen er allerede inkludert |
| `klacks-api` | `ghcr.io/heribertg/klacks-api` | Backend; migrerer og fyller databasen ved oppstart |
| `klacks-ui` | `ghcr.io/heribertg/klacks-ui` | Angular-grensesnitt, levert via nginx |
| `klacks-updater` | `ghcr.io/heribertg/klacks-updater` | installerer signerte oppdateringer (api og ui sammen) |
| `klacks-proxy` | `nginx:alpine` | TLS-terminering og reverse proxy |

Produsentens interne tjenester (kunnskapslager for utvikling, markedsføring, markedsplass, pgAdmin, certbot, Blazor-grensesnitt) er bevisst **ikke** med. Som driftsansvarlig ser du dermed bare din egen stakk.

## Hva verten må ha

- **8 GB RAM og 4 vCPU** som minimum (se regnestykket nedenfor).
- Docker Desktop (Windows/macOS) eller Docker Engine med Compose v2 (Linux), **amd64 eller arm64**.
- Ledige porter **80 og 443** — kan overstyres via `HTTP_PORT` og `HTTPS_PORT`.
- **Utgående** HTTPS-tilgang til `ghcr.io` (images) og `github.com` (signert oppdateringsmanifest).
- Valgfritt: tilgang til `klacks-software.ch:7553` for landpakker og språkplugins fra markedsplassen.

## Minne: hvorfor 8 GB, og hva som skjer på mindre verter

Klacks driver de to søkemodellene sine (embedder og reranker) **lokalt i prosessen** `klacks-api`. Begge ONNX-øktene blir varig i minnet — de lastes ikke ut etter hvert spørsmål.

Målt på produsentens produksjonsvert den 12.09.2026:

- Grunnlast for prosessen: ca. 1'017 MB
- Embedder: ca. 1'171 MB
- Reranker: ca. 116 MB
- Sum: et platå på rundt **2'304 MB**
- Under en grense på 2'560 MB avsluttet kjernen containeren ved 2'471 MB (OOM).

Derfor setter den medfølgende Compose-filen **3'584M** og 3,0 CPU for `klacks-api`, med idle-utlasting slått av. Regnet over hele stakken: 3'584M (api) + 2'048M (postgres) + 3 × 256M (ui, updater, proxy) = **6'400 MiB**; resten av de 8 GB blir igjen til operativsystemet og filbufferen.

**Mindre vert, omtrent 3 GB for `klacks-api`:** Sett i `.env` **begge** de følgende linjene — aldri minnelinjen alene:

```bash
KLACKS_API_MEMORY_LIMIT=2560M
KLACKS_API_IDLE_UNLOAD_MINUTES=30
```

Idle-utlastingen frigir en økt etter 30 minutter uten tilgang. Prisen: Neste spørsmål etterpå laster den inn på nytt (rundt 2,2–2,9 s for embedderen, rundt 1,1 s for rerankeren). Verdier mellom 1 og 5 heves til 5, `0` betyr: aldri last ut.

## CPU: færre kjerner bremser bare, de ødelegger ingenting

Søket fungerer også med færre kjerner, men blir tregere — rerankeren er det regnekrevende trinnet. Målt: 2'994–3'163 ms for 25 kandidater ved 3,0 CPU-er mot 4'339–4'860 ms ved 1,5 CPU-er, der tjenesten i tillegg tilbrakte 7,15 s strupet. For en mindre vert:

```bash
KLACKS_API_CPU_LIMIT=1.5
```

CPU-kvotene i stakken summerer seg bevisst til 4,75 på 4 vCPU: En kvote er en øvre grense, ikke en reservasjon, og tjenestene topper seg aldri samtidig.

## Greit å vite

- **Passord og nøkler forblir stabile.** `POSTGRES_PASSWORD` er brent inn i datavolumet ved første oppstart — en senere endring gjør databasen foreldreløs. `JWT_SECRET` signerer øktene; en endring logger alle brukere ut. Installasjonsprogrammet bevarer begge ved hver ny kjøring.
- **`COMPOSE_PROJECT_NAME=klacks`** er fast kablet, slik at verten og oppdateringstjenesten uavhengig av mappenavnet peker på samme Compose-prosjekt. Skal ikke endres etter installasjonen.
- **`KnowledgeIndex__WarmupEnabled=false` er ikke et minnealternativ.** Det flytter bare oppbyggingen av søket fra oppstarten til den første chat-forespørselen; i vedvarende drift er øktene like nærværende. Nyttig bare hvis verten feiler på minne ved oppstart.
- **Mer enn én API-instans?** Da trenger du en SignalR-backplane. Klacks leverer ingen: Sett opp en RESP-kompatibel tjeneste selv (for eksempel Valkey — siden 7.4 lisensiert under BSD-3, i motsetning til Redis) og slå på den sticky upstream (`ip_hash`) som er forberedt i nginx-malen. Uten backplane kjører nøyaktig én `klacks-api`-instans, som i enhver installasjon i dag.
- **Landprofiler:** Installasjonsprogrammet kjenner 30 profiler: `ae`, `at`, `ch`, `cn`, `cz`, `de`, `dk`, `es`, `fi`, `fr`, `gb`, `gr`, `id`, `il`, `it`, `jp`, `kr`, `li`, `my`, `nl`, `no`, `pl`, `pt`, `ro`, `sa`, `se`, `th`, `tw`, `us`, `vn`. En profil setter ved første oppstart språk, land/region og tidssone, helligdagskalender, helg og ukestart, arbeidstidsgrenser, feriekrav, tillegg, standard målsystem for lønnseksport (for Sveits for eksempel `abaconnect-ch`) samt bransjemaler — for Spitex for eksempel planleggingsregelmalen «CH Spitex Standard». Uten profil starter Klacks nøytralt, og du konfigurerer alt for hånd.

---

*Driftsspørsmål? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
