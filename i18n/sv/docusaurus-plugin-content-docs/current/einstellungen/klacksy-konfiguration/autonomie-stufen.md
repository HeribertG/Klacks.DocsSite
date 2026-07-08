---
sidebar_position: 4
---

# Autonominivåer

Hur självständigt får Klacksy agera innan den frågar? Under Inställningar > Klacksy Autonomi anger du detta för egen del — inställningen gäller per användarkonto, inte gemensamt för alla användare.

## Så fungerar det

**Fyra nivåer:**

- **Föreslå** — Klacksy föreslår bara, varje ändring kräver din bekräftelse.
- **Assisterad** — reversibla åtgärder utförs direkt, allt annat kräver bekräftelse.
- **Autonom** (standard) — alla åtgärder utförs direkt, förutom särskilt känsliga.
- **Helt autonom** — även flerstegsplaner körs igenom utan mellanliggande godkännanden.

**Så verkar klassificeringen:** Varje åtgärd som Klacksy skulle kunna utföra är internt klassificerad efter risk: rent läsande åtgärder körs alltid direkt; reversibla eller scenariobundna åtgärder (t.ex. i en testplanering) kräver minst nivån Assisterad; oåterkalleliga åtgärder kräver minst nivån Autonom. Känsliga åtgärder — användarhantering, rättigheter och ändringar av autonomi-inställningen själv — kräver **oavsett vald nivå** alltid ett uttryckligt godkännande.

**Bekräftelse-flödet:** Om en åtgärd kräver ditt godkännande utför Klacksy den inte omedelbart, utan lägger den åt sidan med en väntetid på 5 minuter och sammanfattar vad som skulle hända. Först när du uttryckligen samtycker med dina egna ord utlöser Klacksy den undanlagda åtgärden — den bekräftar aldrig självständigt i ditt namn.

## Bra att veta

- Autonominivån är en personlig inställning per användarkonto — varje användare kan välja sin egen komfortnivå.
- En högre nivå betyder inte att inget längre efterfrågas: känsliga åtgärder kräver alltid bekräftelse.
- Som standard är nivån Autonom aktiv — det motsvarar det beteende Klacksy hade redan innan autonominivåerna infördes.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
