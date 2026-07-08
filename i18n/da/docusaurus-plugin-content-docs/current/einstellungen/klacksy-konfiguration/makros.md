---
sidebar_position: 7
---

# Makroer

Tillæg for natte-, søndags- og helligdagsarbejde eller den nøjagtige timeberegning ved ferie og militærtjeneste kan ikke dækkes med en fast formel for hver virksomhed. Under Indstillinger > Makroer skriver du derfor dine egne små scripts i et BASIC-lignende sprog.

## Sådan fungerer det

**Hvad makroer bruges til:** En makro beregner ud fra dataene for en vagt (Work) eller en beskæftigelse en enkelt returværdi — typisk et tillæg i timer eller kroner. Resultatet gemmes i `Work.Surcharges` og indgår automatisk i timeopgørelsen (ClientPeriodHours). Hver makro hører til en type — vagt/beskæftigelse eller arbejdsregler — og kan navngives, redigeres og slettes som enhver anden indstilling.

**Tilgængelige data:** Via `IMPORT` er bl.a. `hour` (arbejdstimer), `fromhour`/`untilhour` (start-/sluttidspunkt som decimaltimer), `weekday` (ISO 8601: 1 = mandag … 7 = søndag), `holiday`/`holidaynextday` (om nuværende hhv. følgende dag er en helligdag) samt de i kontrakten fastlagte tillægssatser `nightrate`, `holidayrate`, `sarate` (lørdag) og `sorate` (søndag) tilgængelige i scriptet.

**Sprogomfang:** Scriptsproget kender kontrolstrukturer (`IF…THEN…ELSEIF…ELSE…ENDIF`, `SELECT CASE`, `FOR…NEXT`, `DO…LOOP`), egne funktioner (`FUNCTION`) og procedurer (`SUB`, skal defineres før deres første kald) samt indbyggede streng-, matematik-, trigonometri- og tidsfunktioner (f.eks. `TimeToHours`, `TimeOverlap` for perioder over midnat). Resultatet returneres via `OUTPUT typ, værdi`.

**Test i editoren:** Makro-editoren har sin egen test-fane: du indtaster eksempelværdier for de importerede variabler, tjekker syntaksen og afvikler scriptet testvist. `DEBUGPRINT`/`DEBUGCLEAR` udskriver ekstra værdier i testvinduet uden at påvirke den egentlige returværdi.

**Sikkerhed:** Fortolkeren kører i en sandbox uden adgang til filsystem eller netværk — en makro kan lave fejl i beregningen, men kan ikke forårsage skade uden for beregningen.

## Godt at vide

- `DIM` deklarerer en variabel, men initialiserer den ikke samtidig — `DIM x = 10` er en syntaksfejl, først `DIM x` og derefter separat `x = 10`.
- Nøgleord som `ENDIF`, `ENDFUNCTION` og `ENDSUB` skrives sammen, ikke med mellemrum.
- `weekday` følger gennemgående ISO 8601 (1 = mandag … 7 = søndag) — ved egne `SELECT CASE`-forespørgsler for "weekend" er det værdierne 6 (lørdag) og 7 (søndag).

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
