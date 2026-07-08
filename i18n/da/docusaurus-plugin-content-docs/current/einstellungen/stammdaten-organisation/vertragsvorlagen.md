---
sidebar_position: 6
---

Under Indstillinger > Organisation > Kontrakter administrerer du de frit definerbare kontraktskabeloner, som du efterfølgende tildeler til de enkelte medarbejdere — skal ikke forveksles med selve tildelingen til en person (mere om dette under „Medarbejdere og stamdata" i Kom godt i gang).

## Sådan fungerer det

**Opret kontrakt:** Via "+ Ny kontrakt" åbnes en modal. Obligatoriske felter er navn og gyldig-fra-dato.

**Timekonfiguration:** Garanterede timer, minimumstimer, maksimumstimer og fuldtidstimer, hver angivet som timer:minutter-værdi. Minimumstimerne må ikke overstige maksimumstimerne, og de garanterede timer må ikke overstige maksimumstimerne — negative værdier er ikke tilladt for nogen af de tre.

**Tillæg:** Nat-, helligdags-, lørdags- og søndagstillæg i procent (0–100), uafhængigt af de virksomhedsomfattende grundindstillinger under Planlægnings-grundindstillinger.

**Arbejdsdage:** Afkrydsningsfelter for mandag til søndag angiver, hvilke ugedage denne kontrakt grundlæggende omfatter arbejde.

**Skifteholdsarbejde:** En switch markerer kontrakter for medarbejdere i tidlig-/sen-/natvagter.

**Gyldighedsperiode:** Gyldig fra (obligatorisk) og valgfrit Gyldig til — en kontrakt kan altså gælde tidsbegrænset eller tidsubegrænset.

**Betalingsinterval:** Ugentligt, hver anden uge, månedligt eller individuelt.

**Kalendervalg:** Hver kontrakt kan tildeles sin egen helligdagskalender, som kan afvige fra den globale kalender under Sekretariatsadresse — på den måde kan man f.eks. afbilde kantonalt forskellige helligdage.

**Planlægningsregel:** Valgfrit kan der tilknyttes en eksisterende planlægningsregel (Scheduling Rule).

**Søg, rediger og slet:** Et søgefelt filtrerer listen efter kontraktnavn; et klik på en post åbner rediger-modalen, papirkurv-ikonet sletter skabelonen (med sikkerhedsbekræftelse).

**Lagring:** Hver ændring gemmes øjeblikkeligt, når du gemmer i modalen — der er ingen fælles gem-bjælke.

## Godt at vide

- En kontraktskabelon er i første omgang kun en skabelon — først tildelingen til en person (via personadministrationen) gør den effektiv. Flere personer kan bruge samme skabelon, f.eks. "Bern Fuldtid 180 t" for alle fuldtidsansatte på lokationen Bern.
- Som standard er mandag til fredag forudvalgt som arbejdsdage, lørdag og søndag ikke — dette kan tilpasses pr. skabelon.
- Kalendervalget pr. kontrakt er valgfrit — lader du det stå tomt, gemmes ingen kontraktspecifik kalender.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
