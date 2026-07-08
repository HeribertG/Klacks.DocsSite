---
sidebar_position: 1
---

Unter Einstellungen > E-Mail-Einstellungen hinterlegen Sie den SMTP-Server, über den Klacks ausgehende E-Mails verschickt — etwa Benachrichtigungen, Passwort-Reset-Mails oder von Klacksy versendete Nachrichten.

## So funktioniert es

**Verbindungsdaten:** Sie tragen Server, Port, Timeout, SSL/TLS-Modus, Authentifizierungsart (Keine, LOGIN, NTLM, GSSAPI, WDIGEST) sowie Benutzername und Passwort ein. Zusätzlich lassen sich Lesebestätigung/Zustellbenachrichtigung und eine Antwort-an-Adresse konfigurieren. Der SSL/TLS-Modus wird zusätzlich vom Port abgeleitet: Port 465 verwendet direktes SSL, Port 587 (oder aktiviertes SSL) StartTLS.

**Speichern:** Es gibt keinen expliziten Speichern-Button — jedes Feld wird nach kurzer Verzögerung automatisch gespeichert, sobald Sie es ändern.

**Verbindung testen:** Der Button „Test-E-Mail senden" baut eine echte SMTP-Verbindung auf, authentifiziert sich und verschickt eine tatsächliche Test-E-Mail an die hinterlegte Benutzeradresse. Das ist kein reiner Verbindungscheck, sondern ein realer Mailversand — nützlich, um Zugangsdaten sofort zu verifizieren. Bei bekannten Anbietern (Outlook, Gmail, Yahoo, GMX u. a.) verlangt Klacks zwingend eine Authentifizierungsart ungleich „Keine".

## Gut zu wissen

- Diese Einstellung ist global für die gesamte Installation — es gibt kein separates SMTP-Konto pro Benutzer.
- Nur eine Person mit Administrator-Rechten kann diese Seite konfigurieren.
- Das Passwort wird verschlüsselt gespeichert und im Formular durch ein Augen-Symbol ein-/ausblendbar dargestellt, nie im Klartext angezeigt.
- Schlägt der Verbindungstest fehl, meldet Klacks den konkreten Grund (z. B. Authentifizierungsfehler, SSL-Handshake-Fehler, Zeitüberschreitung) statt einer generischen Fehlermeldung.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
