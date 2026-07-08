---
sidebar_position: 5
---

În Setări > Vizibilitatea grupurilor pe utilizator stabiliți ce grupuri — și, implicit, ce date asociate — poate vedea un anumit utilizator.

## Cum funcționează

Lista afișează toți utilizatorii cu numele lor și numărul de grupuri rădăcină (root) atribuite (vizibile). Un clic pe număr deschide un formular cu o listă de casete de bifat pentru toate grupurile rădăcină; aici bifați ce grupuri poate vedea utilizatorul respectiv. Dacă un grup rădăcină este activat, acest lucru se aplică automat și tuturor subgrupurilor sale.

Administratorii sunt exceptați de la această restricție: la ei butonul este dezactivat, iar numărul afișat corespunde întotdeauna numărului total al tuturor grupurilor rădăcină — administratorii văd, în principiu, totul.

## Bine de știut

- Pentru un utilizator obișnuit (non-administrator) fără nicio atribuire, „0 grupuri atribuite" înseamnă: acest utilizator nu vede în prezent **nimic** în zonele delimitate pe grupuri (de ex. tabloul de bord, lista de clienți) — aceasta nu este o disfuncționalitate, ci consecința directă a lipsei atribuirii.
- Excepție: dacă în sistem nu există momentan **deloc** grupuri, toți utilizatorii văd totul — astfel, instalațiile fără structură de grupuri nu necesită întreținerea acestei setări.
- Creați mai întâi structura de grupuri în datele de bază, înainte de a face atribuiri aici — fără grupuri existente, nu aveți ce bifa aici.
- Această setare controlează **vizibilitatea** datelor, nu **drepturile** fundamentale ale unui rol — rolurile/drepturile sunt gestionate independent de aceasta.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
