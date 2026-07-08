---
sidebar_position: 7
---

# Macro's

Toeslagen voor nacht-, zondags- en feestdagwerk of de exacte urenberekening bij vakantie en militaire dienst zijn niet met één vaste formule voor elk bedrijf te dekken. Onder Instellingen > Macro's schrijft u daarvoor eigen kleine scripts in een BASIC-achtige taal.

## Zo werkt het

**Waarvoor macro's dienen:** Een macro berekent uit de gegevens van een dienst (Work) of een dienstverband één enkele retourwaarde — doorgaans een toeslag in uren of franken. Het resultaat wordt opgeslagen in `Work.Surcharges` en vloeit automatisch door naar de urenevaluatie (ClientPeriodHours). Elke macro behoort tot een type — dienst/dienstverband of arbeidsregels — en kan worden benoemd, bewerkt en verwijderd zoals elke andere instelling.

**Beschikbare gegevens:** Via `IMPORT` zijn in het script onder meer `hour` (arbeidsuren), `fromhour`/`untilhour` (start-/eindtijd als decimale uren), `weekday` (ISO-8601: 1 = maandag … 7 = zondag), `holiday`/`holidaynextday` (huidige respectievelijk volgende dag een feestdag) en de in het contract vastgelegde toeslagpercentages `nightrate`, `holidayrate`, `sarate` (zaterdag) en `sorate` (zondag) beschikbaar.

**Taalomvang:** De scripttaal kent controlestructuren (`IF…THEN…ELSEIF…ELSE…ENDIF`, `SELECT CASE`, `FOR…NEXT`, `DO…LOOP`), eigen functies (`FUNCTION`) en procedures (`SUB`, moeten vóór hun eerste aanroep gedefinieerd zijn) evenals ingebouwde string-, wiskunde-, trigonometrie- en tijdfuncties (bijv. `TimeToHours`, `TimeOverlap` voor tijdsintervallen over middernacht heen). Het resultaat wordt via `OUTPUT typ, waarde` teruggegeven.

**Testen in de editor:** De macro-editor heeft een eigen testtabblad: u voert voorbeeldwaarden in voor de geïmporteerde variabelen, controleert de syntax en voert het script testsgewijs uit. `DEBUGPRINT`/`DEBUGCLEAR` tonen extra waarden in het testvenster, zonder de eigenlijke retourwaarde te beïnvloeden.

**Beveiliging:** De interpreter draait in een sandbox zonder toegang tot bestandssysteem of netwerk — een macro kan de berekening verkeerd doen, maar buiten de berekening geen schade aanrichten.

## Goed om te weten

- `DIM` declareert een variabele, maar initialiseert deze niet tegelijk — `DIM x = 10` is een syntaxfout, eerst `DIM x` en dan afzonderlijk `x = 10`.
- Trefwoorden zoals `ENDIF`, `ENDFUNCTION` en `ENDSUB` worden aan elkaar geschreven, niet met een spatie.
- `weekday` volgt doorgaans ISO-8601 (1 = maandag … 7 = zondag) — bij eigen `SELECT CASE`-controles voor "weekend" zijn dat de waarden 6 (zaterdag) en 7 (zondag).

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks teruggezet.*
