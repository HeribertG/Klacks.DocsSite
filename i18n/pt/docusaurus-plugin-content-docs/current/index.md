---
sidebar_position: 1
slug: /
---

# Bem-vindo à documentação do Klacks

**Klacks** é a plataforma open source para o planeamento de recursos humanos em operações de turnos e serviços: planear turnos automaticamente, otimizar rotas, controlar através de um assistente de IA — on-premise, com o modelo de IA à sua escolha. Para Spitex, hospitais, empresas de segurança, limpeza e logística.

Este wiki explica em pequenas partes como funciona o Klacks. Cada página lê-se em poucos minutos — e tudo pode ser experimentado de imediato no playground público.

## Comece já

| | |
|---|---|
| 🎮 **Experimentar** | [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1` (instância de teste pública, os dados são repostos diariamente) |
| 📦 **Instalar** | [Transferir o pacote On-Premise](https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip) — um comando, e o Klacks está a funcionar |
| 💬 **Perguntas e troca de ideias** | [Comunidade Klacks no Discord](https://discord.gg/YRP8p2abVC) |
| 🌐 **Website** | [klacks-software.ch](https://klacks-software.ch) |

## As partes

**Sobre o Klacks**
- [A filosofia por trás do Klacks](./ueber-klacks/philosophie.md) — soberania dos dados, liberdade de escolha de IA, open source

**Primeiros passos**
- [Instalação e Playground](./erste-schritte/installation-und-playground.md) — Em poucos minutos com um Klacks a funcionar
- [O tour de configuração guiado](./erste-schritte/gefuehrte-einrichtungs-tour.md) — O Klacksy guia-o pelas definições básicas
- [Colaboradores e dados-base](./erste-schritte/mitarbeiter-und-stammdaten.md) — O fundamento de todo o planeamento
- [Funções e permissões](./erste-schritte/rollen-und-rechte.md) — Supervisor e Admin, claramente distintos
- [O seu Dashboard: tudo num relance](./erste-schritte/ihr-dashboard.md) — A página inicial do Klacks com quatro secções reordenáveis: Visão geral, Cobertura e Confirmação, Recursos e Localizações

**Planear**
- [Planeamento automático: um clique, o resto corre em segundo plano](./planen/auto-planung.md) — Cálculo em segundo plano, enquanto se dedica a outras coisas
- [A grelha de planeamento: A sua matriz de tempo interativa](./planen/plan-raster.md) — A matriz de tempo interativa com arrastar e largar
- [Planeamento modular: Dividir para conquistar](./planen/modulare-planung.md) — Dividir grandes planos, sem duplas reservas
- [Fluxo de aprovação: Do rascunho ao plano vinculativo](./planen/freigabe-workflow.md) — Do rascunho ao plano selado
- [Regras de planeamento](./planen/planungsregeln.md) — Períodos de descanso, limites e dias de trabalho
- [Fecho de período](./planen/periodenabschluss.md) — Fechar meses de forma vinculativa
- [A grelha de disponibilidade: Quem está disponível, e quando](./planen/verfuegbarkeits-raster.md) — Registada com precisão horária ou diária, para colaboradores próprios e externos
- [O ciclo de vida de um turno: Da encomenda ao segmento](./planen/schicht-lebenszyklus.md) — Da encomenda editável ao contrato selado, até ao turno planeável

**Otimizar e Analisar**
- [Otimização de turnos e rotas](./optimieren/touren-und-routenoptimierung.md) — A melhor rota, automaticamente
- [Ausências à vista](./optimieren/absenzen-im-blick.md) — Férias e doença como visão geral em Gantt
- [Monitor de recursos](./optimieren/ressourcen-monitor.md) — Ocupação num relance
- [Feriados e calendário](./optimieren/feiertage-und-kalender.md) — Com precisão até ao município
- [Relações entre Skills](./optimieren/skill-beziehungen.md) — O Klacksy aprende sozinho quais das suas capacidades pertencem umas às outras
- [Report Designer](./optimieren/report-designer.md) — Construir relatórios próprios
- [Verificar a qualidade do planeamento: Violações, lacunas e omissões](./optimieren/planungsqualitaet-pruefen.md) — As três tabelas de diagnóstico depois de uma execução do assistente
- [Escalonamento e disponibilidade de chamada](./optimieren/eskalation-rufbereitschaft.md) — Quem é chamado, por que ordem, quando alguém falta

**O Assistente de IA**
- [Klacksy: O seu assistente de IA para o planeamento](./ki/klacksy-ki-assistent.md) — Planeamento por voz, com livre escolha de modelo
- [O Klacksy como membro proativo da equipa](./ki/klacksy-proaktiv.md) — O que o Klacksy nota por conta própria — e até onde pode ir

**Definições**

*Dados-base e Organização*
- [Filiais](./einstellungen/stammdaten-organisation/branches.md), [Países](./einstellungen/stammdaten-organisation/laender.md), [Endereço do operador](./einstellungen/stammdaten-organisation/owner-address.md), [Definições básicas de trabalho](./einstellungen/stammdaten-organisation/work-setting.md), [Catálogo de qualificações](./einstellungen/stammdaten-organisation/qualifikationen.md), [Modelos de contrato](./einstellungen/stammdaten-organisation/vertragsvorlagen.md), [Horas extraordinárias](./einstellungen/stammdaten-organisation/ueberstunden.md)

*Planeamento e Automação*
- [Valores padrão das regras de planeamento](./einstellungen/planung-automatisierung/planungsregeln-standardwerte.md), [Seleção de calendário](./einstellungen/planung-automatisierung/kalenderauswahl.md), [Definições do assistente](./einstellungen/planung-automatisierung/wizard-einstellungen.md), [API de otimização de rotas](./einstellungen/planung-automatisierung/routenoptimierung-api.md), [Visibilidade de grupos](./einstellungen/planung-automatisierung/gruppen-sichtbarkeit.md)

*Configuração do Klacksy*
- [Fornecedor de LLM e modelos](./einstellungen/klacksy-konfiguration/llm-provider-und-modelle.md), [Personalidade](./einstellungen/klacksy-konfiguration/persoenlichkeit.md), [Entrada/saída de voz](./einstellungen/klacksy-konfiguration/sprachein-ausgabe.md), [Níveis de autonomia](./einstellungen/klacksy-konfiguration/autonomie-stufen.md), [Teste de ligação de modelo](./einstellungen/klacksy-konfiguration/modell-verbindungstest.md), [Sugestões de skills](./einstellungen/klacksy-konfiguration/skill-vorschlaege.md), [Macros](./einstellungen/klacksy-konfiguration/makros.md)

*Comunicação e Integração*
- [Envio de e-mail](./einstellungen/kommunikation-integration/email-versand.md), [Receção de e-mail](./einstellungen/kommunikation-integration/email-empfang.md), [Tradução DeepL](./einstellungen/kommunikation-integration/deepl-uebersetzung.md), [Identity Provider](./einstellungen/kommunikation-integration/identity-provider.md), [Pontos de integração ERP](./einstellungen/kommunikation-integration/erp-uebernahmepunkte.md), [Canais de mensagens](./einstellungen/kommunikation-integration/messaging-kanaele.md), [Entrega da exportação salarial](./einstellungen/kommunikation-integration/lohnexport-uebergabe.md)

*Sistema e Segurança*
- [Gestão de utilizadores](./einstellungen/system-sicherheit/benutzerverwaltung.md), [Personal Access Tokens](./einstellungen/system-sicherheit/personal-access-tokens.md), [Retenção de dados](./einstellungen/system-sicherheit/datenaufbewahrung.md), [Atualizações](./einstellungen/system-sicherheit/updates.md), [Plugins de funcionalidades](./einstellungen/system-sicherheit/feature-plugins.md), [Plugins de idioma](./einstellungen/system-sicherheit/sprach-plugins.md), [Regras de spam](./einstellungen/system-sicherheit/spam-regeln.md), [Definições gerais](./einstellungen/system-sicherheit/allgemeine-einstellungen.md)

---
*O Klacks é open source sob licença MIT — [código-fonte no GitHub](https://github.com/HeribertG/Klacks.Api).*
