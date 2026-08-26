---
sidebar_position: 8
---

# The Life Cycle of a Shift: From Order to Segment

Before a shift can be staffed at all, it passes through four stages — from the freely editable order, via the immutable sealed order, to the plannable shift and its segments. The point of it: what was agreed stays readable for good, while what daily business replans afterwards stays movable.

## How it works

**1. Order — freely editable.** Every new shift starts here. On the services page, the button **+ New Order** opens the entry form; you rework the order as often as you like, every field is open. It does not show up in the schedule yet — which also means nobody can be scheduled on it. It is not a mere draft, though: it is a real order, just not sealed yet. In the shift list, Klacks files this stage under **Orders**. Switch to **Plannable Services** and the button reads **+ New Service**: it creates an order with no client attached — for general work that nobody orders or pays for from outside. The *Address* card then disappears; this shift runs through the same four stages.

**2. Sealed order — immutable.** Once the order is settled, you seal it with the lock button on the *General* card. From that moment it is locked and remains permanently as the binding record of what was agreed — long after day-to-day operations have replanned the shift. Once saved, this is **irreversible**. Which orders have already reached this stage is shown by the checkbox **Show Only Sealed Orders** in the shift list.

**3. Plannable shift — this is where planning happens.** Sealing creates, in the same move and exactly once, the plannable shift: a copy linked to the order. Only this shift appears in [The Schedule Grid: Your Interactive Time Matrix](../planen/plan-raster.md), only on it can people be scheduled — and it stays editable. Saving it again later does not create a second copy. In the shift list you find it under **Plannable Services**.

**4. Segments — the shift, cut.** A plannable shift can be cut, for instance by days or by time slots. The existing shift becomes one of the segments itself, the others appear alongside it. All segments are plannable in turn and then carry the actual staffing. The sealed order is untouched by all of this — it stays the contract in the background.

**When the lock button becomes active:** it stays greyed out until the order is complete enough for planning — abbreviation, name, and from-date filled in, at least one weekday and at least one group selected, and both the number of tasks and the number of employees per shift greater than zero. Its tooltip puts it plainly: "After locking, the order is immutable and ready for planning."

**The one exception to immutability:** if a sealed order has no until-date — because the order keeps getting extended, say, or because its end is still open — you may still set that single field afterwards. The condition: no shifts may already be planned from the chosen date onwards. After that, this field is locked like all the others.

**An example:** on 1 May you create the order "Müller Wedding" and refine it over two days. On 3 May the client confirms — you seal it. Klacks fixes the order in place and creates the plannable shift alongside it. On 4 May scheduling puts two people on it; on 5 May the shift is cut into two segments. On 1 June the period is closed and the entries on the segments are locked. Through all of that, the sealed order from 3 May was never changed.

**The cards of the entry form.** The form is made up of cards you expand and collapse individually; saving and discarding happen via the save bar at the bottom of the workspace. Some of the cards only appear once you turn on the **Expert Mode** switch on the *General* card:

- **General** — abbreviation (6 characters at most; Klacks suggests it automatically while you type the name), name, from-date and until-date, plus notes. This is also where the lock button and the expert mode switch live.
- **Group** — assigns the shift to one or more groups. At least one group is mandatory; as long as none is selected, an info box says so.
- **Required Qualifications** — which [qualifications](../einstellungen/stammdaten-organisation/qualifikationen.md) the shift demands, each with a minimum level (Low through Expert) and whether it is mandatory.
- **Hours and Weekdays** — from-time, until-time, and duration, plus the weekdays the shift falls on and two public-holiday rules. In expert mode you can instead run the shift as a time range: it then sits flexibly inside the window between from-time and until-time, and the duration you entered is what counts.
- **Macro** (expert mode) — links the shift to a [macro](../einstellungen/klacksy-konfiguration/makros.md) for duration and pay calculation.
- **Address** — the client, meaning the place of work, searched by name or ID number. The filter column on the right narrows exactly that search.
- **Special Features** (expert mode) — sporadic use with its periodicity, briefing and debriefing, travel time before and after, and the number of employees and tasks per shift.
- **Default Expenses** (expert mode) — expenses that regularly come with this shift, each with a description, an amount, and whether it is taxable.

How the plannable shifts are then staffed is covered by [Auto-Planning: A Schedule in Seconds](../planen/auto-planung.md) and [The Schedule Grid: Your Interactive Time Matrix](../planen/plan-raster.md).

## Good to know

- **Sealing means something different here than in the approval workflow.** Sealing an order freezes the *description* of the shift — what is to be done, permanently. The [Approval Workflow: From Draft to Binding Schedule](../planen/freigabe-workflow.md) and [period closing](../planen/periodenabschluss.md), by contrast, lock the *entries on specific days*. The two run independently of each other.
- **Orders also arise automatically.** Besides the entry form, the [ERP import](../einstellungen/kommunikation-integration/erp-uebernahmepunkte.md) is the second route: orders coming from there also land as unsealed orders first and have to be checked and sealed.
- **A forgotten order speaks up.** If an order is still unsealed shortly before it starts, [Klacksy as a Proactive Team Member](../ki/klacksy-proaktiv.md) flags it with the finding type "Open order" — because unsealed means: not plannable.
- **Container shifts work a little differently.** A container is a shell that bundles several partial shifts; it therefore has neither client nor address, and the *Address* and *Default Expenses* cards fall away. The *Special Features* card shows only the sporadic-use option for it. The checkbox "Is a container" sits on the *General* card in expert mode, and it can only be ticked while the order is still unsealed.
- **Sporadic shifts and time-range shifts are not counted.** Neither appears in the shift bar of the [Resource Monitor](../optimieren/ressourcen-monitor.md), by design, because they do not represent a fixed daily demand.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
