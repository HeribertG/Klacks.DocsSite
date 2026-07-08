---
sidebar_position: 5
---

Under Innstillinger > Synlighet av grupper per bruker bestemmer du hvilke grupper — og dermed hvilke tilhørende data — en enkelt bruker får se.

## Slik fungerer det

Listen viser alle brukere med navn og antall rot-grupper som er tildelt (synlige) for dem. Et klikk på tallet åpner et skjema med en avkrysningsliste over alle rot-grupper; her markerer du hvilke grupper denne brukeren skal få se. Frigis en rot-gruppe, gjelder dette automatisk også for alle undergruppene den har.

Administratorer er unntatt fra denne begrensningen: Hos dem er knappen deaktivert, og tallet som vises tilsvarer alltid det totale antallet rot-grupper — administratorer ser i utgangspunktet alt.

## Greit å vite

- Hos en vanlig bruker (ikke admin) uten noen tildeling betyr «0 tildelte grupper»: Denne brukeren ser i gruppe-avgrensede områder (f.eks. dashbord, kundeliste) for øyeblikket **ingenting** — det er ikke en feilfunksjon, men en direkte følge av den manglende tildelingen.
- Unntak: Finnes det for øyeblikket **ingen** grupper i systemet, ser alle brukere alt — installasjoner uten gruppestruktur trenger dermed ikke å vedlikeholde denne innstillingen.
- Opprett gruppestrukturen under stamdata først, før du gjør tildelinger her — uten eksisterende grupper er det ingenting å krysse av her.
- Denne innstillingen styrer **synligheten** av data, ikke en rolles grunnleggende **rettigheter** — roller/rettigheter forvaltes uavhengig av dette.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
