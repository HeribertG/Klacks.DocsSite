---
sidebar_position: 7
---

# Verificar a qualidade do planeamento: violações, lacunas e omissões

Depois de uma execução dos assistentes de planeamento, o Klacks apresenta três tabelas de diagnóstico junto ao resultado: onde o plano colide com uma regra, onde falta uma qualificação e o que nem chegou a ser planeado.

## Como funciona

Os três relatórios aparecem na caixa de diálogo do respetivo assistente de planeamento — não na grelha de planeamento. Fazem parte do resultado de uma execução do assistente e só são visíveis para administradores, porque o planeamento automático em geral pressupõe a função de administrador. Cada relatório indica o número das suas entradas no título e **não é sequer apresentado se não encontrou nada** — por isso, uma caixa em falta é uma boa notícia.

**Como aceder às caixas de diálogo:** O botão da varinha mágica no plano de serviço inicia, no estado padrão, diretamente uma execução de planeamento, sem mostrar qualquer caixa de diálogo. Com **Ctrl+Shift+H**, os administradores comutam o botão para um menu pendente com os assistentes de planeamento individuais (Plano, Fuzzy Harmonizer, Holistic Harmonizer, Background Optimizer, Recovery) — só através deste menu pendente é que se abrem as caixas de diálogo com as tabelas de diagnóstico.

**Lacunas de qualificação** aparecem juntamente com o resultado, ou seja, *antes* de o adotar. Colunas: Gravidade, Turno, Data, Qualificação exigida, Motivo — mais uma coluna "Colaborador", assim que pelo menos uma linha nomeia uma pessoa. Como motivo consta *Inexistente*, *Expirada* ou *Nível demasiado baixo*. Por trás disto há dois casos distintos: ou uma vaga de turno ficou vazia porque ninguém disponível reúne a qualificação exigida — nesse caso, a linha não nomeia ninguém. Ou uma pessoa ficou atribuída a um turno para o qual não está qualificada — nesse caso, o nome dela aparece. Se a qualificação só faltar no sistema, registe-a junto da pessoa; o [Catálogo de qualificações](../einstellungen/stammdaten-organisation/qualifikationen.md) descreve como as qualificações são geridas. Caso contrário, escale outra pessoa ou ajuste o requisito do turno.

**Violações de compliance** aparecem *depois* de ter adotado o resultado. Colunas: Data, Colaborador, Comentário; o comentário nomeia a regra violada em texto simples, com os valores concretos. Linhas vermelhas são erros, amarelas são avisos e notas. Nos dois assistentes de harmonização, o relatório mostra exclusivamente o que o novo cenário traz **adicionalmente** em relação ao plano real — e, além disso, quantas dessas violações estão configuradas em modo de bloqueio. Estas impedem que o cenário seja adotado até serem corrigidas ou explicitamente substituídas por uma pessoa autorizada.

**Colocações ignoradas** só existem no assistente de planeamento de turnos, também depois da adoção — e sempre a vermelho. Colunas: Data, Colaborador, Turno, Motivo. Aqui não consta o que foi planeado, mas sim o que o Klacks deliberadamente **não** escreveu: atribuições que teriam violado uma regra configurada em modo de bloqueio. O motivo aparece como uma categoria curta ("Tempo de descanso demasiado curto", "Demasiados dias de trabalho consecutivos", "Colisão de horário" …). Consoante a situação, o Klacks oferece às pessoas autorizadas a opção de ainda assim adotar a execução com substituição (override); todas as outras recebem a indicação de repetir o assistente com a substituição ativada ou de pedir a uma pessoa autorizada. Cada substituição fica registada.

Quais as regras verificadas e com que rigor se aplicam, define-o em [Regras de planeamento](../planen/planungsregeln.md); como o plano é gerado, descreve-o [Planeamento automático: um clique, o resto corre em segundo plano](../planen/auto-planung.md).

## Bom saber

- Uma entrada bloqueada não descarta o plano inteiro: só as atribuições afetadas ficam de fora, as entradas corretas da mesma pessoa são escritas na mesma.
- Na gravidade das lacunas de qualificação vigora uma regra simples: **Erro** só quando falta completamente uma qualificação marcada como obrigatória. Uma qualificação expirada, um nível demasiado baixo e qualquer requisito opcional aparecem como **Aviso**.
- Uma vaga de turno vazia só aparece nas lacunas de qualificação quando realmente ninguém disponível era elegível. Se ficou vazia por outros motivos, trata-se de subcobertura comum e não é reportada aqui.
- Quando o planeamento automático corre como execução global, o Klacks comunica o resultado apenas como uma breve notificação com o número de lacunas de qualificação — as tabelas detalhadas pertencem às caixas de diálogo de cada assistente.
- Os relatórios são apenas vistas: não podem ser editados e não alteram nada. As correções fazem-se na [Grelha de planeamento: a sua matriz de tempo interativa](../planen/plan-raster.md) ou através de uma nova execução.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
