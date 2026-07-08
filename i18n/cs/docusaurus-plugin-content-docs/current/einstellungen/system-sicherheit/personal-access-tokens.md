---
sidebar_position: 2
---

# Personal Access Tokens

Personal Access Tokens (PAT) jsou dlouhodobě platné API klíče, pomocí kterých externí nástroje a služby bezpečně přistupují ke Klacks bez uživatelského jména a hesla — například AI asistenti jako Claude Desktop přes Model Context Protocol (MCP), automatizační skripty nebo CI/CD pipeline.

## Jak to funguje

**Vytvoření tokenu:** V části Nastavení > Personal Access Tokens klikněte na „Vytvořit nový token", zadejte výstižný název (např. `Claude Desktop` nebo `CI-Pipeline`) a zvolte dobu platnosti mezi 1 a 730 dny (výchozí hodnota: 365 dní). Token se po vytvoření zobrazí ve formátu `klacks_pat_<náhodný řetězec>` **pouze jednou** — okamžitě si jej zkopírujte, protože poté už jej nelze znovu zobrazit.

**Použití:** Token se přenáší jako bearer token v hlavičce `Authorization` každého API požadavku, např. `Authorization: Bearer klacks_pat_...`. U MCP klientů jako Claude Desktop jej zadáte jako proměnnou prostředí `AUTHORIZATION` MCP serveru, který ukazuje na `/mcp`.

**Správa:** Přehled zobrazuje název, datum vytvoření, datum vypršení a poslední použití každého tokenu — samotný token v čitelné podobě se zde už nikdy znovu nezobrazí. Tokeny, jejichž platnost vyprší v následujících 30 dnech, jsou v seznamu označeny. Tlačítkem Odvolat se token okamžitě a trvale zablokuje.

## Dobré vědět

- Klacks ukládá pouze hash tokenu ve formátu SHA-256, nikdy samotný token v čitelné podobě — ztracený token nelze obnovit, pouze odvolat a vytvořit nový.
- Každý token je vázaný na váš uživatelský účet a má stejná oprávnění jako váš vlastní účet — neexistuje jemné omezení rozsahu (scope) pro jednotlivý token.
- Pro každý nástroj používejte samostatný token, abyste jej v případě podezření na zneužití mohli cíleně odvolat, aniž byste přerušili ostatní integrace.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
