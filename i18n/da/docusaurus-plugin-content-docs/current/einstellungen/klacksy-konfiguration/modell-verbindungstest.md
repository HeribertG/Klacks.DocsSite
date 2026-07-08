---
sidebar_position: 5
---

# Model-forbindelsestest

Ikke enhver sprogmodel egner sig til Klacksy — han skal pålideligt levere strukturerede funktionskald i stedet for at svare i prosa. Under Indstillinger > Klacksy Model-tjek tester Klacks dette automatisk for alle konfigurerede modeller.

## Sådan fungerer det

**Testen:** Et klik på "Find bedste modeller" sender den samme lille testopgave til hver konfigureret model (også deaktiverede): "Opret en ny medarbejder ved navn Anna Müller." Modellen skal svare med det passende strukturerede funktionskald og de korrekte navneparametre — ikke med et tekstsvar. Derudover skal kontekstvinduet omfatte mindst 32.000 tokens, så Klacksys systemprompt og evner kan være der. Hver test kører med en tidsgrænse på 30 sekunder.

**Resultat:** Modeller, der opfylder begge kriterier, betragtes som "egnede" og aktiveres automatisk; uegnede modeller deaktiveres. Resultatlisten er sorteret efter egnethed, derefter efter funktionskald-evne, omkostninger, latenstid og kontekstvindue.

**Angiv standardmodel:** Via "Som standard" vælger du direkte fra resultatlisten, hvilken model Klacksy fremover bruger som standard. Uden eget valg sætter Klacks automatisk den bedst egnede model som standard.

## Godt at vide

- Testen tjekker alle gemte modeller, ikke kun aktiverede — også hidtil deaktiverede modeller kan derved blive aktiveret, hvis de består testen.
- En bestået test er ikke en omkostningsbeskyttelse: dyre, men egnede modeller aktiveres også. Omkostninger pr. 1000 tokens er synlige i resultatlisten.
- Denne test er specifikt designet til funktionskald for handlingsevne og er uafhængig af model-tjekket under sprogindstillingerne, som accepterer et lavere kontekstvindue til ren transskriptionsoprydning.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
