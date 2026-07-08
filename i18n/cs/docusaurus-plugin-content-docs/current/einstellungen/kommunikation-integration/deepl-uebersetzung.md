---
sidebar_position: 3
---

V nastavení Nastavení > DeepL zadáváte API klíč DeepL, pomocí kterého Klacks umí automaticky překládat texty — aktuálně především příchozí e-maily ve schránce příchozí pošty.

## Jak to funguje

**API klíč:** Jediné vstupní pole přijímá API klíč DeepL (formát `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx` pro bezplatné Free API, resp. bez koncovky `:fx` pro placené Pro API). Klacks podle koncovky `:fx` automaticky rozpozná, kterou ze dvou adres API DeepL použít — samostatné přepínání mezi Free a Pro není potřeba. Účet a samotný klíč získáte na deepl.com/pro-api.

**Použití:** Ve „Schránce příchozí pošty" lze každý e-mail pomocí ikony Přeložit přeložit do aktuálně nastaveného jazyka rozhraní; originál a překlad lze porovnat přepínačem. Bez uloženého klíče tato funkce není k dispozici.

## Dobré vědět

- Toto nastavení je globální pro celou instalaci — neexistuje samostatný klíč pro každého uživatele.
- Na této stránce není žádné vlastní tlačítko „Test"; zda klíč funguje, se ukáže při prvním pokusu o překlad ve schránce příchozí pošty.
- Je-li klíč neplatný nebo expirovaný, Klacks to rozpozná podle odpovědi od DeepL (chyba ověření) a nahlásí to, místo aby zobrazil prázdný nebo chybný překlad.
- Klíč se ukládá zašifrovaně a ve formuláři se zobrazuje maskovaný.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — Přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
