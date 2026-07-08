---
sidebar_position: 4
---

Den eviga kalendern beräknar helgdagar automatiskt för varje år — du definierar reglerna en gång, sedan känner Klacks till helgdagarna för alla kommande år.

## Så fungerar det

Varje helgdag beskrivs med en kort regel. Det finns två grundtyper:

- **Fasta datum** i formatet `MM/DD`: `01/01` är nyårsdagen, `08/01` den schweiziska nationaldagen, `12/25` juldagen.
- **Påskrelaterade datum** i formatet `EASTER+XX` eller `EASTER-XX`: Påskdagens datum beräknas automatiskt enligt Gauss påskformel, och helgdagen anges som avstånd till detta. Exempel: `EASTER-02` = långfredagen, `EASTER+01` = annandag påsk, `EASTER+39` = Kristi himmelsfärds dag, `EASTER+50` = annandag pingst, `EASTER+60` = Kristi lekamens fest.

Dessutom finns **fasta datum med veckodagsförskjutning** (`MM/DD+XX+WW` respektive `MM/DD+XX-WW`) för helgdagar som «första torsdagen i november» (`11/01+00+TH`) eller «sista måndagen i maj» (`05/25+00-MO`).

Med **SubRules** flyttar du automatiskt en helgdag om den infaller på en viss veckodag — t.ex. `SA+2;SU+1`: Om dagen infaller på lördag eller söndag flyttas den till måndag. Flera regler separeras med `;`.

För varje regel anger du dessutom namn och beskrivning (flerspråkigt), land och kanton/delstat samt kryssrutorna **Lagstadgad helgdag** och **Betald**.

## Bra att veta

- Veckodagsförkortningarna är engelska: `SU`, `MO`, `TU`, `WE`, `TH`, `FR`, `SA`.
- SubRules är främst avsedda för att flytta helgdagar från helgen till nästa vardag.
- Kryssrutan **Betald** är relevant för löneberäkningen.
- Via land och kanton/delstat styr du regionala skillnader — långfredagen gäller till exempel inte i alla kantoner i Schweiz (undantag: VS, TI).
- De förinstallerade kalenderpaketen för länder och schweiziska kantoner är skyddade mot radering; egna, själv skapade kalenderurval kan du radera när som helst.

![Helgdagsregler i Klacks](/img/app-calendar-de.png)

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
