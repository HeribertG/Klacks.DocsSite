---
sidebar_position: 5
---

Onder Instellingen > ERP-overnamepunten configureert u hoe bestellingen uit een extern ERP-systeem als XML-bestanden automatisch in Klacks worden overgenomen.

## Zo werkt het

**Drie manieren van aanlevering:** Het ERP-systeem kan bestanden aanbieden in de bestandsopslag van het drop-point (Klacks haalt ze volgens schema automatisch op), ze via HTTP-POST rechtstreeks naar een import-endpoint pushen (geauthenticeerd met een toegangstoken), of een beheerder uploadt het XML-bestand handmatig op deze pagina via drag-and-drop.

**Het drop-point** is de centrale, door Klacks zelf beheerde brievenbus voor alle importbestanden — het toont drie gedeelten: Inkomend (wacht op de volgende run), Verwerkt (archief) en Fouten (ongeldige bestanden inclusief foutreden, met mogelijkheid tot opnieuw importeren). Een schema (cron-expressie, standaard elk uur) en een actief-schakelaar om te pauzeren sturen het automatisch ophalen.

**Toegangstokens** zijn alleen nodig als een ERP-systeem bestanden via push aanlevert. Elk token begint met `klacks_erp_`, is 1–730 dagen geldig (standaard 365) en wordt in leesbare tekst **slechts eenmaal, bij het aanmaken**, getoond. Zo'n token geldt uitsluitend voor het import-endpoint, niet voor de overige API-toegang, en kan op elk moment worden ingetrokken.

**Verwerking:** Bestellingen worden op basis van bronsysteem-ID en externe klantreferentie (of bij ontstentenis daarvan bedrijf/postcode/straat) toegewezen aan een bestaande of nieuw aangemaakte klant en ontstaan aanvankelijk als concept, dat planners moeten controleren en verzegelen. Een gewijzigde nieuwe levering van een reeds verzegelde bestelling sluit de oude automatisch af en maakt een nieuwe, gekoppelde versie aan; ongewijzigde herhaalleveringen leiden tot geen enkele actie.

## Goed om te weten

- Foutieve individuele bestellingen (bijv. zonder weekdag of met dubbele referentie) worden afgewezen, zonder de overige geldige bestellingen in hetzelfde bestand te blokkeren; het volledige bestand belandt echter toch in het foutengedeelte, zodat niets over het hoofd wordt gezien.
- Verwerkte bestanden worden gearchiveerd, niet verwijderd.
- Het exacte XML-formaat (verplichte velden, datumformaten, weekdaglogica) is gedocumenteerd in de handleiding direct op de instellingenpagina, evenals via een downloadbaar voorbeeldbestand.
- Deze configuratie bevindt zich in het instellingengedeelte en is daarmee voorbehouden aan administratieve rollen.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks gereset.*
