---
sidebar_position: 4
---

# Routenoptimierung-API

Unter Einstellungen > OpenRoute hinterlegen Sie den API-Schlüssel für den externen Dienst openrouteservice.org, den Klacks für die Routenoptimierung nutzt.

## So funktioniert es

OpenRouteService berechnet Reisezeiten und Entfernungen — für Autofahrten, Radfahren und zu Fuss — und liefert damit die Grundlage für die Routenoptimierung in Klacks. Sie tragen im einzigen Feld dieser Seite Ihren persönlichen API-Schlüssel ein. Einen kostenlosen Schlüssel erhalten Sie über den auf der Seite verlinkten Registrierungs-Link zu openrouteservice.org.

## Gut zu wissen

- Der Schlüssel bleibt auf dem Klacks-Server: Routenanfragen an openrouteservice.org stellt der Server, der Browser erhält den Schlüssel nie. Nach dem Speichern wird er deshalb nur maskiert angezeigt (`***`), wie z. B. E-Mail-Passwörter.
- In der Datenbank wird der Schlüssel verschlüsselt gespeichert.
- Ohne gültigen Schlüssel berechnet Klacks Fahrzeiten und Distanzen über den öffentlichen OSRM-Server, der nur für Autofahrten genaue Zeiten liefert; ist auch dieser nicht erreichbar, schätzt Klacks die Werte aus der Luftlinie.
- Für die reine Umwandlung von Adressen in Koordinaten (Geocoding) nutzt Klacks einen anderen, separaten Dienst — dieser Schlüssel ist ausschliesslich für die Routenberechnung zuständig.

---
*Direkt ausprobieren: [Klacks Playground](https://play.klacks-software.ch) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
