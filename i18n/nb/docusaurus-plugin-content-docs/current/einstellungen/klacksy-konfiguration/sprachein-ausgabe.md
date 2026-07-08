---
sidebar_position: 3
---

# Taleinngang og -utgang

Klacksy kan også betjenes med stemmen — under Innstillinger > Klacksy Tale stiller du inn hvilken tjeneste som omgjør stemmen din til tekst (Speech-to-Text) og hvilken stemme Klacksy svarer med (Text-to-Speech).

## Slik fungerer det

**Talegjenkjenning (STT):** Fire motorer kan velges — den gratis nettleseren (Web Speech API), Deepgram (sanntids-streaming), Groq Whisper (raskt og rimelig) samt AssemblyAI (streaming). For alle unntatt nettleseren legger du inn en egen API-nøkkel og kan teste tilkoblingen direkte.

**Taleutgang (TTS):** Også fire tilbydere — Edge TTS (gratis), OpenAI TTS, ElevenLabs og Google Cloud TTS. Avhengig av valgt tilbyder laster Klacks automatisk inn tilgjengelige stemmer; også her kan tilkoblingen testes.

**Utdatamodus:** Bestemmer om svar vises kun som tekst, kun som lyd, som tekst med manuelt utløst taleutgang, eller som tekst med automatisk taleutgang. Stillhetsgjenkjenningen (500–3000 ms, standard 1500 ms) bestemmer hvor lenge det ventes etter at du har sluttet å snakke, før opptaket sendes automatisk.

**Transkripsjons-rensing:** Er dette alternativet aktivt, går den rå STT-teksten i tillegg gjennom en LLM som fjerner fyllord, løser opp selvkorreksjoner og glatter ut grammatikk/tall. Modellen som brukes til dette, velger du selv; via "Finn beste modell" tester Klacks alle aktiverte modeller med et kontekstvindu på minst 16 000 tokens og foreslår de rimeligste, raskeste kandidatene (tidsavbrudd 30 sek. per modell). Rense-prompten er redigerbar og kan tilbakestilles til fabrikkinnstillingen.

**Ordbok:** For begreper som talegjenkjenningen ofte misforstår (f.eks. egennavn eller fagbegreper), oppretter du oppføringer med korrekt begrep, kategori, uttalevarianter og valgfri språktilknytning — Klacksy retter da disse begrepene målrettet.

## Greit å vite

- Nettleser-modus krever ingen API-nøkkel, men er avhengig av talegjenkjenningen til den aktuelle nettleseren og er ikke sammenlignbar i kvalitet med de betalte tjenestene.
- API-nøkler vises etter lagring bare som "Konfigurert", aldri igjen i klartekst.
- Modell-sjekken her tester utelukkende egnetheten for transkripsjons-rensing (kontekstvindu ≥ 16 000 tokens) — for generell egnethet som Klacksy-hovedmodell finnes en egen, strengere test (se Modell-tilkoblingstest).

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
