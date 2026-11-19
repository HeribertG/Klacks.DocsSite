---
sidebar_position: 1
---

# Installation och Playground

Klacks testar du på en minut — och installerar det på några minuter. Ingen registrering, inga säljsamtal.

## Playground: lekplatsen för att lära känna Klacks

Playground är inget installationsalternativ utan en publik Klacks-instans med exempeldata för att leka runt utan förpliktelser — därav namnet. Den körs på **[play.klacks-software.ch](https://play.klacks-software.ch)**:

- **Login:** `admin@test.com` · **Lösenord:** `P@ssw0rt1`
- Du har fulla admin-rättigheter — testa allt.
- Exempeldata omfattar omkring 5 000 klienter och är rena demodata.
- **Ange inga verkliga personuppgifter.** Databasen återställs varje dag klockan 04:00 schweizisk tid (02:00 UTC) till ett fast läge.

## Installation: På egen server (on-premise)

On-premise-paketet innehåller allt: Docker-images, installationsprogram, databas, HTTPS och automatiska uppdateringar. Du laddar ner det uteslutande i [Klacks Store](https://klacks-software.ch/store/?culture=sv).

Välj vid behov din bransch i Klacks Store och ladda ner ZIP-filen för ditt land. Installationsprogrammet skapar lösenord och certifikat själv, laddar ner de aktuella Docker-images och väntar tills allt körs.

### Linux: steg för steg

Du behöver en dator med minst 8 GB RAM, lediga portar 80 och 443, internetåtkomst och ett konto med `sudo`-rättigheter. Docker behöver inte redan vara installerat (se steg 4).

1. **Ladda ner ZIP-filen i Klacks Store.** På ditt lands sida i [Klacks Store](https://klacks-software.ch/store/?culture=sv), vid behov med din bransch.
2. **Packa upp i en fast mapp**, till exempel `~/klacks`, inte i `Downloads` eller `/tmp`. De automatiska uppdateringarna arbetar senare med just den här mappen; raderas eller flyttas den slutar de fungera. Installationsprogrammet varnar om det körs i `Downloads` eller `/tmp`.

   ```bash
   unzip 'klacks-onprem-*.zip' -d ~/klacks
   ```

3. **Öppna en terminal i mappen.** I filhanteraren går det oftast med högerklick i mappen (benämningen beror på skrivbordsmiljön), eller så skriver du `cd ~/klacks`.
4. **Starta installationsprogrammet:**

   ```bash
   sudo bash ./install-de.sh
   ```

   I paketet för Tyskland heter skriptet `install-de.sh`; i andra landspaket ingår respektive landskod i namnet, alltså i allmänhet `sudo bash ./install-*.sh`. Installationsprogrammet behöver `sudo` för att få använda Docker och vid behov installera det. Utan `sudo` fungerar det bara om Docker redan är installerat och din användare tillhör gruppen `docker`.

   **Saknas Docker** erbjuder installationsprogrammet att installera Docker Engine med det officiella skriptet från `get.docker.com`. Det sker bara efter din bekräftelse (`[y/N]`, standard är Nej) och bara på Ubuntu, Debian, Fedora, CentOS och RHEL; för det behöver datorn `curl` eller `wget` och internetåtkomst. På andra distributioner installerar du Docker Engine med Compose-pluginet själv enligt [Dockers anvisning](https://docs.docker.com/engine/install/). Körs installationsprogrammet utan terminal besvarar `INSTALL_DOCKER=yes` frågan med Ja. Docker rekommenderar inte det här skriptet för produktionsdrift; för en produktionsserver bör du hellre installera Docker själv. Det äldre `docker-compose` (version 1) stöds inte, det som krävs är pluginet `docker compose`.
5. **Vänta.** Installationsprogrammet skapar lösenord och ett självsignerat certifikat, laddar ner images och startar stacken. Vid första starten migrerar API:et databasen; installationsprogrammet väntar på det i upp till tio minuter. Till slut står det `Klacks is up at https://…` och under det **din installationskod** (`Your setup code`, tolv tecken i tre grupper om fyra). Anteckna den; den finns också i filen `.env` i installationsmappen som `KLACKS_SETUP_CODE`.
6. **Öppna Klacks:** `https://localhost` (vid annat servernamn eller annan HTTPS-port används adressen från installationsprogrammets meddelande). Webbläsaren varnar för det självsignerade certifikatet; bekräfta varningen. Därefter skapar du ditt eget adminkonto med installationskoden, se [Den första inloggningen](#first-login).
7. **Uppdateringar** sker därefter automatiskt via den medföljande uppdateringstjänsten. Du behöver inte starta installationsprogrammet igen för det.

Ser Docker mindre än 7 GiB arbetsminne avbryts en nyinstallation. Hur du ställer in en mindre värd står under [Systemkrav](../betrieb/systemvoraussetzungen.md).

### Windows

I Windows startar du `install-*.ps1` istället för `install-*.sh`.

### Alternativ: servernamn och landsprofil

Med en valfri landsprofil ställer installationsprogrammet redan vid första starten in språk, helgdagar, arbetstidsgränser, tillägg och branschmallar:

```bash
sudo SERVER_NAME=klacks.example.com REGION=de bash ./install.sh
```

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1 -ServerName klacks.example.com -Region de
```

I Linux hör variablerna **efter** `sudo`: `sudo` för vanligtvis inte vidare variabler som står före det till installationsprogrammet. Med landspaketets skript ser anropet ut så här: `sudo SERVER_NAME=klacks.example.com bash ./install-de.sh`.

Landspaketet från Klacks Store innehåller profilen för sitt land. De medföljande skripten `install-*.sh` och `install-*.ps1` sätter redan `REGION` respektive `-Region` till landets kod — i paketet för Tyskland till exempel `install-de.sh` och `install-de.ps1`. Anropar du `install.sh` eller `install.ps1` direkt måste `REGION` respektive `-Region` vara den här landskoden; utan den ställer installationsprogrammet inte in någon landsprofil.

## Kontorsdator med Windows: även i Microsoft Store

För en enskild kontorsdator med Windows finns ett eget installationsprogram som fungerar utan Docker. Du hittar det i [Klacks Store](https://klacks-software.ch/store/?culture=sv) på ditt lands sida och även i [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (posten ”Klacks”). Det är samma installationsprogram i båda butikerna. Från Microsoft Store tillämpar det landet som är inställt i Windows; där väljer du ingen bransch, och finns det ingen landsprofil för landet konfigurerar installationsprogrammet ingen. Server-, Docker- och Linux-installationer samt lands- och branschpaketen finns endast i Klacks Store.

På kontorsdatorn kommer nya versioner via Inställningar > [Programuppdateringar](../einstellungen/system-sicherheit/updates.md) i Klacks, även när Klacks installerades från Microsoft Store. Ett nyare installationsprogram kan inte installeras ovanpå en befintlig installation.

## Den första inloggningen: ditt eget adminkonto {#first-login}

Ett nyinstallerat Klacks har ännu inget konto från dig. När du öppnar det i webbläsaren första gången visas därför genast sidan ”Skapa ditt eget administratörskonto”, redan före varje inloggning: för- och efternamn, e-postadress (den blir ditt inloggningsnamn) och ett lösenord som anges två gånger; lösenordsreglerna visas live bredvid.

På en server (Docker) kräver sidan dessutom **installationskoden**, även om du öppnar Klacks i webbläsaren på själva servern. Koden visade installationsprogrammet i slutet av installationen; den finns också i filen `.env` i installationsmappen som `KLACKS_SETUP_CODE`. Den gäller bara för den här enda installationen. En felaktig kod avvisas (”Installationskoden stämmer inte. Kontrollera den och försök igen.”).

Så snart du sparar får ditt konto adminrollen och det medföljande testkontot stängs av för gott i samma moment; därefter loggar Klacks in dig automatiskt med ditt eget konto; misslyckas det loggar du in med de nya inloggningsuppgifterna. Så länge en installationskod är satt går det medföljande testkontot ändå inte att använda för inloggning i webbläsaren. Därefter följer sidan ”Land och bransch”.

Tills ditt eget konto har skapats blockerar servern varje annat anrop med felkoden `SETUP_REQUIRED` (HTTP 403). Bakom det ligger inget fel: det är bara inställningen som saknas.

- På kontorsdatorn med Windows behöver du ingen installationskod om du öppnar Klacks i webbläsaren på samma dator. Från en annan dator visas bara inloggningssidan.
- Visar Klacks i stället inloggningssidan, till exempel vid en installation utan installationskod, anger installationsprogrammets utskrift det medföljande kontot; även då för Klacks dig direkt till skapandet av ditt eget adminkonto.
- Skickar två personer in samtidigt blir bara den första administratör; den andra hamnar på inloggningssidan.

Bara i Playground och i en lokal utvecklingsmiljö är den här grinden avsiktligt avstängd; där finns det medföljande kontot kvar.

## Bra att veta

- **Förutsättningar:** minst 8 GB RAM och 4 vCPU, Docker med Compose v2 (i Linux installerar installationsprogrammet Docker på begäran), lediga portar 80 och 443 samt utgående HTTPS-åtkomst till `ghcr.io` och `github.com`. Detaljer och räkneexempel för mindre värdar står under [Systemkrav](../betrieb/systemvoraussetzungen.md).
- En medföljande uppdateringstjänst håller din installation automatiskt aktuell — med backup före varje uppdatering och automatisk återställning vid problem. Hur det går till i detalj står under [Uppdateringar och återställning](../betrieb/updates-und-rollback.md).
- Din data ligger i din egen databas på din infrastruktur. Vissa funktioner anropar dock externa tjänster — vilka framgår av nästa avsnitt.
- Att köra installationsprogrammet igen är ofarligt, men ingen uppdatering: det behåller lösenord, certifikat och den version som valdes vid nyinstallationen och startar om stacken (i Linux åter med `sudo`, om du installerade med `sudo` från början). Så reparerar du en stack som inte längre körs. Nya versioner installeras av uppdateringstjänsten, inte av installationsprogrammet.
- Har du ett eget certifikat lägger du `server.crt` och `server.key` i `nginx/certs/` i installationsmappen före installationen; annars skapar installationsprogrammet ett självsignerat certifikat.
- Din databas säkerhetskopierar du regelbundet själv — hur det går till står under [Backup och återställning](../betrieb/backup-und-wiederherstellung.md).

## Vilka externa tjänster Klacks anropar

Din data ligger på dina servrar. För vissa funktioner anropar Klacks i standarddrift ändå publika tjänster på internet. Adresserna till de här tjänsterna är fast inbyggda; en egen server för geokodning, ruttplanering eller kartor kan du för närvarande inte ange.

| Tjänst | Vad den används till | Vad som skickas | Standard | Stänga av |
|---|---|---|---|---|
| Nominatim från OpenStreetMap (`nominatim.openstreetmap.org`) | Omvandla adresser till koordinater: när en adress sparas, för företagets plats, i turplaneringen och i bakgrundstjänster för adresser och gruppers platser | Gata, postnummer, ort och land, utan personnamn; för gruppers platser orts- respektive gruppnamnet | på | `BackgroundServices__AddressGeocoding=false` och `BackgroundServices__GroupGeocoding=false` stänger bara av bakgrundstjänsterna. När en adress sparas geokodas den fortfarande. |
| Publik OSRM-server (`router.project-osrm.org`) | Restider, avstånd och rutter på kartan | Koordinater för insatsplatserna, utan namn | på så länge ingen OpenRouteService-nyckel har angetts; webbläsaren frågar dessutom OSRM direkt om Klacks-servern inte levererar någon rutt | inte avsett |
| OpenRouteService (`api.heigit.org`) | som OSRM, dessutom cykel och till fots | Koordinater för insatsplatserna, utan namn | bara med angiven API-nyckel | Ta bort nyckeln under Inställningar > OpenRoute |
| Kartrutor (OpenStreetMap, OpenStreetMap.de eller CARTO) | Kartvisning på dashboarden | Från webbläsaren: IP-adress och den visade kartvyn | på så snart kartan visas | leverantören kan väljas i kartan, en egen kartruteserver inte |
| GitHub (`github.com`) och GitHub Container Registry (`ghcr.io`) | Installation och automatiska uppdateringar: versionsmanifest och Docker-images | vanliga nedladdningsförfrågningar, inga planeringsdata | på | — |
| Klacks Marketplace (`klacks-software.ch/store`) | Språk- och landspaket | Landskod, paketkod eller sökord | vid paketsökning och när en landsprofil laddas | adressen kan konfigureras via `LanguagePlugins__MarketplaceUrl` |
| Hugging Face (`huggingface.co`) | Engångsnedladdning av sökmodellerna för Klacksy | inga kunddata (filnedladdning) | vid första behov | — |
| Open-Meteo (`api.open-meteo.com`, `air-quality-api.open-meteo.com`) | Väder- och luftkvalitetsnotis i välkomstwidgeten, väderfråga via Klacksy | Koordinater från webbläsaren (om de tillåts) eller från företagets plats | på | `Assistant__Ambient__Enabled=false` stänger bara av luftkvalitets- och helgdagsnotisen, inte väderfrågan i hälsningen |
| Nager.Date (`date.nager.at`) | Helgdagsnotis i välkomstwidgeten | Landskod | på | `Assistant__Ambient__Enabled=false` |
| Moln-AI-leverantörer (t.ex. OpenAI, Anthropic, Google, DeepSeek) | Klacksy och AI-stödda bakgrundsfunktioner (t.ex. klassificering av gruppers platser) | Förfrågningar inklusive nödvändig kontext från din data | bara om en molnmodell är konfigurerad | använd en lokal modell |
| Tal-, sök- och översättningstjänster (t.ex. Deepgram, Groq, AssemblyAI, Edge TTS, OpenAI TTS, ElevenLabs, Google Cloud TTS, DeepL, webbsökning) | Taligenkänning och talsyntes, webbsökning, översättning | Ljud respektive text | bara om de används respektive är konfigurerade; webbläsarens taligenkänning arbetar, beroende på webbläsare, via dess onlinetjänst | använd inte funktionen |

Reglagen i kolumnen ”Stänga av” är miljövariabler för containern `klacks-api`; ange dem i `docker-compose.yml` under `environment:` för den tjänsten. En post enbart i filen `.env` räcker inte, eftersom tjänsten inte läser den som `env_file`.

Med en lokal AI-modell hamnar ingen förfrågan till språkmodellen hos en extern AI-leverantör. För de övriga tjänsterna i den här tabellen ändrar det ingenting.

---

*Frågor om installationen? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
