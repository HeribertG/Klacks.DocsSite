---
sidebar_position: 7
---

# Transfert de l'export de paie

Lors du scellement d'une période délimitée par groupe, Klacks peut transmettre automatiquement ses données de paie à un système de paie externe. Cette page explique ce que cela nécessite et pourquoi le transfert ne livre parfois apparemment rien — le cas de support le plus fréquent autour de cette fonctionnalité.

## Comment ça marche

**Condition préalable : un plugin de fonctionnalité pour le transfert de paie.** Le transfert automatique vers un système de paie n'est pas une fonctionnalité de base — il nécessite un plugin de fonctionnalité distinct qui doit être installé **et** actif sous Paramètres > Plugins de fonctionnalités. Si ce plugin manque ou est simplement désactivé, le transfert ne produit absolument rien : aucun fichier, aucune indication, aucune trace visible pour vous. C'est plus strict qu'un format d'export désactivé dans les paramètres d'export, qui laisse au moins une trace dans le journal serveur — ici, il n'y en a même pas.

**Transfert unique (idempotence).** Le transfert automatique ne s'exécute qu'une seule fois par combinaison de groupe, système cible et plage de dates exacte — cela évite que les mêmes données de paie n'arrivent accidentellement deux fois au système de paie. Si vous rouvrez une période déjà scellée, corrigez quelque chose et la scellez à nouveau, le second transfert est ignoré sans avertissement : une trace de transfert existe déjà pour exactement cette combinaison, et la réouverture ne la supprime pas.

**Un téléchargement manuel compte de la même façon.** Un téléchargement de paie manuel, effectué à la demande, pour le même groupe/système cible/plage de dates crée la même trace qu'un transfert automatique. Un téléchargement manuel effectué avant le transfert automatique « consomme » celui-ci pour la période concernée, exactement comme le ferait un transfert automatique antérieur.

| Pourquoi rien n'est arrivé (de nouveau) ? | Trace existante ? | Bloque un téléchargement manuel ultérieur ? |
|---|---|---|
| Plugin de fonctionnalité non installé/inactif | non | non |
| Déjà transféré pour exactement cette combinaison | oui (visible dans l'onglet « Journal » de la clôture de période) | non |

**Deux points de précision :**

- Un téléchargement manuel ne reprend **aucune** correction de format d'export éventuellement déposée par le support — il utilise toujours les valeurs par défaut, même si une correction active pour le système cible s'appliquerait sur le chemin automatique.
- Le verrou à usage unique est exact : il ne se déclenche que pour un groupe identique, un système cible identique et une date de début/fin identique. Une autre plage de dates ou un autre système cible n'est pas bloqué par un transfert antérieur.

**Si rien n'arrive après le scellement, ou si des chiffres corrigés doivent être transmis :** Vérifiez d'abord si le plugin de fonctionnalité correspondant est installé et actif sous Paramètres > Plugins de fonctionnalités. Après une réouverture et une correction, le moyen fiable d'obtenir les chiffres corrigés dans le système de paie est l'**export manuel** dans la zone de clôture de période (onglet « Exports ») — il n'est soumis ni au verrou du plugin, ni au verrou à usage unique du transfert automatique. Comme il ne reprend pas non plus une correction de format d'export, vérifiez dans ce cas les chiffres exportés manuellement par rapport à une éventuelle correction active.

## Bon à savoir

- Chaque transfert nécessite une période scellée et délimitée par groupe — la manière de sceller une période est décrite sur la page [Clôture de période](../../planen/periodenabschluss.md). Le scellement et la réouverture y sont réservés aux rôles administratifs.
- Cette page décrit l'**export** des données de paie de Klacks vers un système de paie. Le flux inverse — l'**import** de commandes d'un système ERP vers Klacks — est décrit par les [Points de reprise ERP](./erp-uebernahmepunkte.md).
- Les plugins de fonctionnalités sont gérés de manière centralisée sous Paramètres > Plugins de fonctionnalités : installation, activation/désactivation ou suppression complète.
- Un plugin de fonctionnalité désactivé reste installé, mais bloque le transfert automatique tout aussi complètement qu'un plugin non installé.

---
*Essayez directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
