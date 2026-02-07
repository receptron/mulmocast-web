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
        <h1 class="text-foreground text-3xl font-bold">MulmoCast Easy</h1>
        <p class="text-muted-foreground mt-2 text-lg">
          {{ t("docs.easy.pageSubtitle") }}
        </p>
        <div class="mt-3 flex gap-2">
          <Badge variant="secondary">mulmocast-easy</Badge>
          <Badge variant="outline">npm</Badge>
        </div>
      </div>

      <!-- Overview -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">{{ t("docs.easy.overview.title") }}</h2>
        <p class="text-muted-foreground mb-4">
          {{ t("docs.easy.overview.description") }}
        </p>
      </section>

      <!-- Installation -->
      <section id="install" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">
          {{ t("docs.easy.install") }}
        </h2>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>npm install -g mulmocast-easy</code></pre>
        </div>
      </section>

      <!-- Quick Start -->
      <section id="quickstart" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">
          {{ t("docs.easy.quickstart") }}
        </h2>
        <p class="text-muted-foreground mb-3">
          {{ t("docs.easy.step1") }}
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
          {{ t("docs.easy.step2") }}
        </p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>mulmocast-easy movie hello.json</code></pre>
        </div>
        <p class="text-muted-foreground mb-4">
          {{ t("docs.easy.outputPath") }}
        </p>
      </section>

      <!-- AI Voice -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">
          {{ t("docs.easy.aiVoice") }}
        </h2>
        <p class="text-muted-foreground mb-3">
          {{ t("docs.easy.aiVoiceDesc") }}
        </p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>export OPENAI_API_KEY=your-api-key-here</code></pre>
        </div>
        <p class="text-muted-foreground mb-4">
          {{ t("docs.easy.aiVoiceNote") }}
        </p>
      </section>

      <!-- Available Commands -->
      <section id="commands" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">
          {{ t("docs.easy.commands") }}
        </h2>
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
          <strong>{{ t("docs.easy.keyPointLabel") }}</strong>
          {{ t("docs.easy.keyPoint") }}
        </div>
      </section>

      <!-- Links -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">{{ t("docs.easy.links") }}</h2>
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
            href="https://www.npmjs.com/package/mulmocast-easy"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary block hover:underline"
          >
            npm: mulmocast-easy
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
import { useLocalizedUrl } from "../../i18n/utils";
import { ChevronLeft } from "lucide-vue-next";

const { t, locale } = useI18n();
const localizedUrl = useLocalizedUrl();
</script>
