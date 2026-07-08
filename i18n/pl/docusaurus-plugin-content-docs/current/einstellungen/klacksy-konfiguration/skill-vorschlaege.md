---
sidebar_position: 6
---

# Propozycje umiejętności Klacksy

Klacksy uczy się na własnych błędach: jeśli w czacie skorygują Państwo, że Klacksy wybrał niewłaściwą umiejętność, system zapamiętuje tę korektę. W Ustawienia > Propozycje umiejętności Klacksy administratorzy widzą, jakie usprawnienia opisów umiejętności są na tej podstawie proponowane, i decydują o ich wdrożeniu.

## Jak to działa

**Skąd biorą się propozycje:** Jeśli Klacksy wybierze w czacie niewłaściwą umiejętność (skill) dla danego zapytania, a użytkownik to skoryguje, ta sekwencja czatu zostaje oznaczona jako „skorygowana". Wewnętrzny optymalizator analizuje takie skorygowane sekwencje i wyprowadza z nich konkretne zmiany tekstu w opisach umiejętności — celem jest, aby Klacksy następnym razem poprawnie przypisał daną umiejętność.

**Generowanie propozycji:** Przycisk „Generuj propozycje" uruchamia analizę ostatnich 30 skorygowanych sekwencji czatu i tworzy z nich nowe propozycje, jeśli da się znaleźć powtarzające się wzorce.

**Karta propozycji pokazuje:** dotyczącą umiejętność i zmienione pole, zmianę w porównaniu przed/po, uzasadnienie, dlaczego zmiana ma sens, a także — w formie rozwijanej — dokładne zapytania użytkowników, które wywołały tę propozycję.

**Decydowanie:** Każda otwarta propozycja jest osobno **przyjmowana** (opis umiejętności jest natychmiast zmieniany) lub **odrzucana** (propozycja zostaje odrzucona bez wprowadzania zmian). Nie ma automatycznego wdrażania — zawsze decyduje o tym człowiek.

## Warto wiedzieć

- Bez korekt w czacie nie powstają żadne propozycje — system potrzebuje rzeczywistych korekt błędów jako podstawy do nauki, a nie tylko samego użytkowania.
- Ta funkcja zmienia jedynie teksty opisów umiejętności, aby Klacksy wybierał je poprawnie — nie zmienia tego, co dana umiejętność faktycznie robi.
- Ta funkcja wymaga uprawnień administratora.

---
*Wypróbuj bezpośrednio: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są resetowane codziennie.*
