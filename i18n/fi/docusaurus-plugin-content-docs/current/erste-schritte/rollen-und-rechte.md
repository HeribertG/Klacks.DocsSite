---
sidebar_position: 4
---

# Roolit ja käyttöoikeudet

Klacksissa on tarkalleen kaksi käyttäjätileille osoitettavaa oikeustasoa: **Supervisor** ja **Admin**. Kolmatta, teknisesti itsenäistä roolia ei ole — alla käytetty käsite "suunnittelija" kuvaa **päivittäisen työn tehtävää**, ei lisäkäyttöoikeustasoa.

## Kaksi todellista roolia

**Supervisor** saa luoda, muokata ja poistaa osoitteita, ryhmiä, sopimuksia, poissaoloja ja työvuoroja sekä hyväksyä työvuorolistassa päivän tai ryhmän ja perua tämän hyväksynnän. Yksittäisten työaikojen pelkkä vahvistaminen ei sen sijaan vaadi erityistä roolia — sen voi tehdä mikä tahansa käyttäjätili.

**Admin** saa lisäksi kaiken, mitä Supervisorkin saa, sekä: pääsyn kaikkiin asetuksiin (mukaan lukien itse käyttäjähallintaan), jaksojen päättämisen ja uudelleenavaamisen sekä erityisen suojattujen alueiden, kuten identiteetintarjoajan, raporttien ja kalenterisääntöjen, hallinnan.

Rooli osoitetaan käyttäjähallinnan pudotusvalikosta (hammasratas-kuvake) ja tulee voimaan välittömästi ilman erillistä tallennuspainiketta.

## "Suunnittelija" tehtävänä, ei roolina

Arjessa varsinaisen suunnittelutyön hoitaa yleensä Supervisor-tili — automaattisen suunnittelun käynnistäminen, muutosten tekeminen suunnitteluruudukossa vetämällä ja pudottamalla, päivien tai ryhmien lähettäminen hyväksyttäväksi. Tämä ei ole erillinen käyttöoikeustaso, vaan yksinkertaisesti oikeudet, jotka Supervisor-tilillä on muutenkin.

## Hyvä tietää

- Viimeksi kirjautunut käyttäjä näytetään käyttäjähallinnassa, mutta häntä ei voi siellä itse muokata, hänen oikeuksiaan muuttaa eikä häntä poistaa.
- Jaksojen lopullinen päättäminen tai uudelleenavaaminen on varattu yksinomaan Adminille — vaikka Supervisor olisi jo hyväksynyt päiviä tai ryhmiä.
- Käyttäjätilin ei tarvitse välttämättä olla yhdistetty henkilöstön perustietokorttiin — käyttäjähallinta ja henkilöhallinta ovat erillisiä alueita.

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjautuminen `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
