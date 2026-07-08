---
sidebar_position: 3
---

Het adres- en personenbeheer is het hart van uw stamgegevens: medewerkers, klanten en externen met adressen, contactgegevens, contracten, groepslidmaatschap en kwalificaties — bereikbaar via het personensymbool in de navigatie.

## Zo werkt het

**Medewerker aanmaken:** verplichte velden zijn voornaam, achternaam en geslacht (vrouw/man/interseks/rechtspersoon). Optioneel registreert u geboortedatum, e-mail, telefoon, adres (straat, postcode, plaats, kanton, land) en groep/afdeling. U kunt het aanmaken ook aan de assistent Klacksy overlaten («maak een medewerker aan …»).

**Status:** de status volgt automatisch uit de begin- en einddatum van het lidmaatschap — er is geen handmatig statusveld. Er wordt onderscheid gemaakt tussen *actieve* (lidmaatschap loopt momenteel), *voormalige* (einddatum ligt in het verleden) en *toekomstige* (begindatum ligt nog vooruit).

**Groepen en afdelingen:** medewerkers kunnen aan groepen worden toegewezen. De structuur is hiërarchisch (bijv. `Klacks AG > IT > Entwicklung`), meervoudige toewijzing is toegestaan, en rechten kunnen op groepsniveau worden ingesteld.

**Contracten:** elke persoon kan meerdere contracten hebben, bijvoorbeeld bij een wijziging van pensum. De contractsjablonen zelf zijn vrij definieerbaar: onder Instellingen > Contracten maakt u eigen contracten aan met naam, pensum, soll-/maximum-/minimumuren, toeslagen (nacht-, zondag- en feestdagtoeslag) en betalingsinterval; aan elk contract kan bovendien een eigen feestdagenkalender worden gekoppeld, waardoor bijvoorbeeld kantonaal verschillende feestdagen kunnen worden weergegeven. Elk contract geldt voor een beperkte periode of voor onbepaalde tijd.

**Import:** er bestaat geen CSV-import voor stamgegevens. Bestaande adresboeken neemt u automatisch over via LDAP-/Active Directory-synchronisatie met een identity provider; individuele personen legt u handmatig of via Klacksy aan.

**Zoeken en filteren:** de vrije tekstzoekfunctie vindt personen op achternaam, voornaam, bedrijf of personeelsnummer, en ook op telefoonnummer/postcode; daarnaast kunt u filteren op kanton, status (actieve/voormalige/toekomstige) en groep.

## Goed om te weten

- Alleen *actieve* medewerkers zijn inplanbaar — controleer de begin-/einddatum van het lidmaatschap als iemand niet in het dienstrooster verschijnt.
- Meerdere contracten per persoon zijn normaal, bijvoorbeeld bij een wijziging van pensum — u hoeft daarvoor geen tweede persoon aan te maken. Nieuwe contractsjablonen (pensum, toeslagen, kalender) maakt u zelf aan onder Instellingen > Contracten.
- Maak eerst de groepsstructuur aan en wijs daarna de personen toe — zo gelden de rechten op groepsniveau vanaf het begin.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks gereset.*
