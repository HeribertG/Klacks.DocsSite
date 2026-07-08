---
sidebar_position: 5
---

# Modelverbindingstest

Niet elk taalmodel is geschikt voor Klacksy — het moet betrouwbaar gestructureerde functieaanroepen leveren in plaats van in proza te antwoorden. Onder Instellingen > Klacksy Modelcontrole test Klacks dit automatisch voor alle geconfigureerde modellen.

## Zo werkt het

**De test:** Een klik op "Beste modellen zoeken" stuurt elk geconfigureerd model (ook gedeactiveerde) dezelfde kleine testopdracht: "Maak een nieuwe medewerker aan met de naam Anna Müller." Het model moet hierop reageren met de juiste gestructureerde functieaanroep en de correcte naamparameters — niet met een tekstantwoord. Bovendien moet het contextvenster minstens 32.000 tokens omvatten, zodat de systeemprompt en vaardigheden van Klacksy erin passen. Elke test loopt met een tijdslimiet van 30 seconden.

**Resultaat:** Modellen die aan beide criteria voldoen, gelden als "geschikt" en worden automatisch geactiveerd; ongeschikte modellen worden gedeactiveerd. De resultatenlijst is gesorteerd op geschiktheid, dan op functieaanroep-vaardigheid, kosten, latentie en contextvenster.

**Standaardmodel instellen:** Via "Als standaard" kiest u rechtstreeks uit de resultatenlijst welk model Klacksy voortaan standaard gebruikt. Zonder eigen keuze stelt Klacks automatisch het best geschikte model als standaard in.

## Goed om te weten

- De test controleert alle opgeslagen modellen, niet alleen geactiveerde — ook tot dusver gedeactiveerde modellen kunnen hierdoor worden geactiveerd als ze de test doorstaan.
- Een geslaagde test is geen kostenbescherming: dure maar geschikte modellen worden eveneens geactiveerd. Kosten per 1000 tokens zijn zichtbaar in de resultatenlijst.
- Deze test is specifiek gericht op functieaanroepen voor handelingsbekwaamheid en staat los van de modelcontrole bij de taalinstellingen, die een lager contextvenster voor pure transcriptie-opschoning laat volstaan.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks teruggezet.*
