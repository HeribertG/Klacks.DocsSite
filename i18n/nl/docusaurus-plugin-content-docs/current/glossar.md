---
sidebar_position: 8
---
# Woordenlijst

De begrippen die in Klacks en in deze documentatie steeds terugkomen — kort en in de volgorde waarin u ze tegenkomt.

## Planning

**Medewerkerrij**
De kleinste planbare eenheid. Niet de persoon en niet de dag, maar de rij van een persoon in een concreet roosterblad. Alle planwaarden hangen aan deze rij.

**Roosterblad**
Een container die **verwijzingen** naar medewerkerrijen verzamelt — geen kopieën. Daarom bestaat een persoon maar één keer, ongeacht in hoeveel deelroosters hij of zij voorkomt, en een wijziging is overal direct zichtbaar. Basis van de [modulaire planning](../planen/modulare-planung/).

**Auto-planning**
De assistent vult een planning volgens uw regels. De berekening draait op de achtergrond terwijl u verder werkt — zie [Auto-planning](../planen/auto-planung/).

**Beschikbaarheid**
Wanneer een persoon inzetbaar is — uur- of dagnauwkeurig, voor eigen en voor externe medewerkers. Zie [Beschikbaarheidsrooster](../planen/verfuegbarkeits-raster/).

**Bestelling (opdracht)**
Een schets van een inzet die nog kan worden bewerkt. Een bestelling is **nog niet planbaar**.

**Verzegelen**
De eenmalige, **onomkeerbare** stap die van een bestelling een planbare dienst maakt. Daarbij ontstaat tegelijk het planbare tegenstuk van de bestelling. Een planbare dienst rechtstreeks aanmaken bestaat in Klacks niet — elke dienst ontstaat door verzegelen. Zie [De levenscyclus van een dienst](../planen/schicht-lebenszyklus/).

**Dienst (ploegendienst)**
De planbare, verzegelde inzet. De term „ploegendienst" betekent hetzelfde.

**Goedkeuringsfasen (dienstrooster)**
Het dienstrooster doorloopt vier toestanden in vaste volgorde: **open → bevestigd → goedgekeurd → afgesloten**. Bevestigen mag elk aangemeld account; goedkeuren alleen Supervisor en Admin; afsluiten uitsluitend Admin. Zie [Goedkeuringsworkflow](../planen/freigabe-workflow/).

**Periode / periodeafsluiting**
De afrekeningsperiode (wekelijks, tweewekelijks, maandelijks of individueel; vastgelegd via het betalingsinterval). De afsluiting maakt een periode bindend en blijft voorbehouden aan Admin — zie [Periodeafsluiting](../planen/periodenabschluss/).

**Afwezigheid — twee dingen, één woord**
„Afwezigheid" duidt in het stamgegevensgedeelte de **catalogus van afwezigheidstypen** aan (naam, kleur, standaardlengte, standaardwaarde). De balken in de kalender zijn daarentegen óf een **wens** (een geplande afwezigheid, vrij verschuifbaar en zonder vergrendelingsniveau) óf een **geboekte afwezigheid** (overgenomen uit het inzetplan, op de pagina Afwezigheden alleen leesbaar en met vergrendelingsniveau). Wie die twee door elkaar haalt, zoekt op de verkeerde plek.

## AI-assistent

**Klacksy**
De AI-assistent van Klacks. Hij plant, legt uit en voert uit — met een vrij te kiezen model. Zie [Klacksy](../ki/klacksy-ki-assistent/).

**Skill**
Een afzonderlijke, afgebakende vaardigheid van Klacksy — een declaratieve wrapper rond concrete programmalogica („Medewerker zoeken", „Contract toewijzen", „Rapport maken"). Klacksy kiest tijdens de uitvoering de passende skills.

**Autonomieniveau**
Hoever Klacksy mag gaan zonder terugvraag:

| Niveau | Naam | Gedrag |
|---|---|---|
| 0 | Voorstellen | Elke schrijvende actie heeft uw bevestiging nodig |
| 1 | Ondersteund | Omkeerbare acties lopen vrij; definitieve en gevoelige vragen eerst na |
| 2 | Autonoom (standaard) | Alles behalve de als gevoelig ingedeelde acties loopt vrij |
| 3 | Volledig autonoom | Ook definitieve stappen lopen door |

Gevoelige acties — bijvoorbeeld het verwijderen van gebruikers of het wijzigen van rechten — vragen op **elk** niveau om bevestiging. Zie [Autonomieniveaus](../einstellungen/klacksy-konfiguration/autonomie-stufen/).

## Rollen en beheer

**Admin / Supervisor / Planner**
De drie toegangsniveaus. Admin mag alles, Supervisor aanmaken en bewerken, een account zonder rol is Planner. Het overzicht staat onder [Rollen en rechten](../erste-schritte/rollen-und-rechte/).

**Landenprofiel**
Een voorbereide set instellingen voor een land: taal, tijdzone, feestdagenkalender, weekend en begin van de week, arbeidstijdgrenzen, vakantierecht, toeslagen, standaard-loonexport en branchesjablonen. Wordt bij de installatie gekozen via `REGION`.

**Playground**
De openbare testomgeving op [play.klacks-software.ch](https://play.klacks-software.ch) met demogegevens — nadrukkelijk bedoeld om uit te proberen, zonder echte persoonsgegevens. Zie [Installatie en playground](../erste-schritte/installation-und-playground/).

**On-premise**
Het gebruik op uw eigen infrastructuur: uw hardware, uw database, uw gegevens. Het tegenbegrip van de gehoste variant.

**Updateservice**
De meegeleverde service die ondertekende updates installeert — met een back-up vooraf en automatische rollback bij problemen. Zie [Updates en rollback](../betrieb/updates-und-rollback/).

**Rollen en gegevensbescherming**
Klacks belt niet naar huis: er is geen terugmelding van uw gegevens aan de fabrikant. Voor gegevens die daadwerkelijk moeten worden verwijderd, zorgt de [Gegevensbewaring](../einstellungen/system-sicherheit/datenaufbewahrung/) — verwijderingen worden na afloop van de termijn fysiek uitgevoerd.

---

*Ontbreekt er een begrip of klopt een uitleg niet? [Klacks-community op Discord](https://discord.gg/YRP8p2abVC).*
