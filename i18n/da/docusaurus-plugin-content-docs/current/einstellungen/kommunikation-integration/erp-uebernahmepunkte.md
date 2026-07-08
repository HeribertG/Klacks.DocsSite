---
sidebar_position: 5
---

Under Indstillinger > ERP-overtagelsespunkter konfigurerer du, hvordan ordrer fra et eksternt ERP-system automatisk overføres til Klacks som XML-filer.

## Sådan fungerer det

**Tre leveringsveje:** ERP-systemet kan stille filer til rådighed i drop-point'ets fildepot (Klacks henter dem automatisk efter en tidsplan), sende dem direkte til et import-endpoint via HTTP-POST (autentificeret med et adgangstoken), eller en administrator kan uploade XML-filen manuelt på denne side via drag-and-drop.

**Drop-point'et** er den centrale postkasse for alle importfiler, som Klacks selv administrerer — det viser tre områder: Indgang (venter på næste kørsel), Behandlet (arkiv) og Fejl (ugyldige filer med årsag, med mulighed for at importere på ny). En tidsplan (cron-udtryk, standard hver time) samt en aktiv-kontakt til at sætte processen på pause styrer den automatiske hentning.

**Adgangstokens** er kun nødvendige, hvis et ERP-system leverer filer via push. Hvert token starter med `klacks_erp_`, er gyldigt i 1-730 dage (standard 365) og vises i klartekst **kun én gang ved oprettelsen**. Et sådant token gælder udelukkende for import-endpointet, ikke for den øvrige API-adgang, og kan tilbagekaldes når som helst.

**Behandling:** Ordrer tilknyttes en eksisterende eller nyoprettet kunde ud fra kildesystem-ID og ekstern kundereference (eller alternativt firma/postnummer/gade) og oprettes først som kladde, som planlæggere skal kontrollere og forsegle. En ændret gen-levering af en allerede forseglet ordre afslutter automatisk den gamle og opretter en ny, forbundet version; uændrede gentagne leveringer udløser intet.

## Godt at vide

- Fejlbehæftede enkeltordrer (f.eks. uden ugedag eller med dublet reference) afvises uden at blokere de øvrige gyldige ordrer i samme fil; hele filen havner alligevel i fejl-området, så intet overses.
- Behandlede filer arkiveres, de slettes ikke.
- Det nøjagtige XML-format (obligatoriske felter, datoformater, ugedagslogik) er dokumenteret direkte i håndbogen på indstillingssiden samt via en downloadbar eksempelfil.
- Denne konfiguration ligger under indstillinger og er dermed forbeholdt administrative roller.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
