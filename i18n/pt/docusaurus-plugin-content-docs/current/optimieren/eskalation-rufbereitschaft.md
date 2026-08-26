---
sidebar_position: 8
---

# Escalonamento e disponibilidade de chamada

Alguém falta, e o turno começa dentro de poucas horas. O Klacks não acorda a equipa toda ao acaso — em vez disso, percorre uma lista de chamada previamente definida, uma pessoa de cada vez, até alguém assumir.

## Como funciona

- **A cadeia é despoletada ao cobrir uma falta**: para cada dia afetado em que a pessoa ausente tinha um turno, o Klacks cria um escalonamento próprio — referente exatamente a esse turno (ver [Ausências à vista](./absenzen-im-blick.md)).
- **Configura a lista de chamada uma única vez**: em Definições > Lista de Chamada de Escalonamento encontram-se todos os utilizadores com visibilidade de grupo e número de telefone registado. Define a ordem por arrastar e largar, e ela é guardada de imediato — uma ordem única para toda a operação.
- **Quem é efetivamente chamado decide-se no momento real**: o Klacks seleciona, a partir da sua ordem, as pessoas com visibilidade sobre o grupo superior, ignora todas as que estão atualmente registadas como ausentes, e coloca os administradores como rede de segurança no fim.
- **A notificação é feita por vários canais**: o pedido chega sempre à caixa de entrada do Klacks, aparece de imediato na aplicação a pessoas com sessão iniciada e é também enviado através do serviço de mensagens associado — porque às 3 da manhã ninguém está sentado diante de um browser aberto. A ligação ao serviço de mensagens e o avanço automático da cadeia são ativados por instalação.
- **A aceitação faz-se com uma palavra**: quem está a ser contactado no momento responde brevemente no serviço de mensagens («Eu assumo»); os administradores podem, em alternativa, usar *Assumir* na página *Escalonamentos em curso*. Depois disso, a pessoa que aceitou recebe uma confirmação, e todas as anteriormente contactadas recebem uma nota silenciosa — ninguém é acordado uma segunda vez.

## Bom saber

- O prazo não é o início do turno em si, mas uma antecedência antes dele (por defeito, duas horas) — assim, a pessoa que assume ainda tem tempo para se deslocar.
- O tempo disponível para cada nível é calculado pelo Klacks a partir do prazo restante: quanto mais próximo o turno, mais curtas as rondas. Se o tempo se tornar demasiado apertado para uma sequência, o Klacks contacta todos os restantes em simultâneo.
- Na página *Escalonamentos em curso* vê o estado de cada nível — a aguardar, contactado, assumido, sem resposta, ignorado ou cancelado. Enquanto um escalonamento está em curso, aparece adicionalmente um ícone de aviso no cabeçalho.
- A lista de chamada e a visão geral são reservadas a administradores (ver [Funções e permissões](../erste-schritte/rollen-und-rechte.md)). Os administradores podem cancelar um escalonamento em curso — com justificação, para que mais tarde se perceba porque é que a cadeia foi interrompida.
- Quem não tem número de telefone na conta de utilizador nem sequer aparece na lista de chamada. Para o pedido através do serviço de mensagens é ainda necessário um contacto de mensagens associado. As ausências da disponibilidade de chamada são geridas diretamente na mesma lista: de–até, com motivo opcional, e de forma permanente se desejado.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
