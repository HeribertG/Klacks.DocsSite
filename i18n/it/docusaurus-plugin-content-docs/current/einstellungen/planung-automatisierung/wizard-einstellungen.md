---
sidebar_position: 3
---

In Impostazioni > Impostazioni wizard scegliete il modello linguistico AI che l'"Holistic Harmonizer" — uno degli assistenti di pianificazione di Klacks — utilizza per la propria valutazione.

## Come funziona

Nel menu a tendina selezionate, tra i modelli LLM attivati in Klacks, quello che l'Holistic Harmonizer deve utilizzare globalmente (oppure "(nessuno)", per non utilizzarne alcuno). Tramite il pulsante "Verifica tutti i modelli", Klacks invia una piccola immagine di test a ciascun modello attivato e verifica se risponde ed è in grado di leggere l'immagine — con un timeout massimo di 90 secondi per modello. Il risultato compare come tabella con modello, provider, stato (OK/Errore), tempo di risposta e un pulsante per adottare direttamente un modello testato con successo.

L'elaborazione delle immagini non è qui un aspetto secondario, bensì un prerequisito: secondo il testo informativo della pagina, questo assistente ("Wizard 3") necessita di modelli con elaborazione delle immagini per funzionare.

## Cose utili da sapere

- Questa pagina non riguarda la pianificazione automatica a 1 clic, che distribuisce automaticamente i turni ai dipendenti — quest'ultima funziona tramite un algoritmo genetico senza alcun LLM e non ha impostazioni qui.
- Se come modello è impostato "(nessuno)", l'Holistic Harmonizer è di fatto disattivato.
- Quali modelli LLM sono disponibili in generale per la selezione (attivati/disattivati) viene stabilito altrove, nelle impostazioni AI — qui scegliete solo tra i modelli già attivati.
- Il pulsante di verifica è un semplice autotest (raggiungibilità + comprensione delle immagini + tempo di risposta) e di per sé non modifica alcun dato di pianificazione.

---
*Provate subito: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
