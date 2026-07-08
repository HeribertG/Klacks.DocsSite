---
sidebar_position: 2
---

V nastavení Nastavení > Nastavení IMAP zadáváte poštovní schránku, kterou Klacks průběžně na pozadí stahuje a zobrazuje v sekci „Schránka příchozí pošty" — díky tomu lze automaticky sledovat příchozí korespondenci přiřazenou zaměstnancům a zákazníkům.

## Jak to funguje

**Připojovací údaje:** Server, port (výchozí 993), SSL šifrování, uživatelské jméno, heslo, stahovaná složka (výchozí `INBOX`) a interval stahování v sekundách (výchozí 300).

**Co se se staženými e-maily děje:** Klacks periodicky dotazuje schránku přes IMAP, kontroluje nové zprávy pomocí spamového filtru (spam se přesouvá do složky Nevyžádaná pošta jak v Klacks, tak ve skutečné schránce) a zbývající zprávy automaticky přiřadí odpovídajícímu záznamu zákazníka nebo zaměstnance, pokud je adresa odesílatele uložena jako kontaktní údaj. Tak vzniká ve „Schránce příchozí pošty" historie korespondence filtrovatelná podle osoby. Změny jako „označit jako přečtené", přesunutí nebo smazání se promítají zpět i do skutečné schránky.

**Test připojení:** Tlačítko „Otestovat připojení IMAP" se skutečně připojí k serveru, přihlásí se, otevře nakonfigurovanou složku pro čtení a zobrazí počet nalezených zpráv. Pokud složka neexistuje, je to výslovně nahlášeno.

## Dobré vědět

- Tato schránka **není** kanálem pro hlášení absencí a **není** součástí přebírání objednávek z ERP (na to existují samostatné body přebírání, viz vlastní stránka) — napájí výhradně obecnou „Schránku příchozí pošty".
- Toto nastavení je globální pro celou instalaci — neexistuje samostatný IMAP účet pro každého uživatele.
- Pokud je klíč instalace použitý k šifrování resetován, Klacks už nedokáže dešifrovat uložené heslo a stahování pozastaví, dokud heslo nebude znovu uloženo.
- Zprávy ve schránce příchozí pošty lze přímo přeložit, pokud je nakonfigurován DeepL (viz vlastní stránka).

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — Přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
