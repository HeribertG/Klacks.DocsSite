---
sidebar_position: 9
---
# Domande frequenti

Le domande poste più spesso prima del primo impiego — con risposte oneste, anche quando la risposta è «non ancora».

## Provare e iniziare

**Devo installare Klacks per vederlo?**
No. Il [Playground](https://play.klacks-software.ch) è un'istanza pubblica con dati dimostrativi; vi accedete con `admin@test.com` / `P@ssw0rt1` e avete pieni diritti di amministratore. Il database viene ripristinato ogni giorno alle 04:00, ora svizzera — non inseritevi dati personali reali.

**Quanto dura un'installazione?**
L'installer è un unico comando. Genera le password e il certificato, fissa la versione attuale, avvia lo stack e attende finché tutto è in salute. La parte più lunga è il download delle immagini. I requisiti sono elencati in [Requisiti di sistema](../betrieb/systemvoraussetzungen/).

**Perché devo creare un mio account amministratore?**
Perché l'account fornito ha una password nota pubblicamente. Klacks vi lascia accedere con esso esattamente una volta e poi richiede il vostro account; dopodiché l'account predefinito viene disattivato. È voluto, non è un errore.

## Operatività

**Dove si trovano i miei dati?**
Sulla vostra infrastruttura. Klacks non invia i vostri dati al produttore. Se integrate un modello IA come servizio esterno, per **quel** servizio valgono naturalmente le sue condizioni — la scelta del modello spetta a voi.

**Ho assolutamente bisogno di un provider cloud?**
No, è questo il nucleo dell'on-premise: lo stack gira sul vostro server. Serve soltanto l'accesso **in uscita** alle fonti dei pacchetti e degli aggiornamenti (`ghcr.io`, `github.com`). Un esercizio completamente senza accesso a Internet al momento **non** esiste — le installazioni in reti isolate sono una tappa di sviluppo non ancora realizzata.

**Come eseguo il backup dei miei dati?**
Da soli — il backup è affar vostro. Come si fa e quale volume non dovete assolutamente dimenticare è spiegato in [Backup e ripristino](../betrieb/backup-und-wiederherstellung/).

**Che cosa succede se un aggiornamento va storto?**
Il servizio di aggiornamento esegue prima il backup del database, commuta insieme le nuove versioni e controlla poi lo stato di salute. Se la nuova versione non è sana, esegue automaticamente il rollback. Dettagli in [Aggiornamenti e rollback](../betrieb/updates-und-rollback/).

**Klacks funziona sul mio hardware esistente?**
Come valore indicativo: **8 GB di RAM e 4 vCPU**. Per host più piccoli esistono impostazioni documentate che liberano memoria — al prezzo che la prossima domanda a Klacksy richiede un po' più di tempo.

**Klacks è compatibile con il mio identity provider?**
Sì. Klacks può essere collegato a un provider di identità esistente invece di gestire account propri — vedere [Identity Provider](../einstellungen/kommunikation-integration/identity-provider/).

## Funzioni

**Per quali settori è adatto Klacks?**
È pensato per aziende con turni e servizi: assistenza ambulatoriale e Spitex, ospedali, servizi di sicurezza, servizi di pulizia e di manutenzione domestica, nonché logistica.

**Quali lingue parla l'interfaccia?**
La documentazione è disponibile in 25 lingue, tra cui tedesco, inglese, francese, italiano, spagnolo, polacco, giapponese, cinese (semplificato e tradizionale), arabo ed ebraico — arabo ed ebraico anche con la direzione di lettura da destra a sinistra.

**Devo decidermi per un modello IA?**
Provider e modello li scegliete voi e potete cambiarli. Come configurarli e verificarli è spiegato in [Provider LLM e modelli](../einstellungen/klacksy-konfiguration/llm-provider-und-modelle/) e [Test di connessione del modello](../einstellungen/klacksy-konfiguration/modell-verbindungstest/).

**Quanto costa Klacks?**
Il codice sorgente è rilasciato sotto la GNU Affero General Public License v3 (AGPL-3.0) — potete leggerlo, modificarlo ed eseguirlo in proprio. Se offrite una versione modificata ad altri tramite una rete, dovete rendere accessibile anche a questi utenti il codice sorgente modificato sotto la AGPL-3.0. Tutto ciò che va oltre (domande, scambio, sviluppo ulteriore) passa attraverso la [community Klacks su Discord](https://discord.gg/YRP8p2abVC) e il [repository pubblico del codice sorgente](https://github.com/HeribertG/Klacks.Api).

**Klacks è finito?**
No, e non lo dichiara da nessuna parte. Klacks è in costruzione, ma viene sviluppato pubblicamente ed è effettivamente in esercizio — nel Playground potete verificare in qualsiasi momento lo stato attuale di persona, invece di credere a una descrizione.

## Collaborare

**Ho trovato un errore o ho una domanda.**
Il modo più rapido è la [community su Discord](https://discord.gg/YRP8p2abVC). Per gli errori del software una segnalazione va fatta nel [repository](https://github.com/HeribertG/Klacks.Api). Sono sempre utili: la versione, l'ultimo passaggio prima dell'errore e le ultime righe dei log — vedere [Risoluzione dei problemi](../betrieb/fehlerbehebung/).

**Posso contribuire anch'io?**
Il codice sorgente è aperto e la documentazione si trova nella stessa casa. Le segnalazioni di punti poco chiari sono gradite quanto il codice.

---

*Manca la vostra domanda? [Community Klacks su Discord](https://discord.gg/YRP8p2abVC).*
