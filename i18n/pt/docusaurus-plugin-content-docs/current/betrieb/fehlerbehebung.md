---
sidebar_position: 4
---
# Resolução de problemas

Quando o Klacks não faz o que deve, o caminho passa quase sempre pelos registos dos dois serviços suspeitos — e pela pergunta de se o processo realmente continua a correr.

## Primeiro: ver o que está a correr

```bash
docker compose ps
docker compose logs klacks-api
docker compose logs klacks-updater
```

O `docker compose ps` mostra que serviços estão a correr e se estão saudáveis. O `klacks-api` regista o arranque, a migração e o preenchimento da base de dados; o `klacks-updater` regista a deteção, a cópia de segurança, a comutação e o caminho de regresso de uma atualização.

## Um registo antigo não é prova

Uma armadilha que já custou tempo: o ficheiro de registo pode ser de um arranque **anterior**. Quem encontra nele um erro e o toma pelo atual, procura no sítio errado.

Verifique por isso se o registo **ainda está a crescer**:

```bash
wc -c klacks-api.log; sleep 10; wc -c klacks-api.log
```

Se o tamanho se mantiver (crescimento de 0 bytes), o processo já não escreve — não está a correr, independentemente do que conste no registo. Só uma repetição recente do erro com um registo que comprovadamente avança é uma base fiável.

## Mensagens frequentes e o que significam

| Mensagem | Significado | O que fazer |
|---|---|---|
| `no matching manifest for linux/amd64` | A imagem não existe para a sua arquitetura | O fabricante tem de publicar a imagem para várias arquiteturas (amd64 **e** arm64) |
| `pull access denied` | O pacote no repositório de pacotes é privado | Repetir a instalação com credenciais: `-GhcrUser`/`-GhcrToken` no Windows, `GHCR_USER`/`GHCR_TOKEN` no Linux |
| `errorCode: SETUP_REQUIRED`, HTTP `403` | A porta de configuração de administrador está ativa | Iniciar sessão com `admin@test.com` e criar a própria conta de administrador — veja [Instalação e Playground](../../erste-schritte/installation-und-playground/) |
| O contentor termina sem stacktrace gerido com o código de saída `-1` (`0xffffffff`) | Uma falha **nativa** numa biblioteca C/C++ que nenhum `try/catch` de C# consegue apanhar | Ver a saída do contentor em **stderr** — é aí que está a causa real, não no registo da aplicação |
| O contentor é terminado, apesar de não constar nenhum erro de aplicação no registo | O kernel terminou o processo por falta de memória (OOM) | Verificar os limites de memória — veja [Requisitos do sistema](../systemvoraussetzungen/) |
| `42P07: relation "…" already exists` após uma atualização falhada | Uma migração criou tabelas que o restauro não removeu | Veja a armadilha em [Cópia de segurança e restauro](../backup-und-wiederherstellung/) |
| A API morre segundos após `Application started` | O arranque tem êxito, a falha vem depois — típico de uma biblioteca nativa | A mesma pista que com o código de saída `-1`: verificar o stderr, não o registo da aplicação |

Num **computador com Windows em ARM** (Snapdragon X), a pesquisa executada localmente falhou no passado precisamente numa biblioteca nativa deste tipo: a API comunicava `Application started`, mas segundos depois já não estava acessível à interface. Se vir este padrão num host Windows ARM, o primeiro olhar deve dirigir-se à saída da consola (não ao registo em ficheiro) — foi aí que apareceu a mensagem da deteção de CPU afetada.

## Como delimitar um erro

1. **O que fez exatamente** e o que esperava? O último passo antes do erro é metade da resposta.
2. **Que serviços estão a correr?** `docker compose ps`.
3. **O registo ainda está a crescer?** Veja acima.
4. **O que constava por último no stderr?** Em falhas nativas, a única fonte.
5. **O que mudou recentemente?** Uma atualização, uma definição, um certificado novo.

## Bom saber

- **Um serviço iniciado há pouco e um serviço saudável têm o mesmo aspeto no registo.** Se nada chega à interface, verifique se o processo ainda está sequer a correr — e não apenas o que escreveu por último.
- **Perante uma falha sem erro de aplicação, a memória é a primeira suspeita**, sobretudo após uma atualização com novos modelos de pesquisa.
- **Dados úteis para um aviso:** a versão afetada (`KLACKS_API_TAG`/`KLACKS_UI_TAG` do `.env`), a saída de `docker compose ps`, as últimas linhas de ambos os registos e o último passo antes do erro. Por favor, **sem** palavras-passe nem chaves do `.env`.
- Na dúvida, pergunte à comunidade: [Comunidade Klacks no Discord](https://discord.gg/YRP8p2abVC).

---

*Questões de operação? [Comunidade Klacks no Discord](https://discord.gg/YRP8p2abVC).*
