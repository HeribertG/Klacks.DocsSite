---
sidebar_position: 4
---

# Aktualizacje

W sekcji Ustawienia > Aktualizacje widzą Państwo aktualnie zainstalowaną oraz najnowszą dostępną wersję Klacks, sterują automatycznym zachowaniem aktualizacji oraz w razie potrzeby ręcznie uruchamiają aktualizację lub wycofanie zmian (rollback).

## Jak to działa

**Status:** Karta pokazuje aktualną wersję, informację czy dostępna jest nowsza wersja, a także trwającą lub ostatnio wykonaną operację aktualizacji wraz ze statusem.

**Uruchamianie aktualizacji lub wycofanie zmian:** Za pomocą "Zainstaluj teraz" uruchamiają Państwo ręcznie dostępną aktualizację; "Cofnij" wycofuje ostatnią zakończoną powodzeniem operację aktualizacji. Obie akcje są zablokowane, dopóki trwa już inna operacja.

**Konfiguracja automatyki:**
- **Włącz automatyczne aktualizacje** włącza lub wyłącza automatyczne sprawdzanie i wykonywanie aktualizacji.
- **Tylko powiadamiaj** nie uruchamia automatycznej aktualizacji, ale informuje, gdy dostępna jest nowa wersja.
- **Kanał** wybiera pomiędzy `Stable` i `Beta` jako źródłem aktualizacji.
- **Interwał sprawdzania** (w godzinach) oraz **okno konserwacji** (czas rozpoczęcia/zakończenia) określają, jak często i w jakim przedziale czasowym odbywa się sprawdzanie oraz instalacja.
- **Liczba przechowywanych kopii zapasowych** określa, ile kopii zapasowych jest utrzymywanych przed migracją, zanim starsze zostaną automatycznie usunięte.

**Historia:** Tabela wyświetla listę ostatnich operacji aktualizacji wraz z rodzajem, wersją docelową, statusem oraz czasem zgłoszenia.

## Warto wiedzieć

- Przed każdą migracją Klacks automatycznie tworzy kopię zapasową — bez kopii zapasowej żadna migracja nie zostanie zastosowana.
- Jeśli kontrola stanu (health check) po aktualizacji zakończy się niepowodzeniem, Klacks automatycznie wycofuje się do poprzedniej wersji (przywrócenie kopii zapasowej → aktywacja starej wersji → ponowne sprawdzenie); tylko jeśli to wycofanie samo w sobie zawiedzie, konieczna jest ręczna interwencja.
- Ręczne wycofanie przywraca celowo kopię zapasową należącą do ostatniej zakończonej powodzeniem operacji i aktywuje jej wersję wyjściową — nie jest to po prostu "cofnięcie o jedną wersję".
- Aktualizacja i wycofanie zmian są akcjami dostępnymi wyłącznie dla administratora.

---
*Wypróbuj bezpośrednio: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są codziennie resetowane.*
