---
sidebar_position: 1
---

# Installatie en playground

Klacks probeert u binnen een minuut uit — en installeert u binnen enkele minuten. Geen registratie, geen verkoopgesprekken.

## Playground: de speeltuin om kennis te maken

De playground is geen installatievariant, maar een openbare Klacks-omgeving met voorbeeldgegevens om vrijblijvend mee te experimenteren — vandaar de naam. Ze draait op **[play.klacks-software.ch](https://play.klacks-software.ch)**:

- **Login:** `admin@test.com` · **Wachtwoord:** `P@ssw0rt1`
- U heeft volledige adminrechten — probeer alles uit.
- De voorbeeldgegevens omvatten ongeveer 5.000 cliënten en zijn louter demogegevens.
- **Voer geen echte persoonsgegevens in.** De database wordt dagelijks om 04:00 uur Zwitserse tijd (02:00 UTC) teruggezet naar een vaste stand.

## Installatie: op uw eigen server (on-premise)

Het on-premise-pakket bevat alles: Docker-images, installatieprogramma, database, HTTPS en automatische updates. U downloadt het uitsluitend in de [Klacks Store](https://klacks-software.ch/store/?culture=nl).

Kies in de Klacks Store desgewenst uw branche en download het ZIP-bestand voor uw land. Het installatieprogramma genereert zelf wachtwoorden en certificaten, laadt de actuele Docker-images en wacht tot alles draait.

### Linux: stap voor stap

U heeft een machine nodig met minstens 8 GB RAM, vrije poorten 80 en 443, internettoegang en een account met `sudo`-rechten. Docker hoeft nog niet geïnstalleerd te zijn (zie stap 4).

1. **ZIP-bestand downloaden in de Klacks Store.** Op de pagina van uw land in de [Klacks Store](https://klacks-software.ch/store/?culture=nl), desgewenst met uw branche.
2. **Uitpakken in een vaste map**, bijvoorbeeld `~/klacks`, niet in `Downloads` of `/tmp`. De automatische updates werken later met precies deze map; wordt ze verwijderd of verplaatst, dan werken ze niet meer. Het installatieprogramma waarschuwt als het vanuit `Downloads` of `/tmp` draait.

   ```bash
   unzip 'klacks-onprem-*.zip' -d ~/klacks
   ```

3. **In de map een terminal openen.** In de bestandsbeheerder gaat dat meestal met een rechtsklik in de map (de benaming hangt af van de desktopomgeving), of u typt `cd ~/klacks`.
4. **Installatieprogramma starten:**

   ```bash
   sudo bash ./install-de.sh
   ```

   In het pakket voor Duitsland heet het script `install-de.sh`; in andere landenpakketten staat de landcode in de naam, in het algemeen dus `sudo bash ./install-*.sh`. `sudo` is nodig, zodat het installatieprogramma Docker mag aanspreken en zo nodig installeren. Zonder `sudo` lukt het alleen als Docker al is geïnstalleerd en uw gebruiker tot de groep `docker` behoort.

   **Ontbreekt Docker**, dan biedt het installatieprogramma aan Docker Engine te installeren met het officiële script van `get.docker.com`. Dat gebeurt alleen na uw bevestiging (`[y/N]`, standaard is Nee) en alleen op Ubuntu, Debian, Fedora, CentOS en RHEL; daarvoor heeft de machine `curl` of `wget` en internettoegang nodig. Op andere distributies installeert u Docker Engine met de Compose-plugin zelf volgens de [handleiding van Docker](https://docs.docker.com/engine/install/). Draait het installatieprogramma zonder terminal, dan beantwoordt `INSTALL_DOCKER=yes` de vraag met Ja. Docker zelf raadt dit script niet aan voor productiegebruik; voor een productieserver installeert u Docker beter zelf. Het oudere `docker-compose` (versie 1) wordt niet ondersteund, vereist is de plugin `docker compose`.
5. **Wachten.** Het installatieprogramma genereert wachtwoorden en een zelfondertekend certificaat, laadt de images en start de stack. Bij de eerste start migreert de API de database; het installatieprogramma wacht hiervoor maximaal tien minuten. Aan het eind staat `Klacks is up at https://…` en daaronder **uw installatiecode** (`Your setup code`, twaalf tekens in drie groepen van vier). Noteer hem; hij staat ook in het bestand `.env` in de installatiemap als `KLACKS_SETUP_CODE`.
6. **Klacks openen:** `https://localhost` (bij een andere servernaam of HTTPS-poort het adres uit de melding van het installatieprogramma). De browser waarschuwt voor het zelfondertekende certificaat; bevestig de waarschuwing. Daarna maakt u met de installatiecode uw eigen adminaccount aan, zie [De eerste aanmelding](#first-login).
7. **Updates** verlopen daarna automatisch via de meegeleverde updateservice. Het installatieprogramma hoeft u daarvoor niet opnieuw te starten.

Ziet Docker minder dan 7 GiB werkgeheugen, dan wordt een eerste installatie afgebroken. Hoe u een kleinere host inricht, staat onder [Systeemvereisten](../betrieb/systemvoraussetzungen.md).

### Windows

Onder Windows start u `install-*.ps1` in plaats van `install-*.sh`.

### Opties: servernaam en landenprofiel

Met een optioneel landenprofiel richt het installatieprogramma bij de eerste start meteen taal, feestdagen, arbeidstijdgrenzen, toeslagen en branchesjablonen in:

```bash
sudo SERVER_NAME=klacks.example.com REGION=de bash ./install.sh
```

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1 -ServerName klacks.example.com -Region de
```

Onder Linux horen de variabelen **achter** `sudo`: `sudo` geeft variabelen die ervoor staan in de regel niet door aan het installatieprogramma. Met het script van het landenpakket ziet de aanroep er zo uit: `sudo SERVER_NAME=klacks.example.com bash ./install-de.sh`.

Het landenpakket uit de Klacks Store bevat het profiel van zijn land. De meegeleverde scripts `install-*.sh` en `install-*.ps1` zetten `REGION` resp. `-Region` al op de landcode van dat land — in het pakket voor Duitsland bijvoorbeeld `install-de.sh` en `install-de.ps1`. Roept u `install.sh` of `install.ps1` rechtstreeks aan, dan moet `REGION` resp. `-Region` die landcode zijn; zonder die code richt het installatieprogramma geen landenprofiel in.

## Kantoor-pc met Windows: ook in de Microsoft Store

Voor één kantoor-pc met Windows is er een eigen setup die zonder Docker werkt. U vindt deze in de [Klacks Store](https://klacks-software.ch/store/?culture=nl) op de pagina van uw land en ook in de [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (vermelding "Klacks"). In beide stores is het dezelfde setup. Vanuit de Microsoft Store neemt de setup het land over dat in Windows is ingesteld; een branche kiest u daar niet, en als er voor dat land geen landprofiel bestaat, richt de setup er geen in. Server-, Docker- en Linux-installaties en de land- en branchepakketten zijn alleen in de Klacks Store verkrijgbaar.

Op de kantoor-pc komen nieuwe versies via Instellingen > [Software-updates](../einstellungen/system-sicherheit/updates.md) in Klacks, ook als Klacks uit de Microsoft Store komt. Een nieuwere setup kan niet over een bestaande installatie heen worden geïnstalleerd.

## De eerste aanmelding: uw eigen adminaccount {#first-login}

Een nieuw geïnstalleerd Klacks heeft nog geen account van u. Bij het eerste openen in de browser verschijnt daarom meteen de pagina "Eigen beheerdersaccount instellen", nog vóór elke aanmelding: voor- en achternaam, e-mailadres (dat wordt uw aanmeldnaam) en een wachtwoord, tweemaal ingevoerd; de wachtwoordregels staan live ernaast.

Op een server (Docker) vraagt de pagina bovendien om de **installatiecode**, ook als u Klacks in de browser op de server zelf opent. De code heeft het installatieprogramma aan het eind van de installatie getoond; hij staat ook in het bestand `.env` in de installatiemap als `KLACKS_SETUP_CODE`. Hij geldt alleen voor deze ene installatie. Een onjuiste code wordt geweigerd ("De installatiecode klopt niet. Controleer de code en probeer het opnieuw.").

Zodra u opslaat, krijgt uw account de adminrol en wordt het meegeleverde testaccount in dezelfde handeling definitief uitgeschakeld; Klacks meldt u daarna automatisch aan met uw eigen account; mislukt dat, meldt u zich dan aan met de nieuwe inloggegevens. Zolang een installatiecode is ingesteld, kan het meegeleverde testaccount in de browser sowieso niet voor aanmelding worden gebruikt. Daarna volgt de pagina "Land en sector".

Tot uw eigen account is aangemaakt, blokkeert de server elke verdere aanroep met de foutcode `SETUP_REQUIRED` (HTTP 403). Daarachter zit geen storing: alleen de installatie ontbreekt nog.

- Op de kantoor-pc met Windows heeft u geen installatiecode nodig als u Klacks in de browser op dezelfde pc opent. Vanaf een andere computer verschijnt alleen de aanmeldpagina.
- Toont Klacks in plaats daarvan de aanmeldpagina, bijvoorbeeld bij een installatie zonder installatiecode, dan noemt de uitvoer van het installatieprogramma het meegeleverde account; Klacks leidt u ook dan meteen naar het aanmaken van uw eigen adminaccount.
- Dienen twee personen tegelijk in, dan wordt alleen de eerste beheerder; de tweede komt op de aanmeldpagina terecht.

Alleen in de playground en in een lokale ontwikkelomgeving is deze gate bewust uitgeschakeld; daar blijft het meegeleverde account bestaan.

## Goed om te weten

- **Vereisten:** minstens 8 GB RAM en 4 vCPU, Docker met Compose v2 (onder Linux installeert het installatieprogramma Docker na bevestiging), vrije poorten 80 en 443 en uitgaande HTTPS-toegang tot `ghcr.io` en `github.com`. Details en de rekenvoorbeelden voor kleinere hosts staan onder [Systeemvereisten](../betrieb/systemvoraussetzungen.md).
- Een meegeleverde updateservice houdt uw installatie automatisch up-to-date — met back-up voor elke update en automatische rollback bij problemen. Hoe dat in detail verloopt, staat onder [Updates en rollback](../betrieb/updates-und-rollback.md).
- Uw gegevens staan in uw eigen database op uw eigen infrastructuur. Sommige functies roepen daarbij externe diensten aan — welke, staat in de volgende paragraaf.
- Een nieuwe aanroep van het installatieprogramma is onschadelijk, maar geen update: het behoudt wachtwoorden, certificaat en de bij de eerste installatie vastgelegde versie en start de stack opnieuw (onder Linux weer met `sudo`, als u eerst met `sudo` hebt geïnstalleerd). Zo herstelt u een stack die niet meer draait. Nieuwe versies installeert de updateservice, niet het installatieprogramma.
- Brengt u een eigen certificaat mee, plaats dan `server.crt` en `server.key` vóór de installatie in `nginx/certs/` in de installatiemap; anders genereert het installatieprogramma een zelfondertekend certificaat.
- Uw database maakt u regelmatig zelf een back-up van — hoe dat gaat, staat onder [Back-up en herstel](../betrieb/backup-und-wiederherstellung.md).

## Welke externe diensten Klacks aanroept

Uw gegevens staan op uw servers. Voor sommige functies roept Klacks in de standaardwerking toch openbare diensten op internet aan. De adressen van deze diensten zijn vast ingebouwd; een eigen geocoding-, routing- of kaartserver kunt u momenteel niet invoeren.

| Dienst | Waarvoor | Wat wordt verzonden | Standaard | Uitschakelen |
|---|---|---|---|---|
| Nominatim van OpenStreetMap (`nominatim.openstreetmap.org`) | Adressen omzetten in coördinaten: bij het opslaan van een adres, voor de bedrijfslocatie, in de routeplanning en in achtergronddiensten voor adressen en groepslocaties | Straat, postcode, plaats en land, zonder namen van personen; bij groepslocaties de plaats- resp. groepsnaam | aan | `BackgroundServices__AddressGeocoding=false` en `BackgroundServices__GroupGeocoding=false` schakelen alleen de achtergronddiensten uit. Bij het opslaan van een adres wordt nog steeds gegeocodeerd. |
| Openbare OSRM-server (`router.project-osrm.org`) | Reistijden, afstanden en routes op de kaart | Coördinaten van de inzetlocaties, zonder namen | aan, zolang er geen OpenRouteService-sleutel is opgeslagen; de browser vraagt OSRM bovendien rechtstreeks, als de Klacks-server geen route levert | niet voorzien |
| OpenRouteService (`api.heigit.org`) | zoals OSRM, daarnaast fiets en te voet | Coördinaten van de inzetlocaties, zonder namen | alleen met opgeslagen API-sleutel | Sleutel verwijderen onder Instellingen > OpenRoute |
| Kaarttegels (OpenStreetMap, OpenStreetMap.de of CARTO) | Kaartweergave in het dashboard | door de browser: IP-adres en getoond kaartgedeelte | aan, zodra de kaart wordt getoond | Aanbieder te kiezen in de kaart, een eigen tegelserver niet |
| GitHub (`github.com`) en GitHub Container Registry (`ghcr.io`) | Installatie en automatische updates: release-manifest en Docker-images | normale downloadverzoeken, geen planningsgegevens | aan | — |
| Klacks-Marketplace (`klacks-software.ch/store`) | Taal- en landenpakketten | Landcode, pakketcode of zoekterm | bij het zoeken naar pakketten en bij het laden van een landenprofiel | Adres configureerbaar via `LanguagePlugins__MarketplaceUrl` |
| Hugging Face (`huggingface.co`) | eenmalige download van de zoekmodellen voor Klacksy | geen klantgegevens (bestandsdownload) | bij de eerste behoefte | — |
| Open-Meteo (`api.open-meteo.com`, `air-quality-api.open-meteo.com`) | Weer- en luchtkwaliteitsmelding in de welkomstwidget, weerverzoek via Klacksy | Coördinaten van de browser (indien toegestaan) of van de bedrijfslocatie | aan | `Assistant__Ambient__Enabled=false` schakelt alleen de luchtkwaliteits- en feestdagenmelding uit, niet het weerverzoek van de begroeting |
| Nager.Date (`date.nager.at`) | Feestdagenmelding in de welkomstwidget | Landcode | aan | `Assistant__Ambient__Enabled=false` |
| Cloud-AI-aanbieders (bijv. OpenAI, Anthropic, Google, DeepSeek) | Klacksy en AI-ondersteunde achtergrondfuncties (bijv. indeling van groepslocaties) | Verzoeken inclusief de daarvoor noodzakelijke context uit uw gegevens | alleen als een cloudmodel is geconfigureerd | lokaal model gebruiken |
| Spraak-, zoek- en vertaaldiensten (bijv. Deepgram, Groq, AssemblyAI, Edge TTS, OpenAI TTS, ElevenLabs, Google Cloud TTS, DeepL, webzoeken) | Spraakinvoer en -uitvoer, webzoeken, vertaling | Audio resp. tekst | alleen als gebruikt resp. geconfigureerd; de spraakherkenning van de browser werkt, afhankelijk van de browser, via diens onlinedienst | functie niet gebruiken |

De schakelaars in de kolom "Uitschakelen" zijn omgevingsvariabelen van de container `klacks-api`; voer ze in `docker-compose.yml` in onder `environment:` van deze dienst. Een vermelding alleen in het `.env`-bestand volstaat niet, omdat de dienst het niet als `env_file` inleest.

Met een lokaal AI-model komt geen enkel verzoek aan het taalmodel bij een externe AI-aanbieder terecht. Voor de overige diensten in deze tabel verandert dat niets.

---

*Vragen over de installatie? [Klacks-community op Discord](https://discord.gg/YRP8p2abVC).*
