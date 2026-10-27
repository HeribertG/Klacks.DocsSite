---
sidebar_position: 8
---
# Ordliste

Begrepene som dukker opp igjen og igjen i Klacks og i denne dokumentasjonen — kort og i den rekkefølgen du møter dem.

## Planlegging

**Medarbeiderlinje**
Den minste planleggbare enheten. Ikke personen og ikke dagen, men en persons linje i et konkret planark. Alle planverdier henger på denne linjen.

**Planark**
En beholder som samler **referanser** til medarbeiderlinjer — ikke kopier. Derfor finnes en person bare én gang, uansett i hvor mange delplaner vedkommende dukker opp, og en endring er umiddelbart synlig overalt. Grunnlaget for [modulær planlegging](../planen/modulare-planung/).

**Autoplanlegging**
Assistenten fyller en plan etter dine regler. Beregningen kjører i bakgrunnen mens du arbeider videre — se [Autoplanlegging](../planen/auto-planung/).

**Tilgjengelighet**
Når en person er klar til innsats — til timen eller til dagen, for egne og for eksterne medarbeidere. Se [Tilgjengelighetsrutenett](../planen/verfuegbarkeits-raster/).

**Bestilling (oppdrag)**
En skisse av en innsats som fortsatt kan redigeres. En bestilling er **ennå ikke planbar**.

**Forsegle**
Det engangs, **uopprettelige** trinnet som gjør en bestilling om til en planbar vakt. Samtidig oppstår det planbare motstykket til bestillingen. Å opprette en planbar vakt direkte finnes ikke i Klacks — hver vakt oppstår ved forsegling. Se [Livssyklusen til en vakt](../planen/schicht-lebenszyklus/).

**Vakt (skift)**
Den planbare, forseglede innsatsen. Begrepet «skift» betyr det samme.

**Godkjenningsnivåer (vaktplan)**
Vaktplanen gjennomløper fire tilstander i fast rekkefølge: **Utkast → bekreftet → godkjent → avsluttet**. Bekrefte kan hver innlogget konto; godkjenne bare Supervisor og Admin; avslutte utelukkende Admin. Se [Godkjenningsflyt](../planen/freigabe-workflow/).

**Periode / periodeavslutning**
Avregningsperioden (ukentlig, annenhver uke, månedlig eller individuell; fastsatt via betalingsintervallet). Avslutningen gjør en periode bindende og er forbeholdt Admin — se [Periodeavslutning](../planen/periodenabschluss/).

**Fravær — to ting, ett ord**
«Fravær» betegner i stamdataområdet **katalogen over fraværstyper** (navn, farge, standardlengde, standardverdi). Stolpene i kalenderen er derimot enten et **ønske** (et planlagt fravær, fritt flyttbart og uten sperrenivå) eller et **bokført fravær** (overtatt fra innsatsplanen, bare lesbart på fraværssiden og med sperrenivå). Den som forveksler de to, leter på feil sted.

## KI-assistent

**Klacksy**
KI-assistenten i Klacks. Den planlegger, forklarer og utfører — med fritt valgbar modell. Se [Klacksy](../ki/klacksy-ki-assistent/).

**Skill**
En enkelt, avgrenset evne hos Klacksy — en deklarativ omslag rundt konkret programlogikk («søke etter medarbeider», «tilordne kontrakt», «opprette rapport»). Klacksy velger de passende skillene underveis.

**Autonominivå**
Hvor langt Klacksy får gå uten å spørre:

| Nivå | Navn | Atferd |
|---|---|---|
| 0 | Foreslå | Hver skrivende handling trenger din bekreftelse |
| 1 | Assistert | Reversible handlinger kjører fritt; endelige og følsomme spør |
| 2 | Autonom (standard) | Alt unntatt handlingene som er klassifisert som følsomme kjører fritt |
| 3 | Fullt autonom | Også endelige trinn kjøres gjennom |

Følsomme handlinger — for eksempel sletting av brukere eller endring av rettigheter — spør på **hvert** nivå. Se [Autonominivåer](../einstellungen/klacksy-konfiguration/autonomie-stufen/).

## Roller og drift

**Admin / Supervisor / Planlegger**
De tre tilgangsnivåene. Admin får gjøre alt, Supervisor opprette og redigere, en konto uten rolle er Planlegger. Oversikten finner du under [Roller og rettigheter](../erste-schritte/rollen-und-rechte/).

**Landprofil**
Et forhåndsklargjort innstillingssett for et land: språk, tidssone, helligdagskalender, helg og ukestart, arbeidstidsgrenser, feriekrav, tillegg, standard lønnseksport og bransjemaler. Velges ved installasjonen via `REGION`.

**Playground**
Den offentlige testinstansen på [play.klacks-software.ch](https://play.klacks-software.ch) med demodata — uttrykkelig for utprøving, uten ekte personopplysninger. Se [Installasjon og Playground](../erste-schritte/installation-und-playground/).

**On-Premise**
Drift på din egen infrastruktur: din maskinvare, din database, dine data. Motbegrepet til den driftede varianten.

**Oppdateringstjeneste**
Den medfølgende tjenesten som installerer signerte oppdateringer — med sikkerhetskopi i forkant og automatisk tilbakerulling ved problemer. Se [Oppdateringer og tilbakerulling](../betrieb/updates-und-rollback/).

**Personvern**
Klacks ringer ikke hjem: Det finnes ingen tilbakemelding av dine data til produsenten. For data som faktisk skal slettes, sørger [Dataoppbevaring](../einstellungen/system-sicherheit/datenaufbewahrung/) — slettinger fjernes fysisk etter at fristen er utløpt.

---

*Mangler et begrep, eller er det forklart feil? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
