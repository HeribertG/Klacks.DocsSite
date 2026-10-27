---
sidebar_position: 3
---
# Mises à jour et rollback

Klacks se met à jour lui-même — avec des paquets signés, une sauvegarde avant chaque étape et un retour en arrière automatique si quelque chose tourne mal. Cette page explique ce qui se passe alors et comment vous pouvez intervenir.

## Comment se déroule une mise à jour

1. **Détecter.** L'API interroge le manifeste signé que le fabricant publie avec chaque version. Si une version plus récente y est indiquée, la mise à jour est considérée comme disponible.
2. **Sauvegarder.** Le service de mise à jour crée une sauvegarde des données de la base de données. Si la nouvelle version contient une migration, cette sauvegarde est liée de façon définitive à l'opération de mise à jour et reste disponible pour un éventuel retour en arrière.
3. **Récupérer et activer ensemble.** Le service télécharge les nouvelles images pour `klacks-api` **et** `klacks-ui` et bascule les deux ensemble — les deux parties avancent au même rythme, jamais dans des versions différentes.
4. **Vérifier.** Après la bascule, le service interroge le contrôle de santé approfondi `/internal/health/deep`.
5. **Évaluer.** Si la nouvelle version est saine, la mise à jour est considérée comme réussie. Si elle ne l'est pas, le service ramène automatiquement **les deux** parties à la version précédente et vérifie à nouveau. Si cela échoue aussi, l'état est consigné comme échoué afin que vous puissiez le constater.

## Ce que signifie « signé »

Le fabricant signe chaque version, et votre Klacks vérifie la signature avant d'accepter un paquet. La clé publique et l'adresse du manifeste sont des valeurs fixes du fabricant dans votre fichier `.env` :

- `UPDATE_MANIFEST_BASE_URL` — fixée sur la source de versions du fabricant
- `UPDATE_SIGNATURE_PUBLIC_KEY` — doit correspondre à la clé privée avec laquelle le fabricant signe

Ces deux valeurs ne sont **pas destinées à être modifiées**. Qui les remplace supprime la vérification et ouvre ainsi précisément la brèche que la signature referme.

Le manifeste contient notamment : le canal (`Stable` ou `Beta`), la version la plus récente, la version minimale à partir de laquelle une mise à jour directe est possible (`MinUpgradableFrom`), la date de publication, la présence ou non d'une migration de base de données, les artefacts, la signature et un renvoi vers la liste des modifications.

`klacks-api` et `klacks-ui` sont **figés sur une version exacte** dans le fichier `.env`, afin qu'ils ne divergent pas à votre insu. Le service de mise à jour lui-même tourne toujours sur `latest` — il ne figure volontairement pas dans le manifeste signé et ne remplace que api et ui.

## Paramètres en exploitation

Dans l'espace d'administration, sous **Système → Mises à jour** :

| Paramètre | Effet |
|---|---|
| **Mises à jour automatiques** | Les mises à jour sont détectées et installées automatiquement |
| **Notifier seulement** | Les mises à jour sont seulement **détectées**, mais pas installées tant que vous ne le déclenchez pas |
| **Fenêtre de maintenance** | Plage horaire pendant laquelle les mises à jour automatiques peuvent s'exécuter |

Ces paramètres sont stockés dans la base de données et prévalent sur les valeurs de démarrage du fichier `.env` (`UPDATE_AUTO_ENABLED`, `UPDATE_NOTIFY_ONLY`), qui ne s'appliquent qu'au premier démarrage.

## Revenir en arrière manuellement

Personne n'a besoin d'intervenir ici de façon automatique — le service ramène lui-même en arrière une mise à jour échouée. Si vous souhaitez délibérément revenir d'un pas :

1. Dans le fichier `.env`, remettez `KLACKS_API_TAG` et `KLACKS_UI_TAG` sur la version précédente.
2. Réactivez la pile : `docker compose up -d klacks-api klacks-ui`.
3. **Si la version défectueuse a déjà migré**, restaurez en plus la sauvegarde correspondante d'avant la mise à jour — et tenez compte alors de la pierre d'achoppement décrite sur la page [Sauvegarde et restauration](../backup-und-wiederherstellung/) : les tables créées par la nouvelle version survivent à la restauration et bloquent le démarrage suivant.

## Bon à savoir

- **Le retour en arrière n'est pas une solution de secours, mais le cas normal.** Chaque opération de mise à jour a un statut : réussie, annulée ou retour en arrière échoué. Une mise à jour annulée est une opération normale et consignée — pas un incident.
- **Une mise à jour annulée n'est pas une mise à jour réinitialisée.** Le rollback rétablit la version, pas vos données. Les modifications de données que vous avez effectuées entre la mise à jour et le retour en arrière proviennent de l'état de la sauvegarde.
- **Vous pouvez consulter les journaux :** `docker compose logs klacks-updater` montre la détection, la sauvegarde, la bascule et le retour en arrière.

---

*Des questions sur l'exploitation ? [Communauté Klacks sur Discord](https://discord.gg/YRP8p2abVC).*
