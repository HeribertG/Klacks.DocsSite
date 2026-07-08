---
sidebar_position: 5
---

Under Inställningar > ERP-övertagandepunkter konfigurerar du hur beställningar från ett externt ERP-system som XML-filer automatiskt tas över i Klacks.

## Så fungerar det

**Tre leveransvägar:** ERP-systemet kan tillhandahålla filer i drop-pointens fillager (Klacks hämtar dem automatiskt enligt tidsplan), pusha dem direkt via HTTP-POST till en import-endpoint (autentiserat med en åtkomsttoken), eller en administratör laddar upp XML-filen manuellt på denna sida via dra-och-släpp.

**Drop-pointen** är den centrala brevlådan för alla importfiler, förvaltad av Klacks själv — den visar tre områden: Inkommande (väntar på nästa körning), Bearbetade (arkiv) och Fel (ogiltiga filer med felorsak, med möjlighet till förnyad import). En tidsplan (cron-uttryck, standard varje timme) samt en aktiv-knapp för att pausa styr den automatiska hämtningen.

**Åtkomsttoken** behövs bara när ett ERP-system levererar filer via push. Varje token börjar med `klacks_erp_`, är giltig 1–730 dagar (standard 365) och visas i klartext **endast en gång vid skapandet**. En sådan token gäller uteslutande för import-endpointen, inte för övrig API-åtkomst, och kan återkallas när som helst.

**Bearbetning:** Beställningar kopplas utifrån källsystem-ID och extern kundreferens (eller alternativt firma/postnummer/gata) till en befintlig eller nyskapad kund och skapas till en början som utkast, vilket planerare måste granska och försegla. En ändrad ny leverans av en redan förseglad beställning avslutar automatiskt den gamla och skapar en ny, länkad version; oförändrade upprepningsleveranser utlöser ingenting.

## Bra att veta

- Felaktiga enskilda beställningar (t.ex. utan veckodag eller med dubblerad referens) avvisas utan att blockera de övriga giltiga beställningarna i samma fil; hela filen hamnar ändå i felområdet, så att inget förbises.
- Bearbetade filer arkiveras, tas inte bort.
- Det exakta XML-formatet (obligatoriska fält, datumformat, veckodagslogik) dokumenteras direkt i handboken på inställningssidan samt via en nedladdningsbar exempelfil.
- Denna konfiguration ligger under Inställningar och är därmed förbehållen administrativa roller.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
