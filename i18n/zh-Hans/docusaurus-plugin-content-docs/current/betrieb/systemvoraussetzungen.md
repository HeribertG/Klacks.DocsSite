---
sidebar_position: 1
---
# 系统要求与架构

Klacks 以 Docker 服务栈的形式运行在您自己的服务器上。本页介绍会启动哪些服务，以及如何为主机确定配置 — 包括推荐值所依据的实测数据。

## 架构：五个服务

本地部署套件只启动运行所必需的服务：

| 服务 | 镜像 | 职责 |
|---|---|---|
| `klacks-postgres` | `pgvector/pgvector:pg17` | 数据库；向量扩展已内置 |
| `klacks-api` | `ghcr.io/heribertg/klacks-api` | 后端；启动时迁移并填充数据库 |
| `klacks-ui` | `ghcr.io/heribertg/klacks-ui` | Angular 界面，通过 nginx 提供 |
| `klacks-updater` | `ghcr.io/heribertg/klacks-updater` | 应用签名更新（api 和 ui 一起） |
| `klacks-proxy` | `nginx:alpine` | TLS 终结与反向代理 |

厂商的内部服务（开发知识库、营销、市场、pgAdmin、certbot、Blazor 界面）有意**不**包含在内。作为运营方，您看到的只有自己的服务栈。

## 主机需要具备什么

- 最低 **8 GB 内存和 4 vCPU**（见下方的计算）。
- Docker Desktop（Windows/macOS）或带 Compose v2 的 Docker Engine（Linux），**amd64 或 arm64**。
- 空闲的端口 **80 和 443** — 可通过 `HTTP_PORT` 和 `HTTPS_PORT` 覆盖。
- 对 `ghcr.io`（镜像）和 `github.com`（签名的更新清单）的**出站** HTTPS 访问。
- 可选：访问 `klacks-software.ch:7553`，用于获取市场中的国家包和语言插件。

## 内存：为什么是 8 GB，以及较小的主机会怎样

Klacks 将它的两个搜索模型（嵌入模型和重排序模型）**在进程内本地**运行于 `klacks-api` 中。两个 ONNX 会话会常驻内存 — 不会在每次提问后卸载。

于 2026 年 9 月 12 日在厂商的生产主机上实测：

- 进程基础负载：约 1'017 MB
- 嵌入模型：约 1'171 MB
- 重排序模型：约 116 MB
- 合计：稳定在约 **2'304 MB**
- 在 2'560 MB 的限制下，内核在 2'471 MB 时终止了容器（OOM）。

因此，随套件提供的 Compose 为 `klacks-api` 设置了 **3'584M** 和 3.0 CPU，并关闭空闲卸载。按整个服务栈计算：3'584M（api）+ 2'048M（postgres）+ 3 × 256M（ui、updater、proxy）= **6'400 MiB**，8 GB 中剩余的部分留给操作系统和文件缓存。

**较小的主机，例如 `klacks-api` 约 3 GB：** 请在 `.env` 中**同时**设置下面两行 — 切勿只设置内存那一行：

```bash
KLACKS_API_MEMORY_LIMIT=2560M
KLACKS_API_IDLE_UNLOAD_MINUTES=30
```

空闲卸载会在 30 分钟无人访问后释放会话。代价是：此后的下一个问题会重新加载它（嵌入模型约 2.2–2.9 秒，重排序模型约 1.1 秒）。1 到 5 之间的值会被提高到 5，`0` 表示永不卸载。

## CPU：核心少只会变慢，不会出故障

搜索在核心较少时同样可用，只是会变慢 — 计算量最大的环节是重排序模型。实测：对 25 个候选，3.0 CPU 下为 2'994–3'163 ms，1.5 CPU 下为 4'339–4'860 ms，且后者中服务还额外被限流了 7.15 秒。对于较小的主机：

```bash
KLACKS_API_CPU_LIMIT=1.5
```

服务栈的 CPU 配额总和有意设为 4.75（对应 4 vCPU）：配额是上限而非预留，而且各服务不会同时达到峰值。

## 小贴士

- **密码和密钥要保持稳定。** `POSTGRES_PASSWORD` 在首次启动时就被固化进数据卷 — 之后再改会使数据库成为孤儿。`JWT_SECRET` 用于为会话签名；一旦更改，所有用户都会被登出。安装程序在每次重新运行时都会保留这两者。
- **`COMPOSE_PROJECT_NAME=klacks`** 是写死的，这样主机与更新服务无论文件夹叫什么，都指向同一个 Compose 项目。安装之后请不要再更改。
- **`KnowledgeIndex__WarmupEnabled=false` 不是节省内存的选项。** 它只是把搜索的构建从启动阶段推迟到第一次聊天请求；在持续运行中，会话同样常驻。仅当主机在启动时因内存不足而失败时才有用。
- **需要多个 API 实例？** 那就需要 SignalR 背板。Klacks 不附带：请自行部署一个兼容 RESP 的服务（例如 Valkey — 与 Redis 不同，自 7.4 起采用 BSD-3 许可），并启用 nginx 模板中预置的粘性上游（`ip_hash`）。没有背板时，与现有所有安装一样，只运行一个 `klacks-api` 实例。
- **国家配置文件：** 安装程序提供 30 个配置文件：`ae`、`at`、`ch`、`cn`、`cz`、`de`、`dk`、`es`、`fi`、`fr`、`gb`、`gr`、`id`、`il`、`it`、`jp`、`kr`、`li`、`my`、`nl`、`no`、`pl`、`pt`、`ro`、`sa`、`se`、`th`、`tw`、`us`、`vn`。配置文件会在首次启动时设置语言、国家/地区与时区、节假日日历、周末与每周起始日、工时上限、休假额度、附加津贴、默认的工资导出目标系统（例如瑞士为 `abaconnect-ch`），以及行业模板 — 比如 Spitex 的排班规则模板「CH Spitex Standard」。没有配置文件时，Klacks 以中立状态启动，一切都由您手动配置。

---

*运营方面有疑问？欢迎加入 [Discord 上的 Klacks 社区](https://discord.gg/YRP8p2abVC)。*
