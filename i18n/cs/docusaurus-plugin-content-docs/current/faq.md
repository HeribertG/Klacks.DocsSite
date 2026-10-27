---
sidebar_position: 9
---

# Časté otázky

Otázky, které se před prvním nasazením kladou nejčastěji — s upřímnými odpověďmi, i tam, kde odpověď zní „zatím ne".

## Vyzkoušení a začátek

**Musím Klacks nainstalovat, abych ho viděl?**
Ne. [Playground](https://play.klacks-software.ch) je veřejná instance s ukázkovými daty; přihlásíte se pomocí `admin@test.com` / `P@ssw0rt1` a máte plná práva Admina. Databáze se denně v 04:00 švýcarského času resetuje — nezakládejte tam žádné skutečné osobní údaje.

**Jak dlouho trvá instalace?**
Instalátor je jeden příkaz. Vygeneruje hesla a certifikát, připne aktuální verzi, spustí stack a počká, až je vše v pořádku. Nejdéle trvá stahování images. Předpoklady najdete v části [Systémové požadavky](../betrieb/systemvoraussetzungen/).

**Proč musím založit vlastní účet Admina?**
Protože dodávaný účet má veřejně známé heslo. Klacks vám umožní přihlásit se s ním přesně jednou a poté požaduje váš vlastní účet; následně se výchozí účet vypne. Je to záměr, nikoli chyba.

## Provoz

**Kde jsou moje data?**
Na vaší infrastruktuře. Klacks vaše data neposílá zpět výrobci. Pokud jako externí službu připojíte AI model, platí pro **tuto** službu samozřejmě její podmínky — volba modelu je na vás.

**Potřebuji nutně cloudového poskytovatele?**
Ne, to je podstata On-Premise: stack běží na vašem serveru. Potřebujete pouze **odchozí** přístup ke zdrojům balíčků a aktualizací (`ghcr.io`, `github.com`). Provoz zcela bez přístupu k internetu v současnosti **neexistuje** — instalace v odříznutých sítích jsou zatím neimplementovaným rozšířením.

**Jak zálohuji svá data?**
Sami — záloha je ve vaší odpovědnosti. Jak na to a který volume v žádném případě nesmíte zapomenout, najdete v části [Záloha a obnovení](../betrieb/backup-und-wiederherstellung/).

**Co se stane, když se aktualizace nepovede?**
Aktualizační služba předem zálohuje databázi, nové verze přepne společně a poté zkontroluje stav. Pokud není nová verze v pořádku, automaticky se vrátí zpět. Podrobnosti v části [Aktualizace a rollback](../betrieb/updates-und-rollback/).

**Poběží Klacks na mém stávajícím hardwaru?**
Orientační hodnota: **8 GB RAM a 4 vCPU**. Pro menší hostitele existují zdokumentovaná nastavení, která uvolňují paměť — za cenu, že příští dotaz na Klacksy trvá o něco déle.

**Snese se Klacks s mým Identity Providerem?**
Ano. Klacks lze připojit ke stávajícímu poskytovateli identity, místo aby spravoval vlastní účty — viz [Identity Provider](../einstellungen/kommunikation-integration/identity-provider/).

## Funkce

**Pro které obory se Klacks hodí?**
Je určen pro směnné a nasazové provozy: ambulantní péči a Spitex, nemocnice, bezpečnostní služby, úklidové a domovní služby a logistiku.

**Jakými jazyky mluví rozhraní?**
Dokumentace existuje ve 25 jazycích, mimo jiné v němčině, angličtině, francouzštině, italštině, španělštině, polštině, japonštině, čínštině (zjednodušené i tradiční), arabštině a hebrejštině — arabština a hebrejština i se směrem čtení zprava doleva.

**Musím se rozhodnout pro AI model?**
Poskytovatele i model si vybíráte sami a můžete je měnit. Jak to nastavit a ověřit, najdete v částech [LLM poskytovatelé a modely](../einstellungen/klacksy-konfiguration/llm-provider-und-modelle/) a [Test připojení modelu](../einstellungen/klacksy-konfiguration/modell-verbindungstest/).

**Kolik Klacks stojí?**
Zdrojový kód je pod licencí GNU Affero General Public License v3 (AGPL-3.0) — smíte ho číst, měnit a sami provozovat. Pokud změněnou verzi nabízíte jiným přes síť, musíte těmto uživatelům zpřístupnit i změněný zdrojový kód, rovněž pod AGPL-3.0. Vše, co jde nad rámec (dotazy, výměna zkušeností, další vývoj), probíhá přes [komunitu Klacks na Discordu](https://discord.gg/YRP8p2abVC) a [veřejný repozitář zdrojového kódu](https://github.com/HeribertG/Klacks.Api).

**Je Klacks hotový?**
Ne, a nikde se to ani netvrdí. Klacks se buduje, ale vyvíjí se veřejně a skutečně se provozuje — v Playgroundu si aktuální stav můžete kdykoli sami ověřit, místo abyste věřili popisu.

## Spolupráce

**Našel jsem chybu nebo mám otázku.**
Nejrychleji v [komunitě na Discordu](https://discord.gg/YRP8p2abVC). Chyby v softwaru patří do [repozitáře](https://github.com/HeribertG/Klacks.Api). Vždy pomůže: verze, poslední krok před chybou a posledních pár řádků protokolů — viz [Řešení problémů](../betrieb/fehlerbehebung/).

**Mohu sám něco přispět?**
Zdrojový kód je otevřený a dokumentace leží ve stejném domě. Upozornění na nejasná místa jsou stejně vítaná jako kód.

---

*Chybí vám vaše otázka? [Komunita Klacks na Discordu](https://discord.gg/YRP8p2abVC).*
