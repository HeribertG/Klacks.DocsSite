---
sidebar_position: 7
---

# Regole antispam

In Impostazioni > Regole antispam si definiscono le regole di filtro con cui le e-mail in arrivo nel modulo posta in arrivo vengono classificate automaticamente come spam — le regole agiscono sia durante il recupero continuo di nuove e-mail (polling IMAP) sia in una successiva rivalutazione delle e-mail già ricevute.

## Come funziona

**Creazione di una regola:** Scegliere un tipo di regola — Mittente contiene, Dominio del mittente, Oggetto contiene o Contenuto contiene — inserire il pattern da verificare e fare clic su Aggiungi.

**Gestione delle regole:** Ogni regola può essere attivata o disattivata tramite una casella di controllo, senza eliminarla, oppure rimossa definitivamente tramite il pulsante del cestino.

## Da sapere

- Le regole disattivate rimangono salvate, ma non agiscono più sulle e-mail nuove o rivalutate — utile per sospendere una regola a scopo di test invece di eliminarla.
- Klacks utilizza per l'importazione degli ordini ERP la stessa casella di posta del normale modulo e-mail (architettura a casella unica). Una regola definita in modo troppo ampio (ad es. un intero dominio del mittente) può quindi teoricamente classificare come spam anche le e-mail di ordini ERP in arrivo — verificare quindi con attenzione le nuove regole prima di attivarle.
- Utilizzare le regole sul dominio del mittente per bloccare intere organizzazioni mittenti indesiderate, invece di registrare ogni singolo indirizzo come regola "Mittente contiene".

---
*Prova subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
