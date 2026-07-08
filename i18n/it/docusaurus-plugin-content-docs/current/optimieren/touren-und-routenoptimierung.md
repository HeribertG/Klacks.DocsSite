---
sidebar_position: 1
---

# Ottimizzazione di tour e percorsi

Per gli interventi mobili — tour Spitex, giri di sicurezza, oggetti da pulire, consegne — Klacks non pianifica solo *chi*, ma anche *in quale ordine*.

## Come funziona

Ogni luogo di intervento è registrato con il proprio indirizzo; Klacks conosce quindi i percorsi. Un **algoritmo delle colonie di formiche** (un metodo di ottimizzazione collaudato per i problemi di instradamento) calcola dagli indirizzi degli interventi l'ordine più sensato:

1. **Registrare gli indirizzi** — inserirli una sola volta presso i luoghi di intervento
2. **Ottimizzare l'ordine** — Klacks stabilisce la sequenza più breve e sensata; deviazioni e tragitti a vuoto vengono eliminati
3. **Visualizzare sulla mappa** — il tour completato appare come percorso, a scelta per auto, bicicletta o a piedi

Se per un intervento sono registrate fasce orarie fisse (ad es. solo al mattino), questo viene considerato nella pianificazione dei tour — ma non è una garanzia rigida del rispetto dell'orario.

## Da sapere

- Per il calcolo di distanze e tempi di percorrenza, Klacks può integrare il servizio esterno OpenRouteService (le coordinate GPS vengono trasmesse in forma anonimizzata) — a seconda della configurazione dell'istanza.
- L'ottimizzazione dei tour è un modulo autonomo per i turni container; la pianificazione automatica generale del piano di servizio valuta indipendentemente copertura, equità e conformità alle regole.
- Il mezzo di trasporto è selezionabile per ogni tour — pratico per i tour urbani in bicicletta accanto a quelli rurali in auto.
- Se qualcuno si assenta, Klacks mostra subito chi è qualificato e disponibile.

![Vista timeline per la pianificazione dei tour](/img/app-timeline-de.png)

---
*Provatelo subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
