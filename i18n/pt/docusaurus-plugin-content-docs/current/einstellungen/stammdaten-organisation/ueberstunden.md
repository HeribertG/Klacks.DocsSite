---
sidebar_position: 7
---

# Horas extraordinárias

Em Definições > Compliance e Regras de Suplemento (modo especialista) > Horas extraordinárias, define a partir de quantas horas acumuladas o trabalho suplementar passa a estar sujeito a suplemento, e qual o valor do suplemento em cada nível.

## Como funciona

**Base de cálculo:** Diária ou Semanal — não há mais opções. Não está prevista uma base mensal ou anual. Em "Semanal", a semana começa no primeiro dia da semana configurado.

**Até três níveis:** cada nível é composto por dois campos — "Nível X a partir de horas" (o número de horas acumuladas no dia ou na semana a partir do qual este nível entra em vigor) e "Suplemento do nível X" em percentagem. O nível mais alto configurado em cada caso não tem limite superior.

**Cada nível conta apenas as horas dentro do seu próprio intervalo**, não todas as horas a partir de zero. Se o nível 1 começar em 8 horas e o nível 2 em 10 horas, um dia de dez horas e meia paga a taxa do nível 1 pelas duas horas entre as 8 e as 10, e a taxa do nível 2 apenas pela meia hora acima disso — nunca a taxa do nível 2 para as dez horas e meia inteiras. Um único bloco de trabalho pode, assim, gerar vários lançamentos de suplemento, um por cada nível atingido.

**Um nível incompleto é ignorado silenciosamente:** se faltar a indicação de horas, ou se o suplemento for zero ou negativo, esse nível não conta. Podem, portanto, estar efetivamente ativos entre zero e três níveis.

**O suplemento é o acréscimo, não o valor total:** 25% significam um quarto de hora adicional por cada hora trabalhada nesse nível — não que a hora seja paga com o fator 1,25. O modo de suplemento ao lado (multiplicador ou valor fixo por hora) determina apenas a unidade; o cálculo por trás mantém-se igual.

**O que conta como horas já trabalhadas:** os níveis são preenchidos com base nas horas já realizadas anteriormente no mesmo dia ou na mesma semana — ordenadas primeiro por data, depois por hora de início. Assim, cada bloco de trabalho ocupa a sua própria posição no intervalo, e nenhuma hora é atribuída em duplicado a um nível mais alto. Se um registo anterior for alterado, os posteriores são recalculados.

**De onde vêm os valores:** este cartão fornece os valores válidos para toda a empresa — só se aplicam quando nenhuma outra fonte prevalece. Se ao contrato da pessoa estiver associada uma [Regra de planeamento](../../planen/planungsregeln.md) com níveis de horas extraordinárias próprios, esta tem prioridade; uma versão posterior desta regra, válida para a respetiva data, substitui, se necessário, o conjunto completo, mas, sem um bloco de horas extraordinárias próprio, recai sobre as definições da empresa aqui apresentadas, não sobre a regra de planeamento. Se não estiver configurado nenhum nível em lado nenhum, serve como último recurso apenas o **limite de horas extraordinárias** da regra de planeamento — e exclusivamente como valor inicial do primeiro nível, nunca como taxa de suplemento. As fontes nunca se misturam: quem fornece o primeiro nível também fornece todos os seguintes.

**Duas condições sem as quais não surge nenhum suplemento:**

- O turno precisa de um macro de cálculo. O trabalho num turno sem macro nunca é verificado quanto a horas extraordinárias.
- Tem de estar configurado pelo menos um nível completo. Sem um nível desses, o resultado não é "zero horas extraordinárias", mas sim que não é feita verificação nenhuma.

**Exceções:** correções e turnos de substituição nunca são verificados quanto a horas extraordinárias — só entra o trabalho regular.

**Coincidência com outros suplementos:** a mesma hora pode qualificar-se simultaneamente para horas extraordinárias e para um suplemento associado a uma circunstância, por exemplo trabalho noturno ou de fim de semana. Se ambos se somam ou se aplica apenas o mais alto não é decidido por este cartão, mas sim pelo macro de cálculo do respetivo turno.

**Gravação:** o cartão está na secção Compliance e Regras de Suplemento da página de definições (junto com Descanso compensatório, Modo de suplemento e Imposição de compliance), visível apenas no modo especialista. As alterações são acumuladas e guardadas ou descartadas através da barra de gravação comum da página de definições — não existe um botão de gravar próprio neste cartão.

## Bom saber

- Este cartão cobre exclusivamente o escalonamento automático de horas extraordinárias por limiar diário ou semanal. Já os suplementos por trabalho noturno, dominical ou em feriados são calculados de forma genérica por script — ver [Macros](../klacksy-konfiguration/makros.md).
- Um nível sem valor "a partir de horas" ou com um suplemento de 0% ou menos é ignorado — assim é possível desativar níveis individuais sem os eliminar.
- Sem pelo menos um nível completo e sem macro de cálculo no turno, não surge, em princípio, nenhum suplemento de horas extraordinárias, mesmo em turnos muito longos.
- Uma regra de planeamento com níveis de horas extraordinárias próprios substitui totalmente estes valores da empresa, não apenas níveis individuais.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
