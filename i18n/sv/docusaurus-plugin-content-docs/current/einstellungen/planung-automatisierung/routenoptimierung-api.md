---
sidebar_position: 4
---

Under Inställningar > OpenRoute anger du API-nyckeln för den externa tjänsten openrouteservice.org, som Klacks använder för ruttoptimering.

## Så fungerar det

OpenRouteService beräknar restider och avstånd — för bilkörning, cykling och gång — och utgör därmed grunden för ruttoptimeringen i Klacks. Du anger din personliga API-nyckel i sidans enda fält. En kostnadsfri nyckel får du via registreringslänken till openrouteservice.org som finns länkad på sidan.

## Bra att veta

- Nyckeln skickas direkt från webbläsaren till openrouteservice.org och visas därför medvetet **i klartext** i stället för maskerad (`***`) — till skillnad från exempelvis e-postlösenord. Detta är avsiktligt, så att du kan upptäcka ett oavsiktligt skrivfel eller en utgången nyckel — det är inget visningsfel.
- I databasen lagras nyckeln ändå krypterad.
- Utan giltig nyckel fungerar inte ruttoptimeringen — restider och avstånd kan då inte beräknas.
- För själva omvandlingen av adresser till koordinater (geokodning) använder Klacks en annan, separat tjänst — denna nyckel gäller uteslutande för ruttberäkningen.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
