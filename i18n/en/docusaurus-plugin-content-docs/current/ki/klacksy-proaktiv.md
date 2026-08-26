---
sidebar_position: 8
---

# Klacksy as a Proactive Team Member

Klacksy doesn't wait to be asked. Once an hour it reviews your operation in the background and reports what it notices: unstaffed shifts, expiring contracts, overdue periods, missing core data. How far it may go is set by administrators for each finding type individually — out of the box it only reports and never acts on its own.

Not to be confused with [Autonomy Levels](../einstellungen/klacksy-konfiguration/autonomie-stufen.md): those govern how much confirmation Klacksy needs when **you** ask it for something in the chat. This page is about the opposite — what it does **unprompted**.

## How it works

**What a finding is:** A finding is an observation Klacksy made on its own — for example "this shift is still unstaffed three days from now" or "this billing period has been overdue for a week". A background pass runs hourly across about a dozen check rules. The detection itself is hard-coded: no language model decides whether something counts as a finding — the same rule gives the same result, regardless of which AI provider you use.

**Fourteen finding types can be governed,** among them Unstaffed shift, Gap in availability, Expiring contract, Missing core data, Open order, Period close due, Overdue period, Drift from target hours, Empty container, Lock conflict, and Pending scenario. Two of them don't come from the hourly pass but from the ERP order import.

**The three steps — per finding type:** Under Settings > Klacksy > "Klacksy Scope of Action" (expert mode, administrators only), every finding type gets its own row with the column "Highest step":

- **Report only** — Klacksy tells you, nothing more. This is the factory setting for every finding type.
- **Prepare a scenario** — Klacksy additionally lays a ready-made solution alongside it as a scenario, which a human only has to accept.
- **Carry out** — Klacksy fixes the finding itself and reports on it afterwards.

From "Prepare a scenario" upwards, an accountable person must be named: the action runs under their rights, and they receive the report. Each row also carries budgets limiting how often Klacksy may act (out of the box at most 5 actions per day and 3 within 60 minutes), plus an "Active" switch. That switch governs self-directed action only — whether and how a message reaches you stays your personal notification setting.

**The hard limit in the program:** A higher step only takes effect where an automatic fix actually exists for that finding type. Where none exists, it stays at reporting — regardless of the setting, and even when someone delegates the individual finding to Klacksy. This limit sits in the program code and cannot be opened from the user interface. At present exactly one fix is in place: for the finding type "Empty container", Klacksy can create the missing slot template itself.

**Where findings surface:** A counter on the Klacksy button in the header shows unread notes. Clicking it opens the side panel, where findings are collected under the heading "While you were away…". Each message offers "Show me" (jumps to the affected spot), "Helpful", and "Dismiss" — the latter optionally with a reason ("I never want hints like this", "This hint was wrong this time", "Already taken care of") or without one. Where permitted, there is also "You do it": a one-off grant that raises this single finding to "Prepare a scenario". You can also just ask Klacksy in the chat which findings are currently open.

**Once a finding is resolved:** the affected row carries the marker "Resolved by Klacksy on …" in the container view of the shift list — both when Klacksy carried out the fix itself and when a person released a scenario Klacksy had prepared. If Klacksy carries it out itself, a report additionally goes to the accountable person.

**The emergency stop:** Above the chat, administrators see the switch "Klacksy acts autonomously: ON/OFF". Turning it off immediately resets every finding type to report only — including one-off grants already issued. The notes themselves don't stop: the emergency stop halts acting, not reporting. The same switch is also part of the settings card.

## Good to know

- Out of the box every finding type is set to "Report only" — Klacksy acts only once an administrator deliberately raises a step. The emergency stop isn't needed for that: it is off by default and stays in reserve as an instant brake.
- Messages go only to administrators and authorised planners. Anyone limited to certain groups receives findings from those groups only; administrators see everything. Planners receive the findings but cannot see the step configuration.
- The step "Prepare a scenario" applies only to fixes that can be expressed as a scenario. The fix available today is not one of them — for it, only "Carry out" has any effect.
- The settings card and the autonomy switch require administrator rights; without them the autonomy state cannot be viewed.
- The hourly rhythm is built in and not adjustable from the user interface; the first pass starts two minutes after the program launches.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
