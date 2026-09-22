---
sidebar_position: 3
---
# Updates und Rollback

Klacks aktualisiert sich selbst — mit signierten Paketen, einer Sicherung vor jedem Schritt und einem automatischen Rückweg, wenn etwas schiefgeht. Diese Seite erklärt, was dabei passiert und wie Sie eingreifen können.

## Wie ein Update abläuft

1. **Erkennen.** Die API fragt das signierte Manifest ab, das der Hersteller mit jedem Release veröffentlicht. Ist dort eine neuere Version verzeichnet, gilt das Update als verfügbar.
2. **Sichern.** Der Update-Dienst legt eine Datensicherung der Datenbank an. Enthält die neue Version eine Migration, wird diese Sicherung fest an den Update-Vorgang gebunden und steht später für einen Rückweg bereit.
3. **Ziehen und gemeinsam aktivieren.** Der Dienst lädt die neuen Images für `klacks-api` **und** `klacks-ui` und schaltet beide zusammen um — die beiden Teile laufen im Gleichschritt, nie in verschiedenen Versionen.
4. **Prüfen.** Nach dem Umschalten fragt der Dienst die tiefe Gesundheitsprüfung `/internal/health/deep` ab.
5. **Bewerten.** Ist die neue Version gesund, gilt das Update als erfolgreich. Ist sie es nicht, rollt der Dienst **beide** Teile automatisch auf die vorherige Version zurück und prüft erneut. Gelingt auch das nicht, wird der Zustand als fehlgeschlagen protokolliert, damit Sie es sehen.

## Was „signiert" bedeutet

Der Hersteller signiert jedes Release, und Ihr Klacks prüft die Signatur, bevor es ein Paket annimmt. Der öffentliche Schlüssel und die Adresse des Manifests sind feste Herstellerwerte in Ihrer `.env`:

- `UPDATE_MANIFEST_BASE_URL` — fest auf die Release-Quelle des Herstellers
- `UPDATE_SIGNATURE_PUBLIC_KEY` — muss zum privaten Schlüssel passen, mit dem der Hersteller signiert

Diese beiden Werte sind **nicht zum Ändern gedacht**. Wer sie austauscht, hebt die Prüfung auf und öffnet damit genau die Lücke, die die Signatur schliesst.

Das Manifest trägt unter anderem: Kanal (`Stable` oder `Beta`), die neueste Version, die Mindestversion, ab der ein direktes Update möglich ist (`MinUpgradableFrom`), das Veröffentlichungsdatum, ob eine Datenbankmigration enthalten ist, die Artefakte, die Signatur und einen Verweis auf die Änderungsliste.

`klacks-api` und `klacks-ui` sind in der `.env` **auf eine exakte Version festgelegt**, damit sie sich nicht unbemerkt auseinanderentwickeln. Der Update-Dienst selbst fährt immer auf `latest` — er steht bewusst nicht im signierten Manifest und tauscht nur api und ui.

## Einstellungen im Betrieb

Im Admin-Bereich unter **System → Updates**:

| Einstellung | Wirkung |
|---|---|
| **Auto-enabled** | Updates werden erkannt und automatisch eingespielt |
| **Notify only** | Updates werden nur **erkannt**, aber nicht eingespielt, bis Sie es auslösen |
| **Wartungsfenster** | Zeitraum, in dem automatische Updates laufen dürfen |

Diese Einstellungen liegen in der Datenbank und überstimmen die Startwerte aus der `.env` (`UPDATE_AUTO_ENABLED`, `UPDATE_NOTIFY_ONLY`), die nur beim ersten Start greifen.

## Manuell zurückrollen

Automatisch muss hier niemand eingreifen — ein fehlgeschlagenes Update rollt der Dienst selbst zurück. Wenn Sie bewusst einen Schritt zurück wollen:

1. Setzen Sie in der `.env` `KLACKS_API_TAG` und `KLACKS_UI_TAG` auf die vorherige Version.
2. Aktivieren Sie den Stack neu: `docker compose up -d klacks-api klacks-ui`.
3. **Hat die fehlerhafte Version bereits migriert**, spielen Sie zusätzlich die passende Sicherung von vor dem Update zurück — und beachten Sie dabei den Stolperstein auf der Seite [Backup und Wiederherstellung](backup-und-wiederherstellung.md): Tabellen, die die neue Version angelegt hat, überleben das Zurückspielen und blockieren den nächsten Start.

## Gut zu wissen

- **Der Rückweg ist keine Notlösung, sondern der Normalfall.** Jeder Update-Vorgang hat einen Status: erfolgreich, zurückgerollt oder Rückweg fehlgeschlagen. Ein zurückgerolltes Update ist ein normaler, protokollierter Vorgang — kein Zwischenfall.
- **Ein zurückgerolltes Update ist kein zurückgesetztes.** Der Rollback stellt die Version wieder her, nicht Ihre Daten. Datenänderungen, die Sie zwischen Update und Rückweg vorgenommen haben, stammen aus dem Sicherungsstand.
- **Nachsehen können Sie in den Protokollen:** `docker compose logs klacks-updater` zeigt Erkennung, Sicherung, Umschaltung und Rückweg.

---

*Betriebsfragen? [Klacks-Community auf Discord](https://discord.gg/YRP8p2abVC).*
