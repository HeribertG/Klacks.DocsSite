---
sidebar_position: 3
---

Der Ressourcen-Monitor zeigt auf einen Blick, wie es um die Personalauslastung einer Gruppe (oder aller Gruppen) im gewählten Jahr steht — pro Tag ein Balken, über 365 Tage der ganze Jahresverlauf.

## So funktioniert es

Die Darstellung folgt dem in der Personalplanung etablierten «Capacity vs. Workload Chart» (in der Projektmanagement-Literatur als «Resource Histogram» bekannt). Die Elemente:

- **Grüne Balken — Dienste:** Anzahl geplanter Dienste am Tag. Jeder Dienst zählt als eine Mitarbeiter-Position; Container-Dienste zählen als 1.
- **Graue Balken — Absenzen:** Anzahl abwesender Mitarbeitender, gestapelt auf die grünen Balken. Eine volle Ferien- oder Krankheitseintragung zählt als 1, eine halbe als 0.5 — auch am Wochenende.
- **Rosa gepunktete Linie — Gewünschte Einsatzbereitschaft:** Wie viele Mitarbeitende im Schnitt verfügbar wären, wenn die gewünschten Arbeitstage pro Woche eingehalten werden (Standard: 5 Tage Arbeit, 2 Tage Ruhe). Das ist das Planungsziel.
- **Rot gestrichelte Linie — Maximale Einsatzbereitschaft:** Das physische/legale Maximum bei maximal zulässigen aufeinanderfolgenden Arbeitstagen (Standard: 6). Liegt immer auf oder über der rosa Linie.
- **Blaue Linie — Anzahl Mitarbeitende:** Gesamte Belegschaft mit aktivem Vertrag am jeweiligen Tag (Headcount).

**Lesart:** Nähert sich die Oberkante der grünen Balken der rosa Linie, ist die Belegschaft optimal eingesetzt. Die Differenz zwischen blauer Linie und der Oberkante der gestapelten Balken ist Ihre Reserve.

Mit den Pfeil-Buttons oben rechts wechseln Sie das Jahr; über die Gruppen-Auswahl grenzen Sie auf einen Standort oder ein Team ein.

## Gut zu wissen

- Erfahrungswert: Die Oberkante der grauen Absenz-Balken sollte nicht mehr als ein Drittel der Lücke zwischen Diensten und Gesamtbelegschaft ausmachen — sonst ist die operative Reserve gefährdet und Krankheits- oder Ferienspitzen lassen sich schwer auffüllen.
- Die Werte sind Schätzungen und Annäherungen, keine exakte Abrechnung — sie geben einen Eindruck der Verfügbarkeit.
- Die Dienste stammen aus der Planung, nicht aus der Realisierung — dadurch sind auch zukünftige Dienste sichtbar.
- Bei einem 24/7-Vertrag wird die rosa Linie über die Woche geglättet (ca. 0.71 pro Person und Kalendertag); bei einem Mo–Fr-Vertrag steht sie an Werktagen auf 1.0, am Wochenende auf 0.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
