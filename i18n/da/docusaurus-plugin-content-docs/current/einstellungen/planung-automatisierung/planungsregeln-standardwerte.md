---
sidebar_position: 1
---

Under Indstillinger > Planlægningsregler (standardværdier) fastlægger du de værdier, der automatisk foreslås, når en ny kontrakt eller en ny planlægningsregel oprettes.

## Sådan fungerer det

Siden samler flere grupper af standardværdier:

- **Arbejdstimer:** Daglige arbejdstimer (soltid), overtidsgrænse (timer/uge), garanterede, mindste og maksimale månedstimer samt fuldtids-timeantallet.
- **Grænseværdier for planlægningsregler:** Maks. arbejdsdage, min. hviledage mellem to arbejdsblokke, min. fritimer mellem to arbejdsdage, maks. optimal afstand mellem vagter, maks. dags-/ugetimer og maks. sammenhængende arbejdsdage — de samme størrelser, som også en enkelt planlægningsregel definerer.
- **Tillæg:** Nat-, helligdags-, lørdags- og søndagstillæg i procent.
- **Standard-arbejdsdage og weekend:** Hvilke ugedage der gælder som arbejdsdage, om der arbejdes i skift (tidlig-/sen-/natvagter), hvilke dage der tæller som weekend, og på hvilken ugedag ugen begynder.
- **Planlægningskommandoer (nøgleord):** Tekstkommandoerne `FREE`, `EARLY`, `LATE`, `NIGHT` samt deres negerede modstykker `-FREE`, `-EARLY`, `-LATE`, `-NIGHT` kan konfigureres her. Skriver en person disse ord direkte i en dagcelle i vagtplanen, genkender Klacks det ikke som en note, men som et ønske: `FREE` betyder "planlæg mig helst ikke denne dag", `EARLY`/`LATE`/`NIGHT` foretrækker eller tvinger en bestemt vagttype, de negerede varianter udelukker det modsatte. Både auto-planlægningen og harmonizeren tager hensyn til disse ønsker som forudsætning.

## Godt at vide

- Denne side vedligeholder **globale standardværdier** — ændringer får kun virkning for **nyoprettede** kontrakter eller planlægningsregler, ikke med tilbagevirkende kraft for allerede eksisterende.
- Grænseværdierne for planlægningsregler her er identiske med dem, du ellers sætter individuelt pr. kontrakt — her fastlægger du blot startværdien, som en ny kontrakt får med.
- Planlægningskommandoerne er som standard skjult i vagtplanen og kan vises via et eget symbol i værktøjslinjen.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
