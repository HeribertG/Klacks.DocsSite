---
sidebar_position: 4
---

Il calendario perpetuo calcola automaticamente le festività per ogni anno — definite le regole una sola volta, e Klacks conosce poi le festività per tutti gli anni a venire.

## Come funziona

Ogni festività viene descritta tramite una breve regola. Esistono due tipi fondamentali:

- **Date fisse** nel formato `MM/DD`: `01/01` è Capodanno, `08/01` la Festa nazionale svizzera, `12/25` Natale.
- **Date legate alla Pasqua** nel formato `EASTER+XX` oppure `EASTER-XX`: la data della Pasqua viene calcolata automaticamente secondo la formula di Gauss per il calcolo della Pasqua, e la festività come distanza da essa. Esempi: `EASTER-02` = Venerdì Santo, `EASTER+01` = Lunedì dell'Angelo, `EASTER+39` = Ascensione, `EASTER+50` = Lunedì di Pentecoste, `EASTER+60` = Corpus Domini.

Inoltre esistono **date fisse con spostamento del giorno della settimana** (`MM/DD+XX+WW` oppure `MM/DD+XX-WW`) per festività come «primo giovedì di novembre» (`11/01+00+TH`) o «ultimo lunedì di maggio» (`05/25+00-MO`).

Con le **SubRules** spostate automaticamente una festività quando cade in un determinato giorno della settimana — ad es. `SA+2;SU+1`: se il giorno cade di sabato o domenica, slitta al lunedì. Più regole vengono separate da `;`.

Per ogni regola registrate inoltre nome e descrizione (multilingue), paese e cantone/regione, nonché le caselle di controllo **Festività legale** e **Retribuita**.

## Utile da sapere

- Le abbreviazioni dei giorni della settimana sono in inglese: `SU`, `MO`, `TU`, `WE`, `TH`, `FR`, `SA`.
- Le SubRules servono soprattutto a spostare le festività dal fine settimana al giorno lavorativo successivo.
- La casella di controllo **Retribuita** è rilevante per il calcolo dello stipendio.
- Tramite paese e cantone/regione controllate le differenze regionali — il Venerdì Santo, ad esempio, in Svizzera non vale in tutti i cantoni (eccezioni: VS, TI).
- I pacchetti di calendario preinstallati per paesi e cantoni svizzeri sono protetti dall'eliminazione; le selezioni di calendario personalizzate, create autonomamente, possono essere eliminate in qualsiasi momento.

![Feiertagsregeln in Klacks](/img/app-calendar-de.png)

---
*Provatelo subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
