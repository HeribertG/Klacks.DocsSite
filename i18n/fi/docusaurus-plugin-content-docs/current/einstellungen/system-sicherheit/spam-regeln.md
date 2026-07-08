---
sidebar_position: 7
---

# Roskapostisäännöt

Kohdassa Asetukset > Roskapostisäännöt määritetään suodatussäännöt, joiden avulla saapuvat sähköpostit luokitellaan automaattisesti roskapostiksi Postilaatikko-moduulissa — säännöt vaikuttavat sekä käynnissä olevaan uusien sähköpostien haku (IMAP-polling) että jälkikäteen tehtävään jo saapuneiden sähköpostien uudelleenarviointiin.

## Näin se toimii

**Säännön luominen:** Valitse säännön tyyppi — lähettäjä sisältää, lähettäjän verkkotunnus, aihe sisältää tai sisältö sisältää —, syötä tarkastettava kaava ja napsauta Lisää.

**Sääntöjen hallinta:** Kunkin säännön voi ottaa käyttöön tai poistaa käytöstä valintaruudulla poistamatta sitä, sekä poistaa pysyvästi roskakori-painikkeella.

## Hyvä tietää

- Käytöstä poistetut säännöt pysyvät tallennettuina, mutta eivät enää vaikuta uusiin tai uudelleenarvioitaviin sähköposteihin — hyödyllistä, kun haluat kokeilla säännön keskeyttämistä sen poistamisen sijaan.
- Klacks käyttää ERP-tilausten tuonnissa samaa postilaatikkoa kuin tavallinen sähköpostin Postilaatikko-moduuli (yhden postilaatikon arkkitehtuuri). Liian laajasti muotoiltu sääntö (esim. koko lähettäjän verkkotunnus) voi siksi teoriassa luokitella myös saapuvat ERP-tilaussähköpostit roskapostiksi — tarkista uudet säännöt tämän vuoksi huolellisesti ennen niiden käyttöönottoa.
- Käytä lähettäjän verkkotunnus -sääntöjä estääksesi kokonaisia ei-toivottuja lähettäjäorganisaatioita sen sijaan, että kirjaisit jokaisen yksittäisen osoitteen erillisenä lähettäjä sisältää -sääntönä.

---
*Kokeile suoraan: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu tunnuksilla `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
