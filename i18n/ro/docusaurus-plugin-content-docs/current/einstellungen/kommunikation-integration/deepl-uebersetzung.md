---
sidebar_position: 3
---

În Setări > DeepL introduceți o cheie API DeepL, cu care Klacks poate traduce automat texte — în prezent, mai ales e-mailurile primite în căsuța de mesaje.

## Cum funcționează

**Cheie API:** Un singur câmp de introducere preia cheia API DeepL (format `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx` pentru API-ul gratuit Free, respectiv fără terminația `:fx` pentru API-ul plătit Pro). Klacks recunoaște automat, pe baza terminației `:fx`, care dintre cele două adrese API DeepL trebuie apelată — nu este necesară o comutare separată între Free și Pro. Un cont și cheia propriu-zisă se obțin pe deepl.com/pro-api.

**Utilizare:** În „Căsuța de mesaje" fiecare e-mail poate fi tradus prin simbolul de traducere în limba de interfață setată în prezent; originalul și traducerea pot fi comparate printr-un comutator. Fără o cheie salvată, această funcție nu este disponibilă.

## Bine de știut

- Această setare este globală pentru întreaga instalare — nu există o cheie separată per utilizator.
- Nu există un buton „Test" propriu pe această pagină; dacă cheia funcționează se vede la prima încercare de traducere din căsuța de mesaje.
- Dacă cheia este nevalidă sau a expirat, Klacks detectează acest lucru pe baza răspunsului de la DeepL (eroare de autentificare) și semnalează acest lucru în loc să afișeze o traducere goală sau greșită.
- Cheia este stocată criptat și afișată mascat în formular.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
