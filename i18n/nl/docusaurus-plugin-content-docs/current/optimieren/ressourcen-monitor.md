---
sidebar_position: 3
---

De resourcemonitor toont in één oogopslag hoe het gesteld is met de personeelsbezetting van een groep (of alle groepen) in het gekozen jaar — per dag één balk, over 365 dagen het hele jaarverloop.

## Zo werkt het

De weergave volgt de in de personeelsplanning gangbare "Capacity vs. Workload Chart" (in de projectmanagementliteratuur bekend als "Resource Histogram"). De elementen:

- **Groene balken — diensten:** aantal geplande diensten op die dag. Elke dienst telt als één medewerkerpositie; containerdiensten tellen als 1.
- **Grijze balken — afwezigheden:** aantal afwezige medewerkers, gestapeld op de groene balken. Een volledige vakantie- of ziekteregistratie telt als 1, een halve als 0,5 — ook in het weekend.
- **Roze gestippelde lijn — gewenste inzetbaarheid:** hoeveel medewerkers gemiddeld beschikbaar zouden zijn als de gewenste werkdagen per week worden aangehouden (standaard: 5 dagen werk, 2 dagen rust). Dat is het planningsdoel.
- **Rode stippellijn — maximale inzetbaarheid:** het fysieke/wettelijke maximum bij het maximaal toegestane aantal opeenvolgende werkdagen (standaard: 6). Ligt altijd op of boven de roze lijn.
- **Blauwe lijn — aantal medewerkers:** totale personeelsbezetting met een actief contract op de betreffende dag (headcount).

**Interpretatie:** naarmate de bovenkant van de groene balken de roze lijn nadert, is het personeel optimaal ingezet. Het verschil tussen de blauwe lijn en de bovenkant van de gestapelde balken is uw reserve.

Met de pijlknoppen rechtsboven wisselt u van jaar; via de groepsselectie beperkt u de weergave tot een locatie of team.

## Goed om te weten

- Ervaringsregel: de bovenkant van de grijze afwezigheidsbalken zou niet meer dan een derde van de kloof tussen diensten en totale bezetting mogen uitmaken — anders komt de operationele reserve in gevaar en zijn ziekte- of vakantiepieken moeilijk op te vangen.
- De waarden zijn schattingen en benaderingen, geen exacte afrekening — ze geven een indruk van de beschikbaarheid.
- De diensten komen uit de planning, niet uit de realisatie — daardoor zijn ook toekomstige diensten zichtbaar.
- Bij een 24/7-contract wordt de roze lijn over de week afgevlakt (ca. 0,71 per persoon en kalenderdag); bij een ma–vr-contract staat deze op werkdagen op 1,0, in het weekend op 0.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks gereset.*
