---
sidebar_position: 6
---

# Klacksy Skill-Vorschläge

Klacksy lernt aus seinen eigenen Fehlern: Korrigieren Sie im Chat, dass Klacksy die falsche Fähigkeit ausgewählt hat, merkt sich das System diese Korrektur. Unter Einstellungen > Klacksy Skill-Vorschläge sehen Admins, welche Verbesserungen an Skill-Beschreibungen daraus vorgeschlagen werden, und entscheiden über deren Übernahme.

## So funktioniert es

**Woher die Vorschläge kommen:** Wählt Klacksy im Chat die falsche Fähigkeit (Skill) für eine Anfrage und der Benutzer korrigiert das, wird diese Chat-Sequenz als "korrigiert" markiert. Ein interner Optimierer wertet solche korrigierten Sequenzen aus und leitet daraus konkrete Textänderungen an Skill-Beschreibungen ab — mit dem Ziel, dass Klacksy die betroffene Fähigkeit beim nächsten Mal richtig zuordnet.

**Vorschläge erzeugen:** Der Knopf "Vorschläge erzeugen" stösst die Auswertung der letzten 30 korrigierten Chat-Sequenzen an und erzeugt daraus neue Vorschläge, falls sich Muster finden lassen.

**Eine Vorschlags-Karte zeigt:** den betroffenen Skill und das geänderte Feld, die Änderung im Vorher/Nachher-Vergleich, eine Begründung, warum die Änderung sinnvoll ist, sowie — aufklappbar — die genauen Benutzeranfragen, die den Vorschlag ausgelöst haben.

**Entscheiden:** Jeder offene Vorschlag wird einzeln **übernommen** (die Skill-Beschreibung wird sofort geändert) oder **verworfen** (der Vorschlag wird verworfen, ohne dass etwas geändert wird). Es findet keine automatische Übernahme statt — ein Mensch entscheidet immer mit.

## Gut zu wissen

- Ohne Korrekturen im Chat entstehen keine Vorschläge — das System braucht reale Fehlkorrekturen als Trainingsgrundlage, nicht nur Nutzung.
- Diese Funktion verändert nur Beschreibungstexte von Fähigkeiten, damit Klacksy sie richtig auswählt — sie ändert nicht, was eine Fähigkeit tatsächlich tut.
- Diese Funktion erfordert Administrator-Rechte.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
