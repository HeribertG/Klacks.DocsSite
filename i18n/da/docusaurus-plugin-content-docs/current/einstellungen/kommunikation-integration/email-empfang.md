---
sidebar_position: 2
---

Under Indstillinger > IMAP-indstillinger gemmer du en postkasse, som Klacks løbende henter i baggrunden og viser i området "Indbakke" — dermed kan indgående korrespondance automatisk følges og tildeles medarbejdere og kunder.

## Sådan fungerer det

**Forbindelsesdata:** Server, port (standard 993), SSL-kryptering, brugernavn, adgangskode, den mappe der skal hentes fra (standard `INBOX`) samt hentningsintervallet i sekunder (standard 300).

**Hvad der sker med de hentede mails:** Klacks forespørger postkassen periodisk via IMAP, tjekker nye beskeder med et spamfilter (spam flyttes til junk-mappen både i Klacks og på den rigtige postkasse) og tildeler automatisk resterende beskeder til den passende kunde- eller medarbejderpost, forudsat at afsenderadressen er gemt som kontaktdata. Sådan opstår i "Indbakken" en korrespondancehistorik, der kan filtreres efter person. Ændringer som "marker som læst", flytning eller sletning slår også igennem på den rigtige postkasse.

**Test forbindelse:** Knappen "Test IMAP-forbindelse" opretter reel forbindelse til serveren, logger ind, åbner den konfigurerede mappe læsende og viser antallet af fundne beskeder. Findes mappen ikke, meldes dette eksplicit.

## Godt at vide

- Denne postkasse er **ikke** en kanal til fraværsmeldinger og **ikke** en del af ERP-ordreoverførslen (der findes separate overførselspunkter til dette, se egen side) — den forsyner udelukkende den generelle "Indbakke".
- Denne indstilling er global for hele installationen — der findes ingen separat IMAP-konto pr. bruger.
- Nulstilles den nøgle, der bruges til kryptering af installationen, kan Klacks ikke længere dekryptere den gemte adgangskode og sætter hentningen på pause, indtil adgangskoden gemmes igen.
- Beskeder i indbakken kan oversættes direkte, hvis DeepL er konfigureret (se egen side).

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
