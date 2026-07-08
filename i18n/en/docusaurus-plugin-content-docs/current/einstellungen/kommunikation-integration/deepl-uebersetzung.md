---
sidebar_position: 3
---

Under Settings > DeepL you enter a DeepL API key that lets Klacks automatically translate text — currently mainly incoming emails in the inbox.

## How it works

**API key:** A single input field accepts the DeepL API key (format `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx` for the free Free API, or without the `:fx` suffix for the paid Pro API). Klacks automatically detects from the `:fx` suffix which of the two DeepL API addresses to use — a separate switch between Free and Pro isn't needed. You get an account and the key itself at deepl.com/pro-api.

**Usage:** In the "Inbox," any email can be translated into the currently selected interface language via the translate icon; the original and the translation can be compared with a toggle. Without a stored key, this feature isn't available.

## Good to know

- This setting is global for the entire installation — there is no per-user key.
- There is no dedicated "test" button on this page; whether the key works shows up on the first translation attempt in the inbox.
- If the key is invalid or expired, Klacks detects this from DeepL's response (authentication error) and reports it instead of showing an empty or incorrect translation.
- The key is stored encrypted and shown masked in the form.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
