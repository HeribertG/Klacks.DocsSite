---
sidebar_position: 1
---

# Optymalizacja tras i objazdów

Dla działań mobilnych — tras opieki domowej (Spitex), obchodów ochrony, obiektów sprzątanych czy dostaw — Klacks planuje nie tylko *kto*, ale też *w jakiej kolejności*.

## Jak to działa

Każde miejsce działania jest zapisane wraz z adresem, więc Klacks zna trasy. **Algorytm mrówkowy** (sprawdzona metoda optymalizacji problemów trasowania) wylicza na podstawie adresów działań najsensowniejszą kolejność:

1. **Rejestracja adresów** — wprowadzane jednorazowo przy miejscach działania
2. **Optymalizacja kolejności** — Klacks ustala najkrótszą sensowną kolejność; objazdy i puste przejazdy odpadają
3. **Wyświetlanie na mapie** — gotowa trasa pojawia się jako route, do wyboru dla samochodu, roweru lub pieszo

Jeśli dla danego działania zapisane są stałe okna czasowe (np. tylko przed południem), są one uwzględniane w planowaniu tras — nie jest to jednak twarda gwarancja ich dotrzymania.

## Warto wiedzieć

- Do obliczania odległości i czasu jazdy Klacks może wykorzystywać zewnętrzną usługę OpenRouteService (współrzędne GPS są przy tym przesyłane w formie zanonimizowanej) — w zależności od konfiguracji instancji.
- Optymalizacja tras jest samodzielnym modułem dla dyżurów kontenerowych; niezależnie od niej ogólne planowanie automatyczne grafiku ocenia obłożenie, sprawiedliwość i zgodność z regułami.
- Środek transportu można wybrać dla każdej trasy osobno — przydatne przy miejskich trasach rowerowych obok wiejskich tras samochodowych.
- Gdy ktoś wypadnie, Klacks od razu pokazuje, kto jest wykwalifikowany i dostępny.

![Widok osi czasu dla planowania tras](/img/app-timeline-de.png)

---
*Wypróbuj od razu: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są resetowane codziennie.*
