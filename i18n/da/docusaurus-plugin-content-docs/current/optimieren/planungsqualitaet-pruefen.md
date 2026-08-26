---
sidebar_position: 7
---

# Tjek planlægningskvaliteten: Overtrædelser, huller og oversprungne placeringer

Efter et forløb af planlægningsassistenterne lægger Klacks tre diagnose-tabeller ved siden af resultatet: hvor planen støder på en regel, hvor en kvalifikation mangler, og hvad der slet ikke blev planlagt.

## Sådan fungerer det

De tre rapporter vises i dialogen for den pågældende planlægningsassistent — ikke i plan-gitteret. De hører til resultatet af et assistent-forløb og er kun synlige for administratorer, fordi den automatiske planlægning som helhed forudsætter admin-rollen. Hver rapport nævner antallet af sine poster i titlen og **vises slet ikke, hvis den ikke har fundet noget** — en manglende boks er altså en god nyhed.

**Sådan når du dialogerne:** Tryllestav-knappen i vagtplanen starter i grundtilstand direkte et planlægningsforløb, uden at vise nogen dialog. Med **Ctrl+Shift+H** skifter administratorer knappen om til en dropdown med de enkelte planlægningsassistenter (Plan, Fuzzy Harmonizer, Holistic Harmonizer, Background Optimizer, Recovery) — først via denne dropdown åbner dialogerne med diagnose-tabellerne.

**Kvalifikationshuller** vises sammen med resultatet, altså *før* du overtager det. Kolonner: alvorlighedsgrad, vagt, dato, krævet kvalifikation, årsag — plus en kolonne "Medarbejder", så snart mindst én række nævner en person. Som årsag står *Ikke til stede*, *Udløbet* eller *Niveau for lavt*. Bag dette ligger to forskellige tilfælde: Enten forblev en vagtplads tom, fordi ingen tilgængelig person har den krævede kvalifikation — så nævner rækken ingen person. Eller en person blev stående på en vagt, som vedkommende ikke er kvalificeret til — så står navnet der. Mangler kvalifikationen kun i systemet, registrerer du den hos personen; [kvalifikationskataloget](../einstellungen/stammdaten-organisation/qualifikationen.md) beskriver, hvordan kvalifikationer vedligeholdes. Ellers planlægger du en anden person ind eller tilpasser vagtens krav.

**Compliance-overtrædelser** vises, *efter* du har overtaget resultatet. Kolonner: dato, medarbejder, kommentar; kommentaren nævner den overtrådte regel i klartekst sammen med de konkrete værdier. Røde rækker er fejl, gule advarsler og bemærkninger. Ved de to harmoni-assistenter viser rapporten udelukkende, hvad det nye scenarie **yderligere** bidrager med i forhold til den reelle plan — og derover, hvor mange af disse overtrædelser der føres i blokeringstilstand. Disse forhindrer, at scenariet overtages, før de er rettet eller udtrykkeligt tilsidesat af en berettiget person.

**Oversprungne placeringer** findes kun ved assistenten til vagtplanlægningen, ligeledes efter overtagelsen — og gennemgående røde. Kolonner: dato, medarbejder, vagt, årsag. Her står ikke, hvad der blev planlagt, men hvad Klacks bevidst **ikke** har skrevet: tildelinger, som ville have overtrådt en regel, der føres i blokeringstilstand. Årsagen vises som en kort kategori ("Hviletid for kort", "For mange sammenhængende arbejdsdage", "Tidskollision" …). Afhængigt af situationen tilbyder Klacks berettigede personer her at overtage forløbet med override alligevel; alle andre får en besked om at gentage assistenten med override aktiveret eller bede en berettiget person om det. Hver override registreres.

Hvilke regler der kontrolleres, og hvor strengt de gælder, fastlægger du i [planlægningsreglerne](../planen/planungsregeln.md); hvordan planen overhovedet opstår, beskriver [Auto-planlægning: Planen på få sekunder](../planen/auto-planung.md).

## Godt at vide

- En blokeret post kasserer ikke hele planen: Kun de berørte tildelinger falder væk, de rene poster for samme person skrives alligevel.
- Ved alvorlighedsgraden for kvalifikationshuller gælder en enkel regel: **Fejl** kun, hvis en kvalifikation markeret som obligatorisk mangler helt. En udløbet kvalifikation, et for lavt niveau og ethvert valgfrit krav vises som **advarsel**.
- En tom vagtplads dukker kun op i kvalifikationshullerne, hvis der virkelig ingen tilgængelig person kom i betragtning. Var den tom af andre grunde, er det almindelig underdækning og indgår ikke her.
- Kører den automatiske planlægning som et samlet forløb, melder Klacks kun resultatet som en kort tilkendegivelse med antal kvalifikationshuller — de detaljerede tabeller hører til de enkelte assistenters dialoger.
- Rapporterne er rene visninger: De kan ikke redigeres og ændrer intet. Rettelser sker i [Plan-gitteret: Din interaktive tidsmatrix](../planen/plan-raster.md) eller ved et nyt forløb.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
