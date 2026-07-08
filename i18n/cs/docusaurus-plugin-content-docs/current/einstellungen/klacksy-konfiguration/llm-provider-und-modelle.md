---
sidebar_position: 1
---

# LLM poskytovatelé a modely

Klacksy potřebuje jazykový model, aby rozuměl a jednal. V nastavení Nastavení > LLM poskytovatelé, LLM modely a LLM synchronizační log určujete, které poskytovatele a které konkrétní modely smí Klacks pro tento účel používat.

## Jak to funguje

**Přidání poskytovatele:** Poskytovatel sdružuje základní URL, verzi API a API klíč daného poskytovatele. Šest poskytovatelů (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) je pevně zabudováno v kódu; každý další poskytovatel běží přes obecné, s OpenAI kompatibilní připojení — tímto způsobem lze zapojit např. Groq, Together AI, Fireworks, OpenRouter, xAI, Cerebras, Perplexity nebo vlastní provozovaný model. Přes „Hledat poskytovatele" navíc Klacks navrhuje poskytovatele, které jste ještě nezaložili: z kurátorovaného katalogu ověřených adres, nebo — pokud je nakonfigurováno vyhledávání na internetu — pomocí internetového rešeršování. Každý návrh je před zobrazením naživo ověřen na dostupnost; vybraní poskytovatelé se zakládají deaktivovaní a bez API klíče, který si následně doplníte sami.

**API klíč a priorita:** Po uložení se klíč v rozhraní už nikdy nezobrazí v čitelné podobě — pouze zda je nějaký uložen („Nakonfigurováno"). Priorita určuje pořadí, v jakém jsou aktivovaní poskytovatelé přizváváni.

**Správa modelů:** V sekci LLM modely zakládáte pro jednotlivé poskytovatele konkrétní modely (zobrazovaný název, technické ID modelu u poskytovatele, kontextové okno, maximální počet tokenů, náklady na 1000 vstupních/výstupních tokenů). Model lze označit jako výchozí; poskytovatele nelze smazat, dokud je jeden z jeho modelů aktuálním výchozím modelem.

**LLM synchronizační log:** Služba na pozadí standardně každých 24 hodin automaticky kontroluje, které modely u aktivovaných poskytovatelů jsou nově dostupné nebo odpadly. Nové modely jsou předem ověřeny skutečným testovacím dotazem a vloženy jako aktivované pouze v případě úspěchu; modely, které již nejsou nabízeny, se automaticky deaktivují. Synchronizační log zobrazuje kompletní historii podle poskytovatele s datem, počtem nových/deaktivovaných/neúspěšných modelů a rozbalitelnými výsledky testů. Administrátoři po dalším přihlášení navíc obdrží toast oznámení o nepřečtených synchronizačních událostech.

## Dobré vědět

- Pouze šest poskytovatelů (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) má dedikovanou implementaci — všichni ostatní poskytovatelé běží přes obecné, s OpenAI kompatibilní připojení.
- Katalog pro „Hledat poskytovatele" aktuálně obsahuje dvanáct ověřených poskytovatelů; webové návrhy se zobrazují pouze tehdy, pokud je v nastavení nakonfigurováno vyhledávání na internetu.
- Služba synchronizačního logu běží na pozadí nezávisle na vaší relaci — nemusíte kvůli tomu držet stránku otevřenou.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — Přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
