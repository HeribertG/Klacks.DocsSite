---
sidebar_position: 3
---

A gestão de moradas e pessoas é o coração dos seus dados mestre: colaboradores, clientes e externos com moradas, dados de contacto, contratos, pertença a grupos e qualificações — acessível através do ícone de pessoas na navegação.

## Como funciona

**Criar colaboradores:** Os campos obrigatórios são Nome próprio, Apelido e Sexo (Mulher/Homem/Intersexual/Pessoa coletiva). Opcionalmente, regista data de nascimento, e-mail, telefone, morada (rua, código postal, localidade, cantão, país) bem como Grupo/Departamento. Em alternativa, pode deixar a criação a cargo do assistente Klacksy («cria um colaborador …»).

**Estado:** O estado resulta automaticamente da data de entrada e de saída da associação — não existe um campo de estado manual. Distinguem-se *Ativos* (associação a decorrer atualmente), *Antigos* (data de saída no passado) e *Futuros* (data de entrada ainda por vir).

**Grupos e departamentos:** Os colaboradores podem ser associados a grupos. A estrutura é hierárquica (por exemplo, `Klacks AG > TI > Desenvolvimento`), é permitida a associação múltipla, e as permissões podem ser controladas ao nível do grupo.

**Contratos:** Cada pessoa pode ter vários contratos, por exemplo numa mudança de percentagem de ocupação. Os próprios modelos de contrato são de definição livre: em Definições > Contratos cria contratos próprios com nome, percentagem de ocupação, horas previstas/máximas/mínimas, suplementos (noturno, dominical e de feriado) e intervalo de pagamento; a cada contrato pode ainda associar-se um calendário de feriados próprio, permitindo, por exemplo, refletir feriados diferentes consoante o cantão. Cada contrato é válido por tempo limitado ou indeterminado.

**Importação:** Não existe uma importação CSV para dados mestre. Diretórios existentes são assumidos automaticamente por sincronização LDAP/Active Directory através de um Identity Provider; pessoas individuais são criadas manualmente ou através do Klacksy.

**Pesquisar e filtrar:** A pesquisa de texto livre encontra pessoas por nome, nome próprio, empresa ou número de colaborador, bem como por número de telefone/código postal; adicionalmente, pode filtrar por cantão, estado (Ativos/Antigos/Futuros) e grupo.

## Bom saber

- Só os *Ativos* podem ser planeados — verifique a data de entrada/saída da associação se alguém não aparecer no plano de serviço.
- Vários contratos por pessoa são normais, por exemplo numa mudança de percentagem de ocupação — não precisa de criar uma segunda pessoa para isso. Novos modelos de contrato (percentagem de ocupação, suplementos, calendário) cria-os você mesmo em Definições > Contratos.
- Crie primeiro a estrutura de grupos e associe depois as pessoas — assim, as permissões ao nível do grupo aplicam-se desde o início.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
