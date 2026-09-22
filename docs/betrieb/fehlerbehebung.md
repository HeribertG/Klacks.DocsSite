---
sidebar_position: 4
---
# Fehlerbehebung

Wenn Klacks nicht tut, was es soll, führt der Weg fast immer über die Protokolle der beiden verdächtigen Dienste — und über die Frage, ob der Prozess wirklich noch läuft.

## Zuerst: sehen, was läuft

```bash
docker compose ps
docker compose logs klacks-api
docker compose logs klacks-updater
```

`docker compose ps` zeigt, welche Dienste laufen und ob sie gesund sind. `klacks-api` schreibt Start, Migration und Befüllung der Datenbank; `klacks-updater` schreibt Erkennung, Sicherung, Umschaltung und Rückweg eines Updates.

## Ein altes Protokoll ist kein Beweis

Eine Falle, die schon Zeit gekostet hat: Die Logdatei kann von einem **früheren** Start stammen. Wer darin einen Fehler findet und ihn für den aktuellen hält, sucht an der falschen Stelle.

Prüfen Sie deshalb, ob das Protokoll **noch wächst**:

```bash
wc -c klacks-api.log; sleep 10; wc -c klacks-api.log
```

Bleibt die Grösse gleich (Zuwachs 0 Bytes), schreibt der Prozess nicht mehr — er läuft nicht, unabhängig davon, was im Protokoll steht. Erst eine frische Wiederholung des Fehlers mit einem Protokoll, das nachweislich mitläuft, ist eine belastbare Grundlage.

## Häufige Meldungen und was sie bedeuten

| Meldung | Bedeutung | Was tun |
|---|---|---|
| `no matching manifest for linux/amd64` | Das Image gibt es für Ihre Architektur nicht | Der Hersteller muss das Image mehrfach-architektonisch veröffentlichen (amd64 **und** arm64) |
| `pull access denied` | Das Paket im Paketarchiv ist privat | Installation mit Zugangsdaten wiederholen: `-GhcrUser`/`-GhcrToken` unter Windows, `GHCR_USER`/`GHCR_TOKEN` unter Linux |
| `errorCode: SETUP_REQUIRED`, HTTP `403` | Das Admin-Setup-Gate ist aktiv | Mit `admin@test.com` anmelden und das eigene Admin-Konto anlegen — siehe [Installation und Playground](../erste-schritte/installation-und-playground.md) |
| Container endet ohne Managed-Stacktrace mit Exit-Code `-1` (`0xffffffff`) | Ein **nativer** Absturz in einer C/C++-Bibliothek, den kein C#-`try/catch` fangen kann | Die Ausgabe des Containers auf **stderr** ansehen — dort steht der eigentliche Auslöser, nicht im Anwendungsprotokoll |
| Container wird beendet, obwohl kein Anwendungsfehler im Protokoll steht | Der Kernel hat den Prozess wegen Speichermangels beendet (OOM) | Speichergrenzen prüfen — siehe [Systemvoraussetzungen](systemvoraussetzungen.md) |
| `42P07: relation "…" already exists` nach einem fehlgeschlagenen Update | Eine Migration hat Tabellen angelegt, die das Zurückspielen nicht entfernt hat | Siehe den Stolperstein unter [Backup und Wiederherstellung](backup-und-wiederherstellung.md) |
| API stirbt Sekunden nach `Application started` | Der Start gelingt, der Absturz kommt danach — typisch für eine native Bibliothek | Dieselbe Spur wie beim Exit-Code `-1`: stderr prüfen, nicht das Anwendungsprotokoll |

Auf einem **Windows-on-ARM-Rechner** (Snapdragon X) ist die lokal laufende Suche in der Vergangenheit genau an einer solchen nativen Bibliothek gescheitert: Die API meldete `Application started`, war Sekunden später für die Oberfläche aber nicht mehr erreichbar. Wenn Sie dieses Muster auf einem ARM-Windows-Host sehen, ist der erste Blick auf die Konsolenausgabe (nicht das Dateiprotokoll) gerichtet — dort erschien die Meldung der betroffenen CPU-Erkennung.

## Wie Sie einen Fehler eingrenzen

1. **Was genau haben Sie getan**, und was haben Sie erwartet? Der letzte Schritt vor dem Fehler ist die halbe Antwort.
2. **Welche Dienste laufen?** `docker compose ps`.
3. **Wächst das Protokoll noch?** Siehe oben.
4. **Was stand zuletzt auf stderr?** Bei nativen Abstürzen die einzige Quelle.
5. **Was hat sich zuletzt geändert?** Ein Update, eine Einstellung, ein neues Zertifikat.

## Gut zu wissen

- **Ein früh gestarteter und ein gesunder Dienst sehen im Protokoll gleich aus.** Wenn in der Oberfläche nichts ankommt, prüfen Sie, ob der Prozess überhaupt noch läuft — nicht nur, was er zuletzt geschrieben hat.
- **Bei einem Absturz ohne Anwendungsfehler ist der Speicher der erste Verdacht**, gerade nach einem Update mit neuen Suchmodellen.
- **Hilfreiche Angaben für eine Meldung:** betroffene Version (`KLACKS_API_TAG`/`KLACKS_UI_TAG` aus der `.env`), Ausgabe von `docker compose ps`, die letzten Zeilen beider Protokolle und der letzte Schritt vor dem Fehler. Bitte **ohne** Passwörter und Schlüssel aus der `.env`.
- Fragen Sie im Zweifel die Community: [Klacks-Community auf Discord](https://discord.gg/YRP8p2abVC).

---

*Betriebsfragen? [Klacks-Community auf Discord](https://discord.gg/YRP8p2abVC).*
