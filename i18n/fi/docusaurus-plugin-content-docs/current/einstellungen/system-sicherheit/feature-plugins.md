---
sidebar_position: 5
---

# Ominaisuuslisäosat

Ominaisuuslisäosat (feature-plugins) laajentavat Klacksia valinnaisilla toiminnallisuusalueilla, jotka eivät kuulu ydintuotteeseen — esimerkiksi Messaging (lähetys ja vastaanotto Telegramin, Slackin, Viberin, LINEn, Microsoft Teamsin, tekstiviestien, Signalin, Threeman, KakaoTalkin, WeChatin ja Zalon kautta) tai Floor Plan (visuaalinen tilasuunnittelueditori työpistemerkinnöillä ja vuorojen kohdistuksella).

## Näin se toimii

**Asennettujen lisäosien hallinta:** Kohdassa Asetukset > Ominaisuuslisäosat näet luettelon jo asennetuista lisäosista. Kytkimellä voit ottaa lisäosan käyttöön tai poistaa sen käytöstä rivikohtaisesti (käytössä/ei käytössä) ilman, että se poistuu asennuksesta, tai poistaa sen kokonaan Poista asennus -toiminnolla.

**Uusien lisäosien etsiminen:** Suurennuslasi-painike avaa Marketplace-ikkunan, jossa voit etsiä muita saatavilla olevia lisäosia ja asentaa ne suoraan.

## Hyvä tietää

- Käytöstä poistettu lisäosa pysyy asennettuna, mutta se on lukittu kaikilta käyttäjiltä: siihen liittyvät sivut eivät ole saavutettavissa ja siihen liittyvät API-päätepisteet palauttavat 404-vastauksen, ikään kuin niitä ei olisi olemassa.
- Käyttöönoton/käytöstä poiston tai asennuksen/asennuksen poiston jälkeen Klacks lataa käännökset automaattisesti uudelleen, jotta uudet lisäosatekstit näkyvät heti ilman sivun uudelleenlatausta.
- Jotkin lisäosat tuovat mukanaan omia asetuskorttejaan (esim. Messaging-palveluntarjoajan määritykset) — nämä tulevat näkyviin vasta asennuksen jälkeen muualla asetuksissa.

---
*Kokeile suoraan: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu tunnuksilla `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
