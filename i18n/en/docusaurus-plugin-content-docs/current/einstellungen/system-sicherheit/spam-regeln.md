---
sidebar_position: 7
---

# Spam Rules

Under Settings > Spam Rules you define filter rules that automatically classify incoming emails in the Inbox module as spam — the rules apply both during ongoing polling of new emails (IMAP polling) and when re-evaluating already-received emails afterward.

## How it works

**Creating a rule:** Choose a rule type — Sender contains, Sender domain, Subject contains, or Content contains — enter the pattern to check for, and click Add.

**Managing rules:** Each rule can be enabled or disabled via a checkbox without deleting it, and permanently removed via the trash button.

## Good to know

- Disabled rules remain saved but no longer affect new or re-evaluated emails — useful for suspending a rule on a trial basis instead of deleting it.
- Klacks uses the same inbox for ERP order import as the regular email inbox module (single-mailbox architecture). A rule that's too broad (e.g. an entire sender domain) can therefore theoretically also classify incoming ERP order emails as spam — check new rules carefully accordingly before enabling them.
- Use sender-domain rules to block entire unwanted sending organizations, instead of capturing every single address as a sender-contains rule.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
