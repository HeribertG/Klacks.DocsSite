---
sidebar_position: 8
---

# Escalation and On-Call

Someone drops out and the shift starts in a few hours. Klacks doesn't wake the whole team at random — it works through a stored call list, one person at a time, until somebody takes over.

## How it works

- **The chain starts when you cover an absence**: for every affected day on which the absent person had a shift, Klacks creates its own escalation — tied to exactly that shift (see [Absences at a Glance](./absenzen-im-blick.md)).
- **You set up the call list once**: under Settings > Escalation Call List you'll find every user who has group visibility and a phone number on file. You set the order by drag & drop and it is saved immediately — one order for the entire operation.
- **Who actually gets called is decided in the moment**: from your order, Klacks takes the people with visibility on the parent group, skips anyone currently recorded as absent, and appends the administrators at the end as a safety net.
- **Notifications go out through several channels**: the request always lands in the Klacks inbox, appears instantly in the app for anyone signed in, and additionally goes out through the connected messenger — because at 3 a.m. nobody is sitting in front of an open browser. The messenger connection and the chain's automatic progression are enabled per installation.
- **One word is enough to accept**: whoever is currently being asked replies briefly in the messenger ("I'll take it"); administrators can instead use *Take over* on the *Running escalations* page. The person who accepts then gets a confirmation, everyone asked earlier a quiet note — nobody is woken a second time.

## Good to know

- The deadline is not the shift start itself but a lead time before it (two hours by default) — so whoever takes over still has time to get going.
- How long a stage gets is calculated by Klacks from the remaining time: the closer the shift, the shorter the rounds. If there's no longer enough time to go one by one, Klacks asks everyone remaining at once.
- On the *Running escalations* page you see the state of every stage — pending, asked, taken over, no reply, skipped or cancelled. While an escalation is running, a warning symbol also appears in the header.
- The call list and the overview are reserved for administrators (see [Roles and Permissions](../erste-schritte/rollen-und-rechte.md)). Administrators may cancel a running escalation — with a reason, so that it stays traceable later why the chain was stopped.
- Anyone without a phone number in their user account doesn't appear in the call list at all. The messenger request additionally requires a paired messenger contact. On-call absences are managed directly in that same list: from–until, with an optional reason, permanently if you like.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
