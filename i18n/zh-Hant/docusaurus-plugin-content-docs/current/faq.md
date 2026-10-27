---
sidebar_position: 9
---
# 常見問題

正式使用前最常被問到的問題 — 並以誠實的答案回覆，即使答案是「目前還沒有」。

## 試用與入門

**我一定要安裝 Klacks 才能看到它嗎？**
不用。[Playground](https://play.klacks-software.ch) 是附帶示範資料的公開實例；您以 `admin@test.com` / `P@ssw0rt1` 登入，即擁有完整的管理員權限。資料庫每天瑞士時間 04:00 重置 — 請勿在那裡輸入真實的個人資料。

**安裝需要多久？**
安裝程式只需一道指令。它會產生密碼與憑證、固定目前版本、啟動整個堆疊，並等待一切就緒。其中耗時最長的部分是下載映像檔。系統需求請見[系統需求與架構](../betrieb/systemvoraussetzungen/)。

**為什麼我必須建立自己的管理員帳號？**
因為隨附帳號的密碼是公開的。Klacks 只讓您用它登入一次，隨後要求您建立自己的帳號；之後預設帳號便會停用。這是刻意的設計，不是錯誤。

## 營運

**我的資料存放在哪裡？**
在您的基礎設施上。Klacks 不會將您的資料回傳給開發商。若您將 AI 模型作為外部服務接入，**該**服務當然適用它自己的條款 — 模型由您自行選擇。

**我一定要使用雲端服務商嗎？**
不用，這正是 On-Premise 的核心：整個堆疊都在您的伺服器上運行。您只需要**對外**連線至套件與更新來源（`ghcr.io`、`github.com`）。目前**沒有**完全不連網的營運方式 — 在隔離網路中安裝，是尚未實現的後續擴充項目。

**我該如何備份資料？**
自行備份 — 備份由您負責。如何操作，以及哪個磁碟區絕對不能漏掉，請見[備份與還原](../betrieb/backup-und-wiederherstellung/)。

**更新失敗會怎樣？**
更新服務會先備份資料庫，一併切換新版本，隨後檢查健康狀態。如果新版本不健康，它會自動回復。詳情請見[更新與回復](../betrieb/updates-und-rollback/)。

**Klacks 能在我現有的硬體上運行嗎？**
參考值為：**8 GB RAM 與 4 vCPU**。對於較小的主機，有文件記載的設定可以釋出記憶體 — 代價是下一次向 Klacksy 提問會稍微久一些。

**Klacks 能與我的身分識別提供者相容嗎？**
可以。Klacks 可以接上現有的身分識別提供者，而不必自行維護帳號 — 請見[身分識別提供者](../einstellungen/kommunikation-integration/identity-provider/)。

## 功能

**Klacks 適合哪些產業？**
它專為輪班與外勤作業而設計：居家照護與 Spitex、醫院、保全服務、清潔與居家服務，以及物流。

**介面支援哪些語言？**
文件提供 25 種語言，包括德文、英文、法文、義大利文、西班牙文、波蘭文、日文、中文（簡體與繁體）、阿拉伯文與希伯來文 — 阿拉伯文與希伯來文也支援由右至左的閱讀方向。

**我必須決定使用哪個 AI 模型嗎？**
供應商與模型由您自行選擇，並可隨時更換。如何設定與測試，請見 [LLM 提供者與模型](../einstellungen/klacksy-konfiguration/llm-provider-und-modelle/)與[模型連線測試](../einstellungen/klacksy-konfiguration/modell-verbindungstest/)。

**Klacks 要花多少錢？**
原始碼採用 GNU Affero General Public License v3（AGPL-3.0）— 您可以閱讀、修改並自行營運。若您將修改後的版本透過網路提供給他人，也必須讓這些使用者同樣依 AGPL-3.0 取得修改後的原始碼。此外的一切（提問、交流、進一步開發）都透過 [Discord 上的 Klacks 社群](https://discord.gg/YRP8p2abVC)與[公開原始碼儲存庫](https://github.com/HeribertG/Klacks.Api)進行。

**Klacks 已經完成了嗎？**
沒有，而且也從未宣稱完成。Klacks 仍在建構中，但它公開開發並實際運作 — 您隨時可以在 Playground 中親自檢驗目前的狀態，而不是相信一段說明。

## 參與

**我發現了錯誤，或有問題。**
最快的方式是到 [Discord 社群](https://discord.gg/YRP8p2abVC)。軟體中的錯誤，請提交至[儲存庫](https://github.com/HeribertG/Klacks.Api)。提供以下資訊永遠有幫助：版本、發生錯誤前的最後一個步驟，以及日誌的最後幾行 — 請見[疑難排解](../betrieb/fehlerbehebung/)。

**我可以自己貢獻嗎？**
原始碼是開放的，文件也在同一個地方。指出不清楚之處的回饋，與程式碼一樣受歡迎。

---

*找不到您的問題？歡迎前往 [Discord 上的 Klacks 社群](https://discord.gg/YRP8p2abVC)。*
