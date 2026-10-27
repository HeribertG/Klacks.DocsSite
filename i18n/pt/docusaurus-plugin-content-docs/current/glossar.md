---
sidebar_position: 8
---
# Glossário

Os termos que surgem repetidamente no Klacks e nesta documentação — de forma breve e pela ordem em que os vai encontrando.

## Planeamento

**Linha de colaborador**
A mais pequena unidade planeável. Não a pessoa e não o dia, mas a linha de uma pessoa numa folha de planeamento concreta. Todos os valores do plano estão ligados a esta linha.

**Folha de planeamento**
Um contentor que reúne **referências** a linhas de colaborador — não cópias. Por isso, uma pessoa existe apenas uma vez, independentemente de em quantos subplanos apareça, e uma alteração fica de imediato visível em todo o lado. Base do [planeamento modular](../planen/modulare-planung/).

**Planeamento automático**
O assistente preenche um plano segundo as suas regras. O cálculo corre em segundo plano enquanto continua a trabalhar — veja [Planeamento automático](../planen/auto-planung/).

**Disponibilidade**
Quando uma pessoa está pronta para trabalhar — com precisão de horas ou de dias, para colaboradores próprios e externos. Veja [Grelha de disponibilidade](../planen/verfuegbarkeits-raster/).

**Encomenda (pedido)**
Um esboço de uma intervenção que ainda pode ser editado. Uma encomenda **ainda não é planeável**.

**Selar**
O passo único e **irreversível** que transforma uma encomenda num turno planeável. Nesse momento, é criada em simultâneo a contrapartida planeável da encomenda. Criar diretamente um turno planeável não é possível no Klacks — cada turno nasce através do selamento. Veja [O ciclo de vida de um turno](../planen/schicht-lebenszyklus/).

**Turno (serviço)**
A intervenção planeável e selada. O termo «serviço» significa o mesmo.

**Níveis de aprovação (plano de turnos)**
O plano de turnos percorre quatro estados numa ordem fixa: **rascunho → confirmado → aprovado → concluído**. Confirmar pode fazê-lo qualquer conta com sessão iniciada; aprovar, apenas Supervisor e Admin; concluir, exclusivamente o Admin. Veja [Fluxo de aprovação](../planen/freigabe-workflow/).

**Período / fecho de período**
O período de apuramento (semanal, quinzenal, mensal ou individual; definido através do intervalo de pagamento). O fecho torna um período vinculativo e está reservado ao Admin — veja [Fecho de período](../planen/periodenabschluss/).

**Ausência — duas coisas, uma palavra**
«Ausência» designa, na área de dados mestre, o **catálogo de tipos de ausência** (nome, cor, duração predefinida, valor predefinido). As barras no calendário são, por outro lado, ou um **desejo** (uma ausência prevista, livremente deslocável e sem nível de bloqueio) ou uma **ausência registada** (transitada do plano de serviço, apenas de leitura na página de ausências e com nível de bloqueio). Quem confundir as duas procura no sítio errado.

## Assistente de IA

**Klacksy**
O assistente de IA do Klacks. Planeia, explica e executa — com um modelo à sua escolha. Veja [Klacksy](../ki/klacksy-ki-assistent/).

**Skill**
Uma capacidade individual e delimitada do Klacksy — um invólucro declarativo em torno de lógica de programa concreta («procurar colaborador», «atribuir contrato», «criar relatório»). O Klacksy escolhe em tempo de execução as skills adequadas.

**Nível de autonomia**
Até onde o Klacksy pode ir sem perguntar:

| Nível | Nome | Comportamento |
|---|---|---|
| 0 | Sugerir | Cada ação de escrita requer a sua confirmação |
| 1 | Assistido | As ações reversíveis são executadas livremente; as definitivas e as sensíveis perguntam |
| 2 | Autónomo (predefinido) | Tudo, exceto as ações classificadas como sensíveis, é executado livremente |
| 3 | Totalmente autónomo | Também os passos definitivos são executados |

As ações sensíveis — por exemplo, eliminar utilizadores ou alterar permissões — perguntam em **todos** os níveis. Veja [Níveis de autonomia](../einstellungen/klacksy-konfiguration/autonomie-stufen/).

## Funções e operação

**Admin / Supervisor / Planeador**
Os três níveis de acesso. O Admin pode tudo, o Supervisor criar e editar; uma conta sem função é Planeador. O resumo encontra-se em [Funções e permissões](../erste-schritte/rollen-und-rechte/).

**Perfil de país**
Um conjunto de definições preparado para um país: idioma, fuso horário, calendário de feriados, fim de semana e início da semana, limites do tempo de trabalho, direito a férias, suplementos, exportação salarial predefinida e modelos setoriais. É escolhido na instalação através de `REGION`.

**Playground**
A instância de teste pública em [play.klacks-software.ch](https://play.klacks-software.ch) com dados de demonstração — expressamente para experimentar, sem dados pessoais reais. Veja [Instalação e Playground](../erste-schritte/installation-und-playground/).

**On-Premise**
A operação na sua própria infraestrutura: o seu hardware, a sua base de dados, os seus dados. O termo oposto à variante alojada.

**Serviço de atualização**
O serviço incluído que aplica atualizações assinadas — com cópia de segurança prévia e rollback automático em caso de problemas. Veja [Atualizações e rollback](../betrieb/updates-und-rollback/).

**Proteção de dados**
O Klacks não «telefona para casa»: não há qualquer envio dos seus dados para o fabricante. Dos dados que devem efetivamente ser eliminados ocupa-se a [retenção de dados](../einstellungen/system-sicherheit/datenaufbewahrung/) — as eliminações são removidas fisicamente após o termo do prazo.

---

*Falta um termo ou está mal explicado? [Comunidade Klacks no Discord](https://discord.gg/YRP8p2abVC).*
