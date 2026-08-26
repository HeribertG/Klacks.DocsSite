---
sidebar_position: 7
---

# Predarea exportului de salarii

La sigilarea unei perioade delimitate pe grup, Klacks poate preda automat datele salariale ale acesteia unui sistem de salarizare extern. Această pagină explică ce este necesar pentru aceasta și de ce predarea uneori pare să nu livreze nimic — cel mai frecvent caz de suport legat de această funcție.

## Cum funcționează

**Condiție prealabilă: pachet suplimentar pentru exportul de salarii.** Predarea automată către un sistem de salarizare nu este o funcție de bază, ci presupune un pachet suplimentar propriu, care trebuie instalat **și** activ sub Setări > Plugin-uri de funcții. Dacă pachetul suplimentar lipsește sau este doar dezactivat, predarea nu livrează absolut nimic — niciun fișier, nicio indicație, nicio intrare vizibilă pentru dumneavoastră. Acest lucru este mai strict decât un format de export dezactivat în setările de export: acesta lasă cel puțin o intrare în jurnalul serverului; aici nici măcar atât.

**Predare unică (idempotență).** Predarea automată rulează exact o singură dată pentru fiecare combinație de grup, sistem țintă și interval exact de date — acest lucru împiedică ajungerea acelorași date salariale de două ori, din greșeală, la sistemul de salarizare. Dacă redeschideți o perioadă deja sigilată, corectați ceva și sigilați din nou, a doua predare este omisă fără niciun comentariu: pentru exact această combinație există deja o intrare de predare, iar redeschiderea nu o elimină.

**O descărcare manuală contează la fel.** O descărcare manuală de salarii, la cerere, pentru același grup/același sistem țintă/aceeași perioadă generează aceeași intrare ca o predare automată. O descărcare manuală, executată înainte de predarea automată, „consumă” aceasta pentru perioada afectată, exact ca și cum ar fi rulat deja automat.

| De ce nu a ajuns nimic (nou)? | Intrare existentă? | Blochează o descărcare manuală ulterioară? |
|---|---|---|
| Pachetul suplimentar nu este instalat/activ | nu | nu |
| Predat deja pentru exact această combinație | da (vizibil în fila „Protocol” a închiderii de perioadă) | nu |

**Două puncte de precizie:**

- O descărcare manuală **nu** preia nicio eventuală corecție de format de export înregistrată de suport — folosește întotdeauna valorile standard, chiar dacă pentru sistemul țintă există o corecție activă, care s-ar aplica pe calea automată.
- Blocarea unică este exactă: se aplică doar în cazul unui grup identic, al unui sistem țintă identic și al unei date de început/sfârșit identice. O altă perioadă sau un alt sistem țintă nu este blocat de o predare anterioară.

**Dacă după sigilare nu ajunge nimic sau trebuie transmise ulterior cifre corectate:** verificați mai întâi dacă pachetul suplimentar corespunzător este instalat și activ sub Setări > Plugin-uri de funcții. După o redeschidere și o corecție, calea sigură pentru a obține cifre corectate în sistemul de salarizare este **exportul manual** din secțiunea Închiderea perioadei (fila „Exporturi”) — acesta nu este supus nici blocării prin pachetul suplimentar, nici blocării unice a predării automate. Deoarece nici acesta nu preia o corecție de format de export, verificați în acest caz manual cifrele exportate față de o eventuală corecție activă.

## Bine de știut

- Baza fiecărei predări este o perioadă sigilată, delimitată pe grup — modul în care este sigilată o perioadă este descris pe pagina [Închiderea perioadei](../../planen/periodenabschluss.md). Sigilarea și redeschiderea sunt acolo rezervate rolurilor administrative.
- Această pagină descrie **exportul** datelor salariale din Klacks către un sistem de salarizare. Fluxul invers — **importul** de comenzi dintr-un sistem ERP în Klacks — este descris de [Punctele de preluare ERP](./erp-uebernahmepunkte.md).
- Pachetele suplimentare sunt gestionate central sub Setări > Plugin-uri de funcții: instalare, activare/dezactivare sau eliminare completă.
- Un pachet suplimentar dezactivat rămâne instalat, dar blochează predarea automată la fel de complet ca unul neinstalat.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
