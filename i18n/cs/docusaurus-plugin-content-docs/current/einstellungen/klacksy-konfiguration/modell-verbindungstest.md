---
sidebar_position: 5
---

# Test připojení modelu

Ne každý jazykový model se hodí pro Klacksy — musí spolehlivě poskytovat strukturovaná volání funkcí místo odpovídání v prozaickém textu. V nastavení Nastavení > Kontrola modelu Klacksy to Klacks automaticky testuje pro všechny nakonfigurované modely.

## Jak to funguje

**Test:** Kliknutí na „Najít nejlepší modely" odešle každému nakonfigurovanému modelu (i deaktivovanému) stejný malý testovací úkol: „Založ nového zaměstnance jménem Anna Müller." Model na to musí reagovat odpovídajícím strukturovaným voláním funkce se správnými parametry jména — ne textovou odpovědí. Kromě toho musí kontextové okno zahrnovat minimálně 32 000 tokenů, aby se do něj vešel systémový prompt a schopnosti Klacksy. Každý test běží s časovým limitem 30 sekund.

**Výsledek:** Modely, které splňují obě kritéria, se považují za „vhodné" a automaticky se aktivují; nevhodné modely se deaktivují. Seznam výsledků je seřazen podle vhodnosti, poté podle schopnosti volání funkcí, nákladů, latence a kontextového okna.

**Nastavení výchozího modelu:** Přes „Nastavit jako výchozí" vybíráte přímo ze seznamu výsledků, který model bude Klacksy nadále používat jako výchozí. Bez vlastního výběru Klacks automaticky nastaví jako výchozí nejvhodnější model.

## Dobré vědět

- Test kontroluje všechny uložené modely, nejen aktivované — i doposud deaktivované modely tak mohou být aktivovány, pokud test projdou.
- Úspěšný test není ochranou před náklady: drahé, ale vhodné modely se rovněž aktivují. Náklady na 1000 tokenů jsou vidět v seznamu výsledků.
- Tento test je speciálně zaměřen na volání funkcí kvůli akceschopnosti a je nezávislý na kontrole modelu u jazykových nastavení, kde stačí nižší kontextové okno pro pouhé čištění přepisu.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — Přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
