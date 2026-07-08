---
sidebar_position: 7
---

# Macro

I supplementi per il lavoro notturno, domenicale e festivo, oppure il calcolo esatto delle ore per ferie e servizio militare, non possono essere coperti con una formula fissa valida per ogni azienda. In Impostazioni > Macro potete scrivere per questo scopo piccoli script personalizzati in un linguaggio simile al BASIC.

## Come funziona

**A cosa servono le macro:** una macro calcola, a partire dai dati di un servizio (Work) o di un impiego, un unico valore di ritorno — tipicamente un supplemento in ore o franchi. Il risultato viene salvato in `Work.Surcharges` e confluisce automaticamente nel conteggio delle ore (ClientPeriodHours). Ogni macro appartiene a un tipo — turno/impiego oppure regole di lavoro — e può essere rinominata, modificata ed eliminata come qualsiasi altra impostazione.

**Dati disponibili:** tramite `IMPORT` lo script ha a disposizione, tra l'altro, `hour` (ore lavorate), `fromhour`/`untilhour` (ora di inizio/fine in ore decimali), `weekday` (ISO-8601: 1 = lunedì … 7 = domenica), `holiday`/`holidaynextday` (se il giorno attuale o quello seguente è festivo), nonché le aliquote di supplemento previste dal contratto `nightrate`, `holidayrate`, `sarate` (sabato) e `sorate` (domenica).

**Ambito del linguaggio:** il linguaggio di scripting dispone di strutture di controllo (`IF…THEN…ELSEIF…ELSE…ENDIF`, `SELECT CASE`, `FOR…NEXT`, `DO…LOOP`), funzioni proprie (`FUNCTION`) e procedure (`SUB`, devono essere definite prima della loro prima chiamata), oltre a funzioni integrate per stringhe, matematica, trigonometria e tempo (ad es. `TimeToHours`, `TimeOverlap` per intervalli che superano la mezzanotte). Il risultato viene restituito tramite `OUTPUT typ, wert`.

**Test nell'editor:** l'editor delle macro dispone di una scheda di test dedicata: inserite valori di esempio per le variabili importate, verificate la sintassi ed eseguite lo script a scopo di prova. `DEBUGPRINT`/`DEBUGCLEAR` mostrano valori aggiuntivi nella finestra di test, senza influire sul valore di ritorno effettivo.

**Sicurezza:** l'interprete gira in una sandbox senza accesso al file system o alla rete — una macro può sbagliare il calcolo, ma non può causare danni al di fuori del calcolo stesso.

## Da sapere

- `DIM` dichiara una variabile ma non la inizializza contemporaneamente — `DIM x = 10` è un errore di sintassi, occorre prima `DIM x` e poi separatamente `x = 10`.
- Parole chiave come `ENDIF`, `ENDFUNCTION` e `ENDSUB` si scrivono unite, non con spazi.
- `weekday` segue sempre lo standard ISO-8601 (1 = lunedì … 7 = domenica) — nelle proprie query `SELECT CASE` per il "weekend" i valori corrispondenti sono 6 (sabato) e 7 (domenica).

---
*Provate subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
