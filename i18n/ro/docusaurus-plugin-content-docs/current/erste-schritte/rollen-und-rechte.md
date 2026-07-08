---
sidebar_position: 4
---

# Roluri și drepturi

Klacks cunoaște exact două niveluri de drepturi atribuibile pentru conturile de autentificare: **Supervisor** și **Admin**. Nu există un al treilea rol distinct din punct de vedere tehnic — termeni precum „Planificator" descriu mai jos o **funcție în activitatea zilnică**, nu un nivel suplimentar de autorizare.

## Cele două roluri reale

**Supervisor** poate crea, edita și șterge adrese, grupuri, contracte, absențe și ture, precum și aproba în planul de servicii o zi sau un grup și retrage din nou această aprobare. Simpla confirmare a orelor de lucru individuale, în schimb, nu necesită un rol special — acest lucru îl poate face orice cont de autentificare.

**Admin** poate face suplimentar tot ce poate face Supervisor, plus: acces la toate setările (inclusiv administrarea utilizatorilor în sine), încheierea și redeschiderea perioadelor, precum și administrarea zonelor special protejate precum Identity Provider, rapoarte și reguli de calendar.

Atribuirea se face printr-un meniu derulant în administrarea utilizatorilor (simbolul roată dințată) și are efect imediat, fără un clic separat de salvare.

## „Planificator" ca funcție, nu ca rol

În activitatea zilnică, munca de planificare propriu-zisă este preluată de obicei de un cont Supervisor — pornirea auto-planificării, ajustarea în grila de planificare prin drag & drop, trimiterea zilelor sau grupurilor spre aprobare. Aceasta nu este un nivel de autorizare separat, ci pur și simplu drepturile pe care le are oricum un cont Supervisor.

## Bine de știut

- Ultimul utilizator autentificat este afișat și el în administrarea utilizatorilor, dar nu poate fi editat, modificat în drepturi sau șters acolo de el însuși.
- Încheierea definitivă sau redeschiderea perioadelor rămâne rezervată exclusiv rolului Admin — chiar dacă un Supervisor a aprobat deja zile sau grupuri.
- Un cont de autentificare nu trebuie neapărat să fie asociat cu o fișă de date de bază a unui angajat — administrarea utilizatorilor și administrarea persoanelor sunt zone separate.

---
*Testați direct: [Klacks Playground](https://klacks-software.ch:7643) — Autentificare `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
