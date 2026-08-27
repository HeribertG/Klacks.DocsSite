---
sidebar_position: 8
---

# Livssyklusen til en vakt: Fra bestilling til segment

Før en vakt i det hele tatt kan bemannes, gjennomløper den fire trinn — fra den fritt redigerbare bestillingen, via den uforanderlige forseglede bestillingen, til den planbare vakten og dens segmenter. Hensikten bak dette: Det som ble avtalt, forblir varig lesbart; det hverdagen omplanlegger etterpå, forblir likevel bevegelig.

En vakt er ikke nødvendigvis knyttet til en bestilling — Klacks avbilder like gjerne interne, regelmessige vakter uten kundetilknytning som komplekse bestillinger med mange leveranser eller oppdrag som er delt opp i flere container-segmenter.

## Slik fungerer det

**1. Bestilling — fritt redigerbar.** Hver ny vakt begynner her. På vaktsiden åpner knappen **+ ny bestilling** registreringsskjemaet; du bearbeider bestillingen så ofte du vil, alle felt står åpne. Den vises ennå ikke i vaktplanen, og dermed kan det heller ikke planlegges medarbeidere på den. En ren skisse er den likevel ikke — det er en ekte bestilling, bare ennå ikke forseglet. I vaktlisten fører Klacks dette trinnet under **Bestillinger**. Bytter du der til **Planbare vakter**, heter knappen **+ ny vakt**: Den oppretter en bestilling uten kundetilknytning — for generelt arbeid som ingen bestiller og betaler for utenfra. Kortet *Adresse* faller da bort; også denne vakten gjennomløper de fire trinnene.

**2. Forseglet bestilling — uforanderlig.** Står bestillingen fast, forsegler du den med lås-knappen i kortet *Generelt*. Fra dette øyeblikket er den sperret og forblir varig som det bindende bildet av avtalen — også når den løpende driften for lengst har omplanlagt vakten. Etter lagring er dette **ikke reversibelt**. Hvilke bestillinger som allerede har nådd dette trinnet, viser avkrysningsboksen **Vis bare forseglede bestillinger** i vaktlisten.

**3. Planbar vakt — her planlegges det.** Forseglingen oppretter i samme trekk, og nøyaktig én gang, den planbare vakten: en kopi knyttet til bestillingen. Først denne vakten vises i [Planrutenettet: din interaktive tidsmatrise](../planen/plan-raster.md), først på den kan medarbeidere bookes — og den forblir redigerbar. En senere ny lagring oppretter ingen andre kopi. I vaktlisten finner du den under **Planbare vakter**.

**4. Segmenter — den tilskårne vakten.** En planbar vakt kan skjæres til, for eksempel etter dager eller tidsavsnitt. Den hittil eksisterende vakten blir da selv til ett segment, de øvrige oppstår ved siden av. Alle segmenter er i sin tur planbare og bærer da den faktiske bemanningen. Den forseglede bestillingen forblir uberørt av dette — den er og forblir kontrakten i bakgrunnen.

**Når lås-knappen blir aktiv:** Den forblir grå helt til bestillingen er fullstendig nok for planlegging — forkortelse, navn og fra-dato er fylt inn, minst én ukedag og minst én gruppe er valgt, og både antall oppgaver og antall medarbeidere per skift er større enn null. Verktøytipset sier det utvetydig: «Etter sperring er bestillingen uforanderlig og klar for planlegging.»

**Det eneste unntaket fra uforanderligheten:** Har en forseglet bestilling ikke noe til-dato — for eksempel fordi bestillingen løpende forlenges eller slutten fortsatt er åpen —, får du sette akkurat dette ene feltet også i ettertid. Forutsetning: Fra den valgte datoen er det ennå ikke planlagt vakter. Deretter er også dette feltet sperret som alle de andre.

**Et eksempel:** Den 1. mai registrerer du bestillingen «Bryllup Müller» og finpusser den over to dager. Den 3. mai bekrefter kunden — du forsegler. Klacks fastsetter bestillingen og oppretter den planbare vakten ved siden av. Den 4. mai fører disposisjonen inn to medarbeidere, den 5. mai skjæres vakten i to segmenter. Den 1. juni avsluttes perioden og oppføringene på segmentene sperres. Den forseglede bestillingen fra 3. mai er gjennom alt dette aldri blitt endret.

**Kortene i registreringsskjemaet.** Skjemaet er delt inn i kort som du folder ut og sammen hver for seg; lagring og forkasting skjer via lagringslinjen nederst i arbeidsområdet. En del av kortene vises først når du slår på bryteren **Ekspertmodus** i kortet *Generelt*:

- **Generelt** — forkortelse (høyst 6 tegn; Klacks foreslår den automatisk mens du skriver navnet), navn, fra- og til-dato samt notater. Her sitter også lås-knappen og bryteren for ekspertmodus.
- **Gruppe** — tilordner vakten til én eller flere grupper. Minst én gruppe er obligatorisk; så lenge ingen er valgt, gjør en infoboks oppmerksom på det.
- **Påkrevde kvalifikasjoner** — hvilke [kvalifikasjoner](../einstellungen/stammdaten-organisation/qualifikationen.md) vakten krever, hver med minimumsnivå (Lav til Ekspert) og angivelse av om den er obligatorisk.
- **Timer og ukedager** — fra-tid, til-tid og varighet samt ukedagene vakten faller på, i tillegg to helligdagsregler. I ekspertmodus kan du i stedet føre vakten her som en tidsramme: Den ligger da fleksibelt i vinduet mellom fra- og til-tid, og det er den registrerte varigheten som telles.
- **Makro** (ekspertmodus) — knytter vakten til en [makro](../einstellungen/klacksy-konfiguration/makros.md) for varighets- og lønnsberegning.
- **Adresse** — kunden eller innsatsstedet, søkt opp via navn eller ID-nummer. Filterkolonnen til høyre avgrenser nettopp dette søket.
- **Spesielle kjennetegn** (ekspertmodus) — sporadisk bruk samt periodisitet, briefing og debriefing, reisetid til og fra, samt antall medarbeidere og oppgaver per skift.
- **Standardutgifter** (ekspertmodus) — utgifter som regelmessig påløper ved denne vakten, hver med betegnelse, beløp og angivelse av om den er skattepliktig.

Hvordan de planbare vaktene deretter bemannes, beskrives i [Autoplanlegging: Ett klikk, resten kjører i bakgrunnen](../planen/auto-planung.md) og [Planrutenettet: din interaktive tidsmatrise](../planen/plan-raster.md).

## Greit å vite

- **Å forsegle betyr her noe annet enn i godkjenningsflyten.** Å forsegle en bestilling fryser *beskrivelsen* av vakten — hva som skal gjøres, varig. [Godkjenningsflyt: Fra utkast til bindende plan](../planen/freigabe-workflow.md) og [Periodeavslutning](../planen/periodenabschluss.md) sperrer derimot *oppføringene på konkrete dager*. Begge deler kjører uavhengig av hverandre.
- **Bestillinger oppstår også automatisk.** Ved siden av registreringsskjemaet er [ERP-import](../einstellungen/kommunikation-integration/erp-uebernahmepunkte.md) den andre veien: Bestillinger som kommer derfra, havner også først som en uforseglet bestilling og må sjekkes og forsegles.
- **En glemt bestilling melder seg.** Forblir en bestilling uforseglet kort tid før den skal begynne, gjør [Klacksy som proaktivt teammedlem](../ki/klacksy-proaktiv.md) oppmerksom på det med funntypen «Åpen bestilling» — for uforseglet betyr: ikke planbar.
- **Container-vakter fungerer litt annerledes.** En container er et hylster som bunter sammen flere delvakter; den har derfor verken kunde eller adresse, og kortene *Adresse* og *Standardutgifter* faller bort. Kortet *Spesielle kjennetegn* viser for den bare alternativet for sporadisk bruk. Avkrysningsboksen «Er en container» finner du i ekspertmodus i kortet *Generelt*, og den kan bare krysses av så lenge bestillingen ennå er uforseglet.
- **Sporadiske vakter og tidsramme-vakter telles ikke med.** Begge vises bevisst ikke i vaktstolpen til [Ressursmonitoren](../optimieren/ressourcen-monitor.md), fordi de ikke avbilder et fast daglig behov.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
