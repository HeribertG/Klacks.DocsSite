---
sidebar_position: 3
---
# Updates and Rollback

Klacks updates itself — with signed packages, a backup before every step, and an automatic way back if something goes wrong. This page explains what happens in the process and how you can intervene.

## How an update works

1. **Detect.** The API queries the signed manifest that the manufacturer publishes with every release. If a newer version is listed there, the update counts as available.
2. **Back up.** The update service creates a data backup of the database. If the new version contains a migration, this backup is bound firmly to the update operation and remains available for a way back later.
3. **Pull and activate together.** The service downloads the new images for `klacks-api` **and** `klacks-ui` and switches both over together — the two parts run in lockstep, never in different versions.
4. **Check.** After the switch-over, the service queries the deep health check `/internal/health/deep`.
5. **Evaluate.** If the new version is healthy, the update counts as successful. If it is not, the service automatically rolls **both** parts back to the previous version and checks again. If that fails as well, the state is logged as failed so that you can see it.

## What “signed” means

The manufacturer signs every release, and your Klacks verifies the signature before it accepts a package. The public key and the address of the manifest are fixed manufacturer values in your `.env`:

- `UPDATE_MANIFEST_BASE_URL` — fixed to the manufacturer's release source
- `UPDATE_SIGNATURE_PUBLIC_KEY` — must match the private key with which the manufacturer signs

These two values are **not meant to be changed**. Anyone who replaces them removes the verification and thereby opens exactly the gap that the signature closes.

Among other things, the manifest carries: the channel (`Stable` or `Beta`), the latest version, the minimum version from which a direct update is possible (`MinUpgradableFrom`), the release date, whether a database migration is included, the artifacts, the signature, and a reference to the change list.

`klacks-api` and `klacks-ui` are **pinned to an exact version** in the `.env`, so that they do not drift apart unnoticed. The update service itself always runs on `latest` — it is deliberately not part of the signed manifest and only swaps api and ui.

## Settings in operation

In the admin area under **System → Updates**:

| Setting | Effect |
|---|---|
| **Automatic updates** | Updates are detected and installed automatically |
| **Notify only** | Updates are only **detected**, but not installed until you trigger it |
| **Maintenance window** | Time span in which automatic updates may run |

These settings are stored in the database and override the start-up values from the `.env` (`UPDATE_AUTO_ENABLED`, `UPDATE_NOTIFY_ONLY`), which only take effect at the first start.

## Rolling back manually

Nobody has to intervene here automatically — the service rolls a failed update back by itself. If you deliberately want to go back one step:

1. In the `.env`, set `KLACKS_API_TAG` and `KLACKS_UI_TAG` to the previous version.
2. Activate the stack again: `docker compose up -d klacks-api klacks-ui`.
3. **If the faulty version has already migrated**, additionally restore the matching backup from before the update — and observe the stumbling block on the page [Backup and Restore](../backup-und-wiederherstellung/): tables that the new version created survive the restore and block the next start.

## Good to know

- **The way back is not an emergency measure, but the normal case.** Every update operation has a status: successful, rolled back, or rollback failed. A rolled-back update is a normal, logged operation — not an incident.
- **A rolled-back update is not a reset one.** The rollback restores the version, not your data. Data changes that you made between the update and the rollback come from the backup state.
- **You can look it up in the logs:** `docker compose logs klacks-updater` shows detection, backup, switch-over, and rollback.

---

*Operations questions? [Klacks community on Discord](https://discord.gg/YRP8p2abVC).*
