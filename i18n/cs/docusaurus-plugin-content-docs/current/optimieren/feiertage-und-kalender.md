---
sidebar_position: 4
---

Věčný kalendář automaticky vypočítává svátky pro každý rok — pravidla definujete jednou a Klacks pak zná svátky pro všechny nadcházející roky.

## Jak to funguje

Každý svátek je popsán krátkým pravidlem. Existují dva základní typy:

- **Pevná data** ve formátu `MM/DD`: `01/01` je Nový rok, `08/01` švýcarský státní svátek, `12/25` Vánoce.
- **Data vázaná na Velikonoce** ve formátu `EASTER+XX` nebo `EASTER-XX`: datum Velikonoc se počítá automaticky podle Gaussova velikonočního vzorce a svátek se odvozuje jako odstup od něj. Příklady: `EASTER-02` = Velký pátek, `EASTER+01` = Velikonoční pondělí, `EASTER+39` = Nanebevstoupení Páně, `EASTER+50` = Svatodušní pondělí, `EASTER+60` = Boží tělo.

Kromě toho existují **pevná data s posunem podle dne v týdnu** (`MM/DD+XX+WW`, resp. `MM/DD+XX-WW`) pro svátky jako „první čtvrtek v listopadu" (`11/01+00+TH`) nebo „poslední pondělí v květnu" (`05/25+00-MO`).

Pomocí **SubRules** posunete svátek automaticky, pokud připadne na určitý den v týdnu — např. `SA+2;SU+1`: pokud den připadne na sobotu nebo neděli, přesune se na pondělí. Více pravidel se odděluje středníkem `;`.

Ke každému pravidlu zadáváte také název a popis (vícejazyčně), zemi a kanton/spolkovou zemi a zaškrtávací pole **Zákonný svátek** a **Placený**.

## Dobré vědět

- Zkratky dnů v týdnu jsou anglické: `SU`, `MO`, `TU`, `WE`, `TH`, `FR`, `SA`.
- SubRules slouží především k tomu, aby se svátky připadající na víkend přesunuly na nejbližší pracovní den.
- Zaškrtávací pole **Placený** je relevantní pro výpočet mzdy.
- Prostřednictvím země a kantonu/spolkové země řídíte regionální odlišnosti — Velký pátek například ve Švýcarsku neplatí ve všech kantonech (výjimky: VS, TI).
- Předinstalované sady kalendářů pro země a švýcarské kantony jsou chráněny proti smazání; vlastní, samostatně vytvořené výběry kalendáře můžete kdykoli smazat.

![Pravidla svátků v Klacks](/img/app-calendar-de.png)

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
