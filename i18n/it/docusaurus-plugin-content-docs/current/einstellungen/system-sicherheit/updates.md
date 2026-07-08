---
sidebar_position: 4
---

# Aggiornamenti

In Impostazioni > Aggiornamenti vedete la versione di Klacks attualmente installata e l'ultima versione disponibile, controllate il comportamento degli aggiornamenti automatici e, se necessario, avviate manualmente un aggiornamento o un rollback.

## Come funziona

**Stato:** La scheda mostra la versione attuale, se è disponibile una versione più recente, nonché l'operazione di aggiornamento in corso o eseguita per ultima con il relativo stato.

**Avviare un aggiornamento o eseguire un rollback:** Con "Installa ora" avviate manualmente un aggiornamento disponibile; "Annulla" annulla l'ultima operazione di aggiornamento eseguita con successo. Entrambe le azioni sono bloccate finché è già in corso un'operazione.

**Configurare l'automazione:**
- **Attiva aggiornamenti automatici** attiva o disattiva il controllo e l'esecuzione automatica degli aggiornamenti.
- **Solo notifica** non avvia alcun aggiornamento automatico, ma segnala quando è disponibile una nuova versione.
- **Canale** sceglie tra `Stable` e `Beta` come fonte degli aggiornamenti.
- **Intervallo di controllo** (ore) e una **finestra di manutenzione** (orario di inizio/fine) stabiliscono con quale frequenza e in quale intervallo di tempo viene effettuato il controllo o l'installazione.
- **Numero di backup conservati** determina quanti backup vengono mantenuti prima di una migrazione, prima che quelli più vecchi vengano eliminati automaticamente.

**Cronologia:** Una tabella elenca le ultime operazioni di aggiornamento con tipo, versione di destinazione, stato e momento della richiesta.

## Utile da sapere

- Prima di ogni migrazione Klacks crea automaticamente un backup — senza backup non viene applicata alcuna migrazione.
- Se il controllo di integrità fallisce dopo un aggiornamento, Klacks esegue automaticamente il rollback alla versione precedente (ripristino del backup → attivazione della vecchia versione → nuovo controllo); solo se questo rollback stesso fallisce è necessario un intervento manuale.
- Un rollback manuale ripristina in modo mirato il backup relativo all'ultima operazione riuscita e ne attiva la versione di partenza — non semplicemente "una versione indietro".
- Aggiornamento e rollback sono azioni riservate agli amministratori (Admin-only).

---
*Provatelo subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
