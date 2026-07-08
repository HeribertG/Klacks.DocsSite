---
sidebar_position: 1
---

# Planification automatique : le plan en quelques secondes

La partie la plus fastidieuse de la planification des services — attribuer les personnes aux services — Klacks s'en charge d'un simple clic.

## Comment ça marche

Derrière la planification automatique en un clic se cache un **algorithme génétique** : il génère des milliers de variantes de plan, les évalue et combine les meilleures entre elles — jusqu'à obtenir une solution équilibrée. Les règles strictes sont toujours prioritaires ; les autres objectifs ne comptent qu'ensuite :

- **Règles** — droit du travail, temps de repos, qualifications et disponibilités ne sont pas négociables : aucun résultat, aussi bon soit-il, ne peut enfreindre une règle stricte
- **Couverture** — chaque service est pourvu avec le nombre de personnes requis
- **Équité** — les heures de travail se répartissent de façon homogène, et l'enchaînement des services par personne suit autant que possible le schéma matin → après-midi → nuit
- **Continuité** — dans la mesure du possible, les collaborateurs restent sur leur lieu d'intervention habituel

Vous lancez la planification automatique directement depuis le plan de service pour la période choisie. Le résultat apparaît comme une ébauche de plan classique : tout reste ajustable manuellement, rien n'est validé définitivement sans votre accord.

## Bon à savoir

- Les qualifications agissent comme une véritable limite : une personne qui ne possède pas une qualification requise n'est pas affectée.
- La planification automatique respecte les entrées déjà existantes — vous pouvez donc fixer d'abord les points fixes et laisser l'algorithme remplir le reste.
- Si un résultat ne vous convient pas, relancez simplement la planification : l'algorithme trouve des alternatives tout aussi valables.

![Grille du plan de service Klacks](/img/app-schedule-de.png)

---
*À tester directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
