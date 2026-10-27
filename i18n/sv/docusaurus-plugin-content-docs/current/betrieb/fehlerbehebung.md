---
sidebar_position: 4
---
# Felsökning

När Klacks inte gör vad det ska går vägen nästan alltid via loggarna från de två misstänkta tjänsterna — och via frågan om processen verkligen fortfarande körs.

## Först: se vad som körs

```bash
docker compose ps
docker compose logs klacks-api
docker compose logs klacks-updater
```

`docker compose ps` visar vilka tjänster som körs och om de är friska. `klacks-api` skriver start, migrering och fyllning av databasen; `klacks-updater` skriver identifiering, säkerhetskopiering, omkoppling och återvägen för en uppdatering.

## En gammal logg är inget bevis

En fälla som redan har kostat tid: loggfilen kan härstamma från en **tidigare** start. Den som hittar ett fel där och håller det för det aktuella letar på fel ställe.

Kontrollera därför om loggen **fortfarande växer**:

```bash
wc -c klacks-api.log; sleep 10; wc -c klacks-api.log
```

Förblir storleken densamma (tillväxt 0 byte) skriver processen inte längre — den körs inte, oavsett vad som står i loggen. Först en ny upprepning av felet med en logg som bevisligen följer med är ett hållbart underlag.

## Vanliga meddelanden och vad de betyder

| Meddelande | Betydelse | Vad du gör |
|---|---|---|
| `no matching manifest for linux/amd64` | Imagen finns inte för din arkitektur | Tillverkaren måste publicera imagen för flera arkitekturer (amd64 **och** arm64) |
| `pull access denied` | Paketet i paketarkivet är privat | Upprepa installationen med inloggningsuppgifter: `-GhcrUser`/`-GhcrToken` under Windows, `GHCR_USER`/`GHCR_TOKEN` under Linux |
| `errorCode: SETUP_REQUIRED`, HTTP `403` | Admin-setup-gaten är aktiv | Logga in med `admin@test.com` och skapa ditt eget adminkonto — se [Installation och Playground](../../erste-schritte/installation-und-playground/) |
| Containern avslutas utan managed stacktrace med exitkod `-1` (`0xffffffff`) | En **nativ** krasch i ett C/C++-bibliotek som ingen C#-`try/catch` kan fånga | Titta på containerns utdata på **stderr** — där står den egentliga orsaken, inte i applikationsloggen |
| Containern avslutas fast inget applikationsfel står i loggen | Kärnan avslutade processen på grund av minnesbrist (OOM) | Kontrollera minnesgränserna — se [Systemkrav](../systemvoraussetzungen/) |
| `42P07: relation "…" already exists` efter en misslyckad uppdatering | En migrering skapade tabeller som återställningen inte tog bort | Se fallgropen under [Säkerhetskopiering och återställning](../backup-und-wiederherstellung/) |
| API:et dör sekunder efter `Application started` | Starten lyckas, kraschen kommer efteråt — typiskt för ett nativt bibliotek | Samma spår som vid exitkod `-1`: kontrollera stderr, inte applikationsloggen |

På en **Windows-on-ARM-dator** (Snapdragon X) har den lokalt körande sökningen tidigare havererat just på ett sådant nativt bibliotek: API:et rapporterade `Application started`, men var sekunder senare inte längre nåbart för gränssnittet. Ser du det här mönstret på en ARM-Windows-värd är första blicken riktad mot konsolutdata (inte filloggen) — där visades meddelandet från den berörda CPU-identifieringen.

## Så avgränsar du ett fel

1. **Vad gjorde du exakt**, och vad förväntade du dig? Sista steget före felet är halva svaret.
2. **Vilka tjänster körs?** `docker compose ps`.
3. **Växer loggen fortfarande?** Se ovan.
4. **Vad stod senast på stderr?** Vid nativa krascher den enda källan.
5. **Vad har ändrats på sistone?** En uppdatering, en inställning, ett nytt certifikat.

## Bra att veta

- **En tidigt startad och en frisk tjänst ser likadana ut i loggen.** Om ingenting kommer fram i gränssnittet, kontrollera om processen alls fortfarande körs — inte bara vad den skrev senast.
- **Vid en krasch utan applikationsfel är minnet förstamisstänkt**, särskilt efter en uppdatering med nya sökmodeller.
- **Användbara uppgifter för en anmälan:** berörd version (`KLACKS_API_TAG`/`KLACKS_UI_TAG` ur `.env`), utdata från `docker compose ps`, de sista raderna i båda loggarna och sista steget före felet. Gärna **utan** lösenord och nycklar ur `.env`.
- Fråga vid tvekan communityn: [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).

---

*Frågor om driften? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
