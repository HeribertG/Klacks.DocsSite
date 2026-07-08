---
sidebar_position: 5
---

# Modell-Verbindungstest

Nicht jedes Sprachmodell eignet sich für Klacksy — er muss zuverlässig strukturierte Funktionsaufrufe liefern statt in Prosa zu antworten. Unter Einstellungen > Klacksy Modell-Check testet Klacks das automatisch für alle konfigurierten Modelle.

## So funktioniert es

**Der Test:** Ein Klick auf "Beste Modelle finden" schickt jedem konfigurierten Modell (auch deaktivierten) dieselbe kleine Testaufgabe: "Lege einen neuen Mitarbeiter namens Anna Müller an." Das Modell muss darauf mit dem passenden strukturierten Funktionsaufruf und den korrekten Namensparametern antworten — nicht mit einer Textantwort. Zusätzlich muss das Kontextfenster mindestens 32 000 Tokens umfassen, damit Systemprompt und Fähigkeiten von Klacksy hineinpassen. Jeder Test läuft mit einem Zeitlimit von 30 Sekunden.

**Ergebnis:** Modelle, die beide Kriterien erfüllen, gelten als "geeignet" und werden automatisch aktiviert; ungeeignete Modelle werden deaktiviert. Die Ergebnisliste ist nach Eignung, dann nach Funktionsaufruf-Fähigkeit, Kosten, Latenz und Kontextfenster sortiert.

**Standardmodell setzen:** Über "Als Standard" wählen Sie direkt aus der Ergebnisliste, welches Modell Klacksy künftig standardmässig verwendet. Ohne eigene Auswahl setzt Klacks das am besten geeignete Modell automatisch als Standard.

## Gut zu wissen

- Der Test prüft alle hinterlegten Modelle, nicht nur aktivierte — auch bisher deaktivierte Modelle können dadurch aktiviert werden, wenn sie den Test bestehen.
- Ein bestandener Test ist kein Kostenschutz: teure, aber geeignete Modelle werden ebenfalls aktiviert. Kosten pro 1000 Tokens sind in der Ergebnisliste sichtbar.
- Dieser Test ist speziell auf Funktionsaufrufe für Handlungsfähigkeit ausgelegt und unabhängig vom Modell-Check bei den Spracheinstellungen, der ein niedrigeres Kontextfenster für reine Transkriptions-Bereinigung genügen lässt.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
