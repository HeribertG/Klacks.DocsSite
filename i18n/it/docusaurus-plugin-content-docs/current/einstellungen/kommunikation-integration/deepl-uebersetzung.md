---
sidebar_position: 3
---

In Impostazioni > DeepL inserite una chiave API DeepL con cui Klacks può tradurre automaticamente i testi — attualmente soprattutto le e-mail in arrivo nella posta in entrata.

## Come funziona

**Chiave API:** un unico campo di inserimento accetta la chiave API DeepL (formato `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx` per la API Free gratuita, oppure senza il suffisso `:fx` per la API Pro a pagamento). In base al suffisso `:fx`, Klacks riconosce automaticamente quale dei due indirizzi API DeepL utilizzare — non serve un interruttore separato tra Free e Pro. Un account e la chiave stessa si ottengono su deepl.com/pro-api.

**Utilizzo:** nella "Posta in entrata" ogni e-mail può essere tradotta, tramite l'icona di traduzione, nella lingua dell'interfaccia attualmente impostata; originale e traduzione possono essere confrontati tramite un interruttore. Senza una chiave configurata questa funzione non è disponibile.

## Da sapere

- Questa impostazione è globale per l'intera installazione — non esiste una chiave per singolo utente.
- Non esiste un pulsante di "test" dedicato su questa pagina; se la chiave funziona lo si vede al primo tentativo di traduzione nella posta in entrata.
- Se la chiave non è valida o è scaduta, Klacks lo rileva dalla risposta di DeepL (errore di autenticazione) e lo segnala invece di mostrare una traduzione vuota o errata.
- La chiave viene salvata in modo crittografato e mostrata mascherata nel modulo.

---
*Provate subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
