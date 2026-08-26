---
sidebar_position: 8
---

# Klacksy som proaktivt teammedlem

Klacksy venter ikke på å bli spurt. Én gang i timen ser han seg om i driften i bakgrunnen og melder fra om det han legger merke til: ubemannede vakter, kontrakter som løper ut, forfalte perioder, manglende stamdata. Hvor langt han får gå, fastsetter administratorer for hver funntype for seg — fra fabrikk melder han bare fra og handler aldri på egen hånd.

Ikke å forveksle med [Autonominivåer](../einstellungen/klacksy-konfiguration/autonomie-stufen.md): Der handler det om hvor mye bekreftelse Klacksy trenger når **du** ber ham om noe i chatten. Her handler det om det motsatte — om det han gjør **uoppfordret**.

## Slik fungerer det

**Hva et funn er:** Et funn er en observasjon Klacksy har gjort på egen hånd — for eksempel «denne vakten er fortsatt ubemannet om tre dager» eller «denne avregningsperioden har vært forfalt i en uke». For dette kjører det hver time en bakgrunnskjøring over rundt et dusin sjekkregler. Selve gjenkjenningen er fast programmert: Ingen språkmodell avgjør om noe er et funn — samme regel gir samme resultat, uansett hvilken KI-leverandør du bruker.

**Fjorten funntyper kan styres,** deriblant Ubemannet vakt, Hull i tilgjengeligheten, Utløpende kontrakt, Manglende stamdata, Åpen bestilling, Forestående periodeavslutning, Forfalt periode, Avvik fra måltimer, Tom container, Sperrekonflikt og Åpent scenario. To av dem oppstår ikke i den timelige kjøringen, men ved ERP-bestillingsimport.

**De tre nivåene — for hver funntype for seg:** Under Innstillinger > Klacksy > «Klacksy handlingsrom» (ekspertmodus, kun administratorer) står hver funntype på en egen rad med kolonnen «Høyeste nivå»:

- **Bare rapportere** — Klacksy sier fra, ikke mer. Dette er fabrikkinnstillingen for hver funntype.
- **Klargjøre scenario** — Klacksy legger i tillegg en ferdig løsning ved siden av som et scenario, som et menneske bare trenger å godta.
- **Utføre** — Klacksy retter funnet selv og rapporterer om det etterpå.

Fra og med «Klargjøre scenario» må en ansvarlig person være utpekt: Handlingen kjøres under vedkommendes rettigheter, og personen får rapporten. I tillegg kommer det per rad budsjetter som begrenser hvor ofte Klacksy får handle (fra fabrikk høyst 5 handlinger per dag og 3 innenfor 60 minutter), samt en bryter «Aktiv». Denne styrer utelukkende den selvstendige handlingen — om og hvordan en melding når deg, er fortsatt din personlige varslingsinnstilling.

**Den harde grensen i programmet:** Et høyere nivå virker bare der det i det hele tatt finnes en automatisk retting for funntypen. Mangler den, blir det med rapporteringen — uavhengig av innstillingen, og også når noen delegerer det enkelte funnet til Klacksy i enkelttilfeller. Denne grensen sitter i programkoden og kan ikke åpnes via grensesnittet. For øyeblikket finnes nøyaktig én retting: For funntypen «Tom container» kan Klacksy selv opprette den manglende slot-malen.

**Hvor funnene havner:** På Klacksy-knappen i toppfeltet viser en teller de uleste varslene. Et klikk åpner sidepanelet, der funnene samles under overskriften «Mens du var borte…». Per melding tilbys «Vis meg det» (hopper til det berørte stedet), «Nyttig» og «Skjul» — det siste eventuelt med en begrunnelse («Slike hint vil jeg generelt ikke ha», «Denne gangen var hintet feil», «Er allerede ordnet») eller uten. Der det er tillatt, finnes det i tillegg «Gjør du det»: en enkelttilfelle-godkjenning som løfter akkurat dette ene funnet til «Klargjøre scenario». Du kan også spørre Klacksy direkte i chatten om hvilke funn som er åpne akkurat nå.

**Når et funn er rettet:** Den berørte raden får i containervisningen av vaktlisten merket «Rettet av Klacksy den …» — både når Klacksy har utført rettingen selv, og når et menneske har godkjent et scenario Klacksy har forberedt. Utfører Klacksy selv, går det i tillegg en rapport til den ansvarlige personen.

**Nødstoppen:** Over chatten ser administratorer bryteren «Klacksy handler autonomt: PÅ/AV». Å slå av tilbakestiller umiddelbart hver funntype til «bare rapportere» — også allerede gitte enkelttilfelle-godkjenninger. Varslene stopper ikke av den grunn: Nødstoppen stanser handlingen, ikke rapporteringen. Den samme bryteren finnes også i innstillingskortet.

## Greit å vite

- Fra fabrikk står hver funntype på «Bare rapportere» — Klacksy handler først når en administrator bevisst hever et nivå. Nødstoppen er ikke nødvendig for det: Den er ikke satt fra fabrikk og forblir som en umiddelbar brems i reserve.
- Meldinger går bare til administratorer og berettigede planleggere. Den som bare får se bestemte grupper, får også bare funn fra disse gruppene; administratorer ser alt. Planleggere mottar funnene, men ser ikke nivå-innstillingen.
- Nivået «Klargjøre scenario» gjelder bare rettinger som kan avbildes som et scenario. Rettingen som er lagt inn i dag, hører ikke til dem — for den virker bare «Utføre».
- Innstillingskortet og autonomibryteren krever administratorrettigheter; uten dem kan ikke autonomitilstanden ses.
- Den timelige rytmen er fast innebygd og ikke justerbar via grensesnittet; den første kjøringen starter to minutter etter programstart.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
