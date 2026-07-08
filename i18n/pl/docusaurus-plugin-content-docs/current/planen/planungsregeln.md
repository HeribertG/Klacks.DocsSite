---
sidebar_position: 5
---

Reguły planowania definiują warunki ramowe dla automatycznego planowania dyżurów — czasy pracy, czasy odpoczynku i pojemności, których Klacks przestrzega przy rozdzielaniu dyżurów.

## Jak to działa

Reguła planowania jest przypisana do **umowy**. Zdefiniowane wartości graniczne obowiązują tym samym wszystkich pracowników objętych daną umową. Każda reguła obejmuje cztery obszary:

**Dni robocze i czasy odpoczynku**
- Maks. dni robocze: reguła miękka określająca preferowaną długość bloku przed zaplanowaniem dnia odpoczynku (np. „5 dni pracy, potem odpoczynek") — naruszenie nie unieważnia planu, czyni go jedynie mniej optymalnym
- Min. dni odpoczynku między dwoma blokami pracy
- Min. godzin wolnych między dwoma dniami roboczymi (czas odpoczynku od zakończenia jednego dnia roboczego do rozpoczęcia następnego)
- Maks. optymalna przerwa między zmianami w godzinach
- Maks. liczba kolejnych dni roboczych bez dnia odpoczynku

**Limity godzin**
- Maks. godzin dziennie i maks. godzin tygodniowo
- Dzienne godziny pracy (czas docelowy)
- Próg nadgodzin: od tej liczby godzin tygodniowo godziny liczone są jako nadgodziny

**Godziny miesięczne**
- Gwarantowane godziny (minimalna liczba zapewniana pracownikowi w danym miesiącu)
- Minimalna i maksymalna liczba godzin miesięcznie
- Godziny pełnego etatu (miesięczna liczba godzin odpowiadająca zatrudnieniu w pełnym wymiarze czasu pracy)

**Urlop**
- Dni urlopu w roku kalendarzowym

## Warto wiedzieć

- Przy tworzeniu nowej reguły automatycznie przejmowane są **wartości domyślne z ustawień** (Reguły planowania — wartości domyślne); każdą wartość możesz następnie dostosować indywidualnie.
- Reguły planowania działają poprzez umowę — nie trzeba ich utrzymywać osobno dla każdej osoby. Gdy reguła się zmienia, dotyczy to wszystkich pracowników objętych tą umową.
- Próg nadgodzin i czas docelowy to dwie różne rzeczy: czas docelowy to standard dzienny, a próg nadgodzin to wartość progowa tygodniowa.
- „Maks. dni robocze" (miękka preferencja co do długości bloku) i „Maks. kolejnych dni roboczych" (twarda, nieprzekraczalna górna granica) to dwie różne reguły — nie należy ich mylić.

---
*Wypróbuj od razu: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są resetowane codziennie.*
