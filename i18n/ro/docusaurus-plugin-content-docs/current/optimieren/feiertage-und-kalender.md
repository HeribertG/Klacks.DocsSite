---
sidebar_position: 4
---

Calendarul perpetuu calculează automat sărbătorile legale pentru fiecare an — definiți regulile o singură dată, iar Klacks cunoaște apoi sărbătorile pentru toți anii următori.

## Cum funcționează

Fiecare sărbătoare este descrisă printr-o regulă scurtă. Există două tipuri de bază:

- **Date fixe** în formatul `MM/DD`: `01/01` este Anul Nou, `08/01` este ziua națională elvețiană, `12/25` Crăciunul.
- **Date raportate la Paște** în formatul `EASTER+XX` sau `EASTER-XX`: data Paștelui este calculată automat conform formulei lui Gauss, iar sărbătoarea este definită ca distanță față de aceasta. Exemple: `EASTER-02` = Vinerea Mare, `EASTER+01` = a doua zi de Paște, `EASTER+39` = Înălțarea Domnului, `EASTER+50` = a doua zi de Rusalii, `EASTER+60` = Corpus Christi.

În plus, există **date fixe cu decalaj în funcție de ziua săptămânii** (`MM/DD+XX+WW`, respectiv `MM/DD+XX-WW`) pentru sărbători precum „prima zi de joi din noiembrie” (`11/01+00+TH`) sau „ultima zi de luni din mai” (`05/25+00-MO`).

Cu **SubRules** mutați automat o sărbătoare atunci când aceasta cade într-o anumită zi a săptămânii — de exemplu `SA+2;SU+1`: dacă ziua cade sâmbătă sau duminică, ea alunecă pe luni. Mai multe reguli se separă prin `;`.

Pentru fiecare regulă completați, de asemenea, numele și descrierea (multilingv), țara și cantonul/regiunea, precum și casetele de bifat **Sărbătoare legală** și **Plătită**.

## Bine de știut

- Abrevierile zilelor săptămânii sunt în engleză: `SU`, `MO`, `TU`, `WE`, `TH`, `FR`, `SA`.
- SubRules sunt gândite în primul rând pentru a muta sărbătorile căzute în weekend pe următoarea zi lucrătoare.
- Caseta de bifat **Plătită** este relevantă pentru calculul salarial.
- Prin țară și canton/regiune controlați diferențele regionale — de exemplu, Vinerea Mare nu este valabilă în toate cantoanele din Elveția (excepții: VS, TI).
- Pachetele de calendar preinstalate pentru țări și cantoane elvețiene sunt protejate împotriva ștergerii; selecțiile de calendar create chiar de dumneavoastră pot fi șterse oricând.

![Reguli de sărbători în Klacks](/img/app-calendar-de.png)

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Autentificare `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
