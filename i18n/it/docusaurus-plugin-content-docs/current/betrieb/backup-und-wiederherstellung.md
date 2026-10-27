---
sidebar_position: 2
---
# Backup e ripristino

I vostri dati si trovano interamente sulla vostra infrastruttura — quindi anche il backup è nelle vostre mani. Questa pagina mostra che cosa va salvato e come ripristinarlo.

## Che cosa va salvato

| Che cosa | Dove | Con che frequenza |
|---|---|---|
| Database | Volume `postgres_data` | ogni giorno, almeno prima di ogni aggiornamento |
| Upload | Volume `api-uploads` | insieme al database |
| Documenti | Volume `api-documents` | insieme al database |
| Portachiavi | Volume `api-dataprotection` | insieme al database, **assolutamente** |

Il volume `api-dataprotection` contiene il portachiavi con cui Klacks decifra le impostazioni cifrate (per esempio le credenziali dei canali di comunicazione). Un database senza questo portachiavi è presente, ma non pienamente utilizzabile — salvatelo sempre insieme.

## Salvare il database

```bash
docker exec klacks-postgres pg_dump -U admin -d Klacks -Fc > klacks-20260922.dump
```

Il formato `-Fc` (custom) comprime e consente, durante il ripristino, di scegliere singole tabelle.

## Ripristinare il database

```bash
docker exec -i klacks-postgres pg_restore -U admin -d Klacks --clean --if-exists < klacks-20260922.dump
```

`--clean --if-exists` rimuove prima gli oggetti esistenti, in modo che il ripristino non fallisca a causa di tabelle già presenti.

## L'insidia: il rollback dopo una migrazione fallita

È proprio qui che in passato si è verificato un guasto in produzione, e il meccanismo è quello di qualsiasi rollback basato su dump:

Se una versione difettosa crea **nuove tabelle** tramite una migrazione, queste tabelle non si trovano nel dump. Durante il ripristino il database non torna quindi al vecchio stato — le nuove tabelle **sopravvivono** al ripristino, mentre la cronologia delle migrazioni (`__EFMigrationsHistory`) viene riportata al vecchio stato. Il successivo tentativo di avvio incappa allora nell'errore `42P07: relation "…" already exists` e l'installazione resta bloccata in un ciclo di riavvii.

Se dopo un aggiornamento fallito eseguite manualmente il rollback, controllate quindi dopo il ripristino se sono rimaste tabelle che nella vecchia versione non esistevano ancora, e rimuovetele **prima** di riavviare l'API.

## Conservazione ed eliminazione

Klacks non si limita a contrassegnare i dati come eliminati, ma li elimina **fisicamente**. Un servizio in background gira ogni giorno e rimuove in modo irrevocabile tutte le righe contrassegnate come eliminate il cui momento di eliminazione risale a più tempo fa del termine configurato — e lo fa in **tutte** le tabelle con contrassegno di eliminazione (collaboratori, indirizzi, gruppi, turni, tempi di lavoro, assenze, pause e così via). Non esiste un elenco di eccezioni; l'obbligo di eliminazione prevale deliberatamente sulla ripristinabilità.

Il termine si controlla tramite l'impostazione `DATA_RETENTION_DAYS`; senza un'indicazione propria vale il valore predefinito di **3650 giorni (10 anni)**. La pagina [Conservazione dei dati](../../einstellungen/system-sicherheit/datenaufbewahrung/) descrive l'impostazione in dettaglio.

## Da sapere

- **Prima di ogni aggiornamento Klacks esegue da sé un backup.** Il servizio di aggiornamento crea un backup dei dati prima di attivare una nuova versione; in caso di migrazione il backup viene legato all'operazione di aggiornamento e riutilizzato per un rollback automatico o manuale. Non sostituisce un vostro backup **esterno** — protegge proprio nei casi in cui è interessato l'host stesso.
- **Verificate il vostro backup.** Un dump che non è mai stato ripristinato è un'ipotesi, non un backup. Create un database usa e getta e ripristinatelo lì prima di fare affidamento sulla procedura.
- **Conservate il portachiavi separatamente dal database.** Se `api-dataprotection` si trova nello stesso set di backup e lo stesso incidente colpisce entrambi, la cifratura non vale nulla.

---

*Domande sull'operatività? [Community Klacks su Discord](https://discord.gg/YRP8p2abVC).*
