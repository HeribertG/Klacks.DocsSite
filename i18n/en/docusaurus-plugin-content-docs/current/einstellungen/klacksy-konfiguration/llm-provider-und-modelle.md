---
sidebar_position: 1
---

# LLM Providers and Models

Klacksy needs a language model to understand and act. Under Settings > LLM Providers, LLM Models, and LLM Sync Log, you decide which providers and which specific models Klacks is allowed to use for this.

## How it works

**Adding a provider:** A provider bundles a base URL, API version, and API key for one vendor. Six vendors (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) are hardwired into the code; every other provider runs through a generic, OpenAI-compatible connection — this lets you integrate, for example, Groq, Together AI, Fireworks, OpenRouter, xAI, Cerebras, Perplexity, or a self-hosted model. Via "Search providers," Klacks also suggests vendors you haven't added yet: either from a curated catalog of verified addresses or — if a web search is configured — via internet research. Every suggestion is checked live for reachability before being displayed; selected providers are added disabled and without an API key, which you then add yourself afterward.

**API key and priority:** Once saved, the key is never shown in plain text in the UI again — only whether one is stored ("Configured"). Priority determines the order in which enabled providers are tried.

**Managing models:** Under LLM Models you create individual models per provider (display name, the vendor's technical model ID, context window, maximum tokens, cost per 1000 input/output tokens). A model can be marked as the default model; a provider cannot be deleted while one of its models is the current default.

**LLM Sync Log:** A background service checks by default every 24 hours which models have newly become available or have been discontinued at the enabled providers. New models are first verified with a real test request and only inserted as enabled if that succeeds; models no longer offered are automatically disabled. The Sync Log shows the full history per provider with date, number of new/disabled/failed models, and expandable test results. Admins additionally get a toast notification about unread sync events after their next login.

## Good to know

- Only six vendors (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) have a dedicated implementation — all other providers run through a generic, OpenAI-compatible connection.
- The catalog for "Search providers" currently contains twelve verified vendors; web suggestions only appear if a web search is configured under Settings.
- The sync log service runs in the background independently of your session — you don't need to keep the page open for it.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
