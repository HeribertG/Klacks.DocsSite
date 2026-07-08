---
sidebar_position: 7
---

# Makros

Zuschläge für Nacht-, Sonn- und Feiertagsarbeit oder die exakte Stundenberechnung bei Ferien und Militär lassen sich nicht mit einer festen Formel für jeden Betrieb abdecken. Unter Einstellungen > Makros schreiben Sie dafür eigene kleine Skripte in einer BASIC-ähnlichen Sprache.

## So funktioniert es

**Wozu Makros dienen:** Ein Makro berechnet aus den Daten eines Dienstes (Work) oder einer Beschäftigung einen einzelnen Rückgabewert — typischerweise einen Zuschlag in Stunden oder Franken. Das Ergebnis wird in `Work.Surcharges` gespeichert und fliesst automatisch in die Stundenauswertung (ClientPeriodHours) ein. Jedes Makro gehört zu einem Typ — Schicht/Beschäftigung oder Arbeitsregeln — und lässt sich benennen, bearbeiten und löschen wie jede andere Einstellung.

**Verfügbare Daten:** Über `IMPORT` stehen im Skript u. a. `hour` (Arbeitsstunden), `fromhour`/`untilhour` (Start-/Endzeit als Dezimalstunden), `weekday` (ISO-8601: 1 = Montag … 7 = Sonntag), `holiday`/`holidaynextday` (aktueller bzw. folgender Tag ein Feiertag) sowie die im Vertrag hinterlegten Zuschlagssätze `nightrate`, `holidayrate`, `sarate` (Samstag) und `sorate` (Sonntag) zur Verfügung.

**Sprachumfang:** Die Skriptsprache kennt Kontrollstrukturen (`IF…THEN…ELSEIF…ELSE…ENDIF`, `SELECT CASE`, `FOR…NEXT`, `DO…LOOP`), eigene Funktionen (`FUNCTION`) und Prozeduren (`SUB`, müssen vor ihrem ersten Aufruf definiert sein) sowie eingebaute String-, Mathematik-, Trigonometrie- und Zeitfunktionen (z. B. `TimeToHours`, `TimeOverlap` für Zeiträume über Mitternacht). Das Ergebnis wird per `OUTPUT typ, wert` zurückgegeben.

**Testen im Editor:** Der Makro-Editor hat einen eigenen Testen-Tab: Sie tragen Beispielwerte für die importierten Variablen ein, prüfen die Syntax und führen das Skript testweise aus. `DEBUGPRINT`/`DEBUGCLEAR` geben zusätzliche Werte im Test-Fenster aus, ohne den eigentlichen Rückgabewert zu beeinflussen.

**Sicherheit:** Der Interpreter läuft in einer Sandbox ohne Zugriff auf Dateisystem oder Netzwerk — ein Makro kann die Berechnung falsch machen, aber keinen Schaden ausserhalb der Berechnung anrichten.

## Gut zu wissen

- `DIM` deklariert eine Variable, initialisiert sie aber nicht gleichzeitig — `DIM x = 10` ist ein Syntaxfehler, erst `DIM x` und dann separat `x = 10`.
- Schlüsselwörter wie `ENDIF`, `ENDFUNCTION` und `ENDSUB` werden zusammengeschrieben, nicht mit Leerzeichen.
- `weekday` folgt durchgängig ISO-8601 (1 = Montag … 7 = Sonntag) — bei eigenen `SELECT CASE`-Abfragen für "Wochenende" sind das die Werte 6 (Samstag) und 7 (Sonntag).

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
