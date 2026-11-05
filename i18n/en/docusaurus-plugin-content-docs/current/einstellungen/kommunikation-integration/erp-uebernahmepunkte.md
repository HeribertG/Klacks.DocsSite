---
sidebar_position: 5
---

# ERP Drop Points

Under Settings > Import (visible only in expert mode), card "ERP drop points", you configure how orders from an external ERP system are automatically imported into Klacks as XML files.

## How it works

**Three ways of delivery:** The ERP system can place XML files in a folder on the Klacks server (Klacks picks them up automatically on a schedule as soon as a file has been unchanged for 10 seconds), push them directly via HTTPS POST to an import endpoint (authenticated with an access token), or an administrator uploads the XML file manually on this page via drag-and-drop (the import starts immediately). There is no SFTP; only XML files in the `ErpOrderImport` format are imported.

**The drop point** is the central inbox for all import files, managed by Klacks itself — it shows three areas: Incoming (received or currently being imported), Processed (with a summary per file), and Errors (unreadable or invalid files along with the reason for the error, with the option to re-import or delete). A schedule (cron expression, default hourly) and an active switch to pause processing control the automatic pickup.

**Which way suits which installation?** On an office PC (Windows installation), the folder is the obvious way; the default folder is `C:\ProgramData\Klacks\ErpImport\erp\orders`. It is protected, and only SYSTEM and administrators may write there: an administrator must grant the account under which the ERP export runs the "Modify" right on exactly the `erp\orders` folder, not on the whole `ProgramData\Klacks` folder. On your own Docker server, the folder is an ordinary folder of the server: the Compose file mounts the `erp-import` folder next to `docker-compose.yml` (changeable via `KLACKS_ERP_IMPORT_HOST_DIR`) onto `/app/ErpImport`; inside the container, the folder's path is `/app/ErpImport/erp/orders`. The installation reports the server path via `KLACKS_ERP_IMPORT_HOST_PATH` (the installer sets it); an ERP on the server machine writes directly into this folder, and the account under which the export runs needs write permission on exactly this folder. Older installations had a named volume; its content is copied into the folder once (see the on-prem README, section "Upgrading from a named volume"). The card shows the folder path (on Docker the server folder, below it the path inside the container) with a button to copy it. For an installation hosted by us there is no access to folders on the server: push with an access token or manual upload.

**Access tokens** are only needed when an ERP system delivers files via push. Each token starts with `klacks_erp_`, is valid for 1–730 days (default 365), and is shown in plain text **only once, at creation**. Such a token is valid exclusively for the import endpoint, not for the rest of the API access, and can be revoked at any time.

**Processing:** Orders are matched to an existing or newly created client based on source system ID and external customer reference (or, failing that, company/postal code/street) and are initially created as a draft, which planners must review and seal. A changed redelivery of an already sealed order automatically closes the old one and creates a new, linked version; unchanged repeat deliveries trigger nothing.

## Good to know

- Individual faulty orders (e.g. missing weekday or duplicate reference) are rejected without blocking the other valid orders in the same file; the file still appears under Processed, marked with a warning symbol, and the rejected orders can be expanded with their reason.
- Files are not moved or archived: they stay in the folder, and their status is stored in the database. Successfully processed files are deleted automatically after 90 days; files under Errors stay until they are re-imported or deleted.
- The exact XML format (required fields, date formats, weekday logic) is documented in the manual directly on the settings page as well as via a downloadable sample file.
- This configuration lives in the Settings area and is therefore reserved for administrative roles.

---
*Try it yourself: [Klacks Playground](https://play.klacks-software.ch) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
