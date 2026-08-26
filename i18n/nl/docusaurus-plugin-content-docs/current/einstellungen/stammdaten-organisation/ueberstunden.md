---
sidebar_position: 7
---

# Overuren

Onder Instellingen > Compliance & toeslagregels (expertmodus) > Overuren legt u vast vanaf hoeveel opgebouwde uren meerwerk toeslagplichtig wordt en hoe hoog de toeslag per trap uitvalt.

## Zo werkt het

**Berekeningsbasis:** dagelijks of wekelijks — meer is er niet. Een maandelijkse of jaarlijkse basis is niet voorzien. Bij "wekelijks" begint de week op de geconfigureerde eerste weekdag.

**Tot drie trappen:** elke trap bestaat uit twee velden — "Trap X vanaf uren" (het aantal opgebouwde uren in de dag respectievelijk de week vanaf waar deze trap ingaat) en "Trap X toeslag" in procent. De hoogst geconfigureerde trap is naar boven toe open.

**Elke trap telt alleen de uren binnen zijn eigen bandbreedte**, niet alle uren vanaf nul. Begint trap 1 bij 8 uur en trap 2 bij 10 uur, dan betaalt een dag van tienenhalf uur het trap-1-tarief voor de twee uren tussen 8 en 10, en het trap-2-tarief alleen voor het halve uur daarboven — nooit het trap-2-tarief voor alle tienenhalf uur. Eén enkel werkblok kan zo meerdere toeslagposten opleveren, één per bereikte trap.

**Een onvolledige trap wordt stilzwijgend overgeslagen:** ontbreekt de uren-opgave, of is de toeslag nul of negatief, dan telt deze trap niet mee. Er kunnen dus nul tot drie trappen daadwerkelijk actief zijn.

**De toeslag is het opslagpercentage, niet het totaalbedrag:** 25% betekent een kwart uur extra per in deze trap gewerkt uur — niet dat het uur met een factor 1,25 wordt uitbetaald. De toeslagmodus ernaast (multiplicator of vast bedrag per uur) bepaalt alleen de eenheid; de berekening erachter blijft gelijk.

**Wat als reeds gewerkte uren telt:** de trappen worden gevuld op basis van de eerder op dezelfde dag respectievelijk in dezelfde week geleverde uren — eerst gesorteerd op datum, dan op starttijd. Zo neemt elk werkblok zijn eigen positie in de bandbreedte in, en wordt geen uur dubbel aan een hogere trap toegerekend. Verandert een eerder item, dan worden de latere opnieuw berekend.

**Waar de waarden vandaan komen:** deze kaart levert de bedrijfsbrede waarden — die gelden alleen als er geen andere bron voorrang heeft. Is aan het contract van de persoon een [planningsregel](../../planen/planungsregeln.md) met eigen overurentrappen gekoppeld, dan heeft die voorrang; een voor de betreffende datum geldige latere versie van deze regel vervangt indien nodig de complete set, maar valt zonder eigen overurenblok terug op de hier getoonde bedrijfsinstellingen, niet op de planningsregel. Is nergens een trap geconfigureerd, dan dient als laatste terugvaloptie alleen de **overurengrens** uit de planningsregel — en wel uitsluitend als startwaarde van de eerste trap, nooit als toeslagpercentage. De bronnen worden nooit gemengd: wie de eerste trap levert, levert ook alle volgende.

**Twee voorwaarden, zonder welke geen toeslag ontstaat:**

- De dienst heeft een berekeningsmacro nodig. Werk op een dienst zonder macro wordt nooit op meeruren gecontroleerd.
- Minstens één volledige trap moet zijn geconfigureerd. Zonder zo'n trap is het resultaat niet "nul overuren", maar vindt er helemaal geen controle plaats.

**Uitgezonderd:** correcties en invallers worden nooit op overuren gecontroleerd — alleen regulier werk telt mee.

**Samenloop met andere toeslagen:** hetzelfde uur kan tegelijk kwalificeren voor meeruren en voor een omstandigheidsgebonden toeslag, zoals nacht- of weekendwerk. Of beide worden opgeteld of alleen de hoogste geldt, bepaalt niet deze kaart, maar de berekeningsmacro van de betreffende dienst.

**Opslaan:** de kaart bevindt zich in de sectie Compliance & toeslagregels van de instellingenpagina (samen met vervangende rust, toeslagmodus en compliance-handhaving), alleen zichtbaar in de expertmodus. Wijzigingen worden verzameld en via de gezamenlijke opslagbalk van de instellingenpagina opgeslagen of verworpen — er is geen eigen opslaanknop op deze kaart.

## Goed om te weten

- Deze kaart dekt uitsluitend de automatische overurenstaffeling op basis van een dag- of weekdrempel. Toeslagen voor nacht-, zondag- of feestdagwerk worden daarentegen generiek per script berekend — zie [Macro's](../klacksy-konfiguration/makros.md).
- Een trap zonder "vanaf uren"-waarde of met een toeslag van 0% of minder wordt genegeerd — zo kunt u afzonderlijke trappen deactiveren zonder ze te verwijderen.
- Zonder minstens één volledige trap en zonder berekeningsmacro op de dienst ontstaan er in principe geen overurentoeslagen, ook niet bij zeer lange diensten.
- Een planningsregel met eigen overurentrappen overschrijft deze bedrijfsbrede waarden volledig, niet alleen afzonderlijke trappen.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks gereset.*
