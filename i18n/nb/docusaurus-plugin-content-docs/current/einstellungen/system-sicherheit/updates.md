---
sidebar_position: 4
---

# Oppdateringer

Under Innstillinger > Oppdateringer ser du den installerte versjonen og den nyeste tilgjengelige Klacks-versjonen, styrer den automatiske oppdateringsatferden og utløser ved behov manuelt en oppdatering eller en tilbakerulling.

## Slik fungerer det

**Status:** Kortet viser gjeldende versjon, om en nyere versjon er tilgjengelig, samt den pågående eller sist utførte oppdateringsoperasjonen med status.

**Utløse oppdatering eller rulle tilbake:** Via «Installer nå» starter du en tilgjengelig oppdatering manuelt; «Angre» reverserer den siste vellykkede oppdateringsoperasjonen. Begge handlingene er sperret så lenge en operasjon allerede pågår.

**Konfigurere automatikk:**
- **Aktivere automatiske oppdateringer** slår den automatiske oppdateringssjekken og -gjennomføringen av eller på.
- **Bare varsle** utløser ingen automatisk oppdatering, men melder fra når en ny versjon er tilgjengelig.
- **Kanal** velger mellom `Stable` og `Beta` som oppdateringskilde.
- **Sjekkintervall** (timer) og et **vedlikeholdsvindu** (start-/sluttid) fastsetter hvor ofte og i hvilket tidsvindu det sjekkes henholdsvis installeres.
- **Antall lagrede sikkerhetskopier** bestemmer hvor mange sikkerhetskopier som beholdes før en migrering, før eldre slettes automatisk.

**Historikk:** En tabell viser de siste oppdateringsoperasjonene med type, målversjon, status og tidspunkt for forespørselen.

## Greit å vite

- Før hver migrering oppretter Klacks automatisk en sikkerhetskopi — uten sikkerhetskopi utføres ingen migrering.
- Hvis helsesjekken feiler etter en oppdatering, ruller Klacks automatisk tilbake til forrige versjon (gjenopprette sikkerhetskopi → aktivere gammel versjon → sjekke på nytt); bare hvis denne tilbakerullingen selv feiler, kreves manuell inngripen.
- En manuell tilbakerulling gjenoppretter målrettet sikkerhetskopien som hører til den siste vellykkede operasjonen, og aktiverer utgangsversjonen for denne — ikke bare «én versjon tilbake».
- Oppdatering og tilbakerulling er handlinger som bare kan utføres av admin.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*
