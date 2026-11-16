---
sidebar_position: 1
---

# Installasjon og Playground

Klacks kan du prøve på ett minutt — og installere på noen minutter. Ingen registrering, ingen salgssamtaler.

## Playground: lekeplassen for å bli kjent

Playground er ikke et installasjonsalternativ, men en offentlig Klacks-instans med eksempeldata til uforpliktende utforsking — derav navnet. Den kjører på **[klacks-software.ch](https://play.klacks-software.ch)**:

- **Login:** `admin@test.com` · **Passord:** `P@ssw0rt1`
- Du har fulle admin-rettigheter — prøv ut alt.
- Alle data **tilbakestilles automatisk daglig**. Ikke legg inn ekte persondata.

## Installasjon: På egen server (On-Premise)

On-Premise-pakken har alt med seg: Docker-images, installer, database, HTTPS og automatiske oppdateringer. Denne pakken finnes kun i [Klacks Store](https://klacks-software.ch/store/?culture=nb).

Velg eventuelt bransjen din i Klacks Store, last ned ZIP-filen for landet ditt og pakk den ut på målmaskinen. Velg en mappe som blir værende der den er (for eksempel `~/klacks`): de automatiske oppdateringene arbeider med denne mappen.

```bash
unzip 'klacks-onprem-*.zip' -d ~/klacks && cd ~/klacks && sudo bash ./install-*.sh
```

På Windows: `install-*.ps1` i stedet for `install-*.sh`. Installasjonsprogrammet genererer selv passord og sertifikater, laster ned de nyeste Docker-images og venter til alt kjører. Første innlogging med `admin@test.com` / `P@ssw0rt1` — **bytt dette passordet umiddelbart etter første innlogging.**

## Kontor-PC med Windows: også i Microsoft Store

For én enkelt kontor-PC med Windows finnes det et eget installasjonsprogram som fungerer uten Docker. Du får det i [Klacks Store](https://klacks-software.ch/store/?culture=nb) på siden for ditt land og også i [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (oppføringen «Klacks»). Det er det samme installasjonsprogrammet i begge butikkene. Fra Microsoft Store bruker det landet som er angitt i Windows; der velger du ingen bransje, og finnes det ingen landprofil for landet, setter installasjonen ikke opp noen. Server-, Docker- og Linux-installasjoner samt lande- og bransjepakkene finnes kun i Klacks Store.

På kontor-PC-en kommer nye versjoner via Innstillinger > [Programvareoppdateringer](../einstellungen/system-sicherheit/updates.md) i Klacks, også når Klacks er installert fra Microsoft Store. Et nyere installasjonsprogram kan ikke installeres over en eksisterende installasjon.

## Greit å vite

- En medfølgende oppdateringstjeneste holder installasjonen din automatisk oppdatert — med sikkerhetskopi før hver oppdatering og automatisk tilbakerulling ved problemer.
- Dataene dine forblir fullstendig på din egen infrastruktur; Klacks ringer ikke hjem.
- Forutsetning er en server med Docker, utgående internettilgang (for Docker-images og oppdateringer) og åpne porter 80/443.

---
*Spørsmål om installasjonen? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
