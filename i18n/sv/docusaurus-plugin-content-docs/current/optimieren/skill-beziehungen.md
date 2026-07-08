---
sidebar_position: 5
---

AI-assistenten Klacksy lär sig från den dagliga användningen vilka av sina förmågor (Skills) som hör ihop — och väljer därmed nästa gång ut rätt Skills mer träffsäkert.

## Så fungerar det

Klacksy observerar i bakgrunden vilka Skills som ofta används tillsammans eller efter varandra i en session, och härleder därifrån **relationer**. Inlärningsprocessen körs automatiskt var 6:e timme. Sidan Skill-relationer visar alla identifierade relationer; administratörer avgör om de ska godkännas eller förkastas.

**Relationstyper**
- *Sekventiell:* Skill A används regelbundet före Skill B.
- *Gemensamt nödvändiga:* Båda Skills förekommer ofta i samma session, utan fast ordning.

**Källa**
- *Inlärd:* Beräknad från verklig användningsdata — hög tillförlitlighet.
- *Härledd:* Logiskt härledd från Skills struktur, ännu inte bekräftad av användningsdata.

**Status**
- *Kandidat:* Nyligen identifierad, väntar på ditt beslut.
- *Aktiv:* Godkänd — påverkar Klacksy aktivt.
- *Utrangerad:* Förkastad — ignoreras.

**Konfidensen** (0–100 %) visar hur säker Klacksy är på en relation. Den ökar med varje session som bekräftar mönstret (**bekräftelser**) och sjunker vid sessioner som talar emot det (**motsägelser**).

## Bra att veta

- Godkänn en relation om den är innehållsmässigt rimlig — båda Skills hör verkligen ihop och mönstret motsvarar ditt önskade arbetsflöde.
- Förkasta relationer som uppstått av en slump eller som inte hör ihop i ditt sammanhang (t.ex. på grund av testsessioner).
- Tumregel: Det är vanligtvis bara *inlärda* relationer med hög konfidens som är värda att godkänna. Härledda kandidater med lite stöd bör du hellre förkasta tills mer användningsdata finns tillgänglig.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
