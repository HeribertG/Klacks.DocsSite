---
sidebar_position: 5
---

# Puncte de preluare ERP

În Setări > Import (vizibil doar în modul expert), cardul „Puncte de intrare ERP”, configurați modul în care comenzile dintr-un sistem ERP extern sunt preluate automat în Klacks sub formă de fișiere XML.

## Cum funcționează

**Trei căi de livrare:** Sistemul ERP poate pune fișiere XML într-un dosar de pe serverul Klacks (Klacks le preia automat conform unui program, imediat ce un fișier a rămas neschimbat timp de 10 secunde), le poate trimite direct printr-un HTTPS-POST către un endpoint de import (autentificat cu un token de acces), sau o administratoare încarcă manual fișierul XML pe această pagină prin drag-and-drop (importul pornește imediat). Nu există SFTP; se importă doar fișiere XML în formatul `ErpOrderImport`.

**Punctul de preluare** este cutia poștală centrală, administrată chiar de Klacks, pentru toate fișierele de import — afișează trei zone: Intrare (primite sau aflate în curs de import), Procesat (cu un rezumat pentru fiecare fișier) și Eroare (fișiere ilizibile sau nevalide cu motivul erorii, cu posibilitate de reimportare sau ștergere). Un program (expresie cron, standard orar), precum și un comutator de activare pentru pauzare controlează preluarea automată.

**Ce cale se potrivește cărei instalări?** Pe un PC de birou (instalare Windows), calea cea mai la îndemână este dosarul; dosarul implicit este `C:\ProgramData\Klacks\ErpImport\erp\orders`. Este protejat, iar doar SYSTEM și administratorii au voie să scrie în el: un administrator trebuie să acorde contului sub care rulează exportul ERP dreptul „Modificare” exact asupra dosarului `erp\orders`, nu asupra întregului dosar `ProgramData\Klacks`. Pe un server Docker propriu, dosarul este un dosar obișnuit al serverului: fișierul Compose montează dosarul `erp-import` de lângă `docker-compose.yml` (modificabil prin `KLACKS_ERP_IMPORT_HOST_DIR`) pe `/app/ErpImport`, iar în interiorul containerului calea dosarului este `/app/ErpImport/erp/orders`. Instalarea raportează calea de pe server prin `KLACKS_ERP_IMPORT_HOST_PATH` (o setează programul de instalare); un ERP de pe calculatorul serverului scrie direct în acest dosar, iar contul sub care rulează exportul are nevoie de drept de scriere exact asupra acestui dosar. Instalările mai vechi aveau un volum denumit (named volume); conținutul lui este copiat o singură dată în dosar (vezi README-ul On-Prem, secțiunea „Upgrading from a named volume”). Pe card apare calea dosarului (pe Docker dosarul serverului, dedesubt calea din container) cu un buton pentru copiere. La o instalare găzduită de noi nu există acces la dosarele serverului: push cu token de acces sau încărcare manuală.

**Token-urile de acces** sunt necesare doar atunci când un sistem ERP livrează fișiere prin push. Fiecare token începe cu `klacks_erp_`, este valabil între 1 și 730 de zile (standard 365) și este afișat în text clar **doar o singură dată, la creare**. Un astfel de token este valabil exclusiv pentru endpoint-ul de import, nu și pentru restul accesului API, și poate fi revocat oricând.

**Procesare:** Comenzile sunt atribuite unui client existent sau nou creat pe baza ID-ului sistemului sursă și a referinței externe a clientului (sau, alternativ, a firmei/codului poștal/străzii) și sunt create inițial ca ciornă, pe care planificatorii trebuie să o verifice și să o sigileze. O livrare nouă modificată a unei comenzi deja sigilate încheie automat comanda veche și creează o versiune nouă, asociată; livrările repetate neschimbate nu declanșează nimic.

## Bine de știut

- Comenzile individuale eronate (de ex. fără zi a săptămânii sau cu referință dublă) sunt respinse, fără a bloca celelalte comenzi valide din același fișier; fișierul apare totuși în zona Procesat, marcat cu un simbol de avertizare, iar comenzile respinse pot fi extinse împreună cu motivul lor.
- Fișierele nu sunt mutate sau arhivate: rămân în dosar, iar starea lor este stocată în baza de date. Fișierele procesate cu succes sunt șterse automat după 90 de zile; fișierele din zona Eroare rămân până când sunt reimportate sau șterse.
- Formatul XML exact (câmpuri obligatorii, formate de dată, logica zilei săptămânii) este documentat direct în manualul de pe pagina de setări, precum și printr-un fișier exemplu descărcabil.
- Această configurare se află în zona de Setări și este deci rezervată rolurilor administrative.

---
*Încercați direct: [Klacks Playground](https://play.klacks-software.ch) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
