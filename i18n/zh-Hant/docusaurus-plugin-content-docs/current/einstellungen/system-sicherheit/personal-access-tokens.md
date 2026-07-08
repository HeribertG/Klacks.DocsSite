---
sidebar_position: 2
---

# Personal Access Tokens

Personal Access Tokens（個人存取權杖，簡稱 PAT）是長效的 API 金鑰，讓外部工具與服務不需使用者名稱與密碼即可安全存取 Klacks — 例如透過 Model Context Protocol（MCP）連接的 AI 助理（如 Claude Desktop）、自動化腳本或 CI/CD 流水線。

## 運作方式

**建立權杖：** 在「設定 > Personal Access Tokens」中點選「建立新權杖」，輸入一個容易辨識的名稱（例如 `Claude Desktop` 或 `CI-Pipeline`），並選擇 1 至 730 天的有效期限（預設為 365 天）。權杖建立後會以 `klacks_pat_<隨機字串>` 的格式顯示**僅此一次** — 請立即複製，之後便無法再次取得。

**使用方式：** 此權杖會以 Bearer Token 的形式，透過每個 API 請求的 `Authorization` 標頭傳送，例如 `Authorization: Bearer klacks_pat_...`。若是 Claude Desktop 這類 MCP 用戶端，請將其設定為指向 `/mcp` 的 MCP 伺服器所使用的 `AUTHORIZATION` 環境變數。

**管理：** 總覽畫面會顯示每個權杖的名稱、建立日期、到期日與最後使用時間 — 明碼權杖本身不會再次顯示。未來 30 天內即將到期的權杖會在清單中標示出來。點選「撤銷」按鈕可立即且永久地封鎖該權杖。

## 小提醒

- Klacks 只會儲存權杖的 SHA-256 雜湊值，絕不會儲存明碼權杖本身 — 遺失的權杖無法復原，只能撤銷後重新建立。
- 每個權杖都會綁定您的使用者帳戶，並擁有與您帳戶相同的權限 — 目前沒有針對個別權杖的細粒度範圍限制。
- 建議每個工具使用專屬的權杖，如此一來若懷疑遭到濫用，便可精準撤銷該權杖，而不會中斷其他整合。

---
*直接體驗：[Klacks Playground](https://klacks-software.ch:7643) — 登入帳號 `admin@test.com` / `P@ssw0rt1`，資料每日自動重置。*
