---
sidebar_position: 7
---

# Overtid

Under Innstillinger > Compliance og tilleggsregler (ekspertmodus) > Overtid fastsetter du fra hvor mange opparbeidede timer merarbeid blir tilleggspliktig, og hvor høyt tillegget er per trinn.

## Slik fungerer det

**Beregningsgrunnlag:** Daglig eller Ukentlig — mer finnes ikke. Et månedlig eller årlig grunnlag er ikke tilgjengelig. Ved «Ukentlig» begynner uken på den konfigurerte første ukedagen.

**Inntil tre trinn:** Hvert trinn består av to felt — «Trinn X fra timer» (antall opparbeidede timer den dagen eller den uken som gjør at dette trinnet trer i kraft) og «Trinn X tillegg» i prosent. Det høyeste konfigurerte trinnet er alltid åpent oppover.

**Hvert trinn teller bare timene innenfor sitt eget spenn**, ikke alle timer fra null. Begynner trinn 1 ved 8 timer og trinn 2 ved 10 timer, betaler en ti-og-en-halv-times dag trinn-1-satsen for de to timene mellom 8 og 10, og trinn-2-satsen bare for den halve timen over — aldri trinn-2-satsen for alle ti og en halv timer. En enkelt arbeidsblokk kan dermed generere flere tilleggsposter, én per trinn den når.

**Et ufullstendig trinn hoppes stille over:** Mangler timeangivelsen, eller er tillegget null eller negativt, telles ikke dette trinnet med. Det kan altså være null til tre trinn faktisk aktive.

**Tillegget er påslaget, ikke totalbeløpet:** 25 % betyr en kvart time ekstra per time arbeidet i dette trinnet — ikke at timen betales med faktor 1,25. Tilleggsmodusen ved siden av (multiplikator eller fast beløp per time) bestemmer bare enheten; regnestykket bak forblir det samme.

**Hva som teller som allerede arbeidede timer:** Trinnene fylles ut fra timene som er levert tidligere samme dag eller samme uke — sortert først etter dato, deretter etter starttid. Slik får hver arbeidsblokk sin egen posisjon i spennet, og ingen time blir dobbelt tilregnet et høyere trinn. Endres en tidligere oppføring, beregnes de senere på nytt.

**Hvor verdiene kommer fra:** Dette kortet leverer de bedriftsomfattende verdiene — de gjelder bare når ingen annen kilde går foran. Er personens kontrakt tildelt en [planleggingsregel](../../planen/planungsregeln.md) med egne overtidstrinn, har den forrang; en senere versjon av denne regelen som er gyldig for den aktuelle datoen, erstatter ved behov hele settet, men faller uten egen overtidsblokk tilbake på bedriftsinnstillingene som vises her, ikke på planleggingsregelen. Er det ingen steder konfigurert et trinn, tjener bare **overtidsgrensen** fra planleggingsregelen som siste fallback — og utelukkende som startverdi for det første trinnet, aldri som tilleggssats. Kildene blandes aldri: Den som leverer det første trinnet, leverer også alle de øvrige.

**To betingelser uten hvilke det ikke oppstår noe tillegg:**

- Vakten trenger en beregningsmakro. Arbeid på en vakt uten makro sjekkes aldri for overtid.
- Minst ett fullstendig trinn må være konfigurert. Uten et slikt trinn er resultatet ikke «null overtid» — det gjennomføres i det hele tatt ingen sjekk.

**Unntatt:** Korrigeringer og innhoppere sjekkes aldri for overtid — bare vanlig arbeid inngår.

**Sammentreff med andre tillegg:** Den samme timen kan samtidig kvalifisere for overtid og for et omstendighetsbetinget tillegg, for eksempel natt- eller helgearbeid. Om begge legges sammen eller bare det høyeste gjelder, avgjøres ikke av dette kortet, men av beregningsmakroen til den aktuelle vakten.

**Lagring:** Kortet ligger i seksjonen Compliance og tilleggsregler på innstillingssiden (sammen med Kompenserende hvile, Tilleggsmodus og Compliance-håndheving), synlig bare i ekspertmodus. Endringer samles og lagres eller forkastes via den felles lagringslinjen på innstillingssiden — det finnes ingen egen lagre-knapp på dette kortet.

## Greit å vite

- Dette kortet dekker utelukkende den automatiske overtidsstaffelingen etter dags- eller ukeoverskridelse. Tillegg for natt-, søndags- eller helligdagsarbeid beregnes derimot generisk via skript — se [Makroer](../klacksy-konfiguration/makros.md).
- Et trinn uten «fra timer»-verdi eller med et tillegg på 0 % eller mindre ignoreres — slik kan enkelttrinn deaktiveres uten å slettes.
- Uten minst ett fullstendig trinn og uten beregningsmakro på vakten oppstår det i utgangspunktet ingen overtidstillegg, heller ikke ved svært lange vakter.
- En planleggingsregel med egne overtidstrinn overskriver disse bedriftsomfattende verdiene fullstendig, ikke bare enkelttrinn.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
