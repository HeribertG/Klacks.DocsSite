---
sidebar_position: 3
---

Unter Einstellungen > Wizard-Einstellungen wählen Sie das KI-Sprachmodell, das der „Holistic Harmonizer" — einer der Planungsassistenten von Klacks — für seine Bewertung verwendet.

## So funktioniert es

Im Dropdown wählen Sie aus den in Klacks aktivierten LLM-Modellen dasjenige aus, das der Holistic Harmonizer global nutzen soll (oder „(keines)", um keines zu verwenden). Über den Button „Alle Modelle prüfen" schickt Klacks ein kleines Test-Bild an jedes aktivierte Modell und prüft, ob es antwortet und das Bild lesen kann — mit bis zu 90 Sekunden Timeout pro Modell. Das Ergebnis erscheint als Tabelle mit Modell, Anbieter, Status (OK/Fehler), Antwortzeit und einem Button, um ein erfolgreich getestetes Modell direkt zu übernehmen.

Bildverarbeitung ist hier keine Nebensache, sondern Voraussetzung: Laut Hinweistext der Seite benötigt dieser Assistent („Wizard 3") Modelle mit Bildverarbeitung, um zu funktionieren.

## Gut zu wissen

- Diese Seite betrifft **nicht** die 1-Klick-Auto-Planung, die Dienste automatisch auf Mitarbeitende verteilt — jene läuft über einen genetischen Algorithmus ganz ohne LLM und hat hier keine Einstellungen.
- Steht „(keines)" als Modell, ist der Holistic Harmonizer faktisch deaktiviert.
- Welche LLM-Modelle grundsätzlich zur Auswahl stehen (aktiviert/deaktiviert), wird an anderer Stelle in den KI-Einstellungen festgelegt — hier wählen Sie nur unter den bereits aktivierten Modellen.
- Der Prüf-Button ist ein reiner Selbsttest (Erreichbarkeit + Bildverständnis + Antwortzeit) und verändert an sich keine Planungsdaten.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
