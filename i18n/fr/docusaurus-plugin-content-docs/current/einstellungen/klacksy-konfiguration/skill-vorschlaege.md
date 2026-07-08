---
sidebar_position: 6
---

# Suggestions de compétences Klacksy

Klacksy apprend de ses propres erreurs : si vous corrigez dans le chat le fait que Klacksy a choisi la mauvaise compétence, le système mémorise cette correction. Dans Paramètres > Suggestions de compétences Klacksy, les administrateurs voient quelles améliorations des descriptions de compétences en sont issues, et décident de leur adoption.

## Comment ça marche

**D'où viennent les suggestions :** lorsque Klacksy choisit dans le chat la mauvaise compétence (skill) pour une demande et que l'utilisateur corrige cela, cette séquence de conversation est marquée comme « corrigée ». Un optimiseur interne analyse ces séquences corrigées et en déduit des modifications de texte concrètes pour les descriptions de compétences — dans le but que Klacksy attribue correctement la compétence concernée la prochaine fois.

**Générer des suggestions :** le bouton « Générer des suggestions » déclenche l'analyse des 30 dernières séquences de chat corrigées et en tire de nouvelles suggestions, si des schémas récurrents se dégagent.

**Une carte de suggestion affiche :** la compétence concernée et le champ modifié, la modification sous forme de comparaison avant/après, une justification expliquant en quoi le changement est pertinent, ainsi que — de manière consultable en détail — les demandes exactes des utilisateurs qui ont déclenché la suggestion.

**Décider :** chaque suggestion en attente est traitée individuellement, soit **adoptée** (la description de la compétence est modifiée immédiatement), soit **rejetée** (la suggestion est abandonnée sans aucune modification). Il n'y a aucune adoption automatique — un humain est toujours impliqué dans la décision.

## Bon à savoir

- Sans corrections dans le chat, aucune suggestion n'est générée — le système a besoin de véritables corrections d'erreurs comme base d'apprentissage, une simple utilisation ne suffit pas.
- Cette fonction ne modifie que les textes descriptifs des compétences afin que Klacksy les sélectionne correctement — elle ne change pas ce qu'une compétence fait réellement.
- Cette fonction nécessite des droits d'administrateur.

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées quotidiennement.*
