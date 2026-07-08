---
sidebar_position: 4
---

Den evige kalender beregner automatisk helligdage for hvert år — du definerer reglerne én gang, så kender Klacks helligdagene for alle kommende år.

## Sådan fungerer det

Hver helligdag beskrives via en kort regel. Der findes to grundtyper:

- **Faste datoer** i formatet `MM/DD`: `01/01` er nytårsdag, `08/01` den schweiziske nationaldag, `12/25` juledag.
- **Påskerelaterede datoer** i formatet `EASTER+XX` eller `EASTER-XX`: Påskedatoen beregnes automatisk efter den gaussiske påskeformel, helligdagen som afstand hertil. Eksempler: `EASTER-02` = langfredag, `EASTER+01` = 2. påskedag, `EASTER+39` = Kristi himmelfartsdag, `EASTER+50` = 2. pinsedag, `EASTER+60` = Kristi legemsfest.

Derudover findes der **faste datoer med ugedagsforskydning** (`MM/DD+XX+WW` hhv. `MM/DD+XX-WW`) til helligdage som «første torsdag i november» (`11/01+00+TH`) eller «sidste mandag i maj» (`05/25+00-MO`).

Med **SubRules** forskyder du automatisk en helligdag, hvis den falder på en bestemt ugedag — f.eks. `SA+2;SU+1`: Falder dagen på en lørdag eller søndag, rykker den til mandag. Flere regler adskilles med `;`.

Pr. regel registrerer du desuden navn og beskrivelse (flersproget), land og kanton/delstat samt afkrydsningsfelterne **Lovfæstet helligdag** og **Betalt**.

## Godt at vide

- Ugedagsforkortelserne er engelske: `SU`, `MO`, `TU`, `WE`, `TH`, `FR`, `SA`.
- SubRules er primært tænkt til at forskyde helligdage fra weekenden til den næste hverdag.
- Afkrydsningsfeltet **Betalt** er relevant for lønberegningen.
- Via land og kanton/delstat styrer du regionale forskelle — langfredag gælder f.eks. i Schweiz ikke i alle kantoner (undtagelser: VS, TI).
- De forinstallerede kalenderpakker for lande og schweiziske kantoner er låst mod sletning; egne, selv oprettede kalendervalg kan du til enhver tid slette.

![Helligdagsregler i Klacks](/img/app-calendar-de.png)

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
