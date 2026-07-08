---
sidebar_position: 4
---

# Atualizações

Em Definições > Atualizações, vê a versão do Klacks atualmente instalada e a versão mais recente disponível, controla o comportamento de atualização automática e, se necessário, aciona manualmente uma atualização ou um rollback.

## Como funciona

**Estado:** O cartão mostra a versão atual, se está disponível uma versão mais recente, bem como a operação de atualização em curso ou executada mais recentemente, juntamente com o respetivo estado.

**Acionar atualização ou reverter:** Através de "Instalar agora", inicia manualmente uma atualização disponível; "Desfazer" reverte a última operação de atualização bem-sucedida. Ambas as ações ficam bloqueadas enquanto já estiver a decorrer uma operação.

**Configurar automatismo:**
- **Ativar atualizações automáticas** liga ou desliga a verificação e execução automática de atualizações.
- **Apenas notificar** não aciona nenhuma atualização automática, mas avisa quando está disponível uma nova versão.
- **Canal** escolhe entre `Stable` e `Beta` como fonte de atualização.
- **Intervalo de verificação** (horas) e uma **janela de manutenção** (hora de início/fim) definem com que frequência e em que janela temporal é feita a verificação ou instalação.
- **Número de cópias de segurança conservadas** determina quantas cópias de segurança são mantidas antes de uma migração, antes de as mais antigas serem eliminadas automaticamente.

**Histórico:** Uma tabela lista as últimas operações de atualização com tipo, versão de destino, estado e momento do pedido.

## Bom saber

- Antes de cada migração, o Klacks cria automaticamente uma cópia de segurança — sem cópia de segurança, nenhuma migração é aplicada.
- Se a verificação de integridade falhar após uma atualização, o Klacks reverte automaticamente para a versão anterior (restaurar cópia de segurança → ativar versão antiga → verificar novamente); só quando este próprio rollback falha é que é necessária uma intervenção manual.
- Um rollback manual restaura especificamente a cópia de segurança associada à última operação bem-sucedida e ativa a respetiva versão de origem — não se trata simplesmente de "recuar uma versão".
- Atualização e rollback são ações exclusivas de administrador.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
