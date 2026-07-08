---
sidebar_position: 3
---

# Spraakin- en -uitvoer

Klacksy is ook via spraak te bedienen — onder Instellingen > Klacksy Taal stelt u in met welke dienst uw stem in tekst wordt omgezet (Speech-to-Text) en met welke stem Klacksy antwoordt (Text-to-Speech).

## Zo werkt het

**Spraakherkenning (STT):** Er zijn vier engines beschikbaar — de gratis browser (Web Speech API), Deepgram (realtime streaming), Groq Whisper (snel en goedkoop) en AssemblyAI (streaming). Voor alle behalve de browser voert u een eigen API-sleutel in en kunt u de verbinding direct testen.

**Spraakuitvoer (TTS):** Eveneens vier aanbieders — Edge TTS (gratis), OpenAI TTS, ElevenLabs en Google Cloud TTS. Afhankelijk van de gekozen aanbieder laadt Klacks de beschikbare stemmen automatisch na; ook hier kan de verbinding worden getest.

**Uitvoermodus:** Bepaalt of antwoorden alleen als tekst, alleen als audio, als tekst met handmatig te activeren spraakuitvoer of als tekst met automatische spraakuitvoer verschijnen. De stiltedetectie (500–3000 ms, standaard 1500 ms) bepaalt hoe lang er na het spreken wordt gewacht voordat de opname automatisch wordt verzonden.

**Transcriptie-opschoning:** Is deze optie actief, dan loopt de ruwe STT-tekst extra door een LLM, dat stopwoorden verwijdert, zelfcorrecties oplost en grammatica/getallen gladstrijkt. Het hiervoor gebruikte model kiest u zelf; via "Beste model zoeken" test Klacks alle geactiveerde modellen met een contextvenster vanaf 16.000 tokens en stelt de goedkoopste, snelste kandidaten voor (timeout 30 s per model). De opschoningsprompt is bewerkbaar en kan worden teruggezet naar de fabrieksinstelling.

**Woordenboek:** Voor begrippen die de spraakherkenning regelmatig verkeerd verstaat (bijv. eigennamen of vaktermen), legt u items aan met het juiste begrip, categorie, uitspraakvarianten en optionele taaltoewijzing — Klacksy corrigeert deze begrippen vervolgens gericht.

## Goed om te weten

- De browsermodus vereist geen API-sleutel, maar is afhankelijk van de spraakherkenning van de betreffende browser en qua kwaliteit niet vergelijkbaar met de betaalde diensten.
- API-sleutels worden na het opslaan alleen nog als "Geconfigureerd" getoond, nooit meer in leesbare tekst.
- De modelcontrole hier controleert uitsluitend de geschiktheid voor de transcriptie-opschoning (contextvenster ≥ 16.000 tokens) — voor de algemene geschiktheid als Klacksy-hoofdmodel is er een eigen, strengere test (zie Modelverbindingstest).

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks teruggezet.*
