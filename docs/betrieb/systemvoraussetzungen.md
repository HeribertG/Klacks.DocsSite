---
sidebar_position: 1
---
# Systemvoraussetzungen und Aufbau

Klacks läuft als Docker-Stack auf Ihrem eigenen Server. Diese Seite beschreibt, welche Dienste dabei starten und wie Sie den Host dimensionieren — inklusive der Messwerte, auf denen die Empfehlung beruht.

## Der Aufbau: fünf Dienste

Das On-Premise-Paket startet ausschliesslich, was für den Betrieb nötig ist:

| Dienst | Image | Aufgabe |
|---|---|---|
| `klacks-postgres` | `pgvector/pgvector:pg17` | Datenbank; die Vektor-Erweiterung ist bereits enthalten |
| `klacks-api` | `ghcr.io/heribertg/klacks-api` | Backend; migriert und befüllt die Datenbank beim Start |
| `klacks-ui` | `ghcr.io/heribertg/klacks-ui` | Angular-Oberfläche, ausgeliefert über nginx |
| `klacks-updater` | `ghcr.io/heribertg/klacks-updater` | spielt signierte Updates ein (api und ui gemeinsam) |
| `klacks-proxy` | `nginx:alpine` | TLS-Abschluss und Reverse Proxy |

Interne Dienste des Herstellers (Entwicklungs-Wissensspeicher, Marketing, Marktplatz, pgAdmin, certbot, Blazor-Oberfläche) sind bewusst **nicht** enthalten. Sie als Betreiber sehen also nur Ihren eigenen Stack.

## Was der Host mitbringen muss

- **8 GB RAM und 4 vCPU** als Minimum (siehe die Rechnung unten).
- Docker Desktop (Windows/macOS) oder Docker Engine mit Compose v2 (Linux), **amd64 oder arm64**.
- Freie Ports **80 und 443** — überschreibbar über `HTTP_PORT` und `HTTPS_PORT`.
- **Ausgehender** HTTPS-Zugriff auf `ghcr.io` (Images) und `github.com` (signiertes Update-Manifest).
- Optional: Zugriff auf `klacks-software.ch:7553` für Länderpakete und Sprach-Plugins aus dem Marktplatz.

## Speicher: warum 8 GB, und was bei kleineren Hosts passiert

Klacks betreibt seine beiden Suchmodelle (Embedder und Reranker) **lokal im Prozess** `klacks-api`. Beide ONNX-Sitzungen bleiben dauerhaft im Speicher — sie werden nicht nach jeder Frage entladen.

Gemessen auf dem Produktionshost des Herstellers am 12.09.2026:

- Grundlast des Prozesses: ca. 1'017 MB
- Embedder: ca. 1'171 MB
- Reranker: ca. 116 MB
- Summe: ein Plateau von rund **2'304 MB**
- Unter einer Grenze von 2'560 MB hat der Kernel den Container bei 2'471 MB beendet (OOM).

Deshalb setzt das mitgelieferte Compose **3'584M** und 3,0 CPU für `klacks-api`, bei ausgeschaltetem Idle-Entladen. Über den ganzen Stack gerechnet: 3'584M (api) + 2'048M (postgres) + 3 × 256M (ui, updater, proxy) = **6'400 MiB**, der Rest der 8 GB bleibt für Betriebssystem und Dateicache.

**Kleinerer Host, etwa 3 GB für `klacks-api`:** Setzen Sie in der `.env` **beide** folgenden Zeilen — niemals die Speicherzeile allein:

```bash
KLACKS_API_MEMORY_LIMIT=2560M
KLACKS_API_IDLE_UNLOAD_MINUTES=30
```

Das Idle-Entladen gibt eine Sitzung nach 30 Minuten ohne Zugriff frei. Der Preis: Die nächste Frage danach lädt sie neu (rund 2,2–2,9 s für den Embedder, rund 1,1 s für den Reranker). Werte zwischen 1 und 5 werden auf 5 angehoben, `0` bedeutet: nie entladen.

## CPU: weniger Kerne bremsen nur, sie brechen nichts

Die Suche funktioniert auch mit weniger Kernen, wird aber langsamer — der Reranker ist der rechenintensive Schritt. Gemessen: 2'994–3'163 ms für 25 Kandidaten bei 3,0 CPUs gegenüber 4'339–4'860 ms bei 1,5 CPUs, wo der Dienst zusätzlich 7,15 s gedrosselt verbrachte. Für einen kleineren Host:

```bash
KLACKS_API_CPU_LIMIT=1.5
```

Die CPU-Kontingente des Stacks summieren sich absichtlich auf 4,75 bei 4 vCPU: Ein Kontingent ist eine Obergrenze, keine Reservierung, und die Dienste spitzen nie gleichzeitig.

## Gut zu wissen

- **Passwörter und Schlüssel bleiben stabil.** `POSTGRES_PASSWORD` ist beim ersten Start in das Daten-Volume eingebrannt — eine spätere Änderung verwaist die Datenbank. `JWT_SECRET` signiert die Sitzungen; eine Änderung meldet alle Benutzer ab. Der Installer bewahrt beide bei jedem erneuten Lauf auf.
- **`COMPOSE_PROJECT_NAME=klacks`** ist fest verdrahtet, damit Host und Update-Dienst unabhängig vom Ordnernamen auf dasselbe Compose-Projekt zeigen. Nach der Installation nicht mehr ändern.
- **`KnowledgeIndex__WarmupEnabled=false` ist keine Speicheroption.** Es verschiebt nur den Aufbau der Suche aus dem Start in die erste Chat-Anfrage; im Dauerbetrieb sind die Sitzungen genauso präsent. Nützlich nur, wenn der Host beim Start an Speicher scheitert.
- **Mehr als eine API-Instanz?** Dann brauchen Sie einen SignalR-Backplane. Klacks liefert keinen mit: Stellen Sie einen RESP-kompatiblen Dienst selbst bereit (etwa Valkey — seit 7.4 unter BSD-3 lizenziert, anders als Redis) und schalten Sie den im nginx-Template vorbereiteten Sticky-Upstream (`ip_hash`) frei. Ohne Backplane läuft genau eine `klacks-api`-Instanz, wie bei jeder heutigen Installation.
- **Länderprofile:** Der Installer kennt 30 Profile: `ae`, `at`, `ch`, `cn`, `cz`, `de`, `dk`, `es`, `fi`, `fr`, `gb`, `gr`, `id`, `il`, `it`, `jp`, `kr`, `li`, `my`, `nl`, `no`, `pl`, `pt`, `ro`, `sa`, `se`, `th`, `tw`, `us`, `vn`. Ein Profil setzt beim ersten Start Sprache, Land/Region und Zeitzone, Feiertagskalender, Wochenende und Wochenstart, Arbeitszeitgrenzen, Ferienanspruch, Zuschläge, das Standard-Lohnexport-Zielsystem (für die Schweiz etwa `abaconnect-ch`) sowie Branchen-Vorlagen — für die Spitex beispielsweise die Planungsregel-Vorlage „CH Spitex Standard". Ohne Profil startet Klacks neutral und Sie konfigurieren alles von Hand.

---

*Betriebsfragen? [Klacks-Community auf Discord](https://discord.gg/YRP8p2abVC).*
