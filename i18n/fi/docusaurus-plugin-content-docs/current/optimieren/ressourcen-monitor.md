---
sidebar_position: 3
---

Resurssimonitori näyttää yhdellä silmäyksellä, miten ryhmän (tai kaikkien ryhmien) henkilöstön kuormitus näyttää valitulle vuodelle — palkki päivää kohden, koko vuoden kaari 365 päivän ajalta.

## Näin se toimii

Esitys noudattaa henkilöstösuunnittelussa vakiintunutta "Capacity vs. Workload Chart" -mallia (projektinhallinnan kirjallisuudessa tunnetaan nimellä "Resource Histogram"). Elementit:

- **Vihreät palkit — työvuorot:** päivän suunniteltujen työvuorojen määrä. Jokainen työvuoro lasketaan yhtenä työntekijäpaikkana; säiliötyövuorot lasketaan yhtenä.
- **Harmaat palkit — poissaolot:** poissaolevien työntekijöiden määrä, pinottuna vihreiden palkkien päälle. Kokonainen loma- tai sairausmerkintä lasketaan yhtenä, puolikas 0,5:nä — myös viikonloppuna.
- **Vaaleanpunainen pisteviiva — tavoiteltu käytettävyys:** kuinka monta työntekijää olisi keskimäärin saatavilla, jos toivotut viikoittaiset työpäivät toteutuvat (oletus: 5 työpäivää, 2 lepopäivää). Tämä on suunnittelun tavoite.
- **Punainen katkoviiva — enimmäiskäytettävyys:** fyysinen/lakisääteinen enimmäismäärä suurimmalla sallitulla peräkkäisten työpäivien määrällä (oletus: 6). Sijaitsee aina vaaleanpunaisen viivan tasolla tai sen yläpuolella.
- **Sininen viiva — työntekijöiden määrä:** koko henkilöstö, jolla on voimassa oleva sopimus kyseisenä päivänä (headcount).

**Tulkinta:** kun vihreiden palkkien yläreuna lähestyy vaaleanpunaista viivaa, henkilöstö on optimaalisesti käytössä. Sinisen viivan ja pinottujen palkkien yläreunan välinen erotus on varanne.

Nuolinäppäimillä oikeassa yläkulmassa vaihdatte vuoden; ryhmävalinnalla rajaatte toimipisteeseen tai tiimiin.

## Hyvä tietää

- Kokemusperäinen nyrkkisääntö: harmaiden poissaolopalkkien yläreunan ei tulisi ylittää kolmasosaa työvuorojen ja koko henkilöstön välisestä erotuksesta — muuten operatiivinen varanto vaarantuu, ja sairaus- tai lomapiikkejä on vaikea paikata.
- Arvot ovat arvioita ja likiarvoja, ei tarkkaa tilitystä — ne antavat käsityksen käytettävyydestä.
- Työvuorot ovat peräisin suunnitelmasta, ei toteutumasta — siksi myös tulevat työvuorot näkyvät.
- 24/7-sopimuksessa vaaleanpunainen viiva tasoitetaan viikon yli (n. 0,71 henkilöä kohden kalenteripäivää kohden); ma–pe-sopimuksessa se on arkipäivinä 1,0 ja viikonloppuna 0.

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu tunnuksilla `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
