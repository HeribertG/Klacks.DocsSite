---
sidebar_position: 4
---

O calendário perpétuo calcula automaticamente os feriados para cada ano — define as regras uma única vez, e o Klacks conhece depois os feriados para todos os anos futuros.

## Como funciona

Cada feriado é descrito através de uma regra breve. Existem dois tipos básicos:

- **Datas fixas** no formato `MM/DD`: `01/01` é o Ano Novo, `08/01` o Dia Nacional Suíço, `12/25` o Natal.
- **Datas relativas à Páscoa** no formato `EASTER+XX` ou `EASTER-XX`: a data da Páscoa é calculada automaticamente segundo a fórmula gaussiana da Páscoa, e o feriado é definido como a distância a essa data. Exemplos: `EASTER-02` = Sexta-Feira Santa, `EASTER+01` = Segunda-Feira de Páscoa, `EASTER+39` = Ascensão, `EASTER+50` = Segunda-Feira de Pentecostes, `EASTER+60` = Corpo de Deus.

Além disso, existem **datas fixas com deslocamento de dia da semana** (`MM/DD+XX+WW` ou `MM/DD+XX-WW`) para feriados como «primeira quinta-feira de novembro» (`11/01+00+TH`) ou «última segunda-feira de maio» (`05/25+00-MO`).

Com as **SubRules** desloca automaticamente um feriado quando este cai num determinado dia da semana — por exemplo, `SA+2;SU+1`: se o dia cair a sábado ou domingo, passa para segunda-feira. Várias regras são separadas por `;`.

Por cada regra, regista ainda o nome e a descrição (em várias línguas), o país e o cantão/estado federado, bem como as caixas de verificação **Feriado legal** e **Pago**.

## Bom saber

- As abreviaturas dos dias da semana são em inglês: `SU`, `MO`, `TU`, `WE`, `TH`, `FR`, `SA`.
- As SubRules destinam-se sobretudo a deslocar feriados do fim de semana para o dia útil seguinte.
- A caixa de verificação **Pago** é relevante para o cálculo salarial.
- Através do país e do cantão/estado federado controla as diferenças regionais — a Sexta-Feira Santa, por exemplo, não é feriado em todos os cantões da Suíça (exceções: VS, TI).
- Os pacotes de calendário pré-instalados para países e cantões suíços estão protegidos contra eliminação; as seleções de calendário próprias, criadas pelo utilizador, podem ser eliminadas a qualquer momento.

![Regras de feriados no Klacks](/img/app-calendar-de.png)

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
