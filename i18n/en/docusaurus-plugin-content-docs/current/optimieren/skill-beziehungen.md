---
sidebar_position: 5
---

The AI assistant Klacksy learns from everyday usage which of its capabilities (skills) belong together — and next time selects the right skills more precisely as a result.

## How it works

In the background, Klacksy observes which skills are frequently used together or in sequence within a session and derives **relations** from that. The learning process runs automatically every 6 hours. The Skill Relations page shows all detected relations; administrators decide whether they are accepted or discarded.

**Relation types**
- *Sequential:* Skill A is regularly used before skill B.
- *Jointly required:* Both skills frequently occur in the same session, with no fixed order.

**Source**
- *Learned:* Computed from real usage data — highly reliable.
- *Derived:* Logically inferred from the structure of the skills, not yet confirmed by usage data.

**Status**
- *Candidate:* Newly detected, awaiting your decision.
- *Active:* Accepted — actively influences Klacksy.
- *Retired:* Discarded — will be ignored.

The **confidence** (0–100%) shows how sure Klacksy is about a relation. It rises with every session that confirms the pattern (**confirmations**) and falls with sessions that speak against it (**contradictions**).

## Good to know

- Accept a relation when it makes sense on the merits — the two skills genuinely belong together and the pattern matches how you want to work.
- Discard relations that arose by chance or don't belong together in your context (e.g. from test sessions).
- Rule of thumb: only *learned* relations with high confidence are typically worth accepting. Derived candidates with little support are better discarded until more usage data is available.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
