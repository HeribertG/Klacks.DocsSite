---
sidebar_position: 1
slug: /
---

# Welkom bij de Klacks-documentatie

**Klacks** is het open source platform voor personeelsplanning in ploegendienst- en inzetbedrijven: diensten automatisch inplannen, routes optimaliseren, aansturen via een AI-assistent — on-premise, met het AI-model van uw keuze. Voor thuiszorgorganisaties, ziekenhuizen, beveiligings-, schoonmaak- en logistiekbedrijven.

Deze wiki legt in kleine hapjes uit hoe Klacks werkt. Elke pagina is in enkele minuten gelezen — en alles kunt u meteen uitproberen in de openbare playground.

## Meteen aan de slag

| | |
|---|---|
| 🎮 **Uitproberen** | [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1` (openbare test-omgeving, gegevens worden dagelijks gereset) |
| 📦 **Installeren** | [On-premise-pakket downloaden](https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip) — één commando, en Klacks draait |
| 💬 **Vragen & uitwisseling** | [Klacks-community op Discord](https://discord.gg/YRP8p2abVC) |
| 🌐 **Website** | [klacks-software.ch](https://klacks-software.ch) |

## De hapjes

**Over Klacks**
- [De filosofie achter Klacks](./ueber-klacks/philosophie.md) — Datasoevereiniteit, AI-keuzevrijheid, open source

**Aan de slag**
- [Installatie en playground](./erste-schritte/installation-und-playground.md) — Binnen enkele minuten een werkende Klacks
- [De begeleide instelrondleiding](./erste-schritte/gefuehrte-einrichtungs-tour.md) — Klacksy leidt u door de basisinstellingen
- [Medewerkers en stamgegevens](./erste-schritte/mitarbeiter-und-stammdaten.md) — De basis van elke planning
- [Rollen en rechten](./erste-schritte/rollen-und-rechte.md) — Supervisor en admin, duidelijk onderscheiden
- [Uw dashboard: alles in één oogopslag](./erste-schritte/ihr-dashboard.md) — Klacks' startpagina met vier herschikbare onderdelen: overzicht, dekking & bevestiging, resources en locaties

**Plannen**
- [Auto-planning: één klik, de rest draait op de achtergrond](./planen/auto-planung.md) — Berekening op de achtergrond, terwijl u zich met andere dingen bezighoudt
- [Het planrooster: uw interactieve tijdmatrix](./planen/plan-raster.md) — De interactieve tijdmatrix met drag-and-drop
- [Modulaire planning: verdeel en heers](./planen/modulare-planung.md) — Grote planningen opdelen, zonder dubbele boekingen
- [Goedkeuringsworkflow: van concept naar bindende planning](./planen/freigabe-workflow.md) — Van concept tot verzegelde planning
- [Planningsregels](./planen/planungsregeln.md) — Rusttijden, limieten en werkdagen
- [Periodeafsluiting](./planen/periodenabschluss.md) — Maanden bindend afsluiten
- [Het beschikbaarheidsrooster: wie wanneer inzetbaar is](./planen/verfuegbarkeits-raster.md) — Uur- of dagnauwkeurig vastgelegd, voor eigen en externe medewerkers
- [De levenscyclus van een dienst: van opdracht tot deelstuk](./planen/schicht-lebenszyklus.md) — Van bewerkbare opdracht via verzegeld contract tot planbare dienst

**Optimaliseren & analyseren**
- [Tour- en route-optimalisatie](./optimieren/touren-und-routenoptimierung.md) — De beste route, automatisch
- [Afwezigheden in beeld](./optimieren/absenzen-im-blick.md) — Vakantie en ziekte als Gantt-overzicht
- [Resourcemonitor](./optimieren/ressourcen-monitor.md) — Bezetting in één oogopslag
- [Feestdagen en kalender](./optimieren/feiertage-und-kalender.md) — Tot op de gemeente nauwkeurig
- [Skill-relaties](./optimieren/skill-beziehungen.md) — Klacksy leert zelf welke van zijn vaardigheden bij elkaar horen
- [Report Designer](./optimieren/report-designer.md) — Eigen rapporten bouwen
- [Planningskwaliteit controleren: overtredingen, lacunes en overgeslagen plaatsingen](./optimieren/planungsqualitaet-pruefen.md) — De drie diagnosetabellen na een run van de assistent
- [Escalatie en oproepdienst](./optimieren/eskalation-rufbereitschaft.md) — Wie in welke volgorde wordt opgeroepen als iemand uitvalt

**De AI-assistent**
- [Klacksy: uw AI-assistent voor de planning](./ki/klacksy-ki-assistent.md) — Plannen met spraak, met vrije modelkeuze
- [Klacksy als proactief teamlid](./ki/klacksy-proaktiv.md) — Wat Klacksy uit zichzelf opmerkt — en hoever hij daarbij mag gaan

**Instellingen**

*Stamgegevens & organisatie*
- [Filialen](./einstellungen/stammdaten-organisation/branches.md), [Landen](./einstellungen/stammdaten-organisation/laender.md), [Eigenaarsadres](./einstellungen/stammdaten-organisation/owner-address.md), [Basisinstellingen werk](./einstellungen/stammdaten-organisation/work-setting.md), [Kwalificatiecatalogus](./einstellungen/stammdaten-organisation/qualifikationen.md), [Contractsjablonen](./einstellungen/stammdaten-organisation/vertragsvorlagen.md), [Overuren](./einstellungen/stammdaten-organisation/ueberstunden.md)

*Planning & automatisering*
- [Standaardwaarden planningsregels](./einstellungen/planung-automatisierung/planungsregeln-standardwerte.md), [Kalenderselectie](./einstellungen/planung-automatisierung/kalenderauswahl.md), [Wizard-instellingen](./einstellungen/planung-automatisierung/wizard-einstellungen.md), [Route-optimalisatie-API](./einstellungen/planung-automatisierung/routenoptimierung-api.md), [Groepszichtbaarheid](./einstellungen/planung-automatisierung/gruppen-sichtbarkeit.md)

*Klacksy-configuratie*
- [LLM-providers en modellen](./einstellungen/klacksy-konfiguration/llm-provider-und-modelle.md), [Persoonlijkheid](./einstellungen/klacksy-konfiguration/persoenlichkeit.md), [Spraakin-/uitvoer](./einstellungen/klacksy-konfiguration/sprachein-ausgabe.md), [Autonomieniveaus](./einstellungen/klacksy-konfiguration/autonomie-stufen.md), [Modelverbindingstest](./einstellungen/klacksy-konfiguration/modell-verbindungstest.md), [Skill-suggesties](./einstellungen/klacksy-konfiguration/skill-vorschlaege.md), [Macro's](./einstellungen/klacksy-konfiguration/makros.md)

*Communicatie & integratie*
- [E-mail verzenden](./einstellungen/kommunikation-integration/email-versand.md), [E-mail ontvangen](./einstellungen/kommunikation-integration/email-empfang.md), [DeepL-vertaling](./einstellungen/kommunikation-integration/deepl-uebersetzung.md), [Identity Provider](./einstellungen/kommunikation-integration/identity-provider.md), [ERP-overnamepunten](./einstellungen/kommunikation-integration/erp-uebernahmepunkte.md), [Messagingkanalen](./einstellungen/kommunikation-integration/messaging-kanaele.md), [Loonexport-overdracht](./einstellungen/kommunikation-integration/lohnexport-uebergabe.md)

*Systeem & beveiliging*
- [Gebruikersbeheer](./einstellungen/system-sicherheit/benutzerverwaltung.md), [Personal Access Tokens](./einstellungen/system-sicherheit/personal-access-tokens.md), [Gegevensbewaring](./einstellungen/system-sicherheit/datenaufbewahrung.md), [Updates](./einstellungen/system-sicherheit/updates.md), [Feature-plugins](./einstellungen/system-sicherheit/feature-plugins.md), [Taalplugins](./einstellungen/system-sicherheit/sprach-plugins.md), [Spamregels](./einstellungen/system-sicherheit/spam-regeln.md), [Algemene instellingen](./einstellungen/system-sicherheit/allgemeine-einstellungen.md)

---
*Klacks is open source onder de MIT-licentie — [broncode op GitHub](https://github.com/HeribertG/Klacks.Api).*
