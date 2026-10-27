---
sidebar_position: 3
---
# Aggiornamenti e rollback

Klacks si aggiorna da solo — con pacchetti firmati, un backup prima di ogni passaggio e un ritorno indietro automatico se qualcosa va storto. Questa pagina spiega che cosa accade e come potete intervenire.

## Come si svolge un aggiornamento

1. **Rilevare.** L'API interroga il manifest firmato che il produttore pubblica con ogni release. Se vi è indicata una versione più recente, l'aggiornamento risulta disponibile.
2. **Salvare.** Il servizio di aggiornamento crea un backup dei dati del database. Se la nuova versione contiene una migrazione, questo backup viene legato in modo stabile all'operazione di aggiornamento e resta disponibile per un successivo ritorno indietro.
3. **Scaricare e attivare insieme.** Il servizio scarica le nuove immagini per `klacks-api` **e** `klacks-ui` e commuta entrambe insieme — le due parti procedono di pari passo, mai in versioni diverse.
4. **Controllare.** Dopo la commutazione il servizio interroga il controllo di salute approfondito `/internal/health/deep`.
5. **Valutare.** Se la nuova versione è sana, l'aggiornamento risulta riuscito. Se non lo è, il servizio riporta automaticamente **entrambe** le parti alla versione precedente e controlla di nuovo. Se anche questo fallisce, lo stato viene registrato come fallito, in modo che lo vediate.

## Che cosa significa «firmato»

Il produttore firma ogni release e il vostro Klacks verifica la firma prima di accettare un pacchetto. La chiave pubblica e l'indirizzo del manifest sono valori fissi del produttore nel vostro file `.env`:

- `UPDATE_MANIFEST_BASE_URL` — fissato sulla fonte delle release del produttore
- `UPDATE_SIGNATURE_PUBLIC_KEY` — deve corrispondere alla chiave privata con cui il produttore firma

Questi due valori **non sono pensati per essere modificati**. Chi li sostituisce elimina la verifica e apre così proprio la falla che la firma chiude.

Il manifest contiene tra l'altro: il canale (`Stable` o `Beta`), la versione più recente, la versione minima a partire dalla quale è possibile un aggiornamento diretto (`MinUpgradableFrom`), la data di pubblicazione, se è inclusa una migrazione del database, gli artefatti, la firma e un rimando all'elenco delle modifiche.

`klacks-api` e `klacks-ui` sono **fissati a una versione esatta** nel file `.env`, affinché non divergano inosservati. Il servizio di aggiornamento stesso gira sempre su `latest` — volutamente non è nel manifest firmato e sostituisce soltanto api e ui.

## Impostazioni in esercizio

Nell'area amministrativa in **Sistema → Aggiornamenti**:

| Impostazione | Effetto |
|---|---|
| **Aggiornamenti automatici** | Gli aggiornamenti vengono rilevati e installati automaticamente |
| **Solo notifica** | Gli aggiornamenti vengono soltanto **rilevati**, ma non installati finché non li avviate voi |
| **Finestra di manutenzione** | Intervallo di tempo in cui possono essere eseguiti gli aggiornamenti automatici |

Queste impostazioni risiedono nel database e prevalgono sui valori iniziali del file `.env` (`UPDATE_AUTO_ENABLED`, `UPDATE_NOTIFY_ONLY`), che hanno effetto solo al primo avvio.

## Rollback manuale

Qui nessuno deve intervenire in automatico — un aggiornamento fallito viene riportato indietro dal servizio stesso. Se volete tornare deliberatamente indietro di un passo:

1. Nel file `.env` impostate `KLACKS_API_TAG` e `KLACKS_UI_TAG` sulla versione precedente.
2. Riattivate lo stack: `docker compose up -d klacks-api klacks-ui`.
3. **Se la versione difettosa ha già eseguito la migrazione**, ripristinate in aggiunta il backup corrispondente precedente all'aggiornamento — e tenete conto dell'insidia descritta nella pagina [Backup e ripristino](../backup-und-wiederherstellung/): le tabelle create dalla nuova versione sopravvivono al ripristino e bloccano l'avvio successivo.

## Da sapere

- **Il ritorno indietro non è una soluzione di emergenza, ma il caso normale.** Ogni operazione di aggiornamento ha uno stato: riuscita, riportata indietro oppure ritorno indietro fallito. Un aggiornamento riportato indietro è un'operazione normale e registrata — non un incidente.
- **Un aggiornamento riportato indietro non significa dati ripristinati.** Il rollback ripristina la versione, non i vostri dati. Le modifiche ai dati effettuate tra l'aggiornamento e il ritorno indietro provengono dallo stato del backup.
- **Potete verificare nei log:** `docker compose logs klacks-updater` mostra rilevamento, backup, commutazione e ritorno indietro.

---

*Domande sull'operatività? [Community Klacks su Discord](https://discord.gg/YRP8p2abVC).*
