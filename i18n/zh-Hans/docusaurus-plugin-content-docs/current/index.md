---
sidebar_position: 1
slug: /
---

# 欢迎来到 Klacks 文档中心

**Klacks** 是一款面向轮班与外勤企业的开源人员排班平台：自动编排班次、优化巡回路线、通过 AI 助手操控 — 本地部署，AI 模型任您选择。适用于居家护理、医院、安保、保洁与物流企业。

本 Wiki 将 Klacks 的工作方式拆成一个个易于消化的小主题。每个页面几分钟即可读完 — 所有功能都可以立即在公共 Playground 中亲手试用。

## 立即上手

| | |
|---|---|
| 🎮 **在线试用** | [Klacks Playground](https://klacks-software.ch:7643) — 登录 `admin@test.com` / `P@ssw0rt1`（公共测试实例，数据每日自动重置） |
| 📦 **安装部署** | [下载本地部署套件](https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip) — 一条命令，Klacks 即刻运行 |
| 💬 **提问与交流** | [Discord 上的 Klacks 社区](https://discord.gg/YRP8p2abVC) |
| 🌐 **官方网站** | [klacks-software.ch](https://klacks-software.ch) |

## 主题一览

**关于 Klacks**
- [Klacks 的理念](./ueber-klacks/philosophie.md) — 数据自主权、AI 自由选择、开源

**快速入门**
- [安装与 Playground](./erste-schritte/installation-und-playground.md) — 几分钟内让 Klacks 运行起来
- [引导式设置导览](./erste-schritte/gefuehrte-einrichtungs-tour.md) — Klacksy 带您完成基础设置
- [员工与基础数据](./erste-schritte/mitarbeiter-und-stammdaten.md) — 一切排班的基石
- [角色与权限](./erste-schritte/rollen-und-rechte.md) — 清晰区分 Supervisor 与 Admin

**排班**
- [自动排班](./planen/auto-planung.md) — 一键生成排班表，数秒完成
- [排班网格](./planen/plan-raster.md) — 支持拖放的交互式时间矩阵
- [模块化排班](./planen/modulare-planung.md) — 拆分大型排班表，杜绝重复排班
- [审批流程](./planen/freigabe-workflow.md) — 从草稿到封存生效的排班表
- [排班规则](./planen/planungsregeln.md) — 休息时间、工时上限与工作日
- [期间结算](./planen/periodenabschluss.md) — 对月度数据进行有约束力的结算

**优化与分析**
- [路线与巡回优化](./optimieren/touren-und-routenoptimierung.md) — 最佳路线，自动生成
- [缺勤一目了然](./optimieren/absenzen-im-blick.md) — 以甘特图纵览休假与病假
- [资源监控](./optimieren/ressourcen-monitor.md) — 人员负载一览无遗
- [法定假日与日历](./optimieren/feiertage-und-kalender.md) — 精确到市镇一级
- [技能关联](./optimieren/skill-beziehungen.md) — Klacksy 自主学习哪些技能彼此相关
- [报表设计器](./optimieren/report-designer.md) — 打造您自己的报表

**AI 助手**
- [Klacksy AI 助手](./ki/klacksy-ki-assistent.md) — 用自然语言排班，模型自由选择

**设置**

*基础数据与组织架构*
- [分支机构](./einstellungen/stammdaten-organisation/branches.md)、[国家](./einstellungen/stammdaten-organisation/laender.md)、[运营方地址](./einstellungen/stammdaten-organisation/owner-address.md)、[工作基础设置](./einstellungen/stammdaten-organisation/work-setting.md)、[资质目录](./einstellungen/stammdaten-organisation/qualifikationen.md)、[合同模板](./einstellungen/stammdaten-organisation/vertragsvorlagen.md)

*排班与自动化*
- [排班规则默认值](./einstellungen/planung-automatisierung/planungsregeln-standardwerte.md)、[日历选择](./einstellungen/planung-automatisierung/kalenderauswahl.md)、[向导设置](./einstellungen/planung-automatisierung/wizard-einstellungen.md)、[路线优化 API](./einstellungen/planung-automatisierung/routenoptimierung-api.md)、[群组可见性](./einstellungen/planung-automatisierung/gruppen-sichtbarkeit.md)

*Klacksy 配置*
- [LLM 提供商与模型](./einstellungen/klacksy-konfiguration/llm-provider-und-modelle.md)、[个性设置](./einstellungen/klacksy-konfiguration/persoenlichkeit.md)、[语音输入/输出](./einstellungen/klacksy-konfiguration/sprachein-ausgabe.md)、[自主性级别](./einstellungen/klacksy-konfiguration/autonomie-stufen.md)、[模型连接测试](./einstellungen/klacksy-konfiguration/modell-verbindungstest.md)、[技能建议](./einstellungen/klacksy-konfiguration/skill-vorschlaege.md)、[宏](./einstellungen/klacksy-konfiguration/makros.md)

*通信与集成*
- [邮件发送](./einstellungen/kommunikation-integration/email-versand.md)、[邮件接收](./einstellungen/kommunikation-integration/email-empfang.md)、[DeepL 翻译](./einstellungen/kommunikation-integration/deepl-uebersetzung.md)、[身份提供商](./einstellungen/kommunikation-integration/identity-provider.md)、[ERP 接入点](./einstellungen/kommunikation-integration/erp-uebernahmepunkte.md)、[消息渠道](./einstellungen/kommunikation-integration/messaging-kanaele.md)

*系统与安全*
- [用户管理](./einstellungen/system-sicherheit/benutzerverwaltung.md)、[个人访问令牌](./einstellungen/system-sicherheit/personal-access-tokens.md)、[数据保留](./einstellungen/system-sicherheit/datenaufbewahrung.md)、[更新](./einstellungen/system-sicherheit/updates.md)、[功能插件](./einstellungen/system-sicherheit/feature-plugins.md)、[语言插件](./einstellungen/system-sicherheit/sprach-plugins.md)、[垃圾邮件规则](./einstellungen/system-sicherheit/spam-regeln.md)、[常规设置](./einstellungen/system-sicherheit/allgemeine-einstellungen.md)

---
*Klacks 是采用 MIT 许可证的开源软件 — [GitHub 上的源代码](https://github.com/HeribertG/Klacks.Api)。*
