---
sidebar_position: 1
---

Onder Instellingen > Planningsregels (standaardwaarden) bepaalt u de waarden die bij het aanmaken van een nieuw contract respectievelijk een nieuwe planningsregel automatisch worden vooringevuld.

## Zo werkt het

De pagina bundelt meerdere groepen vooringevulde waarden:

- **Werkuren:** Dagelijkse werkuren (streeftijd), overurengrens (uur/week), gegarandeerde, minimale en maximale maanduren, en het voltijdse aantal uren.
- **Grenswaarden van planningsregels:** Max. werkdagen, min. rustdagen tussen twee werkblokken, min. vrije uren tussen twee werkdagen, max. optimale kloof tussen diensten, max. dag-/weekuren en max. opeenvolgende werkdagen — dezelfde grootheden die ook een individuele planningsregel definieert.
- **Toeslagen:** Nacht-, feestdag-, zaterdag- en zondagtoeslag in procent.
- **Standaard werkdagen en weekend:** Welke weekdagen als werkdagen gelden, of er ploegendienst (vroege/late/nachtdiensten) wordt gewerkt, welke dagen als weekend gelden en op welke weekdag de week begint.
- **Planningscommando's (keywords):** De tekstcommando's `FREE`, `EARLY`, `LATE`, `NIGHT` en hun tegenpolen met een minteken, `-FREE`, `-EARLY`, `-LATE`, `-NIGHT`, zijn hier configureerbaar. Typt iemand deze woorden rechtstreeks in een dagcel van het dienstrooster, dan herkent Klacks dit niet als notitie, maar als wens: `FREE` betekent „deze dag indien mogelijk niet inplannen", `EARLY`/`LATE`/`NIGHT` geven de voorkeur aan of forceren een bepaald diensttype, en de tegenpolen sluiten het omgekeerde uit. Zowel de auto-planning als de Harmonizer houden rekening met deze wensen als richtlijn.

## Goed om te weten

- Deze pagina beheert **globale standaardwaarden** — wijzigingen hebben alleen effect op **nieuw** aangemaakte contracten respectievelijk planningsregels, niet met terugwerkende kracht op reeds bestaande.
- De grenswaarden van planningsregels zijn hier identiek aan de waarden die u anders per contract afzonderlijk instelt — hier legt u alleen de startwaarde vast die een nieuw contract meekrijgt.
- De planningscommando's zijn in het dienstrooster standaard verborgen en kunnen via een eigen pictogram in de werkbalk zichtbaar worden gemaakt.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks gereset.*
