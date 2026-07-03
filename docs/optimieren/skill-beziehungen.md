---
sidebar_position: 5
---

Der KI-Assistent Klacksy lernt aus der täglichen Nutzung, welche seiner Fähigkeiten (Skills) zusammengehören — und wählt dadurch beim nächsten Mal die passenden Skills gezielter aus.

## So funktioniert es

Klacksy beobachtet im Hintergrund, welche Skills in einer Sitzung häufig zusammen oder nacheinander verwendet werden, und leitet daraus **Beziehungen** ab. Der Lernprozess läuft automatisch alle 6 Stunden. Die Seite Skill-Beziehungen zeigt alle erkannten Beziehungen; Administratoren entscheiden, ob sie übernommen oder verworfen werden.

**Beziehungstypen**
- *Aufeinanderfolgend:* Skill A wird regelmässig vor Skill B verwendet.
- *Gemeinsam nötig:* Beide Skills kommen häufig in derselben Sitzung vor, ohne feste Reihenfolge.

**Quelle**
- *Gelernt:* Aus echten Nutzungsdaten errechnet — hohe Verlässlichkeit.
- *Abgeleitet:* Aus der Struktur der Skills logisch erschlossen, noch nicht durch Nutzungsdaten bestätigt.

**Status**
- *Kandidat:* Neu erkannt, wartet auf Ihre Entscheidung.
- *Aktiv:* Übernommen — beeinflusst Klacksy aktiv.
- *Ausgemustert:* Verworfen — wird ignoriert.

Die **Konfidenz** (0–100 %) zeigt, wie sicher sich Klacksy bei einer Beziehung ist. Sie steigt mit jeder Sitzung, die das Muster bestätigt (**Bestätigungen**), und sinkt bei Sitzungen, die dagegensprechen (**Widersprüche**).

## Gut zu wissen

- Übernehmen Sie eine Beziehung, wenn sie inhaltlich sinnvoll ist — beide Skills gehören tatsächlich zusammen und das Muster entspricht Ihrem gewünschten Arbeitsablauf.
- Verwerfen Sie Beziehungen, die zufällig entstanden sind oder in Ihrem Kontext nicht zusammengehören (z. B. durch Test-Sessions).
- Faustregel: Nur *gelernte* Beziehungen mit hoher Konfidenz lohnen sich typischerweise zu übernehmen. Abgeleitete Kandidaten mit wenig Unterstützung verwerfen Sie besser, bis mehr Nutzungsdaten vorliegen.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
