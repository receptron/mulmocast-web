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
        <h1 class="text-foreground text-3xl font-bold">MulmoClaude</h1>
        <p class="text-muted-foreground mt-2 text-lg">
          {{
            locale === "ja"
              ? "Multi-modal Claude Code Client — GUIチャット＋長期記憶"
              : "Multi-modal Claude Code Client — GUI chat with long-term memory"
          }}
        </p>
        <div class="mt-3 flex gap-2">
          <Badge variant="secondary">Claude Code</Badge>
          <Badge variant="secondary">GUI Chat</Badge>
          <Badge variant="outline">{{ locale === "ja" ? "長期記憶" : "Long-term Memory" }}</Badge>
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
            <a href="#roles" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "3. ロール" : "3. Roles"
            }}</a>
            <a href="#wiki" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "4. Wiki（長期記憶）" : "4. Wiki (Long-term Memory)"
            }}</a>
            <a href="#security" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "5. セキュリティ（Dockerサンドボックス）" : "5. Security (Docker Sandbox)"
            }}</a>
            <a href="#x-tools" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "6. X (Twitter) MCPツール（オプション）" : "6. X (Twitter) MCP Tools (Optional)"
            }}</a>
            <a href="#workspace" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "7. ワークスペース構造" : "7. Workspace Structure"
            }}</a>
            <a href="#links" class="text-muted-foreground hover:text-primary block text-sm">{{
              locale === "ja" ? "8. リンク" : "8. Links"
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
              ? "MulmoClaudeは、Claude Codeを「GUIチャット」として使えるようにするマルチモーダルクライアントです。テキストの返答だけでなく、ドキュメント、スプレッドシート、マインドマップ、画像、フォーム、3Dシーン、ピアノなどのインタラクティブなビジュアルツールでClaudeが応答します。さらに、組み込みのパーソナルWikiにより、会話を重ねるごとに成長する構造化された長期記憶をClaudeに与えます。"
              : "MulmoClaude is a multi-modal client that lets you experience Claude Code as a GUI chat. Claude responds not just with text but with interactive visual tools — documents, spreadsheets, mind maps, images, forms, 3D scenes, piano, and more. A built-in personal wiki gives Claude persistent, structured knowledge that grows with every conversation."
          }}
        </p>

        <div class="bg-muted mb-6 rounded-lg p-4">
          <h3 class="text-foreground mb-2 font-medium">
            {{ locale === "ja" ? "コアコンセプト" : "Core Concept" }}
          </h3>
          <p class="text-muted-foreground text-sm">
            {{
              locale === "ja"
                ? "Claude Code × GUI Chat Protocol × 長期Wiki記憶。テキストストリームを超えた、視覚的でインタラクティブなAIアシスタント体験。"
                : "Claude Code × GUI Chat Protocol × long-term Wiki memory. A visual, interactive AI assistant experience that goes beyond text streams."
            }}
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <div v-for="feature in features" :key="feature.titleEn" class="border-border rounded-lg border p-4">
            <div class="flex items-center gap-2">
              <component :is="feature.icon" class="text-primary h-5 w-5" />
              <h3 class="text-foreground font-medium">
                {{ locale === "ja" ? feature.titleJa : feature.titleEn }}
              </h3>
            </div>
            <p class="text-muted-foreground mt-2 text-sm">
              {{ locale === "ja" ? feature.descJa : feature.descEn }}
            </p>
          </div>
        </div>
      </section>

      <!-- Installation -->
      <section id="install" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "2. インストール" : "2. Installation" }}
        </h2>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "前提条件" : "Prerequisites" }}
        </h3>
        <ul class="text-muted-foreground mb-6 list-inside list-disc space-y-1 text-sm">
          <li>Node.js 18+</li>
          <li>
            <a href="https://claude.ai/code" target="_blank" rel="noopener" class="text-primary hover:underline">
              Claude Code CLI</a
            >
            {{ locale === "ja" ? "（インストール＆認証済み）" : "(installed and authenticated)" }}
          </li>
          <li>
            {{
              locale === "ja"
                ? "Gemini APIキー（画像生成用、無料枠あり）"
                : "Gemini API key (for image generation, free tier available)"
            }}
          </li>
        </ul>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          Step 1: {{ locale === "ja" ? "リポジトリをクローン" : "Clone the repository" }}
        </h3>
        <div class="bg-muted mb-6 rounded-lg p-3">
          <pre class="text-sm"><code>git clone git@github.com:receptron/mulmoclaude.git
cd mulmoclaude
yarn install</code></pre>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          Step 2: {{ locale === "ja" ? "環境変数を設定" : "Set up environment variables" }}
        </h3>
        <div class="bg-muted mb-6 rounded-lg p-3">
          <pre class="text-sm"><code>cp .env.example .env
# .envを編集してGEMINI_API_KEYを追加</code></pre>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">Step 3: {{ locale === "ja" ? "起動" : "Run" }}</h3>
        <div class="bg-muted mb-4 rounded-lg p-3">
          <code class="text-sm">yarn dev</code>
        </div>
        <p class="text-muted-foreground mb-6 text-sm">
          {{
            locale === "ja"
              ? "フロントエンド（Vite）とバックエンド（Express + Claude Codeエージェント）が同時に起動します。ブラウザで http://localhost:5173 を開いてください。"
              : "Starts both the frontend (Vite) and the backend (Express + Claude Code agent) concurrently. Open http://localhost:5173 in your browser."
          }}
        </p>

        <div class="bg-muted/50 border-border rounded-lg border p-4">
          <h4 class="text-foreground mb-2 font-medium">
            {{ locale === "ja" ? "なぜGemini APIキーが必要？" : "Why a Gemini API key?" }}
          </h4>
          <p class="text-muted-foreground text-sm">
            {{
              locale === "ja"
                ? "MulmoClaudeはGoogleのGemini 3.1 Flash Image（nano banana 2）モデルを画像生成・編集に使用しています。generateImage、editImage、ドキュメント内のインライン画像（レシピガイド、旅行プランナー等）で利用されます。Gemini APIキーがない場合、画像生成を使用するロールはUIで無効化されます。"
                : "MulmoClaude uses Google's Gemini 3.1 Flash Image (nano banana 2) model for image generation and editing. This powers generateImage, editImage, and inline images in documents (Recipe Guide, Trip Planner, etc.). Without a Gemini API key, roles that use image generation will be disabled in the UI."
            }}
          </p>
          <p class="text-muted-foreground mt-2 text-sm">
            {{ locale === "ja" ? "APIキーは" : "Get your API key at" }}
            <a
              href="https://aistudio.google.com/apikey"
              target="_blank"
              rel="noopener"
              class="text-primary hover:underline"
              >Google AI Studio</a
            >{{
              locale === "ja"
                ? "から取得できます。無料枠は個人利用には十分です。"
                : ". The free tier is sufficient for personal use."
            }}
          </p>
        </div>
      </section>

      <!-- Roles -->
      <section id="roles" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "3. ロール" : "3. Roles" }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "各ロールはClaudeに異なるペルソナ、ツールパレット、フォーカスエリアを与えます。ロールを切り替えるとClaudeのコンテキストがリセットされ、そのロールに必要なツールだけが読み込まれます。"
              : "Each role gives Claude a different persona, tool palette, and focus area. Switching roles resets Claude's context and swaps in only the tools that role needs — keeping responses fast and focused."
          }}
        </p>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse text-sm">
            <thead>
              <tr class="border-border border-b">
                <th class="py-2 pr-4 text-left font-medium">{{ locale === "ja" ? "ロール" : "Role" }}</th>
                <th class="py-2 text-left font-medium">{{ locale === "ja" ? "できること" : "What it does" }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="role in roles" :key="role.name" class="border-border border-b">
                <td class="text-foreground py-2 pr-4 font-medium whitespace-nowrap">{{ role.name }}</td>
                <td class="text-muted-foreground py-2">{{ locale === "ja" ? role.descJa : role.descEn }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Wiki -->
      <section id="wiki" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "4. Wiki — Claude Codeの長期記憶" : "4. Wiki — Long-Term Memory for Claude Code" }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "MulmoClaudeにはAndrej KarpathyのLLM Knowledge Basesアイデアにインスパイアされたパーソナル知識ベースが組み込まれています。短いmemory.mdではなく、Claude自身が構築・維持する成長するインターコネクトされたWikiにより、Claude Codeに本物の長期記憶を与えます。"
              : "MulmoClaude includes a personal knowledge base inspired by Andrej Karpathy's LLM Knowledge Bases idea. It gives Claude Code genuine long-term memory — not just a short memory.md, but a growing, interconnected wiki that Claude builds and maintains itself."
          }}
        </p>

        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "使用例" : "Example commands" }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{ locale === "ja" ? "Generalロールでは、以下のように話しかけられます:" : "In the General role, try:" }}
        </p>
        <ul class="text-muted-foreground mb-6 space-y-2 text-sm">
          <li v-for="example in wikiExamples" :key="example.commandEn">
            <code class="bg-muted rounded px-2 py-1 text-xs">{{
              locale === "ja" ? example.commandJa : example.commandEn
            }}</code>
            <span class="ml-2">— {{ locale === "ja" ? example.descJa : example.descEn }}</span>
          </li>
        </ul>

        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "仕組み" : "How it works" }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{
            locale === "ja"
              ? "Wikiはワークスペース内のプレーンなマークダウンファイルとして存在します:"
              : "The wiki lives entirely as plain markdown files in your workspace:"
          }}
        </p>
        <div class="bg-muted mb-4 rounded-lg p-3">
          <pre class="text-sm"><code>workspace/wiki/
  index.md          ← {{
              locale === "ja" ? "全ページのカタログ（タイトル、説明、最終更新）" : "catalog of all pages (title, description, last updated)"
            }}
  log.md            ← {{ locale === "ja" ? "追記専用のアクティビティログ" : "append-only activity log" }}
  pages/&lt;slug&gt;.md   ← {{ locale === "ja" ? "エンティティ・概念・テーマごとに1ページ" : "one page per entity, concept, or theme" }}
  sources/&lt;slug&gt;.md ← {{ locale === "ja" ? "取り込まれた生のソース" : "raw ingested sources" }}</code></pre>
        </div>
        <p class="text-muted-foreground text-sm">
          {{
            locale === "ja"
              ? "Claudeは組み込みのファイルツール（read、write、glob、grep）を使ってWikiをナビゲート・維持します。特別なデータベースやインデックスは不要です。クロスリファレンスは [[wiki link]] 構文を使い、Canvas UIがクリック可能なナビゲーションとしてレンダリングします。"
              : "Claude uses its built-in file tools (read, write, glob, grep) to navigate and maintain the wiki — no special database or indexing required. Cross-references use [[wiki link]] syntax, which the canvas UI renders as clickable navigation."
          }}
        </p>
      </section>

      <!-- Security -->
      <section id="security" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "5. セキュリティ — Dockerサンドボックス" : "5. Security — Docker Sandbox" }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "MulmoClaudeはClaude CodeをAIバックエンドとして使用しており、ClaudeはBashを含むツールにアクセスできます。つまり、マシン上のファイルを読み書きできるということです。"
              : "MulmoClaude uses Claude Code as its AI backend, which has access to tools including Bash — meaning it can read and write files on your machine."
          }}
        </p>

        <div class="mb-4 grid gap-4 md:grid-cols-2">
          <div class="border-border rounded-lg border p-4">
            <h3 class="text-foreground mb-2 font-medium">
              {{ locale === "ja" ? "Dockerなし" : "Without Docker" }}
            </h3>
            <p class="text-muted-foreground text-sm">
              {{
                locale === "ja"
                  ? "Claudeはユーザーアカウントがアクセスできるあらゆるファイル（SSHキー、認証情報を含む）にアクセスできます。個人のローカル使用には許容範囲です。"
                  : "Claude can access any file your user account can reach, including SSH keys and credentials. Acceptable for personal local use."
              }}
            </p>
          </div>
          <div class="border-border bg-primary/5 rounded-lg border p-4">
            <h3 class="text-foreground mb-2 font-medium">
              {{ locale === "ja" ? "Dockerあり（推奨）" : "With Docker (Recommended)" }}
            </h3>
            <p class="text-muted-foreground text-sm">
              {{
                locale === "ja"
                  ? "Claudeはサンドボックスコンテナ内で実行されます。ワークスペースとClaudeの設定（~/.claude）のみがマウントされ、その他のファイルシステムはClaudeから見えません。"
                  : "Claude runs inside a sandboxed container. Only your workspace and Claude's config (~/.claude) are mounted — the rest of your filesystem is invisible to Claude."
              }}
            </p>
          </div>
        </div>

        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "Docker Desktopのセットアップ" : "Setting up Docker Desktop" }}
        </h3>
        <ol class="text-muted-foreground mb-4 list-inside list-decimal space-y-1 text-sm">
          <li>
            <a
              href="https://www.docker.com/products/docker-desktop/"
              target="_blank"
              rel="noopener"
              class="text-primary hover:underline"
              >Docker Desktop</a
            >
            {{ locale === "ja" ? "をダウンロードしてインストール" : "and install" }}
          </li>
          <li>
            {{
              locale === "ja"
                ? "MulmoClaudeを再起動 — Dockerを検出して初回実行時にサンドボックスイメージをビルド（約1分）"
                : "Restart MulmoClaude — it detects Docker and builds the sandbox image on first run (about 1 minute)"
            }}
          </li>
          <li>
            {{
              locale === "ja"
                ? "サンドボックス内でClaude Codeを認証（一度だけ）:"
                : "Authenticate Claude Code inside the sandbox (one-time):"
            }}
          </li>
        </ol>
        <div class="bg-muted mb-4 rounded-lg p-3">
          <code class="text-sm">yarn sandbox:login</code>
        </div>
        <p class="text-muted-foreground text-sm">
          {{
            locale === "ja"
              ? "デバッグモード: Dockerがインストールされていてもサンドボックスなしで実行するには、サーバー起動前に DISABLE_SANDBOX=1 を設定してください。"
              : "Debug mode: To run without the sandbox even when Docker is installed, set DISABLE_SANDBOX=1 before starting the server."
          }}
        </p>
      </section>

      <!-- X Tools -->
      <section id="x-tools" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "6. X (Twitter) MCPツール（オプション）" : "6. X (Twitter) MCP Tools (Optional)" }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "MulmoClaudeには、公式X API v2経由でXの投稿を読んだり検索したりするオプションのMCPツールが含まれています。デフォルトでは無効で、X APIのBearer Tokenが必要です。"
              : "MulmoClaude includes optional MCP tools for reading and searching posts on X (Twitter) via the official X API v2. Disabled by default, requires an X API Bearer Token to activate."
          }}
        </p>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse text-sm">
            <thead>
              <tr class="border-border border-b">
                <th class="py-2 pr-4 text-left font-medium">{{ locale === "ja" ? "ツール" : "Tool" }}</th>
                <th class="py-2 text-left font-medium">{{ locale === "ja" ? "機能" : "What it does" }}</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-border border-b">
                <td class="py-2 pr-4 font-mono text-xs whitespace-nowrap">readXPost</td>
                <td class="text-muted-foreground py-2">
                  {{
                    locale === "ja"
                      ? "URLまたはツイートIDから単一の投稿を取得"
                      : "Fetches a single post by URL or tweet ID"
                  }}
                </td>
              </tr>
              <tr class="border-border border-b">
                <td class="py-2 pr-4 font-mono text-xs whitespace-nowrap">searchX</td>
                <td class="text-muted-foreground py-2">
                  {{
                    locale === "ja"
                      ? "キーワードやクエリで最近の投稿を検索"
                      : "Searches recent posts by keyword or query"
                  }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Workspace -->
      <section id="workspace" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "7. ワークスペース構造" : "7. Workspace Structure" }}
        </h2>
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "すべてのデータはワークスペースディレクトリにプレーンなファイルとして保存されます:"
              : "All data is stored as plain files in the workspace directory:"
          }}
        </p>
        <div class="bg-muted rounded-lg p-3">
          <pre class="text-sm"><code>~/mulmoclaude/
  chat/         ← {{ locale === "ja" ? "会話履歴（セッションごとに1つの.jsonl）" : "conversation history (one .jsonl per session)" }}
  todos/        ← {{ locale === "ja" ? "ToDoアイテム" : "todo items" }}
  memory.md     ← {{ locale === "ja" ? "Claudeが常にコンテキストに持つ永続的な事実" : "persistent facts Claude always has in context" }}
  wiki/         ← {{ locale === "ja" ? "パーソナル知識ベース" : "personal knowledge base" }}</code></pre>
        </div>
      </section>

      <!-- Links -->
      <section id="links" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "8. リンク" : "8. Links" }}
        </h2>
        <ul class="space-y-2 text-sm">
          <li>
            <a
              href="https://github.com/receptron/mulmoclaude"
              target="_blank"
              rel="noopener"
              class="text-primary inline-flex items-center hover:underline"
            >
              <Github class="mr-2 h-4 w-4" />
              receptron/mulmoclaude
              <ExternalLink class="ml-1 h-3 w-3" />
            </a>
          </li>
          <li>
            <a
              href="https://claude.ai/code"
              target="_blank"
              rel="noopener"
              class="text-primary inline-flex items-center hover:underline"
            >
              Claude Code
              <ExternalLink class="ml-1 h-3 w-3" />
            </a>
          </li>
          <li>
            <a
              href="https://aistudio.google.com/apikey"
              target="_blank"
              rel="noopener"
              class="text-primary inline-flex items-center hover:underline"
            >
              Google AI Studio (Gemini API Key)
              <ExternalLink class="ml-1 h-3 w-3" />
            </a>
          </li>
          <li>
            <a
              href="https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f"
              target="_blank"
              rel="noopener"
              class="text-primary inline-flex items-center hover:underline"
            >
              {{ locale === "ja" ? "Andrej Karpathy: LLM Knowledge Bases" : "Andrej Karpathy: LLM Knowledge Bases" }}
              <ExternalLink class="ml-1 h-3 w-3" />
            </a>
          </li>
        </ul>
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
import { ChevronLeft, ExternalLink, Github, MessageSquare, Brain, Palette, Shield } from "lucide-vue-next";

const { t, locale } = useI18n();
const localizedUrl = useLocalizedUrl();

const features = [
  {
    icon: MessageSquare,
    titleJa: "GUIチャットUI",
    titleEn: "GUI Chat UI",
    descJa: "ドキュメント、スプレッドシート、フォーム、3D、ピアノなどClaudeが視覚的に応答",
    descEn: "Claude responds visually with documents, spreadsheets, forms, 3D, piano, and more",
  },
  {
    icon: Brain,
    titleJa: "長期Wiki記憶",
    titleEn: "Long-term Wiki Memory",
    descJa: "Claude自身が構築・維持する成長するパーソナル知識ベース",
    descEn: "A growing personal knowledge base that Claude builds and maintains itself",
  },
  {
    icon: Palette,
    titleJa: "ロールベースのツール切替",
    titleEn: "Role-based Tool Switching",
    descJa: "9つの組み込みロール（General、Office、Artist、Game、Tutor等）でツールを切替",
    descEn: "9 built-in roles (General, Office, Artist, Game, Tutor, etc.) swap tools per role",
  },
  {
    icon: Shield,
    titleJa: "Dockerサンドボックス",
    titleEn: "Docker Sandbox",
    descJa: "Docker Desktopを検出して自動でClaudeをサンドボックス化",
    descEn: "Automatically sandboxes Claude when Docker Desktop is detected",
  },
];

const roles = [
  {
    name: "General",
    descJa: "万能アシスタント — ToDo、スケジューラー、Wiki、ドキュメント、マインドマップ",
    descEn: "All-purpose assistant — todos, scheduler, wiki, documents, mind maps",
  },
  {
    name: "Office",
    descJa: "ドキュメント、スプレッドシート、フォーム、プレゼン、データダッシュボード",
    descEn: "Documents, spreadsheets, forms, presentations, data dashboards",
  },
  {
    name: "Guide & Planner",
    descJa: "旅行ガイド、レシピ本、リッチなビジュアル出力付きの旅行プランナー",
    descEn: "Travel guides, recipe books, trip planners with rich visual output",
  },
  {
    name: "Artist",
    descJa: "画像生成、画像編集、p5.jsによるジェネレーティブアート",
    descEn: "Image generation, image editing, generative art with p5.js",
  },
  {
    name: "Game",
    descJa: "オセロをプレイ、またはPhaser/Three.jsでブラウザゲームを構築",
    descEn: "Play Othello, or build browser games with Phaser/Three.js",
  },
  {
    name: "Tutor",
    descJa: "適応型ティーチング — 説明の前にあなたのレベルを評価",
    descEn: "Adaptive teaching — evaluates your level before explaining anything",
  },
  {
    name: "Storyteller",
    descJa: "画像とHTMLシーンを使ったインタラクティブな絵本",
    descEn: "Interactive illustrated stories with images and HTML scenes",
  },
  {
    name: "Musician",
    descJa: "ブラウザで音楽を作曲・演奏",
    descEn: "Compose and play music in the browser",
  },
  {
    name: "Role Manager",
    descJa: "カスタムロールの作成・編集",
    descEn: "Create and edit custom roles",
  },
];

const wikiExamples = [
  {
    commandJa: "この記事を取り込んで: <URL>",
    commandEn: "Ingest this article: <URL>",
    descJa: "Claudeがページを取得し、知識を抽出してWikiページを作成・更新、アクティビティをログに記録",
    descEn: "Claude fetches the page, extracts knowledge, creates/updates wiki pages, logs activity",
  },
  {
    commandJa: "私のWikiにはtransformerについて何が書いてある？",
    commandEn: "What does my wiki say about transformers?",
    descJa: "インデックスを検索し、関連ページを読んで根拠のある回答を合成",
    descEn: "Searches the index, reads relevant pages, and synthesizes a grounded answer",
  },
  {
    commandJa: "Wikiをlintして",
    commandEn: "Lint my wiki",
    descJa: "孤立ページ、壊れたリンク、欠けたインデックスエントリのヘルスチェック",
    descEn: "Health check for orphan pages, broken links, and missing index entries",
  },
  {
    commandJa: "Wikiインデックスを表示して",
    commandEn: "Show me the wiki index",
    descJa: "完全なページカタログをCanvasにレンダリング",
    descEn: "Renders the full page catalog in the canvas",
  },
];
</script>
