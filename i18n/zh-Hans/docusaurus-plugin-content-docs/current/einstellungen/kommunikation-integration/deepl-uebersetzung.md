---
sidebar_position: 3
---

在「设置 > DeepL」中，您可以保存 DeepL API 密钥，让 Klacks 自动翻译文本 — 目前主要用于收件箱中收到的电子邮件。

## 运作方式

**API 密钥：** 一个输入框即可填写 DeepL API 密钥（免费版 Free API 的格式为 `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx:fx`，付费版 Pro API 则不带 `:fx` 后缀）。Klacks 会根据是否带有 `:fx` 后缀自动识别应调用哪一个 DeepL API 地址，无需另行切换 Free 或 Pro。账户和密钥本身可在 deepl.com/pro-api 获取。

**使用方式：** 在「收件箱」中，每封邮件都可以通过翻译图标翻译成当前设置的界面语言；原文与译文可通过切换按钮进行对比。未保存密钥时，此功能不可用。

## 小贴士

- 此设置是针对整个安装实例的全局配置 — 不存在按用户单独设置的密钥。
- 此页面没有单独的「测试」按钮；密钥是否有效，会在收件箱中首次尝试翻译时显现。
- 如果密钥无效或已过期，Klacks 会根据 DeepL 返回的响应（身份验证错误）识别出来，并给出相应提示，而不是显示空白或错误的翻译结果。
- 密钥以加密方式存储，并在表单中以掩码形式显示。

---
*立即体验：[Klacks Playground](https://klacks-software.ch:7643) — 登录 `admin@test.com` / `P@ssw0rt1`，数据每日自动重置。*
