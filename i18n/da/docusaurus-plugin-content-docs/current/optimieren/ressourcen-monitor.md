---
sidebar_position: 3
---

Ressourcemonitoren viser med ét blik, hvordan det står til med personalebelastningen i en gruppe (eller alle grupper) i det valgte år — én søjle pr. dag, hele årsforløbet over 365 dage.

## Sådan fungerer det

Visningen følger det i personaleplanlægning etablerede "Capacity vs. Workload Chart" (i projektledelseslitteraturen kendt som "Resource Histogram"). Elementerne:

- **Grønne søjler — vagter:** Antal planlagte vagter på dagen. Hver vagt tæller som én medarbejderposition; container-vagter tæller som 1.
- **Grå søjler — fravær:** Antal fraværende medarbejdere, stablet oven på de grønne søjler. En hel ferie- eller sygemelding tæller som 1, en halv som 0,5 — også i weekenden.
- **Lyserød stiplet linje — ønsket beredskab:** Hvor mange medarbejdere der i gennemsnit ville være tilgængelige, hvis de ønskede arbejdsdage pr. uge overholdes (standard: 5 dages arbejde, 2 dages hvile). Det er planlægningsmålet.
- **Rød stiplet linje — maksimalt beredskab:** Det fysiske/juridiske maksimum ved maksimalt tilladte sammenhængende arbejdsdage (standard: 6). Ligger altid på eller over den lyserøde linje.
- **Blå linje — antal medarbejdere:** Samlet arbejdsstyrke med aktiv kontrakt på den pågældende dag (headcount).

**Sådan læses den:** Nærmer overkanten af de grønne søjler sig den lyserøde linje, er arbejdsstyrken optimalt udnyttet. Differencen mellem den blå linje og overkanten af de stablede søjler er din reserve.

Med pil-knapperne øverst til højre skifter du år; via gruppevalget afgrænser du til et bestemt sted eller team.

## Godt at vide

- Erfaringsværdi: Overkanten af de grå fraværs-søjler bør ikke udgøre mere end en tredjedel af mellemrummet mellem vagter og samlet arbejdsstyrke — ellers er den operationelle reserve i fare, og sygdoms- eller feriespidser bliver svære at dække.
- Værdierne er skøn og tilnærmelser, ikke en nøjagtig opgørelse — de giver et indtryk af tilgængeligheden.
- Vagterne stammer fra planlægningen, ikke fra realiseringen — derfor er også fremtidige vagter synlige.
- Ved en 24/7-kontrakt udjævnes den lyserøde linje over ugen (ca. 0,71 pr. person og kalenderdag); ved en man-fre-kontrakt står den på 1,0 på hverdage og 0 i weekenden.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
