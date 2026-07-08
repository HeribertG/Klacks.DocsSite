---
sidebar_position: 6
---

# Klacksy skill-forslag

Klacksy lærer af sine egne fejl: Retter du i chatten, at Klacksy har valgt den forkerte evne, husker systemet denne rettelse. Under Indstillinger > Klacksy Skill-forslag ser administratorer, hvilke forbedringer til skill-beskrivelser der foreslås ud fra dette, og beslutter om de skal overtages.

## Sådan fungerer det

**Hvor forslagene kommer fra:** Vælger Klacksy den forkerte evne (skill) til en forespørgsel i chatten, og brugeren retter det, markeres denne chat-sekvens som "rettet". En intern optimering evaluerer sådanne rettede sekvenser og udleder konkrete tekstændringer til skill-beskrivelser heraf — med det mål, at Klacksy vælger den pågældende evne korrekt næste gang.

**Generer forslag:** Knappen "Generer forslag" igangsætter evalueringen af de seneste 30 rettede chat-sekvenser og genererer nye forslag ud fra dette, hvis der findes mønstre.

**Et forslagskort viser:** den berørte skill og det ændrede felt, ændringen i en før/efter-sammenligning, en begrundelse for hvorfor ændringen giver mening, samt — udfoldelig — de præcise brugerforespørgsler, der udløste forslaget.

**Beslutning:** Hvert åbent forslag **overtages** enkeltvis (skill-beskrivelsen ændres straks) eller **forkastes** (forslaget kasseres, uden at noget ændres). Der sker ingen automatisk overtagelse — et menneske træffer altid beslutningen.

## Godt at vide

- Uden rettelser i chatten opstår der ingen forslag — systemet har brug for reelle fejlrettelser som træningsgrundlag, ikke bare brug.
- Denne funktion ændrer kun beskrivelsestekster for evner, så Klacksy vælger dem korrekt — den ændrer ikke, hvad en evne rent faktisk gør.
- Denne funktion kræver administratorrettigheder.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
