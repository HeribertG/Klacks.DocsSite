---
sidebar_position: 1
---

# Optimizarea turelor și a rutelor

Pentru intervenții mobile — tururi de îngrijire la domiciliu (Spitex), runde de securitate, obiective de curățenie, livrări — Klacks planifică nu doar *cine*, ci și *în ce ordine*.

## Cum funcționează

Fiecare loc de intervenție are adresa sa înregistrată; astfel Klacks cunoaște traseele. Un **algoritm de tip colonie de furnici** (o metodă de optimizare consacrată pentru probleme de rutare) calculează, pe baza adreselor de intervenție, cea mai potrivită ordine:

1. **Înregistrarea adreselor** — se completează o singură dată la locurile de intervenție
2. **Optimizarea ordinii** — Klacks stabilește cea mai scurtă succesiune sensibilă; ocolișurile și deplasările în gol dispar
3. **Afișarea pe hartă** — tura finalizată apare ca rută, la alegere pentru mașină, bicicletă sau mers pe jos

Dacă pentru o intervenție sunt înregistrate intervale orare fixe (de exemplu doar dimineața), acest lucru este luat în calcul la planificarea turei — însă nu reprezintă o garanție fermă a respectării acestora.

## Bine de știut

- Pentru calculul distanței și al timpului de deplasare, Klacks poate integra serviciul extern OpenRouteService (coordonatele GPS sunt transmise în mod anonimizat) — în funcție de configurația instanței.
- Optimizarea turelor este un modul independent pentru serviciile de tip container; planificarea automată generală a programului de ture evaluează separat acoperirea, echitatea și conformitatea cu regulile.
- Mijlocul de transport poate fi ales pentru fiecare tură — util pentru tururi urbane cu bicicleta, alături de tururi rurale cu mașina.
- Dacă cineva se retrage, Klacks arată imediat cine este calificat și disponibil.

![Vizualizare cronologică (Timeline) pentru planificarea turelor](/img/app-timeline-de.png)

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Autentificare `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
