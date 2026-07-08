---
sidebar_position: 5
---

V nastavení Nastavení > Body přebírání ERP konfigurujete, jak se objednávky z externího ERP systému automaticky přebírají do Klacks jako XML soubory.

## Jak to funguje

**Tři způsoby dodání:** ERP systém může poskytovat soubory v úložišti drop-pointu (Klacks je automaticky vyzvedává podle harmonogramu), odesílat je přímo přes HTTP POST na importní endpoint (ověřeno pomocí přístupového tokenu), nebo administrátorka XML soubor ručně nahraje na této stránce přetažením (drag-and-drop).

**Drop-point** je centrální schránka pro všechny importní soubory, kterou spravuje sám Klacks — zobrazuje tři oblasti: Příchozí (čeká na další běh), Zpracováno (archiv) a Chyby (neplatné soubory včetně důvodu chyby, s možností opětovného importu). Harmonogram (cron výraz, výchozí hodinově) a přepínač Aktivní pro pozastavení řídí automatické stahování.

**Přístupové tokeny** jsou potřeba pouze tehdy, když ERP systém dodává soubory formou push. Každý token začíná na `klacks_erp_`, je platný 1–730 dní (výchozí 365) a v čitelné podobě se zobrazí **pouze jednou při vytvoření**. Takový token platí výhradně pro importní endpoint, ne pro zbývající přístup k API, a lze jej kdykoli odvolat.

**Zpracování:** Objednávky se přiřazují existujícímu nebo nově založenému zákazníkovi na základě ID zdrojového systému a externí reference zákazníka (nebo náhradou podle firmy/PSČ/ulice) a vznikají nejprve jako koncept, který musí plánovači zkontrolovat a zapečetit. Změněná nová dodávka již zapečetěné objednávky automaticky uzavře starou a založí novou, propojenou verzi; nezměněné opakované dodávky nic nespustí.

## Dobré vědět

- Chybné jednotlivé objednávky (např. bez dne v týdnu nebo s duplicitní referencí) se odmítnou, aniž by blokovaly ostatní platné objednávky ze stejného souboru; celý soubor přesto skončí v oblasti Chyby, aby nic nebylo přehlédnuto.
- Zpracované soubory se archivují, nikoli mažou.
- Přesný formát XML (povinná pole, formáty data, logika dne v týdnu) je zdokumentován v příručce přímo na stránce nastavení a v ukázkovém souboru ke stažení.
- Tato konfigurace se nachází v sekci Nastavení, a je tak vyhrazena administrátorským rolím.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — Přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
