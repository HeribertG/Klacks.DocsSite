---
sidebar_position: 7
---

# Regras de Spam

Em Definições > Regras de Spam, define regras de filtragem com as quais os e-mails recebidos no módulo de Caixa de Entrada são automaticamente classificados como spam — as regras atuam tanto na receção contínua de novos e-mails (polling IMAP) como numa reavaliação posterior de e-mails já recebidos.

## Como funciona

**Criar regra:** Escolha um tipo de regra — Remetente contém, Domínio do remetente, Assunto contém ou Conteúdo contém —, introduza o padrão a verificar e clique em Adicionar.

**Gerir regras:** Cada regra pode ser ativada ou desativada através de uma caixa de verificação, sem a eliminar, bem como removida permanentemente através do botão de caixote do lixo.

## Bom saber

- As regras desativadas permanecem guardadas, mas deixam de atuar sobre e-mails novos ou reavaliados — útil para suspender uma regra a título experimental, em vez de a eliminar.
- O Klacks utiliza para a importação de encomendas ERP a mesma caixa de entrada que o módulo normal de e-mail da Caixa de Entrada (arquitetura de caixa de correio única). Uma regra demasiado abrangente (por exemplo, todo um domínio de remetente) pode, por isso, classificar teoricamente também e-mails de encomendas ERP recebidas como spam — verifique as novas regras com o devido cuidado antes de as ativar.
- Utilize regras de domínio do remetente para bloquear organizações remetentes indesejadas na íntegra, em vez de registar cada endereço individual como uma regra de remetente-contém.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
