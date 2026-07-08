---
sidebar_position: 5
---

Under Innstillinger > ERP-overføringspunkter konfigurerer du hvordan bestillinger fra et eksternt ERP-system automatisk tas over i Klacks som XML-filer.

## Slik fungerer det

**Tre leveringsmåter:** ERP-systemet kan legge filer i filområdet til drop-punktet (Klacks henter dem automatisk etter tidsplan), pushe dem direkte via HTTP-POST til et importendepunkt (autentisert med en tilgangstoken), eller en administrator kan laste opp XML-filen manuelt på denne siden via dra-og-slipp.

**Drop-punktet** er den sentrale postkassen for alle importfiler, forvaltet av Klacks selv — den viser tre områder: Innboks (venter på neste kjøring), Behandlet (arkiv) og Feil (ugyldige filer med feilårsak, med mulighet for å importere på nytt). En tidsplan (cron-uttrykk, standard hver time) samt en aktiv-bryter for pause styrer den automatiske hentingen.

**Tilgangstoken** trengs bare når et ERP-system leverer filer via push. Hver token starter med `klacks_erp_`, er gyldig i 1–730 dager (standard 365) og vises i klartekst **bare én gang ved opprettelsen**. En slik token gjelder utelukkende for importendepunktet, ikke for øvrig API-tilgang, og kan trekkes tilbake når som helst.

**Behandling:** Bestillinger tilordnes en eksisterende eller nyopprettet kunde basert på kildesystem-ID og ekstern kundereferanse (eller alternativt firma/postnummer/gate), og opprettes først som utkast som planleggere må sjekke og forsegle. En endret ny levering av en allerede forseglet bestilling avslutter automatisk den gamle og oppretter en ny, tilknyttet versjon; uendrede gjentatte leveringer utløser ingenting.

## Greit å vite

- Feilaktige enkeltbestillinger (f.eks. uten ukedag eller med duplisert referanse) avvises uten å blokkere de øvrige gyldige bestillingene i samme fil; hele filen havner likevel i feilområdet, slik at ingenting oversees.
- Behandlede filer arkiveres, slettes ikke.
- Det nøyaktige XML-formatet (obligatoriske felt, datoformater, ukedagslogikk) er dokumentert direkte i håndboken på innstillingssiden samt via en nedlastbar eksempelfil.
- Denne konfigurasjonen ligger i innstillingsområdet og er dermed forbeholdt administrative roller.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
