---
sidebar_position: 1
---

În Setări > Setări e-mail configurați serverul SMTP prin care Klacks trimite e-mailurile de ieșire — de exemplu notificări, e-mailuri de resetare a parolei sau mesaje trimise de Klacksy.

## Cum funcționează

**Date de conexiune:** Introduceți server, port, timeout, mod SSL/TLS, tip de autentificare (Niciunul, LOGIN, NTLM, GSSAPI, WDIGEST), precum și nume de utilizator și parolă. Suplimentar pot fi configurate confirmarea de citire/notificarea de livrare și o adresă de răspuns. Modul SSL/TLS este dedus suplimentar din port: portul 465 folosește SSL direct, portul 587 (sau SSL activat) folosește StartTLS.

**Salvare:** Nu există un buton explicit de salvare — fiecare câmp este salvat automat după o scurtă întârziere, imediat ce este modificat.

**Testarea conexiunii:** Butonul „Trimite e-mail de test" stabilește o conexiune SMTP reală, se autentifică și trimite un e-mail de test efectiv către adresa de utilizator salvată. Aceasta nu este o simplă verificare a conexiunii, ci un trimitere reală de e-mail — util pentru a verifica imediat datele de acces. La furnizori cunoscuți (Outlook, Gmail, Yahoo, GMX ș.a.) Klacks solicită obligatoriu un tip de autentificare diferit de „Niciunul".

## Bine de știut

- Această setare este globală pentru întreaga instalare — nu există un cont SMTP separat per utilizator.
- Doar o persoană cu drepturi de administrator poate configura această pagină.
- Parola este stocată criptat și poate fi afișată/ascunsă în formular printr-un simbol de ochi, nefiind niciodată afișată în text clar.
- Dacă testul de conexiune eșuează, Klacks semnalează motivul concret (de ex. eroare de autentificare, eroare de handshake SSL, depășire de timp) în loc de un mesaj de eroare generic.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
