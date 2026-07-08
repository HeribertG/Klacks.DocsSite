---
sidebar_position: 2
---

In Impostazioni > Impostazioni IMAP configurate una casella di posta che Klacks recupera costantemente in background e mostra nella sezione "Posta in entrata" — in questo modo la corrispondenza in arrivo può essere tracciata automaticamente e associata a collaboratori e clienti.

## Come funziona

**Dati di connessione:** server, porta (predefinita 993), crittografia SSL, nome utente, password, la cartella da recuperare (predefinita `INBOX`) e l'intervallo di recupero in secondi (predefinito 300).

**Cosa succede alle e-mail recuperate:** Klacks interroga periodicamente la casella di posta tramite IMAP, verifica i nuovi messaggi con un filtro antispam (lo spam viene spostato nella cartella indesiderata sia in Klacks sia nella casella di posta reale) e assegna automaticamente i messaggi rimanenti al record cliente o collaboratore corrispondente, a condizione che l'indirizzo del mittente sia registrato come dato di contatto. In questo modo nella "Posta in entrata" si forma una cronologia di corrispondenza filtrabile per persona. Modifiche come "contrassegna come letto", spostamento o eliminazione si ripercuotono anche sulla casella di posta reale.

**Testare la connessione:** il pulsante "Testa connessione IMAP" si connette realmente al server, effettua l'accesso, apre in lettura la cartella configurata e mostra il numero di messaggi trovati. Se la cartella non esiste, viene segnalato esplicitamente.

## Da sapere

- Questa casella di posta **non** è un canale per le segnalazioni di assenza e **non** fa parte dell'acquisizione degli ordini ERP (per questo esistono punti di acquisizione separati, vedi pagina dedicata) — alimenta esclusivamente la "Posta in entrata" generale.
- Questa impostazione è globale per l'intera installazione — non esiste un account IMAP separato per singolo utente.
- Se la chiave di crittografia utilizzata dall'installazione viene reimpostata, Klacks non può più decifrare la password salvata e mette in pausa il recupero finché la password non viene salvata nuovamente.
- I messaggi nella posta in entrata possono essere tradotti direttamente se DeepL è configurato (vedi pagina dedicata).

---
*Provate subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
