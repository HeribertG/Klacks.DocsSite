---
sidebar_position: 2
---
# Sauvegarde et restauration

Vos données se trouvent entièrement sur votre infrastructure — la sauvegarde est donc, elle aussi, entre vos mains. Cette page montre ce qu'il faut sauvegarder et comment le restaurer.

## Ce qu'il faut sauvegarder

| Quoi | Où | Fréquence |
|---|---|---|
| Base de données | Volume `postgres_data` | quotidiennement, au minimum avant chaque mise à jour |
| Téléversements | Volume `api-uploads` | avec la base de données |
| Documents | Volume `api-documents` | avec la base de données |
| Trousseau de clés | Volume `api-dataprotection` | avec la base de données, **impérativement** |

Le volume `api-dataprotection` contient le trousseau de clés avec lequel Klacks déchiffre les paramètres chiffrés (par exemple les identifiants des canaux de communication). Une base de données sans ce trousseau est certes présente, mais pas entièrement utilisable — sauvegardez-le toujours avec elle.

## Sauvegarder la base de données

```bash
docker exec klacks-postgres pg_dump -U admin -d Klacks -Fc > klacks-20260922.dump
```

Le format `-Fc` (custom) compresse et permet, lors de la restauration, de choisir des tables individuelles.

## Restaurer la base de données

```bash
docker exec -i klacks-postgres pg_restore -U admin -d Klacks --clean --if-exists < klacks-20260922.dump
```

`--clean --if-exists` supprime au préalable les objets existants, afin que la restauration n'échoue pas à cause de tables déjà présentes.

## La pierre d'achoppement : le rollback après une migration échouée

C'est précisément ici qu'une panne de production s'est produite par le passé, et le mécanisme est celui de tout rollback fondé sur un dump :

Si une version défectueuse crée de **nouvelles tables** par une migration, ces tables ne figurent pas dans le dump. Lors de la restauration, la base de données ne revient donc pas à l'ancien état — les nouvelles tables **survivent** à la restauration, tandis que l'historique des migrations (`__EFMigrationsHistory`) est ramené à l'ancien état. La tentative de démarrage suivante se heurte alors à l'erreur `42P07: relation "…" already exists`, et l'installation reste bloquée dans une boucle de redémarrage.

Si vous revenez en arrière manuellement après une mise à jour échouée, vérifiez donc après la restauration s'il reste des tables qui n'existaient pas encore dans l'ancienne version, et supprimez-les **avant** de relancer l'API.

## Conservation et suppression

Klacks ne se contente pas de marquer les données comme supprimées : il les supprime **physiquement**. Un service d'arrière-plan s'exécute chaque jour et retire de façon irrévocable toutes les lignes marquées comme supprimées dont la date de suppression remonte à plus longtemps que le délai configuré — et ce dans **toutes** les tables dotées d'un marqueur de suppression (collaborateurs, adresses, groupes, services, temps de travail, absences, pauses, etc.). Il n'existe pas de liste d'exceptions ; l'obligation de suppression prime délibérément sur la possibilité de restauration.

Vous réglez le délai avec le paramètre `DATA_RETENTION_DAYS` ; sans indication de votre part, la valeur par défaut est de **3650 jours (10 ans)**. La page [Conservation des données](../../einstellungen/system-sicherheit/datenaufbewahrung/) décrit ce paramètre en détail.

## Bon à savoir

- **Avant chaque mise à jour, Klacks sauvegarde lui-même.** Le service de mise à jour crée une sauvegarde des données avant d'activer une nouvelle version ; en cas de migration, la sauvegarde est rattachée à l'opération de mise à jour et réutilisée pour un rollback automatique ou manuel. Cela ne remplace pas votre propre sauvegarde **externe** — elle protège précisément dans les cas où l'hôte lui-même est touché.
- **Vérifiez votre sauvegarde.** Un dump qui n'a jamais été restauré est une hypothèse, pas une sauvegarde. Créez une base de données jetable et restaurez-y le dump avant de vous fier à la procédure.
- **Conservez le trousseau de clés séparément de la base de données.** Si `api-dataprotection` se trouve dans le même jeu de sauvegarde et que le même incident touche les deux, le chiffrement ne sert à rien.

---

*Des questions sur l'exploitation ? [Communauté Klacks sur Discord](https://discord.gg/YRP8p2abVC).*
