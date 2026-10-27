---
sidebar_position: 3
---
# Updates en rollback

Klacks werkt zichzelf bij — met ondertekende pakketten, een back-up vóór elke stap en een automatische terugweg als er iets misgaat. Deze pagina legt uit wat daarbij gebeurt en hoe u kunt ingrijpen.

## Hoe een update verloopt

1. **Detecteren.** De API raadpleegt het ondertekende manifest dat de fabrikant bij elke release publiceert. Staat daar een nieuwere versie in, dan geldt de update als beschikbaar.
2. **Back-up maken.** De updateservice maakt een gegevensback-up van de database. Bevat de nieuwe versie een migratie, dan wordt deze back-up vast aan de updateprocedure gekoppeld en staat hij later klaar voor een terugweg.
3. **Ophalen en gezamenlijk activeren.** De service laadt de nieuwe images voor `klacks-api` **en** `klacks-ui` en schakelt beide samen om — de twee delen draaien in gelijke pas, nooit in verschillende versies.
4. **Controleren.** Na het omschakelen raadpleegt de service de diepe gezondheidscontrole `/internal/health/deep`.
5. **Beoordelen.** Is de nieuwe versie gezond, dan geldt de update als geslaagd. Is ze dat niet, dan draait de service **beide** delen automatisch terug naar de vorige versie en controleert opnieuw. Lukt ook dat niet, dan wordt de toestand als mislukt gelogd, zodat u het ziet.

## Wat „ondertekend" betekent

De fabrikant ondertekent elke release en uw Klacks controleert de handtekening voordat het een pakket accepteert. De openbare sleutel en het adres van het manifest zijn vaste waarden van de fabrikant in uw `.env`:

- `UPDATE_MANIFEST_BASE_URL` — vast op de releasebron van de fabrikant
- `UPDATE_SIGNATURE_PUBLIC_KEY` — moet passen bij de privésleutel waarmee de fabrikant ondertekent

Deze twee waarden zijn **niet bedoeld om te wijzigen**. Wie ze vervangt, heft de controle op en opent daarmee precies het gat dat de handtekening dicht.

Het manifest bevat onder meer: kanaal (`Stable` of `Beta`), de nieuwste versie, de minimumversie vanaf welke een directe update mogelijk is (`MinUpgradableFrom`), de publicatiedatum, of een databasemigratie is inbegrepen, de artefacten, de handtekening en een verwijzing naar de wijzigingslijst.

`klacks-api` en `klacks-ui` zijn in de `.env` **op een exacte versie vastgezet**, zodat ze niet ongemerkt uit elkaar gaan lopen. De updateservice zelf draait altijd op `latest` — hij staat bewust niet in het ondertekende manifest en vervangt alleen api en ui.

## Instellingen voor het beheer

In het adminbereik onder **Systeem → Updates**:

| Instelling | Werking |
|---|---|
| **Auto-enabled** | Updates worden gedetecteerd en automatisch geïnstalleerd |
| **Notify only** | Updates worden alleen **gedetecteerd**, maar niet geïnstalleerd totdat u dat activeert |
| **Onderhoudsvenster** | Tijdvenster waarin automatische updates mogen draaien |

Deze instellingen staan in de database en hebben voorrang op de startwaarden uit de `.env` (`UPDATE_AUTO_ENABLED`, `UPDATE_NOTIFY_ONLY`), die alleen bij de eerste start gelden.

## Handmatig terugdraaien

Automatisch hoeft hier niemand in te grijpen — een mislukte update draait de service zelf terug. Wilt u bewust een stap terug:

1. Zet in de `.env` `KLACKS_API_TAG` en `KLACKS_UI_TAG` op de vorige versie.
2. Activeer de stack opnieuw: `docker compose up -d klacks-api klacks-ui`.
3. **Heeft de foutieve versie al gemigreerd**, zet dan bovendien de passende back-up van vóór de update terug — en let daarbij op de valkuil op de pagina [Back-up en herstel](../backup-und-wiederherstellung/): tabellen die de nieuwe versie heeft aangemaakt, overleven het terugzetten en blokkeren de volgende start.

## Goed om te weten

- **De terugweg is geen noodoplossing, maar het normale geval.** Elke updateprocedure heeft een status: geslaagd, teruggedraaid of terugweg mislukt. Een teruggedraaide update is een normale, gelogde procedure — geen incident.
- **Een teruggedraaide update is geen teruggezette update.** De rollback herstelt de versie, niet uw gegevens. Gegevenswijzigingen die u tussen update en terugweg hebt aangebracht, komen uit de stand van de back-up.
- **Nakijken kunt u in de logboeken:** `docker compose logs klacks-updater` toont detectie, back-up, omschakeling en terugweg.

---

*Vragen over het beheer? [Klacks-community op Discord](https://discord.gg/YRP8p2abVC).*
