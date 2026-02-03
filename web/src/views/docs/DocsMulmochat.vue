<template>
  <div class="min-h-screen">
    <Navigation />
    <div class="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <a :href="localizedUrl('/docs')" class="text-primary mb-4 inline-flex items-center text-sm hover:underline">
          <ChevronLeft class="mr-1 h-4 w-4" />
          {{ t("docs.backToDocs") }}
        </a>
        <h1 class="text-foreground text-3xl font-bold">MulmoChat</h1>
        <p class="text-muted-foreground mt-2 text-lg">
          {{ t("docs.mulmochat.pageSubtitle") }}
        </p>
      </div>

      <!-- Table of Contents -->
      <Card class="mb-8">
        <CardHeader>
          <CardTitle class="text-base">{{ locale === "ja" ? "目次" : "Contents" }}</CardTitle>
        </CardHeader>
        <CardContent>
          <nav class="space-y-1">
            <a href="#overview" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "1. 概要" : "1. Overview"
            }}</a>
            <a href="#architecture" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "2. アーキテクチャ" : "2. Architecture"
            }}</a>
            <a href="#protocol" class="text-muted-foreground hover:text-primary block text-sm">3. GUI Chat Protocol</a>
            <a href="#setup" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "4. セットアップ" : "4. Setup"
            }}</a>
            <a href="#plugins" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "5. プラグイン開発" : "5. Plugin Development"
            }}</a>
            <a href="#context-api" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "6. Context API" : "6. Context API"
            }}</a>
            <a href="#example-plugins" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "7. プラグイン例" : "7. Example Plugins"
            }}</a>
            <a href="#links" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "8. 関連リンク" : "8. Related Links"
            }}</a>
          </nav>
        </CardContent>
      </Card>

      <!-- Overview -->
      <section id="overview" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "1. 概要" : "1. Overview" }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "MulmoChatはマルチモーダルAIチャット体験の新パラダイムを探求する研究プロトタイプです。"
              : "MulmoChat is a research prototype exploring a new paradigm for multimodal AI chat experiences."
          }}
        </p>

        <div class="bg-muted mb-6 rounded-lg p-4">
          <h3 class="text-foreground mb-2 font-medium">
            {{ locale === "ja" ? "コアコンセプト" : "Core Concept" }}
          </h3>
          <p class="text-muted-foreground text-sm">
            {{
              locale === "ja"
                ? "AIとの会話はテキストストリームに限定されません。画像の生成、地図の探索、ゲームのプレイ、すべてが会話フローの中で実現します。"
                : "AI conversations don't have to be limited to text streams. Image generation, map exploration, game playing - all within the conversational flow."
            }}
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <div class="border-border rounded-lg border p-4">
            <div class="flex items-center gap-2">
              <Image class="text-primary h-5 w-5" />
              <h3 class="text-foreground font-medium">{{ locale === "ja" ? "画像生成" : "Image Generation" }}</h3>
            </div>
            <p class="text-muted-foreground mt-2 text-sm">
              {{ locale === "ja" ? "会話中に画像を生成・表示" : "Generate and display images during conversation" }}
            </p>
          </div>
          <div class="border-border rounded-lg border p-4">
            <div class="flex items-center gap-2">
              <Map class="text-primary h-5 w-5" />
              <h3 class="text-foreground font-medium">{{ locale === "ja" ? "地図表示" : "Map Display" }}</h3>
            </div>
            <p class="text-muted-foreground mt-2 text-sm">
              {{ locale === "ja" ? "インタラクティブな地図を表示" : "Display interactive maps" }}
            </p>
          </div>
          <div class="border-border rounded-lg border p-4">
            <div class="flex items-center gap-2">
              <Gamepad2 class="text-primary h-5 w-5" />
              <h3 class="text-foreground font-medium">{{ locale === "ja" ? "ゲーム" : "Games" }}</h3>
            </div>
            <p class="text-muted-foreground mt-2 text-sm">
              {{ locale === "ja" ? "オセロなどのゲームをプレイ" : "Play games like Othello" }}
            </p>
          </div>
          <div class="border-border rounded-lg border p-4">
            <div class="flex items-center gap-2">
              <Music class="text-primary h-5 w-5" />
              <h3 class="text-foreground font-medium">{{ locale === "ja" ? "音楽再生" : "Music Playback" }}</h3>
            </div>
            <p class="text-muted-foreground mt-2 text-sm">
              {{ locale === "ja" ? "音楽プレイヤーを表示" : "Display music player" }}
            </p>
          </div>
        </div>
      </section>

      <!-- Architecture -->
      <section id="architecture" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "2. アーキテクチャ" : "2. Architecture" }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja" ? "MulmoChatは3つのリポジトリで構成されています。" : "MulmoChat consists of 3 repositories."
          }}
        </p>

        <div class="bg-muted mb-6 overflow-x-auto rounded-lg p-4">
          <pre
            class="text-sm"
          ><code>gui-chat-protocol（{{ locale === "ja" ? "プロトコル定義" : "Protocol Definition" }}）
    ↓ {{ locale === "ja" ? "実装" : "implements" }}
MulmoChat（{{ locale === "ja" ? "アプリケーション" : "Application" }}）
    ↓ {{ locale === "ja" ? "テンプレート" : "template" }}
GUIChatPluginTemplate（{{ locale === "ja" ? "プラグイン開発用" : "Plugin Development" }}）</code></pre>
        </div>

        <div class="space-y-4">
          <div v-for="repo in repositories" :key="repo.name" class="border-border rounded-lg border p-4">
            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-foreground font-medium">{{ repo.name }}</h3>
                <p class="text-muted-foreground mt-1 text-sm">{{ locale === "ja" ? repo.descJa : repo.descEn }}</p>
                <code class="bg-muted mt-2 inline-block rounded px-2 py-0.5 text-xs">{{ repo.package }}</code>
              </div>
              <a :href="repo.url" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
                <ExternalLink class="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- GUI Chat Protocol -->
      <section id="protocol" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">3. GUI Chat Protocol</h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "OpenAIのfunction callingを拡張し、ツールコールにGUI機能を追加するプロトコルです。"
              : "A protocol that extends OpenAI's function calling to add GUI capabilities to tool calls."
          }}
        </p>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "従来 vs GUI Chat Protocol" : "Traditional vs GUI Chat Protocol" }}
        </h3>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="border-border rounded-lg border p-4">
            <h4 class="text-foreground mb-2 font-medium">
              {{ locale === "ja" ? "従来のツールコール" : "Traditional Tool Call" }}
            </h4>
            <div class="bg-muted rounded p-2 text-xs">
              <code>{{
                locale === "ja" ? "ツール実行 → テキスト返却 → LLM応答" : "Tool exec → Text return → LLM response"
              }}</code>
            </div>
          </div>
          <div class="border-border rounded-lg border p-4">
            <h4 class="text-foreground mb-2 font-medium">GUI Chat Protocol</h4>
            <div class="bg-muted rounded p-2 text-xs">
              <code>{{
                locale === "ja"
                  ? "ツール実行 → テキスト + GUIデータ → 視覚表示"
                  : "Tool exec → Text + GUI data → Visual display"
              }}</code>
            </div>
          </div>
        </div>

        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">ToolResult</h3>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>interface ToolResult&lt;T, J&gt; {
  toolName: string;      // {{ locale === "ja" ? "ツール名（必須）" : "Tool name (required)" }}
  message: string;       // {{ locale === "ja" ? "LLM向けステータス" : "Status for LLM" }}
  jsonData?: J;          // {{ locale === "ja" ? "LLMに見せるデータ" : "Data visible to LLM" }}
  data?: T;              // {{ locale === "ja" ? "UI専用データ" : "UI-only data" }}
  title?: string;        // {{ locale === "ja" ? "結果タイトル" : "Result title" }}
  instructions?: string; // {{ locale === "ja" ? "フォローアップ指示" : "Follow-up instructions" }}
}</code></pre>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "データタイプ" : "Data Types" }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-4 py-2 text-left">Type</th>
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "説明" : "Description" }}
                </th>
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "用途例" : "Example Use" }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="dtype in dataTypes" :key="dtype.type">
                <td class="border-border border px-4 py-2">
                  <code>{{ dtype.type }}</code>
                </td>
                <td class="border-border border px-4 py-2">{{ locale === "ja" ? dtype.descJa : dtype.descEn }}</td>
                <td class="border-border border px-4 py-2 text-sm">
                  {{ locale === "ja" ? dtype.exampleJa : dtype.exampleEn }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "入力ハンドラー" : "Input Handlers" }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{
            locale === "ja"
              ? "プラグインは様々な入力タイプを受け付けることができます。"
              : "Plugins can accept various input types."
          }}
        </p>
        <div class="grid gap-3 md:grid-cols-3">
          <div class="border-border rounded-lg border p-3">
            <code class="text-primary text-sm">file</code>
            <p class="text-muted-foreground mt-1 text-xs">
              {{ locale === "ja" ? "ファイルアップロード" : "File upload" }}
            </p>
          </div>
          <div class="border-border rounded-lg border p-3">
            <code class="text-primary text-sm">clipboard-image</code>
            <p class="text-muted-foreground mt-1 text-xs">
              {{ locale === "ja" ? "クリップボードから貼り付け" : "Paste from clipboard" }}
            </p>
          </div>
          <div class="border-border rounded-lg border p-3">
            <code class="text-primary text-sm">url</code>
            <p class="text-muted-foreground mt-1 text-xs">{{ locale === "ja" ? "URL処理" : "URL processing" }}</p>
          </div>
          <div class="border-border rounded-lg border p-3">
            <code class="text-primary text-sm">text</code>
            <p class="text-muted-foreground mt-1 text-xs">
              {{ locale === "ja" ? "テキストパターン" : "Text patterns" }}
            </p>
          </div>
          <div class="border-border rounded-lg border p-3">
            <code class="text-primary text-sm">camera</code>
            <p class="text-muted-foreground mt-1 text-xs">
              {{ locale === "ja" ? "カメラキャプチャ" : "Camera capture" }}
            </p>
          </div>
          <div class="border-border rounded-lg border p-3">
            <code class="text-primary text-sm">audio</code>
            <p class="text-muted-foreground mt-1 text-xs">{{ locale === "ja" ? "音声録音" : "Audio recording" }}</p>
          </div>
        </div>
      </section>

      <!-- Setup -->
      <section id="setup" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "4. セットアップ" : "4. Setup" }}
        </h2>

        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>git clone https://github.com/receptron/MulmoChat
cd MulmoChat
yarn install
yarn dev</code></pre>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "環境変数" : "Environment Variables" }}
        </h3>
        <div class="bg-muted overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code># {{ locale === "ja" ? "必須" : "Required" }}
OPENAI_API_KEY=...
GEMINI_API_KEY=...

# {{ locale === "ja" ? "オプション" : "Optional" }}
GOOGLE_MAP_API_KEY=...      # {{ locale === "ja" ? "地図機能用" : "For map features" }}
EXA_API_KEY=...             # {{ locale === "ja" ? "AI検索用" : "For AI search" }}
ANTHROPIC_API_KEY=...       # {{ locale === "ja" ? "HTML生成用" : "For HTML generation" }}
OLLAMA_BASE_URL=...         # {{ locale === "ja" ? "ローカルLLM" : "Local LLM" }}
COMFYUI_BASE_URL=...        # {{ locale === "ja" ? "ローカル画像生成" : "Local image generation" }}</code></pre>
        </div>
      </section>

      <!-- Plugin Development -->
      <section id="plugins" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "5. プラグイン開発" : "5. Plugin Development" }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "GUIChatPluginTemplateを使ってプラグインを開発できます。"
              : "You can develop plugins using GUIChatPluginTemplate."
          }}
        </p>

        <div class="bg-muted mb-6 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code># {{ locale === "ja" ? "テンプレートをコピー" : "Copy template" }}
cp -r GUIChatPluginTemplate GUIChatPluginMyPlugin
cd GUIChatPluginMyPlugin

# {{ locale === "ja" ? "開発サーバー起動" : "Start dev server" }}
yarn install
yarn dev        # Vue
yarn dev:react  # React</code></pre>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "プラグイン構造" : "Plugin Structure" }}
        </h3>
        <div class="bg-muted overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>src/
├── core/             # {{ locale === "ja" ? "フレームワーク非依存" : "Framework-agnostic" }}
│   ├── types.ts      # {{ locale === "ja" ? "データ型定義" : "Type definitions" }}
│   ├── definition.ts # {{ locale === "ja" ? "ツール定義" : "Tool definition" }}
│   └── plugin.ts     # {{ locale === "ja" ? "execute関数" : "Execute function" }}
├── vue/              # Vue {{ locale === "ja" ? "実装" : "implementation" }}
│   ├── View.vue      # {{ locale === "ja" ? "メインUI" : "Main UI" }}
│   └── Preview.vue   # {{ locale === "ja" ? "サムネイル" : "Thumbnail" }}
└── react/            # React {{ locale === "ja" ? "実装" : "implementation" }}
    ├── View.tsx
    └── Preview.tsx</code></pre>
        </div>
      </section>

      <!-- Context API -->
      <section id="context-api" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "6. Context API" : "6. Context API" }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "execute関数はToolContextを受け取り、アプリの機能にアクセスできます。"
              : "The execute function receives ToolContext, providing access to app features."
          }}
        </p>

        <h3 class="text-foreground mb-3 text-lg font-medium">ToolContext</h3>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>interface ToolContext {
  currentResult?: ToolResult | null;  // {{ locale === "ja" ? "現在選択中の結果" : "Currently selected result" }}
  app?: ToolContextApp;               // {{ locale === "ja" ? "アプリ機能" : "App functions" }}
}</code></pre>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "利用可能な機能" : "Available Functions" }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-4 py-2 text-left">{{ locale === "ja" ? "機能" : "Function" }}</th>
                <th class="border-border border px-4 py-2 text-left">{{ locale === "ja" ? "説明" : "Description" }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="func in contextFunctions" :key="func.name">
                <td class="border-border border px-4 py-2">
                  <code class="text-xs">{{ func.name }}</code>
                </td>
                <td class="border-border border px-4 py-2 text-sm">
                  {{ locale === "ja" ? func.descJa : func.descEn }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "実装パターン" : "Implementation Patterns" }}
        </h3>
        <div class="space-y-4">
          <div class="border-border rounded-lg border p-4">
            <h4 class="text-foreground mb-2 font-medium">
              {{ locale === "ja" ? "パターンA: バックエンド呼び出し" : "Pattern A: Backend Call" }}
            </h4>
            <p class="text-muted-foreground mb-2 text-sm">
              {{
                locale === "ja"
                  ? "generateImage、generateHtml等の外部API呼び出し"
                  : "External API calls like generateImage, generateHtml"
              }}
            </p>
            <div class="bg-muted overflow-x-auto rounded p-3">
              <pre class="text-xs"><code>const result = await context.app?.generateImage(prompt);
return { data: result, message: "Image generated" };</code></pre>
            </div>
          </div>

          <div class="border-border rounded-lg border p-4">
            <h4 class="text-foreground mb-2 font-medium">
              {{ locale === "ja" ? "パターンB: 既存結果の更新" : "Pattern B: Update Existing Result" }}
            </h4>
            <p class="text-muted-foreground mb-2 text-sm">
              {{ locale === "ja" ? "currentResultを使って状態を更新" : "Update state using currentResult" }}
            </p>
            <div class="bg-muted overflow-x-auto rounded p-3">
              <pre class="text-xs"><code>return {
  ...context.currentResult,
  updating: true,  // {{ locale === "ja" ? "既存結果を更新" : "Update existing result" }}
  viewState: { scrollTo: args.anchorId }
};</code></pre>
            </div>
          </div>

          <div class="border-border rounded-lg border p-4">
            <h4 class="text-foreground mb-2 font-medium">
              {{ locale === "ja" ? "パターンC: 設定の読み書き" : "Pattern C: Config Read/Write" }}
            </h4>
            <p class="text-muted-foreground mb-2 text-sm">
              {{ locale === "ja" ? "getConfig/setConfigで設定を管理" : "Manage settings with getConfig/setConfig" }}
            </p>
            <div class="bg-muted overflow-x-auto rounded p-3">
              <pre class="text-xs"><code>const config = context.app?.getConfig("imageStyle");
context.app?.setConfig("imageStyle", newConfig);</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Example Plugins -->
      <section id="example-plugins" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "7. プラグイン例" : "7. Example Plugins" }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "公開されているプラグインを参考に開発できます。"
              : "You can reference published plugins for development."
          }}
        </p>

        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "プラグイン" : "Plugin" }}
                </th>
                <th class="border-border border px-4 py-2 text-left">{{ locale === "ja" ? "機能" : "Features" }}</th>
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "参考ポイント" : "Reference Points" }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="plugin in examplePlugins" :key="plugin.name">
                <td class="border-border border px-4 py-2">
                  <a :href="plugin.url" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
                    {{ plugin.name }}
                  </a>
                </td>
                <td class="border-border border px-4 py-2">
                  {{ locale === "ja" ? plugin.featuresJa : plugin.featuresEn }}
                </td>
                <td class="border-border border px-4 py-2 text-sm">
                  {{ locale === "ja" ? plugin.pointsJa : plugin.pointsEn }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "完成チェックリスト" : "Completion Checklist" }}
        </h3>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="border-border rounded-lg border p-4">
            <h4 class="text-foreground mb-2 font-medium">
              {{ locale === "ja" ? "必須ファイル" : "Required Files" }}
            </h4>
            <ul class="text-muted-foreground list-inside list-disc text-sm">
              <li>package.json</li>
              <li>vite.config.ts</li>
              <li>tsconfig.json</li>
              <li>src/core/types.ts</li>
              <li>src/core/plugin.ts</li>
              <li>src/vue/View.vue</li>
              <li>src/vue/Preview.vue</li>
            </ul>
          </div>
          <div class="border-border rounded-lg border p-4">
            <h4 class="text-foreground mb-2 font-medium">
              {{ locale === "ja" ? "ビルド確認" : "Build Verification" }}
            </h4>
            <ul class="text-muted-foreground list-inside list-disc text-sm">
              <li>yarn install</li>
              <li>yarn typecheck</li>
              <li>yarn lint</li>
              <li>yarn build</li>
              <li>yarn dev</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Links -->
      <section id="links" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "8. 関連リンク" : "8. Related Links" }}
        </h2>

        <div class="space-y-3">
          <a
            v-for="link in relatedLinks"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="border-border hover:bg-muted flex items-center justify-between rounded-lg border p-4 transition-colors"
          >
            <div class="flex items-center gap-3">
              <component :is="link.icon" class="h-5 w-5" />
              <span>{{ link.label }}</span>
            </div>
            <ExternalLink class="h-4 w-4" />
          </a>
        </div>
      </section>

      <!-- Back -->
      <div class="text-center">
        <Button as="a" :href="localizedUrl('/docs')" variant="outline">
          {{ t("docs.backToDocs") }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import Navigation from "../../components/Navigation.vue";
import { useLocalizedUrl } from "../../i18n/utils";
import { ChevronLeft, ExternalLink, Github, Package, FileText, Image, Map, Gamepad2, Music } from "lucide-vue-next";

const { t, locale } = useI18n();
const localizedUrl = useLocalizedUrl();

const repositories = [
  {
    name: "gui-chat-protocol",
    descJa: "プロトコル定義。TypeScript型とVue/Reactアダプター。",
    descEn: "Protocol definition. TypeScript types and Vue/React adapters.",
    package: "npm install gui-chat-protocol",
    url: "https://github.com/receptron/gui-chat-protocol",
  },
  {
    name: "MulmoChat",
    descJa: "GUI Chat Protocolの実装アプリケーション。",
    descEn: "Application implementing GUI Chat Protocol.",
    package: "git clone https://github.com/receptron/MulmoChat",
    url: "https://github.com/receptron/MulmoChat",
  },
  {
    name: "GUIChatPluginTemplate",
    descJa: "プラグイン開発用テンプレート。Vue/React対応。",
    descEn: "Plugin development template. Vue/React supported.",
    package: "git clone https://github.com/receptron/GUIChatPluginTemplate",
    url: "https://github.com/receptron/GUIChatPluginTemplate",
  },
];

const dataTypes = [
  {
    type: "image",
    descJa: "画像ビューアー",
    descEn: "Image viewer",
    exampleJa: "生成画像の表示",
    exampleEn: "Display generated images",
  },
  {
    type: "map",
    descJa: "地図コンポーネント",
    descEn: "Map component",
    exampleJa: "位置情報の視覚化",
    exampleEn: "Visualize location data",
  },
  {
    type: "browse",
    descJa: "Webコンテンツビューアー",
    descEn: "Web content viewer",
    exampleJa: "Webページのプレビュー",
    exampleEn: "Web page preview",
  },
  {
    type: "game",
    descJa: "ゲームボード",
    descEn: "Game board",
    exampleJa: "オセロ、チェス等",
    exampleEn: "Othello, chess, etc.",
  },
  {
    type: "music",
    descJa: "音楽プレイヤー",
    descEn: "Music player",
    exampleJa: "音楽再生UI",
    exampleEn: "Music playback UI",
  },
  {
    type: "html",
    descJa: "HTMLコンテンツ",
    descEn: "HTML content",
    exampleJa: "動的なWebコンテンツ",
    exampleEn: "Dynamic web content",
  },
  {
    type: "quiz",
    descJa: "クイズUI",
    descEn: "Quiz UI",
    exampleJa: "選択式問題",
    exampleEn: "Multiple choice questions",
  },
];

const contextFunctions = [
  { name: "getConfig(key)", descJa: "設定値を取得", descEn: "Get configuration value" },
  { name: "setConfig(key, value)", descJa: "設定値を保存", descEn: "Save configuration value" },
  { name: "generateImage(prompt)", descJa: "画像を生成", descEn: "Generate image" },
  { name: "generateHtml({ prompt })", descJa: "LLMでHTMLを生成", descEn: "Generate HTML with LLM" },
  { name: "browseUrl(url)", descJa: "Webページを取得", descEn: "Fetch web page" },
  { name: "searchExa(args)", descJa: "Exa検索を実行", descEn: "Execute Exa search" },
  { name: "getRoles()", descJa: "ロール一覧を取得", descEn: "Get role list" },
  { name: "switchRole(roleId)", descJa: "ロールを切り替え", descEn: "Switch role" },
];

const examplePlugins = [
  {
    name: "Quiz",
    url: "https://github.com/receptron/MulmoChatPluginQuiz",
    featuresJa: "インタラクティブクイズ",
    featuresEn: "Interactive quiz",
    pointsJa: "samples、View、Preview",
    pointsEn: "samples, View, Preview",
  },
  {
    name: "GenerateImage",
    url: "https://github.com/receptron/MulmoChatPluginGenerateImage",
    featuresJa: "画像生成",
    featuresEn: "Image generation",
    pointsJa: "inputHandlers、backends",
    pointsEn: "inputHandlers, backends",
  },
  {
    name: "Othello",
    url: "https://github.com/nicedoc/GUIChatPluginOthello",
    featuresJa: "ゲーム、インタラクティブUI",
    featuresEn: "Game, interactive UI",
    pointsJa: "jsonData、sendTextMessage",
    pointsEn: "jsonData, sendTextMessage",
  },
  {
    name: "GenerateHtml",
    url: "https://github.com/nicedoc/GUIChatPluginGenerateHtml",
    featuresJa: "HTML生成",
    featuresEn: "HTML generation",
    pointsJa: "context.app、isEnabled",
    pointsEn: "context.app, isEnabled",
  },
  {
    name: "Spreadsheet",
    url: "https://github.com/nicedoc/GUIChatPluginSpreadsheet",
    featuresJa: "スプレッドシート",
    featuresEn: "Spreadsheet",
    pointsJa: "複雑なロジック分離",
    pointsEn: "Complex logic separation",
  },
];

const relatedLinks = [
  {
    label: "GitHub - MulmoChat",
    url: "https://github.com/receptron/MulmoChat",
    icon: Github,
  },
  {
    label: "GitHub - gui-chat-protocol",
    url: "https://github.com/receptron/gui-chat-protocol",
    icon: Github,
  },
  {
    label: "GitHub - GUIChatPluginTemplate",
    url: "https://github.com/receptron/GUIChatPluginTemplate",
    icon: Github,
  },
  {
    label: "npm - gui-chat-protocol",
    url: "https://www.npmjs.com/package/gui-chat-protocol",
    icon: Package,
  },
  {
    label: "LLM OS Vision (docs)",
    url: "https://github.com/receptron/MulmoChat/blob/main/docs/LLM_OS.md",
    icon: FileText,
  },
  {
    label: "GUI Chat Protocol Spec",
    url: "https://github.com/receptron/gui-chat-protocol/blob/main/spec/GUI_CHAT_PROTOCOL.md",
    icon: FileText,
  },
];
</script>
