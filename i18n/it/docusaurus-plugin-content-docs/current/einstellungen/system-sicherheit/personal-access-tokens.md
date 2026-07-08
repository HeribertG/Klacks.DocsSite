---
sidebar_position: 2
---

# Personal Access Tokens

I Personal Access Token (PAT) sono chiavi API a lunga durata con cui strumenti e servizi esterni accedono in modo sicuro a Klacks senza nome utente e password — ad esempio assistenti IA come Claude Desktop tramite il Model Context Protocol (MCP), script di automazione o pipeline CI/CD.

## Come funziona

**Creazione di un token:** In Impostazioni > Personal Access Tokens fare clic su "Crea nuovo token", assegnare un nome significativo (ad es. `Claude Desktop` o `CI-Pipeline`) e scegliere una durata di validità compresa tra 1 e 730 giorni (predefinita: 365 giorni). Dopo la creazione, il token viene mostrato nel formato `klacks_pat_<stringa casuale>` **esattamente una volta** — copiarlo immediatamente, poiché in seguito non sarà più possibile recuperarlo.

**Utilizzo:** Il token viene trasmesso come Bearer Token nell'header `Authorization` di ogni richiesta API, ad es. `Authorization: Bearer klacks_pat_...`. Per client MCP come Claude Desktop, inserirlo come variabile d'ambiente `AUTHORIZATION` del server MCP che punta a `/mcp`.

**Gestione:** La panoramica mostra nome, data di creazione, data di scadenza e ultimo utilizzo di ogni token — il token in chiaro non viene mai più mostrato lì. I token in scadenza nei prossimi 30 giorni sono contrassegnati nell'elenco. Tramite il pulsante di revoca, un token viene bloccato immediatamente e definitivamente.

## Da sapere

- Klacks memorizza solo un hash SHA-256 del token, mai il token in chiaro stesso — un token smarrito non può essere recuperato, ma solo revocato e ricreato.
- Ogni token è collegato al proprio account utente e dispone delle stesse autorizzazioni del proprio account — non esiste una limitazione granulare degli ambiti (scope) per singolo token.
- Utilizzare un token distinto per ogni strumento, in modo da poterlo revocare in modo mirato in caso di sospetto abuso, senza interrompere altre integrazioni.

---
*Prova subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
