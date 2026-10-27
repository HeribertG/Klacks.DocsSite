---
sidebar_position: 8
---
# Glossario

I termini che ricorrono continuamente in Klacks e in questa documentazione — in breve e nell'ordine in cui li incontrerete.

## Pianificazione

**Riga del collaboratore**
La più piccola unità pianificabile. Non la persona e non il giorno, ma la riga di una persona in un foglio di piano concreto. Tutti i valori pianificati sono legati a questa riga.

**Foglio di piano**
Un contenitore che raccoglie **riferimenti** a righe di collaboratori — non copie. Per questo una persona esiste una sola volta, indipendentemente da quanti piani parziali la mostrino, e una modifica è subito visibile ovunque. Base della [pianificazione modulare](../planen/modulare-planung/).

**Pianificazione automatica**
L'assistente riempie un piano secondo le vostre regole. Il calcolo gira in background mentre voi continuate a lavorare — vedere [Pianificazione automatica](../planen/auto-planung/).

**Disponibilità**
Quando una persona è pronta a lavorare — con precisione oraria o giornaliera, per il personale interno e per i collaboratori esterni. Vedere la [griglia di disponibilità](../planen/verfuegbarkeits-raster/).

**Ordine (incarico)**
Una bozza di un impiego che può ancora essere modificata. Un ordine **non è ancora pianificabile**.

**Sigillare**
Il passaggio unico e **irreversibile** che trasforma un ordine in un turno pianificabile. Contemporaneamente nasce la controparte pianificabile dell'ordine. Creare direttamente un turno pianificabile in Klacks non è possibile — ogni turno nasce dalla sigillatura. Vedere [Il ciclo di vita di un turno](../planen/schicht-lebenszyklus/).

**Turno (servizio)**
L'impiego pianificabile e sigillato. Il termine «servizio» indica la stessa cosa.

**Livelli di approvazione (piano dei turni)**
Il piano dei turni attraversa quattro stati in un ordine fisso: **aperto → confermato → approvato → concluso**. Confermare può farlo qualsiasi account autenticato; approvare solo Supervisor e Admin; concludere esclusivamente l'Admin. Vedere [Workflow di approvazione](../planen/freigabe-workflow/).

**Periodo / chiusura del periodo**
Il periodo di conteggio (settimanale, quindicinale, mensile o personalizzato; definito tramite l'intervallo di pagamento). La chiusura rende vincolante un periodo ed è riservata all'Admin — vedere [Chiusura del periodo](../planen/periodenabschluss/).

**Assenza — due cose, una parola**
Nell'area dei dati anagrafici «assenza» indica il **catalogo dei tipi di assenza** (nome, colore, durata predefinita, valore predefinito). Le barre nel calendario sono invece o un **desiderio** (un'assenza prevista, liberamente spostabile e senza livello di blocco) oppure un'**assenza registrata** (ripresa dal piano di impiego, in sola lettura nella pagina Assenze e con livello di blocco). Chi confonde le due cose cerca nel posto sbagliato.

## Assistente IA

**Klacksy**
L'assistente IA di Klacks. Pianifica, spiega ed esegue — con un modello a scelta libera. Vedere [Klacksy](../ki/klacksy-ki-assistent/).

**Skill**
Una singola capacità circoscritta di Klacksy — un involucro dichiarativo attorno a una logica di programma concreta («cercare un collaboratore», «assegnare un contratto», «creare un report»). Klacksy sceglie in fase di esecuzione le skill adatte.

**Livello di autonomia**
Fin dove Klacksy può spingersi senza chiedere conferma:

| Livello | Nome | Comportamento |
|---|---|---|
| 0 | Proporre | Ogni azione di scrittura richiede la vostra conferma |
| 1 | Assistito | Le azioni reversibili vengono eseguite liberamente; quelle definitive e delicate chiedono conferma |
| 2 | Autonomo (predefinito) | Tutto viene eseguito liberamente, tranne le azioni classificate come delicate |
| 3 | Completamente autonomo | Anche i passaggi definitivi vengono eseguiti |

Le azioni delicate — per esempio l'eliminazione di utenti o la modifica di permessi — chiedono conferma a **ogni** livello. Vedere [Livelli di autonomia](../einstellungen/klacksy-konfiguration/autonomie-stufen/).

## Ruoli e operatività

**Admin / Supervisor / Pianificatore**
I tre livelli di accesso. L'Admin può fare tutto, il Supervisor può creare e modificare, un account senza ruolo è un Pianificatore. La panoramica si trova in [Ruoli e permessi](../erste-schritte/rollen-und-rechte/).

**Profilo paese**
Un insieme di impostazioni predisposto per un paese: lingua, fuso orario, calendario dei giorni festivi, fine settimana e inizio della settimana, limiti dell'orario di lavoro, diritto alle ferie, maggiorazioni, esportazione paghe predefinita e modelli di settore. Viene scelto durante l'installazione tramite `REGION`.

**Playground**
L'istanza di test pubblica su [play.klacks-software.ch](https://play.klacks-software.ch) con dati dimostrativi — espressamente per provare, senza dati personali reali. Vedere [Installazione e Playground](../erste-schritte/installation-und-playground/).

**On-premise**
L'esercizio sulla vostra infrastruttura: il vostro hardware, il vostro database, i vostri dati. Il contrario della variante ospitata.

**Servizio di aggiornamento**
Il servizio fornito che installa aggiornamenti firmati — con un backup preventivo e un rollback automatico in caso di problemi. Vedere [Aggiornamenti e rollback](../betrieb/updates-und-rollback/).

**Ruoli e protezione dei dati**
Klacks non «telefona a casa»: nessun dato viene rinviato al produttore. Per i dati che devono davvero essere eliminati provvede la [conservazione dei dati](../einstellungen/system-sicherheit/datenaufbewahrung/) — le eliminazioni vengono rimosse fisicamente allo scadere del termine.

---

*Manca un termine o è spiegato in modo errato? [Community Klacks su Discord](https://discord.gg/YRP8p2abVC).*
