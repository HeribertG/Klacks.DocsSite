---
sidebar_position: 3
---
# Atualizações e rollback

O Klacks atualiza-se por si próprio — com pacotes assinados, uma cópia de segurança antes de cada passo e um caminho de regresso automático se algo correr mal. Esta página explica o que acontece e como pode intervir.

## Como decorre uma atualização

1. **Detetar.** A API consulta o manifesto assinado que o fabricante publica a cada release. Se aí constar uma versão mais recente, a atualização é considerada disponível.
2. **Salvaguardar.** O serviço de atualização cria uma cópia de segurança da base de dados. Se a nova versão contiver uma migração, essa cópia fica associada de forma fixa à operação de atualização e fica disponível mais tarde para um caminho de regresso.
3. **Transferir e ativar em conjunto.** O serviço transfere as novas imagens do `klacks-api` **e** do `klacks-ui` e comuta ambas em simultâneo — as duas partes avançam em uníssono, nunca em versões diferentes.
4. **Verificar.** Após a comutação, o serviço consulta a verificação de saúde profunda `/internal/health/deep`.
5. **Avaliar.** Se a nova versão estiver saudável, a atualização é considerada bem-sucedida. Se não estiver, o serviço reverte automaticamente **ambas** as partes para a versão anterior e verifica novamente. Se também isso falhar, o estado é registado como falhado, para que o veja.

## O que significa «assinado»

O fabricante assina cada release, e o seu Klacks verifica a assinatura antes de aceitar um pacote. A chave pública e o endereço do manifesto são valores fixos do fabricante no seu `.env`:

- `UPDATE_MANIFEST_BASE_URL` — fixado na fonte de releases do fabricante
- `UPDATE_SIGNATURE_PUBLIC_KEY` — tem de corresponder à chave privada com que o fabricante assina

Estes dois valores **não se destinam a ser alterados**. Quem os substituir anula a verificação e abre precisamente a brecha que a assinatura fecha.

O manifesto contém, entre outras coisas: o canal (`Stable` ou `Beta`), a versão mais recente, a versão mínima a partir da qual é possível uma atualização direta (`MinUpgradableFrom`), a data de publicação, se inclui uma migração de base de dados, os artefactos, a assinatura e uma referência à lista de alterações.

O `klacks-api` e o `klacks-ui` estão **fixados numa versão exata** no `.env`, para que não divirjam sem que se note. O próprio serviço de atualização corre sempre em `latest` — deliberadamente não consta do manifesto assinado e substitui apenas api e ui.

## Definições na operação

Na área de administração, em **Sistema → Atualizações**:

| Definição | Efeito |
|---|---|
| **Ativar atualizações automáticas** | As atualizações são detetadas e aplicadas automaticamente |
| **Apenas notificar** | As atualizações são apenas **detetadas**, mas não aplicadas até que as acione |
| **Janela de manutenção** | Período em que as atualizações automáticas podem correr |

Estas definições estão na base de dados e prevalecem sobre os valores iniciais do `.env` (`UPDATE_AUTO_ENABLED`, `UPDATE_NOTIFY_ONLY`), que só se aplicam no primeiro arranque.

## Reverter manualmente

No caso automático, ninguém tem de intervir — o serviço reverte por si próprio uma atualização falhada. Se quiser deliberadamente dar um passo atrás:

1. Defina no `.env` `KLACKS_API_TAG` e `KLACKS_UI_TAG` para a versão anterior.
2. Reative o stack: `docker compose up -d klacks-api klacks-ui`.
3. **Se a versão com defeito já tiver migrado**, reponha adicionalmente a cópia de segurança correspondente anterior à atualização — e tenha em conta a armadilha descrita na página [Cópia de segurança e restauro](../backup-und-wiederherstellung/): as tabelas que a nova versão criou sobrevivem ao restauro e bloqueiam o arranque seguinte.

## Bom saber

- **O caminho de regresso não é uma solução de emergência, é o caso normal.** Cada operação de atualização tem um estado: bem-sucedida, revertida ou caminho de regresso falhado. Uma atualização revertida é uma operação normal e registada — não um incidente.
- **Uma atualização revertida não é uma atualização desfeita.** O rollback repõe a versão, não os seus dados. As alterações de dados que tenha feito entre a atualização e o caminho de regresso provêm do estado da cópia de segurança.
- **Pode consultar nos registos:** `docker compose logs klacks-updater` mostra a deteção, a cópia de segurança, a comutação e o caminho de regresso.

---

*Questões de operação? [Comunidade Klacks no Discord](https://discord.gg/YRP8p2abVC).*
