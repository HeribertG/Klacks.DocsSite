---
sidebar_position: 5
---

Planeringsregler definierar ramvillkoren för den automatiska schemaläggningen — arbetstider, vilotider och kapaciteter som Klacks följer när arbetspassen fördelas.

## Så fungerar det

En planeringsregel tilldelas ett **avtal**. De definierade gränsvärdena gäller därmed för alla medarbetare med detta avtal. Varje regel omfattar fyra områden:

**Arbetsdagar och vilotider**
- Max. arbetsdagar: mjuk regel för den föredragna blocklängden innan en vilodag schemaläggs (t.ex. „5 dagars arbete, sedan vila") — ett avsteg gör inte schemat ogiltigt, bara mindre optimalt
- Min. vilodagar mellan två arbetsblock
- Min. lediga timmar mellan två arbetsdagar (vilotid från slutet av en arbetsdag till början av nästa)
- Max. optimalt glapp mellan skift i timmar
- Max. sammanhängande arbetsdagar utan vilodag

**Timgränser**
- Max. timmar per dag och max. timmar per vecka
- Dagliga arbetstimmar (normtid)
- Övertidsgräns: Från detta antal veckotimmar räknas timmar som övertid

**Månatliga timmar**
- Garanterade timmar (minsta antal som garanteras medarbetaren per månad)
- Minsta och högsta antal timmar per månad
- Heltidstimmar (månatligt antal timmar som motsvarar en heltidsanställning)

**Semester**
- Semesterdagar per kalenderår

## Bra att veta

- När en ny regel skapas hämtas automatiskt **standardvärdena från Inställningar** (Planeringsregler — standardvärden); du kan därefter anpassa varje värde individuellt.
- Planeringsregler verkar via avtalet — du behöver inte underhålla dem per person. Ändras en regel påverkar det alla medarbetare med detta avtal.
- Övertidsgränsen och normtiden är två olika saker: Normtiden är standarden per dag, övertidsgränsen tröskelvärdet per vecka.
- "Max. arbetsdagar" (mjuk preferens för blocklängden) och "Max. sammanhängande arbetsdagar" (hård, aldrig överskridbar övre gräns) är två olika regler — förväxla inte dessa.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
