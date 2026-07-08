---
sidebar_position: 5
---

W obszarze Ustawienia > Widoczność grup dla poszczególnych użytkowników określasz, które grupy — a tym samym które powiązane dane — może zobaczyć dany użytkownik.

## Jak to działa

Lista pokazuje wszystkich użytkowników z nazwami oraz liczbą przypisanych im (widocznych) grup głównych. Kliknięcie liczby otwiera formularz z listą pól wyboru wszystkich grup głównych; tutaj zaznaczasz, które grupy dany użytkownik może zobaczyć. Jeśli grupa główna zostanie udostępniona, automatycznie obejmuje to również wszystkie jej podgrupy.

Administratorzy są wyłączeni z tego ograniczenia: w ich przypadku przycisk jest wyłączony, a wyświetlana liczba zawsze odpowiada łącznej liczbie wszystkich grup głównych — administratorzy zasadniczo widzą wszystko.

## Warto wiedzieć

- U zwykłego (nieadministracyjnego) użytkownika bez żadnego przypisania „0 przypisanych grup" oznacza: ten użytkownik w obszarach ograniczonych do grup (np. pulpit, lista klientów) obecnie **nic** nie widzi — nie jest to błąd działania, lecz bezpośrednia konsekwencja braku przypisania.
- Wyjątek: jeśli w systemie obecnie **w ogóle nie ma** żadnych grup, wszyscy użytkownicy widzą wszystko — instalacje bez struktury grup nie wymagają więc utrzymywania tego ustawienia.
- Najpierw utwórz strukturę grup w danych podstawowych, zanim dokonasz tutaj przypisań — bez istniejących grup nie ma tu nic do zaznaczenia.
- To ustawienie kontroluje **widoczność** danych, a nie podstawowe **uprawnienia** roli — role/uprawnienia są zarządzane niezależnie od tego.

---
*Wypróbuj bezpośrednio: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są codziennie resetowane.*
