---
sidebar_position: 2
---

# Personal Access Tokens

Os Personal Access Tokens (PATs) são chaves de API de longa duração, com as quais ferramentas e serviços externos acedem de forma segura ao Klacks sem nome de utilizador nem palavra-passe — por exemplo, assistentes de IA como o Claude Desktop através do Model Context Protocol (MCP), scripts de automatização ou pipelines de CI/CD.

## Como funciona

**Criar token:** Em Definições > Personal Access Tokens, clique em "Criar novo token", atribua um nome descritivo (por exemplo, `Claude Desktop` ou `CI-Pipeline`) e escolha um período de validade entre 1 e 730 dias (por defeito: 365 dias). Após a criação, o token é apresentado no formato `klacks_pat_<sequência aleatória>` **exatamente uma vez** — copie-o de imediato, pois depois deixa de poder ser consultado.

**Utilizar:** O token é transmitido como Bearer Token no cabeçalho `Authorization` de cada pedido à API, por exemplo `Authorization: Bearer klacks_pat_...`. Para clientes MCP como o Claude Desktop, introduza-o como variável de ambiente `AUTHORIZATION` do servidor MCP que aponta para `/mcp`.

**Gerir:** A vista geral mostra o nome, a data de criação, a data de expiração e a última utilização de cada token — o próprio token em texto simples nunca mais é apresentado. Os tokens que expiram nos próximos 30 dias estão assinalados na lista. O botão Revogar bloqueia um token de imediato e de forma definitiva.

## Bom saber

- O Klacks armazena apenas um hash SHA-256 do token, nunca o token em texto simples — um token perdido não pode ser recuperado, apenas revogado e criado de novo.
- Cada token está associado à sua conta de utilizador e tem as mesmas permissões que a sua própria conta — não existe uma restrição de âmbito (scope) granular por token.
- Utilize um token próprio por cada ferramenta, para que, em caso de suspeita de utilização indevida, o possa revogar de forma direcionada sem interromper outras integrações.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
