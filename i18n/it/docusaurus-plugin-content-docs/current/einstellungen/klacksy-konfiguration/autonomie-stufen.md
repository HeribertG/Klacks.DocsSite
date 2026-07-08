---
sidebar_position: 4
---

# Livelli di autonomia

Quanto può agire Klacksy in autonomia prima di chiedere conferma? In Impostazioni > Autonomia di Klacksy potete stabilirlo per voi stessi — l'impostazione vale per il singolo account utente, non per tutti gli utenti in comune.

## Come funziona

**Quattro livelli:**

- **Proponi** — Klacksy si limita a proporre, ogni modifica richiede la vostra conferma.
- **Assistito** — le azioni reversibili vengono eseguite direttamente, tutto il resto richiede conferma.
- **Autonomo** (predefinito) — tutte le azioni vengono eseguite direttamente, tranne quelle particolarmente delicate.
- **Completamente autonomo** — anche i piani a più passaggi vengono eseguiti senza approvazioni intermedie.

**Come agisce la classificazione:** ogni azione che Klacksy potrebbe eseguire è classificata internamente in base al rischio: le azioni di sola lettura vengono sempre eseguite immediatamente; le azioni reversibili o legate a uno scenario (ad es. in una pianificazione di prova) richiedono almeno il livello Assistito; le azioni irreversibili richiedono almeno il livello Autonomo. Le azioni delicate — gestione utenti, permessi e modifiche all'impostazione di autonomia stessa — richiedono **sempre**, indipendentemente dal livello scelto, una conferma esplicita.

**Il flusso di conferma:** se un'azione richiede la vostra approvazione, Klacksy non la esegue subito, ma la mette in attesa per 5 minuti e riassume che cosa accadrebbe. Solo quando acconsentite espressamente con parole vostre, Klacksy avvia l'azione messa in attesa — non conferma mai autonomamente per conto vostro.

## Da sapere

- Il livello di autonomia è un'impostazione personale per singolo account — ogni utente può scegliere il proprio livello di comfort.
- Un livello più alto non significa che non venga più chiesto nulla: le azioni delicate restano sempre soggette a conferma.
- Il livello predefinito è Autonomo — corrisponde al comportamento che Klacksy aveva già prima dell'introduzione dei livelli di autonomia.

---
*Provate subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
