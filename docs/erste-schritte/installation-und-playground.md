---
sidebar_position: 1
---
# Installation und Playground

Klacks probieren Sie in einer Minute aus — und installieren es in wenigen Minuten. Keine Registrierung, keine Verkaufsgespräche.

## Playground: die Spielwiese zum Kennenlernen

Der Playground ist keine Installationsvariante, sondern eine öffentliche Klacks-Instanz mit Beispieldaten zum unverbindlichen Herumspielen — daher der Name. Sie läuft unter **[klacks-software.ch:7643](https://klacks-software.ch:7643)**:

- **Login:** `admin@test.com` · **Passwort:** `P@ssw0rt1`
- Sie haben volle Admin-Rechte — probieren Sie alles aus.
- Die Beispieldaten umfassen rund 5'000 Klienten und sind reine Demodaten.
- **Geben Sie keine echten Personendaten ein.** Die Datenbank wird täglich um 04:00 Uhr Schweizer Zeit (02:00 UTC) auf einen festen Stand zurückgesetzt.

## Installation: Auf dem eigenen Server (On-Premise)

Das On-Premise-Paket bringt alles mit: Docker-Images, Installer, Datenbank, HTTPS und automatische Updates.

```bash
curl -fsSLO https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip
unzip klacks-onprem.zip && cd onprem && ./install.sh
```

Unter Windows: `install.ps1` statt `install.sh`. Der Installer erzeugt Passwörter und Zertifikate selbst, lädt die aktuellen Docker-Images und wartet, bis alles läuft.

Mit optionalem Länderprofil richtet der Installer beim ersten Start gleich Sprache, Feiertage, Arbeitszeitgrenzen, Zuschläge und Branchen-Vorlagen ein:

```bash
SERVER_NAME=klacks.example.com REGION=de ./install.sh
```

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1 -ServerName klacks.example.com -Region de
```

## Die erste Anmeldung: Klacks verlangt Ihr eigenes Admin-Konto

Ein frisch installiertes Klacks startet mit einem mitgelieferten Konto, dessen Passwort öffentlich bekannt ist: `admin@test.com` / `P@ssw0rt1`. Damit melden Sie sich **genau einmal** an — Klacks führt Sie dann unmittelbar durch die Anlage Ihres eigenen Admin-Kontos.

Bis dieses Konto angelegt ist, blockiert der Server jeden weiteren Aufruf mit dem Fehlercode `SETUP_REQUIRED` (HTTP 403). Mit dem Standardkonto können Sie also nicht versehentlich weiterarbeiten. Sobald Sie Ihr eigenes Konto anlegen, erhält es die Admin-Rolle und das mitgelieferte Konto wird im selben Vorgang abgeschaltet. Danach melden Sie sich mit Ihrem eigenen Konto an — ein automatisches Weiteranmelden gibt es bewusst nicht.

Nur im Playground und in einer lokalen Entwicklungsumgebung ist dieses Gate absichtlich ausgeschaltet; dort bleibt `admin@test.com` bestehen.

## Gut zu wissen

- **Voraussetzungen:** mindestens 8 GB RAM und 4 vCPU, Docker mit Compose v2, freie Ports 80 und 443 sowie ausgehender HTTPS-Zugriff auf `ghcr.io` und `github.com`. Details und die Rechenbeispiele für kleinere Hosts stehen unter [Systemvoraussetzungen](../betrieb/systemvoraussetzungen.md).
- Ein mitgelieferter Update-Dienst hält Ihre Installation automatisch aktuell — mit Backup vor jedem Update und automatischem Rollback bei Problemen. Wie das im Detail abläuft, steht unter [Updates und Rollback](../betrieb/updates-und-rollback.md).
- Ihre Daten bleiben vollständig auf Ihrer Infrastruktur; Klacks funkt nicht nach Hause.
- Ein erneuter Aufruf des Installers ist unschädlich: Er behält Passwörter und Zertifikat bei und zieht nur neu — so reparieren Sie einen Stack oder erzwingen ein Update der Images.
- Bringen Sie ein eigenes Zertifikat mit, legen Sie `server.crt` und `server.key` vor der Installation in `onprem/nginx/certs/` ab; sonst erzeugt der Installer ein selbstsigniertes Zertifikat.
- Ihre Datenbank sichern Sie regelmässig selbst — wie das geht, steht unter [Backup und Wiederherstellung](../betrieb/backup-und-wiederherstellung.md).

---

*Fragen zur Installation? [Klacks-Community auf Discord](https://discord.gg/YRP8p2abVC).*
