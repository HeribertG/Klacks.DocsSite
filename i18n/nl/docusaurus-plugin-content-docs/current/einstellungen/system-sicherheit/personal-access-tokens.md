---
sidebar_position: 2
---

# Personal Access Tokens

Personal Access Tokens (PAT's) zijn langlevende API-sleutels waarmee externe tools en diensten zonder gebruikersnaam en wachtwoord veilig toegang krijgen tot Klacks — bijvoorbeeld AI-assistenten zoals Claude Desktop via het Model Context Protocol (MCP), automatiseringsscripts of CI/CD-pijplijnen.

## Zo werkt het

**Token aanmaken:** onder Instellingen > Personal Access Tokens klikt u op "Nieuw token aanmaken", geeft u een betekenisvolle naam op (bijv. `Claude Desktop` of `CI-Pipeline`) en kiest u een geldigheidsduur tussen 1 en 730 dagen (standaard: 365 dagen). Het token wordt na het aanmaken in het formaat `klacks_pat_<willekeurige tekenreeks>` **precies één keer** weergegeven — kopieer het meteen, want daarna is het niet meer op te vragen.

**Gebruiken:** het token wordt als bearer-token in de `Authorization`-header van elk API-verzoek meegestuurd, bijv. `Authorization: Bearer klacks_pat_...`. Voor MCP-clients zoals Claude Desktop voert u het in als `AUTHORIZATION`-omgevingsvariabele van de MCP-server die naar `/mcp` verwijst.

**Beheren:** het overzicht toont naam, aanmaakdatum, vervaldatum en laatste gebruik van elk token — het token in platte tekst zelf wordt daar nooit meer getoond. Tokens die binnen de komende 30 dagen verlopen, zijn in de lijst gemarkeerd. Via de knop Intrekken wordt een token onmiddellijk en definitief geblokkeerd.

## Goed om te weten

- Klacks bewaart alleen een SHA-256-hash van het token, nooit het token in platte tekst zelf — een verloren token kan niet worden hersteld, alleen ingetrokken en opnieuw aangemaakt.
- Elk token is gekoppeld aan uw gebruikersaccount en heeft dezelfde rechten als uw eigen account — er is geen fijnmazige scope-beperking per token.
- Gebruik per tool een eigen token, zodat u het bij verdenking van misbruik gericht kunt intrekken zonder andere integraties te onderbreken.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks teruggezet.*
