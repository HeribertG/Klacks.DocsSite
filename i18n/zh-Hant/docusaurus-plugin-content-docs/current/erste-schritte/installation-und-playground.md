---
sidebar_position: 1
---

# 安裝與 Playground

Klacks 一分鐘內即可試用 — 安裝也只需幾分鐘。不需要註冊，也沒有任何銷售流程。

## 方式一：Playground（不需安裝）

一個附帶範例資料的公開 Klacks 實例，運作於 **[klacks-software.ch](https://klacks-software.ch:7643)**：

- **登入：** `admin@test.com` · **密碼：** `P@ssw0rt1`
- 您擁有完整的管理員權限 — 儘管嘗試所有功能。
- 所有資料**每日會自動重置**。請勿輸入真實的個人資料。

## 方式二：架設在自己的伺服器上（On-Premise 私有部署）

On-Premise 套件已包含所有必要元件：Docker 映像檔、安裝程式、資料庫、HTTPS 以及自動更新。

```bash
curl -fsSLO https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip
unzip klacks-onprem.zip && cd onprem && ./install.sh
```

Windows 下請改用 `install.ps1` 而非 `install.sh`。安裝程式會自行產生密碼與憑證，下載最新的 Docker 映像檔，並等待所有服務就緒。首次登入請使用 `admin@test.com` / `P@ssw0rt1` — **請在第一次登入後立即變更此密碼。**

## 小提醒

- 隨附的更新服務會自動讓您的安裝保持在最新狀態 — 每次更新前都會建立備份，發生問題時也會自動回復。
- 您的資料完全保留在自己的基礎設施上；Klacks 不會將資料回傳到外部。
- 前提是需要一台安裝了 Docker、可對外連線（供下載 Docker 映像檔與更新使用）並開放 80/443 連接埠的伺服器。

---
*對安裝有疑問？歡迎加入 [Klacks Discord 社群](https://discord.gg/YRP8p2abVC)。*
