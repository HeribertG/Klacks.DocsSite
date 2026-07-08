---
sidebar_position: 3
---

# Przechowywanie danych

W sekcji Ustawienia > Przechowywanie danych ustalają Państwo, jak długo usunięte rekordy — pracownicy, adresy, grupy, dyżury, czasy pracy, nieobecności, przerwy i inne — pozostają w systemie, zanim zostaną nieodwracalnie usunięte.

## Jak to działa

**Dwuetapowe usuwanie:** Gdy usuwają Państwo rekord w Klacks, jest on najpierw jedynie oznaczany jako usunięty (soft-delete) — oznaczony jako usunięty, ale fizycznie wciąż obecny. Dopiero po upływie skonfigurowanego tu okresu, codziennie uruchamiana usługa w tle usuwa oznaczone jako usunięte wiersze **fizycznie i nieodwracalnie** z bazy danych — obejmuje to wszystkie dotknięte tabele, nie tylko pojedynczy obszar.

**Ustawianie okresu przechowywania:** Pole wprowadzania akceptuje wartości od 30 do 36 500 dni (od około 1 miesiąca do 100 lat); obok Klacks dodatkowo pokazuje ten okres w latach/miesiącach. Wartość domyślna to 3650 dni (10 lat).

## Warto wiedzieć

- Skrócenie okresu wpływa również na już istniejące, dawno usunięte rekordy: wszystko, co jest starsze niż nowy okres, zostanie usunięte przy kolejnym uruchomieniu usługi w tle — przed skróceniem należy sprawdzić, czy to zamierzone.
- Fizyczne usunięcie jest ostateczne — potem nie ma już możliwości przywrócenia danych, nawet przez wsparcie techniczne.
- To ustawienie jest technicznym fundamentem terminów usuwania opisanych w polityce prywatności; obowiązuje globalnie dla wszystkich typów danych obsługujących soft-delete i nie jest konfigurowalne osobno dla poszczególnych modułów.

---
*Wypróbuj bezpośrednio: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są codziennie resetowane.*
