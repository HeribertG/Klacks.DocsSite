---
sidebar_position: 4
---

# Níveis de Autonomia

Até que ponto o Klacksy pode agir de forma autónoma antes de perguntar? Em Definições > Autonomia do Klacksy define isto para si próprio — a definição aplica-se por conta de utilizador, não para todos os utilizadores em conjunto.

## Como funciona

**Quatro níveis:**

- **Sugerir** — o Klacksy apenas sugere, cada alteração requer a sua confirmação.
- **Assistido** — as ações reversíveis são executadas diretamente, tudo o resto requer confirmação.
- **Autónomo** (padrão) — todas as ações são executadas diretamente, exceto as particularmente sensíveis.
- **Totalmente autónomo** — mesmo planos com várias etapas são executados sem aprovações intermédias.

**Como funciona a classificação:** Cada ação que o Klacksy poderia executar está internamente classificada por risco: as ações apenas de leitura são sempre executadas de imediato; as ações reversíveis ou associadas a um cenário (por exemplo, num planeamento de teste) requerem, no mínimo, o nível Assistido; as ações irreversíveis requerem, no mínimo, o nível Autónomo. As ações sensíveis — gestão de utilizadores, permissões e alterações à própria definição de autonomia — exigem sempre confirmação explícita, **independentemente do nível escolhido**.

**O fluxo de confirmação:** Se uma ação necessitar da sua aprovação, o Klacksy não a executa de imediato — em vez disso, coloca-a em espera durante 5 minutos e resume o que aconteceria. Só quando concordar expressamente, por palavras suas, o Klacksy desencadeia a ação em espera — nunca confirma por sua própria iniciativa em seu nome.

## Bom saber

- O nível de autonomia é uma definição pessoal por conta de utilizador — cada utilizador pode escolher o seu próprio nível de conforto.
- Um nível mais elevado não significa que deixe de haver perguntas: as ações sensíveis permanecem sempre sujeitas a confirmação.
- Por padrão, está ativo o nível Autónomo — o que corresponde ao comportamento que o Klacksy já tinha antes da introdução dos níveis de autonomia.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
