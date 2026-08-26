---
sidebar_position: 8
---

# Klacksy come membro proattivo del team

Klacksy non aspetta che gli venga chiesto. Una volta all'ora osserva l'attività in secondo piano e segnala ciò che nota: servizi non coperti, contratti in scadenza, periodi in ritardo, dati anagrafici mancanti. Fin dove possa spingersi lo stabiliscono gli amministratori per ogni singolo tipo di rilievo — nell'impostazione di fabbrica si limita a segnalare e non agisce mai da solo.

Da non confondere con i [Livelli di autonomia](../einstellungen/klacksy-konfiguration/autonomie-stufen.md): lì si tratta di quanta conferma serve a Klacksy quando siete **voi** a chiedergli qualcosa in chat. Qui vale il contrario — si tratta di ciò che fa **senza che glielo si chieda**.

## Come funziona

**Che cos'è un rilievo:** un rilievo è una constatazione che Klacksy ha fatto da solo — ad esempio «questo servizio fra tre giorni è ancora scoperto» oppure «questo periodo di conteggio è in ritardo da una settimana». A tale scopo un passaggio in secondo piano percorre ogni ora circa una dozzina di regole di controllo. Il riconoscimento stesso è programmato in modo fisso: nessun modello linguistico decide se qualcosa è un rilievo — la stessa regola fornisce lo stesso risultato, indipendentemente dal fornitore di IA che utilizzate.

**Quattordici tipi di rilievo sono governabili,** fra cui Servizio non coperto, Lacuna di disponibilità, Contratto in scadenza, Dati anagrafici mancanti, Ordine aperto, Chiusura di periodo imminente, Periodo in ritardo, Scostamento dalle ore target, Contenitore vuoto, Conflitto di blocco e Scenario in sospeso. Due di essi non nascono dal passaggio orario, bensì dall'importazione degli ordini ERP.

**I tre passi — per ogni tipo di rilievo:** in Impostazioni > Klacksy > «Margine d'azione di Klacksy» (modalità esperto, solo amministratori) ogni tipo di rilievo occupa una propria riga con la colonna «Passo massimo»:

- **Solo segnalare** — Klacksy avvisa, nulla di più. È l'impostazione di fabbrica per ogni tipo di rilievo.
- **Predisporre uno scenario** — Klacksy affianca inoltre una soluzione già pronta sotto forma di scenario, che una persona deve soltanto accettare.
- **Eseguire** — Klacksy risolve il rilievo da sé e successivamente ne rende conto.

Dal passo «Predisporre uno scenario» in poi deve essere indicata una persona responsabile: l'azione viene eseguita con i suoi diritti ed è lei a ricevere il rapporto. Si aggiungono, per ogni riga, budget che limitano la frequenza con cui Klacksy può agire (di fabbrica al massimo 5 azioni al giorno e 3 entro 60 minuti) e un interruttore «Attivo». Quest'ultimo regola esclusivamente l'azione autonoma — se e come una segnalazione vi raggiunge resta la vostra impostazione di notifica personale.

**Il limite rigido nel programma:** un passo superiore ha effetto soltanto dove per quel tipo di rilievo esiste davvero una risoluzione automatica. Se manca, si resta alla segnalazione — a prescindere dall'impostazione e anche quando qualcuno delega il singolo rilievo a Klacksy. Questo limite è scritto nel codice del programma e non può essere aperto dall'interfaccia. Attualmente è prevista una sola risoluzione: per il tipo «Contenitore vuoto» Klacksy può creare da sé il modello di slot mancante.

**Dove arrivano i rilievi:** sul pulsante Klacksy nell'intestazione un contatore mostra le note non lette. Un clic apre la barra laterale, dove i rilievi sono raccolti sotto il titolo «Mentre eri via…». Per ogni segnalazione sono disponibili «Mostrami» (salta al punto interessato), «Utile» e «Nascondi» — quest'ultimo a scelta con un motivo («Non voglio mai suggerimenti di questo tipo», «Questa volta il suggerimento era sbagliato», «Già risolto») oppure senza. Dove è consentito si aggiunge «Fallo tu»: un'autorizzazione per il singolo caso che porta proprio quel rilievo a «Predisporre uno scenario». In chat potete anche chiedere direttamente a Klacksy quali rilievi sono attualmente aperti.

**Quando un rilievo è risolto:** la riga interessata riporta, nella vista Contenitori dell'elenco dei servizi, la dicitura «Risolto da Klacksy il …» — sia quando Klacksy ha eseguito la risoluzione da sé, sia quando una persona ha approvato uno scenario predisposto da Klacksy. Se esegue Klacksy stesso, parte inoltre un rapporto alla persona responsabile.

**L'arresto d'emergenza:** sopra la chat gli amministratori vedono l'interruttore «Klacksy agisce in autonomia: ON/OFF». Disattivarlo riporta immediatamente ogni tipo di rilievo a «solo segnalare» — comprese le autorizzazioni per singolo caso già concesse. Le segnalazioni non si fermano: l'arresto d'emergenza blocca l'azione, non la segnalazione. Lo stesso interruttore si trova anche nella scheda delle impostazioni.

## Da sapere

- Di fabbrica ogni tipo di rilievo è su «Solo segnalare» — Klacksy agisce soltanto quando un amministratore alza consapevolmente un passo. Per questo l'arresto d'emergenza non serve: non è attivo di fabbrica e resta di riserva come freno immediato.
- Le segnalazioni vanno solo agli amministratori e ai pianificatori autorizzati. Chi può vedere soltanto determinati gruppi riceve solo i rilievi di quei gruppi; gli amministratori vedono tutto. I pianificatori ricevono i rilievi, ma non vedono l'impostazione dei passi.
- Il passo «Predisporre uno scenario» vale solo per le risoluzioni rappresentabili come scenario. La risoluzione oggi prevista non rientra fra queste — per essa ha effetto soltanto «Eseguire».
- La scheda delle impostazioni e l'interruttore di autonomia richiedono diritti di amministratore; senza di essi lo stato di autonomia non è consultabile.
- Il ritmo orario è fisso e non regolabile dall'interfaccia; il primo passaggio parte due minuti dopo l'avvio del programma.

---
*Provatelo subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
