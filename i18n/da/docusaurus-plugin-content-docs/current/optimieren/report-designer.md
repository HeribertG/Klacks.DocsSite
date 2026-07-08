---
sidebar_position: 6
---

Med Report-designeren udformer du dine egne udskriftsskabeloner — fra vagtplan til adresseliste — direkte i Klacks, uden eksterne værktøjer.

## Sådan fungerer det

En rapport består af tre områder, som du redigerer i fanen *Designer*:

- **Header** — udskrives øverst på hver side. Den har tre zoner (venstre, midte, højre), som kan indeholde databasefelter, fritekst eller billeder (f.eks. dit firmalogo, uploadet via billedhåndteringen).
- **Body** — indeholder en eller flere datatabeller. Kolonner tilføjer du med drag & drop fra feltlisten; rækkefølgen justerer du også med drag & drop, bredden via et procent-indtastningsfelt pr. kolonne.
- **Footer** — udskrives nederst på hver side.

Hver tabel er knyttet til en **datakilde**, som du vælger i fanen *Datakilde*: vagtplan (Schedule), adresser som liste eller detalje, fravær, vagter, grupper eller container-skabelon. Datakilden afgør, hvilke felter der er tilgængelige.

Til udformningen står følgende til rådighed:
- **Formatering** pr. celle og fritekst: skrifttype, størrelse, fed/kursiv/understreget, tekstfarve, justering.
- **Cellekanter** enkeltvis pr. side (top/højre/bund/venstre) med linjestil og -farve.
- **Tabel-fodnote** med SUM-felter: numeriske kolonner summeres automatisk.
- **Fritekstlinjer** før eller efter datatabellerne — f.eks. til bemærkninger, betingelser eller underskriftsfelter.
- **Sideindstillinger** i fanen *Generelt*: stående eller liggende format, papirstørrelse (A4, A3, B4/B5 JIS, Letter) og sidemargener i mm.

## Godt at vide

- **Sammenlagte felter (Merged Fields):** Via værktøjslinjen for det valgte felt kan du kombinere flere felter i én enkelt kolonne; separatoren (komma, mellemrum, linjeskift, bindestreg) kan konfigureres.
- Ved datakilden **Vagtplan** findes to ekstra muligheder: *Saml poster pr. dag* (flere poster samme dag i én linje) og *Vis hele perioden* (alle dage, også uden poster).
- Tabel-fodnoten aktiverer du via et afkrydsningsfelt lige under den pågældende tabel; SUM-beskrivelsen kan vises eller skjules separat for fodnote-feltet.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
