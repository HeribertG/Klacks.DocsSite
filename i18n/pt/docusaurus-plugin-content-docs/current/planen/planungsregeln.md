---
sidebar_position: 5
---

As regras de planeamento definem as condições-quadro para o planeamento automático de serviços — horários de trabalho, tempos de descanso e capacidades que o Klacks respeita ao distribuir os serviços.

## Como funciona

Uma regra de planeamento é atribuída a um **contrato**. Os valores-limite definidos aplicam-se, assim, a todos os colaboradores com esse contrato. Cada regra abrange quatro áreas:

**Dias de trabalho e tempos de descanso**
- Máx. dias de trabalho: regra flexível para a duração de bloco preferida, antes de ser planeado um dia de descanso (por exemplo, "trabalhar 5 dias, depois descanso") — uma violação não invalida o plano, torna-o apenas menos ótimo
- Mín. dias de descanso entre dois blocos de trabalho
- Mín. horas livres entre dois dias de trabalho (tempo de descanso desde o fim de um dia de trabalho até ao início do seguinte)
- Máx. intervalo ótimo entre turnos, em horas
- Máx. dias de trabalho consecutivos sem dia de descanso

**Limites de horas**
- Máx. horas diárias e máx. horas semanais
- Horas de trabalho diárias (horário previsto)
- Limite de horas extraordinárias: a partir deste número de horas semanais, as horas são consideradas horas extraordinárias

**Horas mensais**
- Horas garantidas (número mínimo assegurado ao colaborador por mês)
- Horas mínimas e máximas por mês
- Horas de tempo inteiro (número de horas mensais correspondente a um emprego a tempo inteiro)

**Férias**
- Dias de férias por ano civil

## Bom saber

- Ao criar uma nova regra, os **valores predefinidos das definições** (Regras de planeamento — valores predefinidos) são adotados automaticamente; pode depois ajustar cada valor individualmente.
- As regras de planeamento aplicam-se através do contrato — não precisa de as manter por pessoa. Se uma regra for alterada, isso afeta todos os colaboradores com esse contrato.
- O limite de horas extraordinárias e o horário previsto são duas coisas diferentes: o horário previsto é o padrão por dia, o limite de horas extraordinárias é o limiar por semana.
- "Máx. dias de trabalho" (preferência flexível para a duração de bloco) e "Máx. dias de trabalho consecutivos" (limite rígido, nunca excedível) são duas regras diferentes — não confundir.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
