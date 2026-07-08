---
sidebar_position: 4
---

# Niveaux d'autonomie

Jusqu'où Klacksy peut-il agir de sa propre initiative avant de vous demander votre avis ? Dans Paramètres > Autonomie de Klacksy, vous définissez ce réglage pour vous-même — il s'applique par compte utilisateur, pas globalement pour tous les utilisateurs.

## Comment ça marche

**Quatre niveaux :**

- **Suggestion** — Klacksy se contente de proposer, chaque modification nécessite votre validation.
- **Assisté** — les actions réversibles s'exécutent directement, tout le reste nécessite une validation.
- **Autonome** (par défaut) — toutes les actions s'exécutent directement, sauf les plus sensibles.
- **Totalement autonome** — même les plans à plusieurs étapes s'exécutent sans validation intermédiaire.

**Comment le niveau agit concrètement :** chaque action que Klacksy pourrait exécuter est classée en interne selon son risque : les actions purement en lecture s'exécutent toujours immédiatement ; les actions réversibles ou liées à un scénario (par exemple dans une planification de test) nécessitent au moins le niveau Assisté ; les actions irréversibles nécessitent au moins le niveau Autonome. Les actions sensibles — gestion des utilisateurs, droits d'accès et modifications du réglage d'autonomie lui-même — exigent **quel que soit le niveau choisi** une validation explicite.

**Le déroulement de la validation :** lorsqu'une action nécessite votre accord, Klacksy ne l'exécute pas immédiatement : il la met en attente pendant 5 minutes et résume ce qui va se passer. Ce n'est que lorsque vous confirmez explicitement, avec vos propres mots, que Klacksy déclenche l'action mise en attente — il ne valide jamais de lui-même en votre nom.

## Bon à savoir

- Le niveau d'autonomie est un réglage personnel par compte utilisateur — chaque utilisateur peut choisir son propre niveau de confort.
- Un niveau plus élevé ne signifie pas qu'on ne vous demandera plus jamais rien : les actions sensibles restent toujours soumises à validation.
- Par défaut, le niveau Autonome est actif — cela correspond au comportement que Klacksy avait déjà avant l'introduction des niveaux d'autonomie.

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées quotidiennement.*
