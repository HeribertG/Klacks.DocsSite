---
sidebar_position: 5
---

Under Indstillinger > Synlighed af grupper pr. bruger fastlægger du, hvilke grupper — og dermed hvilke tilhørende data — en given bruger må se.

## Sådan fungerer det

Listen viser alle brugere med navn og antallet af rodgrupper, der er tildelt (synlige) for dem. Et klik på tallet åbner en formular med en afkrydsningsliste over alle rodgrupper; her markerer du, hvilke grupper denne bruger må se. Frigives en rodgruppe, gælder det automatisk også for alle dens undergrupper.

Administratorer er undtaget fra denne begrænsning: For dem er knappen deaktiveret, og det viste tal svarer altid til det samlede antal rodgrupper — administratorer ser grundlæggende alt.

## Godt at vide

- Hos en normal (ikke-admin) bruger uden nogen tildeling betyder "0 tildelte grupper": Denne bruger ser i øjeblikket **intet** i gruppe-afgrænsede områder (f.eks. dashboard, kundeliste) — det er ikke en fejl, men den direkte konsekvens af den manglende tildeling.
- Undtagelse: Findes der i systemet aktuelt **slet ingen** grupper, ser alle brugere alt — installationer uden gruppestruktur kræver dermed ingen vedligeholdelse af denne indstilling.
- Opret først gruppestrukturen under stamdata, før du foretager tildelinger her — uden eksisterende grupper er der intet at afkrydse.
- Denne indstilling styrer **synligheden** af data, ikke de grundlæggende **rettigheder** for en rolle — roller/rettigheder administreres uafhængigt heraf.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
