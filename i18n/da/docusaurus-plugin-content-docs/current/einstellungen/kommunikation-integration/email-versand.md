---
sidebar_position: 1
---

Under Indstillinger > E-mail-indstillinger gemmer du den SMTP-server, hvorigennem Klacks sender udgående e-mails — f.eks. notifikationer, adgangskode-nulstillingsmails eller beskeder sendt af Klacksy.

## Sådan fungerer det

**Forbindelsesdata:** Du indtaster server, port, timeout, SSL/TLS-tilstand, godkendelsestype (Ingen, LOGIN, NTLM, GSSAPI, WDIGEST) samt brugernavn og adgangskode. Derudover kan læsebekræftelse/leveringsnotifikation og en svar-til-adresse konfigureres. SSL/TLS-tilstanden udledes desuden af porten: port 465 bruger direkte SSL, port 587 (eller aktiveret SSL) StartTLS.

**Gemme:** Der er ingen eksplicit gem-knap — hvert felt gemmes automatisk efter en kort forsinkelse, så snart du ændrer det.

**Test forbindelse:** Knappen "Send test-e-mail" opretter en reel SMTP-forbindelse, godkender sig og sender en faktisk test-e-mail til den gemte brugeradresse. Dette er ikke blot et forbindelsestjek, men en reel mailafsendelse — nyttigt til straks at verificere adgangsdata. Hos kendte udbydere (Outlook, Gmail, Yahoo, GMX m.fl.) kræver Klacks en godkendelsestype forskellig fra "Ingen".

## Godt at vide

- Denne indstilling er global for hele installationen — der findes ingen separat SMTP-konto pr. bruger.
- Kun en person med administratorrettigheder kan konfigurere denne side.
- Adgangskoden gemmes krypteret og kan vises/skjules i formularen via et øje-ikon, aldrig vist i klartekst.
- Fejler forbindelsestesten, melder Klacks den konkrete årsag (f.eks. godkendelsesfejl, SSL-håndtryksfejl, timeout) i stedet for en generisk fejlmeddelelse.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
