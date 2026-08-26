---
sidebar_position: 7
---

# Trasferimento dell'esportazione paghe

Alla sigillatura di un periodo delimitato per gruppo, Klacks può trasferire automaticamente i relativi dati paghe a un sistema paghe esterno. Questa pagina spiega cosa serve perché ciò avvenga e perché il trasferimento a volte sembra non consegnare nulla — il caso di supporto più frequente su questa funzione.

## Come funziona

**Requisito: un componente aggiuntivo per l'esportazione paghe.** Il trasferimento automatico a un sistema paghe non è una funzione principale — richiede un componente aggiuntivo separato, che deve essere installato **e** attivo in Impostazioni > Plugin funzionali. Se il componente manca o è semplicemente disattivato, il trasferimento non produce assolutamente nulla: nessun file, nessun avviso, nessuna traccia visibile per voi. Questo è più rigido di un formato di esportazione disattivato nelle impostazioni di esportazione, che lascia almeno una traccia nel log del server — qui non c'è nemmeno quella.

**Trasferimento unico (idempotenza).** Il trasferimento automatico viene eseguito una sola volta per ogni combinazione di gruppo, sistema di destinazione e intervallo di date esatto — questo evita che gli stessi dati paghe arrivino per errore due volte al sistema paghe. Se riaprite un periodo già sigillato, correggete qualcosa e lo sigillate di nuovo, il secondo trasferimento viene saltato senza alcun avviso: per esattamente questa combinazione esiste già una traccia di trasferimento, e la riapertura non la rimuove.

**Anche un download manuale conta allo stesso modo.** Un download paghe manuale, effettuato su richiesta, per lo stesso gruppo/sistema di destinazione/intervallo di date crea la stessa traccia di un trasferimento automatico. Un download manuale eseguito prima del trasferimento automatico lo "consuma" per il periodo interessato, esattamente come farebbe un trasferimento automatico precedente.

| Perché non è arrivato nulla (di nuovo)? | Traccia presente? | Blocca un download manuale successivo? |
|---|---|---|
| Componente aggiuntivo non installato/attivo | no | no |
| Già trasferito per esattamente questa combinazione | sì (visibile nella scheda "Registro" della chiusura periodo) | no |

**Due punti di precisione:**

- Un download manuale **non** recupera alcuna correzione del formato di esportazione eventualmente impostata dal supporto — utilizza sempre i valori predefiniti, anche se per il sistema di destinazione esiste una correzione attiva che si applicherebbe nel percorso automatico.
- Il blocco a uso unico è esatto: scatta solo con gruppo identico, sistema di destinazione identico e data di inizio/fine identica. Un intervallo di date diverso o un sistema di destinazione diverso non viene bloccato da un trasferimento precedente.

**Se dopo la sigillatura non arriva nulla, o se occorre far pervenire dati corretti:** verificate prima di tutto se il componente aggiuntivo corrispondente è installato e attivo in Impostazioni > Plugin funzionali. Dopo una riapertura e una correzione, il modo affidabile per far arrivare i dati corretti al sistema paghe è l'**esportazione manuale** nell'area di chiusura periodo (scheda "Esportazioni") — non è soggetta né al blocco del componente aggiuntivo né al blocco a uso unico del trasferimento automatico. Poiché anche questa non recupera una correzione del formato di esportazione, in questo caso verificate manualmente i dati esportati rispetto a un'eventuale correzione attiva.

## Cose utili da sapere

- Ogni trasferimento richiede un periodo sigillato e delimitato per gruppo — come si sigilla un periodo è descritto nella pagina [Chiusura del periodo](../../planen/periodenabschluss.md). Lì la sigillatura e la riapertura sono riservate ai ruoli amministrativi.
- Questa pagina descrive l'**esportazione** dei dati paghe da Klacks verso un sistema paghe. Il flusso inverso — l'**importazione** di ordini da un sistema ERP in Klacks — è descritto dai [Punti di ripresa ERP](./erp-uebernahmepunkte.md).
- I componenti aggiuntivi vengono gestiti centralmente in Impostazioni > Plugin funzionali: installazione, attivazione/disattivazione o rimozione completa.
- Un componente aggiuntivo disattivato rimane installato, ma blocca il trasferimento automatico in modo altrettanto completo di uno non installato.

---
*Provate subito: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
