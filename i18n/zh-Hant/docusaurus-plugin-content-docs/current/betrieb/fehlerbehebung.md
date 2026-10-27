---
sidebar_position: 4
---
# 疑難排解

當 Klacks 沒有依預期運作時，路徑幾乎總是通往兩個可疑服務的日誌 — 以及一個問題：該程序是否真的還在執行。

## 首先：看看有什麼在執行

```bash
docker compose ps
docker compose logs klacks-api
docker compose logs klacks-updater
```

`docker compose ps` 會顯示哪些服務正在執行、是否健康。`klacks-api` 記錄啟動、遷移與資料庫的初始填入；`klacks-updater` 記錄更新的偵測、備份、切換與回復。

## 舊日誌不是證據

這是一個已經耗費過時間的陷阱：日誌檔可能來自**先前**的一次啟動。如果在其中找到錯誤，就把它當成目前的錯誤，那就找錯方向了。

因此請檢查日誌是否**仍在增長**：

```bash
wc -c klacks-api.log; sleep 10; wc -c klacks-api.log
```

如果大小維持不變（增量為 0 位元組），表示該程序已不再寫入 — 無論日誌裡寫了什麼，它都沒有在執行。唯有在確定日誌會隨之更新的情況下，重新重現該錯誤，才是可靠的依據。

## 常見訊息及其意義

| 訊息 | 意義 | 該怎麼做 |
|---|---|---|
| `no matching manifest for linux/amd64` | 您的架構沒有對應的映像檔 | 開發商必須以多架構方式發布映像檔（amd64 **與** arm64） |
| `pull access denied` | 套件登錄庫中的套件是私有的 | 帶著存取憑證重新安裝：Windows 使用 `-GhcrUser`／`-GhcrToken`，Linux 使用 `GHCR_USER`／`GHCR_TOKEN` |
| `errorCode: SETUP_REQUIRED`，HTTP `403` | 管理員設定關卡已啟用 | 以 `admin@test.com` 登入並建立您自己的管理員帳號 — 請見[安裝與 Playground](../../erste-schritte/installation-und-playground/) |
| 容器結束，沒有受控堆疊追蹤，結束代碼為 `-1`（`0xffffffff`） | C/C++ 函式庫中發生**原生**當機，任何 C# `try/catch` 都攔截不到 | 查看容器在 **stderr** 的輸出 — 真正的起因在那裡，而不是在應用程式日誌中 |
| 容器被終止，但日誌中沒有任何應用程式錯誤 | 核心因記憶體不足而終止了程序（OOM） | 檢查記憶體上限 — 請見[系統需求與架構](../systemvoraussetzungen/) |
| 更新失敗後出現 `42P07: relation "…" already exists` | 遷移建立了資料表，而還原並未將其移除 | 請見[備份與還原](../backup-und-wiederherstellung/)中的常見陷阱 |
| API 在 `Application started` 之後數秒內終止 | 啟動成功，當機發生在其後 — 這是原生函式庫的典型徵兆 | 與結束代碼 `-1` 相同的線索：檢查 stderr，而非應用程式日誌 |

在 **Windows-on-ARM 電腦**（Snapdragon X）上，本機運行的搜尋功能過去正是因這類原生函式庫而失敗：API 回報 `Application started`，數秒後介面卻再也連不上它。如果您在 ARM Windows 主機上看到這種模式，首先要看的是主控台輸出（而非檔案日誌）— 受影響的 CPU 偵測所產生的訊息就出現在那裡。

## 如何縮小錯誤範圍

1. **您確切做了什麼**，又預期會發生什麼？錯誤發生前的最後一個步驟就是答案的一半。
2. **哪些服務正在執行？** `docker compose ps`。
3. **日誌還在增長嗎？** 請見上文。
4. **stderr 最後出現了什麼？** 遇到原生當機時，這是唯一的來源。
5. **最近改變了什麼？** 一次更新、一項設定、一張新憑證。

## 小提醒

- **較早啟動的服務與健康的服務，在日誌中看起來一樣。** 如果介面上沒有任何動靜，請檢查程序是否根本還在執行 — 而不只是看它最後寫了什麼。
- **若發生當機卻沒有任何應用程式錯誤，首先要懷疑記憶體**，尤其是在更新引入新的搜尋模型之後。
- **回報時有幫助的資訊：** 受影響的版本（`.env` 中的 `KLACKS_API_TAG`／`KLACKS_UI_TAG`）、`docker compose ps` 的輸出、兩份日誌的最後幾行，以及錯誤發生前的最後一個步驟。請**不要**附上 `.env` 中的密碼與金鑰。
- 如有疑問，請詢問社群：[Discord 上的 Klacks 社群](https://discord.gg/YRP8p2abVC)。

---

*營運方面的問題？歡迎前往 [Discord 上的 Klacks 社群](https://discord.gg/YRP8p2abVC)。*
