---
sidebar_position: 1
---

Under Inställningar > E-post-inställningar lagrar du SMTP-servern som Klacks använder för att skicka utgående e-post — till exempel notifieringar, lösenordsåterställnings-mejl eller meddelanden som skickas av Klacksy.

## Så fungerar det

**Anslutningsuppgifter:** Du anger server, port, timeout, SSL/TLS-läge, autentiseringstyp (Ingen, LOGIN, NTLM, GSSAPI, WDIGEST) samt användarnamn och lösenord. Dessutom kan läskvitto/leveransnotifiering och en svara-till-adress konfigureras. SSL/TLS-läget härleds dessutom från porten: port 465 använder direkt SSL, port 587 (eller aktiverat SSL) StartTLS.

**Spara:** Det finns ingen uttrycklig Spara-knapp — varje fält sparas automatiskt efter en kort fördröjning så snart du ändrar det.

**Testa anslutning:** Knappen "Skicka test-e-post" upprättar en verklig SMTP-anslutning, autentiserar sig och skickar ett faktiskt test-e-postmeddelande till den lagrade användaradressen. Det är ingen ren anslutningskontroll, utan en riktig e-postutskick — användbart för att direkt verifiera inloggningsuppgifter. Hos kända leverantörer (Outlook, Gmail, Yahoo, GMX m.fl.) kräver Klacks tvingande en autentiseringstyp som inte är "Ingen".

## Bra att veta

- Denna inställning är global för hela installationen — det finns inget separat SMTP-konto per Användare.
- Endast en person med administratörsrättigheter kan konfigurera denna sida.
- Lösenordet lagras krypterat och kan visas/döljas i formuläret via en ögonsymbol, aldrig visat i klartext.
- Misslyckas anslutningstestet meddelar Klacks den konkreta orsaken (t.ex. autentiseringsfel, SSL-handskakningsfel, timeout) istället för ett generiskt felmeddelande.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
