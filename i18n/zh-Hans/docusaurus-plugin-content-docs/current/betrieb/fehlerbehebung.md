---
sidebar_position: 4
---
# 故障排查

当 Klacks 没有按预期工作时，办法几乎总是查看两个可疑服务的日志 — 并确认进程是否真的还在运行。

## 首先：看看有什么在运行

```bash
docker compose ps
docker compose logs klacks-api
docker compose logs klacks-updater
```

`docker compose ps` 会显示哪些服务在运行、是否健康。`klacks-api` 记录启动、迁移以及数据库的填充；`klacks-updater` 记录更新的检测、备份、切换和回滚。

## 旧日志不能作为证据

有一个已经浪费过时间的陷阱：日志文件可能来自**之前**的一次启动。如果您在其中发现了错误，并把它当成当前的错误，就会找错地方。

因此，请检查日志**是否还在增长**：

```bash
wc -c klacks-api.log; sleep 10; wc -c klacks-api.log
```

如果大小不变（增长 0 字节），说明该进程已不再写入 — 无论日志里写了什么，它都没有在运行。只有在一份确凿仍在写入的日志中重新复现的错误，才是可靠的依据。

## 常见信息及其含义

| 信息 | 含义 | 处理方法 |
|---|---|---|
| `no matching manifest for linux/amd64` | 没有适用于您的架构的镜像 | 厂商必须以多架构方式发布镜像（amd64 **和** arm64） |
| `pull access denied` | 软件包仓库中的该包是私有的 | 带上访问凭据重新安装：Windows 下用 `-GhcrUser`/`-GhcrToken`，Linux 下用 `GHCR_USER`/`GHCR_TOKEN` |
| `errorCode: SETUP_REQUIRED`，HTTP `403` | 管理员设置关卡处于激活状态 | 用 `admin@test.com` 登录并创建您自己的管理员账号 — 参见[安装与 Playground](../../erste-schritte/installation-und-playground/) |
| 容器退出，没有托管堆栈跟踪，退出码为 `-1`（`0xffffffff`） | C/C++ 库中发生**原生**崩溃，C# 的 `try/catch` 无法捕获 | 查看容器的 **stderr** 输出 — 真正的原因在那里，而不在应用日志中 |
| 日志中没有应用错误，容器却被终止 | 内核因内存不足而终止了该进程（OOM） | 检查内存限制 — 参见[系统要求](../systemvoraussetzungen/) |
| 更新失败后出现 `42P07: relation "…" already exists` | 某次迁移创建了表，恢复过程没有将其移除 | 参见[备份与恢复](../backup-und-wiederherstellung/)中的陷阱 |
| API 在 `Application started` 之后几秒钟就停止 | 启动成功，崩溃发生在之后 — 典型的原生库问题 | 与退出码 `-1` 的线索相同：检查 stderr，而不是应用日志 |

在 **Windows on ARM 设备**（Snapdragon X）上，本地运行的搜索过去恰恰因这样一个原生库而失败：API 报告了 `Application started`，但几秒钟后界面就无法再访问它。如果您在 ARM 版 Windows 主机上看到这种现象，第一眼应当看控制台输出（而不是文件日志）— 相关 CPU 检测的信息就出现在那里。

## 如何缩小故障范围

1. **您具体做了什么**，又期望得到什么？出错前的最后一步就是答案的一半。
2. **哪些服务在运行？** `docker compose ps`。
3. **日志还在增长吗？** 见上文。
4. **stderr 最后有什么内容？** 对于原生崩溃，这是唯一的信息来源。
5. **最近改动了什么？** 一次更新、一项设置、一份新证书。

## 小贴士

- **启动较早的服务和健康的服务，在日志中看起来一样。** 如果界面上什么都收不到，请先检查进程是否还在运行 — 而不是只看它最后写了什么。
- **没有应用错误的崩溃，首先怀疑内存**，尤其是在更新引入了新的搜索模型之后。
- **提交报告时有用的信息：** 受影响的版本（`.env` 中的 `KLACKS_API_TAG`/`KLACKS_UI_TAG`）、`docker compose ps` 的输出、两份日志的最后几行，以及出错前的最后一步。请**不要**附上 `.env` 中的密码和密钥。
- 有疑问时，请向社区提问：[Discord 上的 Klacks 社区](https://discord.gg/YRP8p2abVC)。

---

*运营方面有疑问？欢迎加入 [Discord 上的 Klacks 社区](https://discord.gg/YRP8p2abVC)。*
