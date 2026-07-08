---
sidebar_position: 7
---

# Spam-Regeln

Unter Einstellungen > Spam-Regeln definieren Sie Filterregeln, mit denen eingehende E-Mails im Inbox-Modul automatisch als Spam eingestuft werden — die Regeln wirken sowohl beim laufenden Abrufen neuer E-Mails (IMAP-Polling) als auch bei einer nachträglichen Neubewertung bereits eingegangener E-Mails.

## So funktioniert es

**Regel anlegen:** Wählen Sie einen Regeltyp — Absender enthält, Absenderdomain, Betreff enthält oder Inhalt enthält — geben Sie das zu prüfende Muster ein und klicken Sie auf Hinzufügen.

**Regeln verwalten:** Jede Regel lässt sich über eine Checkbox aktivieren oder deaktivieren, ohne sie zu löschen, sowie über den Papierkorb-Button dauerhaft entfernen.

## Gut zu wissen

- Deaktivierte Regeln bleiben gespeichert, wirken aber nicht mehr auf neue oder neu bewertete E-Mails — nützlich, um eine Regel testweise auszusetzen statt sie zu löschen.
- Klacks nutzt für den ERP-Bestellungsimport denselben Posteingang wie das normale E-Mail-Inbox-Modul (Ein-Briefkasten-Architektur). Eine zu breit gefasste Regel (z. B. eine ganze Absenderdomain) kann deshalb theoretisch auch eingehende ERP-Bestellungs-E-Mails als Spam einstufen — prüfen Sie neue Regeln entsprechend sorgfältig, bevor Sie sie aktivieren.
- Nutzen Sie Absenderdomain-Regeln, um ganze unerwünschte Absenderorganisationen zu sperren, statt jede einzelne Adresse als Absender-enthält-Regel zu erfassen.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
