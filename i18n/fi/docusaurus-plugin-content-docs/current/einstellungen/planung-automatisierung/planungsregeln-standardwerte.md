---
sidebar_position: 1
---

Kohdassa Asetukset > Suunnittelusäännöt (oletusarvot) määrität arvot, jotka esitäytetään automaattisesti uutta sopimusta tai uutta suunnittelusääntöä luotaessa.

## Miten se toimii

Sivu kokoaa useita esitäyttöryhmiä:

- **Työtunnit:** Päivittäiset työtunnit (tavoiteaika), ylityörajaus (t/viikko), taatut, minimi- ja maksimikuukausitunnit sekä kokoaikaisen työntekijän tuntimäärä.
- **Suunnittelusääntöjen raja-arvot:** Maks. työpäivät, min. lepopäivät kahden työjakson välillä, min. vapaatunnit kahden työpäivän välillä, maks. optimaalinen väli vuorojen välillä, maks. päivä-/viikkotunnit ja maks. peräkkäiset työpäivät — samat suureet, jotka määrittää myös yksittäinen suunnittelusääntö.
- **Lisät:** Yö-, pyhäpäivä-, lauantai- ja sunnuntailisä prosentteina.
- **Oletustyöpäivät ja viikonloppu:** Mitkä viikonpäivät lasketaan työpäiviksi, tehdäänkö vuorotyötä (aamu-/ilta-/yövuorot), mitkä päivät lasketaan viikonlopuksi ja minä viikonpäivänä viikko alkaa.
- **Suunnittelukomennot (avainsanat):** Tekstikomennot `FREE`, `EARLY`, `LATE`, `NIGHT` sekä niiden kielteiset vastineet `-FREE`, `-EARLY`, `-LATE`, `-NIGHT` ovat täällä muokattavissa. Kun henkilö kirjoittaa nämä sanat suoraan päivän soluun työvuorolistassa, Klacks ei tulkitse sitä muistiinpanoksi vaan toiveeksi: `FREE` tarkoittaa "älä sijoita minua tähän päivään, jos mahdollista", `EARLY`/`LATE`/`NIGHT` suosivat tai pakottavat tietyn vuorotyypin, kielteiset muodot sulkevat vastaavan vaihtoehdon pois. Sekä automaattinen suunnittelu että Harmonizer ottavat nämä toiveet huomioon ohjaavana lähtökohtana.

## Hyvä tietää

- Tämä sivu ylläpitää **yleisiä oletusarvoja** — muutokset vaikuttavat vain **uusiin** luotaviin sopimuksiin tai suunnittelusääntöihin, eivät takautuvasti jo olemassa oleviin.
- Suunnittelusääntöjen raja-arvot ovat täällä identtiset niiden kanssa, jotka muutoin asetat sopimuskohtaisesti — täällä määrität vain lähtöarvon, jonka uusi sopimus saa.
- Suunnittelukomennot on oletuksena piilotettu työvuorolistasta, ja ne voi tuoda näkyviin työkalurivin omalla kuvakkeella.

---
*Kokeile suoraan: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu tunnuksilla `admin@test.com` / `P@ssw0rt1`, data nollataan päivittäin.*
