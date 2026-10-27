---
sidebar_position: 9
---
# Frequently Asked Questions

The questions asked most often before the first deployment — with honest answers, even where the answer is “not yet”.

## Trying It Out and Getting Started

**Do I have to install Klacks to see it?**
No. The [Playground](https://play.klacks-software.ch) is a public instance with demo data; you log in with `admin@test.com` / `P@ssw0rt1` and have full admin rights. The database is reset every day at 04:00 Swiss time — do not enter any real personal data there.

**How long does an installation take?**
The installer is a single command. It generates passwords and a certificate, pins the current version, starts the stack, and waits until everything is healthy. Most of that time is spent downloading the images. Requirements are listed under [System Requirements](../betrieb/systemvoraussetzungen/).

**Why do I have to create my own admin account?**
Because the bundled account has a publicly known password. Klacks lets you log in with it exactly once and then requires your own account; after that, the default account is switched off. This is intentional, not a bug.

## Operations

**Where is my data stored?**
On your infrastructure. Klacks does not send your data back to the manufacturer. If you connect an AI model as an external service, that service's own terms naturally apply to **that** service — the choice of model is yours.

**Do I absolutely need a cloud provider?**
No, that is the whole point of on-premise: the stack runs on your server. You only need **outgoing** access to the package and update sources (`ghcr.io`, `github.com`). Operation entirely without internet access is **not** available at present — installations in isolated networks are a development step that has not been implemented yet.

**How do I back up my data?**
Yourself — the backup is your responsibility. How to do it and which volume you must never forget is described under [Backup and Restore](../betrieb/backup-und-wiederherstellung/).

**What happens if an update goes wrong?**
The update service first backs up the database, switches the new versions over together, and then checks health. If the new version is not healthy, it rolls back automatically. Details under [Updates and Rollback](../betrieb/updates-und-rollback/).

**Will Klacks run on my existing hardware?**
As a rule of thumb: **8 GB RAM and 4 vCPU**. For smaller hosts there are documented settings that free up memory — at the price that the next question to Klacksy takes a little longer.

**Does Klacks work with my identity provider?**
Yes. Klacks can be connected to an existing identity provider instead of maintaining its own accounts — see [Identity Provider](../einstellungen/kommunikation-integration/identity-provider/).

## Features

**Which industries is Klacks suited for?**
It is designed for shift-based and field-service operations: outpatient care and Spitex, hospitals, security services, cleaning and housekeeping services, and logistics.

**Which languages does the interface speak?**
The documentation is available in 25 languages, including German, English, French, Italian, Spanish, Polish, Japanese, Chinese (simplified and traditional), Arabic, and Hebrew — Arabic and Hebrew also with right-to-left reading direction.

**Do I have to commit to one AI model?**
You choose the provider and model yourself and can switch them. How to set this up and test it is described under [LLM Providers and Models](../einstellungen/klacksy-konfiguration/llm-provider-und-modelle/) and [Model Connection Test](../einstellungen/klacksy-konfiguration/modell-verbindungstest/).

**What does Klacks cost?**
The source code is released under the GNU Affero General Public License v3 (AGPL-3.0) — you may read it, modify it, and run it yourself. If you offer a modified version to others over a network, you must also make the modified source code available to those users under the AGPL-3.0. Everything beyond that (questions, exchange, further development) goes through the [Klacks community on Discord](https://discord.gg/YRP8p2abVC) and the [public source code repository](https://github.com/HeribertG/Klacks.Api).

**Is Klacks finished?**
No, and it does not claim to be. Klacks is under construction, but it is developed in public and actually operated — in the Playground you can check the current state yourself at any time instead of believing a description.

## Contributing

**I found a bug or have a question.**
The fastest way is the [community on Discord](https://discord.gg/YRP8p2abVC). Bugs in the software belong in a report in the [repository](https://github.com/HeribertG/Klacks.Api). Always helpful: the version, the last step before the error, and the last lines of the logs — see [Troubleshooting](../betrieb/fehlerbehebung/).

**Can I contribute something myself?**
The source code is open, and the documentation lives in the same house. Pointers to unclear passages are just as welcome as code.

---

*Your question is missing? [Klacks community on Discord](https://discord.gg/YRP8p2abVC).*
