---
sidebar_position: 3
---
# Päivitykset ja palautus

Klacks päivittää itsensä — allekirjoitetuilla paketeilla, varmuuskopiolla ennen jokaista vaihetta ja automaattisella paluureitillä, jos jokin menee pieleen. Tämä sivu selittää, mitä tapahtuu ja miten voitte puuttua asiaan.

## Miten päivitys etenee

1. **Tunnistus.** API kysyy allekirjoitettua manifestia, jonka valmistaja julkaisee jokaisen julkaisun yhteydessä. Jos siellä on uudempi versio, päivitys katsotaan saataville.
2. **Varmuuskopiointi.** Päivityspalvelu luo tietokannasta tietovarmuuskopion. Jos uusi versio sisältää migraation, tämä varmuuskopio sidotaan kiinteästi päivitystoimintoon, ja se on myöhemmin valmiina paluureittiä varten.
3. **Lataus ja yhteinen aktivointi.** Palvelu lataa uudet imaget palveluille `klacks-api` **ja** `klacks-ui` ja kytkee molemmat käyttöön yhdessä — kaksi osaa toimivat samassa tahdissa, eivät koskaan eri versioina.
4. **Tarkistus.** Käyttöönkytkennän jälkeen palvelu kysyy syvää terveystarkistusta `/internal/health/deep`.
5. **Arviointi.** Jos uusi versio on terve, päivitys katsotaan onnistuneeksi. Jos ei, palvelu palauttaa **molemmat** osat automaattisesti edelliseen versioon ja tarkistaa uudelleen. Jos sekään ei onnistu, tila kirjataan epäonnistuneeksi, jotta näette sen.

## Mitä ”allekirjoitettu” tarkoittaa

Valmistaja allekirjoittaa jokaisen julkaisun, ja Klacksinne tarkistaa allekirjoituksen ennen kuin se hyväksyy paketin. Julkinen avain ja manifestin osoite ovat kiinteitä valmistajan arvoja tiedostossanne `.env`:

- `UPDATE_MANIFEST_BASE_URL` — kiinteästi valmistajan julkaisulähteeseen
- `UPDATE_SIGNATURE_PUBLIC_KEY` — sen on vastattava yksityistä avainta, jolla valmistaja allekirjoittaa

Näitä kahta arvoa **ei ole tarkoitettu muutettavaksi**. Joka vaihtaa ne, kumoaa tarkistuksen ja avaa juuri sen aukon, jonka allekirjoitus sulkee.

Manifestissa on muun muassa: kanava (`Stable` tai `Beta`), uusin versio, vähimmäisversio, josta suora päivitys on mahdollinen (`MinUpgradableFrom`), julkaisupäivä, sisältyykö tietokantamigraatio, artefaktit, allekirjoitus ja viittaus muutosluetteloon.

`klacks-api` ja `klacks-ui` on tiedostossa `.env` **lukittu tarkkaan versioon**, jotta ne eivät kehity huomaamatta erilleen. Päivityspalvelu itse ajetaan aina versiolla `latest` — se ei tarkoituksella ole allekirjoitetussa manifestissa ja vaihtaa vain apin ja uin.

## Asetukset käytössä

Hallinta-alueella kohdassa **Järjestelmä → Päivitykset**:

| Asetus | Vaikutus |
|---|---|
| **Ota automaattiset päivitykset käyttöön** | Päivitykset tunnistetaan ja asennetaan automaattisesti |
| **Vain ilmoita** | Päivitykset vain **tunnistetaan**, mutta niitä ei asenneta, ennen kuin käynnistätte asennuksen |
| **Huoltoikkuna** | Ajanjakso, jonka aikana automaattiset päivitykset saavat ajaa |

Nämä asetukset ovat tietokannassa ja ohittavat tiedoston `.env` aloitusarvot (`UPDATE_AUTO_ENABLED`, `UPDATE_NOTIFY_ONLY`), jotka pätevät vain ensimmäisessä käynnistyksessä.

## Palauttaminen manuaalisesti

Automaattisesti kenenkään ei tarvitse tässä puuttua asiaan — epäonnistuneen päivityksen palvelu palauttaa itse. Jos haluatte tietoisesti yhden askeleen taaksepäin:

1. Asettakaa tiedostossa `.env` `KLACKS_API_TAG` ja `KLACKS_UI_TAG` edelliseen versioon.
2. Aktivoikaa pino uudelleen: `docker compose up -d klacks-api klacks-ui`.
3. **Jos virheellinen versio on jo migroinut**, palauttakaa lisäksi sopiva varmuuskopio ajalta ennen päivitystä — ja huomioikaa tällöin kompastuskivi sivulla [Varmuuskopiointi ja palautus](../backup-und-wiederherstellung/): taulut, jotka uusi versio on luonut, säilyvät palautuksesta ja estävät seuraavan käynnistyksen.

## Hyvä tietää

- **Paluureitti ei ole hätäratkaisu vaan normaalitapaus.** Jokaisella päivitystoiminnolla on tila: onnistunut, palautettu tai paluureitti epäonnistunut. Palautettu päivitys on normaali, kirjattu toiminto — ei häiriötapaus.
- **Palautettu päivitys ei ole nollattu päivitys.** Palautus palauttaa version, ei tietojanne. Tietomuutokset, jotka teitte päivityksen ja paluureitin välillä, ovat peräisin varmuuskopion tilasta.
- **Voitte tarkistaa lokeista:** `docker compose logs klacks-updater` näyttää tunnistuksen, varmuuskopioinnin, käyttöönkytkennän ja paluureitin.

---

*Ylläpitokysymyksiä? [Klacks-yhteisö Discordissa](https://discord.gg/YRP8p2abVC).*
