---
sidebar_position: 2
---

# Záloha a obnovení

Vaše data leží zcela na vaší infrastruktuře — a tím pádem leží u vás i záloha. Tato stránka ukazuje, co je třeba zálohovat a jak to vrátit zpět.

## Co je třeba zálohovat

| Co | Kde | Jak často |
|---|---|---|
| Databáze | Volume `postgres_data` | denně, minimálně před každou aktualizací |
| Nahrané soubory | Volume `api-uploads` | spolu s databází |
| Dokumenty | Volume `api-documents` | spolu s databází |
| Klíčenka | Volume `api-dataprotection` | spolu s databází, **bezpodmínečně** |

Volume `api-dataprotection` obsahuje klíčenku, kterou Klacks dešifruje šifrovaná nastavení (například přístupové údaje ke komunikačním kanálům). Databáze bez této klíčenky sice existuje, ale není plně použitelná — zálohujte ji vždy společně s ní.

## Záloha databáze

```bash
docker exec klacks-postgres pg_dump -U admin -d Klacks -Fc > klacks-20260922.dump
```

Formát `-Fc` (custom) komprimuje a umožňuje při obnově vybírat jednotlivé tabulky.

## Obnovení databáze

```bash
docker exec -i klacks-postgres pg_restore -U admin -d Klacks --clean --if-exists < klacks-20260922.dump
```

`--clean --if-exists` předem odstraní existující objekty, aby obnova nezkolabovala na již existujících tabulkách.

## Úskalí: rollback po neúspěšné migraci

Právě tady v minulosti vznikl výpadek produkce a mechanismus je stejný u každého rollbacku založeného na dumpu:

Pokud chybná verze vytvoří pomocí migrace **nové tabulky**, tyto tabulky v dumpu nejsou. Při obnově tedy databáze nezůstane na starém stavu — nové tabulky obnovu **přežijí**, zatímco historie migrací (`__EFMigrationsHistory`) se vrátí na starý stav. Další pokus o start pak skončí chybou `42P07: relation "…" already exists` a instalace uvízne ve smyčce restartů.

Pokud po neúspěšné aktualizaci vracíte stav ručně, zkontrolujte proto po obnově, zda nezůstaly tabulky, které ve staré verzi ještě neexistovaly, a odstraňte je, **než** API znovu spustíte.

## Uchovávání a mazání

Klacks data nemaže jen příznakem smazání, ale **fyzicky**. Každý den běží služba na pozadí, která nenávratně odstraní všechny řádky označené jako smazané, jejichž okamžik smazání je starší než nakonfigurovaná lhůta — a to napříč **všemi** tabulkami s příznakem smazání (zaměstnanci, adresy, skupiny, služby, pracovní doby, absence, přestávky a tak dále). Neexistuje žádný seznam výjimek; povinnost mazat má záměrně přednost před obnovitelností.

Lhůtu řídíte nastavením `DATA_RETENTION_DAYS`; bez vlastní hodnoty platí výchozích **3650 dní (10 let)**. Stránka [Uchovávání dat](../../einstellungen/system-sicherheit/datenaufbewahrung/) popisuje toto nastavení podrobně.

## Dobré vědět

- **Před každou aktualizací zálohuje Klacks sám.** Aktualizační služba vytvoří zálohu dat dříve, než aktivuje novou verzi; při migraci je záloha navázána na operaci aktualizace a použije se pro automatický nebo ruční rollback. Vlastní, **externí** zálohu to nenahrazuje — chrání právě v těch případech, kdy je postižen samotný hostitel.
- **Svou zálohu ověřujte.** Dump, který nebyl nikdy obnoven, je domněnka, nikoli záloha. Založte zahazovací databázi a obnovte do ní, než se na postup spolehnete.
- **Klíčenku uchovávejte odděleně od databáze.** Pokud `api-dataprotection` leží ve stejné záložní sadě a stejná událost zasáhne obojí, je šifrování bezcenné.

---

*Provozní otázky? [Komunita Klacks na Discordu](https://discord.gg/YRP8p2abVC).*
