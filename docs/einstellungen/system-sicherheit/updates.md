---
sidebar_position: 4
---

# Updates

Unter Einstellungen > Updates sehen Sie die aktuell installierte und die neueste verfügbare Klacks-Version, steuern das automatische Update-Verhalten und lösen bei Bedarf manuell ein Update oder einen Rollback aus.

## So funktioniert es

**Status:** Die Karte zeigt die aktuelle Version, ob eine neuere Version verfügbar ist, sowie die laufende oder zuletzt ausgeführte Update-Operation samt Status.

**Update auslösen oder zurückrollen:** Über "Jetzt installieren" starten Sie ein verfügbares Update manuell; "Rückgängig machen" macht die letzte erfolgreiche Update-Operation rückgängig. Beide Aktionen sind gesperrt, solange bereits eine Operation läuft.

**Automatik konfigurieren:**
- **Automatische Updates aktivieren** schaltet den automatischen Update-Check und -Vollzug ein oder aus.
- **Nur benachrichtigen** löst kein automatisches Update aus, meldet aber, wenn eine neue Version verfügbar ist.
- **Kanal** wählt zwischen `Stable` und `Beta` als Update-Quelle.
- **Prüfintervall** (Stunden) und ein **Wartungsfenster** (Start-/Endzeit) legen fest, wie oft und in welchem Zeitfenster geprüft bzw. installiert wird.
- **Anzahl aufbewahrter Backups** bestimmt, wie viele Backups vor einer Migration vorgehalten werden, bevor ältere automatisch gelöscht werden.

**Verlauf:** Eine Tabelle listet die letzten Update-Operationen mit Art, Zielversion, Status und Zeitpunkt der Anforderung auf.

## Gut zu wissen

- Vor jeder Migration erstellt Klacks automatisch ein Backup — ohne Backup wird keine Migration angewendet.
- Schlägt die Gesundheitsprüfung nach einem Update fehl, rollt Klacks automatisch auf die vorherige Version zurück (Backup wiederherstellen → alte Version aktivieren → erneut prüfen); nur wenn dieser Rollback selbst fehlschlägt, bleibt ein manueller Eingriff nötig.
- Ein manueller Rollback stellt gezielt das zur letzten erfolgreichen Operation gehörende Backup wieder her und aktiviert deren Ausgangsversion — nicht einfach "eine Version zurück".
- Update und Rollback sind Admin-only-Aktionen.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
