---
sidebar_position: 1
---

# Fornecedores de LLM e modelos

O Klacksy precisa de um modelo de linguagem para compreender e agir. Em Definições > Fornecedores de LLM, Modelos de LLM e Registo de sincronização de LLM, define quais os fornecedores e quais os modelos concretos que o Klacks pode utilizar para o efeito.

## Como funciona

**Adicionar fornecedor:** Um fornecedor agrupa o URL base, a versão da API e a chave de API de um fornecedor. Seis fornecedores (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) estão implementados diretamente no código; qualquer outro fornecedor funciona através de uma ligação genérica, compatível com OpenAI — o que permite integrar, por exemplo, Groq, Together AI, Fireworks, OpenRouter, xAI, Cerebras, Perplexity ou um modelo alojado pelo próprio utilizador. Através de "Procurar fornecedor", o Klacks sugere ainda fornecedores que ainda não criou: a partir de um catálogo selecionado de endereços verificados ou — caso esteja configurada uma pesquisa na internet — através de pesquisa online. Cada sugestão é verificada em tempo real quanto à disponibilidade antes de ser apresentada; os fornecedores selecionados são criados desativados e sem chave de API, que deverá adicionar posteriormente.

**Chave de API e prioridade:** Após gravar, a chave nunca mais é apresentada em texto simples na interface — apenas se está configurada ("Configurado"). A prioridade determina a ordem pela qual os fornecedores ativados são utilizados.

**Gerir modelos:** Em Modelos de LLM cria modelos individuais por fornecedor (nome de exibição, ID técnico do modelo junto do fornecedor, janela de contexto, tokens máximos, custo por 1000 tokens de entrada/saída). Um modelo pode ser marcado como modelo predefinido; um fornecedor não pode ser eliminado enquanto um dos seus modelos for a predefinição atual.

**Registo de sincronização de LLM:** Um serviço em segundo plano verifica automaticamente, por defeito a cada 24 horas, quais os modelos que passaram a estar disponíveis ou deixaram de estar disponíveis junto dos fornecedores ativados. Os modelos novos são previamente testados com um pedido de teste real e só são inseridos como ativos em caso de sucesso; os modelos que deixaram de ser oferecidos são automaticamente desativados. O registo de sincronização mostra o histórico completo por fornecedor, com data, número de modelos novos/desativados/falhados e resultados de teste expansíveis. Os administradores recebem ainda, após o próximo início de sessão, uma notificação toast sobre eventos de sincronização não lidos.

## Bom saber

- Apenas seis fornecedores (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) têm uma implementação dedicada — todos os restantes fornecedores funcionam através de uma ligação genérica, compatível com OpenAI.
- O catálogo para "Procurar fornecedor" contém atualmente doze fornecedores verificados; as sugestões da web só aparecem se, em Definições, estiver configurada uma pesquisa na internet.
- O serviço de registo de sincronização funciona em segundo plano, independentemente da sua sessão — não precisa de manter a página aberta para isso.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
