---
sidebar_position: 1
---

# 安裝與 Playground

Klacks 一分鐘內即可試用 — 安裝也只需幾分鐘。不需要註冊，也沒有任何銷售流程。

## Playground：認識 Klacks 的遊樂場

Playground 並不是一種安裝方式，而是一個附帶範例資料的公開 Klacks 實例，可以隨意試玩、不必拘謹 — 這正是它名稱的由來。它運作於 **[play.klacks-software.ch](https://play.klacks-software.ch)**：

- **登入：** `admin@test.com` · **密碼：** `P@ssw0rt1`
- 您擁有完整的管理員權限 — 儘管嘗試所有功能。
- 範例資料包含約 5,000 位客戶，純屬示範資料。
- **請勿輸入真實的個人資料。** 資料庫每天瑞士時間 04:00（02:00 UTC）重置為固定狀態。

## 安裝：架設在自己的伺服器上（On-Premise 私有部署）

On-Premise 套件已包含所有必要元件：Docker 映像檔、安裝程式、資料庫、HTTPS 以及自動更新。您只能從 [Klacks Store](https://klacks-software.ch/store/?culture=zh-TW) 下載此套件。

在 Klacks Store 中可視需要選擇行業，並下載適用於您所在國家的 ZIP。安裝程式會自行產生密碼與憑證，下載最新的 Docker 映像檔，並等待所有服務就緒。

### Linux：逐步說明

您需要一台至少 8 GB RAM、80 與 443 連接埠空閒、可連上網際網路，並擁有具備 `sudo` 權限帳戶的機器。不必事先安裝 Docker（見步驟 4）。

1. **從 Klacks Store 下載 ZIP。** 在 [Klacks Store](https://klacks-software.ch/store/?culture=zh-TW) 中您所在國家的頁面下載，如有需要可同時選擇您的行業。
2. **解壓縮到固定的資料夾**，例如 `~/klacks`，不要放在 `Downloads` 或 `/tmp` 中。之後自動更新正是使用這個資料夾；如果它被刪除或移動，更新就會失效。如果安裝程式在 `Downloads` 或 `/tmp` 中執行，它會發出警告。

   ```bash
   unzip 'klacks-onprem-*.zip' -d ~/klacks
   ```

3. **在該資料夾中開啟終端機。** 在檔案管理員中通常可以對該資料夾按右鍵來完成（選單項目的名稱取決於桌面環境），或者您直接輸入 `cd ~/klacks`。
4. **啟動安裝程式：**

   ```bash
   sudo bash ./install-de.sh
   ```

   德國套件中的腳本名為 `install-de.sh`；其他國家套件的名稱中帶有各自的國家代碼，因此通用寫法是 `sudo bash ./install-*.sh`。安裝程式需要 `sudo`，才能存取 Docker，並在需要時安裝 Docker。沒有 `sudo` 的話，只有在 Docker 已安裝且您的使用者屬於 `docker` 群組時才行得通。

   **如果缺少 Docker**，安裝程式會提議使用 `get.docker.com` 上的官方腳本安裝 Docker Engine。這只會在詢問您之後進行（`[y/N]`，預設為否），並且僅限 Ubuntu、Debian、Fedora、CentOS 與 RHEL；為此，機器需要 `curl` 或 `wget` 以及網際網路連線。在其他發行版上，請依照 [Docker 的說明](https://docs.docker.com/engine/install/)自行安裝附帶 Compose 外掛程式的 Docker Engine。如果安裝程式在沒有終端機的情況下執行，`INSTALL_DOCKER=yes` 會對該詢問回答「是」。Docker 本身不建議在正式環境使用此腳本；對於正式環境的伺服器，最好自行安裝 Docker。較舊的 `docker-compose`（第 1 版）不受支援，需要 `docker compose` 外掛程式。
5. **等待。** 安裝程式會產生密碼與一份自簽憑證，下載映像檔並啟動整個堆疊。首次啟動時，API 會遷移資料庫；安裝程式最多為此等待十分鐘。最後會顯示 `Klacks is up at https://…`，其下是**您的設定代碼**（`Your setup code`，十二個字元，分成三組，每組四個）。請記下它；它也儲存在安裝資料夾的 `.env` 檔案中，名為 `KLACKS_SETUP_CODE`。
6. **開啟 Klacks：** `https://localhost`（如果伺服器名稱或 HTTPS 連接埠不同，請使用安裝程式訊息中的位址）。瀏覽器會對自簽憑證發出警告；請確認該警告。之後您用設定代碼建立自己的管理員帳戶，請見[首次登入](#first-login)。
7. **更新**此後會透過隨附的更新服務自動進行。您不需要為此再次執行安裝程式。

如果 Docker 看到的記憶體不足 7 GiB，首次安裝會中止。如何設定較小的主機，請見[系統需求](../betrieb/systemvoraussetzungen.md)。

### Windows

在 Windows 下，請執行 `install-*.ps1`，而不是 `install-*.sh`。

### 選項：伺服器名稱與國家設定檔

藉由選用的國家設定檔，安裝程式會在首次啟動時直接設定好語言、假日、工時上限、加給與行業範本：

```bash
sudo SERVER_NAME=klacks.example.com REGION=de bash ./install.sh
```

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1 -ServerName klacks.example.com -Region de
```

在 Linux 下，變數要寫在 `sudo` **之後**：`sudo` 通常不會把寫在它前面的變數傳給安裝程式。使用國家套件的腳本時，呼叫方式如下：`sudo SERVER_NAME=klacks.example.com bash ./install-de.sh`。

來自 Klacks Store 的國家套件包含其所屬國家的設定檔。隨附的腳本 `install-*.sh` 與 `install-*.ps1` 已將 `REGION` 或 `-Region` 設為該國的國家代碼 — 例如德國套件中的 `install-de.sh` 與 `install-de.ps1`。如果您直接呼叫 `install.sh` 或 `install.ps1`，`REGION` 或 `-Region` 必須是該國家代碼；沒有它，安裝程式就不會設定國家設定檔。

## Windows 辦公室電腦：也可從 Microsoft Store 取得

針對單台 Windows 辦公室電腦，另有一個不需要 Docker 的安裝程式。您可以在 [Klacks Store](https://klacks-software.ch/store/?culture=zh-TW) 的所在國家頁面取得，也可以在 [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26)（項目「Klacks」）取得。兩個商店提供的是同一個安裝程式。從 Microsoft Store 安裝時，它會套用 Windows 中設定的國家/地區；在那裡不需選擇產業，若該國家/地區沒有國家設定檔，安裝程式就不會設定任何設定檔。伺服器、Docker 與 Linux 安裝以及國家與產業套件僅在 Klacks Store 提供。

在辦公室電腦上，新版本透過 Klacks 中的「設定 > [軟體更新](../einstellungen/system-sicherheit/updates.md)」取得，即使 Klacks 是從 Microsoft Store 安裝的也一樣。較新的安裝程式無法覆蓋安裝在現有安裝之上。

## 首次登入：您自己的管理員帳戶 {#first-login}

全新安裝的 Klacks 裡還沒有屬於您的帳戶。因此，首次在瀏覽器中開啟時，會在任何登入之前直接出現「設定您自己的管理員帳戶」頁面：姓名、電子郵件地址（它將成為您的登入名稱）與一個輸入兩次的密碼；密碼規則會即時顯示在旁邊。

在伺服器（Docker）上，該頁面還會要求輸入**設定代碼**，即使您是在伺服器本機的瀏覽器中開啟 Klacks 也是如此。安裝程式已在安裝結束時顯示過該代碼；它也儲存在安裝資料夾的 `.env` 檔案中，名為 `KLACKS_SETUP_CODE`。它只對這一次設定有效。錯誤的代碼會被拒絕（「設定代碼不符。請檢查後再試一次。」）。

儲存後，您的帳戶會取得管理員角色，隨附的測試帳戶會在同一個動作中被永久停用；之後 Klacks 會自動以您自己的帳戶為您登入；如果失敗，請以新的憑證登入。只要設定了設定代碼，隨附的測試帳戶本來就無法在瀏覽器中用於登入。接下來是「國家與產業」頁面。

在您自己的帳戶建立之前，伺服器會以錯誤代碼 `SETUP_REQUIRED`（HTTP 403）攔截所有其他請求。這背後並非故障：只是還缺少設定。

- 在 Windows 辦公室電腦上，如果您在同一台電腦的瀏覽器中開啟 Klacks，則不需要設定代碼。從另一台電腦連線時只會出現登入頁面。
- 如果 Klacks 顯示的是登入頁面，例如在沒有設定代碼的安裝中，安裝程式的輸出會列出隨附的帳戶；即便如此，Klacks 也會直接引導您建立自己的管理員帳戶。
- 如果兩個人同時送出，只有第一個人成為管理員；第二個人會被帶到登入頁面。

只有在 Playground 與本機開發環境中，這道關卡才被刻意關閉；在那裡，隨附的帳戶會保留。

## 小提醒

- **前提條件：** 至少 8 GB RAM 與 4 vCPU，具備 Compose v2 的 Docker（在 Linux 上，安裝程式經詢問後會安裝 Docker），空閒的 80 與 443 連接埠，以及對 `ghcr.io` 與 `github.com` 的對外 HTTPS 連線。詳情以及較小主機的計算範例請見[系統需求](../betrieb/systemvoraussetzungen.md)。
- 隨附的更新服務會自動讓您的安裝保持在最新狀態 — 每次更新前都會建立備份，發生問題時也會自動回復。具體流程請見[更新與回復](../betrieb/updates-und-rollback.md)。
- 您的資料保存在您自己基礎設施上的您自己的資料庫中。不過，部分功能會呼叫外部服務 — 具體是哪些，請見下一節。
- 再次執行安裝程式不會造成損害，但它不是更新：它會保留密碼、憑證以及首次安裝時決定的版本，並重新啟動整個堆疊（在 Linux 上，如果您最初使用 `sudo` 安裝，則同樣要用 `sudo`）。這樣可以修復不再運行的堆疊。新版本由更新服務安裝，而不是安裝程式。
- 如果您自備憑證，請在安裝前把 `server.crt` 與 `server.key` 放到安裝資料夾的 `nginx/certs/` 中；否則安裝程式會產生一份自簽憑證。
- 請定期自行備份您的資料庫 — 方法請見[備份與還原](../betrieb/backup-und-wiederherstellung.md)。

## Klacks 會呼叫哪些外部服務

您的資料保存在您自己的伺服器上。不過，在標準運作模式下，Klacks 的某些功能仍會呼叫網際網路上的公開服務。這些服務的位址是寫死的；目前您無法填入自己的地理編碼、路線規劃或地圖伺服器。

| 服務 | 用途 | 傳送的內容 | 預設 | 關閉方式 |
|---|---|---|---|---|
| OpenStreetMap 的 Nominatim（`nominatim.openstreetmap.org`） | 將地址轉換為座標：儲存地址時、用於公司所在地、在路線規劃中，以及在針對地址與小組所在地的背景服務中 | 街道、郵遞區號、城市與國家，不含任何人名；對於小組所在地為地名或小組名稱 | 開 | `BackgroundServices__AddressGeocoding=false` 與 `BackgroundServices__GroupGeocoding=false` 只會關閉背景服務。儲存地址時仍會進行地理編碼。 |
| 公開的 OSRM 伺服器（`router.project-osrm.org`） | 行程時間、距離以及地圖上的路線 | 工作地點的座標，不含名稱 | 只要未設定 OpenRouteService 金鑰就開；此外，當 Klacks 伺服器沒有回傳路線時，瀏覽器還會直接向 OSRM 查詢 | 未提供 |
| OpenRouteService（`api.heigit.org`） | 與 OSRM 相同，另外支援自行車與步行 | 工作地點的座標，不含名稱 | 僅在填入了 API 金鑰時 | 在「設定 > OpenRoute」中刪除金鑰 |
| 地圖圖磚（OpenStreetMap、OpenStreetMap.de 或 CARTO） | 儀表板上的地圖顯示 | 來自瀏覽器：IP 位址與所顯示的地圖範圍 | 一旦顯示地圖即開 | 可在地圖中選擇供應商，但不能使用自己的圖磚伺服器 |
| GitHub（`github.com`）與 GitHub Container Registry（`ghcr.io`） | 安裝與自動更新：發行資訊清單與 Docker 映像檔 | 一般的下載請求，不含規劃資料 | 開 | — |
| Klacks 市集（`klacks-software.ch/store`） | 語言套件與國家套件 | 國家代碼、套件代碼或搜尋詞 | 搜尋套件時以及載入國家設定檔時 | 位址可透過 `LanguagePlugins__MarketplaceUrl` 設定 |
| Hugging Face（`huggingface.co`） | 一次性下載 Klacksy 的搜尋模型 | 不含客戶資料（檔案下載） | 首次需要時 | — |
| Open-Meteo（`api.open-meteo.com`、`air-quality-api.open-meteo.com`） | 歡迎小工具中的天氣與空氣品質提示，透過 Klacksy 查詢天氣 | 瀏覽器的座標（如已授權）或公司所在地的座標 | 開 | `Assistant__Ambient__Enabled=false` 只會關閉空氣品質與假日提示，不會關閉歡迎語中的天氣查詢 |
| Nager.Date（`date.nager.at`） | 歡迎小工具中的假日提示 | 國家代碼 | 開 | `Assistant__Ambient__Enabled=false` |
| 雲端 AI 供應商（例如 OpenAI、Anthropic、Google、DeepSeek） | Klacksy 以及 AI 輔助的背景功能（例如對小組所在地的歸類） | 請求以及來自您資料的必要脈絡 | 僅在設定了雲端模型時 | 使用本機模型 |
| 語音、搜尋與翻譯服務（例如 Deepgram、Groq、AssemblyAI、Edge TTS、OpenAI TTS、ElevenLabs、Google Cloud TTS、DeepL、網路搜尋） | 語音輸入與輸出、網路搜尋、翻譯 | 音訊或文字 | 僅在使用或設定時；瀏覽器的語音辨識視瀏覽器而定，透過其線上服務運作 | 不使用該功能 |

「關閉方式」欄中的開關是容器 `klacks-api` 的環境變數；請把它們填寫到 `docker-compose.yml` 中該服務的 `environment:` 之下。只寫在 `.env` 檔案中是不夠的，因為該服務不會把它當作 `env_file` 讀取。

使用本機 AI 模型時，不會有任何傳往語言模型的請求送達外部 AI 供應商。對於本表中的其餘服務，這並不會帶來任何改變。

---

*對安裝有疑問？歡迎加入 [Klacks Discord 社群](https://discord.gg/YRP8p2abVC)。*
