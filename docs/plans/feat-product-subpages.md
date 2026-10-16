# feat: 各製品を「セクション（複数サブページ）」に拡張

Issue #52 の一環。各 `/mulmoXXX` を 1 ページから、サブページを持つ製品セクションに拡張し、
今後も「どんどんページを増やせる」スケール可能な構造にする。

## ゴール

- 各製品（MulmoCast / MulmoChat / MulmoClaude / MulmoTerminal）に一貫したサブページ群を持たせる。
- 製品内に**サブナビ（タブ）**を置き、製品ドキュメント内で回遊できるようにする。
- データ駆動（i18n＋データ定義）で、ページ追加＝データ追加で済む仕組みにする。

## 情報設計（全製品共通のサブページ）

各製品 `/{id}` の下に以下を持つ:

| セクション | パス | 内容 |
|---|---|---|
| 概要 Overview | `/{id}` | ヒーロー、リード、主要ハイライト、スクショ、主要 CTA、各サブページへの導線 |
| 機能 Features | `/{id}/features` | 機能の詳細リスト（公式ドキュメント準拠） |
| 利用例 Use cases | `/{id}/use-cases` | ユースケース（カード）＋シナリオ |
| はじめかた Getting started | `/{id}/getting-started` | 前提条件、インストール、手順（MulmoCast は DL / インストール動画も） |

- 全サブページ共通: コンパクトなヒーロー＋製品サブナビ（タブ）＋フッター（関連アプリ・回遊リンク・公式ガイド）。
- 大きなスクショは概要＆はじめかたに表示。動画は概要に表示。

将来の拡張（必要に応じて追加）: `/{id}/faq`、`/{id}/changelog`、`/{id}/examples/<slug>` など。

## 実装方針

- ルーター: `PRODUCT_IDS × SECTIONS` から明示ルートを生成（`/{id}`＋`/{id}/{section}`）。
- `ProductPage.vue` を「ヒーロー＋サブナビ＋`section` に応じた本文＋フッター」のセクションレイアウトに再構成。
  `section` prop（既定 `overview`）で本文を切替。
- セクション定義は `productSections.ts`（純データ: section キー、アイコン、i18n ラベルキー）。
- 翻訳は i18n `products.sections.*`（タブ/見出し）と既存 `products.<id>.*`（intro/features/useCases/steps）を再利用。
  追加で `products.<id>.prerequisites`（前提条件）を各製品に用意。
- SEO: サブページごとに `useSeo`（title/description/canonical/OG/JSON-LD）を付与、sitemap.xml に追加。

## 一次情報

各製品リポジトリ（`~/ss/llm/` 配下）の README / docs:
- mulmocast-app, mulmocast-cli（機能・出力・前提）
- MulmoChat（tools/プロバイダ/ComfyUI/前提）
- mulmoclaude（wiki/collection/feeds/会計/SEC・前提: Node, Claude Code, ffmpeg, Docker）
- mulmoterminal（grid/roster/Canvas/worktree/push・前提: Node≥22.12, claude CLI）

## 確認してほしい点

- サブページ構成（概要/機能/利用例/はじめかた）の粒度。
- サブナビ（タブ）の UX。
- 今後増やすページ候補（FAQ / 事例詳細 / 変更履歴）。
