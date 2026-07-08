---
sidebar_position: 1
slug: /
---

# Vítejte v dokumentaci Klacks

**Klacks** je open-source platforma pro personální plánování ve směnných a nasazových provozech: automatické plánování služeb, optimalizace tras, ovládání pomocí AI asistenta — on-premise, s AI modelem podle vlastního výběru. Určeno pro domácí péči (Spitex), nemocnice, bezpečnostní, úklidové a logistické provozy.

Tato wiki v malých kapitolách vysvětluje, jak Klacks funguje. Každou stránku přečtete za pár minut — a vše si můžete hned vyzkoušet ve veřejném Playgroundu.

## Začněte hned

| | |
|---|---|
| 🎮 **Vyzkoušet** | [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1` (veřejná testovací instance, data se denně resetují) |
| 📦 **Nainstalovat** | [Stáhnout On-Premise balíček](https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip) — jeden příkaz a Klacks běží |
| 💬 **Dotazy a diskuze** | [Komunita Klacks na Discordu](https://discord.gg/YRP8p2abVC) |
| 🌐 **Web** | [klacks-software.ch](https://klacks-software.ch) |

## Kapitoly

**O Klacks**
- [Filozofie za Klacks](./ueber-klacks/philosophie.md) — datová suverenita, svobodná volba AI, open source

**První kroky**
- [Instalace a Playground](./erste-schritte/installation-und-playground.md) — Za pár minut k běžícímu Klacks
- [Průvodce úvodním nastavením](./erste-schritte/gefuehrte-einrichtungs-tour.md) — Klacksy vás provede základním nastavením
- [Zaměstnanci a kmenová data](./erste-schritte/mitarbeiter-und-stammdaten.md) — Základ každého plánování
- [Role a oprávnění](./erste-schritte/rollen-und-rechte.md) — Supervisor a Admin, jasně odlišené

**Plánování**
- [Automatické plánování: Rozvrh za pár sekund](./planen/auto-planung.md) — Rozvrh za pár sekund, jedním kliknutím
- [Plánovací mřížka: Vaše interaktivní časová matice](./planen/plan-raster.md) — Interaktivní časová matice s drag & drop
- [Modulární plánování: Rozděl a panuj](./planen/modulare-planung.md) — Rozdělení velkých plánů bez dvojitých rezervací
- [Schvalovací proces: Od návrhu k závaznému plánu](./planen/freigabe-workflow.md) — Od návrhu až po zapečetěný plán
- [Plánovací pravidla](./planen/planungsregeln.md) — Doby odpočinku, limity a pracovní dny
- [Uzávěrka období](./planen/periodenabschluss.md) — Závazné uzavření měsíců

**Optimalizace a vyhodnocení**
- [Optimalizace tras a maršrut](./optimieren/touren-und-routenoptimierung.md) — Nejlepší trasa automaticky
- [Přehled absencí](./optimieren/absenzen-im-blick.md) — Dovolená a nemoc v přehledu typu Gantt
- [Monitor zdrojů](./optimieren/ressourcen-monitor.md) — Vytížení na první pohled
- [Svátky a kalendář](./optimieren/feiertage-und-kalender.md) — Přesně až na úroveň obce
- [Vztahy mezi dovednostmi](./optimieren/skill-beziehungen.md) — Klacksy se sám učí, které jeho schopnosti patří k sobě
- [Návrhář reportů](./optimieren/report-designer.md) — Tvorba vlastních reportů

**AI asistent**
- [Klacksy: Váš AI asistent pro plánování](./ki/klacksy-ki-assistent.md) — Plánování hlasem, se svobodnou volbou modelu

**Nastavení**

*Kmenová data a organizace*
- [Pobočky](./einstellungen/stammdaten-organisation/branches.md), [Země](./einstellungen/stammdaten-organisation/laender.md), [Adresa provozovatele](./einstellungen/stammdaten-organisation/owner-address.md), [Základní pracovní nastavení](./einstellungen/stammdaten-organisation/work-setting.md), [Katalog kvalifikací](./einstellungen/stammdaten-organisation/qualifikationen.md), [Šablony smluv](./einstellungen/stammdaten-organisation/vertragsvorlagen.md)

*Plánování a automatizace*
- [Výchozí hodnoty plánovacích pravidel](./einstellungen/planung-automatisierung/planungsregeln-standardwerte.md), [Výběr kalendáře](./einstellungen/planung-automatisierung/kalenderauswahl.md), [Nastavení průvodce](./einstellungen/planung-automatisierung/wizard-einstellungen.md), [API pro optimalizaci tras](./einstellungen/planung-automatisierung/routenoptimierung-api.md), [Viditelnost skupin](./einstellungen/planung-automatisierung/gruppen-sichtbarkeit.md)

*Konfigurace Klacksy*
- [LLM poskytovatelé a modely](./einstellungen/klacksy-konfiguration/llm-provider-und-modelle.md), [Osobnost](./einstellungen/klacksy-konfiguration/persoenlichkeit.md), [Vstup/výstup hlasu](./einstellungen/klacksy-konfiguration/sprachein-ausgabe.md), [Úrovně autonomie](./einstellungen/klacksy-konfiguration/autonomie-stufen.md), [Test připojení modelu](./einstellungen/klacksy-konfiguration/modell-verbindungstest.md), [Návrhy dovedností](./einstellungen/klacksy-konfiguration/skill-vorschlaege.md), [Makra](./einstellungen/klacksy-konfiguration/makros.md)

*Komunikace a integrace*
- [Odesílání e-mailů](./einstellungen/kommunikation-integration/email-versand.md), [Příjem e-mailů](./einstellungen/kommunikation-integration/email-empfang.md), [Překlad DeepL](./einstellungen/kommunikation-integration/deepl-uebersetzung.md), [Identity Provider](./einstellungen/kommunikation-integration/identity-provider.md), [ERP přebírací body](./einstellungen/kommunikation-integration/erp-uebernahmepunkte.md), [Komunikační kanály](./einstellungen/kommunikation-integration/messaging-kanaele.md)

*Systém a bezpečnost*
- [Správa uživatelů](./einstellungen/system-sicherheit/benutzerverwaltung.md), [Personal Access Tokens](./einstellungen/system-sicherheit/personal-access-tokens.md), [Uchovávání dat](./einstellungen/system-sicherheit/datenaufbewahrung.md), [Aktualizace](./einstellungen/system-sicherheit/updates.md), [Funkční pluginy](./einstellungen/system-sicherheit/feature-plugins.md), [Jazykové pluginy](./einstellungen/system-sicherheit/sprach-plugins.md), [Pravidla proti spamu](./einstellungen/system-sicherheit/spam-regeln.md), [Obecná nastavení](./einstellungen/system-sicherheit/allgemeine-einstellungen.md)

---
*Klacks je open source pod licencí MIT — [zdrojový kód na GitHubu](https://github.com/HeribertG/Klacks.Api).*
