---
sidebar_position: 2
---

Under Settings > IMAP Settings you set up a mailbox that Klacks continuously polls in the background and displays in the "Inbox" area — so incoming correspondence can automatically be traced back to employees and clients.

## How it works

**Connection details:** Server, port (default 993), SSL encryption, username, password, the folder to poll (default `INBOX`), and the polling interval in seconds (default 300).

**What happens to fetched mail:** Klacks periodically queries the mailbox via IMAP, checks new messages with a spam filter (spam is moved to the junk folder both in Klacks and on the actual mailbox), and automatically assigns remaining messages to the matching client or employee record, provided the sender address is stored as contact data. This creates a correspondence history in the "Inbox" that can be filtered by person. Changes such as "mark as read," moving, or deleting also apply back to the actual mailbox.

**Testing the connection:** The "Test IMAP connection" button connects to the server for real, logs in, opens the configured folder for reading, and shows the number of messages found. If the folder doesn't exist, this is reported explicitly.

## Good to know

- This mailbox is **not** a channel for absence notifications and **not** part of the ERP order import (there are separate drop points for that, see its own page) — it exclusively feeds the general "Inbox."
- This setting is global for the entire installation — there is no separate IMAP account per user.
- If the encryption key used for the installation is reset, Klacks can no longer decrypt the stored password and pauses polling until the password is saved again.
- Messages in the inbox can be translated directly if DeepL is configured (see its own page).

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
