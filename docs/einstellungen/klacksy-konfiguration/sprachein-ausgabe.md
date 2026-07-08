---
sidebar_position: 3
---

# Sprachein- und -ausgabe

Klacksy lässt sich auch per Sprache bedienen — unter Einstellungen > Klacksy Sprache stellen Sie ein, mit welchem Dienst Ihre Stimme in Text verwandelt wird (Speech-to-Text) und mit welcher Stimme Klacksy antwortet (Text-to-Speech).

## So funktioniert es

**Spracherkennung (STT):** Vier Engines stehen zur Wahl — der kostenlose Browser (Web Speech API), Deepgram (Echtzeit-Streaming), Groq Whisper (schnell und günstig) sowie AssemblyAI (Streaming). Für alle ausser dem Browser hinterlegen Sie einen eigenen API-Schlüssel und können die Verbindung direkt testen.

**Sprachausgabe (TTS):** Ebenfalls vier Anbieter — Edge TTS (kostenlos), OpenAI TTS, ElevenLabs und Google Cloud TTS. Je nach gewähltem Anbieter lädt Klacks die verfügbaren Stimmen automatisch nach; auch hier lässt sich die Verbindung testen.

**Ausgabe-Modus:** Legt fest, ob Antworten nur als Text, nur als Audio, als Text mit manuell auslösbarer Sprachausgabe oder als Text mit automatischer Sprachausgabe erscheinen. Die Stille-Erkennung (500–3000 ms, Standard 1500 ms) bestimmt, wie lange nach dem Sprechen gewartet wird, bevor die Aufnahme automatisch abgeschickt wird.

**Transkriptions-Bereinigung:** Ist die Option aktiv, läuft der rohe STT-Text zusätzlich durch ein LLM, das Füllwörter entfernt, Selbstkorrekturen auflöst und Grammatik/Zahlen glättet. Das dafür verwendete Modell wählen Sie selbst; über "Bestes Modell finden" testet Klacks alle aktivierten Modelle mit einem Kontextfenster ab 16 000 Tokens und schlägt die günstigsten, schnellsten Kandidaten vor (Timeout 30 s pro Modell). Der Bereinigungs-Prompt ist editierbar und lässt sich auf die Werkseinstellung zurücksetzen.

**Wörterbuch:** Für Begriffe, die die Spracherkennung regelmässig falsch versteht (z. B. Eigennamen oder Fachbegriffe), legen Sie Einträge mit korrektem Begriff, Kategorie, Aussprache-Varianten und optionaler Sprachzuordnung an — Klacksy korrigiert diese Begriffe dann gezielt.

## Gut zu wissen

- Der Browser-Modus benötigt keinen API-Schlüssel, ist aber von der Spracherkennung des jeweiligen Browsers abhängig und in der Qualität nicht mit den bezahlten Diensten vergleichbar.
- API-Schlüssel werden nach dem Speichern nur noch als "Konfiguriert" angezeigt, nie mehr im Klartext.
- Der Modell-Check hier prüft ausschliesslich die Eignung für die Transkriptions-Bereinigung (Kontextfenster ≥ 16 000 Tokens) — für die generelle Eignung als Klacksy-Hauptmodell gibt es einen eigenen, strengeren Test (siehe Modell-Verbindungstest).

---
*Direkt ausprobieren: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, Daten werden täglich zurückgesetzt.*
