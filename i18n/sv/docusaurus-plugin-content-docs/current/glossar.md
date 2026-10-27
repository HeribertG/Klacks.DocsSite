---
sidebar_position: 8
---
# Ordlista

De begrepp som återkommer i Klacks och i den här dokumentationen — kort och i den ordning du möter dem.

## Planering

**Medarbetarrad**
Den minsta planeringsbara enheten. Inte personen och inte dagen, utan en persons rad i ett konkret schemablad. Alla planvärden hänger på den här raden.

**Schemablad**
En behållare som samlar **referenser** till medarbetarrader — inga kopior. Därför finns en person bara en gång, oavsett i hur många delscheman hon eller han förekommer, och en ändring syns omedelbart överallt. Grunden för [modulär planering](../planen/modulare-planung/).

**Autoplanering**
Assistenten fyller ett schema enligt dina regler. Beräkningen körs i bakgrunden medan du arbetar vidare — se [Autoplanering](../planen/auto-planung/).

**Tillgänglighet**
När en person är redo att arbeta — timmes- eller dagsexakt, för egen och för extern personal. Se [Tillgänglighetsrutnät](../planen/verfuegbarkeits-raster/).

**Beställning (uppdrag)**
En skiss av en insats som fortfarande kan redigeras. En beställning är **ännu inte planeringsbar**.

**Försegla**
Det engångssteg som är **oåterkalleligt** och som gör en beställning till ett planeringsbart skift. Samtidigt uppstår den planeringsbara motsvarigheten till beställningen. Att skapa ett planeringsbart skift direkt finns inte i Klacks — varje skift uppstår genom försegling. Se [Ett skifts livscykel](../planen/schicht-lebenszyklus/).

**Skift (arbetspass)**
Den planeringsbara, förseglade insatsen. Begreppet ”arbetspass” betyder detsamma.

**Godkännandesteg (schema)**
Schemat genomgår fyra tillstånd i fast ordning: **öppet → bekräftat → godkänt → avslutat**. Bekräfta får varje inloggat konto; godkänna bara Supervisor och Admin; avsluta uteslutande Admin. Se [Godkännandeflöde](../planen/freigabe-workflow/).

**Period / periodavslut**
Avräkningsperioden (veckovis, varannan vecka, månadsvis eller individuell; fastställs via utbetalningsintervallet). Avslutet gör en period bindande och är förbehållet Admin — se [Periodavslut](../planen/periodenabschluss/).

**Frånvaro — två saker, ett ord**
”Frånvaro” betecknar i stamdataområdet **katalogen över frånvarotyper** (namn, färg, standardlängd, standardvärde). Staplarna i kalendern är däremot antingen ett **önskemål** (en planerad frånvaro, fritt flyttbar och utan spärrnivå) eller en **bokad frånvaro** (övertagen från insatsplanen, på sidan Frånvaro endast läsbar och med spärrnivå). Den som blandar ihop de två letar på fel ställe.

## KI-assistent

**Klacksy**
Klacks KI-assistent. Den planerar, förklarar och utför — med fritt valbar modell. Se [Klacksy](../ki/klacksy-ki-assistent/).

**Skill**
En enskild, avgränsad förmåga hos Klacksy — ett deklarativt omslag runt konkret programlogik (”Sök medarbetare”, ”Tilldela avtal”, ”Skapa rapport”). Klacksy väljer lämpliga skills vid körning.

**Autonominivå**
Hur långt Klacksy får gå utan att fråga:

| Nivå | Namn | Beteende |
|---|---|---|
| 0 | Föreslå | Varje skrivande åtgärd kräver din bekräftelse |
| 1 | Assisterad | Reversibla åtgärder körs fritt; slutgiltiga och känsliga frågar först |
| 2 | Autonom (standard) | Allt utom de åtgärder som klassats som känsliga körs fritt |
| 3 | Helt autonom | Även slutgiltiga steg körs igenom |

Känsliga åtgärder — till exempel att radera användare eller ändra rättigheter — frågar på **varje** nivå. Se [Autonominivåer](../einstellungen/klacksy-konfiguration/autonomie-stufen/).

## Roller och drift

**Admin / Supervisor / Planerare**
De tre åtkomstnivåerna. Admin får allt, Supervisor skapa och redigera, ett konto utan roll är Planerare. Översikten finns under [Roller och rättigheter](../erste-schritte/rollen-und-rechte/).

**Landsprofil**
En förberedd uppsättning inställningar för ett land: språk, tidszon, helgdagskalender, helg och veckostart, arbetstidsgränser, semesterrätt, tillägg, standard-löneexport och branschmallar. Väljs vid installationen via `REGION`.

**Playground**
Den publika testinstansen på [play.klacks-software.ch](https://play.klacks-software.ch) med demodata — uttryckligen för att testa, utan verkliga personuppgifter. Se [Installation och Playground](../erste-schritte/installation-und-playground/).

**On-premise**
Drift på din egen infrastruktur: din hårdvara, din databas, dina data. Motsatsen till den hostade varianten.

**Uppdateringstjänst**
Den medföljande tjänst som installerar signerade uppdateringar — med säkerhetskopia i förväg och automatisk rollback vid problem. Se [Uppdateringar och rollback](../betrieb/updates-und-rollback/).

**Roller och dataskydd**
Klacks skickar inget hem: det finns ingen återrapportering av dina data till tillverkaren. För data som faktiskt ska raderas sörjer [Datalagring](../einstellungen/system-sicherheit/datenaufbewahrung/) — raderingar utförs fysiskt när fristen har löpt ut.

---

*Saknas ett begrepp eller är en förklaring felaktig? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
