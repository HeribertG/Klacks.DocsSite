---
sidebar_position: 1
---

Under Innstillinger > Planleggingsregler (standardverdier) fastsetter du verdiene som automatisk forhåndsutfylles når en ny kontrakt eller en ny planleggingsregel opprettes.

## Slik fungerer det

Siden samler flere grupper med forhåndsutfylte verdier:

- **Arbeidstimer:** Daglige arbeidstimer (soll-tid), overtidsgrense (timer/uke), garanterte, minimale og maksimale månedstimer samt heltids-timetallet.
- **Grenseverdier for planleggingsregler:** Maks. arbeidsdager, min. hviledager mellom to arbeidsblokker, min. fritimer mellom to arbeidsdager, maks. optimal luke mellom skift, maks. dags-/ukestimer og maks. sammenhengende arbeidsdager — de samme størrelsene som også en enkelt planleggingsregel definerer.
- **Tillegg:** Natt-, helligdags-, lørdags- og søndagstillegg i prosent.
- **Standard arbeidsdager og helg:** Hvilke ukedager som gjelder som arbeidsdager, om det drives skiftarbeid (tidlig-/sen-/nattvakter), hvilke dager som regnes som helg, og på hvilken ukedag uken begynner.
- **Planleggingskommandoer (nøkkelord):** Tekstkommandoene `FREE`, `EARLY`, `LATE`, `NIGHT` samt deres negerte motstykker `-FREE`, `-EARLY`, `-LATE`, `-NIGHT` kan konfigureres her. Skriver en person disse ordene direkte inn i en dagcelle i vaktplanen, gjenkjenner ikke Klacks dette som et notat, men som et ønske: `FREE` betyr «ikke sett opp denne personen denne dagen hvis mulig», `EARLY`/`LATE`/`NIGHT` foretrekker eller tvinger en bestemt vakttype, de negerte variantene utelukker det motsatte. Både auto-planleggingen og harmonizeren tar hensyn til disse ønskene som en forutsetning.

## Greit å vite

- Denne siden vedlikeholder **globale standardverdier** — endringer påvirker bare **nyopprettede** kontrakter eller planleggingsregler, ikke med tilbakevirkende kraft på allerede eksisterende.
- Grenseverdiene for planleggingsregler her er identiske med dem du ellers setter individuelt per kontrakt — her fastsetter du bare startverdien som en ny kontrakt får med seg.
- Planleggingskommandoene er som standard skjult i vaktplanen og kan vises via et eget symbol i verktøylinjen.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
