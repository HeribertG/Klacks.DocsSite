---
sidebar_position: 1
---
# Requisiti di sistema e architettura

Klacks gira come stack Docker sul vostro server. Questa pagina descrive quali servizi si avviano e come dimensionare l'host — comprese le misurazioni su cui si basa la raccomandazione.

## L'architettura: cinque servizi

Il pacchetto on-premise avvia esclusivamente ciò che serve per l'esercizio:

| Servizio | Immagine | Compito |
|---|---|---|
| `klacks-postgres` | `pgvector/pgvector:pg17` | Database; l'estensione vettoriale è già inclusa |
| `klacks-api` | `ghcr.io/heribertg/klacks-api` | Backend; migra e popola il database all'avvio |
| `klacks-ui` | `ghcr.io/heribertg/klacks-ui` | Interfaccia Angular, servita tramite nginx |
| `klacks-updater` | `ghcr.io/heribertg/klacks-updater` | installa gli aggiornamenti firmati (api e ui insieme) |
| `klacks-proxy` | `nginx:alpine` | Terminazione TLS e reverse proxy |

I servizi interni del produttore (archivio di conoscenza per lo sviluppo, marketing, marketplace, pgAdmin, certbot, interfaccia Blazor) volutamente **non** sono inclusi. Come gestore vedete quindi soltanto il vostro stack.

## Che cosa deve offrire l'host

- **8 GB di RAM e 4 vCPU** come minimo (vedere il calcolo qui sotto).
- Docker Desktop (Windows/macOS) oppure Docker Engine con Compose v2 (Linux), **amd64 o arm64**.
- Porte **80 e 443** libere — modificabili tramite `HTTP_PORT` e `HTTPS_PORT`.
- Accesso HTTPS **in uscita** a `ghcr.io` (immagini) e `github.com` (manifest di aggiornamento firmato).
- Facoltativo: accesso a `klacks-software.ch:7553` per i pacchetti paese e i plug-in linguistici del marketplace.

## Memoria: perché 8 GB, e che cosa succede su host più piccoli

Klacks esegue i suoi due modelli di ricerca (embedder e reranker) **localmente all'interno del processo** `klacks-api`. Entrambe le sessioni ONNX restano in modo permanente in memoria — non vengono scaricate dopo ogni domanda.

Misurato sull'host di produzione del produttore il 12 settembre 2026:

- Carico di base del processo: ca. 1'017 MB
- Embedder: ca. 1'171 MB
- Reranker: ca. 116 MB
- Somma: un plateau di circa **2'304 MB**
- Con un limite di 2'560 MB il kernel ha terminato il container a 2'471 MB (OOM).

Per questo il Compose fornito imposta **3'584M** e 3,0 CPU per `klacks-api`, con lo scaricamento a riposo disattivato. Calcolato sull'intero stack: 3'584M (api) + 2'048M (postgres) + 3 × 256M (ui, updater, proxy) = **6'400 MiB**; il resto degli 8 GB resta per il sistema operativo e la cache dei file.

**Host più piccolo, circa 3 GB per `klacks-api`:** nel file `.env` impostate **entrambe** le righe seguenti — mai la riga della memoria da sola:

```bash
KLACKS_API_MEMORY_LIMIT=2560M
KLACKS_API_IDLE_UNLOAD_MINUTES=30
```

Lo scaricamento a riposo libera una sessione dopo 30 minuti senza accessi. Il prezzo: la domanda successiva la ricarica (circa 2,2–2,9 s per l'embedder, circa 1,1 s per il reranker). I valori tra 1 e 5 vengono portati a 5, e `0` significa: non scaricare mai.

## CPU: meno core rallentano soltanto, non rompono nulla

La ricerca funziona anche con meno core, ma diventa più lenta — il reranker è il passaggio che richiede più calcolo. Misurato: 2'994–3'163 ms per 25 candidati con 3,0 CPU contro 4'339–4'860 ms con 1,5 CPU, dove il servizio ha inoltre trascorso 7,15 s in regime limitato. Per un host più piccolo:

```bash
KLACKS_API_CPU_LIMIT=1.5
```

Le quote di CPU dello stack si sommano volutamente a 4,75 su 4 vCPU: una quota è un limite superiore, non una prenotazione, e i servizi non raggiungono mai il picco contemporaneamente.

## Da sapere

- **Password e chiavi restano stabili.** `POSTGRES_PASSWORD` viene impressa nel volume dei dati al primo avvio — una modifica successiva rende orfano il database. `JWT_SECRET` firma le sessioni; modificarlo disconnette tutti gli utenti. L'installer conserva entrambe a ogni nuova esecuzione.
- **`COMPOSE_PROJECT_NAME=klacks`** è cablato in modo fisso, affinché host e servizio di aggiornamento puntino allo stesso progetto Compose indipendentemente dal nome della cartella. Dopo l'installazione non modificarlo più.
- **`KnowledgeIndex__WarmupEnabled=false` non è un'opzione di memoria.** Sposta soltanto la costruzione della ricerca dall'avvio alla prima richiesta di chat; nell'esercizio continuo le sessioni sono presenti altrettanto. Utile solo se l'host all'avvio non regge per mancanza di memoria.
- **Più di un'istanza API?** Allora serve un backplane SignalR. Klacks non ne fornisce uno: mettete a disposizione voi stessi un servizio compatibile con RESP (per esempio Valkey — con licenza BSD-3 dalla versione 7.4, a differenza di Redis) e abilitate l'upstream sticky (`ip_hash`) predisposto nel template nginx. Senza backplane gira esattamente un'istanza `klacks-api`, come in ogni installazione attuale.
- **Profili paese:** l'installer conosce 30 profili: `ae`, `at`, `ch`, `cn`, `cz`, `de`, `dk`, `es`, `fi`, `fr`, `gb`, `gr`, `id`, `il`, `it`, `jp`, `kr`, `li`, `my`, `nl`, `no`, `pl`, `pt`, `ro`, `sa`, `se`, `th`, `tw`, `us`, `vn`. Al primo avvio un profilo imposta lingua, paese/regione e fuso orario, calendario dei giorni festivi, fine settimana e inizio della settimana, limiti dell'orario di lavoro, diritto alle ferie, maggiorazioni, il sistema di destinazione predefinito dell'esportazione paghe (per la Svizzera per esempio `abaconnect-ch`) nonché modelli di settore — per lo Spitex, ad esempio, il modello di regole di pianificazione «CH Spitex Standard». Senza profilo Klacks parte in modo neutro e configurate tutto a mano.

---

*Domande sull'operatività? [Community Klacks su Discord](https://discord.gg/YRP8p2abVC).*
