---
sidebar_position: 5
---

# Modell-tilkoblingstest

Ikke enhver språkmodell egner seg for Klacksy — den må pålitelig levere strukturerte funksjonskall i stedet for å svare i løpende tekst. Under Innstillinger > Klacksy Modell-sjekk tester Klacks dette automatisk for alle konfigurerte modeller.

## Slik fungerer det

**Testen:** Et klikk på "Finn beste modeller" sender den samme lille testoppgaven til hver konfigurerte modell (også deaktiverte): "Opprett en ny medarbeider ved navn Anna Müller." Modellen må svare med det riktige strukturerte funksjonskallet og korrekte navneparametere — ikke med et tekstsvar. I tillegg må kontekstvinduet omfatte minst 32 000 tokens, slik at systemprompten og funksjonene til Klacksy får plass. Hver test kjører med en tidsgrense på 30 sekunder.

**Resultat:** Modeller som oppfyller begge kriteriene, regnes som "egnet" og aktiveres automatisk; uegnede modeller deaktiveres. Resultatlisten er sortert etter egnethet, deretter etter funksjonskall-evne, kostnad, latens og kontekstvindu.

**Angi standardmodell:** Via "Sett som standard" velger du direkte fra resultatlisten hvilken modell Klacksy skal bruke som standard fremover. Uten eget valg setter Klacks automatisk den best egnede modellen som standard.

## Greit å vite

- Testen sjekker alle lagrede modeller, ikke bare aktiverte — også hittil deaktiverte modeller kan dermed bli aktivert hvis de består testen.
- En bestått test er ingen kostnadsbeskyttelse: dyre, men egnede modeller aktiveres også. Kostnad per 1000 tokens er synlig i resultatlisten.
- Denne testen er spesielt utformet for funksjonskall for handlingsevne, og er uavhengig av modell-sjekken under talespråkinnstillingene, som godtar et lavere kontekstvindu for ren transkripsjons-rensing.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
