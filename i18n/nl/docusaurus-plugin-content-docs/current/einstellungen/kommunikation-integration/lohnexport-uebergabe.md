---
sidebar_position: 7
---

# Loonexport-overdracht

Bij het verzegelen van een naar groep afgebakende periode kan Klacks de loongegevens ervan automatisch overdragen aan een extern loonsysteem. Deze pagina legt uit wat daarvoor nodig is en waarom de overdracht soms schijnbaar niets oplevert — het meest voorkomende supportgeval rond deze functie.

## Zo werkt het

**Voorwaarde: extra pakket voor de loonexport.** De automatische overdracht aan een loonsysteem is geen kernfunctie, maar vereist een eigen extra pakket dat onder Instellingen > Feature-plugins geïnstalleerd **en** actief moet zijn. Ontbreekt het extra pakket of is het alleen gedeactiveerd, dan levert de overdracht absoluut niets op — geen bestand, geen melding, geen voor u zichtbaar item. Dat is strenger dan een gedeactiveerd exportformaat in de exportinstellingen: dat laat tenminste een item achter in het serverlog; hier is zelfs dat er niet.

**Eenmalige overdracht (idempotentie).** De automatische overdracht loopt maar precies één keer per combinatie van groep, doelsysteem en exact datumbereik — dat voorkomt dat dezelfde loongegevens per ongeluk twee keer bij het loonsysteem aankomen. Heropent u een reeds verzegelde periode, corrigeert u iets en verzegelt u opnieuw, dan wordt de tweede overdracht zonder melding overgeslagen: voor precies die combinatie bestaat al een overdrachtsitem, en het heropenen verwijdert dat niet.

**Een handmatige download telt net zo mee.** Een handmatige, incidentele loondownload voor dezelfde groep/hetzelfde doelsysteem/dezelfde periode genereert hetzelfde item als een automatische overdracht. Een handmatige download die vóór de automatische overdracht wordt uitgevoerd, „verbruikt" deze voor de betreffende periode net zo goed, alsof ze al automatisch had gelopen.

| Waarom kwam er niets (nieuws) aan? | Item aanwezig? | Blokkeert een latere handmatige download? |
|---|---|---|
| Extra pakket niet geïnstalleerd/actief | nee | nee |
| Voor precies deze combinatie al overgedragen | ja (zichtbaar in het tabblad „Protocol" van de periodeafsluiting) | nee |

**Twee precisiepunten:**

- Een handmatige download neemt **geen** eventueel door support vastgelegde exportformaat-correctie over — hij gebruikt altijd de standaardwaarden, ook als er voor het doelsysteem een actieve correctie bestaat die in het automatische traject zou gelden.
- De eenmaal-blokkade is exact: ze geldt alleen bij identieke groep, identiek doelsysteem en identieke begin-/einddatum. Een andere periode of een ander doelsysteem wordt door een eerdere overdracht niet geblokkeerd.

**Als er na het verzegelen niets aankomt of gecorrigeerde cijfers moeten worden nagestuurd:** controleer eerst of het passende extra pakket onder Instellingen > Feature-plugins geïnstalleerd en actief is. Na een heropening en een correctie is de betrouwbare manier om gecorrigeerde cijfers in het loonsysteem te krijgen de **handmatige export** in het gebied Periodeafsluiting (tabblad „Exports") — die is niet onderworpen aan de extra-pakket-blokkade, noch aan de eenmaal-blokkade van de automatische overdracht. Omdat ook deze geen exportformaat-correctie overneemt, controleert u in dat geval de geëxporteerde cijfers handmatig tegen een eventueel actieve correctie.

## Goed om te weten

- Basis voor elke overdracht is een verzegelde, naar groep afgebakende periode — hoe een periode wordt verzegeld, staat beschreven op de pagina [Periodeafsluiting](../../planen/periodenabschluss.md). Verzegelen en heropenen zijn daar voorbehouden aan administratieve rollen.
- Deze pagina beschrijft de **export** van loongegevens vanuit Klacks naar een loonsysteem. De omgekeerde stroom — de **import** van bestellingen vanuit een ERP-systeem naar Klacks — beschrijven de [ERP-overnamepunten](./erp-uebernahmepunkte.md).
- Extra pakketten worden centraal onder Instellingen > Feature-plugins beheerd: installeren, activeren/deactiveren of volledig verwijderen.
- Een gedeactiveerd extra pakket blijft geïnstalleerd, maar blokkeert de automatische overdracht net zo volledig als een niet-geïnstalleerd pakket.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks gereset.*
