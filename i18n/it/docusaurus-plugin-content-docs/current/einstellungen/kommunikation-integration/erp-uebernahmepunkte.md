---
sidebar_position: 5
---

# Punti di ripresa ERP

In Impostazioni > Importazione (visibile solo in modalità esperto), scheda «Punti di consegna ERP», configurate come gli ordini provenienti da un sistema ERP esterno vengono acquisiti automaticamente in Klacks sotto forma di file XML.

## Come funziona

**Tre modalità di consegna:** il sistema ERP può depositare file XML in una cartella sul server Klacks (Klacks li preleva automaticamente secondo una pianificazione, non appena un file è rimasto invariato per 10 secondi), inviarli direttamente via HTTPS-POST a un endpoint di importazione (autenticato con un token di accesso), oppure un'amministratrice può caricare manualmente il file XML su questa pagina tramite trascinamento (drag-and-drop; l'importazione parte subito). Non esiste SFTP; vengono importati solo file XML nel formato `ErpOrderImport`.

**Il drop point** è la casella di posta centrale, gestita da Klacks stesso, per tutti i file di importazione — mostra tre aree: In entrata (ricevuti o attualmente in importazione), Elaborati (con un riepilogo per file) ed Errori (file illeggibili o non validi con la relativa motivazione dell'errore, con possibilità di reimportazione o eliminazione). Una pianificazione (espressione cron, di default oraria) e un interruttore di attivazione per la messa in pausa controllano il recupero automatico.

**Quale modalità si adatta a quale installazione?** Su un PC d'ufficio (installazione Windows) la modalità più naturale è la cartella; la cartella predefinita è `C:\ProgramData\Klacks\ErpImport\erp\orders`. È protetta: solo SYSTEM e gli amministratori possono scriverci. Un amministratore deve concedere all'account con cui gira l'esportazione ERP il permesso «Modifica» esattamente sulla cartella `erp\orders`, non sull'intera cartella `ProgramData\Klacks`. Su un server Docker proprio la cartella è una normale cartella del server: il file Compose monta la cartella `erp-import` accanto a `docker-compose.yml` (modificabile tramite `KLACKS_ERP_IMPORT_HOST_DIR`) su `/app/ErpImport`; all'interno del container il percorso della cartella è `/app/ErpImport/erp/orders`. L'installazione segnala il percorso del server tramite `KLACKS_ERP_IMPORT_HOST_PATH` (lo imposta l'installer); un ERP sul computer del server scrive direttamente in questa cartella, e l'account con cui gira l'esportazione ha bisogno del permesso di scrittura esattamente su questa cartella. Le installazioni precedenti avevano un volume con nome (named volume); il suo contenuto viene copiato una sola volta nella cartella (vedi il README On-Prem, sezione «Upgrading from a named volume»). Nella scheda compare il percorso della cartella (su Docker la cartella del server, sotto di essa il percorso nel container) con un pulsante per copiarlo. In un'installazione ospitata da noi non c'è accesso alle cartelle del server: push con token di accesso o caricamento manuale.

**I token di accesso** sono necessari solo quando un sistema ERP consegna i file tramite push. Ogni token inizia con `klacks_erp_`, è valido da 1 a 730 giorni (365 di default) e viene mostrato in chiaro **solo una volta al momento della creazione**. Un token di questo tipo vale esclusivamente per l'endpoint di importazione, non per il resto dell'accesso API, e può essere revocato in qualsiasi momento.

**Elaborazione:** gli ordini vengono associati a un cliente esistente o appena creato in base all'ID del sistema sorgente e al riferimento cliente esterno (o, in alternativa, a azienda/CAP/via), e vengono creati inizialmente come bozza, che i pianificatori devono controllare e sigillare. Una nuova consegna modificata di un ordine già sigillato chiude automaticamente quello vecchio e crea una nuova versione collegata; consegne ripetute invariate non generano alcuna azione.

## Cose utili da sapere

- Gli ordini singoli errati (ad es. senza giorno della settimana o con riferimento duplicato) vengono respinti, senza bloccare gli altri ordini validi dello stesso file; il file compare comunque in Elaborati, contrassegnato da un simbolo di avviso, e gli ordini respinti possono essere espansi con la relativa motivazione.
- I file non vengono spostati né archiviati: restano nella cartella e il loro stato è salvato nel database. I file elaborati con successo vengono eliminati automaticamente dopo 90 giorni; i file in Errori restano finché non vengono reimportati o eliminati.
- Il formato XML esatto (campi obbligatori, formati di data, logica dei giorni della settimana) è documentato nel manuale direttamente sulla pagina delle impostazioni, oltre che tramite un file di esempio scaricabile.
- Questa configurazione si trova nella sezione Impostazioni ed è quindi riservata ai ruoli amministrativi.

---
*Provate subito: [Klacks Playground](https://play.klacks-software.ch) — login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
