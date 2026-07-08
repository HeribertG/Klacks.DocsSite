---
sidebar_position: 7
---

# Pravidla pro spam

V části Nastavení > Pravidla pro spam definujete filtrovací pravidla, pomocí kterých se příchozí e-maily v modulu Inbox automaticky označí jako spam — pravidla platí jak při běžném stahování nových e-mailů (IMAP polling), tak při dodatečném přehodnocení již přijatých e-mailů.

## Jak to funguje

**Vytvoření pravidla:** Vyberte typ pravidla — odesílatel obsahuje, doména odesílatele, předmět obsahuje nebo obsah obsahuje —, zadejte vzor, který se má kontrolovat, a klikněte na Přidat.

**Správa pravidel:** Každé pravidlo lze pomocí zaškrtávacího políčka aktivovat nebo deaktivovat, aniž byste jej museli smazat, a pomocí tlačítka koše trvale odstranit.

## Dobré vědět

- Deaktivovaná pravidla zůstávají uložena, ale už neovlivňují nové nebo znovu vyhodnocované e-maily — užitečné pro dočasné pozastavení pravidla namísto jeho smazání.
- Klacks používá pro import objednávek ERP stejnou schránku jako běžný modul e-mailového inboxu (architektura s jednou schránkou). Příliš široce nastavené pravidlo (např. celá doména odesílatele) proto teoreticky může jako spam označit i příchozí e-maily s objednávkami ERP — nová pravidla proto před aktivací pečlivě zkontrolujte.
- Používejte pravidla pro doménu odesílatele k zablokování celých nežádoucích odesílajících organizací, místo abyste jednotlivě zadávali každou adresu jako pravidlo „odesílatel obsahuje".

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
