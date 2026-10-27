---
sidebar_position: 2
---
# Backup and Restore

Your data lives entirely on your infrastructure — which means the backup is in your hands too. This page shows what has to be backed up and how to restore it.

## What has to be backed up

| What | Where | How often |
|---|---|---|
| Database | Volume `postgres_data` | daily, at the very least before every update |
| Uploads | Volume `api-uploads` | together with the database |
| Documents | Volume `api-documents` | together with the database |
| Keyring | Volume `api-dataprotection` | together with the database, **absolutely** |

The volume `api-dataprotection` contains the keyring with which Klacks decrypts encrypted settings (such as credentials for communication channels). A database without this keyring is present, but not fully usable — always back it up as well.

## Backing up the database

```bash
docker exec klacks-postgres pg_dump -U admin -d Klacks -Fc > klacks-20260922.dump
```

The format `-Fc` (custom) compresses and lets you pick individual tables when restoring.

## Restoring the database

```bash
docker exec -i klacks-postgres pg_restore -U admin -d Klacks --clean --if-exists < klacks-20260922.dump
```

`--clean --if-exists` removes existing objects beforehand, so that the restore does not fail on tables that already exist.

## The stumbling block: rollback after a failed migration

This is exactly where a production outage occurred in the past, and the mechanism is the same for any dump-based rollback:

If a faulty version creates **new tables** through a migration, those tables are not in the dump. When you restore, the database therefore does not stop at the old state — the new tables **survive** the restore, while the migration history (`__EFMigrationsHistory`) is reset to the old state. The next start attempt then runs into the error `42P07: relation "…" already exists`, and the installation gets stuck in a restart loop.

If you roll back manually after a failed update, therefore check after the restore whether any tables are left over that did not yet exist in the old version, and remove them **before** you start the API again.

## Retention and deletion

Klacks does not merely mark data as deleted — it deletes it **physically**. A background service runs daily and irrevocably removes all rows marked as deleted whose deletion time lies further back than the configured period — across **all** tables with a deletion marker (employees, addresses, groups, shifts, working times, absences, breaks, and so on). There is no exception list; the obligation to delete deliberately takes precedence over recoverability.

You control the period via the setting `DATA_RETENTION_DAYS`; without your own value, the default of **3650 days (10 years)** applies. The page [Data Retention](../../einstellungen/system-sicherheit/datenaufbewahrung/) describes the setting in detail.

## Good to know

- **Klacks backs up on its own before every update.** The update service creates a data backup before it activates a new version; in the case of a migration, the backup is tied to the update operation and reused for an automatic or manual rollback. This does not replace your own, **external** backup — it protects against exactly the cases in which the host itself is affected.
- **Test your backup.** A dump that has never been restored is an assumption, not a backup. Create a throwaway database and restore into it before you rely on the procedure.
- **Keep the keyring separate from the database.** If `api-dataprotection` sits in the same backup set and the same incident hits both, the encryption is worthless.

---

*Operations questions? [Klacks community on Discord](https://discord.gg/YRP8p2abVC).*
