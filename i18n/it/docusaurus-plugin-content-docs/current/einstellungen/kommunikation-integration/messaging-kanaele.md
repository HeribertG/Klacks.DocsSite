---
sidebar_position: 6
---

In Impostazioni > Provider di messaggistica collegate canali di chat e SMS esterni, tramite i quali Klacks (e Klacksy) possono scrivere direttamente a dipendenti e clienti — al posto dell'e-mail o in aggiunta ad essa.

## Come funziona

**Principio comune:** tutti i canali vengono configurati tramite lo stesso elenco: nome interno, nome visualizzato, tipo di provider e le credenziali di accesso specifiche del canale (token, ID account, certificato o simili), oltre a un interruttore on/off e un pulsante di test per ogni voce, per verificare subito la connessione. Chi riceve un messaggio viene determinato tramite l'identificativo specifico del canale (numero di telefono, nome utente, ID utente o simile) memorizzato presso il dipendente o il cliente in Indirizzo > Dati di contatto — non è necessario digitare manualmente ID grezzi.

**A cosa serve la messaggistica in Klacks:** come canale di notifica aggiuntivo accanto all'e-mail, ad esempio per segnalazioni dal piano di lavoro o messaggi di Klacksy — a seconda di quali canali sono attivati e memorizzati per ciascuna persona.

**I 11 canali in sintesi:**

| Canale | Invio/Ricezione | Particolarità |
|---|---|---|
| Slack | Invio + Ricezione | Il bot deve inoltre essere invitato esplicitamente in ogni canale tramite `/invite`. |
| Telegram | Invio + Ricezione | Il destinatario deve avere prima attivato il bot personalmente con `/start`. |
| Signal | Solo invio | Richiede un bridge signal-cli gestito autonomamente (Docker) con un proprio numero di telefono abbinato via QR-Code — nessuna API cloud ufficiale. |
| Microsoft Teams | Solo invio | Un webhook Power Automate per canale; nessun messaggio 1:1, per più canali Teams servono più voci. |
| SMS | Solo invio | Numero di telefono in formato E.164; per gli account di prova (ad es. Twilio) solo verso numeri verificati in anticipo, il paese di destinazione deve essere abilitato. |
| WeChat | Solo invio | Verifica come Official Account impegnativa al di fuori della Cina; raggiunge solo i follower che hanno interagito nelle ultime 48 ore. |
| KakaoTalk | Solo invio | Il token di accesso è valido solo circa 6 ore e deve essere rinnovato manualmente; il destinatario deve essere "amico" dell'app. |
| Line | Invio + Ricezione | Contingente di invio mensile limitato in base al piano; l'ID del destinatario diventa noto solo tramite un messaggio in entrata. |
| Threema | Solo invio | Account Threema Gateway a pagamento (modello a credito); nessuna ricezione, poiché non viene utilizzata la modalità end-to-end. |
| Viber | Invio + Ricezione | Il bot può scrivere solo a persone che lo hanno precedentemente sottoscritto; il webhook richiede un HTTPS pubblicamente raggiungibile. |
| Zalo | Solo invio | Il token di accesso scade dopo circa 25 ore, l'invio è possibile solo entro una finestra di interazione. |

## Cose utili da sapere

- Per ogni canale esiste un manuale dettagliato con istruzioni passo-passo per la configurazione presso il rispettivo provider — consultabile direttamente sulla pagina delle impostazioni della relativa voce del provider.
- Più canali possono essere attivi in parallelo; quale viene effettivamente utilizzato dipende dai dati di contatto memorizzati per la rispettiva persona.
- Per tutti i canali con token di accesso a scadenza (ad es. KakaoTalk, Zalo), il token deve essere rinnovato al di fuori di Klacks presso il provider e reinserito in Klacks, altrimenti l'invio tramite quel canale si interrompe.

---
*Provate subito: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, i dati vengono ripristinati ogni giorno.*
