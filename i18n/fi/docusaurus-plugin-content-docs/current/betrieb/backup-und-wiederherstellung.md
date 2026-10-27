---
sidebar_position: 2
---
# Varmuuskopiointi ja palautus

Tietonne sijaitsevat kokonaan omalla infrastruktuurillanne — siksi myös varmuuskopiointi on teidän vastuullanne. Tämä sivu näyttää, mitä on varmuuskopioitava ja miten sen palautatte.

## Mitä on varmuuskopioitava

| Mitä | Missä | Kuinka usein |
|---|---|---|
| Tietokanta | Volyymi `postgres_data` | päivittäin, vähintään ennen jokaista päivitystä |
| Lataukset | Volyymi `api-uploads` | tietokannan mukana |
| Asiakirjat | Volyymi `api-documents` | tietokannan mukana |
| Avainnippu | Volyymi `api-dataprotection` | tietokannan mukana, **ehdottomasti** |

Volyymi `api-dataprotection` sisältää avainnipun, jolla Klacks purkaa salattuja asetuksia (esimerkiksi viestintäkanavien tunnukset). Tietokanta ilman tätä avainnippua on kyllä olemassa, mutta ei täysin käyttökelpoinen — varmuuskopioikaa se aina mukana.

## Tietokannan varmuuskopiointi

```bash
docker exec klacks-postgres pg_dump -U admin -d Klacks -Fc > klacks-20260922.dump
```

Muoto `-Fc` (custom) pakkaa ja mahdollistaa palautettaessa yksittäisten taulujen valinnan.

## Tietokannan palautus

```bash
docker exec -i klacks-postgres pg_restore -U admin -d Klacks --clean --if-exists < klacks-20260922.dump
```

`--clean --if-exists` poistaa olemassa olevat objektit etukäteen, jotta palautus ei kaadu jo olemassa oleviin tauluihin.

## Kompastuskivi: palautus epäonnistuneen migraation jälkeen

Juuri tässä on aiemmin syntynyt tuotantokatkos, ja mekanismi on sama kuin jokaisessa vedokseen perustuvassa palautuksessa:

Jos virheellinen versio luo migraatiolla **uusia tauluja**, näitä tauluja ei ole vedoksessa. Palautettaessa tietokanta ei siis jää vanhaan tilaan — uudet taulut **säilyvät** palautuksesta, kun taas migraatiohistoria (`__EFMigrationsHistory`) palautetaan vanhaan tilaan. Seuraava käynnistysyritys törmää silloin virheeseen `42P07: relation "…" already exists`, ja asennus jää uudelleenkäynnistyssilmukkaan.

Jos palautatte manuaalisesti epäonnistuneen päivityksen jälkeen, tarkistakaa siksi palautuksen jälkeen, onko jäljellä tauluja, joita vanhassa versiossa ei vielä ollut, ja poistakaa ne **ennen** kuin käynnistätte API:n uudelleen.

## Säilytys ja poistaminen

Klacks ei poista tietoja pelkällä poistomerkinnällä, vaan **fyysisesti**. Taustapalvelu ajetaan päivittäin ja poistaa peruuttamattomasti kaikki poistetuiksi merkityt rivit, joiden poistohetki on kauempana kuin määritetty määräaika — ja tämä **kaikissa** poistomerkinnällä varustetuissa tauluissa (työntekijät, osoitteet, ryhmät, työvuorot, työajat, poissaolot, tauot ja niin edelleen). Poikkeuslistaa ei ole; poistovelvoite menee tarkoituksella palautettavuuden edelle.

Määräaikaa ohjaatte asetuksella `DATA_RETENTION_DAYS`; ilman omaa arvoa käytetään oletusarvoa **3650 päivää (10 vuotta)**. Sivu [Tietojen säilytys](../../einstellungen/system-sicherheit/datenaufbewahrung/) kuvaa asetuksen tarkemmin.

## Hyvä tietää

- **Ennen jokaista päivitystä Klacks varmuuskopioi itse.** Päivityspalvelu luo tietovarmuuskopion ennen uuden version aktivointia; migraation yhteydessä varmuuskopio sidotaan päivitystoimintoon ja käytetään uudelleen automaattisessa tai manuaalisessa palautuksessa. Oma, **ulkoinen** varmuuskopio ei korvaa tätä — se suojaa juuri niiltä tapauksilta, joissa isäntä itse on vaurioitunut.
- **Tarkistakaa varmuuskopionne.** Vedos, jota ei ole koskaan palautettu, on oletus, ei varmuuskopio. Luokaa kertakäyttöinen tietokanta ja palauttakaa vedos siihen, ennen kuin luotatte menettelyyn.
- **Säilyttäkää avainnippu erillään tietokannasta.** Jos `api-dataprotection` on samassa varmuuskopiojoukossa ja sama tapahtuma vaurioittaa molempia, salaus on arvoton.

---

*Ylläpitokysymyksiä? [Klacks-yhteisö Discordissa](https://discord.gg/YRP8p2abVC).*
