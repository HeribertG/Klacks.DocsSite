---
sidebar_position: 5
---

Regulile de planificare definesc condițiile-cadru pentru planificarea automată a serviciilor — orele de lucru, perioadele de repaus și capacitățile pe care Klacks le respectă la repartizarea serviciilor.

## Cum funcționează

O regulă de planificare este asociată unui **contract**. Valorile limită definite se aplică astfel tuturor angajaților cu acest contract. Fiecare regulă cuprinde patru domenii:

**Zile lucrătoare & perioade de repaus**
- Max. zile lucrătoare: regulă flexibilă pentru lungimea preferată a blocului, înainte de a se planifica o zi de repaus (de ex. „5 zile lucru, apoi repaus") — o încălcare nu face planul invalid, ci doar mai puțin optim
- Min. zile de repaus între două blocuri de lucru
- Min. ore libere între două zile lucrătoare (perioada de repaus de la sfârșitul unei zile de lucru până la începutul următoarei)
- Max. interval optim între ture, în ore
- Max. zile lucrătoare consecutive fără zi de repaus

**Limite orare**
- Max. ore zilnice și max. ore săptămânale
- Ore de lucru zilnice (timp normat)
- Prag de ore suplimentare: de la acest număr de ore săptămânale, orele sunt considerate ore suplimentare

**Ore lunare**
- Ore garantate (numărul minim asigurat angajatului pe lună)
- Ore minime și maxime pe lună
- Ore de normă întreagă (numărul de ore lunare corespunzător unei angajări cu normă întreagă)

**Concediu**
- Zile de concediu pe an calendaristic

## Bine de știut

- La crearea unei reguli noi, **valorile implicite din setări** (Reguli de planificare — valori implicite) sunt preluate automat; puteți ajusta ulterior fiecare valoare individual.
- Regulile de planificare acționează prin contract — nu trebuie să le gestionați pentru fiecare persoană în parte. Dacă o regulă se schimbă, aceasta afectează toți angajații cu acest contract.
- Pragul de ore suplimentare și timpul normat sunt două lucruri diferite: timpul normat este standardul pe zi, pragul de ore suplimentare este valoarea de prag pe săptămână.
- „Max. zile lucrătoare" (preferință flexibilă pentru lungimea blocului) și „Max. zile lucrătoare consecutive" (limită superioară strictă, niciodată depășibilă) sunt două reguli diferite — a nu se confunda.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
