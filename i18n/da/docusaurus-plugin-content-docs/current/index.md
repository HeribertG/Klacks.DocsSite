---
sidebar_position: 1
slug: /
---

# Velkommen til Klacks-dokumentationen

**Klacks** er open source-platformen til personaleplanlægning i vagt- og skiftebaserede virksomheder: planlæg tjenester automatisk, optimer ruter, styr det hele via en AI-assistent — on-premise, med den AI-model du selv vælger. Til hjemmepleje, hospitaler, sikkerheds-, rengørings- og logistikvirksomheder.

Denne wiki forklarer i små bidder, hvordan Klacks fungerer. Hver side læses på få minutter — og alt kan afprøves med det samme i den offentlige Playground.

## Kom straks i gang

| | |
|---|---|
| 🎮 **Afprøv** | [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1` (offentlig testinstans, data nulstilles dagligt) |
| 📦 **Installer** | [Hent on-premise-pakken](https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip) — én kommando, og Klacks kører |
| 💬 **Spørgsmål og udveksling** | [Klacks-community på Discord](https://discord.gg/YRP8p2abVC) |
| 🌐 **Website** | [klacks-software.ch](https://klacks-software.ch) |

## Bidderne

**Om Klacks**
- [Filosofien bag Klacks](./ueber-klacks/philosophie.md) — datasuverænitet, frit valg af AI, open source

**Første skridt**
- [Installation og Playground](./erste-schritte/installation-und-playground.md) — Til en kørende Klacks på få minutter
- [Den guidede opsætningstur](./erste-schritte/gefuehrte-einrichtungs-tour.md) — Klacksy guider dig gennem grundindstillingerne
- [Medarbejdere og stamdata](./erste-schritte/mitarbeiter-und-stammdaten.md) — Fundamentet for enhver planlægning
- [Roller og rettigheder](./erste-schritte/rollen-und-rechte.md) — Supervisor og Admin, klart adskilt

**Planlægning**
- [Autoplanlægning: Planen på sekunder](./planen/auto-planung.md) — Planen på sekunder, med et klik
- [Planrastret: Din interaktive tidsmatrix](./planen/plan-raster.md) — Den interaktive tidsmatrix med drag & drop
- [Modulær planlægning: Del og hersk](./planen/modulare-planung.md) — Store planer opdelt, uden dobbeltbookinger
- [Godkendelsesworkflow: Fra udkast til bindende plan](./planen/freigabe-workflow.md) — Fra udkast til forseglet plan
- [Planlægningsregler](./planen/planungsregeln.md) — Hviletider, grænser og arbejdsdage
- [Periodeafslutning](./planen/periodenabschluss.md) — Afslut måneder bindende

**Optimér og evaluér**
- [Tur- og ruteoptimering](./optimieren/touren-und-routenoptimierung.md) — Den bedste rute, automatisk
- [Fravær i overblik](./optimieren/absenzen-im-blick.md) — Ferie og sygdom som Gantt-overblik
- [Ressourcemonitor](./optimieren/ressourcen-monitor.md) — Udnyttelse på et øjekast
- [Helligdage og kalender](./optimieren/feiertage-und-kalender.md) — Helt ned på kommuneniveau
- [Skill-relationer](./optimieren/skill-beziehungen.md) — Klacksy lærer selv, hvilke af sine evner der hører sammen
- [Rapport-designer](./optimieren/report-designer.md) — Byg egne rapporter

**AI-assistenten**
- [Klacksy: Din AI-assistent til planlægningen](./ki/klacksy-ki-assistent.md) — Planlægning via tale, med frit modelvalg

**Indstillinger**

*Stamdata & organisation*
- [Filialer](./einstellungen/stammdaten-organisation/branches.md), [Lande](./einstellungen/stammdaten-organisation/laender.md), [Ejer-adresse](./einstellungen/stammdaten-organisation/owner-address.md), [Grundindstillinger for arbejde](./einstellungen/stammdaten-organisation/work-setting.md), [Kvalifikationskatalog](./einstellungen/stammdaten-organisation/qualifikationen.md), [Kontraktskabeloner](./einstellungen/stammdaten-organisation/vertragsvorlagen.md)

*Planlægning & automatisering*
- [Standardværdier for planlægningsregler](./einstellungen/planung-automatisierung/planungsregeln-standardwerte.md), [Kalendervalg](./einstellungen/planung-automatisierung/kalenderauswahl.md), [Wizard-indstillinger](./einstellungen/planung-automatisierung/wizard-einstellungen.md), [Ruteoptimering-API](./einstellungen/planung-automatisierung/routenoptimierung-api.md), [Gruppesynlighed](./einstellungen/planung-automatisierung/gruppen-sichtbarkeit.md)

*Klacksy-konfiguration*
- [LLM-udbyder og modeller](./einstellungen/klacksy-konfiguration/llm-provider-und-modelle.md), [Personlighed](./einstellungen/klacksy-konfiguration/persoenlichkeit.md), [Tale ind-/udgang](./einstellungen/klacksy-konfiguration/sprachein-ausgabe.md), [Autonominiveauer](./einstellungen/klacksy-konfiguration/autonomie-stufen.md), [Modelforbindelsestest](./einstellungen/klacksy-konfiguration/modell-verbindungstest.md), [Skill-forslag](./einstellungen/klacksy-konfiguration/skill-vorschlaege.md), [Makroer](./einstellungen/klacksy-konfiguration/makros.md)

*Kommunikation & integration*
- [E-mail-afsendelse](./einstellungen/kommunikation-integration/email-versand.md), [E-mail-modtagelse](./einstellungen/kommunikation-integration/email-empfang.md), [DeepL-oversættelse](./einstellungen/kommunikation-integration/deepl-uebersetzung.md), [Identity Provider](./einstellungen/kommunikation-integration/identity-provider.md), [ERP-overtagelsespunkter](./einstellungen/kommunikation-integration/erp-uebernahmepunkte.md), [Meddelelseskanaler](./einstellungen/kommunikation-integration/messaging-kanaele.md)

*System & sikkerhed*
- [Brugerstyring](./einstellungen/system-sicherheit/benutzerverwaltung.md), [Personal Access Tokens](./einstellungen/system-sicherheit/personal-access-tokens.md), [Dataopbevaring](./einstellungen/system-sicherheit/datenaufbewahrung.md), [Opdateringer](./einstellungen/system-sicherheit/updates.md), [Feature-plugins](./einstellungen/system-sicherheit/feature-plugins.md), [Sprog-plugins](./einstellungen/system-sicherheit/sprach-plugins.md), [Spam-regler](./einstellungen/system-sicherheit/spam-regeln.md), [Generelle indstillinger](./einstellungen/system-sicherheit/allgemeine-einstellungen.md)

---
*Klacks er open source under MIT-licens — [kildekode på GitHub](https://github.com/HeribertG/Klacks.Api).*
