---
sidebar_position: 7
---

# Spamregler

Under Innstillinger > Spamregler definerer du filterregler som brukes til å klassifisere innkommende e-poster i Innboks-modulen automatisk som spam — reglene gjelder både ved løpende henting av nye e-poster (IMAP-polling) og ved en etterfølgende ny vurdering av e-poster som allerede er mottatt.

## Slik fungerer det

**Opprette regel:** Velg en regeltype — Avsender inneholder, Avsenderdomene, Emne inneholder eller Innhold inneholder — angi mønsteret som skal sjekkes, og klikk på Legg til.

**Administrere regler:** Hver regel kan aktiveres eller deaktiveres via en avkrysningsboks uten å slettes, samt fjernes permanent via papirkurv-knappen.

## Greit å vite

- Deaktiverte regler forblir lagret, men påvirker ikke lenger nye eller nyvurderte e-poster — nyttig for å sette en regel på pause midlertidig i stedet for å slette den.
- Klacks bruker samme postkasse for ERP-bestillingsimport som den vanlige e-post-innboks-modulen (arkitektur med én postkasse). En for bredt formulert regel (f.eks. et helt avsenderdomene) kan derfor teoretisk også klassifisere innkommende ERP-bestillings-e-poster som spam — sjekk nye regler nøye før du aktiverer dem.
- Bruk avsenderdomene-regler til å sperre hele uønskede avsenderorganisasjoner, i stedet for å registrere hver enkelt adresse som en avsender-inneholder-regel.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
