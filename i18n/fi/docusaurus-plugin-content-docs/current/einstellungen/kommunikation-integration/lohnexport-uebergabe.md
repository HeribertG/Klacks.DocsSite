---
sidebar_position: 7
---

# Palkkaviennin luovutus

Kun ryhmän mukaan rajattu jakso sinetöidään, Klacks voi luovuttaa sen palkkatiedot automaattisesti ulkoiseen palkkajärjestelmään. Tämä sivu selittää, mitä tämä edellyttää ja miksi luovutus toisinaan näennäisesti ei tuo mitään — tämän ominaisuuden yleisin tukitapaus.

## Näin se toimii

**Edellytys: palkkaviennin lisäpaketti.** Automaattinen luovutus palkkajärjestelmään ei ole ydintoiminto, vaan edellyttää omaa lisäpakettia, jonka on oltava asennettuna **ja** aktiivisena kohdassa Asetukset > Ominaisuuslaajennukset. Jos lisäpaketti puuttuu tai on vain pois käytöstä, luovutus ei tuota täysin mitään — ei tiedostoa, ei huomautusta, ei sinulle näkyvää merkintää. Tämä on tiukempaa kuin pois käytöstä otettu vientimuoto vientiasetuksissa: se jättää ainakin merkinnän palvelimen lokiin; tässä ei ole edes sitä.

**Kertaluonteinen luovutus (idempotenssi).** Automaattinen luovutus suoritetaan tasan kerran jokaista ryhmän, kohdejärjestelmän ja tarkan päivämääräalueen yhdistelmää kohden — tämä estää samojen palkkatietojen päätymisen vahingossa palkkajärjestelmään kahteen kertaan. Jos avaat jo sinetöidyn jakson uudelleen, korjaat jotain ja sinetöit uudelleen, toinen luovutus ohitetaan kommentoimatta: juuri tälle yhdistelmälle on jo olemassa luovutusmerkintä, eikä uudelleenavaaminen poista sitä.

**Myös manuaalinen lataus lasketaan mukaan.** Manuaalinen, tarpeen mukaan tehty palkkalataus samalle ryhmälle/samalle kohdejärjestelmälle/samalle ajanjaksolle luo saman merkinnän kuin automaattinen luovutus. Manuaalinen lataus, joka suoritetaan ennen automaattista luovutusta, „kuluttaa" sen kyseiseltä ajanjaksolta samalla tavalla, kuin jos se olisi jo ajettu automaattisesti.

| Miksi mitään (uutta) ei tullut? | Merkintä olemassa? | Estääkö myöhempää manuaalista latausta? |
|---|---|---|
| Lisäpaketti ei ole asennettu/aktiivinen | ei | ei |
| Juuri tälle yhdistelmälle jo luovutettu | kyllä (näkyvissä jakson päättämisen välilehdellä „Loki") | ei |

**Kaksi tarkennusta:**

- Manuaalinen lataus **ei** ota huomioon mahdollista tuen tallentamaa vientimuodon korjausta — se käyttää aina oletusarvoja, vaikka kohdejärjestelmälle olisi voimassa aktiivinen korjaus, joka vaikuttaisi automaattisessa polussa.
- Kertalukko on tarkka: se pätee vain identtisellä ryhmällä, identtisellä kohdejärjestelmällä ja identtisellä alkamis-/päättymispäivällä. Toista ajanjaksoa tai toista kohdejärjestelmää aiempi luovutus ei estä.

**Jos sinetöinnin jälkeen mitään ei tule tai korjattuja lukuja pitää toimittaa jälkikäteen:** Tarkista ensin, onko sopiva lisäpaketti asennettuna ja aktiivisena kohdassa Asetukset > Ominaisuuslaajennukset. Uudelleenavaamisen ja korjauksen jälkeen luotettava tapa saada korjatut luvut palkkajärjestelmään on **manuaalinen vienti** jakson päättämisen alueella (välilehti „Viennit") — siihen ei vaikuta lisäpaketin lukko eikä automaattisen luovutuksen kertalukko. Koska sekään ei ota huomioon vientimuodon korjausta, tarkista tässä tapauksessa viedyt luvut käsin mahdollista aktiivista korjausta vasten.

## Hyvä tietää

- Jokaisen luovutuksen perustana on sinetöity, ryhmän mukaan rajattu jakso — miten jakso sinetöidään, on kuvattu sivulla [Jakson päättäminen](../../planen/periodenabschluss.md). Sinetöinti ja uudelleenavaaminen on siellä varattu ylläpitäjärooleille.
- Tämä sivu kuvaa palkkatietojen **viennin** Klacksista palkkajärjestelmään. Käänteisen suunnan — tilausten **tuonnin** ERP-järjestelmästä Klacksiin — kuvaavat [ERP-vastaanottopisteet](./erp-uebernahmepunkte.md).
- Lisäpaketteja hallitaan keskitetysti kohdassa Asetukset > Ominaisuuslaajennukset: asentaminen, aktivointi/deaktivointi tai täydellinen poistaminen.
- Pois käytöstä otettu lisäpaketti pysyy asennettuna, mutta estää automaattisen luovutuksen yhtä täydellisesti kuin asentamaton.

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu tunnuksilla `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
