---
sidebar_position: 1
---

# Installation und Playground

Klacks probieren Sie in einer Minute aus — und installieren es in wenigen Minuten. Keine Registrierung, keine Verkaufsgespräche.

## Variante 1: Playground (nichts installieren)

Eine öffentliche Klacks-Instanz mit Beispieldaten läuft unter **[klacks-software.ch](https://klacks-software.ch:7643)**:

- **Login:** `admin@test.com` · **Passwort:** `P@ssw0rt1`
- Sie haben volle Admin-Rechte — probieren Sie alles aus.
- Alle Daten werden **täglich automatisch zurückgesetzt**. Geben Sie keine echten Personendaten ein.

## Variante 2: Auf dem eigenen Server (On-Premise)

Das On-Premise-Paket bringt alles mit: Docker-Images, Installer, Datenbank, HTTPS und automatische Updates.

```bash
curl -fsSLO https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip
unzip klacks-onprem.zip && cd onprem && ./install.sh
```

Unter Windows: `install.ps1` statt `install.sh`. Der Installer erzeugt Passwörter und Zertifikate selbst, lädt die aktuellen Docker-Images und wartet, bis alles läuft. Erstanmeldung mit `admin@test.com` / `P@ssw0rt1` — **ändern Sie dieses Passwort sofort nach dem ersten Login.**

## Gut zu wissen

- Ein mitgelieferter Update-Dienst hält Ihre Installation automatisch aktuell — mit Backup vor jedem Update und automatischem Rollback bei Problemen.
- Ihre Daten bleiben vollständig auf Ihrer Infrastruktur; Klacks funkt nicht nach Hause.
- Voraussetzung ist ein Server mit Docker, ausgehendem Internetzugriff (für Docker-Images und Updates) und offenen Ports 80/443.

---
*Fragen zur Installation? [Klacks-Community auf Discord](https://discord.gg/YRP8p2abVC).*
