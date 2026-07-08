---
sidebar_position: 1
---

# LLM-Provider und Modelle

Klacksy braucht ein Sprachmodell, um zu verstehen und zu handeln. Unter Einstellungen > LLM-Provider, LLM-Modelle und LLM-Sync-Log legen Sie fest, welche Anbieter und welche konkreten Modelle Klacks dafür nutzen darf.

## So funktioniert es

**Provider hinzufügen:** Ein Provider bündelt Basis-URL, API-Version und API-Schlüssel eines Anbieters. Sechs Anbieter (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) sind fest im Code verdrahtet; jeder weitere Provider läuft über eine generische, OpenAI-kompatible Anbindung — damit lassen sich z. B. Groq, Together AI, Fireworks, OpenRouter, xAI, Cerebras, Perplexity oder ein selbst betriebenes Modell einbinden. Über "Provider suchen" schlägt Klacks zusätzlich Anbieter vor, die Sie noch nicht angelegt haben: aus einem kuratierten Katalog verifizierter Adressen oder — falls eine Websuche konfiguriert ist — per Internet-Recherche. Jeder Vorschlag wird vor der Anzeige live auf Erreichbarkeit geprüft; ausgewählte Provider werden deaktiviert und ohne API-Schlüssel angelegt, den Sie danach selbst nachtragen.

**API-Schlüssel und Priorität:** Nach dem Speichern wird der Schlüssel in der Oberfläche nie wieder im Klartext angezeigt — nur ob einer hinterlegt ist ("Konfiguriert"). Die Priorität bestimmt die Reihenfolge, in der aktivierte Provider herangezogen werden.

**Modelle verwalten:** Unter LLM-Modelle legen Sie pro Provider einzelne Modelle an (Anzeigename, technische Modell-ID beim Anbieter, Kontextfenster, maximale Tokens, Kosten pro 1000 Input-/Output-Tokens). Ein Modell kann als Standardmodell markiert werden; ein Provider lässt sich nicht löschen, solange eines seiner Modelle der aktuelle Standard ist.

**LLM-Sync-Log:** Ein Hintergrunddienst prüft standardmässig alle 24 Stunden automatisch, welche Modelle bei den aktivierten Providern neu verfügbar oder weggefallen sind. Neue Modelle werden vorab mit einer echten Testanfrage geprüft und nur bei Erfolg aktiviert eingefügt; nicht mehr angebotene Modelle werden automatisch deaktiviert. Das Sync-Log zeigt die vollständige Historie je Provider mit Datum, Anzahl neuer/deaktivierter/fehlgeschlagener Modelle und aufklappbaren Testergebnissen. Admins erhalten nach dem nächsten Login zusätzlich eine Toast-Benachrichtigung über ungelesene Sync-Ereignisse.

## Gut zu wissen

- Nur sechs Anbieter (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) haben eine dedizierte Implementierung — alle übrigen Provider laufen über eine generische, OpenAI-kompatible Anbindung.
- Der Katalog für "Provider suchen" enthält aktuell zwölf verifizierte Anbieter; Web-Vorschläge erscheinen nur, wenn unter Einstellungen eine Websuche konfiguriert ist.
- Der Sync-Log-Dienst läuft unabhängig von Ihrer Sitzung im Hintergrund — Sie müssen die Seite dafür nicht offen halten.

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
