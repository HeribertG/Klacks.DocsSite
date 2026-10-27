---
sidebar_position: 4
---
# Troubleshooting

When Klacks does not do what it should, the way forward almost always leads through the logs of the two suspect services — and through the question of whether the process is really still running.

## First: see what is running

```bash
docker compose ps
docker compose logs klacks-api
docker compose logs klacks-updater
```

`docker compose ps` shows which services are running and whether they are healthy. `klacks-api` writes start-up, migration, and population of the database; `klacks-updater` writes detection, backup, switch-over, and rollback of an update.

## An old log is not proof

A trap that has already cost time: the log file may come from an **earlier** start. Anyone who finds an error in it and takes it for the current one is looking in the wrong place.

So check whether the log is **still growing**:

```bash
wc -c klacks-api.log; sleep 10; wc -c klacks-api.log
```

If the size stays the same (growth of 0 bytes), the process is no longer writing — it is not running, regardless of what the log says. Only a fresh recurrence of the error, with a log that demonstrably keeps up, is a reliable basis.

## Common messages and what they mean

| Message | Meaning | What to do |
|---|---|---|
| `no matching manifest for linux/amd64` | The image does not exist for your architecture | The manufacturer has to publish the image for multiple architectures (amd64 **and** arm64) |
| `pull access denied` | The package in the package registry is private | Repeat the installation with credentials: `-GhcrUser`/`-GhcrToken` on Windows, `GHCR_USER`/`GHCR_TOKEN` on Linux |
| `errorCode: SETUP_REQUIRED`, HTTP `403` | The admin setup gate is active | Log in with `admin@test.com` and create your own admin account — see [Installation and Playground](../../erste-schritte/installation-und-playground/) |
| Container ends without a managed stack trace with exit code `-1` (`0xffffffff`) | A **native** crash in a C/C++ library that no C# `try/catch` can catch | Look at the container's output on **stderr** — the actual trigger is there, not in the application log |
| Container is terminated although there is no application error in the log | The kernel killed the process because of a lack of memory (OOM) | Check the memory limits — see [System Requirements](../systemvoraussetzungen/) |
| `42P07: relation "…" already exists` after a failed update | A migration created tables that the restore did not remove | See the stumbling block under [Backup and Restore](../backup-und-wiederherstellung/) |
| API dies seconds after `Application started` | The start succeeds, the crash comes afterwards — typical of a native library | Same trail as with exit code `-1`: check stderr, not the application log |

On a **Windows-on-ARM machine** (Snapdragon X), the locally running search has in the past failed on exactly such a native library: the API reported `Application started`, but was no longer reachable for the interface a few seconds later. If you see this pattern on an ARM Windows host, the first look goes to the console output (not the file log) — the message from the affected CPU detection appeared there.

## How to narrow down an error

1. **What exactly did you do**, and what did you expect? The last step before the error is half the answer.
2. **Which services are running?** `docker compose ps`.
3. **Is the log still growing?** See above.
4. **What was last on stderr?** For native crashes, the only source.
5. **What changed most recently?** An update, a setting, a new certificate.

## Good to know

- **A service that started early and a healthy one look the same in the log.** If nothing arrives in the interface, check whether the process is still running at all — not just what it wrote last.
- **For a crash without an application error, memory is the first suspect**, especially after an update with new search models.
- **Helpful details for a report:** the affected version (`KLACKS_API_TAG`/`KLACKS_UI_TAG` from the `.env`), the output of `docker compose ps`, the last lines of both logs, and the last step before the error. Please **without** passwords and keys from the `.env`.
- When in doubt, ask the community: [Klacks community on Discord](https://discord.gg/YRP8p2abVC).

---

*Operations questions? [Klacks community on Discord](https://discord.gg/YRP8p2abVC).*
