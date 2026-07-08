---
sidebar_position: 1
slug: /
---

# Välkommen till Klacks-dokumentationen

**Klacks** är en öppen källkods-plattform för personalplanering i skift- och insatsverksamheter: planera arbetspass automatiskt, optimera turer, styr med KI-assistent — on-premise, med den KI-modell du själv väljer. För hemtjänst, sjukhus, säkerhets-, städ- och logistikverksamheter.

Den här wikin förklarar i små bitar hur Klacks fungerar. Varje sida läses på några minuter — och allt går att testa direkt i den publika Playground.

## Kom igång direkt

| | |
|---|---|
| 🎮 **Testa** | [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1` (publik testinstans, data återställs dagligen) |
| 📦 **Installera** | [Ladda ner on-premise-paketet](https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip) — ett kommando, och Klacks körs |
| 💬 **Frågor och utbyte** | [Klacks-community på Discord](https://discord.gg/YRP8p2abVC) |
| 🌐 **Webbplats** | [klacks-software.ch](https://klacks-software.ch) |

## Bitarna

**Om Klacks**
- [Filosofin bakom Klacks](./ueber-klacks/philosophie.md) — Datasuveränitet, fritt KI-val, öppen källkod

**Kom igång**
- [Installation och Playground](./erste-schritte/installation-und-playground.md) — Ett fungerande Klacks på några minuter
- [Den guidade installationsturen](./erste-schritte/gefuehrte-einrichtungs-tour.md) — Klacksy guidar dig genom grundinställningarna
- [Medarbetare och stamdata](./erste-schritte/mitarbeiter-und-stammdaten.md) — Grunden för all planering
- [Roller och rättigheter](./erste-schritte/rollen-und-rechte.md) — Supervisor och Admin, tydligt åtskilda

**Planera**
- [Autoplanering: Schemat på sekunder](./planen/auto-planung.md) — Schemat på sekunder, med ett klick
- [Planeringsrutnätet: din interaktiva tidsmatris](./planen/plan-raster.md) — Den interaktiva tidsmatrisen med dra och släpp
- [Modulär planering: dela och härska](./planen/modulare-planung.md) — Dela upp stora scheman utan dubbelbokningar
- [Godkännandeflöde: från utkast till bindande schema](./planen/freigabe-workflow.md) — Från utkast till förseglat schema
- [Planeringsregler](./planen/planungsregeln.md) — Vilotider, gränser och arbetsdagar
- [Periodavslut](./planen/periodenabschluss.md) — Avsluta månader bindande

**Optimera och utvärdera**
- [Tur- och ruttoptimering](./optimieren/touren-und-routenoptimierung.md) — Den bästa rutten, automatiskt
- [Frånvaro i överblick](./optimieren/absenzen-im-blick.md) — Semester och sjukdom som Gantt-översikt
- [Resursövervakning](./optimieren/ressourcen-monitor.md) — Beläggning på en blick
- [Helgdagar och kalender](./optimieren/feiertage-und-kalender.md) — Ner på kommunnivå
- [Kvalifikationsrelationer](./optimieren/skill-beziehungen.md) — Klacksy lär sig själv vilka av sina förmågor som hör ihop
- [Rapportdesigner](./optimieren/report-designer.md) — Bygg egna rapporter

**KI-assistenten**
- [Klacksy: din KI-assistent för planering](./ki/klacksy-ki-assistent.md) — Planering med tal, med fritt modellval

**Inställningar**

*Stamdata och organisation*
- [Filialer](./einstellungen/stammdaten-organisation/branches.md), [Länder](./einstellungen/stammdaten-organisation/laender.md), [Ägaradress](./einstellungen/stammdaten-organisation/owner-address.md), [Grundinställningar för arbete](./einstellungen/stammdaten-organisation/work-setting.md), [Kvalifikationskatalog](./einstellungen/stammdaten-organisation/qualifikationen.md), [Avtalsmallar](./einstellungen/stammdaten-organisation/vertragsvorlagen.md)

*Planering och automatisering*
- [Standardvärden för planeringsregler](./einstellungen/planung-automatisierung/planungsregeln-standardwerte.md), [Kalenderval](./einstellungen/planung-automatisierung/kalenderauswahl.md), [Wizard-inställningar](./einstellungen/planung-automatisierung/wizard-einstellungen.md), [Ruttoptimerings-API](./einstellungen/planung-automatisierung/routenoptimierung-api.md), [Gruppsynlighet](./einstellungen/planung-automatisierung/gruppen-sichtbarkeit.md)

*Klacksy-konfiguration*
- [LLM-leverantör och modeller](./einstellungen/klacksy-konfiguration/llm-provider-und-modelle.md), [Personlighet](./einstellungen/klacksy-konfiguration/persoenlichkeit.md), [Röstin-/utmatning](./einstellungen/klacksy-konfiguration/sprachein-ausgabe.md), [Autonominivåer](./einstellungen/klacksy-konfiguration/autonomie-stufen.md), [Modellanslutningstest](./einstellungen/klacksy-konfiguration/modell-verbindungstest.md), [Skill-förslag](./einstellungen/klacksy-konfiguration/skill-vorschlaege.md), [Makron](./einstellungen/klacksy-konfiguration/makros.md)

*Kommunikation och integration*
- [E-postutskick](./einstellungen/kommunikation-integration/email-versand.md), [E-postmottagning](./einstellungen/kommunikation-integration/email-empfang.md), [DeepL-översättning](./einstellungen/kommunikation-integration/deepl-uebersetzung.md), [Identity Provider](./einstellungen/kommunikation-integration/identity-provider.md), [ERP-övertagningspunkter](./einstellungen/kommunikation-integration/erp-uebernahmepunkte.md), [Meddelandekanaler](./einstellungen/kommunikation-integration/messaging-kanaele.md)

*System och säkerhet*
- [Användarhantering](./einstellungen/system-sicherheit/benutzerverwaltung.md), [Personal Access Tokens](./einstellungen/system-sicherheit/personal-access-tokens.md), [Datalagring](./einstellungen/system-sicherheit/datenaufbewahrung.md), [Uppdateringar](./einstellungen/system-sicherheit/updates.md), [Funktions-plugins](./einstellungen/system-sicherheit/feature-plugins.md), [Språk-plugins](./einstellungen/system-sicherheit/sprach-plugins.md), [Spam-regler](./einstellungen/system-sicherheit/spam-regeln.md), [Allmänna inställningar](./einstellungen/system-sicherheit/allgemeine-einstellungen.md)

---
*Klacks är öppen källkod under MIT-licens — [källkod på GitHub](https://github.com/HeribertG/Klacks.Api).*
