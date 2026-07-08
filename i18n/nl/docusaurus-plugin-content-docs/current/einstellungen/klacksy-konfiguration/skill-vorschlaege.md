---
sidebar_position: 6
---

# Klacksy-skillvoorstellen

Klacksy leert van zijn eigen fouten: corrigeert u in de chat dat Klacksy de verkeerde vaardigheid (skill) heeft gekozen, dan onthoudt het systeem deze correctie. Onder Instellingen > Klacksy Skillvoorstellen zien beheerders welke verbeteringen aan skill-beschrijvingen daaruit worden voorgesteld, en beslissen zij over het overnemen ervan.

## Zo werkt het

**Waar de voorstellen vandaan komen:** Kiest Klacksy in de chat de verkeerde vaardigheid (skill) voor een verzoek en corrigeert de gebruiker dit, dan wordt deze chatreeks als "gecorrigeerd" gemarkeerd. Een interne optimalisator analyseert dergelijke gecorrigeerde reeksen en leidt daaruit concrete tekstwijzigingen voor skill-beschrijvingen af — met als doel dat Klacksy de betreffende vaardigheid de volgende keer correct toewijst.

**Voorstellen genereren:** De knop "Voorstellen genereren" start de analyse van de laatste 30 gecorrigeerde chatreeksen en genereert daaruit nieuwe voorstellen, mits er patronen te vinden zijn.

**Een voorstelkaart toont:** de betrokken skill en het gewijzigde veld, de wijziging in een voor/na-vergelijking, een onderbouwing waarom de wijziging zinvol is, en — uitklapbaar — de precieze gebruikersverzoeken die het voorstel hebben veroorzaakt.

**Beslissen:** Elk openstaand voorstel wordt afzonderlijk **overgenomen** (de skill-beschrijving wordt direct gewijzigd) of **verworpen** (het voorstel wordt verworpen zonder dat er iets wijzigt). Er vindt geen automatische overname plaats — er beslist altijd een mens mee.

## Goed om te weten

- Zonder correcties in de chat ontstaan er geen voorstellen — het systeem heeft echte foutcorrecties nodig als trainingsbasis, niet alleen gebruik.
- Deze functie wijzigt alleen beschrijvingsteksten van vaardigheden, zodat Klacksy ze correct selecteert — ze verandert niet wat een vaardigheid daadwerkelijk doet.
- Deze functie vereist beheerdersrechten.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks teruggezet.*
