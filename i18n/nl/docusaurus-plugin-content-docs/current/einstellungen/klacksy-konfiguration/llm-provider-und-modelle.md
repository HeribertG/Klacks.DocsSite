---
sidebar_position: 1
---

# LLM-providers en -modellen

Klacksy heeft een taalmodel nodig om te begrijpen en te handelen. Onder Instellingen > LLM-providers, LLM-modellen en LLM-synchronisatielogboek bepaalt u welke aanbieders en welke concrete modellen Klacks daarvoor mag gebruiken.

## Zo werkt het

**Provider toevoegen:** Een provider bundelt de basis-URL, API-versie en API-sleutel van een aanbieder. Zes aanbieders (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) zijn vast in de code verankerd; elke andere provider loopt via een generieke, OpenAI-compatibele koppeling — daarmee kunt u bijvoorbeeld Groq, Together AI, Fireworks, OpenRouter, xAI, Cerebras, Perplexity of een zelf gehost model aansluiten. Via "Providers zoeken" stelt Klacks bovendien aanbieders voor die u nog niet heeft aangemaakt: uit een samengestelde catalogus van geverifieerde adressen of — als een websearch is geconfigureerd — via internetonderzoek. Elk voorstel wordt vóór weergave live op bereikbaarheid gecontroleerd; geselecteerde providers worden gedeactiveerd en zonder API-sleutel aangemaakt, die u daarna zelf aanvult.

**API-sleutel en prioriteit:** Na het opslaan wordt de sleutel in de interface nooit meer in leesbare tekst getoond — alleen of er een is opgeslagen ("Geconfigureerd"). De prioriteit bepaalt de volgorde waarin geactiveerde providers worden geraadpleegd.

**Modellen beheren:** Onder LLM-modellen legt u per provider afzonderlijke modellen aan (weergavenaam, technische model-ID bij de aanbieder, contextvenster, maximale tokens, kosten per 1000 input-/outputtokens). Een model kan als standaardmodel worden gemarkeerd; een provider kan niet worden verwijderd zolang een van zijn modellen de huidige standaard is.

**LLM-synchronisatielogboek:** Een achtergronddienst controleert standaard elke 24 uur automatisch welke modellen bij de geactiveerde providers nieuw beschikbaar zijn gekomen of zijn weggevallen. Nieuwe modellen worden vooraf met een echte testaanvraag gecontroleerd en alleen bij succes geactiveerd toegevoegd; niet meer aangeboden modellen worden automatisch gedeactiveerd. Het synchronisatielogboek toont de volledige geschiedenis per provider met datum, aantal nieuwe/gedeactiveerde/mislukte modellen en uitklapbare testresultaten. Beheerders krijgen na de volgende login bovendien een toast-melding over ongelezen synchronisatiegebeurtenissen.

## Goed om te weten

- Slechts zes aanbieders (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) hebben een specifieke implementatie — alle overige providers lopen via een generieke, OpenAI-compatibele koppeling.
- De catalogus voor "Providers zoeken" bevat momenteel twaalf geverifieerde aanbieders; websuggesties verschijnen alleen als onder Instellingen een websearch is geconfigureerd.
- De synchronisatiedienst draait onafhankelijk van uw sessie op de achtergrond — u hoeft de pagina daarvoor niet open te houden.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks teruggezet.*
