---
sidebar_position: 1
---

V nastavení Nastavení > Nastavení e-mailu zadáváte SMTP server, přes který Klacks odesílá odchozí e-maily — například oznámení, e-maily pro reset hesla nebo zprávy odeslané Klacksy.

## Jak to funguje

**Připojovací údaje:** Zadáváte server, port, timeout, režim SSL/TLS, typ ověřování (Žádné, LOGIN, NTLM, GSSAPI, WDIGEST) a uživatelské jméno a heslo. Dále lze nakonfigurovat potvrzení o přečtení / oznámení o doručení a adresu pro odpověď. Režim SSL/TLS se navíc odvozuje z portu: port 465 používá přímé SSL, port 587 (nebo aktivované SSL) StartTLS.

**Ukládání:** Neexistuje žádné výslovné tlačítko Uložit — každé pole se po krátkém zpoždění automaticky uloží, jakmile jej změníte.

**Test připojení:** Tlačítko „Odeslat testovací e-mail" naváže skutečné SMTP připojení, ověří se a odešle skutečný testovací e-mail na uloženou adresu uživatele. Nejde o pouhou kontrolu připojení, ale o skutečné odeslání e-mailu — užitečné pro okamžité ověření přístupových údajů. U známých poskytovatelů (Outlook, Gmail, Yahoo, GMX aj.) Klacks bezpodmínečně vyžaduje typ ověřování jiný než „Žádné".

## Dobré vědět

- Toto nastavení je globální pro celou instalaci — neexistuje samostatný SMTP účet pro každého uživatele.
- Tuto stránku může nakonfigurovat pouze osoba s administrátorskými právy.
- Heslo se ukládá zašifrovaně a ve formuláři lze jeho zobrazení přepínat ikonou oka, nikdy se nezobrazuje v čitelné podobě.
- Pokud test připojení selže, Klacks nahlásí konkrétní důvod (např. chyba ověření, chyba SSL handshake, vypršení časového limitu) místo obecné chybové zprávy.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — Přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
