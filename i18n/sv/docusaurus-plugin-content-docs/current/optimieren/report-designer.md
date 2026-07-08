---
sidebar_position: 6
---

Med Report-designern skapar du egna utskriftsmallar — från schema till adresslista — direkt i Klacks, utan externa verktyg.

## Så fungerar det

En rapport består av tre områden som du redigerar under fliken *Designer*:

- **Header** — skrivs ut högst upp på varje sida. Den har tre zoner (vänster, mitten, höger) som kan innehålla databasfält, fritext eller bilder (t.ex. ditt företagslogotyp, uppladdad via bildhanteraren).
- **Body** — innehåller en eller flera datatabeller. Kolumner lägger du till med dra-och-släpp från fältlistan; ordningen justerar du också med dra-och-släpp, och bredden via ett procentfält per kolumn.
- **Footer** — skrivs ut längst ner på varje sida.

Varje tabell är kopplad till en **datakälla** som du väljer under fliken *Datakälla*: schema (Schedule), adresser som lista eller detalj, frånvaro, skift, grupper eller container-mall. Datakällan avgör vilka fält som är tillgängliga.

För utformningen finns:
- **Formatering** per cell och fritext: typsnitt, storlek, fet/kursiv/understruken, textfärg, justering.
- **Cellramar** individuellt per sida (upp/höger/ner/vänster) med linjestil och -färg.
- **Tabellens fotrad** med SUM-fält: Numeriska kolumner summeras automatiskt.
- **Fritextrader** före eller efter datatabellerna — till exempel för anvisningar, villkor eller signaturfält.
- **Sidinställningar** under fliken *Allmänt*: stående eller liggande format, pappersstorlek (A4, A3, B4/B5 JIS, Letter) och sidmarginaler i mm.

## Bra att veta

- **Merged Fields:** Via verktygsfältet för det valda fältet kan du kombinera flera fält i en enda kolumn; separatorn (komma, mellanslag, radbrytning, bindestreck) är konfigurerbar.
- För datakällan **Schema** finns två tilläggsalternativ: *Slå samman poster per dag* (flera poster samma dag i en rad) och *Visa hela perioden* (alla dagar, även utan poster).
- Tabellens fotrad aktiverar du via en kryssruta direkt under respektive tabell; SUM-etiketten kan visas eller döljas separat för fotradsfältet.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
