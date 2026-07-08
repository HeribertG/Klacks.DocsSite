---
sidebar_position: 5
---

Under Settings > ERP Drop Points you configure how orders from an external ERP system are automatically imported into Klacks as XML files.

## How it works

**Three ways of delivery:** The ERP system can either place files in the drop point's file storage (Klacks picks them up automatically on a schedule), push them directly via HTTP POST to an import endpoint (authenticated with an access token), or an administrator uploads the XML file manually on this page via drag-and-drop.

**The drop point** is the central inbox for all import files, managed by Klacks itself — it shows three areas: Incoming (waiting for the next run), Processed (archive), and Errors (invalid files along with the error reason, with the option to re-import). A schedule (cron expression, default hourly) and an active switch to pause processing control the automatic pickup.

**Access tokens** are only needed when an ERP system delivers files via push. Each token starts with `klacks_erp_`, is valid for 1–730 days (default 365), and is shown in plain text **only once, at creation**. Such a token is valid exclusively for the import endpoint, not for the rest of the API access, and can be revoked at any time.

**Processing:** Orders are matched to an existing or newly created client based on source system ID and external customer reference (or, failing that, company/postal code/street) and are initially created as a draft, which planners must review and seal. A changed redelivery of an already sealed order automatically closes the old one and creates a new, linked version; unchanged repeat deliveries trigger nothing.

## Good to know

- Individual faulty orders (e.g. missing weekday or duplicate reference) are rejected without blocking the other valid orders in the same file; the entire file still ends up in the error area anyway, so nothing gets overlooked.
- Processed files are archived, not deleted.
- The exact XML format (required fields, date formats, weekday logic) is documented in the manual directly on the settings page as well as via a downloadable sample file.
- This configuration lives in the Settings area and is therefore reserved for administrative roles.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
