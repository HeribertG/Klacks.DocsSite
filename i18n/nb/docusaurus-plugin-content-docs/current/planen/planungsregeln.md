---
sidebar_position: 5
---

Planleggingsregler definerer rammebetingelsene for den automatiske vaktplanleggingen — arbeidstider, hviletid og kapasiteter som Klacks overholder når vaktene fordeles.

## Slik fungerer det

En planleggingsregel knyttes til en **kontrakt**. De definerte grenseverdiene gjelder dermed for alle medarbeidere med denne kontrakten. Hver regel omfatter fire områder:

**Arbeidsdager og hviletid**
- Maks. arbeidsdager: myk regel for foretrukket blokklengde før en hviledag legges inn (f.eks. «5 dager arbeid, deretter hvile») — et brudd gjør ikke planen ugyldig, bare mindre optimal
- Min. hviledager mellom to arbeidsblokker
- Min. fritimer mellom to arbeidsdager (hviletid fra slutten av en arbeidsdag til starten av den neste)
- Maks. optimalt gap mellom skift i timer
- Maks. påfølgende arbeidsdager uten hviledag

**Timegrenser**
- Maks. dagstimer og maks. ukestimer
- Daglige arbeidstimer (måltid)
- Overtidsgrense: Fra dette antallet ukestimer regnes timer som overtid

**Månedlige timer**
- Garanterte timer (minimumsantall som sikres medarbeideren per måned)
- Minimalt og maksimalt antall timer per måned
- Heltidstimer (månedlig timeantall som tilsvarer en heltidsstilling)

**Ferie**
- Feriedager per kalenderår

## Greit å vite

- Ved opprettelse av en ny regel overtas **standardverdiene fra innstillingene** (Planleggingsregler — standardverdier) automatisk; du kan deretter tilpasse hver verdi individuelt.
- Planleggingsregler virker via kontrakten — du trenger ikke vedlikeholde dem per person. Endres en regel, berører det alle medarbeidere med denne kontrakten.
- Overtidsgrensen og måltiden er to forskjellige ting: Måltiden er standarden per dag, overtidsgrensen terskelverdien per uke.
- «Maks. arbeidsdager» (myk preferanse for blokklengde) og «Maks. påfølgende arbeidsdager» (hard, aldri overskridbar øvre grense) er to ulike regler — ikke forveksle dem.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
