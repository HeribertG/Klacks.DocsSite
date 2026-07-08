---
sidebar_position: 1
---

# Instalação e Playground

Experimente o Klacks num minuto — e instale-o em poucos minutos. Sem registo, sem conversas de vendas.

## Opção 1: Playground (sem instalar nada)

Uma instância pública do Klacks com dados de exemplo está disponível em **[klacks-software.ch](https://klacks-software.ch:7643)**:

- **Login:** `admin@test.com` · **Palavra-passe:** `P@ssw0rt1`
- Tem direitos de administrador completos — experimente tudo.
- Todos os dados são **repostos automaticamente todos os dias**. Não introduza dados pessoais reais.

## Opção 2: No seu próprio servidor (on-premise)

O pacote on-premise traz tudo o que é necessário: imagens Docker, instalador, base de dados, HTTPS e atualizações automáticas.

```bash
curl -fsSLO https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip
unzip klacks-onprem.zip && cd onprem && ./install.sh
```

No Windows: `install.ps1` em vez de `install.sh`. O instalador gera as palavras-passe e os certificados por si próprio, transfere as imagens Docker atuais e aguarda até tudo estar a funcionar. Primeiro início de sessão com `admin@test.com` / `P@ssw0rt1` — **altere esta palavra-passe imediatamente após o primeiro login.**

## Bom saber

- Um serviço de atualização incluído mantém a sua instalação atualizada automaticamente — com cópia de segurança antes de cada atualização e reversão automática em caso de problemas.
- Os seus dados permanecem totalmente na sua infraestrutura; o Klacks não comunica para o exterior.
- É necessário um servidor com Docker, acesso à Internet de saída (para imagens Docker e atualizações) e as portas 80/443 abertas.

---
*Dúvidas sobre a instalação? [Comunidade Klacks no Discord](https://discord.gg/YRP8p2abVC).*
