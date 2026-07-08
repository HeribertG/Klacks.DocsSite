---
sidebar_position: 6
---

Za pomocą Report Designera tworzysz własne szablony wydruków — od grafiku dyżurów po listę adresową — bezpośrednio w Klacks, bez zewnętrznych narzędzi.

## Jak to działa

Raport składa się z trzech obszarów, które edytujesz na karcie *Designer*:

- **Nagłówek** — drukowany u góry każdej strony. Ma trzy strefy (lewą, środkową, prawą), które mogą zawierać pola bazy danych, dowolny tekst lub obrazy (np. logo firmy, wgrane przez menedżer obrazów).
- **Treść** — zawiera jedną lub więcej tabel danych. Kolumny dodajesz metodą przeciągnij i upuść z listy pól; kolejność również dostosowujesz przez przeciąganie, a szerokość — poprzez pole procentowe dla każdej kolumny.
- **Stopka** — drukowana u dołu każdej strony.

Każda tabela jest połączona ze **źródłem danych**, które wybierasz na karcie *Źródło danych*: grafik (Schedule), adresy jako lista lub szczegóły, nieobecności, zmiany, grupy lub szablon kontenera. Źródło danych określa, które pola są dostępne.

Do dyspozycji przy projektowaniu są:
- **Formatowanie** dla każdej komórki i dowolnego tekstu: czcionka, rozmiar, pogrubienie/kursywa/podkreślenie, kolor tekstu, wyrównanie.
- **Obramowanie komórek** ustawiane osobno dla każdej strony (góra/prawo/dół/lewo), ze stylem i kolorem linii.
- **Stopka tabeli** z polami SUM: kolumny liczbowe są sumowane automatycznie.
- **Wiersze z dowolnym tekstem** przed lub po tabelach danych — np. na uwagi, warunki lub pola podpisu.
- **Ustawienia strony** na karcie *Ogólne*: format pionowy lub poziomy, rozmiar papieru (A4, A3, B4/B5 JIS, Letter) oraz marginesy strony w mm.

## Warto wiedzieć

- **Pola scalone (Merged Fields):** za pomocą paska narzędzi wybranego pola możesz połączyć kilka pól w jednej kolumnie; separator (przecinek, spacja, znak nowej linii, myślnik) jest konfigurowalny.
- Dla źródła danych **Grafik** dostępne są dwie dodatkowe opcje: *Grupuj wpisy dnia* (kilka wpisów tego samego dnia w jednym wierszu) oraz *Pokaż pełny okres* (wszystkie dni, także bez wpisów).
- Stopkę tabeli włączasz za pomocą pola wyboru bezpośrednio pod daną tabelą; etykietę SUM dla pola stopki można pokazać lub ukryć niezależnie.

---
*Wypróbuj od razu: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są resetowane codziennie.*
