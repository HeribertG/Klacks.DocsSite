---
sidebar_position: 7
---

# Heures supplémentaires

Dans Paramètres > Conformité et règles de majoration (mode expert) > Heures supplémentaires, vous définissez à partir de combien d'heures accumulées le travail supplémentaire devient majoré, et le taux de majoration applicable à chaque palier.

## Comment ça fonctionne

**Base de calcul :** Journalier ou Hebdomadaire — il n'existe rien d'autre. Une base mensuelle ou annuelle n'est pas prévue. En mode « Hebdomadaire », la semaine commence au premier jour de la semaine configuré.

**Jusqu'à trois paliers :** Chaque palier comprend deux champs — « Palier X après heures » (le nombre d'heures accumulées dans la journée ou la semaine à partir duquel ce palier s'applique) et « Taux palier X » en pourcentage. Le palier configuré le plus élevé est ouvert vers le haut, sans limite.

**Chaque palier ne compte que les heures situées dans sa propre plage**, pas toutes les heures depuis zéro. Si le palier 1 commence à 8 heures et le palier 2 à 10 heures, une journée de dix heures et demie paie le taux du palier 1 pour les deux heures entre 8 et 10, et le taux du palier 2 uniquement pour la demi-heure au-dessus — jamais le taux du palier 2 pour la totalité des dix heures et demie. Un seul bloc de travail peut ainsi générer plusieurs lignes de majoration, une par palier atteint.

**Un palier incomplet est ignoré silencieusement :** si la valeur « après heures » manque, ou si le taux est nul ou négatif, ce palier ne compte pas. De zéro à trois paliers peuvent donc être réellement actifs.

**Le taux est la majoration, pas le montant total :** 25 % signifient un quart d'heure supplémentaire par heure travaillée dans ce palier — cela ne veut pas dire que l'heure est payée avec un facteur de 1,25. Le mode de taux à côté (Multiplicateur ou Montant fixe par heure) ne détermine que l'unité ; le calcul sous-jacent reste identique.

**Ce qui compte comme heures déjà travaillées :** les paliers se remplissent avec les heures effectuées auparavant le même jour ou dans la même semaine — triées d'abord par date, puis par heure de début. Chaque bloc de travail occupe ainsi sa propre position dans la plage, et aucune heure n'est comptée deux fois dans un palier supérieur. Si une entrée antérieure change, les suivantes sont recalculées.

**D'où viennent les valeurs :** cette carte fournit les valeurs valables pour toute l'entreprise — elles s'appliquent seulement si aucune autre source n'a priorité. Si le contrat de la personne est associé à une [règle de planification](../../planen/planungsregeln.md) avec ses propres paliers d'heures supplémentaires, celle-ci a priorité ; une version ultérieure de cette règle, valable pour la date concernée, remplace au besoin l'ensemble des valeurs, mais retombe sur les paramètres d'entreprise affichés ici — pas sur la règle de planification — si elle ne comporte pas son propre bloc d'heures supplémentaires. Si aucun palier n'est configuré nulle part, seul le **seuil d'heures supplémentaires** de la règle de planification sert de dernier recours — et uniquement comme valeur de départ du premier palier, jamais comme taux. Les sources ne sont jamais mélangées : celle qui fournit le premier palier fournit aussi tous les suivants.

**Deux conditions sans lesquelles aucune majoration n'est générée :**

- Le service a besoin d'une macro de calcul. Le travail sur un service sans macro n'est jamais examiné pour des heures supplémentaires.
- Au moins un palier complet doit être configuré. Sans cela, le résultat n'est pas « zéro heure supplémentaire », mais aucun examen n'a lieu du tout.

**Exclu :** les corrections et les remplacements ne sont jamais examinés pour des heures supplémentaires — seul le travail régulier est pris en compte.

**Rencontre avec d'autres majorations :** la même heure peut être qualifiée à la fois pour des heures supplémentaires et pour une majoration liée aux circonstances, par exemple le travail de nuit ou de week-end. Le fait que les deux s'additionnent ou que seule la plus élevée s'applique n'est pas décidé par cette carte, mais par la macro de calcul du service concerné.

**Enregistrement :** cette carte se trouve dans la section Conformité et règles de majoration de la page Paramètres (avec Repos compensateur, Mode de majoration et Application de la conformité), visible uniquement en mode expert. Les modifications sont regroupées puis enregistrées ou annulées via la barre d'enregistrement commune de la page Paramètres — cette carte ne possède pas de bouton d'enregistrement propre.

## Bon à savoir

- Cette carte couvre exclusivement le barème automatique des heures supplémentaires selon un seuil journalier ou hebdomadaire. Les majorations pour le travail de nuit, du dimanche ou des jours fériés sont en revanche calculées de façon générique par script — voir [Macros](../klacksy-konfiguration/makros.md).
- Un palier sans valeur « après heures » ou avec un taux de 0 % ou moins est ignoré — cela permet de désactiver certains paliers sans les supprimer.
- Sans au moins un palier complet et sans macro de calcul sur le service, aucune majoration d'heures supplémentaires n'est générée, même pour des services très longs.
- Une règle de planification avec ses propres paliers d'heures supplémentaires remplace entièrement ces valeurs d'entreprise, pas seulement certains paliers.

---
*Essayez directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
