---
sidebar_position: 4
---

在「設定 > 身分識別提供者」中，您可以將 Klacks 與外部目錄服務 — LDAP/Active Directory 或 OAuth2/OpenID Connect — 連接起來，藉此自動匯入員工，並／或透過該服務處理登入。

## 運作方式

**LDAP/Active Directory：** 您需要填入主機、連接埠（389/636）、SSL、Base DN、Bind DN、Bind 密碼，以及使用者篩選條件。「用於用戶端匯入」開關會啟用自動匯入功能：姓氏、名字、職稱、公司與地址都會從目錄屬性中讀取 — 在 OpenLDAP 與 Active Directory 中，部分屬性名稱並不相同（例如 `uid` 對應 `sAMAccountName`，`street` 對應 `streetAddress`）。這些欄位對應關係已固定寫在後端，無法透過介面編輯。

**OAuth2/OpenID Connect：** 用戶端 ID、用戶端密鑰，選填的租用戶 ID（Azure）、授權 URL、權杖 URL 與使用者資訊 URL，以及範圍（Scopes）— 用於透過 Google、Microsoft 或 GitHub 登入。

**測試連線與同步：** 對於 LDAP/AD 類型的提供者，「測試連線」會顯示找到的使用者數量以及範例使用者名稱。若已啟用用戶端匯入，「立即同步」會觸發一次手動同步；同步結果（已處理／新增／更新／停用）會立刻以訊息形式顯示在頁面上。

## 小提醒

- 此頁面**僅限管理員**存取，Supervisor 角色無法使用。
- Bind 密碼與用戶端密鑰皆以加密方式儲存，介面中只會以遮罩（`***`）顯示；若未做任何修改就直接儲存，原有的值會維持不變。
- 介面目前**不會**顯示長期保存的同步記錄（歷程、錯誤紀錄）— 只會顯示最近一次手動同步的結果。
- 在目錄中已找不到的人員，同步時不會被刪除，而是依其會籍的離職日期停用；日後若重新出現，會自動重新啟用。
- 來自目錄的外部識別碼（LDAP ObjectGUID，若無則改用 Distinguished Name）可避免重複建立：若下次同步時找到相同的識別碼，系統會更新既有人員資料，而不是新增一筆。

---
*立即體驗：[Klacks Playground](https://klacks-software.ch:7643) — 登入 `admin@test.com` / `P@ssw0rt1`，資料每日自動重置。*
