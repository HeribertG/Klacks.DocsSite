---
sidebar_position: 1
---

# 安装与 Playground

试用 Klacks 只需一分钟 — 安装也只需几分钟。无需注册，没有销售环节。

## Playground：用来熟悉产品的试验场

Playground 并不是一种安装方式，而是一个带有示例数据、供您随意试玩的公共 Klacks 实例 — 这也是它名字的由来。它运行在 **[play.klacks-software.ch](https://play.klacks-software.ch)**：

- **登录：** `admin@test.com` · **密码：** `P@ssw0rt1`
- 您拥有完整的管理员权限 — 请尽情尝试所有功能。
- 示例数据包含约 5'000 名客户，纯属演示数据。
- **请勿输入真实的个人数据。** 数据库每天瑞士时间 04:00（02:00 UTC）重置为固定状态。

## 安装：部署在自己的服务器上（本地部署）

本地部署套件包含所需的一切：Docker 镜像、安装程序、数据库、HTTPS 以及自动更新。您只能在 [Klacks Store](https://klacks-software.ch/store/?culture=zh-CN) 下载该套件。

在 Klacks Store 中可按需选择行业，并下载适用于您所在国家的 ZIP。安装程序会自行生成密码和证书，拉取最新的 Docker 镜像，并等待所有服务就绪。

### Linux：分步说明

您需要一台至少 8 GB 内存、80 和 443 端口空闲、可访问互联网、并拥有具备 `sudo` 权限账户的机器。无需事先安装 Docker（见第 4 步）。

1. **从 Klacks Store 下载 ZIP。** 在 [Klacks Store](https://klacks-software.ch/store/?culture=zh-CN) 中您所在国家的页面下载，如有需要可同时选择您的行业。
2. **解压到固定的文件夹**，例如 `~/klacks`，不要放在 `Downloads` 或 `/tmp` 中。之后自动更新正是使用这个文件夹；如果它被删除或移动，更新就会失效。如果安装程序在 `Downloads` 或 `/tmp` 中运行，它会发出警告。

   ```bash
   unzip 'klacks-onprem-*.zip' -d ~/klacks
   ```

3. **在该文件夹中打开终端。** 在文件管理器中通常可以右键点击该文件夹来完成（菜单项名称取决于桌面环境），或者您直接输入 `cd ~/klacks`。
4. **启动安装程序：**

   ```bash
   sudo bash ./install-de.sh
   ```

   德国套件中的脚本名为 `install-de.sh`；其他国家套件的名称中带有各自的国家代码，因此通用写法是 `sudo bash ./install-*.sh`。安装程序需要 `sudo`，这样才能访问 Docker，并在需要时安装 Docker。没有 `sudo` 的话，只有在 Docker 已安装且您的用户属于 `docker` 组时才行得通。

   **如果缺少 Docker**，安装程序会提议使用 `get.docker.com` 上的官方脚本安装 Docker Engine。这只会在询问您之后进行（`[y/N]`，默认为否），并且仅限 Ubuntu、Debian、Fedora、CentOS 和 RHEL；为此，机器需要 `curl` 或 `wget` 以及互联网访问。在其他发行版上，请按照 [Docker 的说明](https://docs.docker.com/engine/install/)自行安装带有 Compose 插件的 Docker Engine。如果安装程序在没有终端的情况下运行，`INSTALL_DOCKER=yes` 会对该询问回答“是”。Docker 本身不建议在生产环境使用此脚本；对于生产服务器，最好自行安装 Docker。较旧的 `docker-compose`（版本 1）不受支持，需要 `docker compose` 插件。
5. **等待。** 安装程序会生成密码和一份自签名证书，拉取镜像并启动整个服务栈。首次启动时，API 会迁移数据库；安装程序最多为此等待十分钟。最后会显示 `Klacks is up at https://…`，其下是**您的设置代码**（`Your setup code`，十二个字符，分为三组，每组四个）。请记下它；它也保存在安装文件夹的 `.env` 文件中，名为 `KLACKS_SETUP_CODE`。
6. **打开 Klacks：** `https://localhost`（如果服务器名称或 HTTPS 端口不同，请使用安装程序提示中的地址）。浏览器会对自签名证书发出警告；请确认该警告。之后您用设置代码创建自己的管理员账户，参见[首次登录](#first-login)。
7. **更新**此后会通过随附的更新服务自动进行。您无需为此再次运行安装程序。

如果 Docker 看到的内存不足 7 GiB，首次安装会中止。如何配置较小的主机，请见[系统要求](../betrieb/systemvoraussetzungen.md)。

### Windows

在 Windows 下，请运行 `install-*.ps1`，而不是 `install-*.sh`。

### 选项：服务器名称与国家配置文件

借助可选的国家配置文件，安装程序会在首次启动时直接设置好语言、节假日、工时上限、附加津贴和行业模板：

```bash
sudo SERVER_NAME=klacks.example.com REGION=de bash ./install.sh
```

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1 -ServerName klacks.example.com -Region de
```

在 Linux 下，变量要写在 `sudo` **之后**：`sudo` 通常不会把写在它前面的变量传给安装程序。使用国家套件的脚本时，调用方式如下：`sudo SERVER_NAME=klacks.example.com bash ./install-de.sh`。

来自 Klacks Store 的国家套件包含其所属国家的配置文件。随附的脚本 `install-*.sh` 和 `install-*.ps1` 已将 `REGION` 或 `-Region` 设为该国的国家代码 — 例如德国套件中的 `install-de.sh` 和 `install-de.ps1`。如果您直接调用 `install.sh` 或 `install.ps1`，`REGION` 或 `-Region` 必须是该国家代码；没有它，安装程序就不会设置国家配置文件。

## Windows 办公电脑：也可从 Microsoft Store 获取

针对单台 Windows 办公电脑，另有一个无需 Docker 的安装程序。您可以在 [Klacks Store](https://klacks-software.ch/store/?culture=zh-CN) 的本国页面获取，也可以在 [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26)（条目“Klacks”）获取。两个商店提供的是同一个安装程序。从 Microsoft Store 安装时，它会采用 Windows 中设置的国家/地区；在那里无需选择行业，如果该国家/地区没有国家配置文件，安装程序不会设置任何配置文件。服务器、Docker 和 Linux 安装以及国家和行业套件仅在 Klacks Store 提供。

在办公电脑上，新版本通过 Klacks 中的“设置 > [软件更新](../einstellungen/system-sicherheit/updates.md)”获取，即使 Klacks 是从 Microsoft Store 安装的也是如此。较新的安装程序无法覆盖安装到现有安装之上。

## 首次登录：您自己的管理员账户 {#first-login}

全新安装的 Klacks 里还没有属于您的账户。因此，首次在浏览器中打开时，会在任何登录之前直接出现“设置您自己的管理员账户”页面：姓名、电子邮件地址（它将成为您的登录名）和一个输入两次的密码；密码规则会实时显示在旁边。

在服务器（Docker）上，该页面还会要求输入**设置代码**，即使您是在服务器本机的浏览器中打开 Klacks 也是如此。安装程序已在安装结束时显示过该代码；它也保存在安装文件夹的 `.env` 文件中，名为 `KLACKS_SETUP_CODE`。它只对这一次设置有效。错误的代码会被拒绝（“设置代码不匹配。请检查后重试。”）。

保存后，您的账户会获得管理员角色，随附的测试账户会在同一操作中被永久停用；之后 Klacks 会自动用您自己的账户为您登录；如果失败，请用新的凭据登录。只要设置了设置代码，随附的测试账户本来就无法在浏览器中用于登录。接下来是“国家和行业”页面。

在您自己的账户创建之前，服务器会用错误代码 `SETUP_REQUIRED`（HTTP 403）拦截所有其他请求。这背后并非故障：只是还缺少设置。

- 在 Windows 办公电脑上，如果您在同一台电脑的浏览器中打开 Klacks，则不需要设置代码。从另一台电脑访问时只会出现登录页面。
- 如果 Klacks 显示的是登录页面，例如在没有设置代码的安装中，安装程序的输出会给出随附的账户；即便如此，Klacks 也会直接引导您创建自己的管理员账户。
- 如果两个人同时提交，只有第一个人成为管理员；第二个人会被带到登录页面。

只有在 Playground 和本地开发环境中，这道关卡才被有意关闭；在那里，随附的账户会保留。

## 小贴士

- **前提条件：** 至少 8 GB 内存和 4 vCPU，带 Compose v2 的 Docker（在 Linux 上，安装程序经询问后会安装 Docker），空闲的 80 和 443 端口，以及对 `ghcr.io` 和 `github.com` 的出站 HTTPS 访问。详情以及较小主机的计算示例见[系统要求](../betrieb/systemvoraussetzungen.md)。
- 随附的更新服务会让您的安装始终保持最新 — 每次更新前自动备份，出现问题时自动回滚。具体流程见[更新与回滚](../betrieb/updates-und-rollback.md)。
- 您的数据保存在您自己基础设施上的您自己的数据库中。不过，部分功能会调用外部服务 — 具体是哪些，见下一节。
- 再次运行安装程序没有危害，但它不是更新：它会保留密码、证书以及首次安装时确定的版本，并重新启动整个服务栈（在 Linux 上，如果您最初使用 `sudo` 安装，则同样要用 `sudo`）。这样可以修复不再运行的服务栈。新版本由更新服务安装，而不是安装程序。
- 如果您自带证书，请在安装前把 `server.crt` 和 `server.key` 放到安装文件夹的 `nginx/certs/` 中；否则安装程序会生成一份自签名证书。
- 请定期自行备份您的数据库 — 方法见[备份与恢复](../betrieb/backup-und-wiederherstellung.md)。

## Klacks 会调用哪些外部服务

您的数据保存在您自己的服务器上。不过，在标准运行模式下，Klacks 的某些功能仍会调用互联网上的公共服务。这些服务的地址是写死的；目前您无法填入自己的地理编码、路线规划或地图服务器。

| 服务 | 用途 | 发送的内容 | 默认 | 关闭方式 |
|---|---|---|---|---|
| OpenStreetMap 的 Nominatim（`nominatim.openstreetmap.org`） | 将地址转换为坐标：保存地址时、用于公司所在地、在路线规划中，以及在针对地址和小组所在地的后台服务中 | 街道、邮编、城市和国家，不含任何人名；对于小组所在地为地名或小组名称 | 开 | `BackgroundServices__AddressGeocoding=false` 和 `BackgroundServices__GroupGeocoding=false` 只会关闭后台服务。保存地址时仍会进行地理编码。 |
| 公共 OSRM 服务器（`router.project-osrm.org`） | 行程时间、距离以及地图上的路线 | 工作地点的坐标，不含名称 | 只要未配置 OpenRouteService 密钥就开；此外，当 Klacks 服务器没有返回路线时，浏览器还会直接向 OSRM 查询 | 未提供 |
| OpenRouteService（`api.heigit.org`） | 与 OSRM 相同，另外支持自行车和步行 | 工作地点的坐标，不含名称 | 仅在填入了 API 密钥时 | 在“设置 > OpenRoute”中删除密钥 |
| 地图瓦片（OpenStreetMap、OpenStreetMap.de 或 CARTO） | 仪表板上的地图显示 | 来自浏览器：IP 地址和所显示的地图区域 | 一旦显示地图即开 | 可在地图中选择提供商，但不能使用自己的瓦片服务器 |
| GitHub（`github.com`）和 GitHub Container Registry（`ghcr.io`） | 安装与自动更新：发布清单和 Docker 镜像 | 普通的下载请求，不含规划数据 | 开 | — |
| Klacks 市场（`klacks-software.ch/store`） | 语言包和国家包 | 国家代码、包代码或搜索词 | 搜索包时以及加载国家配置文件时 | 地址可通过 `LanguagePlugins__MarketplaceUrl` 配置 |
| Hugging Face（`huggingface.co`） | 一次性下载 Klacksy 的搜索模型 | 不含客户数据（文件下载） | 首次需要时 | — |
| Open-Meteo（`api.open-meteo.com`、`air-quality-api.open-meteo.com`） | 欢迎小部件中的天气和空气质量提示，通过 Klacksy 查询天气 | 浏览器的坐标（如已授权）或公司所在地的坐标 | 开 | `Assistant__Ambient__Enabled=false` 只会关闭空气质量和节假日提示，不会关闭欢迎语中的天气查询 |
| Nager.Date（`date.nager.at`） | 欢迎小部件中的节假日提示 | 国家代码 | 开 | `Assistant__Ambient__Enabled=false` |
| 云端 AI 提供商（例如 OpenAI、Anthropic、Google、DeepSeek） | Klacksy 以及 AI 辅助的后台功能（例如对小组所在地的归类） | 请求以及来自您数据的必要上下文 | 仅在配置了云端模型时 | 使用本地模型 |
| 语音、搜索和翻译服务（例如 Deepgram、Groq、AssemblyAI、Edge TTS、OpenAI TTS、ElevenLabs、Google Cloud TTS、DeepL、网络搜索） | 语音输入与输出、网络搜索、翻译 | 音频或文本 | 仅在使用或配置时；浏览器的语音识别视浏览器而定，通过其在线服务工作 | 不使用该功能 |

“关闭方式”一列中的开关是容器 `klacks-api` 的环境变量；请把它们填写到 `docker-compose.yml` 中该服务的 `environment:` 下。只写在 `.env` 文件中是不够的，因为该服务不会把它当作 `env_file` 读取。

使用本地 AI 模型时，不会有任何发往语言模型的请求到达外部 AI 提供商。对于本表中的其余服务，这并不会带来任何改变。

---

*安装方面有疑问？欢迎加入 [Discord 上的 Klacks 社区](https://discord.gg/YRP8p2abVC)。*
