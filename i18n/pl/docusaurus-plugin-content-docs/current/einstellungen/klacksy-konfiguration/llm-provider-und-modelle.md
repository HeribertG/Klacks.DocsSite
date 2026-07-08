---
sidebar_position: 1
---

# Dostawcy LLM i modele

Klacksy potrzebuje modelu językowego, aby rozumieć i działać. W Ustawienia > Dostawcy LLM, Modele LLM i Dziennik synchronizacji LLM określają Państwo, których dostawców i jakich konkretnych modeli może do tego używać Klacks.

## Jak to działa

**Dodawanie dostawcy:** Dostawca łączy w sobie adres bazowy URL, wersję API i klucz API danego usługodawcy. Sześciu dostawców (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) jest na stałe zaszytych w kodzie; każdy kolejny dostawca działa przez ogólne, zgodne z OpenAI połączenie — dzięki temu można podłączyć np. Groq, Together AI, Fireworks, OpenRouter, xAI, Cerebras, Perplexity lub samodzielnie hostowany model. Przez funkcję „Szukaj dostawców" Klacks dodatkowo proponuje dostawców, których jeszcze Państwo nie skonfigurowali: z wyselekcjonowanego katalogu zweryfikowanych adresów lub — jeśli skonfigurowano wyszukiwanie internetowe — na podstawie wyszukiwania w internecie. Każda propozycja jest przed wyświetleniem sprawdzana na żywo pod kątem dostępności; wybrani dostawcy są tworzeni jako nieaktywni i bez klucza API, który następnie uzupełniają Państwo samodzielnie.

**Klucz API i priorytet:** Po zapisaniu klucz nigdy więcej nie jest wyświetlany w interfejsie w postaci jawnego tekstu — widać jedynie, czy jest on skonfigurowany („Skonfigurowano"). Priorytet określa kolejność, w jakiej brani są pod uwagę aktywni dostawcy.

**Zarządzanie modelami:** W sekcji Modele LLM tworzą Państwo dla każdego dostawcy poszczególne modele (nazwa wyświetlana, techniczny identyfikator modelu u dostawcy, okno kontekstu, maksymalna liczba tokenów, koszt za 1000 tokenów wejściowych/wyjściowych). Model można oznaczyć jako model domyślny; dostawcy nie można usunąć, dopóki jeden z jego modeli jest aktualnym modelem domyślnym.

**Dziennik synchronizacji LLM:** Usługa działająca w tle domyślnie co 24 godziny automatycznie sprawdza, które modele u aktywnych dostawców pojawiły się na nowo lub zniknęły. Nowe modele są wstępnie sprawdzane rzeczywistym zapytaniem testowym i dodawane jako aktywne tylko w przypadku powodzenia; modele, które nie są już oferowane, są automatycznie dezaktywowane. Dziennik synchronizacji pokazuje pełną historię dla każdego dostawcy z datą, liczbą nowych/dezaktywowanych/nieudanych modeli oraz rozwijanymi wynikami testów. Administratorzy po kolejnym zalogowaniu otrzymują dodatkowo powiadomienie typu toast o nieprzeczytanych zdarzeniach synchronizacji.

## Warto wiedzieć

- Tylko sześciu dostawców (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) ma dedykowaną implementację — wszyscy pozostali dostawcy działają przez ogólne, zgodne z OpenAI połączenie.
- Katalog funkcji „Szukaj dostawców" zawiera obecnie dwunastu zweryfikowanych dostawców; propozycje internetowe pojawiają się tylko wtedy, gdy w Ustawieniach skonfigurowano wyszukiwanie internetowe.
- Usługa dziennika synchronizacji działa w tle niezależnie od Państwa sesji — nie trzeba w tym celu trzymać strony otwartej.

---
*Wypróbuj bezpośrednio: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są resetowane codziennie.*
