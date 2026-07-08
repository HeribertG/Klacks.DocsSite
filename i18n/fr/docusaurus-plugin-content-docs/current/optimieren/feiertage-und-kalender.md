---
sidebar_position: 4
---

Le calendrier perpétuel calcule automatiquement les jours fériés pour chaque année — vous définissez les règles une fois, et Klacks connaît ensuite les jours fériés pour toutes les années à venir.

## Comment ça fonctionne

Chaque jour férié est décrit par une règle courte. Il existe deux types de base :

- **Dates fixes** au format `MM/DD` : `01/01` est le Nouvel An, `08/01` la Fête nationale suisse, `12/25` Noël.
- **Dates liées à Pâques** au format `EASTER+XX` ou `EASTER-XX` : la date de Pâques est calculée automatiquement selon la formule de Gauss, le jour férié étant défini par son écart par rapport à celle-ci. Exemples : `EASTER-02` = Vendredi saint, `EASTER+01` = Lundi de Pâques, `EASTER+39` = Ascension, `EASTER+50` = Lundi de Pentecôte, `EASTER+60` = Fête-Dieu.

De plus, il existe des **dates fixes avec décalage de jour de semaine** (`MM/DD+XX+WW` ou `MM/DD+XX-WW`) pour des jours fériés comme « premier jeudi de novembre » (`11/01+00+TH`) ou « dernier lundi de mai » (`05/25+00-MO`).

Avec les **SubRules**, vous décalez automatiquement un jour férié lorsqu'il tombe un jour de semaine donné — par ex. `SA+2;SU+1` : si le jour tombe un samedi ou un dimanche, il est reporté au lundi. Plusieurs règles sont séparées par `;`.

Pour chaque règle, vous saisissez en outre un nom et une description (multilingues), le pays et le canton/l'état fédéré, ainsi que les cases à cocher **Jour férié légal** et **Payé**.

## Bon à savoir

- Les abréviations des jours de semaine sont en anglais : `SU`, `MO`, `TU`, `WE`, `TH`, `FR`, `SA`.
- Les SubRules servent surtout à reporter les jours fériés tombant le week-end au prochain jour ouvrable.
- La case à cocher **Payé** est pertinente pour le calcul des salaires.
- Le pays et le canton/l'état fédéré permettent de gérer les différences régionales — le Vendredi saint, par exemple, ne s'applique pas dans tous les cantons en Suisse (exceptions : VS, TI).
- Les packages de calendrier préinstallés pour les pays et les cantons suisses sont protégés contre la suppression ; vos propres sélections de calendrier créées par vous-même peuvent être supprimées à tout moment.

![Feiertagsregeln in Klacks](/img/app-calendar-de.png)

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
