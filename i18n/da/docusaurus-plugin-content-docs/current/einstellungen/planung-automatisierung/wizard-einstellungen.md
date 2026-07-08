---
sidebar_position: 3
---

Under Indstillinger > Wizard-indstillinger vælger du den AI-sprogmodel, som "Holistic Harmonizer" — en af Klacks' planlægningsassistenter — bruger til sin vurdering.

## Sådan fungerer det

I dropdown-menuen vælger du blandt de LLM-modeller, der er aktiveret i Klacks, den som Holistic Harmonizer skal bruge globalt (eller "(ingen)" for slet ikke at bruge nogen). Via knappen "Test alle modeller" sender Klacks et lille testbillede til hver aktiveret model og kontrollerer, om den svarer og kan læse billedet — med op til 90 sekunders timeout pr. model. Resultatet vises som en tabel med model, udbyder, status (OK/fejl), svartid og en knap til direkte at overtage en model, der er testet med succes.

Billedbehandling er her ikke en biting, men en forudsætning: Ifølge sidens hjælpetekst kræver denne assistent ("Wizard 3") modeller med billedbehandling for at fungere.

## Godt at vide

- Denne side vedrører **ikke** 1-klik-auto-planlægningen, der automatisk fordeler vagter til medarbejdere — den kører via en genetisk algoritme helt uden LLM og har ingen indstillinger her.
- Står "(ingen)" som model, er Holistic Harmonizer reelt deaktiveret.
- Hvilke LLM-modeller der overhovedet er tilgængelige (aktiveret/deaktiveret), fastlægges et andet sted i AI-indstillingerne — her vælger du kun blandt de allerede aktiverede modeller.
- Test-knappen er en ren selvtest (tilgængelighed + billedforståelse + svartid) og ændrer i sig selv ingen planlægningsdata.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
