---
sidebar_position: 6
---

Under Settings > Organization > Contracts you manage the freely definable contract templates, which you then assign to individual employees — not to be confused with the actual assignment to a person (more on that under "Employees and Master Data" in Getting Started).

## How it works

**Creating a contract:** "+ New contract" opens a modal. Name and valid-from date are required.

**Hours configuration:** Guaranteed hours, minimum hours, maximum hours, and full-time hours, each as an hours:minutes value. The minimum hours must not exceed the maximum, and the guaranteed hours must not exceed the maximum — negative values are not allowed for any of the three.

**Surcharges:** Night, holiday, Saturday, and Sunday surcharge in percent (0–100), independent of the company-wide default settings under Scheduling Basics.

**Working days:** Checkboxes for Monday through Sunday determine on which weekdays this contract generally schedules work.

**Shift work:** A toggle marks contracts for employees on early/late/night shifts.

**Validity period:** Valid from (required) and optionally valid until — so a contract can be either time-limited or open-ended.

**Payment interval:** Weekly, Biweekly, Monthly, or Custom.

**Calendar selection:** Each contract can be assigned its own holiday calendar, which can differ from the global calendar under Head Office Address — this lets you map, for instance, cantonally different public holidays.

**Scheduling rule:** Optionally, an existing scheduling rule can be assigned.

**Searching, editing, and deleting:** A search field filters the list by contract name; clicking an entry opens the edit modal, and the trash icon deletes the template (with a confirmation prompt).

**Saving:** Every change is persisted immediately when saved in the modal — there is no shared save bar.

## Good to know

- A contract template is initially just a template — only assigning it to a person (via person management) makes it effective. Multiple people can use the same template, for example "Bern Full-Time 180 hrs" for all full-time staff at the Bern location.
- By default, Monday through Friday are pre-set as working days, Saturday and Sunday are not — this can be adjusted per template.
- The calendar selection per contract is optional — leave it empty and no contract-specific calendar is stored.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
