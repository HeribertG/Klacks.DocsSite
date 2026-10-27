---
sidebar_position: 3
---
# Oppdateringer og tilbakerulling

Klacks oppdaterer seg selv — med signerte pakker, en sikkerhetskopi før hvert trinn og en automatisk tilbakevei hvis noe går galt. Denne siden forklarer hva som skjer, og hvordan du kan gripe inn.

## Slik forløper en oppdatering

1. **Gjenkjenne.** API-et henter det signerte manifestet som produsenten publiserer med hver utgivelse. Er det oppført en nyere versjon der, regnes oppdateringen som tilgjengelig.
2. **Sikkerhetskopiere.** Oppdateringstjenesten oppretter en datasikkerhetskopi av databasen. Inneholder den nye versjonen en migrering, bindes denne sikkerhetskopien fast til oppdateringsoperasjonen og står senere klar for en tilbakevei.
3. **Hente og aktivere sammen.** Tjenesten laster ned de nye imagene for `klacks-api` **og** `klacks-ui` og kobler begge om samtidig — de to delene kjører i takt, aldri i ulike versjoner.
4. **Kontrollere.** Etter omkoblingen spør tjenesten den dype helsesjekken `/internal/health/deep`.
5. **Vurdere.** Er den nye versjonen frisk, regnes oppdateringen som vellykket. Er den det ikke, ruller tjenesten **begge** deler automatisk tilbake til forrige versjon og kontrollerer på nytt. Lykkes heller ikke det, logges tilstanden som mislykket, slik at du ser det.

## Hva «signert» betyr

Produsenten signerer hver utgivelse, og din Klacks kontrollerer signaturen før den godtar en pakke. Den offentlige nøkkelen og adressen til manifestet er faste produsentverdier i din `.env`:

- `UPDATE_MANIFEST_BASE_URL` — fast satt til produsentens utgivelseskilde
- `UPDATE_SIGNATURE_PUBLIC_KEY` — må passe til den private nøkkelen produsenten signerer med

Disse to verdiene er **ikke ment å endres**. Den som bytter dem ut, opphever kontrollen og åpner dermed nettopp det hullet signaturen tetter.

Manifestet inneholder blant annet: kanal (`Stable` eller `Beta`), den nyeste versjonen, minimumsversjonen en direkte oppdatering er mulig fra (`MinUpgradableFrom`), utgivelsesdato, om det er med en databasemigrering, artefaktene, signaturen og en henvisning til endringslisten.

`klacks-api` og `klacks-ui` er i `.env` **festet til en eksakt versjon**, slik at de ikke utvikler seg fra hverandre ubemerket. Selve oppdateringstjenesten kjører alltid på `latest` — den står bevisst ikke i det signerte manifestet og bytter bare api og ui.

## Innstillinger i drift

I administrasjonsområdet under **System → Oppdateringer**:

| Innstilling | Virkning |
|---|---|
| **Aktivere automatiske oppdateringer** | Oppdateringer gjenkjennes og installeres automatisk |
| **Bare varsle** | Oppdateringer bare **gjenkjennes**, men installeres ikke før du utløser det |
| **Vedlikeholdsvindu** | Tidsrom der automatiske oppdateringer får kjøre |

Disse innstillingene ligger i databasen og overstyrer startverdiene fra `.env` (`UPDATE_AUTO_ENABLED`, `UPDATE_NOTIFY_ONLY`), som bare gjelder ved første oppstart.

## Rulle tilbake manuelt

Automatisk trenger ingen å gripe inn her — en mislykket oppdatering ruller tjenesten selv tilbake. Hvis du bevisst vil ett skritt tilbake:

1. Sett `KLACKS_API_TAG` og `KLACKS_UI_TAG` i `.env` til forrige versjon.
2. Aktiver stakken på nytt: `docker compose up -d klacks-api klacks-ui`.
3. **Har den feilaktige versjonen allerede migrert**, spiller du i tillegg tilbake den passende sikkerhetskopien fra før oppdateringen — og merk deg snublesteinen på siden [Sikkerhetskopi og gjenoppretting](../backup-und-wiederherstellung/): Tabeller som den nye versjonen har opprettet, overlever gjenopprettingen og blokkerer neste oppstart.

## Greit å vite

- **Tilbakeveien er ingen nødløsning, men normaltilfellet.** Hver oppdateringsoperasjon har en status: vellykket, rullet tilbake eller tilbakevei mislykket. En tilbakerullet oppdatering er en normal, logget operasjon — ikke en hendelse.
- **En tilbakerullet oppdatering er ikke en tilbakestilt.** Tilbakerullingen gjenoppretter versjonen, ikke dataene dine. Dataendringer du har gjort mellom oppdateringen og tilbakeveien, stammer fra sikkerhetskopiens tilstand.
- **Du kan se etter i loggene:** `docker compose logs klacks-updater` viser gjenkjenning, sikkerhetskopiering, omkobling og tilbakevei.

---

*Driftsspørsmål? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
