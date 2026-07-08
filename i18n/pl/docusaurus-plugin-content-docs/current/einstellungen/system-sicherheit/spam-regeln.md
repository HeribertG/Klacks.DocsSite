---
sidebar_position: 7
---

# Reguły antyspamowe

W sekcji Ustawienia > Reguły antyspamowe definiują Państwo reguły filtrowania, dzięki którym przychodzące e-maile w module Skrzynka odbiorcza są automatycznie klasyfikowane jako spam — reguły działają zarówno podczas bieżącego pobierania nowych e-maili (odpytywanie IMAP), jak i przy późniejszej ponownej ocenie już otrzymanych wiadomości.

## Jak to działa

**Tworzenie reguły:** Wybierają Państwo typ reguły — Nadawca zawiera, Domena nadawcy, Temat zawiera lub Treść zawiera — wpisują wzorzec do sprawdzenia i klikają Dodaj.

**Zarządzanie regułami:** Każdą regułę można włączyć lub wyłączyć za pomocą pola wyboru, bez jej usuwania, a także trwale usunąć za pomocą przycisku kosza.

## Warto wiedzieć

- Wyłączone reguły pozostają zapisane, ale nie działają już na nowe lub ponownie oceniane e-maile — przydatne, aby tymczasowo zawiesić regułę zamiast ją usuwać.
- Klacks wykorzystuje do importu zamówień ERP tę samą skrzynkę odbiorczą co zwykły moduł e-mailowej skrzynki odbiorczej (architektura jednej skrzynki). Zbyt szeroko zdefiniowana reguła (np. cała domena nadawcy) może więc teoretycznie sklasyfikować jako spam także przychodzące e-maile z zamówieniami ERP — nowe reguły należy odpowiednio dokładnie sprawdzić, zanim zostaną aktywowane.
- Reguły dotyczące domeny nadawcy warto stosować do blokowania całych niepożądanych organizacji nadawców, zamiast rejestrować każdy pojedynczy adres jako regułę typu nadawca-zawiera.

---
*Wypróbuj bezpośrednio: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są codziennie resetowane.*
