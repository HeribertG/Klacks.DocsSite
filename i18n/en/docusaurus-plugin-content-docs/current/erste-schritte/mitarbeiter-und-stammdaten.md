---
sidebar_position: 3
---

Address and people management is the heart of your master data: employees, clients, and external contacts with addresses, contact details, contracts, group membership, and qualifications — accessible via the people icon in the navigation.

## How it works

**Creating employees:** Required fields are first name, last name, and gender (Female/Male/Intersex/Legal entity). Optionally you can record date of birth, email, phone, address (street, postal code, city, canton, country), and group/department. Alternatively, you can leave the creation to the assistant Klacksy ("create an employee ...").

**Status:** The status is derived automatically from the membership's start and end date — there is no manual status field. Klacks distinguishes *Active* (membership currently running), *Former* (end date lies in the past), and *Future* (start date is still ahead).

**Groups and departments:** Employees can be assigned to groups. The structure is hierarchical (e.g. `Klacks AG > IT > Development`), multiple assignments are allowed, and permissions can be managed at the group level.

**Contracts:** Each person can have multiple contracts, for example after a change in workload. The contract templates themselves are freely definable: under Settings > Contracts you create your own contracts with a name, workload percentage, target/maximum/minimum hours, surcharges (night, Sunday, and public holiday), and payment interval; each contract can additionally be assigned its own holiday calendar, which lets you map, for instance, cantonally different public holidays. Every contract is either time-limited or open-ended.

**Import:** There is no CSV import for master data. Existing directories are taken over automatically via LDAP/Active Directory synchronization through an identity provider; individual people are created manually or via Klacksy.

**Search and filter:** The free-text search finds people by last name, first name, company, or employee number, as well as by phone number/postal code; you can additionally filter by canton, status (Active/Former/Future), and group.

## Good to know

- Only *Active* people can be scheduled — check the membership's start/end date if someone doesn't show up in the schedule.
- Multiple contracts per person are normal, for instance after a change in workload — there's no need to create a second person for that. You create new contract templates (workload, surcharges, calendar) yourself under Settings > Contracts.
- Set up your group structure first, then assign people to it — that way group-level permissions apply from day one.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
