---
sidebar_position: 8
---

# Klacksy als proactief teamlid

Klacksy wacht niet tot hem iets wordt gevraagd. Eén keer per uur bekijkt hij op de achtergrond het bedrijf en meldt wat hem opvalt: onbezette diensten, aflopende contracten, achterstallige periodes, ontbrekende stamgegevens. Hoever hij daarbij mag gaan, leggen admins per bevindingstype afzonderlijk vast — standaard meldt hij uitsluitend en handelt hij nooit op eigen initiatief.

Niet te verwarren met de [Autonomieniveaus](../einstellungen/klacksy-konfiguration/autonomie-stufen.md): daar gaat het om hoeveel bevestiging Klacksy nodig heeft wanneer **u** hem in de chat iets vraagt. Hier gaat het om het tegenovergestelde — om wat hij **ongevraagd** doet.

## Zo werkt het

**Wat een bevinding is:** een bevinding is een vaststelling die Klacksy zelfstandig heeft gedaan — bijvoorbeeld "deze dienst is over drie dagen nog onbezet" of "deze afrekenperiode is al een week achterstallig". Daarvoor loopt elk uur op de achtergrond een controle over zo'n twaalf controleregels. De herkenning zelf is hardgecodeerd: geen taalmodel beslist of iets een bevinding is — dezelfde regel levert hetzelfde resultaat, ongeacht welke AI-provider u gebruikt.

**Veertien bevindingstypen zijn instelbaar,** waaronder Onbezette dienst, Hiaat in beschikbaarheid, Aflopend contract, Ontbrekende stamgegevens, Openstaande opdracht, Naderende periodeafsluiting, Achterstallige periode, Afwijking van de streefuren, Lege container, Blokkeringsconflict en Open scenario. Twee daarvan ontstaan niet in de uurlijkse run, maar bij de ERP-bestellingsimport.

**De drie niveaus — per bevindingstype apart:** onder Instellingen > Klacksy > "Klacksy handelingsruimte" (expertmodus, alleen admins) staat elk bevindingstype in een eigen rij met de kolom "Hoogste niveau":

- **Alleen melden** — Klacksy laat het weten, meer niet. Dit is de standaardinstelling voor elk bevindingstype.
- **Scenario klaarzetten** — Klacksy legt bovendien een kant-en-klare oplossing als scenario klaar, die een mens alleen nog hoeft te accepteren.
- **Uitvoeren** — Klacksy verhelpt de bevinding zelf en rapporteert daarna erover.

Vanaf "Scenario klaarzetten" moet een verantwoordelijke persoon zijn aangewezen: onder diens rechten loopt de actie, en die persoon krijgt het rapport. Daarbij komen per rij budgetten die beperken hoe vaak Klacksy mag handelen (standaard maximaal 5 acties per dag en 3 binnen 60 minuten), plus een schakelaar "Actief". Deze regelt uitsluitend het zelfstandig handelen — of en hoe een melding u bereikt, blijft uw persoonlijke meldingsinstelling.

**De harde grens in het programma:** een hoger niveau werkt alleen daar waar voor het bevindingstype ook daadwerkelijk een automatische oplossing is vastgelegd. Ontbreekt die, dan blijft het bij melden — ongeacht de instelling, en ook als iemand de bevinding in een individueel geval aan Klacksy delegeert. Deze grens zit in de programmacode en is via de interface niet op te heffen. Op dit moment is precies één oplossing vastgelegd: bij het bevindingstype "Lege container" kan Klacksy de ontbrekende slotsjabloon zelf aanmaken.

**Waar de bevindingen terechtkomen:** op de Klacksy-knop in de kopregel toont een teller de ongelezen meldingen. Een klik opent de zijbalk, waar de bevindingen onder de kop "Terwijl je weg was…" verzameld staan. Per melding staan "Toon me dat" (springt naar de betreffende plek), "Nuttig" en "Verbergen" klaar — dat laatste naar keuze met een reden ("Zulke meldingen wil ik in het algemeen niet", "Deze keer klopte de melding niet", "Is al opgelost") of zonder. Waar het is toegestaan, is er bovendien "Doe jij het": een eenmalige vrijgave die precies deze ene bevinding naar "Scenario klaarzetten" tilt. U kunt Klacksy in de chat ook rechtstreeks vragen welke bevindingen op dit moment openstaan.

**Als een bevinding is opgelost:** de betreffende rij draagt in de containerweergave van de dienstenlijst de markering "Door Klacksy opgelost op …" — en wel zowel wanneer Klacksy de oplossing zelf heeft uitgevoerd, als wanneer een mens een door Klacksy voorbereid scenario heeft goedgekeurd. Voert Klacksy het zelf uit, dan gaat er bovendien een rapport naar de verantwoordelijke persoon.

**De noodstop:** boven de chat zien admins de schakelaar "Klacksy handelt autonoom: AAN/UIT". Uitschakelen zet elk bevindingstype meteen terug op "alleen melden" — ook al verleende eenmalige vrijgaven. De meldingen stoppen daarbij niet: de noodstop stopt het handelen, niet het melden. Dezelfde schakelaar staat ook op de instellingenkaart.

## Goed om te weten

- Standaard staat elk bevindingstype op "Alleen melden" — Klacksy handelt pas als een admin een niveau bewust verhoogt. De noodstop is daarvoor niet nodig: die staat standaard uit en blijft als directe rem in reserve.
- Meldingen gaan alleen naar admins en bevoegde planners. Wie alleen bepaalde groepen mag zien, krijgt ook alleen bevindingen uit die groepen; admins zien alles. Planners ontvangen de bevindingen, maar zien de niveau-instelling niet.
- Het niveau "Scenario klaarzetten" werkt alleen bij oplossingen die als scenario zijn af te beelden. De vandaag vastgelegde oplossing hoort daar niet bij — daarbij werkt uitsluitend "Uitvoeren".
- De instellingenkaart en de autonomieschakelaar vereisen adminrechten; zonder deze is de autonomiestatus niet in te zien.
- Het uurlijkse ritme is vast ingebouwd en niet via de interface instelbaar; de eerste run start twee minuten na het opstarten van het programma.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks gereset.*
