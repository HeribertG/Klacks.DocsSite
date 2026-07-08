---
sidebar_position: 4
---

De eeuwigdurende kalender berekent feestdagen voor elk jaar automatisch — u definieert eenmalig de regels, en Klacks kent de feestdagen daarna voor alle komende jaren.

## Zo werkt het

Elke feestdag wordt via een korte regel beschreven. Er zijn twee basistypen:

- **Vaste data** in het formaat `MM/DD`: `01/01` is Nieuwjaar, `08/01` de Zwitserse Nationale Feestdag, `12/25` Kerstmis.
- **Paasgerelateerde data** in het formaat `EASTER+XX` of `EASTER-XX`: de paasdatum wordt automatisch berekend volgens de Gaussiaanse paasformule, de feestdag als afstand daartoe. Voorbeelden: `EASTER-02` = Goede Vrijdag, `EASTER+01` = Tweede Paasdag, `EASTER+39` = Hemelvaart, `EASTER+50` = Tweede Pinksterdag, `EASTER+60` = Sacramentsdag.

Daarnaast zijn er **vaste data met verschuiving naar een weekdag** (`MM/DD+XX+WW` resp. `MM/DD+XX-WW`) voor feestdagen zoals "eerste donderdag van november" (`11/01+00+TH`) of "laatste maandag van mei" (`05/25+00-MO`).

Met **SubRules** verschuift u een feestdag automatisch wanneer deze op een bepaalde weekdag valt — bijv. `SA+2;SU+1`: valt de dag op zaterdag of zondag, dan schuift hij op naar maandag. Meerdere regels worden gescheiden met `;`.

Per regel legt u bovendien naam en beschrijving (meertalig), land en kanton/deelstaat vast, evenals de selectievakjes **Wettelijke feestdag** en **Betaald**.

## Goed om te weten

- De weekdagafkortingen zijn Engels: `SU`, `MO`, `TU`, `WE`, `TH`, `FR`, `SA`.
- SubRules zijn vooral bedoeld om feestdagen die in het weekend vallen te verschuiven naar de eerstvolgende werkdag.
- Het selectievakje **Betaald** is relevant voor de loonberekening.
- Via land en kanton/deelstaat stuurt u regionale verschillen — Goede Vrijdag geldt bijvoorbeeld in Zwitserland niet in alle kantons (uitzonderingen: VS, TI).
- De vooraf geïnstalleerde kalenderpakketten voor landen en Zwitserse kantons zijn beveiligd tegen verwijderen; eigen, zelf aangemaakte kalenderselecties kunt u altijd verwijderen.

![Feestdagenregels in Klacks](/img/app-calendar-de.png)

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks gereset.*
