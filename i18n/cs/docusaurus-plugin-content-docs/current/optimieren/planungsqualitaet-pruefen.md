---
sidebar_position: 7
---

# Kontrola kvality plánování: Porušení, mezery a přeskočená umístění

Po proběhlém běhu plánovacích asistentů umístí Klacks vedle výsledku tři diagnostické tabulky: kde plán naráží na pravidlo, kde chybí kvalifikace a co vůbec nebylo naplánováno.

## Jak to funguje

Tři přehledy se zobrazují v dialogu příslušného plánovacího asistenta — nikoli v mřížce plánu. Patří k výsledku běhu asistenta a jsou viditelné pouze administrátorům, protože automatické plánování jako celek vyžaduje roli Admin. Každý přehled uvádí v titulku počet svých položek a **vůbec se nezobrazí, pokud nic nenašel** — chybějící rámeček je tedy dobrá zpráva.

**Jak se k dialogům dostanete:** Tlačítko s kouzelnou hůlkou v plánu služeb ve výchozím stavu spustí přímo plánovací běh, aniž by zobrazilo dialog. Kombinací **Ctrl+Shift+H** administrátoři přepnou tlačítko na rozbalovací nabídku s jednotlivými plánovacími asistenty (Plán, Fuzzy Harmonizer, Holistic Harmonizer, Background Optimizer, Recovery) — teprve přes tuto nabídku se otevírají dialogy s diagnostickými tabulkami.

**Mezery v kvalifikaci** se zobrazují společně s výsledkem, tedy *předtím*, než jej převezmete. Sloupce: Závažnost, Služba, Datum, Požadovaná kvalifikace, Důvod — plus sloupec „Zaměstnanec", jakmile alespoň jeden řádek uvádí konkrétní osobu. Jako důvod je uvedeno *Chybí*, *Vypršelo* nebo *Úroveň příliš nízká*. Za tím se skrývají dva různé případy: buď zůstalo místo služby neobsazené, protože nikdo dostupný nemá požadovanou kvalifikaci — pak řádek neuvádí žádnou osobu. Nebo osoba zůstala na službě, pro kterou není kvalifikovaná — pak je u ní uvedeno její jméno. Chybí-li kvalifikace jen v systému, doplňte ji u dané osoby; [Katalog kvalifikací](../einstellungen/stammdaten-organisation/qualifikationen.md) popisuje, jak se kvalifikace spravují. Jinak naplánujte někoho jiného, nebo upravte požadavek dané služby.

**Porušení pravidel Compliance** se zobrazují *poté*, co výsledek převezmete. Sloupce: Datum, Zaměstnanec, Komentář; komentář jasně pojmenovává porušené pravidlo včetně konkrétních hodnot. Červené řádky jsou chyby, žluté varování a upozornění. U obou harmonizačních asistentů zobrazuje přehled výhradně to, co nový scénář oproti skutečnému plánu přináší **navíc** — a k tomu, kolik z těchto porušení je vedeno v blokovacím režimu. Ty brání převzetí scénáře, dokud nejsou odstraněny nebo je výslovně nepřepíše oprávněná osoba.

**Přeskočená umístění** existují pouze u asistenta pro plánování služeb, rovněž po převzetí — a jsou vždy červená. Sloupce: Datum, Zaměstnanec, Služba, Důvod. Zde není uvedeno, co bylo naplánováno, ale co Klacks vědomě **nezapsal**: přiřazení, která by porušila pravidlo vedené v blokovacím režimu. Důvod se zobrazuje jako krátká kategorie („Příliš krátká doba odpočinku", „Příliš mnoho po sobě jdoucích pracovních dnů", „Časová kolize" …). Podle situace nabízí Klacks oprávněným osobám pod tím možnost běh přesto převzít pomocí override; všichni ostatní dostanou pokyn zopakovat asistenta s aktivovaným override nebo o to požádat oprávněnou osobu. Každý override se zaznamenává.

Která pravidla se kontrolují a jak přísně platí, stanovíte v [Plánovací pravidla](../planen/planungsregeln.md); jak plán vůbec vzniká, popisuje [Automatické plánování: Plán během sekund](../planen/auto-planung.md).

## Dobré vědět

- Zablokovaná položka nezahazuje celý plán: odpadnou pouze dotčená přiřazení, čisté položky téže osoby se přesto zapíšou.
- U závažnosti mezer v kvalifikaci platí jednoduché pravidlo: **Chyba** pouze tehdy, když zcela chybí kvalifikace označená jako povinná. Vypršelá kvalifikace, příliš nízká úroveň a každý volitelný požadavek se zobrazují jako **varování**.
- Neobsazené místo služby se v mezerách kvalifikace objeví jen tehdy, když opravdu nikdo dostupný nepřipadal v úvahu. Zůstalo-li neobsazené z jiných důvodů, jde o běžné nedostatečné pokrytí a zde se nehlásí.
- Proběhne-li automatické plánování jako celkový běh, Klacks ohlásí výsledek pouze krátkým vyskakovacím oznámením s počtem mezer v kvalifikaci — podrobné tabulky patří k dialogům jednotlivých asistentů.
- Přehledy jsou čistě zobrazovací: nelze je upravovat a nic nemění. Opravuje se v [Plánovací mřížka: vaše interaktivní časová matice](../planen/plan-raster.md) nebo novým během.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
