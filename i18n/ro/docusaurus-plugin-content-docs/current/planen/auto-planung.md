---
sidebar_position: 1
---

# Planificare automată: planul în câteva secunde

Cea mai anevoioasă parte a planificării serviciilor — alocarea persoanelor pe ture — este preluată de Klacks cu un singur clic.

## Cum funcționează

În spatele planificării automate cu 1 clic se află un **algoritm genetic**: acesta generează mii de variante de plan, le evaluează și le combină pe cele mai bune în continuare — până când rezultă o soluție echilibrată. Regulile stricte au întotdeauna prioritate, abia apoi contează celelalte obiective:

- **Reguli** — dreptul muncii, perioadele de repaus, calificările și disponibilitățile nu sunt negociabile: niciun rezultat, oricât de bun, nu poate încălca o regulă strictă
- **Acoperire** — fiecare tură este ocupată cu numărul necesar de persoane
- **Echitate** — orele de lucru se distribuie uniform, iar succesiunea turelor per persoană urmează, pe cât posibil, tiparul dimineață → după-amiază → noapte
- **Continuitate** — acolo unde este posibil, angajații rămân la locul lor obișnuit de muncă

Porniți planificarea automată direct din planul de servicii pentru perioada selectată. Rezultatul apare ca un ciornă de plan obișnuită: totul poate fi ajustat manual, nimic nu este fixat definitiv fără confirmare.

## Bine de știut

- Calificările acționează ca o limită reală: cine nu are o calificare necesară nu este planificat.
- Planificarea automată respectă intrările deja existente — puteți deci fixa mai întâi punctele fixe și lăsa restul să fie completat automat.
- Dacă un rezultat nu vă place, planificați pur și simplu din nou: algoritmul găsește alternative echivalente.

![Grila planului de servicii Klacks](/img/app-schedule-de.png)

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
