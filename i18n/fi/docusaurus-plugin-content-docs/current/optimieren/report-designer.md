---
sidebar_position: 6
---

Report-Designerilla luotte omia tulostuspohjia — työvuorolistasta osoitelistaan — suoraan Klacksissa, ilman ulkoisia työkaluja.

## Näin se toimii

Raportti koostuu kolmesta osiosta, joita muokkaatte *Designer*-välilehdellä:

- **Otsikko (Header)** — tulostetaan jokaisen sivun yläreunaan. Siinä on kolme vyöhykettä (vasen, keskellä, oikea), jotka voivat sisältää tietokantakenttiä, vapaata tekstiä tai kuvia (esim. yrityksenne logon, ladattuna kuvanhallinnan kautta).
- **Runko (Body)** — sisältää yhden tai useamman datataulukon. Sarakkeet lisätään vetämällä ja pudottamalla kenttäluettelosta; myös järjestystä muutetaan vetämällä ja pudottamalla, ja leveys asetetaan prosenttikentällä saraketta kohden.
- **Alatunniste (Footer)** — tulostetaan jokaisen sivun alareunaan.

Jokainen taulukko on liitetty **tietolähteeseen**, jonka valitsette *Tietolähde*-välilehdellä: työvuorosuunnitelma (Schedule), osoitteet listana tai yksityiskohtaisina, poissaolot, työvuorot, ryhmät tai säiliömalli (Container Template). Tietolähde määrää, mitkä kentät ovat käytettävissä.

Muotoiluun on käytettävissä:
- **Muotoilu** solu- ja vapaatekstikohtaisesti: fontti, koko, lihavointi/kursivointi/alleviivaus, tekstin väri, tasaus.
- **Solureunukset** erikseen kullekin sivulle (ylä-/oikea-/ala-/vasen) viivatyylillä ja -värillä.
- **Taulukon alatunniste** SUM-kentillä: numeeriset sarakkeet lasketaan automaattisesti yhteen.
- **Vapaatekstirivit** ennen tai jälkeen datataulukoiden — esimerkiksi huomautuksia, ehtoja tai allekirjoituskenttiä varten.
- **Sivuasetukset** *Yleiset*-välilehdellä: pysty- tai vaakasuunta, paperikoko (A4, A3, B4/B5 JIS, Letter) ja sivun marginaalit millimetreinä.

## Hyvä tietää

- **Yhdistetyt kentät (Merged Fields):** valitun kentän työkalupalkin kautta voitte yhdistää useita kenttiä yhteen sarakkeeseen; erotin (pilkku, välilyönti, rivinvaihto, väliviiva) on määritettävissä.
- Tietolähteessä **Työvuorosuunnitelma** on kaksi lisäasetusta: *Yhdistä päivän merkinnät* (useampi saman päivän merkintä yhdelle riville) ja *Näytä koko jakso* (kaikki päivät, myös ilman merkintöjä).
- Taulukon alatunniste aktivoidaan valintaruudulla kyseisen taulukon alla; SUM-kentän merkintä voidaan näyttää tai piilottaa erikseen alatunnisteessa.

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu tunnuksilla `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
