---
sidebar_position: 1
---

# Planowanie automatyczne: plan w kilka sekund

Najbardziej żmudną część planowania dyżurów — przypisywanie osób do zmian — Klacks wykonuje za jednym kliknięciem.

## Jak to działa

Za planowaniem automatycznym jednym kliknięciem stoi **algorytm genetyczny**: tworzy on tysiące wariantów planu, ocenia je i łączy najlepsze — tak długo, aż powstanie zrównoważone rozwiązanie. Twarde reguły mają przy tym zawsze pierwszeństwo, dopiero potem liczą się pozostałe cele:

- **Reguły** — prawo pracy, czasy odpoczynku, kwalifikacje i dostępności nie podlegają negocjacji: żaden, choćby najlepszy wynik nie może naruszać twardej reguły
- **Obłożenie** — każda zmiana obsadzana jest wymaganą liczbą osób
- **Sprawiedliwość** — godziny pracy rozkładają się równomiernie, a kolejność zmian danej osoby podąża, gdzie to możliwe, za wzorcem rano → popołudnie → noc
- **Ciągłość** — tam, gdzie to możliwe, pracownicy pozostają w swoim zwykłym miejscu pracy

Planowanie automatyczne uruchamiasz bezpośrednio z grafiku dyżurów dla wybranego okresu. Wynik pojawia się jako zwykły szkic planu: wszystko można ręcznie doprecyzować, nic nie zostaje utrwalone bez pytania.

## Warto wiedzieć

- Kwalifikacje działają jak rzeczywista granica: kto nie ma wymaganej kwalifikacji, nie zostanie zaplanowany.
- Planowanie automatyczne respektuje już istniejące wpisy — możesz więc najpierw ustawić punkty stałe, a resztę wypełnić automatycznie.
- Jeśli wynik Ci nie odpowiada, po prostu zaplanuj ponownie: algorytm znajdzie równoważne alternatywy.

![Siatka grafiku dyżurów w Klacks](/img/app-schedule-de.png)

---
*Wypróbuj od razu: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są resetowane codziennie.*
