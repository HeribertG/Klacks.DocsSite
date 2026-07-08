---
sidebar_position: 1
---

Under Settings > Email Settings you configure the SMTP server that Klacks uses to send outgoing emails — such as notifications, password reset emails, or messages sent by Klacksy.

## How it works

**Connection details:** You enter server, port, timeout, SSL/TLS mode, authentication type (None, LOGIN, NTLM, GSSAPI, WDIGEST), as well as username and password. In addition, read receipts/delivery notifications and a reply-to address can be configured. The SSL/TLS mode is also derived from the port: port 465 uses direct SSL, port 587 (or enabled SSL) uses StartTLS.

**Saving:** There is no explicit save button — each field is saved automatically after a short delay as soon as you change it.

**Testing the connection:** The "Send test email" button establishes a real SMTP connection, authenticates, and sends an actual test email to the stored user address. This isn't a pure connectivity check but an actual mail send — useful for verifying credentials immediately. For well-known providers (Outlook, Gmail, Yahoo, GMX, etc.), Klacks strictly requires an authentication type other than "None."

## Good to know

- This setting is global for the entire installation — there is no separate SMTP account per user.
- Only a person with administrator rights can configure this page.
- The password is stored encrypted and can be shown/hidden in the form via an eye icon, never displayed in plain text.
- If the connection test fails, Klacks reports the specific reason (e.g. authentication error, SSL handshake failure, timeout) instead of a generic error message.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
