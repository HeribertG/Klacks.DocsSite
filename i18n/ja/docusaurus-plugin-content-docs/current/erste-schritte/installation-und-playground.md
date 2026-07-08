---
sidebar_position: 1
---

# インストールとPlayground

Klacksは1分で試すことができ、数分でインストールできます。登録も、営業トークも不要です。

## 方法1: Playground(何もインストールしない)

サンプルデータ付きの公開Klacksインスタンスが**[klacks-software.ch](https://klacks-software.ch:7643)**で稼働しています。

- **ログイン:** `admin@test.com` ・ **パスワード:** `P@ssw0rt1`
- フル管理者権限を持っているので、何でも試すことができます。
- すべてのデータは**毎日自動的にリセットされます**。実在する個人データは入力しないでください。

## 方法2: 自社サーバーで(オンプレミス)

オンプレミスパッケージには、Dockerイメージ、インストーラー、データベース、HTTPS、自動アップデートまで、すべてが含まれています。

```bash
curl -fsSLO https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip
unzip klacks-onprem.zip && cd onprem && ./install.sh
```

Windowsの場合は`install.sh`の代わりに`install.ps1`を使用します。インストーラーがパスワードと証明書を自動生成し、最新のDockerイメージを取得して、すべてが稼働するまで待機します。初回ログインは`admin@test.com` / `P@ssw0rt1`で行い ― **初回ログイン後、このパスワードはすぐに変更してください。**

## 知っておくと良いこと

- 付属のアップデートサービスが、各アップデート前のバックアップと問題発生時の自動ロールバックとともに、インストールを自動的に最新の状態に保ちます。
- データは完全に自社のインフラ内にとどまり、Klacksが外部に情報を送信することはありません。
- 前提条件として、Dockerが稼働するサーバー、送信方向のインターネットアクセス(Dockerイメージとアップデート用)、およびポート80/443の開放が必要です。

---
*インストールについて質問がありますか? [Discord上のKlacksコミュニティ](https://discord.gg/YRP8p2abVC)へ。*
