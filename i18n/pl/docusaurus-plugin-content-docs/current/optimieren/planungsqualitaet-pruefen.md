---
sidebar_position: 7
---

# Sprawdzanie jakości planu: naruszenia, luki i pominięcia

Po przebiegu asystentów planowania Klacks umieszcza obok wyniku trzy tabele diagnostyczne: gdzie plan natrafia na regułę, gdzie brakuje kwalifikacji i co w ogóle nie zostało zaplanowane.

## Jak to działa

Trzy raporty pojawiają się w oknie dialogowym danego asystenta planowania — nie w siatce planu. Należą do wyniku przebiegu asystenta i są widoczne wyłącznie dla administratorów, ponieważ automatyczne planowanie jako całość wymaga roli administratora. Każdy raport podaje w tytule liczbę swoich wpisów i **w ogóle się nie wyświetla, jeśli niczego nie znalazł** — brakujący kafelek to więc dobra wiadomość.

**Jak dotrzeć do okien dialogowych:** Przycisk z różdżką w grafiku dyżurów w stanie podstawowym uruchamia bezpośrednio przebieg planowania, bez pokazywania okna dialogowego. Kombinacją **Ctrl+Shift+H** administratorzy przełączają przycisk na menu rozwijane z poszczególnymi asystentami planowania (Plan, Fuzzy Harmonizer, Holistic Harmonizer, Background Optimizer, Recovery) — dopiero przez to menu otwierają się okna dialogowe z tabelami diagnostycznymi.

**Luki w kwalifikacjach** pojawiają się razem z wynikiem, czyli *zanim* go przejmiesz. Kolumny: Waga, Zmiana, Data, Wymagana kwalifikacja, Powód — plus kolumna „Pracownik", gdy co najmniej jeden wiersz wskazuje osobę. Jako powód widnieje *Brak*, *Wygasła* lub *Zbyt niski poziom*. Kryją się za tym dwa różne przypadki: albo miejsce na zmianie pozostało puste, ponieważ nikt z dostępnych osób nie posiada wymaganej kwalifikacji — wtedy wiersz nie wskazuje żadnej osoby. Albo osoba pozostała na zmianie, do której nie jest wykwalifikowana — wtedy widnieje jej nazwisko. Jeśli kwalifikacji brakuje tylko w systemie, uzupełnij ją przy danej osobie; [Katalog kwalifikacji](../einstellungen/stammdaten-organisation/qualifikationen.md) opisuje, jak zarządzać kwalifikacjami. W przeciwnym razie zaplanuj kogoś innego lub dostosuj wymaganie zmiany.

**Naruszenia zgodności (compliance)** pojawiają się *po* przejęciu wyniku. Kolumny: Data, Pracownik, Komentarz; komentarz nazywa naruszoną regułę w prostym języku wraz z konkretnymi wartościami. Czerwone wiersze to błędy, żółte — ostrzeżenia i wskazówki. W przypadku obu asystentów harmonizujących raport pokazuje wyłącznie to, co nowy scenariusz wnosi **dodatkowo** względem rzeczywistego planu — a obok tego, ile z tych naruszeń jest prowadzonych w trybie blokującym. Te uniemożliwiają przejęcie scenariusza, dopóki nie zostaną usunięte lub wyraźnie nadpisane przez uprawnioną osobę.

**Pominięte przydziały** występują tylko przy asystencie planowania dyżurów, również po przejęciu — i konsekwentnie na czerwono. Kolumny: Data, Pracownik, Zmiana, Powód. Nie ma tu informacji, co zostało zaplanowane, lecz co Klacks świadomie **nie** zapisał: przydziały, które naruszyłyby regułę prowadzoną w trybie blokującym. Powód pojawia się jako krótka kategoria („zbyt krótki czas odpoczynku", „zbyt wiele kolejnych dni roboczych", „kolizja czasowa" …). W zależności od sytuacji Klacks oferuje poniżej uprawnionym osobom możliwość przejęcia przebiegu mimo to, za pomocą override; wszyscy pozostali otrzymują wskazówkę, by powtórzyć przebieg asystenta z aktywnym override lub poprosić o to uprawnioną osobę. Każdy override jest rejestrowany.

Które reguły są sprawdzane i jak surowo obowiązują, ustalasz na stronie [Reguły planowania](../planen/planungsregeln.md); jak w ogóle powstaje plan, opisuje [Planowanie automatyczne: plan w kilka sekund](../planen/auto-planung.md).

## Warto wiedzieć

- Zablokowany wpis nie odrzuca całego planu: odpadają tylko dotknięte przydziały, pozostałe czyste wpisy tej samej osoby są mimo to zapisywane.
- Przy wadze luk w kwalifikacjach obowiązuje prosta reguła: **Błąd** tylko wtedy, gdy całkowicie brakuje kwalifikacji oznaczonej jako obowiązkowa. Wygasła kwalifikacja, zbyt niski poziom i każde opcjonalne wymaganie pojawiają się jako **Ostrzeżenie**.
- Puste miejsce na zmianie pojawia się w lukach kwalifikacji tylko wtedy, gdy naprawdę nikt z dostępnych osób nie wchodził w grę. Jeśli pozostało puste z innych powodów, jest to zwykły niedobór obłożenia, który nie jest tu zgłaszany.
- Gdy automatyczne planowanie przebiega jako pełny przebieg, Klacks zgłasza wynik tylko jako krótkie powiadomienie wraz z liczbą luk w kwalifikacjach — szczegółowe tabele należą do okien dialogowych poszczególnych asystentów.
- Raporty to czyste widoki: nie da się ich edytować i niczego nie zmieniają. Korekty wykonuje się na stronie [Siatka planu: Twoja interaktywna macierz czasu](../planen/plan-raster.md) lub przez ponowny przebieg.

---
*Wypróbuj od razu: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są resetowane codziennie.*
