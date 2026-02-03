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
        <h1 class="text-foreground text-3xl font-bold">MulmoCast CLI</h1>
        <p class="text-muted-foreground mt-2 text-lg">
          {{ t("docs.cli.pageSubtitle") }}
        </p>
      </div>

      <!-- Table of Contents -->
      <Card class="mb-8">
        <CardHeader>
          <CardTitle class="text-base">{{ locale === "ja" ? "目次" : "Contents" }}</CardTitle>
        </CardHeader>
        <CardContent>
          <nav class="space-y-1">
            <a href="#installation" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "1. インストール" : "1. Installation"
            }}</a>
            <a href="#quickstart" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "2. クイックスタート" : "2. Quick Start"
            }}</a>
            <a href="#mulmoscript" class="text-muted-foreground hover:text-primary block text-sm">3. MulmoScript</a>
            <a href="#commands" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "4. コマンドリファレンス" : "4. Command Reference"
            }}</a>
            <a href="#providers" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "5. プロバイダー" : "5. Providers"
            }}</a>
            <a href="#advanced" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "6. 高度な機能" : "6. Advanced Features"
            }}</a>
            <a href="#videos" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "7. チュートリアル動画" : "7. Tutorial Videos"
            }}</a>
            <a href="#links" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "8. 関連リンク" : "8. Related Links"
            }}</a>
          </nav>
        </CardContent>
      </Card>

      <!-- Installation -->
      <section id="installation" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "1. インストール" : "1. Installation" }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "Node.js 18以上が必要です。npxを使って直接実行するか、グローバルインストールできます。"
              : "Requires Node.js 18 or higher. You can run directly with npx or install globally."
          }}
        </p>

        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code># {{ locale === "ja" ? "npxで直接実行" : "Run directly with npx" }}
npx mulmocast movie script.json

# {{ locale === "ja" ? "グローバルインストール" : "Global installation" }}
npm install -g mulmocast

# {{ locale === "ja" ? "ffmpegも必要です" : "ffmpeg is also required" }}
brew install ffmpeg  # macOS
</code></pre>
        </div>

        <h3 class="text-foreground mt-6 mb-2 text-lg font-medium">
          {{ locale === "ja" ? "環境変数の設定" : "Environment Variables" }}
        </h3>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "プロジェクトディレクトリに .env ファイルを作成します。"
              : "Create a .env file in your project directory."
          }}
        </p>

        <div class="bg-muted overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code># {{ locale === "ja" ? "必須" : "Required" }}
OPENAI_API_KEY=your_openai_api_key

# {{ locale === "ja" ? "オプション（高品質画像生成）" : "Optional (high quality image generation)" }}
DEFAULT_OPENAI_IMAGE_MODEL=gpt-image-1

# {{ locale === "ja" ? "その他のプロバイダー（オプション）" : "Other providers (optional)" }}
GEMINI_API_KEY=your_google_gemini_api_key
ANTHROPIC_API_TOKEN=your_anthropic_api_token
REPLICATE_API_TOKEN=your_replicate_api_key
ELEVENLABS_API_KEY=your_elevenlabs_api_key
</code></pre>
        </div>
      </section>

      <!-- Quickstart -->
      <section id="quickstart" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "2. クイックスタート" : "2. Quick Start" }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{ locale === "ja" ? "2つのステップで動画を生成できます。" : "Generate videos in two steps." }}
        </p>

        <div class="space-y-6">
          <div class="border-border rounded-lg border p-4">
            <h3 class="text-foreground mb-2 font-medium">
              Step 1: {{ locale === "ja" ? "台本を生成" : "Generate Script" }}
            </h3>
            <p class="text-muted-foreground mb-3 text-sm">
              {{
                locale === "ja" ? "インタラクティブモードで台本を作成します。" : "Create a script in interactive mode."
              }}
            </p>
            <div class="bg-muted overflow-x-auto rounded p-3">
              <code class="text-sm">mulmo tool scripting -i -t children_book -o ./ -s story</code>
            </div>
          </div>

          <div class="border-border rounded-lg border p-4">
            <h3 class="text-foreground mb-2 font-medium">
              Step 2: {{ locale === "ja" ? "動画を生成" : "Generate Video" }}
            </h3>
            <p class="text-muted-foreground mb-3 text-sm">
              {{
                locale === "ja"
                  ? "音声・画像・動画を一括生成します。"
                  : "Generate audio, images, and video all at once."
              }}
            </p>
            <div class="bg-muted overflow-x-auto rounded p-3">
              <code class="text-sm">mulmo movie script.json</code>
            </div>
          </div>
        </div>
      </section>

      <!-- MulmoScript -->
      <section id="mulmoscript" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">3. MulmoScript</h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "MulmoScriptはJSON形式の台本フォーマットです。テキスト、画像、音声の設定を記述します。"
              : "MulmoScript is a JSON-based script format. It describes text, image, and audio settings."
          }}
        </p>

        <div class="bg-muted mb-6 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "$mulmocast": { "version": "1.0" },
  "title": "{{ locale === "ja" ? "サンプルプレゼンテーション" : "Sample Presentation" }}",
  "lang": "{{ locale === "ja" ? "ja" : "en" }}",
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
      "text": "{{ locale === "ja" ? "こんにちは、MulmoCastへようこそ。" : "Hello, welcome to MulmoCast." }}",
      "imagePrompt": "{{ locale === "ja" ? "モダンなプレゼンテーションの背景" : "Modern presentation background" }}"
    }
  ]
}</code></pre>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">image.type</h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "タイプ" : "Type" }}
                </th>
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "説明" : "Description" }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in imageTypes" :key="item.type">
                <td class="border-border border px-4 py-2">
                  <code>{{ item.type }}</code>
                </td>
                <td class="border-border border px-4 py-2">{{ locale === "ja" ? item.descJa : item.descEn }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Commands -->
      <section id="commands" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "4. コマンドリファレンス" : "4. Command Reference" }}
        </h2>

        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "コマンド" : "Command" }}
                </th>
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "説明" : "Description" }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cmd in commands" :key="cmd.cmd">
                <td class="border-border border px-4 py-2">
                  <code>{{ cmd.cmd }}</code>
                </td>
                <td class="border-border border px-4 py-2">{{ locale === "ja" ? cmd.descJa : cmd.descEn }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "多言語対応オプション" : "Multi-language Options" }}
        </h3>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre
            class="text-sm"
          ><code># {{ locale === "ja" ? "日本語音声・字幕版を作成（画像は再利用）" : "Create Japanese audio/subtitle version (reuse images)" }}
mulmo movie script.json -l ja -c ja

# {{ locale === "ja" ? "オプション:" : "Options:" }}
# -l ja: {{ locale === "ja" ? "日本語音声を生成" : "Generate Japanese audio" }}
# -c ja: {{ locale === "ja" ? "日本語字幕を生成" : "Generate Japanese subtitles" }}
</code></pre>
        </div>
      </section>

      <!-- Providers -->
      <section id="providers" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "5. プロバイダー" : "5. Providers" }}
        </h2>

        <h3 class="text-foreground mb-3 text-lg font-medium">TTS</h3>
        <div class="mb-6 overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "プロバイダー" : "Provider" }}
                </th>
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "特徴" : "Features" }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="p in ttsProviders" :key="p.name">
                <td class="border-border border px-4 py-2">{{ p.name }}</td>
                <td class="border-border border px-4 py-2">{{ locale === "ja" ? p.descJa : p.descEn }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "画像生成" : "Image Generation" }}
        </h3>
        <div class="mb-6 overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "プロバイダー" : "Provider" }}
                </th>
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "モデル" : "Models" }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-border border px-4 py-2">openai</td>
                <td class="border-border border px-4 py-2">gpt-image-1, dall-e-3</td>
              </tr>
              <tr>
                <td class="border-border border px-4 py-2">google</td>
                <td class="border-border border px-4 py-2">imagen-4.0-generate-001</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "動画生成" : "Video Generation" }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "プロバイダー" : "Provider" }}
                </th>
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "モデル" : "Models" }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-border border px-4 py-2">google</td>
                <td class="border-border border px-4 py-2">veo-2.0, veo-3.0</td>
              </tr>
              <tr>
                <td class="border-border border px-4 py-2">replicate</td>
                <td class="border-border border px-4 py-2">
                  {{ locale === "ja" ? "各種モデル（リップシンク等）" : "Various models (lip-sync, etc.)" }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Advanced -->
      <section id="advanced" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "6. 高度な機能" : "6. Advanced Features" }}
        </h2>

        <div class="grid gap-4 md:grid-cols-2">
          <div v-for="feature in advancedFeatures" :key="feature.titleJa" class="border-border rounded-lg border p-4">
            <h3 class="text-foreground mb-2 font-medium">
              {{ locale === "ja" ? feature.titleJa : feature.titleEn }}
            </h3>
            <p class="text-muted-foreground text-sm">{{ locale === "ja" ? feature.descJa : feature.descEn }}</p>
          </div>
        </div>
      </section>

      <!-- Videos -->
      <section id="videos" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "7. チュートリアル動画" : "7. Tutorial Videos" }}
        </h2>

        <Tabs default-value="ja" class="w-full">
          <TabsList class="mb-4">
            <TabsTrigger value="ja">日本語</TabsTrigger>
            <TabsTrigger value="en">English</TabsTrigger>
          </TabsList>

          <TabsContent value="ja">
            <div class="grid gap-6 md:grid-cols-2">
              <div v-for="video in videosJa" :key="video.id" class="border-border overflow-hidden rounded-lg border">
                <div class="aspect-video">
                  <iframe
                    :src="`https://www.youtube.com/embed/${video.id}`"
                    :title="video.title"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    class="h-full w-full"
                  ></iframe>
                </div>
                <div class="p-3">
                  <span class="bg-primary/10 text-primary mb-1 inline-block rounded px-2 py-0.5 text-xs">{{
                    video.category
                  }}</span>
                  <h3 class="text-foreground text-sm font-medium">{{ video.title }}</h3>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="en">
            <div class="grid gap-6 md:grid-cols-2">
              <div v-for="video in videosEn" :key="video.id" class="border-border overflow-hidden rounded-lg border">
                <div class="aspect-video">
                  <iframe
                    :src="`https://www.youtube.com/embed/${video.id}`"
                    :title="video.title"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    class="h-full w-full"
                  ></iframe>
                </div>
                <div class="p-3">
                  <span class="bg-primary/10 text-primary mb-1 inline-block rounded px-2 py-0.5 text-xs">{{
                    video.category
                  }}</span>
                  <h3 class="text-foreground text-sm font-medium">{{ video.title }}</h3>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <!-- Links -->
      <section id="links" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "8. 関連リンク" : "8. Related Links" }}
        </h2>

        <div class="space-y-3">
          <a
            href="https://github.com/receptron/mulmocast-cli"
            target="_blank"
            rel="noopener noreferrer"
            class="border-border hover:bg-muted flex items-center justify-between rounded-lg border p-4 transition-colors"
          >
            <div class="flex items-center gap-3">
              <Github class="h-5 w-5" />
              <span>GitHub - mulmocast-cli</span>
            </div>
            <ExternalLink class="h-4 w-4" />
          </a>
          <a
            href="https://www.npmjs.com/package/mulmocast"
            target="_blank"
            rel="noopener noreferrer"
            class="border-border hover:bg-muted flex items-center justify-between rounded-lg border p-4 transition-colors"
          >
            <div class="flex items-center gap-3">
              <Package class="h-5 w-5" />
              <span>npm - mulmocast</span>
            </div>
            <ExternalLink class="h-4 w-4" />
          </a>
          <a
            href="https://zenn.dev/singularity/articles/mulmocast-create-methods"
            target="_blank"
            rel="noopener noreferrer"
            class="border-border hover:bg-muted flex items-center justify-between rounded-lg border p-4 transition-colors"
          >
            <div class="flex items-center gap-3">
              <FileText class="h-5 w-5" />
              <span>Zenn - {{ locale === "ja" ? "MulmoScript作成方法まとめ" : "MulmoScript Creation Guide" }}</span>
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import Navigation from "../../components/Navigation.vue";
import { useLocalizedUrl } from "../../i18n/utils";
import { ChevronLeft, ExternalLink, Github, Package, FileText } from "lucide-vue-next";

const { t, locale } = useI18n();
const localizedUrl = useLocalizedUrl();

const imageTypes = [
  { type: "image", descJa: "静止画（URL/パス）", descEn: "Static image (URL/path)" },
  { type: "movie", descJa: "動画（URL/パス）", descEn: "Video (URL/path)" },
  { type: "textSlide", descJa: "テキストスライド", descEn: "Text slide" },
  { type: "markdown", descJa: "Markdownスライド（100種類のスタイル）", descEn: "Markdown slide (100 styles)" },
  { type: "chart", descJa: "Chart.jsグラフ", descEn: "Chart.js graph" },
  { type: "mermaid", descJa: "Mermaid図", descEn: "Mermaid diagram" },
  { type: "html_tailwind", descJa: "Tailwind CSSを使ったHTML", descEn: "HTML with Tailwind CSS" },
  { type: "voice_over", descJa: "ナレーション重ね（画像生成なし）", descEn: "Voice over (no image generation)" },
];

const commands = [
  { cmd: "mulmo movie <file>", descJa: "動画ファイルを生成", descEn: "Generate video file" },
  { cmd: "mulmo audio <file>", descJa: "音声ファイルを生成", descEn: "Generate audio file" },
  { cmd: "mulmo images <file>", descJa: "画像ファイルを生成", descEn: "Generate image files" },
  { cmd: "mulmo pdf <file>", descJa: "PDFファイルを生成", descEn: "Generate PDF file" },
  { cmd: "mulmo translate <file>", descJa: "台本を翻訳", descEn: "Translate script" },
  { cmd: "mulmo bundle <file>", descJa: "Webバンドルを生成", descEn: "Generate web bundle" },
  { cmd: "mulmo tool scripting", descJa: "台本を対話的に生成", descEn: "Generate script interactively" },
  { cmd: "mulmo tool complete <file>", descJa: "部分的なMulmoScriptを補完", descEn: "Complete partial MulmoScript" },
  { cmd: "mulmo tool info [category]", descJa: "利用可能オプションを表示", descEn: "Show available options" },
];

const ttsProviders = [
  { name: "openai", descJa: "標準TTS、多言語対応", descEn: "Standard TTS, multi-language" },
  { name: "google", descJa: "Google Cloud TTS", descEn: "Google Cloud TTS" },
  { name: "elevenlabs", descJa: "高品質音声、感情表現", descEn: "High quality, emotional expression" },
  { name: "nijivoice", descJa: "日本語特化", descEn: "Japanese specialized" },
];

const advancedFeatures = [
  {
    titleJa: "音声スピルオーバー",
    titleEn: "Audio Spillover",
    descJa: "1つの音声を複数Beatで共有。ミュージックビデオに最適。",
    descEn: "Share one audio across multiple beats. Perfect for music videos.",
  },
  {
    titleJa: "トランジション",
    titleEn: "Transitions",
    descJa: "Beat間の画面切り替え効果（17種類）",
    descEn: "Screen transition effects between beats (17 types)",
  },
  {
    titleJa: "リップシンク",
    titleEn: "Lip Sync",
    descJa: "音声に合わせた口パク動画生成",
    descEn: "Generate lip-sync videos matching audio",
  },
  {
    titleJa: "字幕",
    titleEn: "Subtitles",
    descJa: "動画への字幕追加、分割表示対応",
    descEn: "Add subtitles to video, split display supported",
  },
  {
    titleJa: "ビデオフィルター",
    titleEn: "Video Filters",
    descJa: "36種類の映像エフェクト",
    descEn: "36 video effects",
  },
  {
    titleJa: "BGM",
    titleEn: "BGM",
    descJa: "背景音楽の追加、カスタム音源対応",
    descEn: "Add background music, custom audio supported",
  },
];

const videosJa = [
  { category: "インストール", title: "インストールガイド (Mac版)", id: "qbxteoIwgXg" },
  { category: "インストール", title: "インストールガイド (Windows版)", id: "ar_iC7lTSjE" },
  { category: "セットアップ", title: "初回セットアップ＆動画生成マニュアル", id: "_Ofy3mlKsDg" },
  { category: "オンボーディング", title: "シリーズ 第1回", id: "vz1V36KbBi0" },
  { category: "オンボーディング", title: "シリーズ 第2回", id: "wgMYv77-uLE" },
  { category: "オンボーディング", title: "シリーズ 第3回", id: "DmNfmgmnWXU" },
  { category: "チュートリアル", title: "Part 1 - 画像・動画生成の基礎", id: "lTmyw7sh4Kw" },
  { category: "チュートリアル", title: "Part 2 - キャラクター設定", id: "aVxPPgC7byo" },
  { category: "チュートリアル", title: "Part 3 - リップシンク動画", id: "EcFzLz0SAok" },
  { category: "チュートリアル", title: "Part 4 - Gemini APIキー取得 & 課金設定", id: "sEBUBCVPWIc" },
];

const videosEn = [
  { category: "Install", title: "Installation Guide (Mac)", id: "58HkfR4WmdY" },
  { category: "Install", title: "Installation Guide (Windows)", id: "gVKAbBgpOBs" },
  { category: "Setup", title: "Onboarding & Video Generation Manual", id: "oQFsvDA_76M" },
  { category: "Onboarding", title: "Series Part 1", id: "uBRl8_Bo41o" },
  { category: "Onboarding", title: "Series Part 2", id: "7gWOt4viaSA" },
  { category: "Onboarding", title: "Series Part 3", id: "AVSu2uShFD8" },
  { category: "Tutorial", title: "Part 1 - Basics: Generating Images and Videos", id: "MDBXMO1f5k0" },
  { category: "Tutorial", title: "Part 2 - Character Setup", id: "-Am25F-5ybs" },
  { category: "Tutorial", title: "Part 3 - Creating Lip-Sync Videos", id: "n_iCK9s3Uhw" },
  { category: "Tutorial", title: "Part 4 - Gemini API Key Setup & Billing", id: "vNceRnJuCX0" },
];
</script>
