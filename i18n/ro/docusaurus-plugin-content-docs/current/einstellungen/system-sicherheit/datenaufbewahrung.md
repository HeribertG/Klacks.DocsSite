---
sidebar_position: 3
---

# Păstrarea datelor

În Setări > Păstrarea datelor stabiliți cât timp rămân păstrate în sistem înregistrările șterse — angajați, adrese, grupuri, servicii, ore de lucru, absențe, pauze și altele — înainte de a fi eliminate definitiv.

## Cum funcționează

**Ștergere în două etape:** Atunci când ștergeți o înregistrare în Klacks, aceasta este mai întâi doar marcată cu un soft-delete (marcată ca ștearsă, dar fizic încă prezentă). Abia după expirarea termenului configurat aici, un serviciu de fundal care rulează zilnic elimină rândurile marcate ca șterse **fizic și definitiv** din baza de date — pentru toate tabelele afectate, nu doar pentru o singură zonă.

**Configurarea termenului de păstrare:** Câmpul de introducere acceptă valori între 30 și 36'500 de zile (aproximativ 1 lună până la 100 de ani); pe lângă asta, Klacks afișează termenul și în ani/luni. Valoarea implicită este de 3'650 de zile (10 ani).

## Bine de știut

- O reducere a termenului are efect și asupra înregistrărilor deja șterse de mult timp: tot ceea ce este mai vechi decât noul termen este eliminat la următoarea rulare a serviciului de fundal — verificați înainte de o reducere dacă acest lucru este dorit.
- Ștergerea fizică este definitivă — după aceasta nu mai există nicio posibilitate de recuperare, nici măcar prin suport.
- Această setare este fundamentul tehnic al termenelor de ștergere descrise în declarația de protecție a datelor; se aplică global pentru toate tipurile de date care suportă soft-delete, nu este configurabilă per modul.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
