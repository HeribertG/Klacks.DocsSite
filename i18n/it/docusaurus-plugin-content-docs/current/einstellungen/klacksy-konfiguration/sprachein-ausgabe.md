---
sidebar_position: 3
---

# Input e output vocale

Klacksy può essere utilizzato anche tramite la voce — in Impostazioni > Voce di Klacksy stabilite con quale servizio la vostra voce viene trasformata in testo (Speech-to-Text) e con quale voce Klacksy risponde (Text-to-Speech).

## Come funziona

**Riconoscimento vocale (STT):** sono disponibili quattro motori — il browser gratuito (Web Speech API), Deepgram (streaming in tempo reale), Groq Whisper (veloce ed economico) e AssemblyAI (streaming). Per tutti tranne il browser inserite una vostra chiave API e potete testare direttamente la connessione.

**Sintesi vocale (TTS):** anche qui quattro fornitori — Edge TTS (gratuito), OpenAI TTS, ElevenLabs e Google Cloud TTS. A seconda del fornitore scelto, Klacks carica automaticamente le voci disponibili; anche qui si può testare la connessione.

**Modalità di output:** stabilisce se le risposte compaiono solo come testo, solo come audio, come testo con sintesi vocale attivabile manualmente oppure come testo con sintesi vocale automatica. Il rilevamento del silenzio (500–3000 ms, predefinito 1500 ms) determina quanto tempo si attende dopo aver parlato prima che la registrazione venga inviata automaticamente.

**Pulizia della trascrizione:** se l'opzione è attiva, il testo STT grezzo passa inoltre attraverso un LLM che rimuove le parole di riempimento, risolve le autocorrezioni e sistema grammatica e numeri. Il modello utilizzato a questo scopo lo scegliete voi stessi; tramite "Trova il modello migliore" Klacks testa tutti i modelli attivati con una finestra di contesto a partire da 16.000 token e propone i candidati più economici e veloci (timeout 30 s per modello). Il prompt di pulizia è modificabile e può essere ripristinato all'impostazione di fabbrica.

**Dizionario:** per i termini che il riconoscimento vocale interpreta regolarmente in modo errato (ad es. nomi propri o termini tecnici), create voci con il termine corretto, la categoria, le varianti di pronuncia e un'eventuale assegnazione linguistica — Klacksy corregge poi questi termini in modo mirato.

## Da sapere

- La modalità browser non richiede una chiave API, ma dipende dal riconoscimento vocale del rispettivo browser e non è paragonabile in qualità ai servizi a pagamento.
- Le chiavi API, dopo il salvataggio, vengono mostrate solo come "Configurato", mai più in chiaro.
- Il controllo del modello qui verifica esclusivamente l'idoneità per la pulizia della trascrizione (finestra di contesto ≥ 16.000 token) — per l'idoneità generale come modello principale di Klacksy esiste un test separato e più severo (vedi Test di connessione del modello).

---
*Provate subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
