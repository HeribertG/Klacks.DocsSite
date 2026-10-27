---
sidebar_position: 1
---
# System Requirements and Architecture

Klacks runs as a Docker stack on your own server. This page describes which services start in the process and how to size the host — including the measurements on which the recommendation is based.

## The architecture: five services

The on-premise package starts only what is needed for operation:

| Service | Image | Purpose |
|---|---|---|
| `klacks-postgres` | `pgvector/pgvector:pg17` | Database; the vector extension is already included |
| `klacks-api` | `ghcr.io/heribertg/klacks-api` | Backend; migrates and populates the database at start-up |
| `klacks-ui` | `ghcr.io/heribertg/klacks-ui` | Angular interface, served via nginx |
| `klacks-updater` | `ghcr.io/heribertg/klacks-updater` | installs signed updates (api and ui together) |
| `klacks-proxy` | `nginx:alpine` | TLS termination and reverse proxy |

Internal services of the manufacturer (development knowledge store, marketing, marketplace, pgAdmin, certbot, Blazor interface) are deliberately **not** included. As an operator, you therefore see only your own stack.

## What the host must provide

- **8 GB RAM and 4 vCPU** as a minimum (see the calculation below).
- Docker Desktop (Windows/macOS) or Docker Engine with Compose v2 (Linux), **amd64 or arm64**.
- Free ports **80 and 443** — can be overridden via `HTTP_PORT` and `HTTPS_PORT`.
- **Outgoing** HTTPS access to `ghcr.io` (images) and `github.com` (signed update manifest).
- Optional: access to `klacks-software.ch:7553` for country packs and language plug-ins from the marketplace.

## Memory: why 8 GB, and what happens on smaller hosts

Klacks runs its two search models (embedder and reranker) **locally inside the process** `klacks-api`. Both ONNX sessions stay in memory permanently — they are not unloaded after every question.

Measured on the manufacturer's production host on 12 September 2026:

- Base load of the process: approx. 1,017 MB
- Embedder: approx. 1,171 MB
- Reranker: approx. 116 MB
- Total: a plateau of around **2,304 MB**
- Under a limit of 2,560 MB, the kernel terminated the container (OOM) at 2,471 MB.

That is why the bundled Compose sets **3,584M** and 3.0 CPU for `klacks-api`, with idle unloading switched off. Calculated across the whole stack: 3,584M (api) + 2,048M (postgres) + 3 × 256M (ui, updater, proxy) = **6,400 MiB**; the rest of the 8 GB remains for the operating system and file cache.

**Smaller host, around 3 GB for `klacks-api`:** In the `.env`, set **both** of the following lines — never the memory line alone:

```bash
KLACKS_API_MEMORY_LIMIT=2560M
KLACKS_API_IDLE_UNLOAD_MINUTES=30
```

Idle unloading releases a session after 30 minutes without access. The price: the next question afterwards reloads it (around 2.2–2.9 s for the embedder, around 1.1 s for the reranker). Values between 1 and 5 are raised to 5, and `0` means: never unload.

## CPU: fewer cores only slow things down, they do not break anything

Search also works with fewer cores, but becomes slower — the reranker is the compute-intensive step. Measured: 2,994–3,163 ms for 25 candidates at 3.0 CPUs, compared with 4,339–4,860 ms at 1.5 CPUs, where the service additionally spent 7.15 s throttled. For a smaller host:

```bash
KLACKS_API_CPU_LIMIT=1.5
```

The CPU quotas of the stack deliberately add up to 4.75 on 4 vCPU: a quota is an upper limit, not a reservation, and the services never peak at the same time.

## Good to know

- **Passwords and keys stay stable.** `POSTGRES_PASSWORD` is burned into the data volume at the first start — changing it later orphans the database. `JWT_SECRET` signs the sessions; changing it logs out all users. The installer preserves both on every repeated run.
- **`COMPOSE_PROJECT_NAME=klacks`** is hard-wired so that the host and the update service point to the same Compose project regardless of the folder name. Do not change it after installation.
- **`KnowledgeIndex__WarmupEnabled=false` is not a memory option.** It only moves the building of the search from start-up to the first chat request; in continuous operation the sessions are just as present. Useful only if the host fails on memory at start-up.
- **More than one API instance?** Then you need a SignalR backplane. Klacks does not ship one: provide a RESP-compatible service yourself (for example Valkey — licensed under BSD-3 since 7.4, unlike Redis) and enable the sticky upstream (`ip_hash`) prepared in the nginx template. Without a backplane, exactly one `klacks-api` instance runs, as with every installation today.
- **Country profiles:** The installer knows 30 profiles: `ae`, `at`, `ch`, `cn`, `cz`, `de`, `dk`, `es`, `fi`, `fr`, `gb`, `gr`, `id`, `il`, `it`, `jp`, `kr`, `li`, `my`, `nl`, `no`, `pl`, `pt`, `ro`, `sa`, `se`, `th`, `tw`, `us`, `vn`. At the first start, a profile sets language, country/region and time zone, public holiday calendar, weekend and week start, working time limits, vacation entitlement, surcharges, the default payroll export target system (for Switzerland, for example, `abaconnect-ch`), and industry templates — for Spitex, for example, the scheduling rule template “CH Spitex Standard”. Without a profile, Klacks starts neutral and you configure everything by hand.

---

*Operations questions? [Klacks community on Discord](https://discord.gg/YRP8p2abVC).*
