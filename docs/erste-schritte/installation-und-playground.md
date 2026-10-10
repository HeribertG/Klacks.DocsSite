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
- Ihre Daten liegen in Ihrer eigenen Datenbank auf Ihrer Infrastruktur. Einige Funktionen rufen dabei externe Dienste auf — welche, steht im nächsten Abschnitt.
- Ein erneuter Aufruf des Installers ist unschädlich: Er behält Passwörter und Zertifikat bei und zieht nur neu — so reparieren Sie einen Stack oder erzwingen ein Update der Images.
- Bringen Sie ein eigenes Zertifikat mit, legen Sie `server.crt` und `server.key` vor der Installation in `onprem/nginx/certs/` ab; sonst erzeugt der Installer ein selbstsigniertes Zertifikat.
- Ihre Datenbank sichern Sie regelmässig selbst — wie das geht, steht unter [Backup und Wiederherstellung](../betrieb/backup-und-wiederherstellung.md).

## Welche externen Dienste Klacks aufruft

Ihre Daten liegen auf Ihren Servern. Für einige Funktionen ruft Klacks im Standardbetrieb trotzdem öffentliche Dienste im Internet auf. Die Adressen dieser Dienste sind fest eingebaut; einen eigenen Geocoding-, Routing- oder Kartenserver können Sie derzeit nicht eintragen.

| Dienst | Wofür | Was gesendet wird | Standard | Abschalten |
|---|---|---|---|---|
| Nominatim von OpenStreetMap (`nominatim.openstreetmap.org`) | Adressen in Koordinaten umwandeln: beim Speichern einer Adresse, für den Firmenstandort, in der Tourenplanung und in Hintergrund-Diensten für Adressen und Gruppen-Standorte | Strasse, PLZ, Ort und Land, ohne Namen von Personen; bei Gruppen-Standorten der Orts- bzw. Gruppenname | an | `BackgroundServices__AddressGeocoding=false` und `BackgroundServices__GroupGeocoding=false` schalten nur die Hintergrund-Dienste ab. Beim Speichern einer Adresse wird weiterhin geocodiert. |
| Öffentlicher OSRM-Server (`router.project-osrm.org`) | Fahrzeiten, Distanzen und Routen auf der Karte | Koordinaten der Einsatzorte, ohne Namen | an, solange kein OpenRouteService-Schlüssel hinterlegt ist; der Browser fragt OSRM ausserdem direkt an, wenn der Klacks-Server keine Route liefert | nicht vorgesehen |
| OpenRouteService (`api.openrouteservice.org`) | wie OSRM, zusätzlich Velo und zu Fuss | Koordinaten der Einsatzorte, ohne Namen | nur mit hinterlegtem API-Schlüssel | Schlüssel unter Einstellungen > OpenRoute entfernen |
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
