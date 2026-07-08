---
sidebar_position: 3
---

# Conservation des données

Sous Paramètres > Conservation des données, vous définissez la durée pendant laquelle les enregistrements supprimés — collaborateurs, adresses, groupes, services, temps de travail, absences, pauses et autres — restent conservés dans le système avant d'être supprimés de manière définitive.

## Comment ça fonctionne

**Suppression en deux étapes :** lorsque vous supprimez un enregistrement dans Klacks, celui-ci est d'abord simplement marqué comme supprimé (suppression logicielle), tout en restant physiquement présent. Ce n'est qu'à l'expiration du délai configuré ici qu'un service en arrière-plan, exécuté quotidiennement, retire **physiquement et de manière irréversible** les lignes marquées comme supprimées de la base de données — sur l'ensemble des tables concernées, et non uniquement pour un domaine particulier.

**Configurer le délai de conservation :** le champ de saisie accepte des valeurs comprises entre 30 et 36 500 jours (environ 1 mois à 100 ans) ; Klacks affiche en plus ce délai en années/mois. La valeur par défaut est de 3 650 jours (10 ans).

## Bon à savoir

- Un raccourcissement du délai s'applique aussi aux enregistrements déjà supprimés depuis longtemps : tout ce qui est plus ancien que le nouveau délai est supprimé lors de la prochaine exécution du service en arrière-plan — vérifiez avant de raccourcir le délai si c'est bien l'effet souhaité.
- La suppression physique est définitive — aucune récupération n'est possible ensuite, pas même par le support.
- Ce paramètre constitue le fondement technique des délais de suppression décrits dans la déclaration de protection des données ; il s'applique globalement à tous les types de données pouvant faire l'objet d'une suppression logicielle, et n'est pas configurable par module.

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — Identifiant `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
