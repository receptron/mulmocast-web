# MulmoCast Web

MulmoCast Viewerを使用したウェブアプリケーション。

## MulmoCast Family

MulmoCastエコシステムを構成するツール群。App以外はnpmパッケージとして公開。

| ツール            | 説明                                                         | npm                 |
| ----------------- | ------------------------------------------------------------ | ------------------- |
| MulmoCast CLI     | コアエンジン。フル機能のAIプレゼンテーションプラットフォーム | `mulmocast`         |
| MulmoCast App     | CLIをGUIアプリ化。Mac/Windows対応                            | -                   |
| MulmoCast Slides  | Keynote/PPTX/PDF/MarpからMulmoScript変換                     | `mulmocast-slides`  |
| MulmoCast Vision  | テンプレート×CLIのスライド作成特化MCPツール                  | `mulmocast-vision`  |
| MulmoCast MCP     | CLIのMCPサーバー版                                           | `mulmocast-mcp`     |
| MulmoCast Viewer  | bundleデータをVue 3 Webに組み込むコンポーネント              | `mulmocast-viewer`  |
| MulmoChat         | Chat Protocol使用の次世代音声対話OS                          | -                   |
| GUI Chat Protocol | チャットアプリ用GUIプラグインの標準プロトコル                | `gui-chat-protocol` |

## Project Structure

```
mulmocast-web/
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

## Documentation Structure

ドキュメントは `web/src/views/docs/` にVueコンポーネントとして実装。

| ページ | パス | ファイル |
|--------|------|----------|
| ドキュメントトップ | `/docs` | `DocsIndex.vue` |
| MulmoCast CLI | `/docs/cli` | `DocsCli.vue` |
| MulmoCast App | `/docs/app` | `DocsApp.vue` |
| MulmoChat | `/docs/mulmochat` | `DocsMulmochat.vue` |

### ドキュメント追加手順

1. `web/src/views/docs/` に新しいVueコンポーネントを作成
2. `web/src/router/index.ts` にルートを追加
3. `web/src/i18n/ja.ts` と `en.ts` に翻訳を追加
4. 必要に応じて `DocsIndex.vue` にリンクを追加

---

## MulmoCast CLI ドキュメント

### 概要

MulmoCastはAIネイティブ時代のマルチモーダルプレゼンテーションツール。MulmoScript（JSON形式の台本）からAIが画像・音声・動画を自動生成。

### インストール

```bash
npm install -g mulmocast

# ffmpegも必要
brew install ffmpeg  # macOS
```

### 設定（.env）

```bash
# 必須
OPENAI_API_KEY=your_openai_api_key

# オプション
DEFAULT_OPENAI_IMAGE_MODEL=gpt-image-1  # 高品質画像生成
GEMINI_API_KEY=your_google_gemini_api_key
ANTHROPIC_API_TOKEN=your_anthropic_api_token
REPLICATE_API_TOKEN=your_replicate_api_key
ELEVENLABS_API_KEY=your_elevenlabs_api_key
```

### 基本ワークフロー

```bash
# 1. 台本生成（インタラクティブ）
mulmo tool scripting -i -t children_book -o ./ -s story

# 2. 動画生成（音声・画像・動画を一括）
mulmo movie {script_file}
```

### コマンド一覧

| コマンド | 説明 |
|---------|------|
| `mulmo translate <file>` | 台本を翻訳 |
| `mulmo audio <file>` | 音声ファイル生成 |
| `mulmo images <file>` | 画像ファイル生成 |
| `mulmo movie <file>` | 動画ファイル生成 |
| `mulmo pdf <file>` | PDFファイル生成 |
| `mulmo markdown <file>` | Markdownファイル生成 |
| `mulmo html <file>` | HTMLファイル生成 |
| `mulmo bundle <file>` | バンドルファイル生成 |
| `mulmo tool scripting` | 台本生成 |
| `mulmo tool complete <file>` | 部分的なMulmoScriptを補完 |
| `mulmo tool info [category]` | 利用可能オプション表示 |

### MulmoScript 基本構造

```json
{
  "$mulmocast": { "version": "1.0" },
  "title": "タイトル",
  "lang": "ja",
  "canvasSize": { "width": 1280, "height": 720 },
  "speechParams": {
    "speakers": {
      "Presenter": {
        "provider": "openai",
        "voiceId": "shimmer"
      }
    }
  },
  "beats": [
    {
      "speaker": "Presenter",
      "text": "こんにちは",
      "imagePrompt": "挨拶するキャラクター"
    }
  ]
}
```

### Beat の画像生成オプション

| プロパティ | 説明 |
|-----------|------|
| `image` | 画像アセット（textSlide, markdown, image, movie等） |
| `imagePrompt` | 画像生成プロンプト |
| `moviePrompt` | 動画生成プロンプト |
| `htmlPrompt` | HTML経由の画像生成 |

### image.type 一覧

| タイプ | 説明 |
|--------|------|
| `image` | 静止画（URL/パス） |
| `movie` | 動画（URL/パス） |
| `textSlide` | テキストスライド |
| `markdown` | Markdownスライド |
| `chart` | Chart.jsグラフ |
| `mermaid` | Mermaid図 |
| `html_tailwind` | Tailwind CSSを使ったHTML |
| `beat` | 前のbeatの画像を参照 |
| `voice_over` | ナレーション重ね（画像生成なし） |

### Markdownスタイル（100種類）

10カテゴリ: business, tech, creative, minimalist, nature, dark, colorful, vintage, japanese, geometric

```bash
mulmo tool info styles  # 全スタイル表示
```

### TTS プロバイダー

| プロバイダー | 特徴 |
|-------------|------|
| openai | 標準TTS |
| google | Google TTS |
| elevenlabs | 高品質音声 |
| nijivoice | 日本語特化 |

### 画像生成プロバイダー

| プロバイダー | モデル例 |
|-------------|---------|
| openai | gpt-image-1, dall-e-3 |
| google | imagen-4.0-generate-001 |

### 動画生成プロバイダー

| プロバイダー | モデル例 |
|-------------|---------|
| google | veo-2.0, veo-3.0 |
| replicate | 各種モデル |

### Vertex AI 設定

```json
{
  "imageParams": {
    "provider": "google",
    "model": "imagen-4.0-generate-001",
    "vertexai_project": "your-project-id",
    "vertexai_location": "us-central1"
  }
}
```

### Azure OpenAI 設定

```bash
IMAGE_OPENAI_API_KEY=<azure-api-key>
IMAGE_OPENAI_BASE_URL=https://<resource>.openai.azure.com/
```

### トランジション（17種類）

fade, slideout_*, slidein_*, wipe*

```json
{
  "movieParams": {
    "transition": { "type": "fade", "duration": 1.0 }
  }
}
```

### ビデオフィルター（36種類）

色調整、ブラー、エッジ検出、変形、視覚効果など

```json
{
  "movieParams": {
    "filters": [{ "type": "sepia" }, { "type": "vignette" }]
  }
}
```

### 高度な機能一覧

| 機能 | 説明 |
|------|------|
| 音声スピルオーバー | 1つの音声を複数Beatで共有 |
| トランジション | Beat間の画面切り替え効果（17種類） |
| ボイスオーバー | 動画に音声を重ねる |
| サウンドエフェクト | 効果音の自動生成 |
| リップシンク | 口パク動画の生成 |
| 字幕 | 動画への字幕追加 |
| 動画速度調整 | 再生速度の変更 |
| BGM | 背景音楽の追加 |
| 音声タイミング制御 | 無音時間の詳細設定 |
| 特殊メディアタイプ | chart, mermaid, html_tailwind等 |
| Fill Options | アスペクト比調整 |
| Hidden Beats | 非表示Beat |
| 言語別スピーカー | 言語ごとに異なる音声設定 |
| ビデオフィルター | 映像エフェクト（36種類） |

### 音声スピルオーバー

1つの音声を複数Beatで共有。ミュージックビデオや長いナレーションに便利。

```json
{
  "beats": [
    { "text": "長いナレーション...", "duration": 2, "image": {...} },
    { "image": {...} }  // 音声が継続
  ]
}
```

- `text`があるBeatで音声開始
- `text`がないBeatでは前の音声が継続
- `duration`未指定のBeatは残り時間を均等配分（最低1秒保証）

### 言語別スピーカー設定

```json
{
  "speechParams": {
    "speakers": {
      "Presenter": {
        "provider": "openai",
        "voiceId": "shimmer",
        "lang": {
          "ja": { "provider": "gemini", "voiceId": "Kore" }
        }
      }
    }
  }
}
```

### リップシンク対応モデル

| モデル | 入力 |
|--------|------|
| bytedance/omni-human | 静止画 + 音声（推奨） |
| bytedance/latentsync | 動画 + 音声 |
| tmappdev/lipsync | 動画 + 音声 |

### MulmoScript作成方法（5つ）

| 方法 | 難易度 | 特徴 |
|------|--------|------|
| CLI scripting | ★☆☆ | `mulmo tool scripting -i` で対話的に作成 |
| LLM + complete | ★★☆ | beatsだけ作成し`mulmo tool complete`で補完 |
| mulmo-slide変換 | ★☆☆ | Markdown/PPTX/PDF/Keynoteから変換 |
| 手書き | ★★★ | JSONを直接記述 |
| GUIアプリ | ★☆☆ | mulmocast.comからダウンロード |

### mulmo-slide（変換ツール）

```bash
npm install -g @mulmocast/slide

# Markdown変換
mulmo-slide markdown document.md -l ja

# Marp形式
mulmo-slide marp slides.md -l ja

# PowerPoint
mulmo-slide pptx presentation.pptx -l ja

# PDF
mulmo-slide pdf document.pdf -l ja

# Keynote（macOSのみ）
mulmo-slide keynote presentation.key
```

---

## MulmoCast ファミリー

| ツール | 説明 | npm |
|--------|------|-----|
| mulmocast-cli | コアエンジン（CLI & ライブラリ） | `mulmocast` |
| mulmocast-app | デスクトップアプリ（Electron） | - |
| mulmocast-mcp | CLIのMCPサーバー版 | `mulmocast-mcp` |
| mulmoscript-mcp | 対話式スクリプト生成MCP | `mulmoscript-mcp` |
| mulmocast-vision | ビジネススライド生成MCP（80+テンプレート） | `mulmocast-vision` |
| mulmocast-viewer | Web用プレイヤー（Vue 3） | `mulmocast-viewer` |
| mulmocast-slides | Keynote/PPTX/PDF変換 | `mulmocast-slides` |
| mulmo-movie | 動画からmulmoViewerデータ生成 | `mulmo-movie` |
| gui-chat-protocol | チャットプラグイン標準 | `gui-chat-protocol` |

### MCP設定例（Claude Desktop）

```json
{
  "mcpServers": {
    "mulmocast-vision": {
      "command": "npx",
      "args": ["mulmocast-vision@latest"],
      "transport": { "stdio": true }
    },
    "mulmocast": {
      "command": "npx",
      "args": ["mulmocast-mcp@latest"],
      "env": {
        "OPENAI_API_KEY": "sk-xxx",
        "REPLICATE_API_TOKEN": "r8_xxx"
      },
      "transport": { "stdio": true }
    }
  }
}
```

### MulmoCast Vision

MCPでビジネススライド（PDF）を自動生成。80種類以上のテンプレート。

```
Claude: 「ソフトバンクの300年戦略について20枚程度でスライド化」
→ ~/Documents/mulmocast-vision/{日付}/ にPDF生成
```

---

## YouTube動画

チャンネル: [@SingularitySociety](https://www.youtube.com/@SingularitySociety)

### 日本語

| カテゴリ | タイトル | ID |
|---------|---------|-----|
| インストール | インストールガイド (Mac版) | `qbxteoIwgXg` |
| インストール | インストールガイド (Windows版) | `ar_iC7lTSjE` |
| セットアップ | 初回セットアップ＆動画生成マニュアル | `_Ofy3mlKsDg` |
| オンボーディング | シリーズ 第1回 | `vz1V36KbBi0` |
| オンボーディング | シリーズ 第2回 | `wgMYv77-uLE` |
| オンボーディング | シリーズ 第3回 | `DmNfmgmnWXU` |
| チュートリアル | Part 1 - 画像・動画生成の基礎 | `lTmyw7sh4Kw` |
| チュートリアル | Part 2 - キャラクター設定 | `aVxPPgC7byo` |
| チュートリアル | Part 3 - リップシンク動画 | `EcFzLz0SAok` |
| チュートリアル | Part 4 - Gemini APIキー取得 & 課金設定 | `sEBUBCVPWIc` |

### English

| Category | Title | ID |
|----------|-------|-----|
| Install | Installation Guide (Mac) | `58HkfR4WmdY` |
| Install | Installation Guide (Windows) | `gVKAbBgpOBs` |
| Setup | Onboarding & Video Generation Manual | `oQFsvDA_76M` |
| Onboarding | Series Part 1 | `uBRl8_Bo41o` |
| Onboarding | Series Part 2 | `7gWOt4viaSA` |
| Onboarding | Series Part 3 | `AVSu2uShFD8` |
| Tutorial | Part 1 - Basics: Generating Images and Videos | `MDBXMO1f5k0` |
| Tutorial | Part 2 - Character Setup | `-Am25F-5ybs` |
| Tutorial | Part 3 - Creating Lip-Sync Videos | `n_iCK9s3Uhw` |
| Tutorial | Part 4 - Gemini API Key Setup & Billing | `vNceRnJuCX0` |

---

## Zenn記事（チュートリアル）

| 記事 | 内容 |
|------|------|
| [MulmoScript作成方法まとめ](https://zenn.dev/singularity/articles/mulmocast-create-methods) | 5つの作成方法を詳しく解説 |
| [MulmoCastファミリー](https://zenn.dev/singularity/articles/mulmocast-family) | ツール群の全体像 |
| [MulmoCast Vision](https://zenn.dev/singularity/articles/mulmocast-vision) | MCPでスライド作成 |
| [Markdown新機能](https://zenn.dev/singularity/articles/mulmocast-markdown-features) | スタイル・レイアウト・Mermaid |
| [Image Agent追加](https://zenn.dev/singularity/articles/mulmocast-image-agent) | 開発者向け拡張方法 |

### 参照ドキュメント

- [README](https://github.com/receptron/mulmocast-cli/blob/main/README.md)
- [ドキュメントインデックス](https://github.com/receptron/mulmocast-cli/blob/main/docs/README.md)
- [機能一覧](https://github.com/receptron/mulmocast-cli/blob/main/docs/feature.md)
- [画像生成ルール](https://github.com/receptron/mulmocast-cli/blob/main/docs/image.md)
- [音声スピルオーバー](https://github.com/receptron/mulmocast-cli/blob/main/docs/sound_and_voice.md)
- [Vertex AI設定](https://github.com/receptron/mulmocast-cli/blob/main/docs/vertexai_en.md)
- [スキーマ定義](https://github.com/receptron/mulmocast-cli/blob/main/src/types/schema.ts)

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
