---
sidebar_position: 4
---

Onder Instellingen > Identity Provider verbindt u Klacks met een externe directoryservice — LDAP/Active Directory of OAuth2/OpenID Connect — om medewerkers automatisch te importeren en/of de aanmelding daarmee af te handelen.

## Zo werkt het

**LDAP/Active Directory:** U legt host, poort (389/636), SSL, Base DN, Bind DN, Bind-wachtwoord en een gebruikersfilter vast. Een schakelaar „Gebruiken voor cliëntimport" activeert de automatische import: naam, voornaam, titel, bedrijf en adres worden overgenomen uit de directory-attributen — bij OpenLDAP en Active Directory deels onder verschillende attribuutnamen (bijv. `uid` versus `sAMAccountName`, `street` versus `streetAddress`). Deze veldtoewijzingen liggen vast in de backend en zijn niet via de interface bewerkbaar.

**OAuth2/OpenID Connect:** Client-ID, Client-Secret, optioneel Tenant-ID (Azure), autorisatie-, token- en UserInfo-URL, evenals scopes — voor het aanmelden via Google, Microsoft of GitHub.

**Verbinding testen en synchroniseren:** Bij LDAP/AD-providers toont „Verbinding testen" het aantal gevonden gebruikers inclusief voorbeeld-gebruikersnamen. Is de cliëntimport geactiveerd, dan start „Nu synchroniseren" een handmatige afstemming; het resultaat (verwerkt/nieuw/bijgewerkt/gedeactiveerd) verschijnt direct daarna als melding op de pagina.

## Goed om te weten

- Deze pagina is **alleen toegankelijk voor beheerders**, niet voor de supervisorrol.
- Bind-wachtwoord en Client-Secret worden versleuteld opgeslagen en in de interface alleen gemaskeerd (`***`) weergegeven; bij het opslaan zonder wijziging blijft de bestaande waarde behouden.
- Een permanent synchronisatielogboek (verloop, foutgeschiedenis) wordt momenteel **niet** in de interface getoond — alleen het resultaat van de laatst uitgevoerde handmatige run.
- Personen die niet meer in de directory worden gevonden, worden bij de synchronisatie niet verwijderd, maar gedeactiveerd via de einddatum van hun lidmaatschap; duiken ze later weer op, dan worden ze automatisch gereactiveerd.
- Een externe identificatie uit de directory (LDAP ObjectGUID, of bij ontstentenis daarvan de Distinguished Name) voorkomt duplicaten: wordt bij een hernieuwde synchronisatie dezelfde identificatie gevonden, dan wordt de bestaande persoon bijgewerkt in plaats van opnieuw aangemaakt.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks gereset.*
