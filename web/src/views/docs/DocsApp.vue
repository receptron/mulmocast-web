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
        <h1 class="text-foreground text-3xl font-bold">MulmoCast App</h1>
        <p class="text-muted-foreground mt-2 text-lg">
          {{ t("docs.app.pageSubtitle") }}
        </p>
        <div class="mt-3 flex gap-2">
          <Badge variant="secondary">macOS</Badge>
          <Badge variant="secondary">Windows</Badge>
        </div>
      </div>

      <!-- Table of Contents -->
      <Card class="mb-8">
        <CardHeader>
          <CardTitle class="text-base">{{ locale === "ja" ? "目次" : "Contents" }}</CardTitle>
        </CardHeader>
        <CardContent>
          <nav class="space-y-1">
            <a href="#download" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "1. ダウンロード" : "1. Download"
            }}</a>
            <a href="#setup" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "2. 初期設定" : "2. Initial Setup"
            }}</a>
            <a href="#usage" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "3. 使い方" : "3. Usage"
            }}</a>
            <a href="#settings" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "4. 設定" : "4. Settings"
            }}</a>
            <a href="#videos" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "5. チュートリアル動画" : "5. Tutorial Videos"
            }}</a>
            <a href="#links" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "6. 関連リンク" : "6. Related Links"
            }}</a>
          </nav>
        </CardContent>
      </Card>

      <!-- Download -->
      <section id="download" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "1. ダウンロード" : "1. Download" }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "GitHub Actionsから最新版をダウンロードできます。"
              : "Download the latest version from GitHub Actions."
          }}
        </p>

        <div class="grid gap-4 md:grid-cols-2">
          <a
            href="https://github.com/receptron/mulmocast-app/actions/workflows/ci-mac.yml"
            target="_blank"
            rel="noopener noreferrer"
            class="border-border hover:bg-muted flex items-center justify-between rounded-lg border p-4 transition-colors"
          >
            <div class="flex items-center gap-3">
              <Apple class="h-6 w-6" />
              <div>
                <p class="font-medium">macOS</p>
                <p class="text-muted-foreground text-sm">Apple Silicon / Intel</p>
              </div>
            </div>
            <ExternalLink class="h-4 w-4" />
          </a>
          <a
            href="https://github.com/receptron/mulmocast-app/actions/workflows/ci-ms.yml"
            target="_blank"
            rel="noopener noreferrer"
            class="border-border hover:bg-muted flex items-center justify-between rounded-lg border p-4 transition-colors"
          >
            <div class="flex items-center gap-3">
              <Monitor class="h-6 w-6" />
              <div>
                <p class="font-medium">Windows</p>
                <p class="text-muted-foreground text-sm">64-bit</p>
              </div>
            </div>
            <ExternalLink class="h-4 w-4" />
          </a>
        </div>

        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "ダウンロード手順" : "Download Steps" }}
        </h3>
        <ol class="text-muted-foreground list-inside list-decimal space-y-2">
          <li>
            {{
              locale === "ja"
                ? "GitHub Actionsページで最新の成功ワークフローをクリック"
                : "Click the latest successful workflow on GitHub Actions page"
            }}
          </li>
          <li>
            {{ locale === "ja" ? "「Artifacts」セクションからダウンロード" : "Download from the 'Artifacts' section" }}
          </li>
          <li>
            {{
              locale === "ja"
                ? "ZIPを解凍し、アプリケーションフォルダへ移動"
                : "Extract ZIP and move to Applications folder"
            }}
          </li>
          <li>{{ locale === "ja" ? "初回起動時の警告で「開く」を選択" : "Select 'Open' on first launch warning" }}</li>
        </ol>
      </section>

      <!-- Setup -->
      <section id="setup" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "2. 初期設定（オンボーディング）" : "2. Initial Setup (Onboarding)" }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "アプリを起動すると、オンボーディングが始まります。"
              : "When you launch the app, onboarding will start."
          }}
        </p>

        <div class="space-y-4">
          <div class="border-border rounded-lg border p-4">
            <h3 class="text-foreground mb-2 font-medium">
              Step 1: {{ locale === "ja" ? "表示言語" : "Display Language" }}
            </h3>
            <p class="text-muted-foreground text-sm">
              {{ locale === "ja" ? "日本語または英語を選択" : "Choose Japanese or English" }}
            </p>
          </div>

          <div class="border-border rounded-lg border p-4">
            <h3 class="text-foreground mb-2 font-medium">Step 2: {{ locale === "ja" ? "LLM設定" : "LLM Settings" }}</h3>
            <p class="text-muted-foreground text-sm">
              {{ locale === "ja" ? "OpenAI / Ollama などを選択" : "Choose OpenAI / Ollama, etc." }}
            </p>
          </div>

          <div class="border-border rounded-lg border p-4">
            <h3 class="text-foreground mb-2 font-medium">Step 3: {{ locale === "ja" ? "APIキー" : "API Key" }}</h3>
            <p class="text-muted-foreground text-sm">
              {{ locale === "ja" ? "選択したLLMのAPIキーを入力" : "Enter the API key for the selected LLM" }}
            </p>
          </div>
        </div>

        <div class="bg-muted mt-6 rounded-lg p-4">
          <h4 class="text-foreground mb-2 font-medium">
            {{ locale === "ja" ? "gpt-image-1モデルを使う場合" : "To use gpt-image-1 model" }}
          </h4>
          <p class="text-muted-foreground text-sm">
            {{
              locale === "ja"
                ? "OpenAIの認証が必要です。Organization Settings > Verifications で個人認証を行ってください。"
                : "OpenAI verification is required. Complete personal verification at Organization Settings > Verifications."
            }}
          </p>
          <a
            href="https://platform.openai.com/settings/organization/general"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary mt-2 inline-flex items-center text-sm hover:underline"
          >
            OpenAI Organization Settings
            <ExternalLink class="ml-1 h-3 w-3" />
          </a>
        </div>
      </section>

      <!-- Usage -->
      <section id="usage" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "3. 使い方" : "3. Usage" }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "プロジェクト編集画面は4つのエリアで構成されています。"
              : "The project editing screen consists of 4 areas."
          }}
        </p>

        <div class="space-y-4">
          <div v-for="area in editingAreas" :key="area.titleJa" class="border-border rounded-lg border p-4">
            <div class="flex items-start gap-3">
              <div class="bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                <component :is="area.icon" class="text-primary h-5 w-5" />
              </div>
              <div>
                <h3 class="text-foreground font-medium">{{ locale === "ja" ? area.titleJa : area.titleEn }}</h3>
                <p class="text-muted-foreground mt-1 text-sm">{{ locale === "ja" ? area.descJa : area.descEn }}</p>
              </div>
            </div>
          </div>
        </div>

        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "スクリプト編集タブ" : "Script Editing Tabs" }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "タブ" : "Tab" }}
                </th>
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "説明" : "Description" }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="tab in scriptTabs" :key="tab.name">
                <td class="border-border border px-4 py-2 font-medium">{{ tab.name }}</td>
                <td class="border-border border px-4 py-2">{{ locale === "ja" ? tab.descJa : tab.descEn }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Settings -->
      <section id="settings" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "4. 設定" : "4. Settings" }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "右上の設定ボタンから追加設定が可能です。"
              : "Additional settings are available from the settings button in the upper right."
          }}
        </p>

        <div class="grid gap-4 md:grid-cols-2">
          <div class="border-border rounded-lg border p-4">
            <h3 class="text-foreground mb-2 font-medium">
              {{ locale === "ja" ? "APIキー設定" : "API Key Settings" }}
            </h3>
            <p class="text-muted-foreground text-sm">
              {{
                locale === "ja"
                  ? "各種サービス（画像/動画/音声生成）のAPIキー"
                  : "API keys for various services (image/video/audio generation)"
              }}
            </p>
          </div>
          <div class="border-border rounded-lg border p-4">
            <h3 class="text-foreground mb-2 font-medium">
              {{ locale === "ja" ? "言語設定" : "Language Settings" }}
            </h3>
            <p class="text-muted-foreground text-sm">
              {{ locale === "ja" ? "スクリプト言語、翻訳先言語" : "Script language, translation target language" }}
            </p>
          </div>
        </div>
      </section>

      <!-- Videos -->
      <section id="videos" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "5. チュートリアル動画" : "5. Tutorial Videos" }}
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
          {{ locale === "ja" ? "6. 関連リンク" : "6. Related Links" }}
        </h2>

        <div class="space-y-3">
          <a
            href="https://github.com/receptron/mulmocast-app"
            target="_blank"
            rel="noopener noreferrer"
            class="border-border hover:bg-muted flex items-center justify-between rounded-lg border p-4 transition-colors"
          >
            <div class="flex items-center gap-3">
              <Github class="h-5 w-5" />
              <span>GitHub - mulmocast-app</span>
            </div>
            <ExternalLink class="h-4 w-4" />
          </a>
          <a
            href="https://discord.gg/XqmAYxm2Xf"
            target="_blank"
            rel="noopener noreferrer"
            class="border-border hover:bg-muted flex items-center justify-between rounded-lg border p-4 transition-colors"
          >
            <div class="flex items-center gap-3">
              <MessageCircle class="h-5 w-5" />
              <span>Discord Community</span>
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import Navigation from "../../components/Navigation.vue";
import { useLocalizedUrl } from "../../i18n/utils";
import {
  ChevronLeft,
  ExternalLink,
  Github,
  MessageCircle,
  Monitor,
  Apple,
  MessagesSquare,
  FileEdit,
  Settings,
  FolderOutput,
} from "lucide-vue-next";

const { t, locale } = useI18n();
const localizedUrl = useLocalizedUrl();

const editingAreas = [
  {
    titleJa: "AIチャット",
    titleEn: "AI Chat",
    descJa: "LLMと対話しながらスクリプト作成。URL読み込み、Web検索（EXA API）対応。",
    descEn: "Create scripts through dialogue with LLM. Supports URL loading and web search (EXA API).",
    icon: MessagesSquare,
  },
  {
    titleJa: "スクリプト編集",
    titleEn: "Script Editing",
    descJa: "6つのタブ（Text, YAML/JSON, Media, Style等）でスクリプトを調整。",
    descEn: "Adjust scripts with 6 tabs (Text, YAML/JSON, Media, Style, etc.).",
    icon: FileEdit,
  },
  {
    titleJa: "出力設定",
    titleEn: "Output Settings",
    descJa: "Movie/Podcast/PDFを選択してコンテンツ生成。",
    descEn: "Generate content by selecting Movie/Podcast/PDF.",
    icon: Settings,
  },
  {
    titleJa: "成果物",
    titleEn: "Artifacts",
    descJa: "生成された動画、PDF、音声、Mulmo Viewerを確認。",
    descEn: "View generated videos, PDFs, audio, and Mulmo Viewer.",
    icon: FolderOutput,
  },
];

const scriptTabs = [
  {
    name: "Text",
    descJa: "音声生成のベース文章編集、翻訳",
    descEn: "Edit base text for audio generation, translation",
  },
  { name: "YAML/JSON", descJa: "スクリプト全体を直接編集", descEn: "Edit entire script directly" },
  {
    name: "Media",
    descJa: "画像/動画（プロンプト生成、D&D、URL）、スライド",
    descEn: "Images/videos (prompt generation, D&D, URL), slides",
  },
  {
    name: "Style",
    descJa: "Canvas Size、Speech/Image/Movie Parameters、BGM",
    descEn: "Canvas Size, Speech/Image/Movie Parameters, BGM",
  },
];

const videosJa = [
  { category: "インストール", title: "インストールガイド (Mac版)", id: "qbxteoIwgXg" },
  { category: "インストール", title: "インストールガイド (Windows版)", id: "ar_iC7lTSjE" },
  { category: "セットアップ", title: "初回セットアップ＆動画生成マニュアル", id: "_Ofy3mlKsDg" },
  { category: "オンボーディング", title: "シリーズ 第1回", id: "vz1V36KbBi0" },
  { category: "オンボーディング", title: "シリーズ 第2回", id: "wgMYv77-uLE" },
  { category: "オンボーディング", title: "シリーズ 第3回", id: "DmNfmgmnWXU" },
];

const videosEn = [
  { category: "Install", title: "Installation Guide (Mac)", id: "58HkfR4WmdY" },
  { category: "Install", title: "Installation Guide (Windows)", id: "gVKAbBgpOBs" },
  { category: "Setup", title: "Onboarding & Video Generation Manual", id: "oQFsvDA_76M" },
  { category: "Onboarding", title: "Series Part 1", id: "uBRl8_Bo41o" },
  { category: "Onboarding", title: "Series Part 2", id: "7gWOt4viaSA" },
  { category: "Onboarding", title: "Series Part 3", id: "AVSu2uShFD8" },
];
</script>
