---
sidebar_position: 7
---

# Reguli anti-spam

În Setări > Reguli anti-spam definiți reguli de filtrare cu care e-mailurile primite în modulul Inbox sunt clasificate automat ca spam — regulile se aplică atât la preluarea curentă a e-mailurilor noi (interogare IMAP), cât și la o reevaluare ulterioară a e-mailurilor deja primite.

## Cum funcționează

**Crearea unei reguli:** Alegeți un tip de regulă — Expeditorul conține, Domeniul expeditorului, Subiectul conține sau Conținutul conține — introduceți tiparul de verificat și faceți clic pe Adaugă.

**Administrarea regulilor:** Fiecare regulă poate fi activată sau dezactivată printr-o casetă de bifare, fără a fi ștearsă, precum și eliminată definitiv prin butonul coș de gunoi.

## Bine de știut

- Regulile dezactivate rămân salvate, dar nu mai au efect asupra e-mailurilor noi sau reevaluate — util pentru a suspenda o regulă cu titlu de test, în loc să o ștergeți.
- Klacks folosește pentru importul comenzilor ERP aceeași căsuță poștală ca și modulul normal de e-mail Inbox (arhitectură cu o singură căsuță poștală). O regulă definită prea larg (de exemplu un întreg domeniu al expeditorului) poate, teoretic, să clasifice ca spam și e-mailuri primite cu comenzi ERP — verificați regulile noi cu atenție corespunzătoare înainte de a le activa.
- Folosiți reguli de domeniu al expeditorului pentru a bloca organizații expeditoare nedorite în întregime, în loc să înregistrați fiecare adresă individuală ca regulă de tip expeditorul-conține.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
