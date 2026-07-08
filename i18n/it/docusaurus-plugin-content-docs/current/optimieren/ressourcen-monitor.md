---
sidebar_position: 3
---

Il monitor delle risorse mostra a colpo d'occhio la situazione del carico di personale di un gruppo (o di tutti i gruppi) nell'anno selezionato — una barra per ogni giorno, l'intero andamento annuale su 365 giorni.

## Come funziona

La rappresentazione segue il modello consolidato nella pianificazione del personale «Capacity vs. Workload Chart» (noto nella letteratura di project management come «Resource Histogram»). Gli elementi:

- **Barre verdi — Turni:** numero di turni pianificati nel giorno. Ogni turno conta come una posizione lavorativa; i turni container contano come 1.
- **Barre grigie — Assenze:** numero di collaboratori assenti, impilate sopra le barre verdi. Una registrazione completa di ferie o malattia conta come 1, una mezza giornata come 0,5 — anche nel fine settimana.
- **Linea rosa punteggiata — Disponibilità operativa desiderata:** quanti collaboratori sarebbero mediamente disponibili se venissero rispettati i giorni lavorativi settimanali desiderati (standard: 5 giorni di lavoro, 2 di riposo). Questo è l'obiettivo di pianificazione.
- **Linea rossa tratteggiata — Disponibilità operativa massima:** il massimo fisico/legale con il numero massimo consentito di giorni lavorativi consecutivi (standard: 6). Si trova sempre allo stesso livello o sopra la linea rosa.
- **Linea blu — Numero di collaboratori:** l'intero organico con contratto attivo nel rispettivo giorno (Headcount).

**Come leggerlo:** se il bordo superiore delle barre verdi si avvicina alla linea rosa, l'organico è impiegato in modo ottimale. La differenza tra la linea blu e il bordo superiore delle barre impilate è la vostra riserva.

Con i pulsanti freccia in alto a destra cambiate l'anno; tramite la selezione del gruppo restringete la visualizzazione a una sede o a un team.

## Da sapere

- Valore empirico: il bordo superiore delle barre grigie di assenza non dovrebbe superare un terzo del divario tra turni e organico totale — altrimenti la riserva operativa è a rischio e i picchi di malattia o ferie diventano difficili da coprire.
- I valori sono stime e approssimazioni, non un conteggio esatto — danno un'idea della disponibilità.
- I turni provengono dalla pianificazione, non dalla realizzazione effettiva — per questo sono visibili anche i turni futuri.
- Con un contratto 24/7 la linea rosa viene distribuita uniformemente sulla settimana (ca. 0,71 per persona e giorno di calendario); con un contratto da lunedì a venerdì è pari a 1,0 nei giorni lavorativi e a 0 nel fine settimana.

---
*Provatelo subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
