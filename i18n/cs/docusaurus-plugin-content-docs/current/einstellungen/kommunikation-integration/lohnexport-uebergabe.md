---
sidebar_position: 7
---

# Předání mzdového exportu

Při zapečetění období ohraničeného podle skupiny může Klacks jeho mzdová data automaticky předat externímu mzdovému systému. Tato stránka vysvětluje, co je k tomu potřeba a proč předání někdy zdánlivě nic nedoručí — nejčastější případ podpory kolem této funkce.

## Jak to funguje

**Předpoklad: doplňkový plugin pro mzdový export.** Automatické předání do mzdového systému není základní funkcí, ale vyžaduje vlastní doplňkový plugin, který musí být v nastavení Nastavení > Funkční pluginy nainstalován **a** aktivní. Chybí-li plugin, nebo je jen deaktivovaný, předání nedoručí vůbec nic — žádný soubor, žádné upozornění, žádný pro vás viditelný záznam. To je přísnější než deaktivovaný exportní formát v exportních nastaveních: ten alespoň zanechá záznam v serverovém logu; zde není ani to.

**Jednorázové předání (idempotence).** Automatické předání proběhne pouze přesně jednou pro kombinaci skupiny, cílového systému a přesného datového rozsahu — to zabrání, aby stejná mzdová data omylem dorazila do mzdového systému dvakrát. Otevřete-li znovu už zapečetěné období, něco opravíte a znovu zapečetíte, druhé předání se bez komentáře přeskočí: pro přesně tuto kombinaci již existuje záznam o předání a opětovné otevření jej neodstraní.

**Ruční stažení se počítá stejně.** Ruční, podle potřeby provedené stažení mezd pro stejnou skupinu/stejný cílový systém/stejné období vytvoří stejný záznam jako automatické předání. Ruční stažení provedené před automatickým předáním jej pro dotčené období „spotřebuje" stejně, jako by už automaticky proběhlo.

| Proč nic (nového) nedorazilo? | Existuje záznam? | Blokuje pozdější ruční stažení? |
|---|---|---|
| Plugin není nainstalován/aktivní | ne | ne |
| Pro přesně tuto kombinaci již předáno | ano (viditelné na záložce „Protokol" uzávěrky období) | ne |

**Dva přesné body:**

- Ruční stažení nepřebírá **žádnou** případně podporou uloženou korekci exportního formátu — vždy používá výchozí hodnoty, i když pro cílový systém existuje aktivní korekce, která by v automatické cestě platila.
- Jednorázová blokace je přesná: platí pouze při shodné skupině, shodném cílovém systému a shodném počátečním/koncovém datu. Jiné období nebo jiný cílový systém dřívější předání neblokuje.

**Když po zapečetění nic nedorazí, nebo je potřeba dodatečně dodat opravená čísla:** Nejprve zkontrolujte, zda je odpovídající plugin v nastavení Nastavení > Funkční pluginy nainstalován a aktivní. Po opětovném otevření a opravě je spolehlivou cestou, jak dostat opravená čísla do mzdového systému, **ruční export** v sekci Uzávěrka období (záložka „Exporty") — ten nepodléhá ani blokaci pluginu, ani jednorázové blokaci automatického předání. Protože ani on nepřebírá korekci exportního formátu, v takovém případě zkontrolujte exportovaná čísla ručně oproti případně aktivní korekci.

## Dobré vědět

- Základem pro každé předání je zapečetěné, podle skupiny ohraničené období — jak se období zapečeťuje, popisuje stránka [Uzávěrka období](../../planen/periodenabschluss.md). Zapečetění a opětovné otevření jsou tam vyhrazeny administrativním rolím.
- Tato stránka popisuje **export** mzdových dat z Klacks do mzdového systému. Opačný tok — **import** objednávek z ERP systému do Klacks — popisují [ERP přebírací body](./erp-uebernahmepunkte.md).
- Pluginy se spravují centrálně v nastavení Nastavení > Funkční pluginy: instalace, aktivace/deaktivace nebo úplné odstranění.
- Deaktivovaný plugin zůstává nainstalovaný, ale blokuje automatické předání stejně úplně jako nenainstalovaný.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
