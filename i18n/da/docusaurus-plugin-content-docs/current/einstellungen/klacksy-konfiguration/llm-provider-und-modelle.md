---
sidebar_position: 1
---

# LLM-udbydere og modeller

Klacksy har brug for en sprogmodel for at kunne forstå og handle. Under Indstillinger > LLM-udbydere, LLM-modeller og LLM-synkroniseringslog fastlægger du, hvilke udbydere og konkrete modeller Klacks må bruge til dette.

## Sådan fungerer det

**Tilføj udbyder:** En udbyder samler en anbieters basis-URL, API-version og API-nøgle. Seks udbydere (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) er fast forbundet i koden; alle andre udbydere kører via en generisk, OpenAI-kompatibel forbindelse — dermed kan f.eks. Groq, Together AI, Fireworks, OpenRouter, xAI, Cerebras, Perplexity eller en selvdrevet model tilkobles. Via "Søg udbyder" foreslår Klacks desuden udbydere, du endnu ikke har oprettet: fra et kurateret katalog af verificerede adresser eller — hvis en websøgning er konfigureret — via internetsøgning. Hvert forslag tjekkes live for tilgængelighed, før det vises; valgte udbydere oprettes deaktiveret og uden API-nøgle, som du efterfølgende selv tilføjer.

**API-nøgle og prioritet:** Efter lagring vises nøglen aldrig igen i klartekst i brugerfladen — kun om en er gemt ("Konfigureret"). Prioriteten bestemmer rækkefølgen, hvori aktiverede udbydere anvendes.

**Administrer modeller:** Under LLM-modeller opretter du enkelte modeller pr. udbyder (visningsnavn, teknisk model-ID hos udbyderen, kontekstvindue, maksimalt antal tokens, omkostninger pr. 1000 input-/output-tokens). En model kan markeres som standardmodel; en udbyder kan ikke slettes, så længe en af dens modeller er den aktuelle standard.

**LLM-synkroniseringslog:** En baggrundstjeneste tjekker som standard automatisk hver 24. time, hvilke modeller der er blevet tilgængelige eller er bortfaldet hos de aktiverede udbydere. Nye modeller testes forud med en reel testforespørgsel og indsættes kun aktiveret ved succes; modeller, der ikke længere tilbydes, deaktiveres automatisk. Synkroniseringsloggen viser den fulde historik pr. udbyder med dato, antal nye/deaktiverede/mislykkede modeller og udfoldelige testresultater. Administratorer får desuden en toast-notifikation om ulæste synkroniseringshændelser efter næste login.

## Godt at vide

- Kun seks udbydere (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) har en dedikeret implementering — alle øvrige udbydere kører via en generisk, OpenAI-kompatibel forbindelse.
- Kataloget til "Søg udbyder" indeholder aktuelt tolv verificerede udbydere; webforslag vises kun, hvis en websøgning er konfigureret under Indstillinger.
- Synkroniseringslog-tjenesten kører uafhængigt af din session i baggrunden — du behøver ikke holde siden åben af den grund.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
