---
sidebar_position: 1
---

# Auto-planlægning: Ét klik, resten kører i baggrunden

Den mest besværlige del af vagtplanlægningen — tildelingen af mennesker til vagter — klarer Klacks med et enkelt klik. Selve beregningen tager sin tid, men kører videre i baggrunden: Du behøver ikke vente og kan i mellemtiden tage dig af andre ting.

## Sådan fungerer det

Bag 1-klik auto-planlægningen ligger en **genetisk algoritme**: Den genererer tusindvis af planvarianter, vurderer dem og kombinerer de bedste videre — indtil der står en afbalanceret løsning. Hårde regler har altid forrang, først derefter tæller andre mål:

- **Regler** — arbejdsret, hviletider, kvalifikationer og tilgængelighed er ikke til forhandling: Intet resultat, uanset hvor godt, må krænke en hård regel
- **Dækning** — hver vagt besættes med det krævede antal personer
- **Fairness** — arbejdstimerne fordeles jævnt, og vagtrækkefølgen pr. person følger så vidt muligt mønsteret tidlig → sen → nat
- **Kontinuitet** — hvor det er muligt, forbliver medarbejdere på deres vante indsatssted

Du starter auto-planlægningen direkte fra vagtplanen for den valgte periode. Resultatet fremstår som et almindeligt planudkast: Alt kan efterjusteres manuelt, intet fastlåses uden videre.

## Godt at vide

- Kvalifikationer fungerer som en reel grænse: Den, der ikke har en krævet kvalifikation, planlægges ikke ind.
- Auto-planlægningen respekterer allerede eksisterende poster — du kan altså først sætte faste punkter og lade resten blive udfyldt.
- Hvis et resultat ikke passer, planlægger du bare igen: Algoritmen finder ligeværdige alternativer.
- Du kan oprette flere scenarier parallelt uden at ændre den eksisterende plan: Hvert scenarie er sin egen hvad-nu-hvis-kopi, som du kan sammenligne, kassere eller overtage. På den måde er du forberedt på kortsigtede omlægninger i stedet for først at skulle genberegne, når det sker.

![Klacks vagtplan-gitter](/img/app-schedule-de.png)

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
