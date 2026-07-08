---
sidebar_position: 1
---

În Setări > Reguli de planificare (valori implicite) stabiliți valorile care sunt preconfigurate automat la crearea unui nou contract, respectiv a unei noi reguli de planificare.

## Cum funcționează

Pagina reunește mai multe grupuri de valori prestabilite:

- **Ore de lucru:** Ore de lucru zilnice (timp normat), pragul de ore suplimentare (ore/săptămână), orele lunare garantate, minime și maxime, precum și numărul de ore pentru normă întreagă.
- **Limite ale regulilor de planificare:** Zile de lucru maxime, zile de repaus minime între două blocuri de lucru, ore libere minime între două zile de lucru, decalaj optim maxim între ture, ore zilnice/săptămânale maxime și zile de lucru consecutive maxime — aceiași parametri pe care îi definește și o regulă de planificare individuală.
- **Sporuri:** Sporul de noapte, de sărbătoare legală, de sâmbătă și de duminică, în procente.
- **Zile de lucru standard și weekend:** Care zile ale săptămânii sunt considerate zile lucrătoare, dacă se lucrează în ture (tură de dimineață/după-amiază/noapte), care zile sunt considerate weekend și în ce zi a săptămânii începe săptămâna.
- **Comenzi de planificare (cuvinte-cheie):** Comenzile text `FREE`, `EARLY`, `LATE`, `NIGHT`, precum și variantele lor negate `-FREE`, `-EARLY`, `-LATE`, `-NIGHT` sunt configurabile aici. Dacă o persoană tastează aceste cuvinte direct într-o celulă de zi din planul de servicii, Klacks nu le recunoaște ca notă, ci ca preferință: `FREE` înseamnă „pe cât posibil, nu programa în această zi", `EARLY`/`LATE`/`NIGHT` preferă sau impun un anumit tip de tură, iar variantele negate exclud opusul. Atât planificarea automată, cât și Harmonizer-ul iau în considerare aceste preferințe ca indicație.

## Bine de știut

- Această pagină gestionează **valori implicite globale** — modificările au efect doar asupra contractelor, respectiv regulilor de planificare create ulterior, nu retroactiv asupra celor deja existente.
- Limitele regulilor de planificare de aici sunt identice cu cele pe care altfel le setați individual pentru fiecare contract — aici stabiliți doar valoarea inițială pe care o primește un contract nou.
- Comenzile de planificare sunt ascunse implicit în planul de servicii și pot fi afișate printr-o pictogramă dedicată din bara de instrumente.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
