---
sidebar_position: 2
---
# Backup og gendannelse

Dine data ligger fuldstændigt på din egen infrastruktur — dermed ligger også sikkerhedskopieringen hos dig. Denne side viser, hvad der skal sikres, og hvordan du spiller det tilbage.

## Hvad der skal sikres

| Hvad | Hvor | Hvor ofte |
|---|---|---|
| Database | Volume `postgres_data` | dagligt, mindst før hver opdatering |
| Uploads | Volume `api-uploads` | sammen med databasen |
| Dokumenter | Volume `api-documents` | sammen med databasen |
| Nøglering | Volume `api-dataprotection` | sammen med databasen, **absolut** |

Volumet `api-dataprotection` indeholder den nøglering, som Klacks bruger til at dekryptere krypterede indstillinger (for eksempel adgangsdata til kommunikationskanaler). En database uden denne nøglering er vel til stede, men ikke fuldt anvendelig — sikr den altid med.

## Sikre databasen

```bash
docker exec klacks-postgres pg_dump -U admin -d Klacks -Fc > klacks-20260922.dump
```

Formatet `-Fc` (custom) komprimerer og gør det muligt at udvælge enkelte tabeller ved gendannelsen.

## Gendanne databasen

```bash
docker exec -i klacks-postgres pg_restore -U admin -d Klacks --clean --if-exists < klacks-20260922.dump
```

`--clean --if-exists` rydder eksisterende objekter af vejen på forhånd, så gendannelsen ikke strander på allerede eksisterende tabeller.

## Faldgruben: rollback efter en mislykket migration

Netop her er der tidligere opstået et produktionsnedbrud, og mekanismen er den samme som ved enhver dump-baseret rollback:

Opretter en fejlbehæftet version via migration **nye tabeller**, står disse tabeller ikke i dumpet. Ved gendannelsen bliver databasen altså ikke stående på den gamle tilstand — de nye tabeller **overlever** gendannelsen, mens migrationshistorikken (`__EFMigrationsHistory`) sættes tilbage til den gamle tilstand. Det næste startforsøg løber så ind i fejlen `42P07: relation "…" already exists`, og installationen hænger i en genstartsløkke.

Ruller du manuelt tilbage efter en mislykket opdatering, så kontroller derfor efter gendannelsen, om der er tabeller tilbage, som ikke fandtes i den gamle version, og fjern dem, **før** du starter API'en igen.

## Opbevaring og sletning

Klacks sletter ikke data blot med en slettemarkering, men **fysisk**. En baggrundstjeneste kører dagligt og fjerner uigenkaldeligt alle rækker, der er markeret som slettede, og hvis sletningstidspunkt ligger længere tilbage end den konfigurerede frist — og det på tværs af **alle** tabeller med slettemarkering (medarbejdere, adresser, grupper, vagter, arbejdstider, fravær, pauser og så videre). Der findes ingen undtagelsesliste; sletteforpligtelsen går bevidst forud for genskabeligheden.

Fristen styrer du via indstillingen `DATA_RETENTION_DAYS`; uden egen angivelse gælder standardværdien **3650 dage (10 år)**. Siden [Dataopbevaring](../../einstellungen/system-sicherheit/datenaufbewahrung/) beskriver indstillingen i detaljer.

## Godt at vide

- **Før hver opdatering tager Klacks selv backup.** Opdateringstjenesten opretter en databackup, før den aktiverer en ny version; ved en migration er backuppen knyttet til opdateringsforløbet og genbruges til en automatisk eller manuel rollback. En egen, **ekstern** backup erstatter ikke det — den beskytter netop mod de tilfælde, hvor værten selv er ramt.
- **Kontroller din backup.** Et dump, der aldrig er blevet spillet tilbage, er en antagelse, ikke en backup. Opret en engangsdatabase, og spil tilbage dér, før du stoler på fremgangsmåden.
- **Opbevar nøgleringen adskilt fra databasen.** Ligger `api-dataprotection` i samme backupsæt, og den samme hændelse rammer begge, er krypteringen værdiløs.

---

*Spørgsmål om driften? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
