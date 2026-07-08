---
sidebar_position: 6
---

# Sugestões de Competências do Klacksy

O Klacksy aprende com os seus próprios erros: se corrigir no chat que o Klacksy escolheu a competência errada, o sistema memoriza essa correção. Em Definições > Sugestões de Competências do Klacksy, os administradores veem quais melhorias às descrições das competências são sugeridas a partir disso, e decidem sobre a sua adoção.

## Como funciona

**De onde vêm as sugestões:** Se o Klacksy escolher no chat a competência (skill) errada para um pedido e o utilizador corrigir isso, essa sequência de chat é marcada como "corrigida". Um otimizador interno avalia essas sequências corrigidas e deriva delas alterações concretas de texto às descrições das competências — com o objetivo de que o Klacksy atribua corretamente a competência em causa da próxima vez.

**Gerar sugestões:** O botão "Gerar sugestões" desencadeia a avaliação das últimas 30 sequências de chat corrigidas e gera a partir daí novas sugestões, caso se encontrem padrões.

**Um cartão de sugestão mostra:** a competência afetada e o campo alterado, a alteração numa comparação antes/depois, uma justificação de por que a alteração faz sentido, bem como — de forma expansível — os pedidos exatos do utilizador que desencadearam a sugestão.

**Decidir:** Cada sugestão em aberto é **adotada** individualmente (a descrição da competência é alterada de imediato) ou **rejeitada** (a sugestão é descartada, sem que nada seja alterado). Não há adoção automática — uma pessoa decide sempre.

## Bom saber

- Sem correções no chat não surgem sugestões — o sistema precisa de correções de erros reais como base de treino, não apenas de utilização.
- Esta função altera apenas os textos descritivos das competências, para que o Klacksy as escolha corretamente — não altera o que uma competência realmente faz.
- Esta função requer direitos de administrador.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
