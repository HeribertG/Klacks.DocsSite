---
sidebar_position: 7
---

# Spamregels

Onder Instellingen > Spamregels definieert u filterregels waarmee binnenkomende e-mails in de inboxmodule automatisch als spam worden geclassificeerd — de regels werken zowel bij het lopende ophalen van nieuwe e-mails (IMAP-polling) als bij een latere herbeoordeling van reeds binnengekomen e-mails.

## Zo werkt het

**Regel aanmaken:** kies een regeltype — afzender bevat, afzenderdomein, onderwerp bevat of inhoud bevat — voer het te controleren patroon in en klik op Toevoegen.

**Regels beheren:** elke regel kan via een selectievakje worden geactiveerd of gedeactiveerd zonder deze te verwijderen, en via de prullenbakknop permanent worden verwijderd.

## Goed om te weten

- Gedeactiveerde regels blijven opgeslagen, maar werken niet meer op nieuwe of opnieuw beoordeelde e-mails — nuttig om een regel proefondervindelijk buiten werking te stellen in plaats van te verwijderen.
- Klacks gebruikt voor de ERP-bestellingsimport dezelfde inbox als de gewone e-mail-inboxmodule (één-postbus-architectuur). Een te breed geformuleerde regel (bijv. een heel afzenderdomein) kan daardoor theoretisch ook binnenkomende ERP-bestel-e-mails als spam classificeren — controleer nieuwe regels daarom zorgvuldig voordat u ze activeert.
- Gebruik afzenderdomein-regels om hele ongewenste afzenderorganisaties te blokkeren, in plaats van elk afzonderlijk adres als afzender-bevat-regel vast te leggen.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks teruggezet.*
