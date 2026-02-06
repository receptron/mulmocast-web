# MulmoCast Web ドキュメント包括的改善計画

## 概要

Issue #52に基づき、初心者から中級者向けの包括的なドキュメントを作成する。既存の豊富なソース（mulmocast-cli/docs/）を活用し、Anthropicスタイルのドキュメントに変換する。

## 現状分析

### 現在のDocsCli.vue（薄い）
| セクション | 現状 | 問題点 |
|-----------|------|--------|
| インストール | 10行程度 | ffmpeg詳細、トラブルシューティングなし |
| クイックスタート | 2ステップのみ | ワークフロー説明なし |
| MulmoScript | 1例 + 8行テーブル | 完全なスキーマ、レイアウト、beat型なし |
| コマンド | 9コマンドテーブル | オプション、例なし |
| プロバイダー | 3つの小テーブル | モデル、設定詳細なし |
| 高度な機能 | 6つの1行カード | 詳細、例なし |

### 利用可能な情報源（豊富）
mulmocast-cli/docs/より：
- **feature.md**: 771行 - 完全な機能カタログ
- **image.md**: 1076行 - 画像/動画タイプ、フィルター、トランジション
- **sound_and_voice.md**: 162行 - オーディオスピルオーバー、スピーカー設定
- **tts.md**: 209行 - TTSプロバイダーフレームワーク
- **caption_split.md**: 381行 - キャプションタイミング仕様
- **faq_en.md/faq_ja.md**: 253行 - よくある問題と解決策
- **azure_openai_usage.md**: Azureセットアップ
- **vertexai_en.md**: Google Vertex AI設定

---

## 実装計画

### Phase 1: DocsCli.vue 大幅拡張

#### 1.1 インストールセクション強化
**現在**: ~15行 → **目標**: ~80行

追加内容：
- システム要件（Node.js 22+、ffmpeg、プラットフォーム別注意事項）
- インストール方法比較（npx vs グローバル）
- 環境変数完全リスト（テーブル形式）
- トラブルシューティング（よくあるエラー）

```
1.1 システム要件
1.2 インストール方法
1.3 環境変数一覧（完全なテーブル）
    - OPENAI_API_KEY (必須)
    - LLM_OPENAI_API_KEY, TTS_OPENAI_API_KEY, IMAGE_OPENAI_API_KEY
    - GEMINI_API_KEY, ANTHROPIC_API_TOKEN
    - REPLICATE_API_TOKEN, ELEVENLABS_API_KEY, KOTODAMA_API_KEY
    - DEFAULT_OPENAI_IMAGE_MODEL
1.4 インストール確認
```

#### 1.2 MulmoScript完全リファレンス
**現在**: 1例 + 8行テーブル → **目標**: ~300行

```
3.1 基本構造
    - スキーマ概要
    - 必須 vs オプションフィールド
    - $mulmocast, title, lang, canvasSize, speakers, beats

3.2 Beats設定
    - speaker, text, duration
    - タイミングルール（image.mdの「Beatの長さの決まり方」より）
      - 音声ベース: TTS長 + オプションパディング
      - 明示的duration: 計算値をオーバーライド
      - 動画ベース: movie長が優先
      - スピルオーバー: 長い音声を複数beatに分配
      - デフォルト: 1秒

3.3 画像タイプ（完全版）
    3.3.1 静的ソース
        - image (URL/パス) - 例付き
        - movie (URL/パス) - 例付き
    3.3.2 生成コンテンツ
        - textSlide (スタイルオプション付き)
        - markdown (レイアウト: row-2, 2x2, header, sidebar)
        - chart (Chart.js設定例)
        - mermaid (appendixオプション付き)
        - html_tailwind (完全な例)
    3.3.3 特殊タイプ
        - voice_over (ナレーションオーバーレイ用)
        - beat (前のbeatを参照)
        - vision (API経由コンテンツ分析)

3.4 100種類のCSSスタイル
    10カテゴリのテーブル:
    - business (ビジネス)
    - tech (テック)
    - creative (クリエイティブ)
    - minimalist (ミニマリスト)
    - nature (自然)
    - dark (ダーク)
    - colorful (カラフル)
    - vintage (ヴィンテージ)
    - japanese (和風)
    - geometric (幾何学)
    各カテゴリ10スタイル、計100スタイル

3.5 生成優先度ルール
    決定テーブル（image.mdより）:
    1. image property → プラグインタイプ決定
    2. HTMLPrompt → HTML生成→画像変換
    3. ImagePrompt → 画像生成
    4. MoviePrompt → 動画のみ（静止画なし）
    5. テキストベースフォールバック → テキストから自動生成
```

#### 1.3 プロバイダー設定（大幅拡張）
**現在**: 3小テーブル → **目標**: ~200行

```
5.1 TTSプロバイダー（完全版）
    | Provider | Voices | Features | 環境変数 |
    | openai | shimmer, alloy, echo, fable, onyx, nova | 多言語 | OPENAI_API_KEY |
    | gemini | Kore, Puck, Charon, Fenrir, Aoede | PCM→MP3変換 | GEMINI_API_KEY |
    | google | Language-specific | Google Cloud TTS | GOOGLE_APPLICATION_CREDENTIALS |
    | elevenlabs | カスタム音声 | 感情表現、高品質 | ELEVENLABS_API_KEY |
    | kotodama | 日本語特化 | デコレーション | KOTODAMA_API_KEY |

5.2 画像生成プロバイダー
    | Provider | Models | Features | 備考 |
    | openai | gpt-image-1, gpt-image-1.5 | 最高品質、参照画像 | 要verification |
    | openai | dall-e-3 | 標準品質 | フォールバック |
    | google | imagen-4 (Standard/Ultra/Fast) | Vertex AI経由 | ADC認証 |

5.3 動画生成プロバイダー
    | Provider | Models | Duration | Features |
    | google | veo-2.0 | 8秒 | 標準 |
    | google | veo-3.0, veo-3.1 | 8秒 | 高品質 |
    | replicate | 各種 | モデル依存 | リップシンク対応 |

5.4 リップシンクモデル
    | Model | Input | Features |
    | bytedance/omni-human | 静止画 | 最新、高品質 |
    | bytedance/latentsync | 動画 | 安定 |
    | tmappdev/lipsync | 動画 | レガシー |

5.5 言語別スピーカー設定
    speechParams.lang での言語別プロバイダー設定例
```

#### 1.4 高度な機能（詳細化）
**現在**: 6カード（1行説明） → **目標**: ~400行

```
6.1 オーディオスピルオーバー
    - コンセプト説明
    - duration自動分配の仕組み
    - 設定例
    - ミュージックビデオ制作の例

6.2 トランジション（17種類）
    完全リスト:
    - fade
    - slideout-right, slideout-left, slideout-up, slideout-down
    - slidein-right, slidein-left, slidein-up, slidein-down
    - wipe-right, wipe-left, wipe-up, wipe-down
    - wipe-tr, wipe-tl, wipe-br, wipe-bl
    設定: { type, duration }
    グローバル vs per-beat設定

6.3 ビデオフィルター（36種類）
    カテゴリ別テーブル:
    - 色調整(9): mono, sepia, hue, brightness, contrast, saturation, etc.
    - ブラー/シャープ(4): blur, gblur, unsharp, etc.
    - エッジ検出(3): edgedetect, sobel, emboss
    - 変形(4): hflip, vflip, rotate, transpose
    - 視覚効果(4): vignette, fade, pixelize, etc.
    - テンポラル(2): tmix, lagfun
    - 閾値(2): threshold, elbg
    - 特殊(6): glitch, grain, etc.
    フィルターチェーン例

6.4 リップシンク詳細
    - モデル比較テーブル
    - 入力要件
    - 設定例

6.5 キャプション
    - テキスト分割（手動 vs 自動）
    - タイミングモード（none, estimate）
    - スタイルカスタマイズ
    - captionSplit設定

6.6 サウンドエフェクト
    - soundEffectPrompt使用法
    - Replicate統合

6.7 BGM設定
    - 内蔵 vs カスタム音源
    - ボリュームコントロール（bgmVolume, audioVolume）

6.8 オーディオタイミング制御
    - introPadding, padding, closingPadding, outroPadding
    - per-beatパディング
    - suppressSpeechモード

6.9 fillオプション
    - aspectFit vs aspectFill
```

#### 1.5 FAQ・トラブルシューティング追加
**新規**: ~100行

```
8.1 インストール問題
    - 403 gpt-image-1 verification error → 認証方法
    - ffmpeg not found → インストール手順

8.2 生成問題
    - 429 rate limit errors → リトライ/待機
    - 動画が途切れる → duration設定確認

8.3 多言語問題
    - 翻訳編集方法
    - 音声/字幕の不一致

8.4 互換性
    - _studio.json バージョン問題
```

---

### Phase 2: DocsApp.vue 拡張

mulmocast-app/docs/より：
- **how_to_use.md**: インストール・基本使用法
- **procedure_onboarding.md**: 包括的ワークフロー
- **tts.md**: TTS統合
- **voice_list.md**: 音声設定

追加セクション:
- UIの詳細説明（4つの編集エリア）
- 設定パネル完全ガイド
- Mac/Windows固有の注意事項

---

### Phase 3: DocsMulmochat.vue 拡張

gui-chat-protocol + MulmoChat + GUIChatPluginTemplateより：

追加セクション:
- プラグイン開発チュートリアル（5ステップ）
- 7つのデータ型詳細仕様
- ToolResult完全リファレンス
- サンプルプラグイン実装例

---

## 対象ファイル

### CLI ドキュメント（分割済み）
1. `/Users/isamu/ss/llm/mulmocast-web/web/src/views/docs/cli/CliQuickstart.vue`
   - 現在: 1436行 ✅ チュートリアル形式に改善済み
2. `/Users/isamu/ss/llm/mulmocast-web/web/src/views/docs/cli/CliMulmoscript.vue`
   - 現在: 1462行 ✅ 画像タイプ詳細、Markdownレイアウト、Beat長ルール追加済み
3. `/Users/isamu/ss/llm/mulmocast-web/web/src/views/docs/cli/CliProviders.vue`
   - 現在: ~1700行 ✅ Enterprise Settings追加済み（Vertex AI, Azure OpenAI, Geminiモデル）
4. `/Users/isamu/ss/llm/mulmocast-web/web/src/views/docs/cli/CliAdvanced.vue`
   - 現在: 636行 → 目標: ~1000行（詳細設定、例追加）
5. `/Users/isamu/ss/llm/mulmocast-web/web/src/views/docs/cli/CliIndex.vue`
   - 現在: 371行（概要ページ、大きな変更不要）

### App/MulmoChat ドキュメント
6. `/Users/isamu/ss/llm/mulmocast-web/web/src/views/docs/DocsApp.vue`
   - 現在: ~400行 → 目標: ~800行
7. `/Users/isamu/ss/llm/mulmocast-web/web/src/views/docs/DocsMulmochat.vue`
   - 現在: ~300行 → 目標: ~600行

### i18n更新ファイル
4. `/Users/isamu/ss/llm/mulmocast-web/web/src/i18n/ja.ts`
5. `/Users/isamu/ss/llm/mulmocast-web/web/src/i18n/en.ts`

### 参照ソース（GitHub/ローカル）
- https://github.com/receptron/mulmocast-cli/blob/main/docs/feature.md
- https://github.com/receptron/mulmocast-cli/blob/main/docs/image.md
- https://github.com/receptron/mulmocast-cli/blob/main/docs/sound_and_voice.md
- https://github.com/receptron/mulmocast-cli/blob/main/docs/tts.md
- https://github.com/receptron/mulmocast-cli/blob/main/docs/faq_en.md

---

## 実装優先度

### High Priority（Phase 1）
1. DocsCli.vue MulmoScript完全リファレンス
2. DocsCli.vue プロバイダー詳細
3. DocsCli.vue 高度な機能詳細
4. DocsCli.vue FAQ追加

### Medium Priority（Phase 2）
5. DocsApp.vue UI詳細
6. DocsMulmochat.vue プラグイン開発ガイド

### Lower Priority（Phase 3）
7. インタラクティブ例
8. コードプレイグラウンド

---

### Phase 4: FAQ ページ改善

既存の `/faq` ページ（`web/src/views/Faq.vue`、15個のQ&A）を改善。
新規ページは作成せず、既存ページにセクション分類と不足項目を追加する。

#### 現状
- 15個のQ&Aがフラットなリスト（セクション分類なし）
- 目次なし
- i18nキーが配列番号ベース（`faq.items[0]` ~ `faq.items[14]`）

#### 改善内容

##### 1. セクション分類（6セクション）

| セクション | 内容 | 既存項目 | 新規項目 |
|-----------|------|---------|---------|
| 一般的な質問 | MulmoCastとは、料金、プラットフォーム、用途 | items.0-3 | - |
| セットアップ・インストール | gpt-image-1エラー、組織認証 | items.4-5 | ffmpegが見つからない |
| 生成に関する問題 | 動画品質、静止画問題、動画途切れ | items.6-9, 12 | 429 Rate Limitエラー |
| APIプロバイダー・課金 | OpenAI/Gemini Usage Tiers | items.13-14 | - |
| MulmoCast App 固有 | バグ報告、BGMカスタマイズ | items.10-11 | _studio.json互換性 |
| MulmoCast CLI 固有 | - | - | 多言語問題（翻訳、音声/字幕の不一致） |

##### 2. i18nキー構造の変更

```
現在: faq.items[n].question / answer
変更後: faq.sections.general.items.whatIsMulmocast.question / answer
```

番号インデックスから名前付きキーに変更し、項目の追加・並べ替え時のズレを防止。

##### 3. UI改善
- ページ上部に**目次（Table of Contents）**を追加
- セクションごとにヘッダーを追加
- 既存のアンカーID（#what-is-mulmocast等）は変更しない（外部リンク互換）

##### 4. 新規FAQ項目（4つ）

| 項目 | 内容 |
|------|------|
| ffmpegが見つからない | macOS: brew install ffmpeg / Windows: winget install ffmpeg |
| 429 Rate Limitエラー | 時間を空けて再試行、Usage Tier確認、dall-e-3に変更 |
| _studio.jsonバージョン互換性 | アプリ最新版にアップデート、JSONエクスポート→新規インポート |
| 多言語問題 | speechParams.lang確認、captionParams調整、言語別speaker設定 |

##### 5. 変更対象ファイル

| ファイル | 変更内容 |
|----------|----------|
| `web/src/views/Faq.vue` | セクション化、目次追加、新FAQカード追加 |
| `web/src/i18n/ja.ts` | i18nキー構造変更 + 新規項目追加 |
| `web/src/i18n/en.ts` | i18nキー構造変更 + 新規項目追加 |

ルーター変更: **不要**（既に `/:lang?/faq` が存在）

---

## 検証方法

1. `yarn format` - コードフォーマット
2. `yarn lint` - リントチェック
3. `yarn build` - ビルド確認
4. `yarn dev` - 開発サーバーで各ページ確認
   - `/docs/cli` - 全セクション表示確認
   - `/docs/app` - 全セクション表示確認
   - `/docs/mulmochat` - 全セクション表示確認
5. 日本語/英語切り替えテスト
6. モバイルレスポンシブ確認

---

## 想定作業量

| Phase | コンテンツ行数 | i18n行数 |
|-------|--------------|----------|
| Phase 1 (CLI) | +900行 | +400行 |
| Phase 2 (App) | +400行 | +200行 |
| Phase 3 (MulmoChat) | +300行 | +150行 |
| Phase 4 (FAQ) | +200行 | +150行 |
| **合計** | **+1800行** | **+900行** |
