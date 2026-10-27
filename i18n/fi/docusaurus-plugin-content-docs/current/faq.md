---
sidebar_position: 9
---
# Usein kysytyt kysymykset

Kysymykset, joita esitetään useimmin ennen ensimmäistä käyttöä — rehellisin vastauksin, myös silloin kun vastaus on ”ei vielä”.

## Kokeilu ja aloitus

**Pitääkö minun asentaa Klacks nähdäkseni sen?**
Ei. [Playground](https://play.klacks-software.ch) on julkinen instanssi demotiedoilla; kirjaudutte tunnuksilla `admin@test.com` / `P@ssw0rt1` ja teillä on täydet Admin-oikeudet. Tietokanta nollataan päivittäin klo 04:00 Sveitsin aikaa — älkää luoko sinne oikeita henkilötietoja.

**Kuinka kauan asennus kestää?**
Asennusohjelma on yksi komento. Se luo salasanat ja sertifikaatin, kiinnittää nykyisen version, käynnistää pinon ja odottaa, kunnes kaikki on terveessä tilassa. Pisin aika kuluu imagejen lataamiseen. Vaatimukset löytyvät kohdasta [Järjestelmävaatimukset](../betrieb/systemvoraussetzungen/).

**Miksi minun pitää luoda oma Admin-tili?**
Koska mukana toimitetulla tilillä on julkisesti tunnettu salasana. Klacks sallii kirjautumisen sillä täsmälleen kerran ja vaatii sen jälkeen oman tilinne; sen jälkeen oletustili poistetaan käytöstä. Tämä on tarkoituksellista, ei virhe.

## Ylläpito

**Missä tietoni sijaitsevat?**
Teidän infrastruktuurissanne. Klacks ei lähetä tietojanne takaisin valmistajalle. Jos liitätte tekoälymallin ulkoisena palveluna, **tähän** palveluun pätevät luonnollisesti sen ehdot — mallin valinta on teidän.

**Tarvitsenko ehdottomasti pilvipalveluntarjoajan?**
Ei, se on On-Premisen ydin: pino toimii omalla palvelimellanne. Tarvitsette vain **lähtevän** yhteyden paketti- ja päivityslähteisiin (`ghcr.io`, `github.com`). Täysin ilman internet-yhteyttä toimivaa käyttöä ei tällä hetkellä **ole** — asennukset eristetyissä verkoissa ovat vielä toteuttamatta oleva laajennusvaihe.

**Miten varmuuskopioin tietoni?**
Itse — varmuuskopiointi on teidän vastuullanne. Miten se tehdään ja minkä volyymin saa ehdottomasti unohtaa varmuuskopioimatta, selviää kohdasta [Varmuuskopiointi ja palautus](../betrieb/backup-und-wiederherstellung/).

**Mitä tapahtuu, jos päivitys epäonnistuu?**
Päivityspalvelu varmuuskopioi tietokannan etukäteen, kytkee uudet versiot käyttöön yhdessä ja tarkistaa sen jälkeen terveyden. Jos uusi versio ei ole terve, se palauttaa edellisen version automaattisesti. Lisätietoja kohdassa [Päivitykset ja palautus](../betrieb/updates-und-rollback/).

**Toimiiko Klacks nykyisellä laitteistollani?**
Ohjeellisesti: **8 Gt RAM-muistia ja 4 vCPU:ta**. Pienemmille isännille on dokumentoituja asetuksia, jotka vapauttavat muistia — sillä hinnalla, että seuraava kysymys Klacksylle kestää hieman kauemmin.

**Sopiiko Klacks identiteetintarjoajani kanssa?**
Kyllä. Klacks voidaan liittää olemassa olevaan identiteetintarjoajaan omien tilien ylläpitämisen sijaan — katso [Identiteetintarjoaja](../einstellungen/kommunikation-integration/identity-provider/).

## Toiminnot

**Mille toimialoille Klacks sopii?**
Se on suunniteltu vuoro- ja käyntipohjaisille toimialoille: kotihoito ja Spitex, sairaalat, turvallisuuspalvelut, siivous- ja kiinteistöpalvelut sekä logistiikka.

**Millä kielillä käyttöliittymä puhuu?**
Dokumentaatio on saatavilla 25 kielellä, muun muassa saksaksi, englanniksi, ranskaksi, italiaksi, espanjaksi, puolaksi, japaniksi, kiinaksi (yksinkertaistettu ja perinteinen), arabiaksi ja heprean kielellä — arabia ja heprea myös oikealta vasemmalle suuntautuvalla lukusuunnalla.

**Pitääkö minun sitoutua yhteen tekoälymalliin?**
Valitsette palveluntarjoajan ja mallin itse ja voitte vaihtaa niitä. Miten tämä määritetään ja tarkistetaan, selviää kohdista [LLM-palveluntarjoajat ja mallit](../einstellungen/klacksy-konfiguration/llm-provider-und-modelle/) ja [Mallin yhteystesti](../einstellungen/klacksy-konfiguration/modell-verbindungstest/).

**Mitä Klacks maksaa?**
Lähdekoodi on GNU Affero General Public License v3 (AGPL-3.0) -lisenssillä — saatte lukea, muokata ja ajaa sitä itse. Jos tarjoatte muokatun version muille verkon kautta, teidän on asetettava muokattu lähdekoodi myös näiden käyttäjien saataville AGPL-3.0-lisenssillä. Kaikki tämän ylittävä (kysymykset, vaihto, jatkokehitys) kulkee [Klacks-yhteisön Discordin](https://discord.gg/YRP8p2abVC) ja [julkisen lähdekoodivaraston](https://github.com/HeribertG/Klacks.Api) kautta.

**Onko Klacks valmis?**
Ei, eikä missään väitetä niin. Klacks on rakenteilla, mutta sitä kehitetään julkisesti ja se on todella käytössä — Playgroundissa voitte milloin tahansa tarkistaa nykytilan itse sen sijaan, että uskoisitte kuvaukseen.

## Mukaan tuleminen

**Olen löytänyt virheen tai minulla on kysymys.**
Nopeimmin [Discord-yhteisössä](https://discord.gg/YRP8p2abVC). Ohjelmiston virheistä ilmoitus kuuluu [varastoon](https://github.com/HeribertG/Klacks.Api). Hyödyllisiä ovat aina: versio, viimeinen vaihe ennen virhettä ja lokien viimeiset rivit — katso [Vianmääritys](../betrieb/fehlerbehebung/).

**Voinko itse osallistua?**
Lähdekoodi on avointa ja dokumentaatio on samassa talossa. Huomautukset epäselvistä kohdista ovat yhtä tervetulleita kuin koodi.

---

*Puuttuuko kysymyksenne? [Klacks-yhteisö Discordissa](https://discord.gg/YRP8p2abVC).*
