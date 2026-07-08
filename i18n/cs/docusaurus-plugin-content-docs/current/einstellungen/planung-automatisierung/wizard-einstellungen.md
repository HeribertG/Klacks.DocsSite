---
sidebar_position: 3
---

V nastavení Nastavení > Nastavení průvodce vybíráte jazykový model AI, který pro své hodnocení používá „Holistic Harmonizer" — jeden z plánovacích asistentů Klacks.

## Jak to funguje

V rozbalovacím seznamu vyberete z modelů LLM aktivovaných v Klacks ten, který má Holistic Harmonizer globálně používat (nebo „(žádný)", aby žádný nepoužíval). Tlačítkem „Zkontrolovat všechny modely" pošle Klacks malý testovací obrázek každému aktivovanému modelu a ověří, zda odpoví a dokáže obrázek přečíst — s timeoutem až 90 sekund na model. Výsledek se zobrazí jako tabulka s modelem, poskytovatelem, stavem (OK/chyba), dobou odezvy a tlačítkem pro přímé převzetí úspěšně otestovaného modelu.

Zpracování obrazu zde není vedlejší záležitostí, ale předpokladem: podle textu nápovědy na stránce tento asistent („Wizard 3") potřebuje ke svému fungování modely se schopností zpracování obrazu.

## Dobré vědět

- Tato stránka se **netýká** jednoklikového automatického plánování, které rozděluje směny mezi zaměstnance automaticky — to běží přes genetický algoritmus zcela bez LLM a nemá zde žádná nastavení.
- Je-li jako model nastaveno „(žádný)", je Holistic Harmonizer fakticky deaktivován.
- Které modely LLM jsou vůbec k dispozici k výběru (aktivované/deaktivované), se určuje jinde v nastavení AI — zde vybíráte pouze mezi již aktivovanými modely.
- Kontrolní tlačítko je čistý sebetest (dostupnost + porozumění obrazu + doba odezvy) a samo o sobě nemění žádná plánovací data.

---
*Vyzkoušejte si to přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
