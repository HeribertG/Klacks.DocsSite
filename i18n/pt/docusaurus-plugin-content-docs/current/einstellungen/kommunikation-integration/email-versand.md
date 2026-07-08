---
sidebar_position: 1
---

Em Definições > Definições de E-mail configura o servidor SMTP através do qual o Klacks envia e-mails de saída — por exemplo, notificações, e-mails de reposição de palavra-passe ou mensagens enviadas pelo Klacksy.

## Como funciona

**Dados de ligação:** Introduz o servidor, a porta, o tempo limite, o modo SSL/TLS, o tipo de autenticação (Nenhuma, LOGIN, NTLM, GSSAPI, WDIGEST), bem como o nome de utilizador e a palavra-passe. Além disso, é possível configurar a confirmação de leitura/notificação de entrega e um endereço de resposta. O modo SSL/TLS é também derivado da porta: a porta 465 utiliza SSL direto, a porta 587 (ou SSL ativado) utiliza StartTLS.

**Guardar:** Não existe um botão explícito para guardar — cada campo é guardado automaticamente após um breve intervalo, assim que o altera.

**Testar ligação:** O botão "Enviar e-mail de teste" estabelece uma ligação SMTP real, autentica-se e envia um e-mail de teste efetivo para o endereço de utilizador registado. Não se trata de uma simples verificação de ligação, mas de um envio de correio real — útil para verificar imediatamente as credenciais de acesso. No caso de fornecedores conhecidos (Outlook, Gmail, Yahoo, GMX, entre outros), o Klacks exige obrigatoriamente um tipo de autenticação diferente de "Nenhuma".

## Bom saber

- Esta definição é global para toda a instalação — não existe uma conta SMTP separada por utilizador.
- Apenas uma pessoa com direitos de administrador pode configurar esta página.
- A palavra-passe é guardada de forma encriptada e é apresentada no formulário como oculta/visível através de um ícone em forma de olho, nunca em texto simples.
- Se o teste de ligação falhar, o Klacks indica o motivo concreto (por exemplo, erro de autenticação, erro de handshake SSL, tempo limite excedido) em vez de uma mensagem de erro genérica.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
