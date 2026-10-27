---
sidebar_position: 3
---
# Opdateringer og rollback

Klacks opdaterer sig selv — med signerede pakker, en backup før hvert trin og en automatisk tilbagevej, hvis noget går galt. Denne side forklarer, hvad der sker, og hvordan du kan gribe ind.

## Sådan forløber en opdatering

1. **Registrere.** API'en forespørger det signerede manifest, som producenten udgiver med hver release. Står der en nyere version, gælder opdateringen som tilgængelig.
2. **Sikre.** Opdateringstjenesten opretter en databackup af databasen. Indeholder den nye version en migration, bindes denne backup fast til opdateringsforløbet og står senere klar til en tilbagevej.
3. **Hente og aktivere sammen.** Tjenesten henter de nye images til `klacks-api` **og** `klacks-ui` og skifter begge over sammen — de to dele kører i takt, aldrig i forskellige versioner.
4. **Kontrollere.** Efter omskiftningen forespørger tjenesten den dybe sundhedskontrol `/internal/health/deep`.
5. **Vurdere.** Er den nye version sund, gælder opdateringen som vellykket. Er den det ikke, ruller tjenesten **begge** dele automatisk tilbage til den forrige version og kontrollerer igen. Lykkes heller ikke det, logges tilstanden som mislykket, så du kan se det.

## Hvad „signeret" betyder

Producenten signerer hver release, og din Klacks kontrollerer signaturen, før den modtager en pakke. Den offentlige nøgle og manifestets adresse er faste producentværdier i din `.env`:

- `UPDATE_MANIFEST_BASE_URL` — fastlagt til producentens releasekilde
- `UPDATE_SIGNATURE_PUBLIC_KEY` — skal passe til den private nøgle, producenten signerer med

Disse to værdier er **ikke beregnet til at blive ændret**. Den, der udskifter dem, ophæver kontrollen og åbner dermed netop det hul, som signaturen lukker.

Manifestet indeholder blandt andet: kanal (`Stable` eller `Beta`), den nyeste version, den mindste version, hvorfra en direkte opdatering er mulig (`MinUpgradableFrom`), udgivelsesdatoen, om en databasemigration er med, artefakterne, signaturen og en henvisning til ændringslisten.

`klacks-api` og `klacks-ui` er i `.env` **fastlåst til en nøjagtig version**, så de ikke ubemærket udvikler sig fra hinanden. Opdateringstjenesten selv kører altid på `latest` — den står bevidst ikke i det signerede manifest og udskifter kun api og ui.

## Indstillinger i driften

I adminområdet under **System → Opdateringer**:

| Indstilling | Virkning |
|---|---|
| **Auto-enabled** | Opdateringer registreres og installeres automatisk |
| **Notify only** | Opdateringer **registreres** kun, men installeres ikke, før du udløser det |
| **Vedligeholdelsesvindue** | Tidsrum, hvori automatiske opdateringer må køre |

Disse indstillinger ligger i databasen og tilsidesætter startværdierne fra `.env` (`UPDATE_AUTO_ENABLED`, `UPDATE_NOTIFY_ONLY`), som kun gælder ved første start.

## Rulle tilbage manuelt

Automatisk behøver ingen gribe ind her — en mislykket opdatering ruller tjenesten selv tilbage. Hvis du bevidst vil et skridt tilbage:

1. Sæt i `.env` `KLACKS_API_TAG` og `KLACKS_UI_TAG` til den forrige version.
2. Aktiver stacken påny: `docker compose up -d klacks-api klacks-ui`.
3. **Har den fejlbehæftede version allerede migreret**, så spil desuden den passende backup fra før opdateringen tilbage — og vær her opmærksom på faldgruben på siden [Backup og gendannelse](../backup-und-wiederherstellung/): Tabeller, som den nye version har oprettet, overlever gendannelsen og blokerer næste start.

## Godt at vide

- **Tilbagevejen er ingen nødløsning, men normaltilfældet.** Hvert opdateringsforløb har en status: vellykket, rullet tilbage eller tilbagevej mislykket. En tilbagerullet opdatering er et normalt, logget forløb — ikke en hændelse.
- **En tilbagerullet opdatering er ikke en nulstillet opdatering.** Rollbacken genskaber versionen, ikke dine data. Dataændringer, du har foretaget mellem opdatering og tilbagevej, stammer fra backuppens tilstand.
- **Efterse kan du i logfilerne:** `docker compose logs klacks-updater` viser registrering, backup, omskiftning og tilbagevej.

---

*Spørgsmål om driften? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
