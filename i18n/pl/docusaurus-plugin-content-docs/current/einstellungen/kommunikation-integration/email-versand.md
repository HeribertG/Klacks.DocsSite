---
sidebar_position: 1
---

W obszarze Ustawienia > Ustawienia e-mail zapisujesz serwer SMTP, przez który Klacks wysyła wychodzące wiadomości e-mail — np. powiadomienia, e-maile do resetowania hasła lub wiadomości wysyłane przez Klacksy.

## Jak to działa

**Dane połączenia:** Wprowadzasz serwer, port, limit czasu, tryb SSL/TLS, rodzaj uwierzytelniania (Brak, LOGIN, NTLM, GSSAPI, WDIGEST) oraz nazwę użytkownika i hasło. Dodatkowo można skonfigurować potwierdzenie przeczytania/powiadomienie o doręczeniu oraz adres do odpowiedzi. Tryb SSL/TLS jest dodatkowo wyprowadzany z portu: port 465 używa bezpośredniego SSL, port 587 (lub włączony SSL) — StartTLS.

**Zapisywanie:** Nie ma jawnego przycisku Zapisz — każde pole jest automatycznie zapisywane po krótkim opóźnieniu, gdy tylko je zmienisz.

**Test połączenia:** Przycisk „Wyślij e-mail testowy" nawiązuje rzeczywiste połączenie SMTP, uwierzytelnia się i wysyła faktyczną wiadomość testową na zapisany adres użytkownika. Nie jest to czysty test połączenia, lecz rzeczywista wysyłka poczty — przydatne do natychmiastowej weryfikacji danych dostępowych. W przypadku znanych dostawców (Outlook, Gmail, Yahoo, GMX itd.) Klacks bezwzględnie wymaga rodzaju uwierzytelniania innego niż „Brak".

## Warto wiedzieć

- To ustawienie jest globalne dla całej instalacji — nie istnieje osobne konto SMTP dla każdego użytkownika.
- Tylko osoba z uprawnieniami administratora może skonfigurować tę stronę.
- Hasło jest przechowywane w postaci zaszyfrowanej, a w formularzu można je pokazać/ukryć za pomocą ikony oka — nigdy nie jest wyświetlane w postaci jawnej.
- Jeśli test połączenia się nie powiedzie, Klacks zgłasza konkretny powód (np. błąd uwierzytelnienia, błąd uzgadniania SSL, przekroczenie czasu oczekiwania) zamiast ogólnego komunikatu o błędzie.

---
*Wypróbuj bezpośrednio: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są codziennie resetowane.*
