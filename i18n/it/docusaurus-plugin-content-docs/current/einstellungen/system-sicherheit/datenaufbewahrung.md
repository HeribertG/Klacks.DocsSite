---
sidebar_position: 3
---

# Conservazione dei dati

In Impostazioni > Conservazione dei dati si stabilisce per quanto tempo i record eliminati — collaboratori, indirizzi, gruppi, turni, orari di lavoro, assenze, pause e altro ancora — rimangono nel sistema prima di essere rimossi in modo irreversibile.

## Come funziona

**Eliminazione in due fasi:** Quando si elimina un record in Klacks, questo viene inizialmente solo contrassegnato con un flag di eliminazione logica (soft delete) — marcato come eliminato, ma ancora fisicamente presente. Solo allo scadere del termine configurato qui, un servizio in background eseguito quotidianamente rimuove le righe contrassegnate come eliminate **fisicamente e in modo irreversibile** dal database — su tutte le tabelle interessate, non solo per una singola area.

**Impostazione del periodo di conservazione:** Il campo di immissione accetta valori compresi tra 30 e 36'500 giorni (da circa 1 mese a 100 anni); accanto ad esso, Klacks mostra il periodo anche in anni/mesi. Il valore predefinito è 3'650 giorni (10 anni).

## Da sapere

- Un accorciamento del periodo influisce anche sui record già esistenti ed eliminati da tempo: tutto ciò che è più vecchio del nuovo periodo verrà rimosso alla prossima esecuzione del servizio in background — prima di accorciare il periodo, verificare se questo è effettivamente desiderato.
- L'eliminazione fisica è definitiva — successivamente non è più possibile alcun ripristino, nemmeno tramite il supporto.
- Questa impostazione costituisce il fondamento tecnico dei termini di cancellazione descritti nell'informativa sulla privacy; si applica globalmente a tutti i tipi di dati che supportano l'eliminazione logica e non è configurabile per singolo modulo.

---
*Prova subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
