---
sidebar_position: 5
---

# Testul de conectivitate a modelului

Nu orice model de limbaj este potrivit pentru Klacksy — acesta trebuie să livreze fiabil apeluri de funcții structurate, în loc să răspundă în text liber. În Setări > Verificare model Klacksy, Klacks testează automat acest lucru pentru toate modelele configurate.

## Cum funcționează

**Testul:** Un clic pe „Găsește cele mai bune modele" trimite fiecărui model configurat (inclusiv celor dezactivate) aceeași sarcină de test mică: „Creează un angajat nou pe nume Anna Müller." Modelul trebuie să răspundă cu apelul de funcție structurat corespunzător și cu parametrii de nume corecți — nu cu un răspuns în text liber. În plus, fereastra de context trebuie să cuprindă cel puțin 32.000 de tokeni, pentru ca promptul de sistem și capacitățile lui Klacksy să încapă. Fiecare test rulează cu o limită de timp de 30 de secunde.

**Rezultat:** Modelele care îndeplinesc ambele criterii sunt considerate „potrivite" și sunt activate automat; modelele nepotrivite sunt dezactivate. Lista de rezultate este sortată după potrivire, apoi după capacitatea de apelare a funcțiilor, cost, latență și fereastra de context.

**Setarea modelului implicit:** Prin „Ca implicit" alegeți direct din lista de rezultate ce model va folosi Klacksy de acum înainte ca implicit. Fără o alegere proprie, Klacks setează automat ca implicit cel mai potrivit model.

## Bine de știut

- Testul verifică toate modelele configurate, nu doar cele activate — și modelele dezactivate până acum pot fi astfel activate, dacă trec testul.
- Un test trecut nu este o protecție împotriva costurilor: modelele scumpe, dar potrivite, sunt de asemenea activate. Costurile per 1000 de tokeni sunt vizibile în lista de rezultate.
- Acest test este conceput special pentru apelurile de funcții necesare capacității de acțiune și este independent de verificarea modelului din setările de voce, care acceptă o fereastră de context mai mică, suficientă pentru simpla curățare a transcrierii.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Autentificare `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
