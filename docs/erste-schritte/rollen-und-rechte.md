---
sidebar_position: 4
---
# Rollen und Rechte

Klacks kennt zwei **zuweisbare** Rollen — **Supervisor** und **Admin**. Dazu kommt eine dritte, feste Stufe: ein Konto **ohne** Rolle erhält automatisch einen Grundumfang und heisst im Alltag **Planer**. Diese drei Stufen sind alles, was es gibt; jede weitere Bezeichnung beschreibt eine Tätigkeit, nicht eine zusätzliche Berechtigung.

## Die drei Stufen

**Admin** darf alles: Zugriff auf sämtliche Einstellungen inklusive der Benutzerverwaltung, Anlegen, Bearbeiten **und Löschen** in allen Bereichen, Perioden abschliessen und wiedereröffnen sowie besonders geschützte Bereiche wie Identity-Provider, Reports und Kalenderregeln verwalten.

**Supervisor** darf anlegen und bearbeiten: Klienten, Gruppen, Verträge und Dienste. Dazu Plantafel und Schichtplan bearbeiten, die Auto-Planung auslösen, Klacksy nutzen, Notizen zu Klienten führen sowie Automatisierungen und Zugangsschlüssel verwalten. Was Supervisor **nicht** darf: Einstellungen ändern und löschen. Einzelne Löschvorgänge sind für Supervisor freigegeben, die allgemeine Regel ist es nicht — Löschen ist Admins vorbehalten.

**Planer** — also jedes angemeldete Konto ohne zugewiesene Rolle — sieht Klienten, Gruppen, Verträge, Dienste und den Schichtplan und darf den Schichtplan bearbeiten sowie die Planung auslösen. Dazu Notizen zu Klienten führen und Klacksy nutzen. Was Planer **nicht** darf: Stammdaten anlegen oder ändern, Einstellungen öffnen, Automatisierungen oder Zugangsschlüssel verwalten.

Kurz gefasst:

| | Admin | Supervisor | Planer |
|---|---|---|---|
| Einstellungen | ja | – | – |
| Stammdaten anlegen/bearbeiten | ja | ja | – |
| Stammdaten löschen | ja | nur einzeln freigegebene Fälle | – |
| Schichtplan bearbeiten und planen | ja | ja | ja |
| Notizen zu Klienten | ja | ja | ja |
| Klacksy (KI-Assistent) | ja | ja | ja |
| Automatisierungen und Zugangsschlüssel | ja | ja | – |
| Perioden abschliessen | ja | – | – |

Die Zuweisung erfolgt über ein Dropdown in der Benutzerverwaltung (Zahnrad-Symbol) und wirkt sofort, ohne separaten Speichern-Klick.

## Woher die Grenzen kommen

Die Oberfläche zeigt nur, was Sie auch dürfen: Menüpunkte, Schaltflächen und Formulare erscheinen abhängig von Ihren Rechten. Prüfen Sie eine Berechtigung nicht am Aussehen einer Seite, sondern am Verhalten — selbst wenn eine Schaltfläche sichtbar wäre, entscheidet der Server.

## Gut zu wissen

- **Ein Konto ohne Rolle ist keine Sackgasse und kein Sicherheitsloch.** Ein Planer-Konto kann den Schichtplan bearbeiten und die Planung auslösen — genau die Arbeit, für die es gedacht ist; die Stammdaten bleiben unberührt.
- **Der zuletzt angemeldete Benutzer** wird in der Benutzerverwaltung mit angezeigt, kann dort aber nicht selbst bearbeitet, in seinen Rechten geändert oder gelöscht werden.
- **Perioden endgültig abschliessen oder wiedereröffnen** bleibt ausschliesslich Admin vorbehalten — auch wenn ein Supervisor Tage oder Gruppen bereits genehmigt hat.
- **Ein Login-Konto muss nicht zwingend mit einer Mitarbeiter-Stammdatenkarte verknüpft sein** — Benutzerverwaltung und Personenverwaltung sind getrennte Bereiche.
- **Rechte gelten auch für den KI-Assistenten.** Klacksy führt Sie nicht in Formulare, die Sie nicht speichern dürfen, und führt für Sie keine Aktionen aus, für die Ihnen das Recht fehlt.

---

*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
