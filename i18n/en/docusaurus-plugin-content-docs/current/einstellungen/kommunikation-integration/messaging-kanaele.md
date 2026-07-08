---
sidebar_position: 6
---

Under Settings > Messaging Providers you connect external chat and SMS channels through which Klacks (and Klacksy) can message employees and clients directly — instead of, or in addition to, email.

## How it works

**Common principle:** All channels are configured through the same list: internal name, display name, provider type, and the credentials that vary by channel (token, account ID, certificate, etc.), plus an on/off toggle and a test button per entry to check the connection immediately. Who a message reaches is resolved via the channel-specific identifier (phone number, username, user ID, etc.) stored under the employee's or client's Address > Contact Data — you never have to type in raw IDs yourself.

**What messaging in Klacks is used for:** as an additional notification channel alongside email, for example for schedule notifications or messages sent by Klacksy — depending on which channels are enabled and configured per person.

**The 11 channels at a glance:**

| Channel | Send/Receive | Notes |
|---|---|---|
| Slack | Send + Receive | The bot must additionally be explicitly invited into each channel via `/invite`. |
| Telegram | Send + Receive | The recipient must have already activated the bot themselves via `/start`. |
| Signal | Send only | Requires a self-hosted signal-cli bridge (Docker) with its own phone number paired via QR code — no official cloud API. |
| Microsoft Teams | Send only | One Power Automate webhook per channel; no 1:1 messages, multiple entries are needed for multiple Teams channels. |
| SMS | Send only | Phone number in E.164 format; for trial accounts (e.g. Twilio) only to pre-verified numbers, and the destination country must be enabled. |
| WeChat | Send only | Verification as an Official Account outside China is demanding; only reaches followers who interacted within the last 48 hours. |
| KakaoTalk | Send only | Access token valid for only about 6 hours and must be renewed manually; the recipient must be a "friend" of the app. |
| Line | Send + Receive | Monthly sending quota limited depending on the plan; the recipient ID only becomes known through an incoming message. |
| Threema | Send only | Paid Threema Gateway account (credit-based model); no receiving, since end-to-end mode isn't used. |
| Viber | Send + Receive | The bot may only message people who have subscribed to it beforehand; the webhook needs a publicly reachable HTTPS endpoint. |
| Zalo | Send only | Access token expires after roughly 25 hours; sending is only possible within an interaction window. |

## Good to know

- Every channel has its own detailed manual with step-by-step setup instructions for the respective provider — accessible directly on the settings page of that provider's entry.
- Multiple channels can be active in parallel; which one is actually used depends on which contact data is stored for the given person.
- For all channels with a time-limited access token (e.g. KakaoTalk, Zalo), it must be renewed with the provider outside of Klacks and re-entered in Klacks, otherwise sending via that channel breaks.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
