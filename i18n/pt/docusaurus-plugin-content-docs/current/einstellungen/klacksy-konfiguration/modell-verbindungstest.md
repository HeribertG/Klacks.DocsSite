---
sidebar_position: 5
---

# Teste de Ligação do Modelo

Nem todos os modelos de linguagem são adequados para o Klacksy — ele precisa de fornecer, de forma fiável, chamadas de função estruturadas em vez de responder em texto corrido. Em Definições > Verificação de Modelos do Klacksy, o Klacks testa isso automaticamente para todos os modelos configurados.

## Como funciona

**O teste:** Um clique em "Encontrar os melhores modelos" envia a cada modelo configurado (mesmo os desativados) a mesma pequena tarefa de teste: "Cria um novo colaborador chamado Anna Müller." O modelo tem de responder com a chamada de função estruturada correspondente e os parâmetros de nome corretos — não com uma resposta em texto. Além disso, a janela de contexto tem de ter, no mínimo, 32 000 tokens, para que o prompt de sistema e as capacidades do Klacksy caibam nela. Cada teste corre com um limite de tempo de 30 segundos.

**Resultado:** Os modelos que cumprem ambos os critérios são considerados "adequados" e são ativados automaticamente; os modelos não adequados são desativados. A lista de resultados está ordenada por adequação e, depois, por capacidade de chamada de função, custo, latência e janela de contexto.

**Definir modelo padrão:** Através de "Definir como padrão" escolhe diretamente na lista de resultados qual o modelo que o Klacksy passa a utilizar por defeito. Sem uma escolha própria, o Klacks define automaticamente como padrão o modelo mais adequado.

## Bom saber

- O teste verifica todos os modelos registados, não apenas os ativados — mesmo modelos até agora desativados podem, assim, ser ativados se passarem no teste.
- Um teste aprovado não é uma proteção de custos: modelos caros mas adequados são igualmente ativados. Os custos por 1000 tokens são visíveis na lista de resultados.
- Este teste está especificamente concebido para chamadas de função relacionadas com a capacidade de ação e é independente da verificação de modelos nas definições de idioma, que se contenta com uma janela de contexto mais baixa, suficiente apenas para a limpeza de transcrições.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
