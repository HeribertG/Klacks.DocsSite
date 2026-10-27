---
sidebar_position: 9
---
# Perguntas frequentes

As perguntas mais frequentes antes da primeira utilização — com respostas honestas, mesmo quando a resposta é «ainda não».

## Experimentar e começar

**Tenho de instalar o Klacks para o ver?**
Não. O [Playground](https://play.klacks-software.ch) é uma instância pública com dados de demonstração; inicia sessão com `admin@test.com` / `P@ssw0rt1` e tem todos os direitos de administrador. A base de dados é reposta todos os dias às 04:00 (hora suíça) — não registe lá dados pessoais reais.

**Quanto tempo demora uma instalação?**
O instalador é um único comando. Gera as palavras-passe e o certificado, fixa a versão atual, inicia o stack e aguarda até que tudo esteja saudável. A maior parte do tempo é gasta a transferir as imagens. Os requisitos encontram-se em [Requisitos do sistema](../betrieb/systemvoraussetzungen/).

**Porque é que tenho de criar uma conta de administrador própria?**
Porque a conta incluída tem uma palavra-passe publicamente conhecida. O Klacks deixa-o iniciar sessão com ela exatamente uma vez e exige depois a sua própria conta; a seguir, a conta predefinida é desativada. É intencional, não é um erro.

## Operação

**Onde estão os meus dados?**
Na sua infraestrutura. O Klacks não envia os seus dados de volta ao fabricante. Se integrar um modelo de IA como serviço externo, aplicam-se, naturalmente, a **esse** serviço as respetivas condições — a escolha do modelo é sua.

**Preciso obrigatoriamente de um fornecedor de cloud?**
Não, esse é o cerne do On-Premise: o stack corre no seu servidor. Precisa apenas de acesso **de saída** às fontes de pacotes e de atualizações (`ghcr.io`, `github.com`). Uma operação totalmente sem acesso à Internet **não** existe atualmente — as instalações em redes isoladas são uma fase de desenvolvimento ainda não concretizada.

**Como faço cópias de segurança dos meus dados?**
Por si — a cópia de segurança fica a seu cargo. Como fazê-lo e que volume não pode esquecer em caso algum encontra-se em [Cópia de segurança e restauro](../betrieb/backup-und-wiederherstellung/).

**O que acontece se uma atualização correr mal?**
O serviço de atualização faz antes uma cópia de segurança da base de dados, comuta as novas versões em conjunto e verifica depois o estado de saúde. Se a nova versão não estiver saudável, reverte automaticamente. Detalhes em [Atualizações e rollback](../betrieb/updates-und-rollback/).

**O Klacks funciona no meu hardware atual?**
Como valor de referência: **8 GB de RAM e 4 vCPU**. Para hosts mais pequenos existem definições documentadas que libertam memória — com o custo de a pergunta seguinte ao Klacksy demorar um pouco mais.

**O Klacks é compatível com o meu Identity Provider?**
Sim. O Klacks pode ser ligado a um fornecedor de identidade existente, em vez de gerir contas próprias — veja [Identity Provider](../einstellungen/kommunikation-integration/identity-provider/).

## Funcionalidades

**Para que setores é adequado o Klacks?**
Foi concebido para operações por turnos e serviços: cuidados ao domicílio e Spitex, hospitais, serviços de segurança, serviços de limpeza e domésticos, bem como logística.

**Que idiomas fala a interface?**
A documentação está disponível em 25 idiomas, entre os quais alemão, inglês, francês, italiano, espanhol, polaco, japonês, chinês (simplificado e tradicional), árabe e hebraico — o árabe e o hebraico também com o sentido de leitura da direita para a esquerda.

**Tenho de me decidir por um modelo de IA?**
Escolhe o fornecedor e o modelo e pode alterá-los. Como configurar e verificar isto encontra-se em [Fornecedores de LLM e modelos](../einstellungen/klacksy-konfiguration/llm-provider-und-modelle/) e [Teste de ligação do modelo](../einstellungen/klacksy-konfiguration/modell-verbindungstest/).

**Quanto custa o Klacks?**
O código-fonte está sob a GNU Affero General Public License v3 (AGPL-3.0) — pode lê-lo, alterá-lo e operá-lo por si próprio. Se oferecer uma versão alterada a outras pessoas através de uma rede, tem de disponibilizar também a esses utilizadores o código-fonte alterado sob a AGPL-3.0. Tudo o que vá além disso (perguntas, troca de ideias, desenvolvimento) decorre através da [Comunidade Klacks no Discord](https://discord.gg/YRP8p2abVC) e do [repositório público do código-fonte](https://github.com/HeribertG/Klacks.Api).

**O Klacks está concluído?**
Não, e isso não está escondido em lado nenhum. O Klacks está em construção, mas é desenvolvido publicamente e utilizado de facto — no Playground pode verificar por si, a qualquer momento, o estado atual, em vez de acreditar numa descrição.

## Colaborar

**Encontrei um erro ou tenho uma pergunta.**
O mais rápido é na [Comunidade no Discord](https://discord.gg/YRP8p2abVC). Para erros no software, o aviso deve ser feito no [repositório](https://github.com/HeribertG/Klacks.Api). Ajudam sempre: a versão, o último passo antes do erro e as últimas linhas dos registos — veja [Resolução de problemas](../betrieb/fehlerbehebung/).

**Posso contribuir eu próprio?**
O código-fonte é aberto e a documentação está na mesma casa. As indicações sobre pontos pouco claros são tão bem-vindas como o código.

---

*A sua pergunta não está aqui? [Comunidade Klacks no Discord](https://discord.gg/YRP8p2abVC).*
