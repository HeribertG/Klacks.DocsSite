---
sidebar_position: 3
---

# Röstinmatning och -utmatning

Klacksy kan även användas via röst — under Inställningar > Klacksy Röst ställer du in vilken tjänst som omvandlar din röst till text (Speech-to-Text) och med vilken röst Klacksy svarar (Text-to-Speech).

## Så fungerar det

**Röstigenkänning (STT):** Fyra motorer finns att välja mellan — den kostnadsfria webbläsaren (Web Speech API), Deepgram (realtidsströmning), Groq Whisper (snabb och prisvärd) samt AssemblyAI (streaming). För alla utom webbläsaren lagrar du en egen API-nyckel och kan testa anslutningen direkt.

**Röstutmatning (TTS):** Även här fyra leverantörer — Edge TTS (kostnadsfri), OpenAI TTS, ElevenLabs och Google Cloud TTS. Beroende på vald leverantör hämtar Klacks automatiskt de tillgängliga rösterna; även här kan anslutningen testas.

**Utmatningsläge:** Bestämmer om svar visas enbart som text, enbart som ljud, som text med manuellt utlöst röstutmatning eller som text med automatisk röstutmatning. Tystnadsdetekteringen (500–3000 ms, standard 1500 ms) avgör hur länge det väntas efter att man slutat tala innan inspelningen skickas automatiskt.

**Transkriptionsrensning:** Är alternativet aktivt går den råa STT-texten dessutom genom en LLM som tar bort utfyllnadsord, löser upp självrättelser och slätar ut grammatik/siffror. Modellen som används för detta väljer du själv; via "Hitta bästa modell" testar Klacks alla aktiverade modeller med ett kontextfönster på minst 16 000 tokens och föreslår de billigaste, snabbaste kandidaterna (timeout 30 s per modell). Rensnings-prompten är redigerbar och kan återställas till fabriksinställningen.

**Ordbok:** För termer som röstigenkänningen regelbundet missförstår (t.ex. egennamn eller fackbegrepp) skapar du poster med korrekt term, kategori, uttalsvarianter och valfri språktilldelning — Klacksy rättar sedan dessa termer specifikt.

## Bra att veta

- Webbläsarläget kräver ingen API-nyckel, men är beroende av respektive webbläsares röstigenkänning och håller inte samma kvalitet som de betalda tjänsterna.
- API-nycklar visas efter sparandet bara som "Konfigurerad", aldrig mer i klartext.
- Modell-checken här kontrollerar enbart lämpligheten för transkriptionsrensning (kontextfönster ≥ 16 000 tokens) — för den generella lämpligheten som Klacksys huvudmodell finns ett eget, strängare test (se Modell-anslutningstest).

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
