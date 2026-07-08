---
sidebar_position: 1
---

# Otimização de circuitos e rotas

Para intervenções móveis — circuitos de apoio domiciliário (Spitex), rondas de segurança, objetos de limpeza, entregas — o Klacks planeia não só *quem*, mas também *em que ordem*.

## Como funciona

Cada local de intervenção tem o seu endereço registado; o Klacks conhece, portanto, os trajetos. Um **algoritmo de colónia de formigas** (um método de otimização comprovado para problemas de rotas) calcula, a partir dos endereços de intervenção, a sequência mais sensata:

1. **Registar endereços** — introduzir uma única vez nos locais de intervenção
2. **Otimizar a sequência** — o Klacks define a sequência mais curta e sensata; desvios e deslocações em vazio são eliminados
3. **Mostrar no mapa** — o circuito concluído aparece como rota, à escolha para automóvel, bicicleta ou a pé

Se estiverem definidas janelas horárias fixas para uma intervenção (por exemplo, apenas de manhã), isso é tido em conta no planeamento de circuitos — mas não se trata de uma garantia rígida do seu cumprimento.

## Bom saber

- Para o cálculo de distâncias e tempos de viagem, o Klacks pode integrar o serviço externo OpenRouteService (as coordenadas GPS são transmitidas de forma anonimizada) — consoante a configuração da instância.
- A otimização de circuitos é um módulo autónomo para os serviços de contentor; o planeamento automático geral do plano de serviço avalia, de forma independente, a cobertura, a equidade e a conformidade com as regras.
- O meio de transporte pode ser escolhido por circuito — prático para circuitos de bicicleta urbanos ao lado de circuitos de automóvel rurais.
- Se alguém faltar, o Klacks mostra imediatamente quem está qualificado e disponível.

![Vista de linha do tempo para o planeamento de circuitos](/img/app-timeline-de.png)

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
