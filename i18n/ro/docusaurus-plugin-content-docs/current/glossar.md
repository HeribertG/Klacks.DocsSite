---
sidebar_position: 8
---
# Glosar

Termenii care apar mereu în Klacks și în această documentație — pe scurt și în ordinea în care îi veți întâlni.

## Planificare

**Rând de angajat**
Cea mai mică unitate planificabilă. Nu persoana și nu ziua, ci rândul unei persoane într-o fișă de plan concretă. Toate valorile planului sunt legate de acest rând.

**Fișă de plan**
Un container care adună **trimiteri** la rânduri de angajați — nu copii. De aceea, o persoană există o singură dată, indiferent în câte subplanuri apare, iar o modificare este vizibilă imediat peste tot. Baza [planificării modulare](../planen/modulare-planung/).

**Planificare automată**
Asistentul completează un plan după regulile dumneavoastră. Calculul rulează în fundal, în timp ce continuați să lucrați — vezi [Planificare automată](../planen/auto-planung/).

**Disponibilitate**
Când este o persoană gata de lucru — cu precizie de ore sau de zile, pentru angajați proprii și externi. Vezi [Grila de disponibilitate](../planen/verfuegbarkeits-raster/).

**Comandă (lucrare)**
O schiță a unei intervenții, care încă poate fi editată. O comandă **nu este încă planificabilă**.

**Sigilare**
Pasul unic și **ireversibil** care transformă o comandă într-o tură planificabilă. În acest moment ia naștere simultan omologul planificabil al comenzii. Crearea directă a unei ture planificabile nu există în Klacks — fiecare tură apare prin sigilare. Vezi [Ciclul de viață al unei ture](../planen/schicht-lebenszyklus/).

**Tură (serviciu)**
Intervenția planificabilă, sigilată. Termenul „serviciu” înseamnă același lucru.

**Niveluri de aprobare (plan de ture)**
Planul de ture parcurge patru stări într-o ordine fixă: **ciornă → confirmat → aprobat → încheiat**. Confirmarea o poate face orice cont autentificat; aprobarea doar Supervisor și Admin; încheierea exclusiv Admin. Vezi [Flux de aprobare](../planen/freigabe-workflow/).

**Perioadă / închiderea perioadei**
Perioada de decontare (săptămânală, bisăptămânală, lunară sau personalizată; stabilită prin intervalul de plată). Închiderea face o perioadă obligatorie și rămâne rezervată rolului Admin — vezi [Închiderea perioadei](../planen/periodenabschluss/).

**Absență — două lucruri, un singur cuvânt**
„Absență” desemnează, în zona datelor de bază, **catalogul tipurilor de absență** (nume, culoare, durată implicită, valoare implicită). Barele din calendar sunt, în schimb, fie o **dorință** (o absență planificată, liber mutabilă și fără nivel de blocare), fie o **absență înregistrată** (preluată din planul de servicii, doar în citire pe pagina de absențe și cu nivel de blocare). Cine le confundă pe cele două caută în locul greșit.

## Asistentul AI

**Klacksy**
Asistentul AI al Klacks. Planifică, explică și execută — cu un model la libera alegere. Vezi [Klacksy](../ki/klacksy-ki-assistent/).

**Abilitate (skill)**
O capacitate individuală, delimitată, a lui Klacksy — un înveliș declarativ în jurul unei logici de program concrete („caută angajat”, „atribuie contract”, „creează raport”). Klacksy alege la execuție abilitățile potrivite.

**Nivel de autonomie**
Cât de departe poate merge Klacksy fără să întrebe:

| Nivel | Nume | Comportament |
|---|---|---|
| 0 | Sugerare | Fiecare acțiune de scriere necesită confirmarea dumneavoastră |
| 1 | Asistat | Acțiunile reversibile se execută liber; cele definitive și cele sensibile întreabă |
| 2 | Autonom (implicit) | Totul, cu excepția acțiunilor clasificate drept sensibile, se execută liber |
| 3 | Complet autonom | Și pașii definitivi se execută |

Acțiunile sensibile — de exemplu ștergerea utilizatorilor sau modificarea drepturilor — întreabă la **fiecare** nivel. Vezi [Nivele de autonomie](../einstellungen/klacksy-konfiguration/autonomie-stufen/).

## Roluri și operare

**Admin / Supervisor / Planificator**
Cele trei niveluri de acces. Admin poate tot, Supervisor poate crea și edita; un cont fără rol este Planificator. Prezentarea generală se află în [Roluri și drepturi](../erste-schritte/rollen-und-rechte/).

**Profil de țară**
Un set de setări pregătit pentru o țară: limbă, fus orar, calendar de sărbători, weekend și începutul săptămânii, limite ale timpului de lucru, drept la concediu, sporuri, exportul salarial implicit și șabloane pe domenii de activitate. Se alege la instalare prin `REGION`.

**Playground**
Instanța de test publică de la [play.klacks-software.ch](https://play.klacks-software.ch), cu date demonstrative — în mod expres pentru încercări, fără date personale reale. Vezi [Instalare și Playground](../erste-schritte/installation-und-playground/).

**On-Premise**
Funcționarea pe propria infrastructură: hardware-ul dumneavoastră, baza dumneavoastră de date, datele dumneavoastră. Termenul opus variantei găzduite.

**Serviciu de actualizare**
Serviciul inclus, care aplică actualizări semnate — cu backup în prealabil și rollback automat în caz de probleme. Vezi [Actualizări și rollback](../betrieb/updates-und-rollback/).

**Protecția datelor**
Klacks nu „sună acasă”: datele dumneavoastră nu sunt raportate înapoi producătorului. De datele care trebuie într-adevăr șterse se ocupă [păstrarea datelor](../einstellungen/system-sicherheit/datenaufbewahrung/) — ștergerile sunt eliminate fizic după expirarea termenului.

---

*Lipsește un termen sau este explicat greșit? [Comunitatea Klacks pe Discord](https://discord.gg/YRP8p2abVC).*
