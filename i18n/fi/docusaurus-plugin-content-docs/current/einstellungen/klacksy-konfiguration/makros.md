---
sidebar_position: 7
---

# Makrot

Yö-, sunnuntai- ja pyhäpäivälisät tai loma- ja asepalvelustuntien tarkka laskenta eivät sovi kiinteään kaavaan jokaiselle yritykselle. Kohdassa Asetukset > Makrot voit kirjoittaa niitä varten omia pieniä skriptejä BASIC-tyyppisellä kielellä.

## Näin se toimii

**Mihin makroja käytetään:** Makro laskee palvelun (Work) tai työsuhteen tiedoista yhden palautusarvon — tyypillisesti lisän tunteina tai frangeina. Tulos tallennetaan kohtaan `Work.Surcharges` ja se siirtyy automaattisesti tuntilaskentaan (ClientPeriodHours). Jokainen makro kuuluu tiettyyn tyyppiin — vuoro/työsuhde tai työsäännöt — ja se voidaan nimetä, muokata ja poistaa kuten mikä tahansa muu asetus.

**Käytettävissä olevat tiedot:** `IMPORT`-komennon kautta skriptissä ovat käytettävissä muun muassa `hour` (työtunnit), `fromhour`/`untilhour` (alkamis-/päättymisaika desimaalitunteina), `weekday` (ISO-8601: 1 = maanantai … 7 = sunnuntai), `holiday`/`holidaynextday` (onko kuluva tai seuraava päivä pyhäpäivä) sekä sopimuksessa määritetyt lisäprosentit `nightrate`, `holidayrate`, `sarate` (lauantai) ja `sorate` (sunnuntai).

**Kielen laajuus:** Skriptikieli tuntee kontrollirakenteet (`IF…THEN…ELSEIF…ELSE…ENDIF`, `SELECT CASE`, `FOR…NEXT`, `DO…LOOP`), omat funktiot (`FUNCTION`) ja proseduurit (`SUB`, jotka on määriteltävä ennen ensimmäistä kutsuaan) sekä sisäänrakennetut merkkijono-, matematiikka-, trigonometria- ja aikafunktiot (esim. `TimeToHours`, `TimeOverlap` keskiyön ylittäville ajanjaksoille). Tulos palautetaan komennolla `OUTPUT tyyppi, arvo`.

**Testaaminen editorissa:** Makroeditorissa on oma Testaa-välilehti: syötät esimerkkiarvot tuoduille muuttujille, tarkistat syntaksin ja suoritat skriptin testimielessä. `DEBUGPRINT`/`DEBUGCLEAR` tulostavat lisäarvoja testi-ikkunaan vaikuttamatta varsinaiseen palautusarvoon.

**Turvallisuus:** Tulkki toimii hiekkalaatikossa ilman pääsyä tiedostojärjestelmään tai verkkoon — makro voi laskea väärin, mutta ei voi aiheuttaa vahinkoa laskennan ulkopuolella.

## Hyvä tietää

- `DIM` julistaa muuttujan, mutta ei alusta sitä samalla — `DIM x = 10` on syntaksivirhe, ensin `DIM x` ja sitten erikseen `x = 10`.
- Avainsanat kuten `ENDIF`, `ENDFUNCTION` ja `ENDSUB` kirjoitetaan yhteen, ei välilyönnillä.
- `weekday` noudattaa läpi ISO-8601-standardia (1 = maanantai … 7 = sunnuntai) — omissa "viikonloppu"-tarkoitukseen tehdyissä `SELECT CASE`-kyselyissä nämä ovat arvot 6 (lauantai) ja 7 (sunnuntai).

---
*Kokeile heti: [Klacks Playground](https://klacks-software.ch:7643) — kirjaudu `admin@test.com` / `P@ssw0rt1`, tiedot nollataan päivittäin.*
