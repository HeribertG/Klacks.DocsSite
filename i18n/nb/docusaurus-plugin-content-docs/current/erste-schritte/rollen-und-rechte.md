---
sidebar_position: 4
---

# Roller og rettigheter

Klacks har nøyaktig to tildelbare rettighetsnivåer for innloggingskontoer: **Supervisor** og **Admin**. Det finnes ikke en tredje, teknisk selvstendig rolle — begreper som «Planlegger» beskriver nedenfor en **funksjon i den daglige driften**, ikke et ekstra rettighetsnivå.

## De to reelle rollene

**Supervisor** kan opprette, redigere og slette adresser, grupper, kontrakter, fravær og skift, samt godkjenne en dag eller en gruppe i vaktplanen og trekke denne godkjenningen tilbake igjen. Det å bare bekrefte enkelte arbeidstider krever derimot ingen spesiell rolle — det kan enhver innloggingskonto gjøre.

**Admin** kan i tillegg alt Supervisor kan, pluss: tilgang til samtlige innstillinger (inkludert selve brukeradministrasjonen), avslutte og gjenåpne perioder samt administrere spesielt beskyttede områder som identitetsleverandør, rapporter og kalenderregler.

Tildelingen skjer via en nedtrekksmeny i brukeradministrasjonen (tannhjul-symbolet) og trer i kraft umiddelbart, uten et eget lagre-klikk.

## «Planlegger» som funksjon, ikke som rolle

I hverdagen er det som regel en Supervisor-konto som utfører selve planleggingsarbeidet — starte autoplanlegging, tilpasse i planrutenettet med dra-og-slipp, sende dager eller grupper til godkjenning. Dette er ikke et eget rettighetsnivå, men rett og slett de rettighetene en Supervisor-konto uansett har.

## Greit å vite

- Den sist innloggede brukeren vises også i brukeradministrasjonen, men kan der ikke selv redigeres, få endret sine rettigheter eller slettes.
- Å endelig avslutte eller gjenåpne perioder er utelukkende forbeholdt Admin — også når en Supervisor allerede har godkjent dager eller grupper.
- En innloggingskonto må ikke nødvendigvis være koblet til et medarbeider-stamdatakort — brukeradministrasjon og personadministrasjon er atskilte områder.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
