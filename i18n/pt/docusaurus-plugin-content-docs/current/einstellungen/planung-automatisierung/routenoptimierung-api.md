---
sidebar_position: 4
---

Em Definições > OpenRoute regista a chave de API para o serviço externo openrouteservice.org, utilizado pelo Klacks para a otimização de rotas.

## Como funciona

O OpenRouteService calcula tempos de viagem e distâncias — para deslocações de automóvel, bicicleta e a pé — fornecendo assim a base para a otimização de rotas no Klacks. No único campo desta página, introduza a sua chave de API pessoal. Pode obter uma chave gratuita através da hiperligação de registo para openrouteservice.org disponibilizada na página.

## Bom saber

- A chave é enviada diretamente do navegador para openrouteservice.org, sendo por isso deliberadamente apresentada **em texto simples**, em vez de mascarada (`***`) — ao contrário, por exemplo, das palavras-passe de e-mail. Isto está previsto para que possa detetar um erro de digitação acidental ou uma chave expirada — não se trata de um erro de apresentação.
- Na base de dados, a chave é, ainda assim, armazenada de forma encriptada.
- Sem uma chave válida, a otimização de rotas não funciona — os tempos de viagem e as distâncias não podem então ser calculados.
- Para a mera conversão de moradas em coordenadas (geocodificação), o Klacks utiliza um serviço diferente e separado — esta chave destina-se exclusivamente ao cálculo de rotas.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
