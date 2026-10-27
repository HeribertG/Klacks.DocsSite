---
sidebar_position: 2
---
# Säkerhetskopiering och återställning

Dina data finns helt och hållet på din egen infrastruktur — därmed ligger också säkerhetskopieringen hos dig. Den här sidan visar vad som måste säkras och hur du återställer det.

## Vad som måste säkras

| Vad | Var | Hur ofta |
|---|---|---|
| Databas | Volym `postgres_data` | dagligen, minst före varje uppdatering |
| Uppladdningar | Volym `api-uploads` | tillsammans med databasen |
| Dokument | Volym `api-documents` | tillsammans med databasen |
| Nyckelring | Volym `api-dataprotection` | tillsammans med databasen, **absolut** |

Volymen `api-dataprotection` innehåller den nyckelring som Klacks använder för att dekryptera krypterade inställningar (till exempel inloggningsuppgifter till kommunikationskanaler). En databas utan den här nyckelringen finns visserligen kvar, men är inte fullt användbar — säkra den alltid tillsammans med övrigt.

## Säkerhetskopiera databasen

```bash
docker exec klacks-postgres pg_dump -U admin -d Klacks -Fc > klacks-20260922.dump
```

Formatet `-Fc` (custom) komprimerar och gör det möjligt att vid återställning välja enskilda tabeller.

## Återställa databasen

```bash
docker exec -i klacks-postgres pg_restore -U admin -d Klacks --clean --if-exists < klacks-20260922.dump
```

`--clean --if-exists` rensar bort befintliga objekt i förväg, så att återställningen inte stupar på redan existerande tabeller.

## Fallgropen: rollback efter en misslyckad migrering

Just här har ett produktionsavbrott uppstått tidigare, och mekanismen är densamma som för varje dumpbaserad rollback:

Om en felaktig version via migrering skapar **nya tabeller** finns dessa tabeller inte i dumpen. Vid återställning stannar databasen alltså inte på det gamla läget — de nya tabellerna **överlever** återställningen, medan migreringshistoriken (`__EFMigrationsHistory`) sätts tillbaka till det gamla läget. Nästa startförsök slår då i felet `42P07: relation "…" already exists` och installationen fastnar i en omstartsloop.

Om du efter en misslyckad uppdatering rullar tillbaka manuellt bör du därför efter återställningen kontrollera om det finns tabeller kvar som inte fanns i den gamla versionen, och ta bort dem **innan** du startar API:et igen.

## Lagring och radering

Klacks raderar inte data bara med en raderingsmarkering, utan **fysiskt**. En bakgrundstjänst körs dagligen och tar oåterkalleligt bort alla rader som är markerade som raderade och vars raderingstidpunkt ligger längre tillbaka än den konfigurerade fristen — och det över **alla** tabeller med raderingsmarkering (medarbetare, adresser, grupper, skift, arbetstider, frånvaro, raster och så vidare). Det finns ingen undantagslista; raderingsskyldigheten går medvetet före återställbarheten.

Fristen styr du via inställningen `DATA_RETENTION_DAYS`; utan egen uppgift gäller standardvärdet **3650 dagar (10 år)**. Sidan [Datalagring](../../einstellungen/system-sicherheit/datenaufbewahrung/) beskriver inställningen i detalj.

## Bra att veta

- **Före varje uppdatering säkerhetskopierar Klacks själv.** Uppdateringstjänsten skapar en datasäkerhetskopia innan den aktiverar en ny version; vid en migrering är säkerhetskopian knuten till uppdateringsåtgärden och återanvänds för en automatisk eller manuell rollback. En egen, **extern** säkerhetskopia ersätter inte det — den skyddar mot just de fall där värden själv drabbas.
- **Kontrollera din säkerhetskopia.** En dump som aldrig har återställts är ett antagande, ingen säkerhetskopia. Skapa en engångsdatabas och återställ dit innan du förlitar dig på förfarandet.
- **Förvara nyckelringen skilt från databasen.** Ligger `api-dataprotection` i samma säkerhetskopieringsuppsättning och samma händelse drabbar båda, är krypteringen värdelös.

---

*Frågor om driften? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
