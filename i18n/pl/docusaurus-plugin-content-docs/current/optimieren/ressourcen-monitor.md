---
sidebar_position: 3
---

Monitor zasobów pokazuje na pierwszy rzut oka, jak wygląda obłożenie personelu w danej grupie (lub we wszystkich grupach) w wybranym roku — jeden pasek na dzień, a na przestrzeni 365 dni cały przebieg roku.

## Jak to działa

Wizualizacja opiera się na ugruntowanym w planowaniu personelu wykresie «Capacity vs. Workload Chart» (znanym w literaturze zarządzania projektami jako «Resource Histogram»). Elementy:

- **Zielone paski — dyżury:** liczba zaplanowanych dyżurów danego dnia. Każdy dyżur liczy się jako jedno stanowisko pracownika; dyżury kontenerowe liczą się jako 1.
- **Szare paski — nieobecności:** liczba nieobecnych pracowników, ułożona w stos na zielonych paskach. Pełny wpis urlopu lub choroby liczy się jako 1, połowa jako 0,5 — także w weekend.
- **Różowa linia kropkowana — pożądana gotowość do pracy:** ilu pracowników byłoby średnio dostępnych przy zachowaniu pożądanej liczby dni roboczych w tygodniu (domyślnie: 5 dni pracy, 2 dni odpoczynku). To jest cel planowania.
- **Czerwona linia przerywana — maksymalna gotowość do pracy:** fizyczne/prawne maksimum przy maksymalnej dopuszczalnej liczbie kolejnych dni roboczych (domyślnie: 6). Zawsze leży na poziomie różowej linii lub powyżej niej.
- **Niebieska linia — liczba pracowników:** cała załoga z aktywną umową danego dnia (headcount).

**Jak czytać:** gdy górna krawędź zielonych pasków zbliża się do różowej linii, załoga jest wykorzystana optymalnie. Różnica między niebieską linią a górną krawędzią ułożonych w stos pasków to Twoja rezerwa.

Za pomocą przycisków strzałek w prawym górnym rogu zmieniasz rok; poprzez wybór grupy zawężasz widok do lokalizacji lub zespołu.

## Warto wiedzieć

- Wartość doświadczalna: górna krawędź szarych pasków nieobecności nie powinna przekraczać jednej trzeciej luki między dyżurami a całą załogą — w przeciwnym razie zagrożona jest rezerwa operacyjna, a szczyty chorobowe lub urlopowe trudno będzie uzupełnić.
- Wartości są szacunkami i przybliżeniami, a nie dokładnym rozliczeniem — dają jedynie obraz dostępności.
- Dyżury pochodzą z planowania, a nie z realizacji — dzięki temu widoczne są także przyszłe dyżury.
- Przy umowie 24/7 różowa linia jest wygładzana w skali tygodnia (ok. 0,71 na osobę i dzień kalendarzowy); przy umowie pon.–pt. w dni robocze wynosi 1,0, a w weekend 0.

---
*Wypróbuj od razu: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są resetowane codziennie.*
