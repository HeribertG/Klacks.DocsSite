---
sidebar_position: 3
---

Sous Paramètres > Paramètres de l'assistant, vous choisissez le modèle de langage IA que le « Holistic Harmonizer » — l'un des assistants de planification de Klacks — utilise pour son évaluation.

## Comment ça fonctionne

Dans la liste déroulante, vous choisissez, parmi les modèles LLM activés dans Klacks, celui que le Holistic Harmonizer doit utiliser globalement (ou « (aucun) » pour n'en utiliser aucun). Le bouton « Tester tous les modèles » envoie une petite image de test à chaque modèle activé et vérifie s'il répond et s'il est capable de lire l'image — avec un délai d'attente pouvant aller jusqu'à 90 secondes par modèle. Le résultat s'affiche sous forme de tableau avec le modèle, le fournisseur, le statut (OK/Erreur), le temps de réponse et un bouton permettant d'adopter directement un modèle testé avec succès.

Le traitement d'image n'est pas ici un détail accessoire, mais une condition préalable : selon le texte d'information de la page, cet assistant (« Assistant 3 ») a besoin de modèles capables de traiter des images pour fonctionner.

## Bon à savoir

- Cette page ne concerne **pas** la planification automatique en un clic, qui répartit automatiquement les services entre les collaborateurs ; celle-ci repose sur un algorithme génétique, sans aucun LLM, et ne dispose d'aucun paramètre ici.
- Si « (aucun) » est sélectionné comme modèle, le Holistic Harmonizer est de fait désactivé.
- Les modèles LLM disponibles en principe (activés/désactivés) sont définis ailleurs, dans les paramètres IA — ici, vous ne choisissez que parmi les modèles déjà activés.
- Le bouton de test est un simple auto-test (accessibilité + compréhension d'image + temps de réponse) et ne modifie en soi aucune donnée de planification.

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées quotidiennement.*
