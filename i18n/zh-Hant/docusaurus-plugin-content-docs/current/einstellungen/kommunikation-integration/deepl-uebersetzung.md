---
sidebar_position: 3
---

您可以在「設定 > DeepL」中設定 DeepL API 金鑰，讓 Klacks 能夠自動翻譯文字 — 目前主要用於收件匣中收到的電子郵件。

## 運作方式

**API 金鑰：** 只需一個輸入欄位即可填入 DeepL API 金鑰（免費版 Free API 的格式為 `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx`，付費版 Pro API 則不含 `:fx` 後綴）。Klacks 會依是否含有 `:fx` 後綴，自動判斷應呼叫哪一個 DeepL API 位址 — 不需要另外在 Free 與 Pro 之間切換。帳戶與金鑰本身可在 deepl.com/pro-api 取得。

**使用方式：** 在「收件匣」中，每封電子郵件都可以透過翻譯圖示，翻譯成目前設定的介面語言；原文與譯文可以透過切換開關比對。未設定金鑰時，此功能無法使用。

## 小提醒

- 此設定是整個安裝實例的全域設定 — 並沒有依使用者個別設定的金鑰。
- 此頁面沒有專屬的「測試」按鈕；金鑰是否有效，會在收件匣中第一次嘗試翻譯時顯現。
- 如果金鑰無效或已過期，Klacks 會根據 DeepL 回傳的回應（驗證錯誤）辨識出來，並提示錯誤，而不是顯示空白或錯誤的翻譯結果。
- 金鑰會以加密方式儲存，並在表單中以遮罩形式顯示。

---
*立即體驗：[Klacks Playground](https://klacks-software.ch:7643) — 登入 `admin@test.com` / `P@ssw0rt1`，資料每日自動重置。*
