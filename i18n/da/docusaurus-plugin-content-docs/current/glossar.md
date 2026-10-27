---
sidebar_position: 8
---
# Ordliste

De begreber, der gang på gang optræder i Klacks og i denne dokumentation — kort og i den rækkefølge, du møder dem.

## Planlægning

**Medarbejderrække**
Den mindste planlægbare enhed. Ikke personen og ikke dagen, men en persons række i et konkret planblad. Alle planværdier hænger på denne række.

**Planblad**
En beholder, der samler **henvisninger** til medarbejderrækker — ingen kopier. Derfor findes en person kun én gang, uanset i hvor mange delplaner vedkommende optræder, og en ændring er straks synlig overalt. Grundlaget for [modulær planlægning](../planen/modulare-planung/).

**Auto-planlægning**
Assistenten udfylder en plan efter dine regler. Beregningen kører i baggrunden, mens du arbejder videre — se [Auto-planlægning](../planen/auto-planung/).

**Tilgængelighed**
Hvornår en person er klar til indsats — timenøjagtigt eller dagnøjagtigt, for egne og for eksterne medarbejdere. Se [Tilgængeligheds-gitter](../planen/verfuegbarkeits-raster/).

**Bestilling (ordre)**
En skitse af en indsats, som stadig kan redigeres. En bestilling er **endnu ikke planlægbar**.

**Forsegle**
Det engangstrin, der er **uigenkaldeligt**, og som gør en bestilling til en planlægbar vagt. Samtidig opstår den planlægbare pendant til bestillingen. At oprette en planlægbar vagt direkte findes ikke i Klacks — hver vagt opstår ved forsegling. Se [En vagts livscyklus](../planen/schicht-lebenszyklus/).

**Vagt (skift)**
Den planlægbare, forseglede indsats. Begrebet „skift" betyder det samme.

**Godkendelsestrin (vagtplan)**
Vagtplanen gennemløber fire tilstande i fast rækkefølge: **åben → bekræftet → godkendt → afsluttet**. Bekræfte må enhver logget ind konto; godkende kun Supervisor og Admin; afslutte udelukkende Admin. Se [Godkendelsesworkflow](../planen/freigabe-workflow/).

**Periode / periodeafslutning**
Afregningsperioden (ugentlig, hver anden uge, månedlig eller individuel; fastlagt via udbetalingsintervallet). Afslutningen gør en periode bindende og er forbeholdt Admin — se [Periodeafslutning](../planen/periodenabschluss/).

**Fravær — to ting, ét ord**
„Fravær" betegner i stamdataområdet **kataloget over fraværstyper** (navn, farve, standardlængde, standardværdi). Bjælkerne i kalenderen er derimod enten et **ønske** (et planlagt fravær, frit flytbart og uden spærreniveau) eller et **booket fravær** (overtaget fra indsatsplanen, på siden Fravær kun læsbart og med spærreniveau). Den, der forveksler de to, leder det forkerte sted.

## AI-assistent

**Klacksy**
Klacks' AI-assistent. Han planlægger, forklarer og udfører — med frit valgbar model. Se [Klacksy](../ki/klacksy-ki-assistent/).

**Skill**
En enkelt, afgrænset evne hos Klacksy — en deklarativ wrapper omkring konkret programlogik („Søg medarbejder", „Tildel kontrakt", „Opret rapport"). Klacksy vælger de passende skills under kørslen.

**Autonominiveau**
Hvor langt Klacksy må gå uden at spørge:

| Niveau | Navn | Adfærd |
|---|---|---|
| 0 | Foreslå | Hver skrivende handling kræver din bekræftelse |
| 1 | Assisteret | Reversible handlinger kører frit; endelige og følsomme spørger først |
| 2 | Autonom (standard) | Alt undtagen de handlinger, der er klassificeret som følsomme, kører frit |
| 3 | Fuldt autonom | Også endelige trin kører igennem |

Følsomme handlinger — for eksempel sletning af brugere eller ændring af rettigheder — spørger på **hvert** niveau. Se [Autonominiveauer](../einstellungen/klacksy-konfiguration/autonomie-stufen/).

## Roller og drift

**Admin / Supervisor / Planlægger**
De tre adgangsniveauer. Admin må alt, Supervisor oprette og redigere, en konto uden rolle er Planlægger. Oversigten findes under [Roller og rettigheder](../erste-schritte/rollen-und-rechte/).

**Landeprofil**
Et forberedt indstillingssæt for et land: sprog, tidszone, helligdagskalender, weekend og ugestart, arbejdstidsgrænser, ferieret, tillæg, standard-løneksport og branchskabeloner. Vælges ved installationen via `REGION`.

**Playground**
Den offentlige testinstans på [play.klacks-software.ch](https://play.klacks-software.ch) med demodata — udtrykkeligt til afprøvning, uden rigtige persondata. Se [Installation og Playground](../erste-schritte/installation-und-playground/).

**On-premise**
Drift på din egen infrastruktur: din hardware, din database, dine data. Modbegrebet til den hostede variant.

**Opdateringstjeneste**
Den medfølgende tjeneste, der installerer signerede opdateringer — med backup forinden og automatisk rollback ved problemer. Se [Opdateringer og rollback](../betrieb/updates-und-rollback/).

**Roller og databeskyttelse**
Klacks sender ikke noget hjem: der er ingen tilbagemelding af dine data til producenten. For data, der faktisk skal slettes, sørger [Dataopbevaring](../einstellungen/system-sicherheit/datenaufbewahrung/) — sletninger udføres fysisk, når fristen er udløbet.

---

*Mangler der et begreb, eller er en forklaring forkert? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
