---
sidebar_position: 5
---

Sous Paramètres > Visibilité des groupes par utilisateur, vous définissez quels groupes — et donc quelles données associées — un utilisateur donné est autorisé à voir.

## Comment ça fonctionne

La liste affiche tous les utilisateurs avec leur nom et le nombre de groupes racine qui leur sont attribués (visibles). Un clic sur ce nombre ouvre un formulaire présentant une liste à cocher de tous les groupes racine ; vous y indiquez quels groupes cet utilisateur est autorisé à voir. Lorsqu'un groupe racine est activé, cela s'applique automatiquement à tous ses sous-groupes.

Les administrateurs ne sont pas soumis à cette restriction : pour eux, le bouton est désactivé et le nombre affiché correspond toujours au total de tous les groupes racine — les administrateurs voient par principe tout.

## Bon à savoir

- Pour un utilisateur normal (non-administrateur) sans aucune attribution, « 0 groupe attribué » signifie que cet utilisateur ne voit actuellement **rien** dans les zones limitées par groupe (par exemple le tableau de bord, la liste des clients) — ce n'est pas un dysfonctionnement, mais la conséquence directe de l'absence d'attribution.
- Exception : si aucun groupe n'existe actuellement dans le système, tous les utilisateurs voient tout — les installations sans structure de groupes n'ont donc pas besoin de gérer ce paramètre.
- Créez d'abord la structure de groupes dans les données de base avant de procéder aux attributions ici — sans groupes existants, il n'y a rien à cocher.
- Ce paramètre contrôle la **visibilité** des données, et non les **droits** fondamentaux d'un rôle — les rôles et droits sont gérés indépendamment.

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées quotidiennement.*
