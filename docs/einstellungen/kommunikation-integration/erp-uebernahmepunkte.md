---
sidebar_position: 5
---

Unter Einstellungen > ERP-Übernahmepunkte konfigurieren Sie, wie Bestellungen aus einem externen ERP-System als XML-Dateien automatisch in Klacks übernommen werden.

## So funktioniert es

**Drei Wege der Anlieferung:** Das ERP-System kann Dateien in der Dateiablage des Drop-Points bereitstellen (Klacks holt sie nach Zeitplan automatisch ab), sie per HTTP-POST direkt an einen Import-Endpoint pushen (authentifiziert mit einem Zugriffstoken), oder eine Administratorin lädt die XML-Datei manuell auf dieser Seite per Drag-and-drop hoch.

**Der Drop-Point** ist der zentrale, von Klacks selbst verwaltete Briefkasten für alle Import-Dateien — er zeigt drei Bereiche: Eingang (wartet auf den nächsten Lauf), Verarbeitet (Archiv) und Fehler (ungültige Dateien samt Fehlergrund, mit Möglichkeit zum erneuten Import). Ein Zeitplan (Cron-Ausdruck, Standard stündlich) sowie ein Aktiv-Schalter zum Pausieren steuern den automatischen Abruf.

**Zugriffstoken** werden nur benötigt, wenn ein ERP-System Dateien per Push anliefert. Jedes Token beginnt mit `klacks_erp_`, ist 1–730 Tage gültig (Standard 365) und wird im Klartext **nur einmal bei der Erstellung** angezeigt. Ein solches Token gilt ausschliesslich für den Import-Endpoint, nicht für den restlichen API-Zugriff, und kann jederzeit widerrufen werden.

**Verarbeitung:** Bestellungen werden anhand von Quellsystem-ID und externer Kundenreferenz (oder ersatzweise Firma/PLZ/Strasse) einem bestehenden oder neu angelegten Kunden zugeordnet und entstehen zunächst als Entwurf, den Planer prüfen und versiegeln müssen. Eine geänderte Neulieferung einer bereits versiegelten Bestellung schliesst die alte automatisch ab und legt eine neue, verknüpfte Version an; unveränderte Wiederholungslieferungen lösen nichts aus.

## Gut zu wissen

- Fehlerhafte einzelne Bestellungen (z. B. ohne Wochentag oder mit doppelter Referenz) werden abgelehnt, ohne die übrigen gültigen Bestellungen derselben Datei zu blockieren; die gesamte Datei landet dann trotzdem im Fehler-Bereich, damit nichts übersehen wird.
- Verarbeitete Dateien werden archiviert, nicht gelöscht.
- Das genaue XML-Format (Pflichtfelder, Datumsformate, Wochentags-Logik) ist im Handbuch direkt auf der Einstellungsseite sowie über eine herunterladbare Beispieldatei dokumentiert.
- Diese Konfiguration liegt im Einstellungen-Bereich und ist damit administrativen Rollen vorbehalten.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
