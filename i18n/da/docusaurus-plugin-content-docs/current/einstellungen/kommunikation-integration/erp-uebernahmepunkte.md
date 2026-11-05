---
sidebar_position: 5
---

# ERP-overtagelsespunkter

Under Indstillinger > Import (kun synlig i ekspertmodus), kortet „ERP Drop Points“, konfigurerer du, hvordan ordrer fra et eksternt ERP-system automatisk overføres til Klacks som XML-filer.

## Sådan fungerer det

**Tre leveringsveje:** ERP-systemet kan lægge XML-filer i en mappe på Klacks-serveren (Klacks henter dem automatisk efter en tidsplan, så snart en fil har været uændret i 10 sekunder), sende dem direkte til et import-endpoint via HTTPS-POST (autentificeret med et adgangstoken), eller en administrator kan uploade XML-filen manuelt på denne side via drag-and-drop (importen starter med det samme). Der findes ingen SFTP; der importeres kun XML-filer i formatet `ErpOrderImport`.

**Drop-point'et** er den centrale postkasse for alle importfiler, som Klacks selv administrerer — det viser tre områder: Indgang (modtaget eller under import lige nu), Behandlet (med en oversigt pr. fil) og Fejl (ulæselige eller ugyldige filer med fejlårsag, med mulighed for at importere på ny eller slette). En tidsplan (cron-udtryk, standard hver time) samt en aktiv-kontakt til at sætte processen på pause styrer den automatiske hentning.

**Hvilken vej passer til hvilken installation?** På en kontor-pc (Windows-installation) er mappen den nærliggende vej; standardmappen er `C:\ProgramData\Klacks\ErpImport\erp\orders`. Den er beskyttet, og kun SYSTEM og administratorer må skrive der: En administrator skal give den konto, som ERP-eksporten kører under, rettigheden „Rediger“ præcis på mappen `erp\orders`, ikke på hele mappen `ProgramData\Klacks`. På en egen Docker-server ligger mappen (`/app/ErpImport/erp/orders`) inde i containeren i et navngivet volume; et ERP på serverens computer kan kun nå den, hvis administratoren monterer en mappe fra serveren på `/app/ErpImport`, ellers er der push med adgangstoken eller manuel upload. Ved en installation, som vi hoster, er der ingen adgang til serverens mapper: push med adgangstoken eller manuel upload.

**Adgangstokens** er kun nødvendige, hvis et ERP-system leverer filer via push. Hvert token starter med `klacks_erp_`, er gyldigt i 1-730 dage (standard 365) og vises i klartekst **kun én gang ved oprettelsen**. Et sådant token gælder udelukkende for import-endpointet, ikke for den øvrige API-adgang, og kan tilbagekaldes når som helst.

**Behandling:** Ordrer tilknyttes en eksisterende eller nyoprettet kunde ud fra kildesystem-ID og ekstern kundereference (eller alternativt firma/postnummer/gade) og oprettes først som kladde, som planlæggere skal kontrollere og forsegle. En ændret gen-levering af en allerede forseglet ordre afslutter automatisk den gamle og opretter en ny, forbundet version; uændrede gentagne leveringer udløser intet.

## Godt at vide

- Fejlbehæftede enkeltordrer (f.eks. uden ugedag eller med dublet reference) afvises uden at blokere de øvrige gyldige ordrer i samme fil; filen vises alligevel under Behandlet, markeret med et advarselssymbol, og de afviste ordrer kan foldes ud med deres årsag.
- Filer flyttes eller arkiveres ikke: De bliver liggende i mappen, og deres status står i databasen. Vellykket behandlede filer slettes automatisk efter 90 dage; filer under Fejl bliver, indtil de importeres på ny eller slettes.
- Det nøjagtige XML-format (obligatoriske felter, datoformater, ugedagslogik) er dokumenteret direkte i håndbogen på indstillingssiden samt via en downloadbar eksempelfil.
- Denne konfiguration ligger under indstillinger og er dermed forbeholdt administrative roller.

---
*Prøv det direkte: [Klacks Playground](https://play.klacks-software.ch) — login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
