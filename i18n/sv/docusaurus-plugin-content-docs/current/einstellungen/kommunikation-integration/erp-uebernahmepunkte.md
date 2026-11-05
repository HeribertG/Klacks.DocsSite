---
sidebar_position: 5
---

# ERP-övertagningspunkter

Under Inställningar > Import (visas bara i expertläge), kortet ”ERP-mottagningspunkter”, konfigurerar du hur beställningar från ett externt ERP-system som XML-filer automatiskt tas över i Klacks.

## Så fungerar det

**Tre leveransvägar:** ERP-systemet kan lägga XML-filer i en mapp på Klacks-servern (Klacks hämtar dem automatiskt enligt tidsplan så snart en fil varit oförändrad i 10 sekunder), pusha dem direkt via HTTPS-POST till en import-endpoint (autentiserat med en åtkomsttoken), eller en administratör laddar upp XML-filen manuellt på denna sida via dra-och-släpp (importen startar omedelbart). Det finns ingen SFTP; endast XML-filer i formatet `ErpOrderImport` importeras.

**Drop-pointen** är den centrala brevlådan för alla importfiler, förvaltad av Klacks själv — den visar tre områden: Inkommande (mottagna eller under import just nu), Bearbetade (med en sammanfattning per fil) och Fel (oläsliga eller ogiltiga filer med felorsak, med möjlighet till förnyad import eller radering). En tidsplan (cron-uttryck, standard varje timme) samt en aktiv-knapp för att pausa styr den automatiska hämtningen.

**Vilken väg passar vilken installation?** På en kontors-PC (Windows-installation) är mappen den naturliga vägen; standardmappen är `C:\ProgramData\Klacks\ErpImport\erp\orders`. Den är skyddad, och endast SYSTEM och administratörer får skriva där: En administratör måste ge kontot som ERP-exporten körs under behörigheten ”Ändra” på exakt mappen `erp\orders`, inte på hela mappen `ProgramData\Klacks`. På en egen Docker-server är mappen en vanlig mapp på servern: Compose-filen monterar mappen `erp-import` bredvid `docker-compose.yml` (kan ändras via `KLACKS_ERP_IMPORT_HOST_DIR`) på `/app/ErpImport`, och inne i containern är mappens sökväg `/app/ErpImport/erp/orders`. Installationen rapporterar sökvägen på servern via `KLACKS_ERP_IMPORT_HOST_PATH` (installationsprogrammet ställer in den); ett ERP på servermaskinen skriver direkt i den här mappen, och kontot som exporten körs under behöver skrivbehörighet på exakt den här mappen. Äldre installationer hade en namngiven volym (named volume); innehållet kopieras en enda gång till mappen (se On-Prem-README, avsnittet ”Upgrading from a named volume”). På kortet visas mappens sökväg (på Docker serverns mapp, under den sökvägen i containern) med en knapp för att kopiera den. Vid en installation som vi hostar finns ingen åtkomst till mappar på servern: push med åtkomsttoken eller manuell uppladdning.

**Åtkomsttoken** behövs bara när ett ERP-system levererar filer via push. Varje token börjar med `klacks_erp_`, är giltig 1–730 dagar (standard 365) och visas i klartext **endast en gång vid skapandet**. En sådan token gäller uteslutande för import-endpointen, inte för övrig API-åtkomst, och kan återkallas när som helst.

**Bearbetning:** Beställningar kopplas utifrån källsystem-ID och extern kundreferens (eller alternativt firma/postnummer/gata) till en befintlig eller nyskapad kund och skapas till en början som utkast, vilket planerare måste granska och försegla. En ändrad ny leverans av en redan förseglad beställning avslutar automatiskt den gamla och skapar en ny, länkad version; oförändrade upprepningsleveranser utlöser ingenting.

## Bra att veta

- Felaktiga enskilda beställningar (t.ex. utan veckodag eller med dubblerad referens) avvisas utan att blockera de övriga giltiga beställningarna i samma fil; filen visas ändå under Bearbetade, markerad med en varningssymbol, och de avvisade beställningarna kan fällas ut med sin orsak.
- Filer flyttas eller arkiveras inte: De ligger kvar i mappen och deras status finns i databasen. Framgångsrikt bearbetade filer raderas automatiskt efter 90 dagar; filer under Fel ligger kvar tills de importeras på nytt eller raderas.
- Det exakta XML-formatet (obligatoriska fält, datumformat, veckodagslogik) dokumenteras direkt i handboken på inställningssidan samt via en nedladdningsbar exempelfil.
- Denna konfiguration ligger under Inställningar och är därmed förbehållen administrativa roller.

---
*Prova direkt: [Klacks Playground](https://play.klacks-software.ch) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
