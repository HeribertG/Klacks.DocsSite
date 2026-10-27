---
sidebar_position: 1
---
# Cerințe de sistem și arhitectură

Klacks rulează ca stack Docker pe propriul dumneavoastră server. Această pagină descrie ce servicii pornesc și cum dimensionați gazda — inclusiv valorile măsurate pe care se bazează recomandarea.

## Arhitectura: cinci servicii

Pachetul On-Premise pornește exclusiv ce este necesar pentru funcționare:

| Serviciu | Imagine | Rol |
|---|---|---|
| `klacks-postgres` | `pgvector/pgvector:pg17` | Baza de date; extensia vectorială este deja inclusă |
| `klacks-api` | `ghcr.io/heribertg/klacks-api` | Backend; migrează și completează baza de date la pornire |
| `klacks-ui` | `ghcr.io/heribertg/klacks-ui` | Interfața Angular, livrată prin nginx |
| `klacks-updater` | `ghcr.io/heribertg/klacks-updater` | aplică actualizări semnate (api și ui împreună) |
| `klacks-proxy` | `nginx:alpine` | terminare TLS și reverse proxy |

Serviciile interne ale producătorului (baza de cunoștințe de dezvoltare, marketing, marketplace, pgAdmin, certbot, interfața Blazor) **nu** sunt incluse în mod deliberat. Ca operator, vedeți deci doar propriul dumneavoastră stack.

## Ce trebuie să ofere gazda

- **8 GB RAM și 4 vCPU** ca minim (vezi calculul de mai jos).
- Docker Desktop (Windows/macOS) sau Docker Engine cu Compose v2 (Linux), **amd64 sau arm64**.
- Porturi libere **80 și 443** — se pot suprascrie prin `HTTP_PORT` și `HTTPS_PORT`.
- Acces HTTPS **de ieșire** către `ghcr.io` (imagini) și `github.com` (manifestul de actualizare semnat).
- Opțional: acces la `klacks-software.ch:7553` pentru pachetele de țară și plugin-urile lingvistice din marketplace.

## Memorie: de ce 8 GB și ce se întâmplă pe gazde mai mici

Klacks își rulează cele două modele de căutare (embedder și reranker) **local, în procesul** `klacks-api`. Ambele sesiuni ONNX rămân permanent în memorie — nu sunt descărcate după fiecare întrebare.

Măsurat pe gazda de producție a producătorului la 12.09.2026:

- Încărcarea de bază a procesului: aprox. 1'017 MB
- Embedder: aprox. 1'171 MB
- Reranker: aprox. 116 MB
- Suma: un platou de aproximativ **2'304 MB**
- La o limită de 2'560 MB, kernelul a oprit containerul la 2'471 MB (OOM).

De aceea, Compose-ul inclus stabilește **3'584M** și 3,0 CPU pentru `klacks-api`, cu descărcarea la inactivitate dezactivată. Calculat pentru întregul stack: 3'584M (api) + 2'048M (postgres) + 3 × 256M (ui, updater, proxy) = **6'400 MiB**; restul de la cei 8 GB rămâne pentru sistemul de operare și cache-ul de fișiere.

**Gazdă mai mică, de exemplu cu 3 GB pentru `klacks-api`:** setați în `.env` **ambele** rânduri următoare — niciodată rândul de memorie singur:

```bash
KLACKS_API_MEMORY_LIMIT=2560M
KLACKS_API_IDLE_UNLOAD_MINUTES=30
```

Descărcarea la inactivitate eliberează o sesiune după 30 de minute fără acces. Prețul: următoarea întrebare de după aceea o reîncarcă (aprox. 2,2–2,9 s pentru embedder, aprox. 1,1 s pentru reranker). Valorile între 1 și 5 sunt ridicate la 5; `0` înseamnă: niciodată descărcare.

## CPU: mai puține nuclee doar încetinesc, nu strică nimic

Căutarea funcționează și cu mai puține nuclee, dar devine mai lentă — reranker-ul este pasul cu cel mai mare efort de calcul. Măsurat: 2'994–3'163 ms pentru 25 de candidați la 3,0 CPU, față de 4'339–4'860 ms la 1,5 CPU, unde serviciul a petrecut în plus 7,15 s în regim limitat. Pentru o gazdă mai mică:

```bash
KLACKS_API_CPU_LIMIT=1.5
```

Cotele de CPU ale stack-ului însumează în mod intenționat 4,75 la 4 vCPU: o cotă este o limită superioară, nu o rezervare, iar serviciile nu ating niciodată vârful în același timp.

## Bine de știut

- **Parolele și cheile rămân stabile.** `POSTGRES_PASSWORD` este încorporată în volumul de date la prima pornire — o modificare ulterioară lasă baza de date orfană. `JWT_SECRET` semnează sesiunile; o modificare deconectează toți utilizatorii. Programul de instalare le păstrează pe ambele la fiecare rulare ulterioară.
- **`COMPOSE_PROJECT_NAME=klacks`** este fixat rigid, astfel încât gazda și serviciul de actualizare să indice același proiect Compose, indiferent de numele folderului. Nu-l mai modificați după instalare.
- **`KnowledgeIndex__WarmupEnabled=false` nu este o opțiune de memorie.** Mută doar construirea căutării de la pornire la prima solicitare de chat; în funcționarea de durată, sesiunile sunt la fel de prezente. Util doar dacă gazda eșuează la pornire din lipsă de memorie.
- **Mai multe instanțe API?** Atunci aveți nevoie de un backplane SignalR. Klacks nu livrează unul: puneți singuri la dispoziție un serviciu compatibil RESP (de exemplu Valkey — licențiat sub BSD-3 începând cu versiunea 7.4, spre deosebire de Redis) și activați upstream-ul sticky (`ip_hash`) pregătit în șablonul nginx. Fără backplane rulează exact o instanță `klacks-api`, ca în orice instalare de astăzi.
- **Profiluri de țară:** programul de instalare cunoaște 30 de profiluri: `ae`, `at`, `ch`, `cn`, `cz`, `de`, `dk`, `es`, `fi`, `fr`, `gb`, `gr`, `id`, `il`, `it`, `jp`, `kr`, `li`, `my`, `nl`, `no`, `pl`, `pt`, `ro`, `sa`, `se`, `th`, `tw`, `us`, `vn`. Un profil stabilește la prima pornire limba, țara/regiunea și fusul orar, calendarul de sărbători, weekendul și începutul săptămânii, limitele timpului de lucru, dreptul la concediu, sporurile, sistemul-țintă implicit al exportului salarial (pentru Elveția, de exemplu, `abaconnect-ch`), precum și șabloane pe domenii de activitate — pentru Spitex, de exemplu, șablonul de reguli de planificare „CH Spitex Standard”. Fără profil, Klacks pornește neutru, iar dumneavoastră configurați totul manual.

---

*Întrebări despre operare? [Comunitatea Klacks pe Discord](https://discord.gg/YRP8p2abVC).*
