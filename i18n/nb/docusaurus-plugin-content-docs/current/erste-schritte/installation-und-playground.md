---
sidebar_position: 1
---

# Installasjon og Playground

Klacks kan du prøve på ett minutt — og installere på noen minutter. Ingen registrering, ingen salgssamtaler.

## Playground: lekeplassen for å bli kjent

Playground er ikke et installasjonsalternativ, men en offentlig Klacks-instans med eksempeldata til uforpliktende utforsking — derav navnet. Den kjører på **[play.klacks-software.ch](https://play.klacks-software.ch)**:

- **Login:** `admin@test.com` · **Passord:** `P@ssw0rt1`
- Du har fulle admin-rettigheter — prøv ut alt.
- Eksempeldataene omfatter rundt 5 000 klienter og er rene demodata.
- **Ikke legg inn ekte persondata.** Databasen tilbakestilles daglig kl. 04:00 sveitsisk tid (02:00 UTC) til en fast tilstand.

## Installasjon: På egen server (On-Premise)

On-Premise-pakken har alt med seg: Docker-images, installasjonsprogram, database, HTTPS og automatiske oppdateringer. Du laster den utelukkende ned i [Klacks Store](https://klacks-software.ch/store/?culture=nb).

Velg eventuelt bransjen din i Klacks Store og last ned ZIP-filen for landet ditt. Installasjonsprogrammet genererer selv passord og sertifikater, laster ned de nyeste Docker-images og venter til alt kjører.

### Linux: trinn for trinn

Du trenger en maskin med minst 8 GB RAM, ledige porter 80 og 443, internettilgang og en konto med `sudo`-rettigheter. Docker trenger ikke å være installert på forhånd (se trinn 4).

1. **Last ned ZIP-filen i Klacks Store.** På siden for landet ditt i [Klacks Store](https://klacks-software.ch/store/?culture=nb), eventuelt med din bransje.
2. **Pakk ut i en fast mappe**, for eksempel `~/klacks`, ikke i `Downloads` eller `/tmp`. De automatiske oppdateringene arbeider senere med akkurat denne mappen; slettes eller flyttes den, slutter de å fungere. Installasjonsprogrammet advarer hvis det kjøres fra `Downloads` eller `/tmp`.

   ```bash
   unzip 'klacks-onprem-*.zip' -d ~/klacks
   ```

3. **Åpne en terminal i mappen.** I filbehandleren går det vanligvis med høyreklikk i mappen (navnet på menyvalget avhenger av skrivebordsmiljøet), eller du skriver `cd ~/klacks`.
4. **Start installasjonsprogrammet:**

   ```bash
   sudo bash ./install-de.sh
   ```

   I pakken for Tyskland heter skriptet `install-de.sh`; i andre landpakker står landkoden i navnet, generelt altså `sudo bash ./install-*.sh`. Installasjonsprogrammet trenger `sudo` for å kunne snakke med Docker og installere det ved behov. Uten `sudo` går det bare hvis Docker allerede er installert og brukeren din tilhører gruppen `docker`.

   **Mangler Docker**, tilbyr installasjonsprogrammet å installere Docker Engine med det offisielle skriptet fra `get.docker.com`. Det skjer bare etter at du har svart på spørsmålet (`[y/N]`, standard er Nei) og bare på Ubuntu, Debian, Fedora, CentOS og RHEL; maskinen trenger da `curl` eller `wget` og internettilgang. På andre distribusjoner installerer du selv Docker Engine med Compose-pluginen etter [Dockers veiledning](https://docs.docker.com/engine/install/). Kjører installasjonsprogrammet uten terminal, besvarer `INSTALL_DOCKER=yes` spørsmålet med Ja. Docker selv anbefaler ikke dette skriptet for produksjonsdrift; for en produksjonsserver bør du heller installere Docker selv. Eldre `docker-compose` (versjon 1) støttes ikke, pluginen `docker compose` er påkrevd.
5. **Vent.** Installasjonsprogrammet genererer passord og et selvsignert sertifikat, laster ned images og starter stacken. Ved første oppstart migrerer API-et databasen; installasjonsprogrammet venter inntil ti minutter på dette. Til slutt står det `Klacks is up at https://…` og under det **oppsettskoden din** (`Your setup code`, tolv tegn i tre grupper på fire). Noter den; den står også i filen `.env` i installasjonsmappen som `KLACKS_SETUP_CODE`.
6. **Åpne Klacks:** `https://localhost` (ved et annet servernavn eller HTTPS-port, bruk adressen fra meldingen fra installasjonsprogrammet). Nettleseren advarer mot det selvsignerte sertifikatet; bekreft advarselen. Deretter oppretter du din egen admin-konto med oppsettskoden, se [Den første påloggingen](#first-login).
7. **Oppdateringer** kjører deretter automatisk via den medfølgende oppdateringstjenesten. Du trenger ikke å starte installasjonsprogrammet på nytt for det.

Ser Docker mindre enn 7 GiB arbeidsminne, avbrytes en førstegangsinstallasjon. Hvordan du setter opp en mindre vert, står under [Systemkrav](../betrieb/systemvoraussetzungen.md).

### Windows

På Windows starter du `install-*.ps1` i stedet for `install-*.sh`.

### Alternativer: servernavn og landprofil

Med en valgfri landprofil setter installasjonsprogrammet ved første oppstart opp språk, helligdager, arbeidstidsgrenser, tillegg og bransjemaler med én gang:

```bash
sudo SERVER_NAME=klacks.example.com REGION=de bash ./install.sh
```

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1 -ServerName klacks.example.com -Region de
```

På Linux hører variablene **etter** `sudo`: `sudo` sender vanligvis ikke videre variabler som står foran det til installasjonsprogrammet. Med skriptet fra landpakken ser kallet slik ut: `sudo SERVER_NAME=klacks.example.com bash ./install-de.sh`.

Landpakken fra Klacks Store inneholder profilen for sitt land. De medfølgende skriptene `install-*.sh` og `install-*.ps1` setter `REGION` hhv. `-Region` allerede til landets kode — i pakken for Tyskland for eksempel `install-de.sh` og `install-de.ps1`. Kaller du `install.sh` eller `install.ps1` direkte, må `REGION` hhv. `-Region` være denne landkoden; uten den setter installasjonsprogrammet ikke opp noen landprofil.

## Kontor-PC med Windows: også i Microsoft Store

For én enkelt kontor-PC med Windows finnes det et eget installasjonsprogram som fungerer uten Docker. Du får det i [Klacks Store](https://klacks-software.ch/store/?culture=nb) på siden for ditt land og også i [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (oppføringen «Klacks»). Det er det samme installasjonsprogrammet i begge butikkene. Fra Microsoft Store bruker det landet som er angitt i Windows; der velger du ingen bransje, og finnes det ingen landprofil for landet, setter installasjonen ikke opp noen. Server-, Docker- og Linux-installasjoner samt lande- og bransjepakkene finnes kun i Klacks Store.

På kontor-PC-en kommer nye versjoner via Innstillinger > [Programvareoppdateringer](../einstellungen/system-sicherheit/updates.md) i Klacks, også når Klacks er installert fra Microsoft Store. Et nyere installasjonsprogram kan ikke installeres over en eksisterende installasjon.

## Den første påloggingen: din egen admin-konto {#first-login}

Et nylig installert Klacks har ennå ingen konto fra deg. Når du åpner det i nettleseren for første gang, vises derfor straks siden «Opprett din egen administratorkonto», før noen pålogging: for- og etternavn, e-postadresse (den blir påloggingsnavnet ditt) og et passord, skrevet inn to ganger; passordreglene vises live ved siden av.

På en server (Docker) krever siden i tillegg **oppsettskoden**, selv om du åpner Klacks i nettleseren på selve serveren. Installasjonsprogrammet viste koden på slutten av installasjonen; den står også i filen `.env` i installasjonsmappen som `KLACKS_SETUP_CODE`. Den gjelder bare for dette ene oppsettet. En feil kode avvises («Oppsettskoden stemmer ikke. Kontroller den og prøv igjen.»).

Så snart du lagrer, får kontoen din admin-rollen, og den medfølgende testkontoen slås av for godt i samme operasjon; Klacks logger deg deretter automatisk inn med din egen konto; lykkes ikke det, logger du inn med de nye påloggingsopplysningene. Så lenge en oppsettskode er satt, kan den medfølgende testkontoen uansett ikke brukes til pålogging i nettleseren. Neste er siden «Land og bransje».

Helt til din egen konto er opprettet, blokkerer serveren hvert ytterligere kall med feilkoden `SETUP_REQUIRED` (HTTP 403). Det er ingen feil bak dette: det mangler bare oppsettet.

- På kontor-PC-en med Windows trenger du ingen oppsettskode hvis du åpner Klacks i nettleseren på samme PC. Fra en annen maskin vises bare påloggingssiden.
- Viser Klacks i stedet påloggingssiden, for eksempel ved en installasjon uten oppsettskode, nevner utdataene fra installasjonsprogrammet den medfølgende kontoen; Klacks fører deg også da umiddelbart til opprettelsen av din egen admin-konto.
- Sender to personer inn samtidig, blir bare den første administrator; den andre havner på påloggingssiden.

Bare i Playground og i et lokalt utviklingsmiljø er denne porten bevisst slått av; der blir den medfølgende kontoen stående.

## Greit å vite

- **Forutsetninger:** minst 8 GB RAM og 4 vCPU, Docker med Compose v2 (på Linux installerer installasjonsprogrammet Docker på forespørsel), ledige porter 80 og 443 samt utgående HTTPS-tilgang til `ghcr.io` og `github.com`. Detaljer og regneeksemplene for mindre verter står under [Systemkrav](../betrieb/systemvoraussetzungen.md).
- En medfølgende oppdateringstjeneste holder installasjonen din automatisk oppdatert — med sikkerhetskopi før hver oppdatering og automatisk tilbakerulling ved problemer. Hvordan det foregår i detalj, står under [Oppdateringer og tilbakerulling](../betrieb/updates-und-rollback.md).
- Dataene dine ligger i din egen database på din egen infrastruktur. Enkelte funksjoner kaller imidlertid eksterne tjenester — hvilke, står i neste avsnitt.
- Å starte installasjonsprogrammet på nytt er uskadelig, men ikke en oppdatering: Det beholder passord, sertifikat og versjonen som ble valgt ved førstegangsinstallasjonen, og starter stacken på nytt (på Linux igjen med `sudo` hvis du først installerte med `sudo`). Slik reparerer du en stack som ikke lenger kjører. Nye versjoner installeres av oppdateringstjenesten, ikke av installasjonsprogrammet.
- Har du ditt eget sertifikat, legger du `server.crt` og `server.key` i `nginx/certs/` i installasjonsmappen før installasjonen; ellers genererer installasjonsprogrammet et selvsignert sertifikat.
- Databasen sikkerhetskopierer du regelmessig selv — hvordan, står under [Sikkerhetskopi og gjenoppretting](../betrieb/backup-und-wiederherstellung.md).

## Hvilke eksterne tjenester Klacks kaller

Dataene dine ligger på dine servere. For enkelte funksjoner kaller Klacks likevel offentlige tjenester på internett i standarddrift. Adressene til disse tjenestene er fast innebygd; en egen geokodings-, rutings- eller kartserver kan du foreløpig ikke registrere.

| Tjeneste | Hva den brukes til | Hva som sendes | Standard | Slå av |
|---|---|---|---|---|
| Nominatim fra OpenStreetMap (`nominatim.openstreetmap.org`) | Gjøre adresser om til koordinater: ved lagring av en adresse, for firmaets lokasjon, i turplanleggingen og i bakgrunnstjenester for adresser og gruppelokasjoner | Gate, postnummer, sted og land, uten personnavn; ved gruppelokasjoner navnet på stedet hhv. gruppen | på | `BackgroundServices__AddressGeocoding=false` og `BackgroundServices__GroupGeocoding=false` slår bare av bakgrunnstjenestene. Ved lagring av en adresse geokodes det fortsatt. |
| Offentlig OSRM-server (`router.project-osrm.org`) | Reisetider, avstander og ruter på kartet | Koordinatene til oppdragsstedene, uten navn | på så lenge ingen OpenRouteService-nøkkel er lagt inn; nettleseren spør dessuten OSRM direkte hvis Klacks-serveren ikke leverer noen rute | ikke planlagt |
| OpenRouteService (`api.heigit.org`) | som OSRM, i tillegg sykkel og til fots | Koordinatene til oppdragsstedene, uten navn | bare med lagt inn API-nøkkel | Fjern nøkkelen under Innstillinger > OpenRoute |
| Kartfliser (OpenStreetMap, OpenStreetMap.de eller CARTO) | Kartvisning i dashbordet | fra nettleseren: IP-adresse og det viste kartutsnittet | på så snart kartet vises | Leverandør kan velges i kartet, en egen flistjener kan ikke |
| GitHub (`github.com`) og GitHub Container Registry (`ghcr.io`) | Installasjon og automatiske oppdateringer: release-manifest og Docker-images | vanlige nedlastingsforespørsler, ingen planleggingsdata | på | — |
| Klacks-Marketplace (`klacks-software.ch/store`) | Språk- og landpakker | Landkode, pakkekode eller søkeord | ved pakkesøk og ved lasting av en landprofil | Adressen kan konfigureres via `LanguagePlugins__MarketplaceUrl` |
| Hugging Face (`huggingface.co`) | engangsnedlasting av søkemodellene for Klacksy | ingen kundedata (filnedlasting) | ved første behov | — |
| Open-Meteo (`api.open-meteo.com`, `air-quality-api.open-meteo.com`) | Vær- og luftkvalitetsmerknad i velkomstwidgeten, værforespørsel via Klacksy | Koordinatene til nettleseren (hvis frigitt) eller til firmaets lokasjon | på | `Assistant__Ambient__Enabled=false` slår bare av luftkvalitets- og helligdagsmerknaden, ikke værforespørselen i velkomsten |
| Nager.Date (`date.nager.at`) | Helligdagsmerknad i velkomstwidgeten | Landkode | på | `Assistant__Ambient__Enabled=false` |
| Sky-KI-leverandører (f.eks. OpenAI, Anthropic, Google, DeepSeek) | Klacksy og KI-støttede bakgrunnsfunksjoner (f.eks. innplassering av gruppelokasjoner) | Forespørsler med den nødvendige konteksten fra dataene dine | bare hvis en skymodell er konfigurert | bruk en lokal modell |
| Tale-, søke- og oversettelsestjenester (f.eks. Deepgram, Groq, AssemblyAI, Edge TTS, OpenAI TTS, ElevenLabs, Google Cloud TTS, DeepL, nettsøk) | Taleinndata og -utdata, nettsøk, oversettelse | Lyd hhv. tekst | bare hvis brukt hhv. konfigurert; nettleserens talegjenkjenning arbeider avhengig av nettleser via dens nettjeneste | ikke bruk funksjonen |

Bryterne i kolonnen «Slå av» er miljøvariabler for containeren `klacks-api`; legg dem inn i `docker-compose.yml` under `environment:` for denne tjenesten. En oppføring bare i `.env`-filen er ikke nok, fordi tjenesten ikke leser den som `env_file`.

Med en lokal KI-modell havner ingen forespørsel til språkmodellen hos en ekstern KI-leverandør. For de øvrige tjenestene i denne tabellen endrer det ingenting.

---

*Spørsmål om installasjonen? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
