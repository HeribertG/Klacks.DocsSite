---
sidebar_position: 3
---

Onder Instellingen > Wizard-instellingen kiest u het AI-taalmodel dat de „Holistic Harmonizer" — een van de planningsassistenten van Klacks — gebruikt voor zijn beoordeling.

## Zo werkt het

In de dropdown kiest u uit de in Klacks geactiveerde LLM-modellen degene die de Holistic Harmonizer globaal moet gebruiken (of „(geen)", om er geen te gebruiken). Via de knop „Alle modellen testen" stuurt Klacks een kleine testafbeelding naar elk geactiveerd model en controleert of het antwoordt en de afbeelding kan lezen — met een timeout van maximaal 90 seconden per model. Het resultaat verschijnt als tabel met model, aanbieder, status (OK/fout), antwoordtijd en een knop om een succesvol getest model direct over te nemen.

Beeldverwerking is hier geen bijzaak, maar een vereiste: volgens de toelichtingstekst van de pagina heeft deze assistent („Wizard 3") modellen met beeldverwerking nodig om te functioneren.

## Goed om te weten

- Deze pagina heeft **geen** betrekking op de 1-klik-autoplanning, die diensten automatisch over medewerkers verdeelt — die werkt via een genetisch algoritme volledig zonder LLM en heeft hier geen instellingen.
- Staat „(geen)" als model ingesteld, dan is de Holistic Harmonizer feitelijk uitgeschakeld.
- Welke LLM-modellen in principe beschikbaar zijn (geactiveerd/gedeactiveerd), wordt elders in de AI-instellingen vastgelegd — hier kiest u alleen uit de reeds geactiveerde modellen.
- De testknop is een pure zelftest (bereikbaarheid + beeldbegrip + antwoordtijd) en wijzigt op zich geen planningsgegevens.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks gereset.*
