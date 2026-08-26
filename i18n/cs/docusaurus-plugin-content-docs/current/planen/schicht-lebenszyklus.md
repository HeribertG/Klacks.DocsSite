---
sidebar_position: 8
---

# Životní cyklus služby: Od objednávky k segmentu

Než může být služba vůbec obsazena, projde čtyřmi stupni — od volně upravitelné objednávky přes neměnnou zapečetěnou objednávku k plánovatelné službě a jejím segmentům. Smysl je v tom: co bylo dohodnuto, zůstává trvale dohledatelné; co běžný provoz poté přeplánuje, zůstává přesto pohyblivé.

## Jak to funguje

**1. Objednávka — volně upravitelná.** Každá nová služba začíná zde. Na stránce služeb otevře tlačítko **+ nová objednávka** zadávací masku; objednávku upravujete, kolikrát chcete, všechna pole jsou otevřená. V plánu se ještě neobjevuje, a tudíž na ni ani nelze naplánovat zaměstnance. Přesto to není pouhý náčrt — je to skutečná objednávka, jen ještě nezapečetěná. V seznamu služeb vede Klacks tento stupeň pod **Objednávky**. Přepnete-li tam na **Plánovatelné služby**, tlačítko se jmenuje **+ nová služba**: založí objednávku bez vazby na zákazníka — pro obecnou práci, kterou nikdo externě neobjednává a neplatí. Karta *Adresa* pak odpadá; i tato služba prochází čtyřmi stupni.

**2. Zapečetěná objednávka — neměnná.** Je-li objednávka hotová, zapečetíte ji tlačítkem se zámkem v kartě *Obecné*. Od tohoto okamžiku je uzamčena a zůstává trvale zachována jako závazný obraz dohody — i tehdy, když ji běžný provoz už dávno přeplánoval. Po uložení je to **nevratné**. Které objednávky již dosáhly tohoto stupně, ukazuje v seznamu služeb zaškrtávací políčko **Zobrazit pouze zapečetěné objednávky**.

**3. Plánovatelná služba — zde se plánuje.** Zapečetění vytvoří v jednom kroku, a přesně jednou jedinkrát, plánovatelnou službu: kopii propojenou s objednávkou. Teprve tato služba se zobrazuje v [Plánovací mřížka: vaše interaktivní časová matice](../planen/plan-raster.md), teprve na ní lze zaevidovat zaměstnance — a zůstává upravitelná. Pozdější opětovné uložení již druhou kopii nevytvoří. V seznamu služeb ji najdete pod **Plánovatelné služby**.

**4. Segmenty — rozstřižená služba.** Plánovatelnou službu lze rozstřihnout, například podle dnů nebo časových úseků. Dosavadní služba se přitom sama stane segmentem, další vznikají vedle ní. Všechny segmenty jsou opět plánovatelné a nesou pak skutečné obsazení. Zapečetěná objednávka tím zůstává nedotčena — je a zůstává smlouvou v pozadí.

**Kdy je tlačítko zámku aktivní:** Zůstává šedé tak dlouho, dokud není objednávka dostatečně kompletní pro plánování — jsou vyplněny zkratka, název a datum od, je zvolen alespoň jeden den v týdnu, je zvolena alespoň jedna skupina a jak počet úkolů, tak počet zaměstnanců na směnu je větší než nula. Jeho tooltip to jasně říká: „Po zapečetění je objednávka neměnná a připravená k plánování."

**Jediná výjimka z neměnnosti:** Nemá-li zapečetěná objednávka datum do — například proto, že se objednávka průběžně prodlužuje nebo její konec je zatím otevřený —, smíte toto jediné pole nastavit i dodatečně. Podmínkou je, že od zvoleného data ještě nejsou naplánovány žádné služby. Poté je zamknuté i toto pole jako všechna ostatní.

**Příklad:** 1. května zaevidujete objednávku „Svatba Müllerovi" a dva dny ji upřesňujete. 3. května zákazník potvrdí — zapečetíte. Klacks objednávku pevně zapíše a vedle ní založí plánovatelnou službu. 4. května zapíše dispečink dva zaměstnance, 5. května se služba rozstřihne na dva segmenty. 1. června se období uzavře a záznamy na segmentech jsou zamčené. Zapečetěná objednávka ze 3. května přitom nikdy nebyla změněna.

**Karty zadávací masky.** Maska se člení na karty, které jednotlivě rozbalujete a sbalujete; ukládá se a zahazuje přes ukládací lištu v patě pracovní plochy. Část karet se zobrazí až poté, co v kartě *Obecné* zapnete přepínač **Expertní režim**:

- **Obecné** — zkratka (nejvýše 6 znaků; Klacks ji při psaní názvu automaticky navrhuje), název, datum od a do a poznámky. Zde jsou i tlačítko zámku a přepínač expertního režimu.
- **Skupina** — přiřadí službu jedné nebo více skupinám. Alespoň jedna skupina je povinná; dokud žádná není zvolena, upozorní na to informační box.
- **Požadované kvalifikace** — jaké [kvalifikace](../einstellungen/stammdaten-organisation/qualifikationen.md) služba vyžaduje, vždy s minimální úrovní (Nízká až Expertní) a údajem, zda je povinná.
- **Hodiny a dny v týdnu** — čas od, čas do a doba trvání a dny v týdnu, kdy služba probíhá, plus dvě pravidla pro svátky. V expertním režimu můžete službu zde místo toho vést jako časový rámec: leží pak flexibilně v okně mezi časem od a časem do, a počítá se zadaná doba trvání.
- **Makro** (expertní režim) — propojí službu s [makrem](../einstellungen/klacksy-konfiguration/makros.md) pro výpočet trvání a mzdy.
- **Adresa** — zákazník, resp. místo nasazení, vyhledávané podle jména nebo ID čísla. Filtrovací sloupec vpravo omezuje přesně toto vyhledávání.
- **Speciální vlastnosti** (expertní režim) — sporadické nasazení včetně periodicity, briefing a debriefing, čas na cestu tam a zpět a počet zaměstnanců a úkolů na směnu.
- **Standardní výdaje** (expertní režim) — výdaje, které u této služby pravidelně vznikají, vždy s označením, částkou a údajem, zda podléhají dani.

Jak se plánovatelné služby následně obsazují, popisují [Automatické plánování: Plán během sekund](../planen/auto-planung.md) a [Plánovací mřížka: vaše interaktivní časová matice](../planen/plan-raster.md).

## Dobré vědět

- **Zapečetění zde znamená něco jiného než ve schvalovacím workflow.** Zapečetění objednávky zmrazí *popis* služby — co je třeba udělat, natrvalo. Naproti tomu [Schvalovací workflow: Od návrhu k závaznému plánu](../planen/freigabe-workflow.md) a [Uzávěrka období](../planen/periodenabschluss.md) uzamykají *záznamy na konkrétních dnech*. Oboje běží nezávisle na sobě.
- **Objednávky vznikají i automaticky.** Vedle zadávací masky je druhou cestou [import ERP](../einstellungen/kommunikation-integration/erp-uebernahmepunkte.md): odtud přicházející objednávky rovněž nejprve skončí jako nezapečetěná objednávka a musí být zkontrolovány a zapečetěny.
- **Zapomenutá objednávka se přihlásí sama.** Zůstane-li objednávka krátce před svým začátkem nezapečetěná, upozorní na to [Klacksy jako proaktivní člen týmu](../ki/klacksy-proaktiv.md) typem nálezu „Otevřená objednávka" — nezapečetěná totiž znamená: neplánovatelná.
- **Kontejnerové služby fungují trochu jinak.** Kontejner je obal, který sdružuje více dílčích služeb; nemá proto ani zákazníka, ani adresu, a karty *Adresa* a *Standardní výdaje* odpadají. Karta *Speciální vlastnosti* u něj zobrazuje pouze možnost sporadického nasazení. Zaškrtávací políčko „Je kontejner" najdete v expertním režimu v kartě *Obecné*, a nastavit jej lze pouze tehdy, dokud je objednávka ještě nezapečetěná.
- **Sporadické služby a služby s časovým rámcem se nepočítají.** Obě se záměrně nezobrazují ve sloupcích služeb [Monitoru zdrojů](../optimieren/ressourcen-monitor.md), protože nezobrazují pevnou denní potřebu.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
