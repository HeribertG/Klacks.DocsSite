---
sidebar_position: 8
---

# Klacksy jako proaktivní člen týmu

Klacksy nečeká, až se ho někdo zeptá. Jednou za hodinu se na pozadí podívá na provoz a nahlásí, co mu přijde nápadné: neobsazené služby, končící smlouvy, opožděná období, chybějící kmenová data. Jak daleko přitom smí zajít, určují administrátoři pro každý typ nálezu zvlášť — z výroby pouze hlásí a nikdy nejedná z vlastní iniciativy.

Nezaměňujte s [Úrovněmi autonomie](../einstellungen/klacksy-konfiguration/autonomie-stufen.md): Tam jde o to, kolik potvrzení Klacksy potřebuje, když ho o něco požádáte **vy** v chatu. Zde jde o opak — o to, co dělá **bez vyzvání**.

## Jak to funguje

**Co je nález:** Nález je zjištění, které Klacksy udělal sám od sebe — například „tato služba je za tři dny stále neobsazená" nebo „toto zúčtovací období je týden po termínu". Za tímto účelem běží hodinově běh na pozadí přes zhruba tucet kontrolních pravidel. Samotné rozpoznávání je pevně naprogramované: žádný jazykový model nerozhoduje, zda je něco nálezem — stejné pravidlo dává stejný výsledek, bez ohledu na to, kterého poskytovatele AI používáte.

**Čtrnáct typů nálezů je řiditelných,** mimo jiné Neobsazená služba, Mezera v dostupnosti, Končící smlouva, Chybějící kmenová data, Otevřená objednávka, Blížící se uzávěrka období, Opožděné období, Odchylka od cílových hodin, Prázdný kontejner, Konflikt blokace a Otevřený scénář. Dva z nich nevznikají v hodinovém běhu, ale při importu objednávek ERP.

**Tři stupně — vždy podle typu nálezu:** V nastavení Nastavení > Klacksy > „Prostor pro jednání Klacksy" (expertní režim, pouze administrátoři) má každý typ nálezu vlastní řádek se sloupcem „Nejvyšší stupeň":

- **Pouze nahlásit** — Klacksy dá vědět, nic víc. Toto je výchozí nastavení pro každý typ nálezu.
- **Připravit scénář** — Klacksy navíc připraví hotové řešení jako scénář, který člověk už jen přijme.
- **Provést** — Klacksy nález sám odstraní a poté o tom podá zprávu.

Od stupně „Připravit scénář" musí být určena odpovědná osoba: pod jejími právy akce probíhá a ona dostává zprávu. K tomu přibývají u každého řádku rozpočty, které omezují, jak často smí Klacksy jednat (z výroby nejvýše 5 akcí denně a 3 během 60 minut), a přepínač „Aktivní". Ten řídí výhradně samostatné jednání — zda a jak vás hlášení zastihne, zůstává vaším osobním nastavením oznámení.

**Pevná hranice v programu:** Vyšší stupeň působí pouze tam, kde je pro daný typ nálezu vůbec uložena automatická náprava. Chybí-li, zůstává u hlášení — bez ohledu na nastavení, a to i tehdy, když někdo nález v jednotlivém případě deleguje na Klacksy. Tato hranice je zapsaná v programovém kódu a přes rozhraní se nedá otevřít. V současnosti je uložena přesně jedna náprava: u typu nálezu „Prázdný kontejner" dokáže Klacksy sám vytvořit chybějící šablonu slotu.

**Kam nálezy přicházejí:** Na tlačítku Klacksy v hlavičce ukazuje počítadlo nepřečtená upozornění. Kliknutí otevře postranní panel, kde jsou nálezy shromážděny pod nadpisem „Zatímco jsi byl pryč…". U každého hlášení jsou k dispozici „Ukaž mi to" (skočí na dotčené místo), „Užitečné" a „Skrýt" — to druhé volitelně s důvodem („Taková upozornění obecně nechci", „Tentokrát bylo upozornění chybné", „Už je to vyřízeno") nebo bez něj. Kde je to povoleno, je navíc k dispozici „Udělej to": jednorázové schválení, které právě tento jeden nález povýší na „Připravit scénář". Klacksy se také můžete v chatu přímo zeptat, které nálezy jsou právě otevřené.

**Když je nález vyřešen:** Dotčený řádek nese v kontejnerovém zobrazení seznamu služeb označení „Vyřešeno Klacksy dne …" — a to jak tehdy, když nápravu provedl Klacksy sám, tak tehdy, když člověk schválil scénář připravený Klacksy. Provede-li Klacksy nápravu sám, jde navíc zpráva odpovědné osobě.

**Nouzové vypnutí:** Nad chatem vidí administrátoři přepínač „Klacksy jedná autonomně: ZAP/VYP". Vypnutí okamžitě vrátí každý typ nálezu na „pouze nahlásit" — i již udělená jednorázová schválení. Hlášení přitom nepřestávají: nouzové vypnutí zastaví jednání, ne hlášení. Stejný přepínač je i v kartě nastavení.

## Dobré vědět

- Z výroby je každý typ nálezu nastaven na „Pouze nahlásit" — Klacksy jedná až tehdy, kdy administrátor vědomě zvýší stupeň. Nouzové vypnutí k tomu není potřeba: z výroby není nastaveno a zůstává v záloze jako okamžitá brzda.
- Hlášení jdou pouze administrátorům a oprávněným plánovačům. Kdo smí vidět jen určité skupiny, dostává i jen nálezy z těchto skupin; administrátoři vidí vše. Plánovači nálezy dostávají, ale nastavení stupňů nevidí.
- Stupeň „Připravit scénář" platí jen u náprav, které lze zobrazit jako scénář. Dnes uložená náprava mezi ně nepatří — u ní působí pouze „Provést".
- Karta nastavení a přepínač autonomie vyžadují administrátorská práva; bez nich nelze stav autonomie zobrazit.
- Hodinový rytmus je pevně zabudovaný a přes rozhraní nenastavitelný; první běh startuje dvě minuty po spuštění programu.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
