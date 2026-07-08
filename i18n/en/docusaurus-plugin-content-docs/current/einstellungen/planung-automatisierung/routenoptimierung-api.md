---
sidebar_position: 4
---

Under Settings > OpenRoute you enter the API key for the external service openrouteservice.org, which Klacks uses for route optimization.

## How it works

OpenRouteService calculates travel times and distances — for driving, cycling, and walking — and thereby provides the foundation for route optimization in Klacks. In the single field on this page, you enter your personal API key. You can get a free key via the registration link to openrouteservice.org linked on the page.

## Good to know

- The key is sent directly from the browser to openrouteservice.org and is therefore deliberately shown **in plain text** rather than masked (`***`) — unlike, for example, email passwords. This is intentional, so you can spot an accidental typo or an expired key; it is not a display bug.
- The key is nevertheless stored encrypted in the database.
- Without a valid key, route optimization doesn't work — travel times and distances can then not be calculated.
- For the pure conversion of addresses into coordinates (geocoding), Klacks uses a different, separate service — this key is used exclusively for route calculation.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
