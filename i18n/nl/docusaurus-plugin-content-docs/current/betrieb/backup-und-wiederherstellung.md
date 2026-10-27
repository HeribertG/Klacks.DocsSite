---
sidebar_position: 2
---
# Back-up en herstel

Uw gegevens staan volledig op uw eigen infrastructuur — daarmee ligt ook de back-up bij u. Deze pagina laat zien wat er moet worden veiliggesteld en hoe u het terugzet.

## Wat er moet worden veiliggesteld

| Wat | Waar | Hoe vaak |
|---|---|---|
| Database | Volume `postgres_data` | dagelijks, minstens vóór elke update |
| Uploads | Volume `api-uploads` | samen met de database |
| Documenten | Volume `api-documents` | samen met de database |
| Sleutelring | Volume `api-dataprotection` | samen met de database, **absoluut** |

Het volume `api-dataprotection` bevat de sleutelring waarmee Klacks versleutelde instellingen (bijvoorbeeld toegangsgegevens voor communicatiekanalen) ontsleutelt. Een database zonder deze sleutelring is wel aanwezig, maar niet volledig bruikbaar — back up hem dus altijd mee.

## Database veiligstellen

```bash
docker exec klacks-postgres pg_dump -U admin -d Klacks -Fc > klacks-20260922.dump
```

Het formaat `-Fc` (custom) comprimeert en maakt het mogelijk om bij het terugzetten afzonderlijke tabellen te kiezen.

## Database herstellen

```bash
docker exec -i klacks-postgres pg_restore -U admin -d Klacks --clean --if-exists < klacks-20260922.dump
```

`--clean --if-exists` ruimt bestaande objecten vooraf op, zodat het terugzetten niet strandt op reeds bestaande tabellen.

## De valkuil: rollback na een mislukte migratie

Precies hier is in het verleden een productie-uitval ontstaan, en het mechanisme is dat van elke dump-gebaseerde rollback:

Legt een foutieve versie via een migratie **nieuwe tabellen** aan, dan staan die tabellen niet in de dump. Bij het terugzetten blijft de database dus niet op de oude stand staan — de nieuwe tabellen **overleven** het terugzetten, terwijl de migratiegeschiedenis (`__EFMigrationsHistory`) naar de oude stand wordt teruggezet. De volgende startpoging loopt dan vast op de fout `42P07: relation "…" already exists` en de installatie blijft in een herstartlus hangen.

Als u na een mislukte update handmatig terugdraait, controleer dan na het terugzetten of er tabellen zijn overgebleven die in de oude versie nog niet bestonden, en verwijder die **voordat** u de API weer start.

## Bewaring en verwijdering

Klacks verwijdert gegevens niet alleen met een verwijdermarkering, maar **fysiek**. Een achtergronddienst draait dagelijks en verwijdert onherroepelijk alle als verwijderd gemarkeerde rijen waarvan het verwijderingstijdstip langer geleden is dan de ingestelde termijn — en wel over **alle** tabellen met een verwijdermarkering heen (medewerkers, adressen, groepen, diensten, werktijden, afwezigheden, pauzes enzovoort). Er is geen uitzonderingslijst; de verwijderplicht gaat bewust vóór de herstelbaarheid.

De termijn stuurt u via de instelling `DATA_RETENTION_DAYS`; zonder eigen opgave geldt de standaardwaarde van **3650 dagen (10 jaar)**. De pagina [Gegevensbewaring](../../einstellungen/system-sicherheit/datenaufbewahrung/) beschrijft de instelling in detail.

## Goed om te weten

- **Vóór elke update maakt Klacks zelf een back-up.** De updateservice maakt een gegevensback-up voordat hij een nieuwe versie activeert; bij een migratie is de back-up gekoppeld aan de updateoperatie en wordt hij hergebruikt voor een automatische of handmatige rollback. Een eigen, **externe** back-up vervangt dat niet — hij beschermt precies tegen de gevallen waarin de host zelf wordt getroffen.
- **Controleer uw back-up.** Een dump die nooit is teruggezet, is een aanname, geen back-up. Maak een wegwerpdatabase aan en zet hem daar terug voordat u op de procedure vertrouwt.
- **Bewaar de sleutelring gescheiden van de database.** Staat `api-dataprotection` in dezelfde back-upset en treft hetzelfde incident beide, dan is de versleuteling waardeloos.

---

*Vragen over het beheer? [Klacks-community op Discord](https://discord.gg/YRP8p2abVC).*
