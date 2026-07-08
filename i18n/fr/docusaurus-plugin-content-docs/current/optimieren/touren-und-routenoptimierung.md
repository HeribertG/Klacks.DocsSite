---
sidebar_position: 1
---

# Optimisation des tournées et des itinéraires

Pour les interventions mobiles — tournées Spitex, rondes de sécurité, objets de nettoyage, livraisons — Klacks planifie non seulement *qui*, mais aussi *dans quel ordre*.

## Comment ça fonctionne

Chaque lieu d'intervention est enregistré avec son adresse ; Klacks connaît donc les trajets. Un **algorithme de colonies de fourmis** (une méthode d'optimisation éprouvée pour les problèmes d'itinéraires) calcule à partir des adresses d'intervention l'ordre le plus judicieux :

1. **Saisir les adresses** — à enregistrer une fois pour les lieux d'intervention
2. **Optimiser l'ordre** — Klacks détermine la séquence la plus courte et la plus judicieuse ; les détours et les trajets à vide disparaissent
3. **Afficher sur la carte** — la tournée finalisée apparaît comme itinéraire, au choix pour voiture, vélo ou à pied

Si des créneaux horaires fixes sont définis pour une intervention (par ex. seulement le matin), cela est pris en compte dans la planification des tournées — ce n'est toutefois pas une garantie ferme de leur respect.

## Bon à savoir

- Pour le calcul des distances et des temps de trajet, Klacks peut intégrer le service externe OpenRouteService (les coordonnées GPS sont transmises de manière anonymisée) — selon la configuration de l'instance.
- L'optimisation des tournées est un module autonome pour les services de conteneur ; l'auto-planification générale du planning de service évalue indépendamment la couverture, l'équité et la conformité aux règles.
- Le mode de transport est sélectionnable par tournée — pratique pour les tournées à vélo en ville à côté des tournées en voiture à la campagne.
- Si quelqu'un est absent, Klacks affiche immédiatement qui est qualifié et disponible.

![Timeline-Ansicht für die Tourenplanung](/img/app-timeline-de.png)

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
