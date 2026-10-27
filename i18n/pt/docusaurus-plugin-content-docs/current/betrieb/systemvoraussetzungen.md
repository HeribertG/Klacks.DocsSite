---
sidebar_position: 1
---
# Requisitos do sistema e arquitetura

O Klacks corre como stack Docker no seu próprio servidor. Esta página descreve que serviços são iniciados e como dimensionar o host — incluindo os valores medidos em que a recomendação se baseia.

## A arquitetura: cinco serviços

O pacote On-Premise inicia exclusivamente o que é necessário para a operação:

| Serviço | Imagem | Função |
|---|---|---|
| `klacks-postgres` | `pgvector/pgvector:pg17` | Base de dados; a extensão vetorial já está incluída |
| `klacks-api` | `ghcr.io/heribertg/klacks-api` | Backend; migra e preenche a base de dados no arranque |
| `klacks-ui` | `ghcr.io/heribertg/klacks-ui` | Interface Angular, disponibilizada através do nginx |
| `klacks-updater` | `ghcr.io/heribertg/klacks-updater` | aplica atualizações assinadas (api e ui em conjunto) |
| `klacks-proxy` | `nginx:alpine` | terminação TLS e proxy inverso |

Os serviços internos do fabricante (base de conhecimento de desenvolvimento, marketing, marketplace, pgAdmin, certbot, interface Blazor) **não** estão incluídos, de forma deliberada. Como operador, vê portanto apenas o seu próprio stack.

## O que o host tem de oferecer

- **8 GB de RAM e 4 vCPU** como mínimo (veja o cálculo abaixo).
- Docker Desktop (Windows/macOS) ou Docker Engine com Compose v2 (Linux), **amd64 ou arm64**.
- Portas livres **80 e 443** — substituíveis através de `HTTP_PORT` e `HTTPS_PORT`.
- Acesso HTTPS **de saída** a `ghcr.io` (imagens) e `github.com` (manifesto de atualização assinado).
- Opcional: acesso a `klacks-software.ch:7553` para pacotes de país e plugins de idioma do marketplace.

## Memória: porquê 8 GB e o que acontece com hosts mais pequenos

O Klacks opera os seus dois modelos de pesquisa (embedder e reranker) **localmente dentro do processo** `klacks-api`. Ambas as sessões ONNX permanecem de forma permanente na memória — não são descarregadas após cada pergunta.

Medido no host de produção do fabricante em 12.09.2026:

- Carga base do processo: aprox. 1'017 MB
- Embedder: aprox. 1'171 MB
- Reranker: aprox. 116 MB
- Soma: um patamar de cerca de **2'304 MB**
- Com um limite de 2'560 MB, o kernel terminou o contentor aos 2'471 MB (OOM).

Por isso, o Compose incluído define **3'584M** e 3,0 CPU para o `klacks-api`, com o descarregamento por inatividade desativado. Calculado para todo o stack: 3'584M (api) + 2'048M (postgres) + 3 × 256M (ui, updater, proxy) = **6'400 MiB**; o restante dos 8 GB fica para o sistema operativo e a cache de ficheiros.

**Host mais pequeno, por exemplo com 3 GB para o `klacks-api`:** defina no `.env` **ambas** as linhas seguintes — nunca a linha da memória isoladamente:

```bash
KLACKS_API_MEMORY_LIMIT=2560M
KLACKS_API_IDLE_UNLOAD_MINUTES=30
```

O descarregamento por inatividade liberta uma sessão após 30 minutos sem acesso. O custo: a pergunta seguinte volta a carregá-la (aprox. 2,2–2,9 s para o embedder, aprox. 1,1 s para o reranker). Os valores entre 1 e 5 são elevados para 5; `0` significa: nunca descarregar.

## CPU: menos núcleos só abrandam, não estragam nada

A pesquisa também funciona com menos núcleos, mas fica mais lenta — o reranker é o passo que mais cálculo exige. Medido: 2'994–3'163 ms para 25 candidatos com 3,0 CPU, contra 4'339–4'860 ms com 1,5 CPU, onde o serviço passou ainda 7,15 s limitado. Para um host mais pequeno:

```bash
KLACKS_API_CPU_LIMIT=1.5
```

As quotas de CPU do stack somam propositadamente 4,75 com 4 vCPU: uma quota é um limite máximo, não uma reserva, e os serviços nunca atingem o pico em simultâneo.

## Bom saber

- **As palavras-passe e as chaves permanecem estáveis.** A `POSTGRES_PASSWORD` fica gravada no volume de dados no primeiro arranque — uma alteração posterior deixa a base de dados órfã. O `JWT_SECRET` assina as sessões; uma alteração termina a sessão de todos os utilizadores. O instalador conserva ambas em cada execução posterior.
- **`COMPOSE_PROJECT_NAME=klacks`** está fixado de forma rígida, para que o host e o serviço de atualização apontem para o mesmo projeto Compose, independentemente do nome da pasta. Não o altere após a instalação.
- **`KnowledgeIndex__WarmupEnabled=false` não é uma opção de memória.** Apenas desloca a construção da pesquisa do arranque para o primeiro pedido de chat; em funcionamento contínuo, as sessões estão igualmente presentes. Só é útil se o host falhar por memória no arranque.
- **Mais do que uma instância de API?** Nesse caso, precisa de um backplane SignalR. O Klacks não fornece nenhum: disponibilize por si um serviço compatível com RESP (por exemplo, o Valkey — licenciado sob BSD-3 desde a versão 7.4, ao contrário do Redis) e ative o upstream sticky (`ip_hash`) preparado no modelo do nginx. Sem backplane, corre exatamente uma instância do `klacks-api`, como em qualquer instalação atual.
- **Perfis de país:** o instalador conhece 30 perfis: `ae`, `at`, `ch`, `cn`, `cz`, `de`, `dk`, `es`, `fi`, `fr`, `gb`, `gr`, `id`, `il`, `it`, `jp`, `kr`, `li`, `my`, `nl`, `no`, `pl`, `pt`, `ro`, `sa`, `se`, `th`, `tw`, `us`, `vn`. Um perfil define, no primeiro arranque, o idioma, o país/região e o fuso horário, o calendário de feriados, o fim de semana e o início da semana, os limites do tempo de trabalho, o direito a férias, os suplementos, o sistema de destino predefinido da exportação salarial (para a Suíça, por exemplo, `abaconnect-ch`), bem como modelos setoriais — para a Spitex, por exemplo, o modelo de regras de planeamento «CH Spitex Standard». Sem perfil, o Klacks arranca de forma neutra e configura tudo manualmente.

---

*Questões de operação? [Comunidade Klacks no Discord](https://discord.gg/YRP8p2abVC).*
