---
sidebar_position: 2
---

# Personal Access Tokens

Personal Access Tokens (PAT) är långlivade API-nycklar som gör att externa verktyg och tjänster säkert kan komma åt Klacks utan användarnamn och lösenord — till exempel AI-assistenter som Claude Desktop via Model Context Protocol (MCP), automatiseringsskript eller CI/CD-pipelines.

## Så fungerar det

**Skapa Token:** Under Inställningar > Personal Access Tokens klickar du på "Skapa nytt Token", ger det ett tydligt namn (t.ex. `Claude Desktop` eller `CI-Pipeline`) och väljer en giltighetstid mellan 1 och 730 dagar (standard: 365 dagar). Efter att Tokenet har skapats visas det i formatet `klacks_pat_<slumpteckensträng>` **exakt en gång** — kopiera det direkt, eftersom det inte går att hämta igen efteråt.

**Använda:** Tokenet skickas som ett Bearer-Token i `Authorization`-headern för varje API-förfrågan, t.ex. `Authorization: Bearer klacks_pat_...`. För MCP-klienter som Claude Desktop anger du det som miljövariabeln `AUTHORIZATION` för MCP-servern som pekar mot `/mcp`.

**Hantera:** Översikten visar namn, skapandedatum, utgångsdatum och senaste användning för varje Token — själva klartexts-Tokenet visas aldrig igen där. Tokens som löper ut inom de kommande 30 dagarna är markerade i listan. Via knappen Återkalla spärras ett Token omedelbart och permanent.

## Bra att veta

- Klacks sparar bara en SHA-256-hash av Tokenet, aldrig klartexts-Tokenet självt — ett förlorat Token kan inte återställas, bara återkallas och skapas på nytt.
- Varje Token är kopplat till ditt användarkonto och har samma behörigheter som ditt eget konto — det finns ingen finkornig scope-begränsning per Token.
- Använd ett eget Token per verktyg, så att du vid misstänkt missbruk kan återkalla det riktat, utan att avbryta andra integrationer.

---
*Testa direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*
