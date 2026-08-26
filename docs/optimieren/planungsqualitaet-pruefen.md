---
sidebar_position: 7
---

# Planungsqualität prüfen: Verstösse, Lücken und Übersprungenes

Nach einem Lauf der Planungsassistenten legt Klacks drei Diagnose-Tabellen neben das Ergebnis: wo der Plan an eine Regel stösst, wo eine Qualifikation fehlt und was gar nicht erst eingeplant wurde.

## So funktioniert es

Die drei Berichte erscheinen im Dialog des jeweiligen Planungsassistenten — nicht im Plan-Raster. Sie gehören zum Ergebnis eines Assistenten-Laufs und sind nur für Administratoren sichtbar, weil die automatische Planung insgesamt die Admin-Rolle voraussetzt. Jeder Bericht nennt die Anzahl seiner Einträge im Titel und **wird gar nicht erst angezeigt, wenn er nichts gefunden hat** — ein fehlender Kasten ist also eine gute Nachricht.

**So erreichen Sie die Dialoge:** Der Zauberstab-Button im Schichtplan startet im Grundzustand direkt einen Planungslauf, ohne einen Dialog zu zeigen. Mit **Strg+Umschalt+H** schalten Administratoren den Button auf ein Dropdown mit den einzelnen Planungsassistenten (Plan, Fuzzy Harmonizer, Holistic Harmonizer, Background Optimizer, Recovery) um — erst über dieses Dropdown öffnen sich die Dialoge mit den Diagnose-Tabellen.

**Qualifikations-Lücken** erscheinen zusammen mit dem Ergebnis, also *bevor* Sie es übernehmen. Spalten: Schweregrad, Schicht, Datum, Erforderliche Qualifikation, Grund — plus eine Spalte „Mitarbeiter", sobald mindestens eine Zeile eine Person nennt. Als Grund steht *Nicht vorhanden*, *Abgelaufen* oder *Stufe zu niedrig*. Dahinter liegen zwei verschiedene Fälle: Entweder blieb ein Schichtplatz leer, weil niemand Verfügbares die geforderte Qualifikation mitbringt — dann nennt die Zeile keine Person. Oder eine Person blieb auf einer Schicht, für die sie nicht qualifiziert ist — dann steht ihr Name dabei. Fehlt die Qualifikation nur im System, hinterlegen Sie sie bei der Person; der [Qualifikationskatalog](../einstellungen/stammdaten-organisation/qualifikationen.md) beschreibt, wie Qualifikationen gepflegt werden. Andernfalls planen Sie jemand anderes ein oder passen die Anforderung der Schicht an.

**Compliance-Verstösse** erscheinen, *nachdem* Sie das Ergebnis übernommen haben. Spalten: Datum, Mitarbeiter, Kommentar; der Kommentar benennt die verletzte Regel im Klartext samt den konkreten Werten. Rote Zeilen sind Fehler, gelbe Warnungen und Hinweise. Bei den beiden Harmonie-Assistenten zeigt der Bericht ausschliesslich, was das neue Szenario gegenüber dem echten Plan **zusätzlich** einbringt — und darüber, wie viele dieser Verstösse im Block-Modus geführt werden. Diese verhindern, dass das Szenario übernommen wird, bis sie behoben oder von einer berechtigten Person ausdrücklich überschrieben werden.

**Übersprungene Platzierungen** gibt es nur beim Assistenten für die Schichtplanung, ebenfalls nach dem Übernehmen — und durchgehend rot. Spalten: Datum, Mitarbeiter, Schicht, Grund. Hier steht nicht, was geplant wurde, sondern was Klacks bewusst **nicht** geschrieben hat: Zuweisungen, die eine im Block-Modus geführte Regel verletzt hätten. Der Grund erscheint als kurze Kategorie („Ruhezeit zu kurz", „Zu viele aufeinanderfolgende Arbeitstage", „Zeitkollision" …). Je nach Situation bietet Klacks berechtigten Personen darunter an, den Lauf mit Override doch noch zu übernehmen; alle anderen erhalten den Hinweis, den Assistenten mit aktiviertem Override zu wiederholen oder eine berechtigte Person darum zu bitten. Jeder Override wird protokolliert.

Welche Regeln geprüft werden und wie streng sie gelten, legen Sie in den [Planungsregeln](../planen/planungsregeln.md) fest; wie der Plan überhaupt entsteht, beschreibt [Auto-Planung: Der Plan in Sekunden](../planen/auto-planung.md).

## Gut zu wissen

- Ein blockierter Eintrag verwirft nicht den ganzen Plan: Nur die betroffenen Zuweisungen fallen weg, die sauberen Einträge derselben Person werden trotzdem geschrieben.
- Beim Schweregrad der Qualifikations-Lücken gilt eine einfache Regel: **Fehler** nur, wenn eine als zwingend markierte Qualifikation völlig fehlt. Eine abgelaufene Qualifikation, eine zu niedrige Stufe und jede optionale Anforderung erscheinen als **Warnung**.
- Ein leerer Schichtplatz taucht in den Qualifikations-Lücken nur auf, wenn wirklich niemand Verfügbares in Frage kam. Blieb er aus anderen Gründen leer, ist das gewöhnliche Unterdeckung und wird hier nicht gemeldet.
- Läuft die automatische Planung als Gesamtlauf durch, meldet Klacks das Ergebnis nur als kurze Einblendung samt Anzahl der Qualifikations-Lücken — die ausführlichen Tabellen gehören zu den Dialogen der einzelnen Assistenten.
- Die Berichte sind reine Ansichten: Sie lassen sich nicht bearbeiten und ändern nichts. Korrigiert wird im [Plan-Raster: Ihre interaktive Zeit-Matrix](../planen/plan-raster.md) oder durch einen erneuten Lauf.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
