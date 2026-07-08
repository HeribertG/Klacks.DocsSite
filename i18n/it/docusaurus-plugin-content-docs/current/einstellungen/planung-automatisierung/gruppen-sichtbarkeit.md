---
sidebar_position: 5
---

In Impostazioni > Visibilità dei gruppi per utente stabilite quali gruppi — e quindi quali dati correlati — un singolo utente può vedere.

## Come funziona

L'elenco mostra tutti gli utenti con il nome e il numero di gruppi radice ad essi assegnati (visibili). Un clic sul numero apre un modulo con un elenco di caselle di controllo di tutti i gruppi radice; qui contrassegnate quali gruppi questo utente può vedere. Se un gruppo radice viene abilitato, ciò vale automaticamente anche per tutti i suoi sottogruppi.

Gli amministratori sono esclusi da questa restrizione: per loro il pulsante è disattivato, il numero visualizzato corrisponde sempre al numero totale di tutti i gruppi radice — gli amministratori vedono sempre tutto.

## Cose utili da sapere

- Per un utente normale (non amministratore) senza alcuna assegnazione, "0 gruppi assegnati" significa: questo utente attualmente non vede **nulla** nelle aree con ambito di gruppo (ad es. dashboard, elenco clienti) — non si tratta di un malfunzionamento, ma della diretta conseguenza dell'assegnazione mancante.
- Eccezione: se nel sistema attualmente **non esiste alcun** gruppo, tutti gli utenti vedono tutto — le installazioni senza struttura a gruppi non necessitano quindi di alcuna manutenzione di questa impostazione.
- Create prima la struttura dei gruppi nei dati anagrafici, prima di effettuare qui le assegnazioni — senza gruppi esistenti non c'è nulla da selezionare qui.
- Questa impostazione controlla la **visibilità** dei dati, non le **autorizzazioni** di base di un ruolo — ruoli/diritti vengono gestiti indipendentemente da essa.

---
*Provate subito: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
