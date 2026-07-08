---
sidebar_position: 7
---

# Macros

Les majorations pour travail de nuit, du dimanche ou des jours fériés, ou encore le calcul précis des heures de vacances et de service militaire, ne peuvent pas être couverts par une formule fixe valable pour toutes les entreprises. Dans Paramètres > Macros, vous écrivez pour cela vos propres petits scripts dans un langage proche du BASIC.

## Comment ça marche

**À quoi servent les macros :** une macro calcule, à partir des données d'un service (Work) ou d'un emploi, une seule valeur de retour — typiquement une majoration exprimée en heures ou en francs. Le résultat est enregistré dans `Work.Surcharges` et intégré automatiquement dans le décompte d'heures (ClientPeriodHours). Chaque macro appartient à un type — service/emploi ou règles de travail — et peut être nommée, modifiée et supprimée comme n'importe quel autre paramètre.

**Données disponibles :** via `IMPORT`, le script a notamment accès à `hour` (heures de travail), `fromhour`/`untilhour` (heure de début/fin en heures décimales), `weekday` (ISO-8601 : 1 = lundi … 7 = dimanche), `holiday`/`holidaynextday` (le jour actuel, respectivement le jour suivant, est-il férié), ainsi qu'aux taux de majoration définis dans le contrat `nightrate`, `holidayrate`, `sarate` (samedi) et `sorate` (dimanche).

**Étendue du langage :** le langage de script connaît des structures de contrôle (`IF…THEN…ELSEIF…ELSE…ENDIF`, `SELECT CASE`, `FOR…NEXT`, `DO…LOOP`), permet de définir ses propres fonctions (`FUNCTION`) et procédures (`SUB`, qui doivent être définies avant leur premier appel), ainsi que des fonctions intégrées de chaînes de caractères, mathématiques, trigonométriques et temporelles (par exemple `TimeToHours`, `TimeOverlap` pour les plages horaires à cheval sur minuit). Le résultat est renvoyé via `OUTPUT type, valeur`.

**Tester dans l'éditeur :** l'éditeur de macros dispose d'un onglet de test dédié : vous saisissez des valeurs d'exemple pour les variables importées, vérifiez la syntaxe et exécutez le script à titre d'essai. `DEBUGPRINT`/`DEBUGCLEAR` affichent des valeurs supplémentaires dans la fenêtre de test, sans influencer la valeur de retour effective.

**Sécurité :** l'interpréteur s'exécute dans un bac à sable sans accès au système de fichiers ni au réseau — une macro peut se tromper dans son calcul, mais ne peut causer aucun dommage en dehors de ce calcul.

## Bon à savoir

- `DIM` déclare une variable mais ne l'initialise pas en même temps — `DIM x = 10` est une erreur de syntaxe ; il faut d'abord `DIM x`, puis séparément `x = 10`.
- Les mots-clés comme `ENDIF`, `ENDFUNCTION` et `ENDSUB` s'écrivent en un seul mot, sans espace.
- `weekday` suit systématiquement la norme ISO-8601 (1 = lundi … 7 = dimanche) — pour vos propres requêtes `SELECT CASE` sur le « week-end », ce sont donc les valeurs 6 (samedi) et 7 (dimanche).

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — connexion `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées quotidiennement.*
