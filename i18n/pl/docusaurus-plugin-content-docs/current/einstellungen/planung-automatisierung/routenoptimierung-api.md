---
sidebar_position: 4
---

W obszarze Ustawienia > OpenRoute zapisujesz klucz API dla zewnętrznej usługi openrouteservice.org, z której Klacks korzysta do optymalizacji tras.

## Jak to działa

OpenRouteService oblicza czasy przejazdu i odległości — dla jazdy samochodem, roweru i pieszo — i tym samym dostarcza podstawę dla optymalizacji tras w Klacks. W jedynym polu na tej stronie wprowadzasz swój osobisty klucz API. Bezpłatny klucz otrzymasz za pośrednictwem odnośnika rejestracyjnego do openrouteservice.org, podanego na tej stronie.

## Warto wiedzieć

- Klucz jest wysyłany bezpośrednio z przeglądarki do openrouteservice.org i dlatego celowo wyświetlany **w postaci jawnej** zamiast zamaskowanej (`***`) — inaczej niż np. hasła e-mail. Jest to zamierzone, abyś mógł rozpoznać przypadkową literówkę lub wygasły klucz, a nie błąd wyświetlania.
- W bazie danych klucz jest mimo to przechowywany w postaci zaszyfrowanej.
- Bez ważnego klucza optymalizacja tras nie działa — czasy przejazdu i odległości nie mogą wtedy zostać obliczone.
- Do samej konwersji adresów na współrzędne (geokodowanie) Klacks korzysta z innej, oddzielnej usługi — ten klucz odpowiada wyłącznie za obliczanie tras.

---
*Wypróbuj bezpośrednio: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są codziennie resetowane.*
