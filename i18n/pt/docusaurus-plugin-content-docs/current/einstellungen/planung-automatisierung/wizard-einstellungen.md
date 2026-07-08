---
sidebar_position: 3
---

Em Definições > Definições do Wizard, escolhe o modelo de linguagem de IA que o "Holistic Harmonizer" — um dos assistentes de planeamento do Klacks — utiliza para a sua avaliação.

## Como funciona

No menu pendente, escolhe de entre os modelos LLM ativados no Klacks aquele que o Holistic Harmonizer deve utilizar globalmente (ou "(nenhum)", para não utilizar nenhum). Através do botão "Verificar todos os modelos", o Klacks envia uma pequena imagem de teste a cada modelo ativado e verifica se este responde e consegue ler a imagem — com um tempo limite de até 90 segundos por modelo. O resultado aparece como uma tabela com modelo, fornecedor, estado (OK/Erro), tempo de resposta e um botão para adotar diretamente um modelo testado com sucesso.

O processamento de imagem não é aqui um pormenor secundário, mas sim um requisito: segundo o texto informativo da página, este assistente ("Wizard 3") precisa de modelos com processamento de imagem para funcionar.

## Bom saber

- Esta página **não** diz respeito ao planeamento automático de 1 clique, que distribui automaticamente os turnos pelos colaboradores — esse funciona através de um algoritmo genético, sem qualquer LLM, e não tem definições aqui.
- Se "(nenhum)" estiver definido como modelo, o Holistic Harmonizer está de facto desativado.
- Quais os modelos LLM disponíveis para seleção em geral (ativados/desativados) é definido noutro local, nas definições de IA — aqui escolhe apenas entre os modelos já ativados.
- O botão de verificação é um simples autoteste (disponibilidade + compreensão de imagem + tempo de resposta) e não altera, em si, quaisquer dados de planeamento.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
