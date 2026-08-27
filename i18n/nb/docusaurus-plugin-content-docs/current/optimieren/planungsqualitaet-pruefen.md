---
sidebar_position: 7
---

# Sjekke planleggingskvaliteten: Brudd, gap og uteblitte plasseringer

Etter en kjøring av planleggingsassistentene legger Klacks tre diagnosetabeller ved siden av resultatet: hvor planen støter på en regel, hvor en kvalifikasjon mangler, og hva som aldri ble planlagt i det hele tatt.

## Slik fungerer det

De tre rapportene vises i dialogen til den aktuelle planleggingsassistenten — ikke i planrutenettet. De hører til resultatet av en assistentkjøring og er bare synlige for administratorer, fordi den automatiske planleggingen som helhet forutsetter admin-rollen. Hver rapport oppgir antall oppføringer i tittelen og **vises overhodet ikke hvis den ikke fant noe** — en manglende boks er altså en god nyhet.

**Slik når du dialogene:** Tryllestav-knappen i vaktplanen starter i utgangspunktet en planleggingskjøring direkte, uten å vise noen dialog. Med **Ctrl+Shift+H** kobler administratorer om knappen til en nedtrekksmeny med de enkelte planleggingsassistentene (Plan, Fuzzy Harmonizer, Holistic Harmonizer, Background Optimizer, Recovery) — først via denne nedtrekksmenyen åpnes dialogene med diagnosetabellene.

**Kvalifikasjonsgap** vises sammen med resultatet, altså *før* du overtar det. Kolonner: alvorlighetsgrad, skift, dato, påkrevd kvalifikasjon, årsak — pluss en kolonne «Medarbeider» så snart minst én rad nevner en person. Som årsak står *Finnes ikke*, *Utløpt* eller *For lavt nivå*. Bak dette ligger to ulike tilfeller: Enten ble en skiftplass stående tom fordi ingen tilgjengelig har den påkrevde kvalifikasjonen — da nevner raden ingen person. Eller en person ble stående på et skift vedkommende ikke er kvalifisert for — da står navnet der. Mangler kvalifikasjonen bare i systemet, registrerer du den hos personen; [Kvalifikasjonskatalog](../einstellungen/stammdaten-organisation/qualifikationen.md) beskriver hvordan kvalifikasjoner vedlikeholdes. Ellers planlegger du inn noen andre eller justerer kravet til skiftet.

**Compliance-brudd** vises *etter* at du har overtatt resultatet. Kolonner: dato, medarbeider, kommentar; kommentaren navngir den brutte regelen i klartekst sammen med de konkrete verdiene. Røde rader er feil, gule advarsler og merknader. For de to harmoni-assistentene viser rapporten utelukkende hva det nye scenarioet **i tillegg** bidrar med sammenlignet med den virkelige planen — og over det, hvor mange av disse bruddene som håndheves i Blokk-modus. Disse hindrer at scenarioet blir overtatt før de er rettet eller uttrykkelig overstyrt av en berettiget person.

**Uteblitte plasseringer** finnes bare hos assistenten for skiftplanlegging, likeledes etter overtakelsen — og gjennomgående røde. Kolonner: dato, medarbeider, skift, årsak. Her står ikke hva som ble planlagt, men hva Klacks bevisst **ikke** har skrevet: tildelinger som ville ha brutt en regel som håndheves i Blokk-modus. Årsaken vises som en kort kategori («For kort hviletid», «For mange påfølgende arbeidsdager», «Tidskollisjon» …). Avhengig av situasjonen tilbyr Klacks berettigede personer muligheten til likevel å overta kjøringen med Override; alle andre får henvisningen om å gjenta assistenten med Override aktivert, eller be en berettiget person om det. Hver Override blir protokollført.

Hvilke regler som sjekkes, og hvor strengt de gjelder, fastsetter du i [Planleggingsregler](../planen/planungsregeln.md); hvordan planen i det hele tatt oppstår, beskrives i [Autoplanlegging: Ett klikk, resten kjører i bakgrunnen](../planen/auto-planung.md).

## Greit å vite

- En blokkert oppføring forkaster ikke hele planen: Bare de berørte tildelingene faller bort, de rene oppføringene til samme person blir likevel skrevet.
- For alvorlighetsgraden til kvalifikasjonsgapene gjelder en enkel regel: **Feil** bare når en kvalifikasjon merket som obligatorisk mangler fullstendig. En utløpt kvalifikasjon, et for lavt nivå og ethvert valgfritt krav vises som en **advarsel**.
- En tom skiftplass dukker bare opp blant kvalifikasjonsgapene hvis virkelig ingen tilgjengelig kom i betraktning. Ble den stående tom av andre grunner, er det vanlig underdekning og blir ikke meldt her.
- Kjører den automatiske planleggingen som en samlet kjøring, melder Klacks resultatet bare som en kort visning med antall kvalifikasjonsgap — de detaljerte tabellene hører til dialogene til de enkelte assistentene.
- Rapportene er rene visninger: De kan ikke redigeres og endrer ingenting. Rettelser gjøres i [Planrutenettet: din interaktive tidsmatrise](../planen/plan-raster.md) eller gjennom en ny kjøring.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
