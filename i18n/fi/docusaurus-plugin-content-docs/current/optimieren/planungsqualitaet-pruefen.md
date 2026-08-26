---
sidebar_position: 7
---

# Suunnittelun laadun tarkistaminen: rikkomukset, aukot ja ohitetut sijoitukset

Suunnitteluavustajan ajon jälkeen Klacks asettaa tuloksen viereen kolme diagnoosi-taulukkoa: missä suunnitelma törmää sääntöön, mistä puuttuu pätevyys ja mitä ei ylipäätään suunniteltu.

## Näin se toimii

Kolme raporttia näkyvät kunkin suunnitteluavustajan dialogissa — ei suunnitteluruudukossa. Ne kuuluvat avustajan ajon tulokseen ja ovat näkyvissä vain ylläpitäjille, koska automaattinen suunnittelu edellyttää yleisesti Admin-roolia. Jokainen raportti kertoo otsikossaan merkintöjensä määrän ja **jää kokonaan näyttämättä, jos se ei löytänyt mitään** — puuttuva laatikko on siis hyvä uutinen.

**Näin pääset dialogeihin:** Taikasauva-painike työvuorosuunnitelmassa käynnistää perustilassa suoraan suunnitteluajon näyttämättä mitään dialogia. Näppäinyhdistelmällä **Ctrl+Shift+H** ylläpitäjät kytkevät painikkeen pudotusvalikoksi, jossa on yksittäiset suunnitteluavustajat (Plan, Fuzzy Harmonizer, Holistic Harmonizer, Background Optimizer, Recovery) — vasta tämän pudotusvalikon kautta avautuvat dialogit diagnoosi-taulukkoineen.

**Pätevyysaukot** näkyvät tuloksen mukana, siis *ennen* kuin otatte sen käyttöön. Sarakkeet: Vakavuusaste, Työvuoro, Päivämäärä, Vaadittu pätevyys, Syy — sekä lisäksi sarake "Työntekijä", heti kun vähintään yksi rivi nimeää henkilön. Syynä on joko *Puuttuu*, *Vanhentunut* tai *Taso liian matala*. Taustalla on kaksi eri tapausta: joko työvuoropaikka jäi tyhjäksi, koska kukaan käytettävissä oleva ei tuo vaadittua pätevyyttä mukanaan — silloin rivi ei nimeä ketään. Tai henkilö jäi työvuoroon, johon hän ei ole pätevä — silloin hänen nimensä on mukana. Jos pätevyys puuttuu vain järjestelmästä, kirjatkaa se henkilölle; [Pätevyysluettelo](../einstellungen/stammdaten-organisation/qualifikationen.md) kuvaa, miten pätevyyksiä ylläpidetään. Muussa tapauksessa suunnittelette jonkun toisen tai mukautatte työvuoron vaatimusta.

**Vaatimustenmukaisuusrikkomukset** näkyvät sen *jälkeen*, kun olette ottaneet tuloksen käyttöön. Sarakkeet: Päivämäärä, Työntekijä, Kommentti; kommentti nimeää rikotun säännön selkokielellä konkreettisine arvoineen. Punaiset rivit ovat virheitä, keltaiset varoituksia ja huomautuksia. Kahden harmonointiavustajan kohdalla raportti näyttää yksinomaan sen, mitä uusi skenaario tuo **lisäksi** todelliseen suunnitelmaan verrattuna — sekä sen, kuinka moni näistä rikkomuksista on lukitustilassa. Nämä estävät skenaarion käyttöönoton, kunnes ne on korjattu tai valtuutettu henkilö ohittaa ne nimenomaisesti.

**Ohitetut sijoitukset** esiintyvät vain työvuorosuunnittelun avustajalla, niin ikään käyttöönoton jälkeen — ja läpikotaisin punaisina. Sarakkeet: Päivämäärä, Työntekijä, Työvuoro, Syy. Tässä ei kerrota, mitä suunniteltiin, vaan mitä Klacks tietoisesti **ei** kirjannut: kohdistuksia, jotka olisivat rikkoneet lukitustilassa olevaa sääntöä. Syy näkyy lyhyenä luokkana ("Lepoaika liian lyhyt", "Liian monta peräkkäistä työpäivää", "Aikakollisio" …). Tilanteesta riippuen Klacks tarjoaa valtuutetuille henkilöille tässä mahdollisuuden ottaa ajo silti käyttöön ohituksella; kaikki muut saavat ohjeen toistaa avustaja ohitus aktivoituna tai pyytää valtuutettua henkilöä tekemään niin. Jokainen ohitus kirjataan lokiin.

Mitä sääntöjä tarkistetaan ja kuinka tiukasti ne pätevät, määritätte kohdassa [Suunnittelusäännöt](../planen/planungsregeln.md); miten suunnitelma ylipäätään syntyy, kuvaa [Automaattisuunnittelu: valmis suunnitelma sekunneissa](../planen/auto-planung.md).

## Hyvä tietää

- Lukittu merkintä ei hylkää koko suunnitelmaa: vain kyseiset kohdistukset jäävät pois, saman henkilön puhtaat merkinnät kirjataan silti.
- Pätevyysaukkojen vakavuusasteessa pätee yksinkertainen sääntö: **Virhe** vain, jos pakolliseksi merkitty pätevyys puuttuu kokonaan. Vanhentunut pätevyys, liian matala taso ja jokainen valinnainen vaatimus näkyvät **Varoituksena**.
- Tyhjä työvuoropaikka näkyy pätevyysaukoissa vain, jos todella kukaan käytettävissä ollut ei tullut kyseeseen. Jos se jäi tyhjäksi muista syistä, kyse on tavallisesta alikattavuudesta, eikä sitä raportoida täällä.
- Kun automaattinen suunnittelu käydään läpi kokonaisajona, Klacks ilmoittaa tuloksesta vain lyhyenä ponnahdusviestinä pätevyysaukkojen määrän kera — yksityiskohtaiset taulukot kuuluvat yksittäisten avustajien dialogeihin.
- Raportit ovat puhtaita näkymiä: niitä ei voi muokata, eivätkä ne muuta mitään. Korjaukset tehdään kohdassa [Suunnitteluruudukko: interaktiivinen aikamatriisinne](../planen/plan-raster.md) tai uudella ajolla.

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu tunnuksilla `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
