---
sidebar_position: 3
---

Under Innstillinger > DeepL legger du inn en DeepL API-nøkkel som Klacks kan bruke til å oversette tekster automatisk — for øyeblikket først og fremst innkommende e-poster i innboksen.

## Slik fungerer det

**API-nøkkel:** Et enkelt inntastingsfelt tar imot DeepL API-nøkkelen (format `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx` for det gratis Free-API-et, eller uten `:fx`-endelsen for det betalte Pro-API-et). Klacks gjenkjenner automatisk ut fra `:fx`-endelsen hvilken av de to DeepL API-adressene som skal brukes — en separat veksling mellom Free og Pro er ikke nødvendig. Konto og selve nøkkelen får du på deepl.com/pro-api.

**Bruk:** I "Innboksen" kan hver e-post oversettes til det gjeldende grensesnittspråket via oversettelsesikonet; original og oversettelse kan sammenlignes med en veksleknapp. Uten en lagret nøkkel er denne funksjonen ikke tilgjengelig.

## Greit å vite

- Denne innstillingen gjelder globalt for hele installasjonen — det finnes ingen nøkkel per bruker.
- Det finnes ingen egen "Test"-knapp på denne siden; om nøkkelen fungerer, viser seg ved det første oversettelsesforsøket i innboksen.
- Er nøkkelen ugyldig eller utløpt, gjenkjenner Klacks dette ut fra svaret fra DeepL (autentiseringsfeil) og melder dette i stedet for å vise en tom eller feilaktig oversettelse.
- Nøkkelen lagres kryptert og vises maskert i skjemaet.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
