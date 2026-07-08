---
sidebar_position: 4
---

# Roller og rettigheder

Klacks har præcis to tildelelige rettighedsniveauer for login-konti: **Supervisor** og **Admin**. Der findes ikke en tredje, teknisk selvstændig rolle — begreber som "planlægger" beskriver nedenfor en **funktion i den daglige drift**, ikke et ekstra rettighedsniveau.

## De to reelle roller

**Supervisor** må oprette, redigere og slette adresser, grupper, kontrakter, fravær og vagter samt i vagtplanen godkende en dag eller en gruppe og trække denne godkendelse tilbage igen. Den blotte bekræftelse af enkelte arbejdstider kræver derimod ingen særlig rolle — det kan enhver login-konto.

**Admin** må derudover alt, hvad Supervisor må, plus: adgang til samtlige indstillinger (inklusive selve brugerstyringen), afslutte og genåbne perioder samt administrere særligt beskyttede områder som identity provider, rapporter og kalenderregler.

Tildelingen sker via en dropdown i brugerstyringen (tandhjuls-ikonet) og træder øjeblikkeligt i kraft, uden et separat gem-klik.

## "Planlægger" som funktion, ikke som rolle

I hverdagen varetager som regel en Supervisor-konto selve planlægningsarbejdet — igangsætte autoplanlægning, tilpasse i planrastret via drag & drop, indsende dage eller grupper til godkendelse. Det er ikke et selvstændigt rettighedsniveau, men blot de rettigheder, en Supervisor-konto alligevel har.

## Godt at vide

- Den senest indloggede bruger vises også i brugerstyringen, men kan ikke selv redigeres, få ændret sine rettigheder eller slettes der.
- At afslutte perioder endeligt eller genåbne dem forbliver udelukkende forbeholdt Admin — selv hvis en Supervisor allerede har godkendt dage eller grupper.
- En login-konto behøver ikke nødvendigvis være knyttet til et medarbejder-stamdatakort — brugerstyring og personhåndtering er adskilte områder.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
