---
sidebar_position: 7
---

# Přesčasy

V nastavení Nastavení > Compliance a pravidla příplatků (expertní režim) > Přesčasy určujete, od kolika nahromaděných hodin je nadpráce zpoplatněna příplatkem a jak vysoký je příplatek v jednotlivých stupních.

## Jak to funguje

**Základ výpočtu:** Denně nebo Týdně — nic jiného k dispozici není. Měsíční nebo roční základ není podporován. U „Týdně" začíná týden zvoleným prvním dnem v týdnu.

**Až tři stupně:** Každý stupeň se skládá ze dvou polí — „Stupeň X od hodin" (počet nahromaděných hodin za den, resp. za týden, od kterého tento stupeň platí) a „Stupeň X příplatek" v procentech. Vždy nejvyšší nakonfigurovaný stupeň je otevřený směrem nahoru.

**Každý stupeň počítá pouze hodiny v rámci svého vlastního rozpětí,** nikoli všechny hodiny od nuly. Začíná-li stupeň 1 na 8 hodinách a stupeň 2 na 10 hodinách, platí desetiapůlhodinový den sazbu stupně 1 za dvě hodiny mezi 8 a 10 a sazbu stupně 2 pouze za půl hodiny nad tím — nikdy sazbu stupně 2 za celých deset a půl hodiny. Jeden jediný pracovní blok tak může vytvořit více položek příplatku, vždy jednu za dosažený stupeň.

**Neúplný stupeň se tiše přeskočí:** Chybí-li údaj o hodinách, nebo je-li příplatek nulový či záporný, tento stupeň se do výpočtu nezapočítává. Aktivní tak mohou být nula až tři stupně.

**Příplatek je navýšení, ne celková částka:** 25 % znamená čtvrtinu hodiny navíc za každou hodinu odpracovanou v tomto stupni — ne že se hodina platí faktorem 1,25. Vedlejší režim příplatku (násobitel nebo pevná částka za hodinu) určuje pouze jednotku; výpočet za tím zůstává stejný.

**Co se počítá jako již odpracované hodiny:** Stupně se plní podle hodin odpracovaných dříve ve stejný den, resp. ve stejném týdnu — seřazených nejprve podle data, poté podle času začátku. Tak zaujme každý pracovní blok svou vlastní pozici v rozpětí a žádná hodina není dvakrát přiřazena vyššímu stupni. Změní-li se dřívější záznam, přepočítají se pozdější.

**Odkud pocházejí hodnoty:** Tato karta dodává celofiremní hodnoty — platí pouze tehdy, pokud nemá přednost jiný zdroj. Je-li smlouvě dané osoby přiřazeno [plánovací pravidlo](../../planen/planungsregeln.md) s vlastními stupni přesčasů, má toto pravidlo přednost; pro dané datum platná pozdější verze tohoto pravidla podle potřeby nahradí celou sadu, ale bez vlastního bloku přesčasů spadne zpět na zde zobrazená firemní nastavení, ne na plánovací pravidlo. Není-li nikde nakonfigurován žádný stupeň, slouží jako poslední záchranná varianta pouze **hranice přesčasů** z plánovacího pravidla — a to výhradně jako počáteční hodnota prvního stupně, nikdy jako sazba příplatku. Zdroje se nikdy nemísí: kdo dodá první stupeň, dodá i všechny další.

**Dvě podmínky, bez kterých příplatek nevznikne:**

- Služba potřebuje výpočetní makro. Práce na službě bez makra se na nadhodiny nikdy nekontroluje.
- Musí být nakonfigurován alespoň jeden úplný stupeň. Bez takového stupně není výsledkem „nula přesčasů", ale žádná kontrola vůbec neproběhne.

**Výjimky:** Opravy a záskoky se na přesčasy nikdy nekontrolují — započítává se pouze běžná práce.

**Souběh s jinými příplatky:** Stejná hodina může současně splňovat podmínky pro nadhodiny i pro příplatek vázaný na okolnosti, například noční nebo víkendovou práci. Zda se oba sčítají, nebo platí jen vyšší z nich, nerozhoduje tato karta, ale výpočetní makro dané služby.

**Ukládání:** Karta se nachází v sekci Compliance a pravidla příplatků stránky nastavení (společně s Náhradním odpočinkem, Režimem příplatku a Vynucováním Compliance), viditelná pouze v expertním režimu. Změny se shromažďují a ukládají nebo zahazují přes společnou ukládací lištu stránky nastavení — na této kartě není žádné vlastní tlačítko Uložit.

## Dobré vědět

- Tato karta pokrývá výhradně automatické odstupňování přesčasů podle denní nebo týdenní hranice. Příplatky za noční, nedělní nebo sváteční práci se naproti tomu počítají obecně skriptem — viz [Makra](../klacksy-konfiguration/makros.md).
- Stupeň bez hodnoty „od hodin" nebo s příplatkem 0 % či nižším se ignoruje — tak lze jednotlivé stupně deaktivovat, aniž byste je museli smazat.
- Bez alespoň jednoho úplného stupně a bez výpočetního makra na službě zásadně nevznikají žádné příplatky za přesčasy, a to ani u velmi dlouhých služeb.
- Plánovací pravidlo s vlastními stupni přesčasů zcela přepisuje tyto celofiremní hodnoty, nejen jednotlivé stupně.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
