---
sidebar_position: 5
---

În Setări > Puncte de preluare ERP configurați modul în care comenzile dintr-un sistem ERP extern sunt preluate automat în Klacks sub formă de fișiere XML.

## Cum funcționează

**Trei căi de livrare:** Sistemul ERP poate pune fișiere la dispoziție în depozitul de fișiere al punctului de preluare (Klacks le preia automat conform unui program), le poate trimite direct printr-un HTTP-POST către un endpoint de import (autentificat cu un token de acces), sau o administratoare încarcă manual fișierul XML pe această pagină prin drag-and-drop.

**Punctul de preluare** este cutia poștală centrală, administrată chiar de Klacks, pentru toate fișierele de import — afișează trei zone: Intrare (așteaptă următoarea rulare), Procesat (arhivă) și Eroare (fișiere nevalide cu motivul erorii, cu posibilitate de reimportare). Un program (expresie cron, standard orar), precum și un comutator de activare pentru pauzare controlează preluarea automată.

**Token-urile de acces** sunt necesare doar atunci când un sistem ERP livrează fișiere prin push. Fiecare token începe cu `klacks_erp_`, este valabil între 1 și 730 de zile (standard 365) și este afișat în text clar **doar o singură dată, la creare**. Un astfel de token este valabil exclusiv pentru endpoint-ul de import, nu și pentru restul accesului API, și poate fi revocat oricând.

**Procesare:** Comenzile sunt atribuite unui client existent sau nou creat pe baza ID-ului sistemului sursă și a referinței externe a clientului (sau, alternativ, a firmei/codului poștal/străzii) și sunt create inițial ca ciornă, pe care planificatorii trebuie să o verifice și să o sigileze. O livrare nouă modificată a unei comenzi deja sigilate încheie automat comanda veche și creează o versiune nouă, asociată; livrările repetate neschimbate nu declanșează nimic.

## Bine de știut

- Comenzile individuale eronate (de ex. fără zi a săptămânii sau cu referință dublă) sunt respinse, fără a bloca celelalte comenzi valide din același fișier; întregul fișier ajunge totuși în zona de eroare, pentru ca nimic să nu fie trecut cu vederea.
- Fișierele procesate sunt arhivate, nu șterse.
- Formatul XML exact (câmpuri obligatorii, formate de dată, logica zilei săptămânii) este documentat direct în manualul de pe pagina de setări, precum și printr-un fișier exemplu descărcabil.
- Această configurare se află în zona de Setări și este deci rezervată rolurilor administrative.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
