---
sidebar_position: 1
slug: /
---

# Willkommen in der Klacks-Dokumentation

**Klacks** ist die Open-Source-Plattform für Personaleinsatzplanung in Schicht- und Einsatzbetrieben: Dienste automatisch planen, Touren optimieren, per KI-Assistent steuern — On-Premise, mit dem KI-Modell Ihrer Wahl. Für Spitex, Spitäler, Sicherheits-, Reinigungs- und Logistikbetriebe.

Dieses Wiki erklärt in kleinen Häppchen, wie Klacks funktioniert. Jede Seite ist in wenigen Minuten gelesen — und alles lässt sich sofort im öffentlichen Playground ausprobieren.

## Sofort loslegen

| | |
|---|---|
| 🎮 **Ausprobieren** | [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1` (öffentliche Test-Instanz, Daten werden täglich zurückgesetzt) |
| 📦 **Installieren** | [On-Premise-Paket herunterladen](https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip) — ein Befehl, und Klacks läuft |
| 💬 **Fragen & Austausch** | [Klacks-Community auf Discord](https://discord.gg/YRP8p2abVC) |
| 🌐 **Website** | [klacks-software.ch](https://klacks-software.ch) |

## Die Häppchen

**Über Klacks**
- [Die Philosophie hinter Klacks](./ueber-klacks/philosophie.md) — Datenhoheit, KI-Wahlfreiheit, Open Source

**Erste Schritte**
- [Installation und Playground](./erste-schritte/installation-und-playground.md) — In wenigen Minuten zu einem laufenden Klacks
- [Die geführte Einrichtungs-Tour](./erste-schritte/gefuehrte-einrichtungs-tour.md) — Klacksy führt Sie durch die Grundeinstellungen
- [Mitarbeiter und Stammdaten](./erste-schritte/mitarbeiter-und-stammdaten.md) — Das Fundament jeder Planung
- [Rollen und Rechte](./erste-schritte/rollen-und-rechte.md) — Supervisor und Admin, klar unterschieden

**Planen**
- [Auto-Planung: Der Plan in Sekunden](./planen/auto-planung.md) — Der Plan in Sekunden, per Klick
- [Das Plan-Raster: Ihre interaktive Zeit-Matrix](./planen/plan-raster.md) — Die interaktive Zeit-Matrix mit Drag & Drop
- [Modulare Planung: Teile und herrsche](./planen/modulare-planung.md) — Grosse Pläne aufteilen, ohne Doppelbuchungen
- [Freigabe-Workflow: Vom Entwurf zum verbindlichen Plan](./planen/freigabe-workflow.md) — Vom Entwurf bis zum versiegelten Plan
- [Planungsregeln](./planen/planungsregeln.md) — Ruhezeiten, Limits und Arbeitstage
- [Periodenabschluss](./planen/periodenabschluss.md) — Monate verbindlich abschliessen

**Optimieren & Auswerten**
- [Touren- und Routenoptimierung](./optimieren/touren-und-routenoptimierung.md) — Die beste Route, automatisch
- [Absenzen im Blick](./optimieren/absenzen-im-blick.md) — Ferien und Krankheit als Gantt-Übersicht
- [Ressourcen Monitor](./optimieren/ressourcen-monitor.md) — Auslastung auf einen Blick
- [Feiertage und Kalender](./optimieren/feiertage-und-kalender.md) — Bis auf die Gemeinde genau
- [Skill Beziehungen](./optimieren/skill-beziehungen.md) — Klacksy lernt selbst, welche seiner Fähigkeiten zusammengehören
- [Report Designer](./optimieren/report-designer.md) — Eigene Berichte bauen

**Der KI-Assistent**
- [Klacksy: Ihr KI-Assistent für die Planung](./ki/klacksy-ki-assistent.md) — Planung per Sprache, mit freier Modellwahl

**Einstellungen**

*Stammdaten & Organisation*
- [Filialen](./einstellungen/stammdaten-organisation/branches.md), [Länder](./einstellungen/stammdaten-organisation/laender.md), [Betreiber-Adresse](./einstellungen/stammdaten-organisation/owner-address.md), [Arbeits-Grundeinstellungen](./einstellungen/stammdaten-organisation/work-setting.md), [Qualifikationskatalog](./einstellungen/stammdaten-organisation/qualifikationen.md), [Vertragsvorlagen](./einstellungen/stammdaten-organisation/vertragsvorlagen.md)

*Planung & Automatisierung*
- [Planungsregeln-Standardwerte](./einstellungen/planung-automatisierung/planungsregeln-standardwerte.md), [Kalenderauswahl](./einstellungen/planung-automatisierung/kalenderauswahl.md), [Wizard-Einstellungen](./einstellungen/planung-automatisierung/wizard-einstellungen.md), [Routenoptimierung-API](./einstellungen/planung-automatisierung/routenoptimierung-api.md), [Gruppen-Sichtbarkeit](./einstellungen/planung-automatisierung/gruppen-sichtbarkeit.md)

*Klacksy-Konfiguration*
- [LLM-Provider und Modelle](./einstellungen/klacksy-konfiguration/llm-provider-und-modelle.md), [Persönlichkeit](./einstellungen/klacksy-konfiguration/persoenlichkeit.md), [Sprachein-/ausgabe](./einstellungen/klacksy-konfiguration/sprachein-ausgabe.md), [Autonomie-Stufen](./einstellungen/klacksy-konfiguration/autonomie-stufen.md), [Modell-Verbindungstest](./einstellungen/klacksy-konfiguration/modell-verbindungstest.md), [Skill-Vorschläge](./einstellungen/klacksy-konfiguration/skill-vorschlaege.md), [Makros](./einstellungen/klacksy-konfiguration/makros.md)

*Kommunikation & Integration*
- [E-Mail-Versand](./einstellungen/kommunikation-integration/email-versand.md), [E-Mail-Empfang](./einstellungen/kommunikation-integration/email-empfang.md), [DeepL-Übersetzung](./einstellungen/kommunikation-integration/deepl-uebersetzung.md), [Identity Provider](./einstellungen/kommunikation-integration/identity-provider.md), [ERP-Übernahmepunkte](./einstellungen/kommunikation-integration/erp-uebernahmepunkte.md), [Messaging-Kanäle](./einstellungen/kommunikation-integration/messaging-kanaele.md)

*System & Sicherheit*
- [Benutzerverwaltung](./einstellungen/system-sicherheit/benutzerverwaltung.md), [Personal Access Tokens](./einstellungen/system-sicherheit/personal-access-tokens.md), [Datenaufbewahrung](./einstellungen/system-sicherheit/datenaufbewahrung.md), [Updates](./einstellungen/system-sicherheit/updates.md), [Feature-Plugins](./einstellungen/system-sicherheit/feature-plugins.md), [Sprach-Plugins](./einstellungen/system-sicherheit/sprach-plugins.md), [Spam-Regeln](./einstellungen/system-sicherheit/spam-regeln.md), [Allgemeine Einstellungen](./einstellungen/system-sicherheit/allgemeine-einstellungen.md)

---
*Klacks ist Open Source unter MIT-Lizenz — [Quellcode auf GitHub](https://github.com/HeribertG/Klacks.Api).*
