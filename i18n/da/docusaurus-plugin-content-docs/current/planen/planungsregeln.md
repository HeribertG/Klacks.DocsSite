---
sidebar_position: 5
---

Planlægningsregler definerer rammebetingelserne for den automatiske vagtplanlægning — arbejdstider, hviletider og kapaciteter, som Klacks overholder ved fordelingen af vagterne.

## Sådan fungerer det

En planlægningsregel tilknyttes en **kontrakt**. De definerede grænseværdier gælder dermed for alle medarbejdere med denne kontrakt. Hver regel omfatter fire områder:

**Arbejdsdage & hviletider**
- Maks. arbejdsdage: blød regel for den foretrukne blok-længde, før en hviledag planlægges ind (f.eks. "5 dage arbejde, så hvile") — en overtrædelse gør ikke planen ugyldig, kun mindre optimal
- Min. hviledage mellem to arbejdsblokke
- Min. fritimer mellem to arbejdsdage (hviletid fra afslutningen af én arbejdsdag til begyndelsen af den næste)
- Maks. optimal pause mellem vagter i timer
- Maks. sammenhængende arbejdsdage uden hviledag

**Timegrænser**
- Maks. dagstimer og maks. ugetimer
- Daglige arbejdstimer (normtid)
- Overtidsgrænse: Fra dette antal ugetimer regnes timer som overarbejde

**Månedlige timer**
- Garanterede timer (mindsteantal, som medarbejderen tilsikres pr. måned)
- Minimum og maksimum timer pr. måned
- Fuldtidstimer (månedligt timeantal svarende til en fuldtidsstilling)

**Ferie**
- Feriedage pr. kalenderår

## Godt at vide

- Ved oprettelse af en ny regel overtages automatisk **standardværdierne fra indstillingerne** (Planlægningsregler — standardværdier); du kan efterfølgende tilpasse hver værdi individuelt.
- Planlægningsregler virker via kontrakten — du behøver ikke vedligeholde dem pr. person. Ændres en regel, berører det alle medarbejdere med denne kontrakt.
- Overtidsgrænsen og normtiden er to forskellige ting: Normtiden er standarden pr. dag, overtidsgrænsen tærskelværdien pr. uge.
- "Maks. arbejdsdage" (blød præference for blok-længden) og "Maks. sammenhængende arbejdsdage" (hård, aldrig overskridelig øvre grænse) er to forskellige regler — må ikke forveksles.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
