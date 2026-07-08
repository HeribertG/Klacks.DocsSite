---
sidebar_position: 6
---

Pomocí Report Designeru si vytváříte vlastní tiskové šablony — od plánu služeb až po seznam adres — přímo v Klacks, bez externích nástrojů.

## Jak to funguje

Report se skládá ze tří oblastí, které upravujete na záložce *Designer*:

- **Hlavička (Header)** — tiskne se nahoře na každé stránce. Má tři zóny (vlevo, uprostřed, vpravo), které mohou obsahovat pole z databáze, volný text nebo obrázky (např. logo vaší firmy, nahrané přes Správce obrázků).
- **Tělo (Body)** — obsahuje jednu nebo více datových tabulek. Sloupce přidáváte přetažením (drag & drop) ze seznamu polí; pořadí upravujete rovněž přetažením, šířku přes procentuální pole u každého sloupce.
- **Patička (Footer)** — tiskne se dole na každé stránce.

Každá tabulka je propojena se **zdrojem dat**, který vyberete na záložce *Zdroj dat*: plán práce (Schedule), adresy jako seznam nebo detail, absence, směny, skupiny nebo šablona kontejneru. Zdroj dat určuje, jaká pole jsou k dispozici.

Pro úpravu vzhledu máte k dispozici:
- **Formátování** pro každou buňku a volný text: písmo, velikost, tučné/kurzíva/podtržené, barva textu, zarovnání.
- **Ohraničení buněk** samostatně pro každou stranu (nahoře/vpravo/dole/vlevo) se stylem a barvou čáry.
- **Patička tabulky** s poli SUM: číselné sloupce se automaticky sečtou.
- **Řádky s volným textem** před nebo za datovými tabulkami — například pro poznámky, podmínky nebo pole pro podpis.
- **Nastavení stránky** na záložce *Obecné*: na výšku nebo na šířku, velikost papíru (A4, A3, B4/B5 JIS, Letter) a okraje stránky v mm.

## Dobré vědět

- **Sloučená pole (Merged Fields):** přes panel nástrojů vybraného pole můžete zkombinovat více polí do jednoho sloupce; oddělovač (čárka, mezera, zalomení řádku, pomlčka) je konfigurovatelný.
- U zdroje dat **Plán práce** jsou k dispozici dvě doplňkové možnosti: *Sloučit záznamy za den* (více záznamů ze stejného dne v jednom řádku) a *Zobrazit celé období* (všechny dny, i bez záznamů).
- Patičku tabulky aktivujete zaškrtávacím polem přímo pod danou tabulkou; popisek SUM lze pro pole patičky samostatně zobrazit nebo skrýt.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
