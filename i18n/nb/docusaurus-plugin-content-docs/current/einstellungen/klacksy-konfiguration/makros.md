---
sidebar_position: 7
---

# Makroer

Tillegg for natt-, søndags- og helligdagsarbeid eller den nøyaktige timeberegningen ved ferie og militærtjeneste kan ikke dekkes med en fast formel for hver virksomhet. Under Innstillinger > Makroer skriver du derfor dine egne små skript i et BASIC-lignende språk.

## Slik fungerer det

**Hva makroer brukes til:** En makro beregner en enkelt returverdi ut fra dataene til en vakt (Work) eller et ansettelsesforhold — typisk et tillegg i timer eller kroner. Resultatet lagres i `Work.Surcharges` og inngår automatisk i timeberegningen (ClientPeriodHours). Hver makro tilhører en type — skift/ansettelse eller arbeidsregler — og kan navngis, redigeres og slettes som enhver annen innstilling.

**Tilgjengelige data:** Via `IMPORT` er blant annet `hour` (arbeidstimer), `fromhour`/`untilhour` (start-/sluttid som desimaltimer), `weekday` (ISO-8601: 1 = mandag … 7 = søndag), `holiday`/`holidaynextday` (om inneværende hhv. neste dag er en helligdag) samt de i kontrakten lagrede tilleggssatsene `nightrate`, `holidayrate`, `sarate` (lørdag) og `sorate` (søndag) tilgjengelig i skriptet.

**Språkomfang:** Skriptspråket har kontrollstrukturer (`IF…THEN…ELSEIF…ELSE…ENDIF`, `SELECT CASE`, `FOR…NEXT`, `DO…LOOP`), egne funksjoner (`FUNCTION`) og prosedyrer (`SUB`, må være definert før første kall), samt innebygde streng-, matematikk-, trigonometri- og tidsfunksjoner (f.eks. `TimeToHours`, `TimeOverlap` for tidsrom over midnatt). Resultatet returneres via `OUTPUT typ, verdi`.

**Testing i editoren:** Makro-editoren har en egen Test-fane: du fyller inn eksempelverdier for de importerte variablene, sjekker syntaksen og kjører skriptet testvis. `DEBUGPRINT`/`DEBUGCLEAR` skriver ut ekstra verdier i testvinduet uten å påvirke selve returverdien.

**Sikkerhet:** Tolkeren kjører i en sandkasse uten tilgang til filsystem eller nettverk — en makro kan gjøre beregningen feil, men kan ikke forårsake skade utenfor selve beregningen.

## Greit å vite

- `DIM` deklarerer en variabel, men initialiserer den ikke samtidig — `DIM x = 10` er en syntaksfeil, først `DIM x` og deretter separat `x = 10`.
- Nøkkelord som `ENDIF`, `ENDFUNCTION` og `ENDSUB` skrives i ett ord, ikke med mellomrom.
- `weekday` følger gjennomgående ISO-8601 (1 = mandag … 7 = søndag) — i egne `SELECT CASE`-spørringer for "helg" er dette verdiene 6 (lørdag) og 7 (søndag).

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
