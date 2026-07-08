---
sidebar_position: 3
---

Ressursmonitoren viser på ett blikk hvordan bemanningsbelastningen for en gruppe (eller alle grupper) står i det valgte året — én stolpe per dag, over 365 dager hele årsforløpet.

## Slik fungerer det

Fremstillingen følger det etablerte «Capacity vs. Workload Chart» innen bemanningsplanlegging (kjent i prosjektledelseslitteraturen som «Resource Histogram»). Elementene:

- **Grønne stolper — vakter:** Antall planlagte vakter den dagen. Hver vakt teller som én medarbeiderposisjon; container-vakter teller som 1.
- **Grå stolper — fravær:** Antall fraværende medarbeidere, stablet oppå de grønne stolpene. En hel ferie- eller sykdomsregistrering teller som 1, en halv som 0,5 — også i helgen.
- **Rosa prikket linje — ønsket beredskap:** Hvor mange medarbeidere som i snitt ville vært tilgjengelige dersom de ønskede arbeidsdagene per uke overholdes (standard: 5 dager arbeid, 2 dager hvile). Dette er planleggingsmålet.
- **Rød stiplet linje — maksimal beredskap:** Det fysiske/juridiske maksimumet ved maksimalt tillatte påfølgende arbeidsdager (standard: 6). Ligger alltid på eller over den rosa linjen.
- **Blå linje — antall medarbeidere:** Hele arbeidsstyrken med aktiv kontrakt den aktuelle dagen (headcount).

**Slik leser du det:** Nærmer overkanten av de grønne stolpene seg den rosa linjen, er arbeidsstyrken optimalt utnyttet. Differansen mellom den blå linjen og overkanten av de stablede stolpene er reserven din.

Med pilknappene øverst til høyre bytter du år; via gruppevalget avgrenser du til en lokasjon eller et team.

## Greit å vite

- Erfaringsverdi: Overkanten av de grå fraværsstolpene bør ikke utgjøre mer enn en tredjedel av gapet mellom vakter og total arbeidsstyrke — ellers trues den operative reserven, og sykdoms- eller feriepiker blir vanskelige å fylle.
- Verdiene er anslag og tilnærminger, ikke en eksakt avregning — de gir et inntrykk av tilgjengeligheten.
- Vaktene stammer fra planleggingen, ikke fra realiseringen — dermed er også fremtidige vakter synlige.
- Ved en 24/7-kontrakt jevnes den rosa linjen ut over uken (ca. 0,71 per person og kalenderdag); ved en man–fre-kontrakt står den på 1,0 på virkedager og 0 i helgen.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
