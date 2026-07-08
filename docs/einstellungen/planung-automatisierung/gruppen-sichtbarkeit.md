---
sidebar_position: 5
---

Unter Einstellungen > Sichtbarkeit von Gruppen pro Benutzer legen Sie fest, welche Gruppen — und damit welche zugehörigen Daten — ein einzelner Benutzer sehen darf.

## So funktioniert es

Die Liste zeigt alle Benutzer mit Namen und der Anzahl ihnen zugewiesener (sichtbarer) Root-Gruppen. Ein Klick auf die Zahl öffnet ein Formular mit einer Checkbox-Liste aller Root-Gruppen; hier markieren Sie, welche Gruppen dieser Benutzer sehen darf. Wird eine Root-Gruppe freigegeben, gilt das automatisch auch für alle ihre Untergruppen.

Administratoren sind von dieser Einschränkung ausgenommen: Bei ihnen ist der Button deaktiviert, die angezeigte Zahl entspricht immer der Gesamtzahl aller Root-Gruppen — Admins sehen grundsätzlich alles.

## Gut zu wissen

- Bei einem normalen (Nicht-Admin) Benutzer ohne jede Zuweisung bedeutet „0 zugewiesene Gruppen": Dieser Benutzer sieht in gruppen-gescopten Bereichen (z. B. Dashboard, Kundenliste) aktuell **nichts** — das ist keine Fehlfunktion, sondern die direkte Folge der fehlenden Zuweisung.
- Ausnahme: Existieren im System aktuell **gar keine** Gruppen, sehen alle Benutzer alles — Installationen ohne Gruppenstruktur benötigen so keine Pflege dieser Einstellung.
- Legen Sie zuerst die Gruppenstruktur unter den Stammdaten an, bevor Sie hier Zuweisungen vornehmen — ohne bestehende Gruppen gibt es hier nichts anzukreuzen.
- Diese Einstellung steuert die **Sichtbarkeit** von Daten, nicht die grundsätzlichen **Berechtigungen** einer Rolle — Rollen/Rechte werden unabhängig davon verwaltet.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
