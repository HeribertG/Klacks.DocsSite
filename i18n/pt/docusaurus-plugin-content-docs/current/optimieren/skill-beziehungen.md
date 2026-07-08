---
sidebar_position: 5
---

O assistente de IA Klacksy aprende com a utilização diária quais as suas capacidades (skills) que pertencem umas às outras — e assim seleciona da próxima vez as skills adequadas de forma mais precisa.

## Como funciona

O Klacksy observa em segundo plano quais as skills que são frequentemente utilizadas em conjunto ou em sequência numa sessão, e deriva daí **relações**. O processo de aprendizagem decorre automaticamente a cada 6 horas. A página Relações entre Skills mostra todas as relações reconhecidas; os administradores decidem se são adotadas ou rejeitadas.

**Tipos de relação**
- *Sequencial:* A skill A é regularmente utilizada antes da skill B.
- *Necessárias em conjunto:* Ambas as skills ocorrem frequentemente na mesma sessão, sem ordem fixa.

**Origem**
- *Aprendida:* Calculada a partir de dados de utilização reais — elevada fiabilidade.
- *Derivada:* Deduzida logicamente a partir da estrutura das skills, ainda não confirmada por dados de utilização.

**Estado**
- *Candidata:* Recentemente reconhecida, aguarda a sua decisão.
- *Ativa:* Adotada — influencia ativamente o Klacksy.
- *Retirada:* Rejeitada — é ignorada.

A **confiança** (0–100%) mostra o quão seguro o Klacksy está de uma relação. Sobe com cada sessão que confirma o padrão (**confirmações**) e desce com sessões que o contrariam (**contradições**).

## Bom saber

- Adote uma relação quando fizer sentido em termos de conteúdo — ambas as skills realmente pertencem uma à outra e o padrão corresponde ao fluxo de trabalho pretendido.
- Rejeite relações que tenham surgido por acaso ou que não pertençam ao seu contexto (por exemplo, devido a sessões de teste).
- Regra prática: normalmente só compensa adotar relações *aprendidas* com elevada confiança. Candidatas derivadas com pouco suporte é melhor rejeitá-las até haver mais dados de utilização disponíveis.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
