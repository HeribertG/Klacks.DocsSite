---
sidebar_position: 3
---

Em Definições > DeepL, guarda uma chave de API do DeepL, com a qual o Klacks pode traduzir textos automaticamente — atualmente, sobretudo mensagens de e-mail recebidas na caixa de entrada.

## Como funciona

**Chave de API:** Um único campo de introdução recebe a chave de API do DeepL (formato `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx` para a API Free gratuita, ou sem o sufixo `:fx` para a API Pro paga). O Klacks reconhece automaticamente, através do sufixo `:fx`, qual dos dois endereços de API do DeepL está a ser utilizado — não é necessária uma alternância separada entre Free e Pro. Pode obter uma conta e a respetiva chave em deepl.com/pro-api.

**Utilização:** Na "Caixa de entrada", qualquer e-mail pode ser traduzido para o idioma de interface atualmente definido através do símbolo de tradução; o original e a tradução podem ser comparados através de um seletor. Sem uma chave configurada, esta função não está disponível.

## Bom saber

- Esta definição é global para toda a instalação — não existe uma chave por utilizador.
- Não existe um botão de "teste" próprio nesta página; se a chave funciona, é verificado na primeira tentativa de tradução na caixa de entrada.
- Se a chave for inválida ou tiver expirado, o Klacks deteta isso através da resposta do DeepL (erro de autenticação) e comunica-o, em vez de apresentar uma tradução vazia ou incorreta.
- A chave é guardada de forma encriptada e apresentada mascarada no formulário.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
