---
sidebar_position: 1
---

# Installation and Playground

You can try Klacks in one minute — and install it in a few minutes. No registration, no sales calls.

## Playground: the sandbox to get to know Klacks

The Playground is not an installation option, but a public Klacks instance with sample data for casual, no-obligation exploration — hence the name. It runs at **[play.klacks-software.ch](https://play.klacks-software.ch)**:

- **Login:** `admin@test.com` · **Password:** `P@ssw0rt1`
- You have full admin rights — try out everything.
- The sample data includes around 5,000 clients and is pure demo data.
- **Do not enter any real personal data.** The database is reset to a fixed state every day at 04:00 Swiss time (02:00 UTC).

## Installation: On your own server (On-Premise)

The On-Premise package ships with everything included: Docker images, installer, database, HTTPS, and automatic updates. You download it exclusively from the [Klacks Store](https://klacks-software.ch/store/?culture=en).

In the Klacks Store, optionally choose your industry and download the ZIP for your country. The installer generates passwords and certificates itself, pulls the latest Docker images, and waits until everything is up.

### Linux: step by step

You need a machine with at least 8 GB of RAM, free ports 80 and 443, internet access, and an account with `sudo` rights. Docker does not have to be installed already (see step 4).

1. **Download the ZIP from the Klacks Store.** On your country's page in the [Klacks Store](https://klacks-software.ch/store/?culture=en), optionally with your industry.
2. **Extract it to a permanent folder**, for example `~/klacks`, not to `Downloads` or `/tmp`. The automatic updates later work with exactly this folder; if it is deleted or moved, they break. The installer warns you if it is run from `Downloads` or `/tmp`.

   ```bash
   unzip 'klacks-onprem-*.zip' -d ~/klacks
   ```

3. **Open a terminal in the folder.** In the file manager this is usually done with a right-click in the folder (the label depends on the desktop environment), or you enter `cd ~/klacks`.
4. **Start the installer:**

   ```bash
   sudo bash ./install-de.sh
   ```

   In the package for Germany the script is called `install-de.sh`; in other country packages the respective country code is part of the name, so in general `sudo bash ./install-*.sh`. The installer needs `sudo` so that it may talk to Docker and install it if necessary. Without `sudo` it only works if Docker is already installed and your user belongs to the `docker` group.

   **If Docker is missing**, the installer offers to install Docker Engine with the official script from `get.docker.com`. This only happens after you confirm (`[y/N]`, the default is No) and only on Ubuntu, Debian, Fedora, CentOS, and RHEL; the machine needs `curl` or `wget` and internet access for this. On other distributions, install Docker Engine with the Compose plugin yourself, following [Docker's instructions](https://docs.docker.com/engine/install/). If the installer runs without a terminal, `INSTALL_DOCKER=yes` answers the question with Yes. Docker itself does not recommend this script for production use; for a production server it is better to install Docker yourself. The older `docker-compose` (version 1) is not supported; the `docker compose` plugin is required.
5. **Wait.** The installer generates passwords and a self-signed certificate, pulls the images, and starts the stack. On the first start the API migrates the database; the installer waits up to ten minutes for this. At the end it prints `Klacks is up at https://…` and below it **your setup code** (`Your setup code`, twelve characters in three groups of four). Make a note of it; it is also in the `.env` file in the installation folder as `KLACKS_SETUP_CODE`.
6. **Open Klacks:** `https://localhost` (for a different server name or HTTPS port, use the address from the installer's message). The browser warns about the self-signed certificate; confirm the warning. Then you create your own admin account with the setup code, see [The first login](#first-login).
7. **Updates** then run automatically through the bundled update service. You do not have to start the installer again for this.

If Docker sees less than 7 GiB of memory, a first installation aborts. How to set up a smaller host is described under [System Requirements](../betrieb/systemvoraussetzungen.md).

### Windows

On Windows you start `install-*.ps1` instead of `install-*.sh`.

### Options: server name and country profile

With an optional country profile, the installer sets up language, public holidays, working time limits, surcharges, and industry templates right at the first start:

```bash
sudo SERVER_NAME=klacks.example.com REGION=de bash ./install.sh
```

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1 -ServerName klacks.example.com -Region de
```

On Linux the variables belong **after** `sudo`: `sudo` usually does not pass variables that come before it on to the installer. With the script of the country package the call looks like this: `sudo SERVER_NAME=klacks.example.com bash ./install-de.sh`.

The country package from the Klacks Store contains the profile of its country. The bundled scripts `install-*.sh` and `install-*.ps1` already set `REGION` or `-Region` to its country code — in the package for Germany, for example, `install-de.sh` and `install-de.ps1`. If you call `install.sh` or `install.ps1` directly, `REGION` or `-Region` must be this country code; without it the installer does not set up a country profile.

## Office PC with Windows: also in the Microsoft Store

For a single office PC with Windows there is a separate setup that works without Docker. You get it in the [Klacks Store](https://klacks-software.ch/store/?culture=en) on your country's page and also in the [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (entry “Klacks”). It is the same setup in both stores. From the Microsoft Store it applies the country set in Windows; you do not choose an industry there, and if there is no country profile for that country, the setup does not set one up. Server, Docker, and Linux installations as well as the country and industry packages are available only in the Klacks Store.

On the office PC, new versions come via Settings > [Software Updates](../einstellungen/system-sicherheit/updates.md) in Klacks, also when Klacks was installed from the Microsoft Store. A newer setup cannot be installed over an existing installation.

## The first login: your own admin account {#first-login}

A freshly installed Klacks does not have an account of yours yet. When you first open it in the browser, the “Set Up Your Own Admin Account” page therefore appears right away, before any login: first and last name, email address (it becomes your login name), and a password entered twice; the password rules are shown live next to it.

On a server (Docker), the page additionally asks for the **setup code**, even if you open Klacks in the browser on the server itself. The installer displayed the code at the end of the installation; it is also in the `.env` file in the installation folder as `KLACKS_SETUP_CODE`. It is only valid for this one setup. A wrong code is rejected (“The setup code does not match. Please check it and try again.”).

As soon as you save, your account receives the admin role and the bundled test account is permanently deactivated in the same step; Klacks then logs you in automatically with your own account; if that fails, log in with the new credentials. As long as a setup code is set, the bundled test account cannot be used for logging in via the browser anyway. Next comes the “Country and Industry” page.

Until your own account has been created, the server blocks every further request with the error code `SETUP_REQUIRED` (HTTP 403). This is not a malfunction: only the setup is still missing.

- On the office PC with Windows you do not need a setup code if you open Klacks in the browser on the same PC. From another machine, only the login page appears.
- If Klacks shows the login page instead, for example with an installation without a setup code, the installer's output names the bundled account; even then Klacks leads you straight to creating your own admin account.
- If two people submit at the same time, only the first becomes administrator; the second ends up on the login page.

Only in the Playground and in a local development environment is this gate deliberately switched off; there the bundled account remains.

## Good to know

- **Requirements:** at least 8 GB of RAM and 4 vCPU, Docker with Compose v2 (on Linux the installer installs Docker on request), free ports 80 and 443, and outbound HTTPS access to `ghcr.io` and `github.com`. Details and the calculation examples for smaller hosts are under [System Requirements](../betrieb/systemvoraussetzungen.md).
- A bundled update service keeps your installation up to date automatically — with a backup before every update and automatic rollback if anything goes wrong. How this works in detail is described under [Updates and Rollback](../betrieb/updates-und-rollback.md).
- Your data stays in your own database on your own infrastructure. Some functions call external services in the process — which ones is described in the next section.
- Running the installer again is harmless, but it is not an update: it keeps the passwords, the certificate, and the version fixed at the first installation, and restarts the stack (on Linux again with `sudo` if you installed with `sudo` first). This is how you repair a stack that is no longer running. New versions are installed by the update service, not by the installer.
- If you bring your own certificate, place `server.crt` and `server.key` in `nginx/certs/` in the installation folder before the installation; otherwise the installer generates a self-signed certificate.
- You back up your database regularly yourself — how this works is described under [Backup and Restore](../betrieb/backup-und-wiederherstellung.md).

## Which external services Klacks calls

Your data stays on your servers. For some functions, however, Klacks calls public services on the internet in standard operation. The addresses of these services are built in; you currently cannot enter your own geocoding, routing, or map server.

| Service | Purpose | What is sent | Default | Switching off |
|---|---|---|---|---|
| Nominatim from OpenStreetMap (`nominatim.openstreetmap.org`) | Converting addresses to coordinates: when saving an address, for the company location, in tour planning, and in background services for addresses and group locations | Street, postal code, city, and country, without names of persons; for group locations the place or group name | on | `BackgroundServices__AddressGeocoding=false` and `BackgroundServices__GroupGeocoding=false` only switch off the background services. Saving an address still geocodes it. |
| Public OSRM server (`router.project-osrm.org`) | Travel times, distances, and routes on the map | Coordinates of the assignment locations, without names | on as long as no OpenRouteService key is stored; the browser also queries OSRM directly if the Klacks server returns no route | not provided |
| OpenRouteService (`api.heigit.org`) | like OSRM, plus bicycle and walking | Coordinates of the assignment locations, without names | only with a stored API key | remove the key under Settings > OpenRoute |
| Map tiles (OpenStreetMap, OpenStreetMap.de, or CARTO) | Map display in the dashboard | from the browser: IP address and the displayed map section | on as soon as the map is displayed | provider selectable in the map, your own tile server not |
| GitHub (`github.com`) and GitHub Container Registry (`ghcr.io`) | Installation and automatic updates: release manifest and Docker images | normal download requests, no planning data | on | — |
| Klacks Marketplace (`klacks-software.ch/store`) | Language and country packages | Country code, package code, or search term | when searching for packages and when loading a country profile | address configurable via `LanguagePlugins__MarketplaceUrl` |
| Hugging Face (`huggingface.co`) | one-time download of the search models for Klacksy | no customer data (file download) | on first need | — |
| Open-Meteo (`api.open-meteo.com`, `air-quality-api.open-meteo.com`) | Weather and air quality notice in the welcome widget, weather query via Klacksy | Coordinates of the browser (if permitted) or of the company location | on | `Assistant__Ambient__Enabled=false` only switches off the air quality and public holiday notice, not the weather query of the welcome widget |
| Nager.Date (`date.nager.at`) | Public holiday notice in the welcome widget | Country code | on | `Assistant__Ambient__Enabled=false` |
| Cloud AI providers (e.g. OpenAI, Anthropic, Google, DeepSeek) | Klacksy and AI-assisted background functions (e.g. classification of group locations) | Requests including the context from your data that they need | only if a cloud model is configured | use a local model |
| Speech, search, and translation services (e.g. Deepgram, Groq, AssemblyAI, Edge TTS, OpenAI TTS, ElevenLabs, Google Cloud TTS, DeepL, web search) | Voice input and output, web search, translation | Audio or text | only if used or configured; depending on the browser, browser speech recognition works through the browser's online service | do not use the function |

The switches in the “Switching off” column are environment variables of the `klacks-api` container; enter them in `docker-compose.yml` under `environment:` of this service. An entry only in the `.env` file is not enough, because the service does not read it as `env_file`.

With a local AI model, no request to the language model ends up with an external AI provider. For the other services in this table, this changes nothing.

---

*Questions about the installation? [Klacks community on Discord](https://discord.gg/YRP8p2abVC).*
