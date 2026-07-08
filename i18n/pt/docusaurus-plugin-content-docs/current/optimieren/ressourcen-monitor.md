---
sidebar_position: 3
---

O Monitor de Recursos mostra, de relance, como está a ocupação de pessoal de um grupo (ou de todos os grupos) no ano selecionado — uma barra por dia, ao longo de 365 dias, todo o percurso anual.

## Como funciona

A representação segue o "Capacity vs. Workload Chart" estabelecido no planeamento de pessoal (conhecido na literatura de gestão de projetos como "Resource Histogram"). Os elementos:

- **Barras verdes — Turnos:** Número de turnos planeados no dia. Cada turno conta como uma posição de colaborador; os turnos-contentor contam como 1.
- **Barras cinzentas — Ausências:** Número de colaboradores ausentes, empilhados sobre as barras verdes. Um registo completo de férias ou doença conta como 1, um registo de meio dia conta como 0.5 — também ao fim de semana.
- **Linha ponteada cor-de-rosa — Disponibilidade operacional pretendida:** Quantos colaboradores estariam em média disponíveis, se os dias de trabalho pretendidos por semana forem respeitados (padrão: 5 dias de trabalho, 2 dias de descanso). Este é o objetivo do planeamento.
- **Linha tracejada vermelha — Disponibilidade operacional máxima:** O máximo físico/legal com o número máximo permitido de dias de trabalho consecutivos (padrão: 6). Está sempre ao nível ou acima da linha cor-de-rosa.
- **Linha azul — Número de colaboradores:** Total do efetivo com contrato ativo no respetivo dia (número de efetivos).

**Leitura:** Se o topo das barras verdes se aproximar da linha cor-de-rosa, o efetivo está a ser utilizado de forma ótima. A diferença entre a linha azul e o topo das barras empilhadas é a sua reserva.

Com os botões de seta no canto superior direito, muda de ano; através da seleção de grupo, restringe a um local ou a uma equipa.

## Bom saber

- Valor de experiência: o topo das barras cinzentas de ausência não deve representar mais de um terço da diferença entre os turnos e o efetivo total — caso contrário, a reserva operacional fica em risco e os picos de doença ou de férias tornam-se difíceis de preencher.
- Os valores são estimativas e aproximações, não um apuramento exato — dão uma impressão da disponibilidade.
- Os turnos provêm do planeamento, não da realização — por isso, também os turnos futuros são visíveis.
- Num contrato 24/7, a linha cor-de-rosa é suavizada ao longo da semana (cerca de 0,71 por pessoa e dia de calendário); num contrato de segunda a sexta-feira, está em 1,0 nos dias úteis e em 0 ao fim de semana.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
