---
sidebar_position: 5
---

# Test di connessione del modello

Non tutti i modelli linguistici sono adatti a Klacksy — deve fornire in modo affidabile chiamate di funzione strutturate invece di rispondere in prosa. In Impostazioni > Controllo modello Klacksy verifica automaticamente questo aspetto per tutti i modelli configurati.

## Come funziona

**Il test:** un clic su "Trova i modelli migliori" invia a ogni modello configurato (anche quelli disattivati) lo stesso piccolo compito di prova: "Crea un nuovo collaboratore di nome Anna Müller." Il modello deve rispondere con la chiamata di funzione strutturata corrispondente e i parametri del nome corretti — non con una risposta testuale. Inoltre la finestra di contesto deve comprendere almeno 32.000 token, in modo che il prompt di sistema e le capacità di Klacksy vi trovino spazio. Ogni test ha un limite di tempo di 30 secondi.

**Risultato:** i modelli che soddisfano entrambi i criteri sono considerati "idonei" e vengono attivati automaticamente; i modelli non idonei vengono disattivati. L'elenco dei risultati è ordinato per idoneità, poi per capacità di chiamata di funzione, costo, latenza e finestra di contesto.

**Impostare il modello predefinito:** tramite "Imposta come predefinito" scegliete direttamente dall'elenco dei risultati quale modello Klacksy utilizzerà d'ora in poi come predefinito. Senza una scelta esplicita, Klacks imposta automaticamente come predefinito il modello più idoneo.

## Da sapere

- Il test verifica tutti i modelli registrati, non solo quelli attivati — anche modelli finora disattivati possono così essere attivati se superano il test.
- Un test superato non è una protezione sui costi: anche modelli costosi ma idonei vengono attivati. I costi per 1000 token sono visibili nell'elenco dei risultati.
- Questo test è pensato specificamente per le chiamate di funzione necessarie alla capacità di agire ed è indipendente dal controllo del modello nelle impostazioni vocali, che si accontenta di una finestra di contesto inferiore per la sola pulizia delle trascrizioni.

---
*Provate subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
