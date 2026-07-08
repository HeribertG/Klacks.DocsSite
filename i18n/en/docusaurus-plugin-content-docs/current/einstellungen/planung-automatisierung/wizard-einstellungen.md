---
sidebar_position: 3
---

Under Settings > Wizard Settings you choose the AI language model that the "Holistic Harmonizer" — one of Klacks's scheduling assistants — uses for its evaluation.

## How it works

In the dropdown, you choose which of Klacks's enabled LLM models the Holistic Harmonizer should use globally (or "(none)" to use none at all). Via the "Check all models" button, Klacks sends a small test image to every enabled model and checks whether it responds and can read the image — with a timeout of up to 90 seconds per model. The result appears as a table with model, provider, status (OK/Error), response time, and a button to directly adopt a successfully tested model.

Image processing isn't a side detail here but a requirement: according to the page's help text, this assistant ("Wizard 3") needs models with image processing in order to function.

## Good to know

- This page does **not** concern the one-click auto-scheduling that automatically distributes shifts across employees — that runs on a genetic algorithm with no LLM involved at all and has no settings here.
- If "(none)" is set as the model, the Holistic Harmonizer is effectively disabled.
- Which LLM models are fundamentally available for selection (enabled/disabled) is determined elsewhere in the AI settings — here you only choose among the models already enabled.
- The check button is a pure self-test (reachability + image comprehension + response time) and does not itself change any scheduling data.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
