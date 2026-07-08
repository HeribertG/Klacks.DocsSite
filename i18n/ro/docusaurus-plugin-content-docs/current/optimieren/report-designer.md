---
sidebar_position: 6
---

Cu Report Designer creați propriile șabloane de tipărire — de la planul de servicii până la lista de adrese — direct în Klacks, fără instrumente externe.

## Cum funcționează

Un raport este format din trei zone, pe care le editați în tab-ul *Designer*:

- **Antet (Header)** — este tipărit în partea de sus a fiecărei pagini. Are trei zone (stânga, centru, dreapta), care pot conține câmpuri din baza de date, text liber sau imagini (de exemplu sigla companiei dumneavoastră, încărcată prin managerul de imagini).
- **Corp (Body)** — conține unul sau mai multe tabele de date. Coloanele se adaugă prin drag & drop din lista de câmpuri; ordinea se ajustează tot prin drag & drop, iar lățimea printr-un câmp de introducere în procente, pentru fiecare coloană.
- **Subsol (Footer)** — este tipărit în partea de jos a fiecărei pagini.

Fiecare tabel este asociat cu o **sursă de date**, pe care o alegeți în tab-ul *Sursă de date*: plan de lucru (Schedule), adrese ca listă sau detaliu, absențe, schimburi, grupuri sau șablon container. Sursa de date determină ce câmpuri sunt disponibile.

Pentru design sunt disponibile:
- **Formatare** pentru fiecare celulă și text liber: font, dimensiune, aldin/cursiv/subliniat, culoare text, aliniere.
- **Chenar de celulă** individual pentru fiecare latură (sus/dreapta/jos/stânga), cu stil și culoare de linie.
- **Subsol de tabel** cu câmpuri SUM: coloanele numerice sunt însumate automat.
- **Rânduri cu text liber** înainte sau după tabelele de date — de exemplu pentru observații, condiții sau câmpuri de semnătură.
- **Setări de pagină** în tab-ul *General*: orientare portret sau vedere, dimensiune hârtie (A4, A3, B4/B5 JIS, Letter) și margini de pagină în mm.

## Bine de știut

- **Merged Fields:** prin bara de instrumente a câmpului selectat puteți combina mai multe câmpuri într-o singură coloană; separatorul (virgulă, spațiu, sfârșit de linie, cratimă) este configurabil.
- Pentru sursa de date **Plan de lucru** există două opțiuni suplimentare: *Combină intrările pe zi* (mai multe intrări din aceeași zi într-un singur rând) și *Afișează perioada completă* (toate zilele, inclusiv cele fără intrări).
- Subsolul de tabel se activează printr-o casetă de bifat plasată direct sub tabelul respectiv; eticheta SUM poate fi afișată sau ascunsă separat pentru câmpul de subsol.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Autentificare `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
