---
sidebar_position: 8
---

# Eskalace a pohotovost

Někdo vypadne a služba začíná za pár hodin. Klacks pak nebudí namátkou celý tým, ale postupně prochází uložený eskalační seznam — jednu osobu za druhou, dokud to někdo nepřevezme.

## Jak to funguje

- **Řetězec se spouští při krytí výpadku**: Pro každý dotčený den, kdy měla vypadlá osoba službu, založí Klacks samostatnou eskalaci — s vazbou přesně na tuto službu (viz [Přehled absencí](./absenzen-im-blick.md)).
- **Eskalační seznam nastavíte jednou**: V nastavení Nastavení > Eskalační seznam najdete všechny uživatele se skupinovou viditelností a uloženým telefonním číslem. Pořadí určujete přetažením (drag & drop), okamžitě se ukládá — jedno pořadí pro celý provoz.
- **Kdo je skutečně kontaktován, se rozhodne v ostrém případě**: Klacks vezme z vašeho pořadí osoby s viditelností na nadřazené skupině, přeskočí všechny, kteří jsou právě vedeni jako nepřítomní, a na konec připojí administrátory jako záchrannou síť.
- **Upozornění probíhá více cestami**: Žádost vždy skončí v poštovní schránce Klacks, u přihlášených osob se okamžitě zobrazí v aplikaci a navíc jde i přes napojený messenger — protože ve 3 hodiny ráno nikdo nesedí u otevřeného prohlížeče. Napojení messengeru a automatický posun řetězce se aktivují podle instalace.
- **Přijetí proběhne jedním slovem**: Kdo je právě dotázán, odpoví krátce v messengeru („Přebírám"); administrátoři mohou místo toho použít *Převzít* na stránce *Probíhající eskalace*. Poté obdrží přijímající osoba potvrzení, všechny předtím dotázané tichou poznámku — nikdo není buzen podruhé.

## Dobré vědět

- Lhůta není samotný začátek služby, ale předstih před ním (standardně dvě hodiny) — přebírající osobě tak zůstává ještě čas vydat se na cestu.
- Jak dlouho má daný stupeň čas, počítá Klacks ze zbývající lhůty: čím blíže se služba přibližuje, tím kratší jsou kola. Je-li na postupné dotazování příliš málo času, zeptá se Klacks všech zbývajících najednou.
- Na stránce *Probíhající eskalace* vidíte u každého stupně stav — čeká, dotázáno, převzato, bez odpovědi, přeskočeno nebo zrušeno. Probíhá-li eskalace, zobrazí se navíc varovná ikona v záhlaví.
- Eskalační seznam a přehled jsou vyhrazeny administrátorům (viz [Role a oprávnění](../erste-schritte/rollen-und-rechte.md)). Probíhající eskalaci smí administrátor přerušit — s odůvodněním, aby později zůstalo dohledatelné, proč byl řetězec zastaven.
- Kdo nemá v uživatelském účtu telefonní číslo, v eskalačním seznamu se vůbec neobjeví. Pro dotaz přes messenger je navíc potřeba spárovaný kontakt v messengeru. Nepřítomnosti v pohotovosti spravujete přímo ve stejném seznamu: od–do, s volitelným důvodem, na přání trvale.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
