---
sidebar_position: 1
slug: /
---

# Velkommen til Klacks-dokumentasjonen

**Klacks** er den åpne kildekode-plattformen for personalplanlegging i skift- og vaktbaserte virksomheter: planlegg tjenester automatisk, optimaliser ruter, styr via KI-assistent — On-Premise, med KI-modellen du selv velger. For hjemmesykepleie, sykehus, sikkerhets-, renholds- og logistikkbedrifter.

Denne wikien forklarer i små biter hvordan Klacks fungerer. Hver side leser du på noen få minutter — og alt kan prøves ut umiddelbart i den offentlige Playground.

## Kom i gang med en gang

| | |
|---|---|
| 🎮 **Prøv det** | [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1` (offentlig test-instans, data tilbakestilles daglig) |
| 📦 **Installer** | [Last ned On-Premise-pakken](https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip) — én kommando, og Klacks kjører |
| 💬 **Spørsmål og utveksling** | [Klacks-community på Discord](https://discord.gg/YRP8p2abVC) |
| 🌐 **Nettside** | [klacks-software.ch](https://klacks-software.ch) |

## Bitene

**Om Klacks**
- [Filosofien bak Klacks](./ueber-klacks/philosophie.md) — Datasuverenitet, KI-valgfrihet, åpen kildekode

**Kom i gang**
- [Installasjon og Playground](./erste-schritte/installation-und-playground.md) — Til et kjørende Klacks på noen minutter
- [Den guidede oppsettturen](./erste-schritte/gefuehrte-einrichtungs-tour.md) — Klacksy guider deg gjennom grunninnstillingene
- [Medarbeidere og stamdata](./erste-schritte/mitarbeiter-und-stammdaten.md) — Fundamentet for all planlegging
- [Roller og rettigheter](./erste-schritte/rollen-und-rechte.md) — Supervisor og Admin, tydelig atskilt

**Planlegging**
- [Autoplanlegging: Planen på sekunder](./planen/auto-planung.md) — Planen på sekunder, med ett klikk
- [Planrutenettet: Din interaktive tidsmatrise](./planen/plan-raster.md) — Den interaktive tidsmatrisen med dra-og-slipp
- [Modulær planlegging: Del og hersk](./planen/modulare-planung.md) — Del opp store planer, uten dobbeltbookinger
- [Godkjenningsflyt: Fra utkast til bindende plan](./planen/freigabe-workflow.md) — Fra utkast til forseglet plan
- [Planleggingsregler](./planen/planungsregeln.md) — Hviletider, grenser og arbeidsdager
- [Periodeavslutning](./planen/periodenabschluss.md) — Avslutt måneder bindende

**Optimere og evaluere**
- [Tur- og ruteoptimalisering](./optimieren/touren-und-routenoptimierung.md) — Den beste ruten, automatisk
- [Fravær med oversikt](./optimieren/absenzen-im-blick.md) — Ferie og sykdom som Gantt-oversikt
- [Ressursmonitor](./optimieren/ressourcen-monitor.md) — Utnyttelse med ett blikk
- [Helligdager og kalender](./optimieren/feiertage-und-kalender.md) — Ned til kommunenivå
- [Skill-relasjoner](./optimieren/skill-beziehungen.md) — Klacksy lærer selv hvilke av ferdighetene hans hører sammen
- [Rapportdesigner](./optimieren/report-designer.md) — Bygg egne rapporter

**KI-assistenten**
- [Klacksy: Din KI-assistent for planlegging](./ki/klacksy-ki-assistent.md) — Planlegging med stemme, med fritt modellvalg

**Innstillinger**

*Stamdata og organisasjon*
- [Filialer](./einstellungen/stammdaten-organisation/branches.md), [Land](./einstellungen/stammdaten-organisation/laender.md), [Eier-adresse](./einstellungen/stammdaten-organisation/owner-address.md), [Grunninnstillinger for arbeid](./einstellungen/stammdaten-organisation/work-setting.md), [Kvalifikasjonskatalog](./einstellungen/stammdaten-organisation/qualifikationen.md), [Kontraktmaler](./einstellungen/stammdaten-organisation/vertragsvorlagen.md)

*Planlegging og automatisering*
- [Planleggingsregler – standardverdier](./einstellungen/planung-automatisierung/planungsregeln-standardwerte.md), [Kalendervalg](./einstellungen/planung-automatisierung/kalenderauswahl.md), [Veiviser-innstillinger](./einstellungen/planung-automatisierung/wizard-einstellungen.md), [Ruteoptimalisering-API](./einstellungen/planung-automatisierung/routenoptimierung-api.md), [Gruppesynlighet](./einstellungen/planung-automatisierung/gruppen-sichtbarkeit.md)

*Klacksy-konfigurasjon*
- [LLM-leverandører og modeller](./einstellungen/klacksy-konfiguration/llm-provider-und-modelle.md), [Personlighet](./einstellungen/klacksy-konfiguration/persoenlichkeit.md), [Taleinngang/-utgang](./einstellungen/klacksy-konfiguration/sprachein-ausgabe.md), [Autonominivåer](./einstellungen/klacksy-konfiguration/autonomie-stufen.md), [Modell-tilkoblingstest](./einstellungen/klacksy-konfiguration/modell-verbindungstest.md), [Skill-forslag](./einstellungen/klacksy-konfiguration/skill-vorschlaege.md), [Makroer](./einstellungen/klacksy-konfiguration/makros.md)

*Kommunikasjon og integrasjon*
- [E-postsending](./einstellungen/kommunikation-integration/email-versand.md), [E-postmottak](./einstellungen/kommunikation-integration/email-empfang.md), [DeepL-oversettelse](./einstellungen/kommunikation-integration/deepl-uebersetzung.md), [Identitetsleverandør](./einstellungen/kommunikation-integration/identity-provider.md), [ERP-overføringspunkter](./einstellungen/kommunikation-integration/erp-uebernahmepunkte.md), [Meldingskanaler](./einstellungen/kommunikation-integration/messaging-kanaele.md)

*System og sikkerhet*
- [Brukeradministrasjon](./einstellungen/system-sicherheit/benutzerverwaltung.md), [Personal Access Tokens](./einstellungen/system-sicherheit/personal-access-tokens.md), [Dataoppbevaring](./einstellungen/system-sicherheit/datenaufbewahrung.md), [Oppdateringer](./einstellungen/system-sicherheit/updates.md), [Funksjonsplugins](./einstellungen/system-sicherheit/feature-plugins.md), [Språkplugins](./einstellungen/system-sicherheit/sprach-plugins.md), [Spamregler](./einstellungen/system-sicherheit/spam-regeln.md), [Generelle innstillinger](./einstellungen/system-sicherheit/allgemeine-einstellungen.md)

---
*Klacks er åpen kildekode under MIT-lisens — [kildekode på GitHub](https://github.com/HeribertG/Klacks.Api).*
