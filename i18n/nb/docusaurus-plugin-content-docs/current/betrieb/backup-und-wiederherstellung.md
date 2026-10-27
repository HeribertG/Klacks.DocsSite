---
sidebar_position: 2
---
# Sikkerhetskopi og gjenoppretting

Dataene dine ligger fullstendig på din egen infrastruktur — dermed ligger også sikkerhetskopieringen hos deg. Denne siden viser hva som må sikkerhetskopieres og hvordan du spiller det tilbake.

## Hva som må sikkerhetskopieres

| Hva | Hvor | Hvor ofte |
|---|---|---|
| Database | Volum `postgres_data` | daglig, minst før hver oppdatering |
| Opplastinger | Volum `api-uploads` | sammen med databasen |
| Dokumenter | Volum `api-documents` | sammen med databasen |
| Nøkkelring | Volum `api-dataprotection` | sammen med databasen, **absolutt** |

Volumet `api-dataprotection` inneholder nøkkelringen som Klacks bruker til å dekryptere krypterte innstillinger (for eksempel tilgangsdata til kommunikasjonskanaler). En database uten denne nøkkelringen er riktignok til stede, men ikke fullt brukbar — ta den alltid med i sikkerhetskopien.

## Sikkerhetskopiere databasen

```bash
docker exec klacks-postgres pg_dump -U admin -d Klacks -Fc > klacks-20260922.dump
```

Formatet `-Fc` (custom) komprimerer og lar deg ved gjenoppretting velge enkelte tabeller.

## Gjenopprette databasen

```bash
docker exec -i klacks-postgres pg_restore -U admin -d Klacks --clean --if-exists < klacks-20260922.dump
```

`--clean --if-exists` rydder bort eksisterende objekter først, slik at gjenopprettingen ikke feiler på tabeller som allerede finnes.

## Snublesteinen: Tilbakerulling etter en mislykket migrering

Nettopp her har det tidligere oppstått et produksjonsavbrudd, og mekanismen er den samme som for enhver dump-basert tilbakerulling:

Oppretter en feilaktig versjon **nye tabeller** via en migrering, finnes ikke disse tabellene i dumpen. Ved gjenoppretting blir databasen dermed ikke stående på den gamle tilstanden — de nye tabellene **overlever** gjenopprettingen, mens migreringshistorikken (`__EFMigrationsHistory`) settes tilbake til den gamle tilstanden. Neste oppstartsforsøk støter da på feilen `42P07: relation "…" already exists`, og installasjonen havner i en omstartsløkke.

Ruller du manuelt tilbake etter en mislykket oppdatering, bør du derfor etter gjenopprettingen kontrollere om det er blitt igjen tabeller som ikke fantes i den gamle versjonen, og fjerne dem **før** du starter API-et igjen.

## Oppbevaring og sletting

Klacks sletter ikke data bare med en slettemerking, men **fysisk**. En bakgrunnstjeneste kjører daglig og fjerner uopprettelig alle rader som er merket som slettet, og som slettetidspunktet ligger lenger tilbake enn den konfigurerte fristen — og det på tvers av **alle** tabeller med slettemerking (medarbeidere, adresser, grupper, vakter, arbeidstider, fravær, pauser og så videre). Det finnes ingen unntaksliste; slettingsplikten går bevisst foran muligheten til å gjenopprette.

Fristen styrer du med innstillingen `DATA_RETENTION_DAYS`; uten egen angivelse gjelder standardverdien **3650 dager (10 år)**. Siden [Dataoppbevaring](../../einstellungen/system-sicherheit/datenaufbewahrung/) beskriver innstillingen i detalj.

## Greit å vite

- **Før hver oppdatering sikkerhetskopierer Klacks selv.** Oppdateringstjenesten oppretter en datasikkerhetskopi før den aktiverer en ny versjon; ved en migrering knyttes sikkerhetskopien til oppdateringsoperasjonen og gjenbrukes for en automatisk eller manuell tilbakerulling. En egen, **ekstern** sikkerhetskopi erstatter ikke dette — den beskytter nettopp mot tilfellene der selve verten er rammet.
- **Kontroller sikkerhetskopien din.** En dump som aldri er spilt tilbake, er en antakelse, ikke en sikkerhetskopi. Opprett en midlertidig database og spill inn der før du stoler på fremgangsmåten.
- **Oppbevar nøkkelringen adskilt fra databasen.** Ligger `api-dataprotection` i samme sikkerhetskopisett og samme hendelse rammer begge, er krypteringen verdiløs.

---

*Driftsspørsmål? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
