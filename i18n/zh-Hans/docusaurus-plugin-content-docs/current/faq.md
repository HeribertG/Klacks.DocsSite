---
sidebar_position: 9
---
# 常见问题

首次投入使用前最常被问到的问题 — 回答坦诚，即使答案是「还没有」。

## 试用与入门

**我必须安装 Klacks 才能看到它吗？**
不用。[Playground](https://play.klacks-software.ch) 是一个带有演示数据的公开实例；您用 `admin@test.com` / `P@ssw0rt1` 登录，即可拥有完整的管理员权限。数据库每天瑞士时间 04:00 重置 — 请不要在那里录入真实的个人数据。

**安装需要多久？**
安装程序只需一条命令。它会生成密码和证书，固定当前版本，启动整个服务栈，并等待一切就绪。其中耗时最长的是下载镜像。系统要求见[系统要求](../betrieb/systemvoraussetzungen/)。

**为什么我必须创建自己的管理员账号？**
因为随套件提供的账号密码是公开的。Klacks 只允许您用它登录一次，然后要求您创建自己的账号；之后默认账号会被停用。这是有意为之，并非错误。

## 运营

**我的数据在哪里？**
在您自己的基础设施上。Klacks 不会把您的数据回传给厂商。如果您接入 AI 模型作为外部服务，那么**该服务**当然适用其自身的条款 — 选择哪个模型由您决定。

**我一定需要云服务商吗？**
不需要，这正是本地部署的核心：整个服务栈运行在您的服务器上。您只需要对软件包与更新来源（`ghcr.io`、`github.com`）的**出站**访问。目前**不支持**完全没有互联网连接的运行 — 在隔离网络中安装是尚未实现的后续扩展步骤。

**我该如何备份数据？**
自行备份 — 备份由您负责。具体方法，以及绝对不能遗漏的卷，请见[备份与恢复](../betrieb/backup-und-wiederherstellung/)。

**如果更新出了问题会怎样？**
更新服务会先备份数据库，把新版本一起切换，然后检查健康状况。如果新版本不健康，它会自动回滚。详情见[更新与回滚](../betrieb/updates-und-rollback/)。

**Klacks 能在我现有的硬件上运行吗？**
参考值为 **8 GB 内存和 4 vCPU**。对于较小的主机，有已记录的设置可以释放内存 — 代价是向 Klacksy 提下一个问题时会稍慢一些。

**Klacks 能和我的身份提供商配合使用吗？**
可以。Klacks 可以对接现有的身份提供商，而无需自己维护账号 — 参见[身份提供商](../einstellungen/kommunikation-integration/identity-provider/)。

## 功能

**Klacks 适合哪些行业？**
它面向轮班和外勤型企业：上门护理和 Spitex、医院、安保服务、清洁和家政服务，以及物流。

**界面支持哪些语言？**
文档提供 25 种语言版本，包括德语、英语、法语、意大利语、西班牙语、波兰语、日语、中文（简体和繁体）、阿拉伯语和希伯来语 — 阿拉伯语和希伯来语还支持从右向左的阅读方向。

**我必须选定一个 AI 模型吗？**
服务商和模型由您自己选择，也可以更换。如何设置和检查，请见 [LLM 提供商与模型](../einstellungen/klacksy-konfiguration/llm-provider-und-modelle/)和[模型连接测试](../einstellungen/klacksy-konfiguration/modell-verbindungstest/)。

**Klacks 要花多少钱？**
源代码采用 GNU Affero General Public License v3（AGPL-3.0）— 您可以阅读、修改并自行运行。如果您通过网络向他人提供修改后的版本，必须同样以 AGPL-3.0 向这些用户提供修改后的源代码。除此之外的一切（提问、交流、后续开发）都通过 [Discord 上的 Klacks 社区](https://discord.gg/YRP8p2abVC)和[公开的源代码仓库](https://github.com/HeribertG/Klacks.Api)进行。

**Klacks 已经完成了吗？**
没有，而且哪里都没有这样写。Klacks 仍在建设中，但它是公开开发并且真正在运行的 — 您可以随时在 Playground 中亲自检验当前状态，而不必相信一段描述。

## 参与

**我发现了一个错误，或者有一个问题。**
最快的方式是在 [Discord 社区](https://discord.gg/YRP8p2abVC)提问。软件中的错误请提交到[仓库](https://github.com/HeribertG/Klacks.Api)。以下信息总是很有帮助：版本、出错前的最后一步，以及日志的最后几行 — 参见[故障排查](../betrieb/fehlerbehebung/)。

**我自己能做贡献吗？**
源代码是开放的，文档也在同一处。指出不清楚的地方，与贡献代码一样受欢迎。

---

*没有找到您的问题？欢迎加入 [Discord 上的 Klacks 社区](https://discord.gg/YRP8p2abVC)。*
