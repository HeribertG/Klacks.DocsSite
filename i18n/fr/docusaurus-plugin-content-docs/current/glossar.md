---
sidebar_position: 8
---
# Glossaire

Les termes qui reviennent sans cesse dans Klacks et dans cette documentation — présentés brièvement et dans l'ordre où vous les rencontrerez.

## Planification

**Ligne de collaborateur**
La plus petite unité planifiable. Ni la personne ni le jour, mais la ligne d'une personne dans une feuille de plan concrète. Toutes les valeurs planifiées sont rattachées à cette ligne.

**Feuille de plan**
Un conteneur qui rassemble des **références** à des lignes de collaborateur — pas des copies. C'est pourquoi une personne n'existe qu'une seule fois, quel que soit le nombre de sous-plans dans lesquels elle apparaît, et une modification est immédiatement visible partout. Fondement de la [planification modulaire](../planen/modulare-planung/).

**Planification automatique**
L'assistant remplit un plan selon vos règles. Le calcul s'exécute en arrière-plan pendant que vous continuez à travailler — voir [Planification automatique](../planen/auto-planung/).

**Disponibilité**
Le moment où une personne est prête à travailler — à l'heure ou à la journée près, pour votre propre personnel comme pour les collaborateurs externes. Voir la [grille de disponibilité](../planen/verfuegbarkeits-raster/).

**Commande (mission)**
Une ébauche d'intervention qui peut encore être modifiée. Une commande n'est **pas encore planifiable**.

**Sceller**
L'étape unique et **irréversible** qui transforme une commande en un service planifiable. Dans le même geste, la contrepartie planifiable de la commande est créée. Créer directement un service planifiable n'existe pas dans Klacks — chaque service naît du scellement. Voir [Le cycle de vie d'un service](../planen/schicht-lebenszyklus/).

**Service (équipe)**
L'intervention planifiable et scellée. Le terme « équipe » désigne la même chose.

**Niveaux de validation (plan de service)**
Le plan de service traverse quatre états dans un ordre fixe : **ébauche → confirmé → approuvé → clôturé**. Tout compte connecté peut confirmer ; seuls les superviseurs et les administrateurs peuvent approuver ; la clôture est réservée exclusivement à l'administrateur. Voir [Workflow de validation](../planen/freigabe-workflow/).

**Période / clôture de période**
La période de décompte (hebdomadaire, bihebdomadaire, mensuelle ou individuelle ; définie par l'intervalle de paiement). La clôture rend une période définitive et reste réservée à l'administrateur — voir [Clôture de période](../planen/periodenabschluss/).

**Absence — deux choses, un seul mot**
Dans le domaine des données de base, « absence » désigne le **catalogue des types d'absence** (nom, couleur, durée par défaut, valeur par défaut). Les barres du calendrier sont en revanche soit un **souhait** (une absence prévue, librement déplaçable et sans niveau de verrouillage), soit une **absence enregistrée** (reprise du plan d'engagement, en lecture seule sur la page Absences et dotée d'un niveau de verrouillage). Qui confond les deux cherche au mauvais endroit.

## Assistant IA

**Klacksy**
L'assistant IA de Klacks. Il planifie, explique et exécute — avec un modèle au choix. Voir [Klacksy](../ki/klacksy-ki-assistent/).

**Skill**
Une capacité unique et délimitée de Klacksy — une enveloppe déclarative autour d'une logique de programme concrète (« rechercher un collaborateur », « affecter un contrat », « créer un rapport »). Klacksy choisit les skills adaptés à l'exécution.

**Niveau d'autonomie**
Jusqu'où Klacksy peut aller sans demander confirmation :

| Niveau | Nom | Comportement |
|---|---|---|
| 0 | Proposer | Chaque action en écriture nécessite votre validation |
| 1 | Assisté | Les actions réversibles s'exécutent librement ; les actions définitives et sensibles demandent d'abord |
| 2 | Autonome (par défaut) | Tout s'exécute librement, sauf les actions classées comme sensibles |
| 3 | Entièrement autonome | Même les étapes définitives s'exécutent |

Les actions sensibles — par exemple la suppression d'utilisateurs ou la modification de droits — demandent une confirmation à **chaque** niveau. Voir [Niveaux d'autonomie](../einstellungen/klacksy-konfiguration/autonomie-stufen/).

## Rôles et exploitation

**Administrateur / Superviseur / Planificateur**
Les trois niveaux d'accès. L'administrateur peut tout faire, le superviseur peut créer et modifier, et un compte sans rôle est un planificateur. L'aperçu se trouve sous [Rôles et droits](../erste-schritte/rollen-und-rechte/).

**Profil de pays**
Un jeu de paramètres préparé pour un pays : langue, fuseau horaire, calendrier des jours fériés, week-end et début de semaine, limites du temps de travail, droit aux vacances, majorations, export de paie par défaut et modèles sectoriels. Il est choisi à l'installation via `REGION`.

**Playground**
L'instance de test publique à l'adresse [play.klacks-software.ch](https://play.klacks-software.ch) avec des données de démonstration — expressément pour essayer, sans données personnelles réelles. Voir [Installation et Playground](../erste-schritte/installation-und-playground/).

**On-premise**
L'exploitation sur votre propre infrastructure : votre matériel, votre base de données, vos données. Le contraire de la variante hébergée.

**Service de mise à jour**
Le service fourni qui installe des mises à jour signées — avec une sauvegarde préalable et un rollback automatique en cas de problème. Voir [Mises à jour et rollback](../betrieb/updates-und-rollback/).

**Protection des données**
Klacks ne téléphone pas à la maison : aucune donnée n'est renvoyée au fabricant. Pour les données qui doivent réellement être supprimées, la [conservation des données](../einstellungen/system-sicherheit/datenaufbewahrung/) s'en charge — les suppressions sont physiquement effacées à l'expiration du délai.

---

*Un terme manque ou son explication est erronée ? [Communauté Klacks sur Discord](https://discord.gg/YRP8p2abVC).*
