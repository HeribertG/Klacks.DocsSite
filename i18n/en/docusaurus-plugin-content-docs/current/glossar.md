---
sidebar_position: 8
---
# Glossary

The terms that come up again and again in Klacks and in this documentation — brief, and in the order in which you will meet them.

## Planning

**Employee row**
The smallest plannable unit. Not the person and not the day, but one person's row in a specific schedule sheet. All planned values hang on this row.

**Schedule sheet**
A container that collects **references** to employee rows — not copies. That is why a person exists only once, no matter how many sub-schedules they appear in, and a change is visible everywhere immediately. The basis of [modular planning](../planen/modulare-planung/).

**Auto-Planning**
The assistant fills a schedule according to your rules. The calculation runs in the background while you keep working — see [Auto-Planning](../planen/auto-planung/).

**Availability**
When a person is ready for work — down to the hour or the day, for your own and for external staff. See the [Availability Grid](../planen/verfuegbarkeits-raster/).

**Order (assignment)**
A sketch of an assignment that can still be edited. An order is **not yet plannable**.

**Sealing**
The one-time, **irreversible** step that turns an order into a plannable shift. In the same move, the plannable counterpart of the order is created. Creating a plannable shift directly does not exist in Klacks — every shift comes into being through sealing. See [The Life Cycle of a Shift](../planen/schicht-lebenszyklus/).

**Shift (service)**
The plannable, sealed assignment. The term “service” means the same thing.

**Approval stages (shift schedule)**
The shift schedule passes through four states in a fixed order: **draft → confirmed → approved → closed**. Any logged-in account may confirm; only Supervisor and Admin may approve; closing is reserved exclusively for Admin. See [Approval Workflow](../planen/freigabe-workflow/).

**Period / period closing**
The accounting period (weekly, biweekly, monthly, or custom; defined via the payment interval). Closing makes a period binding and remains reserved for Admin — see [Period Closing](../planen/periodenabschluss/).

**Absence — two things, one word**
In the master data area, “absence” refers to the **catalog of absence types** (name, color, default length, default value). The bars in the calendar, by contrast, are either a **wish** (a planned absence, freely movable and without a lock level) or a **booked absence** (taken over from the deployment schedule, read-only on the Absences page and with a lock level). Anyone who mixes the two up will look in the wrong place.

## AI Assistant

**Klacksy**
The AI assistant of Klacks. It plans, explains, and carries out tasks — with a freely selectable model. See [Klacksy](../ki/klacksy-ki-assistent/).

**Skill**
A single, self-contained capability of Klacksy — a declarative wrapper around concrete program logic (“search employee”, “assign contract”, “create report”). Klacksy picks the matching skills at runtime.

**Autonomy level**
How far Klacksy may go without asking back:

| Level | Name | Behavior |
|---|---|---|
| 0 | Propose | Every write action needs your confirmation |
| 1 | Assisted | Reversible actions run freely; final and sensitive ones ask first |
| 2 | Autonomous (default) | Everything except the actions classified as sensitive runs freely |
| 3 | Fully autonomous | Even final steps run through |

Sensitive actions — such as deleting users or changing permissions — ask for confirmation at **every** level. See [Autonomy Levels](../einstellungen/klacksy-konfiguration/autonomie-stufen/).

## Roles and Operations

**Admin / Supervisor / Planner**
The three access levels. Admin may do everything, Supervisor may create and edit, and an account without a role is a Planner. The overview is under [Roles and Permissions](../erste-schritte/rollen-und-rechte/).

**Country profile**
A prepared set of settings for a country: language, time zone, public holiday calendar, weekend and week start, working time limits, vacation entitlement, surcharges, default payroll export, and industry templates. It is chosen at installation via `REGION`.

**Playground**
The public test instance at [play.klacks-software.ch](https://play.klacks-software.ch) with demo data — explicitly for trying things out, without real personal data. See [Installation and Playground](../erste-schritte/installation-und-playground/).

**On-premise**
Operation on your own infrastructure: your hardware, your database, your data. The counterpart of the hosted variant.

**Update service**
The bundled service that installs signed updates — with a backup beforehand and automatic rollback if problems occur. See [Updates and Rollback](../betrieb/updates-und-rollback/).

**Data protection**
Klacks does not phone home: there is no reporting of your data back to the manufacturer. For data that is actually meant to be deleted, [Data Retention](../einstellungen/system-sicherheit/datenaufbewahrung/) takes care of it — deletions are physically removed once the retention period has expired.

---

*A term missing or explained wrongly? [Klacks community on Discord](https://discord.gg/YRP8p2abVC).*
