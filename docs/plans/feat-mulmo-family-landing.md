# feat: Mulmo ファミリーのランディング化

Issue #52（公式サイトで Mulmo ファミリー全体の情報を一元管理）の一環。

## 背景

現状のトップ（`Home.vue`）は MulmoCast アプリのダウンロード/インストール中心で、
サイト全体が「MulmoCast」に寄っている。これを **Mulmo ファミリーのランディング** に変える。

## ゴール

- トップで主役4アプリ **MulmoCast / MulmoChat / MulmoClaude / MulmoTerminal** を紹介。
- 各アプリにトップレベルの独立ページ（`/mulmocast` `/mulmochat` `/mulmoclaude` `/mulmoterminal`）で詳しく紹介。
- 周辺ツール（Slides / Vision / Viewer / MCP / GUI Chat Protocol 等）は既存 `/family`（全カタログ）に残し、トップから誘導。
- 既存 `/docs/*` は技術ドキュメントとして存置。各製品ページから該当 docs へリンク。
- MulmoCast アプリの Mac/Windows ダウンロードとインストール動画は `/mulmocast` に移動。

## 決定事項（ユーザー確認済み）

1. 掲載範囲: 4アプリを主役、周辺は `/family` へ。
2. URL: トップレベル `/mulmocast` 等を新設。
3. DL/インストール動画: MulmoCast 詳細ページへ移動。

## 設計

- 製品ページは1つの再利用コンポーネント `views/products/ProductPage.vue` を
  製品 id（ルート props）で描画。構造データ（アイコン・リンク・動画・install コマンド）は
  純データモジュール `views/products/products.ts` に分離（テスタブル）。
- 翻訳テキストは i18n `products.<id>.*`（ja/en）。
- `Home.vue` はファミリー紹介に書き換え（4アプリの大カード＋`/family` 全体への導線＋Discord/FAQ/リンク）。
- MulmoCast の DL/動画は `ProductPage` の MulmoCast 用スロット/セクションで表示。

## 一次情報の出所

- MulmoCast: `mulmocast-cli` / `mulmocast-app`（npm `mulmocast`）
- MulmoChat: `MulmoChat/README.md`, `docs/LLM_OS.md`（研究プロトタイプ、GitHub のみ）
- MulmoClaude: `mulmoclaude/README.md`, `MANIFEST.md`（npm `mulmoclaude`, guide: receptron.github.io/mulmoclaude）
- MulmoTerminal: `mulmoterminal/README.md`（npm `mulmoterminal`, GitHub `receptron/mulmoterminal`）

## 確認してほしい点（レビュー観点）

- 製品ページのデータ駆動構成（products.ts + i18n 配列）が読みやすいか。
- 各アプリのタグライン/説明が公式ドキュメントと齟齬ないか。
- トップの情報量（4アプリ＋導線）が多すぎ/少なすぎないか。
