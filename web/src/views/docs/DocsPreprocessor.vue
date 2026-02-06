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
        <h1 class="text-foreground text-3xl font-bold">MulmoCast Preprocessor</h1>
        <p class="text-muted-foreground mt-2 text-lg">
          {{ t("docs.preprocessor.pageSubtitle") }}
        </p>
        <div class="mt-3 flex gap-2">
          <Badge variant="secondary">mulmocast-preprocessor</Badge>
          <Badge variant="outline">npm</Badge>
        </div>
      </div>

      <!-- Table of Contents -->
      <Card class="mb-8">
        <CardHeader>
          <CardTitle class="text-base">{{ t("docs.preprocessor.toc.title") }}</CardTitle>
        </CardHeader>
        <CardContent>
          <nav class="space-y-1">
            <a href="#profiles" class="text-muted-foreground hover:text-primary block text-sm">{{
              t("docs.preprocessor.toc.profiles")
            }}</a>
            <a href="#cli" class="text-muted-foreground hover:text-primary block text-sm">{{
              t("docs.preprocessor.toc.cli")
            }}</a>
            <a href="#ai" class="text-muted-foreground hover:text-primary block text-sm">{{
              t("docs.preprocessor.toc.ai")
            }}</a>
            <a href="#metadata" class="text-muted-foreground hover:text-primary block text-sm">{{
              t("docs.preprocessor.toc.metadata")
            }}</a>
            <a href="#workflow" class="text-muted-foreground hover:text-primary block text-sm">{{
              t("docs.preprocessor.toc.workflow")
            }}</a>
          </nav>
        </CardContent>
      </Card>

      <!-- Overview -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">{{ t("docs.preprocessor.overview.title") }}</h2>
        <p class="text-muted-foreground mb-4">
          {{ t("docs.preprocessor.overview.description") }}
        </p>
      </section>

      <!-- Installation -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">
          {{ t("docs.preprocessor.install") }}
        </h2>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>npm install -g mulmocast-preprocessor</code></pre>
        </div>
      </section>

      <!-- Profile-based Variants -->
      <section id="profiles" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">
          {{ t("docs.preprocessor.profileTitle") }}
        </h2>
        <p class="text-muted-foreground mb-3">
          {{ t("docs.preprocessor.profileDesc") }}
        </p>

        <!-- Preset Profiles -->
        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">{{ t("docs.preprocessor.presetTitle") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-muted-foreground py-2 text-left font-medium">
                      {{ t("docs.preprocessor.profileHeader") }}
                    </th>
                    <th class="text-muted-foreground py-2 text-left font-medium">
                      {{ t("docs.preprocessor.descriptionHeader") }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">default</td>
                    <td class="text-muted-foreground py-2">
                      {{ t("docs.preprocessor.defaultDesc") }}
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">summary</td>
                    <td class="text-muted-foreground py-2">
                      {{ t("docs.preprocessor.summaryDesc") }}
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 font-mono text-xs">teaser</td>
                    <td class="text-muted-foreground py-2">
                      {{ t("docs.preprocessor.teaserDesc") }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <!-- Script Example with Variants -->
        <h3 class="text-foreground mb-2 font-semibold">
          {{ t("docs.preprocessor.scriptExample") }}
        </h3>
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
      </section>

      <!-- CLI Commands -->
      <section id="cli" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">
          {{ t("docs.preprocessor.cliCommands") }}
        </h2>

        <!-- Process -->
        <h3 class="text-foreground mb-2 font-semibold">
          {{ t("docs.preprocessor.generateVariations") }}
        </h3>
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
      </section>

      <!-- AI Features -->
      <section id="ai" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">
          {{ t("docs.preprocessor.aiFeatures") }}
        </h2>

        <!-- Summarize -->
        <h3 class="text-foreground mb-2 font-semibold">
          {{ t("docs.preprocessor.aiSummarize") }}
        </h3>
        <p class="text-muted-foreground mb-3">
          {{ t("docs.preprocessor.aiSummarizeDesc") }}
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
        <h3 class="text-foreground mb-2 font-semibold">
          {{ t("docs.preprocessor.aiQA") }}
        </h3>
        <p class="text-muted-foreground mb-3">
          {{ t("docs.preprocessor.aiQADesc") }}
        </p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code># {{ locale === "ja" ? "質問する" : "Ask a question" }}
mulmocast-preprocessor query script.json "{{ locale === "ja" ? "このプレゼンの主題は？" : "What is the main topic?" }}"

# {{ locale === "ja" ? "対話モード" : "Interactive mode" }}
mulmocast-preprocessor query script.json -i</code></pre>
        </div>

        <!-- Environment Variables -->
        <h3 class="text-foreground mb-3 text-lg font-semibold">
          {{ t("docs.preprocessor.envVars") }}
        </h3>
        <Card class="mb-4">
          <CardContent class="pt-4">
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-muted-foreground py-2 text-left font-medium">
                      {{ t("docs.preprocessor.variableHeader") }}
                    </th>
                    <th class="text-muted-foreground py-2 text-left font-medium">
                      {{ t("docs.preprocessor.providerHeader") }}
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
      </section>

      <!-- Beat Metadata -->
      <section id="metadata" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">
          {{ t("docs.preprocessor.beatMeta") }}
        </h2>
        <p class="text-muted-foreground mb-3">
          {{ t("docs.preprocessor.beatMetaDesc") }}
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
          {{ t("docs.preprocessor.workflow.title") }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{ t("docs.preprocessor.workflow.description") }}
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
        <h2 class="text-foreground mb-4 text-2xl font-bold">{{ t("docs.preprocessor.links") }}</h2>
        <div class="space-y-2">
          <a
            href="https://github.com/receptron/mulmocast-plus"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary block hover:underline"
          >
            GitHub: receptron/mulmocast-plus
          </a>
          <a
            href="https://www.npmjs.com/package/mulmocast-preprocessor"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary block hover:underline"
          >
            npm: mulmocast-preprocessor
          </a>
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
