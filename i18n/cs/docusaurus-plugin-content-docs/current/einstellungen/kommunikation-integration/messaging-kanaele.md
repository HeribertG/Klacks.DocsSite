---
sidebar_position: 6
---

V nastavení Nastavení > Poskytovatelé zpráv připojujete externí chatové a SMS kanály, přes které Klacks (a Klacksy) může přímo oslovit zaměstnance a zákazníky — namísto e-mailu nebo navíc k němu.

## Jak to funguje

**Společný princip:** Všechny kanály se konfigurují přes stejný seznam: interní název, zobrazovaný název, typ poskytovatele a přístupové údaje odlišné podle kanálu (token, ID účtu, certifikát apod.), dále přepínač zapnuto/vypnuto a testovací tlačítko u každé položky pro okamžité ověření připojení. Koho zpráva zasáhne, se určí podle kanálově specifického identifikátoru (telefonní číslo, uživatelské jméno, ID uživatele apod.) uloženého u zaměstnance nebo zákazníka v sekci Adresa > Kontaktní údaje — sami žádná syrová ID zadávat nemusíte.

**K čemu se messaging v Klacks používá:** jako doplňkový způsob oznámení vedle e-mailu, např. pro hlášení z plánu služeb nebo zprávy od Klacksy — podle toho, které kanály jsou aktivovány a uloženy u konkrétní osoby.

**Přehled 11 kanálů:**

| Kanál | Odesílání/přijímání | Zvláštnost |
|---|---|---|
| Slack | Odesílání + přijímání | Bota je navíc nutné výslovně pozvat do každého kanálu příkazem `/invite`. |
| Telegram | Odesílání + přijímání | Příjemce musí bota předem sám aktivovat příkazem `/start`. |
| Signal | Pouze odesílání | Vyžaduje vlastní provozovaný signal-cli bridge (Docker) s vlastním telefonním číslem spárovaným přes QR kód — žádné oficiální cloudové API. |
| Microsoft Teams | Pouze odesílání | Power Automate webhook pro každý kanál; žádné 1:1 zprávy, pro více kanálů Teams je potřeba více položek. |
| SMS | Pouze odesílání | Telefonní číslo ve formátu E.164; u zkušebních účtů (např. Twilio) pouze na předem ověřená čísla, cílová země musí být povolena. |
| WeChat | Pouze odesílání | Ověření jako Official Account mimo Čínu je náročné; zasáhne pouze sledující, kteří interagovali v posledních 48 hodinách. |
| KakaoTalk | Pouze odesílání | Přístupový token je platný pouze zhruba 6 hodin a musí se ručně obnovovat; příjemce musí být „přítelem" aplikace. |
| Line | Odesílání + přijímání | Měsíční limit odesílání omezený podle plánu; ID příjemce je známo až po první příchozí zprávě. |
| Threema | Pouze odesílání | Placený účet Threema Gateway (model kreditu); žádné přijímání, protože se nepoužívá režim end-to-end. |
| Viber | Odesílání + přijímání | Bot smí psát pouze osobám, které ho předem odebíraly (odebraly odběr); webhook vyžaduje veřejně dostupné HTTPS. |
| Zalo | Pouze odesílání | Přístupový token vyprší přibližně po 25 hodinách, odesílání je možné pouze v rámci interakčního okna. |

## Dobré vědět

- Pro každý kanál existuje vlastní podrobná příručka s návodem krok za krokem na nastavení u příslušného poskytovatele — dostupná přímo na stránce nastavení dané položky poskytovatele.
- Aktivních může být paralelně více kanálů; který se skutečně použije, závisí na tom, jaké kontaktní údaje jsou uloženy u dané osoby.
- U všech kanálů s časově omezeným přístupovým tokenem (např. KakaoTalk, Zalo) je nutné tento token obnovit mimo Klacks u poskytovatele a doplnit jej v Klacks, jinak odesílání přes tento kanál přestane fungovat.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — Přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
