---
sidebar_position: 5
---

# Feature Plugins

Feature plugins extend Klacks with optional functional areas that aren't part of the core product — for example Messaging (sending and receiving via Telegram, Slack, Viber, LINE, Microsoft Teams, SMS, Signal, Threema, KakaoTalk, WeChat, and Zalo) or Floor Plan (a visual floor-plan editor with workstation markers and shift assignment).

## How it works

**Managing installed plugins:** Under Settings > Feature Plugins you see a list of already-installed plugins. Per row, you toggle the plugin on or off (enabled/disabled) without uninstalling it, or remove it entirely via the Uninstall action.

**Finding new plugins:** The magnifying-glass button opens the marketplace dialog, where you can search for further available plugins and install them directly.

## Good to know

- A disabled plugin remains installed but is locked for all users: its pages become unreachable and its API endpoints return a 404 response, as if they didn't exist.
- After enabling/disabling or installing/uninstalling, Klacks automatically reloads the translations so that new plugin texts are immediately visible without you having to reload the page.
- Some plugins bring their own settings cards (e.g. messaging provider configuration) — these only appear elsewhere in Settings after installation.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
