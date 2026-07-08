---
sidebar_position: 3
---

# Tietojen säilytys

Kohdassa Asetukset > Tietojen säilytys määritetään, kuinka kauan poistetut tietueet — työntekijät, osoitteet, ryhmät, palvelut, työajat, poissaolot, tauot ja muut — säilyvät järjestelmässä ennen kuin ne poistetaan lopullisesti.

## Näin se toimii

**Kaksivaiheinen poisto:** Kun tietue poistetaan Klacksissa, se merkitään aluksi vain soft delete -merkinnällä (merkitään poistetuksi, mutta se on fyysisesti yhä olemassa). Vasta tässä asetetun määräajan umpeuduttua päivittäin ajettava taustapalvelu poistaa poistetuiksi merkityt rivit **fyysisesti ja peruuttamattomasti** tietokannasta — kaikkien asiaan liittyvien taulujen osalta, ei vain yhdestä yksittäisestä osa-alueesta.

**Säilytysajan asettaminen:** Syöttökenttä hyväksyy arvoja väliltä 30–36 500 päivää (noin 1 kuukaudesta 100 vuoteen); tämän lisäksi Klacks näyttää määräajan myös vuosina/kuukausina. Oletusarvo on 3650 päivää (10 vuotta).

## Hyvä tietää

- Määräajan lyhentäminen vaikuttaa myös jo aiemmin poistettuihin tietueisiin: kaikki uutta määräaikaa vanhempi poistetaan taustapalvelun seuraavalla ajokerralla — tarkista ennen lyhentämistä, että tämä on tarkoituksenmukaista.
- Fyysinen poisto on lopullinen — sen jälkeen tietoja ei voi palauttaa, ei edes tuen kautta.
- Tämä asetus on tietosuojaselosteessa kuvattujen säilytysaikojen tekninen perusta; se koskee globaalisti kaikkia soft delete -kelpoisia tietotyyppejä eikä sitä voi määrittää moduulikohtaisesti.

---
*Kokeile suoraan: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu tunnuksilla `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
