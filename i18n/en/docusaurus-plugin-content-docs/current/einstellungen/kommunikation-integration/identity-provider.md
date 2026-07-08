---
sidebar_position: 4
---

Under Settings > Identity Provider you connect Klacks to an external directory service — LDAP/Active Directory or OAuth2/OpenID Connect — to automatically import employees and/or handle login through it.

## How it works

**LDAP/Active Directory:** You provide host, port (389/636), SSL, base DN, bind DN, bind password, and a user filter. A "Use for client import" toggle enables automatic import: last name, first name, title, company, and address are taken from the directory attributes — with OpenLDAP and Active Directory sometimes using different attribute names (e.g. `uid` vs. `sAMAccountName`, `street` vs. `streetAddress`). These field mappings are hardwired in the backend and cannot be edited through the UI.

**OAuth2/OpenID Connect:** Client ID, client secret, optionally tenant ID (Azure), authorization, token, and UserInfo URL, as well as scopes — for logging in via Google, Microsoft, or GitHub.

**Testing and syncing the connection:** For LDAP/AD providers, "Test connection" shows the number of users found, including sample usernames. If client import is enabled, "Sync now" triggers a manual sync; the result (processed/new/updated/disabled) appears right afterward as a message on the page.

## Good to know

- This page is accessible **only to administrators**, not to the supervisor role.
- Bind password and client secret are stored encrypted and shown masked (`***`) in the UI; saving without a change keeps the existing value.
- A persistent sync log (history, error history) is currently **not** shown in the UI — only the result of the most recent manual run.
- People no longer found in the directory are not deleted during sync, but are deactivated via their membership's end date; if they reappear later, they are automatically reactivated.
- An external identifier from the directory (LDAP ObjectGUID, or the distinguished name as a fallback) prevents duplicates: if the same identifier is found again during a repeat sync, the existing person is updated instead of created anew.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
