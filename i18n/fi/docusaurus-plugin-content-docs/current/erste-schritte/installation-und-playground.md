---
sidebar_position: 1
---

# Asennus ja Playground

Klacksia voit kokeilla minuutissa — ja asentaa muutamassa minuutissa. Ei rekisteröitymistä, ei myyntipuheita.

## Playground: leikkikenttä tutustumiseen

Playground ei ole asennusvaihtoehto, vaan julkinen Klacks-instanssi esimerkkitiedoilla, jolla voi kokeilla vapaasti ilman sitoumuksia — siitä nimi juontuu. Se on käytössä osoitteessa **[play.klacks-software.ch](https://play.klacks-software.ch)**:

- **Kirjautuminen:** `admin@test.com` · **Salasana:** `P@ssw0rt1`
- Sinulla on täydet ylläpitäjän oikeudet — kokeile mitä tahansa.
- Esimerkkitiedot sisältävät noin 5 000 asiakasta, ja ne ovat pelkkää demodataa.
- **Älä syötä oikeita henkilötietoja.** Tietokanta palautetaan joka päivä klo 04.00 Sveitsin aikaa (02.00 UTC) kiinteään tilaan.

## Asennus: Omalla palvelimella (On-Premise)

On-Premise-paketti sisältää kaiken: Docker-imaget, asennusohjelman, tietokannan, HTTPS:n ja automaattiset päivitykset. Lataat sen yksinomaan [Klacks Storesta](https://klacks-software.ch/store/?culture=fi).

Valitse Klacks Storessa halutessasi toimiala ja lataa maasi ZIP-paketti. Asennusohjelma luo salasanat ja varmenteet itse, lataa ajantasaiset Docker-imaget ja odottaa, että kaikki on käynnissä.

### Linux: vaihe vaiheelta

Tarvitset koneen, jossa on vähintään 8 Gt RAM-muistia, vapaat portit 80 ja 443, internetyhteys ja tili, jolla on `sudo`-oikeudet. Dockerin ei tarvitse olla jo asennettuna (katso vaihe 4).

1. **Lataa ZIP Klacks Storesta.** Maasi sivulta [Klacks Storessa](https://klacks-software.ch/store/?culture=fi), halutessasi toimialasi mukaan.
2. **Pura se kiinteään kansioon**, esimerkiksi `~/klacks`, ei kansioon `Downloads` eikä `/tmp`. Automaattiset päivitykset toimivat myöhemmin juuri tämän kansion kanssa; jos se poistetaan tai siirretään, ne lakkaavat toimimasta. Asennusohjelma varoittaa, jos se käynnistetään kansiosta `Downloads` tai `/tmp`.

   ```bash
   unzip 'klacks-onprem-*.zip' -d ~/klacks
   ```

3. **Avaa kansiossa pääte.** Tiedostonhallinnassa se onnistuu yleensä napsauttamalla kansiota hiiren oikealla painikkeella (valinnan nimi riippuu työpöytäympäristöstä), tai kirjoitat `cd ~/klacks`.
4. **Käynnistä asennusohjelma:**

   ```bash
   sudo bash ./install-de.sh
   ```

   Saksan paketissa komentosarjan nimi on `install-de.sh`; muiden maiden paketeissa nimessä on kyseisen maan koodi, eli yleisesti `sudo bash ./install-*.sh`. Asennusohjelma tarvitsee `sudo`-oikeudet, jotta se voi käyttää Dockeria ja tarvittaessa asentaa sen. Ilman `sudo`-oikeuksia se toimii vain, jos Docker on jo asennettu ja käyttäjäsi kuuluu ryhmään `docker`.

   **Jos Docker puuttuu**, asennusohjelma tarjoutuu asentamaan Docker Enginen virallisella `get.docker.com`-komentosarjalla. Tämä tapahtuu vain vahvistuksesi jälkeen (`[y/N]`, oletus on Ei) ja vain Ubuntulla, Debianilla, Fedoralla, CentOS:llä ja RHEL:llä; tätä varten koneella on oltava `curl` tai `wget` sekä internetyhteys. Muilla jakeluilla asennat Docker Enginen ja Compose-lisäosan itse [Dockerin ohjeen](https://docs.docker.com/engine/install/) mukaan. Jos asennusohjelma ajetaan ilman päätettä, `INSTALL_DOCKER=yes` vastaa kysymykseen Kyllä. Docker itse ei suosittele tätä komentosarjaa tuotantokäyttöön; tuotantopalvelimelle on parempi asentaa Docker itse. Vanhempaa `docker-compose`-versiota (versio 1) ei tueta, tarvitaan `docker compose` -lisäosa.
5. **Odota.** Asennusohjelma luo salasanat ja itse allekirjoitetun varmenteen, lataa imaget ja käynnistää stackin. Ensimmäisellä käynnistyksellä API migroi tietokannan; asennusohjelma odottaa sitä enintään kymmenen minuuttia. Lopuksi näytetään `Klacks is up at https://…` ja sen alla **asennuskoodisi** (`Your setup code`, kaksitoista merkkiä kolmessa neljän merkin ryhmässä). Kirjoita se muistiin; se on myös asennuskansion `.env`-tiedostossa nimellä `KLACKS_SETUP_CODE`.
6. **Avaa Klacks:** `https://localhost` (jos palvelimen nimi tai HTTPS-portti on toinen, käytä asennusohjelman ilmoituksen osoitetta). Selain varoittaa itse allekirjoitetusta varmenteesta; vahvista varoitus. Sen jälkeen luot asennuskoodilla oman ylläpitäjätilisi, katso [Ensimmäinen kirjautuminen](#first-login).
7. **Päivitykset** tulevat tämän jälkeen automaattisesti mukana toimitettavan päivityspalvelun kautta. Asennusohjelmaa ei tarvitse käynnistää uudelleen sitä varten.

Jos Docker näkee alle 7 GiB muistia, ensiasennus keskeytyy. Pienemmän isännän määrittämisestä kerrotaan kohdassa [Järjestelmävaatimukset](../betrieb/systemvoraussetzungen.md).

### Windows

Windowsissa käynnistät `install-*.ps1`-tiedoston `install-*.sh`-tiedoston sijaan.

### Asetukset: palvelimen nimi ja maaprofiili

Valinnaisella maaprofiililla asennusohjelma määrittää heti ensimmäisellä käynnistyksellä kielen, pyhäpäivät, työaikarajat, lisät ja toimialamallit:

```bash
sudo SERVER_NAME=klacks.example.com REGION=de bash ./install.sh
```

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1 -ServerName klacks.example.com -Region de
```

Linuxissa muuttujat kuuluvat **`sudo`-komennon jälkeen**: `sudo` ei yleensä välitä asennusohjelmalle muuttujia, jotka ovat sen edellä. Maapaketin komentosarjalla kutsu näyttää tältä: `sudo SERVER_NAME=klacks.example.com bash ./install-de.sh`.

Klacks Storen maapaketti sisältää oman maansa profiilin. Mukana toimitettavat komentosarjat `install-*.sh` ja `install-*.ps1` asettavat `REGION`- tai `-Region`-arvoksi jo kyseisen maan koodin — Saksan paketissa esimerkiksi `install-de.sh` ja `install-de.ps1`. Jos kutsut suoraan `install.sh`- tai `install.ps1`-tiedostoa, `REGION`- tai `-Region`-arvon on oltava tämä maakoodi; ilman sitä asennusohjelma ei määritä maaprofiilia.

## Toimisto-PC Windowsilla: myös Microsoft Storessa

Yksittäiselle Windows-toimisto-PC:lle on oma asennusohjelma, joka toimii ilman Dockeria. Saat sen [Klacks Storesta](https://klacks-software.ch/store/?culture=fi) oman maasi sivulta ja myös [Microsoft Storesta](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (kohde ”Klacks”). Molemmissa kaupoissa se on sama asennusohjelma. Microsoft Storesta asennettuna se ottaa käyttöön Windowsissa asetetun maan; toimialaa et valitse siellä, ja jos maalle ei ole maaprofiilia, asennus ei ota sellaista käyttöön. Palvelin-, Docker- ja Linux-asennukset sekä maa- ja toimialapaketit ovat saatavilla vain Klacks Storesta.

Toimisto-PC:llä uudet versiot tulevat Klacksissa kohdan Asetukset > [Ohjelmistopäivitykset](../einstellungen/system-sicherheit/updates.md) kautta, myös silloin kun Klacks on asennettu Microsoft Storesta. Uudempaa asennusohjelmaa ei voi asentaa olemassa olevan asennuksen päälle.

## Ensimmäinen kirjautuminen: oma ylläpitäjätilisi {#first-login}

Vasta asennetussa Klacksissa ei vielä ole sinun tiliäsi. Siksi selaimessa ensimmäisellä avauskerralla näkyy heti sivu ”Luo oma pääkäyttäjätilisi”, ennen mitään kirjautumista: etu- ja sukunimi, sähköpostiosoite (siitä tulee käyttäjätunnuksesi) ja kahdesti syötetty salasana; salasanasäännöt näkyvät vieressä reaaliajassa.

Palvelimella (Docker) sivu vaatii lisäksi **asennuskoodin**, vaikka avaisit Klacksin selaimessa itse palvelimella. Asennusohjelma näytti koodin asennuksen lopussa; se on myös asennuskansion `.env`-tiedostossa nimellä `KLACKS_SETUP_CODE`. Se on voimassa vain tätä yhtä käyttöönottoa varten. Väärä koodi hylätään (”Asennuskoodi ei täsmää. Tarkista se ja yritä uudelleen.”).

Heti kun tallennat, tilisi saa ylläpitäjän roolin ja mukana toimitettu testitili poistetaan samassa vaiheessa lopullisesti käytöstä; sen jälkeen Klacks kirjaa sinut automaattisesti sisään omalla tililläsi; jos se epäonnistuu, kirjaudu uusilla tunnuksilla. Niin kauan kuin asennuskoodi on asetettu, mukana toimitettua testitiliä ei voi muutenkaan käyttää kirjautumiseen selaimessa. Seuraavaksi tulee sivu ”Maa ja toimiala”.

Kunnes oma tilisi on luotu, palvelin estää jokaisen muun kutsun virhekoodilla `SETUP_REQUIRED` (HTTP 403). Kyse ei ole häiriöstä: vain käyttöönotto puuttuu vielä.

- Windows-toimisto-PC:llä et tarvitse asennuskoodia, jos avaat Klacksin selaimessa samalla PC:llä. Toiselta koneelta näkyy vain kirjautumissivu.
- Jos Klacks näyttää sen sijaan kirjautumissivun, esimerkiksi asennuksessa ilman asennuskoodia, asennusohjelman tuloste kertoo mukana toimitetun tilin; silloinkin Klacks ohjaa sinut suoraan luomaan oman ylläpitäjätilisi.
- Jos kaksi henkilöä lähettää lomakkeen samanaikaisesti, vain ensimmäisestä tulee ylläpitäjä; toinen päätyy kirjautumissivulle.

Vain Playgroundissa ja paikallisessa kehitysympäristössä tämä portti on tarkoituksella poissa käytöstä; siellä mukana toimitettu tili säilyy.

## Hyvä tietää

- **Vaatimukset:** vähintään 8 Gt RAM-muistia ja 4 vCPU, Docker ja Compose v2 (Linuxissa asennusohjelma asentaa Dockerin pyynnöstä), vapaat portit 80 ja 443 sekä lähtevä HTTPS-yhteys osoitteisiin `ghcr.io` ja `github.com`. Yksityiskohdat ja laskuesimerkit pienemmille isännille ovat kohdassa [Järjestelmävaatimukset](../betrieb/systemvoraussetzungen.md).
- Mukana toimitettava päivityspalvelu pitää asennuksesi automaattisesti ajan tasalla — varmuuskopio otetaan ennen jokaista päivitystä ja ongelmatilanteessa palataan automaattisesti edelliseen versioon. Miten tämä tarkemmin toimii, kerrotaan kohdassa [Päivitykset ja palautus](../betrieb/updates-und-rollback.md).
- Tietosi ovat omassa tietokannassasi omalla infrastruktuurillasi. Jotkin toiminnot kutsuvat silloin ulkoisia palveluja — mitä, kerrotaan seuraavassa osassa.
- Asennusohjelman uudelleenkäynnistys on vaaraton, mutta se ei ole päivitys: se säilyttää salasanat, varmenteen ja ensiasennuksessa määritetyn version ja käynnistää stackin uudelleen (Linuxissa taas `sudo`-oikeuksilla, jos asensit ensin `sudo`-oikeuksilla). Näin korjaat stackin, joka ei enää toimi. Uudet versiot asentaa päivityspalvelu, ei asennusohjelma.
- Jos tuot oman varmenteen, aseta `server.crt` ja `server.key` ennen asennusta asennuskansion hakemistoon `nginx/certs/`; muuten asennusohjelma luo itse allekirjoitetun varmenteen.
- Tietokantasi varmuuskopiot otat säännöllisesti itse — miten se tehdään, kerrotaan kohdassa [Varmuuskopiointi ja palautus](../betrieb/backup-und-wiederherstellung.md).

## Mitä ulkoisia palveluja Klacks kutsuu

Tietosi ovat palvelimillasi. Joitakin toimintoja varten Klacks kutsuu normaalikäytössä silti internetin julkisia palveluja. Näiden palvelujen osoitteet on kiinteästi sisäänrakennettu; omaa geokoodaus-, reititys- tai karttapalvelinta ei voi tällä hetkellä määrittää.

| Palvelu | Mihin | Mitä lähetetään | Oletus | Poisto käytöstä |
|---|---|---|---|---|
| OpenStreetMapin Nominatim (`nominatim.openstreetmap.org`) | Osoitteiden muuntaminen koordinaateiksi: osoitetta tallennettaessa, yrityksen sijaintia varten, reittisuunnittelussa sekä osoitteiden ja ryhmien sijaintien taustapalveluissa | Katu, postinumero, paikkakunta ja maa ilman henkilöiden nimiä; ryhmien sijainneissa paikkakunnan tai ryhmän nimi | päällä | `BackgroundServices__AddressGeocoding=false` ja `BackgroundServices__GroupGeocoding=false` poistavat käytöstä vain taustapalvelut. Osoitetta tallennettaessa geokoodaus tehdään edelleen. |
| Julkinen OSRM-palvelin (`router.project-osrm.org`) | Matka-ajat, etäisyydet ja reitit kartalla | Käyntikohteiden koordinaatit ilman nimiä | päällä, kunhan OpenRouteService-avainta ei ole tallennettu; selain kysyy OSRM:ltä lisäksi suoraan, jos Klacks-palvelin ei palauta reittiä | ei ole tarjolla |
| OpenRouteService (`api.heigit.org`) | kuten OSRM, lisäksi pyörä ja jalan | Käyntikohteiden koordinaatit ilman nimiä | vain tallennetulla API-avaimella | poista avain kohdasta Asetukset > OpenRoute |
| Karttalaatat (OpenStreetMap, OpenStreetMap.de tai CARTO) | Kartan näyttö kojelaudassa | selaimelta: IP-osoite ja näytettävä karttarajaus | päällä heti kun kartta näytetään | palveluntarjoaja valittavissa kartassa, omaa laattapalvelinta ei |
| GitHub (`github.com`) ja GitHub Container Registry (`ghcr.io`) | Asennus ja automaattiset päivitykset: julkaisumanifesti ja Docker-imaget | tavalliset latauspyynnöt, ei suunnittelutietoja | päällä | — |
| Klacks Marketplace (`klacks-software.ch/store`) | Kieli- ja maapaketit | Maakoodi, pakettikoodi tai hakusana | pakettihaussa ja maaprofiilia ladattaessa | osoite määritettävissä asetuksella `LanguagePlugins__MarketplaceUrl` |
| Hugging Face (`huggingface.co`) | Klacksyn hakumallien kertaluonteinen lataus | ei asiakastietoja (tiedoston lataus) | ensimmäisen tarpeen yhteydessä | — |
| Open-Meteo (`api.open-meteo.com`, `air-quality-api.open-meteo.com`) | Sää- ja ilmanlaatuvihje tervetuliaiswidgetissä, säähaku Klacksyn kautta | Selaimen koordinaatit (jos sallittu) tai yrityksen sijainnin koordinaatit | päällä | `Assistant__Ambient__Enabled=false` poistaa käytöstä vain ilmanlaatu- ja pyhäpäivävihjeen, ei tervetuliaisen säähakua |
| Nager.Date (`date.nager.at`) | Pyhäpäivävihje tervetuliaiswidgetissä | Maakoodi | päällä | `Assistant__Ambient__Enabled=false` |
| Pilvi-tekoälyn tarjoajat (esim. OpenAI, Anthropic, Google, DeepSeek) | Klacksy ja tekoälyavusteiset taustatoiminnot (esim. ryhmien sijaintien luokittelu) | Pyynnöt sekä niihin tarvittava asiayhteys tiedoistasi | vain jos pilvimalli on määritetty | käytä paikallista mallia |
| Puhe-, haku- ja käännöspalvelut (esim. Deepgram, Groq, AssemblyAI, Edge TTS, OpenAI TTS, ElevenLabs, Google Cloud TTS, DeepL, verkkohaku) | Puheen syöttö ja tulostus, verkkohaku, käännös | Ääni tai teksti | vain jos käytössä tai määritetty; selaimen puheentunnistus toimii selaimesta riippuen sen verkkopalvelun kautta | älä käytä toimintoa |

Sarakkeen ”Poisto käytöstä” kytkimet ovat `klacks-api`-kontin ympäristömuuttujia; lisää ne tiedostoon `docker-compose.yml` tämän palvelun `environment:`-osioon. Pelkkä merkintä `.env`-tiedostossa ei riitä, koska palvelu ei lue sitä `env_file`-tiedostona.

Paikallisen tekoälymallin kanssa mikään kielimallille tehty pyyntö ei päädy ulkoiselle tekoälyn tarjoajalle. Tämän taulukon muihin palveluihin se ei vaikuta.

---

*Kysyttävää asennuksesta? [Klacks-yhteisö Discordissa](https://discord.gg/YRP8p2abVC).*
