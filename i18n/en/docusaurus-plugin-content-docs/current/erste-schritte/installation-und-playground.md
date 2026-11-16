---
sidebar_position: 1
---

# Installation and Playground

You can try Klacks in one minute — and install it in just a few minutes. No registration, no sales calls.

## Playground: the sandbox to get to know Klacks

The Playground isn't an installation option — it's a public Klacks instance with sample data for casual, no-obligation exploration, hence the name. It runs at **[klacks-software.ch](https://play.klacks-software.ch)**:

- **Login:** `admin@test.com` · **Password:** `P@ssw0rt1`
- You have full admin rights — try out everything.
- All data is **automatically reset every day**. Do not enter any real personal data.

## Installation: On your own server (On-Premise)

The On-Premise package ships with everything included: Docker images, installer, database, HTTPS, and automatic updates. This package is available only in the [Klacks Store](https://klacks-software.ch/store/?culture=en).

In the Klacks Store, optionally choose your industry, download the ZIP for your country and extract it on the target machine. Choose a folder that stays where it is (for example `~/klacks`): the automatic updates work with this folder.

```bash
unzip 'klacks-onprem-*.zip' -d ~/klacks && cd ~/klacks && sudo bash ./install-*.sh
```

On Windows: run `install-*.ps1` instead of `install-*.sh`. The installer generates passwords and certificates itself, pulls the latest Docker images, and waits until everything is up. First login is `admin@test.com` / `P@ssw0rt1` — **change this password immediately after your first login.**

## Office PC with Windows: also in the Microsoft Store

For a single office PC with Windows there is a separate setup that works without Docker. You get it in the [Klacks Store](https://klacks-software.ch/store/?culture=en) on your country's page and also in the [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (entry "Klacks"). It is the same setup in both stores. From the Microsoft Store, it applies the country set in Windows; you do not choose an industry there, and if there is no country profile for that country, the setup does not set one up. Server, Docker and Linux installations as well as the country and industry packages are available only in the Klacks Store.

On the office PC, new versions come via Settings > [Software Updates](../einstellungen/system-sicherheit/updates.md) in Klacks, also when Klacks was installed from the Microsoft Store. A newer setup cannot be installed over an existing installation.

## Good to know

- A bundled update service keeps your installation up to date automatically — with a backup before every update and automatic rollback if anything goes wrong.
- Your data stays entirely on your own infrastructure; Klacks never phones home.
- All you need is a server with Docker, outbound internet access (for Docker images and updates), and open ports 80/443.

---
*Questions about the installation? [Klacks community on Discord](https://discord.gg/YRP8p2abVC).*
