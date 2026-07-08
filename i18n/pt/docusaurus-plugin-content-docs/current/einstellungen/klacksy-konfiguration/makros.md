---
sidebar_position: 7
---

# Macros

Suplementos para trabalho noturno, aos domingos e feriados, ou o cálculo exato de horas em férias e serviço militar não podem ser cobertos por uma fórmula fixa para cada empresa. Em Definições > Macros, pode escrever para isso os seus próprios pequenos scripts numa linguagem semelhante a BASIC.

## Como funciona

**Para que servem os macros:** Um macro calcula, a partir dos dados de um serviço (Work) ou de um vínculo laboral, um único valor de retorno — tipicamente um suplemento em horas ou francos. O resultado é guardado em `Work.Surcharges` e entra automaticamente na avaliação de horas (ClientPeriodHours). Cada macro pertence a um tipo — turno/vínculo laboral ou regras de trabalho — e pode ser nomeado, editado e eliminado como qualquer outra definição.

**Dados disponíveis:** Através de `IMPORT`, o script tem à disposição, entre outros, `hour` (horas de trabalho), `fromhour`/`untilhour` (hora de início/fim como horas decimais), `weekday` (ISO-8601: 1 = segunda-feira … 7 = domingo), `holiday`/`holidaynextday` (se o dia atual ou o seguinte é feriado), bem como as taxas de suplemento definidas no contrato `nightrate`, `holidayrate`, `sarate` (sábado) e `sorate` (domingo).

**Âmbito da linguagem:** A linguagem de script conhece estruturas de controlo (`IF…THEN…ELSEIF…ELSE…ENDIF`, `SELECT CASE`, `FOR…NEXT`, `DO…LOOP`), funções próprias (`FUNCTION`) e procedimentos (`SUB`, que têm de estar definidos antes da sua primeira chamada), bem como funções incorporadas de texto, matemática, trigonometria e tempo (por exemplo, `TimeToHours`, `TimeOverlap` para intervalos que atravessam a meia-noite). O resultado é devolvido através de `OUTPUT tipo, valor`.

**Testar no editor:** O editor de macros tem um separador de testes próprio: introduz valores de exemplo para as variáveis importadas, verifica a sintaxe e executa o script em modo de teste. `DEBUGPRINT`/`DEBUGCLEAR` mostram valores adicionais na janela de teste, sem influenciar o valor de retorno real.

**Segurança:** O interpretador funciona numa sandbox sem acesso ao sistema de ficheiros ou à rede — um macro pode fazer o cálculo de forma errada, mas não pode causar danos fora do cálculo.

## Bom saber

- `DIM` declara uma variável, mas não a inicializa ao mesmo tempo — `DIM x = 10` é um erro de sintaxe; primeiro `DIM x` e depois, em separado, `x = 10`.
- Palavras-chave como `ENDIF`, `ENDFUNCTION` e `ENDSUB` escrevem-se juntas, sem espaço.
- `weekday` segue sempre a norma ISO-8601 (1 = segunda-feira … 7 = domingo) — em consultas `SELECT CASE` próprias para "fim de semana", esses são os valores 6 (sábado) e 7 (domingo).

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
