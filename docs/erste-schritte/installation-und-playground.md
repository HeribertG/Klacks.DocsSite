---
sidebar_position: 1
---
# Installation und Playground

Klacks probieren Sie in einer Minute aus — und installieren es in wenigen Minuten. Keine Registrierung, keine Verkaufsgespräche.

## Playground: die Spielwiese zum Kennenlernen

Der Playground ist keine Installationsvariante, sondern eine öffentliche Klacks-Instanz mit Beispieldaten zum unverbindlichen Herumspielen — daher der Name. Sie läuft unter **[play.klacks-software.ch](https://play.klacks-software.ch)**:

- **Login:** `admin@test.com` · **Passwort:** `P@ssw0rt1`
- Sie haben volle Admin-Rechte — probieren Sie alles aus.
- Die Beispieldaten umfassen rund 5'000 Klienten und sind reine Demodaten.
- **Geben Sie keine echten Personendaten ein.** Die Datenbank wird täglich um 04:00 Uhr Schweizer Zeit (02:00 UTC) auf einen festen Stand zurückgesetzt.

## Installation: Auf dem eigenen Server (On-Premise)

Das On-Premise-Paket bringt alles mit: Docker-Images, Installer, Datenbank, HTTPS und automatische Updates. Sie laden es ausschliesslich im [Klacks Store](https://klacks-software.ch/store/?culture=de) herunter.

Wählen Sie im Klacks Store auf Wunsch die Branche und laden Sie das ZIP für Ihr Land herunter. Der Installer erzeugt Passwörter und Zertifikate selbst, lädt die aktuellen Docker-Images und wartet, bis alles läuft.

### Linux: Schritt für Schritt

Sie brauchen einen Rechner mit mindestens 8 GB RAM, freien Ports 80 und 443, Internetzugang und ein Konto mit `sudo`-Rechten. Docker muss nicht schon installiert sein (siehe Schritt 4).

1. **ZIP im Klacks Store laden.** Auf der Seite Ihres Landes im [Klacks Store](https://klacks-software.ch/store/?culture=de), auf Wunsch mit Ihrer Branche.
2. **In einen festen Ordner entpacken**, zum Beispiel `~/klacks`, nicht in `Downloads` oder `/tmp`. Die automatischen Updates arbeiten später mit genau diesem Ordner; wird er gelöscht oder verschoben, brechen sie. Der Installer warnt, wenn er in `Downloads` oder `/tmp` läuft.

   ```bash
   unzip 'klacks-onprem-*.zip' -d ~/klacks
   ```

3. **Im Ordner ein Terminal öffnen.** Im Dateimanager geht das meist per Rechtsklick in den Ordner (die Beschriftung hängt von der Desktop-Umgebung ab), oder Sie geben `cd ~/klacks` ein.
4. **Installer starten:**

   ```bash
   sudo bash ./install-de.sh
   ```

   Im Paket für Deutschland heisst das Skript `install-de.sh`; in anderen Länderpaketen steht der jeweilige Ländercode im Namen, allgemein also `sudo bash ./install-*.sh`. `sudo` braucht der Installer, damit er Docker ansprechen und bei Bedarf installieren darf. Ohne `sudo` geht es nur, wenn Docker schon installiert ist und Ihr Benutzer zur Gruppe `docker` gehört.

   **Fehlt Docker**, bietet der Installer an, Docker Engine mit dem offiziellen Skript von `get.docker.com` zu installieren. Das passiert nur nach Ihrer Rückfrage (`[y/N]`, Standard ist Nein) und nur auf Ubuntu, Debian, Fedora, CentOS und RHEL; dafür braucht der Rechner `curl` oder `wget` und Internetzugang. Auf anderen Distributionen installieren Sie Docker Engine mit dem Compose-Plugin selbst nach der [Anleitung von Docker](https://docs.docker.com/engine/install/). Läuft der Installer ohne Terminal, beantwortet `INSTALL_DOCKER=yes` die Rückfrage mit Ja. Docker selbst empfiehlt dieses Skript nicht für den Produktivbetrieb; für einen produktiven Server installieren Sie Docker besser selbst. Das ältere `docker-compose` (Version 1) wird nicht unterstützt, nötig ist das Plugin `docker compose`.
5. **Warten.** Der Installer erzeugt Passwörter und ein selbstsigniertes Zertifikat, lädt die Images und startet den Stack. Beim ersten Start migriert die API die Datenbank; der Installer wartet dafür bis zu zehn Minuten. Am Ende steht `Klacks is up at https://…` und darunter **Ihr Einrichtungscode** (`Your setup code`, zwölf Zeichen in drei Vierergruppen). Notieren Sie ihn; er steht auch in der Datei `.env` im Installationsordner als `KLACKS_SETUP_CODE`.
6. **Klacks öffnen:** `https://localhost` (bei einem anderen Servernamen oder HTTPS-Port die Adresse aus der Meldung des Installers). Der Browser warnt vor dem selbstsignierten Zertifikat; bestätigen Sie die Warnung. Danach legen Sie mit dem Einrichtungscode Ihr eigenes Admin-Konto an, siehe [Die erste Anmeldung](#first-login).
7. **Updates** laufen danach automatisch über den mitgelieferten Update-Dienst. Den Installer müssen Sie dafür nicht erneut starten.

Sieht Docker weniger als 7 GiB Arbeitsspeicher, bricht eine Erstinstallation ab. Wie Sie einen kleineren Host einrichten, steht unter [Systemvoraussetzungen](../betrieb/systemvoraussetzungen.md).

### Windows

Unter Windows starten Sie `install-*.ps1` statt `install-*.sh`.

### Optionen: Servername und Länderprofil

Mit optionalem Länderprofil richtet der Installer beim ersten Start gleich Sprache, Feiertage, Arbeitszeitgrenzen, Zuschläge und Branchen-Vorlagen ein:

```bash
sudo SERVER_NAME=klacks.example.com REGION=de bash ./install.sh
```

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1 -ServerName klacks.example.com -Region de
```

Unter Linux gehören die Variablen **hinter** `sudo`: `sudo` reicht Variablen, die davor stehen, in der Regel nicht an den Installer weiter. Mit dem Skript des Länderpakets sieht der Aufruf so aus: `sudo SERVER_NAME=klacks.example.com bash ./install-de.sh`.

Das Länderpaket aus dem Klacks Store enthält das Profil seines Landes. Die mitgelieferten Skripte `install-*.sh` und `install-*.ps1` setzen `REGION` bzw. `-Region` bereits auf dessen Ländercode — im Paket für Deutschland zum Beispiel `install-de.sh` und `install-de.ps1`. Rufen Sie `install.sh` oder `install.ps1` direkt auf, muss `REGION` bzw. `-Region` dieser Ländercode sein; ohne ihn richtet der Installer kein Länderprofil ein.

## Büro-PC mit Windows: auch im Microsoft Store

Für einen einzelnen Büro-PC mit Windows gibt es ein eigenes Setup, das ohne Docker auskommt. Sie erhalten es im [Klacks Store](https://klacks-software.ch/store/?culture=de) auf der Seite Ihres Landes und auch im [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (Eintrag «Klacks»). In beiden Stores ist es dasselbe Setup. Aus dem Microsoft Store übernimmt es das in Windows eingestellte Land; eine Branche wählen Sie dort nicht, und gibt es für das Land kein Länderprofil, richtet das Setup keines ein. Server-, Docker- und Linux-Installationen sowie die Länder- und Branchenpakete gibt es nur im Klacks Store.

Neue Versionen kommen auf dem Büro-PC über Einstellungen > [Software-Updates](../einstellungen/system-sicherheit/updates.md) in Klacks, auch wenn Klacks aus dem Microsoft Store stammt. Ein neueres Setup lässt sich nicht über eine bestehende Installation installieren.

## Die erste Anmeldung: Ihr eigenes Admin-Konto {#first-login}

Ein frisch installiertes Klacks hat noch kein Konto von Ihnen. Beim ersten Öffnen im Browser erscheint deshalb gleich die Seite «Eigenes Admin-Konto einrichten», noch vor jeder Anmeldung: Vor- und Nachname, E-Mail-Adresse (sie wird Ihr Anmeldename) und ein Passwort, zweimal eingegeben; die Passwortregeln stehen live daneben.

Auf einem Server (Docker) verlangt die Seite zusätzlich den **Einrichtungscode**, auch wenn Sie Klacks im Browser auf dem Server selbst öffnen. Den Code hat der Installer am Ende der Installation angezeigt; er steht auch in der Datei `.env` im Installationsordner als `KLACKS_SETUP_CODE`. Er gilt nur für diese eine Einrichtung. Ein falscher Code wird abgelehnt («Der Einrichtungscode stimmt nicht. Bitte prüfen Sie ihn und versuchen Sie es erneut.»).

Sobald Sie speichern, erhält Ihr Konto die Admin-Rolle und das mitgelieferte Testkonto wird im selben Vorgang endgültig abgeschaltet; Klacks meldet Sie danach automatisch mit Ihrem eigenen Konto an; scheitert das, melden Sie sich mit den neuen Zugangsdaten an. Solange ein Einrichtungscode gesetzt ist, lässt sich das mitgelieferte Testkonto im Browser ohnehin nicht für die Anmeldung verwenden. Als Nächstes folgt die Seite «Land und Branche».

Bis Ihr eigenes Konto angelegt ist, blockiert der Server jeden weiteren Aufruf mit dem Fehlercode `SETUP_REQUIRED` (HTTP 403). Dahinter steckt keine Störung: Es fehlt nur noch die Einrichtung.

- Auf dem Büro-PC mit Windows brauchen Sie keinen Einrichtungscode, wenn Sie Klacks im Browser auf demselben PC öffnen. Von einem anderen Rechner aus erscheint nur die Anmeldeseite.
- Zeigt Klacks stattdessen die Anmeldeseite, etwa bei einer Installation ohne Einrichtungscode, nennt die Ausgabe des Installers das mitgelieferte Konto; Klacks führt Sie auch dann unmittelbar zur Anlage Ihres eigenen Admin-Kontos.
- Reichen zwei Personen gleichzeitig ein, wird nur die erste Administrator; die zweite landet auf der Anmeldeseite.

Nur im Playground und in einer lokalen Entwicklungsumgebung ist dieses Gate absichtlich ausgeschaltet; dort bleibt das mitgelieferte Konto bestehen.

## Gut zu wissen

- **Voraussetzungen:** mindestens 8 GB RAM und 4 vCPU, Docker mit Compose v2 (unter Linux installiert der Installer Docker auf Rückfrage), freie Ports 80 und 443 sowie ausgehender HTTPS-Zugriff auf `ghcr.io` und `github.com`. Details und die Rechenbeispiele für kleinere Hosts stehen unter [Systemvoraussetzungen](../betrieb/systemvoraussetzungen.md).
- Ein mitgelieferter Update-Dienst hält Ihre Installation automatisch aktuell — mit Backup vor jedem Update und automatischem Rollback bei Problemen. Wie das im Detail abläuft, steht unter [Updates und Rollback](../betrieb/updates-und-rollback.md).
- Ihre Daten liegen in Ihrer eigenen Datenbank auf Ihrer Infrastruktur. Einige Funktionen rufen dabei externe Dienste auf — welche, steht im nächsten Abschnitt.
- Ein erneuter Aufruf des Installers ist unschädlich, aber kein Update: Er behält Passwörter, Zertifikat und die bei der Erstinstallation festgelegte Version bei und startet den Stack neu (unter Linux wieder mit `sudo`, wenn Sie zuerst mit `sudo` installiert haben). So reparieren Sie einen Stack, der nicht mehr läuft. Neue Versionen spielt der Update-Dienst ein, nicht der Installer.
- Bringen Sie ein eigenes Zertifikat mit, legen Sie `server.crt` und `server.key` vor der Installation in `nginx/certs/` im Installationsordner ab; sonst erzeugt der Installer ein selbstsigniertes Zertifikat.
- Ihre Datenbank sichern Sie regelmässig selbst — wie das geht, steht unter [Backup und Wiederherstellung](../betrieb/backup-und-wiederherstellung.md).

## Welche externen Dienste Klacks aufruft

Ihre Daten liegen auf Ihren Servern. Für einige Funktionen ruft Klacks im Standardbetrieb trotzdem öffentliche Dienste im Internet auf. Die Adressen dieser Dienste sind fest eingebaut; einen eigenen Geocoding-, Routing- oder Kartenserver können Sie derzeit nicht eintragen.

| Dienst | Wofür | Was gesendet wird | Standard | Abschalten |
|---|---|---|---|---|
| Nominatim von OpenStreetMap (`nominatim.openstreetmap.org`) | Adressen in Koordinaten umwandeln: beim Speichern einer Adresse, für den Firmenstandort, in der Tourenplanung und in Hintergrund-Diensten für Adressen und Gruppen-Standorte | Strasse, PLZ, Ort und Land, ohne Namen von Personen; bei Gruppen-Standorten der Orts- bzw. Gruppenname | an | `BackgroundServices__AddressGeocoding=false` und `BackgroundServices__GroupGeocoding=false` schalten nur die Hintergrund-Dienste ab. Beim Speichern einer Adresse wird weiterhin geocodiert. |
| Öffentlicher OSRM-Server (`router.project-osrm.org`) | Fahrzeiten, Distanzen und Routen auf der Karte | Koordinaten der Einsatzorte, ohne Namen | an, solange kein OpenRouteService-Schlüssel hinterlegt ist; der Browser fragt OSRM ausserdem direkt an, wenn der Klacks-Server keine Route liefert | nicht vorgesehen |
| OpenRouteService (`api.heigit.org`) | wie OSRM, zusätzlich Velo und zu Fuss | Koordinaten der Einsatzorte, ohne Namen | nur mit hinterlegtem API-Schlüssel | Schlüssel unter Einstellungen > OpenRoute entfernen |
| Kartenkacheln (OpenStreetMap, OpenStreetMap.de oder CARTO) | Kartendarstellung im Dashboard | vom Browser: IP-Adresse und angezeigter Kartenausschnitt | an, sobald die Karte angezeigt wird | Anbieter in der Karte wählbar, ein eigener Kachelserver nicht |
| GitHub (`github.com`) und GitHub Container Registry (`ghcr.io`) | Installation und automatische Updates: Release-Manifest und Docker-Images | normale Download-Anfragen, keine Planungsdaten | an | — |
| Klacks-Marketplace (`klacks-software.ch/store`) | Sprach- und Länderpakete | Ländercode, Paketcode oder Suchbegriff | bei Paketsuche und beim Laden eines Länderprofils | Adresse über `LanguagePlugins__MarketplaceUrl` konfigurierbar |
| Hugging Face (`huggingface.co`) | einmaliger Download der Suchmodelle für Klacksy | keine Kundendaten (Datei-Download) | beim ersten Bedarf | — |
| Open-Meteo (`api.open-meteo.com`, `air-quality-api.open-meteo.com`) | Wetter- und Luftqualitätshinweis im Begrüssungs-Widget, Wetterabfrage über Klacksy | Koordinaten des Browsers (falls freigegeben) oder des Firmenstandorts | an | `Assistant__Ambient__Enabled=false` schaltet nur den Luftqualitäts- und Feiertagshinweis ab, nicht die Wetterabfrage der Begrüssung |
| Nager.Date (`date.nager.at`) | Feiertagshinweis im Begrüssungs-Widget | Ländercode | an | `Assistant__Ambient__Enabled=false` |
| Cloud-KI-Anbieter (z. B. OpenAI, Anthropic, Google, DeepSeek) | Klacksy und KI-gestützte Hintergrundfunktionen (z. B. Einordnung von Gruppen-Standorten) | Anfragen samt dem dafür nötigen Kontext aus Ihren Daten | nur wenn ein Cloud-Modell konfiguriert ist | lokales Modell verwenden |
| Sprach-, Such- und Übersetzungsdienste (z. B. Deepgram, Groq, AssemblyAI, Edge TTS, OpenAI TTS, ElevenLabs, Google Cloud TTS, DeepL, Websuche) | Spracheingabe und -ausgabe, Websuche, Übersetzung | Audio bzw. Text | nur wenn genutzt bzw. konfiguriert; die Browser-Spracherkennung arbeitet je nach Browser über dessen Online-Dienst | Funktion nicht verwenden |

Die Schalter in der Spalte «Abschalten» sind Umgebungsvariablen des Containers `klacks-api`; tragen Sie sie in `docker-compose.yml` unter `environment:` dieses Dienstes ein. Ein Eintrag nur in der `.env`-Datei reicht nicht, weil der Dienst sie nicht als `env_file` einliest.

Mit einem lokalen KI-Modell landet keine Anfrage an das Sprachmodell bei einem externen KI-Anbieter. Für die übrigen Dienste in dieser Tabelle ändert das nichts.

---

*Fragen zur Installation? [Klacks-Community auf Discord](https://discord.gg/YRP8p2abVC).*
