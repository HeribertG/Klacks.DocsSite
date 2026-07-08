---
sidebar_position: 5
---

AI asistent Klacksy se z každodenního používání učí, které z jeho schopností (skills) k sobě patří — a příště tak cíleněji vybírá vhodné skills.

## Jak to funguje

Klacksy na pozadí sleduje, které skills se v rámci sezení často používají společně nebo za sebou, a odvozuje z toho **vztahy**. Proces učení běží automaticky každých 6 hodin. Stránka Vztahy skills zobrazuje všechny rozpoznané vztahy; administrátoři rozhodují, zda budou převzaty, nebo zamítnuty.

**Typy vztahů**
- *Sekvenční:* skill A se pravidelně používá před skillem B.
- *Společně potřebné:* oba skills se často vyskytují ve stejném sezení, bez pevného pořadí.

**Zdroj**
- *Naučeno:* vypočteno ze skutečných dat o používání — vysoká spolehlivost.
- *Odvozeno:* logicky odvozeno ze struktury skills, dosud nepotvrzeno daty o používání.

**Stav**
- *Kandidát:* nově rozpoznáno, čeká na vaše rozhodnutí.
- *Aktivní:* převzato — aktivně ovlivňuje Klacksy.
- *Vyřazeno:* zamítnuto — je ignorováno.

**Spolehlivost (Konfidenz)** (0–100 %) ukazuje, jak si je Klacksy daným vztahem jistý. Roste s každým sezením, které vzor potvrdí (**potvrzení**), a klesá u sezení, která mu odporují (**rozpory**).

## Dobré vědět

- Vztah převezměte, pokud dává obsahově smysl — oba skills k sobě skutečně patří a vzorec odpovídá vašemu požadovanému pracovnímu postupu.
- Zamítněte vztahy, které vznikly náhodně nebo ve vašem kontextu k sobě nepatří (např. kvůli testovacím sezením).
- Základní pravidlo: obvykle se vyplatí převzít pouze *naučené* vztahy s vysokou spolehlivostí. Odvozené kandidáty s malou podporou je lepší zamítnout, dokud nebude k dispozici více dat o používání.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
