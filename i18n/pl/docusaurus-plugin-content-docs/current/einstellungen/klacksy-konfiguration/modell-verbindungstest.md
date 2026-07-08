---
sidebar_position: 5
---

# Test połączenia z modelem

Nie każdy model językowy nadaje się dla Klacksy — musi on niezawodnie zwracać ustrukturyzowane wywołania funkcji zamiast odpowiadać prozą. W Ustawienia > Sprawdzenie modelu Klacksy Klacks testuje to automatycznie dla wszystkich skonfigurowanych modeli.

## Jak to działa

**Test:** Kliknięcie „Znajdź najlepsze modele" wysyła do każdego skonfigurowanego modelu (również nieaktywnych) to samo niewielkie zadanie testowe: „Utwórz nowego pracownika o imieniu i nazwisku Anna Müller." Model musi odpowiedzieć na to odpowiednim, ustrukturyzowanym wywołaniem funkcji z poprawnymi parametrami nazwy — a nie odpowiedzią tekstową. Dodatkowo okno kontekstu musi wynosić co najmniej 32 000 tokenów, aby zmieścił się w nim prompt systemowy i możliwości Klacksy. Każdy test ma limit czasu wynoszący 30 sekund.

**Wynik:** Modele, które spełniają oba kryteria, uznawane są za „odpowiednie" i są automatycznie aktywowane; nieodpowiednie modele są dezaktywowane. Lista wyników jest posortowana według przydatności, następnie według zdolności do wywoływania funkcji, kosztu, opóźnienia i okna kontekstu.

**Ustawianie modelu domyślnego:** Przez „Ustaw jako domyślny" wybierają Państwo bezpośrednio z listy wyników, którego modelu Klacksy będzie odtąd używał domyślnie. Bez własnego wyboru Klacks automatycznie ustawia jako domyślny najbardziej odpowiedni model.

## Warto wiedzieć

- Test sprawdza wszystkie zapisane modele, nie tylko aktywne — dzięki temu dotychczas nieaktywne modele mogą zostać aktywowane, jeśli przejdą test.
- Zaliczony test nie jest zabezpieczeniem kosztowym: drogie, ale odpowiednie modele również zostają aktywowane. Koszt za 1000 tokenów jest widoczny na liście wyników.
- Ten test jest specjalnie zaprojektowany pod kątem wywołań funkcji potrzebnych do zdolności działania i jest niezależny od sprawdzenia modelu w ustawieniach mowy, które dopuszcza mniejsze okno kontekstu wystarczające jedynie do czyszczenia transkrypcji.

---
*Wypróbuj bezpośrednio: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są resetowane codziennie.*
