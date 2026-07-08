---
sidebar_position: 4
---

# Mises à jour

Sous Paramètres > Mises à jour, vous consultez la version actuellement installée et la dernière version disponible de Klacks, vous contrôlez le comportement de mise à jour automatique et vous déclenchez manuellement, si besoin, une mise à jour ou un retour en arrière (rollback).

## Comment ça fonctionne

**Statut :** la carte affiche la version actuelle, si une version plus récente est disponible, ainsi que l'opération de mise à jour en cours ou la dernière exécutée, avec son statut.

**Déclencher une mise à jour ou revenir en arrière :** « Installer maintenant » lance manuellement une mise à jour disponible ; « Annuler » annule la dernière opération de mise à jour réussie. Les deux actions sont verrouillées tant qu'une opération est déjà en cours.

**Configurer l'automatisation :**
- **Activer les mises à jour automatiques** active ou désactive la vérification et l'exécution automatiques des mises à jour.
- **Notifier uniquement** ne déclenche aucune mise à jour automatique, mais signale la disponibilité d'une nouvelle version.
- **Canal** permet de choisir entre `Stable` et `Beta` comme source de mise à jour.
- **Intervalle de vérification** (en heures) et une **fenêtre de maintenance** (heure de début/fin) déterminent la fréquence et la plage horaire de vérification, respectivement d'installation.
- **Nombre de sauvegardes conservées** détermine combien de sauvegardes sont conservées avant une migration, les plus anciennes étant supprimées automatiquement.

**Historique :** un tableau liste les dernières opérations de mise à jour avec leur type, la version cible, le statut et l'horodatage de la demande.

## Bon à savoir

- Avant chaque migration, Klacks crée automatiquement une sauvegarde — sans sauvegarde, aucune migration n'est appliquée.
- Si le contrôle de santé échoue après une mise à jour, Klacks revient automatiquement à la version précédente (restauration de la sauvegarde → activation de l'ancienne version → nouvelle vérification) ; ce n'est que si ce rollback lui-même échoue qu'une intervention manuelle devient nécessaire.
- Un rollback manuel restaure spécifiquement la sauvegarde correspondant à la dernière opération réussie et active la version d'origine correspondante — pas simplement « une version en arrière ».
- La mise à jour et le rollback sont des actions réservées aux administrateurs.

---
*À essayer directement : [Klacks Playground](https://klacks-software.ch:7643) — Identifiant `admin@test.com` / `P@ssw0rt1`, les données sont réinitialisées chaque jour.*
