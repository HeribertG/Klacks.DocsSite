---
sidebar_position: 1
---

# Pianificazione automatica: un clic, il resto gira in background

La parte più faticosa della pianificazione dei turni — l'assegnazione delle persone ai turni — la svolge Klacks con un clic. Il calcolo in sé richiede il suo tempo, ma continua a girare in background: non dovete aspettare e nel frattempo potete dedicarvi ad altro.

## Come funziona

Dietro la pianificazione automatica a 1 clic si nasconde un **algoritmo genetico**: genera migliaia di varianti di piano, le valuta e combina ulteriormente le migliori — finché non si ottiene una soluzione equilibrata. Le regole rigide hanno sempre la precedenza, solo dopo contano gli altri obiettivi:

- **Regole** — diritto del lavoro, tempi di riposo, qualifiche e disponibilità non sono negoziabili: nessun risultato, per quanto buono, può violare una regola rigida
- **Copertura** — ogni turno viene coperto con il numero di persone richiesto
- **Equità** — le ore di lavoro si distribuiscono in modo uniforme, e la sequenza dei turni per persona segue, dove possibile, lo schema mattina → pomeriggio/sera → notte
- **Continuità** — dove possibile, i collaboratori restano nel loro luogo di intervento abituale

Avviate la pianificazione automatica direttamente dal piano di servizio per il periodo scelto. Il risultato appare come una normale bozza di piano: tutto resta modificabile a mano, nulla viene definito senza conferma.

## Da sapere

- Le qualifiche agiscono come un limite reale: chi non possiede una qualifica richiesta non viene inserito nel piano.
- La pianificazione automatica rispetta le voci già presenti — potete quindi fissare prima i punti fermi e lasciare che il resto venga riempito automaticamente.
- Se un risultato non convince, pianificate semplicemente di nuovo: l'algoritmo trova alternative equivalenti.
- Potete creare più scenari in parallelo senza modificare il piano esistente: ogni scenario è una copia ipotetica indipendente, che potete confrontare, scartare o applicare. Così siete preparati per cambiamenti a breve termine, invece di doverli ricalcolare solo quando si presentano.

![Griglia del piano di servizio Klacks](/img/app-schedule-de.png)

---
*Provatelo subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
