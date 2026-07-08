---
sidebar_position: 5
---

Asistentul AI Klacksy învață din utilizarea zilnică care dintre abilitățile sale (Skills) merg împreună — și alege astfel, data viitoare, mai precis skill-urile potrivite.

## Cum funcționează

Klacksy observă în fundal ce skill-uri sunt folosite frecvent împreună sau unul după altul într-o sesiune și derivă din aceasta **relații**. Procesul de învățare rulează automat la fiecare 6 ore. Pagina Relații între skill-uri arată toate relațiile detectate; administratorii decid dacă acestea sunt acceptate sau respinse.

**Tipuri de relații**
- *Secvențial:* skill-ul A este folosit în mod regulat înaintea skill-ului B.
- *Necesar împreună:* ambele skill-uri apar frecvent în aceeași sesiune, fără o ordine fixă.

**Sursă**
- *Învățată:* calculată din date reale de utilizare — fiabilitate ridicată.
- *Dedusă:* dedusă logic din structura skill-urilor, neconfirmată încă de date de utilizare.

**Stare**
- *Candidat:* detectată recent, așteaptă decizia dumneavoastră.
- *Activă:* acceptată — influențează activ Klacksy.
- *Retrasă:* respinsă — este ignorată.

**Încrederea** (0–100 %) arată cât de sigur este Klacksy în privința unei relații. Ea crește cu fiecare sesiune care confirmă modelul (**confirmări**) și scade la sesiunile care îl contrazic (**contraziceri**).

## Bine de știut

- Acceptați o relație atunci când are sens din punct de vedere al conținutului — ambele skill-uri chiar merg împreună, iar modelul corespunde fluxului de lucru dorit de dumneavoastră.
- Respingeți relațiile apărute întâmplător sau care nu se potrivesc în contextul dumneavoastră (de exemplu din cauza sesiunilor de test).
- Regulă practică: de obicei merită acceptate doar relațiile *învățate*, cu încredere ridicată. Candidații deduși cu suport redus e mai bine să fie respinși, până când sunt disponibile mai multe date de utilizare.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Autentificare `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
