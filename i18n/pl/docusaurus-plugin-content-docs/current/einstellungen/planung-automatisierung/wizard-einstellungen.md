---
sidebar_position: 3
---

W obszarze Ustawienia > Ustawienia kreatora wybierasz model językowy AI, którego „Holistic Harmonizer" — jeden z asystentów planowania Klacks — używa do swojej oceny.

## Jak to działa

W menu rozwijanym wybierasz spośród modeli LLM aktywowanych w Klacks ten, którego Holistic Harmonizer ma używać globalnie (lub „(brak)", aby nie używać żadnego). Za pomocą przycisku „Sprawdź wszystkie modele" Klacks wysyła mały obraz testowy do każdego aktywowanego modelu i sprawdza, czy odpowiada i potrafi odczytać obraz — z limitem czasu do 90 sekund na model. Wynik pojawia się w postaci tabeli z modelem, dostawcą, statusem (OK/błąd), czasem odpowiedzi oraz przyciskiem umożliwiającym bezpośrednie zastosowanie pomyślnie przetestowanego modelu.

Przetwarzanie obrazów nie jest tu sprawą poboczną, lecz warunkiem koniecznym: zgodnie z tekstem informacyjnym na stronie ten asystent („Wizard 3") potrzebuje modeli z przetwarzaniem obrazów, aby działać.

## Warto wiedzieć

- Ta strona **nie** dotyczy automatycznego planowania jednym kliknięciem, które automatycznie rozdziela dyżury na pracowników — to działa za pomocą algorytmu genetycznego całkowicie bez LLM i nie ma tutaj żadnych ustawień.
- Jeśli jako model ustawiono „(brak)", Holistic Harmonizer jest faktycznie wyłączony.
- To, które modele LLM są zasadniczo dostępne do wyboru (aktywowane/dezaktywowane), jest ustalane w innym miejscu, w ustawieniach AI — tutaj wybierasz tylko spośród już aktywowanych modeli.
- Przycisk sprawdzania jest czystym autotestem (dostępność + rozumienie obrazu + czas odpowiedzi) i sam w sobie nie zmienia żadnych danych planowania.

---
*Wypróbuj bezpośrednio: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są codziennie resetowane.*
