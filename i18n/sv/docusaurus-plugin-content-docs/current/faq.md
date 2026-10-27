---
sidebar_position: 9
---
# Vanliga frågor

De frågor som oftast ställs före första användningen — med ärliga svar, också där svaret är ”inte ännu”.

## Testa och komma igång

**Måste jag installera Klacks för att se det?**
Nej. [Playground](https://play.klacks-software.ch) är en publik instans med demodata; du loggar in med `admin@test.com` / `P@ssw0rt1` och har fulla adminrättigheter. Databasen återställs dagligen kl. 04:00 schweizisk tid — lägg inte in några verkliga personuppgifter där.

**Hur lång tid tar en installation?**
Installationsprogrammet är ett enda kommando. Det skapar lösenord och certifikat, fäster den aktuella versionen, startar stacken och väntar tills allt är friskt. Längst tid tar nedladdningen av images. Förutsättningarna står under [Systemkrav](../betrieb/systemvoraussetzungen/).

**Varför måste jag skapa ett eget adminkonto?**
Eftersom det medföljande kontot har ett offentligt känt lösenord. Klacks låter dig logga in med det exakt en gång och kräver sedan ditt eget konto; därefter stängs standardkontot av. Det är avsiktligt, inget fel.

## Drift

**Var finns mina data?**
På din infrastruktur. Klacks skickar inte tillbaka dina data till tillverkaren. Om du kopplar in en KI-modell som extern tjänst gäller för **den** tjänsten naturligtvis dess villkor — valet av modell är ditt.

**Behöver jag absolut en molnleverantör?**
Nej, det är kärnan i on-premise: stacken körs på din server. Du behöver bara **utgående** åtkomst till paket- och uppdateringskällorna (`ghcr.io`, `github.com`). Drift helt utan internetåtkomst finns för närvarande **inte** — installationer i avskärmade nät är ett ännu inte genomfört utbyggnadssteg.

**Hur säkerhetskopierar jag mina data?**
Själv — säkerhetskopieringen ligger hos dig. Hur det går till och vilken volym du under inga omständigheter får glömma står under [Säkerhetskopiering och återställning](../betrieb/backup-und-wiederherstellung/).

**Vad händer om en uppdatering går fel?**
Uppdateringstjänsten säkerhetskopierar databasen först, växlar över nya versioner tillsammans och kontrollerar därefter hälsan. Är den nya versionen inte frisk rullar den automatiskt tillbaka. Detaljer under [Uppdateringar och rollback](../betrieb/updates-und-rollback/).

**Körs Klacks på min befintliga hårdvara?**
Som riktvärde gäller: **8 GB RAM och 4 vCPU**. För mindre värdar finns dokumenterade inställningar som frigör minne — till priset att nästa fråga till Klacksy tar lite längre tid.

**Fungerar Klacks med min Identity Provider?**
Ja. Klacks kan kopplas till en befintlig identitetsleverantör i stället för att hantera egna konton — se [Identity Provider](../einstellungen/kommunikation-integration/identity-provider/).

## Funktioner

**För vilka branscher passar Klacks?**
Det är utformat för skift- och insatsverksamheter: ambulerande vård och hemtjänst, sjukhus, säkerhetstjänster, städ- och hemservice samt logistik.

**Vilka språk talar gränssnittet?**
Dokumentationen finns på 25 språk, bland annat tyska, engelska, franska, italienska, spanska, polska, japanska, kinesiska (förenklad och traditionell), arabiska och hebreiska — arabiska och hebreiska även med läsriktning från höger till vänster.

**Måste jag bestämma mig för en KI-modell?**
Du väljer leverantör och modell själv och kan byta. Hur du ställer in och kontrollerar detta står under [LLM-leverantör och modeller](../einstellungen/klacksy-konfiguration/llm-provider-und-modelle/) och [Modellanslutningstest](../einstellungen/klacksy-konfiguration/modell-verbindungstest/).

**Vad kostar Klacks?**
Källkoden står under GNU Affero General Public License v3 (AGPL-3.0) — du får läsa, ändra och själv driva den. Erbjuder du en ändrad version åt andra via ett nätverk måste du göra den ändrade källkoden tillgänglig för dessa användare, likaså under AGPL-3.0. Allt som går utöver det (frågor, utbyte, vidareutveckling) sker via [Klacks-community på Discord](https://discord.gg/YRP8p2abVC) och det [publika källkodsarkivet](https://github.com/HeribertG/Klacks.Api).

**Är Klacks färdigt?**
Nej, och det påstås inte heller någonstans. Klacks är under uppbyggnad, men utvecklas offentligt och används på riktigt — i Playground kan du alltid själv kontrollera det aktuella läget i stället för att tro på en beskrivning.

## Medverka

**Jag har hittat ett fel eller har en fråga.**
Snabbast går det i [communityn på Discord](https://discord.gg/YRP8p2abVC). För fel i programvaran hör en anmälan hemma i [arkivet](https://github.com/HeribertG/Klacks.Api). Alltid till hjälp: version, sista steget före felet och de sista raderna i loggarna — se [Felsökning](../betrieb/fehlerbehebung/).

**Kan jag själv bidra med något?**
Källkoden är öppen och dokumentationen finns i samma hus. Tips om oklara ställen är lika välkomna som kod.

---

*Saknas din fråga? [Klacks-community på Discord](https://discord.gg/YRP8p2abVC).*
