---
sidebar_position: 1
---

# Installation et Playground

Vous pouvez essayer Klacks en une minute — et l'installer en quelques minutes. Sans inscription, sans démarchage commercial.

## Playground : l'aire de jeu pour découvrir

Le Playground n'est pas une variante d'installation, mais une instance Klacks publique avec des données d'exemple, faite pour s'essayer sans engagement — d'où le nom. Elle est disponible sur **[play.klacks-software.ch](https://play.klacks-software.ch)** :

- **Identifiant :** `admin@test.com` · **Mot de passe :** `P@ssw0rt1`
- Vous disposez des droits d'administrateur complets — testez tout ce que vous voulez.
- Les données d'exemple comprennent environ 5'000 clients et ne sont que des données de démonstration.
- **Ne saisissez pas de données personnelles réelles.** La base de données est réinitialisée chaque jour à 04:00, heure suisse (02:00 UTC), à un état fixe.

## Installation : sur votre propre serveur (On-Premise)

Le package On-Premise contient tout ce qu'il faut : images Docker, installateur, base de données, HTTPS et mises à jour automatiques. Vous le téléchargez exclusivement dans le [Klacks Store](https://klacks-software.ch/store/?culture=fr).

Dans le Klacks Store, choisissez si vous le souhaitez votre secteur et téléchargez le ZIP de votre pays. L'installateur génère lui-même les mots de passe et les certificats, télécharge les images Docker actuelles et attend que tout soit opérationnel.

### Linux : pas à pas

Il vous faut une machine avec au moins 8 Go de RAM, les ports 80 et 443 libres, un accès Internet et un compte disposant des droits `sudo`. Docker n'a pas besoin d'être déjà installé (voir l'étape 4).

1. **Télécharger le ZIP dans le Klacks Store.** Sur la page de votre pays dans le [Klacks Store](https://klacks-software.ch/store/?culture=fr), si vous le souhaitez avec votre secteur.
2. **Décompresser dans un dossier fixe**, par exemple `~/klacks`, et non dans `Downloads` ou `/tmp`. Les mises à jour automatiques travaillent ensuite avec ce dossier précis ; s'il est supprimé ou déplacé, elles cessent de fonctionner. L'installateur vous avertit s'il est lancé depuis `Downloads` ou `/tmp`.

   ```bash
   unzip 'klacks-onprem-*.zip' -d ~/klacks
   ```

3. **Ouvrir un terminal dans le dossier.** Dans le gestionnaire de fichiers, cela se fait en général par un clic droit dans le dossier (l'intitulé dépend de l'environnement de bureau), ou vous saisissez `cd ~/klacks`.
4. **Lancer l'installateur :**

   ```bash
   sudo bash ./install-de.sh
   ```

   Dans le package pour l'Allemagne, le script s'appelle `install-de.sh` ; dans les autres packages par pays, le code du pays figure dans le nom, donc de façon générale `sudo bash ./install-*.sh`. L'installateur a besoin de `sudo` pour pouvoir accéder à Docker et, au besoin, l'installer. Sans `sudo`, cela ne fonctionne que si Docker est déjà installé et que votre utilisateur appartient au groupe `docker`.

   **Si Docker est absent**, l'installateur propose d'installer Docker Engine avec le script officiel de `get.docker.com`. Cela ne se fait qu'après votre confirmation (`[y/N]`, la valeur par défaut est non) et uniquement sur Ubuntu, Debian, Fedora, CentOS et RHEL ; la machine a pour cela besoin de `curl` ou `wget` et d'un accès Internet. Sur les autres distributions, installez vous-même Docker Engine avec le plugin Compose en suivant les [instructions de Docker](https://docs.docker.com/engine/install/). Si l'installateur s'exécute sans terminal, `INSTALL_DOCKER=yes` répond oui à la question. Docker lui-même ne recommande pas ce script pour un usage en production ; pour un serveur de production, installez plutôt Docker vous-même. L'ancien `docker-compose` (version 1) n'est pas pris en charge, le plugin `docker compose` est indispensable.
5. **Patienter.** L'installateur génère les mots de passe et un certificat auto-signé, télécharge les images et démarre la pile. Au premier démarrage, l'API migre la base de données ; l'installateur attend pour cela jusqu'à dix minutes. À la fin s'affiche `Klacks is up at https://…` et, en dessous, **votre code d'installation** (`Your setup code`, douze caractères en trois groupes de quatre). Notez-le ; il figure aussi dans le fichier `.env` du dossier d'installation sous `KLACKS_SETUP_CODE`.
6. **Ouvrir Klacks :** `https://localhost` (avec un autre nom de serveur ou un autre port HTTPS, l'adresse indiquée dans le message de l'installateur). Le navigateur avertit à propos du certificat auto-signé ; confirmez l'avertissement. Vous créez ensuite votre propre compte administrateur avec le code d'installation, voir [La première connexion](#first-login).
7. **Les mises à jour** se font ensuite automatiquement via le service de mise à jour fourni. Vous n'avez pas besoin de relancer l'installateur pour cela.

Si Docker voit moins de 7 GiB de mémoire vive, une première installation est interrompue. La façon de configurer un hôte plus petit est décrite sous [Configuration requise](../betrieb/systemvoraussetzungen.md).

### Windows

Sous Windows, vous lancez `install-*.ps1` au lieu de `install-*.sh`.

### Options : nom du serveur et profil de pays

Avec un profil de pays facultatif, l'installateur configure dès le premier démarrage la langue, les jours fériés, les limites du temps de travail, les majorations et les modèles sectoriels :

```bash
sudo SERVER_NAME=klacks.example.com REGION=de bash ./install.sh
```

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1 -ServerName klacks.example.com -Region de
```

Sous Linux, les variables se placent **après** `sudo` : en règle générale, `sudo` ne transmet pas à l'installateur les variables qui le précèdent. Avec le script du package par pays, l'appel ressemble à ceci : `sudo SERVER_NAME=klacks.example.com bash ./install-de.sh`.

Le package par pays du Klacks Store contient le profil de son pays. Les scripts fournis `install-*.sh` et `install-*.ps1` définissent déjà `REGION` ou `-Region` sur le code du pays correspondant — dans le package pour l'Allemagne, par exemple `install-de.sh` et `install-de.ps1`. Si vous appelez directement `install.sh` ou `install.ps1`, `REGION` ou `-Region` doit correspondre à ce code de pays ; sans lui, l'installateur ne configure aucun profil de pays.

## PC de bureau sous Windows : aussi dans le Microsoft Store

Pour un seul PC de bureau sous Windows, il existe un programme d'installation distinct qui fonctionne sans Docker. Vous le trouvez dans le [Klacks Store](https://klacks-software.ch/store/?culture=fr) sur la page de votre pays, ainsi que dans le [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (fiche « Klacks »). Il s'agit du même programme d'installation dans les deux stores. Installé depuis le Microsoft Store, il applique le pays réglé dans Windows ; vous n'y choisissez pas de secteur, et s'il n'existe pas de profil pour ce pays, l'installation n'en configure aucun. Les installations sur serveur, Docker et Linux ainsi que les packages par pays et par secteur sont disponibles uniquement dans le Klacks Store.

Sur le PC de bureau, les nouvelles versions s'installent dans Klacks via Paramètres > [Mises à jour logicielles](../einstellungen/system-sicherheit/updates.md), même si Klacks provient du Microsoft Store. Un programme d'installation plus récent ne peut pas être installé par-dessus une installation existante.

## La première connexion : votre propre compte administrateur {#first-login}

Un Klacks fraîchement installé n'a pas encore de compte à vous. À la première ouverture dans le navigateur apparaît donc directement la page « Configurez votre propre compte administrateur », avant toute connexion : prénom et nom, adresse e-mail (elle devient votre identifiant de connexion) et un mot de passe saisi deux fois ; les règles de mot de passe s'affichent en direct à côté.

Sur un serveur (Docker), la page exige en plus le **code d'installation**, même si vous ouvrez Klacks dans le navigateur sur le serveur lui-même. L'installateur a affiché ce code à la fin de l'installation ; il figure aussi dans le fichier `.env` du dossier d'installation sous `KLACKS_SETUP_CODE`. Il n'est valable que pour cette unique configuration. Un code erroné est refusé (« Le code d'installation ne correspond pas. Vérifiez-le et réessayez. »).

Dès que vous enregistrez, votre compte reçoit le rôle d'administrateur et le compte de test fourni est définitivement désactivé dans la même opération ; Klacks vous connecte ensuite automatiquement avec votre propre compte ; si cela échoue, connectez-vous avec vos nouveaux identifiants. Tant qu'un code d'installation est défini, le compte de test fourni ne peut de toute façon pas être utilisé pour se connecter dans le navigateur. La page « Pays et secteur » suit ensuite.

Tant que votre propre compte n'est pas créé, le serveur bloque tout autre appel avec le code d'erreur `SETUP_REQUIRED` (HTTP 403). Ce n'est pas une panne : il ne manque que la configuration.

- Sur le PC de bureau sous Windows, vous n'avez pas besoin de code d'installation si vous ouvrez Klacks dans le navigateur sur ce même PC. Depuis un autre ordinateur, seule la page de connexion s'affiche.
- Si Klacks affiche à la place la page de connexion, par exemple pour une installation sans code d'installation, la sortie de l'installateur indique le compte fourni ; Klacks vous conduit alors aussi directement à la création de votre propre compte administrateur.
- Si deux personnes envoient le formulaire en même temps, seule la première devient administrateur ; la seconde atterrit sur la page de connexion.

Cette porte n'est volontairement désactivée que dans le Playground et dans un environnement de développement local ; le compte fourni y reste en place.

## Bon à savoir

- **Prérequis :** au moins 8 Go de RAM et 4 vCPU, Docker avec Compose v2 (sous Linux, l'installateur installe Docker sur demande), les ports 80 et 443 libres ainsi qu'un accès HTTPS sortant vers `ghcr.io` et `github.com`. Les détails et les exemples de calcul pour des hôtes plus petits figurent sous [Configuration requise](../betrieb/systemvoraussetzungen.md).
- Un service de mise à jour fourni garde votre installation automatiquement à jour — avec une sauvegarde avant chaque mise à jour et un retour arrière automatique en cas de problème. Le détail du déroulement figure sous [Mises à jour et retour arrière](../betrieb/updates-und-rollback.md).
- Vos données se trouvent dans votre propre base de données, sur votre propre infrastructure. Certaines fonctions font toutefois appel à des services externes — lesquels, c'est indiqué dans la section suivante.
- Relancer l'installateur est sans danger, mais ce n'est pas une mise à jour : il conserve les mots de passe, le certificat et la version définie lors de la première installation, et redémarre la pile (sous Linux de nouveau avec `sudo`, si vous avez d'abord installé avec `sudo`). C'est ainsi que vous réparez une pile qui ne fonctionne plus. Les nouvelles versions sont installées par le service de mise à jour, pas par l'installateur.
- Si vous apportez votre propre certificat, placez `server.crt` et `server.key` avant l'installation dans `nginx/certs/` du dossier d'installation ; sinon l'installateur génère un certificat auto-signé.
- Vous sauvegardez régulièrement votre base de données vous-même — la marche à suivre est décrite sous [Sauvegarde et restauration](../betrieb/backup-und-wiederherstellung.md).

## Quels services externes Klacks appelle

Vos données se trouvent sur vos serveurs. Pour certaines fonctions, Klacks appelle néanmoins, en fonctionnement standard, des services publics sur Internet. Les adresses de ces services sont intégrées en dur ; vous ne pouvez actuellement pas indiquer votre propre serveur de géocodage, de routage ou de cartes.

| Service | Utilité | Ce qui est envoyé | Par défaut | Désactiver |
|---|---|---|---|---|
| Nominatim d'OpenStreetMap (`nominatim.openstreetmap.org`) | Convertir des adresses en coordonnées : lors de l'enregistrement d'une adresse, pour le site de l'entreprise, dans la planification des tournées et dans les services d'arrière-plan pour les adresses et les sites de groupes | Rue, code postal, localité et pays, sans noms de personnes ; pour les sites de groupes, le nom de la localité ou du groupe | activé | `BackgroundServices__AddressGeocoding=false` et `BackgroundServices__GroupGeocoding=false` ne désactivent que les services d'arrière-plan. Lors de l'enregistrement d'une adresse, le géocodage a toujours lieu. |
| Serveur OSRM public (`router.project-osrm.org`) | Temps de trajet, distances et itinéraires sur la carte | Coordonnées des lieux d'intervention, sans noms | activé tant qu'aucune clé OpenRouteService n'est enregistrée ; le navigateur interroge en outre OSRM directement lorsque le serveur Klacks ne fournit aucun itinéraire | non prévu |
| OpenRouteService (`api.heigit.org`) | comme OSRM, en plus vélo et à pied | Coordonnées des lieux d'intervention, sans noms | uniquement avec une clé API enregistrée | Supprimer la clé sous Paramètres > OpenRoute |
| Tuiles de carte (OpenStreetMap, OpenStreetMap.de ou CARTO) | Affichage de la carte dans le tableau de bord | par le navigateur : adresse IP et zone de carte affichée | activé dès que la carte est affichée | fournisseur au choix dans la carte, pas de serveur de tuiles personnel |
| GitHub (`github.com`) et GitHub Container Registry (`ghcr.io`) | Installation et mises à jour automatiques : manifeste de version et images Docker | requêtes de téléchargement normales, aucune donnée de planification | activé | — |
| Marketplace Klacks (`klacks-software.ch/store`) | Packs de langues et de pays | Code de pays, code de package ou terme de recherche | lors de la recherche de packages et du chargement d'un profil de pays | adresse configurable via `LanguagePlugins__MarketplaceUrl` |
| Hugging Face (`huggingface.co`) | Téléchargement unique des modèles de recherche pour Klacksy | aucune donnée client (téléchargement de fichiers) | au premier besoin | — |
| Open-Meteo (`api.open-meteo.com`, `air-quality-api.open-meteo.com`) | Indication météo et qualité de l'air dans le widget d'accueil, requête météo via Klacksy | Coordonnées du navigateur (si autorisées) ou du site de l'entreprise | activé | `Assistant__Ambient__Enabled=false` ne désactive que l'indication de qualité de l'air et de jours fériés, pas la requête météo de l'accueil |
| Nager.Date (`date.nager.at`) | Indication des jours fériés dans le widget d'accueil | Code de pays | activé | `Assistant__Ambient__Enabled=false` |
| Fournisseurs d'IA dans le cloud (p. ex. OpenAI, Anthropic, Google, DeepSeek) | Klacksy et fonctions d'arrière-plan assistées par IA (p. ex. classement des sites de groupes) | Requêtes avec le contexte nécessaire tiré de vos données | uniquement si un modèle cloud est configuré | utiliser un modèle local |
| Services de voix, de recherche et de traduction (p. ex. Deepgram, Groq, AssemblyAI, Edge TTS, OpenAI TTS, ElevenLabs, Google Cloud TTS, DeepL, recherche Web) | Saisie et sortie vocales, recherche Web, traduction | Audio ou texte | uniquement si utilisé ou configuré ; la reconnaissance vocale du navigateur passe, selon le navigateur, par son service en ligne | ne pas utiliser la fonction |

Les commutateurs de la colonne « Désactiver » sont des variables d'environnement du conteneur `klacks-api` ; saisissez-les dans `docker-compose.yml` sous `environment:` de ce service. Une entrée dans le seul fichier `.env` ne suffit pas, car le service ne le lit pas comme `env_file`.

Avec un modèle d'IA local, aucune requête au modèle de langage n'arrive chez un fournisseur d'IA externe. Pour les autres services de ce tableau, cela ne change rien.

---

*Des questions sur l'installation ? [Communauté Klacks sur Discord](https://discord.gg/YRP8p2abVC).*
