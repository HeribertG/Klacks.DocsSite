---
sidebar_position: 5
---

V nastavení Nastavení > Viditelnost skupin podle uživatele určujete, které skupiny — a tím i související data — smí konkrétní uživatel vidět.

## Jak to funguje

Seznam zobrazuje všechny uživatele se jménem a počtem jim přiřazených (viditelných) kořenových skupin. Kliknutím na číslo se otevře formulář se seznamem zaškrtávacích políček všech kořenových skupin; zde označíte, které skupiny smí tento uživatel vidět. Pokud je uvolněna kořenová skupina, platí to automaticky i pro všechny její podskupiny.

Administrátoři jsou z tohoto omezení vyňati: u nich je tlačítko deaktivováno a zobrazené číslo vždy odpovídá celkovému počtu všech kořenových skupin — administrátoři v zásadě vidí vše.

## Dobré vědět

- U běžného (neadministrátorského) uživatele bez jakéhokoli přiřazení znamená „0 přiřazených skupin": tento uživatel aktuálně v oblastech omezených na skupiny (např. dashboard, seznam klientů) **nevidí nic** — nejde o chybu, ale o přímý důsledek chybějícího přiřazení.
- Výjimka: pokud v systému aktuálně **neexistují žádné** skupiny, vidí všichni uživatelé vše — instalace bez skupinové struktury tak toto nastavení nepotřebují spravovat.
- Nejprve vytvořte skupinovou strukturu v kmenových datech, než zde budete provádět přiřazení — bez existujících skupin zde není co zaškrtávat.
- Toto nastavení řídí **viditelnost** dat, nikoli základní **oprávnění** role — role/práva se spravují nezávisle na tomto nastavení.

---
*Vyzkoušejte si to přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
