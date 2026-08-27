---
sidebar_position: 7
---

# Verificarea calității planificării: încălcări, lacune și plasări omise

După o rulare a asistenților de planificare, Klacks pune alături de rezultat trei tabele de diagnostic: unde planul se lovește de o regulă, unde lipsește o calificare și ce nu a fost planificat deloc.

## Cum funcționează

Cele trei rapoarte apar în dialogul asistentului de planificare respectiv — nu în grila planului. Ele fac parte din rezultatul unei rulări a asistentului și sunt vizibile doar pentru administratori, deoarece planificarea automată presupune în ansamblu rolul de Admin. Fiecare raport indică în titlu numărul intrărilor sale și **nu este afișat deloc dacă nu a găsit nimic** — așadar, o casetă lipsă este o veste bună.

**Așa ajungeți la dialoguri:** Butonul cu baghetă magică din planul de ture pornește, în starea de bază, direct o rulare de planificare, fără a afișa un dialog. Cu **Ctrl+Shift+H**, administratorii comută butonul pe un meniu derulant cu asistenții de planificare individuali (Plan, Fuzzy Harmonizer, Holistic Harmonizer, Background Optimizer, Recovery) — abia prin acest meniu derulant se deschid dialogurile cu tabelele de diagnostic.

**Lacunele de calificare** apar odată cu rezultatul, deci *înainte* de a-l prelua. Coloane: grad de severitate, tură, dată, calificare necesară, motiv — plus o coloană „Angajat”, de îndată ce cel puțin un rând menționează o persoană. Ca motiv apare *Inexistentă*, *Expirată* sau *Nivel prea scăzut*. În spatele acestora se află două situații diferite: fie un loc de tură a rămas neocupat pentru că nicio persoană disponibilă nu deține calificarea cerută — atunci rândul nu menționează nicio persoană. Fie o persoană a rămas pe o tură pentru care nu este calificată — atunci apare numele ei. Dacă lipsește doar calificarea din sistem, o înregistrați la persoana respectivă; [Catalogul de calificări](../einstellungen/stammdaten-organisation/qualifikationen.md) descrie cum sunt gestionate calificările. În caz contrar, planificați pe altcineva sau ajustați cerința turei.

**Încălcările de conformitate** apar *după* ce ați preluat rezultatul. Coloane: dată, angajat, comentariu; comentariul denumește în text clar regula încălcată, împreună cu valorile concrete. Rândurile roșii sunt erori, cele galbene avertismente și indicații. La cei doi asistenți de armonizare, raportul arată exclusiv ceea ce noul scenariu aduce **în plus** față de planul real — precum și câte dintre aceste încălcări sunt gestionate în modul de blocare. Acestea împiedică preluarea scenariului până când sunt remediate sau suprascrise explicit de o persoană autorizată.

**Plasările omise** există doar la asistentul pentru planificarea turelor, tot după preluare — și integral în roșu. Coloane: dată, angajat, tură, motiv. Aici nu apare ce a fost planificat, ci ce Klacks a decis în mod deliberat să **nu** scrie: alocări care ar fi încălcat o regulă gestionată în modul de blocare. Motivul apare ca o categorie scurtă („Perioadă de repaus prea scurtă”, „Prea multe zile de lucru consecutive”, „Coliziune de timp” …). În funcție de situație, Klacks oferă persoanelor autorizate posibilitatea de a prelua totuși rularea cu Override; toți ceilalți primesc indicația de a repeta asistentul cu Override activat sau de a ruga o persoană autorizată. Fiecare Override este înregistrat.

Ce reguli sunt verificate și cât de strict se aplică stabiliți în [Regulile de planificare](../planen/planungsregeln.md); modul în care ia naștere planul este descris în [Planificare automată: un clic, restul rulează în fundal](../planen/auto-planung.md).

## Bine de știut

- O intrare blocată nu anulează întregul plan: doar alocările afectate dispar, intrările corecte ale aceleiași persoane sunt scrise totuși.
- Pentru gradul de severitate al lacunelor de calificare se aplică o regulă simplă: **Eroare** doar atunci când o calificare marcată drept obligatorie lipsește complet. O calificare expirată, un nivel prea scăzut și orice cerință opțională apar ca **Avertisment**.
- Un loc de tură neocupat apare în lacunele de calificare doar atunci când chiar nicio persoană disponibilă nu a intrat în discuție. Dacă a rămas neocupat din alte motive, este vorba de o subacoperire obișnuită, care nu este raportată aici.
- Dacă planificarea automată rulează ca proces global, Klacks raportează rezultatul doar printr-o scurtă notificare, împreună cu numărul lacunelor de calificare — tabelele detaliate aparțin dialogurilor asistenților individuali.
- Rapoartele sunt simple vizualizări: nu pot fi editate și nu modifică nimic. Corectarea se face în [Grila planului: matricea dumneavoastră interactivă de timp](../planen/plan-raster.md) sau printr-o nouă rulare.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
