---
sidebar_position: 7
---

# Payroll Export Handover

When a group-scoped period is sealed, Klacks can automatically hand its payroll figures off to an external payroll system. This page explains what that requires and why the handover sometimes seemingly delivers nothing — the most common support case around this feature.

## How it works

**Requirement: a payroll export add-on.** The automatic handover to a payroll system is not a core feature — it requires a separate add-on that must be installed **and** active under Settings > Feature Plugins. If the add-on is missing or only disabled, the handover produces absolutely nothing: no file, no notice, no record you can see. That is stricter than a disabled export format in the export settings, which at least leaves a record in the server log — here there isn't even that.

**One-time handover (idempotency).** The automatic handover runs only once per combination of group, target system and exact date range — this prevents the same payroll figures from accidentally reaching the payroll system twice. If you reopen an already sealed period, correct something and seal it again, the second handover is skipped without comment: a handover record already exists for that exact combination, and reopening does not remove it.

**A manual download counts the same way.** A manual, on-demand payroll download for the same group/target system/date range creates the same kind of record as an automatic handover. A manual download performed before the automatic handover "uses up" that handover for the affected period, just as an earlier automatic one would.

| Why did nothing (new) arrive? | Record exists? | Blocks a later manual download? |
|---|---|---|
| Add-on not installed/active | no | no |
| Already handed over for this exact combination | yes (visible in the "Log" tab of the period closing) | no |

**Two precision points:**

- A manual download picks up **no** export-format correction that support may have set — it always uses the defaults, even when an active correction for the target system would apply on the automatic path.
- The one-time lock is exact: it only fires on an identical group, identical target system and identical start/end date. A different date range or a different target system is not blocked by an earlier handover.

**If nothing arrives after sealing, or corrected figures need to be forwarded:** First check whether the matching add-on is installed and active under Settings > Feature Plugins. After reopening and correcting, the reliable way to get corrected figures into the payroll system is the **manual export** in the period closing area (the "Exports" tab) — it is subject to neither the add-on gate nor the one-time lock of the automatic handover. Since it also does not pick up an export-format correction, check the exported figures by hand against any active correction in that case.

## Good to know

- Every handover requires a sealed, group-scoped period — how a period is sealed is described on the [Period Closing](../../planen/periodenabschluss.md) page. Sealing and reopening there are reserved for administrative roles.
- This page describes the **export** of payroll data from Klacks to a payroll system. The reverse flow — the **import** of orders from an ERP system into Klacks — is described by [ERP Drop Points](./erp-uebernahmepunkte.md).
- Add-ons are managed centrally under Settings > Feature Plugins: install, activate/deactivate, or remove entirely.
- A deactivated add-on stays installed but blocks the automatic handover just as completely as one that is not installed.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
