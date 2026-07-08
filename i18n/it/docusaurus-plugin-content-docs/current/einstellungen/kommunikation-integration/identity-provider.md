---
sidebar_position: 4
---

In Impostazioni > Identity Provider collegate Klacks a un servizio di directory esterno — LDAP/Active Directory oppure OAuth2/OpenID Connect — per importare automaticamente i dipendenti e/o gestire tramite esso l'autenticazione.

## Come funziona

**LDAP/Active Directory:** inserite host, porta (389/636), SSL, Base DN, Bind DN, password Bind e un filtro utenti. Un interruttore "Usa per l'importazione client" attiva l'importazione automatica: nome, cognome, titolo, azienda e indirizzo vengono ripresi dagli attributi della directory — in OpenLDAP e Active Directory talvolta con nomi di attributo diversi (ad es. `uid` rispetto a `sAMAccountName`, `street` rispetto a `streetAddress`). Queste mappature dei campi sono definite in modo fisso nel backend e non sono modificabili tramite l'interfaccia.

**OAuth2/OpenID Connect:** Client-ID, Client-Secret, facoltativamente Tenant-ID (Azure), URL di autorizzazione, token e UserInfo, oltre agli scope — per l'accesso tramite Google, Microsoft o GitHub.

**Testare la connessione e sincronizzare:** per i provider LDAP/AD, "Testa connessione" mostra il numero di utenti trovati, inclusi nomi utente di esempio. Se l'importazione client è attivata, "Sincronizza ora" avvia un allineamento manuale; il risultato (elaborati/nuovi/aggiornati/disattivati) appare subito dopo come messaggio sulla pagina.

## Cose utili da sapere

- Questa pagina è accessibile **solo alle amministratrici e agli amministratori**, non al ruolo di supervisore.
- La password Bind e il Client-Secret vengono memorizzati in forma crittografata e nell'interfaccia sono mostrati solo mascherati (`***`); se si salva senza modifiche, il valore esistente viene mantenuto.
- Un registro permanente delle sincronizzazioni (cronologia, storico degli errori) attualmente **non** viene visualizzato nell'interfaccia — solo il risultato dell'ultima esecuzione manuale.
- Le persone non più presenti nella directory non vengono eliminate durante la sincronizzazione, ma disattivate tramite la data di uscita della loro appartenenza; se in seguito ricompaiono, vengono riattivate automaticamente.
- Un identificativo esterno proveniente dalla directory (LDAP ObjectGUID oppure, in alternativa, il Distinguished Name) impedisce i duplicati: se in una nuova sincronizzazione viene trovato lo stesso identificativo, la persona esistente viene aggiornata anziché creata di nuovo.

---
*Provate subito: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
