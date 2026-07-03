---
sidebar_position: 1
---

# 安装与 Playground

试用 Klacks 只需一分钟 — 安装也只要五分钟。无需注册，没有销售环节。

## 方式一：Playground（无需安装）

一个带示例数据的公共 Klacks 实例运行在 **[klacks-software.ch](https://klacks-software.ch:7643)**：

- **登录：** `admin@test.com` · **密码：** `P@ssw0rt1`
- 您拥有完整的管理员权限 — 请尽情尝试所有功能。
- 所有数据**每日自动重置**。请勿输入真实的个人数据。

## 方式二：部署在自己的服务器上（本地部署）

本地部署套件包含所需的一切：Docker 镜像、安装程序、数据库、HTTPS 以及自动更新。

```bash
curl -fsSLO https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip
unzip klacks-onprem.zip && cd onprem && ./install.sh
```

在 Windows 下请使用 `install.ps1` 代替 `install.sh`。安装程序会自行生成密码和证书，拉取最新的 Docker 镜像，并等待所有服务就绪。首次登录使用 `admin@test.com` / `P@ssw0rt1` — **请在首次登录后立即修改该密码。**

## 小贴士

- 随附的更新服务会让您的安装始终保持最新 — 每次更新前自动备份，出现问题时自动回滚。
- 您的数据完全保留在您自己的基础设施上；Klacks 不会向外发送任何数据。
- 唯一的前提是一台安装了 Docker 的服务器。

---
*安装方面有疑问？欢迎加入 [Discord 上的 Klacks 社区](https://discord.gg/YRP8p2abVC)。*
