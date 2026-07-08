---
sidebar_position: 6
---

În Setări > Furnizori de mesagerie conectați canale externe de chat și SMS, prin care Klacks (și Klacksy) poate scrie direct angajaților și clienților — în locul sau pe lângă e-mail.

## Cum funcționează

**Principiu comun:** Toate canalele sunt configurate prin aceeași listă: nume intern, nume afișat, tip de furnizor și datele de acces diferite în funcție de canal (token, ID de cont, certificat etc.), plus un comutator pornit/oprit și un buton de test per intrare, pentru a verifica imediat conexiunea. Cine este atins de un mesaj se determină prin identificatorul specific canalului (număr de telefon, nume de utilizator, ID de utilizator etc.) salvat la angajat sau client sub Adresă > Date de contact — nu trebuie să introduceți dumneavoastră ID-uri brute.

**Pentru ce este folosit messaging-ul în Klacks:** ca o cale suplimentară de notificare pe lângă e-mail, de ex. pentru mesaje din planul de servicii sau mesaje de la Klacksy — în funcție de canalele activate și salvate per persoană.

**Cele 11 canale, pe scurt:**

| Canal | Trimitere/Primire | Particularitate |
|---|---|---|
| Slack | Trimitere + Primire | Bot-ul trebuie invitat suplimentar și explicit în fiecare canal prin `/invite`. |
| Telegram | Trimitere + Primire | Destinatarul trebuie să fi activat el însuși bot-ul în prealabil prin `/start`. |
| Signal | Doar trimitere | Necesită un bridge signal-cli auto-găzduit (Docker) cu propriul număr de telefon asociat prin cod QR — nu există un API cloud oficial. |
| Microsoft Teams | Doar trimitere | Un webhook Power Automate per canal; fără mesaje 1:1, pentru mai multe canale Teams sunt necesare mai multe intrări. |
| SMS | Doar trimitere | Număr de telefon în format E.164; la conturile de probă (de ex. Twilio) doar către numere verificate în prealabil, țara de destinație trebuie activată. |
| WeChat | Doar trimitere | Verificarea ca Official Account în afara Chinei este dificilă; ajunge doar la urmăritorii cu interacțiune în ultimele 48 de ore. |
| KakaoTalk | Doar trimitere | Token-ul de acces este valabil doar aproximativ 6 ore și trebuie reînnoit manual; destinatarul trebuie să fie „prieten" al aplicației. |
| Line | Trimitere + Primire | Contingent lunar de trimitere limitat în funcție de plan; ID-ul destinatarului devine cunoscut abia printr-un mesaj primit. |
| Threema | Doar trimitere | Cont Threema Gateway cu plată (model bazat pe credit); fără primire, deoarece nu este folosit niciun mod end-to-end. |
| Viber | Trimitere + Primire | Bot-ul poate scrie doar persoanelor care s-au abonat în prealabil la el; webhook-ul necesită HTTPS accesibil public. |
| Zalo | Doar trimitere | Token-ul de acces expiră după aproximativ 25 de ore, trimiterea este posibilă doar în cadrul unei ferestre de interacțiune. |

## Bine de știut

- Pentru fiecare canal există un manual propriu, detaliat, cu instrucțiuni pas cu pas pentru configurarea la furnizorul respectiv — accesibil direct pe pagina de setări a intrării furnizorului respectiv.
- Mai multe canale pot fi active în paralel; care este de fapt folosit depinde de datele de contact salvate la persoana respectivă.
- La toate canalele cu token de acces cu termen limitat (de ex. KakaoTalk, Zalo), acesta trebuie reînnoit în afara Klacks, la furnizor, și introdus ulterior în Klacks, altfel trimiterea prin acest canal se întrerupe.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
