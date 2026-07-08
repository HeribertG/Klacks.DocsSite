---
sidebar_position: 5
---

Le regole di pianificazione definiscono le condizioni quadro per la pianificazione automatica dei turni — orari di lavoro, tempi di riposo e capacità, che Klacks rispetta nella distribuzione dei turni.

## Come funziona

Una regola di pianificazione viene assegnata a un **contratto**. I valori limite definiti valgono quindi per tutti i collaboratori con questo contratto. Ogni regola comprende quattro aree:

**Giorni lavorativi e tempi di riposo**
- Max. giorni lavorativi: regola flessibile per la lunghezza preferita del blocco, prima che venga pianificato un giorno di riposo (ad es. «5 giorni di lavoro, poi riposo») — una violazione non rende invalido il piano, lo rende solo meno ottimale
- Min. giorni di riposo tra due blocchi di lavoro
- Min. ore libere tra due giorni lavorativi (tempo di riposo dalla fine di un giorno lavorativo all'inizio del successivo)
- Max. intervallo ottimale tra i turni in ore
- Max. giorni lavorativi consecutivi senza giorno di riposo

**Limiti orari**
- Max. ore giornaliere e max. ore settimanali
- Ore di lavoro giornaliere (orario previsto)
- Soglia per gli straordinari: da questo numero di ore settimanali le ore sono considerate straordinari

**Ore mensili**
- Ore garantite (numero minimo assicurato al collaboratore per mese)
- Ore minime e massime per mese
- Ore a tempo pieno (numero di ore mensili corrispondente a un'occupazione a tempo pieno)

**Ferie**
- Giorni di ferie per anno solare

## Da sapere

- Alla creazione di una nuova regola vengono ripresi automaticamente i **valori predefiniti dalle impostazioni** (Regole di pianificazione — Valori predefiniti); potete poi adattare individualmente ogni valore.
- Le regole di pianificazione agiscono tramite il contratto — non è necessario gestirle per singola persona. Se una regola cambia, questo interessa tutti i collaboratori con quel contratto.
- La soglia per gli straordinari e l'orario previsto sono due cose diverse: l'orario previsto è lo standard giornaliero, la soglia per gli straordinari è il valore limite settimanale.
- "Max. giorni lavorativi" (preferenza flessibile per la lunghezza del blocco) e "Max. giorni lavorativi consecutivi" (limite massimo rigido, mai superabile) sono due regole distinte — da non confondere.

---
*Provatelo subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
