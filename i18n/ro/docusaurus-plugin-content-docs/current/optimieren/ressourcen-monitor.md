---
sidebar_position: 3
---

Monitorul de resurse arată dintr-o privire cum stă gradul de încărcare al personalului unui grup (sau al tuturor grupurilor) în anul selectat — o bară pentru fiecare zi, evoluția întregului an pe parcursul a 365 de zile.

## Cum funcționează

Reprezentarea urmează modelul consacrat în planificarea personalului «Capacity vs. Workload Chart» (cunoscut în literatura de management de proiect drept «Resource Histogram»). Elementele:

- **Bare verzi — Servicii (Dienste):** numărul de servicii planificate în ziua respectivă. Fiecare serviciu contează ca o poziție de angajat; serviciile de tip container contează ca 1.
- **Bare gri — Absențe:** numărul de angajați absenți, suprapuse peste barele verzi. O zi întreagă de concediu sau de boală contează ca 1, o jumătate de zi ca 0,5 — inclusiv în weekend.
- **Linia punctată roz — Disponibilitate dorită:** câți angajați ar fi disponibili în medie, dacă se respectă numărul de zile de lucru dorite pe săptămână (standard: 5 zile lucru, 2 zile repaus). Acesta este obiectivul planificării.
- **Linia întreruptă roșie — Disponibilitate maximă:** maximul fizic/legal la numărul maxim admis de zile de lucru consecutive (standard: 6). Se află întotdeauna la nivelul sau peste linia roz.
- **Linia albastră — Numărul de angajați:** întregul personal cu contract activ în ziua respectivă (Headcount).

**Interpretare:** dacă marginea superioară a barelor verzi se apropie de linia roz, personalul este utilizat optim. Diferența dintre linia albastră și marginea superioară a barelor suprapuse reprezintă rezerva dumneavoastră.

Cu butoanele săgeată din dreapta sus schimbați anul; prin selecția de grup vă restrângeți la o locație sau o echipă.

## Bine de știut

- Valoare orientativă din experiență: marginea superioară a barelor gri de absență nu ar trebui să depășească o treime din diferența dintre servicii și personalul total — altfel rezerva operațională este pusă în pericol, iar vârfurile de boală sau de concediu sunt greu de acoperit.
- Valorile sunt estimări și aproximări, nu un calcul exact — ele oferă o imagine a disponibilității.
- Serviciile provin din planificare, nu din realizare — astfel sunt vizibile și serviciile viitoare.
- În cazul unui contract 24/7, linia roz este netezită pe parcursul săptămânii (aprox. 0,71 pe persoană și zi calendaristică); în cazul unui contract luni–vineri, ea este 1,0 în zilele lucrătoare și 0 în weekend.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Autentificare `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
