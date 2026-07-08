---
sidebar_position: 3
---

# Speech Input and Output

Klacksy can also be operated by voice — under Settings > Klacksy Voice you configure which service turns your voice into text (speech-to-text) and which voice Klacksy uses to reply (text-to-speech).

## How it works

**Speech recognition (STT):** Four engines are available — the free Browser option (Web Speech API), Deepgram (real-time streaming), Groq Whisper (fast and cheap), and AssemblyAI (streaming). For all except Browser you enter your own API key and can test the connection directly.

**Speech output (TTS):** Also four providers — Edge TTS (free), OpenAI TTS, ElevenLabs, and Google Cloud TTS. Depending on the chosen provider, Klacks automatically loads the available voices; here too, the connection can be tested.

**Output mode:** Determines whether responses appear only as text, only as audio, as text with manually triggered speech output, or as text with automatic speech output. Silence detection (500–3000 ms, default 1500 ms) determines how long to wait after speaking stops before the recording is submitted automatically.

**Transcription cleanup:** When this option is active, the raw STT text additionally passes through an LLM that removes filler words, resolves self-corrections, and smooths out grammar/numbers. You choose the model used for this yourself; via "Find best model," Klacks tests all enabled models with a context window of at least 16,000 tokens and suggests the cheapest, fastest candidates (30 s timeout per model). The cleanup prompt is editable and can be reset to the factory default.

**Dictionary:** For terms that speech recognition regularly misunderstands (e.g. proper names or technical terms), you create entries with the correct term, category, pronunciation variants, and an optional language assignment — Klacksy then corrects these terms specifically.

## Good to know

- Browser mode needs no API key, but depends on the speech recognition of the respective browser and isn't comparable in quality to the paid services.
- API keys are shown only as "Configured" after saving, never again in plain text.
- The model check here exclusively tests suitability for transcription cleanup (context window ≥ 16,000 tokens) — for general suitability as Klacksy's main model there is a separate, stricter test (see Model Connection Test).

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
