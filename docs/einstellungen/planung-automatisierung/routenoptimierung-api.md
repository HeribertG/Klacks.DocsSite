---
sidebar_position: 4
---

Unter Einstellungen > OpenRoute hinterlegen Sie den API-Schlüssel für den externen Dienst openrouteservice.org, den Klacks für die Routenoptimierung nutzt.

## So funktioniert es

OpenRouteService berechnet Reisezeiten und Entfernungen — für Autofahrten, Radfahren und zu Fuss — und liefert damit die Grundlage für die Routenoptimierung in Klacks. Sie tragen im einzigen Feld dieser Seite Ihren persönlichen API-Schlüssel ein. Einen kostenlosen Schlüssel erhalten Sie über den auf der Seite verlinkten Registrierungs-Link zu openrouteservice.org.

## Gut zu wissen

- Der Schlüssel wird direkt aus dem Browser an openrouteservice.org gesendet und deshalb bewusst **im Klartext** angezeigt statt maskiert (`***`) — anders als z. B. E-Mail-Passwörter. Das ist so vorgesehen, damit Sie einen versehentlichen Tippfehler oder abgelaufenen Schlüssel erkennen können, kein Darstellungsfehler.
- In der Datenbank wird der Schlüssel trotzdem verschlüsselt gespeichert.
- Ohne gültigen Schlüssel funktioniert die Routenoptimierung nicht — Reisezeiten und Distanzen können dann nicht berechnet werden.
- Für die reine Umwandlung von Adressen in Koordinaten (Geocoding) nutzt Klacks einen anderen, separaten Dienst — dieser Schlüssel ist ausschliesslich für die Routenberechnung zuständig.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
