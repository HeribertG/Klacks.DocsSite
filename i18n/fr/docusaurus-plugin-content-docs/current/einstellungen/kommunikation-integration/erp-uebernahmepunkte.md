---
sidebar_position: 5
---

Dans Paramètres > Points de reprise ERP, vous configurez la manière dont les commandes d'un système ERP externe sont reprises automatiquement dans Klacks sous forme de fichiers XML.

## Comment ça marche

**Trois modes de livraison :** le système ERP peut déposer des fichiers dans l'espace de stockage du point de dépôt (Klacks les récupère automatiquement selon un calendrier), les transmettre directement par HTTP-POST vers un point de terminaison d'import (authentifié par un jeton d'accès), ou une administratrice peut charger manuellement le fichier XML sur cette page par glisser-déposer.

**Le point de dépôt** est la boîte aux lettres centrale, gérée par Klacks lui-même, pour tous les fichiers d'import — il présente trois zones : Entrant (en attente du prochain traitement), Traité (archive) et Erreurs (fichiers invalides avec la raison de l'erreur, avec possibilité de relancer l'import). Un calendrier (expression cron, par défaut horaire) ainsi qu'un interrupteur d'activation permettant de mettre en pause contrôlent la récupération automatique.

**Les jetons d'accès** ne sont nécessaires que si un système ERP livre les fichiers par push. Chaque jeton commence par `klacks_erp_`, est valable de 1 à 730 jours (par défaut 365) et n'est affiché en clair **qu'une seule fois, à sa création**. Un tel jeton est valable uniquement pour le point de terminaison d'import, pas pour le reste de l'accès API, et peut être révoqué à tout moment.

**Traitement :** les commandes sont associées à un client existant ou nouvellement créé sur la base de l'identifiant du système source et de la référence client externe (ou, à défaut, de l'entreprise/du code postal/de la rue), et sont d'abord créées comme brouillon que les planificateurs doivent vérifier et valider. Une nouvelle livraison modifiée d'une commande déjà validée clôture automatiquement l'ancienne et crée une nouvelle version liée ; les livraisons répétées inchangées ne déclenchent rien.

## Bon à savoir

- Les commandes individuelles erronées (par ex. sans jour de la semaine ou avec une référence en double) sont rejetées sans bloquer les autres commandes valides du même fichier ; l'ensemble du fichier atterrit néanmoins dans la zone Erreurs, afin que rien ne soit oublié.
- Les fichiers traités sont archivés, pas supprimés.
- Le format XML exact (champs obligatoires, formats de date, logique des jours de la semaine) est documenté dans le manuel directement sur la page des paramètres, ainsi que via un fichier d'exemple téléchargeable.
- Cette configuration se trouve dans la section Paramètres et est donc réservée aux rôles administratifs.

---
*Essayez directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
