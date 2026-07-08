---
sidebar_position: 1
---

# Tour and Route Optimization

For mobile assignments — home-care tours, security patrols, cleaning sites, deliveries — Klacks plans not just *who*, but also *in what order*.

## How it works

Every work location is stored with its address, so Klacks knows the distances. An **ant colony algorithm** (a proven optimization technique for routing problems) computes the most sensible order from the assignment addresses:

1. **Record the addresses** — enter them once for each work location
2. **Optimize the order** — Klacks determines the shortest sensible sequence; detours and empty runs disappear
3. **Show it on the map** — the finished tour appears as a route, for car, bike, or on foot

If fixed time windows are stored for an assignment (e.g. mornings only), that is factored into the tour planning — though this is not a hard guarantee.

## Good to know

- For distance and travel-time calculation, Klacks can integrate the external service OpenRouteService (GPS coordinates are transmitted anonymized) — depending on how the instance is configured.
- Route optimization is a standalone building block for container-based shifts; the general auto-planning of the schedule separately scores coverage, fairness, and rule compliance.
- The mode of transport can be chosen per tour — handy for urban bike tours alongside rural car tours.
- If someone drops out, Klacks immediately shows who is qualified and available.

![Timeline view for tour planning](/img/app-timeline-de.png)
*Screenshot shown in German — the app itself is available in English.*

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
