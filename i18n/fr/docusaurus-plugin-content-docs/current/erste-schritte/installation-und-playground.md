---
sidebar_position: 1
---

# Installation et Playground

Vous pouvez essayer Klacks en une minute — et l'installer en quelques minutes. Sans inscription, sans démarchage commercial.

## Option 1 : Playground (rien à installer)

Une instance Klacks publique avec des données d'exemple est disponible sur **[klacks-software.ch](https://klacks-software.ch:7643)** :

- **Identifiant :** `admin@test.com` · **Mot de passe :** `P@ssw0rt1`
- Vous disposez des droits d'administrateur complets — testez tout ce que vous voulez.
- Toutes les données sont **réinitialisées automatiquement chaque jour**. Ne saisissez pas de données personnelles réelles.

## Option 2 : Sur votre propre serveur (On-Premise)

Le package On-Premise contient tout ce qu'il faut : images Docker, installateur, base de données, HTTPS et mises à jour automatiques.

```bash
curl -fsSLO https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip
unzip klacks-onprem.zip && cd onprem && ./install.sh
```

Sous Windows : `install.ps1` au lieu de `install.sh`. L'installateur génère lui-même les mots de passe et les certificats, télécharge les images Docker actuelles et attend que tout soit opérationnel. Première connexion avec `admin@test.com` / `P@ssw0rt1` — **changez ce mot de passe immédiatement après la première connexion.**

## Bon à savoir

- Un service de mise à jour fourni garde votre installation automatiquement à jour — avec une sauvegarde avant chaque mise à jour et un retour arrière automatique en cas de problème.
- Vos données restent entièrement sur votre infrastructure ; Klacks n'envoie rien vers l'extérieur.
- Il faut un serveur avec Docker, un accès Internet sortant (pour les images Docker et les mises à jour) et les ports 80/443 ouverts.

---
*Des questions sur l'installation ? [Communauté Klacks sur Discord](https://discord.gg/YRP8p2abVC).*
