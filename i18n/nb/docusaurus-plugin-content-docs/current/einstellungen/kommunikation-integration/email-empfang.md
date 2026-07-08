---
sidebar_position: 2
---

Under Innstillinger > IMAP-innstillinger legger du inn en postboks som Klacks kontinuerlig henter i bakgrunnen og viser i området "Innboks" — dermed kan innkommende korrespondanse automatisk tilordnes og spores mot medarbeidere og kunder.

## Slik fungerer det

**Tilkoblingsdata:** Server, port (standard 993), SSL-kryptering, brukernavn, passord, mappen som skal hentes (standard `INBOX`) samt hentefrekvens i sekunder (standard 300).

**Hva som skjer med de hentede e-postene:** Klacks spør postboksen periodisk via IMAP, sjekker nye meldinger med et spamfilter (spam flyttes til søppelpost-mappen både i Klacks og på den ekte postboksen), og tilordner gjenværende meldinger automatisk til riktig kunde- eller medarbeiderpost, forutsatt at avsenderadressen er lagret som kontaktdata. Slik oppstår det i "Innboksen" en korrespondansehistorikk som kan filtreres per person. Endringer som "merk som lest", flytting eller sletting virker også tilbake på den ekte postboksen.

**Teste tilkobling:** Knappen "Test IMAP-tilkobling" kobler seg reelt til serveren, logger inn, åpner den konfigurerte mappen for lesing og viser antall funnet meldinger. Finnes ikke mappen, meldes dette eksplisitt.

## Greit å vite

- Denne postboksen er **ikke** en kanal for fraværsmeldinger og **ikke** en del av ERP-bestillingsovertakelsen (for det finnes egne overføringspunkter, se egen side) — den mater utelukkende den generelle "Innboksen".
- Denne innstillingen gjelder globalt for hele installasjonen — det finnes ingen separat IMAP-konto per bruker.
- Blir krypteringsnøkkelen til installasjonen tilbakestilt, kan Klacks ikke lenger dekryptere det lagrede passordet og setter hentingen på pause inntil passordet er lagret på nytt.
- Meldinger i innboksen kan oversettes direkte hvis DeepL er konfigurert (se egen side).

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
