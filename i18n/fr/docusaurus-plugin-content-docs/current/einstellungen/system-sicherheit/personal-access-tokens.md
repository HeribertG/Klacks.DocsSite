---
sidebar_position: 2
---

# Personal Access Tokens

Les Personal Access Tokens (PAT) sont des clés d'API à longue durée de vie qui permettent à des outils et services externes d'accéder à Klacks de manière sécurisée, sans nom d'utilisateur ni mot de passe — par exemple des assistants IA comme Claude Desktop via le Model Context Protocol (MCP), des scripts d'automatisation ou des pipelines CI/CD.

## Comment ça fonctionne

**Créer un token :** sous Paramètres > Personal Access Tokens, cliquez sur « Créer un nouveau token », donnez-lui un nom explicite (par exemple `Claude Desktop` ou `CI-Pipeline`) et choisissez une durée de validité entre 1 et 730 jours (par défaut : 365 jours). Le token est affiché **une seule fois**, au format `klacks_pat_<chaîne aléatoire>`, juste après sa création — copiez-le immédiatement, car il ne pourra plus être récupéré ensuite.

**Utilisation :** le token est transmis comme jeton porteur (Bearer token) dans l'en-tête `Authorization` de chaque requête API, par exemple `Authorization: Bearer klacks_pat_...`. Pour les clients MCP comme Claude Desktop, renseignez-le dans la variable d'environnement `AUTHORIZATION` du serveur MCP qui pointe vers `/mcp`.

**Gestion :** la vue d'ensemble affiche le nom, la date de création, la date d'expiration et la dernière utilisation de chaque token — le token en clair lui-même n'y est plus jamais affiché. Les tokens qui expirent dans les 30 prochains jours sont signalés dans la liste. Le bouton Révoquer bloque un token immédiatement et définitivement.

## Bon à savoir

- Klacks ne stocke qu'un hachage SHA-256 du token, jamais le token en clair lui-même — un token perdu ne peut pas être récupéré, seulement révoqué puis recréé.
- Chaque token est lié à votre compte utilisateur et possède les mêmes droits que votre propre compte — il n'existe pas de restriction de portée (scope) fine par token.
- Utilisez un token distinct par outil, afin de pouvoir le révoquer de manière ciblée en cas de suspicion d'abus, sans interrompre les autres intégrations.

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — Identifiant `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
