---
sidebar_position: 3
---

# Tale-input og -output

Klacksy kan også betjenes via tale — under Indstillinger > Klacksy Sprog indstiller du, hvilken tjeneste der omdanner din stemme til tekst (Speech-to-Text), og med hvilken stemme Klacksy svarer (Text-to-Speech).

## Sådan fungerer det

**Talegenkendelse (STT):** Fire motorer kan vælges — den gratis browser (Web Speech API), Deepgram (realtids-streaming), Groq Whisper (hurtig og billig) samt AssemblyAI (streaming). For alle undtagen browseren gemmer du din egen API-nøgle og kan teste forbindelsen direkte.

**Taleoutput (TTS):** Ligeledes fire udbydere — Edge TTS (gratis), OpenAI TTS, ElevenLabs og Google Cloud TTS. Afhængig af den valgte udbyder henter Klacks automatisk de tilgængelige stemmer; også her kan forbindelsen testes.

**Output-tilstand:** Fastlægger, om svar kun vises som tekst, kun som lyd, som tekst med manuelt udløst taleoutput eller som tekst med automatisk taleoutput. Stilhedsdetektionen (500–3000 ms, standard 1500 ms) bestemmer, hvor længe der ventes efter tale, før optagelsen automatisk sendes.

**Transskriptionsoprydning:** Er denne indstilling aktiv, går den rå STT-tekst desuden gennem en LLM, der fjerner fyldord, opløser selvkorrektioner og glatter grammatik/tal. Den model, der bruges til dette, vælger du selv; via "Find bedste model" tester Klacks alle aktiverede modeller med et kontekstvindue fra 16.000 tokens og foreslår de billigste, hurtigste kandidater (timeout 30 sek. pr. model). Oprydningsprompten kan redigeres og nulstilles til fabriksindstillingen.

**Ordbog:** For udtryk, som talegenkendelsen jævnligt misforstår (f.eks. egennavne eller fagudtryk), opretter du poster med korrekt udtryk, kategori, udtale-varianter og valgfri sprogtilknytning — Klacksy retter derefter disse udtryk målrettet.

## Godt at vide

- Browser-tilstanden kræver ingen API-nøgle, men er afhængig af den pågældende browsers talegenkendelse og kan kvalitetsmæssigt ikke sammenlignes med de betalte tjenester.
- API-nøgler vises efter lagring kun som "Konfigureret", aldrig mere i klartekst.
- Model-tjekket her tester udelukkende egnethed til transskriptionsoprydning (kontekstvindue ≥ 16.000 tokens) — til generel egnethed som Klacksys hovedmodel findes en separat, strengere test (se Model-forbindelsestest).

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
