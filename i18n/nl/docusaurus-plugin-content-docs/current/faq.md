---
sidebar_position: 9
---
# Veelgestelde vragen

De vragen die vóór de eerste inzet het vaakst worden gesteld — met eerlijke antwoorden, ook waar het antwoord „nog niet" luidt.

## Uitproberen en starten

**Moet ik Klacks installeren om het te zien?**
Nee. De [Playground](https://play.klacks-software.ch) is een openbare omgeving met demogegevens; u meldt zich aan met `admin@test.com` / `P@ssw0rt1` en hebt volledige adminrechten. De database wordt dagelijks om 04:00 uur Zwitserse tijd gereset — voer daar geen echte persoonsgegevens in.

**Hoe lang duurt een installatie?**
De installer is één commando. Hij genereert wachtwoorden en certificaat, pint de actuele versie, start de stack en wacht tot alles gezond is. Het langste deel daarvan is het downloaden van de images. De vereisten staan onder [Systeemvereisten](../betrieb/systemvoraussetzungen/).

**Waarom moet ik een eigen adminaccount aanmaken?**
Omdat het meegeleverde account een openbaar bekend wachtwoord heeft. Klacks laat u daarmee precies één keer aanmelden en vraagt dan om uw eigen account; daarna wordt het standaardaccount uitgeschakeld. Dat is opzet, geen fout.

## Beheer

**Waar staan mijn gegevens?**
Op uw infrastructuur. Klacks stuurt uw gegevens niet terug naar de fabrikant. Als u een AI-model als externe dienst koppelt, gelden voor **die** dienst uiteraard de voorwaarden van die dienst — de modelkeuze ligt bij u.

**Heb ik per se een cloudaanbieder nodig?**
Nee, dat is de kern van on-premise: de stack draait op uw server. U hebt alleen **uitgaande** toegang nodig tot de pakket- en updatebronnen (`ghcr.io`, `github.com`). Een bedrijf helemaal zonder internettoegang is er momenteel **niet** — installaties in afgeschermde netwerken zijn een nog niet gerealiseerde uitbreidingsstap.

**Hoe maak ik een back-up van mijn gegevens?**
Zelf — de back-up ligt bij u. Hoe het werkt en welk volume u absoluut niet mag vergeten, staat onder [Back-up en herstel](../betrieb/backup-und-wiederherstellung/).

**Wat gebeurt er als een update misgaat?**
De updateservice maakt vooraf een back-up van de database, schakelt nieuwe versies gezamenlijk om en controleert daarna de gezondheid. Is de nieuwe versie niet gezond, dan draait hij automatisch terug. Details onder [Updates en rollback](../betrieb/updates-und-rollback/).

**Draait Klacks op mijn bestaande hardware?**
Als richtwaarde geldt: **8 GB RAM en 4 vCPU**. Voor kleinere hosts zijn er gedocumenteerde instellingen die geheugen vrijmaken — tegen de prijs dat de volgende vraag aan Klacksy iets langer duurt.

**Past Klacks bij mijn identity provider?**
Ja. Klacks kan worden gekoppeld aan een bestaande identiteitsprovider in plaats van eigen accounts te beheren — zie [Identity Provider](../einstellungen/kommunikation-integration/identity-provider/).

## Functies

**Voor welke branches is Klacks geschikt?**
Het is ontworpen voor ploegendienst- en inzetbedrijven: ambulante zorg en thuiszorg, ziekenhuizen, beveiligingsdiensten, schoonmaak- en huishoudelijke diensten en logistiek.

**Welke talen spreekt de interface?**
De documentatie is beschikbaar in 25 talen, waaronder Duits, Engels, Frans, Italiaans, Spaans, Pools, Japans, Chinees (vereenvoudigd en traditioneel), Arabisch en Hebreeuws — Arabisch en Hebreeuws ook met de leesrichting van rechts naar links.

**Moet ik me vastleggen op één AI-model?**
U kiest zelf aanbieder en model en kunt die wisselen. Hoe u dat instelt en controleert, staat onder [LLM-providers en modellen](../einstellungen/klacksy-konfiguration/llm-provider-und-modelle/) en [Modelverbindingstest](../einstellungen/klacksy-konfiguration/modell-verbindungstest/).

**Wat kost Klacks?**
De broncode valt onder de GNU Affero General Public License v3 (AGPL-3.0) — u mag haar lezen, wijzigen en zelf draaien. Biedt u een gewijzigde versie via een netwerk aan anderen aan, dan moet u deze gebruikers de gewijzigde broncode eveneens onder de AGPL-3.0 beschikbaar stellen. Alles wat daarbuiten valt (vragen, uitwisseling, doorontwikkeling) loopt via de [Klacks-community op Discord](https://discord.gg/YRP8p2abVC) en de [openbare broncoderepository](https://github.com/HeribertG/Klacks.Api).

**Is Klacks af?**
Nee, en dat staat ook nergens beweerd. Klacks is in opbouw, maar wordt openbaar ontwikkeld en daadwerkelijk gebruikt — in de Playground kunt u de actuele stand altijd zelf controleren, in plaats van een beschrijving te geloven.

## Meewerken

**Ik heb een fout gevonden of een vraag.**
Het snelst in de [community op Discord](https://discord.gg/YRP8p2abVC). Voor fouten in de software hoort een melding in de [repository](https://github.com/HeribertG/Klacks.Api). Altijd nuttig zijn: versie, de laatste stap vóór de fout en de laatste regels van de logboeken — zie [Probleemoplossing](../betrieb/fehlerbehebung/).

**Kan ik zelf iets bijdragen?**
De broncode is open en de documentatie ligt in hetzelfde huis. Aanwijzingen over onduidelijke passages zijn even welkom als code.

---

*Ontbreekt uw vraag? [Klacks-community op Discord](https://discord.gg/YRP8p2abVC).*
