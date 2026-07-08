---
sidebar_position: 2
---

# Personal Access Tokens

Personal Access Tokens (PAT) to długożyjące klucze API, dzięki którym zewnętrzne narzędzia i usługi bezpiecznie uzyskują dostęp do Klacks bez nazwy użytkownika i hasła — np. asystenci AI, tacy jak Claude Desktop, poprzez Model Context Protocol (MCP), skrypty automatyzujące lub pipeline'y CI/CD.

## Jak to działa

**Tworzenie tokenu:** W sekcji Ustawienia > Personal Access Tokens klikają Państwo "Utwórz nowy token", nadają mu czytelną nazwę (np. `Claude Desktop` lub `CI-Pipeline`) i wybierają okres ważności od 1 do 730 dni (domyślnie: 365 dni). Token jest wyświetlany po utworzeniu w formacie `klacks_pat_<losowy_ciąg_znaków>` **dokładnie jeden raz** — należy go od razu skopiować, ponieważ później nie da się go już wyświetlić.

**Używanie:** Token jest przekazywany jako token typu Bearer w nagłówku `Authorization` każdego żądania API, np. `Authorization: Bearer klacks_pat_...`. Dla klientów MCP, takich jak Claude Desktop, wpisują go Państwo jako zmienną środowiskową `AUTHORIZATION` serwera MCP, który wskazuje na `/mcp`.

**Zarządzanie:** Przegląd pokazuje nazwę, datę utworzenia, datę wygaśnięcia oraz ostatnie użycie każdego tokenu — sam token w postaci jawnego tekstu nigdy nie jest tam ponownie wyświetlany. Tokeny wygasające w ciągu najbliższych 30 dni są odpowiednio oznaczone na liście. Przycisk Odwołaj natychmiast i trwale blokuje token.

## Warto wiedzieć

- Klacks przechowuje wyłącznie hash SHA-256 tokenu, nigdy sam token w postaci jawnego tekstu — utracony token nie może zostać odzyskany, można go jedynie odwołać i utworzyć nowy.
- Każdy token jest powiązany z Państwa kontem użytkownika i ma te same uprawnienia co Państwa własne konto — nie ma możliwości drobnoziarnistego ograniczenia zakresu (scope) per token.
- Dla każdego narzędzia należy używać osobnego tokenu, aby w razie podejrzenia nadużycia można było odwołać go celowo, bez przerywania innych integracji.

---
*Wypróbuj bezpośrednio: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są codziennie resetowane.*
