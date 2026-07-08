---
sidebar_position: 2
---

W obszarze Ustawienia > Ustawienia IMAP zapisujesz skrzynkę pocztową, którą Klacks stale pobiera w tle i wyświetla w obszarze „Skrzynka odbiorcza" — dzięki temu przychodząca korespondencja może być automatycznie przypisywana do pracowników i klientów.

## Jak to działa

**Dane połączenia:** Serwer, port (domyślnie 993), szyfrowanie SSL, nazwa użytkownika, hasło, folder do pobierania (domyślnie `INBOX`) oraz interwał pobierania w sekundach (domyślnie 300).

**Co dzieje się z pobranymi wiadomościami:** Klacks okresowo odpytuje skrzynkę pocztową przez IMAP, sprawdza nowe wiadomości filtrem antyspamowym (spam jest przenoszony do folderu Junk zarówno w Klacks, jak i na rzeczywistej skrzynce pocztowej) i automatycznie przypisuje pozostałe wiadomości do odpowiedniego rekordu klienta lub pracownika, o ile adres nadawcy jest zapisany jako dane kontaktowe. W ten sposób w „Skrzynce odbiorczej" powstaje historia korespondencji, którą można filtrować według osoby. Zmiany takie jak „oznacz jako przeczytane", przenoszenie lub usuwanie działają również na rzeczywistej skrzynce pocztowej.

**Test połączenia:** Przycisk „Testuj połączenie IMAP" łączy się rzeczywiście z serwerem, loguje się, otwiera skonfigurowany folder w trybie odczytu i pokazuje liczbę znalezionych wiadomości. Jeśli folder nie istnieje, jest to wyraźnie zgłaszane.

## Warto wiedzieć

- Ta skrzynka pocztowa **nie jest** kanałem do zgłaszania nieobecności ani **nie jest** częścią przejmowania zamówień ERP (do tego służą osobne punkty przejęcia, patrz osobna strona) — zasila wyłącznie ogólną „Skrzynkę odbiorczą".
- To ustawienie jest globalne dla całej instalacji — nie istnieje osobne konto IMAP dla każdego użytkownika.
- Jeśli klucz szyfrujący używany przez instalację zostanie zresetowany, Klacks nie może już odszyfrować zapisanego hasła i wstrzymuje pobieranie, dopóki hasło nie zostanie zapisane ponownie.
- Wiadomości w skrzynce odbiorczej można tłumaczyć bezpośrednio, jeśli skonfigurowano DeepL (patrz osobna strona).

---
*Wypróbuj bezpośrednio: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są codziennie resetowane.*
