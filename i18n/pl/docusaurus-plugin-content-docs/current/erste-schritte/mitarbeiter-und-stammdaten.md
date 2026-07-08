---
sidebar_position: 3
---

Zarządzanie adresami i osobami to serce Twoich danych podstawowych: pracownicy, klienci oraz osoby zewnętrzne z adresami, danymi kontaktowymi, umowami, przynależnością do grup i kwalifikacjami — dostępne przez ikonę osób w nawigacji.

## Jak to działa

**Dodawanie pracownika:** Polami obowiązkowymi są imię, nazwisko i płeć (kobieta/mężczyzna/interpłciowość/osoba prawna). Opcjonalnie wprowadzasz datę urodzenia, e-mail, telefon, adres (ulica, kod pocztowy, miejscowość, kanton, kraj) oraz grupę/dział. Alternatywnie dodanie możesz zlecić asystentowi Klacksy („utwórz pracownika …").

**Status:** Status wynika automatycznie z daty rozpoczęcia i zakończenia członkostwa — nie ma ręcznego pola statusu. Rozróżnia się *Aktywnych* (członkostwo trwa obecnie), *Byłych* (data zakończenia leży w przeszłości) i *Przyszłych* (data rozpoczęcia jeszcze nie nastąpiła).

**Grupy i działy:** Pracownikom można przypisywać grupy. Struktura jest hierarchiczna (np. `Klacks AG > IT > Rozwój`), dozwolone jest przypisanie wielokrotne, a uprawnienia można sterować na poziomie grupy.

**Umowy:** Każda osoba może mieć kilka umów, na przykład przy zmianie wymiaru etatu. Same szablony umów są dowolnie definiowalne: w sekcji Ustawienia > Umowy tworzysz własne umowy z nazwą, wymiarem etatu, godzinami docelowymi/maksymalnymi/minimalnymi, dodatkami (nocny, niedzielny i świąteczny) oraz interwałem wypłat; każdej umowie można dodatkowo przypisać własny kalendarz świąt, dzięki czemu można odwzorować np. różne święta kantonalne. Każda umowa obowiązuje przez określony czas lub bezterminowo.

**Import:** Import danych podstawowych z pliku CSV nie istnieje. Istniejące katalogi przejmujesz automatycznie przez synchronizację LDAP/Active Directory za pośrednictwem dostawcy tożsamości (Identity Provider); pojedyncze osoby dodajesz ręcznie lub za pomocą Klacksy.

**Wyszukiwanie i filtrowanie:** Wyszukiwanie pełnotekstowe znajduje osoby po nazwisku, imieniu, firmie lub numerze personalnym, a także po numerze telefonu/kodzie pocztowym; dodatkowo możesz filtrować po kantonie, statusie (Aktywni/Byli/Przyszli) i grupie.

## Warto wiedzieć

- Tylko *Aktywni* są planowalni — sprawdź datę rozpoczęcia/zakończenia członkostwa, jeśli ktoś nie pojawia się w grafiku.
- Kilka umów na osobę to normalna sytuacja, na przykład przy zmianie wymiaru etatu — nie musisz z tego powodu tworzyć drugiej osoby. Nowe szablony umów (wymiar etatu, dodatki, kalendarz) tworzysz samodzielnie w sekcji Ustawienia > Umowy.
- Najpierw utwórz strukturę grup, a dopiero potem przypisz do niej osoby — dzięki temu uprawnienia na poziomie grupy działają od samego początku.

---
*Wypróbuj od razu: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są resetowane codziennie.*
