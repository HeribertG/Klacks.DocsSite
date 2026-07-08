---
sidebar_position: 3
---

Under Innstillinger > Veiviser-innstillinger velger du KI-språkmodellen som «Holistic Harmonizer» — en av planleggingsassistentene i Klacks — bruker til sin vurdering.

## Slik fungerer det

I nedtrekksmenyen velger du blant de LLM-modellene som er aktivert i Klacks, den som Holistic Harmonizer skal bruke globalt (eller «(ingen)», for ikke å bruke noen). Via knappen «Test alle modeller» sender Klacks et lite testbilde til hver aktiverte modell og sjekker om den svarer og kan lese bildet — med opptil 90 sekunders tidsavbrudd per modell. Resultatet vises som en tabell med modell, leverandør, status (OK/feil), svartid og en knapp for å ta i bruk en modell som er testet med suksess.

Bildebehandling er her ikke en bagatell, men en forutsetning: Ifølge hjelpeteksten på siden krever denne assistenten («Veiviser 3») modeller med bildebehandling for å fungere.

## Greit å vite

- Denne siden gjelder **ikke** ett-klikks auto-planleggingen som automatisk fordeler vakter på medarbeidere — den kjører via en genetisk algoritme helt uten LLM og har ingen innstillinger her.
- Står «(ingen)» som modell, er Holistic Harmonizer i praksis deaktivert.
- Hvilke LLM-modeller som i det hele tatt er tilgjengelige for valg (aktivert/deaktivert), fastsettes et annet sted i KI-innstillingene — her velger du bare blant de allerede aktiverte modellene.
- Test-knappen er en ren selvtest (tilgjengelighet + bildeforståelse + svartid) og endrer i seg selv ingen planleggingsdata.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
