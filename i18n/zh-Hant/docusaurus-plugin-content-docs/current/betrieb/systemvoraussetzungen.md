---
sidebar_position: 1
---
# 系統需求與架構

Klacks 以 Docker 堆疊的形式在您自己的伺服器上運行。本頁說明啟動時會有哪些服務，以及如何為主機規劃資源 — 包括建議所依據的實測數值。

## 架構：五個服務

On-Premise 套件只啟動運行所需的內容：

| 服務 | 映像檔 | 職責 |
|---|---|---|
| `klacks-postgres` | `pgvector/pgvector:pg17` | 資料庫；向量擴充功能已內建 |
| `klacks-api` | `ghcr.io/heribertg/klacks-api` | 後端；啟動時執行遷移並填入資料庫 |
| `klacks-ui` | `ghcr.io/heribertg/klacks-ui` | Angular 介面，透過 nginx 提供 |
| `klacks-updater` | `ghcr.io/heribertg/klacks-updater` | 套用已簽署的更新（api 與 ui 一併更新） |
| `klacks-proxy` | `nginx:alpine` | TLS 終止與反向代理 |

開發商的內部服務（開發知識庫、行銷、市集、pgAdmin、certbot、Blazor 介面）刻意**不**包含在內。因此身為營運者，您看到的只有自己的堆疊。

## 主機需要具備什麼

- 至少 **8 GB RAM 與 4 vCPU**（請見下方的計算）。
- Docker Desktop（Windows／macOS）或具備 Compose v2 的 Docker Engine（Linux），**amd64 或 arm64**。
- 空閒的連接埠 **80 與 443** — 可透過 `HTTP_PORT` 與 `HTTPS_PORT` 覆寫。
- **對外**的 HTTPS 連線至 `ghcr.io`（映像檔）與 `github.com`（已簽署的更新資訊清單）。
- 選用：連線至 `klacks-software.ch:7553`，以便從市集取得國家套件與語言外掛。

## 記憶體：為什麼是 8 GB，以及較小的主機會發生什麼事

Klacks 將它的兩個搜尋模型（Embedder 與 Reranker）**在地端**於 `klacks-api` 程序內運行。兩個 ONNX 工作階段會持續常駐記憶體 — 不會在每次提問後卸載。

於 2026 年 9 月 12 日在開發商的正式環境主機上實測：

- 程序基本負載：約 1,017 MB
- Embedder：約 1,171 MB
- Reranker：約 116 MB
- 合計：約 **2,304 MB** 的穩定高原
- 在 2,560 MB 的上限下，核心在 2,471 MB 時終止了容器（OOM）。

因此，隨附的 Compose 為 `klacks-api` 設定了 **3,584M** 與 3.0 CPU，並關閉閒置卸載。整個堆疊合計：3,584M（api）+ 2,048M（postgres）+ 3 × 256M（ui、updater、proxy）= **6,400 MiB**，8 GB 中剩餘的部分留給作業系統與檔案快取。

**較小的主機，例如 `klacks-api` 約 3 GB：** 請在 `.env` 中同時設定以下**兩**行 — 絕不要只設定記憶體那一行：

```bash
KLACKS_API_MEMORY_LIMIT=2560M
KLACKS_API_IDLE_UNLOAD_MINUTES=30
```

閒置卸載會在 30 分鐘沒有存取後釋放一個工作階段。代價是：之後的下一次提問需要重新載入它（Embedder 約 2.2–2.9 秒，Reranker 約 1.1 秒）。介於 1 到 5 之間的值會被提高為 5，`0` 表示永不卸載。

## CPU：核心較少只會變慢，不會壞掉

搜尋在核心較少時也能運作，只是會變慢 — Reranker 是運算最密集的步驟。實測：3.0 個 CPU 時，25 個候選項目需 2,994–3,163 毫秒；1.5 個 CPU 時則需 4,339–4,860 毫秒，且服務另外被節流了 7.15 秒。對於較小的主機：

```bash
KLACKS_API_CPU_LIMIT=1.5
```

堆疊的 CPU 配額總和刻意設為 4.75，而 vCPU 為 4：配額是上限而非保留量，而且各服務不會同時達到尖峰。

## 小提醒

- **密碼與金鑰請保持穩定。** `POSTGRES_PASSWORD` 在首次啟動時就已寫入資料磁碟區 — 之後更改會使資料庫成為孤兒。`JWT_SECRET` 用於簽署工作階段；更改它會使所有使用者登出。安裝程式每次重新執行時都會保留這兩者。
- **`COMPOSE_PROJECT_NAME=klacks`** 是寫死的，讓主機與更新服務無論資料夾名稱為何，都指向同一個 Compose 專案。安裝後請勿再更改。
- **`KnowledgeIndex__WarmupEnabled=false` 不是節省記憶體的選項。** 它只是把搜尋的建置從啟動階段延後到第一次聊天請求；在持續運作中，這些工作階段同樣會常駐。只有在主機於啟動時因記憶體不足而失敗時才有用。
- **不只一個 API 執行個體？** 那麼您需要 SignalR 背板。Klacks 並未隨附：請自行提供一個與 RESP 相容的服務（例如 Valkey — 自 7.4 起採用 BSD-3 授權，與 Redis 不同），並啟用 nginx 範本中預先準備好的黏著上游（`ip_hash`）。沒有背板時，只會運行一個 `klacks-api` 執行個體，就像目前所有的安裝一樣。
- **國家設定檔：** 安裝程式支援 30 種設定檔：`ae`、`at`、`ch`、`cn`、`cz`、`de`、`dk`、`es`、`fi`、`fr`、`gb`、`gr`、`id`、`il`、`it`、`jp`、`kr`、`li`、`my`、`nl`、`no`、`pl`、`pt`、`ro`、`sa`、`se`、`th`、`tw`、`us`、`vn`。設定檔會在首次啟動時設定語言、國家／地區與時區、假日日曆、週末與每週起始日、工時上限、休假額度、加給、預設的薪資匯出目標系統（例如瑞士為 `abaconnect-ch`），以及產業範本 — 例如 Spitex 的排班規則範本「CH Spitex Standard」。沒有設定檔時，Klacks 以中性狀態啟動，所有項目都需由您手動設定。

---

*營運方面的問題？歡迎前往 [Discord 上的 Klacks 社群](https://discord.gg/YRP8p2abVC)。*
