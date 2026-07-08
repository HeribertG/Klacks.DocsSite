---
sidebar_position: 5
---

# Mallin yhteystesti

Kaikki kielimallit eivät sovellu Klacksylle — sen täytyy pystyä luotettavasti tuottamaan jäsenneltyjä funktiokutsuja proosan sijaan. Kohdassa Asetukset > Klacksyn mallitarkistus Klacks testaa tämän automaattisesti kaikille määritetyille malleille.

## Näin se toimii

**Testi:** Painikkeen "Etsi parhaat mallit" napautus lähettää jokaiselle määritetylle mallille (myös pois käytöstä oleville) saman pienen testitehtävän: "Luo uusi työntekijä nimeltä Anna Müller." Mallin tulee vastata tähän sopivalla jäsennellyllä funktiokutsulla ja oikeilla nimiparametreilla — ei tekstivastauksella. Lisäksi kontekstikkunan on oltava vähintään 32 000 tokenia, jotta Klacksyn järjestelmäkehote ja kyvyt mahtuvat siihen. Jokaisella testillä on 30 sekunnin aikaraja.

**Tulos:** Mallit, jotka täyttävät molemmat kriteerit, katsotaan "soveltuviksi" ja aktivoidaan automaattisesti; soveltumattomat mallit poistetaan käytöstä. Tuloslista on lajiteltu ensin soveltuvuuden, sitten funktiokutsukyvyn, kustannusten, viiveen ja kontekstikkunan mukaan.

**Oletusmallin asettaminen:** Kohdasta "Aseta oletukseksi" voit valita suoraan tuloslistasta, mitä mallia Klacksy käyttää jatkossa oletuksena. Ilman omaa valintaa Klacks asettaa parhaiten soveltuvan mallin automaattisesti oletukseksi.

## Hyvä tietää

- Testi tarkistaa kaikki tallennetut mallit, ei vain käytössä olevia — myös aiemmin pois käytöstä olevat mallit voidaan tämän kautta aktivoida, jos ne läpäisevät testin.
- Läpäisty testi ei ole kustannussuoja: kalliit mutta soveltuvat mallit aktivoidaan myös. Kustannukset per 1000 tokenia näkyvät tuloslistassa.
- Tämä testi on erityisesti suunniteltu funktiokutsuille ja toimintakyvylle, ja se on riippumaton kielasetusten mallitarkistuksesta, jossa riittää matalampi kontekstikkuna pelkkää transkription siistimistä varten.

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
