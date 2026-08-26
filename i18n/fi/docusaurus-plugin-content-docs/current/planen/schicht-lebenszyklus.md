---
sidebar_position: 8
---

# Työvuoron elinkaari: tilauksesta segmenttiin

Ennen kuin työvuoro voidaan ylipäätään miehittää, se käy läpi neljä vaihetta — vapaasti muokattavasta tilauksesta muuttumattoman sinetöidyn tilauksen kautta suunniteltavaan työvuoroon ja sen segmentteihin. Ajatus tämän takana: se, mistä on sovittu, pysyy pysyvästi jälkikäteen luettavissa; se, mitä arki sen jälkeen suunnittelee uudelleen, pysyy silti liikuteltavana.

## Näin se toimii

**1. Tilaus — vapaasti muokattavissa.** Jokainen uusi työvuoro alkaa täältä. Työvuoro-sivulla painike **+ uusi tilaus** avaa syöttölomakkeen; muokkaat tilausta niin usein kuin haluat, kaikki kentät ovat avoinna. Työvuorosuunnitelmassa se ei vielä näy, eikä siihen näin ollen voi vielä suunnitella työntekijöitä. Pelkkä luonnos se ei silti ole — se on aito tilaus, vain vielä sinetöimätön. Työvuorolistalla Klacks pitää tätä vaihetta otsikon **Tilaukset** alla. Kun vaihdat siellä näkymään **Suunniteltavat työvuorot**, painike on nimeltään **+ uusi työvuoro**: se luo tilauksen ilman asiakasyhteyttä — yleistä työtä varten, jota kukaan ulkopuolinen ei tilaa eikä maksa. Kortti *Osoite* jää tällöin pois; myös tämä työvuoro käy läpi kaikki neljä vaihetta.

**2. Sinetöity tilaus — muuttumaton.** Kun tilaus on lyöty lukkoon, sinetöit sen kortin *Yleistä* lukko-painikkeella. Tästä hetkestä lähtien se on lukittu ja säilyy pysyvästi sitovana kuvana sovitusta — myös silloin, kun jokapäiväinen toiminta on jo kauan sitten suunnitellut työvuoron uudelleen. Tallennuksen jälkeen tämä **ei ole peruutettavissa**. Mitkä tilaukset ovat jo saavuttaneet tämän vaiheen, näyttää työvuorolistan valintaruutu **Näytä vain sinetöidyt tilaukset**.

**3. Suunniteltava työvuoro — täällä suunnitellaan.** Sinetöinti luo yhdellä kertaa, ja tasan yhden ainoan kerran, suunniteltavan työvuoron: tilaukseen liitetyn kopion. Vasta tämä työvuoro näkyy [Suunnitteluruudukko: interaktiivinen aikamatriisinne](../planen/plan-raster.md) -näkymässä, vasta siihen voi varata työntekijöitä — ja se pysyy muokattavana. Myöhempi uudelleentallennus ei luo toista kopiota. Työvuorolistalla löydät sen otsikon **Suunniteltavat työvuorot** alta.

**4. Segmentit — pilkottu työvuoro.** Suunniteltavan työvuoron voi pilkkoa, esimerkiksi päivien tai aikajaksojen mukaan. Aiempi työvuoro muuttuu tällöin itse yhdeksi segmentiksi, muut syntyvät sen rinnalle. Kaikki segmentit ovat vuorostaan suunniteltavissa ja kantavat sitten varsinaisen miehityksen. Sinetöity tilaus pysyy tästä koskemattomana — se on ja pysyy taustalla olevana sopimuksena.

**Milloin lukko-painike aktivoituu:** Se pysyy harmaana, kunnes tilaus on riittävän täydellinen suunnittelua varten — lyhenne, nimi ja alkaen-päivämäärä on täytetty, vähintään yksi viikonpäivä ja vähintään yksi ryhmä on valittu, ja sekä tehtävien määrä että työntekijöiden määrä työvuoroa kohden on suurempi kuin nolla. Sen työkaluvihje sanoo sen yksiselitteisesti: „Lukituksen jälkeen tilaus on muuttumaton ja valmis suunnitteluun."

**Ainoa poikkeus muuttumattomuudesta:** Jos sinetöidyllä tilauksella ei ole päättyen-päivämäärää — esimerkiksi koska tilaus jatkuu jatkuvasti tai sen loppu on vielä avoin —, saat asettaa tämän yhden kentän vielä jälkikäteenkin. Edellytys: valitusta päivämäärästä eteenpäin ei ole vielä suunniteltu yhtään työvuoroa. Sen jälkeen myös tämä kenttä on lukittu kuten kaikki muut.

**Esimerkki:** Toukokuun 1. päivänä kirjaat tilauksen „Häät Müller" ja hiot sitä kahden päivän ajan. Toukokuun 3. päivänä asiakas vahvistaa — sinetöit. Klacks lyö tilauksen lukkoon ja luo sen rinnalle suunniteltavan työvuoron. Toukokuun 4. päivänä suunnittelu merkitsee siihen kaksi työntekijää, toukokuun 5. päivänä työvuoro leikataan kahdeksi segmentiksi. Kesäkuun 1. päivänä jakso päätetään ja segmenttien merkinnät lukitaan. Toukokuun 3. päivän sinetöity tilaus ei muutu tässä kaikessa kertaakaan.

**Syöttölomakkeen kortit.** Lomake jakautuu kortteihin, joita avaat ja suljet yksitellen; tallennus ja hylkäys tapahtuvat työtilan alareunan tallennuspalkin kautta. Osa korteista näkyy vasta, kun kytket kortissa *Yleistä* päälle kytkimen **Asiantuntijatila**:

- **Yleistä** — lyhenne (enintään 6 merkkiä; Klacks ehdottaa sen automaattisesti nimeä kirjoitettaessa), nimi, alkaen- ja päättyen-päivämäärä sekä muistiinpanot. Täällä sijaitsevat myös lukko-painike ja asiantuntijatilan kytkin.
- **Ryhmä** — liittää työvuoron yhteen tai useampaan ryhmään. Vähintään yksi ryhmä on pakollinen; niin kauan kuin yhtäkään ei ole valittu, infolaatikko huomauttaa siitä.
- **Vaaditut pätevyydet** — mitä [pätevyyksiä](../einstellungen/stammdaten-organisation/qualifikationen.md) työvuoro edellyttää, kunkin kohdalla vähimmäistaso (Vähäinen–Asiantuntija) sekä tieto siitä, onko se pakollinen.
- **Tunnit ja viikonpäivät** — alkamisaika, päättymisaika ja kesto sekä viikonpäivät, joina työvuoro esiintyy, lisäksi kaksi pyhäpäiväsääntöä. Asiantuntijatilassa voit tässä sen sijaan viedä työvuoroa aikaikkunana: se sijaitsee tällöin joustavasti alkamis- ja päättymisajan välisessä ikkunassa, ja laskettavaksi tulee kirjattu kesto.
- **Makro** (asiantuntijatila) — liittää työvuoron [makroon](../einstellungen/klacksy-konfiguration/makros.md) kesto- ja palkkalaskentaa varten.
- **Osoite** — asiakas eli käyttöpaikka, haettuna nimen tai tunnusnumeron perusteella. Oikean laidan suodatinsarake rajaa juuri tätä hakua.
- **Erityispiirteet** (asiantuntijatila) — satunnainen käyttö jaksottaisuuksineen, briefing ja debriefing, meno- ja paluumatka-aika sekä työntekijöiden ja tehtävien määrä työvuoroa kohden.
- **Vakiokulut** (asiantuntijatila) — kulut, joita tälle työvuorolle syntyy säännöllisesti, kunkin kohdalla nimike, summa ja tieto siitä, onko se verovelvollinen.

Miten suunniteltavat työvuorot sen jälkeen miehitetään, kuvaavat [Automaattisuunnittelu: valmis suunnitelma sekunneissa](../planen/auto-planung.md) ja [Suunnitteluruudukko: interaktiivinen aikamatriisinne](../planen/plan-raster.md).

## Hyvä tietää

- **Sinetöinti tarkoittaa täällä eri asiaa kuin hyväksymisprosessissa.** Tilauksen sinetöinti jäädyttää työvuoron *kuvauksen* — mitä on tehtävä, pysyvästi. [Hyväksymisprosessi: luonnoksesta sitovaan suunnitelmaan](../planen/freigabe-workflow.md) ja [jakson päättäminen](../planen/periodenabschluss.md) sen sijaan lukitsevat *merkinnät tietyillä päivillä*. Molemmat toimivat toisistaan riippumatta.
- **Tilauksia syntyy myös automaattisesti.** Syöttölomakkeen ohella [ERP-tuonti](../einstellungen/kommunikation-integration/erp-uebernahmepunkte.md) on toinen reitti: sieltä tulevat tilaukset päätyvät niin ikään aluksi sinetöimättömänä tilauksena, ja ne on tarkistettava ja sinetöitävä.
- **Unohdettu tilaus ilmoittaa itsestään.** Jos tilaus jää sinetöimättä juuri ennen alkamistaan, [Klacksy proaktiivisena tiiminjäsenenä](../ki/klacksy-proaktiv.md) huomauttaa siitä havaintotyypillä „Avoin tilaus" — sillä sinetöimätön tarkoittaa: ei suunniteltavissa.
- **Säiliötyövuorot toimivat hieman eri tavalla.** Säiliö on kuori, joka niputtaa yhteen useita osatyövuoroja; sillä ei siksi ole asiakasta eikä osoitetta, ja kortit *Osoite* ja *Vakiokulut* jäävät pois. Kortti *Erityispiirteet* näyttää sen kohdalla vain satunnaisen käytön vaihtoehdon. Valintaruudun „On säiliö" löydät asiantuntijatilassa kortista *Yleistä*, ja sen voi asettaa vain niin kauan kuin tilaus on vielä sinetöimätön.
- **Satunnaiset työvuorot ja aikaikkunatyövuorot eivät lasketa mukaan.** Kumpikaan ei tietoisesti näy [Resurssimonitorin](../optimieren/ressourcen-monitor.md) työvuoropalkissa, koska ne eivät kuvaa kiinteää päivittäistä tarvetta.

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu tunnuksilla `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
