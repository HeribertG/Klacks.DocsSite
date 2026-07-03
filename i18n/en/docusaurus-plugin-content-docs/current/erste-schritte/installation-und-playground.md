---
sidebar_position: 1
---

# Installation and Playground

You can try Klacks in one minute — and install it in five. No registration, no sales calls.

## Option 1: Playground (nothing to install)

A public Klacks instance with sample data runs at **[klacks-software.ch](https://klacks-software.ch:7643)**:

- **Login:** `admin@test.com` · **Password:** `P@ssw0rt1`
- You have full admin rights — try out everything.
- All data is **automatically reset every day**. Do not enter any real personal data.

## Option 2: On your own server (On-Premise)

The On-Premise package ships with everything included: Docker images, installer, database, HTTPS, and automatic updates.

```bash
curl -fsSLO https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip
unzip klacks-onprem.zip && cd onprem && ./install.sh
```

On Windows: run `install.ps1` instead of `install.sh`. The installer generates passwords and certificates itself, pulls the latest Docker images, and waits until everything is up. First login is `admin@test.com` / `P@ssw0rt1` — **change this password immediately after your first login.**

## Good to know

- A bundled update service keeps your installation up to date automatically — with a backup before every update and automatic rollback if anything goes wrong.
- Your data stays entirely on your own infrastructure; Klacks never phones home.
- All you need is a server with Docker.

---
*Questions about the installation? [Klacks community on Discord](https://discord.gg/YRP8p2abVC).*
