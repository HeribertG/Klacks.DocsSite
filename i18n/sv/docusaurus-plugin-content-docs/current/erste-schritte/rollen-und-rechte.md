---
sidebar_position: 4
---

# Roller och rättigheter

Klacks har exakt två tilldelningsbara rättighetsnivåer för inloggningskonton: **Supervisor** och **Admin**. Det finns ingen tredje, tekniskt separat roll — begrepp som "planerare" beskriver nedan en **funktion i det dagliga arbetet**, inte en ytterligare behörighetsnivå.

## De två faktiska rollerna

**Supervisor** får skapa, redigera och radera adresser, grupper, avtal, frånvaro och skift samt godkänna en dag eller en grupp i skiftschemat och dra tillbaka detta godkännande igen. Att enbart bekräfta enskilda arbetstider kräver däremot ingen särskild roll — det kan alla inloggningskonton göra.

**Admin** får dessutom allt som Supervisor får, plus: tillgång till samtliga inställningar (inklusive själva användarhanteringen), avsluta och återöppna perioder samt hantera särskilt skyddade områden som Identity Provider, rapporter och kalenderregler.

Tilldelningen sker via en rullgardinsmeny i användarhanteringen (kugghjulsikonen) och gäller omedelbart, utan separat klick på spara.

## "Planerare" som funktion, inte som roll

I vardagen tar oftast ett Supervisor-konto hand om det egentliga planeringsarbetet — starta autoplanering, justera i planeringsrutnätet med dra och släpp, lämna in dagar eller grupper för godkännande. Det är ingen egen behörighetsnivå, utan helt enkelt de rättigheter som ett Supervisor-konto ändå har.

## Bra att veta

- Den senast inloggade användaren visas också i användarhanteringen, men kan inte där redigera sig själv, ändra sina egna rättigheter eller radera sig själv.
- Att slutgiltigt avsluta eller återöppna perioder är uteslutande förbehållet Admin — även om en Supervisor redan har godkänt dagar eller grupper.
- Ett inloggningskonto måste inte nödvändigtvis vara kopplat till ett medarbetarkort i stamdata — användarhantering och personhantering är separata områden.

---
*Testa direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
