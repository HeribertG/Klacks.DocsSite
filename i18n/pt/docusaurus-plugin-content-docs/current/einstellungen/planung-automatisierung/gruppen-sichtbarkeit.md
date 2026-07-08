---
sidebar_position: 5
---

Em Definições > Visibilidade de grupos por utilizador, define quais os grupos — e, portanto, quais os dados associados — que um determinado utilizador pode ver.

## Como funciona

A lista mostra todos os utilizadores com o respetivo nome e o número de grupos de raiz que lhes estão atribuídos (visíveis). Ao clicar no número, abre-se um formulário com uma lista de caixas de verificação de todos os grupos de raiz; aqui assinala quais os grupos que este utilizador pode ver. Ao libertar um grupo de raiz, isso aplica-se automaticamente também a todos os seus subgrupos.

Os administradores estão isentos desta restrição: nesses casos, o botão está desativado e o número apresentado corresponde sempre ao total de todos os grupos de raiz — os administradores veem sempre tudo, por princípio.

## Bom saber

- Num utilizador normal (não administrador) sem qualquer atribuição, "0 grupos atribuídos" significa: este utilizador atualmente não vê **nada** em áreas delimitadas por grupo (por exemplo, painel, lista de clientes) — não se trata de um erro de funcionamento, mas sim da consequência direta da falta de atribuição.
- Exceção: se atualmente **não existir nenhum** grupo no sistema, todos os utilizadores veem tudo — assim, instalações sem estrutura de grupos não precisam de manter esta definição.
- Crie primeiro a estrutura de grupos nos dados mestre, antes de efetuar atribuições aqui — sem grupos existentes, não há nada para assinalar aqui.
- Esta definição controla a **visibilidade** dos dados, não as **permissões** fundamentais de uma função — as funções/permissões são geridas de forma independente desta definição.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
