---
sidebar_position: 4
---

# Roles and Permissions

Klacks has exactly two assignable permission levels for login accounts: **Supervisor** and **Admin**. There is no third, technically distinct role — terms like "Planner" described below denote a **function in day-to-day work**, not an additional permission level.

## The two real roles

**Supervisor** may create, edit, and delete addresses, groups, contracts, absences, and shifts, and may approve a day or a group in the schedule as well as withdraw that approval again. Simply confirming individual working times, on the other hand, doesn't require any special role — any login account can do that.

**Admin** may do everything a Supervisor can, plus: access to all settings (including user administration itself), closing and reopening periods, and managing specially protected areas such as identity providers, reports, and calendar rules.

Assignment happens via a dropdown in user administration (gear icon) and takes effect immediately, without a separate save click.

## "Planner" as a function, not a role

In everyday operations, it's usually a Supervisor account that does the actual planning work — triggering auto-scheduling, adjusting the schedule grid via drag and drop, submitting days or groups for approval. This is not a separate permission level, simply the rights a Supervisor account already has.

## Good to know

- The currently logged-in user is also shown in user administration, but cannot be edited, have their permissions changed, or be deleted there.
- Permanently closing or reopening periods remains exclusively reserved for Admin — even if a Supervisor has already approved days or groups.
- A login account doesn't need to be linked to an employee master data record — user administration and people management are separate areas.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
