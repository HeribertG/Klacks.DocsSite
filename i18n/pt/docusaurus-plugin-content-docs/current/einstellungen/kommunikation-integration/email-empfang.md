---
sidebar_position: 2
---

Em Definições > Definições IMAP, configura uma caixa de correio que o Klacks consulta continuamente em segundo plano e apresenta na área "Caixa de entrada" — assim, a correspondência recebida pode ser automaticamente associada a colaboradores e clientes.

## Como funciona

**Dados de ligação:** Servidor, porta (padrão 993), encriptação SSL, nome de utilizador, palavra-passe, a pasta a consultar (padrão `INBOX`), bem como o intervalo de consulta em segundos (padrão 300).

**O que acontece com os e-mails recebidos:** O Klacks consulta periodicamente a caixa de correio via IMAP, verifica novas mensagens com um filtro de spam (o spam é movido para a pasta de lixo eletrónico tanto no Klacks como na caixa de correio real) e associa automaticamente as restantes mensagens ao registo de cliente ou colaborador correspondente, desde que o endereço do remetente esteja registado nos dados de contacto. Assim, cria-se na "Caixa de entrada" um histórico de correspondência filtrável por pessoa. Alterações como "marcar como lida", mover ou eliminar também têm efeito na caixa de correio real.

**Testar a ligação:** O botão "Testar ligação IMAP" liga-se realmente ao servidor, autentica-se, abre a pasta configurada em modo de leitura e mostra o número de mensagens encontradas. Se a pasta não existir, isso é comunicado explicitamente.

## Bom saber

- Esta caixa de correio **não** é um canal para comunicações de ausência e **não** faz parte da importação de encomendas ERP (para isso existem pontos de importação separados, ver página própria) — alimenta exclusivamente a "Caixa de entrada" geral.
- Esta definição é global para toda a instalação — não existe uma conta IMAP separada por utilizador.
- Se a chave de encriptação utilizada pela instalação for reposta, o Klacks deixa de conseguir desencriptar a palavra-passe guardada e pausa a consulta até que a palavra-passe seja guardada novamente.
- As mensagens na caixa de entrada podem ser traduzidas diretamente se o DeepL estiver configurado (ver página própria).

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
