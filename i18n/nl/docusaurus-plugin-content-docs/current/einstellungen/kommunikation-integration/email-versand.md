---
sidebar_position: 1
---

Onder Instellingen > E-mailinstellingen legt u de SMTP-server vast waarmee Klacks uitgaande e-mails verstuurt — bijvoorbeeld meldingen, wachtwoord-reset-mails of berichten die door Klacksy worden verzonden.

## Zo werkt het

**Verbindingsgegevens:** U vult server, poort, timeout, SSL/TLS-modus, authenticatiemethode (Geen, LOGIN, NTLM, GSSAPI, WDIGEST) en gebruikersnaam en wachtwoord in. Daarnaast kunt u een leesbevestiging/afleveringsmelding en een antwoord-naar-adres configureren. De SSL/TLS-modus wordt bovendien afgeleid van de poort: poort 465 gebruikt directe SSL, poort 587 (of geactiveerde SSL) StartTLS.

**Opslaan:** Er is geen aparte opslaan-knop — elk veld wordt na een korte vertraging automatisch opgeslagen zodra u het wijzigt.

**Verbinding testen:** De knop „Test-e-mail versturen" bouwt een echte SMTP-verbinding op, authenticeert zich en verstuurt een daadwerkelijke test-e-mail naar het opgeslagen gebruikersadres. Dit is geen loutere verbindingscheck, maar een reële e-mailverzending — nuttig om toegangsgegevens direct te verifiëren. Bij bekende providers (Outlook, Gmail, Yahoo, GMX e.a.) vereist Klacks verplicht een authenticatiemethode anders dan „Geen".

## Goed om te weten

- Deze instelling geldt globaal voor de hele installatie — er is geen apart SMTP-account per gebruiker.
- Alleen een persoon met beheerdersrechten kan deze pagina configureren.
- Het wachtwoord wordt versleuteld opgeslagen en is in het formulier via een oog-icoon in-/uitschakelbaar zichtbaar, maar nooit in leesbare tekst weergegeven.
- Mislukt de verbindingstest, dan meldt Klacks de concrete reden (bijv. authenticatiefout, SSL-handshakefout, time-out) in plaats van een generieke foutmelding.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks gereset.*
