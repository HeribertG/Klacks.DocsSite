---
sidebar_position: 5
---

L'assistente IA Klacksy impara dall'uso quotidiano quali delle sue capacità (skill) sono correlate tra loro — e la volta successiva sceglie in modo più mirato le skill adatte.

## Come funziona

Klacksy osserva in background quali skill vengono usate spesso insieme o in successione in una sessione, e ne deduce delle **relazioni**. Il processo di apprendimento gira automaticamente ogni 6 ore. La pagina Relazioni tra skill mostra tutte le relazioni rilevate; gli amministratori decidono se accettarle o scartarle.

**Tipi di relazione**
- *In successione:* la skill A viene usata regolarmente prima della skill B.
- *Necessarie insieme:* entrambe le skill compaiono spesso nella stessa sessione, senza un ordine fisso.

**Origine**
- *Appresa:* calcolata da dati d'uso reali — alta affidabilità.
- *Dedotta:* desunta logicamente dalla struttura delle skill, non ancora confermata da dati d'uso.

**Stato**
- *Candidata:* rilevata di recente, in attesa della vostra decisione.
- *Attiva:* accettata — influenza attivamente Klacksy.
- *Scartata:* respinta — viene ignorata.

La **confidenza** (0–100%) indica quanto Klacksy è sicuro di una relazione. Sale con ogni sessione che conferma lo schema (**conferme**) e scende con le sessioni che lo contraddicono (**contraddizioni**).

## Da sapere

- Accettate una relazione quando ha senso dal punto di vista contenutistico — entrambe le skill sono effettivamente correlate e lo schema corrisponde al flusso di lavoro desiderato.
- Scartate le relazioni nate per caso o che nel vostro contesto non sono correlate (ad es. a causa di sessioni di test).
- Regola pratica: tipicamente conviene accettare solo le relazioni *apprese* con alta confidenza. Le candidate dedotte con poco supporto è meglio scartarle, finché non sono disponibili più dati d'uso.

---
*Provatelo subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
