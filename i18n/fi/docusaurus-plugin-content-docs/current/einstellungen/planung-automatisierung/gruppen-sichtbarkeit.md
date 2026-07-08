---
sidebar_position: 5
---

Kohdassa Asetukset > Ryhmien näkyvyys käyttäjittäin määrität, mitä ryhmiä — ja siten mitä niihin liittyviä tietoja — yksittäinen käyttäjä saa nähdä.

## Miten se toimii

Luettelo näyttää kaikki käyttäjät nimineen sekä heille määritettyjen (näkyvien) juuriryhmien lukumäärän. Numeroa napsauttamalla avautuu lomake, jossa on valintaruutulista kaikista juuriryhmistä; täällä merkitset, mitkä ryhmät kyseinen käyttäjä saa nähdä. Kun juuriryhmä vapautetaan näkyviin, se koskee automaattisesti myös kaikkia sen aliryhmiä.

Pääkäyttäjät on vapautettu tästä rajoituksesta: heidän kohdallaan painike on poistettu käytöstä, ja näytetty luku vastaa aina kaikkien juuriryhmien kokonaismäärää — pääkäyttäjät näkevät periaatteessa kaiken.

## Hyvä tietää

- Jos tavallisella (ei-pääkäyttäjä) käyttäjällä ei ole yhtään määritystä, "0 määritettyä ryhmää" tarkoittaa: tämä käyttäjä ei näe ryhmärajatuilla alueilla (esim. kojelauta, asiakasluettelo) tällä hetkellä **mitään** — kyse ei ole virheestä, vaan puuttuvan määrityksen suorasta seurauksesta.
- Poikkeus: jos järjestelmässä ei tällä hetkellä ole **lainkaan** ryhmiä, kaikki käyttäjät näkevät kaiken — asennuksissa ilman ryhmärakennetta tätä asetusta ei siis tarvitse ylläpitää.
- Luo ensin ryhmärakenne perustietojen alla, ennen kuin teet määrityksiä täällä — ilman olemassa olevia ryhmiä täällä ei ole mitään ruksittavaa.
- Tämä asetus ohjaa datan **näkyvyyttä**, ei roolin perusluonteisia **oikeuksia** — roolit/oikeudet hallitaan tästä riippumatta erikseen.

---
*Kokeile suoraan: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu tunnuksilla `admin@test.com` / `P@ssw0rt1`, data nollataan päivittäin.*
