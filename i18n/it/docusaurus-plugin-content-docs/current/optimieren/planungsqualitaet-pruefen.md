---
sidebar_position: 7
---

# Verificare la qualità della pianificazione: violazioni, lacune e collocazioni saltate

Dopo un'esecuzione degli assistenti di pianificazione, Klacks affianca al risultato tre tabelle diagnostiche: dove il piano urta contro una regola, dove manca una qualifica e che cosa non è stato affatto pianificato.

## Come funziona

I tre report compaiono nella finestra di dialogo del rispettivo assistente di pianificazione — non nella griglia del piano. Fanno parte del risultato di un'esecuzione dell'assistente e sono visibili solo agli amministratori, poiché la pianificazione automatica nel suo complesso richiede il ruolo di amministratore. Ogni report indica nel titolo il numero delle proprie voci e **non viene visualizzato affatto se non ha trovato nulla** — un riquadro assente è quindi una buona notizia.

**Come raggiungere le finestre di dialogo:** il pulsante a bacchetta magica nel piano turni avvia di default direttamente un'esecuzione di pianificazione, senza mostrare alcuna finestra di dialogo. Con **Ctrl+Maiusc+H**, gli amministratori commutano il pulsante in un menu a tendina con i singoli assistenti di pianificazione (Plan, Fuzzy Harmonizer, Holistic Harmonizer, Background Optimizer, Recovery) — solo tramite questo menu si aprono le finestre di dialogo con le tabelle diagnostiche.

**Le lacune di qualifica** compaiono insieme al risultato, quindi *prima* che lo applichiate. Colonne: gravità, turno, data, qualifica richiesta, motivo — più una colonna "Dipendente" non appena almeno una riga nomina una persona. Come motivo compare *Non posseduta*, *Scaduta* oppure *Livello troppo basso*. Dietro si nascondono due casi diversi: o un posto di turno è rimasto vuoto perché nessuna persona disponibile possiede la qualifica richiesta — in tal caso la riga non nomina alcuna persona; oppure una persona è rimasta assegnata a un turno per il quale non è qualificata — allora compare il suo nome. Se la qualifica manca solo nel sistema, registratela presso la persona; il [Catalogo delle qualifiche](../einstellungen/stammdaten-organisation/qualifikationen.md) descrive come gestire le qualifiche. Altrimenti pianificate qualcun altro oppure adattate il requisito del turno.

**Le violazioni di conformità** compaiono *dopo* che avete applicato il risultato. Colonne: data, collaboratore, commento; il commento indica in chiaro la regola violata insieme ai valori concreti. Le righe rosse sono errori, quelle gialle avvertenze e informazioni. Nei due assistenti di armonia il report mostra esclusivamente ciò che il nuovo scenario introduce **in aggiunta** rispetto al piano reale — e sopra indica quante di queste violazioni sono gestite in modalità Blocco. Queste impediscono l'accettazione dello scenario finché non vengono risolte o espressamente sovrascritte da una persona autorizzata.

**Le collocazioni saltate** esistono solo nell'assistente per la pianificazione dei turni, anch'esse dopo l'applicazione — e sono interamente rosse. Colonne: data, dipendente, turno, motivo. Qui non compare ciò che è stato pianificato, bensì ciò che Klacks deliberatamente **non** ha scritto: assegnazioni che avrebbero violato una regola gestita in modalità Blocco. Il motivo appare come breve categoria ("Riposo troppo breve", "Troppi giorni consecutivi", "Collisione oraria"…). A seconda della situazione, Klacks propone sotto alle persone autorizzate di applicare comunque l'esecuzione con override; tutte le altre ricevono l'indicazione di rieseguire l'assistente con l'override attivato oppure di chiederlo a una persona autorizzata. Ogni override viene registrato.

Quali regole vengono verificate e con quale severità lo stabilite nelle [Regole di pianificazione](../planen/planungsregeln.md); come nasce il piano è descritto in [Pianificazione automatica: il piano in pochi secondi](../planen/auto-planung.md).

## Da sapere

- Una voce bloccata non fa cadere l'intero piano: vengono meno solo le assegnazioni interessate, mentre le voci corrette della stessa persona vengono comunque scritte.
- Per la gravità delle lacune di qualifica vale una regola semplice: **errore** solo quando una qualifica contrassegnata come obbligatoria manca del tutto. Una qualifica scaduta, un livello troppo basso e qualsiasi requisito facoltativo compaiono come **avviso**.
- Un posto di turno vuoto compare nelle lacune di qualifica solo se davvero nessuna persona disponibile poteva essere presa in considerazione. Se è rimasto vuoto per altri motivi si tratta di normale sottocopertura, che qui non viene segnalata.
- Se la pianificazione automatica viene eseguita come passaggio complessivo, Klacks comunica il risultato solo con una breve notifica, con il numero delle lacune di qualifica — le tabelle dettagliate appartengono alle finestre di dialogo dei singoli assistenti.
- I report sono semplici viste: non sono modificabili e non cambiano nulla. La correzione avviene nella [griglia del piano: la vostra matrice temporale interattiva](../planen/plan-raster.md) oppure con una nuova esecuzione.

---
*Provatelo subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
