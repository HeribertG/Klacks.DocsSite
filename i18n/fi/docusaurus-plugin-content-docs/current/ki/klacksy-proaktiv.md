---
sidebar_position: 8
---

# Klacksy proaktiivisena tiiminjäsenenä

Klacksy ei odota, että häneltä kysytään. Kerran tunnissa hän katsoo taustalla toimintaa läpi ja ilmoittaa, mitä hän huomaa: miehittämättömiä työvuoroja, päättymässä olevia sopimuksia, myöhässä olevia jaksoja, puuttuvia perustietoja. Kuinka pitkälle hän saa tässä mennä, sen määrittävät ylläpitäjät jokaiselle havaintotyypille erikseen — tehtaan oletusasetuksena hän vain ilmoittaa eikä koskaan toimi omin päin.

Ei pidä sekoittaa [Autonomiatasoihin](../einstellungen/klacksy-konfiguration/autonomie-stufen.md): Siellä on kyse siitä, kuinka paljon vahvistusta Klacksy tarvitsee, kun **sinä** pyydät häneltä chatissa jotain. Tässä on kyse päinvastaisesta — siitä, mitä hän tekee **kysymättä**.

## Näin se toimii

**Mikä on havainto:** Havainto on toteamus, jonka Klacksy on tehnyt itsenäisesti — esimerkiksi "tämä työvuoro on vielä kolmen päivän päästä miehittämättä" tai "tämä laskutusjakso on ollut myöhässä viikon". Tätä varten taustalla ajetaan tunneittain noin tusinan verran tarkistussääntöjä. Itse tunnistus on kiinteästi ohjelmoitu: mikään kielimalli ei päätä, onko jokin havainto — sama sääntö antaa saman tuloksen riippumatta siitä, mitä tekoälyntarjoajaa käytät.

**Neljäätoista havaintotyyppiä voi ohjata,** muun muassa nämä: Miehittämätön työvuoro, Aukko saatavuudessa, Päättymässä oleva sopimus, Puuttuvat perustiedot, Avoin tilaus, Tuleva jakson päättäminen, Myöhässä oleva jakso, Poikkeama tavoitetunneista, Tyhjä säiliö, Lukituskonflikti ja Avoin skenaario. Kaksi näistä ei synny tunneittaisessa ajossa, vaan ERP-tilausten tuonnissa.

**Kolme tasoa — jokaiselle havaintotyypille erikseen:** Kohdassa Asetukset > Klacksy > "Klacksyn toimintavapaus" (asiantuntijatila, vain ylläpitäjille) jokainen havaintotyyppi on omalla rivillään sarakkeen "Korkein taso" kera:

- **Vain ilmoita** — Klacksy kertoo asiasta, ei muuta. Tämä on tehtaan oletusasetus jokaiselle havaintotyypille.
- **Valmistele skenaario** — Klacksy asettaa lisäksi valmiin ratkaisun skenaariona viereen, jonka ihmisen tarvitsee enää hyväksyä.
- **Suorita** — Klacksy korjaa havainnon itse ja raportoi siitä sen jälkeen.

Tasosta "Valmistele skenaario" alkaen on nimettävä vastuuhenkilö: toiminto suoritetaan hänen oikeuksillaan, ja hän saa raportin. Lisäksi jokaisella rivillä on budjetit, jotka rajaavat, kuinka usein Klacksy saa toimia (tehtaan oletusasetuksena enintään 5 toimintoa päivässä ja 3 60 minuutin sisällä), sekä kytkin "Aktiivinen". Tämä ohjaa yksinomaan itsenäistä toimintaa — tavoittaako ilmoitus sinut ja miten, on edelleen henkilökohtainen ilmoitusasetuksesi.

**Ohjelmaan kiinteästi rakennettu raja:** Korkeampi taso vaikuttaa vain siellä, missä havaintotyypille on ylipäätään tallennettu automaattinen korjaus. Jos sitä ei ole, jäädään ilmoittamiseen — riippumatta asetuksesta ja myös silloin, jos joku delegoi havainnon yksittäistapauksessa Klacksylle. Tämä raja on ohjelmakoodissa eikä sitä voi avata käyttöliittymän kautta. Tällä hetkellä tallennettuna on tasan yksi korjaus: havaintotyypissä "Tyhjä säiliö" Klacksy voi luoda puuttuvan paikkamallin itse.

**Minne havainnot päätyvät:** Yläpalkin Klacksy-painikkeessa laskuri näyttää lukemattomien huomautusten määrän. Klikkaus avaa sivupalkin, jossa havainnot ovat koottuna otsikon "Kun olit poissa…" alle. Jokaisen ilmoituksen kohdalla on tarjolla "Näytä minulle" (hyppää kyseiseen kohtaan), "Hyödyllinen" ja "Piilota" — jälkimmäinen valinnaisesti syyn kera ("En halua tällaisia huomautuksia yleensä", "Tällä kertaa huomautus oli väärä", "On jo hoidettu") tai ilman. Missä se on sallittua, tarjolla on lisäksi "Hoida sinä": yksittäistapauksen valtuutus, joka nostaa juuri tämän yhden havainnon tasolle "Valmistele skenaario". Voit myös kysyä Klacksylta suoraan chatissa, mitkä havainnot ovat juuri nyt avoinna.

**Kun havainto on korjattu:** Kyseinen rivi saa työvuorolistan säiliönäkymässä merkinnän "Klacksyn korjaama …" — sekä silloin, kun Klacksy on suorittanut korjauksen itse, että silloin, kun ihminen on hyväksynyt Klacksyn valmisteleman skenaarion. Kun Klacksy suorittaa itse, vastuuhenkilölle lähtee lisäksi raportti.

**Hätäpysäytys:** Chatin yläpuolella ylläpitäjät näkevät kytkimen "Klacksy toimii autonomisesti: PÄÄLLÄ/POIS". Pois kytkeminen palauttaa välittömästi jokaisen havaintotyypin tasolle "vain ilmoita" — myös jo myönnetyt yksittäistapausvaltuutukset. Huomautukset eivät tällöin lakkaa: hätäpysäytys pysäyttää toiminnan, ei ilmoittamisen. Sama kytkin löytyy myös asetuskortista.

## Hyvä tietää

- Tehtaan oletusasetuksena jokainen havaintotyyppi on tasolla "Vain ilmoita" — Klacksy toimii vasta, kun ylläpitäjä nostaa tasoa tietoisesti. Hätäpysäytystä ei tähän tarvita: se ei ole oletuksena käytössä ja pysyy varalla pikajarruna.
- Ilmoitukset menevät vain ylläpitäjille ja valtuutetuille suunnittelijoille. Se, joka näkee vain tietyt ryhmät, saa myös vain näiden ryhmien havainnot; ylläpitäjät näkevät kaiken. Suunnittelijat saavat havainnot, mutta eivät näe tasoasetusta.
- Taso "Valmistele skenaario" pätee vain korjauksiin, jotka voidaan kuvata skenaariona. Tällä hetkellä tallennettu korjaus ei kuulu niihin — sen kohdalla vaikuttaa yksinomaan "Suorita".
- Asetuskortti ja autonomiakytkin edellyttävät ylläpitäjän oikeuksia; ilman niitä autonomian tilaa ei voi tarkastella.
- Tunneittainen rytmi on kiinteästi sisäänrakennettu eikä sitä voi säätää käyttöliittymän kautta; ensimmäinen ajo käynnistyy kaksi minuuttia ohjelman käynnistymisen jälkeen.

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu tunnuksilla `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
