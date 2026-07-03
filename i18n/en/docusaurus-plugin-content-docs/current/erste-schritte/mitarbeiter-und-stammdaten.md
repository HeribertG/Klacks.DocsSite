---
sidebar_position: 3
---

Address and people management is the heart of your master data: employees, clients, and external contacts with addresses, contact details, contracts, group membership, and qualifications — accessible via the people icon in the navigation.

## How it works

**Creating employees:** Required fields are first name, last name, and gender (Mr/Ms/Diverse). Optionally you can record date of birth, email, phone, address (street, postal code, city, canton, country), and group/department. Alternatively, you can leave the creation to the assistant Klacksy ("create an employee ...").

**Status:** Every person has one of three statuses — *Active* (schedulable), *Inactive* (temporarily unavailable), or *Departed* (has left the company).

**Groups and departments:** Employees can be assigned to groups. The structure is hierarchical (e.g. `Klacks AG > IT > Development`), multiple assignments are allowed, and permissions can be managed at the group level.

**Contracts:** Each person can have multiple contracts — with different workloads (e.g. 80%, 100%), fixed-term or open-ended, and varying by canton.

**Import:** Bring in existing data via CSV file (columns: `Vorname;Nachname;Email;Geburtsdatum;Strasse;PLZ;Ort`) or automatically via LDAP/Active Directory synchronization through an identity provider.

**Search and filter:** The search finds people by name, email, employee number, or group; you can also filter by canton, status, group, and contract type.

## Good to know

- Only people with status *Active* can be scheduled — check the status if someone doesn't show up in the schedule.
- Multiple contracts per person are perfectly normal, for instance after a change in workload — there's no need to create a second person.
- Set up your group structure first, then assign people to it — that way group-level permissions apply from day one.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
