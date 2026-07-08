---
sidebar_position: 3
---

Le moniteur de ressources montre en un coup d'œil l'état de la charge de personnel d'un groupe (ou de tous les groupes) pour l'année sélectionnée — une barre par jour, sur 365 jours l'évolution complète de l'année.

## Comment ça fonctionne

La représentation suit le « Capacity vs. Workload Chart » établi dans la planification du personnel (connu dans la littérature de gestion de projet sous le nom d'« histogramme de ressources »). Les éléments :

- **Barres vertes — Services :** nombre de services planifiés ce jour-là. Chaque service compte comme un poste de collaborateur ; les services de conteneur comptent comme 1.
- **Barres grises — Absences :** nombre de collaborateurs absents, empilées sur les barres vertes. Une saisie complète de vacances ou de maladie compte comme 1, une demi-journée comme 0,5 — même le week-end.
- **Ligne pointillée rose — Disponibilité souhaitée :** combien de collaborateurs seraient en moyenne disponibles si les jours de travail souhaités par semaine sont respectés (standard : 5 jours de travail, 2 jours de repos). C'est l'objectif de planification.
- **Ligne tiretée rouge — Disponibilité maximale :** le maximum physique/légal avec le nombre maximal autorisé de jours de travail consécutifs (standard : 6). Se situe toujours au niveau ou au-dessus de la ligne rose.
- **Ligne bleue — Nombre de collaborateurs :** effectif total sous contrat actif ce jour-là (headcount).

**Interprétation :** lorsque le sommet des barres vertes se rapproche de la ligne rose, l'effectif est utilisé de manière optimale. La différence entre la ligne bleue et le sommet des barres empilées est votre réserve.

Les boutons flèches en haut à droite permettent de changer d'année ; la sélection de groupe permet de restreindre à un site ou une équipe.

## Bon à savoir

- Valeur d'expérience : le sommet des barres grises d'absence ne devrait pas représenter plus d'un tiers de l'écart entre les services et l'effectif total — sinon la réserve opérationnelle est menacée et les pics de maladie ou de vacances sont difficiles à combler.
- Les valeurs sont des estimations et des approximations, pas un décompte exact — elles donnent une idée de la disponibilité.
- Les services proviennent de la planification, pas de la réalisation — les services futurs sont ainsi également visibles.
- Pour un contrat 24/7, la ligne rose est lissée sur la semaine (environ 0,71 par personne et jour calendaire) ; pour un contrat du lundi au vendredi, elle se situe à 1,0 les jours ouvrables et à 0 le week-end.

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
