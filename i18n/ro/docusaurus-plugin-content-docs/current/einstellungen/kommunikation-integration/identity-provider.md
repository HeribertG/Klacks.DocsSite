---
sidebar_position: 4
---

În Setări > Identity Provider conectați Klacks la un serviciu de director extern — LDAP/Active Directory sau OAuth2/OpenID Connect — pentru a importa automat angajați și/sau pentru a gestiona autentificarea prin acesta.

## Cum funcționează

**LDAP/Active Directory:** Introduceți host, port (389/636), SSL, Base DN, Bind DN, parola de bind și un filtru de utilizatori. Un comutator „Utilizează pentru import de clienți" activează importul automat: nume, prenume, titlu, firmă și adresă sunt preluate din atributele directorului — la OpenLDAP și Active Directory uneori sub denumiri de atribute diferite (de ex. `uid` vs. `sAMAccountName`, `street` vs. `streetAddress`). Aceste mapări de câmpuri sunt fixe în backend și nu pot fi editate din interfață.

**OAuth2/OpenID Connect:** Client ID, Client Secret, opțional Tenant ID (Azure), URL de autorizare, de token și UserInfo, precum și scope-uri — pentru autentificarea prin Google, Microsoft sau GitHub.

**Testarea conexiunii și sincronizarea:** La providerii LDAP/AD, „Testează conexiunea" afișează numărul de utilizatori găsiți, inclusiv un nume de utilizator exemplu. Dacă importul de clienți este activat, „Sincronizează acum" declanșează o comparare manuală; rezultatul (procesate/noi/actualizate/dezactivate) apare imediat după aceea ca mesaj pe pagină.

## Bine de știut

- Această pagină este accesibilă **doar pentru administratoare și administratori**, nu și pentru rolul de supervizor.
- Parola de bind și Client Secret sunt stocate criptat și afișate în interfață doar mascat (`***`); la salvare fără modificare, valoarea existentă este păstrată.
- Un jurnal de sincronizare permanent (istoric, istoric de erori) nu este în prezent afișat în interfață — doar rezultatul ultimei rulări manuale.
- Persoanele care nu mai sunt găsite în director nu sunt șterse la sincronizare, ci dezactivate prin data de ieșire a membrului lor; dacă reapar ulterior, sunt reactivate automat.
- Un identificator extern din director (LDAP ObjectGUID sau, alternativ, Distinguished Name) previne duplicatele: dacă la o sincronizare ulterioară este găsit același identificator, persoana existentă este actualizată în loc să fie creată din nou.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
