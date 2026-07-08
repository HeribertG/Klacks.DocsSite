---
sidebar_position: 1
slug: /
---

# 歡迎來到 Klacks 文件中心

**Klacks** 是專為輪班與外勤作業所打造的開源人力排班平台：自動排班、路線最佳化、透過 AI 助手操控 — 可私有部署（On-Premise），並自由選擇您喜歡的 AI 模型。適用於居家照護、醫院、保全、清潔與物流業者。

本 Wiki 以簡短篇幅逐步說明 Klacks 的運作方式。每個頁面幾分鐘內即可讀完 — 所有內容都可以立即在公開的 Playground 中親自試用。

## 立即開始

| | |
|---|---|
| 🎮 **試用看看** | [Klacks Playground](https://klacks-software.ch:7643) — 登入 `admin@test.com` / `P@ssw0rt1`（公開測試環境，資料每日自動重置） |
| 📦 **安裝部署** | [下載 On-Premise 套件](https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip) — 只需一道指令，Klacks 即可運行 |
| 💬 **提問與交流** | [Klacks Discord 社群](https://discord.gg/YRP8p2abVC) |
| 🌐 **官方網站** | [klacks-software.ch](https://klacks-software.ch) |

## 主題導覽

**關於 Klacks**
- [Klacks 背後的理念](./ueber-klacks/philosophie.md) — 資料主權、AI 模型自由選擇、開源

**快速入門**
- [安裝與 Playground](./erste-schritte/installation-und-playground.md) — 幾分鐘內讓 Klacks 運行起來
- [引導式設定導覽](./erste-schritte/gefuehrte-einrichtungs-tour.md) — Klacksy 帶您完成基礎設定
- [員工與基礎資料](./erste-schritte/mitarbeiter-und-stammdaten.md) — 一切排班的根基
- [角色與權限](./erste-schritte/rollen-und-rechte.md) — 主管與管理員，界線分明

**排班**
- [自動排班：秒速產生班表](./planen/auto-planung.md) — 一鍵即可秒速產生班表
- [排班網格：您的互動式時間矩陣](./planen/plan-raster.md) — 支援拖放操作的互動式時間矩陣
- [模組化排班：分而治之](./planen/modulare-planung.md) — 拆分大型排班表，避免重複預訂
- [核准流程：從草稿到具約束力的排班表](./planen/freigabe-workflow.md) — 從草稿到封存生效的排班表
- [排班規則](./planen/planungsregeln.md) — 休息時間、工時上限與工作日
- [期間結算](./planen/periodenabschluss.md) — 對月份進行具約束力的結算

**優化與分析**
- [巡迴與路線最佳化](./optimieren/touren-und-routenoptimierung.md) — 自動找出最佳路線
- [缺勤一目了然](./optimieren/absenzen-im-blick.md) — 以甘特圖總覽休假與病假
- [資源監控](./optimieren/ressourcen-monitor.md) — 人力負載一覽無遺
- [假日與日曆](./optimieren/feiertage-und-kalender.md) — 精確到市鎮層級
- [技能關聯](./optimieren/skill-beziehungen.md) — Klacksy 自行學習哪些技能彼此相關
- [報表設計器](./optimieren/report-designer.md) — 打造專屬報表

**AI 助手**
- [Klacksy：您的排班 AI 助手](./ki/klacksy-ki-assistent.md) — 用自然語言排班，模型自由選擇

**設定**

*主檔資料與組織*
- [分店](./einstellungen/stammdaten-organisation/branches.md)、[國家](./einstellungen/stammdaten-organisation/laender.md)、[營運商地址](./einstellungen/stammdaten-organisation/owner-address.md)、[工作基本設定](./einstellungen/stammdaten-organisation/work-setting.md)、[資格目錄](./einstellungen/stammdaten-organisation/qualifikationen.md)、[合約範本](./einstellungen/stammdaten-organisation/vertragsvorlagen.md)

*排班與自動化*
- [排班規則預設值](./einstellungen/planung-automatisierung/planungsregeln-standardwerte.md)、[日曆選擇](./einstellungen/planung-automatisierung/kalenderauswahl.md)、[精靈設定](./einstellungen/planung-automatisierung/wizard-einstellungen.md)、[路線最佳化 API](./einstellungen/planung-automatisierung/routenoptimierung-api.md)、[群組可見性](./einstellungen/planung-automatisierung/gruppen-sichtbarkeit.md)

*Klacksy 設定*
- [LLM 供應商與模型](./einstellungen/klacksy-konfiguration/llm-provider-und-modelle.md)、[個性設定](./einstellungen/klacksy-konfiguration/persoenlichkeit.md)、[語音輸入／輸出](./einstellungen/klacksy-konfiguration/sprachein-ausgabe.md)、[自主等級](./einstellungen/klacksy-konfiguration/autonomie-stufen.md)、[模型連線測試](./einstellungen/klacksy-konfiguration/modell-verbindungstest.md)、[技能建議](./einstellungen/klacksy-konfiguration/skill-vorschlaege.md)、[巨集](./einstellungen/klacksy-konfiguration/makros.md)

*通訊與整合*
- [電子郵件寄送](./einstellungen/kommunikation-integration/email-versand.md)、[電子郵件接收](./einstellungen/kommunikation-integration/email-empfang.md)、[DeepL 翻譯](./einstellungen/kommunikation-integration/deepl-uebersetzung.md)、[身分識別提供者](./einstellungen/kommunikation-integration/identity-provider.md)、[ERP 匯入端點](./einstellungen/kommunikation-integration/erp-uebernahmepunkte.md)、[訊息通道](./einstellungen/kommunikation-integration/messaging-kanaele.md)

*系統與安全*
- [使用者管理](./einstellungen/system-sicherheit/benutzerverwaltung.md)、[個人存取權杖](./einstellungen/system-sicherheit/personal-access-tokens.md)、[資料保留](./einstellungen/system-sicherheit/datenaufbewahrung.md)、[更新](./einstellungen/system-sicherheit/updates.md)、[功能外掛](./einstellungen/system-sicherheit/feature-plugins.md)、[語言外掛](./einstellungen/system-sicherheit/sprach-plugins.md)、[垃圾郵件規則](./einstellungen/system-sicherheit/spam-regeln.md)、[一般設定](./einstellungen/system-sicherheit/allgemeine-einstellungen.md)

---
*Klacks 是採用 MIT 授權條款的開源軟體 — [GitHub 上的原始碼](https://github.com/HeribertG/Klacks.Api)。*
