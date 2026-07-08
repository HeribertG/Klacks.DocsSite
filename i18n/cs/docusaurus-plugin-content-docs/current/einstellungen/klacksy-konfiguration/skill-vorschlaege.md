---
sidebar_position: 6
---

# Návrhy dovedností Klacksy

Klacksy se učí z vlastních chyb: Když v chatu opravíte, že Klacksy vybral nesprávnou dovednost, systém si tuto opravu zapamatuje. V nastavení Nastavení > Návrhy dovedností Klacksy vidí administrátoři, jaká vylepšení popisů dovedností z toho vyplývají, a rozhodují o jejich převzetí.

## Jak to funguje

**Odkud návrhy pocházejí:** Pokud Klacksy v chatu zvolí pro dotaz nesprávnou dovednost (skill) a uživatel to opraví, je tato sekvence chatu označena jako „opravená". Interní optimalizátor takové opravené sekvence vyhodnocuje a odvozuje z nich konkrétní textové změny popisů dovedností — s cílem, aby Klacksy příslušnou dovednost příště přiřadil správně.

**Vytvoření návrhů:** Tlačítko „Vytvořit návrhy" spustí vyhodnocení posledních 30 opravených sekvencí chatu a vytvoří z nich nové návrhy, pokud se v nich najdou vzorce.

**Karta návrhu zobrazuje:** dotčenou dovednost a změněné pole, změnu ve srovnání před/po, zdůvodnění, proč je změna smysluplná, a — po rozbalení — přesné uživatelské dotazy, které návrh vyvolaly.

**Rozhodování:** Každý otevřený návrh se jednotlivě buď **převezme** (popis dovednosti se ihned změní), nebo **zamítne** (návrh se zamítne, aniž by se cokoli změnilo). Automatické přebírání neprobíhá — vždy rozhoduje člověk.

## Dobré vědět

- Bez oprav v chatu žádné návrhy nevznikají — systém potřebuje jako podklad pro trénink skutečné opravy chyb, nejen běžné používání.
- Tato funkce mění pouze texty popisů dovedností, aby je Klacksy vybíral správně — neovlivňuje to, co daná dovednost skutečně dělá.
- Tato funkce vyžaduje administrátorská práva.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — Přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
