---
sidebar_position: 1
---

Under Settings > Scheduling Rules (Defaults) you define the values that are automatically pre-filled when a new contract or a new scheduling rule is created.

## How it works

This page bundles several groups of default values:

- **Working hours:** Daily working hours (target time), overtime threshold (hours/week), guaranteed, minimum, and maximum monthly hours, and the full-time hour count.
- **Scheduling rule thresholds:** Max. working days, min. rest days between two work blocks, min. free hours between two working days, max. optimal gap between shifts, max. daily/weekly hours, and max. consecutive working days — the same figures that an individual scheduling rule also defines.
- **Surcharges:** Night, holiday, Saturday, and Sunday surcharge in percent.
- **Default working days and weekend:** Which weekdays count as working days, whether shift work (early/late/night shifts) is practiced, which days count as weekend, and on which weekday the week starts.
- **Scheduling commands (keywords):** The text commands `FREE`, `EARLY`, `LATE`, `NIGHT`, as well as their negated counterparts `-FREE`, `-EARLY`, `-LATE`, `-NIGHT`, are configurable here. If a person types these words directly into a day cell in the schedule, Klacks doesn't treat it as a note but as a request: `FREE` means "avoid scheduling this person on this day if possible," `EARLY`/`LATE`/`NIGHT` prefer or force a specific shift type, and the negated variants exclude the opposite. Both auto-scheduling and the Harmonizer take these requests into account as a constraint.

## Good to know

- This page maintains **global default values** — changes only affect **newly** created contracts or scheduling rules, not retroactively existing ones.
- The scheduling rule thresholds here are identical to the ones you otherwise set individually per contract — here you're only setting the starting value that a new contract gets.
- The scheduling commands are hidden by default in the schedule and can be shown via a dedicated icon in the toolbar.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
