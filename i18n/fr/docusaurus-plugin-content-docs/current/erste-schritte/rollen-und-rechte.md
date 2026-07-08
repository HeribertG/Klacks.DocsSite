---
sidebar_position: 4
---

# Rôles et droits

Klacks connaît exactement deux niveaux de droits attribuables pour les comptes de connexion : **Supervisor** et **Admin**. Il n'existe pas de troisième rôle techniquement distinct — des termes comme « Planificateur » décrivent ci-dessous une **fonction dans l'activité quotidienne**, et non un niveau de droits supplémentaire.

## Les deux vrais rôles

**Supervisor** peut créer, modifier et supprimer des adresses, groupes, contrats, absences et services, ainsi qu'approuver un jour ou un groupe dans le plan de service et retirer cette approbation. La simple confirmation d'heures de travail individuelles, en revanche, ne nécessite aucun rôle particulier — n'importe quel compte de connexion peut le faire.

**Admin** peut en plus tout ce que Supervisor peut faire, ainsi que : accéder à tous les paramètres (y compris la gestion des utilisateurs elle-même), clôturer et rouvrir des périodes, et gérer des domaines particulièrement protégés comme le fournisseur d'identité (Identity Provider), les rapports et les règles de calendrier.

L'attribution se fait via un menu déroulant dans la gestion des utilisateurs (icône en forme de roue dentée) et prend effet immédiatement, sans clic de sauvegarde séparé.

## « Planificateur » : une fonction, pas un rôle

Au quotidien, c'est généralement un compte Supervisor qui assure le travail de planification proprement dit — lancer la planification automatique, ajuster la grille de planning par glisser-déposer, soumettre des jours ou des groupes à l'approbation. Ce n'est pas un niveau de droits distinct, mais simplement l'usage des droits dont dispose déjà un compte Supervisor.

## Bon à savoir

- Le dernier utilisateur connecté est affiché dans la gestion des utilisateurs, mais il ne peut ni être modifié, ni voir ses droits changés, ni être supprimé par lui-même à cet endroit.
- Clôturer définitivement ou rouvrir des périodes reste réservé exclusivement à Admin — même si un Supervisor a déjà approuvé des jours ou des groupes.
- Un compte de connexion ne doit pas obligatoirement être lié à une fiche de collaborateur dans les données de base — la gestion des utilisateurs et la gestion des personnes sont deux domaines distincts.

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
