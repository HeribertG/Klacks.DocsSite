---
sidebar_position: 4
---

Onder Instellingen > OpenRoute legt u de API-sleutel vast voor de externe dienst openrouteservice.org, die Klacks gebruikt voor routeoptimalisatie.

## Zo werkt het

OpenRouteService berekent reistijden en afstanden — voor autoritten, fietsen en te voet — en levert daarmee de basis voor de routeoptimalisatie in Klacks. In het enige veld van deze pagina voert u uw persoonlijke API-sleutel in. Een gratis sleutel krijgt u via de op de pagina gelinkte registratielink naar openrouteservice.org.

## Goed om te weten

- De sleutel wordt rechtstreeks vanuit de browser naar openrouteservice.org verzonden en wordt daarom bewust **in leesbare tekst** getoond in plaats van gemaskeerd (`***`) — anders dan bijvoorbeeld e-mailwachtwoorden. Dit is met opzet zo, zodat u een per ongeluk gemaakte typfout of een verlopen sleutel kunt herkennen; het is geen weergavefout.
- In de database wordt de sleutel niettemin versleuteld opgeslagen.
- Zonder geldige sleutel werkt de routeoptimalisatie niet — reistijden en afstanden kunnen dan niet worden berekend.
- Voor het enkel omzetten van adressen naar coördinaten (geocoding) gebruikt Klacks een andere, aparte dienst — deze sleutel is uitsluitend bedoeld voor de routeberekening.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks gereset.*
