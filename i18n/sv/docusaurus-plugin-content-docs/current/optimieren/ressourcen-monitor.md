---
sidebar_position: 3
---

Resursmonitorn visar på en gång hur personalbeläggningen ser ut för en grupp (eller alla grupper) under det valda året — en stapel per dag, hela årsförloppet över 365 dagar.

## Så fungerar det

Visualiseringen följer det inom personalplanering etablerade «Capacity vs. Workload Chart» (känt som «Resource Histogram» i projektledningslitteraturen). Elementen:

- **Gröna staplar — arbetspass:** Antal schemalagda arbetspass per dag. Varje arbetspass räknas som en medarbetarposition; container-arbetspass räknas som 1.
- **Grå staplar — frånvaro:** Antal frånvarande medarbetare, staplade ovanpå de gröna staplarna. En hel semester- eller sjukregistrering räknas som 1, en halv som 0,5 — även på helger.
- **Rosa prickad linje — önskad bemanningsberedskap:** Hur många medarbetare som i genomsnitt skulle vara tillgängliga om de önskade arbetsdagarna per vecka följs (standard: 5 dagars arbete, 2 dagars vila). Detta är planeringsmålet.
- **Röd streckad linje — maximal bemanningsberedskap:** Det fysiska/juridiska maximumet vid maximalt tillåtna sammanhängande arbetsdagar (standard: 6). Ligger alltid på eller över den rosa linjen.
- **Blå linje — antal medarbetare:** Total personalstyrka med aktivt avtal den aktuella dagen (headcount).

**Tolkning:** Om de gröna staplarnas överkant närmar sig den rosa linjen är personalstyrkan optimalt utnyttjad. Skillnaden mellan den blå linjen och överkanten av de staplade staplarna är din reserv.

Med pilknapparna uppe till höger byter du år; via gruppurvalet avgränsar du till en plats eller ett team.

## Bra att veta

- Erfarenhetsvärde: Överkanten på de grå frånvarostaplarna bör inte utgöra mer än en tredjedel av gapet mellan arbetspass och total personalstyrka — annars äventyras den operativa reserven och sjukdoms- eller semestertoppar blir svåra att fylla.
- Värdena är uppskattningar och approximationer, ingen exakt avräkning — de ger en uppfattning om tillgängligheten.
- Arbetspassen kommer från planeringen, inte från genomförandet — därför syns även framtida arbetspass.
- Vid ett 24/7-avtal utjämnas den rosa linjen över veckan (ca 0,71 per person och kalenderdag); vid ett mån–fre-avtal ligger den på 1,0 på vardagar och på 0 under helgen.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
