---
sidebar_position: 7
---

# Règles anti-spam

Sous Paramètres > Règles anti-spam, vous définissez des règles de filtrage qui classent automatiquement les e-mails entrants du module Boîte de réception comme spam — ces règles s'appliquent aussi bien lors de la récupération continue des nouveaux e-mails (interrogation IMAP) que lors d'une réévaluation ultérieure des e-mails déjà reçus.

## Comment ça fonctionne

**Créer une règle :** choisissez un type de règle — l'expéditeur contient, domaine de l'expéditeur, l'objet contient ou le contenu contient —, saisissez le motif à vérifier et cliquez sur Ajouter.

**Gérer les règles :** chaque règle peut être activée ou désactivée via une case à cocher, sans être supprimée, ou retirée définitivement via le bouton corbeille.

## Bon à savoir

- Les règles désactivées restent enregistrées, mais ne s'appliquent plus aux e-mails nouveaux ou réévalués — utile pour suspendre une règle à titre d'essai plutôt que de la supprimer.
- Klacks utilise pour l'import des commandes ERP la même boîte de réception que le module normal d'e-mails (architecture à boîte aux lettres unique). Une règle définie de manière trop large (par exemple tout un domaine d'expéditeur) peut donc en théorie classer aussi des e-mails de commandes ERP entrants comme spam — vérifiez donc soigneusement les nouvelles règles avant de les activer.
- Utilisez les règles de domaine d'expéditeur pour bloquer des organisations expéditrices entières indésirables, plutôt que de saisir chaque adresse individuellement en tant que règle « l'expéditeur contient ».

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — Identifiant `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
