---
sidebar_position: 3
---

# Gegevensbewaring

Onder Instellingen > Gegevensbewaring bepaalt u hoe lang verwijderde records — medewerkers, adressen, groepen, diensten, werktijden, afwezigheden, pauzes en meer — in het systeem bewaard blijven voordat ze onherroepelijk worden verwijderd.

## Zo werkt het

**Verwijdering in twee fasen:** wanneer u een record in Klacks verwijdert, wordt deze eerst alleen voorzien van een soft-delete-markering (gemarkeerd als verwijderd, maar fysiek nog aanwezig). Pas na afloop van de hier ingestelde termijn verwijdert een dagelijks draaiende achtergronddienst de als verwijderd gemarkeerde rijen **fysiek en onherroepelijk** uit de database — over alle betrokken tabellen heen, niet alleen voor één enkel onderdeel.

**Bewaartermijn instellen:** het invoerveld accepteert waarden tussen 30 en 36.500 dagen (ongeveer 1 maand tot 100 jaar); daarnaast toont Klacks de termijn ook in jaren/maanden. De standaardwaarde is 3.650 dagen (10 jaar).

## Goed om te weten

- Een verkorting van de termijn werkt ook door op reeds bestaande, allang verwijderde records: alles wat ouder is dan de nieuwe termijn wordt bij de volgende run van de achtergronddienst verwijderd — controleer vóór een verkorting of dit gewenst is.
- De fysieke verwijdering is definitief — er is daarna geen herstel meer mogelijk, ook niet door de support.
- Deze instelling vormt de technische basis van de in de privacyverklaring beschreven verwijderingstermijnen; ze geldt globaal voor alle soft-delete-geschikte gegevenstypen, niet per module configureerbaar.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks teruggezet.*
