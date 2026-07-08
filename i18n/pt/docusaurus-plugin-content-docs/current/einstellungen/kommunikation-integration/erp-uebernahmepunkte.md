---
sidebar_position: 5
---

Em Definições > Pontos de Receção ERP configura como as encomendas de um sistema ERP externo são importadas automaticamente para o Klacks sob a forma de ficheiros XML.

## Como funciona

**Três formas de entrega:** O sistema ERP pode disponibilizar ficheiros no repositório de ficheiros do ponto de receção (o Klacks recolhe-os automaticamente de acordo com um plano temporal), enviá-los diretamente por HTTP-POST para um endpoint de importação (autenticado com um token de acesso), ou um administrador carrega manualmente o ficheiro XML nesta página por arrastar e largar.

**O ponto de receção** é a caixa de entrada central para todos os ficheiros de importação, gerida pelo próprio Klacks — mostra três áreas: Entrada (aguarda a próxima execução), Processado (arquivo) e Erro (ficheiros inválidos com o respetivo motivo de erro, com possibilidade de nova importação). Um plano temporal (expressão cron, por defeito de hora a hora) e um interruptor de ativação para pausar controlam a recolha automática.

**Os tokens de acesso** só são necessários quando um sistema ERP entrega ficheiros por push. Cada token começa por `klacks_erp_`, é válido entre 1 e 730 dias (por defeito 365) e é apresentado em texto simples **apenas uma vez, no momento da criação**. Um token deste tipo é válido exclusivamente para o endpoint de importação, não para o restante acesso à API, e pode ser revogado a qualquer momento.

**Processamento:** As encomendas são associadas a um cliente existente ou recém-criado com base no ID do sistema de origem e na referência externa do cliente (ou, em alternativa, na empresa/código postal/rua), e surgem inicialmente como rascunho, que os planeadores têm de verificar e selar. Uma nova entrega alterada de uma encomenda já selada encerra automaticamente a antiga e cria uma nova versão associada; entregas repetidas sem alterações não desencadeiam nada.

## Bom saber

- Encomendas individuais com erros (por exemplo, sem dia da semana ou com referência duplicada) são rejeitadas sem bloquear as restantes encomendas válidas do mesmo ficheiro; mesmo assim, o ficheiro completo acaba na área de erro, para que nada passe despercebido.
- Os ficheiros processados são arquivados, não eliminados.
- O formato XML exato (campos obrigatórios, formatos de data, lógica de dias da semana) está documentado diretamente no manual, na própria página de definições, bem como através de um ficheiro de exemplo disponível para download.
- Esta configuração encontra-se na área de Definições, estando por isso reservada a perfis administrativos.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
