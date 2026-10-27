---
sidebar_position: 4
---
# Fejlfinding

Når Klacks ikke gør, hvad det skal, går vejen næsten altid via logfilerne fra de to mistænkte tjenester — og via spørgsmålet om, hvorvidt processen virkelig stadig kører.

## Først: se, hvad der kører

```bash
docker compose ps
docker compose logs klacks-api
docker compose logs klacks-updater
```

`docker compose ps` viser, hvilke tjenester der kører, og om de er sunde. `klacks-api` skriver start, migration og udfyldning af databasen; `klacks-updater` skriver registrering, backup, omskiftning og tilbagevej for en opdatering.

## En gammel log er intet bevis

En fælde, der allerede har kostet tid: logfilen kan stamme fra en **tidligere** start. Den, der finder en fejl deri og tror, at det er den aktuelle, leder det forkerte sted.

Kontroller derfor, om loggen **stadig vokser**:

```bash
wc -c klacks-api.log; sleep 10; wc -c klacks-api.log
```

Forbliver størrelsen den samme (tilvækst 0 byte), skriver processen ikke længere — den kører ikke, uanset hvad der står i loggen. Først en frisk gentagelse af fejlen med en log, der beviseligt følger med, er et holdbart grundlag.

## Hyppige meddelelser og hvad de betyder

| Meddelelse | Betydning | Hvad du gør |
|---|---|---|
| `no matching manifest for linux/amd64` | Imaget findes ikke til din arkitektur | Producenten skal udgive imaget til flere arkitekturer (amd64 **og** arm64) |
| `pull access denied` | Pakken i pakkearkivet er privat | Gentag installationen med adgangsdata: `-GhcrUser`/`-GhcrToken` under Windows, `GHCR_USER`/`GHCR_TOKEN` under Linux |
| `errorCode: SETUP_REQUIRED`, HTTP `403` | Admin-setup-gaten er aktiv | Log ind med `admin@test.com`, og opret din egen admin-konto — se [Installation og Playground](../../erste-schritte/installation-und-playground/) |
| Containeren afsluttes uden managed stacktrace med exitkode `-1` (`0xffffffff`) | Et **nativt** nedbrud i et C/C++-bibliotek, som ingen C#-`try/catch` kan fange | Se containerens output på **stderr** — dér står den egentlige årsag, ikke i applikationsloggen |
| Containeren afsluttes, selvom der ikke står nogen applikationsfejl i loggen | Kernen har afsluttet processen på grund af hukommelsesmangel (OOM) | Kontroller hukommelsesgrænserne — se [Systemkrav](../systemvoraussetzungen/) |
| `42P07: relation "…" already exists` efter en mislykket opdatering | En migration har oprettet tabeller, som gendannelsen ikke fjernede | Se faldgruben under [Backup og gendannelse](../backup-und-wiederherstellung/) |
| API'en dør sekunder efter `Application started` | Starten lykkes, nedbruddet kommer bagefter — typisk for et nativt bibliotek | Samme spor som ved exitkode `-1`: tjek stderr, ikke applikationsloggen |

På en **Windows-on-ARM-computer** (Snapdragon X) er den lokalt kørende søgning tidligere strandet netop på sådan et nativt bibliotek: API'en meldte `Application started`, men var sekunder senere ikke længere tilgængelig for brugerfladen. Ser du dette mønster på en ARM-Windows-vært, rettes det første blik mod konsoloutputtet (ikke fillogfilen) — dér dukkede meddelelsen fra den berørte CPU-registrering op.

## Sådan afgrænser du en fejl

1. **Hvad gjorde du helt præcist**, og hvad forventede du? Det sidste trin før fejlen er det halve svar.
2. **Hvilke tjenester kører?** `docker compose ps`.
3. **Vokser loggen stadig?** Se ovenfor.
4. **Hvad stod der sidst på stderr?** Ved native nedbrud den eneste kilde.
5. **Hvad har ændret sig på det seneste?** En opdatering, en indstilling, et nyt certifikat.

## Godt at vide

- **En tidligt startet og en sund tjeneste ser ens ud i loggen.** Når der intet kommer frem i brugerfladen, så kontroller, om processen overhovedet stadig kører — ikke kun hvad den skrev sidst.
- **Ved et nedbrud uden applikationsfejl er hukommelsen første mistænkte**, især efter en opdatering med nye søgemodeller.
- **Nyttige oplysninger til en melding:** den berørte version (`KLACKS_API_TAG`/`KLACKS_UI_TAG` fra `.env`), output fra `docker compose ps`, de sidste linjer i begge logfiler og det sidste trin før fejlen. Gerne **uden** adgangskoder og nøgler fra `.env`.
- Spørg i tvivlstilfælde communityen: [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).

---

*Spørgsmål om driften? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
