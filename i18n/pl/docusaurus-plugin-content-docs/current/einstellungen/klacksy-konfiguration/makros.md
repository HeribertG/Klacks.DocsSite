---
sidebar_position: 7
---

# Makra

Dodatki za pracę w nocy, w niedziele i w święta lub dokładne obliczanie godzin przy urlopach i służbie wojskowej nie da się objąć jednym stałym wzorem dla każdej firmy. W Ustawienia > Makra piszą Państwo w tym celu własne, niewielkie skrypty w języku podobnym do BASIC.

## Jak to działa

**Do czego służą makra:** Makro oblicza na podstawie danych dyżuru (Work) lub zatrudnienia jedną wartość zwrotną — zazwyczaj dodatek w godzinach lub we frankach. Wynik zapisywany jest w `Work.Surcharges` i automatycznie trafia do zestawienia godzin (ClientPeriodHours). Każde makro należy do określonego typu — zmiana/zatrudnienie lub reguły pracy — i można je nazwać, edytować oraz usunąć jak każde inne ustawienie.

**Dostępne dane:** Przez `IMPORT` w skrypcie dostępne są między innymi `hour` (godziny pracy), `fromhour`/`untilhour` (godzina rozpoczęcia/zakończenia jako godziny dziesiętne), `weekday` (ISO-8601: 1 = poniedziałek … 7 = niedziela), `holiday`/`holidaynextday` (czy bieżący lub następny dzień jest świętem) oraz zapisane w umowie stawki dodatków `nightrate`, `holidayrate`, `sarate` (sobota) i `sorate` (niedziela).

**Zakres języka:** Język skryptowy zna struktury sterujące (`IF…THEN…ELSEIF…ELSE…ENDIF`, `SELECT CASE`, `FOR…NEXT`, `DO…LOOP`), własne funkcje (`FUNCTION`) i procedury (`SUB`, muszą być zdefiniowane przed pierwszym wywołaniem), a także wbudowane funkcje tekstowe, matematyczne, trygonometryczne i czasowe (np. `TimeToHours`, `TimeOverlap` dla przedziałów czasu przechodzących przez północ). Wynik zwracany jest przez `OUTPUT typ, wartość`.

**Testowanie w edytorze:** Edytor makr ma własną zakładkę testową: wprowadzają Państwo przykładowe wartości dla zaimportowanych zmiennych, sprawdzają składnię i wykonują skrypt próbnie. `DEBUGPRINT`/`DEBUGCLEAR` wypisują dodatkowe wartości w oknie testowym, nie wpływając na właściwą wartość zwrotną.

**Bezpieczeństwo:** Interpreter działa w piaskownicy bez dostępu do systemu plików ani sieci — makro może źle policzyć wynik, ale nie może wyrządzić żadnej szkody poza samym obliczeniem.

## Warto wiedzieć

- `DIM` deklaruje zmienną, ale nie inicjalizuje jej jednocześnie — `DIM x = 10` jest błędem składniowym; najpierw `DIM x`, a dopiero potem osobno `x = 10`.
- Słowa kluczowe takie jak `ENDIF`, `ENDFUNCTION` i `ENDSUB` pisze się łącznie, bez spacji.
- `weekday` konsekwentnie stosuje ISO-8601 (1 = poniedziałek … 7 = niedziela) — przy własnych zapytaniach `SELECT CASE` dla „weekendu" są to wartości 6 (sobota) i 7 (niedziela).

---
*Wypróbuj bezpośrednio: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są resetowane codziennie.*
