---
sidebar_position: 2
---

# Personal Access Tokens

Personal Access Tokens (PAT'er) er langtidsholdbare API-nøgler, som gør det muligt for eksterne værktøjer og tjenester at tilgå Klacks sikkert uden brugernavn og adgangskode — f.eks. AI-assistenter som Claude Desktop via Model Context Protocol (MCP), automatiseringsscripts eller CI/CD-pipelines.

## Sådan fungerer det

**Opret token:** Under Indstillinger > Personal Access Tokens klikker du på "Opret nyt token", angiver et sigende navn (f.eks. `Claude Desktop` eller `CI-Pipeline`) og vælger en gyldighedsperiode mellem 1 og 730 dage (standard: 365 dage). Efter oprettelsen vises tokenet i formatet `klacks_pat_<tilfældig-tegnfølge>` **præcis én gang** — kopier det straks, for det kan ikke hentes frem igen bagefter.

**Anvendelse:** Tokenet sendes som bearer-token i `Authorization`-headeren for hver API-forespørgsel, f.eks. `Authorization: Bearer klacks_pat_...`. For MCP-klienter som Claude Desktop angiver du det som `AUTHORIZATION`-miljøvariablen for MCP-serveren, der peger på `/mcp`.

**Administration:** Oversigten viser navn, oprettelsesdato, udløbsdato og seneste anvendelse for hvert token — selve klartekst-tokenet vises aldrig igen der. Tokens, der udløber inden for de næste 30 dage, er markeret i listen. Via knappen Tilbagekald spærres et token øjeblikkeligt og permanent.

## Godt at vide

- Klacks gemmer kun en SHA-256-hash af tokenet, aldrig selve klartekst-tokenet — et mistet token kan ikke gendannes, kun tilbagekaldes og oprettes på ny.
- Hvert token er knyttet til din brugerkonto og har de samme rettigheder som din egen konto — der findes ingen finkornet scope-begrænsning pr. token.
- Brug et separat token pr. værktøj, så du målrettet kan tilbagekalde det ved mistanke om misbrug uden at afbryde andre integrationer.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
