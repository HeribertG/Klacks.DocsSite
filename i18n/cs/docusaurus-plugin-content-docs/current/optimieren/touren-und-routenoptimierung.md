---
sidebar_position: 1
---

# Optimalizace tras a okruhů

Pro mobilní nasazení — okruhy domácí péče (Spitex), bezpečnostní obchůzky, úklidové objekty, rozvoz — Klacks neplánuje jen *kdo*, ale i *v jakém pořadí*.

## Jak to funguje

Každé místo nasazení má uloženou adresu; Klacks tak zná trasy. **Mravenčí algoritmus** (osvědčená optimalizační metoda pro úlohy trasování) vypočítá z adres nasazení nejvhodnější pořadí:

1. **Zadání adres** — jednorázově uložíte u míst nasazení
2. **Optimalizace pořadí** — Klacks určí nejkratší smysluplný sled; odpadají zajížďky a jízdy naprázdno
3. **Zobrazení na mapě** — hotový okruh se zobrazí jako trasa, volitelně pro auto, kolo nebo pěšky

Jsou-li pro nasazení uložena pevná časová okna (např. pouze dopoledne), promítá se to do plánování okruhů — pevnou zárukou dodržení to ale není.

## Dobré vědět

- Pro výpočet vzdálenosti a doby jízdy může Klacks zapojit externí službu OpenRouteService (GPS souřadnice se přitom přenášejí anonymizovaně) — podle konfigurace instance.
- Optimalizace tras je samostatný modul pro kontejnerové služby; obecné automatické plánování směn nezávisle na tom hodnotí pokrytí, spravedlnost a soulad s pravidly.
- Dopravní prostředek lze volit pro každý okruh zvlášť — praktické pro městské cyklistické okruhy vedle venkovských autotras.
- Pokud někdo vypadne, Klacks okamžitě ukáže, kdo je kvalifikovaný a dostupný.

![Zobrazení časové osy pro plánování okruhů](/img/app-timeline-de.png)

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
