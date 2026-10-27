---
sidebar_position: 4
---
# Risoluzione dei problemi

Quando Klacks non fa ciò che dovrebbe, la strada passa quasi sempre per i log dei due servizi sospetti — e per la domanda se il processo sia davvero ancora in esecuzione.

## Prima di tutto: vedere che cosa gira

```bash
docker compose ps
docker compose logs klacks-api
docker compose logs klacks-updater
```

`docker compose ps` mostra quali servizi sono in esecuzione e se sono in salute. `klacks-api` scrive avvio, migrazione e popolamento del database; `klacks-updater` scrive rilevamento, backup, commutazione e ritorno indietro di un aggiornamento.

## Un vecchio log non è una prova

Una trappola che è già costata tempo: il file di log può provenire da un avvio **precedente**. Chi vi trova un errore e lo scambia per quello attuale cerca nel posto sbagliato.

Controllate quindi se il log **cresce ancora**:

```bash
wc -c klacks-api.log; sleep 10; wc -c klacks-api.log
```

Se la dimensione resta uguale (crescita di 0 byte), il processo non scrive più — non è in esecuzione, indipendentemente da ciò che c'è nel log. Solo una nuova ripetizione dell'errore, con un log che dimostrabilmente tiene il passo, è una base affidabile.

## Messaggi frequenti e che cosa significano

| Messaggio | Significato | Che fare |
|---|---|---|
| `no matching manifest for linux/amd64` | L'immagine non esiste per la vostra architettura | Il produttore deve pubblicare l'immagine per più architetture (amd64 **e** arm64) |
| `pull access denied` | Il pacchetto nel registro dei pacchetti è privato | Ripetere l'installazione con le credenziali: `-GhcrUser`/`-GhcrToken` su Windows, `GHCR_USER`/`GHCR_TOKEN` su Linux |
| `errorCode: SETUP_REQUIRED`, HTTP `403` | Il gate di setup dell'amministratore è attivo | Accedere con `admin@test.com` e creare il proprio account amministratore — vedere [Installazione e Playground](../../erste-schritte/installation-und-playground/) |
| Il container termina senza stack trace gestito con codice di uscita `-1` (`0xffffffff`) | Un crash **nativo** in una libreria C/C++ che nessun `try/catch` di C# può intercettare | Guardare l'output del container su **stderr** — lì si trova l'innesco effettivo, non nel log dell'applicazione |
| Il container viene terminato anche se nel log non c'è alcun errore dell'applicazione | Il kernel ha terminato il processo per mancanza di memoria (OOM) | Controllare i limiti di memoria — vedere [Requisiti di sistema](../systemvoraussetzungen/) |
| `42P07: relation "…" already exists` dopo un aggiornamento fallito | Una migrazione ha creato tabelle che il ripristino non ha rimosso | Vedere l'insidia in [Backup e ripristino](../backup-und-wiederherstellung/) |
| L'API muore pochi secondi dopo `Application started` | L'avvio riesce, il crash arriva dopo — tipico di una libreria nativa | Stessa pista del codice di uscita `-1`: controllare stderr, non il log dell'applicazione |

Su un **computer Windows on ARM** (Snapdragon X) la ricerca eseguita in locale è fallita in passato proprio per una libreria nativa di questo tipo: l'API segnalava `Application started`, ma pochi secondi dopo non era più raggiungibile dall'interfaccia. Se osservate questo schema su un host Windows ARM, il primo sguardo va all'output della console (non al log su file) — lì compariva il messaggio del rilevamento della CPU interessata.

## Come circoscrivere un errore

1. **Che cosa avete fatto esattamente**, e che cosa vi aspettavate? L'ultimo passaggio prima dell'errore è metà della risposta.
2. **Quali servizi sono in esecuzione?** `docker compose ps`.
3. **Il log cresce ancora?** Vedere sopra.
4. **Che cosa c'era per ultimo su stderr?** Per i crash nativi, l'unica fonte.
5. **Che cosa è cambiato per ultimo?** Un aggiornamento, un'impostazione, un nuovo certificato.

## Da sapere

- **Un servizio avviato presto e un servizio sano nel log sembrano uguali.** Se nell'interfaccia non arriva nulla, controllate se il processo è ancora in esecuzione — non solo che cosa ha scritto per ultimo.
- **In caso di crash senza errore dell'applicazione il primo sospetto è la memoria**, soprattutto dopo un aggiornamento con nuovi modelli di ricerca.
- **Informazioni utili per una segnalazione:** la versione interessata (`KLACKS_API_TAG`/`KLACKS_UI_TAG` dal file `.env`), l'output di `docker compose ps`, le ultime righe di entrambi i log e l'ultimo passaggio prima dell'errore. Per favore **senza** password e chiavi del file `.env`.
- Nel dubbio chiedete alla community: [Community Klacks su Discord](https://discord.gg/YRP8p2abVC).

---

*Domande sull'operatività? [Community Klacks su Discord](https://discord.gg/YRP8p2abVC).*
