---
sidebar_position: 3
---

# Datenaufbewahrung

Unter Einstellungen > Datenaufbewahrung legen Sie fest, wie lange gelöschte Datensätze — Mitarbeitende, Adressen, Gruppen, Dienste, Arbeitszeiten, Absenzen, Pausen und weitere — im System erhalten bleiben, bevor sie unwiderruflich entfernt werden.

## So funktioniert es

**Zwei-Stufen-Löschung:** Wenn Sie einen Datensatz in Klacks löschen, wird er zunächst nur mit einer Soft-Delete-Markierung versehen (als gelöscht markiert, aber physisch noch vorhanden). Erst nach Ablauf der hier konfigurierten Frist entfernt ein täglich laufender Hintergrunddienst die als gelöscht markierten Zeilen **physisch und unwiderruflich** aus der Datenbank — über alle betroffenen Tabellen hinweg, nicht nur für einen einzelnen Bereich.

**Aufbewahrungsfrist einstellen:** Das Eingabefeld akzeptiert Werte zwischen 30 und 36'500 Tagen (rund 1 Monat bis 100 Jahre); daneben zeigt Klacks die Frist zusätzlich in Jahren/Monaten an. Der Standardwert ist 3'650 Tage (10 Jahre).

## Gut zu wissen

- Eine Verkürzung der Frist wirkt auch auf bereits bestehende, längst gelöschte Datensätze: Alles, was älter als die neue Frist ist, wird beim nächsten Lauf des Hintergrunddienstes entfernt — prüfen Sie vor einer Verkürzung, ob das gewünscht ist.
- Die physische Löschung ist endgültig — es gibt danach keine Wiederherstellung mehr, auch nicht durch den Support.
- Diese Einstellung ist der technische Unterbau der in der Datenschutzerklärung beschriebenen Löschfristen; sie gilt global für alle Soft-Delete-fähigen Datentypen, nicht pro Modul konfigurierbar.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
