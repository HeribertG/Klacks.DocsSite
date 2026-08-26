---
sidebar_position: 8
---

# O Klacksy como membro proativo da equipa

O Klacksy não espera que lhe perguntem. Uma vez por hora, observa a operação em segundo plano e comunica o que nota: turnos por preencher, contratos a expirar, períodos em atraso, dados-base em falta. Até onde pode ir, os administradores definem-no individualmente para cada tipo de achado — de fábrica, ele apenas notifica e nunca age por iniciativa própria.

Não confundir com os [Níveis de autonomia](../einstellungen/klacksy-konfiguration/autonomie-stufen.md): ali trata-se de quanta confirmação o Klacksy precisa quando **você** lhe pede algo no chat. Aqui trata-se do oposto — daquilo que ele faz **sem ser solicitado**.

## Como funciona

**O que é um achado:** um achado é uma constatação que o Klacksy fez por conta própria — por exemplo, "este turno ainda está por preencher daqui a três dias" ou "este período de faturação está em atraso há uma semana". Para isso, corre de hora a hora uma passagem em segundo plano sobre cerca de uma dúzia de regras de verificação. A própria deteção está fixada no código: nenhum modelo de linguagem decide se algo é um achado — a mesma regra produz sempre o mesmo resultado, independentemente do fornecedor de IA que utiliza.

**Catorze tipos de achado são configuráveis,** entre eles Turno por preencher, Lacuna na disponibilidade, Contrato a expirar, Dados-base em falta, Encomenda em aberto, Fecho de período iminente, Período em atraso, Desvio das horas previstas, Contentor vazio, Conflito de bloqueio e Cenário aberto. Dois deles não surgem na passagem horária, mas sim na importação de encomendas ERP.

**Os três níveis — individualmente por tipo de achado:** em Definições > Klacksy > "Margem de ação do Klacksy" (modo especialista, só administradores), cada tipo de achado tem a sua própria linha, com a coluna "Nível máximo":

- **Apenas notificar** — o Klacksy avisa, e mais nada. Esta é a definição de fábrica para cada tipo de achado.
- **Preparar cenário** — o Klacksy prepara adicionalmente uma solução pronta como cenário, que uma pessoa só precisa de aceitar.
- **Executar** — o Klacksy resolve o achado por si mesmo e depois reporta sobre isso.

A partir de "Preparar cenário" é obrigatório indicar uma pessoa responsável: a ação corre sob os direitos dela, e é ela quem recebe o relatório. A isto acrescem, por linha, quotas que limitam quantas vezes o Klacksy pode agir (de fábrica, no máximo 5 ações por dia e 3 dentro de 60 minutos), bem como um interruptor "Ativo". Este controla exclusivamente a ação autónoma — se e como uma notificação chega até si continua a ser a sua definição pessoal de notificações.

**O limite rígido no programa:** um nível mais alto só tem efeito onde exista, de todo, uma resolução automática definida para o tipo de achado. Se não existir, fica-se pela notificação — independentemente da definição, e mesmo quando alguém delega o achado ao Klacksy num caso concreto. Este limite está fixado no código do programa e não pode ser aberto através da interface. Atualmente existe exatamente uma resolução definida: no tipo de achado "Contentor vazio", o Klacksy pode criar por si mesmo o modelo de vaga em falta.

**Onde os achados chegam:** no botão do Klacksy no cabeçalho, um contador mostra os avisos por ler. Um clique abre a barra lateral, onde os achados ficam reunidos sob o título "Enquanto estiveste ausente…". Por cada notificação estão disponíveis "Mostra-me isso" (salta para o local afetado), "Útil" e "Ocultar" — este último, à escolha, com um motivo ("Não quero este tipo de avisos, de um modo geral", "Desta vez o aviso estava errado", "Já está resolvido") ou sem motivo. Onde é permitido, existe adicionalmente "Faz tu": uma autorização pontual que eleva exatamente esse achado para "Preparar cenário". Também pode perguntar diretamente ao Klacksy no chat quais os achados atualmente em aberto.

**Quando um achado é resolvido:** a linha afetada apresenta, na vista de contentor da lista de turnos, a marcação "Resolvido pelo Klacksy em …" — tanto quando o próprio Klacksy executou a resolução, como quando uma pessoa aprovou um cenário preparado pelo Klacksy. Quando é o Klacksy a executar, é ainda enviado um relatório à pessoa responsável.

**A paragem de emergência:** por cima do chat, os administradores veem o interruptor "O Klacksy atua de forma autónoma: LIGADO/DESLIGADO". Desligar repõe de imediato cada tipo de achado em "apenas notificar" — incluindo autorizações pontuais já concedidas. Os avisos não param com isso: a paragem de emergência interrompe a ação, não a notificação. O mesmo interruptor está também disponível no cartão de definições.

## Bom saber

- De fábrica, cada tipo de achado está em "Apenas notificar" — o Klacksy só age quando um administrador aumenta conscientemente um nível. A paragem de emergência não é necessária para isso: não está ativada de fábrica e fica em reserva como travão imediato.
- As notificações são enviadas apenas a administradores e a planeadores autorizados. Quem só pode ver determinados grupos também só recebe achados desses grupos; os administradores veem tudo. Os planeadores recebem os achados, mas não veem a definição de níveis.
- O nível "Preparar cenário" só se aplica a resoluções que possam ser representadas como cenário. A resolução hoje definida não pertence a este grupo — nela, só "Executar" tem efeito.
- O cartão de definições e o interruptor de autonomia exigem direitos de administrador; sem eles, não é possível consultar o estado de autonomia.
- O ritmo horário está fixado no sistema e não é configurável através da interface; a primeira passagem começa dois minutos depois do arranque do programa.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
