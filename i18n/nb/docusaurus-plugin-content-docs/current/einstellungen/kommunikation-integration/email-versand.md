---
sidebar_position: 1
---

Under Innstillinger > E-postinnstillinger legger du inn SMTP-serveren Klacks bruker til å sende utgående e-poster — for eksempel varslinger, e-poster for tilbakestilling av passord eller meldinger sendt av Klacksy.

## Slik fungerer det

**Tilkoblingsdata:** Du fyller inn server, port, tidsavbrudd, SSL/TLS-modus, autentiseringstype (Ingen, LOGIN, NTLM, GSSAPI, WDIGEST) samt brukernavn og passord. I tillegg kan lesebekreftelse/leveringsvarsel og en svar-til-adresse konfigureres. SSL/TLS-modusen utledes også fra porten: port 465 bruker direkte SSL, port 587 (eller aktivert SSL) StartTLS.

**Lagring:** Det finnes ingen eksplisitt lagre-knapp — hvert felt lagres automatisk etter en kort forsinkelse så snart du endrer det.

**Teste tilkobling:** Knappen "Send test-e-post" oppretter en reell SMTP-tilkobling, autentiserer seg og sender en faktisk test-e-post til den lagrede brukeradressen. Dette er ikke bare en tilkoblingssjekk, men en reell e-postutsendelse — nyttig for å verifisere tilgangsdata umiddelbart. For kjente tilbydere (Outlook, Gmail, Yahoo, GMX m.fl.) krever Klacks obligatorisk en autentiseringstype forskjellig fra "Ingen".

## Greit å vite

- Denne innstillingen gjelder globalt for hele installasjonen — det finnes ingen separat SMTP-konto per bruker.
- Bare en person med administratorrettigheter kan konfigurere denne siden.
- Passordet lagres kryptert og kan vises/skjules i skjemaet med et øye-ikon, aldri vist i klartekst.
- Feiler tilkoblingstesten, melder Klacks den konkrete årsaken (f.eks. autentiseringsfeil, SSL-håndtrykksfeil, tidsavbrudd) i stedet for en generisk feilmelding.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
