---
sidebar_position: 1
slug: /
---

# Bine ați venit în documentația Klacks

**Klacks** este platforma open-source pentru planificarea personalului în activități pe ture și intervenții: planificați automat serviciile, optimizați turele, controlați totul printr-un asistent AI — on-premise, cu modelul AI la alegerea dumneavoastră. Pentru Spitex, spitale, firme de securitate, curățenie și logistică.

Acest wiki explică în porții mici cum funcționează Klacks. Fiecare pagină se citește în câteva minute — și totul poate fi testat imediat în playground-ul public.

## Începeți imediat

| | |
|---|---|
| 🎮 **Testați** | [Klacks Playground](https://klacks-software.ch:7643) — Autentificare `admin@test.com` / `P@ssw0rt1` (instanță publică de test, datele sunt resetate zilnic) |
| 📦 **Instalați** | [Descărcați pachetul On-Premise](https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip) — o singură comandă și Klacks rulează |
| 💬 **Întrebări și schimb de idei** | [Comunitatea Klacks pe Discord](https://discord.gg/YRP8p2abVC) |
| 🌐 **Website** | [klacks-software.ch](https://klacks-software.ch) |

## Porțiile

**Despre Klacks**
- [Filozofia din spatele Klacks](./ueber-klacks/philosophie.md) — suveranitatea datelor, libertatea de alegere a AI-ului, open source

**Primii pași**
- [Instalare și Playground](./erste-schritte/installation-und-playground.md) — către un Klacks funcțional în câteva minute
- [Turul ghidat de configurare](./erste-schritte/gefuehrte-einrichtungs-tour.md) — Klacksy vă ghidează prin setările de bază
- [Angajați și date de bază](./erste-schritte/mitarbeiter-und-stammdaten.md) — fundamentul oricărei planificări
- [Roluri și drepturi](./erste-schritte/rollen-und-rechte.md) — Supervisor și Admin, clar delimitați

**Planificare**
- [Auto-planificare: planul în câteva secunde](./planen/auto-planung.md) — planul în câteva secunde, printr-un click
- [Grila de planificare: matricea dumneavoastră interactivă de timp](./planen/plan-raster.md) — matricea interactivă de timp cu drag & drop
- [Planificare modulară: divide și cucerește](./planen/modulare-planung.md) — împărțiți planuri mari fără dublă rezervare
- [Flux de aprobare: de la ciornă la plan obligatoriu](./planen/freigabe-workflow.md) — de la ciornă la planul sigilat
- [Reguli de planificare](./planen/planungsregeln.md) — perioade de repaus, limite și zile lucrătoare
- [Închiderea perioadei](./planen/periodenabschluss.md) — încheiați lunile în mod obligatoriu

**Optimizare și evaluare**
- [Optimizarea turelor și traseelor](./optimieren/touren-und-routenoptimierung.md) — cel mai bun traseu, automat
- [Absențele dintr-o privire](./optimieren/absenzen-im-blick.md) — concediu și boală ca vedere Gantt
- [Monitor de resurse](./optimieren/ressourcen-monitor.md) — gradul de ocupare dintr-o privire
- [Sărbători și calendare](./optimieren/feiertage-und-kalender.md) — precis până la nivel de comună
- [Relații între abilități](./optimieren/skill-beziehungen.md) — Klacksy învață singur care dintre abilitățile sale se potrivesc împreună
- [Report Designer](./optimieren/report-designer.md) — construiți-vă propriile rapoarte

**Asistentul AI**
- [Klacksy: asistentul dumneavoastră AI pentru planificare](./ki/klacksy-ki-assistent.md) — planificare prin voce, cu alegere liberă a modelului

**Setări**

*Date de bază și organizație*
- [Filiale](./einstellungen/stammdaten-organisation/branches.md), [Țări](./einstellungen/stammdaten-organisation/laender.md), [Adresa operatorului](./einstellungen/stammdaten-organisation/owner-address.md), [Setări de bază pentru muncă](./einstellungen/stammdaten-organisation/work-setting.md), [Catalog de calificări](./einstellungen/stammdaten-organisation/qualifikationen.md), [Modele de contract](./einstellungen/stammdaten-organisation/vertragsvorlagen.md)

*Planificare și automatizare*
- [Valori standard pentru regulile de planificare](./einstellungen/planung-automatisierung/planungsregeln-standardwerte.md), [Selecție calendar](./einstellungen/planung-automatisierung/kalenderauswahl.md), [Setări Wizard](./einstellungen/planung-automatisierung/wizard-einstellungen.md), [API optimizare rute](./einstellungen/planung-automatisierung/routenoptimierung-api.md), [Vizibilitate grupuri](./einstellungen/planung-automatisierung/gruppen-sichtbarkeit.md)

*Configurare Klacksy*
- [Furnizori LLM și modele](./einstellungen/klacksy-konfiguration/llm-provider-und-modelle.md), [Personalitate](./einstellungen/klacksy-konfiguration/persoenlichkeit.md), [Intrare/ieșire vocală](./einstellungen/klacksy-konfiguration/sprachein-ausgabe.md), [Niveluri de autonomie](./einstellungen/klacksy-konfiguration/autonomie-stufen.md), [Test de conexiune model](./einstellungen/klacksy-konfiguration/modell-verbindungstest.md), [Sugestii de abilități](./einstellungen/klacksy-konfiguration/skill-vorschlaege.md), [Macrouri](./einstellungen/klacksy-konfiguration/makros.md)

*Comunicare și integrare*
- [Trimitere e-mail](./einstellungen/kommunikation-integration/email-versand.md), [Primire e-mail](./einstellungen/kommunikation-integration/email-empfang.md), [Traducere DeepL](./einstellungen/kommunikation-integration/deepl-uebersetzung.md), [Identity Provider](./einstellungen/kommunikation-integration/identity-provider.md), [Puncte de preluare ERP](./einstellungen/kommunikation-integration/erp-uebernahmepunkte.md), [Canale de mesagerie](./einstellungen/kommunikation-integration/messaging-kanaele.md)

*Sistem și securitate*
- [Administrarea utilizatorilor](./einstellungen/system-sicherheit/benutzerverwaltung.md), [Token-uri de acces personale](./einstellungen/system-sicherheit/personal-access-tokens.md), [Păstrarea datelor](./einstellungen/system-sicherheit/datenaufbewahrung.md), [Actualizări](./einstellungen/system-sicherheit/updates.md), [Plugin-uri de funcții](./einstellungen/system-sicherheit/feature-plugins.md), [Plugin-uri lingvistice](./einstellungen/system-sicherheit/sprach-plugins.md), [Reguli spam](./einstellungen/system-sicherheit/spam-regeln.md), [Setări generale](./einstellungen/system-sicherheit/allgemeine-einstellungen.md)

---
*Klacks este open source sub licența MIT — [Cod sursă pe GitHub](https://github.com/HeribertG/Klacks.Api).*
