---
sidebar_position: 7
---

# Contrôler la qualité de la planification : violations, lacunes et placements ignorés

Après un passage des assistants de planification, Klacks place trois tableaux de diagnostic à côté du résultat : où le plan bute sur une règle, où une qualification manque, et ce qui n'a même pas été planifié.

## Comment ça fonctionne

Les trois rapports apparaissent dans la boîte de dialogue de l'assistant de planification concerné — pas dans la grille du plan. Ils font partie du résultat d'un passage de l'assistant et ne sont visibles que pour les administrateurs, car la planification automatique dans son ensemble exige le rôle d'administrateur. Chaque rapport indique le nombre de ses entrées dans son titre et **ne s'affiche pas du tout lorsqu'il n'a rien trouvé** — un encadré absent est donc une bonne nouvelle.

**Pour accéder aux boîtes de dialogue :** le bouton baguette magique du plan de service lance par défaut directement un passage de planification, sans afficher de boîte de dialogue. Avec **Ctrl+Maj+H**, les administrateurs font basculer ce bouton en menu déroulant proposant les différents assistants de planification (Plan, Fuzzy Harmonizer, Holistic Harmonizer, Background Optimizer, Recovery) — c'est uniquement via ce menu que s'ouvrent les boîtes de dialogue contenant les tableaux de diagnostic.

**Les lacunes de qualification** apparaissent avec le résultat, donc *avant* que vous ne l'appliquiez. Colonnes : gravité, service, date, qualification requise, motif — plus une colonne « Employé » dès qu'au moins une ligne nomme une personne. Le motif indique *Non détenue*, *Expirée* ou *Niveau insuffisant*. Deux cas différents se cachent derrière : soit un poste est resté vide parce qu'aucune personne disponible ne possède la qualification exigée — la ligne ne nomme alors personne ; soit une personne est restée affectée à un service pour lequel elle n'est pas qualifiée — son nom figure alors dans la ligne. Si la qualification manque seulement dans le système, enregistrez-la auprès de la personne ; le [Catalogue de qualifications](../einstellungen/stammdaten-organisation/qualifikationen.md) décrit comment gérer les qualifications. Sinon, planifiez quelqu'un d'autre ou adaptez l'exigence du service.

**Les violations de conformité** apparaissent *après* que vous avez appliqué le résultat. Colonnes : date, collaborateur, commentaire ; le commentaire nomme la règle enfreinte en clair, avec les valeurs concrètes. Les lignes rouges sont des erreurs, les jaunes des avertissements et des informations. Pour les deux assistants d'harmonie, le rapport montre exclusivement ce que le nouveau scénario ajoute **en plus** par rapport au plan réel — et indique au-dessus combien de ces violations sont gérées en mode Blocage. Celles-ci empêchent l'acceptation du scénario tant qu'elles ne sont pas résolues ou expressément outrepassées par une personne autorisée.

**Les placements ignorés** n'existent que pour l'assistant de planification des services, également après l'application — et sont entièrement en rouge. Colonnes : date, employé, poste, motif. Ce tableau ne montre pas ce qui a été planifié, mais ce que Klacks n'a délibérément **pas** écrit : des affectations qui auraient enfreint une règle gérée en mode Blocage. Le motif apparaît sous forme de catégorie courte (« Repos trop court », « Trop de jours consécutifs », « Collision horaire »…). Selon la situation, Klacks propose en dessous aux personnes autorisées d'appliquer malgré tout le passage avec dépassement ; les autres reçoivent l'indication de relancer l'assistant avec le dépassement activé, ou de demander à une personne autorisée de le faire. Chaque dépassement est journalisé.

Les règles vérifiées et leur degré de sévérité se définissent dans les [Règles de planification](../planen/planungsregeln.md) ; la manière dont le plan naît est décrite dans [Planification automatique : le plan en quelques secondes](../planen/auto-planung.md).

## Bon à savoir

- Une entrée bloquée ne fait pas tomber tout le plan : seules les affectations concernées disparaissent, les entrées correctes de la même personne sont malgré tout écrites.
- Pour la gravité des lacunes de qualification, une règle simple s'applique : **erreur** uniquement lorsqu'une qualification marquée comme obligatoire manque totalement. Une qualification expirée, un niveau insuffisant et toute exigence facultative apparaissent comme **avertissement**.
- Un poste vide n'apparaît dans les lacunes de qualification que si réellement aucune personne disponible n'entrait en ligne de compte. S'il est resté vide pour d'autres raisons, il s'agit d'une sous-couverture ordinaire, qui n'est pas signalée ici.
- Lorsque la planification automatique s'exécute d'un seul tenant, Klacks n'annonce le résultat que par une brève notification, avec le nombre de lacunes de qualification — les tableaux détaillés appartiennent aux boîtes de dialogue des assistants individuels.
- Les rapports sont de simples vues : ils ne se modifient pas et ne changent rien. La correction se fait dans la [Grille de planification : votre matrice de temps interactive](../planen/plan-raster.md) ou par un nouveau passage.

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
