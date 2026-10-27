---
sidebar_position: 2
---
# Cópia de segurança e restauro

Os seus dados estão por inteiro na sua infraestrutura — e por isso a cópia de segurança também fica consigo. Esta página mostra o que tem de ser copiado e como o repor.

## O que tem de ser copiado

| O quê | Onde | Com que frequência |
|---|---|---|
| Base de dados | Volume `postgres_data` | diariamente, no mínimo antes de cada atualização |
| Uploads | Volume `api-uploads` | juntamente com a base de dados |
| Documentos | Volume `api-documents` | juntamente com a base de dados |
| Chaveiro | Volume `api-dataprotection` | juntamente com a base de dados, **imprescindível** |

O volume `api-dataprotection` contém o chaveiro com que o Klacks decifra as definições cifradas (por exemplo, credenciais de canais de comunicação). Uma base de dados sem este chaveiro existe, mas não é totalmente utilizável — copie-o sempre também.

## Copiar a base de dados

```bash
docker exec klacks-postgres pg_dump -U admin -d Klacks -Fc > klacks-20260922.dump
```

O formato `-Fc` (custom) comprime e permite escolher tabelas individuais ao repor.

## Repor a base de dados

```bash
docker exec -i klacks-postgres pg_restore -U admin -d Klacks --clean --if-exists < klacks-20260922.dump
```

`--clean --if-exists` remove previamente os objetos existentes, para que o restauro não falhe por causa de tabelas já existentes.

## A armadilha: rollback após uma migração falhada

Foi precisamente aqui que, no passado, ocorreu uma falha de produção, e o mecanismo é o de qualquer rollback baseado em dump:

Se uma versão com defeito criar **tabelas novas** através de uma migração, essas tabelas não estão no dump. Ao repor, a base de dados não regressa portanto ao estado anterior — as tabelas novas **sobrevivem** ao restauro, enquanto o histórico de migrações (`__EFMigrationsHistory`) é reposto no estado anterior. A tentativa de arranque seguinte esbarra então no erro `42P07: relation "…" already exists` e a instalação fica presa num ciclo de reinícios.

Se, após uma atualização falhada, fizer o rollback manualmente, verifique por isso, depois de repor, se ficaram tabelas que não existiam na versão anterior, e remova-as **antes** de voltar a iniciar a API.

## Retenção e eliminação

O Klacks não elimina os dados apenas com uma marca de eliminação, mas **fisicamente**. Um serviço em segundo plano corre diariamente e remove de forma irrevogável todas as linhas marcadas como eliminadas cujo momento de eliminação seja anterior ao prazo configurado — e isto em **todas** as tabelas com marca de eliminação (colaboradores, moradas, grupos, turnos, tempos de trabalho, ausências, pausas, etc.). Não existe lista de exceções; a obrigação de eliminação prevalece deliberadamente sobre a recuperabilidade.

O prazo é controlado através da definição `DATA_RETENTION_DAYS`; sem indicação própria, aplica-se o valor predefinido de **3650 dias (10 anos)**. A página [Retenção de dados](../../einstellungen/system-sicherheit/datenaufbewahrung/) descreve a definição em detalhe.

## Bom saber

- **Antes de cada atualização, o Klacks faz uma cópia por si próprio.** O serviço de atualização cria uma cópia de segurança dos dados antes de ativar uma nova versão; no caso de uma migração, a cópia fica associada à operação de atualização e é reutilizada para um rollback automático ou manual. Isto não substitui uma cópia de segurança própria e **externa** — esta protege precisamente nos casos em que o próprio host é afetado.
- **Verifique a sua cópia de segurança.** Um dump que nunca foi reposto é uma suposição, não uma cópia de segurança. Crie uma base de dados descartável e reponha lá o dump antes de confiar no procedimento.
- **Guarde o chaveiro separadamente da base de dados.** Se o `api-dataprotection` estiver no mesmo conjunto de cópias e o mesmo incidente afetar ambos, a cifragem não vale nada.

---

*Questões de operação? [Comunidade Klacks no Discord](https://discord.gg/YRP8p2abVC).*
