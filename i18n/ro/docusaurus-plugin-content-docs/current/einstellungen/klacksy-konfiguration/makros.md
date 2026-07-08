---
sidebar_position: 7
---

# Macrouri

Sporurile pentru munca de noapte, duminică și în zilele de sărbătoare sau calculul exact al orelor pentru concediu și serviciul militar nu pot fi acoperite printr-o formulă fixă, valabilă pentru fiecare companie. În Setări > Macrouri scrieți pentru asta propriile scripturi mici într-un limbaj asemănător cu BASIC.

## Cum funcționează

**La ce servesc macrourile:** Un macro calculează, din datele unui serviciu (Work) sau ale unei angajări, o singură valoare de retur — de obicei un spor exprimat în ore sau franci. Rezultatul este salvat în `Work.Surcharges` și intră automat în evaluarea orelor (ClientPeriodHours). Fiecare macro aparține unui tip — tură/angajare sau reguli de muncă — și poate fi denumit, editat și șters ca orice altă setare.

**Date disponibile:** Prin `IMPORT` sunt disponibile în script, printre altele, `hour` (ore lucrate), `fromhour`/`untilhour` (ora de început/sfârșit ca ore zecimale), `weekday` (ISO-8601: 1 = luni … 7 = duminică), `holiday`/`holidaynextday` (ziua curentă, respectiv următoarea, este sărbătoare) precum și ratele de spor stabilite în contract `nightrate`, `holidayrate`, `sarate` (sâmbătă) și `sorate` (duminică).

**Domeniul limbajului:** Limbajul de scripting cunoaște structuri de control (`IF…THEN…ELSEIF…ELSE…ENDIF`, `SELECT CASE`, `FOR…NEXT`, `DO…LOOP`), funcții proprii (`FUNCTION`) și proceduri (`SUB`, trebuie definite înainte de primul apel), precum și funcții încorporate pentru șiruri de caractere, matematică, trigonometrie și timp (de exemplu `TimeToHours`, `TimeOverlap` pentru intervale care trec de miezul nopții). Rezultatul este returnat prin `OUTPUT typ, wert`.

**Testare în editor:** Editorul de macrouri are propria filă de testare: introduceți valori exemplu pentru variabilele importate, verificați sintaxa și rulați scriptul cu titlu de test. `DEBUGPRINT`/`DEBUGCLEAR` afișează valori suplimentare în fereastra de test, fără a influența valoarea de retur efectivă.

**Securitate:** Interpretorul rulează într-un sandbox fără acces la sistemul de fișiere sau la rețea — un macro poate greși calculul, dar nu poate produce daune în afara calculului.

## Bine de știut

- `DIM` declară o variabilă, dar nu o inițializează în același timp — `DIM x = 10` este o eroare de sintaxă; mai întâi `DIM x`, apoi separat `x = 10`.
- Cuvintele cheie precum `ENDIF`, `ENDFUNCTION` și `ENDSUB` se scriu într-un singur cuvânt, nu cu spații.
- `weekday` respectă în întregime standardul ISO-8601 (1 = luni … 7 = duminică) — pentru interogări proprii `SELECT CASE` pentru „weekend", acestea sunt valorile 6 (sâmbătă) și 7 (duminică).

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Autentificare `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
