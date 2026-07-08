---
sidebar_position: 3
---

Osoite- ja henkilötietojen hallinta on perustietojesi ydin: henkilöstö, asiakkaat sekä ulkopuoliset henkilöt osoitteineen, yhteystietoineen, sopimuksineen, ryhmäjäsenyyksineen ja pätevyyksineen — käytettävissä navigoinnin henkilö-kuvakkeen kautta.

## Näin se toimii

**Henkilöstön luominen:** Pakolliset kentät ovat etunimi, sukunimi ja sukupuoli (nainen/mies/muu/oikeushenkilö). Valinnaisesti voit kirjata syntymäajan, sähköpostin, puhelinnumeron, osoitteen (katu, postinumero, paikkakunta, kantoni, maa) sekä ryhmän/osaston. Vaihtoehtoisesti voit antaa luomisen Klacksy-avustajan hoidettavaksi («luo työntekijä…»).

**Tila:** Tila määräytyy automaattisesti jäsenyyden aloitus- ja päättymispäivämäärän perusteella — erillistä manuaalista tilakenttää ei ole. Erotetaan *Aktiiviset* (jäsenyys voimassa juuri nyt), *Entiset* (päättymispäivä on menneisyydessä) ja *Tulevat* (aloituspäivä on vielä edessä).

**Ryhmät ja osastot:** Henkilöstö voidaan liittää ryhmiin. Rakenne on hierarkkinen (esim. `Klacks AG > IT > Kehitys`), useaan ryhmään kuuluminen on sallittua, ja käyttöoikeuksia voidaan hallita ryhmätasolla.

**Sopimukset:** Jokaisella henkilöllä voi olla useita sopimuksia, esimerkiksi työajan muuttuessa. Sopimusmallit itsessään ovat vapaasti määriteltävissä: Asetukset > Sopimukset -kohdassa luot omat sopimukset nimineen, työajan prosenttiosuuksineen, tavoite-/enimmäis-/vähimmäistunteineen, lisineen (yö-, sunnuntai- ja pyhäpäivälisät) ja maksuväleineen; jokaiselle sopimukselle voidaan lisäksi liittää oma pyhäpäiväkalenteri, mikä mahdollistaa esimerkiksi kantonikohtaisesti vaihtelevien pyhäpäivien mallintamisen. Jokainen sopimus on voimassa joko määräajan tai toistaiseksi.

**Tuonti:** Perustietojen CSV-tuontia ei ole. Olemassa olevat hakemistot otetaan käyttöön automaattisesti LDAP-/Active Directory -synkronoinnilla identiteetintarjoajan kautta; yksittäiset henkilöt luodaan manuaalisesti tai Klacksyn avulla.

**Haku ja suodatus:** Vapaatekstihaku löytää henkilöt nimen, etunimen, yrityksen tai henkilönumeron sekä puhelinnumeron/postinumeron perusteella; lisäksi voit suodattaa kantonin, tilan (Aktiiviset/Entiset/Tulevat) ja ryhmän mukaan.

## Hyvä tietää

- Vain *Aktiiviset* ovat suunniteltavissa — tarkista jäsenyyden aloitus-/päättymispäivä, jos joku ei näy työvuorolistalla.
- Useampi sopimus per henkilö on normaalia, esimerkiksi työajan muuttuessa — tätä varten ei tarvitse luoda toista henkilöä. Uudet sopimusmallit (työaika, lisät, kalenteri) luot itse Asetukset > Sopimukset -kohdassa.
- Luo ensin ryhmärakenne ja liitä henkilöt vasta sen jälkeen — näin ryhmätason käyttöoikeudet toimivat alusta alkaen.

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjautuminen `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
