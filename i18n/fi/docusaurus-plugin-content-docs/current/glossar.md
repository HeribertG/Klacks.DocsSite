---
sidebar_position: 8
---
# Sanasto

Käsitteet, jotka toistuvat Klacksissa ja tässä dokumentaatiossa yhä uudelleen — lyhyesti ja siinä järjestyksessä, jossa niihin törmäätte.

## Suunnittelu

**Työntekijärivi**
Pienin suunniteltavissa oleva yksikkö. Ei henkilö eikä päivä, vaan henkilön rivi tietyssä suunnitelmalehdessä. Kaikki suunnitteluarvot kiinnittyvät tähän riviin.

**Suunnitelmalehti**
Säiliö, joka kerää **viittauksia** työntekijäriveihin — ei kopioita. Siksi henkilö on olemassa vain kerran riippumatta siitä, kuinka monessa osasuunnitelmassa hän esiintyy, ja muutos näkyy heti kaikkialla. [Modulaarisen suunnittelun](../planen/modulare-planung/) perusta.

**Automaattisuunnittelu**
Avustaja täyttää suunnitelman sääntöjenne mukaan. Laskenta ajetaan taustalla, kun te työskentelette eteenpäin — katso [Automaattisuunnittelu](../planen/auto-planung/).

**Saatavuus**
Milloin henkilö on käytettävissä — tunnin tai päivän tarkkuudella, omille ja ulkopuolisille työntekijöille. Katso [Saatavuusruudukko](../planen/verfuegbarkeits-raster/).

**Tilaus (toimeksianto)**
Vielä muokattavissa oleva luonnos työvuorosta. Tilaus **ei ole vielä suunniteltavissa**.

**Sinetöinti**
Kertaluonteinen, **peruuttamaton** vaihe, joka muuttaa tilauksen suunniteltavaksi työvuoroksi. Samalla syntyy tilauksen suunniteltavissa oleva vastine. Suunniteltavan työvuoron luomista suoraan ei Klacksissa ole — jokainen työvuoro syntyy sinetöimällä. Katso [Työvuoron elinkaari](../planen/schicht-lebenszyklus/).

**Työvuoro (vuoro)**
Suunniteltavissa oleva, sinetöity työvuoro. Käsite ”vuoro” tarkoittaa samaa.

**Hyväksymistasot (työvuorosuunnitelma)**
Työvuorosuunnitelma käy läpi neljä tilaa kiinteässä järjestyksessä: **Luonnos → vahvistettu → hyväksytty → suljettu**. Vahvistaa saa jokainen kirjautunut tili; hyväksyä vain Supervisor ja Admin; sulkea yksinomaan Admin. Katso [Hyväksymisprosessi](../planen/freigabe-workflow/).

**Jakso / jakson päättäminen**
Tilityskausi (viikoittainen, kahden viikon välein, kuukausittainen tai yksilöllinen; määritetään maksuvälin kautta). Päättäminen tekee jaksosta sitovan ja on varattu Adminille — katso [Jakson päättäminen](../planen/periodenabschluss/).

**Poissaolo — kaksi asiaa, yksi sana**
”Poissaolo” tarkoittaa perustietoalueella **poissaolotyyppien luetteloa** (nimi, väri, oletuspituus, oletusarvo). Kalenterin palkit ovat sen sijaan joko **toive** (suunniteltu poissaolo, vapaasti siirrettävissä ja ilman lukitustasoa) tai **kirjattu poissaolo** (otettu työvuorosuunnitelmasta, Poissaolot-sivulla vain luettavissa ja lukitustasolla). Joka sekoittaa nämä kaksi, etsii väärästä paikasta.

## Tekoälyavustaja

**Klacksy**
Klacksin tekoälyavustaja. Se suunnittelee, selittää ja toteuttaa — vapaasti valittavalla mallilla. Katso [Klacksy](../ki/klacksy-ki-assistent/).

**Skill**
Klacksyn yksittäinen, rajattu kyky — deklaratiivinen kääre konkreettisen ohjelmalogiikan ympärillä (”hae työntekijä”, ”liitä sopimus”, ”luo raportti”). Klacksy valitsee sopivat skillit ajon aikana.

**Autonomiataso**
Kuinka pitkälle Klacksy saa edetä kysymättä:

| Taso | Nimi | Toiminta |
|---|---|---|
| 0 | Ehdota | Jokainen kirjoittava toiminto tarvitsee vahvistuksenne |
| 1 | Avustettu | Palautettavissa olevat toiminnot ajetaan vapaasti; lopulliset ja arkaluontoiset kysyvät |
| 2 | Autonominen (oletus) | Kaikki paitsi arkaluontoisiksi luokitellut toiminnot ajetaan vapaasti |
| 3 | Täysin autonominen | Myös lopulliset vaiheet viedään läpi |

Arkaluontoiset toiminnot — esimerkiksi käyttäjien poistaminen tai käyttöoikeuksien muuttaminen — kysyvät **jokaisella** tasolla. Katso [Autonomiatasot](../einstellungen/klacksy-konfiguration/autonomie-stufen/).

## Roolit ja ylläpito

**Admin / Supervisor / Suunnittelija**
Kolme käyttöoikeustasoa. Admin saa tehdä kaiken, Supervisor luoda ja muokata, ilman roolia oleva tili on Suunnittelija. Yleiskatsaus löytyy kohdasta [Roolit ja käyttöoikeudet](../erste-schritte/rollen-und-rechte/).

**Maaprofiili**
Valmisteltu asetuskokonaisuus maalle: kieli, aikavyöhyke, pyhäpäiväkalenteri, viikonloppu ja viikon alku, työaikarajat, lomaoikeus, lisät, oletuspalkkavienti ja toimialamallit. Valitaan asennuksessa `REGION`-asetuksella.

**Playground**
Julkinen testi-instanssi osoitteessa [play.klacks-software.ch](https://play.klacks-software.ch) demotiedoilla — nimenomaan kokeilua varten, ilman oikeita henkilötietoja. Katso [Asennus ja Playground](../erste-schritte/installation-und-playground/).

**On-Premise**
Käyttö omalla infrastruktuurillanne: teidän laitteistonne, teidän tietokantanne, teidän tietonne. Isännöidyn vaihtoehdon vastakohta.

**Päivityspalvelu**
Mukana toimitettu palvelu, joka asentaa allekirjoitetut päivitykset — varmuuskopiolla etukäteen ja automaattisella palautuksella ongelmatilanteissa. Katso [Päivitykset ja palautus](../betrieb/updates-und-rollback/).

**Tietosuoja**
Klacks ei soita kotiin: tietojanne ei palauteta valmistajalle. Tiedoista, jotka todella on tarkoitus poistaa, huolehtii [Tietojen säilytys](../einstellungen/system-sicherheit/datenaufbewahrung/) — poistot poistetaan fyysisesti määräajan päätyttyä.

---

*Puuttuuko käsite tai onko selitys virheellinen? [Klacks-yhteisö Discordissa](https://discord.gg/YRP8p2abVC).*
