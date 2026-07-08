---
sidebar_position: 1
---

In Impostazioni > Impostazioni e-mail configurate il server SMTP tramite il quale Klacks invia le e-mail in uscita — ad esempio notifiche, e-mail di reimpostazione password o messaggi inviati da Klacksy.

## Come funziona

**Dati di connessione:** inserite server, porta, timeout, modalità SSL/TLS, tipo di autenticazione (Nessuna, LOGIN, NTLM, GSSAPI, WDIGEST) nonché nome utente e password. Inoltre è possibile configurare conferma di lettura/notifica di consegna e un indirizzo di risposta. La modalità SSL/TLS viene inoltre derivata dalla porta: la porta 465 utilizza SSL diretto, la porta 587 (o SSL attivato) StartTLS.

**Salvataggio:** non esiste un pulsante di salvataggio esplicito — ogni campo viene salvato automaticamente dopo una breve pausa non appena lo modificate.

**Testare la connessione:** il pulsante "Invia e-mail di test" stabilisce una connessione SMTP reale, si autentica e invia un'e-mail di test effettiva all'indirizzo utente registrato. Non si tratta di un semplice controllo di connessione, ma di un invio reale di posta — utile per verificare immediatamente le credenziali di accesso. Per i fornitori noti (Outlook, Gmail, Yahoo, GMX e altri), Klacks richiede obbligatoriamente un tipo di autenticazione diverso da "Nessuna".

## Da sapere

- Questa impostazione è globale per l'intera installazione — non esiste un account SMTP separato per singolo utente.
- Solo una persona con diritti di amministratore può configurare questa pagina.
- La password viene salvata in modo crittografato e nel modulo può essere mostrata/nascosta tramite un'icona a forma di occhio, senza mai essere visualizzata in chiaro.
- Se il test di connessione fallisce, Klacks segnala il motivo concreto (ad es. errore di autenticazione, errore di handshake SSL, timeout) invece di un messaggio di errore generico.

---
*Provate subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
