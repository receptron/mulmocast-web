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
        <h1 class="text-foreground text-3xl font-bold">MulmoCast Plus</h1>
        <p class="text-muted-foreground mt-2 text-lg">
          {{
            locale === "ja"
              ? "MulmoCast CLIの拡張パッケージ群。簡単インストール版とスクリプト前処理ツール。"
              : "Extension packages for MulmoCast CLI. Easy installer and script preprocessor."
          }}
        </p>
        <div class="mt-3 flex gap-2">
          <Badge variant="secondary">mulmocast-easy</Badge>
          <Badge variant="secondary">mulmocast-preprocessor</Badge>
        </div>
      </div>

      <!-- Table of Contents -->
      <Card class="mb-8">
        <CardHeader>
          <CardTitle class="text-base">{{ locale === "ja" ? "目次" : "Contents" }}</CardTitle>
        </CardHeader>
        <CardContent>
          <nav class="space-y-1">
            <a href="#easy" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "1. MulmoCast Easy - 簡単インストール版" : "1. MulmoCast Easy - Zero-Config Install"
            }}</a>
            <a href="#preprocessor" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja"
                ? "2. MulmoCast Preprocessor - バリエーション生成 & AI拡張"
                : "2. MulmoCast Preprocessor - Variations & AI Extension"
            }}</a>
            <a href="#workflow" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "3. 活用ワークフロー" : "3. Usage Workflow"
            }}</a>
          </nav>
        </CardContent>
      </Card>

      <!-- Overview -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">{{ locale === "ja" ? "概要" : "Overview" }}</h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "MulmoCast Plusは、MulmoCast CLIを拡張する2つのnpmパッケージで構成されています。"
              : "MulmoCast Plus consists of two npm packages that extend MulmoCast CLI."
          }}
        </p>
        <div class="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle class="text-base">mulmocast-easy</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground text-sm">
                {{
                  locale === "ja"
                    ? "ffmpegを同梱した簡単インストール版。別途インストール不要でMulmoCastが使えます。"
                    : "Bundled with ffmpeg for zero-config installation. Use MulmoCast without installing anything extra."
                }}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle class="text-base">mulmocast-preprocessor</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground text-sm">
                {{
                  locale === "ja"
                    ? "1つのスクリプトから複数バリエーションを生成。AI要約・質問応答も可能。"
                    : "Generate multiple variations from one script. Includes AI summarization and Q&A."
                }}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <!-- MulmoCast Easy -->
      <section id="easy" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">
          {{ locale === "ja" ? "1. MulmoCast Easy" : "1. MulmoCast Easy" }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "ffmpegやChromeを別途インストールする必要がありません。すべてバンドル済みです。"
              : "No need to install ffmpeg or Chrome separately. Everything is bundled!"
          }}
        </p>

        <!-- Install -->
        <h3 class="text-foreground mb-3 text-lg font-semibold">
          {{ locale === "ja" ? "インストール" : "Installation" }}
        </h3>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>npm install -g mulmocast-easy</code></pre>
        </div>

        <!-- Quick Start -->
        <h3 class="text-foreground mb-3 text-lg font-semibold">
          {{ locale === "ja" ? "クイックスタート" : "Quick Start" }}
        </h3>
        <p class="text-muted-foreground mb-3">
          {{
            locale === "ja"
              ? "1. スクリプトファイル（hello.json）を作成します："
              : "1. Create a script file (hello.json):"
          }}
        </p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "$mulmocast": { "version": "1.1" },
  "lang": "{{ locale === "ja" ? "ja" : "en" }}",
  "title": "{{ locale === "ja" ? "はじめてのプレゼン" : "My First Presentation" }}",
  "speechParams": {
    "speakers": {
      "Host": {
        "voiceId": "shimmer",
        "displayName": { "{{ locale }}": "{{ locale === "ja" ? "ホスト" : "Host" }}" }
      }
    }
  },
  "beats": [
    {
      "speaker": "Host",
      "text": "",
      "duration": 3,
      "image": {
        "type": "textSlide",
        "slide": {
          "title": "{{ locale === "ja" ? "ようこそ！" : "Welcome!" }}",
          "subtitle": "{{ locale === "ja" ? "はじめてのMulmoCast動画" : "My First MulmoCast Video" }}"
        }
      }
    },
    {
      "speaker": "Host",
      "text": "",
      "duration": 3,
      "image": {
        "type": "textSlide",
        "slide": {
          "title": "{{ locale === "ja" ? "特徴" : "Features" }}",
          "bullets": [
            "{{ locale === "ja" ? "簡単に使える" : "Easy to use" }}",
            "{{ locale === "ja" ? "コーディング不要" : "No coding required" }}",
            "{{ locale === "ja" ? "プロ品質の出力" : "Professional output" }}"
          ]
        }
      }
    }
  ]
}</code></pre>
        </div>

        <p class="text-muted-foreground mb-3">
          {{ locale === "ja" ? "2. 動画を生成：" : "2. Generate video:" }}
        </p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>mulmocast-easy movie hello.json</code></pre>
        </div>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "動画は output/movie/hello.mp4 に作成されます。"
              : "Your video will be created at output/movie/hello.mp4."
          }}
        </p>

        <!-- AI Voice -->
        <h3 class="text-foreground mb-3 text-lg font-semibold">
          {{ locale === "ja" ? "AI音声を追加" : "Adding AI Voice" }}
        </h3>
        <p class="text-muted-foreground mb-3">
          {{
            locale === "ja"
              ? "AIナレーション付きの動画を生成するには、OpenAI APIキーを設定します："
              : "To generate videos with AI narration, set up your OpenAI API key:"
          }}
        </p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>export OPENAI_API_KEY=your-api-key-here</code></pre>
        </div>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "そしてスクリプトのbeatsにtextを追加すれば、音声が自動生成されます。"
              : "Then add text to your script's beats, and audio will be generated automatically."
          }}
        </p>

        <!-- All Commands -->
        <h3 class="text-foreground mb-3 text-lg font-semibold">
          {{ locale === "ja" ? "利用可能なコマンド" : "Available Commands" }}
        </h3>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre
            class="text-sm"
          ><code>mulmocast-easy movie hello.json   # {{ locale === "ja" ? "動画生成" : "Generate video" }}
mulmocast-easy pdf hello.json     # {{ locale === "ja" ? "PDF生成" : "Generate PDF" }}
mulmocast-easy images hello.json  # {{ locale === "ja" ? "画像のみ生成" : "Generate images only" }}
mulmocast-easy audio hello.json   # {{ locale === "ja" ? "音声のみ生成" : "Generate audio only" }}
mulmocast-easy --help             # {{ locale === "ja" ? "ヘルプ表示" : "Show help" }}</code></pre>
        </div>

        <div
          class="rounded border border-blue-200 bg-blue-50 p-3 text-sm text-blue-800 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-200"
        >
          <strong>{{ locale === "ja" ? "ポイント：" : "Key point:" }}</strong>
          {{
            locale === "ja"
              ? "mulmocast-easyは通常のmulmocastと完全に同じコマンドが使えます。違いはffmpegが同梱されていることだけです。"
              : "mulmocast-easy supports all the same commands as regular mulmocast. The only difference is that ffmpeg is bundled."
          }}
        </div>
      </section>

      <!-- MulmoCast Preprocessor -->
      <section id="preprocessor" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">
          {{ locale === "ja" ? "2. MulmoCast Preprocessor" : "2. MulmoCast Preprocessor" }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "1つのMulmoScriptから複数のバリエーション（フル版、要約版、ティーザー版など）を生成し、メタデータを使ったAI質問応答も可能な前処理ツールです。"
              : "A preprocessor that generates multiple variations (full, summary, teaser, etc.) from a single MulmoScript, with AI-powered Q&A using metadata."
          }}
        </p>

        <!-- Install -->
        <h3 class="text-foreground mb-3 text-lg font-semibold">
          {{ locale === "ja" ? "インストール" : "Installation" }}
        </h3>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>npm install -g mulmocast-preprocessor</code></pre>
        </div>

        <!-- Profile-based Variants -->
        <h3 class="text-foreground mb-3 text-lg font-semibold">
          {{ locale === "ja" ? "プロファイルによるバリエーション生成" : "Profile-Based Variations" }}
        </h3>
        <p class="text-muted-foreground mb-3">
          {{
            locale === "ja"
              ? "スクリプト内の各beatにvariantsフィールドを追加することで、プロファイルごとに異なるテキストや画像を出力できます。"
              : "Add a variants field to each beat in your script to output different text or images per profile."
          }}
        </p>

        <!-- Preset Profiles -->
        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">{{
              locale === "ja" ? "プリセットプロファイル" : "Preset Profiles"
            }}</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-muted-foreground py-2 text-left font-medium">
                      {{ locale === "ja" ? "プロファイル" : "Profile" }}
                    </th>
                    <th class="text-muted-foreground py-2 text-left font-medium">
                      {{ locale === "ja" ? "説明" : "Description" }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">default</td>
                    <td class="text-muted-foreground py-2">
                      {{
                        locale === "ja"
                          ? "フル版（全beat、オリジナルテキスト）"
                          : "Full version (all beats, original text)"
                      }}
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">summary</td>
                    <td class="text-muted-foreground py-2">
                      {{
                        locale === "ja"
                          ? "要約版（テキスト置換、一部beatスキップ）"
                          : "Summary version (text overrides, some beats skipped)"
                      }}
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 font-mono text-xs">teaser</td>
                    <td class="text-muted-foreground py-2">
                      {{
                        locale === "ja"
                          ? "ティーザー版（最小限のbeat、SNS向けの短縮版）"
                          : "Teaser version (minimal beats, short version for social media)"
                      }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <!-- Script Example with Variants -->
        <h4 class="text-foreground mb-2 font-semibold">
          {{ locale === "ja" ? "スクリプト例（variantsあり）" : "Script Example (with variants)" }}
        </h4>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "beats": [
    {
      "text": "{{ locale === "ja" ? "GraphAIはエージェントワークフローエンジンです..." : "GraphAI is an agent workflow engine..." }}",
      "variants": {
        "summary": { "text": "{{ locale === "ja" ? "GraphAI: エージェントワークフローエンジン" : "GraphAI: An agent workflow engine" }}" },
        "teaser": { "skip": true }
      },
      "meta": {
        "section": "intro",
        "tags": ["concept"]
      }
    }
  ]
}</code></pre>
        </div>

        <!-- CLI Commands -->
        <h3 class="text-foreground mb-3 text-lg font-semibold">
          {{ locale === "ja" ? "CLIコマンド" : "CLI Commands" }}
        </h3>

        <!-- Process -->
        <h4 class="text-foreground mb-2 font-semibold">
          {{ locale === "ja" ? "バリエーション生成" : "Generate Variations" }}
        </h4>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code># {{ locale === "ja" ? "要約版を生成" : "Generate summary version" }}
mulmocast-preprocessor script.json --profile summary -o summary.json

# {{ locale === "ja" ? "ティーザー版を生成" : "Generate teaser version" }}
mulmocast-preprocessor script.json --profile teaser -o teaser.json

# {{ locale === "ja" ? "セクションで絞り込み" : "Filter by section" }}
mulmocast-preprocessor script.json --section chapter1

# {{ locale === "ja" ? "タグで絞り込み" : "Filter by tags" }}
mulmocast-preprocessor script.json --tags concept,demo

# {{ locale === "ja" ? "プロファイル一覧を表示" : "List available profiles" }}
mulmocast-preprocessor profiles script.json</code></pre>
        </div>

        <!-- Summarize -->
        <h4 class="text-foreground mb-2 font-semibold">
          {{ locale === "ja" ? "AI要約" : "AI Summarization" }}
        </h4>
        <p class="text-muted-foreground mb-3">
          {{
            locale === "ja"
              ? "LLMを使ってスクリプト内容の要約を自動生成します。OpenAI、Anthropic、Groq、Geminiに対応。"
              : "Auto-generate summaries of script content using LLM. Supports OpenAI, Anthropic, Groq, and Gemini."
          }}
        </p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code># {{ locale === "ja" ? "基本的な要約" : "Basic summary" }}
mulmocast-preprocessor summarize script.json

# {{ locale === "ja" ? "Markdown形式で出力" : "Output in Markdown" }}
mulmocast-preprocessor summarize script.json --format markdown

# {{ locale === "ja" ? "日本語で出力" : "Output in Japanese" }}
mulmocast-preprocessor summarize script.json -l ja

# {{ locale === "ja" ? "URLから直接読み込み" : "Load directly from URL" }}
mulmocast-preprocessor summarize https://example.com/script.json

# {{ locale === "ja" ? "プロバイダーを指定" : "Specify provider" }}
mulmocast-preprocessor summarize script.json --provider anthropic</code></pre>
        </div>

        <!-- Query -->
        <h4 class="text-foreground mb-2 font-semibold">
          {{ locale === "ja" ? "AI質問応答" : "AI Q&A" }}
        </h4>
        <p class="text-muted-foreground mb-3">
          {{
            locale === "ja"
              ? "スクリプトの内容について自然言語で質問できます。対話モードも利用可能。"
              : "Ask questions about script content in natural language. Interactive mode available."
          }}
        </p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code># {{ locale === "ja" ? "質問する" : "Ask a question" }}
mulmocast-preprocessor query script.json "{{ locale === "ja" ? "このプレゼンの主題は？" : "What is the main topic?" }}"

# {{ locale === "ja" ? "対話モード" : "Interactive mode" }}
mulmocast-preprocessor query script.json -i</code></pre>
        </div>

        <!-- Environment Variables -->
        <h3 class="text-foreground mb-3 text-lg font-semibold">
          {{ locale === "ja" ? "環境変数" : "Environment Variables" }}
        </h3>
        <Card class="mb-4">
          <CardContent class="pt-4">
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-muted-foreground py-2 text-left font-medium">
                      {{ locale === "ja" ? "変数名" : "Variable" }}
                    </th>
                    <th class="text-muted-foreground py-2 text-left font-medium">
                      {{ locale === "ja" ? "プロバイダー" : "Provider" }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">OPENAI_API_KEY</td>
                    <td class="text-muted-foreground py-2">OpenAI</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">ANTHROPIC_API_KEY</td>
                    <td class="text-muted-foreground py-2">Anthropic</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">GROQ_API_KEY</td>
                    <td class="text-muted-foreground py-2">Groq</td>
                  </tr>
                  <tr>
                    <td class="py-2 font-mono text-xs">GEMINI_API_KEY</td>
                    <td class="text-muted-foreground py-2">Google Gemini</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <!-- Beat Metadata -->
        <h3 class="text-foreground mb-3 text-lg font-semibold">
          {{ locale === "ja" ? "Beatメタデータ" : "Beat Metadata" }}
        </h3>
        <p class="text-muted-foreground mb-3">
          {{
            locale === "ja"
              ? "各beatにmetaフィールドを追加して、フィルタリングやAI処理の精度を高められます。"
              : "Add a meta field to each beat to improve filtering and AI processing accuracy."
          }}
        </p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "meta": {
    "tags": ["concept", "important"],    // {{ locale === "ja" ? "タグ（フィルタリング用）" : "Tags (for filtering)" }}
    "section": "introduction",           // {{ locale === "ja" ? "セクション名" : "Section name" }}
    "context": "{{ locale === "ja" ? "このbeatの背景情報" : "Background info for this beat" }}",
    "keywords": ["AI", "workflow"],      // {{ locale === "ja" ? "検索キーワード" : "Search keywords" }}
    "expectedQuestions": [               // {{ locale === "ja" ? "想定される質問" : "Expected questions" }}
      "{{ locale === "ja" ? "エージェントとは何ですか？" : "What is an agent?" }}"
    ]
  }
}</code></pre>
        </div>
      </section>

      <!-- Workflow -->
      <section id="workflow" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">
          {{ locale === "ja" ? "3. 活用ワークフロー" : "3. Usage Workflow" }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "1つのスクリプトから複数の動画を効率的に作成するワークフロー例です。"
              : "Example workflow for efficiently creating multiple videos from one script."
          }}
        </p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre
            class="text-sm"
          ><code># {{ locale === "ja" ? "1. フル版の動画を作成（10分）" : "1. Create full version video (10 min)" }}
mulmocast-easy movie presentation.json

# {{ locale === "ja" ? "2. 要約版を生成（3分）" : "2. Generate summary version (3 min)" }}
mulmocast-preprocessor presentation.json --profile summary -o summary.json
mulmocast-easy movie summary.json

# {{ locale === "ja" ? "3. SNS用ティーザーを生成（30秒）" : "3. Generate social media teaser (30 sec)" }}
mulmocast-preprocessor presentation.json --profile teaser -o teaser.json
mulmocast-easy movie teaser.json

# {{ locale === "ja" ? "4. 内容についてAIに質問" : "4. Ask AI about the content" }}
mulmocast-preprocessor query presentation.json "{{ locale === "ja" ? "主要なポイントは？" : "What are the key points?" }}"

# {{ locale === "ja" ? "5. 自動要約を生成" : "5. Generate auto-summary" }}
mulmocast-preprocessor summarize presentation.json -l {{ locale }}</code></pre>
        </div>
      </section>

      <!-- Links -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">{{ locale === "ja" ? "リンク" : "Links" }}</h2>
        <div class="space-y-2">
          <a
            href="https://github.com/receptron/mulmocast-plus"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary hover:underline"
          >
            GitHub: receptron/mulmocast-plus
          </a>
          <div class="flex gap-4">
            <a
              href="https://www.npmjs.com/package/mulmocast-easy"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary hover:underline"
            >
              npm: mulmocast-easy
            </a>
            <a
              href="https://www.npmjs.com/package/mulmocast-preprocessor"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary hover:underline"
            >
              npm: mulmocast-preprocessor
            </a>
          </div>
        </div>
      </section>

      <!-- Back Button -->
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
import Navigation from "../../components/Navigation.vue";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { useLocalizedUrl } from "../../i18n/utils";
import { ChevronLeft } from "lucide-vue-next";

const { t, locale } = useI18n();
const localizedUrl = useLocalizedUrl();
</script>
