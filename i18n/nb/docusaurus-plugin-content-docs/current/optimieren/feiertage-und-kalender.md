---
sidebar_position: 4
---

Den evige kalenderen beregner helligdager for hvert år automatisk — du definerer reglene én gang, og Klacks kjenner helligdagene for alle kommende år.

## Slik fungerer det

Hver helligdag beskrives med en kort regel. Det finnes to grunntyper:

- **Faste datoer** i formatet `MM/DD`: `01/01` er nyttårsdag, `08/01` den sveitsiske nasjonaldagen, `12/25` juledag.
- **Påskerelaterte datoer** i formatet `EASTER+XX` eller `EASTER-XX`: Påskedatoen beregnes automatisk etter den gaussiske påskeformelen, og helligdagen som avstand til denne. Eksempler: `EASTER-02` = langfredag, `EASTER+01` = andre påskedag, `EASTER+39` = Kristi himmelfartsdag, `EASTER+50` = andre pinsedag, `EASTER+60` = Kristi legemsfest.

I tillegg finnes **faste datoer med ukedagsforskyvning** (`MM/DD+XX+WW` eller `MM/DD+XX-WW`) for helligdager som «første torsdag i november» (`11/01+00+TH`) eller «siste mandag i mai» (`05/25+00-MO`).

Med **SubRules** flytter du en helligdag automatisk hvis den faller på en bestemt ukedag — f.eks. `SA+2;SU+1`: Faller dagen på lørdag eller søndag, flyttes den til mandag. Flere regler skilles med `;`.

Per regel registrerer du dessuten navn og beskrivelse (flerspråklig), land og kanton/delstat samt avkrysningsboksene **Lovbestemt helligdag** og **Betalt**.

## Greit å vite

- Ukedagsforkortelsene er på engelsk: `SU`, `MO`, `TU`, `WE`, `TH`, `FR`, `SA`.
- SubRules er først og fremst ment for å flytte helligdager fra helgen til neste virkedag.
- Avkrysningsboksen **Betalt** er relevant for lønnsberegningen.
- Via land og kanton/delstat styrer du regionale forskjeller — langfredag gjelder f.eks. i Sveits ikke i alle kantoner (unntak: VS, TI).
- De forhåndsinstallerte kalenderpakkene for land og sveitsiske kantoner er sperret mot sletting; egne, selvopprettede kalenderutvalg kan du slette når som helst.

![Helligdagsregler i Klacks](/img/app-calendar-de.png)

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
