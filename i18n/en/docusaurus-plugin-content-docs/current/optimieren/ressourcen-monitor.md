---
sidebar_position: 3
---

The Resource Monitor shows at a glance how staff utilization stands for a group (or all groups) in the selected year — one bar per day, 365 days for the full year's picture.

## How it works

The visualization follows the "Capacity vs. Workload Chart" established in workforce planning (known in project-management literature as the "Resource Histogram"). The elements:

- **Green bars — shifts:** Number of shifts planned on that day. Each shift counts as one employee position; container shifts count as 1.
- **Gray bars — absences:** Number of absent employees, stacked on top of the green bars. A full vacation or sick-leave entry counts as 1, a half-day as 0.5 — including on weekends.
- **Pink dotted line — desired readiness:** How many employees would be available on average if the desired working days per week are observed (default: 5 days of work, 2 days of rest). This is the planning target.
- **Red dashed line — maximum readiness:** The physical/legal maximum at the maximum permitted consecutive working days (default: 6). Always sits at or above the pink line.
- **Blue line — number of employees:** The total workforce with an active contract on that day (headcount).

**How to read it:** When the top edge of the green bars approaches the pink line, the workforce is optimally deployed. The gap between the blue line and the top of the stacked bars is your reserve.

Use the arrow buttons at the top right to switch years; use the group selector to narrow down to a location or team.

## Good to know

- Rule of thumb: the top edge of the gray absence bars should not take up more than a third of the gap between shifts and total workforce — otherwise your operational reserve is at risk, and sickness or vacation peaks become hard to cover.
- The values are estimates and approximations, not exact accounting — they give you a sense of availability.
- The shifts come from the plan, not from actuals — which is why future shifts are visible too.
- With a 24/7 contract, the pink line is smoothed across the week (approx. 0.71 per person per calendar day); with a Mon–Fri contract it sits at 1.0 on weekdays and 0 on weekends.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
