---
sidebar_position: 7
---

# La grille de disponibilité : qui est prêt à travailler, et quand

Plutôt que de deviner qui est disponible et quand, saisissez-le : dans la grille de disponibilité, vous indiquez pour chaque collaboratrice et collaborateur, à l'heure ou à la journée près, quand cette personne est disponible — pas la disponibilité de la clientèle, mais celle de vos collaborateurs internes et externes.

## Comment ça marche

- **Navigation par période :** les flèches font défiler une période en arrière ou en avant, le bouton de période ouvre un mini-calendrier pour sauter directement à une date. La durée d'une période — semaine, 2 semaines ou mois — dépend automatiquement de la périodicité de paiement du groupe sélectionné.
- **Granularité horaire réglable :** un curseur définit la finesse des colonnes : 1 heure, 2 heures, 4 heures, matin/après-midi ou journée entière. Un clic sur une cellule plus large coche automatiquement toutes les heures qu'elle regroupe.
- **En-tête de ligne avec tri et filtre :** la liste des collaborateurs à gauche se trie par prénom, nom, entreprise ou heures contractuelles garanties, et se limite via des cases à cocher aux collaborateurs internes ou externes ; le champ de recherche de l'en-tête filtre en plus par nom ou numéro d'identification.
- **Codage couleur :** les jours de week-end définis et les jours fériés ont leurs propres couleurs de fond, pour repérer immédiatement les jours non travaillés. Les jours de la semaine considérés comme week-end sont configurables — ce ne sont pas partout le samedi et le dimanche (par ex. le sabbat ou d'autres jours de repos spécifiques à un pays).
- **Édition à la souris ou au clavier :** un clic bascule une cellule, un glissé avec le bouton de la souris enfoncé marque plusieurs cellules à la fois ; avec les flèches du clavier, vous naviguez tout aussi bien dans la grille et validez avec la barre d'espace ou Entrée.
- **Enregistrement automatique :** il n'y a pas de bouton Enregistrer — les modifications sont sauvegardées automatiquement environ une seconde après la dernière saisie.

## Bon à savoir

- Une journée sans aucune marque reste entièrement ouverte pour la planification. Dès qu'au moins une heure est marquée comme disponible pour une journée, celle-ci est considérée comme entièrement saisie : seules les heures marquées sont utilisables pour la planification, toutes les autres heures de cette journée sont bloquées.
- La clientèle n'apparaît jamais dans la grille — seuls s'affichent les collaborateurs internes et externes ayant une appartenance active sur la période affichée.
- Une absence enregistrée prime toujours sur la disponibilité — même si la case est cochée, aucune affectation n'a lieu ce jour-là.
- Les disponibilités saisies alimentent directement la [Planification automatique : un clic, le reste tourne en arrière-plan](../planen/auto-planung.md) : l'algorithme ne planifie qu'à l'intérieur des plages annoncées.

![Klacks Verfügbarkeits-Raster](/img/app-availability-de.png)

---
*À tester directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
