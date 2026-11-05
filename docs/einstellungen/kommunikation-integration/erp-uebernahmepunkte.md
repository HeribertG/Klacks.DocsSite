---
sidebar_position: 5
---

# ERP-Übernahmepunkte

Unter Einstellungen > Import (nur im Expertenmodus sichtbar), Karte „ERP-Übergabepunkte“, konfigurieren Sie, wie Bestellungen aus einem externen ERP-System als XML-Dateien automatisch in Klacks übernommen werden.

## So funktioniert es

**Drei Wege der Anlieferung:** Das ERP-System kann XML-Dateien in einen Ordner auf dem Klacks-Server legen (Klacks holt sie nach Zeitplan automatisch ab, sobald eine Datei 10 Sekunden unverändert ist), sie per HTTPS-POST direkt an einen Import-Endpoint pushen (authentifiziert mit einem Zugriffstoken), oder eine Administratorin lädt die XML-Datei manuell auf dieser Seite per Drag-and-drop hoch (der Import startet sofort). Es gibt kein SFTP; importiert werden nur XML-Dateien im Format `ErpOrderImport`.

**Der Drop-Point** ist der zentrale, von Klacks selbst verwaltete Briefkasten für alle Import-Dateien — er zeigt drei Bereiche: Eingang (empfangen oder gerade im Import), Verarbeitet (mit Zusammenfassung pro Datei) und Fehler (nicht lesbare oder ungültige Dateien samt Fehlergrund, mit Möglichkeit zum erneuten Import oder Löschen). Ein Zeitplan (Cron-Ausdruck, Standard stündlich) sowie ein Aktiv-Schalter zum Pausieren steuern den automatischen Abruf.

**Welcher Weg passt zu welcher Installation?** Auf einem Büro-PC (Windows-Installation) ist die Ordner-Ablage der naheliegende Weg; der Standardordner ist `C:\ProgramData\Klacks\ErpImport\erp\orders`. Er ist geschützt, nur SYSTEM und Administratoren dürfen dort schreiben: Ein Administrator muss dem Konto, unter dem der ERP-Export läuft, das Recht „Ändern“ genau auf den Ordner `erp\orders` geben, nicht auf den ganzen Ordner `ProgramData\Klacks`. Auf einem eigenen Docker-Server ist der Ordner ein normaler Ordner des Servers: Die Compose-Datei bindet den Ordner `erp-import` neben `docker-compose.yml` (änderbar über `KLACKS_ERP_IMPORT_HOST_DIR`) nach `/app/ErpImport` ein, im Container heisst der Ablageordner `/app/ErpImport/erp/orders`. Die Installation meldet den Server-Pfad über `KLACKS_ERP_IMPORT_HOST_PATH` (der Installer setzt ihn); ein ERP auf dem Server-Rechner schreibt direkt in diesen Ordner, und das Konto, unter dem der Export läuft, braucht Schreibrecht auf genau diesen Ordner. Ältere Installationen hatten ein benanntes Volume; dessen Inhalt wird einmalig in den Ordner kopiert (siehe On-Prem-README, Abschnitt „Upgrading from a named volume“). Auf der Karte steht der Ordnerpfad (auf Docker der Server-Ordner, darunter der Pfad im Container) mit einem Knopf zum Kopieren. Bei einer von uns gehosteten Installation gibt es keinen Zugriff auf Ordner des Servers: Push mit Zugriffstoken oder manueller Upload.

**Zugriffstoken** werden nur benötigt, wenn ein ERP-System Dateien per Push anliefert. Jedes Token beginnt mit `klacks_erp_`, ist 1–730 Tage gültig (Standard 365) und wird im Klartext **nur einmal bei der Erstellung** angezeigt. Ein solches Token gilt ausschliesslich für den Import-Endpoint, nicht für den restlichen API-Zugriff, und kann jederzeit widerrufen werden.

**Verarbeitung:** Bestellungen werden anhand von Quellsystem-ID und externer Kundenreferenz (oder ersatzweise Firma/PLZ/Strasse) einem bestehenden oder neu angelegten Kunden zugeordnet und entstehen zunächst als Entwurf, den Planer prüfen und versiegeln müssen. Eine geänderte Neulieferung einer bereits versiegelten Bestellung schliesst die alte automatisch ab und legt eine neue, verknüpfte Version an; unveränderte Wiederholungslieferungen lösen nichts aus.

## Gut zu wissen

- Fehlerhafte einzelne Bestellungen (z. B. ohne Wochentag oder mit doppelter Referenz) werden abgelehnt, ohne die übrigen gültigen Bestellungen derselben Datei zu blockieren; die Datei erscheint trotzdem im Bereich Verarbeitet, markiert mit einem Warn-Symbol, und die abgelehnten Bestellungen lassen sich mit ihrem Grund aufklappen.
- Dateien werden nicht verschoben oder archiviert: Sie bleiben im Ordner, ihr Status steht in der Datenbank. Erfolgreich verarbeitete Dateien werden nach 90 Tagen automatisch gelöscht; Dateien im Bereich Fehler bleiben, bis sie erneut importiert oder gelöscht werden.
- Das genaue XML-Format (Pflichtfelder, Datumsformate, Wochentags-Logik) ist im Handbuch direkt auf der Einstellungsseite sowie über eine herunterladbare Beispieldatei dokumentiert.
- Diese Konfiguration liegt im Einstellungen-Bereich und ist damit administrativen Rollen vorbehalten.

---
*Direkt ausprobieren: [Klacks Playground](https://play.klacks-software.ch) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
