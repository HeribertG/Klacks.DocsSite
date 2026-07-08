---
sidebar_position: 4
---

In Impostazioni > OpenRoute inserite la chiave API per il servizio esterno openrouteservice.org, che Klacks utilizza per l'ottimizzazione dei percorsi.

## Come funziona

OpenRouteService calcola tempi di percorrenza e distanze — per spostamenti in auto, in bicicletta e a piedi — fornendo così la base per l'ottimizzazione dei percorsi in Klacks. Inserite nell'unico campo di questa pagina la vostra chiave API personale. Potete ottenere una chiave gratuita tramite il link di registrazione a openrouteservice.org indicato sulla pagina.

## Cose utili da sapere

- La chiave viene inviata direttamente dal browser a openrouteservice.org ed è quindi volutamente mostrata **in chiaro** anziché mascherata (`***`) — diversamente, ad esempio, dalle password e-mail. Ciò è previsto in modo che possiate riconoscere un errore di battitura accidentale o una chiave scaduta, non si tratta di un errore di visualizzazione.
- Nel database, tuttavia, la chiave viene comunque memorizzata in forma crittografata.
- Senza una chiave valida, l'ottimizzazione dei percorsi non funziona — in tal caso non è possibile calcolare tempi di percorrenza e distanze.
- Per la semplice conversione di indirizzi in coordinate (geocodifica), Klacks utilizza un servizio diverso e separato — questa chiave è destinata esclusivamente al calcolo dei percorsi.

---
*Provate subito: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
