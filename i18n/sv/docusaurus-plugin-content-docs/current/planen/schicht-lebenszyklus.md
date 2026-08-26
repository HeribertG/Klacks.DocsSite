---
sidebar_position: 8
---

# Ett skifts livscykel: från beställning till segment

Innan ett skift över huvud taget kan bemannas genomgår det fyra steg — från den fritt redigerbara beställningen via den oföränderliga förseglade beställningen till det planeringsbara skiftet och dess segment. Tanken bakom detta: Det som avtalats förblir varaktigt läsbart; det som vardagen därefter planerar om förblir ändå rörligt.

## Så fungerar det

**1. Beställning — fritt redigerbar.** Varje nytt skift börjar här. På skiftsidan öppnar knappen **+ ny beställning** registreringsformuläret; du bearbetar beställningen så ofta du vill, alla fält står öppna. I schemat visas den ännu inte, och därmed kan heller inga medarbetare schemaläggas på den. En ren skiss är den ändå inte — den är en riktig beställning, bara ännu inte förseglad. I skiftlistan listar Klacks detta steg under **Beställningar**. Växlar du där till **Planeringsbara skift** heter knappen **+ nytt skift**: Den skapar en beställning utan kundkoppling — för allmänt arbete som ingen extern part beställer och betalar för. Kortet *Adress* utgår då; de fyra stegen genomgår även det här skiftet.

**2. Förseglad beställning — oföränderlig.** Är beställningen fastställd förseglar du den med låsknappen i kortet *Allmänt*. Från och med det ögonblicket är den spärrad och bevaras varaktigt som en bindande avbild av avtalet — även då den löpande verksamheten för länge sedan har planerat om skiftet. Efter sparandet är detta **inte reversibelt**. Vilka beställningar som redan nått det här steget visar kryssrutan **Visa endast förseglade beställningar** i skiftlistan.

**3. Planeringsbart skift — här planeras det.** Förseglingen skapar i ett svep, och exakt en enda gång, det planeringsbara skiftet: en kopia kopplad till beställningen. Först det här skiftet visas i [Planeringsrutnätet: din interaktiva tidsmatris](../planen/plan-raster.md), först på det kan medarbetare bokas — och det förblir redigerbart. Ett senare, förnyat sparande skapar ingen andra kopia. I skiftlistan hittar du det under **Planeringsbara skift**.

**4. Segment — det tillskurna skiftet.** Ett planeringsbart skift kan skäras till, till exempel efter dagar eller tidsavsnitt. Det tidigare skiftet blir då själv ett segment, de övriga uppstår bredvid. Alla segment är i sin tur planeringsbara och bär då den egentliga bemanningen. Den förseglade beställningen förblir opåverkad av detta — den är och förblir avtalet i bakgrunden.

**När låsknappen blir aktiv:** Den förblir grå tills beställningen är fullständig nog för planering — förkortning, namn och från-datum är ifyllda, minst en veckodag och minst en grupp är valda, och både antalet uppgifter och antalet medarbetare per skift är större än noll. Verktygstipset säger det entydigt: "Efter spärrning är beställningen oföränderlig och redo för planering."

**Det enda undantaget från oföränderligheten:** Har en förseglad beställning inget till-datum — till exempel för att beställningen löpande förlängs eller dess slut ännu är öppet — får du sätta just det fältet även i efterhand. Förutsättning: Från och med det valda datumet är inga skift ännu inplanerade. Därefter är även det här fältet spärrat som alla andra.

**Ett exempel:** Den 1 maj registrerar du beställningen "Bröllop Müller" och finjusterar den under två dagar. Den 3 maj bekräftar kunden — du förseglar. Klacks skriver fast beställningen och skapar samtidigt det planeringsbara skiftet. Den 4 maj bokar disponeringen in två medarbetare, den 5 maj delas skiftet i två segment. Den 1 juni avslutas perioden och posterna på segmenten spärras. Den förseglade beställningen från den 3 maj har genom allt detta aldrig ändrats.

**Registreringsformulärets kort.** Formuläret är indelat i kort som du fäller ut och ihop var för sig; sparande och förkastande sker via sparraden längst ner i arbetsytan. En del av korten visas först när du i kortet *Allmänt* slår på brytaren **Expertläge**:

- **Allmänt** — Förkortning (högst 6 tecken; Klacks föreslår den automatiskt medan du skriver namnet), namn, från- och till-datum samt anteckningar. Här sitter även låsknappen och brytaren för expertläget.
- **Grupp** — knyter skiftet till en eller flera grupper. Minst en grupp är obligatorisk; så länge ingen är vald påpekar en informationsruta det.
- **Nödvändiga kvalifikationer** — vilka [kvalifikationer](../einstellungen/stammdaten-organisation/qualifikationen.md) skiftet kräver, vardera med lägsta nivå (Låg till Expert) och uppgift om huruvida den är obligatorisk.
- **Timmar och veckodagar** — från-tid, till-tid och varaktighet samt veckodagarna då skiftet förekommer, dessutom två helgdagsregler. I expertläget kan du i stället föra skiftet som en tidsram här: Det ligger då flexibelt inom fönstret mellan från- och till-tid, och det är den angivna varaktigheten som räknas.
- **Makro** (expertläge) — kopplar skiftet till ett [makro](../einstellungen/klacksy-konfiguration/makros.md) för varaktighets- och löneberäkningen.
- **Adress** — kunden respektive insatsplatsen, sökt via namn eller ID-nummer. Filterkolumnen till höger avgränsar just den sökningen.
- **Särskilda kännetecken** (expertläge) — sporadisk insats samt periodicitet, briefing och debriefing, res- och returtid samt antalet medarbetare och uppgifter per skift.
- **Standardutlägg** (expertläge) — utlägg som regelbundet uppstår vid det här skiftet, vardera med beteckning, belopp och uppgift om huruvida de är skattepliktiga.

Hur de planeringsbara skiften därefter bemannas beskrivs i [Autoplanering: schemat på sekunder](../planen/auto-planung.md) och [Planeringsrutnätet: din interaktiva tidsmatris](../planen/plan-raster.md).

## Bra att veta

- **Att försegla betyder här något annat än i godkännandeflödet.** Förseglingen av en beställning fryser skiftets *beskrivning* — vad som ska göras, varaktigt. [Godkännandeflödet: från utkast till bindande schema](../planen/freigabe-workflow.md) och [Periodavslutet](../planen/periodenabschluss.md) spärrar däremot *posterna på konkreta dagar*. Bägge löper oberoende av varandra.
- **Beställningar uppstår även automatiskt.** Vid sidan av registreringsformuläret är [ERP-importen](../einstellungen/kommunikation-integration/erp-uebernahmepunkte.md) den andra vägen: Beställningar som kommer därifrån hamnar likaså först som en oförseglad beställning och måste granskas och förseglas.
- **En glömd beställning hör av sig.** Förblir en beställning oförseglad strax innan den ska börja uppmärksammar [Klacksy som proaktiv teammedlem](../ki/klacksy-proaktiv.md) det med fyndtypen "Öppen beställning" — för oförseglad betyder: inte planeringsbar.
- **Container-skift fungerar lite annorlunda.** En container är ett hölje som samlar flera delskift; den har därför varken kund eller adress, och korten *Adress* och *Standardutlägg* utgår. Kortet *Särskilda kännetecken* visar hos den bara alternativet för sporadisk insats. Kryssrutan "Är en container" hittar du i expertläget i kortet *Allmänt*, och den kan bara sättas så länge beställningen ännu är oförseglad.
- **Sporadiska skift och tidsramsskift räknas inte med.** Båda visas medvetet inte i arbetspass-stapeln i [resursmonitorn](../optimieren/ressourcen-monitor.md), eftersom de inte avbildar något fast dagligt behov.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
