---
sidebar_position: 7
---

# Planningskwaliteit controleren: overtredingen, lacunes en overgeslagen plaatsingen

Na een run van de planningsassistenten plaatst Klacks drie diagnosetabellen naast het resultaat: waar het plan tegen een regel aanloopt, waar een kwalificatie ontbreekt en wat helemaal niet is ingepland.

## Zo werkt het

De drie rapporten verschijnen in het dialoogvenster van de betreffende planningsassistent — niet in het planrooster. Ze horen bij het resultaat van een assistent-run en zijn alleen zichtbaar voor admins, omdat de automatische planning als geheel de adminrol vereist. Elk rapport noemt het aantal items in de titel en **wordt helemaal niet getoond als er niets is gevonden** — een ontbrekend vak is dus goed nieuws.

**Zo bereikt u de dialoogvensters:** de toverstafknop in het dienstrooster start in de standaardtoestand direct een planningsrun, zonder een dialoogvenster te tonen. Met **Ctrl+Shift+H** schakelen admins de knop om naar een dropdown met de afzonderlijke planningsassistenten (Plan, Fuzzy Harmonizer, Holistic Harmonizer, Background Optimizer, Recovery) — pas via deze dropdown openen de dialoogvensters met de diagnosetabellen.

**Kwalificatielacunes** verschijnen samen met het resultaat, dus *vóórdat* u het overneemt. Kolommen: ernst, dienst, datum, vereiste kwalificatie, reden — plus een kolom „Medewerker" zodra minstens één rij een persoon noemt. Als reden staat *Niet aanwezig*, *Verlopen* of *Niveau te laag*. Daarachter schuilen twee verschillende gevallen: ofwel bleef een dienstplek leeg omdat niemand beschikbaar de vereiste kwalificatie heeft — dan noemt de rij geen persoon. Of een persoon bleef op een dienst staan waarvoor deze niet gekwalificeerd is — dan staat de naam erbij. Ontbreekt de kwalificatie alleen in het systeem, leg deze dan vast bij de persoon; de [Kwalificatiecatalogus](../einstellungen/stammdaten-organisation/qualifikationen.md) beschrijft hoe kwalificaties worden beheerd. Plan anders iemand anders in of pas de vereiste van de dienst aan.

**Compliance-overtredingen** verschijnen *nadat* u het resultaat hebt overgenomen. Kolommen: datum, medewerker, opmerking; de opmerking benoemt de overtreden regel in gewone taal, met de concrete waarden. Rode rijen zijn fouten, gele zijn waarschuwingen en meldingen. Bij de twee harmonie-assistenten toont het rapport uitsluitend wat het nieuwe scenario ten opzichte van het echte plan **extra** met zich meebrengt — plus hoeveel van deze overtredingen als blokkerend zijn ingesteld. Die verhinderen dat het scenario wordt overgenomen totdat ze zijn verholpen of door een bevoegde persoon uitdrukkelijk zijn overschreven.

**Overgeslagen plaatsingen** bestaan alleen bij de assistent voor de dienstplanning, eveneens na het overnemen — en steeds rood. Kolommen: datum, medewerker, dienst, reden. Hier staat niet wat is ingepland, maar wat Klacks bewust **niet** heeft geschreven: toewijzingen die een als blokkerend ingestelde regel zouden hebben overtreden. De reden verschijnt als korte categorie („Rusttijd te kort", „Te veel opeenvolgende werkdagen", „Tijdconflict" …). Afhankelijk van de situatie biedt Klacks bevoegde personen daaronder aan om de run met een override alsnog over te nemen; alle anderen krijgen de melding om de assistent met geactiveerde override te herhalen of een bevoegde persoon daarom te vragen. Elke override wordt gelogd.

Welke regels worden gecontroleerd en hoe streng ze gelden, legt u vast in de [Planningsregels](../planen/planungsregeln.md); hoe het plan eigenlijk ontstaat, beschrijft [Auto-planning: het plan in seconden](../planen/auto-planung.md).

## Goed om te weten

- Een geblokkeerd item verwerpt niet het hele plan: alleen de betrokken toewijzingen vervallen, de correcte items van dezelfde persoon worden toch geschreven.
- Voor de ernst van kwalificatielacunes geldt een simpele regel: **fout** alleen als een als verplicht gemarkeerde kwalificatie volledig ontbreekt. Een verlopen kwalificatie, een te laag niveau en elke optionele vereiste verschijnen als **waarschuwing**.
- Een lege dienstplek verschijnt alleen in de kwalificatielacunes als er echt niemand beschikbaar in aanmerking kwam. Bleef de plek om andere redenen leeg, dan is dat gewone onderdekking en wordt dat hier niet gemeld.
- Doorloopt de automatische planning als totaalrun, dan meldt Klacks het resultaat alleen als korte melding met het aantal kwalificatielacunes — de uitgebreide tabellen horen bij de dialoogvensters van de afzonderlijke assistenten.
- De rapporten zijn puur weergaven: u kunt ze niet bewerken en ze wijzigen niets. Corrigeren doet u in [Het planrooster: uw interactieve tijdmatrix](../planen/plan-raster.md) of door een nieuwe run.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks gereset.*
