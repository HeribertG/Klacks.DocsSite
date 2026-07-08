---
sidebar_position: 5
---

Les règles de planification définissent le cadre de la planification automatique des services — horaires de travail, temps de repos et capacités que Klacks respecte lors de la répartition des services.

## Comment ça marche

Une règle de planification est rattachée à un **contrat**. Les valeurs limites définies s'appliquent ainsi à tous les collaborateurs ayant ce contrat. Chaque règle comprend quatre domaines :

**Jours de travail et temps de repos**
- Jours de travail max. : règle souple pour la longueur de bloc préférée avant qu'un jour de repos ne soit planifié (par ex. « 5 jours de travail, puis repos ») — un dépassement ne rend pas le plan invalide, il le rend seulement moins optimal
- Jours de repos min. entre deux blocs de travail
- Heures de liberté min. entre deux jours de travail (temps de repos entre la fin d'une journée de travail et le début de la suivante)
- Écart optimal max. entre les services, en heures
- Jours de travail consécutifs max. sans jour de repos

**Limites d'heures**
- Heures quotidiennes max. et heures hebdomadaires max.
- Heures de travail quotidiennes (durée cible)
- Seuil d'heures supplémentaires : à partir de ce nombre d'heures hebdomadaires, les heures sont considérées comme supplémentaires

**Heures mensuelles**
- Heures garanties (nombre minimum assuré au collaborateur par mois)
- Heures minimales et maximales par mois
- Heures temps plein (nombre d'heures mensuelles correspondant à un emploi à temps plein)

**Congés**
- Jours de congé par année civile

## Bon à savoir

- Lors de la création d'une nouvelle règle, les **valeurs par défaut définies dans les paramètres** (Règles de planification — valeurs par défaut) sont reprises automatiquement ; vous pouvez ensuite ajuster chaque valeur individuellement.
- Les règles de planification s'appliquent via le contrat — vous n'avez pas besoin de les gérer par personne. Si une règle change, cela concerne tous les collaborateurs ayant ce contrat.
- Le seuil d'heures supplémentaires et la durée cible sont deux choses différentes : la durée cible est le standard par jour, le seuil d'heures supplémentaires est le seuil par semaine.
- « Jours de travail max. » (préférence souple pour la longueur de bloc) et « Jours de travail consécutifs max. » (limite stricte, jamais dépassable) sont deux règles distinctes — à ne pas confondre.

---
*À tester directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
