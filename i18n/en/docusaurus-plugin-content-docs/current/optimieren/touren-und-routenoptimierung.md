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

Time windows are respected along the way: if a client can only be visited in the morning, Klacks plans the tour accordingly.

## Good to know

- Route optimization also feeds into auto-planning: travel distances are factored into the scoring of schedule variants.
- The mode of transport can be chosen per tour — handy for urban bike tours alongside rural car tours.
- If someone drops out, Klacks immediately shows who is qualified and available and which route fits best.

![Timeline view for tour planning](/img/app-timeline-de.png)
*Screenshot shown in German — the app itself is available in English.*

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
