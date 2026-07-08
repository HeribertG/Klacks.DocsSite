---
sidebar_position: 4
---

Ikuisuuskalenteri laskee pyhäpäivät automaattisesti jokaiselle vuodelle — määrittelette säännöt kerran, ja Klacks tuntee pyhäpäivät kaikille tuleville vuosille.

## Näin se toimii

Jokainen pyhäpäivä kuvataan lyhyellä säännöllä. Perustyyppejä on kaksi:

- **Kiinteät päivämäärät** muodossa `KK/PP`: `01/01` on uudenvuodenpäivä, `08/01` Sveitsin kansallispäivä, `12/25` joulupäivä.
- **Pääsiäiseen sidotut päivämäärät** muodossa `EASTER+XX` tai `EASTER-XX`: pääsiäispäivä lasketaan automaattisesti Gaussin pääsiäiskaavalla, ja pyhäpäivä määritellään etäisyytenä siitä. Esimerkkejä: `EASTER-02` = pitkäperjantai, `EASTER+01` = toinen pääsiäispäivä, `EASTER+39` = helatorstai, `EASTER+50` = helluntaimaanantai, `EASTER+60` = Corpus Christi.

Lisäksi on **kiinteät päivämäärät viikonpäivän siirrolla** (`KK/PP+XX+VV` tai `KK/PP+XX-VV`) pyhäpäiville kuten "marraskuun ensimmäinen torstai" (`11/01+00+TH`) tai "toukokuun viimeinen maanantai" (`05/25+00-MO`).

**Alisäännöillä (SubRules)** siirrätte pyhäpäivän automaattisesti, jos se osuu tietylle viikonpäivälle — esim. `SA+2;SU+1`: jos päivä osuu lauantaille tai sunnuntaille, se siirtyy maanantaihin. Useampi sääntö erotetaan `;`-merkillä.

Kutakin sääntöä kohden tallennatte lisäksi nimen ja kuvauksen (monikielisesti), maan ja kantonin/osavaltion sekä valintaruudut **Lakisääteinen pyhäpäivä** ja **Palkallinen**.

## Hyvä tietää

- Viikonpäivien lyhenteet ovat englanninkielisiä: `SU`, `MO`, `TU`, `WE`, `TH`, `FR`, `SA`.
- Alisäännöt on tarkoitettu ennen kaikkea siirtämään viikonlopulle osuvat pyhäpäivät seuraavalle arkipäivälle.
- Valintaruutu **Palkallinen** on merkityksellinen palkanlaskennan kannalta.
- Maan ja kantonin/osavaltion kautta hallitsette alueellisia eroja — esimerkiksi pitkäperjantai ei ole Sveitsissä pyhäpäivä kaikissa kantoneissa (poikkeukset: VS, TI).
- Valmiiksi asennettuja maiden ja Sveitsin kantonien kalenteripaketteja ei voi poistaa; itse luomanne kalenterivalinnat voitte poistaa milloin tahansa.

![Pyhäpäiväsäännöt Klacksissa](/img/app-calendar-de.png)

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu tunnuksilla `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
