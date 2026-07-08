---
sidebar_position: 4
---

# Updates

Under Settings > Updates you see the currently installed and the latest available Klacks version, control the automatic update behavior, and trigger a manual update or rollback when needed.

## How it works

**Status:** The card shows the current version, whether a newer version is available, and the currently running or most recently executed update operation along with its status.

**Triggering an update or rolling back:** "Install now" manually starts an available update; "Undo" reverts the last successful update operation. Both actions are locked while an operation is already running.

**Configuring automation:**
- **Enable automatic updates** turns automatic update checking and execution on or off.
- **Notify only** doesn't trigger an automatic update but reports when a new version is available.
- **Channel** chooses between `Stable` and `Beta` as the update source.
- **Check interval** (hours) and a **maintenance window** (start/end time) determine how often and within which time window checking or installing happens.
- **Number of backups kept** determines how many backups are retained before a migration, before older ones are automatically deleted.

**History:** A table lists the most recent update operations with type, target version, status, and the time they were requested.

## Good to know

- Before every migration, Klacks automatically creates a backup — no migration is applied without a backup.
- If the health check fails after an update, Klacks automatically rolls back to the previous version (restore backup → activate old version → check again); only if this rollback itself fails is manual intervention needed.
- A manual rollback specifically restores the backup belonging to the last successful operation and activates its starting version — not simply "one version back."
- Update and rollback are admin-only actions.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
