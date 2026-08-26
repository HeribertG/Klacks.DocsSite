---
sidebar_position: 7
---

# Entrega da exportação salarial

Ao selar um período delimitado por grupo, o Klacks pode entregar automaticamente os respetivos dados salariais a um sistema de salários externo. Esta página explica quais são os pré-requisitos e por que motivo a entrega, por vezes, parece não produzir nada — o caso de suporte mais frequente relacionado com esta funcionalidade.

## Como funciona

**Pré-requisito: pacote adicional para a exportação salarial.** A entrega automática a um sistema de salários não é uma funcionalidade central, mas sim algo que exige um pacote adicional próprio, que tem de estar instalado **e** ativo em Definições > Plugins de Funcionalidades. Se o pacote adicional faltar, ou estiver apenas desativado, a entrega não produz absolutamente nada — nenhum ficheiro, nenhum aviso, nenhum registo visível para si. Isto é mais rigoroso do que um formato de exportação desativado nas definições de exportação: esse, pelo menos, deixa um registo no log do servidor; aqui, nem isso existe.

**Entrega única (idempotência).** A entrega automática só corre exatamente uma vez por combinação de grupo, sistema de destino e intervalo de datas exato — isto evita que os mesmos dados salariais cheguem por engano duas vezes ao sistema de salários. Se reabrir um período já selado, corrigir algo e selar de novo, a segunda entrega é ignorada sem aviso: para exatamente esta combinação já existe um registo de entrega, e a reabertura não o remove.

**Um descarregamento manual conta da mesma forma.** Um descarregamento salarial manual, feito conforme necessário, para o mesmo grupo/sistema de destino/período, gera o mesmo registo que uma entrega automática. Um descarregamento manual executado antes da entrega automática "consome-a" para o período em causa, exatamente como se já tivesse corrido automaticamente.

| Por que motivo não chegou nada (de novo)? | Existe registo? | Bloqueia um descarregamento manual posterior? |
|---|---|---|
| Pacote adicional não instalado/ativo | não | não |
| Já entregue para exatamente esta combinação | sim (visível no separador "Registo" do fecho de período) | não |

**Dois pontos de precisão:**

- Um descarregamento manual **não** aplica qualquer eventual correção de formato de exportação registada pelo suporte — utiliza sempre os valores padrão, mesmo que exista uma correção ativa para o sistema de destino que teria efeito no percurso automático.
- O bloqueio de entrega única é exato: só se aplica com grupo idêntico, sistema de destino idêntico e datas de início/fim idênticas. Um período diferente ou um sistema de destino diferente não fica bloqueado por uma entrega anterior.

**Se, depois de selar, nada chegar, ou for necessário enviar posteriormente números corrigidos:** verifique primeiro se o pacote adicional correspondente está instalado e ativo em Definições > Plugins de Funcionalidades. Depois de uma reabertura e de uma correção, a forma fiável de levar números corrigidos ao sistema de salários é a **exportação manual** na área de Fecho de Período (separador "Exportações") — esta não está sujeita nem ao bloqueio do pacote adicional, nem ao bloqueio de entrega única da entrega automática. Como também não aplica nenhuma correção de formato de exportação, neste caso verifique manualmente os números exportados em relação a uma eventual correção ativa.

## Bom saber

- A base de qualquer entrega é um período selado e delimitado por grupo — a forma de selar um período está descrita na página [Fecho de período](../../planen/periodenabschluss.md). Selar e reabrir estão aí reservados a funções administrativas.
- Esta página descreve a **exportação** de dados salariais do Klacks para um sistema de salários. O fluxo inverso — a **importação** de encomendas de um sistema ERP para o Klacks — está descrito nos [Pontos de Receção ERP](./erp-uebernahmepunkte.md).
- Os pacotes adicionais são geridos centralmente em Definições > Plugins de Funcionalidades: instalar, ativar/desativar ou remover por completo.
- Um pacote adicional desativado continua instalado, mas bloqueia a entrega automática tão completamente como um que não esteja instalado.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
