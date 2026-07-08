---
sidebar_position: 7
---

# Makron

Tillägg för natt-, söndags- och helgdagsarbete eller den exakta timberäkningen vid semester och militärtjänst kan inte täckas av en fast formel för varje verksamhet. Under Inställningar > Makron skriver du därför egna små skript i ett BASIC-liknande språk.

## Så fungerar det

**Vad makron används till:** Ett makro beräknar utifrån data för ett arbetspass (Work) eller en anställning ett enda returvärde — vanligtvis ett tillägg i timmar eller franc. Resultatet sparas i `Work.Surcharges` och flödar automatiskt in i timredovisningen (ClientPeriodHours). Varje makro tillhör en typ — skift/anställning eller arbetsregler — och kan namnges, redigeras och tas bort som vilken annan inställning som helst.

**Tillgänglig data:** Via `IMPORT` finns i skriptet bl.a. `hour` (arbetstimmar), `fromhour`/`untilhour` (start-/sluttid som decimaltimmar), `weekday` (ISO-8601: 1 = måndag … 7 = söndag), `holiday`/`holidaynextday` (om aktuell resp. följande dag är en helgdag) samt de i avtalet lagrade tilläggssatserna `nightrate`, `holidayrate`, `sarate` (lördag) och `sorate` (söndag).

**Språkomfattning:** Skriptspråket har kontrollstrukturer (`IF…THEN…ELSEIF…ELSE…ENDIF`, `SELECT CASE`, `FOR…NEXT`, `DO…LOOP`), egna funktioner (`FUNCTION`) och procedurer (`SUB`, måste vara definierade innan de anropas första gången) samt inbyggda sträng-, matematik-, trigonometri- och tidsfunktioner (t.ex. `TimeToHours`, `TimeOverlap` för tidsintervall över midnatt). Resultatet returneras via `OUTPUT typ, värde`.

**Testa i editorn:** Makro-editorn har en egen Testa-flik: du fyller i exempelvärden för de importerade variablerna, kontrollerar syntaxen och kör skriptet på prov. `DEBUGPRINT`/`DEBUGCLEAR` skriver ut ytterligare värden i testfönstret utan att påverka det egentliga returvärdet.

**Säkerhet:** Interpretatorn körs i en sandlåda utan åtkomst till filsystem eller nätverk — ett makro kan göra beräkningen fel, men kan inte orsaka någon skada utanför själva beräkningen.

## Bra att veta

- `DIM` deklarerar en variabel men initierar den inte samtidigt — `DIM x = 10` är ett syntaxfel, först `DIM x` och sedan separat `x = 10`.
- Nyckelord som `ENDIF`, `ENDFUNCTION` och `ENDSUB` skrivs ihop, inte med mellanslag.
- `weekday` följer genomgående ISO-8601 (1 = måndag … 7 = söndag) — vid egna `SELECT CASE`-frågor för "helg" är det värdena 6 (lördag) och 7 (söndag).

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
