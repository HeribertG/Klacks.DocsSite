---
sidebar_position: 8
---

# En vagts livscyklus: Fra ordre til segment

Før en vagt overhovedet kan besættes, gennemløber den fire trin — fra den frit redigerbare ordre over den uforanderlige forseglede ordre til den planlægbare vagt og dens segmenter. Meningen bag dette: Det, der er aftalt, forbliver varigt læsbart; det, hverdagen bagefter omplanlægger, forbliver alligevel bevægeligt.

En vagt er derved ikke nødvendigvis bundet til en ordre — Klacks afbilder såvel interne, regelmæssige vagter uden kundetilknytning som komplekse ordrer med mange leverancer eller indsatser opdelt i flere container-segmenter.

## Sådan fungerer det

**1. Ordre — frit redigerbar.** Enhver ny vagt begynder her. På vagtsiden åbner knappen **+ ny ordre** registreringsmasken; du kan bearbejde ordren, så ofte du vil, alle felter står åbne. I vagtplanen vises den endnu ikke, og dermed kan der heller ikke planlægges medarbejdere ind på den. En ren skitse er den alligevel ikke — den er en rigtig ordre, blot endnu ikke forseglet. I vagtlisten fører Klacks dette trin under **Ordrer**. Skifter du der til **Planlægbare vagter**, hedder knappen **+ ny vagt**: Den opretter en ordre uden kundetilknytning — til generelt arbejde, som ingen ekstern part bestiller og betaler for. Kortet *Adresse* bortfalder da; de fire trin gennemløber også denne vagt.

**2. Forseglet ordre — uforanderlig.** Står ordren fast, forsegler du den med lås-knappen i kortet *Generelt*. Fra dette øjeblik er den spærret og forbliver varigt bevaret som et bindende billede af aftalen — også selv når den løbende drift for længst har omplanlagt vagten. Efter lagringen kan dette **ikke fortrydes**. Hvilke ordrer der allerede har nået dette trin, viser afkrydsningsfeltet **Vis kun forseglede bestillinger** i vagtlisten.

**3. Planlægbar vagt — her planlægges der.** Forseglingen opretter i ét træk, og præcis én gang, den planlægbare vagt: en kopi knyttet til ordren. Først denne vagt vises i [Plan-gitteret: Din interaktive tidsmatrix](../planen/plan-raster.md), først på den kan medarbejdere bookes — og den forbliver redigerbar. En senere fornyet lagring opretter ikke en anden kopi. I vagtlisten finder du den under **Planlægbare vagter**.

**4. Segmenter — den tilskårne vagt.** En planlægbar vagt kan tilskæres, f.eks. efter dage eller tidsafsnit. Den hidtidige vagt bliver selv til et segment, de øvrige opstår ved siden af. Alle segmenter er igen planlægbare og bærer derefter den egentlige besætning. Den forseglede ordre berøres ikke af dette — den er og forbliver kontrakten i baggrunden.

**Hvornår lås-knappen bliver aktiv:** Den forbliver grå, indtil ordren er fuldstændig nok til planlægningen — forkortelse, navn og fra-dato er udfyldt, mindst én ugedag og mindst én gruppe er valgt, og både antal opgaver og antal medarbejdere pr. vagt er større end nul. Dens tooltip siger det utvetydigt: "Efter spærring er ordren uforanderlig og klar til planlægning."

**Den eneste undtagelse fra uforanderligheden:** Har en forseglet ordre ingen til-dato — f.eks. fordi ordren løbende forlænges, eller dens afslutning endnu er åben —, må du også efterfølgende sætte netop dette felt. Forudsætning: Fra den valgte dato er der endnu ingen vagter planlagt. Derefter er også dette felt spærret som alle de øvrige.

**Et eksempel:** Den 1. maj registrerer du ordren "Bryllup Müller" og finjusterer den over to dage. Den 3. maj bekræfter kunden — du forsegler. Klacks fastlåser ordren og opretter samtidig den planlægbare vagt. Den 4. maj indsætter disponeringen to medarbejdere, den 5. maj skæres vagten i to segmenter. Den 1. juni afsluttes perioden, og posterne på segmenterne spærres. Den forseglede ordre fra 3. maj er ved alt dette aldrig blevet ændret.

**Registreringsmaskens kort.** Masken er inddelt i kort, som du kan folde ud og sammen hver for sig; der gemmes og kasseres via gem-bjælken nederst i arbejdsområdet. En del af kortene vises først, når du slår switchen **Eksperttilstand** til i kortet *Generelt*:

- **Generelt** — forkortelse (højst 6 tegn; Klacks foreslår den automatisk, mens du skriver navnet), navn, fra- og til-dato samt noter. Her sidder også lås-knappen og switchen til eksperttilstanden.
- **Gruppe** — knytter vagten til én eller flere grupper. Mindst én gruppe er obligatorisk; så længe ingen er valgt, gør en info-boks opmærksom på det.
- **Krævede kvalifikationer** — hvilke [kvalifikationer](../einstellungen/stammdaten-organisation/qualifikationen.md) vagten kræver, hver med et minimumsniveau (Lav til Ekspert) og angivelse af, om den er obligatorisk.
- **Timer og ugedage** — fra-tid, til-tid og varighed samt de ugedage, vagten falder på, dertil to helligdagsregler. I eksperttilstand kan du i stedet føre vagten som en tidsramme her: Den ligger da fleksibelt i vinduet mellem fra- og til-tid, og den registrerede varighed tælles.
- **Makro** (eksperttilstand) — knytter vagten til en [makro](../einstellungen/klacksy-konfiguration/makros.md) til varigheds- og lønberegningen.
- **Adresse** — kunden henholdsvis indsatsstedet, søgt via navn eller ID-nummer. Filterkolonnen til højre afgrænser netop denne søgning.
- **Særlige kendetegn** (eksperttilstand) — sporadisk indsats med periodicitet, briefing og debriefing, tilrejse- og hjemrejsetid samt antal medarbejdere og opgaver pr. vagt.
- **Standardudgifter** (eksperttilstand) — udgifter, der regelmæssigt opstår ved denne vagt, hver med betegnelse, beløb og angivelse af, om de er skattepligtige.

Hvordan de planlægbare vagter derefter besættes, beskriver [Auto-planlægning: Ét klik, resten kører i baggrunden](../planen/auto-planung.md) og [Plan-gitteret: Din interaktive tidsmatrix](../planen/plan-raster.md).

## Godt at vide

- **Forsegling betyder her noget andet end i godkendelsesworkflowet.** Forseglingen af en ordre fryser vagtens *beskrivelse* fast — hvad der skal gøres, varigt. [Godkendelsesworkflow: Fra udkast til bindende plan](../planen/freigabe-workflow.md) og [Periodeafslutning](../planen/periodenabschluss.md) spærrer derimod *posterne på konkrete dage*. Begge dele kører uafhængigt af hinanden.
- **Ordrer opstår også automatisk.** Ved siden af registreringsmasken er [ERP-import](../einstellungen/kommunikation-integration/erp-uebernahmepunkte.md) den anden vej: Ordrer, der kommer derfra, havner ligeledes først som en uforseglet ordre og skal kontrolleres og forsegles.
- **En glemt ordre gør opmærksom på sig selv.** Forbliver en ordre uforseglet kort før dens begyndelse, gør [Klacksy som et proaktivt teammedlem](../ki/klacksy-proaktiv.md) opmærksom på det med fundtypen "Åben ordre" — for uforseglet betyder: ikke planlægbar.
- **Container-vagter fungerer lidt anderledes.** En container er et hylster, der bundter flere delvagter; den har derfor hverken kunde eller adresse, og kortene *Adresse* og *Standardudgifter* bortfalder. Kortet *Særlige kendetegn* viser for den kun muligheden for sporadisk indsats. Afkrydsningsfeltet "Er en container" finder du i eksperttilstand i kortet *Generelt*, og det kan kun sættes, så længe ordren stadig er uforseglet.
- **Sporadiske vagter og tidsramme-vagter tæller ikke med.** Begge vises bevidst ikke i vagt-søjlen i [Ressourcemonitoren](../optimieren/ressourcen-monitor.md), fordi de ikke afbilder et fast dagligt behov.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
