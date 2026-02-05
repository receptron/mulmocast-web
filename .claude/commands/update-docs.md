# MulmoCast Web ドキュメント更新スキル

## プロジェクト目標 (Issue #52)

公式サイトでMulmoファミリー全体の情報を一元管理する。
**ゴール**: 公式サイトに行けばMulmoファミリー（CLI, App, Chat, Viewer等）の情報がすべてわかる状態

---

## 対象読者

**MulmoCastもAPIも知らない完全な初心者**

---

## ドキュメント作成ガイドライン

### 基本方針

- **冗長でも詳しく**: 省略せず、すべてのステップを説明
- **「何が起きるか」を説明**: 各操作の結果を事前に説明
- **「何が必要か」を明示**: 前提条件、環境変数、APIキーを明確に
- **設定サンプルを添付**: 説明の後に必ずコード例を記載
- **外部リンクを追加**: GitHub docs、Zenn記事、YouTube動画へのリンク
- **トラブルシューティング**: よくあるエラーと解決策を記載

### チュートリアル・クイックスタート

- **ハンズオン形式**: 番号付きステップで、順番に進めば完成する構成
- **コピペ可能なMulmoScript**: 各ステップに完成版のJSONを記載（省略`...`は使わない）
- **OpenAIデフォルト設定**: 特別な認証不要で動作するサンプル
  - TTS: `provider: "openai"`, `voiceId: "shimmer"`
  - 画像: `provider: "openai"`, `model: "dall-e-3"`（gpt-image-1は組織認証必要）
- **Node.js 22以上**: システム要件
- **最小限の.env**: `OPENAI_API_KEY` のみで動作確認できるように
- **所要時間・コストの目安**: 各ステップで発生する時間とAPIコストを明記

---

## 対象ファイル構造

### CLI ドキュメント（5ページ分割）

```
web/src/views/docs/cli/
├── CliIndex.vue        # /docs/cli - 概要、ワークフロー、ナビゲーション
├── CliQuickstart.vue   # /docs/cli/quickstart - インストール→環境設定→台本作成→動画生成
├── CliMulmoscript.vue  # /docs/cli/mulmoscript - JSON形式、beats、画像タイプ、スタイル
├── CliProviders.vue    # /docs/cli/providers - TTS/画像/動画プロバイダー、環境変数
└── CliAdvanced.vue     # /docs/cli/advanced - リップシンク、トランジション、フィルター、字幕
```

### App/MulmoChat ドキュメント

```
web/src/views/docs/
├── DocsIndex.vue       # /docs - ドキュメントトップ
├── DocsApp.vue         # /docs/app - MulmoCast App
└── DocsMulmochat.vue   # /docs/mulmochat - MulmoChat
```

### i18n

```
web/src/i18n/
├── ja.ts   # 日本語
└── en.ts   # 英語
```

---

## 情報源

### MulmoCast CLI (`receptron/mulmocast-cli`)

| ファイル | 内容 |
|----------|------|
| `README.md` | インストール、基本コマンド、MulmoScript構造 |
| `docs/feature.md` | 14の高度な機能一覧 |
| `docs/image.md` | 画像/動画/音声生成ルール |
| `docs/sound_and_voice.md` | 音声スピルオーバー、言語別スピーカー |
| `docs/tts.md` | TTSプロバイダー追加手順 |
| `docs/caption_split.md` | 字幕分割機能設計 |
| `docs/faq_ja.md` | FAQ（日本語） |
| `src/types/schema.ts` | MulmoScriptスキーマ定義 |

### MulmoCast App (`receptron/mulmocast-app`)

| ファイル | 内容 |
|----------|------|
| `docs/how_to_use.md` | ダウンロード、初期設定、UI説明 |
| `docs/procedure_onboarding.md` | 具体的な使用手順 |

### MulmoChat (3リポジトリ)

- `receptron/gui-chat-protocol` - プロトコル仕様
- `receptron/MulmoChat` - アプリ本体
- `receptron/GUIChatPluginTemplate` - プラグインテンプレート

---

## 開発ガイドライン

### Vue.js

- **Composition API** を使用（Options APIは使わない）
- **相対パス**でインポート（`@/`エイリアスは使わない）
- propsに関数を渡さず **`emit`** を使用
- `reactive` より **`ref`** を優先
- **`v-html`は使用禁止**（セキュリティリスク）

### i18n パターン

テキストは必ずi18n対応する。**`$t()` 関数を優先**：

```vue
{{ $t("docs.cli.title") }}
```

翻訳キーは `web/src/i18n/ja.ts` と `en.ts` に追加する。

短いテキストやコードブロック内のコメントにはインラインパターンも可：

```vue
{{ locale === "ja" ? "日本語テキスト" : "English text" }}
```

### UI コンポーネント

shadcn/vue (reka-ui) を使用：

```vue
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
```

### コードブロック

```vue
<div class="bg-muted overflow-x-auto rounded-lg p-4">
  <pre class="text-sm"><code>{
  "$mulmocast": { "version": "1.1" },
  "title": "サンプル",
  "beats": [...]
}</code></pre>
</div>
```

### 注意書き

```vue
<div class="rounded border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200">
  <strong>{{ locale === "ja" ? "注意：" : "Note:" }}</strong>
  {{ locale === "ja" ? "日本語メッセージ" : "English message" }}
</div>
```

---

## YouTube動画

### 確認手順

1. **チャンネルを確認**: [@SingularitySociety](https://www.youtube.com/@SingularitySociety) で新しい動画がないか確認
2. **CLAUDE.mdと比較**: CLAUDE.mdの「YouTube動画」セクションに記載されているIDと比較
3. **ユーザーに確認**: 新しい動画があれば、ユーザーに追加すべきか確認
   - 「YouTubeチャンネルに新しい動画 [タイトル] がありました。ドキュメントに追加しますか？」
4. **CLAUDE.md更新**: 新しい動画があればCLAUDE.mdのYouTube動画セクションを更新
5. **Vueページ更新**: 該当するドキュメントページに埋め込みを追加

### 現在のリスト（CLAUDE.md参照）

動画IDの最新リストはCLAUDE.mdの「YouTube動画」セクションを参照。
手動で管理されているため、更新時は必ずユーザーに確認すること。

### 埋め込みパターン

```vue
<div class="aspect-video">
  <iframe
    class="h-full w-full rounded-lg"
    src="https://www.youtube.com/embed/VIDEO_ID"
    allowfullscreen
  ></iframe>
</div>
```

---

## 実行手順

1. **CLAUDE.md確認**: 最新のソース一覧を確認
2. **情報源を読む**: mulmocast-cli/docs/ 等の最新内容を確認
3. **対象ファイルを読む**: 更新対象のVueファイルを読む
4. **差分を特定**: 追加すべき情報を特定
5. **更新を実行**: Vueコンポーネントを編集
6. **検証**:
   ```bash
   yarn format
   yarn lint
   yarn build
   ```

---

## 新規ドキュメント追加手順

1. `web/src/views/docs/` に新しいVueコンポーネントを作成
2. `web/src/router/index.ts` にルートを追加
3. `web/src/i18n/ja.ts` と `en.ts` に翻訳を追加
4. 必要に応じて `DocsIndex.vue` にリンクを追加

---

## 詳細プラン

詳細な改善計画は `docs/IMPROVEMENT_PLAN.md` を参照。
