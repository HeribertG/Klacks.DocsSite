---
sidebar_position: 1
slug: /
---

# Benvenuti nella documentazione di Klacks

**Klacks** è la piattaforma open source per la pianificazione del personale in aziende con turni e servizi: pianifica automaticamente i turni, ottimizza i percorsi, si comanda tramite assistente IA — on-premise, con il modello IA di vostra scelta. Per servizi di assistenza domiciliare (Spitex), ospedali, aziende di sicurezza, pulizie e logistica.

Questo wiki spiega in piccoli passi come funziona Klacks. Ogni pagina si legge in pochi minuti — e tutto può essere provato subito nel Playground pubblico.

## Iniziare subito

| | |
|---|---|
| 🎮 **Provare** | [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1` (istanza di test pubblica, i dati vengono ripristinati ogni giorno) |
| 📦 **Installare** | [Scarica il pacchetto On-Premise](https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip) — un comando, e Klacks è operativo |
| 💬 **Domande e scambio** | [Community Klacks su Discord](https://discord.gg/YRP8p2abVC) |
| 🌐 **Sito web** | [klacks-software.ch](https://klacks-software.ch) |

## I piccoli passi

**Su Klacks**
- [La filosofia dietro Klacks](./ueber-klacks/philosophie.md) — Sovranità dei dati, libertà di scelta dell'IA, Open Source

**Primi passi**
- [Installazione e Playground](./erste-schritte/installation-und-playground.md) — In pochi minuti con un Klacks funzionante
- [Il tour guidato di configurazione](./erste-schritte/gefuehrte-einrichtungs-tour.md) — Klacksy vi guida attraverso le impostazioni di base
- [Collaboratori e dati anagrafici](./erste-schritte/mitarbeiter-und-stammdaten.md) — Il fondamento di ogni pianificazione
- [Ruoli e permessi](./erste-schritte/rollen-und-rechte.md) — Supervisor e Admin, chiaramente distinti

**Pianificare**
- [Pianificazione automatica: il piano in pochi secondi](./planen/auto-planung.md) — Il piano in pochi secondi, con un clic
- [La griglia del piano: la vostra matrice temporale interattiva](./planen/plan-raster.md) — La matrice temporale interattiva con trascinamento (drag & drop)
- [Pianificazione modulare: dividi e domina](./planen/modulare-planung.md) — Suddividere grandi piani senza doppie prenotazioni
- [Workflow di approvazione: dalla bozza al piano vincolante](./planen/freigabe-workflow.md) — Dalla bozza al piano sigillato
- [Regole di pianificazione](./planen/planungsregeln.md) — Tempi di riposo, limiti e giorni lavorativi
- [Chiusura del periodo](./planen/periodenabschluss.md) — Chiudere i mesi in modo vincolante

**Ottimizzare e valutare**
- [Ottimizzazione di tour e percorsi](./optimieren/touren-und-routenoptimierung.md) — Il percorso migliore, automaticamente
- [Assenze a colpo d'occhio](./optimieren/absenzen-im-blick.md) — Ferie e malattia come panoramica Gantt
- [Monitor delle risorse](./optimieren/ressourcen-monitor.md) — Il carico di lavoro a colpo d'occhio
- [Festività e calendario](./optimieren/feiertage-und-kalender.md) — Precisione fino al comune
- [Relazioni tra competenze](./optimieren/skill-beziehungen.md) — Klacksy impara da solo quali delle sue capacità appartengono insieme
- [Report Designer](./optimieren/report-designer.md) — Creare report personalizzati

**L'assistente IA**
- [Klacksy: il vostro assistente IA per la pianificazione](./ki/klacksy-ki-assistent.md) — Pianificazione a voce, con libera scelta del modello

**Impostazioni**

*Dati anagrafici e organizzazione*
- [Filiali](./einstellungen/stammdaten-organisation/branches.md), [Paesi](./einstellungen/stammdaten-organisation/laender.md), [Indirizzo del gestore](./einstellungen/stammdaten-organisation/owner-address.md), [Impostazioni di base del lavoro](./einstellungen/stammdaten-organisation/work-setting.md), [Catalogo delle qualifiche](./einstellungen/stammdaten-organisation/qualifikationen.md), [Modelli di contratto](./einstellungen/stammdaten-organisation/vertragsvorlagen.md)

*Pianificazione e automazione*
- [Valori standard delle regole di pianificazione](./einstellungen/planung-automatisierung/planungsregeln-standardwerte.md), [Selezione del calendario](./einstellungen/planung-automatisierung/kalenderauswahl.md), [Impostazioni Wizard](./einstellungen/planung-automatisierung/wizard-einstellungen.md), [API di ottimizzazione dei percorsi](./einstellungen/planung-automatisierung/routenoptimierung-api.md), [Visibilità dei gruppi](./einstellungen/planung-automatisierung/gruppen-sichtbarkeit.md)

*Configurazione di Klacksy*
- [Provider LLM e modelli](./einstellungen/klacksy-konfiguration/llm-provider-und-modelle.md), [Personalità](./einstellungen/klacksy-konfiguration/persoenlichkeit.md), [Input/output vocale](./einstellungen/klacksy-konfiguration/sprachein-ausgabe.md), [Livelli di autonomia](./einstellungen/klacksy-konfiguration/autonomie-stufen.md), [Test di connessione del modello](./einstellungen/klacksy-konfiguration/modell-verbindungstest.md), [Suggerimenti di competenze](./einstellungen/klacksy-konfiguration/skill-vorschlaege.md), [Macro](./einstellungen/klacksy-konfiguration/makros.md)

*Comunicazione e integrazione*
- [Invio e-mail](./einstellungen/kommunikation-integration/email-versand.md), [Ricezione e-mail](./einstellungen/kommunikation-integration/email-empfang.md), [Traduzione DeepL](./einstellungen/kommunikation-integration/deepl-uebersetzung.md), [Identity Provider](./einstellungen/kommunikation-integration/identity-provider.md), [Punti di ripresa ERP](./einstellungen/kommunikation-integration/erp-uebernahmepunkte.md), [Canali di messaggistica](./einstellungen/kommunikation-integration/messaging-kanaele.md)

*Sistema e sicurezza*
- [Gestione utenti](./einstellungen/system-sicherheit/benutzerverwaltung.md), [Personal Access Token](./einstellungen/system-sicherheit/personal-access-tokens.md), [Conservazione dei dati](./einstellungen/system-sicherheit/datenaufbewahrung.md), [Aggiornamenti](./einstellungen/system-sicherheit/updates.md), [Plugin di funzionalità](./einstellungen/system-sicherheit/feature-plugins.md), [Plugin linguistici](./einstellungen/system-sicherheit/sprach-plugins.md), [Regole antispam](./einstellungen/system-sicherheit/spam-regeln.md), [Impostazioni generali](./einstellungen/system-sicherheit/allgemeine-einstellungen.md)

---
*Klacks è Open Source con licenza MIT — [Codice sorgente su GitHub](https://github.com/HeribertG/Klacks.Api).*
