---
sidebar_position: 8
---

# Glosář

Pojmy, které se v Klacks i v této dokumentaci neustále objevují — stručně a v pořadí, v jakém se s nimi setkáte.

## Plánování

**Řádek zaměstnance**
Nejmenší plánovatelná jednotka. Není to osoba ani den, ale řádek jedné osoby v konkrétním plánovacím listu. Všechny plánované hodnoty jsou vázány na tento řádek.

**Plánovací list**
Kontejner, který shromažďuje **odkazy** na řádky zaměstnanců — žádné kopie. Proto osoba existuje jen jednou, bez ohledu na to, v kolika dílčích plánech se objeví, a změna je okamžitě vidět všude. Základ [modulárního plánování](../planen/modulare-planung/).

**Automatické plánování**
Asistent vyplní plán podle vašich pravidel. Výpočet běží na pozadí, zatímco vy pracujete dál — viz [Automatické plánování](../planen/auto-planung/).

**Dostupnost**
Kdy je osoba připravena k nasazení — s přesností na hodinu nebo na den, pro vlastní i externí zaměstnance. Viz [Mřížka dostupnosti](../planen/verfuegbarkeits-raster/).

**Objednávka (zakázka)**
Náčrt nasazení, který lze ještě upravovat. Objednávka **zatím není plánovatelná**.

**Zapečetění**
Jednorázový, **nevratný** krok, který z objednávky vytvoří plánovatelnou službu. Přitom současně vzniká plánovatelný protějšek objednávky. Přímé založení plánovatelné služby v Klacks neexistuje — každá služba vzniká zapečetěním. Viz [Životní cyklus služby](../planen/schicht-lebenszyklus/).

**Služba (směna)**
Plánovatelné, zapečetěné nasazení. Pojem „směna" znamená totéž.

**Stupně schvalování (plán služeb)**
Plán služeb prochází čtyřmi stavy v pevném pořadí: **otevřeno → potvrzeno → schváleno → uzavřeno**. Potvrzovat smí každý přihlášený účet; schvalovat pouze Supervisor a Admin; uzavírat výhradně Admin. Viz [Schvalovací workflow](../planen/freigabe-workflow/).

**Období / uzávěrka období**
Zúčtovací období (týdenní, čtrnáctidenní, měsíční nebo individuální; stanoví se platebním intervalem). Uzávěrka činí období závazným a zůstává vyhrazena Adminovi — viz [Uzávěrka období](../planen/periodenabschluss/).

**Absence — dvě věci, jedno slovo**
„Absence" označuje v oblasti kmenových dat **katalog typů absencí** (název, barva, standardní délka, standardní hodnota). Pruhy v kalendáři jsou naproti tomu buď **přání** (plánovaná absence, volně posunutelná a bez stupně uzamčení), nebo **zapsaná absence** (převzatá z plánu nasazení, na stránce Absence pouze pro čtení a se stupněm uzamčení). Kdo je zaměňuje, hledá na špatném místě.

## AI asistent

**Klacksy**
AI asistent Klacks. Plánuje, vysvětluje a provádí — s volně volitelným modelem. Viz [Klacksy](../ki/klacksy-ki-assistent/).

**Dovednost (skill)**
Jedna samostatná, vymezená schopnost Klacksy — deklarativní obal kolem konkrétní programové logiky („Vyhledat zaměstnance", „Přiřadit smlouvu", „Vytvořit report"). Klacksy za běhu vybírá vhodné dovednosti.

**Úroveň autonomie**
Jak daleko smí Klacksy zajít bez dotazu:

| Úroveň | Název | Chování |
|---|---|---|
| 0 | Navrhovat | Každá zapisující akce vyžaduje vaše potvrzení |
| 1 | Asistováno | Vratné akce probíhají volně; konečné a citlivé se ptají |
| 2 | Autonomní (výchozí) | Vše kromě akcí zařazených jako citlivé probíhá volně |
| 3 | Plně autonomní | Probíhají i konečné kroky |

Citlivé akce — například mazání uživatelů nebo změna oprávnění — se ptají na **každé** úrovni. Viz [Úrovně autonomie](../einstellungen/klacksy-konfiguration/autonomie-stufen/).

## Role a provoz

**Admin / Supervisor / Plánovač**
Tři přístupové úrovně. Admin smí všechno, Supervisor zakládat a upravovat, účet bez role je Plánovač. Přehled najdete v části [Role a oprávnění](../erste-schritte/rollen-und-rechte/).

**Profil země**
Připravená sada nastavení pro danou zemi: jazyk, časové pásmo, kalendář svátků, víkend a začátek týdne, limity pracovní doby, nárok na dovolenou, příplatky, výchozí mzdový export a oborové šablony. Volí se při instalaci pomocí `REGION`.

**Playground**
Veřejná testovací instance na [play.klacks-software.ch](https://play.klacks-software.ch) s ukázkovými daty — výslovně k vyzkoušení, bez skutečných osobních údajů. Viz [Instalace a Playground](../erste-schritte/installation-und-playground/).

**On-Premise**
Provoz na vaší vlastní infrastruktuře: váš hardware, vaše databáze, vaše data. Protipól hostované varianty.

**Aktualizační služba**
Přibalená služba, která nasazuje podepsané aktualizace — se zálohou předem a automatickým rollbackem při problémech. Viz [Aktualizace a rollback](../betrieb/updates-und-rollback/).

**Role a ochrana dat**
Klacks nevolá domů: vaše data se výrobci nijak neodesílají zpět. O data, která se mají skutečně smazat, se stará [Uchovávání dat](../einstellungen/system-sicherheit/datenaufbewahrung/) — smazané záznamy se po uplynutí lhůty fyzicky odstraní.

---

*Pojem chybí nebo je špatně vysvětlen? [Komunita Klacks na Discordu](https://discord.gg/YRP8p2abVC).*
