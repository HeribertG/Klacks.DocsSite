---
sidebar_position: 4
---
# Probleemoplossing

Als Klacks niet doet wat het moet doen, loopt de weg bijna altijd via de logboeken van de twee verdachte services — en via de vraag of het proces echt nog draait.

## Eerst: kijken wat er draait

```bash
docker compose ps
docker compose logs klacks-api
docker compose logs klacks-updater
```

`docker compose ps` toont welke services draaien en of ze gezond zijn. `klacks-api` schrijft start, migratie en vulling van de database; `klacks-updater` schrijft detectie, back-up, omschakeling en terugweg van een update.

## Een oud logboek is geen bewijs

Een valkuil die al tijd heeft gekost: het logbestand kan van een **eerdere** start stammen. Wie daarin een fout vindt en die voor de actuele houdt, zoekt op de verkeerde plek.

Controleer daarom of het logboek **nog groeit**:

```bash
wc -c klacks-api.log; sleep 10; wc -c klacks-api.log
```

Blijft de grootte gelijk (groei 0 bytes), dan schrijft het proces niet meer — het draait niet, ongeacht wat er in het logboek staat. Pas een verse herhaling van de fout met een logboek dat aantoonbaar meeloopt, is een betrouwbare basis.

## Veelvoorkomende meldingen en wat ze betekenen

| Melding | Betekenis | Wat te doen |
|---|---|---|
| `no matching manifest for linux/amd64` | Het image bestaat niet voor uw architectuur | De fabrikant moet het image multi-architectuur publiceren (amd64 **en** arm64) |
| `pull access denied` | Het pakket in het pakketarchief is privé | Installatie met toegangsgegevens herhalen: `-GhcrUser`/`-GhcrToken` onder Windows, `GHCR_USER`/`GHCR_TOKEN` onder Linux |
| `errorCode: SETUP_REQUIRED`, HTTP `403` | De admin-setup-gate is actief | Aanmelden met `admin@test.com` en het eigen adminaccount aanmaken — zie [Installatie en playground](../../erste-schritte/installation-und-playground/) |
| Container eindigt zonder managed stacktrace met exitcode `-1` (`0xffffffff`) | Een **native** crash in een C/C++-bibliotheek die geen C#-`try/catch` kan opvangen | Bekijk de uitvoer van de container op **stderr** — daar staat de eigenlijke oorzaak, niet in het toepassingslogboek |
| Container wordt beëindigd, hoewel er geen toepassingsfout in het logboek staat | De kernel heeft het proces wegens geheugentekort beëindigd (OOM) | Geheugengrenzen controleren — zie [Systeemvereisten](../systemvoraussetzungen/) |
| `42P07: relation "…" already exists` na een mislukte update | Een migratie heeft tabellen aangemaakt die het terugzetten niet heeft verwijderd | Zie de valkuil onder [Back-up en herstel](../backup-und-wiederherstellung/) |
| API stopt seconden na `Application started` | De start lukt, de crash komt daarna — typerend voor een native bibliotheek | Hetzelfde spoor als bij exitcode `-1`: stderr controleren, niet het toepassingslogboek |

Op een **Windows-on-ARM-computer** (Snapdragon X) is de lokaal draaiende zoekfunctie in het verleden juist op zo'n native bibliotheek vastgelopen: de API meldde `Application started`, maar was seconden later voor de interface niet meer bereikbaar. Ziet u dit patroon op een ARM-Windows-host, richt dan de eerste blik op de console-uitvoer (niet op het bestandslogboek) — daar verscheen de melding van de betrokken CPU-detectie.

## Hoe u een fout afbakent

1. **Wat hebt u precies gedaan**, en wat verwachtte u? De laatste stap vóór de fout is het halve antwoord.
2. **Welke services draaien?** `docker compose ps`.
3. **Groeit het logboek nog?** Zie hierboven.
4. **Wat stond er het laatst op stderr?** Bij native crashes de enige bron.
5. **Wat is er recent veranderd?** Een update, een instelling, een nieuw certificaat.

## Goed om te weten

- **Een vroeg gestarte en een gezonde service zien er in het logboek hetzelfde uit.** Komt er in de interface niets aan, controleer dan of het proces nog wel draait — niet alleen wat het het laatst heeft geschreven.
- **Bij een crash zonder toepassingsfout is het geheugen de eerste verdachte**, vooral na een update met nieuwe zoekmodellen.
- **Nuttige gegevens voor een melding:** de betrokken versie (`KLACKS_API_TAG`/`KLACKS_UI_TAG` uit de `.env`), de uitvoer van `docker compose ps`, de laatste regels van beide logboeken en de laatste stap vóór de fout. Graag **zonder** wachtwoorden en sleutels uit de `.env`.
- Vraag bij twijfel de community: [Klacks-community op Discord](https://discord.gg/YRP8p2abVC).

---

*Vragen over het beheer? [Klacks-community op Discord](https://discord.gg/YRP8p2abVC).*
