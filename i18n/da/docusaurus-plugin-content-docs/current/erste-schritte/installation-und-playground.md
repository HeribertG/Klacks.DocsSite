---
sidebar_position: 1
---

# Installation og Playground

Klacks kan du prøve på et minut — og installere på få minutter. Ingen registrering, ingen salgssamtaler.

## Playground: legepladsen til at lære Klacks at kende

Playground er ikke en installationsvariant, men en offentlig Klacks-instans med eksempeldata til uforpligtende leg — deraf navnet. Den kører på **[play.klacks-software.ch](https://play.klacks-software.ch)**:

- **Login:** `admin@test.com` · **Adgangskode:** `P@ssw0rt1`
- Du har fulde admin-rettigheder — prøv alt.
- Eksempeldataene omfatter omkring 5.000 klienter og er rene demodata.
- **Indtast ingen rigtige persondata.** Databasen nulstilles hver dag kl. 04:00 schweizisk tid (02:00 UTC) til en fast tilstand.

## Installation: På din egen server (on-premise)

On-premise-pakken indeholder alt: Docker-images, installer, database, HTTPS og automatiske opdateringer. Du henter den udelukkende i [Klacks Store](https://klacks-software.ch/store/?culture=da).

Vælg eventuelt din branche i Klacks Store, og download ZIP-filen til dit land. Installeren genererer selv adgangskoder og certifikater, henter de aktuelle Docker-images og venter, indtil alt kører.

### Linux: trin for trin

Du skal bruge en maskine med mindst 8 GB RAM, ledige porte 80 og 443, internetadgang og en konto med `sudo`-rettigheder. Docker behøver ikke at være installeret i forvejen (se trin 4).

1. **Download ZIP-filen i Klacks Store.** På dit lands side i [Klacks Store](https://klacks-software.ch/store/?culture=da), eventuelt med din branche.
2. **Udpak den i en fast mappe**, for eksempel `~/klacks`, ikke i `Downloads` eller `/tmp`. De automatiske opdateringer arbejder senere netop med denne mappe; slettes eller flyttes den, holder de op med at virke. Installeren advarer, hvis den kører fra `Downloads` eller `/tmp`.

   ```bash
   unzip 'klacks-onprem-*.zip' -d ~/klacks
   ```

3. **Åbn en terminal i mappen.** I filhåndteringen går det som regel med et højreklik i mappen (teksten afhænger af skrivebordsmiljøet), eller du skriver `cd ~/klacks`.
4. **Start installeren:**

   ```bash
   sudo bash ./install-de.sh
   ```

   I pakken til Tyskland hedder scriptet `install-de.sh`; i andre landepakker står det pågældende landekode i navnet, altså generelt `sudo bash ./install-*.sh`. Installeren har brug for `sudo`, så den må tale med Docker og om nødvendigt installere det. Uden `sudo` går det kun, hvis Docker allerede er installeret, og din bruger tilhører gruppen `docker`.

   **Mangler Docker**, tilbyder installeren at installere Docker Engine med det officielle script fra `get.docker.com`. Det sker kun efter dit svar på spørgsmålet (`[y/N]`, standard er Nej) og kun på Ubuntu, Debian, Fedora, CentOS og RHEL; maskinen skal bruge `curl` eller `wget` og internetadgang. På andre distributioner installerer du selv Docker Engine med Compose-plugin'et efter [Dockers vejledning](https://docs.docker.com/engine/install/). Kører installeren uden terminal, besvarer `INSTALL_DOCKER=yes` spørgsmålet med ja. Docker selv anbefaler ikke dette script til produktionsdrift; til en produktionsserver bør du hellere installere Docker selv. Den ældre `docker-compose` (version 1) understøttes ikke, plugin'et `docker compose` er påkrævet.
5. **Vent.** Installeren genererer adgangskoder og et selvsigneret certifikat, henter images og starter stacken. Ved første start migrerer API'en databasen; installeren venter på det i op til ti minutter. Til sidst står der `Klacks is up at https://…` og derunder **din opsætningskode** (`Your setup code`, tolv tegn i tre grupper på fire). Skriv den ned; den står også i filen `.env` i installationsmappen som `KLACKS_SETUP_CODE`.
6. **Åbn Klacks:** `https://localhost` (ved et andet servernavn eller en anden HTTPS-port bruger du adressen fra installerens meddelelse). Browseren advarer om det selvsignerede certifikat; bekræft advarslen. Derefter opretter du med opsætningskoden din egen administratorkonto, se [Den første login](#first-login).
7. **Opdateringer** kører herefter automatisk via den medfølgende opdateringstjeneste. Du behøver ikke starte installeren igen for det.

Ser Docker mindre end 7 GiB hukommelse, afbrydes en førstegangsinstallation. Hvordan du sætter en mindre vært op, står under [Systemkrav](../betrieb/systemvoraussetzungen.md).

### Windows

Under Windows starter du `install-*.ps1` i stedet for `install-*.sh`.

### Valgmuligheder: servernavn og landeprofil

Med en valgfri landeprofil opsætter installeren allerede ved første start sprog, helligdage, arbejdstidsgrænser, tillæg og brancheskabeloner:

```bash
sudo SERVER_NAME=klacks.example.com REGION=de bash ./install.sh
```

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1 -ServerName klacks.example.com -Region de
```

Under Linux hører variablerne **efter** `sudo`: `sudo` videregiver som regel ikke variabler, der står foran, til installeren. Med landepakkens script ser kaldet sådan ud: `sudo SERVER_NAME=klacks.example.com bash ./install-de.sh`.

Landepakken fra Klacks Store indeholder profilen for sit land. De medfølgende scripts `install-*.sh` og `install-*.ps1` har allerede sat `REGION` hhv. `-Region` til landets landekode — i pakken til Tyskland for eksempel `install-de.sh` og `install-de.ps1`. Kalder du `install.sh` eller `install.ps1` direkte, skal `REGION` hhv. `-Region` være denne landekode; uden den opretter installeren ingen landeprofil.

## Kontor-pc med Windows: også i Microsoft Store

Til en enkelt kontor-pc med Windows findes der en separat installationsfil, som fungerer uden Docker. Du får den i [Klacks Store](https://klacks-software.ch/store/?culture=da) på dit lands side og også i [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (opslaget "Klacks"). Det er den samme installationsfil i begge butikker. Fra Microsoft Store anvender den det land, der er indstillet i Windows; du vælger ikke en branche der, og findes der ingen landeprofil for landet, opretter installationen ingen. Server-, Docker- og Linux-installationer samt lande- og branchepakkerne fås kun i Klacks Store.

På kontor-pc'en kommer nye versioner via Indstillinger > [Softwareopdateringer](../einstellungen/system-sicherheit/updates.md) i Klacks, også når Klacks er installeret fra Microsoft Store. En nyere installationsfil kan ikke installeres oven på en eksisterende installation.

## Den første login: din egen administratorkonto {#first-login}

Et nyinstalleret Klacks har endnu ingen konto til dig. Når du åbner det første gang i browseren, vises derfor straks siden „Opret din egen administratorkonto“, før nogen login: for- og efternavn, e-mailadresse (den bliver dit brugernavn) og en adgangskode, indtastet to gange; adgangskodereglerne vises live ved siden af.

På en server (Docker) kræver siden desuden **opsætningskoden**, også når du åbner Klacks i browseren på selve serveren. Koden blev vist af installeren til sidst i installationen; den står også i filen `.env` i installationsmappen som `KLACKS_SETUP_CODE`. Den gælder kun for denne ene opsætning. En forkert kode afvises („Opsætningskoden passer ikke. Kontrollér den, og prøv igen.“).

Så snart du gemmer, får din konto administratorrollen, og den medfølgende testkonto bliver i samme handling endeligt slået fra; Klacks logger dig derefter automatisk ind med din egen konto; lykkes det ikke, logger du ind med de nye loginoplysninger. Så længe en opsætningskode er sat, kan den medfølgende testkonto under alle omstændigheder ikke bruges til login i browseren. Derefter følger siden „Land og branche“.

Indtil din egen konto er oprettet, blokerer serveren ethvert andet kald med fejlkoden `SETUP_REQUIRED` (HTTP 403). Bag den ligger ingen fejl: Der mangler bare opsætningen.

- På kontor-pc'en med Windows har du ikke brug for en opsætningskode, når du åbner Klacks i browseren på den samme pc. Fra en anden computer vises kun loginsiden.
- Viser Klacks i stedet loginsiden, for eksempel ved en installation uden opsætningskode, nævner installerens output den medfølgende konto; Klacks leder dig også da straks til oprettelsen af din egen administratorkonto.
- Indsender to personer samtidig, bliver kun den første administrator; den anden havner på loginsiden.

Kun i Playground og i et lokalt udviklingsmiljø er denne port bevidst slået fra; dér består den medfølgende konto.

## Godt at vide

- **Forudsætninger:** mindst 8 GB RAM og 4 vCPU, Docker med Compose v2 (under Linux installerer installeren Docker efter forespørgsel), ledige porte 80 og 443 samt udgående HTTPS-adgang til `ghcr.io` og `github.com`. Detaljer og regneeksempler til mindre værter står under [Systemkrav](../betrieb/systemvoraussetzungen.md).
- En medfølgende opdateringstjeneste holder din installation automatisk opdateret — med backup før hver opdatering og automatisk rollback ved problemer. Hvordan det forløber i detaljer, står under [Opdateringer og rollback](../betrieb/updates-und-rollback.md).
- Dine data ligger i din egen database på din egen infrastruktur. Nogle funktioner kalder dog eksterne tjenester — hvilke, står i næste afsnit.
- Et nyt kald af installeren er harmløst, men ikke en opdatering: Den beholder adgangskoder, certifikat og den version, der blev fastlagt ved førstegangsinstallationen, og genstarter stacken (under Linux igen med `sudo`, hvis du først installerede med `sudo`). Sådan reparerer du en stack, der ikke længere kører. Nye versioner spiller opdateringstjenesten ind, ikke installeren.
- Medbringer du et eget certifikat, lægger du `server.crt` og `server.key` i `nginx/certs/` i installationsmappen før installationen; ellers genererer installeren et selvsigneret certifikat.
- Du sikkerhedskopierer selv din database regelmæssigt — hvordan det gøres, står under [Backup og gendannelse](../betrieb/backup-und-wiederherstellung.md).

## Hvilke eksterne tjenester Klacks kalder

Dine data ligger på dine servere. Til nogle funktioner kalder Klacks alligevel i standarddrift offentlige tjenester på internettet. Adresserne på disse tjenester er indbygget fast; en egen geokodnings-, routing- eller kortserver kan du pt. ikke angive.

| Tjeneste | Til hvad | Hvad der sendes | Standard | Slå fra |
|---|---|---|---|---|
| Nominatim fra OpenStreetMap (`nominatim.openstreetmap.org`) | Omsætte adresser til koordinater: ved lagring af en adresse, til firmaets placering, i turplanlægningen og i baggrundstjenester til adresser og gruppeplaceringer | Gade, postnummer, by og land, uden personnavne; ved gruppeplaceringer stedets hhv. gruppens navn | til | `BackgroundServices__AddressGeocoding=false` og `BackgroundServices__GroupGeocoding=false` slår kun baggrundstjenesterne fra. Ved lagring af en adresse geokodes der stadig. |
| Offentlig OSRM-server (`router.project-osrm.org`) | Køretider, afstande og ruter på kortet | Koordinater på indsatsstederne, uden navne | til, så længe der ikke er gemt nogen OpenRouteService-nøgle; browseren spørger desuden OSRM direkte, hvis Klacks-serveren ikke leverer en rute | ikke planlagt |
| OpenRouteService (`api.heigit.org`) | som OSRM, desuden cykel og til fods | Koordinater på indsatsstederne, uden navne | kun med gemt API-nøgle | fjern nøglen under Indstillinger > OpenRoute |
| Kortfliser (OpenStreetMap, OpenStreetMap.de eller CARTO) | Kortvisning på dashboardet | fra browseren: IP-adresse og det viste kortudsnit | til, så snart kortet vises | udbyder kan vælges i kortet, en egen flise-server ikke |
| GitHub (`github.com`) og GitHub Container Registry (`ghcr.io`) | Installation og automatiske opdateringer: release-manifest og Docker-images | almindelige download-forespørgsler, ingen planlægningsdata | til | — |
| Klacks Marketplace (`klacks-software.ch/store`) | Sprog- og landepakker | landekode, pakkekode eller søgeord | ved pakkesøgning og ved indlæsning af en landeprofil | adressen kan konfigureres via `LanguagePlugins__MarketplaceUrl` |
| Hugging Face (`huggingface.co`) | engangsdownload af søgemodellerne til Klacksy | ingen kundedata (fildownload) | ved første behov | — |
| Open-Meteo (`api.open-meteo.com`, `air-quality-api.open-meteo.com`) | vejr- og luftkvalitetshint i velkomstwidgetten, vejrforespørgsel via Klacksy | koordinater fra browseren (hvis givet fri) eller firmaets placering | til | `Assistant__Ambient__Enabled=false` slår kun luftkvalitets- og helligdagshintet fra, ikke velkomstens vejrforespørgsel |
| Nager.Date (`date.nager.at`) | helligdagshint i velkomstwidgetten | landekode | til | `Assistant__Ambient__Enabled=false` |
| Cloud-AI-udbydere (f.eks. OpenAI, Anthropic, Google, DeepSeek) | Klacksy og AI-understøttede baggrundsfunktioner (f.eks. indplacering af gruppeplaceringer) | forespørgsler inklusive den nødvendige kontekst fra dine data | kun hvis en cloudmodel er konfigureret | brug en lokal model |
| Tale-, søge- og oversættelsestjenester (f.eks. Deepgram, Groq, AssemblyAI, Edge TTS, OpenAI TTS, ElevenLabs, Google Cloud TTS, DeepL, websøgning) | taleinput og -output, websøgning, oversættelse | lyd hhv. tekst | kun hvis brugt hhv. konfigureret; browserens talegenkendelse arbejder afhængigt af browseren via dens onlinetjeneste | lad være med at bruge funktionen |

Indstillingerne i kolonnen „Slå fra“ er miljøvariabler i containeren `klacks-api`; skriv dem i `docker-compose.yml` under `environment:` for denne tjeneste. En post kun i `.env`-filen er ikke nok, fordi tjenesten ikke indlæser den som `env_file`.

Med en lokal AI-model ender ingen forespørgsel til sprogmodellen hos en ekstern AI-udbyder. For de øvrige tjenester i denne tabel ændrer det ingenting.

---

*Spørgsmål til installationen? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
