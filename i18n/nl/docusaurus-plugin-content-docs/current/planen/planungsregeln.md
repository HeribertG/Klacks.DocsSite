---
sidebar_position: 5
---

Planningsregels definiëren de randvoorwaarden voor de automatische dienstplanning — werktijden, rusttijden en capaciteiten waaraan Klacks zich houdt bij het verdelen van de diensten.

## Zo werkt het

Een planningsregel wordt gekoppeld aan een **contract**. De vastgelegde grenswaarden gelden daarmee voor alle medewerkers met dat contract. Elke regel omvat vier gebieden:

**Werkdagen & rusttijden**
- Max. werkdagen: zachte regel voor de gewenste bloklengte voordat een rustdag wordt ingepland (bijv. "5 dagen werken, dan rust") — een overtreding maakt het rooster niet ongeldig, alleen minder optimaal
- Min. rustdagen tussen twee werkblokken
- Min. vrije uren tussen twee werkdagen (rusttijd vanaf het einde van een werkdag tot het begin van de volgende)
- Max. optimale kloof tussen diensten in uren
- Max. opeenvolgende werkdagen zonder rustdag

**Urenlimieten**
- Max. dagelijkse uren en max. wekelijkse uren
- Dagelijkse werkuren (streefwaarde)
- Overurengrens: vanaf dit aantal weekuren gelden uren als overuren

**Maandelijkse uren**
- Gegarandeerde uren (minimumaantal dat de medewerker per maand wordt toegezegd)
- Minimale en maximale uren per maand
- Voltijduren (maandelijks aantal uren dat overeenkomt met een voltijdbetrekking)

**Verlof**
- Verlofdagen per kalenderjaar

## Goed om te weten

- Bij het aanmaken van een nieuwe regel worden de **standaardwaarden uit de instellingen** (Planningsregels — standaardwaarden) automatisch overgenomen; u kunt elke waarde daarna individueel aanpassen.
- Planningsregels werken via het contract — u hoeft ze niet per persoon bij te houden. Verandert een regel, dan raakt dat alle medewerkers met dat contract.
- De overurengrens en de streefwaarde zijn twee verschillende dingen: de streefwaarde is de standaard per dag, de overurengrens de drempelwaarde per week.
- "Max. werkdagen" (zachte voorkeur voor de bloklengte) en "Max. opeenvolgende werkdagen" (harde, nooit te overschrijden bovengrens) zijn twee verschillende regels — niet verwarren.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks gereset.*
