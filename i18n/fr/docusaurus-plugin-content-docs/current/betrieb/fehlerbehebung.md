---
sidebar_position: 4
---
# Dépannage

Lorsque Klacks ne fait pas ce qu'il doit, le chemin passe presque toujours par les journaux des deux services suspects — et par la question de savoir si le processus tourne réellement encore.

## D'abord : voir ce qui tourne

```bash
docker compose ps
docker compose logs klacks-api
docker compose logs klacks-updater
```

`docker compose ps` indique quels services tournent et s'ils sont en bonne santé. `klacks-api` écrit le démarrage, la migration et le remplissage de la base de données ; `klacks-updater` écrit la détection, la sauvegarde, la bascule et le retour en arrière d'une mise à jour.

## Un ancien journal ne prouve rien

Un piège qui a déjà coûté du temps : le fichier journal peut provenir d'un démarrage **antérieur**. Qui y trouve une erreur et la prend pour l'erreur actuelle cherche au mauvais endroit.

Vérifiez donc si le journal **grossit encore** :

```bash
wc -c klacks-api.log; sleep 10; wc -c klacks-api.log
```

Si la taille reste identique (croissance de 0 octet), le processus n'écrit plus — il ne tourne pas, quoi que dise le journal. Seule une nouvelle occurrence de l'erreur, avec un journal qui suit manifestement, constitue une base fiable.

## Messages fréquents et leur signification

| Message | Signification | Que faire |
|---|---|---|
| `no matching manifest for linux/amd64` | L'image n'existe pas pour votre architecture | Le fabricant doit publier l'image pour plusieurs architectures (amd64 **et** arm64) |
| `pull access denied` | Le paquet du registre de paquets est privé | Répéter l'installation avec des identifiants : `-GhcrUser`/`-GhcrToken` sous Windows, `GHCR_USER`/`GHCR_TOKEN` sous Linux |
| `errorCode: SETUP_REQUIRED`, HTTP `403` | La porte de configuration administrateur est active | Se connecter avec `admin@test.com` et créer son propre compte administrateur — voir [Installation et Playground](../../erste-schritte/installation-und-playground/) |
| Le conteneur se termine sans trace de pile managée avec le code de sortie `-1` (`0xffffffff`) | Un plantage **natif** dans une bibliothèque C/C++, qu'aucun `try/catch` C# ne peut intercepter | Consulter la sortie du conteneur sur **stderr** — le véritable déclencheur s'y trouve, pas dans le journal de l'application |
| Le conteneur est arrêté alors qu'aucune erreur d'application ne figure dans le journal | Le noyau a arrêté le processus faute de mémoire (OOM) | Vérifier les limites de mémoire — voir [Configuration requise](../systemvoraussetzungen/) |
| `42P07: relation "…" already exists` après une mise à jour échouée | Une migration a créé des tables que la restauration n'a pas supprimées | Voir la pierre d'achoppement sous [Sauvegarde et restauration](../backup-und-wiederherstellung/) |
| L'API meurt quelques secondes après `Application started` | Le démarrage réussit, le plantage vient ensuite — typique d'une bibliothèque native | Même piste que pour le code de sortie `-1` : vérifier stderr, pas le journal de l'application |

Sur un **ordinateur Windows sur ARM** (Snapdragon X), la recherche exécutée localement a échoué par le passé précisément à cause d'une telle bibliothèque native : l'API signalait `Application started`, mais n'était plus joignable pour l'interface quelques secondes plus tard. Si vous observez ce schéma sur un hôte Windows ARM, le premier regard se porte sur la sortie de la console (et non sur le journal fichier) — c'est là qu'est apparu le message de la détection du processeur concernée.

## Comment circonscrire une erreur

1. **Qu'avez-vous fait exactement**, et qu'attendiez-vous ? La dernière étape avant l'erreur est la moitié de la réponse.
2. **Quels services tournent ?** `docker compose ps`.
3. **Le journal grossit-il encore ?** Voir ci-dessus.
4. **Qu'y avait-il en dernier sur stderr ?** Pour les plantages natifs, la seule source.
5. **Qu'est-ce qui a changé en dernier ?** Une mise à jour, un paramètre, un nouveau certificat.

## Bon à savoir

- **Un service démarré tôt et un service sain se ressemblent dans le journal.** Si rien n'arrive dans l'interface, vérifiez si le processus tourne encore — et pas seulement ce qu'il a écrit en dernier.
- **En cas de plantage sans erreur d'application, la mémoire est le premier suspect**, surtout après une mise à jour avec de nouveaux modèles de recherche.
- **Informations utiles pour un signalement :** la version concernée (`KLACKS_API_TAG`/`KLACKS_UI_TAG` du fichier `.env`), la sortie de `docker compose ps`, les dernières lignes des deux journaux et la dernière étape avant l'erreur. Veuillez le faire **sans** les mots de passe et clés du fichier `.env`.
- Dans le doute, interrogez la communauté : [Communauté Klacks sur Discord](https://discord.gg/YRP8p2abVC).

---

*Des questions sur l'exploitation ? [Communauté Klacks sur Discord](https://discord.gg/YRP8p2abVC).*
