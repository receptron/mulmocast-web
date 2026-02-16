# MulmoCast Web

MulmoCast Viewerを使用したウェブアプリケーション。

## プロジェクト目標 (Issue #52)

公式サイトでMulmoファミリー全体の情報を一元管理。

**ゴール**: 公式サイトに行けばMulmoファミリー（CLI, App, Chat, Viewer等）の情報がすべてわかる状態

### 現在のスコープ

1. **ドキュメントのありかの整理** - 各リポジトリのREADME/docsの構造を把握
2. **ドキュメント化** - Vueページとして公式サイトに実装
3. **リンク集** - 必要に応じて外部リソースへのリンク
4. **YouTube埋め込み** - 説明動画を日本語/英語に分けて全て埋め込み

---

## MulmoCast Family

MulmoCastエコシステムを構成するツール群。App以外はnpmパッケージとして公開。

| ツール                 | 説明                                                         | npm                      |
| ---------------------- | ------------------------------------------------------------ | ------------------------ |
| MulmoCast CLI          | コアエンジン。フル機能のAIプレゼンテーションプラットフォーム | `mulmocast`              |
| MulmoCast App          | CLIをGUIアプリ化。Mac/Windows対応                            | -                        |
| MulmoCast Slides       | Keynote/PPTX/PDF/MarpからMulmoScript変換                     | `@mulmocast/slide`       |
| MulmoCast Vision       | テンプレート×CLIのスライド作成特化MCPツール                  | `mulmocast-vision`       |
| MulmoCast MCP          | CLIのMCPサーバー版                                           | `mulmocast-mcp`          |
| MulmoCast Viewer       | bundleデータをVue 3 Webに組み込むコンポーネント              | `mulmocast-viewer`       |
| MulmoCast Easy         | ffmpeg同梱の簡単インストール版CLI                            | `mulmocast-easy`         |
| MulmoCast Preprocessor | 1つのスクリプトから複数バリエーション生成 + AI Q&A           | `mulmocast-preprocessor` |
| MulmoChat              | GUI Chat Protocol実装の次世代マルチモーダルチャット          | -                        |
| GUI Chat Protocol      | チャットアプリ用GUIプラグインの標準プロトコル                | `gui-chat-protocol`      |

## Project Structure

```
mulmocast-web/
├── .claude/
│   ├── commands/           # スラッシュコマンド
│   │   ├── update-docs.md  # /update-docs - ソース→Vueページ更新
│   │   ├── review-docs.md  # /review-docs - ページのブラウザ確認
│   │   └── improve-project-docs.md  # /improve-project-docs
│   └── settings.json       # 共有設定（hooks, plansDirectory）
├── web/                    # Vue 3 フロントエンド
│   ├── src/
│   │   ├── components/     # Vueコンポーネント
│   │   │   └── ui/         # shadcn/vue UIコンポーネント (reka-ui)
│   │   ├── views/          # ページコンポーネント
│   │   │   └── docs/       # ドキュメントページ
│   │   ├── i18n/           # 多言語対応 (ja/en)
│   │   ├── configs/        # 環境別設定
│   │   └── router/         # Vue Router
│   └── public/             # 静的ファイル
├── server/                 # Cloudflare Workers バックエンド (Hono)
└── wrangler.jsonc          # Cloudflare Workers設定
```

## Documentation Pages

ドキュメントは `web/src/views/docs/` にVueコンポーネントとして実装。

### 構造

| ページ                 | パス                    | ファイル                 |
| ---------------------- | ----------------------- | ------------------------ |
| ドキュメントトップ     | `/docs`                 | `DocsIndex.vue`          |
| MulmoCast CLI 概要     | `/docs/cli`             | `cli/CliIndex.vue`       |
| CLI クイックスタート   | `/docs/cli/quickstart`  | `cli/CliQuickstart.vue`  |
| CLI MulmoScript        | `/docs/cli/mulmoscript` | `cli/CliMulmoscript.vue` |
| CLI プロバイダー       | `/docs/cli/providers`   | `cli/CliProviders.vue`   |
| CLI 高度な機能         | `/docs/cli/advanced`    | `cli/CliAdvanced.vue`    |
| MulmoCast App          | `/docs/app`             | `DocsApp.vue`            |
| MulmoCast Slides       | `/docs/slides`          | `DocsSlides.vue`         |
| MulmoCast Easy         | `/docs/easy`            | `DocsEasy.vue`           |
| MulmoCast Preprocessor | `/docs/preprocessor`    | `DocsPreprocessor.vue`   |
| MulmoChat              | `/docs/mulmochat`       | `DocsMulmochat.vue`      |

### CLI ドキュメント構造

CLIドキュメントはトピック別に5ページに分割：

```
docs/cli/
├── CliIndex.vue        # 概要、ワークフロー、ナビゲーション
├── CliQuickstart.vue   # インストール → 環境設定 → 台本作成 → 動画生成
├── CliMulmoscript.vue  # JSON形式、beats、画像タイプ、スタイル
├── CliProviders.vue    # TTS/画像/動画プロバイダー、環境変数
└── CliAdvanced.vue     # リップシンク、トランジション、フィルター、字幕
```

### ドキュメント追加手順

1. `web/src/views/docs/` に新しいVueコンポーネントを作成
2. `web/src/router/index.ts` にルートを追加
3. `web/src/i18n/ja.ts` と `en.ts` に翻訳を追加
4. 必要に応じて `DocsIndex.vue` にリンクを追加

### ドキュメント作成ガイドライン

**対象読者**: MulmoCastもAPIも知らない完全な初心者

- **冗長でも詳しく**: 省略せず、すべてのステップを説明
- **「何が起きるか」を説明**: 各操作の結果を事前に説明
- **「何が必要か」を明示**: 前提条件、環境変数、APIキーを明確に
- **設定サンプルを添付**: 説明の後に必ずコード例を記載
- **外部リンクを追加**: GitHub docs、Zenn記事、YouTube動画へのリンク
- **トラブルシューティング**: よくあるエラーと解決策を記載
- **i18n**: `$t()` 関数を優先（i18n/ja.ts, en.tsに翻訳キーを追加）
  - インラインパターン `locale === "ja" ? ... : ...` も可（短いテキスト向け）

### チュートリアル・クイックスタートのガイドライン

**目標**: ステップバイステップで進めれば、必ず動画が作成できる状態

- **ハンズオン形式**: 番号付きステップで、順番に進めば完成する構成
- **コピペ可能なMulmoScript**: 各ステップに完成版のJSONを記載
  - ユーザーがそのままコピーして実行すれば動作する
  - 説明用の省略（`...`）は使わない
- **OpenAIデフォルト設定**: 特別な認証不要で動作するサンプル
  - TTS: `provider: "openai"`, `voiceId: "shimmer"` など
  - 画像: `imageParams` で明示的に `provider: "openai"`, `model: "dall-e-3"` を指定
    - デフォルトは `gpt-image-1` だが、組織認証が必要なため使用しない
  - `DEFAULT_OPENAI_IMAGE_MODEL` 環境変数は設定しない
- **Node.js 22以上**: システム要件はNode.js 22+
- **最小限の.env**: `OPENAI_API_KEY` のみで動作確認できるようにする
- **所要時間・コストの目安**: 各ステップで発生する時間とAPIコストを明記

---

## ドキュメント更新ガイド

定期的にドキュメントを最新状態に保つためのガイド。

### 更新ワークフロー

1. 下記ソース一覧の `README.md` と `docs/` を確認
2. 新しい機能・変更があれば、このCLAUDE.mdの概要を更新
3. Vueドキュメントページ（`web/src/views/docs/`）を更新

### 基本ルール

- 各ツールの `README.md` と `docs/` 以下を参照
- CLAUDE.mdには**ソースURL・概要・構造**を記載（詳細コンテンツは書かない）
- 詳細コンテンツはVueドキュメントページに実装

---

## MulmoCast CLI ソース

**リポジトリ**: `receptron/mulmocast-cli`

### 概要

MulmoScript（JSON形式の台本）からAIが画像・音声・動画を自動生成するコアエンジン。

### ドキュメント構造

| ファイル                           | 概要                                        | 用途                             |
| ---------------------------------- | ------------------------------------------- | -------------------------------- |
| `README.md`                        | インストール、基本コマンド、MulmoScript構造 | 入門・クイックスタート           |
| `docs/README.md`                   | ドキュメントインデックス                    | 全ドキュメントへのナビゲーション |
| `docs/feature.md`                  | 14の高度な機能一覧                          | 機能リファレンス                 |
| `docs/image.md`                    | 画像/動画/音声生成ルール                    | メディア生成の詳細               |
| `docs/sound_and_voice.md`          | 音声スピルオーバー、言語別スピーカー        | 音声機能の詳細                   |
| `docs/faq_ja.md`                   | FAQ（日本語）                               | トラブルシューティング           |
| `docs/caption_split.md`            | 字幕分割機能設計                            | 字幕タイミング制御               |
| `docs/vertexai_en.md`              | Vertex AI設定（英語）                       | Google Cloud連携                 |
| `docs/vertexai_ja.md`              | Vertex AI設定（日本語）                     | Google Cloud連携                 |
| `docs/azure_openai_integration.md` | Azure OpenAI統合設計                        | Azure連携（設計ドキュメント）    |
| `docs/azure_openai_usage.md`       | Azure OpenAI使用方法                        | Azure連携（ユーザーガイド）      |
| `docs/tts.md`                      | TTSプロバイダー追加手順                     | 開発者向け拡張                   |
| `docs/image_plugin.md`             | 画像プラグイン開発                          | 開発者向け拡張                   |
| `src/types/schema.ts`              | MulmoScriptスキーマ定義                     | 型定義リファレンス               |

### 主要トピック

- **コマンド**: `mulmo movie`, `mulmo audio`, `mulmo images`, `mulmo pdf`, `mulmo tool scripting`
- **MulmoScript**: beats, speechParams, imageParams, movieParams, captionParams
- **プロバイダー**: OpenAI, Google, Replicate, ElevenLabs
- **高度な機能**: スピルオーバー、トランジション、リップシンク、字幕、フィルター

---

## MulmoCast App ソース

**リポジトリ**: `receptron/mulmocast-app`

### 概要

MulmoCast CLIをGUIアプリ化したElectronアプリ。Mac/Windows対応。

### ドキュメント構造

| ファイル                       | 概要                               | 用途                       |
| ------------------------------ | ---------------------------------- | -------------------------- |
| `README.md`                    | 開発環境セットアップ、ビルド方法   | 開発者向け                 |
| `docs/how_to_use.md`           | ダウンロード方法、初期設定、UI説明 | ユーザーガイド             |
| `docs/procedure_onboarding.md` | 具体的な使用手順チュートリアル     | ステップバイステップガイド |
| `docs/voice_list.md`           | TTSサンプル追加手順                | 開発者向け                 |

### 主要トピック

- **ダウンロード**: GitHub Actionsからアーティファクト取得
- **オンボーディング**: 表示言語、LLM設定、APIキー
- **編集画面**: AIチャット、スクリプト編集（6タブ）、出力設定、成果物
- **スクリプト編集タブ**: Text, YAML/JSON, Media, Style

---

## MulmoCast Slides ソース

**リポジトリ**: `receptron/MulmoCast-Slides`

### 概要

プレゼンテーションファイル（Keynote, PowerPoint, PDF, Marp, Markdown）をMulmoScript形式に変換するツール群。スライド画像の抽出、LLMによるナレーション自動生成、動画・バンドル作成までワンコマンドで実行可能。

### ドキュメント構造

| ファイル                           | 概要                                                    | 用途               |
| ---------------------------------- | ------------------------------------------------------- | ------------------ |
| `README.md`                        | システム要件、インストール、CLI全コマンド               | 入門・リファレンス |
| `docs/markdown-converter.md`       | Markdownコンバーター仕様（セパレーター8種、プラグイン） | 機能リファレンス   |
| `docs/tutorial-pdf-to-video-en.md` | PDFからナレーション動画チュートリアル（英語）           | ユーザーガイド     |
| `docs/tutorial-pdf-to-video-ja.md` | PDFからナレーション動画チュートリアル（日本語）         | ユーザーガイド     |

### 主要トピック

- **統合CLI**: `mulmo-slide` コマンド（convert, marp, pptx, pdf, keynote, markdown, narrate, transcribe, preview, extend）
- **対応フォーマット**: Keynote(.key), PowerPoint(.pptx), PDF(.pdf), Marp(.md), Markdown(.md), 動画(.mp4, .mov等)
- **LLMナレーション生成**: `-g` オプションでOpenAI GPT-4oによる自動ナレーション
- **Markdownコンバーター**: 8種のセパレーターモード（horizontal-rule, heading, heading-1/2/3, blank-lines, comment, page-break, カスタム正規表現）
- **プラグイン**: `--mermaid`（Mermaid図変換）、`--directive`（Marpディレクティブ削除）、`--layout`（自動レイアウト検出）、`--style`（スタイル適用）
- **Narrate CLI**: `mulmo-slide narrate` でExtendedScript一括生成（Claude Codeスキル `/narrate` 対応）
- **Transcribe**: `mulmo-slide transcribe` で動画ファイルをMulmoScriptに変換（Whisper API使用）
- **Preview**: `mulmo-slide preview` で生成バンドルをブラウザプレビュー（Webビューワー内蔵）
- **Extend**: `mulmo-slide extend init/validate/scaffold` でClaude Codeスキル管理・ExtendedScript操作
- **システム要件**: Node.js 22+、ImageMagick、Ghostscript（PDF/PPTX）、LibreOffice（PPTX）、Keynote（macOS）

### チュートリアル（Webドキュメントの核）

**ソース**: `docs/tutorial-pdf-to-video-ja.md` / `docs/tutorial-pdf-to-video-en.md`

PDF → ナレーション動画の実践ワークフロー（Claude Code `/narrate` スキル使用）:

1. プロジェクトディレクトリ作成 + `.env`（OPENAI_API_KEY）
2. `npm install -g @mulmocast/slide` + `mulmo-slide extend init`
3. PDFを配置し Claude Code で `/narrate your-paper.pdf` 実行
4. 生成物: `scripts/{basename}/` に MulmoScript, extracted_texts.json, extended_script.json, images/
5. 活用: `mulmocast-preprocessor query` で対話的Q&A、`summarize` で要約
6. 動画生成: `mulmocast-preprocessor` → `mulmo movie` で mp4 出力

**注意**: Webドキュメント更新時は必ず `../MulmoCast-Slides/docs/tutorial-pdf-to-video-*.md` の最新内容を確認すること

---

## MulmoCast Plus ソース

**リポジトリ**: `receptron/mulmocast-plus`（モノレポ）

### 概要

MulmoCast CLIの拡張パッケージ群。簡単インストール版とスクリプト前処理ツールを提供。

### パッケージ構造

```
mulmocast-plus/
└── packages/
    ├── mulmocast-easy/          # ffmpeg同梱の簡単インストール版
    └── mulmocast-preprocessor/  # バリエーション生成 + AI Q&A
```

### 1. mulmocast-easy (`mulmocast-easy`)

ffmpeg/ffprobeを同梱し、別途インストール不要でMulmoCast CLIを使えるようにするラッパー。

| ファイル    | 概要                     |
| ----------- | ------------------------ |
| `README.md` | インストール方法、使い方 |

**主要トピック**:

- ゼロコンフィグ: ffmpegのインストール不要
- クロスプラットフォーム: macOS, Linux, Windows対応
- 標準mulmocastコマンドがすべて使用可能（`mulmocast-easy movie` 等）

### 2. mulmocast-preprocessor (`mulmocast-preprocessor`)

1つのMulmoScriptから複数のバリエーション（フル版、要約版、ティーザー版）を生成し、メタデータを使ったAI Q&Aも可能な前処理ツール。

| ファイル    | 概要                             |
| ----------- | -------------------------------- |
| `README.md` | 全機能の詳細説明、CLI使用法、API |

**主要トピック**:

- **プロファイルベースのバリエーション**: default（フル）、summary（要約）、teaser（短縮）、カスタム
- **Beat メタデータ**: tags、section、context、keywords、expectedQuestions
- **スクリプトメタデータ**: audience、prerequisites、goals、FAQ、references
- **AI要約**: OpenAI/Anthropic/Groq/Geminiで自動要約生成
- **AI Q&A**: スクリプト内容について質問（対話モード対応）
- **コンテンツフィルタリング**: セクション別、タグ別の絞り込み

**CLIコマンド**:

- `mulmocast-preprocessor script.json --profile summary -o output.json` - バリエーション生成
- `mulmocast-preprocessor profiles script.json` - プロファイル一覧
- `mulmocast-preprocessor summarize script.json` - AI要約
- `mulmocast-preprocessor query script.json "質問"` - AI Q&A
- `mulmocast-preprocessor query script.json -i` - 対話モード

---

## MulmoChat ソース

**リポジトリ**: 3つのリポジトリで構成

### 構造と関連性

```
gui-chat-protocol（プロトコル定義）
    ↓ 実装
MulmoChat（アプリケーション）
    ↓ テンプレート
GUIChatPluginTemplate（プラグイン開発用）
```

### 1. gui-chat-protocol

**リポジトリ**: `receptron/gui-chat-protocol`

| ファイル                    | 概要                           | 用途           |
| --------------------------- | ------------------------------ | -------------- |
| `README.md`                 | パッケージ概要、アーキテクチャ | 導入           |
| `spec/GUI_CHAT_PROTOCOL.md` | プロトコル仕様、動機、設計思想 | プロトコル理解 |
| `spec/API_REFERENCE.md`     | 型シグネチャ                   | API詳細        |
| `spec/CREATING_A_PLUGIN.md` | プラグイン作成手順             | 開発ガイド     |

**コアコンセプト**: OpenAIのfunction callingを拡張し、ツールコールにGUI機能を追加

### 2. MulmoChat

**リポジトリ**: `receptron/MulmoChat`

| ファイル             | 概要                           | 用途       |
| -------------------- | ------------------------------ | ---------- |
| `README.md`          | セットアップ、API、ComfyUI統合 | 導入・設定 |
| `docs/LLM_OS.md`     | LLMネイティブOSビジョン        | 設計思想   |
| `docs/WHITEPAPER.md` | アーキテクチャ詳細             | 技術詳細   |
| `docs/TOOLPLUGIN.md` | プラグイン開発ガイド           | 開発者向け |

**コアコンセプト**: 会話しながらビジュアル・インタラクティブコンテンツを体験

### 3. GUIChatPluginTemplate

**リポジトリ**: `receptron/GUIChatPluginTemplate`

| ファイル    | 概要                       | 用途           |
| ----------- | -------------------------- | -------------- |
| `README.md` | テンプレート構造、開発手順 | プラグイン開発 |

**用途**: プラグイン開発のスターターテンプレート（Vue/React対応）

### 主要トピック

- **プロトコル**: ToolResult構造、data type（image, map, game等）
- **プラグイン**: core（ロジック）、vue/react（UI）分離
- **ビジョン**: アプリ中心→意図表現中心のパラダイムシフト

---

## 追加リソース

### Zenn記事

リポジトリ: `isamu/zenn-docs` の `articles/` 以下（`mulmocast-*`）

| 記事                          | 概要                         |
| ----------------------------- | ---------------------------- |
| `mulmocast-create-methods`    | MulmoScript作成方法5つを解説 |
| `mulmocast-family`            | ツール群の全体像             |
| `mulmocast-vision`            | MCPでスライド作成            |
| `mulmocast-markdown-features` | Markdownスタイル・レイアウト |
| `mulmocast-image-agent`       | 開発者向け拡張方法           |

### YouTube動画

チャンネル: [@SingularitySociety](https://www.youtube.com/@SingularitySociety)

#### 日本語

| カテゴリ         | タイトル                               | ID            |
| ---------------- | -------------------------------------- | ------------- |
| インストール     | インストールガイド (Mac版)             | `qbxteoIwgXg` |
| インストール     | インストールガイド (Windows版)         | `ar_iC7lTSjE` |
| セットアップ     | 初回セットアップ＆動画生成マニュアル   | `_Ofy3mlKsDg` |
| オンボーディング | シリーズ 第1回                         | `vz1V36KbBi0` |
| オンボーディング | シリーズ 第2回                         | `wgMYv77-uLE` |
| オンボーディング | シリーズ 第3回                         | `DmNfmgmnWXU` |
| チュートリアル   | Part 1 - 画像・動画生成の基礎          | `lTmyw7sh4Kw` |
| チュートリアル   | Part 2 - キャラクター設定              | `aVxPPgC7byo` |
| チュートリアル   | Part 3 - リップシンク動画              | `EcFzLz0SAok` |
| チュートリアル   | Part 4 - Gemini APIキー取得 & 課金設定 | `sEBUBCVPWIc` |

#### English

| Category   | Title                                         | ID            |
| ---------- | --------------------------------------------- | ------------- |
| Install    | Installation Guide (Mac)                      | `58HkfR4WmdY` |
| Install    | Installation Guide (Windows)                  | `gVKAbBgpOBs` |
| Setup      | Onboarding & Video Generation Manual          | `oQFsvDA_76M` |
| Onboarding | Series Part 1                                 | `uBRl8_Bo41o` |
| Onboarding | Series Part 2                                 | `7gWOt4viaSA` |
| Onboarding | Series Part 3                                 | `AVSu2uShFD8` |
| Tutorial   | Part 1 - Basics: Generating Images and Videos | `MDBXMO1f5k0` |
| Tutorial   | Part 2 - Character Setup                      | `-Am25F-5ybs` |
| Tutorial   | Part 3 - Creating Lip-Sync Videos             | `n_iCK9s3Uhw` |
| Tutorial   | Part 4 - Gemini API Key Setup & Billing       | `vNceRnJuCX0` |

---

## Tech Stack

- **Frontend**: Vue 3 (Composition API) + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + shadcn/vue (reka-ui)
- **i18n**: vue-i18n
- **Backend**: Hono on Cloudflare Workers
- **Package Manager**: yarn (workspaces)

## Commands

```bash
# 開発サーバー起動
yarn dev           # フロントエンド (web)
yarn dev:server    # バックエンド (server)

# ビルド
yarn build         # フロントエンド
yarn build:server  # バックエンド

# コード品質
yarn lint          # ESLint
yarn format        # Prettier

# デプロイ
yarn deploy        # 開発環境 (mulmocast-dev)
yarn deploy-prod   # 本番環境 (mulmocast-prod)
```

## Claude Code スラッシュコマンド

| コマンド                | 引数                                      | 説明                                                                             |
| ----------------------- | ----------------------------------------- | -------------------------------------------------------------------------------- |
| `/update-docs`          | パス / URL / キーワード（省略可）         | ソースファイルの変更をVueドキュメントページに反映。引数指定で該当ページだけ更新  |
| `/review-docs`          | ページのパスまたはVueファイル名（省略可） | 更新したページをdev serverでブラウザ確認                                         |
| `/improve-project-docs` | なし                                      | 作業後にメタドキュメント（CLAUDE.md, IMPROVEMENT_PLAN.md等）の改善点を提案・反映 |

## Development Guidelines

### Vue.js

- Composition API を使用（Options API は使わない）
- 相対パスでインポート（`@/` エイリアスは使わない）
- propsに関数を渡さず `emit` を使用
- `reactive` より `ref` を優先
- `v-html` は使用禁止（セキュリティリスク）
- テキストはハードコードせず `$t()` で多言語対応

### UI Components

- `src/components/ui/` は shadcn/vue（reka-uiベース）
- ESLint対象外のため直接編集しない
- 新しいUIコンポーネントが必要な場合は shadcn/vue CLI を使用

### i18n

- 言語ファイル: `web/src/i18n/ja.ts`, `web/src/i18n/en.ts`
- 新しいテキストは両方のファイルに追加

### Environment Config

- 開発環境: `src/configs/config-dev.ts`
- 本番環境: `src/configs/config-prod.ts`
- `config.ts` は自動生成されるため直接編集しない

---

## 作業完了時のメタドキュメント更新提案

作業が完了したら「プロジェクトドキュメントの改善点はありますか？ `/improve-project-docs` で反映できます」と提案する。

### 対象ファイル

| ファイル                          | 役割                                            |
| --------------------------------- | ----------------------------------------------- |
| `CLAUDE.md`                       | プロジェクト概要、ソース一覧、開発ガイドライン  |
| `docs/IMPROVEMENT_PLAN.md`        | 改善計画、実装状況                              |
| `.claude/commands/update-docs.md` | Webドキュメント更新手順（引数で特定ソース更新） |
| `.claude/commands/review-docs.md` | 更新ページのブラウザ確認                        |
| `.claude/settings.json`           | 共有設定（hooks, plansDirectory）               |
