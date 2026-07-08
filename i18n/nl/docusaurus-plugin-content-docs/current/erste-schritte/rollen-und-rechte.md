---
sidebar_position: 4
---

# Rollen en rechten

Klacks kent precies twee toewijsbare rechtenniveaus voor loginaccounts: **Supervisor** en **Admin**. Een derde, technisch zelfstandige rol bestaat niet — begrippen zoals "planner" beschrijven hieronder een **functie in de dagelijkse praktijk**, geen extra rechtenniveau.

## De twee echte rollen

**Supervisor** mag adressen, groepen, contracten, afwezigheden en shifts aanmaken, bewerken en verwijderen, en in het dienstrooster een dag of een groep goedkeuren en deze goedkeuring weer intrekken. Het enkel bevestigen van individuele werktijden vereist daarentegen geen bijzondere rol — dat kan elk loginaccount.

**Admin** mag daarnaast alles wat Supervisor mag, plus: toegang tot alle instellingen (inclusief het gebruikersbeheer zelf), periodes afsluiten en heropenen, en bijzonder beveiligde onderdelen zoals identity provider, rapporten en kalenderregels beheren.

De toewijzing gebeurt via een dropdown in het gebruikersbeheer (tandwielsymbool) en werkt onmiddellijk, zonder aparte opslaan-klik.

## "Planner" als functie, niet als rol

In de dagelijkse praktijk neemt meestal een Supervisor-account het eigenlijke planningswerk op zich — auto-planning starten, in het planrooster aanpassen via drag-and-drop, dagen of groepen ter goedkeuring indienen. Dat is geen apart rechtenniveau, maar gewoon de rechten die een Supervisor-account toch al heeft.

## Goed om te weten

- De laatst aangemelde gebruiker wordt in het gebruikersbeheer wel weergegeven, maar kan daar niet zelf worden bewerkt, in zijn rechten worden gewijzigd of worden verwijderd.
- Periodes definitief afsluiten of heropenen blijft uitsluitend voorbehouden aan Admin — ook als een Supervisor dagen of groepen al heeft goedgekeurd.
- Een loginaccount hoeft niet per se gekoppeld te zijn aan een medewerker-stamgegevenskaart — gebruikersbeheer en personenbeheer zijn gescheiden onderdelen.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks gereset.*
