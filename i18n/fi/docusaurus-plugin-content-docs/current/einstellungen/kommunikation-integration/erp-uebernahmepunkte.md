---
sidebar_position: 5
---

# ERP-siirtopisteet

Kohdassa Asetukset > Tuonti (näkyy vain asiantuntijatilassa), kortissa ”ERP Drop Points”, määrität, miten ulkoisesta ERP-järjestelmästä tulevat tilaukset otetaan automaattisesti vastaan Klacksiin XML-tiedostoina.

## Näin se toimii

**Kolme toimitustapaa:** ERP-järjestelmä voi asettaa XML-tiedostot kansioon Klacks-palvelimella (Klacks noutaa ne automaattisesti aikataulun mukaan, kun tiedosto on pysynyt muuttumattomana 10 sekuntia), työntää ne suoraan HTTPS-POST-pyynnöllä tuontirajapintaan (todennettuna käyttöoikeustunnuksella), tai ylläpitäjä lataa XML-tiedoston manuaalisesti tälle sivulle vetämällä ja pudottamalla (tuonti alkaa heti). SFTP:tä ei ole; tuodaan vain `ErpOrderImport`-muotoisia XML-tiedostoja.

**Vastaanottopiste** on Klacksin itse ylläpitämä keskitetty postilaatikko kaikille tuontitiedostoille — se näyttää kolme aluetta: Saapuvat (vastaanotettu tai parhaillaan tuonnissa), Käsitellyt (yhteenveto tiedostoa kohti) ja Virheet (lukukelvottomat tai virheelliset tiedostot syineen, mahdollisuudella tuoda uudelleen tai poistaa). Aikataulu (Cron-lauseke, oletus tunneittain) sekä käytössä-kytkin tauottamista varten ohjaavat automaattista hakua.

**Mikä tapa sopii mihinkin asennukseen?** Toimisto-PC:llä (Windows-asennus) kansio on luontevin tapa; oletuskansio on `C:\ProgramData\Klacks\ErpImport\erp\orders`. Se on suojattu, ja vain SYSTEM ja ylläpitäjät saavat kirjoittaa sinne: ylläpitäjän on annettava tilille, jolla ERP-vienti ajetaan, ”Muokkaa”-oikeus täsmälleen kansioon `erp\orders`, ei koko kansioon `ProgramData\Klacks`. Omalla Docker-palvelimella kansio (`/app/ErpImport/erp/orders`) on kontin sisällä nimetyssä volumessa; palvelinkoneen ERP pääsee siihen vain, jos ylläpitäjä liittää palvelimen kansion polkuun `/app/ErpImport`, muuten jäljelle jäävät push käyttöoikeustunnuksella tai manuaalinen lataus. Meidän ylläpitämässämme asennuksessa palvelimen kansioihin ei ole pääsyä: push käyttöoikeustunnuksella tai manuaalinen lataus.

**Käyttöoikeustunnuksia** tarvitaan vain, jos ERP-järjestelmä toimittaa tiedostoja push-menetelmällä. Jokainen tunnus alkaa merkkijonolla `klacks_erp_`, on voimassa 1–730 päivää (oletus 365) ja näytetään selkokielisenä **vain kerran luonnin yhteydessä**. Tällainen tunnus koskee yksinomaan tuontirajapintaa, ei muuta API-käyttöä, ja se voidaan peruuttaa milloin tahansa.

**Käsittely:** Tilaukset kohdistetaan lähdejärjestelmän tunnuksen ja ulkoisen asiakasreferenssin (tai vaihtoehtoisesti yrityksen/postinumeron/kadun) perusteella olemassa olevalle tai uudelle asiakkaalle ja syntyvät aluksi luonnoksena, joka suunnittelijoiden tulee tarkistaa ja sinetöidä. Jo sinetöidyn tilauksen muuttunut uusi toimitus päättää automaattisesti vanhan ja luo uuden, siihen liitetyn version; muuttumattomat toistotoimitukset eivät laukaise mitään.

## Hyvä tietää

- Yksittäiset virheelliset tilaukset (esim. ilman viikonpäivää tai kaksoisreferenssillä) hylätään estämättä saman tiedoston muita kelvollisia tilauksia; tiedosto näkyy silti Käsitellyt-alueella varoitusmerkillä merkittynä, ja hylätyt tilaukset voi avata näkyviin syineen.
- Tiedostoja ei siirretä eikä arkistoida: ne jäävät kansioon, ja niiden tila on tallennettu tietokantaan. Onnistuneesti käsitellyt tiedostot poistetaan automaattisesti 90 päivän kuluttua; Virheet-alueen tiedostot säilyvät, kunnes ne tuodaan uudelleen tai poistetaan.
- Tarkka XML-muoto (pakolliset kentät, päivämäärämuodot, viikonpäivälogiikka) on dokumentoitu käsikirjassa suoraan asetussivulla sekä ladattavassa esimerkkitiedostossa.
- Tämä määritys sijaitsee asetusalueella ja on siten varattu ylläpitäjärooleille.

---
*Kokeile heti: [Klacks Playground](https://play.klacks-software.ch) — kirjaudu `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
