---
sidebar_position: 7
---

# Ore suplimentare

Sub Setări > Conformitate și reguli de sporuri (mod expert) > Ore suplimentare stabiliți de la câte ore acumulate munca suplimentară devine supusă unui spor și cât de mare este sporul pentru fiecare nivel.

## Cum funcționează

**Bază de calcul:** Zilnic sau Săptămânal — nu există altceva. O bază lunară sau anuală nu este prevăzută. La „Săptămânal”, săptămâna începe în ziua configurată ca primă zi a săptămânii.

**Până la trei niveluri:** fiecare nivel constă din două câmpuri — „Nivelul X de la ore” (numărul de ore acumulate în zi, respectiv în săptămână, de la care se aplică acest nivel) și „Sporul nivelului X” în procente. Cel mai înalt nivel configurat este deschis în sus (fără limită).

**Fiecare nivel numără doar orele din propriul interval**, nu toate orele începând de la zero. Dacă nivelul 1 începe la 8 ore și nivelul 2 la 10 ore, o zi de zece ore și jumătate plătește rata nivelului 1 pentru cele două ore dintre 8 și 10 și rata nivelului 2 doar pentru jumătatea de oră de deasupra — niciodată rata nivelului 2 pentru toate cele zece ore și jumătate. Un singur bloc de lucru poate genera astfel mai multe poziții de spor, câte una pentru fiecare nivel atins.

**Un nivel incomplet este omis tacit:** dacă lipsește valoarea orelor sau dacă sporul este zero sau negativ, acest nivel nu se ia în calcul. Pot fi astfel efectiv active între zero și trei niveluri.

**Sporul este suplimentul, nu suma totală:** 25 % înseamnă un sfert de oră în plus pentru fiecare oră lucrată în acest nivel — nu că ora este plătită cu factorul 1,25. Modul de spor alăturat (multiplicator sau sumă fixă pe oră) determină doar unitatea; calculul din spate rămâne același.

**Ce se numără drept ore deja lucrate:** nivelurile se completează pe baza orelor prestate anterior în aceeași zi, respectiv în aceeași săptămână — sortate mai întâi după dată, apoi după ora de început. Astfel, fiecare bloc de lucru ocupă propria poziție în interval, iar nicio oră nu este atribuită de două ori unui nivel superior. Dacă se modifică o intrare anterioară, cele ulterioare sunt recalculate.

**De unde provin valorile:** acest card furnizează valorile valabile la nivelul întregii companii — ele se aplică doar dacă nicio altă sursă nu are prioritate. Dacă la contractul persoanei este atribuită o [regulă de planificare](../../planen/planungsregeln.md) cu niveluri proprii de ore suplimentare, aceasta are prioritate; o versiune ulterioară, valabilă pentru data respectivă, a acestei reguli înlocuiește la nevoie întregul set, dar, în lipsa unui bloc propriu de ore suplimentare, revine la setările companiei afișate aici, nu la regula de planificare. Dacă nicăieri nu este configurat niciun nivel, servește drept ultimă soluție de rezervă doar **limita de ore suplimentare** din regula de planificare — și anume exclusiv ca valoare de pornire a primului nivel, niciodată ca rată de spor. Sursele nu se amestecă niciodată: cine furnizează primul nivel furnizează și pe toate celelalte.

**Două condiții, fără de care nu apare niciun spor:**

- Tura are nevoie de un macro de calcul. Munca pe o tură fără macro nu este niciodată verificată pentru ore suplimentare.
- Trebuie configurat cel puțin un nivel complet. Fără un astfel de nivel, rezultatul nu este „zero ore suplimentare”, ci nu are loc deloc nicio verificare.

**Excepții:** corecțiile și înlocuitorii de urgență nu sunt niciodată verificați pentru ore suplimentare — se ia în calcul doar munca regulată.

**Suprapunerea cu alte sporuri:** aceeași oră se poate califica simultan pentru ore suplimentare și pentru un spor legat de circumstanțe, de exemplu munca de noapte sau de weekend. Dacă cele două se adună sau se aplică doar cel mai mare, nu decide acest card, ci macro-ul de calcul al turei respective.

**Salvare:** cardul se află în secțiunea Conformitate și reguli de sporuri a paginii de setări (împreună cu Repaus compensatoriu, Mod de spor și Aplicarea conformității), vizibil doar în modul expert. Modificările sunt colectate și salvate sau anulate prin bara comună de salvare a paginii de setări — nu există un buton de salvare propriu pe acest card.

## Bine de știut

- Acest card acoperă exclusiv scalarea automată a orelor suplimentare pe baza pragului zilnic sau săptămânal. Sporurile pentru munca de noapte, duminică sau de sărbătoare sunt calculate, în schimb, generic prin script — vezi [Macrouri](../klacksy-konfiguration/makros.md).
- Un nivel fără valoare „de la ore” sau cu un spor de 0 % sau mai mic este ignorat — astfel pot fi dezactivate niveluri individuale fără a fi șterse.
- Fără cel puțin un nivel complet și fără un macro de calcul la tură nu apar, în principiu, sporuri pentru ore suplimentare, nici măcar la ture foarte lungi.
- O regulă de planificare cu niveluri proprii de ore suplimentare suprascrie complet aceste valori la nivelul întregii companii, nu doar niveluri individuale.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
