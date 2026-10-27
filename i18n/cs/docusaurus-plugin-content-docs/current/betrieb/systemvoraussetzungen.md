---
sidebar_position: 1
---

# Systémové požadavky a architektura

Klacks běží jako Docker stack na vašem vlastním serveru. Tato stránka popisuje, které služby se přitom spouštějí a jak dimenzovat hostitele — včetně naměřených hodnot, na kterých doporučení stojí.

## Architektura: pět služeb

On-Premise balíček spouští výhradně to, co je pro provoz nutné:

| Služba | Image | Úloha |
|---|---|---|
| `klacks-postgres` | `pgvector/pgvector:pg17` | Databáze; vektorové rozšíření je již součástí |
| `klacks-api` | `ghcr.io/heribertg/klacks-api` | Backend; při startu migruje a plní databázi |
| `klacks-ui` | `ghcr.io/heribertg/klacks-ui` | Angular rozhraní, servírované přes nginx |
| `klacks-updater` | `ghcr.io/heribertg/klacks-updater` | nasazuje podepsané aktualizace (api a ui společně) |
| `klacks-proxy` | `nginx:alpine` | ukončení TLS a reverzní proxy |

Interní služby výrobce (vývojové úložiště znalostí, marketing, tržiště, pgAdmin, certbot, rozhraní Blazor) záměrně **nejsou** součástí. Jako provozovatel tedy vidíte jen svůj vlastní stack.

## Co musí hostitel splňovat

- **8 GB RAM a 4 vCPU** jako minimum (viz výpočet níže).
- Docker Desktop (Windows/macOS) nebo Docker Engine s Compose v2 (Linux), **amd64 nebo arm64**.
- Volné porty **80 a 443** — lze přepsat pomocí `HTTP_PORT` a `HTTPS_PORT`.
- **Odchozí** přístup HTTPS na `ghcr.io` (images) a `github.com` (podepsaný manifest aktualizací).
- Volitelně: přístup na `klacks-software.ch:7553` pro balíčky zemí a jazykové pluginy z tržiště.

## Paměť: proč 8 GB a co se děje u menších hostitelů

Klacks provozuje oba své vyhledávací modely (embedder a reranker) **lokálně v procesu** `klacks-api`. Obě relace ONNX zůstávají trvale v paměti — nevyprazdňují se po každém dotazu.

Naměřeno na produkčním hostiteli výrobce dne 12. 9. 2026:

- Základní zátěž procesu: cca 1 017 MB
- Embedder: cca 1 171 MB
- Reranker: cca 116 MB
- Součet: plató okolo **2 304 MB**
- Při limitu 2 560 MB jádro kontejner ukončilo (OOM) při 2 471 MB.

Proto dodávaný Compose nastavuje **3 584M** a 3,0 CPU pro `klacks-api` při vypnutém uvolňování v klidu. Přes celý stack: 3 584M (api) + 2 048M (postgres) + 3 × 256M (ui, updater, proxy) = **6 400 MiB**, zbytek z 8 GB zůstává pro operační systém a souborovou cache.

**Menší hostitel, zhruba 3 GB pro `klacks-api`:** Nastavte v souboru `.env` **oba** následující řádky — nikdy ne samotný řádek s pamětí:

```bash
KLACKS_API_MEMORY_LIMIT=2560M
KLACKS_API_IDLE_UNLOAD_MINUTES=30
```

Uvolňování v klidu uvolní relaci po 30 minutách bez přístupu. Cena: následující dotaz ji načte znovu (zhruba 2,2–2,9 s pro embedder, zhruba 1,1 s pro reranker). Hodnoty mezi 1 a 5 se zvýší na 5, `0` znamená: nikdy neuvolňovat.

## CPU: méně jader jen brzdí, nic nerozbije

Vyhledávání funguje i s méně jádry, ale je pomalejší — reranker je výpočetně nejnáročnější krok. Naměřeno: 2 994–3 163 ms pro 25 kandidátů při 3,0 CPU oproti 4 339–4 860 ms při 1,5 CPU, kde služba navíc strávila 7,15 s v omezení. Pro menšího hostitele:

```bash
KLACKS_API_CPU_LIMIT=1.5
```

Kvóty CPU stacku se záměrně sčítají na 4,75 při 4 vCPU: kvóta je horní mez, nikoli rezervace, a služby nikdy nemají špičku současně.

## Dobré vědět

- **Hesla a klíče zůstávají stabilní.** `POSTGRES_PASSWORD` je při prvním startu vypálené do datového volume — pozdější změna osiří databázi. `JWT_SECRET` podepisuje relace; změna odhlásí všechny uživatele. Instalátor obě hodnoty při každém opakovaném spuštění zachová.
- **`COMPOSE_PROJECT_NAME=klacks`** je pevně zadrátováno, aby hostitel a aktualizační služba ukazovaly nezávisle na názvu složky na stejný projekt Compose. Po instalaci už neměňte.
- **`KnowledgeIndex__WarmupEnabled=false` není volba pro úsporu paměti.** Pouze přesune sestavení vyhledávání ze startu do prvního dotazu v chatu; v trvalém provozu jsou relace přítomny stejně. Užitečné jen tehdy, když hostitel při startu selhává na paměti.
- **Více než jedna instance API?** Pak potřebujete SignalR backplane. Klacks žádný nedodává: zprovozněte si sami službu kompatibilní s RESP (například Valkey — od verze 7.4 pod licencí BSD-3, na rozdíl od Redis) a odblokujte sticky upstream (`ip_hash`) připravený v šabloně nginx. Bez backplane běží přesně jedna instance `klacks-api`, jako u každé dnešní instalace.
- **Profily zemí:** Instalátor zná 30 profilů: `ae`, `at`, `ch`, `cn`, `cz`, `de`, `dk`, `es`, `fi`, `fr`, `gb`, `gr`, `id`, `il`, `it`, `jp`, `kr`, `li`, `my`, `nl`, `no`, `pl`, `pt`, `ro`, `sa`, `se`, `th`, `tw`, `us`, `vn`. Profil při prvním startu nastaví jazyk, zemi/region a časové pásmo, kalendář svátků, víkend a začátek týdne, limity pracovní doby, nárok na dovolenou, příplatky, výchozí cílový systém mzdového exportu (pro Švýcarsko například `abaconnect-ch`) a oborové šablony — pro Spitex například šablonu plánovacího pravidla „CH Spitex Standard". Bez profilu Klacks startuje neutrálně a vše nastavujete ručně.

---

*Provozní otázky? [Komunita Klacks na Discordu](https://discord.gg/YRP8p2abVC).*
