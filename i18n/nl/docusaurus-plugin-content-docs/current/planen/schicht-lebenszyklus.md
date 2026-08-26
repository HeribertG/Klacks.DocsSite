---
sidebar_position: 8
---

# De levenscyclus van een dienst: van opdracht tot deelstuk

Voordat een dienst überhaupt bezet kan worden, doorloopt hij vier fasen — van de vrij bewerkbare opdracht via de onveranderlijke verzegelde opdracht naar de planbare dienst en diens deelstukken. De zin daarachter: wat is afgesproken, blijft blijvend naleesbaar; wat de dagelijkse praktijk daarna herplant, blijft toch beweeglijk.

## Zo werkt het

**1. Opdracht — vrij bewerkbaar.** Elke nieuwe dienst begint hier. Op de dienstenpagina opent de knop **+ nieuwe bestelling** het invoerscherm; u bewerkt de opdracht zo vaak u wilt, alle velden staan open. In het inzetplan verschijnt hij nog niet, en daardoor kunnen er ook nog geen medewerkers op worden ingepland. Een loutere schets is hij toch niet — hij is een echte opdracht, alleen nog niet verzegeld. In de dienstenlijst voert Klacks deze fase onder **Bestellingen**. Schakelt u daar over naar **Planbare diensten**, dan heet de knop **+ nieuwe dienst**: die maakt een opdracht zonder klantrelatie aan — voor algemeen werk dat niemand extern in opdracht geeft en betaalt. De kaart *Adres* vervalt dan; ook deze dienst doorloopt de vier fasen.

**2. Verzegelde opdracht — onveranderlijk.** Staat de opdracht vast, dan verzegelt u deze met de slotknop in de kaart *Algemeen*. Vanaf dat moment is hij vergrendeld en blijft hij blijvend bewaard als bindende weergave van de afspraak — ook dan nog, wanneer de dagelijkse praktijk de dienst allang heeft herpland. Na het opslaan is dit **niet omkeerbaar**. Welke opdrachten deze fase al hebben bereikt, toont in de dienstenlijst het selectievakje **Alleen verzegelde bestellingen tonen**.

**3. Planbare dienst — hier wordt gepland.** Het verzegelen genereert in één keer, en precies één enkele keer, de planbare dienst: een met de opdracht verbonden kopie. Pas deze dienst verschijnt in [Het planrooster: uw interactieve tijdmatrix](../planen/plan-raster.md), pas hierop kunnen medewerkers worden geboekt — en hij blijft bewerkbaar. Een later opnieuw opslaan genereert geen tweede kopie. In de dienstenlijst vindt u hem onder **Planbare diensten**.

**4. Deelstukken — de opgesplitste dienst.** Een planbare dienst kan worden opgesplitst, bijvoorbeeld naar dagen of tijdvakken. De bestaande dienst wordt daarbij zelf een deelstuk, de andere ontstaan ernaast. Alle deelstukken zijn op hun beurt planbaar en dragen dan de eigenlijke bezetting. De verzegelde opdracht blijft daarvan onaangetast — die is en blijft het contract op de achtergrond.

**Wanneer de slotknop actief wordt:** hij blijft grijs zolang de opdracht niet volledig genoeg is voor de planning — afkorting, naam en vanaf-datum zijn ingevuld, minstens één weekdag en minstens één groep zijn gekozen, en zowel het aantal taken als het aantal medewerkers per dienst zijn groter dan nul. De tooltip zegt het onmiskenbaar: „Na vergrendeling is de opdracht onveranderlijk en gereed voor planning."

**De enige uitzondering op de onveranderlijkheid:** heeft een verzegelde opdracht geen tot-datum — bijvoorbeeld omdat de opdracht doorlopend wordt verlengd of het einde nog open is —, dan mag u dit ene veld ook achteraf nog invullen. Voorwaarde: vanaf de gekozen datum zijn nog geen diensten ingepland. Daarna is ook dit veld vergrendeld, zoals alle andere.

**Een voorbeeld:** op 1 mei legt u de opdracht „Bruiloft Müller" vast en verfijnt u deze gedurende twee dagen. Op 3 mei bevestigt de klant — u verzegelt. Klacks legt de opdracht definitief vast en maakt ernaast de planbare dienst aan. Op 4 mei voert de planning twee medewerkers in, op 5 mei wordt de dienst in twee deelstukken gesplitst. Op 1 juni wordt de periode afgesloten en zijn de items op de deelstukken vergrendeld. De verzegelde opdracht van 3 mei is bij dit alles nooit gewijzigd.

**De kaarten van het invoerscherm.** Het scherm is opgebouwd uit kaarten die u afzonderlijk in- en uitklapt; opslaan en verwerpen gebeurt via de opslagbalk onder aan de werkruimte. Een deel van de kaarten verschijnt pas wanneer u in de kaart *Algemeen* de schakelaar **Expertmodus** inschakelt:

- **Algemeen** — afkorting (maximaal 6 tekens; Klacks stelt deze automatisch voor terwijl u de naam typt), naam, vanaf- en tot-datum, en notities. Hier bevinden zich ook de slotknop en de schakelaar voor de expertmodus.
- **Groep** — wijst de dienst toe aan een of meer groepen. Minstens één groep is verplicht; zolang er geen is gekozen, wijst een infovak daarop.
- **Vereiste kwalificaties** — welke [kwalificaties](../einstellungen/stammdaten-organisation/qualifikationen.md) de dienst vereist, telkens met minimumniveau (laag tot expert) en de aanduiding of ze verplicht is.
- **Uren en weekdagen** — vanaf-tijd, tot-tijd en duur, plus de weekdagen waarop de dienst valt, daarnaast twee feestdagregels. In de expertmodus kunt u de dienst hier in plaats daarvan als tijdvenster voeren: hij ligt dan flexibel in het venster tussen vanaf- en tot-tijd, en geteld wordt de ingevoerde duur.
- **Macro** (expertmodus) — koppelt de dienst aan een [macro](../einstellungen/klacksy-konfiguration/makros.md) voor de duur- en loonberekening.
- **Adres** — de klant respectievelijk inzetlocatie, opgezocht via naam of ID-nummer. De filterkolom rechts bakent precies deze zoekopdracht af.
- **Bijzondere kenmerken** (expertmodus) — sporadische inzet inclusief periodiciteit, briefing en debriefing, reistijd heen en terug, plus het aantal medewerkers en taken per dienst.
- **Standaardonkosten** (expertmodus) — onkosten die bij deze dienst regelmatig voorkomen, telkens met omschrijving, bedrag en de aanduiding of ze belastingplichtig zijn.

Hoe de planbare diensten vervolgens worden bezet, beschrijven [Auto-planning: het plan in seconden](../planen/auto-planung.md) en [Het planrooster: uw interactieve tijdmatrix](../planen/plan-raster.md).

## Goed om te weten

- **Verzegelen betekent hier iets anders dan in de goedkeuringsworkflow.** Het verzegelen van een opdracht bevriest de *beschrijving* van de dienst — wat er moet gebeuren, blijvend. De [Goedkeuringsworkflow: van concept naar bindende planning](../planen/freigabe-workflow.md) en de [Periodeafsluiting](../planen/periodenabschluss.md) vergrendelen daarentegen de *items op concrete dagen*. Beide verlopen onafhankelijk van elkaar.
- **Opdrachten ontstaan ook automatisch.** Naast het invoerscherm is de [ERP-import](../einstellungen/kommunikation-integration/erp-uebernahmepunkte.md) de tweede weg: bestellingen die daarvandaan komen, belanden eveneens eerst als onverzegelde opdracht en moeten worden gecontroleerd en verzegeld.
- **Een vergeten opdracht meldt zich.** Blijft een opdracht kort voor de start onverzegeld, dan maakt [Klacksy als proactief teamlid](../ki/klacksy-proaktiv.md) u daarop attent met het bevindingstype „Openstaande opdracht" — want onverzegeld betekent: niet planbaar.
- **Containerdiensten werken iets anders.** Een container is een omhulsel dat meerdere deeldiensten bundelt; hij heeft daarom noch klant noch adres, en de kaarten *Adres* en *Standaardonkosten* vervallen. De kaart *Bijzondere kenmerken* toont bij hem alleen de optie voor de sporadische inzet. Het selectievakje „Is een container" vindt u in de expertmodus in de kaart *Algemeen*, en instellen kan alleen zolang de opdracht nog onverzegeld is.
- **Sporadische diensten en tijdvenster-diensten tellen niet mee.** Beide verschijnen bewust niet in de dienstenbalk van de [Resourcemonitor](../optimieren/ressourcen-monitor.md), omdat ze geen vaste dagelijkse behoefte weergeven.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks gereset.*
