---
sidebar_position: 8
---

# O ciclo de vida de um turno: da encomenda ao segmento

Antes de um turno poder sequer ser preenchido, percorre quatro fases — da encomenda livremente editável, passando pela encomenda selada e imutável, até ao turno planeável e aos seus segmentos. O sentido disto: o que foi acordado permanece permanentemente consultável; o que o dia a dia replaneia depois disso continua, ainda assim, flexível.

## Como funciona

**1. Encomenda — livremente editável.** Todo o novo turno começa aqui. Na página de turnos, o botão **+ nova encomenda** abre o formulário de registo; revê a encomenda tantas vezes quantas quiser, todos os campos ficam abertos. Ainda não aparece no plano de serviço, e por isso também não é possível escalar colaboradores nele. Ainda assim, não é um mero esboço — é uma encomenda real, apenas ainda não selada. Na lista de turnos, o Klacks agrupa esta fase sob **Encomendas**. Se mudar aí para **Turnos planeáveis**, o botão passa a chamar-se **+ novo turno**: cria uma encomenda sem ligação a um cliente — para trabalho geral que ninguém externo encomenda e paga. Nesse caso, o cartão *Morada* desaparece; este turno também percorre as quatro fases.

**2. Encomenda selada — imutável.** Quando a encomenda estiver definida, sela-a com o botão de cadeado no cartão *Geral*. A partir desse momento, fica bloqueada e permanece guardada de forma permanente como representação vinculativa do acordo — mesmo quando a operação corrente já replaneou o turno há muito. Depois de guardar, isto **não é reversível**. Quais as encomendas que já atingiram esta fase é indicado, na lista de turnos, pela caixa de verificação **Mostrar apenas encomendas seladas**.

**3. Turno planeável — é aqui que se planeia.** O selamento cria, num único passo e exatamente uma vez, o turno planeável: uma cópia ligada à encomenda. Só este turno aparece na [Grelha de planeamento: a sua matriz de tempo interativa](../planen/plan-raster.md), só nele se podem reservar colaboradores — e continua editável. Uma nova gravação posterior não gera uma segunda cópia. Na lista de turnos, encontra-o sob **Turnos planeáveis**.

**4. Segmentos — o turno recortado.** Um turno planeável pode ser recortado, por exemplo por dias ou por períodos de tempo. O turno anterior torna-se, ele próprio, num segmento, e os restantes surgem ao lado. Todos os segmentos são, por sua vez, planeáveis e passam a suportar a ocupação efetiva. A encomenda selada permanece intocada por isto — continua a ser o contrato em segundo plano.

**Quando o botão de cadeado fica ativo:** permanece cinzento até a encomenda estar suficientemente completa para o planeamento — abreviatura, nome e data de início preenchidos, pelo menos um dia da semana e pelo menos um grupo selecionados, e tanto o número de tarefas como o número de colaboradores por turno superiores a zero. A sua dica é inequívoca: «Após o bloqueio, a encomenda torna-se imutável e fica pronta para o planeamento.»

**A única exceção à imutabilidade:** se uma encomenda selada não tiver data de fim — por exemplo, porque a encomenda se prolonga continuamente ou o seu final ainda está em aberto —, pode definir esse único campo mesmo posteriormente. Condição: a partir da data escolhida, ainda não pode haver turnos planeados. Depois disso, também este campo fica bloqueado como todos os outros.

**Um exemplo:** a 1 de maio, regista a encomenda «Casamento Müller» e refina-a ao longo de dois dias. A 3 de maio, o cliente confirma — sela a encomenda. O Klacks fixa a encomenda e cria, ao lado, o turno planeável. A 4 de maio, a disposição regista dois colaboradores, a 5 de maio o turno é recortado em dois segmentos. A 1 de junho, o período é fechado e os registos nos segmentos ficam bloqueados. A encomenda selada de 3 de maio nunca foi alterada em todo este processo.

**Os cartões do formulário de registo.** O formulário divide-se em cartões, que pode expandir e recolher individualmente; guarda-se e descarta-se através da barra de gravação no fundo da área de trabalho. Parte dos cartões só aparece quando ativa o interruptor **Modo especialista** no cartão *Geral*:

- **Geral** — abreviatura (no máximo 6 carateres; o Klacks sugere-a automaticamente enquanto escreve o nome), nome, data de início e de fim, bem como notas. Aqui estão também o botão de cadeado e o interruptor do modo especialista.
- **Grupo** — atribui o turno a um ou vários grupos. Pelo menos um grupo é obrigatório; enquanto nenhum estiver selecionado, uma caixa de informação chama a atenção para isso.
- **Qualificações exigidas** — que [qualificações](../einstellungen/stammdaten-organisation/qualifikationen.md) o turno exige, cada uma com nível mínimo (Baixo a Especialista) e a indicação de se é obrigatória.
- **Horas e dias da semana** — hora de início, hora de fim e duração, bem como os dias da semana em que o turno ocorre, além de duas regras de feriados. No modo especialista, pode em alternativa gerir aqui o turno como janela temporal: ele fica então flexível dentro da janela entre a hora de início e a hora de fim, e o que conta é a duração registada.
- **Macro** (modo especialista) — associa o turno a um [macro](../einstellungen/klacksy-konfiguration/makros.md) para o cálculo da duração e do salário.
- **Morada** — o cliente ou o local de intervenção, pesquisado por nome ou número de identificação. A coluna de filtro à direita restringe exatamente essa pesquisa.
- **Características especiais** (modo especialista) — serviço esporádico com periodicidade, briefing e debriefing, tempo de deslocação de ida e volta, bem como o número de colaboradores e de tarefas por turno.
- **Despesas padrão** (modo especialista) — despesas que ocorrem regularmente neste turno, cada uma com designação, valor e a indicação de se está sujeita a imposto.

Como os turnos planeáveis são depois preenchidos descrevem-no [Planeamento automático: o plano em segundos](../planen/auto-planung.md) e [A grelha de planeamento: a sua matriz de tempo interativa](../planen/plan-raster.md).

## Bom saber

- **Selar aqui significa algo diferente do que no fluxo de aprovação.** Selar uma encomenda congela a *descrição* do turno — o que há a fazer, de forma permanente. Já o [Fluxo de aprovação: do rascunho ao plano vinculativo](../planen/freigabe-workflow.md) e o [Fecho de período](../planen/periodenabschluss.md) bloqueiam, em contrapartida, os *registos em dias concretos*. Ambos funcionam de forma independente um do outro.
- **As encomendas também surgem automaticamente.** Além do formulário de registo, a [importação ERP](../einstellungen/kommunikation-integration/erp-uebernahmepunkte.md) é a segunda via: as encomendas provenientes daí também chegam inicialmente como encomenda não selada e têm de ser verificadas e seladas.
- **Uma encomenda esquecida dá sinal.** Se uma encomenda ficar por selar pouco antes do seu início, [O Klacksy como membro proativo da equipa](../ki/klacksy-proaktiv.md) chama a atenção para isso com o tipo de achado «Encomenda em aberto» — porque não selada significa: não planeável.
- **Os turnos-contentor funcionam de forma um pouco diferente.** Um contentor é um invólucro que agrupa vários turnos parciais; por isso não tem cliente nem morada, e os cartões *Morada* e *Despesas padrão* desaparecem. Nele, o cartão *Características especiais* mostra apenas a opção de serviço esporádico. A caixa de verificação «É um contentor» encontra-se, no modo especialista, no cartão *Geral*, e só pode ser marcada enquanto a encomenda ainda não estiver selada.
- **Os turnos esporádicos e os turnos de janela temporal não contam.** Ambos não aparecem propositadamente na barra de turnos do [Monitor de Recursos](../optimieren/ressourcen-monitor.md), porque não representam uma necessidade diária fixa.

---
*Experimente diretamente: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, os dados são repostos diariamente.*
