---
sidebar_position: 6
---

Con il Report Designer create i vostri modelli di stampa personalizzati — dal piano di servizio all'elenco indirizzi — direttamente in Klacks, senza strumenti esterni.

## Come funziona

Un report è composto da tre aree, che modificate nella scheda *Designer*:

- **Intestazione (Header)** — viene stampata in alto su ogni pagina. Ha tre zone (sinistra, centro, destra), che possono contenere campi del database, testo libero o immagini (ad es. il logo aziendale, caricato tramite il gestore immagini).
- **Corpo (Body)** — contiene una o più tabelle di dati. Le colonne si aggiungono trascinandole (drag & drop) dall'elenco campi; anche l'ordine si adatta con drag & drop, mentre la larghezza si imposta tramite un campo percentuale per colonna.
- **Piè di pagina (Footer)** — viene stampato in basso su ogni pagina.

Ogni tabella è collegata a una **fonte dati**, che scegliete nella scheda *Fonte dati*: piano di lavoro (Schedule), indirizzi come elenco o dettaglio, assenze, turni, gruppi o modello container. La fonte dati determina quali campi sono disponibili.

Per la formattazione sono disponibili:
- **Formattazione** per ogni cella e testo libero: tipo di carattere, dimensione, grassetto/corsivo/sottolineato, colore del testo, allineamento.
- **Bordi delle celle** impostabili singolarmente per lato (sopra/destra/sotto/sinistra) con stile e colore della linea.
- **Piè di tabella** con campi SUM: le colonne numeriche vengono sommate automaticamente.
- **Righe di testo libero** prima o dopo le tabelle di dati — ad esempio per note, condizioni o campi firma.
- **Impostazioni pagina** nella scheda *Generale*: orientamento verticale o orizzontale, formato carta (A4, A3, B4/B5 JIS, Letter) e margini pagina in mm.

## Da sapere

- **Campi combinati (Merged Fields):** tramite la barra degli strumenti del campo selezionato potete combinare più campi in un'unica colonna; il separatore (virgola, spazio, a capo, trattino) è configurabile.
- Per la fonte dati **Piano di lavoro** sono disponibili due opzioni aggiuntive: *Raggruppa le voci per giorno* (più voci nello stesso giorno in un'unica riga) e *Mostra periodo completo* (tutti i giorni, anche senza voci).
- Il piè di tabella si attiva tramite una casella di controllo direttamente sotto la rispettiva tabella; l'etichetta SUM per il campo del piè di pagina può essere mostrata o nascosta separatamente.

---
*Provatelo subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
