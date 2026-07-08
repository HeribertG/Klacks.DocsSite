---
sidebar_position: 4
---

在「設定 > OpenRoute」中，您需要填入外部服務 openrouteservice.org 的 API 金鑰，Klacks 會使用這個服務進行路線最佳化。

## 運作方式

OpenRouteService 負責計算開車、騎自行車與步行的旅行時間與距離，做為 Klacks 路線最佳化的基礎資料。您只需要在這個頁面唯一的欄位中填入您個人的 API 金鑰。您可以透過頁面上連結的註冊網址前往 openrouteservice.org 免費取得金鑰。

## 小提醒

- 這組金鑰會直接從瀏覽器傳送給 openrouteservice.org，因此刻意以**明碼**顯示，而不像電子郵件密碼那樣以 `***` 遮蔽。這是刻意的設計，方便您察覺輸入錯誤或已過期的金鑰 — 並非顯示上的錯誤。
- 儘管如此，這組金鑰在資料庫中仍然是以加密方式儲存。
- 沒有有效的金鑰，路線最佳化就無法運作 — 此時無法計算旅行時間與距離。
- 至於單純把地址轉換成座標（地理編碼）的功能，Klacks 使用的是另一個獨立的服務 — 這裡的金鑰只負責路線計算。

---
*立即體驗：[Klacks Playground](https://klacks-software.ch:7643) — 登入 `admin@test.com` / `P@ssw0rt1`，資料每日自動重置。*
