---
sidebar_position: 5
---

Kohdassa Asetukset > ERP-vastaanottopisteet määrität, miten ulkoisesta ERP-järjestelmästä tulevat tilaukset otetaan automaattisesti vastaan Klacksiin XML-tiedostoina.

## Näin se toimii

**Kolme toimitustapaa:** ERP-järjestelmä voi asettaa tiedostot vastaanottopisteen tiedostoalueelle (Klacks noutaa ne automaattisesti aikataulun mukaan), työntää ne suoraan HTTP-POST-pyynnöllä tuontirajapintaan (todennettuna käyttöoikeustunnuksella), tai ylläpitäjä lataa XML-tiedoston manuaalisesti tälle sivulle vetämällä ja pudottamalla.

**Vastaanottopiste** on Klacksin itse ylläpitämä keskitetty postilaatikko kaikille tuontitiedostoille — se näyttää kolme aluetta: Saapuvat (odottaa seuraavaa ajoa), Käsitellyt (arkisto) ja Virheet (virheelliset tiedostot syineen, mahdollisuudella tuoda uudelleen). Aikataulu (Cron-lauseke, oletus tunneittain) sekä käytössä-kytkin tauottamista varten ohjaavat automaattista hakua.

**Käyttöoikeustunnuksia** tarvitaan vain, jos ERP-järjestelmä toimittaa tiedostoja push-menetelmällä. Jokainen tunnus alkaa merkkijonolla `klacks_erp_`, on voimassa 1–730 päivää (oletus 365) ja näytetään selkokielisenä **vain kerran luonnin yhteydessä**. Tällainen tunnus koskee yksinomaan tuontirajapintaa, ei muuta API-käyttöä, ja se voidaan peruuttaa milloin tahansa.

**Käsittely:** Tilaukset kohdistetaan lähdejärjestelmän tunnuksen ja ulkoisen asiakasreferenssin (tai vaihtoehtoisesti yrityksen/postinumeron/kadun) perusteella olemassa olevalle tai uudelle asiakkaalle ja syntyvät aluksi luonnoksena, joka suunnittelijoiden tulee tarkistaa ja sinetöidä. Jo sinetöidyn tilauksen muuttunut uusi toimitus päättää automaattisesti vanhan ja luo uuden, siihen liitetyn version; muuttumattomat toistotoimitukset eivät laukaise mitään.

## Hyvä tietää

- Yksittäiset virheelliset tilaukset (esim. ilman viikonpäivää tai kaksoisreferenssillä) hylätään estämättä saman tiedoston muita kelvollisia tilauksia; koko tiedosto päätyy silti virheet-alueelle, jotta mikään ei jää huomaamatta.
- Käsitellyt tiedostot arkistoidaan, ei poisteta.
- Tarkka XML-muoto (pakolliset kentät, päivämäärämuodot, viikonpäivälogiikka) on dokumentoitu käsikirjassa suoraan asetussivulla sekä ladattavassa esimerkkitiedostossa.
- Tämä määritys sijaitsee asetusalueella ja on siten varattu ylläpitäjärooleille.

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
