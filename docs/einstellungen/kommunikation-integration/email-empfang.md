---
sidebar_position: 2
---

Unter Einstellungen > IMAP-Einstellungen hinterlegen Sie ein Postfach, das Klacks laufend im Hintergrund abruft und im Bereich „Posteingang" anzeigt — damit lässt sich eingehende Korrespondenz automatisch Mitarbeitenden und Kunden zugeordnet nachvollziehen.

## So funktioniert es

**Verbindungsdaten:** Server, Port (Standard 993), SSL-Verschlüsselung, Benutzername, Passwort, der abzurufende Ordner (Standard `INBOX`) sowie das Abrufintervall in Sekunden (Standard 300).

**Was mit den abgerufenen Mails passiert:** Klacks fragt das Postfach periodisch per IMAP ab, prüft neue Nachrichten mit einem Spam-Filter (Spam wird sowohl in Klacks als auch auf dem echten Postfach in den Junk-Ordner verschoben) und ordnet verbleibende Nachrichten automatisch dem passenden Kunden- oder Mitarbeiter-Datensatz zu, sofern die Absenderadresse als Kontaktdaten hinterlegt ist. So entsteht im „Posteingang" eine nach Person filterbare Korrespondenzhistorie. Änderungen wie „gelesen markieren", Verschieben oder Löschen wirken auch auf das echte Postfach zurück.

**Verbindung testen:** Der Button „IMAP-Verbindung testen" verbindet sich real mit dem Server, meldet sich an, öffnet den konfigurierten Ordner lesend und zeigt die Anzahl gefundener Nachrichten. Existiert der Ordner nicht, wird das explizit gemeldet.

## Gut zu wissen

- Dieses Postfach ist **kein** Kanal für Absenz-Meldungen und **kein** Bestandteil der ERP-Bestellungsübernahme (dafür gibt es separate Übernahmepunkte, siehe eigene Seite) — es speist ausschliesslich den allgemeinen „Posteingang".
- Diese Einstellung ist global für die gesamte Installation — es gibt kein separates IMAP-Konto pro Benutzer.
- Wird der zur Verschlüsselung verwendete Schlüssel der Installation zurückgesetzt, kann Klacks das gespeicherte Passwort nicht mehr entschlüsseln und pausiert den Abruf, bis das Passwort erneut gespeichert wird.
- Nachrichten im Posteingang lassen sich direkt übersetzen, wenn DeepL konfiguriert ist (siehe eigene Seite).

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
