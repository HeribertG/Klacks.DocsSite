---
sidebar_position: 4
---

# Päivitykset

Kohdassa Asetukset > Päivitykset näet tällä hetkellä asennetun ja uusimman saatavilla olevan Klacks-version, hallitset automaattisten päivitysten toimintaa ja käynnistät tarvittaessa manuaalisesti päivityksen tai palautuksen edelliseen versioon.

## Näin se toimii

**Tila:** Kortti näyttää nykyisen version, onko uudempi versio saatavilla, sekä käynnissä olevan tai viimeksi suoritetun päivitystoiminnon tilan.

**Päivityksen käynnistäminen tai palauttaminen:** "Asenna nyt" käynnistää saatavilla olevan päivityksen manuaalisesti; "Kumoa" peruuttaa viimeisimmän onnistuneen päivitystoiminnon. Molemmat toiminnot ovat lukittuina niin kauan kuin toinen toiminto on jo käynnissä.

**Automatiikan määrittäminen:**
- **Ota automaattiset päivitykset käyttöön** kytkee automaattisen päivitystarkistuksen ja -toteutuksen päälle tai pois.
- **Vain ilmoita** ei käynnistä automaattista päivitystä, mutta ilmoittaa, kun uusi versio on saatavilla.
- **Kanava** valitsee päivityslähteeksi joko `Stable` tai `Beta`.
- **Tarkistusväli** (tunteina) ja **huoltoikkuna** (alku-/loppuaika) määrittävät, kuinka usein ja missä aikaikkunassa tarkistus tai asennus tehdään.
- **Säilytettävien varmuuskopioiden määrä** määrittää, kuinka monta varmuuskopiota säilytetään ennen migraatiota, ennen kuin vanhemmat poistetaan automaattisesti.

**Historia:** Taulukko listaa viimeisimmät päivitystoiminnot tyypin, kohdeversion, tilan ja pyyntöajankohdan mukaan.

## Hyvä tietää

- Ennen jokaista migraatiota Klacks luo automaattisesti varmuuskopion — ilman varmuuskopiota migraatiota ei suoriteta.
- Jos päivityksen jälkeinen terveystarkistus epäonnistuu, Klacks palauttaa automaattisesti edellisen version (varmuuskopion palautus → vanhan version aktivointi → uudelleentarkistus); vain jos tämä palautus itsessään epäonnistuu, tarvitaan manuaalista puuttumista.
- Manuaalinen palautus palauttaa täsmällisesti viimeisimpään onnistuneeseen toimintoon liittyvän varmuuskopion ja aktivoi sen lähtöversion — ei vain "yhtä versiota taaksepäin".
- Päivitys ja palautus ovat toimintoja, jotka on rajattu vain Adminille.

---
*Kokeile suoraan: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu tunnuksilla `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
