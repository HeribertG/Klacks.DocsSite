---
sidebar_position: 4
---

Kalendarz wieczysty automatycznie oblicza święta na każdy rok — reguły definiujesz raz, a Klacks zna potem święta dla wszystkich nadchodzących lat.

## Jak to działa

Każde święto opisywane jest krótką regułą. Istnieją dwa podstawowe rodzaje:

- **Daty stałe** w formacie `MM/DD`: `01/01` to Nowy Rok, `08/01` szwajcarskie święto narodowe, `12/25` Boże Narodzenie.
- **Daty powiązane z Wielkanocą** w formacie `EASTER+XX` lub `EASTER-XX`: data Wielkanocy jest obliczana automatycznie według formuły Gaussa, a święto określane jest jako odstęp od niej. Przykłady: `EASTER-02` = Wielki Piątek, `EASTER+01` = Poniedziałek Wielkanocny, `EASTER+39` = Wniebowstąpienie, `EASTER+50` = Poniedziałek Zielonych Świątek, `EASTER+60` = Boże Ciało.

Dodatkowo istnieją **daty stałe z przesunięciem dnia tygodnia** (`MM/DD+XX+WW` lub `MM/DD+XX-WW`) dla świąt takich jak „pierwszy czwartek listopada" (`11/01+00+TH`) czy „ostatni poniedziałek maja" (`05/25+00-MO`).

Za pomocą **reguł podrzędnych (SubRules)** przesuwasz automatycznie święto, jeśli wypada w określony dzień tygodnia — np. `SA+2;SU+1`: jeśli dzień wypada w sobotę lub niedzielę, przesuwa się na poniedziałek. Kilka reguł oddziela się znakiem `;`.

Dla każdej reguły podajesz dodatkowo nazwę i opis (wielojęzyczny), kraj oraz kanton/land, a także pola wyboru **Święto ustawowe** i **Płatne**.

## Warto wiedzieć

- Skróty dni tygodnia są w języku angielskim: `SU`, `MO`, `TU`, `WE`, `TH`, `FR`, `SA`.
- Reguły podrzędne służą przede wszystkim do przesuwania świąt wypadających w weekend na najbliższy dzień roboczy.
- Pole wyboru **Płatne** ma znaczenie dla obliczania wynagrodzenia.
- Za pomocą kraju i kantonu/landu sterujesz różnicami regionalnymi — Wielki Piątek obowiązuje np. w Szwajcarii nie we wszystkich kantonach (wyjątki: VS, TI).
- Wstępnie zainstalowane pakiety kalendarzy dla krajów i szwajcarskich kantonów są zabezpieczone przed usunięciem; własne, samodzielnie utworzone zestawy kalendarzy możesz usunąć w dowolnym momencie.

![Reguły świąt w Klacks](/img/app-calendar-de.png)

---
*Wypróbuj od razu: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są resetowane codziennie.*
