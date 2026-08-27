---
sidebar_position: 7
---

# Tillgänglighetsrutnätet: vem som är tillgänglig, och när

I stället för att gissa vem som är tillgänglig när, registrerar du det: I tillgänglighetsrutnätet fyller du för varje medarbetare i, timme för timme eller dag för dag, när personen står till förfogande — inte kundkretsens tillgänglighet, utan de egna och externa medarbetarnas.

## Så fungerar det

- **Periodnavigering:** Pilarna bläddrar en period bakåt eller framåt, periodknappen öppnar en minikalender för att hoppa direkt till en period. Hur lång en period är — vecka, 2 veckor eller månad — bestäms automatiskt av betalningsintervallet för den valda gruppen.
- **Valbar timupplösning:** Ett skjutreglage ställer in kolumnernas finhet: 1 timme, 2 timmar, 4 timmar, förmiddag/eftermiddag eller hel dag. Ett klick på en grövre cell sätter alla underliggande timmar samtidigt.
- **Radhuvud med sortering och filter:** Medarbetarlistan till vänster kan sorteras efter förnamn, efternamn, företag eller avtalsmässigt garanterade timmar, och kan avgränsas via kryssruta till egna respektive externa medarbetare; sökfältet i sidhuvudet filtrerar dessutom efter namn eller ID-nummer.
- **Färgkodning:** De definierade veckoslutsdagarna och helgdagarna får egna bakgrundsfärger, så att arbetsfria dagar syns direkt. Vilka veckodagar som räknas som veckoslut är konfigurerbart — det är inte överallt lördag och söndag (t.ex. sabbat eller andra landsspecifika vilodagar).
- **Redigering med mus eller tangentbord:** Ett klick växlar en cell, att dra med nedtryckt musknapp markerar flera celler på en gång; med piltangenterna navigerar du på samma sätt genom rutnätet och bekräftar med mellanslag eller Enter.
- **Automatisk sparning:** Det finns ingen Spara-knapp — ändringar sparas automatiskt ungefär en sekund efter den senaste inmatningen.

## Bra att veta

- En dag utan någon markering förblir helt öppen för planeringen. Så snart minst en timme på en dag är markerad som tillgänglig gäller den dagen som fullständigt registrerad: Endast de markerade timmarna står till förfogande för planeringen, alla övriga timmar den dagen är spärrade.
- Kundkretsen visas aldrig i rutnätet — synliga är uteslutande egna och externa medarbetare med ett medlemskap under den visade tidsperioden.
- En bokad frånvaro åsidosätter tillgängligheten fullständigt — även med ikryssad ruta schemaläggs personen inte den dagen.
- De registrerade tillgängligheterna flödar direkt in i [Autoplanering: ett klick, resten körs i bakgrunden](../planen/auto-planung.md): algoritmen planerar enbart inom de anmälda tiderna.

![Klacks tillgänglighetsrutnät](/img/app-availability-de.png)

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
