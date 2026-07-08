---
sidebar_position: 4
---

# Rollen und Rechte

Klacks kennt genau zwei zuweisbare Rechte-Stufen für Login-Konten: **Supervisor** und **Admin**. Eine dritte, technisch eigenständige Rolle gibt es nicht — Begriffe wie "Planer" beschreiben unten eine **Funktion im Tagesgeschäft**, keine zusätzliche Berechtigungsstufe.

## Die zwei echten Rollen

**Supervisor** darf Adressen, Gruppen, Verträge, Absenzen und Schichten anlegen, bearbeiten und löschen sowie im Schichtplan einen Tag oder eine Gruppe genehmigen und diese Genehmigung wieder zurückziehen. Das blosse Bestätigen einzelner Arbeitszeiten braucht dagegen keine besondere Rolle — das kann jedes Login-Konto.

**Admin** darf zusätzlich alles, was Supervisor darf, plus: Zugriff auf sämtliche Einstellungen (inklusive der Benutzerverwaltung selbst), Perioden abschliessen und wiedereröffnen sowie besonders geschützte Bereiche wie Identity-Provider, Reports und Kalenderregeln verwalten.

Die Zuweisung erfolgt über ein Dropdown in der Benutzerverwaltung (Zahnrad-Symbol) und wirkt sofort, ohne separaten Speichern-Klick.

## "Planer" als Funktion, nicht als Rolle

Im Alltag übernimmt meist ein Supervisor-Konto die eigentliche Planungsarbeit — Auto-Planung anstossen, im Plan-Raster per Drag & Drop anpassen, Tage oder Gruppen zur Genehmigung einreichen. Das ist keine eigene Berechtigungsstufe, sondern schlicht die Rechte, die ein Supervisor-Konto ohnehin hat.

## Gut zu wissen

- Der zuletzt angemeldete Benutzer wird in der Benutzerverwaltung mit angezeigt, kann dort aber nicht selbst bearbeitet, in seinen Rechten geändert oder gelöscht werden.
- Perioden endgültig abschliessen oder wiedereröffnen bleibt ausschliesslich Admin vorbehalten — auch wenn ein Supervisor Tage oder Gruppen bereits genehmigt hat.
- Ein Login-Konto muss nicht zwingend mit einer Mitarbeiter-Stammdatenkarte verknüpft sein — Benutzerverwaltung und Personenverwaltung sind getrennte Bereiche.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
