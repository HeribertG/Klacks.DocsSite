---
sidebar_position: 1
---

# Installation et Playground

Vous pouvez essayer Klacks en une minute — et l'installer en quelques minutes. Sans inscription, sans démarchage commercial.

## Playground : l'aire de jeu pour découvrir

Le Playground n'est pas une variante d'installation, mais une instance Klacks publique avec des données d'exemple, faite pour s'essayer sans engagement — d'où le nom. Elle est disponible sur **[klacks-software.ch](https://play.klacks-software.ch)** :

- **Identifiant :** `admin@test.com` · **Mot de passe :** `P@ssw0rt1`
- Vous disposez des droits d'administrateur complets — testez tout ce que vous voulez.
- Toutes les données sont **réinitialisées automatiquement chaque jour**. Ne saisissez pas de données personnelles réelles.

## Installation : Sur votre propre serveur (On-Premise)

Le package On-Premise contient tout ce qu'il faut : images Docker, installateur, base de données, HTTPS et mises à jour automatiques. Klacks se télécharge exclusivement depuis le [Klacks Store](https://klacks-software.ch/store/?culture=fr).

Dans le Klacks Store, choisissez si vous le souhaitez votre secteur, téléchargez le ZIP de votre pays et décompressez-le sur la machine cible. Choisissez un dossier qui reste à sa place (par exemple `~/klacks`) : les mises à jour automatiques fonctionnent avec ce dossier.

```bash
unzip 'klacks-onprem-*.zip' -d ~/klacks && cd ~/klacks && sudo bash ./install-*.sh
```

Sous Windows : `install-*.ps1` au lieu de `install-*.sh`. L'installateur génère lui-même les mots de passe et les certificats, télécharge les images Docker actuelles et attend que tout soit opérationnel. Première connexion avec `admin@test.com` / `P@ssw0rt1` — **changez ce mot de passe immédiatement après la première connexion.**

## Bon à savoir

- Un service de mise à jour fourni garde votre installation automatiquement à jour — avec une sauvegarde avant chaque mise à jour et un retour arrière automatique en cas de problème.
- Vos données restent entièrement sur votre infrastructure ; Klacks n'envoie rien vers l'extérieur.
- Il faut un serveur avec Docker, un accès Internet sortant (pour les images Docker et les mises à jour) et les ports 80/443 ouverts.

---
*Des questions sur l'installation ? [Communauté Klacks sur Discord](https://discord.gg/YRP8p2abVC).*
