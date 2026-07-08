---
sidebar_position: 1
---

V nastavení Nastavení > Pravidla plánování (výchozí hodnoty) určujete hodnoty, kterými se automaticky předvyplní nová smlouva, resp. nové pravidlo plánování při jejich vytvoření.

## Jak to funguje

Stránka sdružuje několik skupin výchozích hodnot:

- **Pracovní hodiny:** Denní pracovní doba (cílová doba), hranice přesčasů (hod./týden), garantované, minimální a maximální měsíční hodiny a počet hodin plného úvazku.
- **Mezní hodnoty pravidel plánování:** Max. počet pracovních dní, min. počet dní volna mezi dvěma pracovními bloky, min. počet volných hodin mezi dvěma pracovními dny, max. optimální mezera mezi směnami, max. denní/týdenní hodiny a max. počet po sobě jdoucích pracovních dní — tytéž veličiny, které definuje i jednotlivé pravidlo plánování.
- **Příplatky:** Noční, sváteční, sobotní a nedělní příplatek v procentech.
- **Výchozí pracovní dny a víkend:** Které dny v týdnu se považují za pracovní, zda se provozuje směnný provoz (ranní/odpolední/noční směny), které dny se počítají jako víkend a kterým dnem v týdnu týden začíná.
- **Plánovací příkazy (klíčová slova):** Zde lze konfigurovat textové příkazy `FREE`, `EARLY`, `LATE`, `NIGHT` i jejich negované protějšky `-FREE`, `-EARLY`, `-LATE`, `-NIGHT`. Pokud osoba zapíše tato slova přímo do denní buňky v rozpisu služeb, Klacks je nerozpozná jako poznámku, ale jako přání: `FREE` znamená „tento den pokud možno neplánovat", `EARLY`/`LATE`/`NIGHT` preferují nebo vynucují určitý typ směny, negované varianty opak vylučují. Jak automatické plánování, tak Harmonizer berou tato přání v úvahu jako zadání.

## Dobré vědět

- Tato stránka spravuje **globální výchozí hodnoty** — změny se projeví pouze u **nově** vytvořených smluv, resp. pravidel plánování, nikoli zpětně u již existujících.
- Mezní hodnoty pravidel plánování jsou zde totožné s těmi, které jinak nastavujete individuálně u jednotlivé smlouvy — zde určujete pouze počáteční hodnotu, se kterou nová smlouva vznikne.
- Plánovací příkazy jsou v rozpisu služeb ve výchozím stavu skryté a lze je zobrazit přes vlastní ikonu na panelu nástrojů.

---
*Vyzkoušejte si to přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
