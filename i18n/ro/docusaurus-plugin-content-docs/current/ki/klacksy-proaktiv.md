---
sidebar_position: 8
---

# Klacksy ca membru proactiv al echipei

Klacksy nu așteaptă să fie întrebat. O dată pe oră, el analizează activitatea în fundal și raportează ce observă: ture neocupate, contracte care expiră, perioade restante, date de bază lipsă. Cât de departe poate merge în acest sens stabilesc administratorii separat, pentru fiecare tip de constatare — din fabrică, el doar raportează și nu acționează niciodată din proprie inițiativă.

A nu se confunda cu [Nivelurile de autonomie](../einstellungen/klacksy-konfiguration/autonomie-stufen.md): acolo este vorba despre câtă confirmare are nevoie Klacksy atunci când **dumneavoastră** îi cereți ceva în chat. Aici este vorba despre opusul acestui lucru — despre ceea ce face **fără să fie întrebat**.

## Cum funcționează

**Ce este o constatare:** o constatare este o observație pe care Klacksy a făcut-o de la sine — de exemplu „această tură este încă neocupată peste trei zile” sau „această perioadă de facturare este restantă de o săptămână”. Pentru aceasta rulează la fiecare oră, în fundal, o trecere prin aproximativ o duzină de reguli de verificare. Detectarea în sine este programată ferm: niciun model lingvistic nu decide dacă ceva este o constatare — aceeași regulă produce același rezultat, indiferent de furnizorul de AI pe care îl folosiți.

**Paisprezece tipuri de constatări sunt controlabile,** printre care Tură neocupată, Lacună în disponibilitate, Contract expirat, Date de bază lipsă, Comandă deschisă, Închidere de perioadă iminentă, Perioadă restantă, Abatere de la orele țintă, Container gol, Conflict de blocare și Scenariu deschis. Două dintre acestea nu apar în trecerea orară, ci la importul de comenzi ERP.

**Cele trei niveluri — separat pentru fiecare tip de constatare:** sub Setări > Klacksy > „Marja de acțiune a lui Klacksy” (mod expert, doar administratori), fiecare tip de constatare apare pe un rând propriu, cu coloana „Nivel maxim”:

- **Doar raportare** — Klacksy anunță, nimic mai mult. Aceasta este setarea din fabrică pentru fiecare tip de constatare.
- **Pregătire scenariu** — Klacksy pune suplimentar alături o soluție gata pregătită, sub formă de scenariu, pe care un om trebuie doar să o accepte.
- **Executare** — Klacksy remediază singur constatarea și raportează ulterior despre aceasta.

Începând de la „Pregătire scenariu” trebuie desemnată o persoană responsabilă: acțiunea rulează sub drepturile acesteia, iar ea primește raportul. La acestea se adaugă, pe fiecare rând, bugete care limitează cât de des poate acționa Klacksy (din fabrică, cel mult 5 acțiuni pe zi și 3 în decurs de 60 de minute), precum și un comutator „Activ”. Acesta controlează exclusiv acțiunea autonomă — dacă și cum vă ajunge o notificare rămâne setarea dumneavoastră personală de notificare.

**Limita fermă din program:** un nivel mai ridicat are efect doar acolo unde pentru tipul de constatare respectiv există deloc o remediere automată definită. Dacă aceasta lipsește, rămâne la stadiul de raportare — indiferent de setare și chiar și atunci când cineva deleagă constatarea către Klacksy, în cazuri individuale. Această limită este înscrisă în codul programului și nu poate fi deschisă prin interfață. În prezent este definită exact o remediere: la tipul de constatare „Container gol”, Klacksy poate crea el însuși modelul de slot lipsă.

**Unde ajung constatările:** pe butonul Klacksy din antet, un contor arată indicațiile necitite. Un clic deschide bara laterală, unde constatările sunt adunate sub titlul „Cât timp ai fost plecat…”. Pentru fiecare notificare sunt disponibile „Arată-mi asta” (sare la locul afectat), „Util” și „Ascunde” — ultima, opțional cu un motiv („Astfel de indicații nu le vreau în general”, „De data asta indicația a fost greșită”, „Este deja rezolvat”) sau fără. Acolo unde este permis, există suplimentar „Fă-o tu”: o aprobare pentru un caz individual, care ridică exact această constatare la nivelul „Pregătire scenariu”. Puteți întreba Klacksy și direct în chat ce constatări sunt momentan deschise.

**Când o constatare este remediată:** rândul afectat poartă, în vizualizarea container a listei de servicii, marcajul „Remediat de Klacksy la data de …” — și anume atât atunci când Klacksy a executat el însuși remedierea, cât și atunci când un om a aprobat un scenariu pregătit de Klacksy. Dacă Klacksy execută el însuși, pleacă suplimentar un raport către persoana responsabilă.

**Oprirea de urgență:** deasupra chatului, administratorii văd comutatorul „Klacksy acționează autonom: PORNIT/OPRIT”. Oprirea readuce imediat fiecare tip de constatare la „doar raportare” — inclusiv aprobările pentru cazuri individuale deja acordate. Indicațiile nu se opresc însă: oprirea de urgență oprește acțiunea, nu raportarea. Același comutator se află și în cardul de setări.

## Bine de știut

- Din fabrică, fiecare tip de constatare este setat pe „Doar raportare” — Klacksy acționează abia atunci când un administrator ridică deliberat un nivel. Oprirea de urgență nu este necesară pentru aceasta: din fabrică ea nu este activată și rămâne în rezervă ca frână imediată.
- Notificările merg doar către administratori și planificatori autorizați. Cine are voie să vadă doar anumite grupuri primește și constatări doar din aceste grupuri; administratorii văd totul. Planificatorii primesc constatările, dar nu văd setarea nivelurilor.
- Nivelul „Pregătire scenariu” se aplică doar pentru remedierile care pot fi reprezentate ca scenariu. Remedierea definită astăzi nu face parte din acestea — pentru ea acționează doar „Executare”.
- Cardul de setări și comutatorul de autonomie necesită drepturi de administrator; fără acestea, starea de autonomie nu poate fi vizualizată.
- Ritmul orar este fix, integrat, și nu poate fi configurat prin interfață; prima trecere pornește la două minute după pornirea programului.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
