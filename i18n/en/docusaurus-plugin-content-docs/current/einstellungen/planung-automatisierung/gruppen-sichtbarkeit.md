---
sidebar_position: 5
---

Under Settings > Group Visibility per User you define which groups — and thus which associated data — an individual user is allowed to see.

## How it works

The list shows all users with their names and the number of root groups assigned (visible) to them. Clicking the number opens a form with a checkbox list of all root groups; here you mark which groups this user is allowed to see. When a root group is granted, that automatically applies to all its subgroups as well.

Administrators are exempt from this restriction: for them the button is disabled, and the number shown always equals the total count of all root groups — admins fundamentally see everything.

## Good to know

- For a regular (non-admin) user with no assignment at all, "0 assigned groups" means: this user currently sees **nothing** in group-scoped areas (e.g. dashboard, client list) — this is not a malfunction, but the direct consequence of the missing assignment.
- Exception: if there are currently **no** groups at all in the system, every user sees everything — installations without a group structure therefore don't need to maintain this setting.
- Set up your group structure under master data first, before making assignments here — without existing groups, there's nothing to check off here.
- This setting controls the **visibility** of data, not the underlying **permissions** of a role — roles/permissions are managed independently of this.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
