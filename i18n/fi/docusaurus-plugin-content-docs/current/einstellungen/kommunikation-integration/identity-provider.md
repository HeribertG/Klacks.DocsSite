---
sidebar_position: 4
---

Kohdassa Asetukset > Identiteetintarjoaja yhdistät Klacksin ulkoiseen hakemistopalveluun — LDAP/Active Directory tai OAuth2/OpenID Connect — työntekijöiden automaattista tuontia ja/tai kirjautumisen hoitamista varten sen kautta.

## Näin se toimii

**LDAP/Active Directory:** Tallennat isännän, portin (389/636), SSL:n, Base DN:n, Bind DN:n, Bind-salasanan ja käyttäjäsuodattimen. Kytkin "Käytä asiakastuontiin" aktivoi automaattisen tuonnin: nimi, etunimi, titteli, yritys ja osoite haetaan hakemiston attribuuteista — OpenLDAP:issa ja Active Directoryssa osittain eri attribuuttinimillä (esim. `uid` vs. `sAMAccountName`, `street` vs. `streetAddress`). Nämä kenttäkohdistukset on määritetty kiinteästi taustajärjestelmään, eikä niitä voi muokata käyttöliittymän kautta.

**OAuth2/OpenID Connect:** Client-ID, Client-Secret, valinnaisesti Tenant-ID (Azure), valtuutus-, token- ja UserInfo-URL sekä scope-arvot — kirjautumista varten Googlella, Microsoftilla tai GitHubilla.

**Yhteyden testaus ja synkronointi:** LDAP/AD-tarjoajilla "Testaa yhteys" näyttää löydettyjen käyttäjien määrän sekä esimerkkikäyttäjänimet. Jos asiakastuonti on aktivoitu, "Synkronoi nyt" käynnistää manuaalisen täsmäytyksen; tulos (käsitelty/uusi/päivitetty/poistettu käytöstä) näkyy heti sen jälkeen sivulla ilmoituksena.

## Hyvä tietää

- Tämä sivu on käytettävissä **vain ylläpitäjille**, ei valvoja-roolille.
- Bind-salasana ja Client-Secret tallennetaan salattuina ja näytetään käyttöliittymässä vain peitettyinä (`***`); jos tallennat muuttamatta arvoa, olemassa oleva arvo säilyy.
- Pysyvää synkronointilokia (historia, virhehistoria) **ei** tällä hetkellä näytetä käyttöliittymässä — vain viimeisimmän manuaalisen ajon tulos.
- Henkilöitä, joita ei enää löydy hakemistosta, ei synkronoinnin yhteydessä poisteta, vaan he deaktivoituvat jäsenyytensä eroamispäivämäärän kautta; jos he ilmestyvät myöhemmin uudelleen, he aktivoituvat automaattisesti.
- Hakemistosta saatava ulkoinen tunniste (LDAP ObjectGUID tai vaihtoehtoisesti Distinguished Name) estää kaksoiskappaleet: jos sama tunniste löytyy uudessa synkronoinnissa, olemassa oleva henkilö päivitetään sen sijaan, että luotaisiin uusi.

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
