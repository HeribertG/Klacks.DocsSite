---
sidebar_position: 3
---

# Uchovávání dat

V části Nastavení > Uchovávání dat určujete, jak dlouho zůstávají smazané záznamy — zaměstnanci, adresy, skupiny, služby, pracovní doby, absence, přestávky a další — v systému zachovány, než jsou neodvolatelně odstraněny.

## Jak to funguje

**Dvoustupňové mazání:** Když v Klacks smažete záznam, nejprve se pouze označí příznakem soft-delete (označen jako smazaný, ale fyzicky stále existuje). Teprve po uplynutí zde nastavené lhůty odstraní denně běžící služba na pozadí takto označené řádky **fyzicky a neodvolatelně** z databáze — napříč všemi dotčenými tabulkami, nejen v jedné oblasti.

**Nastavení lhůty uchovávání:** Vstupní pole přijímá hodnoty mezi 30 a 36 500 dny (přibližně 1 měsíc až 100 let); vedle toho Klacks zobrazuje lhůtu i v letech/měsících. Výchozí hodnota je 3 650 dní (10 let).

## Dobré vědět

- Zkrácení lhůty se projeví i na již existujících, dávno smazaných záznamech: vše, co je starší než nová lhůta, bude odstraněno při příštím běhu služby na pozadí — před zkrácením proto ověřte, zda je to žádoucí.
- Fyzické smazání je konečné — poté již není možná žádná obnova, a to ani ze strany podpory.
- Toto nastavení je technickým základem lhůt mazání popsaných v zásadách ochrany osobních údajů; platí globálně pro všechny typy dat podporující soft-delete, není konfigurovatelné po jednotlivých modulech.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
