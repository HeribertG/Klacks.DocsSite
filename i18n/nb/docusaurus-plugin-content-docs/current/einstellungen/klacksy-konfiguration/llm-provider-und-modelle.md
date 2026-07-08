---
sidebar_position: 1
---

# LLM-leverandører og modeller

Klacksy trenger en språkmodell for å forstå og handle. Under Innstillinger > LLM-leverandører, LLM-modeller og LLM-synkroniseringslogg bestemmer du hvilke leverandører og konkrete modeller Klacks kan bruke til dette.

## Slik fungerer det

**Legge til leverandør:** En leverandør samler base-URL, API-versjon og API-nøkkel til en tilbyder. Seks tilbydere (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) er fast innebygd i koden; alle andre leverandører kjøres via en generisk, OpenAI-kompatibel tilkobling — dermed kan man f.eks. koble til Groq, Together AI, Fireworks, OpenRouter, xAI, Cerebras, Perplexity eller en selvdrevet modell. Via "Søk etter leverandør" foreslår Klacks i tillegg leverandører du ennå ikke har opprettet: fra en kuratert katalog med verifiserte adresser eller — dersom et websøk er konfigurert — via internettsøk. Hvert forslag sjekkes live for tilgjengelighet før det vises; valgte leverandører opprettes deaktivert og uten API-nøkkel, som du deretter legger til selv.

**API-nøkkel og prioritet:** Etter lagring vises nøkkelen aldri igjen i klartekst i grensesnittet — kun om en er lagret ("Konfigurert"). Prioriteten bestemmer rekkefølgen aktiverte leverandører brukes i.

**Administrere modeller:** Under LLM-modeller oppretter du enkeltmodeller per leverandør (visningsnavn, teknisk modell-ID hos tilbyderen, kontekstvindu, maksimalt antall tokens, kostnad per 1000 input-/output-tokens). En modell kan markeres som standardmodell; en leverandør kan ikke slettes så lenge en av dens modeller er gjeldende standard.

**LLM-synkroniseringslogg:** En bakgrunnstjeneste sjekker som standard automatisk hver 24. time hvilke modeller som er blitt nye tilgjengelige eller falt bort hos aktiverte leverandører. Nye modeller testes på forhånd med en reell testforespørsel og settes bare inn som aktiverte ved suksess; modeller som ikke lenger tilbys, deaktiveres automatisk. Synkroniseringsloggen viser den fullstendige historikken per leverandør med dato, antall nye/deaktiverte/mislykkede modeller og utvidbare testresultater. Administratorer får dessuten en toast-varsling om uleste synkroniseringshendelser ved neste innlogging.

## Greit å vite

- Bare seks tilbydere (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) har en dedikert implementering — alle andre leverandører kjøres via en generisk, OpenAI-kompatibel tilkobling.
- Katalogen for "Søk etter leverandør" inneholder for øyeblikket tolv verifiserte tilbydere; webforslag vises bare hvis et websøk er konfigurert under Innstillinger.
- Synkroniseringstjenesten kjører uavhengig av din økt i bakgrunnen — du trenger ikke å holde siden åpen for det.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
