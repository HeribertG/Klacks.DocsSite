---
sidebar_position: 4
---

Der Ewigkeitskalender berechnet Feiertage für jedes Jahr automatisch — Sie definieren einmal die Regeln, Klacks kennt die Feiertage dann für alle kommenden Jahre.

## So funktioniert es

Jeder Feiertag wird über eine kurze Regel beschrieben. Es gibt zwei Grundarten:

- **Feste Daten** im Format `MM/DD`: `01/01` ist Neujahr, `08/01` der Schweizer Bundesfeiertag, `12/25` Weihnachten.
- **Oster-bezogene Daten** im Format `EASTER+XX` oder `EASTER-XX`: Das Osterdatum wird automatisch nach der Gaussschen Osterformel berechnet, der Feiertag als Abstand dazu. Beispiele: `EASTER-02` = Karfreitag, `EASTER+01` = Ostermontag, `EASTER+39` = Auffahrt, `EASTER+50` = Pfingstmontag, `EASTER+60` = Fronleichnam.

Zusätzlich gibt es **feste Daten mit Wochentag-Verschiebung** (`MM/DD+XX+WW` bzw. `MM/DD+XX-WW`) für Feiertage wie «erster Donnerstag im November» (`11/01+00+TH`) oder «letzter Montag im Mai» (`05/25+00-MO`).

Mit **SubRules** verschieben Sie einen Feiertag automatisch, wenn er auf einen bestimmten Wochentag fällt — z. B. `SA+2;SU+1`: Fällt der Tag auf Samstag oder Sonntag, rutscht er auf den Montag. Mehrere Regeln werden mit `;` getrennt.

Pro Regel erfassen Sie ausserdem Name und Beschreibung (mehrsprachig), Land und Kanton/Bundesland sowie die Checkboxen **Gesetzlicher Feiertag** und **Bezahlt**.

## Gut zu wissen

- Die Wochentag-Kürzel sind englisch: `SU`, `MO`, `TU`, `WE`, `TH`, `FR`, `SA`.
- SubRules sind vor allem dafür gedacht, Feiertage vom Wochenende auf den nächsten Werktag zu verschieben.
- Die Checkbox **Bezahlt** ist für die Lohnberechnung relevant.
- Über Land und Kanton/Bundesland steuern Sie regionale Unterschiede — der Karfreitag gilt z. B. in der Schweiz nicht in allen Kantonen (Ausnahmen: VS, TI).
- Die vorinstallierten Kalender-Pakete für Länder und Schweizer Kantone sind gegen Löschen gesperrt; eigene, selbst angelegte Kalenderauswahlen können Sie jederzeit löschen.

![Feiertagsregeln in Klacks](/img/app-calendar-de.png)

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
