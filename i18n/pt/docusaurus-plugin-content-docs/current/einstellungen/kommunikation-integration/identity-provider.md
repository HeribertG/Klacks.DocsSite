---
sidebar_position: 4
---

Em Definições > Identity Provider, liga o Klacks a um serviço de diretório externo — LDAP/Active Directory ou OAuth2/OpenID Connect — para importar automaticamente colaboradores e/ou gerir o início de sessão através dele.

## Como funciona

**LDAP/Active Directory:** Regista o anfitrião (host), a porta (389/636), SSL, Base DN, Bind DN, palavra-passe de bind e um filtro de utilizador. Um comutador "Utilizar para importação de clientes" ativa a importação automática: nome, primeiro nome, título, empresa e morada são retirados dos atributos do diretório — no OpenLDAP e no Active Directory, por vezes sob nomes de atributos diferentes (por exemplo, `uid` vs. `sAMAccountName`, `street` vs. `streetAddress`). Estas correspondências de campos estão fixas no backend e não são editáveis através da interface.

**OAuth2/OpenID Connect:** Client-ID, Client-Secret, opcionalmente Tenant-ID (Azure), URL de autorização, de token e de UserInfo, bem como scopes — para o início de sessão via Google, Microsoft ou GitHub.

**Testar e sincronizar a ligação:** Nos fornecedores LDAP/AD, "Testar ligação" mostra o número de utilizadores encontrados, incluindo nomes de utilizador de exemplo. Se a importação de clientes estiver ativada, "Sincronizar agora" desencadeia uma sincronização manual; o resultado (processados/novos/atualizados/desativados) aparece logo a seguir como mensagem na página.

## Bom saber

- Esta página é acessível **apenas a administradoras e administradores**, não à função de Supervisor.
- A palavra-passe de bind e o Client-Secret são guardados de forma encriptada e apresentados na interface apenas de forma mascarada (`***`); ao gravar sem alteração, o valor existente é mantido.
- Um registo de sincronização permanente (histórico, histórico de erros) **não** é atualmente apresentado na interface — apenas o resultado da última execução manual.
- Pessoas que já não são encontradas no diretório não são eliminadas durante a sincronização, mas sim desativadas através da data de saída da sua associação; se voltarem a aparecer mais tarde, são reativadas automaticamente.
- Um identificador externo do diretório (LDAP ObjectGUID ou, em alternativa, o Distinguished Name) evita duplicados: se numa nova sincronização for encontrado o mesmo identificador, a pessoa existente é atualizada em vez de ser criada de novo.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
