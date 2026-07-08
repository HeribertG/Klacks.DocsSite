---
sidebar_position: 5
---

# Test de connexion des modèles

Tous les modèles de langage ne conviennent pas à Klacksy — il doit fournir de manière fiable des appels de fonction structurés au lieu de répondre en texte libre. Dans Paramètres > Vérification des modèles Klacksy, Klacks teste automatiquement cela pour tous les modèles configurés.

## Comment ça marche

**Le test :** un clic sur « Trouver les meilleurs modèles » envoie à chaque modèle configuré (y compris ceux désactivés) la même petite tâche de test : « Crée un nouvel employé nommé Anna Müller. » Le modèle doit répondre par l'appel de fonction structuré approprié et les bons paramètres de nom — pas par une réponse textuelle. La fenêtre de contexte doit en outre atteindre au moins 32 000 tokens, afin que le prompt système et les capacités de Klacksy y trouvent leur place. Chaque test s'exécute avec une limite de temps de 30 secondes.

**Résultat :** les modèles qui remplissent les deux critères sont considérés comme « adaptés » et activés automatiquement ; les modèles inadaptés sont désactivés. La liste des résultats est triée par aptitude, puis par capacité d'appel de fonction, coût, latence et fenêtre de contexte.

**Définir le modèle par défaut :** via « Définir par défaut », vous choisissez directement dans la liste des résultats le modèle que Klacksy utilisera désormais par défaut. Sans sélection manuelle, Klacks définit automatiquement le modèle le plus adapté comme modèle par défaut.

## Bon à savoir

- Le test vérifie tous les modèles enregistrés, pas seulement les modèles activés — même des modèles jusqu'ici désactivés peuvent ainsi être activés s'ils réussissent le test.
- Réussir le test n'est pas une garantie de maîtrise des coûts : des modèles coûteux mais adaptés sont également activés. Le coût pour 1000 tokens est visible dans la liste des résultats.
- Ce test est spécifiquement conçu pour les appels de fonction liés à la capacité d'action, et il est indépendant du test de modèle des paramètres vocaux, qui se contente d'une fenêtre de contexte plus faible pour le simple nettoyage de transcription.

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées quotidiennement.*
