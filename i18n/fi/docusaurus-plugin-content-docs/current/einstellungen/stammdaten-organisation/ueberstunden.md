---
sidebar_position: 7
---

# Ylityöt

Kohdassa Asetukset > Compliance ja lisäsäännöt (asiantuntijatila) > Ylityöt määrität, kuinka monesta kertyneestä tunnista alkaen lisätyö tulee lisävelvoitteen piiriin ja kuinka suuri lisä on kullakin tasolla.

## Näin se toimii

**Laskentaperuste:** Päivittäin tai Viikoittain — muuta ei ole. Kuukausittaista tai vuosittaista perustetta ei ole tarjolla. Kohdassa "Viikoittain" viikko alkaa määritetystä ensimmäisestä viikonpäivästä.

**Enintään kolme tasoa:** Jokainen taso koostuu kahdesta kentästä — "Taso X alkaen tunneista" (kertynyt tuntimäärä päivässä tai viikossa, josta alkaen tämä taso astuu voimaan) ja "Taso X lisä" prosentteina. Kulloinkin ylin määritetty taso on ylöspäin avoin.

**Jokainen taso laskee vain oman välinsä sisällä olevat tunnit**, ei kaikkia tunteja nollasta alkaen. Jos Taso 1 alkaa 8 tunnista ja Taso 2 alkaa 10 tunnista, kymmenen ja puolen tunnin työpäivä maksaa Taso 1:n korvauksen kahdelta tunnilta 8:n ja 10:n välillä ja Taso 2:n korvauksen vain sen ylittävältä puolelta tunnilta — ei koskaan Taso 2:n korvausta kaikilta kymmeneltä ja puolelta tunnilta. Yksittäinen työlohko voi näin synnyttää useita lisäeriä, yhden kutakin saavutettua tasoa kohden.

**Vaillinainen taso ohitetaan hiljaisesti:** Jos tuntimäärä puuttuu tai lisä on nolla tai negatiivinen, tätä tasoa ei lasketa mukaan. Todellisuudessa aktiivisia tasoja voi siis olla nollasta kolmeen.

**Lisä on korotus, ei kokonaissumma:** 25 % tarkoittaa neljäsosaa tuntia lisää jokaista tällä tasolla työskenneltyä tuntia kohden — ei sitä, että tunti maksettaisiin kertoimella 1,25. Vieressä oleva lisätapa (kerroin tai kiinteä summa tunnilta) määrittää vain yksikön; laskenta sen takana pysyy samana.

**Mitä lasketaan jo tehdyiksi tunneiksi:** Tasot täytetään samana päivänä tai samalla viikolla aiemmin tehtyjen tuntien perusteella — järjestettynä ensin päivämäärän, sitten alkamisajan mukaan. Näin jokainen työlohko saa oman paikkansa välissä, eikä yhtäkään tuntia lasketa kahteen kertaan korkeammalle tasolle. Jos aiempi merkintä muuttuu, myöhemmät lasketaan uudelleen.

**Mistä arvot ovat peräisin:** Tämä kortti tarjoaa koko yrityksen kattavat arvot — ne pätevät vain, jos mikään muu lähde ei mene edelle. Jos henkilön sopimukseen on liitetty [suunnittelusääntö](../../planen/planungsregeln.md), jolla on omat ylityötasonsa, sillä on etusija; kyseiselle päivämäärälle voimassa oleva myöhempi versio tästä säännöstä korvaa tarvittaessa koko sarjan, mutta putoaa ilman omaa ylityölohkoa tässä näkyviin yrityksen asetuksiin, ei suunnittelusääntöön. Jos mihinkään ei ole määritetty tasoa, viimeisenä varana toimii vain suunnittelusäännön **ylityöraja** — ja nimenomaan vain ensimmäisen tason alkuarvona, ei koskaan lisäprosenttina. Lähteitä ei koskaan sekoiteta: se, joka tarjoaa ensimmäisen tason, tarjoaa myös kaikki seuraavat.

**Kaksi ehtoa, joita ilman lisää ei synny:**

- Työvuoro tarvitsee laskentamakron. Työvuoroa ilman makroa ei koskaan tarkisteta lisätuntien varalta.
- Vähintään yksi täydellinen taso on oltava määritetty. Ilman sitä tulos ei ole "nolla ylityötä", vaan tarkistusta ei tehdä lainkaan.

**Poikkeukset:** Korjauksia ja sijaistuloja ei koskaan tarkisteta ylitöiden varalta — mukaan lasketaan vain tavanomainen työ.

**Yhteensattuminen muiden lisien kanssa:** Sama tunti voi samanaikaisesti täyttää sekä lisätuntien että olosuhteisiin sidotun lisän ehdot, esimerkiksi yö- tai viikonlopputyön. Sen, lasketaanko molemmat yhteen vai päteekö vain suurempi, ratkaisee kyseisen työvuoron laskentamakro, ei tämä kortti.

**Tallennus:** Kortti sijaitsee asetussivun Compliance ja lisäsäännöt -osiossa (yhdessä korvaavan levon, lisätavan ja compliance-valvonnan kanssa), näkyvissä vain asiantuntijatilassa. Muutokset kerätään ja tallennetaan tai hylätään asetussivun yhteisen tallennuspalkin kautta — tällä kortilla ei ole omaa tallennuspainiketta.

## Hyvä tietää

- Tämä kortti kattaa yksinomaan automaattisen ylityöportaikon päivä- tai viikkokynnyksen mukaan. Yö-, sunnuntai- tai pyhäpäivätyön lisät sen sijaan lasketaan yleisesti skriptillä — katso [Makrot](../klacksy-konfiguration/makros.md).
- Taso ilman "alkaen tunneista" -arvoa tai jonka lisä on 0 % tai vähemmän, jätetään huomiotta — näin yksittäisiä tasoja voi poistaa käytöstä poistamatta niitä kokonaan.
- Ilman vähintään yhtä täydellistä tasoa ja ilman työvuoron laskentamakroa ylityölisiä ei periaatteessa synny lainkaan, ei edes hyvin pitkillä työvuoroilla.
- Suunnittelusääntö, jolla on omat ylityötasot, korvaa nämä koko yrityksen arvot kokonaan, ei vain yksittäisiä tasoja.

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu tunnuksilla `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
