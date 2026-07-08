---
sidebar_position: 3
---

Správa adres a osob je jádrem vašich kmenových dat: zaměstnanci, zákazníci i externí osoby s adresami, kontaktními údaji, smlouvami, příslušností ke skupinám a kvalifikacemi — dostupné přes ikonu osob v navigaci.

## Jak to funguje

**Vytvoření zaměstnance:** Povinnými poli jsou jméno, příjmení a pohlaví (žena/muž/interpohlavní osoba/právnická osoba). Volitelně zadáte datum narození, e-mail, telefon, adresu (ulice, PSČ, obec, kanton, země) a skupinu/oddělení. Vytvoření můžete alternativně přenechat asistentovi Klacksy («vytvoř zaměstnance …»).

**Stav:** Stav se odvozuje automaticky z data nástupu a odchodu členství — neexistuje žádné ruční pole stavu. Rozlišují se *Aktivní* (členství právě probíhá), *Bývalí* (datum odchodu leží v minulosti) a *Budoucí* (datum nástupu ještě nenastalo).

**Skupiny a oddělení:** Zaměstnance lze přiřazovat do skupin. Struktura je hierarchická (např. `Klacks AG > IT > Vývoj`), vícenásobné přiřazení je povoleno a oprávnění lze řídit na úrovni skupiny.

**Smlouvy:** Každá osoba může mít více smluv, například při změně úvazku. Samotné šablony smluv jsou volně definovatelné: v části Nastavení > Smlouvy si vytvoříte vlastní smlouvy s názvem, úvazkem, cílovými/maximálními/minimálními hodinami, příplatky (noční, nedělní a svátkové) a platebním intervalem; ke každé smlouvě lze navíc přiřadit vlastní kalendář svátků, čímž lze zohlednit například kantonálně odlišné svátky. Každá smlouva platí buď po omezenou dobu, nebo na dobu neurčitou.

**Import:** CSV import kmenových dat neexistuje. Existující adresáře převezmete automaticky pomocí LDAP/Active Directory synchronizace přes Identity Provider; jednotlivé osoby vytváříte ručně nebo pomocí Klacksy.

**Vyhledávání a filtrování:** Fulltextové vyhledávání najde osoby podle jména, příjmení, firmy nebo osobního čísla a také podle telefonního čísla/PSČ; dále lze filtrovat podle kantonu, stavu (aktivní/bývalí/budoucí) a skupiny.

## Dobré vědět

- Plánovatelní jsou pouze *Aktivní* — pokud se někdo neobjeví v rozvrhu, zkontrolujte datum nástupu/odchodu členství.
- Více smluv na osobu je běžné, například při změně úvazku — kvůli tomu nemusíte vytvářet druhou osobu. Nové šablony smluv (úvazek, příplatky, kalendář) si vytváříte sami v části Nastavení > Smlouvy.
- Nejprve vytvořte strukturu skupin a teprve poté k nim přiřazujte osoby — tak budou oprávnění na úrovni skupiny fungovat od začátku.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
