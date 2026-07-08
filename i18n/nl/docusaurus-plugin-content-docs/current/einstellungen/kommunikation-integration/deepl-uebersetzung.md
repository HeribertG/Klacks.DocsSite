---
sidebar_position: 3
---

Onder Instellingen > DeepL legt u een DeepL-API-sleutel vast, waarmee Klacks teksten automatisch kan vertalen — momenteel vooral inkomende e-mails in het postvak IN.

## Zo werkt het

**API-sleutel:** Eén enkel invoerveld neemt de DeepL-API-key op (formaat `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx` voor de gratis Free-API, of zonder de `:fx`-toevoeging voor de betaalde Pro-API). Klacks herkent aan de hand van de `:fx`-toevoeging automatisch welk van de twee DeepL-API-adressen aangesproken moet worden — een aparte omschakeling tussen Free en Pro is niet nodig. Een account en de sleutel zelf kunt u aanvragen via deepl.com/pro-api.

**Gebruik:** In het „Postvak IN" kan elke e-mail via het vertaal-icoon vertaald worden naar de op dat moment ingestelde interfacetaal; origineel en vertaling zijn via een schakelaar met elkaar te vergelijken. Zonder opgeslagen sleutel is deze functie niet beschikbaar.

## Goed om te weten

- Deze instelling geldt globaal voor de hele installatie — er is geen sleutel per gebruiker.
- Er is geen aparte „test"-knop op deze pagina; of de sleutel werkt, blijkt bij de eerste vertaalpoging in het postvak IN.
- Is de sleutel ongeldig of verlopen, dan herkent Klacks dit aan het antwoord van DeepL (authenticatiefout) en meldt dit in plaats van een lege of foutieve vertaling te tonen.
- De sleutel wordt versleuteld opgeslagen en in het formulier gemaskeerd weergegeven.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks gereset.*
