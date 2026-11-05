---
sidebar_position: 5
---

# Pontos de integração ERP

Em Definições > Importação (visível apenas no modo especialista), cartão «Pontos de entrega ERP», configura como as encomendas de um sistema ERP externo são importadas automaticamente para o Klacks sob a forma de ficheiros XML.

## Como funciona

**Três formas de entrega:** O sistema ERP pode colocar ficheiros XML numa pasta no servidor do Klacks (o Klacks recolhe-os automaticamente de acordo com um plano temporal, assim que um ficheiro esteja inalterado há 10 segundos), enviá-los diretamente por HTTPS-POST para um endpoint de importação (autenticado com um token de acesso), ou um administrador carrega manualmente o ficheiro XML nesta página por arrastar e largar (a importação começa de imediato). Não existe SFTP; só são importados ficheiros XML no formato `ErpOrderImport`.

**O ponto de receção** é a caixa de entrada central para todos os ficheiros de importação, gerida pelo próprio Klacks — mostra três áreas: Entrada (recebido ou em importação neste momento), Processado (com um resumo por ficheiro) e Erro (ficheiros ilegíveis ou inválidos com o respetivo motivo de erro, com possibilidade de nova importação ou eliminação). Um plano temporal (expressão cron, por defeito de hora a hora) e um interruptor de ativação para pausar controlam a recolha automática.

**Que forma serve para que instalação?** Num PC de escritório (instalação Windows), a forma mais óbvia é a pasta; a pasta predefinida é `C:\ProgramData\Klacks\ErpImport\erp\orders`. Está protegida, e só o SYSTEM e os administradores podem escrever nela: um administrador tem de conceder à conta com a qual corre a exportação do ERP a permissão «Modificar» exatamente sobre a pasta `erp\orders`, e não sobre toda a pasta `ProgramData\Klacks`. Num servidor Docker próprio, a pasta é uma pasta normal do servidor: o ficheiro Compose monta a pasta `erp-import`, junto a `docker-compose.yml` (alterável através de `KLACKS_ERP_IMPORT_HOST_DIR`), em `/app/ErpImport`; dentro do contentor, o caminho da pasta é `/app/ErpImport/erp/orders`. A instalação comunica o caminho do servidor através de `KLACKS_ERP_IMPORT_HOST_PATH` (o instalador define-o); um ERP no computador do servidor escreve diretamente nesta pasta, e a conta com a qual corre a exportação precisa de permissão de escrita exatamente sobre esta pasta. As instalações mais antigas tinham um volume nomeado (named volume); o seu conteúdo é copiado uma única vez para a pasta (ver o README On-Prem, secção «Upgrading from a named volume»). No cartão aparece o caminho da pasta (no Docker, a pasta do servidor e, por baixo, o caminho dentro do contentor) com um botão para o copiar. Numa instalação alojada por nós, não há acesso a pastas do servidor: push com token de acesso ou carregamento manual.

**Os tokens de acesso** só são necessários quando um sistema ERP entrega ficheiros por push. Cada token começa por `klacks_erp_`, é válido entre 1 e 730 dias (por defeito 365) e é apresentado em texto simples **apenas uma vez, no momento da criação**. Um token deste tipo é válido exclusivamente para o endpoint de importação, não para o restante acesso à API, e pode ser revogado a qualquer momento.

**Processamento:** As encomendas são associadas a um cliente existente ou recém-criado com base no ID do sistema de origem e na referência externa do cliente (ou, em alternativa, na empresa/código postal/rua), e surgem inicialmente como rascunho, que os planeadores têm de verificar e selar. Uma nova entrega alterada de uma encomenda já selada encerra automaticamente a antiga e cria uma nova versão associada; entregas repetidas sem alterações não desencadeiam nada.

## Bom saber

- Encomendas individuais com erros (por exemplo, sem dia da semana ou com referência duplicada) são rejeitadas sem bloquear as restantes encomendas válidas do mesmo ficheiro; mesmo assim, o ficheiro aparece em Processado, assinalado com um símbolo de aviso, e as encomendas rejeitadas podem ser expandidas com o respetivo motivo.
- Os ficheiros não são movidos nem arquivados: permanecem na pasta e o seu estado fica registado na base de dados. Os ficheiros processados com êxito são eliminados automaticamente ao fim de 90 dias; os ficheiros em Erro permanecem até serem novamente importados ou eliminados.
- O formato XML exato (campos obrigatórios, formatos de data, lógica de dias da semana) está documentado diretamente no manual, na própria página de definições, bem como através de um ficheiro de exemplo disponível para download.
- Esta configuração encontra-se na área de Definições, estando por isso reservada a perfis administrativos.

---
*Experimente diretamente: [Klacks Playground](https://play.klacks-software.ch) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
