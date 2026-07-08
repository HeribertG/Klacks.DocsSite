---
sidebar_position: 1
---

Under Inställningar > Planeringsregler (Standardvärden) anger du de värden som automatiskt förifylls när du skapar ett nytt avtal respektive en ny planeringsregel.

## Så fungerar det

Sidan samlar flera grupper av förifyllningar:

- **Arbetstimmar:** Dagliga arbetstimmar (soll-tid), övertidsgräns (tim./vecka), garanterade, minimala och maximala månadstimmar samt heltids-timantalet.
- **Gränsvärden för planeringsregler:** Max. arbetsdagar, min. vilodagar mellan två arbetsblock, min. fritimmar mellan två arbetsdagar, max. optimal lucka mellan skift, max. dags-/veckotimmar och max. antal sammanhängande arbetsdagar — samma storheter som även en enskild planeringsregel definierar.
- **Tillägg:** Natt-, helgdags-, lördags- och söndagstillägg i procent.
- **Standardarbetsdagar och helg:** Vilka veckodagar som räknas som arbetsdagar, om skiftarbete (tidig-/sen-/nattarbetspass) bedrivs, vilka dagar som räknas som helg och på vilken veckodag veckan börjar.
- **Planeringskommandon (nyckelord):** Textkommandona `FREE`, `EARLY`, `LATE`, `NIGHT` samt deras negerade motsvarigheter `-FREE`, `-EARLY`, `-LATE`, `-NIGHT` kan konfigureras här. Skriver en person dessa ord direkt i en dagcell i schemat känner Klacks inte igen det som en anteckning, utan som en önskan: `FREE` betyder "planera helst inte in denna dag", `EARLY`/`LATE`/`NIGHT` föredrar eller tvingar fram en viss typ av arbetspass, de negerade varianterna utesluter motsatsen. Både auto-planeringen och Harmonizer tar hänsyn till dessa önskemål som en förutsättning.

## Bra att veta

- Den här sidan hanterar **globala standardvärden** — ändringar påverkar endast **nya** avtal respektive planeringsregler, inte retroaktivt befintliga.
- Gränsvärdena för planeringsregler här är identiska med dem du annars ställer in individuellt per avtal — här anger du bara det startvärde som ett nytt avtal får.
- Planeringskommandona är som standard dolda i schemat och kan visas via en egen symbol i verktygsfältet.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
