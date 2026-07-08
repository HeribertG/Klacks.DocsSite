---
sidebar_position: 3
---

Under Inställningar > DeepL lagrar du en DeepL-API-nyckel som Klacks kan använda för att automatiskt översätta texter — för närvarande främst inkommande e-post i inkorgen.

## Så fungerar det

**API-nyckel:** Ett enda inmatningsfält tar emot DeepL-API-nyckeln (format `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx` för den kostnadsfria Free-API:n resp. utan `:fx`-ändelse för den betalda Pro-API:n). Klacks känner automatiskt igen vilken av de två DeepL-API-adresserna som ska anropas utifrån `:fx`-ändelsen — en separat växling mellan Free och Pro behövs inte. Ett konto och nyckeln själv får du via deepl.com/pro-api.

**Användning:** I "Inkorgen" kan varje e-post översättas till det aktuellt inställda gränssnittsspråket via översättningssymbolen; original och översättning kan jämföras via en växlingsknapp. Utan en lagrad nyckel är denna funktion inte tillgänglig.

## Bra att veta

- Denna inställning är global för hela installationen — det finns ingen nyckel per användare.
- Det finns ingen egen "Test"-knapp på denna sida; om nyckeln fungerar visar sig vid det första översättningsförsöket i inkorgen.
- Är nyckeln ogiltig eller har den gått ut känner Klacks igen det via svaret från DeepL (autentiseringsfel) och meddelar detta istället för att visa en tom eller felaktig översättning.
- Nyckeln lagras krypterad och visas maskerad i formuläret.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
