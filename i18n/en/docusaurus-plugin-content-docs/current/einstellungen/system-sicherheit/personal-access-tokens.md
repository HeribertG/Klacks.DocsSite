---
sidebar_position: 2
---

# Personal Access Tokens

Personal Access Tokens (PATs) are long-lived API keys that let external tools and services access Klacks securely without a username and password — for example AI assistants like Claude Desktop via the Model Context Protocol (MCP), automation scripts, or CI/CD pipelines.

## How it works

**Creating a token:** Under Settings > Personal Access Tokens, click "Create new token," give it a meaningful name (e.g. `Claude Desktop` or `CI Pipeline`), and choose a validity period between 1 and 730 days (default: 365 days). Once created, the token is shown in the format `klacks_pat_<random string>` **exactly once** — copy it immediately, because it can't be retrieved afterward.

**Using it:** The token is sent as a bearer token in the `Authorization` header of every API request, e.g. `Authorization: Bearer klacks_pat_...`. For MCP clients like Claude Desktop, you enter it as the `AUTHORIZATION` environment variable of the MCP server that points to `/mcp`.

**Managing:** The overview shows the name, creation date, expiry date, and last use of each token — the plain-text token itself is never shown again there. Tokens expiring within the next 30 days are flagged in the list. The Revoke button immediately and permanently blocks a token.

## Good to know

- Klacks only stores a SHA-256 hash of the token, never the plain-text token itself — a lost token cannot be recovered, only revoked and recreated.
- Every token is bound to your user account and has the same permissions as your own account — there is no fine-grained scope restriction per token.
- Use a separate token per tool, so that if you suspect misuse you can revoke it specifically without breaking other integrations.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
