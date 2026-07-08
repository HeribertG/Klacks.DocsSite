---
sidebar_position: 6
---

Med rapportdesigneren utformer du egne utskriftsmaler — fra vaktplan til adresseliste — direkte i Klacks, uten eksterne verktøy.

## Slik fungerer det

En rapport består av tre områder som du redigerer i fanen *Designer*:

- **Header** — skrives ut øverst på hver side. Den har tre soner (venstre, midt, høyre) som kan inneholde databasefelt, fritekst eller bilder (f.eks. firmalogoen din, lastet opp via bildebehandleren).
- **Body** — inneholder én eller flere datatabeller. Kolonner legger du til med dra-og-slipp fra feltlisten; rekkefølgen justerer du også med dra-og-slipp, bredden via et prosent-inntastingsfelt per kolonne.
- **Footer** — skrives ut nederst på hver side.

Hver tabell er koblet til en **datakilde**, som du velger i fanen *Datakilde*: arbeidsplan (Schedule), adresser som liste eller detalj, fravær, skift, grupper eller container-mal. Datakilden bestemmer hvilke felt som er tilgjengelige.

For utformingen står følgende til rådighet:
- **Formatering** per celle og fritekst: skrifttype, størrelse, fet/kursiv/understreket, tekstfarge, justering.
- **Cellerammer** individuelt per side (topp/høyre/bunn/venstre) med linjestil og -farge.
- **Tabellbunntekst** med SUM-felt: numeriske kolonner summeres automatisk.
- **Fritekstlinjer** før eller etter datatabellene — for eksempel for merknader, betingelser eller signaturfelt.
- **Sideinnstillinger** i fanen *Generelt*: stående eller liggende format, papirstørrelse (A4, A3, B4/B5 JIS, Letter) og sidemarger i mm.

## Greit å vite

- **Sammenslåtte felt (Merged Fields):** Via verktøylinjen til det valgte feltet kan du kombinere flere felt i én enkelt kolonne; skilletegnet (komma, mellomrom, linjeskift, bindestrek) kan konfigureres.
- For datakilden **Arbeidsplan** finnes det to tilleggsalternativer: *Samle oppføringer per dag* (flere oppføringer samme dag i én linje) og *Vis hele perioden* (alle dager, også uten oppføringer).
- Tabellbunnteksten aktiverer du via en avkrysningsboks rett under den aktuelle tabellen; SUM-teksten kan vises eller skjules separat for bunntekstfeltet.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
