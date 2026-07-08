---
sidebar_position: 1
---

Em Definições > Regras de Planeamento (Valores Padrão) define os valores que são automaticamente pré-preenchidos ao criar um novo contrato ou uma nova regra de planeamento.

## Como funciona

A página reúne vários grupos de pré-preenchimentos:

- **Horas de trabalho:** Horas de trabalho diárias (horário previsto), limite de horas extraordinárias (h/semana), horas mensais garantidas, mínimas e máximas, bem como o número de horas a tempo inteiro.
- **Valores-limite das regras de planeamento:** Máx. de dias de trabalho, mín. de dias de descanso entre dois blocos de trabalho, mín. de horas livres entre dois dias de trabalho, intervalo ótimo máximo entre turnos, máx. de horas diárias/semanais e máx. de dias de trabalho consecutivos — os mesmos valores que também são definidos numa regra de planeamento individual.
- **Suplementos:** Suplemento noturno, de feriado, de sábado e de domingo, em percentagem.
- **Dias de trabalho padrão e fim de semana:** Quais os dias da semana considerados dias de trabalho, se se pratica trabalho por turnos (turnos da manhã/tarde/noite), quais os dias considerados fim de semana e em que dia da semana começa a semana.
- **Comandos de planeamento (palavras-chave):** Os comandos de texto `FREE`, `EARLY`, `LATE`, `NIGHT`, bem como os seus equivalentes negados `-FREE`, `-EARLY`, `-LATE`, `-NIGHT`, são configuráveis aqui. Se uma pessoa escrever diretamente estas palavras numa célula de dia no plano de turnos, o Klacks não as reconhece como uma nota, mas sim como um pedido: `FREE` significa "se possível, não planear nesse dia", `EARLY`/`LATE`/`NIGHT` preferem ou impõem um determinado tipo de turno, as variantes negadas excluem o oposto. Tanto o planeamento automático como o Harmonizer têm estes pedidos em conta como diretriz.

## Bom saber

- Esta página gere **valores padrão globais** — as alterações afetam apenas os contratos ou regras de planeamento **recém-criados**, não retroativamente os já existentes.
- Os valores-limite das regras de planeamento aqui são idênticos aos que, de outra forma, define individualmente por contrato — aqui define apenas o valor inicial com que um novo contrato é criado.
- Os comandos de planeamento estão ocultos por defeito no plano de turnos e podem ser exibidos através de um ícone próprio na barra de ferramentas.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
