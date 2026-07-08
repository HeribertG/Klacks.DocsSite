---
sidebar_position: 6
---

Com o Report Designer, cria os seus próprios modelos de impressão — desde o plano de serviço até à lista de moradas — diretamente no Klacks, sem ferramentas externas.

## Como funciona

Um relatório é composto por três áreas, que edita no separador *Designer*:

- **Cabeçalho** — é impresso na parte superior de cada página. Tem três zonas (Esquerda, Centro, Direita), que podem conter campos da base de dados, texto livre ou imagens (por exemplo, o logótipo da sua empresa, carregado através do gestor de imagens).
- **Corpo** — contém uma ou mais tabelas de dados. As colunas são adicionadas por arrastar e largar a partir da lista de campos; a ordem também é ajustada por arrastar e largar, e a largura através de um campo de percentagem por coluna.
- **Rodapé** — é impresso na parte inferior de cada página.

Cada tabela está associada a uma **fonte de dados**, escolhida no separador *Fonte de dados*: Plano de trabalho (Schedule), Moradas em lista ou detalhe, Ausências, Turnos, Grupos ou Container Template. A fonte de dados determina quais os campos disponíveis.

Para a formatação estão disponíveis:
- **Formatação** por célula e por texto livre: tipo de letra, tamanho, Negrito/Itálico/Sublinhado, cor do texto, alinhamento.
- **Contornos de célula** individuais por lado (cima/direita/baixo/esquerda), com estilo e cor de linha.
- **Rodapé de tabela** com campos SUM: as colunas numéricas são somadas automaticamente.
- **Linhas de texto livre** antes ou depois das tabelas de dados — por exemplo, para observações, condições ou campos de assinatura.
- **Definições de página** no separador *Geral*: orientação vertical ou horizontal, tamanho do papel (A4, A3, B4/B5 JIS, Letter) e margens de página em mm.

## Bom saber

- **Campos combinados (Merged Fields):** Através da barra de ferramentas do campo selecionado, pode combinar vários campos numa única coluna; o separador (vírgula, espaço, quebra de linha, hífen) é configurável.
- Na fonte de dados **Plano de trabalho** existem duas opções adicionais: *Agrupar entradas por dia* (várias entradas no mesmo dia numa única linha) e *Mostrar período completo* (todos os dias, mesmo sem entradas).
- O rodapé da tabela ativa-se através de uma caixa de verificação diretamente sob a respetiva tabela; a legenda SUM pode ser mostrada ou ocultada separadamente para o campo de rodapé.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
