---
sidebar_position: 7
---

# Overtime

Under Settings > Compliance & Surcharge Rules (expert mode) > Overtime you set from how many accumulated hours extra work becomes subject to a surcharge, and how high the surcharge is for each tier.

## How it works

**Calculation basis:** Daily or Weekly — there is nothing else. A monthly or yearly basis does not exist. With "Weekly", the week starts on the configured first day of the week.

**Up to three tiers:** Each tier consists of two fields — "Tier X after hours" (the accumulated hours in the day or week from which this tier applies) and "Tier X rate" in percent. The highest configured tier is open-ended upwards, with no ceiling.

**Each tier only counts the hours that fall inside its own span**, not all hours from zero. If tier 1 starts at 8 hours and tier 2 at 10 hours, a ten-and-a-half-hour day pays the tier 1 rate for the two hours between 8 and 10, and the tier 2 rate only for the half hour above 10 — never the tier 2 rate for all ten and a half hours. A single stretch of work can therefore produce several surcharge entries, one per tier it reaches into.

**An incomplete tier is silently skipped:** if the "after hours" value is missing, or the rate is zero or negative, that tier does not count. So anywhere from zero to three tiers can actually be live.

**The rate is the surcharge portion, not the total amount:** 25% means a quarter of an hour extra per hour worked in that tier — it does not mean the hour is paid at a factor of 1.25. The rate mode beside it (Multiplier or Fixed per hour) only determines the unit; the underlying arithmetic stays the same.

**What counts as hours already worked:** the tiers are filled from the hours worked earlier the same day or in the same week — sorted first by date, then by start time. That way each stretch of work occupies its own position within the span, and no hour is counted twice into a higher tier. When an earlier entry changes, the later ones are recalculated.

**Where the values come from:** this card supplies the company-wide values — they apply only when no other source takes precedence. If the person's contract has a [scheduling rule](../../planen/planungsregeln.md) with its own overtime tiers assigned, that rule takes priority; a later revision of that rule, valid for the date in question, replaces the whole set when needed, but falls back to the company settings shown here — not to the scheduling rule — if it has no overtime block of its own. If no tier is configured anywhere, only the **overtime threshold** from the scheduling rule serves as a last-resort fallback — and only as the starting hour of the first tier, never as a rate. Sources are never mixed: whichever one supplies the first tier supplies all of them.

**Two conditions without which no surcharge is ever produced:**

- The shift needs a calculation macro. Work on a shift without one is never examined for overtime at all.
- At least one complete tier must be configured. Without one, the result isn't "zero overtime" — no examination happens at all.

**Excluded:** corrections and stand-ins are never examined for overtime — only regular work is considered.

**Meeting other surcharges on the same hour:** the same hour can qualify both for overtime and for a circumstance-based surcharge, such as night or weekend work. Whether the two are added together or only the higher one applies isn't decided by this card — it's decided by the calculation macro of that shift.

**Saving:** this card lives in the Compliance & Surcharge Rules section of the settings page (alongside Compensatory Rest, Surcharge Mode, and Compliance Enforcement), visible only in expert mode. Changes are collected and saved or discarded via the settings page's shared save bar — there is no dedicated save button on this card.

## Good to know

- This card covers only the automatic overtime tiering based on a daily or weekly threshold. Surcharges for night, Sunday, or public-holiday work are instead calculated generically via script — see [Macros](../klacksy-konfiguration/makros.md).
- A tier with no "after hours" value, or with a rate of 0% or less, is ignored — this lets you deactivate individual tiers without deleting them.
- Without at least one complete tier and without a calculation macro on the shift, no overtime surcharges are ever produced, even for very long shifts.
- A scheduling rule with its own overtime tiers replaces these company-wide values entirely, not just individual tiers.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
