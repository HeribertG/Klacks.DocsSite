---
sidebar_position: 5
---

# Model Connection Test

Not every language model is suited to Klacksy — it has to reliably return structured function calls instead of answering in prose. Under Settings > Klacksy Model Check, Klacks tests this automatically for all configured models.

## How it works

**The test:** Clicking "Find best models" sends every configured model (including disabled ones) the same small test task: "Create a new employee named Anna Müller." The model must respond with the matching structured function call and the correct name parameters — not with a plain-text answer. In addition, the context window must be at least 32,000 tokens so that Klacksy's system prompt and capabilities fit in. Each test runs with a 30-second time limit.

**Result:** Models that meet both criteria are considered "suitable" and are automatically enabled; unsuitable models are disabled. The results list is sorted by suitability, then by function-calling capability, cost, latency, and context window.

**Setting the default model:** Via "Set as default" you choose directly from the results list which model Klacksy should use by default going forward. Without your own choice, Klacks automatically sets the best-suited model as the default.

## Good to know

- The test checks all stored models, not just enabled ones — previously disabled models can therefore become enabled if they pass the test.
- Passing the test is not a cost safeguard: expensive but suitable models are enabled just as well. Cost per 1000 tokens is visible in the results list.
- This test is specifically designed for function calls needed for actionability, and is independent of the model check in the language settings, which allows a lower context window since it's only for transcription cleanup.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
