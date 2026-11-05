---
sidebar_position: 5
---

# ERP přebírací body

V nastavení Nastavení > Import (viditelné pouze v expertním režimu), karta „Předávací místa ERP“, konfigurujete, jak se objednávky z externího ERP systému automaticky přebírají do Klacks jako XML soubory.

## Jak to funguje

**Tři způsoby dodání:** ERP systém může ukládat XML soubory do složky na serveru Klacks (Klacks je automaticky vyzvedává podle harmonogramu, jakmile je soubor 10 sekund beze změny), odesílat je přímo přes HTTPS POST na importní endpoint (ověřeno pomocí přístupového tokenu), nebo administrátorka XML soubor ručně nahraje na této stránce přetažením (drag-and-drop; import se spustí okamžitě). SFTP neexistuje; importují se pouze XML soubory ve formátu `ErpOrderImport`.

**Drop-point** je centrální schránka pro všechny importní soubory, kterou spravuje sám Klacks — zobrazuje tři oblasti: Příchozí (přijato nebo právě probíhá import), Zpracováno (se shrnutím pro každý soubor) a Chyby (nečitelné nebo neplatné soubory včetně důvodu chyby, s možností opětovného importu nebo smazání). Harmonogram (cron výraz, výchozí hodinově) a přepínač Aktivní pro pozastavení řídí automatické stahování.

**Která cesta se hodí pro jakou instalaci?** Na kancelářském PC (instalace pro Windows) je nejpřirozenější cestou složka; výchozí složka je `C:\ProgramData\Klacks\ErpImport\erp\orders`. Je chráněná, zapisovat do ní smí pouze SYSTEM a administrátoři: administrátor musí účtu, pod kterým běží export z ERP, udělit oprávnění „Změnit“ přesně na složku `erp\orders`, nikoli na celou složku `ProgramData\Klacks`. Na vlastním serveru s Dockerem je složka běžnou složkou serveru: soubor Compose připojuje složku `erp-import` vedle `docker-compose.yml` (lze změnit přes `KLACKS_ERP_IMPORT_HOST_DIR`) na `/app/ErpImport`, uvnitř kontejneru má tato složka cestu `/app/ErpImport/erp/orders`. Instalace hlásí cestu na serveru přes `KLACKS_ERP_IMPORT_HOST_PATH` (nastavuje ji instalátor); ERP na počítači serveru zapisuje přímo do této složky a účet, pod kterým export běží, potřebuje oprávnění k zápisu přesně do této složky. Starší instalace měly pojmenovaný svazek (named volume); jeho obsah se jednorázově zkopíruje do složky (viz README k instalaci On-Prem, část „Upgrading from a named volume“). Na kartě je uvedena cesta ke složce (u Dockeru složka serveru, pod ní cesta v kontejneru) s tlačítkem pro zkopírování. U instalace hostované námi neexistuje přístup ke složkám serveru: push s přístupovým tokenem nebo ruční nahrání.

**Přístupové tokeny** jsou potřeba pouze tehdy, když ERP systém dodává soubory formou push. Každý token začíná na `klacks_erp_`, je platný 1–730 dní (výchozí 365) a v čitelné podobě se zobrazí **pouze jednou při vytvoření**. Takový token platí výhradně pro importní endpoint, ne pro zbývající přístup k API, a lze jej kdykoli odvolat.

**Zpracování:** Objednávky se přiřazují existujícímu nebo nově založenému zákazníkovi na základě ID zdrojového systému a externí reference zákazníka (nebo náhradou podle firmy/PSČ/ulice) a vznikají nejprve jako koncept, který musí plánovači zkontrolovat a zapečetit. Změněná nová dodávka již zapečetěné objednávky automaticky uzavře starou a založí novou, propojenou verzi; nezměněné opakované dodávky nic nespustí.

## Dobré vědět

- Chybné jednotlivé objednávky (např. bez dne v týdnu nebo s duplicitní referencí) se odmítnou, aniž by blokovaly ostatní platné objednávky ze stejného souboru; soubor se přesto zobrazí v oblasti Zpracováno, označený varovným symbolem, a odmítnuté objednávky lze rozbalit i s uvedením důvodu.
- Soubory se nepřesouvají ani nearchivují: zůstávají ve složce, jejich stav je uložen v databázi. Úspěšně zpracované soubory se po 90 dnech automaticky smažou; soubory v oblasti Chyby zůstávají, dokud nejsou znovu importovány nebo smazány.
- Přesný formát XML (povinná pole, formáty data, logika dne v týdnu) je zdokumentován v příručce přímo na stránce nastavení a v ukázkovém souboru ke stažení.
- Tato konfigurace se nachází v sekci Nastavení, a je tak vyhrazena administrátorským rolím.

---
*Vyzkoušejte přímo: [Klacks Playground](https://play.klacks-software.ch) — Přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
