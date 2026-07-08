---
sidebar_position: 1
---

Sous Paramètres > Règles de planification (valeurs par défaut), vous définissez les valeurs qui seront automatiquement préremplies lors de la création d'un nouveau contrat ou d'une nouvelle règle de planification.

## Comment ça fonctionne

La page regroupe plusieurs ensembles de valeurs par défaut :

- **Heures de travail :** heures de travail quotidiennes (temps cible), seuil d'heures supplémentaires (h/semaine), heures mensuelles garanties, minimales et maximales, ainsi que le nombre d'heures à temps plein.
- **Seuils des règles de planification :** nombre max. de jours travaillés, nombre min. de jours de repos entre deux blocs de travail, nombre min. d'heures libres entre deux jours travaillés, écart optimal max. entre deux services, heures max. par jour/semaine et nombre max. de jours de travail consécutifs — les mêmes grandeurs que celles définies aussi par une règle de planification individuelle.
- **Majorations :** majoration de nuit, de jour férié, du samedi et du dimanche, en pourcentage.
- **Jours de travail standard et week-end :** quels jours de la semaine comptent comme jours travaillés, si le travail posté (services du matin/après-midi/nuit) est pratiqué, quels jours comptent comme week-end et quel jour de la semaine marque le début de la semaine.
- **Commandes de planification (mots-clés) :** les commandes textuelles `FREE`, `EARLY`, `LATE`, `NIGHT` ainsi que leurs contreparties négatives `-FREE`, `-EARLY`, `-LATE`, `-NIGHT` sont configurables ici. Lorsqu'une personne saisit directement ces mots dans une cellule journalière du planning, Klacks ne l'interprète pas comme une note mais comme un souhait : `FREE` signifie « ne pas planifier ce jour si possible », `EARLY`/`LATE`/`NIGHT` privilégient ou imposent un type de service donné, et les variantes négatives excluent l'inverse. Tant la planification automatique que le Harmonizer prennent en compte ces souhaits comme contrainte.

## Bon à savoir

- Cette page gère des **valeurs par défaut globales** — les modifications ne s'appliquent qu'aux contrats ou règles de planification **nouvellement créés**, pas rétroactivement aux contrats existants.
- Les seuils des règles de planification définis ici sont identiques à ceux que vous fixez individuellement par contrat par ailleurs — ici, vous ne définissez que la valeur de départ qu'un nouveau contrat reçoit.
- Les commandes de planification sont masquées par défaut dans le planning et peuvent être affichées via une icône dédiée dans la barre d'outils.

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées quotidiennement.*
