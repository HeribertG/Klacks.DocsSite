---
sidebar_position: 7
---

# Überstunden

Unter Einstellungen > Compliance & Zuschlagsregeln (Expertenmodus) > Überstunden legen Sie fest, ab wie vielen angesammelten Stunden Mehrarbeit zuschlagspflichtig wird und wie hoch der Zuschlag je Stufe ausfällt.

## So funktioniert es

**Berechnungsbasis:** Täglich oder Wöchentlich — mehr gibt es nicht. Eine monatliche oder jährliche Basis ist nicht vorgesehen. Bei "Wöchentlich" beginnt die Woche am konfigurierten ersten Wochentag.

**Bis zu drei Stufen:** Jede Stufe besteht aus zwei Feldern — "Stufe X ab Stunden" (die angesammelte Stundenzahl im Tag bzw. in der Woche, ab der diese Stufe greift) und "Stufe X Zuschlag" in Prozent. Die jeweils höchste konfigurierte Stufe ist nach oben offen.

**Jede Stufe zählt nur die Stunden innerhalb ihrer eigenen Spanne**, nicht alle Stunden ab null. Beginnt Stufe 1 bei 8 Stunden und Stufe 2 bei 10 Stunden, zahlt ein zehneinhalbstündiger Tag die Stufe-1-Rate für die zwei Stunden zwischen 8 und 10 und die Stufe-2-Rate nur für die halbe Stunde darüber — nie die Stufe-2-Rate für alle zehneinhalb Stunden. Ein einzelner Arbeitsblock kann so mehrere Zuschlagsposten erzeugen, je einen pro erreichter Stufe.

**Eine unvollständige Stufe wird stillschweigend übersprungen:** Fehlt die Stunden-Angabe, oder ist der Zuschlag null oder negativ, zählt diese Stufe nicht mit. Es können also null bis drei Stufen tatsächlich aktiv sein.

**Der Zuschlag ist der Aufschlag, nicht der Gesamtbetrag:** 25 % bedeuten ein Viertel einer Stunde zusätzlich pro in dieser Stufe gearbeiteter Stunde — nicht, dass die Stunde mit dem Faktor 1,25 bezahlt wird. Der Zuschlagsmodus daneben (Multiplikator oder Fixbetrag pro Stunde) bestimmt nur die Einheit; die Rechnung dahinter bleibt gleich.

**Was als bereits gearbeitete Stunden zählt:** Die Stufen werden anhand der zuvor am selben Tag bzw. in derselben Woche geleisteten Stunden gefüllt — sortiert zuerst nach Datum, dann nach Startzeit. So belegt jeder Arbeitsblock seine eigene Position in der Spanne, und keine Stunde wird doppelt einer höheren Stufe zugerechnet. Ändert sich ein früherer Eintrag, werden die späteren neu berechnet.

**Woher die Werte stammen:** Diese Karte liefert die unternehmensweiten Werte — sie gelten nur, wenn keine andere Quelle vorgeht. Ist dem Vertrag der Person eine [Planungsregel](../../planen/planungsregeln.md) mit eigenen Überstunden-Stufen zugeordnet, hat diese Vorrang; eine für das jeweilige Datum gültige spätere Fassung dieser Regel ersetzt bei Bedarf den kompletten Satz, fällt aber ohne eigenen Überstunden-Block auf die hier gezeigten Firmeneinstellungen zurück, nicht auf die Planungsregel. Ist nirgends eine Stufe konfiguriert, dient als letzter Fallback nur die **Überstundengrenze** aus der Planungsregel — und zwar ausschliesslich als Startwert der ersten Stufe, nie als Zuschlagssatz. Die Quellen werden nie gemischt: Wer die erste Stufe liefert, liefert auch alle weiteren.

**Zwei Bedingungen, ohne die kein Zuschlag entsteht:**

- Der Dienst braucht ein Berechnungsmakro. Arbeit auf einem Dienst ohne Makro wird nie auf Mehrstunden geprüft.
- Mindestens eine vollständige Stufe muss konfiguriert sein. Ohne eine solche Stufe ist das Ergebnis nicht "null Überstunden", sondern es findet gar keine Prüfung statt.

**Ausgenommen:** Korrekturen und Einspringer werden nie auf Überstunden geprüft — nur reguläre Arbeit fliesst ein.

**Zusammentreffen mit anderen Zuschlägen:** Dieselbe Stunde kann gleichzeitig für Mehrstunden und für einen umstandsbezogenen Zuschlag qualifizieren, etwa Nacht- oder Wochenendarbeit. Ob beide addiert werden oder nur der höhere gilt, entscheidet nicht diese Karte, sondern das Berechnungsmakro des jeweiligen Dienstes.

**Speicherung:** Die Karte liegt im Abschnitt Compliance & Zuschlagsregeln der Einstellungsseite (zusammen mit Ersatzruhe, Zuschlagsmodus und Compliance-Durchsetzung), sichtbar nur im Expertenmodus. Änderungen werden gesammelt und über die gemeinsame Speicherleiste der Einstellungsseite gespeichert oder verworfen — es gibt keinen eigenen Speichern-Button auf dieser Karte.

## Gut zu wissen

- Diese Karte deckt ausschliesslich die automatische Überstunden-Staffelung nach Tages- oder Wochenschwelle ab. Zuschläge für Nacht-, Sonn- oder Feiertagsarbeit werden dagegen generisch per Skript berechnet — siehe [Makros](../klacksy-konfiguration/makros.md).
- Eine Stufe ohne "ab Stunden"-Wert oder mit einem Zuschlag von 0 % oder weniger wird ignoriert — so lassen sich einzelne Stufen deaktivieren, ohne sie zu löschen.
- Ohne mindestens eine vollständige Stufe und ohne Berechnungsmakro am Dienst entstehen grundsätzlich keine Überstunden-Zuschläge, auch nicht bei sehr langen Diensten.
- Eine Planungsregel mit eigenen Überstunden-Stufen überschreibt diese unternehmensweiten Werte vollständig, nicht nur einzelne Stufen.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
