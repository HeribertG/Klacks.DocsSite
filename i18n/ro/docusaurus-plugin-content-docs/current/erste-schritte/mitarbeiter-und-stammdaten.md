---
sidebar_position: 3
---

Administrarea adreselor și persoanelor este elementul central al datelor dumneavoastră de bază: angajați, clienți și persoane externe cu adrese, date de contact, contracte, apartenență la grupuri și calificări — accesibile prin simbolul persoanelor din navigare.

## Cum funcționează

**Crearea angajaților:** Câmpurile obligatorii sunt prenumele, numele și sexul (Femeie/Bărbat/Intersexualitate/Persoană juridică). Opțional puteți introduce data nașterii, e-mail, telefon, adresă (stradă, cod poștal, localitate, canton, țară), precum și grup/departament. Alternativ, puteți lăsa crearea în seama asistentului Klacksy («creează un angajat …»).

**Status:** Statusul rezultă automat din data de intrare și de ieșire a apartenenței — nu există un câmp de status manual. Se face distincție între *Activi* (apartenența este în curs), *Foști* (data de ieșire este în trecut) și *Viitori* (data de intrare nu a sosit încă).

**Grupuri și departamente:** Angajaților li se pot atribui grupuri. Structura este ierarhică (de ex. `Klacks AG > IT > Dezvoltare`), sunt permise atribuiri multiple, iar drepturile pot fi controlate la nivel de grup.

**Contracte:** Fiecare persoană poate avea mai multe contracte, de exemplu în cazul unei schimbări de normă. Modelele de contract în sine sunt definibile liber: sub Setări > Contracte creați propriile contracte cu nume, normă, ore țintă/maxime/minime, sporuri (noapte, duminică și sărbătoare) și interval de plată; fiecărui contract i se poate atribui suplimentar un calendar propriu de sărbători, permițând astfel reprezentarea, de exemplu, a sărbătorilor diferite de la un canton la altul. Fiecare contract este valabil pe o perioadă limitată sau nelimitată.

**Import:** Nu există un import CSV pentru datele de bază. Directoarele existente sunt preluate automat prin sincronizare LDAP/Active Directory via un Identity Provider; persoanele individuale se creează manual sau prin Klacksy.

**Căutare și filtrare:** Căutarea text liber găsește persoane după nume, prenume, firmă sau număr de personal, precum și după numărul de telefon/cod poștal; suplimentar puteți filtra după canton, status (Activi/Foști/Viitori) și grup.

## Bine de știut

- Doar *Activii* pot fi planificați — verificați data de intrare/ieșire a apartenenței dacă cineva nu apare în planul de servicii.
- Mai multe contracte per persoană sunt normale, de exemplu în cazul unei schimbări de normă — nu trebuie să creați o a doua persoană pentru asta. Modelele de contract noi (normă, sporuri, calendar) le creați chiar dumneavoastră sub Setări > Contracte.
- Creați mai întâi structura de grupuri și abia apoi atribuiți persoanele — astfel drepturile la nivel de grup se aplică de la bun început.

---
*Testați direct: [Klacks Playground](https://klacks-software.ch:7643) — Autentificare `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
