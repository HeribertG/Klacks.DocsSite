---
sidebar_position: 2
---

# Personal Access Tokens

Personal Access Tokens (PAT-uri) sunt chei API cu durată lungă de viață, cu care instrumente și servicii externe accesează în siguranță Klacks fără nume de utilizator și parolă — de exemplu asistenți AI precum Claude Desktop prin Model Context Protocol (MCP), scripturi de automatizare sau pipeline-uri CI/CD.

## Cum funcționează

**Crearea unui token:** În Setări > Personal Access Tokens faceți clic pe „Creează token nou", atribuiți un nume sugestiv (de exemplu `Claude Desktop` sau `CI-Pipeline`) și alegeți o durată de valabilitate între 1 și 730 de zile (implicit: 365 de zile). Tokenul este afișat după creare în formatul `klacks_pat_<șir de caractere aleatoriu>` **exact o singură dată** — copiați-l imediat, deoarece ulterior nu mai poate fi recuperat.

**Utilizare:** Tokenul este transmis ca Bearer Token în antetul `Authorization` al fiecărei cereri API, de exemplu `Authorization: Bearer klacks_pat_...`. Pentru clienți MCP precum Claude Desktop, îl introduceți ca variabilă de mediu `AUTHORIZATION` a serverului MCP, care indică spre `/mcp`.

**Administrare:** Prezentarea generală afișează numele, data creării, data de expirare și ultima utilizare a fiecărui token — tokenul în text simplu nu mai este afișat niciodată acolo. Tokenurile care expiră în următoarele 30 de zile sunt marcate în listă. Prin butonul Revocă, un token este blocat imediat și definitiv.

## Bine de știut

- Klacks stochează doar un hash SHA-256 al tokenului, niciodată tokenul în text simplu — un token pierdut nu poate fi recuperat, ci doar revocat și recreat.
- Fiecare token este legat de contul dvs. de utilizator și are aceleași permisiuni ca și contul dvs. — nu există o restricționare granulară a domeniului (scope) per token.
- Folosiți câte un token separat pentru fiecare instrument, astfel încât, în caz de suspiciune de abuz, să îl puteți revoca țintit, fără a întrerupe alte integrări.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
