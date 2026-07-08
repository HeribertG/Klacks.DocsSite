---
sidebar_position: 4
---

Under Indstillinger > OpenRoute angiver du API-nøglen til den eksterne tjeneste openrouteservice.org, som Klacks bruger til ruteoptimering.

## Sådan fungerer det

OpenRouteService beregner rejsetider og afstande — for bilkørsel, cykling og gang — og leverer dermed grundlaget for ruteoptimeringen i Klacks. I sidens eneste felt indtaster du din personlige API-nøgle. En gratis nøgle får du via registreringslinket til openrouteservice.org, der er linket på siden.

## Godt at vide

- Nøglen sendes direkte fra browseren til openrouteservice.org og vises derfor bevidst **i klartekst** i stedet for maskeret (`***`) — modsat f.eks. e-mail-adgangskoder. Dette er tilsigtet, så du kan opdage en fejltastet eller udløbet nøgle — det er ikke en visningsfejl.
- I databasen gemmes nøglen alligevel krypteret.
- Uden en gyldig nøgle fungerer ruteoptimeringen ikke — rejsetider og afstande kan da ikke beregnes.
- Til den rene omdannelse af adresser til koordinater (geokodning) bruger Klacks en anden, separat tjeneste — denne nøgle er udelukkende til ruteberegningen.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
