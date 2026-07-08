---
sidebar_position: 3
---

La gestione di indirizzi e persone è il cuore dei vostri dati anagrafici: collaboratori, clienti e persone esterne con indirizzi, dati di contatto, contratti, appartenenza a gruppi e qualifiche — raggiungibile tramite l'icona Persone nella navigazione.

## Come funziona

**Creare un collaboratore:** I campi obbligatori sono nome, cognome e sesso (donna/uomo/intersessualità/persona giuridica). Facoltativamente potete registrare data di nascita, e-mail, telefono, indirizzo (via, CAP, località, cantone, paese) nonché gruppo/reparto. In alternativa potete anche lasciare la creazione all'assistente Klacksy («crea un collaboratore …»).

**Stato:** Lo stato risulta automaticamente dalla data di ingresso e di uscita dell'appartenenza — non esiste un campo di stato manuale. Si distingue tra *Attivi* (l'appartenenza è attualmente in corso), *Ex collaboratori* (la data di uscita è nel passato) e *Futuri* (la data di ingresso non è ancora arrivata).

**Gruppi e reparti:** Ai collaboratori possono essere assegnati dei gruppi. La struttura è gerarchica (ad es. `Klacks AG > IT > Sviluppo`), è consentita l'assegnazione multipla e i permessi possono essere controllati a livello di gruppo.

**Contratti:** Ogni persona può avere più contratti, ad esempio in caso di cambio del grado di occupazione. I modelli di contratto stessi sono liberamente definibili: in Impostazioni > Contratti create i vostri contratti con nome, grado di occupazione, ore dovute/massime/minime, supplementi (notturno, domenicale e festivo) e intervallo di pagamento; a ogni contratto può inoltre essere associato un proprio calendario delle festività, in modo da poter rappresentare, ad esempio, festività diverse a livello cantonale. Ogni contratto vale per un periodo limitato o a tempo indeterminato.

**Importazione:** Non esiste un'importazione CSV per i dati anagrafici. Le directory esistenti vengono recepite automaticamente tramite sincronizzazione LDAP/Active Directory via un Identity Provider; le singole persone si creano manualmente o tramite Klacksy.

**Ricerca e filtro:** La ricerca a testo libero trova le persone per nome, cognome, azienda o numero di matricola, nonché per numero di telefono/CAP; inoltre potete filtrare per cantone, stato (Attivi/Ex collaboratori/Futuri) e gruppo.

## Utile da sapere

- Solo gli *Attivi* sono pianificabili — controllate la data di ingresso/uscita dell'appartenenza se qualcuno non compare nel piano dei turni.
- Più contratti per persona sono normali, ad esempio in caso di cambio del grado di occupazione — non dovete creare una seconda persona per questo. Nuovi modelli di contratto (grado di occupazione, supplementi, calendario) li create voi stessi in Impostazioni > Contratti.
- Create prima la struttura dei gruppi e poi assegnate le persone — così i permessi a livello di gruppo funzionano fin dall'inizio.

---
*Provatelo subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
