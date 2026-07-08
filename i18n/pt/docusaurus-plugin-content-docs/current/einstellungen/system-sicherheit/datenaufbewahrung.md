---
sidebar_position: 3
---

# Retenção de dados

Em Definições > Retenção de dados, define durante quanto tempo os registos eliminados — colaboradores, endereços, grupos, serviços, horários de trabalho, ausências, pausas e outros — permanecem no sistema antes de serem removidos de forma irrevogável.

## Como funciona

**Eliminação em duas etapas:** Quando elimina um registo no Klacks, este é inicialmente apenas marcado com uma sinalização de eliminação lógica (soft delete) (marcado como eliminado, mas fisicamente ainda presente). Só depois de expirado o prazo aqui configurado é que um serviço em segundo plano, executado diariamente, remove **física e irrevogavelmente** as linhas marcadas como eliminadas da base de dados — em todas as tabelas afetadas, não apenas numa única área.

**Configurar o prazo de retenção:** O campo de entrada aceita valores entre 30 e 36 500 dias (cerca de 1 mês a 100 anos); ao lado, o Klacks mostra ainda o prazo em anos/meses. O valor padrão é 3650 dias (10 anos).

## Bom saber

- Uma redução do prazo também tem efeito sobre registos já existentes, eliminados há muito tempo: tudo o que for mais antigo do que o novo prazo é removido na próxima execução do serviço em segundo plano — verifique, antes de reduzir o prazo, se é isso que pretende.
- A eliminação física é definitiva — depois disso já não há recuperação possível, nem mesmo através do suporte.
- Esta definição é a base técnica dos prazos de eliminação descritos na declaração de proteção de dados; aplica-se globalmente a todos os tipos de dados com capacidade de eliminação lógica, não é configurável por módulo.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
