---
sidebar_position: 1
---

# Autoplanering: ett klick, resten körs i bakgrunden

Den mest mödosamma delen av schemaläggningen — att tilldela personer till skift — sköter Klacks med en knapptryckning. Beräkningen i sig tar sin tid, men körs vidare i bakgrunden: du behöver inte vänta och kan under tiden ägna dig åt annat.

## Så fungerar det

Bakom 1-klicks-autoplaneringen finns en **genetisk algoritm**: Den skapar tusentals schemavarianter, utvärderar dem och kombinerar de bästa vidare — tills en balanserad lösning uppnås. Hårda regler har alltid företräde, först därefter räknas övriga mål:

- **Regler** — arbetsrätt, vilotider, kvalifikationer och tillgänglighet är inte förhandlingsbara: Inget resultat, hur bra det än är, får bryta mot en hård regel
- **Täckning** — varje skift bemannas med det antal personer som krävs
- **Rättvisa** — arbetstimmar fördelas jämnt, och skiftföljden per person följer där det är möjligt mönstret morgon → kväll → natt
- **Kontinuitet** — där det är möjligt stannar medarbetare på sin vanliga insatsplats

Du startar autoplaneringen direkt från schemat för den valda perioden. Resultatet visas som ett vanligt schemautkast: Allt går att justera för hand i efterhand, inget låses fast utan att du tillfrågas.

## Bra att veta

- Kvalifikationer fungerar som en verklig gräns: Den som saknar en nödvändig kvalifikation schemaläggs inte.
- Autoplaneringen respekterar redan befintliga poster — du kan alltså först sätta fasta punkter och sedan låta resten fyllas i.
- Om ett resultat inte passar planerar du helt enkelt om: Algoritmen hittar likvärdiga alternativ.
- Du kan skapa flera scenarier parallellt utan att ändra det befintliga schemat: Varje scenario är en egen hypotetisk kopia som du kan jämföra, förkasta eller ta över. På så sätt är du förberedd på kortsiktiga omställningar, i stället för att först då behöva räkna om.

![Klacks schemarutnät](/img/app-schedule-de.png)

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
