---
sidebar_position: 9
---
# Întrebări frecvente

Întrebările cele mai des puse înainte de prima utilizare — cu răspunsuri sincere, chiar și acolo unde răspunsul este „încă nu”.

## Încercare și început

**Trebuie să instalez Klacks ca să-l văd?**
Nu. [Playground](https://play.klacks-software.ch) este o instanță publică, cu date demonstrative; vă autentificați cu `admin@test.com` / `P@ssw0rt1` și aveți drepturi depline de administrator. Baza de date este resetată zilnic la ora 04:00, ora Elveției — nu introduceți acolo date personale reale.

**Cât durează o instalare?**
Programul de instalare este o singură comandă. Acesta generează parolele și certificatul, fixează versiunea curentă, pornește stack-ul și așteaptă până când totul este în stare bună. Cel mai mult timp se consumă cu descărcarea imaginilor. Cerințele se găsesc la [Cerințe de sistem](../betrieb/systemvoraussetzungen/).

**De ce trebuie să creez un cont de administrator propriu?**
Pentru că parola contului inclus este cunoscută public. Klacks vă lasă să vă autentificați cu el exact o dată și cere apoi contul dumneavoastră; după aceea, contul implicit este dezactivat. Este intenționat, nu o eroare.

## Operare

**Unde se află datele mele?**
Pe infrastructura dumneavoastră. Klacks nu trimite datele dumneavoastră înapoi producătorului. Dacă integrați un model AI ca serviciu extern, pentru **acel** serviciu se aplică, desigur, condițiile lui — alegerea modelului vă aparține.

**Am neapărat nevoie de un furnizor de cloud?**
Nu, acesta este miezul On-Premise: stack-ul rulează pe serverul dumneavoastră. Aveți nevoie doar de acces **de ieșire** la sursele de pachete și de actualizări (`ghcr.io`, `github.com`). O operare complet fără acces la internet **nu** există în prezent — instalările în rețele izolate sunt o etapă de dezvoltare încă nerealizată.

**Cum îmi salvez datele?**
Prin forțe proprii — backup-ul este în sarcina dumneavoastră. Cum se face și ce volum nu trebuie uitat în niciun caz se află la [Backup și restaurare](../betrieb/backup-und-wiederherstellung/).

**Ce se întâmplă dacă o actualizare eșuează?**
Serviciul de actualizare salvează în prealabil baza de date, comută noile versiuni împreună și verifică apoi starea de sănătate. Dacă noua versiune nu este în stare bună, revine automat la cea anterioară. Detalii la [Actualizări și rollback](../betrieb/updates-und-rollback/).

**Rulează Klacks pe hardware-ul meu existent?**
Ca reper: **8 GB RAM și 4 vCPU**. Pentru gazde mai mici există setări documentate care eliberează memorie — cu prețul că următoarea întrebare adresată lui Klacksy durează puțin mai mult.

**Se potrivește Klacks cu Identity Provider-ul meu?**
Da. Klacks poate fi conectat la un furnizor de identitate existent, în loc să administreze conturi proprii — vezi [Identity Provider](../einstellungen/kommunikation-integration/identity-provider/).

## Funcții

**Pentru ce domenii de activitate este potrivit Klacks?**
Este conceput pentru unități cu lucru pe ture și intervenții: îngrijire la domiciliu și Spitex, spitale, servicii de securitate, servicii de curățenie și de întreținere a locuințelor, precum și logistică.

**În ce limbi este interfața?**
Documentația este disponibilă în 25 de limbi, printre care germană, engleză, franceză, italiană, spaniolă, poloneză, japoneză, chineză (simplificată și tradițională), arabă și ebraică — araba și ebraica inclusiv cu sensul de citire de la dreapta la stânga.

**Trebuie să mă decid pentru un model AI?**
Alegeți singuri furnizorul și modelul și le puteți schimba. Cum le configurați și le verificați se află la [Furnizori LLM și modele](../einstellungen/klacksy-konfiguration/llm-provider-und-modelle/) și [Test de conexiune model](../einstellungen/klacksy-konfiguration/modell-verbindungstest/).

**Cât costă Klacks?**
Codul sursă este sub GNU Affero General Public License v3 (AGPL-3.0) — îl puteți citi, modifica și opera singuri. Dacă oferiți altora, printr-o rețea, o versiune modificată, trebuie să puneți la dispoziția acestor utilizatori și codul sursă modificat, tot sub AGPL-3.0. Tot ce depășește aceasta (întrebări, schimb de idei, dezvoltare ulterioară) se desfășoară prin [Comunitatea Klacks pe Discord](https://discord.gg/YRP8p2abVC) și [depozitul public de cod sursă](https://github.com/HeribertG/Klacks.Api).

**Este Klacks terminat?**
Nu, și nu se afirmă nicăieri contrariul. Klacks este în construcție, dar este dezvoltat public și chiar operat — în Playground puteți verifica oricând singuri starea actuală, în loc să credeți o descriere.

## Contribuție

**Am găsit o eroare sau am o întrebare.**
Cel mai rapid este în [comunitatea de pe Discord](https://discord.gg/YRP8p2abVC). Pentru erori ale software-ului, raportarea se face în [depozit](https://github.com/HeribertG/Klacks.Api). Întotdeauna sunt de ajutor: versiunea, ultimul pas înaintea erorii și ultimele rânduri din jurnale — vezi [Depanare](../betrieb/fehlerbehebung/).

**Pot contribui și eu?**
Codul sursă este deschis, iar documentația se află în aceeași casă. Sesizările despre pasaje neclare sunt la fel de binevenite ca și codul.

---

*Lipsește întrebarea dumneavoastră? [Comunitatea Klacks pe Discord](https://discord.gg/YRP8p2abVC).*
