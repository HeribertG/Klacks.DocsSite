---
sidebar_position: 4
---
# Feilsøking

Når Klacks ikke gjør det det skal, går veien nesten alltid via loggene til de to mistenkte tjenestene — og via spørsmålet om prosessen faktisk fortsatt kjører.

## Først: se hva som kjører

```bash
docker compose ps
docker compose logs klacks-api
docker compose logs klacks-updater
```

`docker compose ps` viser hvilke tjenester som kjører og om de er friske. `klacks-api` skriver oppstart, migrering og fylling av databasen; `klacks-updater` skriver gjenkjenning, sikkerhetskopiering, omkobling og tilbakevei for en oppdatering.

## En gammel logg er ikke et bevis

En felle som allerede har kostet tid: Loggfilen kan stamme fra en **tidligere** oppstart. Den som finner en feil der og tror at det er den gjeldende, leter på feil sted.

Kontroller derfor om loggen **fortsatt vokser**:

```bash
wc -c klacks-api.log; sleep 10; wc -c klacks-api.log
```

Forblir størrelsen den samme (økning 0 byte), skriver ikke prosessen lenger — den kjører ikke, uavhengig av hva som står i loggen. Først en fersk gjentakelse av feilen med en logg som beviselig er med, er et holdbart grunnlag.

## Vanlige meldinger og hva de betyr

| Melding | Betydning | Hva du gjør |
|---|---|---|
| `no matching manifest for linux/amd64` | Imaget finnes ikke for din arkitektur | Produsenten må publisere imaget for flere arkitekturer (amd64 **og** arm64) |
| `pull access denied` | Pakken i pakkearkivet er privat | Gjenta installasjonen med tilgangsdata: `-GhcrUser`/`-GhcrToken` under Windows, `GHCR_USER`/`GHCR_TOKEN` under Linux |
| `errorCode: SETUP_REQUIRED`, HTTP `403` | Admin-oppsettsporten er aktiv | Logg inn med `admin@test.com` og opprett din egen Admin-konto — se [Installasjon og Playground](../../erste-schritte/installation-und-playground/) |
| Containeren avsluttes uten managed stacktrace med exit-kode `-1` (`0xffffffff`) | En **nativ** krasj i et C/C++-bibliotek som ingen C#-`try/catch` kan fange | Se på containerens utdata på **stderr** — der står den egentlige utløseren, ikke i applikasjonsloggen |
| Containeren avsluttes selv om det ikke står noen applikasjonsfeil i loggen | Kjernen har avsluttet prosessen på grunn av minnemangel (OOM) | Kontroller minnegrensene — se [Systemkrav](../systemvoraussetzungen/) |
| `42P07: relation "…" already exists` etter en mislykket oppdatering | En migrering har opprettet tabeller som gjenopprettingen ikke fjernet | Se snublesteinen under [Sikkerhetskopi og gjenoppretting](../backup-und-wiederherstellung/) |
| API-et dør sekunder etter `Application started` | Oppstarten lykkes, krasjen kommer etterpå — typisk for et nativt bibliotek | Samme spor som ved exit-kode `-1`: kontroller stderr, ikke applikasjonsloggen |

På en **Windows-on-ARM-maskin** (Snapdragon X) har det lokalt kjørende søket tidligere feilet nettopp på et slikt nativt bibliotek: API-et meldte `Application started`, men var sekunder senere ikke lenger tilgjengelig for brukergrensesnittet. Ser du dette mønsteret på en ARM-Windows-vert, rettes første blikk mot konsollutdataen (ikke filloggen) — der dukket meldingen fra den berørte CPU-gjenkjenningen opp.

## Slik avgrenser du en feil

1. **Hva nøyaktig gjorde du**, og hva forventet du? Det siste trinnet før feilen er det halve svaret.
2. **Hvilke tjenester kjører?** `docker compose ps`.
3. **Vokser loggen fortsatt?** Se ovenfor.
4. **Hva sto sist på stderr?** Ved nativt krasj den eneste kilden.
5. **Hva har endret seg sist?** En oppdatering, en innstilling, et nytt sertifikat.

## Greit å vite

- **En tjeneste som startet tidlig og en frisk tjeneste ser like ut i loggen.** Hvis ingenting kommer frem i brukergrensesnittet, kontroller om prosessen i det hele tatt fortsatt kjører — ikke bare hva den skrev sist.
- **Ved en krasj uten applikasjonsfeil er minnet første mistenkte**, særlig etter en oppdatering med nye søkemodeller.
- **Nyttige opplysninger til en melding:** berørt versjon (`KLACKS_API_TAG`/`KLACKS_UI_TAG` fra `.env`), utdata fra `docker compose ps`, de siste linjene i begge loggene og det siste trinnet før feilen. Vennligst **uten** passord og nøkler fra `.env`.
- Spør i tvilstilfeller community: [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).

---

*Driftsspørsmål? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
