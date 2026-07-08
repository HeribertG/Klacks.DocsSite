---
sidebar_position: 1
---

# Planeamento automático: o plano em segundos

A parte mais trabalhosa do planeamento de serviços — atribuir pessoas a turnos — é feita pelo Klacks com um clique.

## Como funciona

Por trás do planeamento automático de 1 clique está um **algoritmo genético**: gera milhares de variantes de plano, avalia-as e combina as melhores entre si — até se chegar a uma solução equilibrada. As regras rígidas têm sempre prioridade; só depois contam outros objetivos:

- **Regras** — direito do trabalho, tempos de descanso, qualificações e disponibilidades não são negociáveis: nenhum resultado, por melhor que seja, pode violar uma regra rígida
- **Cobertura** — cada turno é preenchido com o número de pessoas exigido
- **Justiça** — as horas de trabalho distribuem-se de forma equilibrada, e a sequência de turnos por pessoa segue, sempre que possível, o padrão manhã → tarde → noite
- **Continuidade** — sempre que possível, os colaboradores mantêm-se no seu local de trabalho habitual

Inicia o planeamento automático diretamente a partir do plano de serviço, para o período selecionado. O resultado aparece como um rascunho de plano normal: tudo continua ajustável manualmente, nada é fixado sem confirmação.

## Bom saber

- As qualificações funcionam como um limite real: quem não tem uma qualificação exigida não é escalado.
- O planeamento automático respeita as entradas já existentes — pode, portanto, definir primeiro os pontos fixos e deixar preencher o resto.
- Se um resultado não agradar, basta planear novamente: o algoritmo encontra alternativas equivalentes.

![Grelha de plano de serviço do Klacks](/img/app-schedule-de.png)

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
