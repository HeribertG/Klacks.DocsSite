---
sidebar_position: 1
---

# Instalação e Playground

Experimente o Klacks num minuto — e instale-o em poucos minutos. Sem registo, sem conversas de vendas.

## Playground: a área de experimentação para conhecer o Klacks

O Playground não é uma variante de instalação, mas sim uma instância pública do Klacks com dados de exemplo para explorar sem compromisso — daí o nome. Está disponível em **[play.klacks-software.ch](https://play.klacks-software.ch)**:

- **Login:** `admin@test.com` · **Palavra-passe:** `P@ssw0rt1`
- Tem direitos de administrador completos — experimente tudo.
- Os dados de exemplo incluem cerca de 5'000 clientes e são meros dados de demonstração.
- **Não introduza dados pessoais reais.** A base de dados é reposta todos os dias, às 04:00 (hora suíça; 02:00 UTC), para um estado fixo.

## Instalação: No seu próprio servidor (on-premise)

O pacote on-premise traz tudo o que é necessário: imagens Docker, instalador, base de dados, HTTPS e atualizações automáticas. Só o pode transferir no [Klacks Store](https://klacks-software.ch/store/?culture=pt).

No Klacks Store, escolha o seu setor, se quiser, e transfira o ZIP do seu país. O instalador gera as palavras-passe e os certificados por si próprio, transfere as imagens Docker atuais e aguarda até tudo estar a funcionar.

### Linux: passo a passo

Precisa de uma máquina com pelo menos 8 GB de RAM, as portas 80 e 443 livres, acesso à Internet e uma conta com direitos `sudo`. O Docker não tem de estar já instalado (veja o passo 4).

1. **Transferir o ZIP no Klacks Store.** Na página do seu país no [Klacks Store](https://klacks-software.ch/store/?culture=pt), se quiser com o seu setor.
2. **Extrair para uma pasta fixa**, por exemplo `~/klacks`, e não para `Downloads` nem para `/tmp`. As atualizações automáticas trabalham mais tarde precisamente com esta pasta; se for apagada ou movida, deixam de funcionar. O instalador avisa se for executado a partir de `Downloads` ou `/tmp`.

   ```bash
   unzip 'klacks-onprem-*.zip' -d ~/klacks
   ```

3. **Abrir um terminal na pasta.** No gestor de ficheiros, isso costuma fazer-se com o botão direito do rato na pasta (a designação depende do ambiente de trabalho), ou escreva `cd ~/klacks`.
4. **Iniciar o instalador:**

   ```bash
   sudo bash ./install-de.sh
   ```

   No pacote para a Alemanha, o script chama-se `install-de.sh`; nos pacotes de outros países, o código do país faz parte do nome, ou seja, em geral `sudo bash ./install-*.sh`. O instalador precisa de `sudo` para poder aceder ao Docker e, se necessário, instalá-lo. Sem `sudo` só funciona se o Docker já estiver instalado e o seu utilizador pertencer ao grupo `docker`.

   **Se faltar o Docker**, o instalador propõe instalar o Docker Engine com o script oficial de `get.docker.com`. Isto só acontece após a sua confirmação (`[y/N]`, a predefinição é Não) e apenas em Ubuntu, Debian, Fedora, CentOS e RHEL; para isso, a máquina precisa de `curl` ou `wget` e de acesso à Internet. Noutras distribuições, instale o Docker Engine com o plugin Compose por si próprio, seguindo as [instruções do Docker](https://docs.docker.com/engine/install/). Se o instalador correr sem terminal, `INSTALL_DOCKER=yes` responde Sim à pergunta. O próprio Docker não recomenda este script para uso em produção; para um servidor produtivo, é preferível instalar o Docker por si próprio. O antigo `docker-compose` (versão 1) não é suportado; é necessário o plugin `docker compose`.
5. **Aguardar.** O instalador gera as palavras-passe e um certificado autoassinado, transfere as imagens e inicia o stack. No primeiro arranque, a API migra a base de dados; o instalador espera por isso até dez minutos. No fim aparece `Klacks is up at https://…` e, por baixo, **o seu código de configuração** (`Your setup code`, doze carateres em três grupos de quatro). Anote-o; também consta do ficheiro `.env` na pasta de instalação, como `KLACKS_SETUP_CODE`.
6. **Abrir o Klacks:** `https://localhost` (com outro nome de servidor ou porta HTTPS, use o endereço indicado na mensagem do instalador). O navegador avisa sobre o certificado autoassinado; confirme o aviso. Depois, crie a sua própria conta de administrador com o código de configuração, veja [O primeiro início de sessão](#first-login).
7. **As atualizações** passam depois a ser feitas automaticamente pelo serviço de atualização incluído. Não precisa de voltar a iniciar o instalador para isso.

Se o Docker vir menos de 7 GiB de memória, uma primeira instalação é interrompida. Como configurar um anfitrião mais pequeno está descrito em [Requisitos de sistema](../betrieb/systemvoraussetzungen.md).

### Windows

No Windows, inicie `install-*.ps1` em vez de `install-*.sh`.

### Opções: nome do servidor e perfil de país

Com um perfil de país opcional, o instalador configura logo no primeiro arranque o idioma, os feriados, os limites do tempo de trabalho, os suplementos e os modelos setoriais:

```bash
sudo SERVER_NAME=klacks.example.com REGION=de bash ./install.sh
```

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1 -ServerName klacks.example.com -Region de
```

No Linux, as variáveis ficam **depois** de `sudo`: o `sudo` normalmente não transmite ao instalador as variáveis que estão antes dele. Com o script do pacote do país, a chamada fica assim: `sudo SERVER_NAME=klacks.example.com bash ./install-de.sh`.

O pacote do país obtido no Klacks Store contém o perfil do respetivo país. Os scripts incluídos `install-*.sh` e `install-*.ps1` já definem `REGION` ou `-Region` com o código desse país — no pacote para a Alemanha, por exemplo, `install-de.sh` e `install-de.ps1`. Se chamar `install.sh` ou `install.ps1` diretamente, `REGION` ou `-Region` tem de ser esse código de país; sem ele, o instalador não configura nenhum perfil de país.

## PC de escritório com Windows: também na Microsoft Store

Para um único PC de escritório com Windows existe um instalador próprio que funciona sem Docker. Obtém-no no [Klacks Store](https://klacks-software.ch/store/?culture=pt), na página do seu país, e também na [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (entrada «Klacks»). Nas duas lojas é o mesmo instalador. A partir da Microsoft Store, aplica o país definido no Windows; aí não escolhe um setor e, se não existir um perfil para esse país, o instalador não configura nenhum. As instalações em servidor, Docker e Linux, bem como os pacotes por país e por setor, só estão disponíveis no Klacks Store.

No PC de escritório, as novas versões chegam através de Definições > [Atualizações de software](../einstellungen/system-sicherheit/updates.md) no Klacks, mesmo quando o Klacks foi instalado a partir da Microsoft Store. Um instalador mais recente não pode ser instalado sobre uma instalação existente.

## O primeiro início de sessão: a sua própria conta de administrador {#first-login}

Um Klacks acabado de instalar ainda não tem nenhuma conta sua. Por isso, ao abrir no navegador pela primeira vez, aparece logo a página «Configurar a sua própria conta de administrador», antes de qualquer início de sessão: nome e apelido, endereço de e-mail (que passa a ser o seu nome de utilizador) e uma palavra-passe, introduzida duas vezes; as regras da palavra-passe aparecem em direto ao lado.

Num servidor (Docker), a página exige adicionalmente o **código de configuração**, mesmo que abra o Klacks no navegador do próprio servidor. O código foi mostrado pelo instalador no fim da instalação; também consta do ficheiro `.env` na pasta de instalação, como `KLACKS_SETUP_CODE`. Só é válido para esta única configuração. Um código errado é rejeitado («O código de configuração não corresponde. Verifique-o e tente novamente.»).

Assim que guardar, a sua conta recebe a função de administrador e a conta de teste incluída é desativada definitivamente na mesma operação; depois, o Klacks inicia sessão automaticamente com a sua própria conta; se isso falhar, inicie sessão com as novas credenciais. Enquanto estiver definido um código de configuração, a conta de teste incluída não pode, de qualquer modo, ser usada para iniciar sessão no navegador. A seguir vem a página «País e setor».

Até a sua própria conta estar criada, o servidor bloqueia todos os outros pedidos com o código de erro `SETUP_REQUIRED` (HTTP 403). Não se trata de uma avaria: falta apenas a configuração.

- No PC de escritório com Windows, não precisa de código de configuração se abrir o Klacks no navegador do mesmo PC. A partir de outro computador, só aparece a página de início de sessão.
- Se o Klacks mostrar a página de início de sessão, por exemplo numa instalação sem código de configuração, a saída do instalador indica a conta incluída; mesmo assim, o Klacks leva-o de imediato à criação da sua própria conta de administrador.
- Se duas pessoas submeterem ao mesmo tempo, só a primeira se torna administradora; a segunda acaba na página de início de sessão.

Só no Playground e num ambiente de desenvolvimento local é que esta porta está intencionalmente desligada; aí, a conta incluída mantém-se.

## Bom saber

- **Requisitos:** pelo menos 8 GB de RAM e 4 vCPU, Docker com Compose v2 (no Linux, o instalador instala o Docker mediante confirmação), as portas 80 e 443 livres e acesso HTTPS de saída a `ghcr.io` e `github.com`. Os detalhes e os exemplos de cálculo para anfitriões mais pequenos estão em [Requisitos de sistema](../betrieb/systemvoraussetzungen.md).
- Um serviço de atualização incluído mantém a sua instalação atualizada automaticamente — com cópia de segurança antes de cada atualização e reversão automática em caso de problemas. Como isto funciona em detalhe está descrito em [Atualizações e reversão](../betrieb/updates-und-rollback.md).
- Os seus dados ficam na sua própria base de dados, na sua infraestrutura. Algumas funções chamam, porém, serviços externos — quais, vê-se na secção seguinte.
- Chamar o instalador de novo é inofensivo, mas não é uma atualização: mantém as palavras-passe, o certificado e a versão definida na primeira instalação, e reinicia o stack (no Linux, outra vez com `sudo`, se tiver instalado primeiro com `sudo`). É assim que repara um stack que já não funciona. As novas versões são instaladas pelo serviço de atualização, não pelo instalador.
- Se trouxer um certificado próprio, coloque `server.crt` e `server.key` em `nginx/certs/`, na pasta de instalação, antes da instalação; caso contrário, o instalador gera um certificado autoassinado.
- A cópia de segurança da sua base de dados é da sua responsabilidade e deve ser feita regularmente — como fazê-la está descrito em [Cópia de segurança e restauro](../betrieb/backup-und-wiederherstellung.md).

## Que serviços externos o Klacks chama

Os seus dados ficam nos seus servidores. Para algumas funções, o Klacks chama, ainda assim, serviços públicos na Internet no funcionamento normal. Os endereços destes serviços estão incorporados de forma fixa; atualmente não pode indicar um servidor próprio de geocodificação, de encaminhamento ou de mapas.

| Serviço | Para quê | O que é enviado | Predefinição | Desativar |
|---|---|---|---|---|
| Nominatim do OpenStreetMap (`nominatim.openstreetmap.org`) | Converter endereços em coordenadas: ao guardar um endereço, para a localização da empresa, no planeamento de rotas e em serviços em segundo plano para endereços e localizações de grupos | Rua, código postal, localidade e país, sem nomes de pessoas; no caso de localizações de grupos, o nome da localidade ou do grupo | ativo | `BackgroundServices__AddressGeocoding=false` e `BackgroundServices__GroupGeocoding=false` só desligam os serviços em segundo plano. Ao guardar um endereço, continua a ser feita a geocodificação. |
| Servidor OSRM público (`router.project-osrm.org`) | Tempos de deslocação, distâncias e rotas no mapa | Coordenadas dos locais de intervenção, sem nomes | ativo enquanto não estiver guardada nenhuma chave do OpenRouteService; além disso, o navegador consulta diretamente o OSRM quando o servidor Klacks não devolve nenhuma rota | não previsto |
| OpenRouteService (`api.heigit.org`) | como o OSRM, e ainda bicicleta e a pé | Coordenadas dos locais de intervenção, sem nomes | só com chave de API guardada | Remover a chave em Definições > OpenRoute |
| Mosaicos de mapa (OpenStreetMap, OpenStreetMap.de ou CARTO) | Apresentação do mapa no painel | Do navegador: endereço IP e a secção do mapa apresentada | ativo assim que o mapa é apresentado | fornecedor selecionável no mapa, um servidor de mosaicos próprio não |
| GitHub (`github.com`) e GitHub Container Registry (`ghcr.io`) | Instalação e atualizações automáticas: manifesto de versão e imagens Docker | pedidos de transferência normais, sem dados de planeamento | ativo | — |
| Klacks Marketplace (`klacks-software.ch/store`) | Pacotes de idioma e de país | Código do país, código do pacote ou termo de pesquisa | na pesquisa de pacotes e ao carregar um perfil de país | endereço configurável através de `LanguagePlugins__MarketplaceUrl` |
| Hugging Face (`huggingface.co`) | Transferência única dos modelos de pesquisa do Klacksy | nenhum dado de clientes (transferência de ficheiros) | na primeira necessidade | — |
| Open-Meteo (`api.open-meteo.com`, `air-quality-api.open-meteo.com`) | Aviso de meteorologia e qualidade do ar no widget de boas-vindas, consulta meteorológica através do Klacksy | Coordenadas do navegador (se autorizadas) ou da localização da empresa | ativo | `Assistant__Ambient__Enabled=false` só desliga o aviso de qualidade do ar e de feriados, não a consulta meteorológica da saudação |
| Nager.Date (`date.nager.at`) | Aviso de feriados no widget de boas-vindas | Código do país | ativo | `Assistant__Ambient__Enabled=false` |
| Fornecedores de IA na nuvem (p. ex. OpenAI, Anthropic, Google, DeepSeek) | Klacksy e funções de IA em segundo plano (p. ex. classificação de localizações de grupos) | Pedidos, incluindo o contexto necessário dos seus dados | só se estiver configurado um modelo na nuvem | usar um modelo local |
| Serviços de voz, pesquisa e tradução (p. ex. Deepgram, Groq, AssemblyAI, Edge TTS, OpenAI TTS, ElevenLabs, Google Cloud TTS, DeepL, pesquisa na Web) | Entrada e saída de voz, pesquisa na Web, tradução | Áudio ou texto | só se for utilizado ou configurado; o reconhecimento de voz do navegador funciona, consoante o navegador, através do respetivo serviço online | não utilizar a função |

Os interruptores da coluna «Desativar» são variáveis de ambiente do contentor `klacks-api`; introduza-as em `docker-compose.yml`, em `environment:` desse serviço. Uma entrada apenas no ficheiro `.env` não basta, porque o serviço não o lê como `env_file`.

Com um modelo de IA local, nenhum pedido ao modelo de linguagem chega a um fornecedor de IA externo. Para os restantes serviços desta tabela, isso não altera nada.

---

*Dúvidas sobre a instalação? [Comunidade Klacks no Discord](https://discord.gg/YRP8p2abVC).*
