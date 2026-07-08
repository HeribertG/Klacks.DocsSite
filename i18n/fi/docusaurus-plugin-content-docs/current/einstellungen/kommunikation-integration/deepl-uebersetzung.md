---
sidebar_position: 3
---

Kohdassa Asetukset > DeepL tallennat DeepL-API-avaimen, jonka avulla Klacks voi kääntää tekstejä automaattisesti — tällä hetkellä ennen kaikkea saapuvia sähköposteja saapuneet-kansiossa.

## Näin se toimii

**API-avain:** Yksi ainoa kenttä ottaa vastaan DeepL-API-avaimen (muoto `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx` ilmaiselle Free-API:lle tai ilman `:fx`-päätettä maksulliselle Pro-API:lle). Klacks tunnistaa `:fx`-päätteestä automaattisesti, kumpaa kahdesta DeepL-API-osoitteesta käytetään — erillistä vaihtoa Freen ja Pron välillä ei tarvita. Tilin ja itse avaimen saat osoitteesta deepl.com/pro-api.

**Käyttö:** "Saapuneet"-kansiossa jokainen sähköposti voidaan kääntää käännössymbolista nykyiseen käyttöliittymän kieleen; alkuperäistä ja käännöstä voi verrata vaihtokytkimellä. Ilman tallennettua avainta tämä toiminto ei ole käytettävissä.

## Hyvä tietää

- Tämä asetus on globaali koko asennukselle — käyttäjäkohtaista avainta ei ole.
- Tällä sivulla ei ole erillistä "Testaa"-painiketta; se, toimiiko avain, näkyy ensimmäisessä käännösyrityksessä saapuneissa.
- Jos avain on virheellinen tai vanhentunut, Klacks tunnistaa sen DeepL:n vastauksesta (todennusvirhe) ja ilmoittaa siitä sen sijaan, että näyttäisi tyhjän tai virheellisen käännöksen.
- Avain tallennetaan salattuna ja esitetään lomakkeessa peitettynä.

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
