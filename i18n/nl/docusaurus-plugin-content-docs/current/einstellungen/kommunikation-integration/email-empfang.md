---
sidebar_position: 2
---

Onder Instellingen > IMAP-instellingen legt u een postbus vast die Klacks continu op de achtergrond ophaalt en weergeeft in het gedeelte „Postvak IN" — zo kan inkomende correspondentie automatisch aan medewerkers en klanten worden toegewezen en nagetrokken.

## Zo werkt het

**Verbindingsgegevens:** Server, poort (standaard 993), SSL-versleuteling, gebruikersnaam, wachtwoord, de op te halen map (standaard `INBOX`) en het ophaalinterval in seconden (standaard 300).

**Wat er met de opgehaalde e-mails gebeurt:** Klacks bevraagt de postbus periodiek via IMAP, controleert nieuwe berichten met een spamfilter (spam wordt zowel in Klacks als in de echte postbus naar de map Ongewenst verplaatst) en wijst overige berichten automatisch toe aan het bijbehorende klant- of medewerkersdossier, mits het afzenderadres als contactgegeven is vastgelegd. Zo ontstaat in het „Postvak IN" een op persoon filterbare correspondentiegeschiedenis. Wijzigingen zoals „als gelezen markeren", verplaatsen of verwijderen werken ook door naar de echte postbus.

**Verbinding testen:** De knop „IMAP-verbinding testen" maakt daadwerkelijk verbinding met de server, meldt zich aan, opent de geconfigureerde map in leesmodus en toont het aantal gevonden berichten. Bestaat de map niet, dan wordt dit expliciet gemeld.

## Goed om te weten

- Deze postbus is **geen** kanaal voor afwezigheidsmeldingen en **geen** onderdeel van de ERP-bestellingenovername (daarvoor bestaan aparte overnamepunten, zie de betreffende pagina) — ze voedt uitsluitend het algemene „Postvak IN".
- Deze instelling geldt globaal voor de hele installatie — er is geen apart IMAP-account per gebruiker.
- Wordt de voor versleuteling gebruikte sleutel van de installatie gereset, dan kan Klacks het opgeslagen wachtwoord niet meer ontsleutelen en pauzeert het ophalen totdat het wachtwoord opnieuw is opgeslagen.
- Berichten in het postvak IN kunnen direct vertaald worden als DeepL is geconfigureerd (zie de betreffende pagina).

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks gereset.*
