---
sidebar_position: 1
slug: /
---

# Klacks ドキュメントへようこそ

**Klacks** は、シフト制・出動制の職場向けの人員配置計画を行うオープンソース・プラットフォームです。勤務を自動で計画し、ルートを最適化し、AIアシスタントで操作できます — オンプレミスで、しかもお好きなAIモデルを使って。訪問看護(Spitex)、病院、警備、清掃、物流の各事業者に対応しています。

このWikiでは、Klacksの仕組みを小さな単位に分けて説明します。各ページは数分で読み終える分量で、しかも内容はすぐに公開のPlaygroundで試すことができます。

## さっそく始める

| | |
|---|---|
| 🎮 **試してみる** | [Klacks Playground](https://klacks-software.ch:7643) — ログイン `admin@test.com` / `P@ssw0rt1`(公開テスト環境、データは毎日リセットされます) |
| 📦 **インストールする** | [オンプレミス・パッケージをダウンロード](https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip) — コマンド一つでKlacksが動き出します |
| 💬 **質問・交流** | [KlacksコミュニティのDiscord](https://discord.gg/YRP8p2abVC) |
| 🌐 **ウェブサイト** | [klacks-software.ch](https://klacks-software.ch) |

## 各トピック

**Klacksについて**
- [Klacksの背後にある哲学](./ueber-klacks/philosophie.md) — データ主権、AI選択の自由、オープンソース

**はじめの一歩**
- [インストールとPlayground](./erste-schritte/installation-und-playground.md) — 数分で稼働するKlacksへ
- [ガイド付きセットアップ・ツアー](./erste-schritte/gefuehrte-einrichtungs-tour.md) — Klacksyが基本設定を案内します
- [従業員とマスターデータ](./erste-schritte/mitarbeiter-und-stammdaten.md) — あらゆる計画の基盤
- [役割と権限](./erste-schritte/rollen-und-rechte.md) — SupervisorとAdmin、明確に区別

**計画する**
- [自動計画: 数秒でできるプラン](./planen/auto-planung.md) — ワンクリックで数秒のうちにプランを作成
- [プラン・グリッド: あなたの対話型タイム・マトリックス](./planen/plan-raster.md) — ドラッグ&ドロップ対応の対話型タイム・マトリックス
- [モジュール式計画: 分割統治](./planen/modulare-planung.md) — 大きなプランを分割しても二重登録なし
- [承認ワークフロー: 下書きから確定プランへ](./planen/freigabe-workflow.md) — 下書きから封印されたプランまで
- [計画ルール](./planen/planungsregeln.md) — 休息時間、上限、勤務日
- [期間締め](./planen/periodenabschluss.md) — 月を確定的に締める

**最適化・分析**
- [ツアー・ルート最適化](./optimieren/touren-und-routenoptimierung.md) — 最適なルートを自動で
- [不在の把握](./optimieren/absenzen-im-blick.md) — 休暇や病欠をガントチャートで一覧
- [リソース・モニター](./optimieren/ressourcen-monitor.md) — 稼働状況を一目で
- [祝日とカレンダー](./optimieren/feiertage-und-kalender.md) — 自治体単位まで正確に
- [スキル関連性](./optimieren/skill-beziehungen.md) — Klacksyが、どの能力同士が関連するかを自ら学習します
- [レポートデザイナー](./optimieren/report-designer.md) — 独自のレポートを作成

**AIアシスタント**
- [Klacksy: 計画のためのAIアシスタント](./ki/klacksy-ki-assistent.md) — 自由なモデル選択で、音声による計画操作

**設定**

*マスターデータと組織*
- [支店](./einstellungen/stammdaten-organisation/branches.md)、[国](./einstellungen/stammdaten-organisation/laender.md)、[運営者住所](./einstellungen/stammdaten-organisation/owner-address.md)、[勤務基本設定](./einstellungen/stammdaten-organisation/work-setting.md)、[資格カタログ](./einstellungen/stammdaten-organisation/qualifikationen.md)、[契約テンプレート](./einstellungen/stammdaten-organisation/vertragsvorlagen.md)

*計画と自動化*
- [計画ルールの初期値](./einstellungen/planung-automatisierung/planungsregeln-standardwerte.md)、[カレンダー選択](./einstellungen/planung-automatisierung/kalenderauswahl.md)、[ウィザード設定](./einstellungen/planung-automatisierung/wizard-einstellungen.md)、[ルート最適化API](./einstellungen/planung-automatisierung/routenoptimierung-api.md)、[グループ表示設定](./einstellungen/planung-automatisierung/gruppen-sichtbarkeit.md)

*Klacksy設定*
- [LLMプロバイダーとモデル](./einstellungen/klacksy-konfiguration/llm-provider-und-modelle.md)、[パーソナリティ](./einstellungen/klacksy-konfiguration/persoenlichkeit.md)、[音声入出力](./einstellungen/klacksy-konfiguration/sprachein-ausgabe.md)、[自律レベル](./einstellungen/klacksy-konfiguration/autonomie-stufen.md)、[モデル接続テスト](./einstellungen/klacksy-konfiguration/modell-verbindungstest.md)、[スキル提案](./einstellungen/klacksy-konfiguration/skill-vorschlaege.md)、[マクロ](./einstellungen/klacksy-konfiguration/makros.md)

*コミュニケーションと連携*
- [メール送信](./einstellungen/kommunikation-integration/email-versand.md)、[メール受信](./einstellungen/kommunikation-integration/email-empfang.md)、[DeepL翻訳](./einstellungen/kommunikation-integration/deepl-uebersetzung.md)、[Identity Provider](./einstellungen/kommunikation-integration/identity-provider.md)、[ERP連携ポイント](./einstellungen/kommunikation-integration/erp-uebernahmepunkte.md)、[メッセージング・チャネル](./einstellungen/kommunikation-integration/messaging-kanaele.md)

*システムとセキュリティ*
- [ユーザー管理](./einstellungen/system-sicherheit/benutzerverwaltung.md)、[個人アクセストークン](./einstellungen/system-sicherheit/personal-access-tokens.md)、[データ保持](./einstellungen/system-sicherheit/datenaufbewahrung.md)、[アップデート](./einstellungen/system-sicherheit/updates.md)、[機能プラグイン](./einstellungen/system-sicherheit/feature-plugins.md)、[言語プラグイン](./einstellungen/system-sicherheit/sprach-plugins.md)、[スパムルール](./einstellungen/system-sicherheit/spam-regeln.md)、[一般設定](./einstellungen/system-sicherheit/allgemeine-einstellungen.md)

---
*Klacksは MIT ライセンスのオープンソースです — [GitHub上のソースコード](https://github.com/HeribertG/Klacks.Api)。*
