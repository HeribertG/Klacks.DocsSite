---
sidebar_position: 7
---

# Straordinari

In Impostazioni > Conformità e regole di maggiorazione (modalità esperto) > Straordinari si stabilisce da quante ore accumulate il lavoro supplementare diventa soggetto a maggiorazione e quanto è alta la maggiorazione per ciascun livello.

## Come funziona

**Base di calcolo:** Giornaliero o Settimanale — non esiste altro. Una base mensile o annuale non è prevista. Con "Settimanale" la settimana inizia nel giorno configurato come primo giorno della settimana.

**Fino a tre livelli:** Ogni livello è composto da due campi — "Livello X dopo ore" (il numero di ore accumulate nella giornata o nella settimana a partire dal quale questo livello si applica) e "Tariffa livello X" in percentuale. Il livello configurato più alto è aperto verso l'alto, senza limite.

**Ogni livello conta solo le ore comprese nel proprio intervallo**, non tutte le ore a partire da zero. Se il livello 1 inizia a 8 ore e il livello 2 a 10 ore, una giornata di dieci ore e mezza paga la tariffa del livello 1 per le due ore tra 8 e 10, e la tariffa del livello 2 solo per la mezz'ora oltre le 10 — mai la tariffa del livello 2 per tutte le dieci ore e mezza. Un unico blocco di lavoro può quindi generare più voci di maggiorazione, una per ogni livello raggiunto.

**Un livello incompleto viene ignorato silenziosamente:** se manca il valore "dopo ore", oppure la tariffa è pari a zero o negativa, questo livello non viene conteggiato. Possono quindi essere effettivamente attivi da zero a tre livelli.

**La tariffa è la maggiorazione, non l'importo totale:** 25% significa un quarto d'ora in più per ogni ora lavorata in quel livello — non che l'ora venga pagata con un fattore di 1,25. La modalità di tariffa accanto (Moltiplicatore o Importo fisso all'ora) determina solo l'unità; il calcolo sottostante resta identico.

**Cosa conta come ore già lavorate:** i livelli vengono riempiti in base alle ore svolte in precedenza nello stesso giorno o nella stessa settimana — ordinate prima per data, poi per ora di inizio. Così ogni blocco di lavoro occupa la propria posizione nell'intervallo e nessuna ora viene conteggiata due volte in un livello superiore. Se una voce precedente cambia, quelle successive vengono ricalcolate.

**Da dove provengono i valori:** questa scheda fornisce i valori validi per l'intera azienda — che valgono solo se nessun'altra fonte ha priorità. Se al contratto della persona è associata una [regola di pianificazione](../../planen/planungsregeln.md) con propri livelli di straordinario, questa ha priorità; una versione successiva di questa regola, valida per la data in questione, sostituisce all'occorrenza l'intero insieme di valori, ma se non contiene un proprio blocco di straordinari ricade sulle impostazioni aziendali qui mostrate, non sulla regola di pianificazione. Se non è configurato alcun livello da nessuna parte, come ultima risorsa serve solo la **soglia di straordinario** della regola di pianificazione — ed esclusivamente come valore di partenza del primo livello, mai come tariffa. Le fonti non vengono mai mescolate: chi fornisce il primo livello fornisce anche tutti i successivi.

**Due condizioni senza le quali non si genera alcuna maggiorazione:**

- Il turno necessita di una macro di calcolo. Il lavoro su un turno senza macro non viene mai esaminato per gli straordinari.
- Deve essere configurato almeno un livello completo. Senza di esso, il risultato non è "zero straordinari", ma non avviene alcun esame.

**Escluso:** correzioni e sostituzioni non vengono mai esaminate per gli straordinari — viene considerato solo il lavoro regolare.

**Incontro con altre maggiorazioni:** la stessa ora può qualificarsi contemporaneamente per gli straordinari e per una maggiorazione legata alle circostanze, ad esempio il lavoro notturno o nel fine settimana. Se le due si sommano o se si applica solo la più alta non viene deciso da questa scheda, ma dalla macro di calcolo del turno in questione.

**Salvataggio:** la scheda si trova nella sezione Conformità e regole di maggiorazione della pagina delle impostazioni (insieme a Riposo compensativo, Modalità di maggiorazione e Applicazione della conformità), visibile solo in modalità esperto. Le modifiche vengono raccolte e salvate o annullate tramite la barra di salvataggio comune della pagina delle impostazioni — questa scheda non ha un proprio pulsante di salvataggio.

## Da sapere

- Questa scheda copre esclusivamente la scala automatica degli straordinari in base a una soglia giornaliera o settimanale. Le maggiorazioni per lavoro notturno, domenicale o festivo vengono invece calcolate in modo generico tramite script — vedi [Macro](../klacksy-konfiguration/makros.md).
- Un livello senza valore "dopo ore" o con una tariffa dello 0% o inferiore viene ignorato — questo permette di disattivare singoli livelli senza eliminarli.
- Senza almeno un livello completo e senza macro di calcolo sul turno, non si generano mai maggiorazioni per straordinari, nemmeno per turni molto lunghi.
- Una regola di pianificazione con propri livelli di straordinario sostituisce completamente questi valori aziendali, non solo singoli livelli.

---
*Prova subito: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
