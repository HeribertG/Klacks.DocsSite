---
sidebar_position: 1
---

# Touren- und Routenoptimierung

Für mobile Einsätze — Spitex-Touren, Sicherheitsrundgänge, Reinigungsobjekte, Auslieferungen — plant Klacks nicht nur *wer*, sondern auch *in welcher Reihenfolge*.

## So funktioniert es

Jeder Einsatzort ist mit seiner Adresse hinterlegt; Klacks kennt also die Wege. Ein **Ameisenalgorithmus** (ein bewährtes Optimierungsverfahren für Routenprobleme) rechnet aus den Einsatzadressen die sinnvollste Reihenfolge aus:

1. **Adressen erfassen** — einmalig bei den Einsatzorten hinterlegen
2. **Reihenfolge optimieren** — Klacks legt die kürzeste sinnvolle Abfolge fest; Umwege und Leerfahrten fallen weg
3. **Auf der Karte anzeigen** — die fertige Tour erscheint als Route, wahlweise für Auto, Velo oder zu Fuss

Sind für einen Einsatz feste Zeitfenster hinterlegt (z.B. nur vormittags), fliesst das in die Tourenplanung mit ein — eine harte Garantie für die Einhaltung ist das aber nicht.

## Gut zu wissen

- Für die Distanz- und Fahrzeitberechnung kann Klacks den externen Dienst OpenRouteService einbinden (GPS-Koordinaten werden dabei anonymisiert übermittelt) — je nach Konfiguration der Instanz.
- Die Tourenoptimierung ist ein eigenständiger Baustein für die Container-Dienste; die allgemeine Auto-Planung des Schichtplans bewertet unabhängig davon Abdeckung, Fairness und Regel-Konformität.
- Verkehrsmittel sind pro Tour wählbar — praktisch für städtische Velo-Touren neben ländlichen Auto-Touren.
- Fällt jemand aus, zeigt Klacks sofort, wer qualifiziert und verfügbar ist.

![Timeline-Ansicht für die Tourenplanung](/img/app-timeline-de.png)

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
