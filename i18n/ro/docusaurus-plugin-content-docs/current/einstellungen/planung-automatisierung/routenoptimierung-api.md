---
sidebar_position: 4
---

În Setări > OpenRoute introduceți cheia API pentru serviciul extern openrouteservice.org, pe care Klacks îl folosește pentru optimizarea rutelor.

## Cum funcționează

OpenRouteService calculează timpii de deplasare și distanțele — pentru mersul cu mașina, cu bicicleta și pe jos — oferind astfel baza pentru optimizarea rutelor în Klacks. În singurul câmp al acestei pagini introduceți cheia dumneavoastră API personală. Puteți obține o cheie gratuită prin linkul de înregistrare către openrouteservice.org, indicat pe pagină.

## Bine de știut

- Cheia este trimisă direct din browser către openrouteservice.org și, din acest motiv, este afișată în mod deliberat **în text clar**, nu mascată (`***`) — spre deosebire, de exemplu, de parolele de e-mail. Acest lucru este intenționat, pentru a putea recunoaște o greșeală de tastare sau o cheie expirată, nu este o eroare de afișare.
- În baza de date, cheia este totuși stocată criptat.
- Fără o cheie validă, optimizarea rutelor nu funcționează — timpii de deplasare și distanțele nu pot fi calculate.
- Pentru simpla conversie a adreselor în coordonate (geocodare), Klacks folosește un alt serviciu, separat — această cheie este responsabilă exclusiv pentru calculul rutelor.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
