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
│   │   ├── i18n/           # 多言語対応 (ja/en)
│   │   ├── configs/        # 環境別設定
│   │   └── router/         # Vue Router
│   └── public/             # 静的ファイル
├── server/                 # Cloudflare Workers バックエンド (Hono)
└── wrangler.jsonc          # Cloudflare Workers設定
```

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
