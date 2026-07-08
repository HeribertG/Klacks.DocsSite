---
sidebar_position: 4
---

# Autonominivåer

Hvor selvstendig skal Klacksy kunne handle før den spør deg? Under Innstillinger > Klacksy Autonomi bestemmer du dette for deg selv — innstillingen gjelder per brukerkonto, ikke felles for alle brukere.

## Slik fungerer det

**Fire nivåer:**

- **Foreslå** — Klacksy foreslår bare, hver endring trenger din bekreftelse.
- **Assistert** — reversible handlinger kjøres direkte, alt annet trenger bekreftelse.
- **Autonom** (standard) — alle handlinger kjøres direkte, unntatt spesielt følsomme.
- **Fullt autonom** — også flertrinnsplaner kjøres uten mellomliggende godkjenninger.

**Slik virker klassifiseringen:** Hver handling Klacksy kan utføre, er internt klassifisert etter risiko: rene lesehandlinger kjøres alltid umiddelbart; reversible eller scenariobundne handlinger (f.eks. i en testplanlegging) krever minst nivået Assistert; irreversible handlinger krever minst nivået Autonom. Følsomme handlinger — brukeradministrasjon, rettigheter og endringer av selve autonomi-innstillingen — krever **uavhengig av valgt nivå** alltid en uttrykkelig bekreftelse.

**Bekreftelsesarbeidsflyten:** Hvis en handling trenger din godkjenning, utfører Klacksy den ikke umiddelbart, men legger den til side med en ventetid på 5 minutter og oppsummerer hva som ville skje. Først når du uttrykkelig samtykker med dine egne ord, utløser Klacksy den ventende handlingen — den bekrefter aldri på egen hånd på dine vegne.

## Greit å vite

- Autonominivået er en personlig innstilling per brukerkonto — hver bruker kan velge sitt eget komfortnivå.
- Et høyere nivå betyr ikke at det ikke lenger spørres om noe: følsomme handlinger krever alltid bekreftelse.
- Som standard er nivået Autonom aktivt — det tilsvarer atferden Klacksy hadde allerede før autonominivåene ble innført.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
