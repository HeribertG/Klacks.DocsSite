---
sidebar_position: 7
---

# Övertid

Under Inställningar > Compliance och tilläggsregler (expertläge) > Övertid anger du från hur många ackumulerade timmar mertid blir tilläggspliktig och hur högt tillägget blir per nivå.

## Så fungerar det

**Beräkningsbas:** Daglig eller veckovis — mer finns inte. En månatlig eller årlig bas är inte planerad. Vid "Veckovis" börjar veckan på den konfigurerade första veckodagen.

**Upp till tre nivåer:** Varje nivå består av två fält — "Nivå X från timmar" (det ackumulerade antalet timmar på dagen respektive i veckan från vilket denna nivå gäller) och "Nivå X tillägg" i procent. Den högst konfigurerade nivån är öppen uppåt.

**Varje nivå räknar bara timmarna inom sitt eget spann**, inte alla timmar från noll. Börjar nivå 1 vid 8 timmar och nivå 2 vid 10 timmar, betalar en tio och en halv timmes arbetsdag nivå 1-satsen för de två timmarna mellan 8 och 10 och nivå 2-satsen bara för den halva timmen därutöver — aldrig nivå 2-satsen för alla tio och en halv timmar. Ett enskilt arbetsblock kan på så sätt ge upphov till flera tilläggsposter, en per uppnådd nivå.

**En ofullständig nivå hoppas tyst över:** Saknas timangivelsen, eller är tillägget noll eller negativt, räknas den nivån inte med. Det kan alltså vara noll till tre nivåer som faktiskt är aktiva.

**Tillägget är påslaget, inte totalbeloppet:** 25 % betyder en fjärdedels timme extra per arbetad timme på denna nivå — inte att timmen betalas med faktor 1,25. Tilläggsläget bredvid (multiplikator eller fast belopp per timme) bestämmer bara enheten; uträkningen bakom förblir densamma.

**Vad som räknas som redan arbetade timmar:** Nivåerna fylls utifrån de timmar som tidigare arbetats samma dag respektive samma vecka — sorterat först efter datum, sedan efter starttid. På så sätt tar varje arbetsblock sin egen plats i spannet, och ingen timme räknas dubbelt till en högre nivå. Ändras en tidigare post räknas de senare om.

**Varifrån värdena kommer:** Detta kort levererar de företagsövergripande värdena — de gäller bara om ingen annan källa har företräde. Är personens avtal kopplat till en [planeringsregel](../../planen/planungsregeln.md) med egna övertidsnivåer har den företräde; en senare version av denna regel som gäller för respektive datum ersätter vid behov hela uppsättningen, men faller utan egen övertidsuppsättning tillbaka på företagsinställningarna som visas här, inte på planeringsregeln. Är ingenstans någon nivå konfigurerad tjänar endast **övertidsgränsen** från planeringsregeln som sista reservlösning — och det uteslutande som startvärde för den första nivån, aldrig som tilläggssats. Källorna blandas aldrig: Den som levererar den första nivån levererar också alla följande.

**Två villkor, utan vilka inget tillägg uppstår:**

- Skiftet behöver ett beräkningsmakro. Arbete på ett skift utan makro kontrolleras aldrig mot mertimmar.
- Minst en fullständig nivå måste vara konfigurerad. Utan en sådan nivå blir resultatet inte "noll övertid", utan ingen kontroll sker alls.

**Undantaget:** Korrigeringar och inhoppare kontrolleras aldrig mot övertid — bara reguljärt arbete räknas in.

**Sammanträffande med andra tillägg:** Samma timme kan samtidigt kvalificera för mertimmar och för ett omständighetsbundet tillägg, till exempel natt- eller helgarbete. Om båda läggs ihop eller om bara det högre gäller avgörs inte av det här kortet, utan av respektive skifts beräkningsmakro.

**Lagring:** Kortet ligger i avsnittet Compliance och tilläggsregler på inställningssidan (tillsammans med Ersättningsvila, Tilläggsläge och Compliance-tillämpning), synligt bara i expertläge. Ändringar samlas och sparas eller förkastas via inställningssidans gemensamma sparrad — det finns ingen egen Spara-knapp på det här kortet.

## Bra att veta

- Det här kortet täcker uteslutande den automatiska övertidstrappan efter dags- eller veckotröskel. Tillägg för natt-, sön- eller helgdagsarbete beräknas däremot generiskt via skript — se [Makron](../klacksy-konfiguration/makros.md).
- En nivå utan värdet "från timmar" eller med ett tillägg på 0 % eller lägre ignoreras — så kan enskilda nivåer inaktiveras utan att raderas.
- Utan minst en fullständig nivå och utan beräkningsmakro på skiftet uppstår i princip inga övertidstillägg, inte ens vid mycket långa skift.
- En planeringsregel med egna övertidsnivåer skriver över dessa företagsövergripande värden helt, inte bara enskilda nivåer.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
