---
sidebar_position: 4
---

在「设置 > 身份提供程序」中，您可以将 Klacks 与外部目录服务 — LDAP/Active Directory 或 OAuth2/OpenID Connect — 连接起来，以便自动导入员工和/或通过该服务处理登录。

## 运作方式

**LDAP/Active Directory：** 您需要填写主机、端口（389/636）、SSL、Base DN、Bind DN、Bind 密码以及一个用户过滤条件。「用于客户端导入」开关会启用自动导入：姓名、名字、职称、公司和地址会从目录属性中读取 — 在 OpenLDAP 和 Active Directory 中，部分属性名称有所不同（例如 `uid` 对应 `sAMAccountName`，`street` 对应 `streetAddress`）。这些字段映射关系已固定写入后端，无法通过界面编辑。

**OAuth2/OpenID Connect：** 客户端 ID、客户端密钥，可选的租户 ID（Azure）、授权 URL、令牌 URL 和用户信息 URL，以及作用域（Scopes）— 用于通过 Google、Microsoft 或 GitHub 登录。

**测试连接与同步：** 对于 LDAP/AD 类型的提供程序，「测试连接」会显示找到的用户数量以及示例用户名。若已启用客户端导入，「立即同步」会触发一次手动同步；同步结果（处理数/新增数/更新数/停用数）会随即以提示形式显示在页面上。

## 小贴士

- 此页面**仅对管理员**开放，Supervisor 角色无法访问。
- Bind 密码和客户端密钥以加密方式存储，界面中仅以掩码（`***`）形式显示；未做修改直接保存时，原有值会保持不变。
- 目前界面中**不会**显示持久化的同步日志（历史记录、错误历史）— 只显示最近一次手动同步的结果。
- 在目录中已找不到的人员，在同步时不会被删除，而是根据其会籍的离职日期被停用；如果之后重新出现，会被自动重新启用。
- 来自目录的外部标识（LDAP ObjectGUID，若无则退而使用 Distinguished Name）可防止重复：如果再次同步时找到相同的标识，系统会更新现有人员记录，而不是新建一个。

---
*立即体验：[Klacks Playground](https://klacks-software.ch:7643) — 登录 `admin@test.com` / `P@ssw0rt1`，数据每日自动重置。*
