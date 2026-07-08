---
sidebar_position: 1
---

# LLM-leverantörer och modeller

Klacksy behöver en språkmodell för att förstå och agera. Under Inställningar > LLM-leverantörer, LLM-modeller och LLM-synkloggen anger du vilka leverantörer och vilka konkreta modeller Klacks får använda för detta.

## Så fungerar det

**Lägga till leverantör:** En leverantör samlar bas-URL, API-version och API-nyckel för en leverantör. Sex leverantörer (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) är fast inkodade; varje ytterligare leverantör går via en generisk, OpenAI-kompatibel anslutning — så kan t.ex. Groq, Together AI, Fireworks, OpenRouter, xAI, Cerebras, Perplexity eller en egendriven modell anslutas. Via "Sök leverantör" föreslår Klacks dessutom leverantörer som du ännu inte har skapat: från en kurerad katalog med verifierade adresser eller — om en websökning är konfigurerad — via internetsökning. Varje förslag kontrolleras live för tillgänglighet innan det visas; valda leverantörer skapas inaktiverade och utan API-nyckel, som du sedan själv fyller i.

**API-nyckel och prioritet:** Efter sparandet visas nyckeln aldrig igen i klartext i gränssnittet — bara om en är sparad ("Konfigurerad"). Prioriteten avgör i vilken ordning aktiverade leverantörer används.

**Hantera modeller:** Under LLM-modeller skapar du enskilda modeller per leverantör (visningsnamn, teknisk modell-ID hos leverantören, kontextfönster, max antal tokens, kostnad per 1000 in-/utdata-tokens). En modell kan markeras som standardmodell; en leverantör kan inte tas bort så länge en av dess modeller är aktuell standard.

**LLM-synkloggen:** En bakgrundstjänst kontrollerar som standard automatiskt var 24:e timme vilka modeller som blivit nytillgängliga eller tagits bort hos de aktiverade leverantörerna. Nya modeller testas i förväg med en riktig testförfrågan och läggs bara in aktiverade vid framgång; modeller som inte längre erbjuds inaktiveras automatiskt. Synkloggen visar den fullständiga historiken per leverantör med datum, antal nya/inaktiverade/misslyckade modeller och utfällbara testresultat. Administratörer får dessutom en toast-notifiering om olästa synkhändelser vid nästa inloggning.

## Bra att veta

- Endast sex leverantörer (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) har en dedikerad implementation — alla övriga leverantörer går via en generisk, OpenAI-kompatibel anslutning.
- Katalogen för "Sök leverantör" innehåller för närvarande tolv verifierade leverantörer; webbförslag visas bara om en websökning är konfigurerad under Inställningar.
- Synkloggtjänsten körs oberoende av din session i bakgrunden — du behöver inte hålla sidan öppen för det.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
