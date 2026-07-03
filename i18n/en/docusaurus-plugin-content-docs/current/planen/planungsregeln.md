---
sidebar_position: 5
---

Scheduling rules define the framework for automatic shift planning — working hours, rest periods, and capacities that Klacks respects when distributing shifts.

## How it works

A scheduling rule is assigned to a **contract**. The limits it defines then apply to all employees with that contract. Each rule covers four areas:

**Working days & rest periods**
- Max. working days per week
- Min. rest days between two work blocks
- Min. free hours between two working days (rest period from the end of one working day to the start of the next)
- Max. optimal gap between shifts in hours
- Max. consecutive working days without a rest day

**Hour limits**
- Max. daily hours and max. weekly hours
- Daily working hours (target hours)
- Overtime threshold: hours beyond this weekly total count as overtime

**Monthly hours**
- Guaranteed hours (minimum number of hours guaranteed to the employee per month)
- Minimum and maximum hours per month
- Full-time hours (monthly hours that correspond to full-time employment)

**Vacation**
- Vacation days per calendar year

## Good to know

- When you create a new rule, the **default values from the settings** (Scheduling Rules — Defaults) are applied automatically; you can then adjust each value individually.
- Scheduling rules take effect through the contract — you don't have to maintain them per person. If a rule changes, it affects all employees with that contract.
- The overtime threshold and the target hours are two different things: target hours are the daily standard, the overtime threshold is the weekly cutoff.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
