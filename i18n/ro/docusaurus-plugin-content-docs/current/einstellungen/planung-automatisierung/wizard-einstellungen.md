---
sidebar_position: 3
---

În Setări > Setări Wizard alegeți modelul de limbaj AI pe care „Holistic Harmonizer" — unul dintre asistenții de planificare ai Klacks — îl folosește pentru evaluarea sa.

## Cum funcționează

Din meniul derulant alegeți, dintre modelele LLM activate în Klacks, pe cel pe care Holistic Harmonizer urmează să îl folosească global (sau „(niciunul)", pentru a nu folosi niciunul). Prin butonul „Verificați toate modelele", Klacks trimite o imagine mică de test către fiecare model activat și verifică dacă acesta răspunde și poate citi imaginea — cu un timeout de până la 90 de secunde per model. Rezultatul apare sub formă de tabel cu modelul, furnizorul, starea (OK/eroare), timpul de răspuns și un buton pentru a prelua direct un model testat cu succes.

Procesarea imaginilor nu este aici un aspect secundar, ci o condiție obligatorie: conform textului de indicație de pe pagină, acest asistent („Wizard 3") are nevoie de modele cu procesare a imaginilor pentru a funcționa.

## Bine de știut

- Această pagină **nu** privește planificarea automată dintr-un clic, care distribuie automat serviciile către angajați — aceasta rulează printr-un algoritm genetic, complet fără LLM, și nu are setări aici.
- Dacă este setat „(niciunul)" ca model, Holistic Harmonizer este practic dezactivat.
- Care modele LLM sunt disponibile în principiu pentru selecție (activate/dezactivate) se stabilește în altă parte, în setările AI — aici alegeți doar dintre modelele deja activate.
- Butonul de verificare este un simplu autotest (accesibilitate + înțelegerea imaginii + timp de răspuns) și nu modifică, în sine, niciun fel de date de planificare.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
