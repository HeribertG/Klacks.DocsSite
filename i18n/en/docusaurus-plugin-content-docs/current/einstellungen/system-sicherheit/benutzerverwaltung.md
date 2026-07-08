---
sidebar_position: 1
---

# User Administration

Under Settings > User Administration you manage the **login accounts** (system users) that people use to sign in to Klacks — this is not the same as employee or address management, since a login account can, but doesn't have to, be linked to a person's master data record.

## How it works

**Adding a user:** The "+ Add user" dialog automatically generates a username suggestion from the first and last name (each at least 2 characters). The email address is required and must contain an @ sign; saving is only possible once all fields are validly filled in. A password is generated automatically when the account is created — so the person can set their own, use "Reset password" in their row afterward.

**Editing a user:** Double-clicking the name row opens the edit dialog. There, the username can be changed afterward — at creation, it's only a suggestion.

**Resetting a password:** The "Reset password" link in a user's row sends an email to the stored address, through which the person sets a new password themselves.

**Deleting a user:** The trash button permanently removes a login account, after confirmation in the delete dialog.

**Assigning permissions:** Via a dropdown in the row, you assign **Supervisor** or **Admin**; the change takes effect immediately, with no separate save click. What these two roles are specifically allowed to do is described under "Roles and Permissions" in Getting Started — this page is only about managing the accounts themselves.

## Good to know

- The currently logged-in user is shown in the list too, but cannot edit themselves, change their own permissions, or delete themselves there.
- A login account is independent of person/employee management — you can, for example, create an account for an external IT company without creating an employee record for it.
- There is no direct password-setting by the admin: new accounts get an automatically generated password, and every later change goes through the "Reset password" email link.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
