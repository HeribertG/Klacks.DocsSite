---
sidebar_position: 1
---

# Pianificazione automatica: il piano in pochi secondi

La parte più faticosa della pianificazione dei turni — l'assegnazione delle persone ai turni — la svolge Klacks con un clic.

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

![Griglia del piano di servizio Klacks](/img/app-schedule-de.png)

---
*Provatelo subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
