---
sidebar_position: 3
---

W obszarze Ustawienia > DeepL zapisujesz klucz API DeepL, dzięki któremu Klacks może automatycznie tłumaczyć teksty — obecnie przede wszystkim przychodzące e-maile w skrzynce odbiorczej.

## Jak to działa

**Klucz API:** Jedno pole wprowadzania przyjmuje klucz API DeepL (format `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx` dla bezpłatnego API Free lub bez końcówki `:fx` dla płatnego API Pro). Klacks na podstawie końcówki `:fx` automatycznie rozpoznaje, który z dwóch adresów API DeepL ma zostać użyty — osobne przełączanie między Free i Pro nie jest potrzebne. Konto oraz sam klucz można uzyskać na stronie deepl.com/pro-api.

**Zastosowanie:** W „Skrzynce odbiorczej" każdą wiadomość e-mail można przetłumaczyć za pomocą ikony tłumaczenia na aktualnie ustawiony język interfejsu; oryginał i tłumaczenie można porównać za pomocą przełącznika. Bez zapisanego klucza ta funkcja nie jest dostępna.

## Warto wiedzieć

- To ustawienie jest globalne dla całej instalacji — nie istnieje osobny klucz dla każdego użytkownika.
- Na tej stronie nie ma osobnego przycisku „Test"; to, czy klucz działa, widać przy pierwszej próbie tłumaczenia w skrzynce odbiorczej.
- Jeśli klucz jest nieprawidłowy lub wygasł, Klacks rozpoznaje to na podstawie odpowiedzi DeepL (błąd uwierzytelnienia) i zgłasza to zamiast wyświetlać puste lub błędne tłumaczenie.
- Klucz jest przechowywany w postaci zaszyfrowanej i w formularzu wyświetlany zamaskowany.

---
*Wypróbuj bezpośrednio: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są codziennie resetowane.*
