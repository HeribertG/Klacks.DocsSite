---
sidebar_position: 3
---

Monitor zdrojů ukáže na jeden pohled, jak je na tom vytížení personálu ve skupině (nebo ve všech skupinách) ve zvoleném roce — jeden sloupec na den, přes 365 dní celý roční průběh.

## Jak to funguje

Zobrazení vychází z v personálním plánování zavedeného grafu „Capacity vs. Workload Chart" (v literatuře o projektovém řízení známého jako „Resource Histogram"). Prvky:

- **Zelené sloupce — služby:** počet naplánovaných směn v daný den. Každá směna se počítá jako jedna pozice zaměstnance; kontejnerové služby se počítají jako 1.
- **Šedé sloupce — absence:** počet nepřítomných zaměstnanců, naskládaný na zelené sloupce. Celý zápis dovolené nebo nemoci se počítá jako 1, poloviční jako 0,5 — i o víkendu.
- **Růžová tečkovaná čára — požadovaná disponibilita:** kolik zaměstnanců by v průměru bylo k dispozici, pokud se dodrží požadované pracovní dny za týden (standard: 5 dní práce, 2 dny volna). Toto je cíl plánování.
- **Červená přerušovaná čára — maximální disponibilita:** fyzické/legální maximum při maximálním povoleném počtu po sobě jdoucích pracovních dnů (standard: 6). Vždy leží na úrovni růžové čáry nebo nad ní.
- **Modrá čára — počet zaměstnanců:** celkový stav zaměstnanců s aktivní smlouvou v daný den (headcount).

**Jak číst graf:** Blíží-li se horní hrana zelených sloupců růžové čáře, je personál optimálně vytížen. Rozdíl mezi modrou čárou a horní hranou naskládaných sloupců je vaše rezerva.

Šipkovými tlačítky vpravo nahoře přepínáte rok; přes výběr skupiny se omezíte na konkrétní lokalitu nebo tým.

## Dobré vědět

- Zkušenostní pravidlo: horní hrana šedých sloupců absencí by neměla tvořit více než třetinu mezery mezi službami a celkovým počtem zaměstnanců — jinak je ohrožena provozní rezerva a špičky nemocí nebo dovolených se obtížně vykrývají.
- Hodnoty jsou odhady a aproximace, nikoli přesné vyúčtování — dávají představu o dostupnosti.
- Služby pocházejí z plánování, nikoli z realizace — díky tomu jsou vidět i budoucí služby.
- U smlouvy 24/7 se růžová čára vyhlazuje přes celý týden (cca 0,71 na osobu a kalendářní den); u smlouvy po–pá je ve všední dny na hodnotě 1,0, o víkendu na 0.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
