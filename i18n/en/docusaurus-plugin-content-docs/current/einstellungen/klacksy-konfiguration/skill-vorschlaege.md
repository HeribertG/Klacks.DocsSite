---
sidebar_position: 6
---

# Klacksy Skill Suggestions

Klacksy learns from its own mistakes: when you correct it in chat for picking the wrong capability, the system remembers that correction. Under Settings > Klacksy Skill Suggestions, admins see which improvements to skill descriptions are proposed as a result, and decide whether to adopt them.

## How it works

**Where the suggestions come from:** If Klacksy picks the wrong capability (skill) for a request in chat and the user corrects it, that chat sequence is flagged as "corrected." An internal optimizer analyzes such corrected sequences and derives concrete text changes to skill descriptions from them — with the goal that Klacksy assigns the affected capability correctly next time.

**Generating suggestions:** The "Generate suggestions" button triggers evaluation of the last 30 corrected chat sequences and produces new suggestions from it, provided patterns can be found.

**A suggestion card shows:** the affected skill and the changed field, the change as a before/after comparison, a rationale for why the change makes sense, and — expandable — the exact user requests that triggered the suggestion.

**Deciding:** Each open suggestion is either **adopted** individually (the skill description is changed immediately) or **discarded** (the suggestion is dropped without changing anything). There is no automatic adoption — a human always makes the final call.

## Good to know

- Without corrections in chat, no suggestions are generated — the system needs real miscorrections as training material, not just usage.
- This feature only changes the description text of capabilities so Klacksy picks them correctly — it does not change what a capability actually does.
- This feature requires administrator rights.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
