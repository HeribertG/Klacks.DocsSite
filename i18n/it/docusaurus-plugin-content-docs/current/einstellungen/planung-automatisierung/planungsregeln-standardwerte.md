---
sidebar_position: 1
---

In Impostazioni > Regole di pianificazione (valori predefiniti) stabilite i valori che vengono precompilati automaticamente alla creazione di un nuovo contratto o di una nuova regola di pianificazione.

## Come funziona

La pagina raggruppa diversi gruppi di valori predefiniti:

- **Ore di lavoro:** ore di lavoro giornaliere (orario previsto), soglia degli straordinari (ore/settimana), ore mensili garantite, minime e massime, oltre al numero di ore per il tempo pieno.
- **Valori limite delle regole di pianificazione:** giorni lavorativi massimi, giorni di riposo minimi tra due blocchi di lavoro, ore libere minime tra due giorni lavorativi, intervallo ottimale massimo tra i turni, ore giornaliere/settimanali massime e giorni lavorativi consecutivi massimi — le stesse grandezze definite anche da una singola regola di pianificazione.
- **Maggiorazioni:** maggiorazione notturna, festiva, del sabato e della domenica in percentuale.
- **Giorni lavorativi standard e fine settimana:** quali giorni della settimana valgono come giorni lavorativi, se viene svolto lavoro a turni (turni del mattino/pomeriggio/notte), quali giorni contano come fine settimana e in quale giorno della settimana inizia la settimana.
- **Comandi di pianificazione (parole chiave):** i comandi testuali `FREE`, `EARLY`, `LATE`, `NIGHT` e le loro controparti negate `-FREE`, `-EARLY`, `-LATE`, `-NIGHT` sono configurabili qui. Se una persona digita queste parole direttamente in una cella giornaliera nel piano di lavoro, Klacks non le riconosce come nota, bensì come richiesta: `FREE` significa "in questo giorno, se possibile, non pianificare", `EARLY`/`LATE`/`NIGHT` preferiscono o impongono un determinato tipo di turno, le varianti negate escludono il contrario. Sia la pianificazione automatica sia l'Harmonizer tengono conto di queste richieste come vincolo.

## Cose utili da sapere

- Questa pagina gestisce **valori predefiniti globali** — le modifiche hanno effetto solo sui contratti o sulle regole di pianificazione appena creati, non retroattivamente su quelli già esistenti.
- I valori limite delle regole di pianificazione qui sono identici a quelli che altrimenti impostate individualmente per contratto — qui definite solo il valore iniziale che un nuovo contratto riceve.
- I comandi di pianificazione sono nascosti di default nel piano di lavoro e possono essere mostrati tramite un'icona dedicata nella barra degli strumenti.

---
*Provate subito: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
