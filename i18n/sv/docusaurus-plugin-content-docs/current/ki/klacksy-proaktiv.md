---
sidebar_position: 8
---

# Klacksy som proaktiv teammedlem

Klacksy väntar inte på att bli tillfrågad. En gång i timmen ser den i bakgrunden över verksamheten och rapporterar vad den lägger märke till: obemannade skift, avtal som löper ut, förfallna perioder, saknad stamdata. Hur långt den får gå bestämmer administratörer för varje fyndtyp för sig — som standard rapporterar den bara och agerar aldrig på egen hand.

Inte att förväxla med [Autonominivåerna](../einstellungen/klacksy-konfiguration/autonomie-stufen.md): Där handlar det om hur mycket bekräftelse Klacksy behöver när **du** ber den om något i chatten. Här handlar det om motsatsen — om det den gör **utan att bli tillfrågad**.

## Så fungerar det

**Vad ett fynd är:** Ett fynd är en iakttagelse som Klacksy gjort av sig själv — till exempel "det här skiftet är fortfarande obemannat om tre dagar" eller "den här avräkningsperioden har varit förfallen i en vecka". För det körs varje timme en bakgrundskörning över ett dussintal kontrollregler. Själva upptäckten är hårdkodad: Ingen språkmodell avgör om något är ett fynd — samma regel ger samma resultat, oavsett vilken KI-leverantör du använder.

**Fjorton fyndtyper går att styra,** bland annat Obemannat skift, Lucka i tillgängligheten, Avtal som löper ut, Saknad stamdata, Öppen beställning, Förestående periodavslut, Förfallen period, Avvikelse från normtimmarna, Tom container, Spärrkonflikt och Öppet scenario. Två av dem uppstår inte i den timvisa körningen, utan vid ERP-beställningsimport.

**De tre nivåerna — per fyndtyp för sig:** Under Inställningar > Klacksy > "Klacksy handlingsutrymme" (expertläge, endast administratörer) står varje fyndtyp på en egen rad med kolumnen "Högsta nivå":

- **Endast meddela** — Klacksy säger till, inget mer. Det är standardinställningen för varje fyndtyp.
- **Förbereda scenario** — Klacksy lägger dessutom en färdig lösning bredvid som scenario, som en människa bara behöver godkänna.
- **Utföra** — Klacksy åtgärdar fyndet själv och rapporterar därefter om det.

Från och med "Förbereda scenario" måste en ansvarig person vara utsedd: Åtgärden körs under dennes rättigheter, och personen får rapporten. Dessutom finns per rad budgetar som begränsar hur ofta Klacksy får agera (som standard högst 5 åtgärder per dag och 3 inom 60 minuter), samt en brytare "Aktiv". Den styr uteslutande det självständiga agerandet — om och hur du nås av en avisering förblir din personliga aviseringsinställning.

**Den hårda gränsen i programmet:** En högre nivå verkar bara där det över huvud taget finns en automatisk åtgärd inlagd för fyndtypen. Saknas den stannar det vid att rapportera — oavsett inställning och även när någon i enskilda fall delegerar fyndet till Klacksy. Denna gräns sitter i programkoden och går inte att öppna via gränssnittet. För närvarande finns exakt en åtgärd inlagd: Vid fyndtypen "Tom container" kan Klacksy själv skapa den saknade slot-mallen.

**Var fynden hamnar:** På Klacksy-knappen i sidhuvudet visar en räknare antalet olästa notiser. Ett klick öppnar sidopanelen, där fynden samlas under rubriken "Medan du var borta…". Per meddelande finns "Visa mig det" (hoppar till det berörda stället), "Hjälpsam" och "Dölj" — det senare valfritt med en orsak ("Den här typen av meddelanden vill jag inte ha alls", "Den här gången var meddelandet fel", "Redan åtgärdat") eller utan. Där det är tillåtet finns dessutom "Gör det du": ett enskilt godkännande som lyfter just detta fynd till "Förbereda scenario". Du kan även fråga Klacksy direkt i chatten vilka fynd som just nu är öppna.

**När ett fynd är åtgärdat:** Den berörda raden bär i containervyn i skiftlistan markeringen "Åtgärdat av Klacksy den …" — och det både när Klacksy har utfört åtgärden själv och när en människa har godkänt ett scenario som Klacksy förberett. Utför Klacksy själv går dessutom en rapport till den ansvariga personen.

**Nödstoppet:** Ovanför chatten ser administratörer brytaren "Klacksy agerar autonomt: PÅ/AV". Avstängning återställer omedelbart varje fyndtyp till "endast meddela" — även redan beviljade enskilda godkännanden. Meddelandena upphör inte för det: Nödstoppet stoppar agerandet, inte rapporteringen. Samma brytare finns även på inställningskortet.

## Bra att veta

- Som standard står varje fyndtyp på "Endast meddela" — Klacksy agerar först när en administratör medvetet höjer en nivå. Nödstoppet behövs inte för det: Det är som standard inte aktiverat och finns kvar som en omedelbar broms i reserv.
- Aviseringar går bara till administratörer och behöriga planerare. Den som bara får se vissa grupper får också bara fynd från de grupperna; administratörer ser allt. Planerare får fynden men ser inte nivåinställningen.
- Nivån "Förbereda scenario" gäller bara för åtgärder som kan avbildas som scenario. Den åtgärd som finns inlagd i dag hör inte dit — för den gäller enbart "Utföra".
- Inställningskortet och autonomibrytaren kräver administratörsrättigheter; utan dem går autonomitillståndet inte att se.
- Den timvisa rytmen är fast inbyggd och går inte att ställa in via gränssnittet; den första körningen startar två minuter efter programstart.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
