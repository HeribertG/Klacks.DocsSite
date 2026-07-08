---
sidebar_position: 1
---

# Provider LLM e modelli

Klacksy ha bisogno di un modello linguistico per capire e agire. In Impostazioni > Provider LLM, Modelli LLM e Log di sincronizzazione LLM stabilite quali fornitori e quali modelli concreti Klacks può utilizzare a questo scopo.

## Come funziona

**Aggiungere un provider:** un provider raggruppa URL di base, versione API e chiave API di un fornitore. Sei fornitori (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) sono cablati direttamente nel codice; ogni altro provider passa attraverso un collegamento generico compatibile con OpenAI — in questo modo si possono integrare ad esempio Groq, Together AI, Fireworks, OpenRouter, xAI, Cerebras, Perplexity oppure un modello gestito autonomamente. Tramite "Cerca provider" Klacks propone inoltre fornitori non ancora configurati: da un catalogo curato di indirizzi verificati oppure — se è configurata una ricerca web — tramite ricerca su Internet. Ogni proposta viene verificata dal vivo per la raggiungibilità prima di essere mostrata; i provider selezionati vengono creati disattivati e senza chiave API, che dovrete poi aggiungere voi stessi.

**Chiave API e priorità:** dopo il salvataggio, la chiave non viene più mostrata in chiaro nell'interfaccia — si vede solo se ne è stata configurata una ("Configurato"). La priorità determina l'ordine in cui vengono interpellati i provider attivati.

**Gestire i modelli:** in Modelli LLM create singoli modelli per ciascun provider (nome visualizzato, ID tecnico del modello presso il fornitore, finestra di contesto, numero massimo di token, costo per 1000 token di input/output). Un modello può essere contrassegnato come modello predefinito; un provider non può essere eliminato finché uno dei suoi modelli è l'attuale predefinito.

**Log di sincronizzazione LLM:** un servizio in background verifica automaticamente, di norma ogni 24 ore, quali modelli sono diventati nuovamente disponibili o sono stati rimossi presso i provider attivati. I nuovi modelli vengono verificati in anticipo con una richiesta di test reale e vengono inseriti attivati solo in caso di successo; i modelli non più offerti vengono disattivati automaticamente. Il log di sincronizzazione mostra la cronologia completa per provider con data, numero di modelli nuovi/disattivati/falliti e risultati dei test espandibili. Dopo il successivo accesso, gli amministratori ricevono inoltre una notifica toast sugli eventi di sincronizzazione non ancora letti.

## Da sapere

- Solo sei fornitori (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) hanno un'implementazione dedicata — tutti gli altri provider passano attraverso un collegamento generico compatibile con OpenAI.
- Il catalogo per "Cerca provider" contiene attualmente dodici fornitori verificati; le proposte web compaiono solo se in Impostazioni è configurata una ricerca web.
- Il servizio di log di sincronizzazione gira in background indipendentemente dalla vostra sessione — non è necessario tenere aperta la pagina.

---
*Provate subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
