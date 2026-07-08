---
sidebar_position: 4
---

在「设置 > OpenRoute」中，您需要填写外部服务 openrouteservice.org 的 API 密钥，Klacks 使用该服务进行路线优化。

## 运作方式

OpenRouteService 负责计算行车、骑行和步行的旅行时间与距离，为 Klacks 的路线优化提供基础数据。您需要在本页面唯一的字段中填入您个人的 API 密钥。您可以通过页面上链接的注册地址前往 openrouteservice.org 免费获取密钥。

## 小贴士

- 该密钥会直接从浏览器发送给 openrouteservice.org，因此有意以**明文**显示，而不是像电子邮件密码那样以 `***` 遮盖。这是刻意的设计，方便您发现输入错误或已过期的密钥 — 并非显示上的缺陷。
- 尽管如此，该密钥在数据库中仍然以加密形式存储。
- 没有有效密钥，路线优化就无法工作 — 此时无法计算旅行时间和距离。
- 对于纯粹将地址转换为坐标（地理编码）的功能，Klacks 使用另一个独立的服务 — 此密钥仅负责路线计算。

---
*直接体验：[Klacks Playground](https://klacks-software.ch:7643) — 登录 `admin@test.com` / `P@ssw0rt1`，数据每日自动重置。*
