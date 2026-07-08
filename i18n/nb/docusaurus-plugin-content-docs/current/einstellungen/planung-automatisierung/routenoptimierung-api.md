---
sidebar_position: 4
---

Under Innstillinger > OpenRoute lagrer du API-nøkkelen for den eksterne tjenesten openrouteservice.org, som Klacks bruker til ruteoptimalisering.

## Slik fungerer det

OpenRouteService beregner reisetider og avstander — for bilkjøring, sykling og gange — og gir dermed grunnlaget for ruteoptimaliseringen i Klacks. I det eneste feltet på denne siden fyller du inn din personlige API-nøkkel. En gratis nøkkel får du via registreringslenken til openrouteservice.org som er lenket på siden.

## Greit å vite

- Nøkkelen sendes direkte fra nettleseren til openrouteservice.org og vises derfor bevisst **i klartekst** i stedet for maskert (`***`) — i motsetning til f.eks. e-postpassord. Dette er tilsiktet, slik at du kan oppdage en utilsiktet skrivefeil eller en utløpt nøkkel — det er ikke en visningsfeil.
- I databasen lagres nøkkelen likevel kryptert.
- Uten en gyldig nøkkel fungerer ikke ruteoptimaliseringen — reisetider og avstander kan da ikke beregnes.
- For den rene omregningen av adresser til koordinater (geokoding) bruker Klacks en annen, separat tjeneste — denne nøkkelen er utelukkende beregnet for ruteberegning.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
