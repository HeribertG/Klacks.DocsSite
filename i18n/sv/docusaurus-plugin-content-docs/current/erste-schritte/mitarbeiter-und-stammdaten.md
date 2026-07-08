---
sidebar_position: 3
---

Adress- och personhanteringen är hjärtat i din stamdata: Medarbetare, kunder samt externa personer med adresser, kontaktuppgifter, avtal, grupptillhörighet och kvalifikationer — nåbart via personikonen i navigationen.

## Så fungerar det

**Skapa medarbetare:** Obligatoriska fält är förnamn, efternamn och kön (kvinna/man/intersexualitet/juridisk person). Valfritt registrerar du födelsedatum, e-post, telefon, adress (gata, postnummer, ort, kanton, land) samt grupp/avdelning. Alternativt kan du låta assistenten Klacksy sköta skapandet ("skapa en medarbetare …").

**Status:** Statusen härleds automatiskt från medlemskapets start- och slutdatum — det finns inget manuellt statusfält. Man skiljer mellan *Aktiva* (medlemskapet pågår för närvarande), *Tidigare* (slutdatumet ligger i det förflutna) och *Kommande* (startdatumet ligger fortfarande framåt i tiden).

**Grupper och avdelningar:** Medarbetare kan tilldelas grupper. Strukturen är hierarkisk (t.ex. `Klacks AG > IT > Utveckling`), flera tilldelningar är tillåtna, och rättigheter kan styras på gruppnivå.

**Avtal:** Varje person kan ha flera avtal, till exempel vid en ändring av tjänstgöringsgrad. Avtalsmallarna i sig är fritt definierbara: Under Inställningar > Avtal skapar du egna avtal med namn, tjänstgöringsgrad, mål-/max-/mintimmar, tillägg (natt-, sön- och helgdagstillägg) och betalningsintervall; till varje avtal kan dessutom en egen helgdagskalender kopplas, vilket t.ex. gör det möjligt att avbilda kantonalt olika helgdagar. Varje avtal gäller tidsbegränsat eller tillsvidare.

**Import:** Det finns ingen CSV-import för stamdata. Befintliga kataloger tar du automatiskt över via LDAP-/Active-Directory-synkronisering genom en Identity Provider; enskilda personer skapar du manuellt eller via Klacksy.

**Sök och filtrera:** Fritextsökningen hittar personer efter namn, förnamn, företag eller personalnummer samt via telefonnummer/postnummer; dessutom kan du filtrera efter kanton, status (Aktiva/Tidigare/Kommande) och grupp.

## Bra att veta

- Endast *Aktiva* är planeringsbara — kontrollera medlemskapets start-/slutdatum om någon inte dyker upp i schemat.
- Flera avtal per person är normalt, till exempel vid en ändring av tjänstgöringsgrad — du behöver inte skapa en andra person för det. Nya avtalsmallar (tjänstgöringsgrad, tillägg, kalender) skapar du själv under Inställningar > Avtal.
- Skapa gruppstrukturen först och tilldela sedan personerna — så tillämpas rättigheterna på gruppnivå från början.

---
*Testa direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
