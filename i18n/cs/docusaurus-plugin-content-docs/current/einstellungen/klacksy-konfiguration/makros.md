---
sidebar_position: 7
---

# Makra

Příplatky za noční, nedělní a sváteční práci nebo přesný výpočet hodin u dovolené a vojenské služby nelze pokrýt jedním pevným vzorcem platným pro každý podnik. V nastavení Nastavení > Makra si za tímto účelem píšete vlastní malé skripty v jazyce podobném BASICu.

## Jak to funguje

**K čemu makra slouží:** Makro vypočítá z dat služby (Work) nebo pracovního poměru jednu návratovou hodnotu — typicky příplatek v hodinách nebo ve francích. Výsledek se uloží do `Work.Surcharges` a automaticky se promítne do vyhodnocení hodin (ClientPeriodHours). Každé makro patří k určitému typu — směna/pracovní poměr nebo pracovní pravidla — a lze ho pojmenovat, upravovat a mazat jako každé jiné nastavení.

**Dostupná data:** Přes `IMPORT` jsou ve skriptu k dispozici mimo jiné `hour` (odpracované hodiny), `fromhour`/`untilhour` (čas začátku/konce jako desetinné hodiny), `weekday` (ISO-8601: 1 = pondělí … 7 = neděle), `holiday`/`holidaynextday` (zda je aktuální, resp. následující den svátkem) a dále ve smlouvě uložené sazby příplatků `nightrate`, `holidayrate`, `sarate` (sobota) a `sorate` (neděle).

**Rozsah jazyka:** Skriptovací jazyk zná řídicí struktury (`IF…THEN…ELSEIF…ELSE…ENDIF`, `SELECT CASE`, `FOR…NEXT`, `DO…LOOP`), vlastní funkce (`FUNCTION`) a procedury (`SUB`, musí být definovány před svým prvním voláním) a zabudované řetězcové, matematické, trigonometrické a časové funkce (např. `TimeToHours`, `TimeOverlap` pro časové úseky přesahující půlnoc). Výsledek se vrací pomocí `OUTPUT typ, hodnota`.

**Testování v editoru:** Editor maker má vlastní záložku Testování: zadáte ukázkové hodnoty pro importované proměnné, zkontrolujete syntaxi a skript zkusmo spustíte. `DEBUGPRINT`/`DEBUGCLEAR` vypisují další hodnoty v testovacím okně, aniž by ovlivnily samotnou návratovou hodnotu.

**Bezpečnost:** Interpret běží v sandboxu bez přístupu k souborovému systému nebo síti — makro může výpočet provést špatně, ale mimo výpočet nemůže napáchat žádnou škodu.

## Dobré vědět

- `DIM` deklaruje proměnnou, ale zároveň ji neinicializuje — `DIM x = 10` je syntaktická chyba, nejprve musí být `DIM x` a poté samostatně `x = 10`.
- Klíčová slova jako `ENDIF`, `ENDFUNCTION` a `ENDSUB` se píší dohromady, ne s mezerou.
- `weekday` důsledně dodržuje ISO-8601 (1 = pondělí … 7 = neděle) — u vlastních dotazů `SELECT CASE` pro „víkend" jde o hodnoty 6 (sobota) a 7 (neděle).

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — Přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
