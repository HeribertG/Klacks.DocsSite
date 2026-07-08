---
sidebar_position: 5
---

In Impostazioni > Punti di acquisizione ERP configurate come gli ordini provenienti da un sistema ERP esterno vengono acquisiti automaticamente in Klacks sotto forma di file XML.

## Come funziona

**Tre modalità di consegna:** il sistema ERP può depositare i file nell'area di archiviazione del drop point (Klacks li preleva automaticamente secondo una pianificazione), inviarli direttamente via HTTP-POST a un endpoint di importazione (autenticato con un token di accesso), oppure un'amministratrice può caricare manualmente il file XML su questa pagina tramite trascinamento (drag-and-drop).

**Il drop point** è la casella di posta centrale, gestita da Klacks stesso, per tutti i file di importazione — mostra tre aree: In entrata (in attesa della prossima esecuzione), Elaborati (archivio) ed Errori (file non validi con la relativa motivazione dell'errore, con possibilità di reimportazione). Una pianificazione (espressione cron, di default oraria) e un interruttore di attivazione per la messa in pausa controllano il recupero automatico.

**I token di accesso** sono necessari solo quando un sistema ERP consegna i file tramite push. Ogni token inizia con `klacks_erp_`, è valido da 1 a 730 giorni (365 di default) e viene mostrato in chiaro **solo una volta al momento della creazione**. Un token di questo tipo vale esclusivamente per l'endpoint di importazione, non per il resto dell'accesso API, e può essere revocato in qualsiasi momento.

**Elaborazione:** gli ordini vengono associati a un cliente esistente o appena creato in base all'ID del sistema sorgente e al riferimento cliente esterno (o, in alternativa, a azienda/CAP/via), e vengono creati inizialmente come bozza, che i pianificatori devono controllare e sigillare. Una nuova consegna modificata di un ordine già sigillato chiude automaticamente quello vecchio e crea una nuova versione collegata; consegne ripetute invariate non generano alcuna azione.

## Cose utili da sapere

- Gli ordini singoli errati (ad es. senza giorno della settimana o con riferimento duplicato) vengono respinti, senza bloccare gli altri ordini validi dello stesso file; l'intero file finisce comunque nell'area errori, in modo che nulla venga trascurato.
- I file elaborati vengono archiviati, non eliminati.
- Il formato XML esatto (campi obbligatori, formati di data, logica dei giorni della settimana) è documentato nel manuale direttamente sulla pagina delle impostazioni, oltre che tramite un file di esempio scaricabile.
- Questa configurazione si trova nella sezione Impostazioni ed è quindi riservata ai ruoli amministrativi.

---
*Provate subito: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
