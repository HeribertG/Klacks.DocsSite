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

Zeitfenster werden dabei eingehalten: Wenn ein Klient nur vormittags besucht werden kann, plant Klacks die Tour entsprechend.

## Gut zu wissen

- Die Tourenoptimierung greift auch bei der Auto-Planung: Wegstrecken fliessen in die Bewertung der Plan-Varianten ein.
- Verkehrsmittel sind pro Tour wählbar — praktisch für städtische Velo-Touren neben ländlichen Auto-Touren.
- Fällt jemand aus, zeigt Klacks sofort, wer qualifiziert und verfügbar ist und welche Route am besten passt.

![Timeline-Ansicht für die Tourenplanung](/img/app-timeline-de.png)

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
