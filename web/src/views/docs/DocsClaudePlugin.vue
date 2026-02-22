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
        <h1 class="text-foreground text-3xl font-bold">{{ t("docs.claudePlugin.pageTitle") }}</h1>
        <p class="text-muted-foreground mt-2 text-lg">
          {{ t("docs.claudePlugin.pageSubtitle") }}
        </p>
        <div class="mt-3 flex gap-2">
          <Badge variant="secondary">Claude Code</Badge>
          <Badge variant="secondary">Plugin</Badge>
          <Badge variant="outline">{{ locale === "ja" ? "動画生成" : "Video Generation" }}</Badge>
        </div>
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
            <a href="#install" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "2. インストール" : "2. Installation"
            }}</a>
            <a href="#prerequisites" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "3. 必要条件" : "3. Prerequisites"
            }}</a>
            <a href="#usage" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "4. 使い方" : "4. Usage"
            }}</a>
            <a href="#workflow" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "5. ワークフロー" : "5. Workflow"
            }}</a>
            <a href="#links" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "6. リンク" : "6. Links"
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
              ? "MulmoCast Claude Pluginは、Claude Codeから直接MulmoCastの動画プレゼンテーションを作成できるプラグインです。URLやトピック、ドキュメントを入力するだけで、リサーチからスライドデザイン、動画生成まで自動で行います。"
              : "MulmoCast Claude Plugin lets you create video presentations directly from Claude Code. Just provide a URL, topic, or document, and it handles everything from research to slide design and video generation."
          }}
        </p>

        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "5フェーズの構造化プロセス" : "5-Phase Structured Process" }}
        </h3>
        <div class="space-y-3">
          <div v-for="phase in phases" :key="phase.num" class="border-border rounded-lg border p-4">
            <div class="flex items-start gap-3">
              <div class="bg-primary/10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full">
                <span class="text-primary text-sm font-bold">{{ phase.num }}</span>
              </div>
              <div>
                <h4 class="text-foreground font-medium">{{ locale === "ja" ? phase.titleJa : phase.titleEn }}</h4>
                <p class="text-muted-foreground mt-1 text-sm">{{ locale === "ja" ? phase.descJa : phase.descEn }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Installation -->
      <section id="install" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "2. インストール" : "2. Installation" }}
        </h2>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          Step 1: {{ locale === "ja" ? "マーケットプレイスを追加" : "Add marketplace" }}
        </h3>
        <div class="bg-muted mb-6 rounded-lg p-3">
          <code class="text-sm">claude plugin marketplace add receptron/mulmocast-claude-plugin</code>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          Step 2: {{ locale === "ja" ? "プラグインをインストール" : "Install plugin" }}
        </h3>
        <div class="bg-muted mb-6 rounded-lg p-3">
          <code class="text-sm">claude plugin install mulmocast@mulmocast-plugins</code>
        </div>

        <div class="bg-muted/50 border-border rounded-lg border p-4">
          <h4 class="text-foreground mb-2 font-medium">
            {{ locale === "ja" ? "ローカル開発（代替）" : "Local development (alternative)" }}
          </h4>
          <div class="bg-muted rounded-lg p-3">
            <code class="text-sm">claude --plugin-dir /path/to/mulmocast-claude-plugin</code>
          </div>
        </div>
      </section>

      <!-- Prerequisites -->
      <section id="prerequisites" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "3. 必要条件" : "3. Prerequisites" }}
        </h2>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "必須" : "Required" }}
        </h3>
        <div class="mb-6 space-y-3">
          <div v-for="req in requiredDeps" :key="req.name" class="border-border rounded-lg border p-4">
            <div class="flex items-center gap-2">
              <code class="text-primary font-medium">{{ req.name }}</code>
            </div>
            <p class="text-muted-foreground mt-1 text-sm">{{ locale === "ja" ? req.descJa : req.descEn }}</p>
            <div v-if="req.install" class="bg-muted mt-2 rounded p-2">
              <code class="text-xs">{{ req.install }}</code>
            </div>
          </div>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "オプション" : "Optional" }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "環境変数" : "Env variable" }}
                </th>
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "用途" : "Purpose" }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="env in optionalEnvVars" :key="env.name">
                <td class="border-border border px-4 py-2">
                  <code>{{ env.name }}</code>
                </td>
                <td class="border-border border px-4 py-2">{{ locale === "ja" ? env.descJa : env.descEn }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-muted-foreground mt-3 text-sm">
          {{
            locale === "ja"
              ? "プロジェクトルートの .env ファイルに設定してください。"
              : "Set these in a .env file in your project root."
          }}
        </p>
      </section>

      <!-- Usage -->
      <section id="usage" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "4. 使い方" : "4. Usage" }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "Claude Codeで /mulmocast:story コマンドを使います。"
              : "Use the /mulmocast:story command in Claude Code."
          }}
        </p>

        <div class="space-y-4">
          <div v-for="example in usageExamples" :key="example.titleEn" class="border-border rounded-lg border p-4">
            <h3 class="text-foreground mb-2 font-medium">{{ locale === "ja" ? example.titleJa : example.titleEn }}</h3>
            <div class="bg-muted rounded-lg p-3">
              <code class="text-sm">{{ example.command }}</code>
            </div>
            <p class="text-muted-foreground mt-2 text-sm">{{ locale === "ja" ? example.descJa : example.descEn }}</p>
          </div>
        </div>
      </section>

      <!-- Workflow -->
      <section id="workflow" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "5. ワークフロー" : "5. Workflow" }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "プラグインは対話的なプロセスで進行します。各フェーズでユーザーの承認を得てから次に進みます。"
              : "The plugin follows an interactive process, seeking user approval at each phase before proceeding."
          }}
        </p>

        <div class="space-y-3">
          <div v-for="(step, index) in workflowSteps" :key="index" class="flex items-start gap-3">
            <div class="bg-primary flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full">
              <span class="text-xs font-bold text-white">{{ index + 1 }}</span>
            </div>
            <div>
              <p class="text-foreground font-medium">{{ locale === "ja" ? step.titleJa : step.titleEn }}</p>
              <p class="text-muted-foreground text-sm">{{ locale === "ja" ? step.descJa : step.descEn }}</p>
            </div>
          </div>
        </div>

        <div class="bg-muted mt-6 rounded-lg p-4">
          <p class="text-muted-foreground text-sm">
            <strong>{{ locale === "ja" ? "出力: " : "Output: " }}</strong>
            <code>output/video/&lt;basename&gt;.mp4</code>
          </p>
        </div>
      </section>

      <!-- Links -->
      <section id="links" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "6. リンク" : "6. Links" }}
        </h2>

        <div class="space-y-3">
          <a
            href="https://github.com/receptron/mulmocast-claude-plugin"
            target="_blank"
            rel="noopener noreferrer"
            class="border-border hover:bg-muted flex items-center justify-between rounded-lg border p-4 transition-colors"
          >
            <div class="flex items-center gap-3">
              <Github class="h-5 w-5" />
              <span>GitHub - mulmocast-claude-plugin</span>
            </div>
            <ExternalLink class="h-4 w-4" />
          </a>
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
            href="https://claude.com/claude-code"
            target="_blank"
            rel="noopener noreferrer"
            class="border-border hover:bg-muted flex items-center justify-between rounded-lg border p-4 transition-colors"
          >
            <div class="flex items-center gap-3">
              <ExternalLink class="h-5 w-5" />
              <span>Claude Code</span>
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
import { Badge } from "../../components/ui/badge";
import Navigation from "../../components/Navigation.vue";
import { useLocalizedUrl } from "../../i18n/utils";
import { ChevronLeft, ExternalLink, Github } from "lucide-vue-next";

const { t, locale } = useI18n();
const localizedUrl = useLocalizedUrl();

const phases = [
  {
    num: 1,
    titleJa: "Research",
    titleEn: "Research",
    descJa: "URLの取得、トピックの検索、ビジュアル素材の収集",
    descEn: "Fetch URLs, search topics, collect visual assets",
  },
  {
    num: 2,
    titleJa: "Structure",
    titleEn: "Structure",
    descJa: "適切なスケールでビート構成を設計",
    descEn: "Design beat outline with appropriate scale",
  },
  {
    num: 3,
    titleJa: "Narration",
    titleEn: "Narration",
    descJa: "魅力的な話し言葉のナレーションを作成",
    descEn: "Write compelling spoken narration",
  },
  {
    num: 4,
    titleJa: "Visual Design",
    titleEn: "Visual Design",
    descJa: "Slide DSL（11レイアウト、12コンテンツブロック）でスライド作成",
    descEn: "Create slide layouts with the Slide DSL (11 layouts, 12 content block types)",
  },
  {
    num: 5,
    titleJa: "Assembly",
    titleEn: "Assembly",
    descJa: "MulmoScript JSONに組み立てて動画を生成",
    descEn: "Combine into MulmoScript JSON and generate movie",
  },
];

const requiredDeps = [
  {
    name: "Node.js 22+",
    descJa: "ランタイム",
    descEn: "Runtime",
    install: "",
  },
  {
    name: "ffmpeg",
    descJa: "動画・音声の結合に使用",
    descEn: "For video/audio assembly",
    install: "brew install ffmpeg   # macOS",
  },
  {
    name: "OPENAI_API_KEY",
    descJa: "テキスト読み上げ（デフォルトTTSプロバイダー）",
    descEn: "Text-to-speech (default TTS provider)",
    install: "",
  },
];

const optionalEnvVars = [
  { name: "GEMINI_API_KEY", descJa: "Google Gemini画像生成・TTS", descEn: "Google Gemini image generation & TTS" },
  { name: "REPLICATE_API_TOKEN", descJa: "Replicate動画生成", descEn: "Replicate video generation" },
  { name: "ELEVENLABS_API_KEY", descJa: "ElevenLabs TTS", descEn: "ElevenLabs TTS" },
];

const usageExamples = [
  {
    titleJa: "URLから動画を作成",
    titleEn: "Create video from URL",
    command: "/mulmocast:story https://example.com/article 日本語でmovie",
    descJa:
      "記事を取得し、キーインサイトを抽出して、プロフェッショナルなスライドレイアウトでナレーション付きプレゼンテーション動画を生成します。",
    descEn:
      "Fetches the article, extracts key insights, and produces a narrated video presentation with professional slide layouts.",
  },
  {
    titleJa: "トピックから動画を作成",
    titleEn: "Create video from topic",
    command: "/mulmocast:story AI trends in 2026, 5 slides, English",
    descJa: "Web検索でトピックをリサーチし、チャートやメトリクスを含むデータリッチなスライドで動画を生成します。",
    descEn:
      "Researches the topic via web search, designs data-rich slides with charts and metrics, and generates a complete video.",
  },
  {
    titleJa: "PDFから動画を作成",
    titleEn: "Create video from PDF",
    command: "/mulmocast:story path/to/quarterly-report.pdf",
    descJa:
      "ドキュメントを読み込み、主要な発見やデータポイントを特定し、テーブルや統計を含むスライドで動画にまとめます。",
    descEn:
      "Reads the document, identifies key findings and data points, and assembles slides with tables and statistics.",
  },
];

const workflowSteps = [
  {
    titleJa: "トピックブリーフの確認",
    titleEn: "Review Topic Brief",
    descJa: "テーマ、ターゲット、キーインサイトの概要を提示",
    descEn: "Presents theme, target audience, and key insights overview",
  },
  {
    titleJa: "ビート構成の確認",
    titleEn: "Review Beat Outline",
    descJa: "各スライドの構成と流れを確認",
    descEn: "Review structure and flow of each slide",
  },
  {
    titleJa: "ナレーションの確認",
    titleEn: "Review Narrations",
    descJa: "各ビートの話し言葉ナレーションを確認",
    descEn: "Review spoken narration for each beat",
  },
  {
    titleJa: "ビジュアルデザインの確認",
    titleEn: "Review Visual Design",
    descJa: "スライドレイアウトとコンテンツブロックの設計を確認",
    descEn: "Review slide layouts and content block designs",
  },
  {
    titleJa: "動画生成",
    titleEn: "Generate Video",
    descJa: "MulmoScript JSONを組み立て、MP4動画を出力",
    descEn: "Assemble MulmoScript JSON and output MP4 video",
  },
];
</script>
