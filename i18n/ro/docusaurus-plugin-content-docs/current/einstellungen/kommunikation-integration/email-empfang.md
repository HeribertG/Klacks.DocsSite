---
sidebar_position: 2
---

În Setări > Setări IMAP configurați o căsuță poștală pe care Klacks o interoghează în mod continuu în fundal și o afișează în zona „Căsuța de mesaje" — astfel corespondența primită poate fi urmărită automat, asociată angajaților și clienților.

## Cum funcționează

**Date de conexiune:** Server, port (standard 993), criptare SSL, nume de utilizator, parolă, folderul care trebuie interogat (standard `INBOX`), precum și intervalul de interogare în secunde (standard 300).

**Ce se întâmplă cu mesajele preluate:** Klacks interoghează periodic căsuța poștală prin IMAP, verifică mesajele noi cu un filtru anti-spam (spam-ul este mutat atât în Klacks, cât și în folderul Junk al căsuței poștale reale) și atribuie automat mesajele rămase înregistrării corespunzătoare de client sau angajat, cu condiția ca adresa expeditorului să fie salvată ca date de contact. Astfel ia naștere în „Căsuța de mesaje" un istoric de corespondență ce poate fi filtrat după persoană. Modificările precum „marchează ca citit", mutarea sau ștergerea se reflectă și în căsuța poștală reală.

**Testarea conexiunii:** Butonul „Testează conexiunea IMAP" se conectează efectiv la server, se autentifică, deschide folderul configurat în modul citire și afișează numărul de mesaje găsite. Dacă folderul nu există, acest lucru este semnalat explicit.

## Bine de știut

- Această căsuță poștală **nu** este un canal pentru raportarea absențelor și **nu** face parte din preluarea comenzilor ERP (pentru aceasta există puncte de preluare separate, vezi pagina proprie) — ea alimentează exclusiv „Căsuța de mesaje" generală.
- Această setare este globală pentru întreaga instalare — nu există un cont IMAP separat per utilizator.
- Dacă cheia de criptare a instalării este resetată, Klacks nu mai poate decripta parola salvată și pune interogarea în pauză, până când parola este salvată din nou.
- Mesajele din căsuța de mesaje pot fi traduse direct dacă DeepL este configurat (vezi pagina proprie).

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
