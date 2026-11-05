---
sidebar_position: 5
---

# ERP-overnamepunten

Onder Instellingen > Import (alleen zichtbaar in de expertmodus), kaart „ERP Drop Points”, configureert u hoe bestellingen uit een extern ERP-systeem als XML-bestanden automatisch in Klacks worden overgenomen.

## Zo werkt het

**Drie manieren van aanlevering:** Het ERP-systeem kan XML-bestanden in een map op de Klacks-server plaatsen (Klacks haalt ze volgens schema automatisch op zodra een bestand 10 seconden ongewijzigd is), ze via HTTPS-POST rechtstreeks naar een import-endpoint pushen (geauthenticeerd met een toegangstoken), of een beheerder uploadt het XML-bestand handmatig op deze pagina via drag-and-drop (de import start onmiddellijk). Er is geen SFTP; alleen XML-bestanden in het formaat `ErpOrderImport` worden geïmporteerd.

**Het drop-point** is de centrale, door Klacks zelf beheerde brievenbus voor alle importbestanden — het toont drie gedeelten: Inkomend (ontvangen of momenteel in import), Verwerkt (met een samenvatting per bestand) en Fouten (onleesbare of ongeldige bestanden inclusief foutreden, met mogelijkheid tot opnieuw importeren of verwijderen). Een schema (cron-expressie, standaard elk uur) en een actief-schakelaar om te pauzeren sturen het automatisch ophalen.

**Welke manier past bij welke installatie?** Op een kantoor-pc (Windows-installatie) ligt de map het meest voor de hand; de standaardmap is `C:\ProgramData\Klacks\ErpImport\erp\orders`. Deze is beveiligd, alleen SYSTEM en beheerders mogen er schrijven: een beheerder moet het account waaronder de ERP-export draait het recht „Wijzigen” geven op precies de map `erp\orders`, niet op de hele map `ProgramData\Klacks`. Op een eigen Docker-server staat de map (`/app/ErpImport/erp/orders`) binnen de container in een benoemd volume (named volume); een ERP op de servercomputer bereikt de map alleen als de beheerder een map van de server op `/app/ErpImport` koppelt (mount), anders blijven push met toegangstoken of handmatig uploaden over. Bij een door ons gehoste installatie is er geen toegang tot mappen van de server: push met toegangstoken of handmatig uploaden.

**Toegangstokens** zijn alleen nodig als een ERP-systeem bestanden via push aanlevert. Elk token begint met `klacks_erp_`, is 1–730 dagen geldig (standaard 365) en wordt in leesbare tekst **slechts eenmaal, bij het aanmaken**, getoond. Zo'n token geldt uitsluitend voor het import-endpoint, niet voor de overige API-toegang, en kan op elk moment worden ingetrokken.

**Verwerking:** Bestellingen worden op basis van bronsysteem-ID en externe klantreferentie (of bij ontstentenis daarvan bedrijf/postcode/straat) toegewezen aan een bestaande of nieuw aangemaakte klant en ontstaan aanvankelijk als concept, dat planners moeten controleren en verzegelen. Een gewijzigde nieuwe levering van een reeds verzegelde bestelling sluit de oude automatisch af en maakt een nieuwe, gekoppelde versie aan; ongewijzigde herhaalleveringen leiden tot geen enkele actie.

## Goed om te weten

- Foutieve individuele bestellingen (bijv. zonder weekdag of met dubbele referentie) worden afgewezen, zonder de overige geldige bestellingen in hetzelfde bestand te blokkeren; het bestand verschijnt toch onder Verwerkt, gemarkeerd met een waarschuwingssymbool, en de afgewezen bestellingen kunnen met hun reden worden uitgeklapt.
- Bestanden worden niet verplaatst of gearchiveerd: ze blijven in de map staan en hun status staat in de database. Met succes verwerkte bestanden worden na 90 dagen automatisch verwijderd; bestanden onder Fouten blijven staan totdat ze opnieuw worden geïmporteerd of verwijderd.
- Het exacte XML-formaat (verplichte velden, datumformaten, weekdaglogica) is gedocumenteerd in de handleiding direct op de instellingenpagina, evenals via een downloadbaar voorbeeldbestand.
- Deze configuratie bevindt zich in het instellingengedeelte en is daarmee voorbehouden aan administratieve rollen.

---
*Direct uitproberen: [Klacks Playground](https://play.klacks-software.ch) — Login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks gereset.*
