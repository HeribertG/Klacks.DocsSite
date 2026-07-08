---
sidebar_position: 2
---

# Personal Access Tokens

Personal Access Tokens (PAT-er) er langlevde API-nøkler som eksterne verktøy og tjenester bruker til å få sikker tilgang til Klacks uten brukernavn og passord — for eksempel KI-assistenter som Claude Desktop via Model Context Protocol (MCP), automatiseringsskript eller CI/CD-pipeliner.

## Slik fungerer det

**Opprette token:** Under Innstillinger > Personal Access Tokens klikker du på «Opprett nytt token», gir det et beskrivende navn (f.eks. `Claude Desktop` eller `CI-Pipeline`) og velger en gyldighetsperiode mellom 1 og 730 dager (standard: 365 dager). Etter opprettelsen vises tokenet i formatet `klacks_pat_<tilfeldig tegnfølge>` **nøyaktig én gang** — kopier det umiddelbart, for etterpå kan det ikke hentes frem igjen.

**Bruke:** Tokenet sendes som et Bearer-token i `Authorization`-headeren til hver API-forespørsel, f.eks. `Authorization: Bearer klacks_pat_...`. For MCP-klienter som Claude Desktop legger du det inn som miljøvariabelen `AUTHORIZATION` for MCP-serveren som peker til `/mcp`.

**Administrere:** Oversikten viser navn, opprettelsesdato, utløpsdato og siste bruk for hvert token — selve klartekst-tokenet vises aldri der igjen. Tokener som utløper i løpet av de neste 30 dagene, er merket i listen. Via Tilbakekall-knappen sperres et token umiddelbart og for godt.

## Greit å vite

- Klacks lagrer bare en SHA-256-hash av tokenet, aldri klartekst-tokenet selv — et tapt token kan ikke gjenopprettes, bare tilbakekalles og opprettes på nytt.
- Hvert token er knyttet til brukerkontoen din og har de samme rettighetene som din egen konto — det finnes ingen finkornet scope-begrensning per token.
- Bruk et eget token per verktøy, slik at du kan tilbakekalle det målrettet ved mistanke om misbruk, uten å avbryte andre integrasjoner.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
