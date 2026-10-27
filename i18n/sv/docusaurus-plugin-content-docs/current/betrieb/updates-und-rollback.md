---
sidebar_position: 3
---
# Uppdateringar och rollback

Klacks uppdaterar sig självt — med signerade paket, en säkerhetskopia före varje steg och en automatisk återväg om något går fel. Den här sidan förklarar vad som händer och hur du kan ingripa.

## Hur en uppdatering förlöper

1. **Identifiera.** API:et frågar efter det signerade manifest som tillverkaren publicerar med varje release. Står där en nyare version räknas uppdateringen som tillgänglig.
2. **Säkerhetskopiera.** Uppdateringstjänsten skapar en datasäkerhetskopia av databasen. Innehåller den nya versionen en migrering knyts denna säkerhetskopia fast vid uppdateringsförloppet och står senare redo för en återväg.
3. **Hämta och aktivera tillsammans.** Tjänsten laddar de nya images för `klacks-api` **och** `klacks-ui` och växlar över båda tillsammans — de två delarna går i takt, aldrig i olika versioner.
4. **Kontrollera.** Efter omkopplingen frågar tjänsten den djupa hälsokontrollen `/internal/health/deep`.
5. **Bedöma.** Är den nya versionen frisk räknas uppdateringen som lyckad. Är den det inte rullar tjänsten **båda** delarna automatiskt tillbaka till föregående version och kontrollerar på nytt. Lyckas inte heller det loggas tillståndet som misslyckat, så att du ser det.

## Vad ”signerat” betyder

Tillverkaren signerar varje release, och ditt Klacks kontrollerar signaturen innan det tar emot ett paket. Den publika nyckeln och manifestets adress är fasta tillverkarvärden i din `.env`:

- `UPDATE_MANIFEST_BASE_URL` — fast satt till tillverkarens releasekälla
- `UPDATE_SIGNATURE_PUBLIC_KEY` — måste passa den privata nyckel som tillverkaren signerar med

De här två värdena är **inte avsedda att ändras**. Den som byter ut dem upphäver kontrollen och öppnar därmed exakt det hål som signaturen stänger.

Manifestet innehåller bland annat: kanal (`Stable` eller `Beta`), den senaste versionen, den lägsta version från vilken en direkt uppdatering är möjlig (`MinUpgradableFrom`), publiceringsdatum, om en databasmigrering ingår, artefakterna, signaturen och en länk till ändringslistan.

`klacks-api` och `klacks-ui` är i `.env` **låsta till en exakt version**, så att de inte obemärkt glider isär. Uppdateringstjänsten själv kör alltid på `latest` — den står medvetet inte i det signerade manifestet och byter bara ut api och ui.

## Inställningar i driften

I adminområdet under **System → Uppdateringar**:

| Inställning | Verkan |
|---|---|
| **Auto-enabled** | Uppdateringar identifieras och installeras automatiskt |
| **Notify only** | Uppdateringar bara **identifieras**, men installeras inte förrän du utlöser det |
| **Underhållsfönster** | Tidsrum då automatiska uppdateringar får köras |

De här inställningarna ligger i databasen och går före startvärdena ur `.env` (`UPDATE_AUTO_ENABLED`, `UPDATE_NOTIFY_ONLY`), som bara gäller vid första starten.

## Rulla tillbaka manuellt

Automatiskt behöver ingen ingripa här — en misslyckad uppdatering rullar tjänsten själv tillbaka. Om du medvetet vill ett steg tillbaka:

1. Sätt i `.env` `KLACKS_API_TAG` och `KLACKS_UI_TAG` till föregående version.
2. Aktivera stacken på nytt: `docker compose up -d klacks-api klacks-ui`.
3. **Har den felaktiga versionen redan migrerat**, återställ dessutom den passande säkerhetskopian från före uppdateringen — och beakta då fallgropen på sidan [Säkerhetskopiering och återställning](../backup-und-wiederherstellung/): tabeller som den nya versionen skapade överlever återställningen och blockerar nästa start.

## Bra att veta

- **Återvägen är ingen nödlösning, utan normalfallet.** Varje uppdateringsförlopp har en status: lyckad, återrullad eller återväg misslyckad. En återrullad uppdatering är ett normalt, loggat förlopp — ingen incident.
- **En återrullad uppdatering är ingen återställd uppdatering.** Rollbacken återställer versionen, inte dina data. Dataändringar som du gjorde mellan uppdateringen och återvägen kommer från säkerhetskopians läge.
- **Efterforska kan du i loggarna:** `docker compose logs klacks-updater` visar identifiering, säkerhetskopiering, omkoppling och återväg.

---

*Frågor om driften? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
