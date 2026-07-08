---
sidebar_position: 3
---

# Dataoppbevaring

Under Innstillinger > Dataoppbevaring fastsetter du hvor lenge slettede datasett — medarbeidere, adresser, grupper, tjenester, arbeidstider, fravær, pauser og annet — blir værende i systemet før de fjernes uigjenkallelig.

## Slik fungerer det

**Sletting i to trinn:** Når du sletter et datasett i Klacks, blir det først bare merket med en soft delete-markering (markert som slettet, men fysisk fortsatt til stede). Først etter at fristen som er konfigurert her har utløpt, fjerner en bakgrunnstjeneste som kjører daglig, de radene som er markert som slettet, **fysisk og uigjenkallelig** fra databasen — på tvers av alle berørte tabeller, ikke bare for ett enkelt område.

**Angi oppbevaringsfrist:** Inntastingsfeltet aksepterer verdier mellom 30 og 36 500 dager (fra rundt 1 måned til 100 år); ved siden av viser Klacks fristen også i år/måneder. Standardverdien er 3650 dager (10 år).

## Greit å vite

- En forkorting av fristen påvirker også datasett som allerede er slettet for lenge siden: Alt som er eldre enn den nye fristen, fjernes ved neste kjøring av bakgrunnstjenesten — sjekk før du forkorter fristen om dette er ønsket.
- Den fysiske slettingen er endelig — det finnes ingen gjenoppretting etterpå, heller ikke via support.
- Denne innstillingen er det tekniske grunnlaget for slettefristene som er beskrevet i personvernerklæringen; den gjelder globalt for alle datatyper som støtter soft delete, og kan ikke konfigureres per modul.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
