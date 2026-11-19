---
sidebar_position: 1
---

# Installazione e Playground

Klacks lo provate in un minuto — e lo installate in pochi minuti. Nessuna registrazione, nessuna trattativa commerciale.

## Playground: il terreno di gioco per conoscere Klacks

Il Playground non è una variante di installazione, bensì un'istanza pubblica di Klacks con dati di esempio per giocarci liberamente e senza impegno — da qui il nome. È disponibile su **[play.klacks-software.ch](https://play.klacks-software.ch)**:

- **Login:** `admin@test.com` · **Password:** `P@ssw0rt1`
- Avete pieni diritti di amministratore — provate tutto.
- I dati di esempio comprendono circa 5'000 clienti e sono semplici dati dimostrativi.
- **Non inserite dati personali reali.** Il database viene ripristinato ogni giorno alle 04:00 ora svizzera (02:00 UTC) a uno stato fisso.

## Installazione: sul proprio server (On-Premise)

Il pacchetto On-Premise include tutto: immagini Docker, installer, database, HTTPS e aggiornamenti automatici. Lo scaricate esclusivamente dal [Klacks Store](https://klacks-software.ch/store/?culture=it).

Nel Klacks Store scegliete, se volete, il vostro settore e scaricate lo ZIP del vostro paese. L'installer genera autonomamente password e certificati, scarica le immagini Docker più recenti e attende che tutto sia operativo.

### Linux: passo dopo passo

Vi serve una macchina con almeno 8 GB di RAM, le porte 80 e 443 libere, accesso a Internet e un account con diritti `sudo`. Docker non deve essere già installato (vedere il passo 4).

1. **Scaricare lo ZIP dal Klacks Store.** Dalla pagina del vostro paese nel [Klacks Store](https://klacks-software.ch/store/?culture=it), se volete con il vostro settore.
2. **Estrarre in una cartella fissa**, ad esempio `~/klacks`, non in `Downloads` o `/tmp`. Gli aggiornamenti automatici lavorano poi proprio con questa cartella; se viene eliminata o spostata, smettono di funzionare. L'installer vi avvisa se viene eseguito da `Downloads` o `/tmp`.

   ```bash
   unzip 'klacks-onprem-*.zip' -d ~/klacks
   ```

3. **Aprire un terminale nella cartella.** Nel file manager di solito basta un clic destro nella cartella (l'etichetta dipende dall'ambiente desktop), oppure digitate `cd ~/klacks`.
4. **Avviare l'installer:**

   ```bash
   sudo bash ./install-de.sh
   ```

   Nel pacchetto per la Germania lo script si chiama `install-de.sh`; negli altri pacchetti per paese il nome contiene il rispettivo codice del paese, quindi in generale `sudo bash ./install-*.sh`. L'installer ha bisogno di `sudo` per poter accedere a Docker e, se necessario, installarlo. Senza `sudo` funziona solo se Docker è già installato e il vostro utente appartiene al gruppo `docker`.

   **Se manca Docker**, l'installer propone di installare Docker Engine con lo script ufficiale di `get.docker.com`. Questo avviene solo dopo la vostra conferma (`[y/N]`, il valore predefinito è no) e solo su Ubuntu, Debian, Fedora, CentOS e RHEL; a tal fine la macchina ha bisogno di `curl` o `wget` e di accesso a Internet. Su altre distribuzioni installate voi stessi Docker Engine con il plugin Compose seguendo le [istruzioni di Docker](https://docs.docker.com/engine/install/). Se l'installer viene eseguito senza terminale, `INSTALL_DOCKER=yes` risponde sì alla domanda. Docker stesso non raccomanda questo script per l'uso in produzione; per un server di produzione è meglio installare Docker voi stessi. Il vecchio `docker-compose` (versione 1) non è supportato, serve il plugin `docker compose`.
5. **Attendere.** L'installer genera le password e un certificato autofirmato, scarica le immagini e avvia lo stack. Al primo avvio l'API migra il database; l'installer attende per questo fino a dieci minuti. Alla fine compare `Klacks is up at https://…` e sotto di esso **il vostro codice di configurazione** (`Your setup code`, dodici caratteri in tre gruppi di quattro). Annotatelo; si trova anche nel file `.env` nella cartella di installazione come `KLACKS_SETUP_CODE`.
6. **Aprire Klacks:** `https://localhost` (con un altro nome di server o un'altra porta HTTPS, l'indirizzo indicato nel messaggio dell'installer). Il browser segnala il certificato autofirmato; confermate l'avviso. Poi create con il codice di configurazione il vostro account amministratore, vedere [Il primo accesso](#first-login).
7. **Gli aggiornamenti** avvengono poi automaticamente tramite il servizio di aggiornamento incluso. Per questo non dovete riavviare l'installer.

Se Docker vede meno di 7 GiB di memoria, una prima installazione si interrompe. Come configurare un host più piccolo è descritto in [Requisiti di sistema](../betrieb/systemvoraussetzungen.md).

### Windows

Su Windows si avvia `install-*.ps1` invece di `install-*.sh`.

### Opzioni: nome del server e profilo paese

Con un profilo paese facoltativo, l'installer configura già al primo avvio lingua, giorni festivi, limiti dell'orario di lavoro, maggiorazioni e modelli di settore:

```bash
sudo SERVER_NAME=klacks.example.com REGION=de bash ./install.sh
```

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1 -ServerName klacks.example.com -Region de
```

Su Linux le variabili vanno **dopo** `sudo`: di norma `sudo` non passa all'installer le variabili che lo precedono. Con lo script del pacchetto per paese la chiamata appare così: `sudo SERVER_NAME=klacks.example.com bash ./install-de.sh`.

Il pacchetto per paese del Klacks Store contiene il profilo del suo paese. Gli script forniti `install-*.sh` e `install-*.ps1` impostano già `REGION` o `-Region` sul relativo codice del paese — nel pacchetto per la Germania, ad esempio, `install-de.sh` e `install-de.ps1`. Se richiamate direttamente `install.sh` o `install.ps1`, `REGION` o `-Region` deve essere questo codice del paese; senza di esso l'installer non configura alcun profilo paese.

## PC d'ufficio con Windows: anche nel Microsoft Store

Per un singolo PC d'ufficio con Windows esiste un setup dedicato che funziona senza Docker. Lo trovate nel [Klacks Store](https://klacks-software.ch/store/?culture=it) nella pagina del vostro paese e anche nel [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (voce "Klacks"). Nei due store si tratta dello stesso setup. Installato dal Microsoft Store, applica il paese impostato in Windows; lì non scegliete un settore e, se per quel paese non esiste un profilo, il setup non ne configura nessuno. Le installazioni su server, Docker e Linux, così come i pacchetti per paese e per settore, sono disponibili solo nel Klacks Store.

Sul PC d'ufficio le nuove versioni arrivano tramite Impostazioni > [Aggiornamenti software](../einstellungen/system-sicherheit/updates.md) in Klacks, anche se Klacks è stato installato dal Microsoft Store. Un setup più recente non può essere installato sopra un'installazione esistente.

## Il primo accesso: il vostro account amministratore {#first-login}

Un Klacks appena installato non ha ancora un account vostro. Alla prima apertura nel browser compare quindi subito la pagina «Configura il tuo account amministratore», ancora prima di qualsiasi accesso: nome e cognome, indirizzo e-mail (diventa il vostro nome di accesso) e una password, inserita due volte; le regole per la password compaiono in tempo reale accanto al campo.

Su un server (Docker) la pagina richiede in aggiunta il **codice di configurazione**, anche se aprite Klacks nel browser sul server stesso. Il codice è stato mostrato dall'installer alla fine dell'installazione; si trova anche nel file `.env` nella cartella di installazione come `KLACKS_SETUP_CODE`. Vale solo per questa singola configurazione. Un codice errato viene rifiutato («Il codice di configurazione non corrisponde. Controllalo e riprova.»).

Non appena salvate, il vostro account riceve il ruolo di amministratore e l'account di prova incluso viene disattivato definitivamente nella stessa operazione; Klacks vi fa poi accedere automaticamente con il vostro account; se non riesce, accedete con le nuove credenziali. Finché è impostato un codice di configurazione, l'account di prova incluso non può comunque essere usato per accedere dal browser. Segue poi la pagina «Paese e settore».

Finché il vostro account non è creato, il server blocca ogni altra richiesta con il codice di errore `SETUP_REQUIRED` (HTTP 403). Dietro non c'è alcun guasto: manca solo la configurazione.

- Sul PC d'ufficio con Windows non serve alcun codice di configurazione se aprite Klacks nel browser sullo stesso PC. Da un altro computer compare solo la pagina di accesso.
- Se Klacks mostra invece la pagina di accesso, ad esempio in un'installazione senza codice di configurazione, l'output dell'installer indica l'account incluso; anche in questo caso Klacks vi porta direttamente alla creazione del vostro account amministratore.
- Se due persone inviano il modulo contemporaneamente, solo la prima diventa amministratore; la seconda finisce sulla pagina di accesso.

Solo nel Playground e in un ambiente di sviluppo locale questo gate è volutamente disattivato; lì l'account incluso resta in vigore.

## Utile da sapere

- **Requisiti:** almeno 8 GB di RAM e 4 vCPU, Docker con Compose v2 (su Linux l'installer installa Docker su richiesta), porte 80 e 443 libere e accesso HTTPS in uscita verso `ghcr.io` e `github.com`. I dettagli e gli esempi di calcolo per host più piccoli si trovano in [Requisiti di sistema](../betrieb/systemvoraussetzungen.md).
- Un servizio di aggiornamento incluso mantiene automaticamente aggiornata la vostra installazione — con backup prima di ogni aggiornamento e rollback automatico in caso di problemi. Come funziona nel dettaglio è spiegato in [Aggiornamenti e rollback](../betrieb/updates-und-rollback.md).
- I vostri dati si trovano nel vostro database, sulla vostra infrastruttura. Alcune funzioni, tuttavia, richiamano servizi esterni — quali, lo trovate nella sezione successiva.
- Richiamare di nuovo l'installer è innocuo, ma non è un aggiornamento: mantiene password, certificato e la versione stabilita alla prima installazione e riavvia lo stack (su Linux di nuovo con `sudo`, se avete installato prima con `sudo`). Così ripristinate uno stack che non funziona più. Le nuove versioni le installa il servizio di aggiornamento, non l'installer.
- Se portate un certificato vostro, collocate `server.crt` e `server.key` prima dell'installazione in `nginx/certs/` nella cartella di installazione; altrimenti l'installer genera un certificato autofirmato.
- Il backup del database lo eseguite regolarmente voi stessi — come si fa è descritto in [Backup e ripristino](../betrieb/backup-und-wiederherstellung.md).

## Quali servizi esterni richiama Klacks

I vostri dati si trovano sui vostri server. Per alcune funzioni Klacks richiama comunque, nel funzionamento standard, servizi pubblici su Internet. Gli indirizzi di questi servizi sono incorporati in modo fisso; al momento non potete indicare un vostro server di geocodifica, di routing o di mappe.

| Servizio | A cosa serve | Che cosa viene inviato | Predefinito | Disattivare |
|---|---|---|---|---|
| Nominatim di OpenStreetMap (`nominatim.openstreetmap.org`) | Convertire gli indirizzi in coordinate: al salvataggio di un indirizzo, per la sede dell'azienda, nella pianificazione dei giri e nei servizi in background per indirizzi e sedi dei gruppi | Via, CAP, località e paese, senza nomi di persone; per le sedi dei gruppi il nome della località o del gruppo | attivo | `BackgroundServices__AddressGeocoding=false` e `BackgroundServices__GroupGeocoding=false` disattivano solo i servizi in background. Al salvataggio di un indirizzo la geocodifica avviene comunque. |
| Server OSRM pubblico (`router.project-osrm.org`) | Tempi di percorrenza, distanze e percorsi sulla mappa | Coordinate dei luoghi di intervento, senza nomi | attivo finché non è registrata alcuna chiave OpenRouteService; il browser interroga inoltre OSRM direttamente se il server Klacks non fornisce alcun percorso | non previsto |
| OpenRouteService (`api.heigit.org`) | come OSRM, in più bicicletta e a piedi | Coordinate dei luoghi di intervento, senza nomi | solo con una chiave API registrata | Rimuovere la chiave in Impostazioni > OpenRoute |
| Tessere della mappa (OpenStreetMap, OpenStreetMap.de o CARTO) | Visualizzazione della mappa nella dashboard | dal browser: indirizzo IP e area di mappa visualizzata | attivo non appena la mappa viene mostrata | fornitore selezionabile nella mappa, un server di tessere proprio no |
| GitHub (`github.com`) e GitHub Container Registry (`ghcr.io`) | Installazione e aggiornamenti automatici: manifesto di rilascio e immagini Docker | normali richieste di download, nessun dato di pianificazione | attivo | — |
| Marketplace di Klacks (`klacks-software.ch/store`) | Pacchetti di lingua e di paese | Codice del paese, codice del pacchetto o termine di ricerca | nella ricerca di pacchetti e nel caricamento di un profilo paese | indirizzo configurabile tramite `LanguagePlugins__MarketplaceUrl` |
| Hugging Face (`huggingface.co`) | Download una tantum dei modelli di ricerca per Klacksy | nessun dato dei clienti (download di file) | alla prima necessità | — |
| Open-Meteo (`api.open-meteo.com`, `air-quality-api.open-meteo.com`) | Indicazione di meteo e qualità dell'aria nel widget di benvenuto, richiesta meteo tramite Klacksy | Coordinate del browser (se consentite) o della sede dell'azienda | attivo | `Assistant__Ambient__Enabled=false` disattiva solo l'indicazione di qualità dell'aria e giorni festivi, non la richiesta meteo del benvenuto |
| Nager.Date (`date.nager.at`) | Indicazione dei giorni festivi nel widget di benvenuto | Codice del paese | attivo | `Assistant__Ambient__Enabled=false` |
| Fornitori di IA nel cloud (ad es. OpenAI, Anthropic, Google, DeepSeek) | Klacksy e funzioni in background assistite dall'IA (ad es. classificazione delle sedi dei gruppi) | Richieste con il contesto necessario tratto dai vostri dati | solo se è configurato un modello cloud | usare un modello locale |
| Servizi di voce, ricerca e traduzione (ad es. Deepgram, Groq, AssemblyAI, Edge TTS, OpenAI TTS, ElevenLabs, Google Cloud TTS, DeepL, ricerca sul web) | Input e output vocale, ricerca sul web, traduzione | Audio o testo | solo se usato o configurato; il riconoscimento vocale del browser funziona, a seconda del browser, tramite il suo servizio online | non usare la funzione |

Gli interruttori nella colonna «Disattivare» sono variabili d'ambiente del container `klacks-api`; inseritele in `docker-compose.yml` sotto `environment:` di questo servizio. Una voce nel solo file `.env` non basta, perché il servizio non lo legge come `env_file`.

Con un modello di IA locale nessuna richiesta al modello linguistico arriva a un fornitore di IA esterno. Per gli altri servizi di questa tabella ciò non cambia nulla.

---

*Domande sull'installazione? [Community Klacks su Discord](https://discord.gg/YRP8p2abVC).*
