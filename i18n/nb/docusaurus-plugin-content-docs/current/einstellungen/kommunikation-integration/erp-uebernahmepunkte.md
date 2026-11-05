---
sidebar_position: 5
---

# ERP-overføringspunkter

Under Innstillinger > Import (bare synlig i ekspertmodus), kortet «ERP Drop Points», konfigurerer du hvordan bestillinger fra et eksternt ERP-system automatisk tas over i Klacks som XML-filer.

## Slik fungerer det

**Tre leveringsmåter:** ERP-systemet kan legge XML-filer i en mappe på Klacks-serveren (Klacks henter dem automatisk etter tidsplan så snart en fil har vært uendret i 10 sekunder), pushe dem direkte via HTTPS-POST til et importendepunkt (autentisert med en tilgangstoken), eller en administrator kan laste opp XML-filen manuelt på denne siden via dra-og-slipp (importen starter umiddelbart). Det finnes ingen SFTP; bare XML-filer i formatet `ErpOrderImport` importeres.

**Drop-punktet** er den sentrale postkassen for alle importfiler, forvaltet av Klacks selv — den viser tre områder: Innboks (mottatt eller under import nå), Behandlet (med en oppsummering per fil) og Feil (uleselige eller ugyldige filer med feilårsak, med mulighet for å importere på nytt eller slette). En tidsplan (cron-uttrykk, standard hver time) samt en aktiv-bryter for pause styrer den automatiske hentingen.

**Hvilken vei passer til hvilken installasjon?** På en kontor-PC (Windows-installasjon) er mappen den nærliggende veien; standardmappen er `C:\ProgramData\Klacks\ErpImport\erp\orders`. Den er beskyttet, og bare SYSTEM og administratorer får skrive der: En administrator må gi kontoen som ERP-eksporten kjører under, rettigheten «Endre» nøyaktig på mappen `erp\orders`, ikke på hele mappen `ProgramData\Klacks`. På en egen Docker-server ligger mappen (`/app/ErpImport/erp/orders`) inne i containeren i et navngitt volum; et ERP på servermaskinen når den bare hvis administratoren monterer en mappe fra serveren på `/app/ErpImport`, ellers gjenstår push med tilgangstoken eller manuell opplasting. Ved en installasjon som vi hoster, finnes det ingen tilgang til mapper på serveren: push med tilgangstoken eller manuell opplasting.

**Tilgangstoken** trengs bare når et ERP-system leverer filer via push. Hver token starter med `klacks_erp_`, er gyldig i 1–730 dager (standard 365) og vises i klartekst **bare én gang ved opprettelsen**. En slik token gjelder utelukkende for importendepunktet, ikke for øvrig API-tilgang, og kan trekkes tilbake når som helst.

**Behandling:** Bestillinger tilordnes en eksisterende eller nyopprettet kunde basert på kildesystem-ID og ekstern kundereferanse (eller alternativt firma/postnummer/gate), og opprettes først som utkast som planleggere må sjekke og forsegle. En endret ny levering av en allerede forseglet bestilling avslutter automatisk den gamle og oppretter en ny, tilknyttet versjon; uendrede gjentatte leveringer utløser ingenting.

## Greit å vite

- Feilaktige enkeltbestillinger (f.eks. uten ukedag eller med duplisert referanse) avvises uten å blokkere de øvrige gyldige bestillingene i samme fil; filen vises likevel under Behandlet, merket med et advarselssymbol, og de avviste bestillingene kan utvides med årsaken.
- Filer flyttes eller arkiveres ikke: De blir liggende i mappen, og statusen deres står i databasen. Vellykket behandlede filer slettes automatisk etter 90 dager; filer under Feil blir liggende til de importeres på nytt eller slettes.
- Det nøyaktige XML-formatet (obligatoriske felt, datoformater, ukedagslogikk) er dokumentert direkte i håndboken på innstillingssiden samt via en nedlastbar eksempelfil.
- Denne konfigurasjonen ligger i innstillingsområdet og er dermed forbeholdt administrative roller.

---
*Prøv det direkte: [Klacks Playground](https://play.klacks-software.ch) — Logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
