---
sidebar_position: 5
---

# Points de reprise ERP

Dans Paramètres > Import (visible uniquement en mode expert), carte « ERP Drop Points », vous configurez la manière dont les commandes d'un système ERP externe sont reprises automatiquement dans Klacks sous forme de fichiers XML.

## Comment ça marche

**Trois modes de livraison :** le système ERP peut déposer des fichiers XML dans un dossier du serveur Klacks (Klacks les récupère automatiquement selon un calendrier, dès qu'un fichier est resté inchangé pendant 10 secondes), les transmettre directement par HTTPS-POST vers un point de terminaison d'import (authentifié par un jeton d'accès), ou une administratrice peut charger manuellement le fichier XML sur cette page par glisser-déposer (l'import démarre immédiatement). Il n'existe pas de SFTP ; seuls les fichiers XML au format `ErpOrderImport` sont importés.

**Le point de dépôt** est la boîte aux lettres centrale, gérée par Klacks lui-même, pour tous les fichiers d'import — il présente trois zones : Entrant (reçu ou en cours d'import), Traité (avec un récapitulatif par fichier) et Erreurs (fichiers illisibles ou invalides avec la raison de l'erreur, avec possibilité de relancer l'import ou de supprimer). Un calendrier (expression cron, par défaut horaire) ainsi qu'un interrupteur d'activation permettant de mettre en pause contrôlent la récupération automatique.

**Quel mode convient à quelle installation ?** Sur un PC de bureau (installation Windows), le dossier est le mode le plus naturel ; le dossier par défaut est `C:\ProgramData\Klacks\ErpImport\erp\orders`. Il est protégé : seuls SYSTEM et les administrateurs peuvent y écrire. Un administrateur doit accorder au compte sous lequel s'exécute l'export ERP le droit « Modification » précisément sur le dossier `erp\orders`, et non sur l'ensemble du dossier `ProgramData\Klacks`. Sur un serveur Docker propre, le dossier (`/app/ErpImport/erp/orders`) se trouve à l'intérieur du conteneur, dans un volume nommé ; un ERP installé sur la machine du serveur n'y accède que si l'administrateur monte un dossier du serveur sur `/app/ErpImport`, sinon il reste le push avec jeton d'accès ou le chargement manuel. Pour une installation hébergée par nous, il n'y a aucun accès aux dossiers du serveur : push avec jeton d'accès ou chargement manuel.

**Les jetons d'accès** ne sont nécessaires que si un système ERP livre les fichiers par push. Chaque jeton commence par `klacks_erp_`, est valable de 1 à 730 jours (par défaut 365) et n'est affiché en clair **qu'une seule fois, à sa création**. Un tel jeton est valable uniquement pour le point de terminaison d'import, pas pour le reste de l'accès API, et peut être révoqué à tout moment.

**Traitement :** les commandes sont associées à un client existant ou nouvellement créé sur la base de l'identifiant du système source et de la référence client externe (ou, à défaut, de l'entreprise/du code postal/de la rue), et sont d'abord créées comme brouillon que les planificateurs doivent vérifier et valider. Une nouvelle livraison modifiée d'une commande déjà validée clôture automatiquement l'ancienne et crée une nouvelle version liée ; les livraisons répétées inchangées ne déclenchent rien.

## Bon à savoir

- Les commandes individuelles erronées (par ex. sans jour de la semaine ou avec une référence en double) sont rejetées sans bloquer les autres commandes valides du même fichier ; le fichier apparaît tout de même dans Traité, marqué d'un symbole d'avertissement, et les commandes rejetées peuvent être dépliées avec leur motif.
- Les fichiers ne sont ni déplacés ni archivés : ils restent dans le dossier, leur statut est enregistré dans la base de données. Les fichiers traités avec succès sont supprimés automatiquement après 90 jours ; les fichiers de la zone Erreurs restent jusqu'à ce qu'ils soient réimportés ou supprimés.
- Le format XML exact (champs obligatoires, formats de date, logique des jours de la semaine) est documenté dans le manuel directement sur la page des paramètres, ainsi que via un fichier d'exemple téléchargeable.
- Cette configuration se trouve dans la section Paramètres et est donc réservée aux rôles administratifs.

---
*Essayez directement : [Klacks Playground](https://play.klacks-software.ch) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
