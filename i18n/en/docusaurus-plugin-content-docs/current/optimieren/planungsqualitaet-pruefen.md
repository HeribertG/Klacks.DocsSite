---
sidebar_position: 7
---

# Checking Schedule Quality: Violations, Gaps, and Skipped Placements

After a run of the scheduling assistants, Klacks puts three diagnostic tables next to the result: where the schedule runs into a rule, where a qualification is missing, and what never got planned at all.

## How it works

The three reports appear in the dialog of the respective scheduling assistant — not in the schedule grid. They belong to the result of an assistant run and are visible to administrators only, because automatic scheduling as a whole requires the admin role. Each report states its number of entries in the title and **is not shown at all when it found nothing** — so a missing box is good news.

**How to reach the dialogs:** the magic-wand button in the schedule runs a scheduling pass directly by default, without showing any dialog. With **Ctrl+Shift+H**, administrators switch the button into a dropdown listing the individual scheduling assistants (Plan, Fuzzy Harmonizer, Holistic Harmonizer, Background Optimizer, Recovery) — only through this dropdown do the dialogs with the diagnostic tables open.

**Qualification gaps** appear together with the result, i.e. *before* you apply it. Columns: severity, shift, date, required qualification, reason — plus an "Employee" column as soon as at least one row names a person. The reason reads *Not held*, *Expired*, or *Level too low*. Two different cases sit behind this: either a shift slot stayed empty because nobody available holds the required qualification — then the row names no person; or a person remained assigned to a shift they aren't qualified for — then their name is listed. If the qualification is merely missing from the system, record it on that person; the [Qualification Catalog](../einstellungen/stammdaten-organisation/qualifikationen.md) explains how qualifications are maintained. Otherwise, schedule someone else or adjust the shift's requirement.

**Compliance violations** appear *after* you have applied the result. Columns: date, employee, comment; the comment names the violated rule in plain language along with the actual values. Red rows are errors, yellow ones warnings and notices. For the two harmony assistants, the report shows exclusively what the new scenario introduces **on top of** the real schedule — and states above it how many of those violations are enforced as Block. Those prevent the scenario from being accepted until they are resolved or explicitly overridden by an authorized person.

**Skipped placements** exist only for the shift-scheduling assistant, likewise after applying — and are red throughout. Columns: date, employee, shift, reason. This table doesn't show what was scheduled, but what Klacks deliberately did **not** write: assignments that would have violated a rule enforced as Block. The reason appears as a short category ("Rest period too short", "Too many consecutive days", "Time collision", …). Depending on the situation, Klacks offers authorized people the option below to apply the run with an override after all; everyone else gets the hint to re-run the assistant with override enabled, or to ask an authorized person to do so. Every override is logged.

Which rules are checked, and how strictly they apply, is defined in the [Scheduling Rules](../planen/planungsregeln.md); how the schedule comes about in the first place is described in [Auto-Planning: A Schedule in Seconds](../planen/auto-planung.md).

## Good to know

- A blocked entry doesn't discard the whole schedule: only the affected assignments drop out, while the same person's clean entries still get written.
- A simple rule governs the severity of qualification gaps: **error** only when a qualification marked as mandatory is missing entirely. An expired qualification, an insufficient level, and any optional requirement show up as a **warning**.
- An empty shift slot only appears among the qualification gaps if genuinely nobody available was eligible. If it stayed empty for other reasons, that is ordinary under-coverage and is not reported here.
- When automatic scheduling runs as one combined pass, Klacks reports the result only as a brief notification including the number of qualification gaps — the detailed tables belong to the individual assistants' dialogs.
- The reports are pure views: they can't be edited and change nothing. Corrections happen in [The Schedule Grid: Your Interactive Time Matrix](../planen/plan-raster.md) or through another run.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
