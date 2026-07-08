---
sidebar_position: 4
---

# Funções e Permissões

O Klacks conhece exatamente dois níveis de permissões atribuíveis para contas de início de sessão: **Supervisor** e **Admin**. Não existe uma terceira função, tecnicamente distinta — termos como "Planeador" descrevem abaixo uma **função na atividade diária**, não um nível de permissão adicional.

## As duas funções reais

**Supervisor** pode criar, editar e eliminar moradas, grupos, contratos, ausências e turnos, bem como aprovar um dia ou um grupo no plano de turnos e retirar novamente essa aprovação. A simples confirmação de horários de trabalho individuais, por outro lado, não requer nenhuma função especial — qualquer conta de início de sessão pode fazê-lo.

**Admin** pode adicionalmente tudo o que o Supervisor pode, mais: acesso a todas as definições (incluindo a própria gestão de utilizadores), encerrar e reabrir períodos, bem como gerir áreas especialmente protegidas, como Identity Provider, Relatórios e Regras de Calendário.

A atribuição é feita através de um menu pendente na gestão de utilizadores (ícone de roda dentada) e tem efeito imediato, sem necessidade de um clique de gravar separado.

## "Planeador" como função, não como papel de permissão

No dia a dia, é geralmente uma conta de Supervisor que assume o verdadeiro trabalho de planeamento — desencadear o planeamento automático, ajustar no quadro de planeamento por arrastar e largar, submeter dias ou grupos para aprovação. Não se trata de um nível de permissão próprio, mas simplesmente das permissões que uma conta de Supervisor já possui.

## Bom saber

- O último utilizador com sessão iniciada é também apresentado na gestão de utilizadores, mas não pode aí ser editado, ter as suas permissões alteradas ou ser eliminado.
- Encerrar definitivamente ou reabrir períodos permanece exclusivamente reservado ao Admin — mesmo que um Supervisor já tenha aprovado dias ou grupos.
- Uma conta de início de sessão não precisa necessariamente de estar associada a uma ficha de dados mestre de colaborador — a gestão de utilizadores e a gestão de pessoas são áreas distintas.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
