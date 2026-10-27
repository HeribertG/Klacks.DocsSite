---
sidebar_position: 1
---
# Järjestelmävaatimukset ja rakenne

Klacks toimii Docker-pinona omalla palvelimellanne. Tämä sivu kuvaa, mitkä palvelut käynnistyvät ja miten isäntä mitoitetaan — mukaan lukien mittausarvot, joihin suositus perustuu.

## Rakenne: viisi palvelua

On-Premise-paketti käynnistää yksinomaan sen, mitä käyttö vaatii:

| Palvelu | Image | Tehtävä |
|---|---|---|
| `klacks-postgres` | `pgvector/pgvector:pg17` | Tietokanta; vektorilaajennus sisältyy jo |
| `klacks-api` | `ghcr.io/heribertg/klacks-api` | Backend; migroi ja täyttää tietokannan käynnistyksessä |
| `klacks-ui` | `ghcr.io/heribertg/klacks-ui` | Angular-käyttöliittymä, jaellaan nginxin kautta |
| `klacks-updater` | `ghcr.io/heribertg/klacks-updater` | asentaa allekirjoitetut päivitykset (api ja ui yhdessä) |
| `klacks-proxy` | `nginx:alpine` | TLS-päätös ja reverse proxy |

Valmistajan sisäiset palvelut (kehityksen tietovarasto, markkinointi, markkinapaikka, pgAdmin, certbot, Blazor-käyttöliittymä) eivät tarkoituksella sisälly pakettiin. Ylläpitäjänä näette siis vain oman pinonne.

## Mitä isännän on tarjottava

- **8 Gt RAM-muistia ja 4 vCPU:ta** vähimmäisvaatimuksena (katso laskelma alla).
- Docker Desktop (Windows/macOS) tai Docker Engine ja Compose v2 (Linux), **amd64 tai arm64**.
- Vapaat portit **80 ja 443** — ohitettavissa muuttujilla `HTTP_PORT` ja `HTTPS_PORT`.
- **Lähtevä** HTTPS-yhteys osoitteisiin `ghcr.io` (imaget) ja `github.com` (allekirjoitettu päivitysmanifesti).
- Valinnainen: yhteys osoitteeseen `klacks-software.ch:7553` maapaketteja ja kielilaajennuksia varten markkinapaikalta.

## Muisti: miksi 8 Gt, ja mitä pienemmillä isännillä tapahtuu

Klacks ajaa kaksi hakumalliaan (embedder ja reranker) **paikallisesti prosessissa** `klacks-api`. Molemmat ONNX-istunnot pysyvät jatkuvasti muistissa — niitä ei pureta jokaisen kysymyksen jälkeen.

Mitattu valmistajan tuotantoisännällä 12.09.2026:

- Prosessin peruskuorma: noin 1'017 Mt
- Embedder: noin 1'171 Mt
- Reranker: noin 116 Mt
- Summa: noin **2'304 Mt** tasanne
- 2'560 Mt rajalla ydin päätti kontin 2'471 Mt:n kohdalla (OOM).

Siksi mukana toimitettu Compose asettaa `klacks-api`:lle **3'584M** ja 3,0 CPU:ta, kun joutoajan purku on pois päältä. Koko pinolle laskettuna: 3'584M (api) + 2'048M (postgres) + 3 × 256M (ui, updater, proxy) = **6'400 MiB**, 8 Gt:sta jäljelle jäävä osuus jää käyttöjärjestelmälle ja tiedostovälimuistille.

**Pienempi isäntä, noin 3 Gt `klacks-api`:lle:** Asettakaa tiedostoon `.env` **molemmat** seuraavat rivit — älkää koskaan pelkkää muistiriviä:

```bash
KLACKS_API_MEMORY_LIMIT=2560M
KLACKS_API_IDLE_UNLOAD_MINUTES=30
```

Joutoajan purku vapauttaa istunnon 30 minuutin käyttämättömyyden jälkeen. Hinta: seuraava kysymys sen jälkeen lataa sen uudelleen (noin 2,2–2,9 s embedderille, noin 1,1 s rerankerille). Arvot väliltä 1–5 nostetaan arvoon 5, `0` tarkoittaa: ei koskaan purkua.

## CPU: vähemmän ytimiä vain hidastaa, ei rikkoa

Haku toimii myös vähemmillä ytimillä, mutta hidastuu — reranker on laskentaintensiivinen vaihe. Mitattu: 2'994–3'163 ms 25 ehdokkaalle 3,0 CPU:lla verrattuna 4'339–4'860 ms:iin 1,5 CPU:lla, jolloin palvelu vietti lisäksi 7,15 s kuristettuna. Pienempää isäntää varten:

```bash
KLACKS_API_CPU_LIMIT=1.5
```

Pinon CPU-kiintiöt summautuvat tarkoituksella arvoon 4,75 4 vCPU:lla: kiintiö on yläraja, ei varaus, eivätkä palvelut huippaa koskaan samanaikaisesti.

## Hyvä tietää

- **Salasanat ja avaimet pysyvät vakaina.** `POSTGRES_PASSWORD` on poltettu data-volyymiin ensimmäisessä käynnistyksessä — myöhempi muutos jättää tietokannan orvoksi. `JWT_SECRET` allekirjoittaa istunnot; muutos kirjaa kaikki käyttäjät ulos. Asennusohjelma säilyttää molemmat jokaisella uudella ajokerralla.
- **`COMPOSE_PROJECT_NAME=klacks`** on kiinteästi kytketty, jotta isäntä ja päivityspalvelu osoittavat kansion nimestä riippumatta samaan Compose-projektiin. Älkää muuttako sitä asennuksen jälkeen.
- **`KnowledgeIndex__WarmupEnabled=false` ei ole muistivaihtoehto.** Se vain siirtää haun rakentamisen käynnistyksestä ensimmäiseen chat-pyyntöön; jatkuvassa käytössä istunnot ovat yhtä lailla läsnä. Hyödyllinen vain, jos isäntä kaatuu muistin puutteeseen käynnistyksessä.
- **Useampi kuin yksi API-instanssi?** Silloin tarvitsette SignalR-backplanen. Klacks ei toimita sellaista: ottakaa itse käyttöön RESP-yhteensopiva palvelu (esimerkiksi Valkey — versiosta 7.4 alkaen BSD-3-lisenssillä, toisin kuin Redis) ja kytkekää käyttöön nginx-mallipohjaan valmisteltu sticky-upstream (`ip_hash`). Ilman backplanea ajetaan tasan yksi `klacks-api`-instanssi, kuten jokaisessa nykyisessä asennuksessa.
- **Maaprofiilit:** Asennusohjelma tuntee 30 profiilia: `ae`, `at`, `ch`, `cn`, `cz`, `de`, `dk`, `es`, `fi`, `fr`, `gb`, `gr`, `id`, `il`, `it`, `jp`, `kr`, `li`, `my`, `nl`, `no`, `pl`, `pt`, `ro`, `sa`, `se`, `th`, `tw`, `us`, `vn`. Profiili asettaa ensimmäisessä käynnistyksessä kielen, maan/alueen ja aikavyöhykkeen, pyhäpäiväkalenterin, viikonlopun ja viikon alun, työaikarajat, lomaoikeuden, lisät, oletusarvoisen palkkaviennin kohdejärjestelmän (Sveitsille esimerkiksi `abaconnect-ch`) sekä toimialamallit — Spitexille esimerkiksi suunnittelusääntömallin ”CH Spitex Standard”. Ilman profiilia Klacks käynnistyy neutraalina ja määritätte kaiken käsin.

---

*Ylläpitokysymyksiä? [Klacks-yhteisö Discordissa](https://discord.gg/YRP8p2abVC).*
