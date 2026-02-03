<template>
  <div class="min-h-screen">
    <Navigation />
    <div class="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <div class="mb-8">
        <a :href="localizedUrl('/docs')" class="text-primary mb-4 inline-flex items-center text-sm hover:underline">
          <ChevronLeft class="mr-1 h-4 w-4" />
          {{ t("docs.backToDocs") }}
        </a>
        <h1 class="text-foreground text-3xl font-bold">MulmoCast CLI</h1>
        <p class="text-muted-foreground mt-2 text-lg">
          {{
            locale === "ja"
              ? "AIがテキスト・画像・音声・動画を自動生成するコマンドラインツール"
              : "Command-line tool for AI-powered text, image, audio, and video generation"
          }}
        </p>
      </div>

      <!-- What is MulmoCast CLI? -->
      <section class="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>{{ locale === "ja" ? "MulmoCast CLIとは？" : "What is MulmoCast CLI?" }}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              {{
                locale === "ja"
                  ? "MulmoCast CLIは、JSON形式の台本（MulmoScript）から、AIが自動でプレゼンテーション動画やポッドキャストを生成するツールです。"
                  : "MulmoCast CLI is a tool that automatically generates presentation videos and podcasts from JSON scripts (MulmoScript) using AI."
              }}
            </p>
            <div class="bg-muted rounded-lg p-4">
              <h4 class="text-foreground mb-3 font-medium">
                {{ locale === "ja" ? "できること" : "What You Can Create" }}
              </h4>
              <div class="grid gap-3 md:grid-cols-2">
                <div class="flex items-start gap-2">
                  <Video class="text-primary mt-1 h-4 w-4" />
                  <div>
                    <p class="text-foreground text-sm font-medium">
                      {{ locale === "ja" ? "動画" : "Videos" }}
                    </p>
                    <p class="text-muted-foreground text-xs">
                      {{
                        locale === "ja" ? "プレゼン、解説、ストーリー動画" : "Presentations, tutorials, story videos"
                      }}
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-2">
                  <Music class="text-primary mt-1 h-4 w-4" />
                  <div>
                    <p class="text-foreground text-sm font-medium">
                      {{ locale === "ja" ? "音声" : "Audio" }}
                    </p>
                    <p class="text-muted-foreground text-xs">
                      {{ locale === "ja" ? "ポッドキャスト、ナレーション" : "Podcasts, narrations" }}
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-2">
                  <Image class="text-primary mt-1 h-4 w-4" />
                  <div>
                    <p class="text-foreground text-sm font-medium">
                      {{ locale === "ja" ? "画像" : "Images" }}
                    </p>
                    <p class="text-muted-foreground text-xs">
                      {{ locale === "ja" ? "スライド、イラスト" : "Slides, illustrations" }}
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-2">
                  <FileText class="text-primary mt-1 h-4 w-4" />
                  <div>
                    <p class="text-foreground text-sm font-medium">PDF</p>
                    <p class="text-muted-foreground text-xs">
                      {{ locale === "ja" ? "プレゼン資料" : "Presentation materials" }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <!-- Workflow Overview -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "基本的な流れ" : "Basic Workflow" }}
        </h2>
        <div class="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent class="pt-6">
              <div
                class="bg-primary/10 text-primary mb-3 flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold"
              >
                1
              </div>
              <h3 class="text-foreground mb-2 font-medium">
                {{ locale === "ja" ? "台本を作る" : "Create Script" }}
              </h3>
              <p class="text-muted-foreground text-sm">
                {{
                  locale === "ja"
                    ? "AIとチャットして台本を作成、または直接JSONを編集"
                    : "Chat with AI to create a script, or edit JSON directly"
                }}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent class="pt-6">
              <div
                class="bg-primary/10 text-primary mb-3 flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold"
              >
                2
              </div>
              <h3 class="text-foreground mb-2 font-medium">
                {{ locale === "ja" ? "コマンドを実行" : "Run Command" }}
              </h3>
              <p class="text-muted-foreground text-sm">
                {{
                  locale === "ja"
                    ? "mulmo movieコマンドで動画生成を開始"
                    : "Start video generation with mulmo movie command"
                }}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent class="pt-6">
              <div
                class="bg-primary/10 text-primary mb-3 flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold"
              >
                3
              </div>
              <h3 class="text-foreground mb-2 font-medium">
                {{ locale === "ja" ? "完成" : "Done!" }}
              </h3>
              <p class="text-muted-foreground text-sm">
                {{
                  locale === "ja"
                    ? "AIが音声・画像・動画を自動生成して結合"
                    : "AI automatically generates and combines audio, images, and video"
                }}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <!-- Documentation Navigation -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "ドキュメント" : "Documentation" }}
        </h2>
        <div class="space-y-3">
          <a
            :href="localizedUrl('/docs/cli/quickstart')"
            class="border-border hover:border-primary group flex items-center justify-between rounded-lg border p-4 transition-colors"
          >
            <div class="flex items-center gap-4">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Rocket class="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 class="text-foreground group-hover:text-primary font-medium">
                  {{ locale === "ja" ? "クイックスタート" : "Quick Start" }}
                </h3>
                <p class="text-muted-foreground text-sm">
                  {{ locale === "ja" ? "インストールから最初の動画生成まで" : "From installation to your first video" }}
                </p>
              </div>
            </div>
            <ChevronRight class="text-muted-foreground group-hover:text-primary h-5 w-5" />
          </a>

          <a
            :href="localizedUrl('/docs/cli/mulmoscript')"
            class="border-border hover:border-primary group flex items-center justify-between rounded-lg border p-4 transition-colors"
          >
            <div class="flex items-center gap-4">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Code class="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 class="text-foreground group-hover:text-primary font-medium">MulmoScript</h3>
                <p class="text-muted-foreground text-sm">
                  {{ locale === "ja" ? "台本フォーマットの詳細リファレンス" : "Detailed script format reference" }}
                </p>
              </div>
            </div>
            <ChevronRight class="text-muted-foreground group-hover:text-primary h-5 w-5" />
          </a>

          <a
            :href="localizedUrl('/docs/cli/providers')"
            class="border-border hover:border-primary group flex items-center justify-between rounded-lg border p-4 transition-colors"
          >
            <div class="flex items-center gap-4">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Settings class="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 class="text-foreground group-hover:text-primary font-medium">
                  {{ locale === "ja" ? "プロバイダー設定" : "Provider Settings" }}
                </h3>
                <p class="text-muted-foreground text-sm">
                  {{
                    locale === "ja"
                      ? "TTS、画像、動画生成プロバイダーの設定"
                      : "Configure TTS, image, and video providers"
                  }}
                </p>
              </div>
            </div>
            <ChevronRight class="text-muted-foreground group-hover:text-primary h-5 w-5" />
          </a>

          <a
            :href="localizedUrl('/docs/cli/advanced')"
            class="border-border hover:border-primary group flex items-center justify-between rounded-lg border p-4 transition-colors"
          >
            <div class="flex items-center gap-4">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Sparkles class="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 class="text-foreground group-hover:text-primary font-medium">
                  {{ locale === "ja" ? "高度な機能" : "Advanced Features" }}
                </h3>
                <p class="text-muted-foreground text-sm">
                  {{
                    locale === "ja"
                      ? "リップシンク、トランジション、フィルターなど"
                      : "Lip sync, transitions, filters, and more"
                  }}
                </p>
              </div>
            </div>
            <ChevronRight class="text-muted-foreground group-hover:text-primary h-5 w-5" />
          </a>
        </div>
      </section>

      <!-- Tutorial Videos -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "チュートリアル動画" : "Tutorial Videos" }}
        </h2>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="border-border overflow-hidden rounded-lg border">
            <div class="aspect-video">
              <iframe
                :src="`https://www.youtube.com/embed/${locale === 'ja' ? 'qbxteoIwgXg' : '58HkfR4WmdY'}`"
                :title="locale === 'ja' ? 'インストールガイド' : 'Installation Guide'"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="h-full w-full"
              ></iframe>
            </div>
            <div class="p-3">
              <h3 class="text-foreground text-sm font-medium">
                {{ locale === "ja" ? "インストールガイド" : "Installation Guide" }}
              </h3>
            </div>
          </div>
          <div class="border-border overflow-hidden rounded-lg border">
            <div class="aspect-video">
              <iframe
                :src="`https://www.youtube.com/embed/${locale === 'ja' ? '_Ofy3mlKsDg' : 'oQFsvDA_76M'}`"
                :title="locale === 'ja' ? '初回セットアップ' : 'Initial Setup'"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="h-full w-full"
              ></iframe>
            </div>
            <div class="p-3">
              <h3 class="text-foreground text-sm font-medium">
                {{ locale === "ja" ? "初回セットアップ＆動画生成マニュアル" : "Setup & Video Generation Manual" }}
              </h3>
            </div>
          </div>
        </div>
        <div class="mt-4 text-center">
          <a
            href="https://www.youtube.com/@SingularitySociety"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary inline-flex items-center text-sm hover:underline"
          >
            {{ locale === "ja" ? "もっと動画を見る" : "View more videos" }}
            <ExternalLink class="ml-1 h-3 w-3" />
          </a>
        </div>
      </section>

      <!-- Related Links -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "関連リンク" : "Related Links" }}
        </h2>
        <div class="grid gap-3 md:grid-cols-2">
          <a
            href="https://github.com/receptron/mulmocast-cli"
            target="_blank"
            rel="noopener noreferrer"
            class="border-border hover:bg-muted flex items-center gap-3 rounded-lg border p-4 transition-colors"
          >
            <Github class="h-5 w-5" />
            <div>
              <p class="text-foreground text-sm font-medium">GitHub</p>
              <p class="text-muted-foreground text-xs">receptron/mulmocast-cli</p>
            </div>
          </a>
          <a
            href="https://www.npmjs.com/package/mulmocast"
            target="_blank"
            rel="noopener noreferrer"
            class="border-border hover:bg-muted flex items-center gap-3 rounded-lg border p-4 transition-colors"
          >
            <Package class="h-5 w-5" />
            <div>
              <p class="text-foreground text-sm font-medium">npm</p>
              <p class="text-muted-foreground text-xs">mulmocast</p>
            </div>
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
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import Navigation from "../../../components/Navigation.vue";
import { useLocalizedUrl } from "../../../i18n/utils";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Package,
  Video,
  Music,
  Image,
  FileText,
  Rocket,
  Code,
  Settings,
  Sparkles,
} from "lucide-vue-next";

const { t, locale } = useI18n();
const localizedUrl = useLocalizedUrl();
</script>
