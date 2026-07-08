---
sidebar_position: 5
---

Plánovací pravidla definují rámcové podmínky pro automatické plánování služeb — pracovní dobu, doby odpočinku a kapacity, které Klacks dodržuje při rozdělování služeb.

## Jak to funguje

Plánovací pravidlo je přiřazeno ke **smlouvě**. Definované mezní hodnoty pak platí pro všechny zaměstnance s touto smlouvou. Každé pravidlo zahrnuje čtyři oblasti:

**Pracovní dny a doby odpočinku**
- Max. pracovních dnů: měkké pravidlo pro preferovanou délku bloku, než je naplánován den odpočinku (např. „5 dní práce, pak odpočinek") — porušení plán neznehodnocuje, jen ho činí méně optimálním
- Min. dnů odpočinku mezi dvěma pracovními bloky
- Min. volných hodin mezi dvěma pracovními dny (doba odpočinku od konce jednoho pracovního dne do začátku dalšího)
- Max. optimální mezera mezi směnami v hodinách
- Max. po sobě jdoucích pracovních dnů bez dne odpočinku

**Limity hodin**
- Max. denních hodin a max. týdenních hodin
- Denní pracovní hodiny (plánovaná doba)
- Hranice přesčasů: od tohoto počtu týdenních hodin se hodiny počítají jako přesčas

**Měsíční hodiny**
- Garantované hodiny (minimální počet, který je zaměstnanci zaručen za měsíc)
- Minimální a maximální hodiny za měsíc
- Hodiny plného úvazku (měsíční počet hodin odpovídající zaměstnání na plný úvazek)

**Dovolená**
- Dny dovolené za kalendářní rok

## Dobré vědět

- Při vytváření nového pravidla se automaticky převezmou **výchozí hodnoty z nastavení** (Plánovací pravidla — výchozí hodnoty); každou hodnotu pak můžete individuálně upravit.
- Plánovací pravidla působí prostřednictvím smlouvy — nemusíte je udržovat pro každou osobu zvlášť. Změní-li se pravidlo, týká se to všech zaměstnanců s danou smlouvou.
- Hranice přesčasů a plánovaná doba jsou dvě odlišné věci: plánovaná doba je standard za den, hranice přesčasů je prahová hodnota za týden.
- „Max. pracovních dnů" (měkká preference délky bloku) a „Max. po sobě jdoucích pracovních dnů" (pevný, nikdy nepřekročitelný horní limit) jsou dvě odlišná pravidla — nezaměňujte je.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
