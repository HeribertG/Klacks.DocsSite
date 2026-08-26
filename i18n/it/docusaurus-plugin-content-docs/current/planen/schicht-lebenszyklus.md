---
sidebar_position: 8
---

# Il ciclo di vita di un turno: dall'ordine al segmento

Prima ancora di poter essere coperto, un turno attraversa quattro fasi — dall'ordine liberamente modificabile all'ordine sigillato immutabile, poi al turno pianificabile e ai suoi segmenti. Il senso è questo: ciò che è stato concordato resta consultabile in modo duraturo, mentre ciò che la quotidianità ripianifica resta comunque flessibile.

## Come funziona

**1. Ordine — liberamente modificabile.** Ogni nuovo turno comincia qui. Nella pagina dei servizi il pulsante **+ Nuovo ordine** apre la maschera di inserimento; potete rielaborare l'ordine tutte le volte che volete, tutti i campi sono aperti. Nel piano di impiego non compare ancora — e quindi non è nemmeno possibile pianificarvi collaboratori. Non è però una semplice bozza: è un ordine vero e proprio, solo non ancora sigillato. Nell'elenco dei servizi Klacks colloca questa fase sotto **Ordini**. Passando a **Servizi Pianificabili**, il pulsante si chiama **+ Nuovo servizio**: crea un ordine senza riferimento al cliente — per lavoro generale che nessuno commissiona né paga dall'esterno. La scheda *Indirizzo* viene allora a mancare; anche questo turno attraversa le quattro fasi.

**2. Ordine sigillato — immutabile.** Quando l'ordine è definito, lo sigillate con il pulsante a forma di lucchetto nella scheda *Generale*. Da quel momento è bloccato e resta in modo duraturo come immagine vincolante dell'accordo — anche quando l'attività corrente ha da tempo ripianificato il turno. Dopo il salvataggio l'operazione è **irreversibile**. Quali ordini abbiano già raggiunto questa fase lo mostra nell'elenco dei servizi la casella **Mostra solo ordini sigillati**.

**3. Turno pianificabile — qui si pianifica.** La sigillatura crea in un solo passaggio, e una volta sola, il turno pianificabile: una copia collegata all'ordine. Solo questo turno compare nella [griglia del piano: la vostra matrice temporale interattiva](../planen/plan-raster.md), solo su di esso si possono assegnare collaboratori — e resta modificabile. Un salvataggio successivo non genera una seconda copia. Nell'elenco dei servizi lo trovate sotto **Servizi Pianificabili**.

**4. Segmenti — il turno suddiviso.** Un turno pianificabile si può suddividere, per esempio per giornate o per fasce orarie. Il turno esistente diventa esso stesso uno dei segmenti, gli altri nascono accanto. Tutti i segmenti sono a loro volta pianificabili e portano poi la copertura effettiva. L'ordine sigillato non ne viene toccato — resta il contratto sullo sfondo.

**Quando il pulsante lucchetto diventa attivo:** resta grigio finché l'ordine non è abbastanza completo per la pianificazione — abbreviazione, nome e data di inizio compilati, almeno un giorno della settimana e almeno un gruppo selezionati, e il numero di attività così come il numero di dipendenti per turno maggiori di zero. Il suo tooltip lo dice senza equivoci: «Dopo il blocco, l'ordine è immutabile e pronto per la pianificazione.»

**L'unica eccezione all'immutabilità:** se un ordine sigillato non ha una data di fine — per esempio perché si prolunga di continuo o perché il suo termine è ancora aperto —, potete impostare questo unico campo anche in un secondo momento. A condizione che a partire dalla data scelta non siano ancora pianificati turni. Successivamente anche questo campo è bloccato come tutti gli altri.

**Un esempio:** il 1° maggio inserite l'ordine «Matrimonio Müller» e lo affinate nell'arco di due giorni. Il 3 maggio il cliente conferma — sigillate. Klacks fissa l'ordine e accanto crea il turno pianificabile. Il 4 maggio la pianificazione vi inserisce due collaboratori, il 5 maggio il turno viene suddiviso in due segmenti. Il 1° giugno il periodo viene chiuso e le voci sui segmenti sono bloccate. In tutto questo l'ordine sigillato del 3 maggio non è mai stato modificato.

**Le schede della maschera di inserimento.** La maschera è composta da schede che aprite e richiudete singolarmente; il salvataggio e l'annullamento passano dalla barra di salvataggio in fondo all'area di lavoro. Una parte delle schede compare solo dopo aver attivato l'interruttore **Expert Mode** nella scheda *Generale*:

- **Generale** — abbreviazione (al massimo 6 caratteri; Klacks la propone automaticamente mentre digitate il nome), nome, data di inizio e data di fine nonché note. Qui si trovano anche il pulsante lucchetto e l'interruttore della modalità esperto.
- **Gruppo** — assegna il turno a uno o più gruppi. Almeno un gruppo è obbligatorio; finché non ne è selezionato nessuno, un riquadro informativo lo ricorda.
- **Qualifiche richieste** — quali [qualifiche](../einstellungen/stammdaten-organisation/qualifikationen.md) il turno esige, ciascuna con un livello minimo (da Basso a Esperto) e l'indicazione se sia vincolante.
- **Ore e Giorni Feriali** — ora di inizio, ora di fine e durata, oltre ai giorni della settimana in cui il turno ricorre, più due regole per i giorni festivi. In modalità esperto potete invece gestire il turno come fascia oraria: si colloca allora liberamente nella finestra tra ora di inizio e ora di fine, e ciò che conta è la durata indicata.
- **Macro** (modalità esperto) — collega il turno a una [macro](../einstellungen/klacksy-konfiguration/makros.md) per il calcolo della durata e del salario.
- **Indirizzo** — il cliente, ossia il luogo di impiego, cercato per nome o numero identificativo. La colonna dei filtri a destra restringe esattamente questa ricerca.
- **Caratteristiche Speciali** (modalità esperto) — utilizzo sporadico con la relativa periodicità, briefing e debriefing, tempo di viaggio prima e dopo, nonché il numero di dipendenti e di attività per turno.
- **Spese predefinite** (modalità esperto) — le spese che ricorrono regolarmente su questo turno, ciascuna con denominazione, importo e l'indicazione se sia tassabile.

Come i turni pianificabili vengano poi coperti è descritto in [Pianificazione automatica: il piano in pochi secondi](../planen/auto-planung.md) e nella [griglia del piano: la vostra matrice temporale interattiva](../planen/plan-raster.md).

## Da sapere

- **Sigillare significa qui qualcosa di diverso rispetto al workflow di approvazione.** Sigillare un ordine congela la *descrizione* del turno — che cosa c'è da fare, in modo duraturo. Il [Workflow di approvazione: dalla bozza al piano vincolante](../planen/freigabe-workflow.md) e la [chiusura periodo](../planen/periodenabschluss.md) bloccano invece le *voci su giornate concrete*. Le due cose procedono indipendentemente l'una dall'altra.
- **Gli ordini nascono anche automaticamente.** Oltre alla maschera di inserimento, la seconda via è l'[import ERP](../einstellungen/kommunikation-integration/erp-uebernahmepunkte.md): anche gli ordini che arrivano da lì atterrano dapprima come ordini non sigillati e devono essere verificati e sigillati.
- **Un ordine dimenticato si fa sentire.** Se un ordine resta non sigillato poco prima del suo inizio, [Klacksy come membro proattivo del team](../ki/klacksy-proaktiv.md) lo segnala con il tipo di rilievo «Ordine aperto» — perché non sigillato significa: non pianificabile.
- **I servizi contenitore funzionano un po' diversamente.** Un contenitore è un involucro che raggruppa più turni parziali; non ha quindi né cliente né indirizzo, e le schede *Indirizzo* e *Spese predefinite* vengono a mancare. La scheda *Caratteristiche Speciali* mostra per esso solo l'opzione dell'utilizzo sporadico. La casella «È un contenitore» si trova in modalità esperto nella scheda *Generale* e può essere spuntata solo finché l'ordine non è sigillato.
- **I turni sporadici e quelli a fascia oraria non vengono conteggiati.** Entrambi non compaiono deliberatamente nella barra dei servizi del [monitor delle risorse](../optimieren/ressourcen-monitor.md), perché non rappresentano un fabbisogno giornaliero fisso.

---
*Provatelo subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
