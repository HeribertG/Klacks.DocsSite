---
sidebar_position: 4
---

# Autonominiveauer

Hvor selvstændigt må Klacksy handle, før han spørger? Under Indstillinger > Klacksy Autonomi fastlægger du dette for dig selv personligt — indstillingen gælder pr. brugerkonto, ikke for alle brugere samlet.

## Sådan fungerer det

**Fire niveauer:**

- **Foreslå** — Klacksy foreslår kun, hver ændring kræver din bekræftelse.
- **Assisteret** — reversible handlinger udføres direkte, alt andet kræver bekræftelse.
- **Autonom** (standard) — alle handlinger udføres direkte, undtagen særligt følsomme.
- **Fuldt autonom** — selv flertrinsplaner gennemføres uden mellemliggende godkendelser.

**Sådan virker klassificeringen:** Hver handling, som Klacksy kan udføre, er internt klassificeret efter risiko: rene læsehandlinger udføres altid straks; reversible eller scenariebundne handlinger (f.eks. i en testplanlægning) kræver mindst niveauet Assisteret; irreversible handlinger kræver mindst niveauet Autonom. Følsomme handlinger — brugeradministration, rettigheder og ændringer af selve autonomi-indstillingen — kræver **uanset det valgte niveau** altid en udtrykkelig bekræftelse.

**Bekræftelses-workflowet:** Kræver en handling din godkendelse, udfører Klacksy den ikke med det samme, men lægger den til side med en ventetid på 5 minutter og opsummerer, hvad der ville ske. Først når du udtrykkeligt giver samtykke med dine egne ord, udløser Klacksy den tilbagelagte handling — han bekræfter aldrig selvstændigt på dine vegne.

## Godt at vide

- Autonomi-niveauet er en personlig indstilling pr. brugerkonto — hver bruger kan vælge sit eget komfortniveau.
- Et højere niveau betyder ikke, at der slet ikke spørges om noget mere: følsomme handlinger forbliver altid bekræftelsespligtige.
- Som standard er niveauet Autonom aktivt — det svarer til den adfærd, Klacksy allerede havde før indførelsen af autonomi-niveauerne.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*
