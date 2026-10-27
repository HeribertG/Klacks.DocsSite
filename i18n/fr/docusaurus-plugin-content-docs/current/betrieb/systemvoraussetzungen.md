---
sidebar_position: 1
---
# Configuration requise et architecture

Klacks fonctionne comme une pile Docker sur votre propre serveur. Cette page décrit quels services démarrent à cette occasion et comment dimensionner l'hôte — y compris les mesures sur lesquelles repose la recommandation.

## L'architecture : cinq services

Le paquet on-premise ne démarre que ce qui est nécessaire à l'exploitation :

| Service | Image | Rôle |
|---|---|---|
| `klacks-postgres` | `pgvector/pgvector:pg17` | Base de données ; l'extension vectorielle est déjà incluse |
| `klacks-api` | `ghcr.io/heribertg/klacks-api` | Backend ; migre et remplit la base de données au démarrage |
| `klacks-ui` | `ghcr.io/heribertg/klacks-ui` | Interface Angular, servie via nginx |
| `klacks-updater` | `ghcr.io/heribertg/klacks-updater` | installe les mises à jour signées (api et ui ensemble) |
| `klacks-proxy` | `nginx:alpine` | Terminaison TLS et reverse proxy |

Les services internes du fabricant (base de connaissances de développement, marketing, place de marché, pgAdmin, certbot, interface Blazor) ne sont volontairement **pas** inclus. En tant qu'exploitant, vous ne voyez donc que votre propre pile.

## Ce que l'hôte doit fournir

- **8 Go de RAM et 4 vCPU** au minimum (voir le calcul ci-dessous).
- Docker Desktop (Windows/macOS) ou Docker Engine avec Compose v2 (Linux), **amd64 ou arm64**.
- Ports **80 et 443** libres — modifiables via `HTTP_PORT` et `HTTPS_PORT`.
- Accès HTTPS **sortant** vers `ghcr.io` (images) et `github.com` (manifeste de mise à jour signé).
- Facultatif : accès à `klacks-software.ch:7553` pour les paquets de pays et les plug-ins de langue de la place de marché.

## Mémoire : pourquoi 8 Go, et ce qui se passe sur des hôtes plus petits

Klacks exécute ses deux modèles de recherche (embedder et reranker) **localement dans le processus** `klacks-api`. Les deux sessions ONNX restent en permanence en mémoire — elles ne sont pas déchargées après chaque question.

Mesuré sur l'hôte de production du fabricant le 12 septembre 2026 :

- Charge de base du processus : env. 1'017 Mo
- Embedder : env. 1'171 Mo
- Reranker : env. 116 Mo
- Total : un plateau d'environ **2'304 Mo**
- Sous une limite de 2'560 Mo, le noyau a arrêté le conteneur à 2'471 Mo (OOM).

C'est pourquoi le Compose fourni fixe **3'584M** et 3,0 CPU pour `klacks-api`, avec le déchargement en veille désactivé. Calculé sur l'ensemble de la pile : 3'584M (api) + 2'048M (postgres) + 3 × 256M (ui, updater, proxy) = **6'400 MiB** ; le reste des 8 Go est laissé au système d'exploitation et au cache de fichiers.

**Hôte plus petit, environ 3 Go pour `klacks-api` :** dans le fichier `.env`, définissez **les deux** lignes suivantes — jamais la ligne de mémoire seule :

```bash
KLACKS_API_MEMORY_LIMIT=2560M
KLACKS_API_IDLE_UNLOAD_MINUTES=30
```

Le déchargement en veille libère une session après 30 minutes sans accès. Le prix : la question suivante la recharge (environ 2,2–2,9 s pour l'embedder, environ 1,1 s pour le reranker). Les valeurs entre 1 et 5 sont relevées à 5, et `0` signifie : ne jamais décharger.

## CPU : moins de cœurs ne font que ralentir, ils ne cassent rien

La recherche fonctionne aussi avec moins de cœurs, mais elle devient plus lente — le reranker est l'étape gourmande en calcul. Mesuré : 2'994–3'163 ms pour 25 candidats avec 3,0 CPU contre 4'339–4'860 ms avec 1,5 CPU, où le service a en outre passé 7,15 s bridé. Pour un hôte plus petit :

```bash
KLACKS_API_CPU_LIMIT=1.5
```

Les quotas de CPU de la pile totalisent volontairement 4,75 pour 4 vCPU : un quota est une limite supérieure, pas une réservation, et les services n'atteignent jamais leur pic en même temps.

## Bon à savoir

- **Les mots de passe et les clés restent stables.** `POSTGRES_PASSWORD` est gravé dans le volume de données au premier démarrage — une modification ultérieure rend la base de données orpheline. `JWT_SECRET` signe les sessions ; le modifier déconnecte tous les utilisateurs. L'installateur conserve les deux à chaque nouvelle exécution.
- **`COMPOSE_PROJECT_NAME=klacks`** est câblé en dur afin que l'hôte et le service de mise à jour pointent vers le même projet Compose, indépendamment du nom du dossier. Ne plus le modifier après l'installation.
- **`KnowledgeIndex__WarmupEnabled=false` n'est pas une option de mémoire.** Il déplace seulement la construction de la recherche du démarrage vers la première requête de chat ; en fonctionnement continu, les sessions sont tout aussi présentes. Utile uniquement si l'hôte manque de mémoire au démarrage.
- **Plus d'une instance d'API ?** Il vous faut alors un backplane SignalR. Klacks n'en fournit pas : mettez vous-même à disposition un service compatible RESP (par exemple Valkey — sous licence BSD-3 depuis la version 7.4, contrairement à Redis) et activez l'upstream sticky (`ip_hash`) préparé dans le modèle nginx. Sans backplane, exactement une instance `klacks-api` tourne, comme dans toute installation actuelle.
- **Profils de pays :** l'installateur connaît 30 profils : `ae`, `at`, `ch`, `cn`, `cz`, `de`, `dk`, `es`, `fi`, `fr`, `gb`, `gr`, `id`, `il`, `it`, `jp`, `kr`, `li`, `my`, `nl`, `no`, `pl`, `pt`, `ro`, `sa`, `se`, `th`, `tw`, `us`, `vn`. Au premier démarrage, un profil définit la langue, le pays/la région et le fuseau horaire, le calendrier des jours fériés, le week-end et le début de semaine, les limites du temps de travail, le droit aux vacances, les majorations, le système cible par défaut de l'export de paie (pour la Suisse, par exemple `abaconnect-ch`) ainsi que des modèles sectoriels — pour le Spitex, par exemple, le modèle de règles de planification « CH Spitex Standard ». Sans profil, Klacks démarre de façon neutre et vous configurez tout à la main.

---

*Des questions sur l'exploitation ? [Communauté Klacks sur Discord](https://discord.gg/YRP8p2abVC).*
