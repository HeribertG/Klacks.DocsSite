---
sidebar_position: 4
---

# Autonomy Levels

How independently is Klacksy allowed to act before checking with you? Under Settings > Klacksy Autonomy you set this for yourself — the setting applies per user account, not to all users at once.

## How it works

**Four levels:**

- **Suggest** — Klacksy only proposes actions; every change needs your confirmation.
- **Assisted** — reversible actions run directly, everything else needs confirmation.
- **Autonomous** (default) — all actions run directly, except particularly sensitive ones.
- **Fully autonomous** — even multi-step plans run through without intermediate approvals.

**How the classification works:** Every action Klacksy could take is internally classified by risk: purely read-only actions always run immediately; reversible or scenario-bound actions (e.g. within a test plan) require at least the Assisted level; irreversible actions require at least the Autonomous level. Sensitive actions — user administration, permissions, and changes to the autonomy setting itself — always require explicit confirmation **regardless of the chosen level**.

**The confirmation workflow:** If an action needs your approval, Klacksy doesn't execute it immediately. Instead, it holds it back for a 5-minute waiting period and summarizes what would happen. Only once you explicitly agree in your own words does Klacksy trigger the held-back action — it never confirms on your behalf.

## Good to know

- The autonomy level is a personal, per-account setting — every user can choose their own comfort level.
- A higher level doesn't mean nothing is ever asked anymore: sensitive actions always remain subject to confirmation.
- By default, the Autonomous level is active — this matches the behavior Klacksy already had before autonomy levels were introduced.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
