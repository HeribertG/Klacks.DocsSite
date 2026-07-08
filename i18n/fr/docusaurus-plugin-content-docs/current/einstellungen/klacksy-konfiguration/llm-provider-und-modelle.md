---
sidebar_position: 1
---

# Fournisseurs LLM et modèles

Klacksy a besoin d'un modèle de langage pour comprendre et agir. Dans Paramètres > Fournisseurs LLM, Modèles LLM et Journal de synchronisation LLM, vous définissez quels fournisseurs et quels modèles précis Klacks est autorisé à utiliser.

## Comment ça marche

**Ajouter un fournisseur :** un fournisseur regroupe l'URL de base, la version d'API et la clé API d'un prestataire. Six fournisseurs (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) sont intégrés directement dans le code ; tout autre fournisseur passe par une connexion générique compatible OpenAI — ce qui permet par exemple d'intégrer Groq, Together AI, Fireworks, OpenRouter, xAI, Cerebras, Perplexity ou un modèle auto-hébergé. Via « Rechercher un fournisseur », Klacks vous propose en plus des fournisseurs que vous n'avez pas encore configurés : soit à partir d'un catalogue organisé d'adresses vérifiées, soit — si une recherche web est configurée — via une recherche sur Internet. Chaque suggestion est testée en direct pour vérifier son accessibilité avant d'être affichée ; les fournisseurs sélectionnés sont créés désactivés et sans clé API, que vous renseignez ensuite vous-même.

**Clé API et priorité :** une fois enregistrée, la clé n'est plus jamais affichée en clair dans l'interface — seule l'information « Configurée » apparaît. La priorité détermine l'ordre dans lequel les fournisseurs activés sont sollicités.

**Gérer les modèles :** dans Modèles LLM, vous créez des modèles individuels pour chaque fournisseur (nom d'affichage, identifiant technique du modèle chez le fournisseur, fenêtre de contexte, nombre maximal de tokens, coût pour 1000 tokens en entrée/sortie). Un modèle peut être marqué comme modèle par défaut ; un fournisseur ne peut pas être supprimé tant que l'un de ses modèles est le modèle par défaut actuel.

**Journal de synchronisation LLM :** un service en arrière-plan vérifie automatiquement, par défaut toutes les 24 heures, quels modèles sont devenus disponibles ou ont disparu chez les fournisseurs activés. Les nouveaux modèles sont d'abord vérifiés par une véritable requête de test et ne sont insérés et activés qu'en cas de succès ; les modèles qui ne sont plus proposés sont automatiquement désactivés. Le journal de synchronisation affiche l'historique complet par fournisseur, avec la date, le nombre de modèles nouveaux/désactivés/en échec et les résultats de test consultables en détail. Les administrateurs reçoivent en plus une notification toast à leur prochaine connexion s'il existe des événements de synchronisation non lus.

## Bon à savoir

- Seuls six fournisseurs (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) disposent d'une implémentation dédiée — tous les autres passent par une connexion générique compatible OpenAI.
- Le catalogue de « Rechercher un fournisseur » contient actuellement douze fournisseurs vérifiés ; les suggestions issues du web n'apparaissent que si une recherche web est configurée dans les paramètres.
- Le service de journal de synchronisation fonctionne en arrière-plan, indépendamment de votre session — vous n'avez pas besoin de garder la page ouverte.

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées quotidiennement.*
