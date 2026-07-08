---
sidebar_position: 6
---

# Klacksy Skill-forslag

Klacksy lærer av sine egne feil: Retter du i chatten at Klacksy valgte feil ferdighet, husker systemet denne korrigeringen. Under Innstillinger > Klacksy Skill-forslag ser administratorer hvilke forbedringer av skill-beskrivelser som foreslås ut fra dette, og bestemmer om de skal tas i bruk.

## Slik fungerer det

**Hvor forslagene kommer fra:** Velger Klacksy feil ferdighet (skill) for en forespørsel i chatten, og brukeren korrigerer det, blir denne chat-sekvensen merket som "korrigert". En intern optimerer analyserer slike korrigerte sekvenser og utleder konkrete tekstendringer i skill-beskrivelser — med mål om at Klacksy velger riktig ferdighet neste gang.

**Generere forslag:** Knappen "Generer forslag" starter analysen av de siste 30 korrigerte chat-sekvensene og genererer nye forslag dersom det finnes mønstre.

**Et forslagskort viser:** den berørte skillen og det endrede feltet, endringen i en før/etter-sammenligning, en begrunnelse for hvorfor endringen er hensiktsmessig, samt — utvidbart — de eksakte brukerforespørslene som utløste forslaget.

**Beslutning:** Hvert åpne forslag **godtas** enkeltvis (skill-beskrivelsen endres umiddelbart) eller **forkastes** (forslaget forkastes uten at noe endres). Det skjer ingen automatisk overtakelse — et menneske er alltid med i beslutningen.

## Greit å vite

- Uten korrigeringer i chatten oppstår det ingen forslag — systemet trenger reelle feilkorrigeringer som treningsgrunnlag, ikke bare bruk.
- Denne funksjonen endrer bare beskrivelsestekster for ferdigheter, slik at Klacksy velger dem riktig — den endrer ikke hva en ferdighet faktisk gjør.
- Denne funksjonen krever administratorrettigheter.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
