---
sidebar_position: 3
---

# Data Retention

Under Settings > Data Retention you set how long deleted records — employees, addresses, groups, shifts, working hours, absences, breaks, and more — remain in the system before they are permanently removed.

## How it works

**Two-stage deletion:** When you delete a record in Klacks, it is initially only given a soft-delete flag (marked as deleted, but still physically present). Only after the retention period configured here has elapsed does a daily background service remove the rows marked as deleted **physically and irrevocably** from the database — across all affected tables, not just for a single area.

**Setting the retention period:** The input field accepts values between 30 and 36,500 days (roughly 1 month to 100 years); alongside it, Klacks also shows the period in years/months. The default value is 3,650 days (10 years).

## Good to know

- Shortening the period also affects existing records that were already deleted long ago: anything older than the new period is removed on the next run of the background service — check whether this is intended before shortening it.
- Physical deletion is final — there is no restoring it afterward, not even by support.
- This setting is the technical foundation for the deletion periods described in the privacy policy; it applies globally to all soft-delete-capable data types and is not configurable per module.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
