---
sidebar_position: 7
---

# Nadgodziny

W Ustawienia > Compliance i reguły dodatków (tryb eksperta) > Nadgodziny ustalasz, od ilu zsumowanych godzin praca w nadgodzinach staje się objęta dodatkiem i jak wysoki jest dodatek na każdym progu.

## Jak to działa

**Podstawa obliczeniowa:** dziennie lub tygodniowo — nic więcej nie ma. Podstawa miesięczna lub roczna nie jest przewidziana. Przy „Tygodniowo" tydzień zaczyna się od skonfigurowanego pierwszego dnia tygodnia.

**Do trzech progów:** każdy próg składa się z dwóch pól — „Próg X od godzin" (liczba zsumowanych godzin w dniu lub w tygodniu, od której ten próg zaczyna obowiązywać) oraz „Próg X dodatek" w procentach. Najwyższy skonfigurowany próg jest zawsze otwarty ku górze.

**Każdy próg liczy tylko godziny w obrębie swojego własnego przedziału**, a nie wszystkie godziny od zera. Jeśli próg 1 zaczyna się od 8 godzin, a próg 2 od 10 godzin, to za dzień trwający dziesięć i pół godziny naliczana jest stawka progu 1 za dwie godziny między 8 a 10 oraz stawka progu 2 tylko za dodatkowe pół godziny powyżej — nigdy stawka progu 2 za wszystkie dziesięć i pół godziny. Pojedynczy blok pracy może w ten sposób wygenerować kilka pozycji dodatku, po jednej za każdy osiągnięty próg.

**Niekompletny próg jest po cichu pomijany:** jeśli brakuje wartości godzin lub dodatek wynosi zero albo jest ujemny, ten próg się nie liczy. Może więc faktycznie obowiązywać od zera do trzech progów.

**Dodatek to narzut, a nie kwota całkowita:** 25% oznacza ćwierć godziny dodatkowo za każdą przepracowaną w tym progu godzinę — a nie, że godzina jest płacona ze współczynnikiem 1,25. Znajdujący się obok tryb dodatku (mnożnik lub kwota stała za godzinę) określa jedynie jednostkę; rachunek za tym stojący pozostaje ten sam.

**Co liczy się jako już przepracowane godziny:** progi wypełniane są na podstawie godzin przepracowanych wcześniej tego samego dnia lub w tym samym tygodniu — posortowanych najpierw według daty, potem według czasu rozpoczęcia. Dzięki temu każdy blok pracy zajmuje własną pozycję w przedziale, a żadna godzina nie jest podwójnie przypisywana do wyższego progu. Gdy zmieni się wcześniejszy wpis, późniejsze są przeliczane na nowo.

**Skąd pochodzą wartości:** ta karta dostarcza wartości obowiązujące w całej firmie — obowiązują one tylko wtedy, gdy nie ma pierwszeństwa żadne inne źródło. Jeśli do umowy danej osoby przypisana jest [reguła planowania](../../planen/planungsregeln.md) z własnymi progami nadgodzin, ma ona pierwszeństwo; obowiązująca dla danej daty późniejsza wersja tej reguły w razie potrzeby zastępuje cały zestaw, ale bez własnego bloku nadgodzin wraca do pokazanych tu ustawień firmowych, a nie do reguły planowania. Jeśli nigdzie nie skonfigurowano żadnego progu, jako ostatni fallback służy wyłącznie **granica nadgodzin** z reguły planowania — i to wyłącznie jako wartość startowa pierwszego progu, nigdy jako stawka dodatku. Źródła nigdy nie są mieszane: kto dostarcza pierwszy próg, dostarcza też wszystkie kolejne.

**Dwa warunki, bez których nie powstaje żaden dodatek:**

- Dyżur potrzebuje makra obliczeniowego. Praca na dyżurze bez makra nigdy nie jest sprawdzana pod kątem nadgodzin.
- Musi być skonfigurowany co najmniej jeden kompletny próg. Bez takiego progu wynikiem nie jest „zero nadgodzin", lecz w ogóle nie odbywa się żadna kontrola.

**Wyjątki:** korekty i zastępstwa nigdy nie są sprawdzane pod kątem nadgodzin — wliczana jest tylko regularna praca.

**Zbieg z innymi dodatkami:** ta sama godzina może jednocześnie kwalifikować się do nadgodzin i do dodatku związanego z okolicznościami, na przykład za pracę nocną lub weekendową. Czy oba są sumowane, czy obowiązuje tylko wyższy, decyduje nie ta karta, lecz makro obliczeniowe danego dyżuru.

**Zapisywanie:** karta znajduje się w sekcji Compliance i reguły dodatków strony ustawień (razem z odpoczynkiem zastępczym, trybem dodatku i egzekwowaniem zgodności), widoczna tylko w trybie eksperta. Zmiany są zbierane i zapisywane lub odrzucane przez wspólny pasek zapisu strony ustawień — na tej karcie nie ma osobnego przycisku zapisu.

## Warto wiedzieć

- Ta karta obejmuje wyłącznie automatyczną progresję nadgodzin według progu dziennego lub tygodniowego. Dodatki za pracę nocną, niedzielną lub świąteczną są natomiast obliczane generycznie za pomocą skryptu — zobacz [Makra](../klacksy-konfiguration/makros.md).
- Próg bez wartości „od godzin" lub z dodatkiem wynoszącym 0% lub mniej jest ignorowany — dzięki temu można dezaktywować poszczególne progi bez ich usuwania.
- Bez co najmniej jednego kompletnego progu i bez makra obliczeniowego na dyżurze zasadniczo nie powstają żadne dodatki za nadgodziny, nawet przy bardzo długich dyżurach.
- Reguła planowania z własnymi progami nadgodzin całkowicie nadpisuje te wartości firmowe, a nie tylko poszczególne progi.

---
*Wypróbuj od razu: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są resetowane codziennie.*
