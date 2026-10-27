---
sidebar_position: 4
---
# Vianmääritys

Kun Klacks ei tee sitä, mitä sen pitäisi, tie kulkee lähes aina kahden epäillyn palvelun lokien kautta — ja kysymyksen kautta, onko prosessi todella vielä käynnissä.

## Ensin: katso, mikä on käynnissä

```bash
docker compose ps
docker compose logs klacks-api
docker compose logs klacks-updater
```

`docker compose ps` näyttää, mitkä palvelut ovat käynnissä ja ovatko ne terveitä. `klacks-api` kirjoittaa tietokannan käynnistyksen, migraation ja täytön; `klacks-updater` kirjoittaa päivityksen tunnistuksen, varmuuskopioinnin, käyttöönkytkennän ja paluureitin.

## Vanha loki ei ole todiste

Ansa, joka on jo maksanut aikaa: lokitiedosto voi olla peräisin **aiemmasta** käynnistyksestä. Joka löytää siitä virheen ja pitää sitä nykyisenä, etsii väärästä paikasta.

Tarkistakaa siksi, **kasvaako** loki vielä:

```bash
wc -c klacks-api.log; sleep 10; wc -c klacks-api.log
```

Jos koko pysyy samana (kasvu 0 tavua), prosessi ei enää kirjoita — se ei ole käynnissä riippumatta siitä, mitä lokissa lukee. Vasta virheen tuore toisto lokilla, joka todistettavasti on mukana, on kestävä perusta.

## Yleiset viestit ja mitä ne tarkoittavat

| Viesti | Merkitys | Mitä tehdä |
|---|---|---|
| `no matching manifest for linux/amd64` | Imagea ei ole arkkitehtuurillenne | Valmistajan on julkaistava image usealle arkkitehtuurille (amd64 **ja** arm64) |
| `pull access denied` | Pakettiarkiston paketti on yksityinen | Toistakaa asennus tunnuksilla: `-GhcrUser`/`-GhcrToken` Windowsissa, `GHCR_USER`/`GHCR_TOKEN` Linuxissa |
| `errorCode: SETUP_REQUIRED`, HTTP `403` | Adminin asennusportti on aktiivinen | Kirjautukaa tunnuksella `admin@test.com` ja luokaa oma Admin-tili — katso [Asennus ja Playground](../../erste-schritte/installation-und-playground/) |
| Kontti päättyy ilman managed-stacktracea poistumiskoodilla `-1` (`0xffffffff`) | **Natiivi** kaatuminen C/C++-kirjastossa, jota mikään C#-`try/catch` ei voi napata | Katsokaa kontin tulostetta **stderr**-kanavalla — varsinainen laukaisija on siellä, ei sovelluslokissa |
| Kontti päättyy, vaikka lokissa ei ole sovellusvirhettä | Ydin on päättänyt prosessin muistin loppumisen vuoksi (OOM) | Tarkistakaa muistirajat — katso [Järjestelmävaatimukset](../systemvoraussetzungen/) |
| `42P07: relation "…" already exists` epäonnistuneen päivityksen jälkeen | Migraatio on luonut tauluja, joita palautus ei poistanut | Katso kompastuskivi kohdassa [Varmuuskopiointi ja palautus](../backup-und-wiederherstellung/) |
| API kuolee sekunteja `Application started` -viestin jälkeen | Käynnistys onnistuu, kaatuminen tulee sen jälkeen — tyypillistä natiivikirjastolle | Sama jälki kuin poistumiskoodin `-1` kohdalla: tarkistakaa stderr, älkää sovellusloki |

Koneella, jossa on **Windows on ARM** (Snapdragon X), paikallisesti toimiva haku on aiemmin kaatunut juuri tällaiseen natiivikirjastoon: API ilmoitti `Application started`, mutta oli sekunteja myöhemmin käyttöliittymän tavoittamattomissa. Jos näette tämän kuvion ARM-Windows-isännällä, ensimmäinen katse kohdistuu konsolitulosteeseen (ei tiedostolokiin) — siellä näkyi asianomaisen suoritintunnistuksen viesti.

## Miten rajaatte virheen

1. **Mitä tarkalleen teitte**, ja mitä odotitte? Viimeinen vaihe ennen virhettä on puoli vastausta.
2. **Mitkä palvelut ovat käynnissä?** `docker compose ps`.
3. **Kasvaako loki vielä?** Katso yllä.
4. **Mitä stderrissä oli viimeksi?** Natiiveissa kaatumisissa ainoa lähde.
5. **Mikä on muuttunut viimeksi?** Päivitys, asetus, uusi sertifikaatti.

## Hyvä tietää

- **Aikaisin käynnistynyt ja terve palvelu näyttävät lokissa samalta.** Jos käyttöliittymään ei tule mitään, tarkistakaa, onko prosessi ylipäätään vielä käynnissä — ei vain sitä, mitä se kirjoitti viimeksi.
- **Kaatumisessa ilman sovellusvirhettä muisti on ensimmäinen epäilty**, erityisesti päivityksen jälkeen uusilla hakumalleilla.
- **Hyödyllisiä tietoja ilmoitukseen:** kyseessä oleva versio (`KLACKS_API_TAG`/`KLACKS_UI_TAG` tiedostosta `.env`), `docker compose ps` -tuloste, molempien lokien viimeiset rivit ja viimeinen vaihe ennen virhettä. Olkaa hyvä ja **ilman** salasanoja ja avaimia tiedostosta `.env`.
- Kysykää epäselvissä tapauksissa yhteisöltä: [Klacks-yhteisö Discordissa](https://discord.gg/YRP8p2abVC).

---

*Ylläpitokysymyksiä? [Klacks-yhteisö Discordissa](https://discord.gg/YRP8p2abVC).*
