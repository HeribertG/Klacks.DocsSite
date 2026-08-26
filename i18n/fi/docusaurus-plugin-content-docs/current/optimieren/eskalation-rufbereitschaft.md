---
sidebar_position: 8
---

# Eskalaatio ja päivystys

Joku on estynyt, ja työvuoro alkaa muutaman tunnin päästä. Klacks ei silloin herätä koko tiimiä sattumanvaraisesti, vaan käy läpi tallennetun soittolistan — henkilö kerrallaan, kunnes joku ottaa vuoron vastaan.

## Näin se toimii

- **Ketju käynnistyy poissaolon kattamisen yhteydessä**: Jokaiselle vaikutuksen alaiselle päivälle, jolle poissaolevalla henkilöllä oli työvuoro, Klacks luo oman eskalaation — viitaten juuri tähän työvuoroon (katso [Poissaolot hallinnassa](./absenzen-im-blick.md)).
- **Soittolistan luotte kerran**: Kohdassa Asetukset > Eskalaation soittolista ovat kaikki käyttäjät, joilla on ryhmänäkyvyys ja tallennettu puhelinnumero. Järjestyksen määrätte vetämällä ja pudottamalla, se tallentuu välittömästi — yksi järjestys koko toiminnalle.
- **Kuka lopulta tavoitetaan, ratkeaa todellisessa tilanteessa**: Klacks poimii järjestyksestänne henkilöt, joilla on näkyvyys ylemmälle ryhmälle, ohittaa kaikki, jotka on juuri merkitty poissaoleviksi, ja liittää ylläpitäjät turvaverkoksi loppuun.
- **Ilmoitus kulkee useaa reittiä**: Pyyntö päätyy aina Klacksin postilaatikkoon, näkyy kirjautuneille henkilöille heti sovelluksessa ja kulkee lisäksi liitetyn viestisovelluksen kautta — sillä kello kolmelta yöllä kukaan ei istu avoimen selaimen ääressä. Viestisovellusliitäntä ja ketjun automaattinen eteneminen kytketään päälle asennuskohtaisesti.
- **Vastaanotto tapahtuu yhdellä sanalla**: Se, jolta juuri kysytään, vastaa lyhyesti viestisovelluksessa («Otan vastaan»); ylläpitäjät voivat sen sijaan käyttää painiketta *Ota vastaan* sivulla *Käynnissä olevat eskalaatiot*. Sen jälkeen vastaanottava henkilö saa vahvistuksen, kaikki aiemmin kysytyt hiljaisen huomautuksen — ketään ei herätetä toiseen kertaan.

## Hyvä tietää

- Määräaika ei ole itse työvuoron alku, vaan sitä edeltävä varoaika (oletuksena kaksi tuntia) — näin vastaanottavalle henkilölle jää vielä aikaa lähteä liikkeelle.
- Kuinka paljon aikaa yhdellä tasolla on, Klacks laskee jäljellä olevasta määräajasta: mitä lähempänä työvuoro on, sitä lyhyemmät kierrokset. Jos peräkkäisyydelle jää liian vähän aikaa, Klacks kysyy kaikilta jäljellä olevilta samanaikaisesti.
- Sivulla *Käynnissä olevat eskalaatiot* näette jokaisen tason tilan — odottaa, kysytty, otettu vastaan, ei vastausta, ohitettu tai peruutettu. Kun eskalaatio on käynnissä, yläpalkkiin ilmestyy lisäksi varoituskuvake.
- Soittolista ja yleiskatsaus on varattu ylläpitäjille (katso [Roolit ja käyttöoikeudet](../erste-schritte/rollen-und-rechte.md)). Käynnissä olevan eskalaation ylläpitäjät saavat keskeyttää — perusteluineen, jotta jää myöhemmin jäljitettäväksi, miksi ketju pysäytettiin.
- Jolla ei ole puhelinnumeroa käyttäjätilillä, ei näy edes soittolistalla. Pyyntöön viestisovelluksen kautta tarvitaan lisäksi yhdistetty viestisovellusyhteys. Päivystyksen poissaolot ylläpidätte suoraan samassa listassa: alkaen–päättyen, valinnaisella syyllä, halutessanne pysyvästi.

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu tunnuksilla `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
