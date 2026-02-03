<template>
  <div class="min-h-screen">
    <Navigation />
    <div class="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <div class="mb-8">
        <div class="text-muted-foreground mb-4 flex items-center gap-2 text-sm">
          <a :href="localizedUrl('/docs')" class="hover:text-primary">{{
            locale === "ja" ? "ドキュメント" : "Docs"
          }}</a>
          <ChevronRight class="h-4 w-4" />
          <a :href="localizedUrl('/docs/cli')" class="hover:text-primary">CLI</a>
          <ChevronRight class="h-4 w-4" />
          <span class="text-foreground">{{ locale === "ja" ? "クイックスタート" : "Quick Start" }}</span>
        </div>
        <h1 class="text-foreground text-3xl font-bold">
          {{ locale === "ja" ? "クイックスタート" : "Quick Start" }}
        </h1>
        <p class="text-muted-foreground mt-2 text-lg">
          {{
            locale === "ja"
              ? "インストールから最初の動画生成まで、ステップバイステップで解説"
              : "Step-by-step guide from installation to your first video"
          }}
        </p>
      </div>

      <!-- Before You Start -->
      <section class="mb-12">
        <Card class="border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950">
          <CardContent class="pt-6">
            <div class="flex items-start gap-4">
              <Play class="h-8 w-8 flex-shrink-0 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 class="text-foreground mb-2 text-lg font-medium">
                  {{ locale === "ja" ? "動画で学ぶ" : "Learn by Video" }}
                </h3>
                <p class="text-muted-foreground mb-3 text-sm">
                  {{
                    locale === "ja"
                      ? "テキストを読むより動画で学びたい方は、YouTubeのチュートリアル動画をご覧ください。インストールからセットアップまで、実際の画面を見ながら進められます。"
                      : "If you prefer video tutorials, watch our YouTube guides. Follow along with actual screen recordings from installation to setup."
                  }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <a
                    :href="`https://www.youtube.com/watch?v=${locale === 'ja' ? 'qbxteoIwgXg' : '58HkfR4WmdY'}`"
                    target="_blank"
                    rel="noopener"
                    class="text-primary inline-flex items-center text-sm hover:underline"
                  >
                    <ExternalLink class="mr-1 h-3 w-3" />
                    {{ locale === "ja" ? "インストールガイド" : "Installation Guide" }}
                  </a>
                  <span class="text-muted-foreground">|</span>
                  <a
                    :href="`https://www.youtube.com/watch?v=${locale === 'ja' ? '_Ofy3mlKsDg' : 'oQFsvDA_76M'}`"
                    target="_blank"
                    rel="noopener"
                    class="text-primary inline-flex items-center text-sm hover:underline"
                  >
                    <ExternalLink class="mr-1 h-3 w-3" />
                    {{ locale === "ja" ? "セットアップ＆動画生成" : "Setup & Video Generation" }}
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <!-- Prerequisites -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "始める前に必要なもの" : "Prerequisites" }}
        </h2>

        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "MulmoCast CLIを使うには、以下の3つが必要です。すでにインストール済みの項目はスキップしてください。"
              : "You need the following 3 things to use MulmoCast CLI. Skip items you already have installed."
          }}
        </p>

        <Card class="mb-6">
          <CardContent class="pt-6">
            <div class="space-y-6">
              <!-- Node.js -->
              <div class="flex items-start gap-4">
                <div
                  class="bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
                >
                  1
                </div>
                <div class="flex-1">
                  <h3 class="text-foreground font-medium">Node.js 22{{ locale === "ja" ? "以上" : " or higher" }}</h3>
                  <p class="text-muted-foreground mt-1 text-sm">
                    {{
                      locale === "ja"
                        ? "Node.jsは、JavaScriptをパソコン上で動かすためのソフトウェアです。MulmoCast CLIはNode.jsで作られているため、まずこれをインストールする必要があります。"
                        : "Node.js is software that runs JavaScript on your computer. MulmoCast CLI is built with Node.js, so you need to install it first."
                    }}
                  </p>

                  <div class="bg-muted mt-3 rounded-lg p-3">
                    <h4 class="text-foreground mb-2 text-sm font-medium">
                      {{ locale === "ja" ? "インストール方法" : "How to Install" }}
                    </h4>
                    <ol class="text-muted-foreground space-y-1 text-sm">
                      <li>
                        1.
                        <a href="https://nodejs.org" target="_blank" rel="noopener" class="text-primary hover:underline"
                          >nodejs.org</a
                        >
                        {{ locale === "ja" ? "にアクセス" : " - visit the site" }}
                      </li>
                      <li>
                        2.
                        {{
                          locale === "ja"
                            ? "「LTS」バージョンをダウンロード（安定版）"
                            : "Download the 'LTS' version (stable)"
                        }}
                      </li>
                      <li>3. {{ locale === "ja" ? "インストーラーを実行" : "Run the installer" }}</li>
                    </ol>
                  </div>

                  <div
                    class="mt-3 rounded border border-green-200 bg-green-50 p-2 dark:border-green-900 dark:bg-green-950"
                  >
                    <p class="text-xs text-green-800 dark:text-green-200">
                      <strong>{{ locale === "ja" ? "確認方法：" : "Verify:" }}</strong>
                      {{ locale === "ja" ? "ターミナルで以下を実行" : "Run in terminal:" }}
                      <code class="ml-1 rounded bg-green-100 px-1 dark:bg-green-900">node --version</code>
                      {{ locale === "ja" ? " → v22.0.0以上が表示されればOK" : " → Should show v22.0.0 or higher" }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- ffmpeg -->
              <div class="flex items-start gap-4">
                <div
                  class="bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
                >
                  2
                </div>
                <div class="flex-1">
                  <h3 class="text-foreground font-medium">ffmpeg</h3>
                  <p class="text-muted-foreground mt-1 text-sm">
                    {{
                      locale === "ja"
                        ? "ffmpegは、動画や音声を処理するための無料ツールです。MulmoCastは、生成した音声ファイルと画像ファイルを結合して1つの動画にするためにffmpegを使います。"
                        : "ffmpeg is a free tool for processing video and audio. MulmoCast uses ffmpeg to combine generated audio files and images into a single video."
                    }}
                  </p>

                  <div class="bg-muted mt-3 overflow-x-auto rounded-lg p-3">
                    <h4 class="text-foreground mb-2 text-sm font-medium">
                      {{ locale === "ja" ? "インストール方法（OS別）" : "Installation (by OS)" }}
                    </h4>
                    <pre class="text-xs"><code># macOS (Homebrew{{ locale === "ja" ? "を使う場合" : "" }})
brew install ffmpeg

# Windows (Chocolatey{{ locale === "ja" ? "を使う場合" : "" }})
choco install ffmpeg

# Windows (winget{{ locale === "ja" ? "を使う場合" : "" }})
winget install ffmpeg

# Ubuntu/Debian
sudo apt update && sudo apt install ffmpeg</code></pre>
                  </div>

                  <div
                    class="mt-3 rounded border border-green-200 bg-green-50 p-2 dark:border-green-900 dark:bg-green-950"
                  >
                    <p class="text-xs text-green-800 dark:text-green-200">
                      <strong>{{ locale === "ja" ? "確認方法：" : "Verify:" }}</strong>
                      <code class="ml-1 rounded bg-green-100 px-1 dark:bg-green-900">ffmpeg -version</code>
                      {{ locale === "ja" ? " → バージョン情報が表示されればOK" : " → Should show version info" }}
                    </p>
                  </div>

                  <div class="text-muted-foreground mt-2 text-xs">
                    {{ locale === "ja" ? "※ Homebrewをお持ちでない場合は" : "※ If you don't have Homebrew, visit" }}
                    <a href="https://brew.sh" target="_blank" rel="noopener" class="text-primary hover:underline"
                      >brew.sh</a
                    >
                    {{ locale === "ja" ? "でインストールできます" : " to install it" }}
                  </div>
                </div>
              </div>

              <!-- OpenAI API Key -->
              <div class="flex items-start gap-4">
                <div
                  class="bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
                >
                  3
                </div>
                <div class="flex-1">
                  <h3 class="text-foreground font-medium">OpenAI API{{ locale === "ja" ? "キー" : " Key" }}</h3>
                  <p class="text-muted-foreground mt-1 text-sm">
                    {{
                      locale === "ja"
                        ? "MulmoCastは、OpenAIというAI会社のサービスを使って音声と画像を生成します。このサービスを使うには「APIキー」という認証情報が必要です。"
                        : "MulmoCast uses OpenAI's services to generate audio and images. To use these services, you need an 'API key' for authentication."
                    }}
                  </p>

                  <div class="bg-muted mt-3 rounded-lg p-3">
                    <h4 class="text-foreground mb-2 text-sm font-medium">
                      {{ locale === "ja" ? "APIキーの取得方法" : "How to Get an API Key" }}
                    </h4>
                    <ol class="text-muted-foreground space-y-1 text-sm">
                      <li>
                        1.
                        <a
                          href="https://platform.openai.com/signup"
                          target="_blank"
                          rel="noopener"
                          class="text-primary hover:underline"
                          >platform.openai.com</a
                        >
                        {{ locale === "ja" ? "でアカウントを作成" : " - create an account" }}
                      </li>
                      <li>
                        2.
                        <a
                          href="https://platform.openai.com/api-keys"
                          target="_blank"
                          rel="noopener"
                          class="text-primary hover:underline"
                          >API keys</a
                        >
                        {{
                          locale === "ja"
                            ? "ページで「Create new secret key」をクリック"
                            : " - click 'Create new secret key'"
                        }}
                      </li>
                      <li>
                        3.
                        {{
                          locale === "ja"
                            ? "表示されたキー（sk-...で始まる文字列）をコピーして保存"
                            : "Copy and save the displayed key (string starting with sk-...)"
                        }}
                      </li>
                    </ol>
                  </div>

                  <div
                    class="mt-3 rounded border border-amber-200 bg-amber-50 p-3 dark:border-amber-900 dark:bg-amber-950"
                  >
                    <p class="mb-2 text-sm font-medium text-amber-800 dark:text-amber-200">
                      <AlertTriangle class="mr-1 inline h-4 w-4" />
                      {{ locale === "ja" ? "料金について（重要）" : "About Costs (Important)" }}
                    </p>
                    <p class="text-xs text-amber-800 dark:text-amber-200">
                      {{
                        locale === "ja"
                          ? "OpenAI APIは従量課金制です。MulmoCastを使うと、音声生成（TTS）と画像生成（DALL-E）でAPIが呼ばれ、それぞれ料金が発生します。"
                          : "OpenAI API uses pay-per-use pricing. Using MulmoCast calls the API for voice generation (TTS) and image generation (DALL-E), each incurring charges."
                      }}
                    </p>
                    <ul class="mt-2 space-y-1 text-xs text-amber-800 dark:text-amber-200">
                      <li>
                        •
                        {{
                          locale === "ja"
                            ? "目安：30秒の短い動画で$0.5〜$2程度"
                            : "Estimate: ~$0.5-$2 for a 30-second video"
                        }}
                      </li>
                      <li>
                        •
                        {{
                          locale === "ja"
                            ? "画像生成が一番コストがかかります（1枚あたり$0.04〜$0.12）"
                            : "Image generation costs the most ($0.04-$0.12 per image)"
                        }}
                      </li>
                      <li>
                        •
                        {{
                          locale === "ja"
                            ? "利用状況はOpenAIの「Usage」ページで確認できます"
                            : "Check usage on OpenAI's 'Usage' page"
                        }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- External Links -->
        <div class="text-muted-foreground rounded-lg border border-dashed p-4 text-sm">
          <p class="mb-2 font-medium">{{ locale === "ja" ? "参考リンク" : "Reference Links" }}</p>
          <ul class="space-y-1">
            <li>
              <a
                href="https://github.com/receptron/mulmocast-cli#readme"
                target="_blank"
                rel="noopener"
                class="text-primary hover:underline"
              >
                <ExternalLink class="mr-1 inline h-3 w-3" />
                GitHub README
              </a>
              - {{ locale === "ja" ? "インストール手順の詳細" : "Detailed installation instructions" }}
            </li>
            <li>
              <a
                href="https://github.com/receptron/mulmocast-cli/blob/main/docs/faq_ja.md"
                target="_blank"
                rel="noopener"
                class="text-primary hover:underline"
              >
                <ExternalLink class="mr-1 inline h-3 w-3" />
                FAQ
              </a>
              -
              {{
                locale === "ja"
                  ? "よくある質問とトラブルシューティング"
                  : "Frequently asked questions and troubleshooting"
              }}
            </li>
          </ul>
        </div>
      </section>

      <!-- Step 1: Install -->
      <section class="mb-12">
        <div class="mb-4 flex items-center gap-3">
          <div
            class="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full font-bold"
          >
            1
          </div>
          <h2 class="text-foreground text-2xl font-semibold">
            {{ locale === "ja" ? "インストール" : "Install" }}
          </h2>
        </div>

        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">
              {{ locale === "ja" ? "何が起きるか" : "What happens" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground text-sm">
              {{
                locale === "ja"
                  ? "MulmoCast CLIがコンピュータにインストールされ、ターミナルから `mulmo` コマンドが使えるようになります。`mulmo` コマンドは、台本ファイルから動画を生成したり、AIと対話して台本を作成したりするためのツールです。"
                  : "MulmoCast CLI is installed on your computer, and the `mulmo` command becomes available in your terminal. The `mulmo` command is a tool for generating videos from script files or creating scripts through AI conversation."
              }}
            </p>
          </CardContent>
        </Card>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{
            locale === "ja" ? "方法1: グローバルインストール（推奨）" : "Method 1: Global Installation (Recommended)"
          }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{
            locale === "ja"
              ? "グローバルインストールすると、どのフォルダからでも `mulmo` コマンドが使えるようになります。一度インストールすれば、毎回ダウンロードする必要がありません。"
              : "Global installation makes the `mulmo` command available from any folder. Once installed, you don't need to download it every time."
          }}
        </p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code># {{ locale === "ja" ? "npmでグローバルインストール" : "Global install with npm" }}
npm install -g mulmocast

# {{ locale === "ja" ? "インストール確認" : "Verify installation" }}
mulmo --version
# → mulmocast v1.x.x {{ locale === "ja" ? "のように表示されれば成功" : "should appear if successful" }}</code></pre>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "方法2: npxで直接実行" : "Method 2: Run Directly with npx" }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{
            locale === "ja"
              ? "インストールせずに、毎回ダウンロードして実行する方法です。常に最新版が使えますが、実行のたびにダウンロードが発生します。"
              : "Run without installing, downloading each time. Always uses the latest version, but downloads every time you run."
          }}
        </p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre
            class="text-sm"
          ><code># {{ locale === "ja" ? "npxで直接実行（インストール不要）" : "Run directly with npx (no installation)" }}
npx mulmocast --version

# {{ locale === "ja" ? "動画生成の例" : "Example: generate video" }}
npx mulmocast movie script.json</code></pre>
        </div>

        <div class="border-border rounded-lg border p-4">
          <h4 class="text-foreground mb-2 text-sm font-medium">
            {{ locale === "ja" ? "どちらを選ぶべき？" : "Which Should You Choose?" }}
          </h4>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-muted rounded p-3">
              <p class="text-foreground mb-1 text-sm font-medium">
                {{ locale === "ja" ? "グローバルインストール" : "Global Install" }}
              </p>
              <p class="text-muted-foreground text-xs">
                {{
                  locale === "ja"
                    ? "→ 繰り返し使う場合、コマンドが短い、高速"
                    : "→ For repeated use, shorter commands, faster"
                }}
              </p>
            </div>
            <div class="bg-muted rounded p-3">
              <p class="text-foreground mb-1 text-sm font-medium">npx</p>
              <p class="text-muted-foreground text-xs">
                {{
                  locale === "ja"
                    ? "→ 試しに使う場合、常に最新版、CI/CD環境"
                    : "→ For trying out, always latest version, CI/CD environments"
                }}
              </p>
            </div>
          </div>
        </div>

        <!-- Troubleshooting -->
        <details class="mt-4">
          <summary class="text-foreground cursor-pointer text-sm font-medium hover:underline">
            {{ locale === "ja" ? "うまくいかない場合" : "Troubleshooting" }}
          </summary>
          <div class="bg-muted mt-2 rounded-lg p-4 text-sm">
            <div class="space-y-3">
              <div>
                <p class="text-foreground font-medium">
                  {{ locale === "ja" ? "「command not found」と表示される" : "'command not found' error" }}
                </p>
                <p class="text-muted-foreground text-xs">
                  {{
                    locale === "ja"
                      ? "→ Node.jsが正しくインストールされているか確認してください。新しいターミナルウィンドウを開いて再試行してください。"
                      : "→ Make sure Node.js is installed correctly. Try opening a new terminal window and retry."
                  }}
                </p>
              </div>
              <div>
                <p class="text-foreground font-medium">
                  {{ locale === "ja" ? "「permission denied」と表示される" : "'permission denied' error" }}
                </p>
                <p class="text-muted-foreground text-xs">
                  {{
                    locale === "ja"
                      ? "→ macOS/Linuxの場合、`sudo npm install -g mulmocast` を試してください。または、npmの権限設定を確認してください。"
                      : "→ On macOS/Linux, try `sudo npm install -g mulmocast`. Or check your npm permissions."
                  }}
                </p>
              </div>
            </div>
          </div>
        </details>
      </section>

      <!-- Step 2: Setup Environment -->
      <section class="mb-12">
        <div class="mb-4 flex items-center gap-3">
          <div
            class="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full font-bold"
          >
            2
          </div>
          <h2 class="text-foreground text-2xl font-semibold">
            {{ locale === "ja" ? "環境変数の設定" : "Set Up Environment" }}
          </h2>
        </div>

        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">
              {{ locale === "ja" ? "何が起きるか" : "What happens" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground text-sm">
              {{
                locale === "ja"
                  ? "APIキーを設定することで、MulmoCastがOpenAIのサービス（音声合成、画像生成）にアクセスできるようになります。APIキーは、あなたが誰であるかをOpenAIに伝える「パスワード」のようなものです。"
                  : "By setting API keys, MulmoCast can access OpenAI services (text-to-speech, image generation). API keys are like 'passwords' that tell OpenAI who you are."
              }}
            </p>
          </CardContent>
        </Card>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? ".envファイルとは" : "What is a .env File?" }}
        </h3>
        <p class="text-muted-foreground mb-4 text-sm">
          {{
            locale === "ja"
              ? ".env（ドットイーエヌブイ）ファイルは、APIキーなどの機密情報を保存するためのテキストファイルです。このファイルは作業フォルダに置いておくと、MulmoCastが自動的に読み込みます。"
              : "A .env (dot-env) file is a text file for storing sensitive information like API keys. Place this file in your working folder and MulmoCast will automatically read it."
          }}
        </p>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "最小限の設定（必須）" : "Minimal Setup (Required)" }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{
            locale === "ja"
              ? "まず始めるには、OpenAIのAPIキーだけあれば大丈夫です。以下の内容で `.env` ファイルを作成してください："
              : "To get started, you only need an OpenAI API key. Create a `.env` file with the following content:"
          }}
        </p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code># {{ locale === "ja" ? "必須：OpenAI APIキー" : "Required: OpenAI API Key" }}
# {{ locale === "ja" ? "このキーで音声生成（TTS）と画像生成（DALL-E）の両方が使えます" : "This key enables both voice generation (TTS) and image generation (DALL-E)" }}
OPENAI_API_KEY=sk-your-api-key-here</code></pre>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{
            locale === "ja"
              ? "おすすめの設定（高品質な画像が必要な場合）"
              : "Recommended Setup (For Higher Quality Images)"
          }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{
            locale === "ja"
              ? "より高品質な画像を生成したい場合は、以下の設定を追加できます。ただし、gpt-image-1を使うにはOpenAIの組織認証が必要です。"
              : "For higher quality images, you can add the following settings. Note that gpt-image-1 requires OpenAI organization verification."
          }}
        </p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code># {{ locale === "ja" ? "必須" : "Required" }}
OPENAI_API_KEY=sk-your-api-key-here

# {{ locale === "ja" ? "高品質な画像生成モデル（要組織認証）" : "High quality image model (requires org verification)" }}
# {{ locale === "ja" ? "認証前はこの行をコメントアウトしておく" : "Comment out this line until you're verified" }}
# DEFAULT_OPENAI_IMAGE_MODEL=gpt-image-1</code></pre>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "フル設定（すべてのプロバイダーを使う場合）" : "Full Setup (For All Providers)" }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{
            locale === "ja"
              ? "将来的に他のTTSサービス（ElevenLabsなど）や動画生成（Replicate）を使いたい場合の完全な設定例です："
              : "Complete configuration example for using other TTS services (ElevenLabs) or video generation (Replicate):"
          }}
        </p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code># ============================================
# {{ locale === "ja" ? "必須" : "Required" }}
# ============================================
OPENAI_API_KEY=sk-your-api-key-here

# ============================================
# {{ locale === "ja" ? "画像生成（オプション）" : "Image Generation (Optional)" }}
# ============================================
# {{ locale === "ja" ? "高品質画像モデル（要OpenAI組織認証）" : "High quality model (requires OpenAI org verification)" }}
# DEFAULT_OPENAI_IMAGE_MODEL=gpt-image-1

# ============================================
# {{ locale === "ja" ? "音声生成 - 他のTTSプロバイダー（オプション）" : "Voice Generation - Other TTS Providers (Optional)" }}
# ============================================
# ElevenLabs - {{ locale === "ja" ? "高品質で感情豊かな音声" : "High quality emotional voices" }}
# ELEVENLABS_API_KEY=your-elevenlabs-key

# {{ locale === "ja" ? "ことだま - 日本語TTS" : "Kotodama - Japanese TTS" }}
# KOTODAMA_API_KEY=your-kotodama-key

# Google Gemini TTS
# GEMINI_API_KEY=your-gemini-key

# ============================================
# {{ locale === "ja" ? "動画生成・リップシンク（オプション）" : "Video Generation & Lip Sync (Optional)" }}
# ============================================
# Replicate - {{ locale === "ja" ? "リップシンク用" : "For lip sync" }}
# REPLICATE_API_TOKEN=your-replicate-token</code></pre>
        </div>

        <div class="border-border rounded-lg border p-4">
          <h4 class="text-foreground mb-3 text-sm font-medium">
            {{ locale === "ja" ? ".envファイルの作成方法（3つの方法）" : "How to Create .env File (3 Methods)" }}
          </h4>

          <div class="space-y-4">
            <!-- Method 1: Terminal -->
            <div class="bg-muted rounded p-3">
              <p class="text-foreground mb-2 text-sm font-medium">
                {{ locale === "ja" ? "方法1: ターミナルで作成" : "Method 1: Using Terminal" }}
              </p>
              <div class="overflow-x-auto rounded bg-black/10 p-2 dark:bg-white/10">
                <pre
                  class="text-xs"
                ><code># {{ locale === "ja" ? "作業フォルダに移動して" : "Navigate to your working folder, then" }}
cd ~/my-mulmo-project

# {{ locale === "ja" ? ".envファイルを作成" : "Create .env file" }}
echo "OPENAI_API_KEY=sk-your-api-key-here" > .env</code></pre>
              </div>
            </div>

            <!-- Method 2: Text Editor -->
            <div class="bg-muted rounded p-3">
              <p class="text-foreground mb-2 text-sm font-medium">
                {{ locale === "ja" ? "方法2: テキストエディタで作成" : "Method 2: Using Text Editor" }}
              </p>
              <ol class="text-muted-foreground space-y-1 text-xs">
                <li>1. {{ locale === "ja" ? "メモ帳やVSCodeを開く" : "Open Notepad or VSCode" }}</li>
                <li>
                  2. <code class="text-primary">OPENAI_API_KEY=sk-your-api-key-here</code>
                  {{ locale === "ja" ? "と入力" : "type this" }}
                </li>
                <li>
                  3.
                  {{
                    locale === "ja" ? "作業フォルダに `.env` という名前で保存" : "Save as `.env` in your working folder"
                  }}
                </li>
              </ol>
            </div>

            <!-- Method 3: VS Code -->
            <div class="bg-muted rounded p-3">
              <p class="text-foreground mb-2 text-sm font-medium">
                {{ locale === "ja" ? "方法3: VS Codeで作成" : "Method 3: Using VS Code" }}
              </p>
              <ol class="text-muted-foreground space-y-1 text-xs">
                <li>1. {{ locale === "ja" ? "VS Codeで作業フォルダを開く" : "Open working folder in VS Code" }}</li>
                <li>
                  2.
                  {{
                    locale === "ja"
                      ? "エクスプローラーで右クリック → 「New File」"
                      : "Right-click in Explorer → 'New File'"
                  }}
                </li>
                <li>3. {{ locale === "ja" ? "ファイル名に `.env` と入力" : "Enter `.env` as filename" }}</li>
                <li>4. {{ locale === "ja" ? "内容を入力して保存" : "Enter content and save" }}</li>
              </ol>
            </div>
          </div>
        </div>

        <!-- Security Warning -->
        <div class="mt-4 rounded border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
          <p class="mb-2 text-sm font-medium text-red-800 dark:text-red-200">
            <AlertTriangle class="mr-1 inline h-4 w-4" />
            {{ locale === "ja" ? "セキュリティに関する重要な注意" : "Important Security Note" }}
          </p>
          <ul class="space-y-1 text-xs text-red-800 dark:text-red-200">
            <li>
              •
              {{
                locale === "ja"
                  ? ".envファイルには機密情報が含まれるため、GitHubなどに公開しないでください"
                  : "The .env file contains sensitive information - never publish it to GitHub"
              }}
            </li>
            <li>
              •
              {{
                locale === "ja"
                  ? "Gitを使っている場合は、.gitignoreファイルに `.env` を追加してください"
                  : "If using Git, add `.env` to your .gitignore file"
              }}
            </li>
            <li>
              •
              {{
                locale === "ja"
                  ? "APIキーが漏洩した場合は、すぐにOpenAIでキーを無効化してください"
                  : "If your API key is leaked, immediately disable it on OpenAI"
              }}
            </li>
          </ul>
        </div>

        <!-- External Links -->
        <div class="text-muted-foreground mt-4 rounded-lg border border-dashed p-4 text-sm">
          <p class="mb-2 font-medium">{{ locale === "ja" ? "参考リンク" : "Reference Links" }}</p>
          <ul class="space-y-1">
            <li>
              <a :href="localizedUrl('/docs/cli/providers')" class="text-primary hover:underline">
                {{ locale === "ja" ? "プロバイダー設定" : "Provider Settings" }}
              </a>
              - {{ locale === "ja" ? "各プロバイダーの詳細な設定方法" : "Detailed configuration for each provider" }}
            </li>
            <li>
              <a
                href="https://github.com/receptron/mulmocast-cli/blob/main/docs/feature.md"
                target="_blank"
                rel="noopener"
                class="text-primary hover:underline"
              >
                <ExternalLink class="mr-1 inline h-3 w-3" />
                Feature Documentation
              </a>
              - {{ locale === "ja" ? "環境変数の完全なリスト" : "Complete list of environment variables" }}
            </li>
          </ul>
        </div>
      </section>

      <!-- Hands-on Tutorial -->
      <section class="mb-12">
        <div class="mb-4 flex items-center gap-3">
          <div
            class="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full font-bold"
          >
            3
          </div>
          <h2 class="text-foreground text-2xl font-semibold">
            {{ locale === "ja" ? "動画を作ってみよう（ハンズオン）" : "Create a Video (Hands-on Tutorial)" }}
          </h2>
        </div>

        <Card class="mb-6 border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950">
          <CardContent class="pt-6">
            <p class="text-muted-foreground text-sm">
              {{
                locale === "ja"
                  ? "以下のステップに沿って進めば、確実に最初の動画が作成できます。各ステップの MulmoScript（台本）はそのままコピーして使えます。OpenAI APIキーがあれば、特別な設定なしで動作します。"
                  : "Follow these steps to create your first video. You can copy and use the MulmoScript at each step as-is. It works with just an OpenAI API key, no special configuration needed."
              }}
            </p>
          </CardContent>
        </Card>

        <!-- Tutorial Step 1 -->
        <div class="border-border mb-6 rounded-lg border p-6">
          <div class="mb-4 flex items-center gap-3">
            <div
              class="bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
            >
              3.1
            </div>
            <h3 class="text-foreground text-lg font-medium">
              {{ locale === "ja" ? "作業フォルダを作成" : "Create a Working Folder" }}
            </h3>
          </div>

          <p class="text-muted-foreground mb-3 text-sm">
            {{
              locale === "ja"
                ? "まず、動画作成に使う専用のフォルダを作成します。このフォルダに台本ファイルや生成された動画が保存されます。"
                : "First, create a dedicated folder for video creation. Script files and generated videos will be saved here."
            }}
          </p>

          <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
            <pre
              class="text-sm"
            ><code># {{ locale === "ja" ? "作業フォルダを作成して移動" : "Create working folder and navigate to it" }}
mkdir my-first-mulmo
cd my-first-mulmo</code></pre>
          </div>

          <div class="rounded border border-green-200 bg-green-50 p-3 dark:border-green-900 dark:bg-green-950">
            <p class="text-xs text-green-800 dark:text-green-200">
              <CheckCircle class="mr-1 inline h-3 w-3" />
              <strong>{{ locale === "ja" ? "確認：" : "Verify:" }}</strong>
              {{ locale === "ja" ? "ターミナルの現在位置が " : "Your terminal should show " }}
              <code class="rounded bg-green-100 px-1 dark:bg-green-900">my-first-mulmo</code>
              {{ locale === "ja" ? " になっていることを確認" : " as the current directory" }}
            </p>
          </div>
        </div>

        <!-- Tutorial Step 2 -->
        <div class="border-border mb-6 rounded-lg border p-6">
          <div class="mb-4 flex items-center gap-3">
            <div
              class="bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
            >
              3.2
            </div>
            <h3 class="text-foreground text-lg font-medium">
              {{ locale === "ja" ? ".envファイルを作成" : "Create .env File" }}
            </h3>
          </div>

          <p class="text-muted-foreground mb-3 text-sm">
            {{
              locale === "ja"
                ? "OpenAI APIキーを設定するファイルを作成します。以下のコマンドを実行してください（sk-xxxの部分を実際のAPIキーに置き換えてください）："
                : "Create a file to set your OpenAI API key. Run the following command (replace sk-xxx with your actual API key):"
            }}
          </p>

          <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
            <pre
              class="text-sm"
            ><code># {{ locale === "ja" ? ".envファイルを作成（APIキーを書き込む）" : "Create .env file (write your API key)" }}
echo "OPENAI_API_KEY=sk-your-actual-api-key-here" > .env</code></pre>
          </div>

          <div class="rounded border border-green-200 bg-green-50 p-3 dark:border-green-900 dark:bg-green-950">
            <p class="text-xs text-green-800 dark:text-green-200">
              <CheckCircle class="mr-1 inline h-3 w-3" />
              <strong>{{ locale === "ja" ? "確認：" : "Verify:" }}</strong>
              <code class="rounded bg-green-100 px-1 dark:bg-green-900">cat .env</code>
              {{ locale === "ja" ? " を実行して、APIキーが表示されることを確認" : " should display your API key" }}
            </p>
          </div>
        </div>

        <!-- Tutorial Step 3 -->
        <div class="border-border mb-6 rounded-lg border p-6">
          <div class="mb-4 flex items-center gap-3">
            <div
              class="bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
            >
              3.3
            </div>
            <h3 class="text-foreground text-lg font-medium">
              {{ locale === "ja" ? "台本ファイルを作成" : "Create Script File" }}
            </h3>
          </div>

          <p class="text-muted-foreground mb-3 text-sm">
            {{
              locale === "ja"
                ? "以下のMulmoScript（台本）をコピーして、hello.json というファイル名で保存してください。これは最もシンプルな1シーン動画です。"
                : "Copy the following MulmoScript and save it as hello.json. This is the simplest 1-scene video."
            }}
          </p>

          <div class="mb-3 flex items-center gap-2">
            <span class="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-medium">hello.json</span>
            <span class="text-muted-foreground text-xs">{{
              locale === "ja" ? "そのままコピー可能" : "Copy as-is"
            }}</span>
          </div>

          <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
            <pre class="text-sm"><code>{
  "$mulmocast": { "version": "1.0" },
  "title": "Hello MulmoCast",
  "lang": "{{ locale === "ja" ? "ja" : "en" }}",
  "speechParams": {
    "speakers": {
      "Narrator": {
        "provider": "openai",
        "voiceId": "shimmer"
      }
    }
  },
  "imageParams": {
    "provider": "openai",
    "model": "dall-e-3"
  },
  "beats": [
    {
      "speaker": "Narrator",
      "text": "{{ locale === "ja" ? "こんにちは！これはMulmoCastで作った最初の動画です。たった1つのJSONファイルから、音声と画像が自動生成されました。" : "Hello! This is my first video made with MulmoCast. Audio and images were automatically generated from just one JSON file." }}",
      "imagePrompt": "{{ locale === "ja" ? "青い空と白い雲、明るく爽やかな朝の風景、希望に満ちたイメージ" : "Blue sky with white clouds, bright and refreshing morning landscape, hopeful atmosphere" }}"
    }
  ]
}</code></pre>
          </div>

          <h4 class="text-foreground mb-2 text-sm font-medium">
            {{ locale === "ja" ? "ファイル保存方法" : "How to Save the File" }}
          </h4>
          <div class="space-y-2">
            <div class="bg-muted rounded p-3">
              <p class="text-foreground mb-1 text-xs font-medium">
                {{ locale === "ja" ? "方法A: ターミナルで作成" : "Method A: Using Terminal" }}
              </p>
              <code class="text-muted-foreground text-xs">
                cat > hello.json
                <br />
                {{
                  locale === "ja"
                    ? "（上記のJSONをペースト後、Ctrl+D で保存）"
                    : "(Paste JSON above, then Ctrl+D to save)"
                }}
              </code>
            </div>
            <div class="bg-muted rounded p-3">
              <p class="text-foreground mb-1 text-xs font-medium">
                {{ locale === "ja" ? "方法B: エディタで作成" : "Method B: Using Editor" }}
              </p>
              <p class="text-muted-foreground text-xs">
                {{
                  locale === "ja"
                    ? "VSCode、メモ帳などでJSONを貼り付け、hello.json として保存"
                    : "Paste JSON in VSCode, Notepad, etc., and save as hello.json"
                }}
              </p>
            </div>
          </div>
        </div>

        <!-- Tutorial Step 4 -->
        <div class="border-border mb-6 rounded-lg border p-6">
          <div class="mb-4 flex items-center gap-3">
            <div
              class="bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
            >
              3.4
            </div>
            <h3 class="text-foreground text-lg font-medium">
              {{ locale === "ja" ? "動画を生成" : "Generate Video" }}
            </h3>
          </div>

          <p class="text-muted-foreground mb-3 text-sm">
            {{
              locale === "ja"
                ? "以下のコマンドを実行すると、MulmoCastが台本を読み込み、音声生成→画像生成→動画結合を自動で行います。"
                : "Run the following command. MulmoCast will read the script and automatically generate audio, images, and combine them into a video."
            }}
          </p>

          <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
            <pre class="text-sm"><code>mulmo movie hello.json</code></pre>
          </div>

          <h4 class="text-foreground mb-2 text-sm font-medium">
            {{ locale === "ja" ? "何が起きるか" : "What Happens" }}
          </h4>
          <ol class="text-muted-foreground mb-4 space-y-2 text-sm">
            <li class="flex items-start gap-2">
              <span class="text-primary font-bold">1.</span>
              {{
                locale === "ja"
                  ? "音声生成：text の内容を OpenAI TTS で読み上げた音声ファイル（.mp3）が生成されます"
                  : "Audio: Generates speech audio (.mp3) from 'text' using OpenAI TTS"
              }}
            </li>
            <li class="flex items-start gap-2">
              <span class="text-primary font-bold">2.</span>
              {{
                locale === "ja"
                  ? "画像生成：imagePrompt から DALL-E 3 で画像（.png）が生成されます"
                  : "Image: Generates image (.png) from 'imagePrompt' using DALL-E 3"
              }}
            </li>
            <li class="flex items-start gap-2">
              <span class="text-primary font-bold">3.</span>
              {{
                locale === "ja"
                  ? "動画結合：ffmpeg で音声と画像を結合し、hello.mp4 が出力されます"
                  : "Video: Combines audio and image using ffmpeg, outputs hello.mp4"
              }}
            </li>
          </ol>

          <div class="rounded border border-green-200 bg-green-50 p-3 dark:border-green-900 dark:bg-green-950">
            <p class="text-xs text-green-800 dark:text-green-200">
              <CheckCircle class="mr-1 inline h-3 w-3" />
              <strong>{{ locale === "ja" ? "成功の確認：" : "Success Check:" }}</strong>
              {{
                locale === "ja"
                  ? "フォルダに hello.mp4 が生成されていれば成功です！動画プレーヤーで再生してみてください。"
                  : "If hello.mp4 is created in the folder, you're done! Play it with a video player."
              }}
            </p>
          </div>

          <div class="mt-4 rounded border border-amber-200 bg-amber-50 p-3 dark:border-amber-900 dark:bg-amber-950">
            <p class="mb-2 text-xs font-medium text-amber-800 dark:text-amber-200">
              <AlertTriangle class="mr-1 inline h-3 w-3" />
              {{ locale === "ja" ? "所要時間とコストの目安" : "Time & Cost Estimate" }}
            </p>
            <ul class="space-y-1 text-xs text-amber-800 dark:text-amber-200">
              <li>• {{ locale === "ja" ? "所要時間：約30秒〜1分" : "Time: ~30 seconds to 1 minute" }}</li>
              <li>
                •
                {{
                  locale === "ja" ? "コスト：約$0.05〜$0.15（画像1枚 + 音声）" : "Cost: ~$0.05-$0.15 (1 image + audio)"
                }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Congratulations -->
        <Card class="mb-6 border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950">
          <CardContent class="pt-6">
            <div class="flex items-start gap-4">
              <CheckCircle class="h-8 w-8 flex-shrink-0 text-green-600 dark:text-green-400" />
              <div>
                <h3 class="text-foreground mb-2 text-lg font-medium">
                  {{ locale === "ja" ? "おめでとうございます！" : "Congratulations!" }}
                </h3>
                <p class="text-muted-foreground text-sm">
                  {{
                    locale === "ja"
                      ? "最初の動画が完成しました！次のステップで、より複雑な動画を作成してみましょう。"
                      : "Your first video is complete! Try creating more complex videos in the next steps."
                  }}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <!-- Step 4: Try More Examples -->
      <section class="mb-12">
        <div class="mb-4 flex items-center gap-3">
          <div
            class="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full font-bold"
          >
            4
          </div>
          <h2 class="text-foreground text-2xl font-semibold">
            {{ locale === "ja" ? "もっと試してみよう" : "Try More Examples" }}
          </h2>
        </div>

        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "1シーンの動画が作れたら、次は複数シーンの動画に挑戦してみましょう。以下のサンプルをコピーしてそのまま使えます。"
              : "Now that you've created a 1-scene video, try creating multi-scene videos. Copy and use the samples below."
          }}
        </p>

        <Tabs default-value="3scene" class="w-full">
          <TabsList class="mb-4">
            <TabsTrigger value="3scene">{{ locale === "ja" ? "3シーン動画" : "3-Scene Video" }}</TabsTrigger>
            <TabsTrigger value="2speaker">{{ locale === "ja" ? "2人の対話" : "2-Speaker Dialogue" }}</TabsTrigger>
          </TabsList>

          <TabsContent value="3scene">
            <div class="mb-3 flex items-center gap-2">
              <span class="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-medium">intro.json</span>
              <span class="text-muted-foreground text-xs">{{
                locale === "ja" ? "3シーンのイントロ動画" : "3-scene intro video"
              }}</span>
            </div>

            <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
              <pre class="text-sm"><code>{
  "$mulmocast": { "version": "1.0" },
  "title": "{{ locale === "ja" ? "MulmoCast紹介" : "MulmoCast Introduction" }}",
  "lang": "{{ locale === "ja" ? "ja" : "en" }}",
  "speechParams": {
    "speakers": {
      "Narrator": {
        "provider": "openai",
        "voiceId": "nova"
      }
    }
  },
  "imageParams": {
    "provider": "openai",
    "model": "dall-e-3"
  },
  "beats": [
    {
      "speaker": "Narrator",
      "text": "{{ locale === "ja" ? "MulmoCastへようこそ！このツールを使えば、誰でも簡単にプロフェッショナルな動画を作成できます。" : "Welcome to MulmoCast! With this tool, anyone can easily create professional videos." }}",
      "imagePrompt": "{{ locale === "ja" ? "モダンでスタイリッシュなソフトウェアのロゴ、青と紫のグラデーション背景" : "Modern stylish software logo, blue and purple gradient background" }}"
    },
    {
      "speaker": "Narrator",
      "text": "{{ locale === "ja" ? "必要なのはテキストだけ。AIが自動で画像を生成し、音声を読み上げ、動画に仕上げます。" : "All you need is text. AI automatically generates images, reads the text, and creates a video." }}",
      "imagePrompt": "{{ locale === "ja" ? "テキストから画像・音声・動画が生成される様子を示す図解、フローチャート風" : "Diagram showing text being transformed into images, audio, and video, flowchart style" }}"
    },
    {
      "speaker": "Narrator",
      "text": "{{ locale === "ja" ? "さあ、あなたも今日から動画クリエイターです！" : "Now you're a video creator too!" }}",
      "imagePrompt": "{{ locale === "ja" ? "喜んでいる人のイラスト、成功を祝う明るいシーン、紙吹雪" : "Happy person illustration, celebrating success, confetti" }}"
    }
  ]
}</code></pre>
            </div>

            <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-3">
              <pre class="text-sm"><code>mulmo movie intro.json</code></pre>
            </div>
          </TabsContent>

          <TabsContent value="2speaker">
            <div class="mb-3 flex items-center gap-2">
              <span class="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-medium">dialogue.json</span>
              <span class="text-muted-foreground text-xs">{{
                locale === "ja" ? "2人の対話形式" : "2-speaker dialogue format"
              }}</span>
            </div>

            <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
              <pre class="text-sm"><code>{
  "$mulmocast": { "version": "1.0" },
  "title": "{{ locale === "ja" ? "MulmoCast対談" : "MulmoCast Dialogue" }}",
  "lang": "{{ locale === "ja" ? "ja" : "en" }}",
  "speechParams": {
    "speakers": {
      "Host": {
        "provider": "openai",
        "voiceId": "nova"
      },
      "Guest": {
        "provider": "openai",
        "voiceId": "echo"
      }
    }
  },
  "imageParams": {
    "provider": "openai",
    "model": "dall-e-3"
  },
  "beats": [
    {
      "speaker": "Host",
      "text": "{{ locale === "ja" ? "こんにちは！今日はMulmoCastについてお話しします。" : "Hello! Today we'll talk about MulmoCast." }}",
      "imagePrompt": "{{ locale === "ja" ? "明るいスタジオ、ポッドキャスト収録風景、マイクとヘッドフォン" : "Bright studio, podcast recording scene, microphone and headphones" }}"
    },
    {
      "speaker": "Guest",
      "text": "{{ locale === "ja" ? "よろしくお願いします。MulmoCastは本当に画期的なツールですね。" : "Thank you for having me. MulmoCast is truly a revolutionary tool." }}",
      "imagePrompt": "{{ locale === "ja" ? "対談している2人のシルエット、プロフェッショナルな雰囲気" : "Silhouettes of two people in conversation, professional atmosphere" }}"
    },
    {
      "speaker": "Host",
      "text": "{{ locale === "ja" ? "テキストを書くだけで動画ができるなんて、すごい時代になりましたね！" : "It's amazing that you can create videos just by writing text!" }}",
      "imagePrompt": "{{ locale === "ja" ? "未来的なテクノロジーのイメージ、光るデジタルインターフェース" : "Futuristic technology image, glowing digital interface" }}"
    }
  ]
}</code></pre>
            </div>

            <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-3">
              <pre class="text-sm"><code>mulmo movie dialogue.json</code></pre>
            </div>

            <div class="border-border rounded-lg border p-3">
              <p class="text-muted-foreground text-xs">
                <strong class="text-foreground">{{ locale === "ja" ? "ポイント：" : "Key Points:" }}</strong>
                {{
                  locale === "ja"
                    ? "speakers に複数の話者を定義し、各 beat で speaker を切り替えることで対話形式の動画が作れます。voiceId を変えることで異なる声を使い分けられます。"
                    : "Define multiple speakers in 'speakers' and switch 'speaker' in each beat to create dialogue-style videos. Different voiceIds give different voices."
                }}
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <!-- External Links -->
        <div class="text-muted-foreground mt-4 rounded-lg border border-dashed p-4 text-sm">
          <p class="mb-2 font-medium">{{ locale === "ja" ? "詳しく学ぶ" : "Learn More" }}</p>
          <ul class="space-y-1">
            <li>
              <a :href="localizedUrl('/docs/cli/mulmoscript')" class="text-primary hover:underline">
                MulmoScript{{ locale === "ja" ? "リファレンス" : " Reference" }}
              </a>
              - {{ locale === "ja" ? "台本フォーマットの詳細" : "Detailed script format documentation" }}
            </li>
            <li>
              <a
                href="https://zenn.dev/snakajima/articles/mulmocast-create-methods"
                target="_blank"
                rel="noopener"
                class="text-primary hover:underline"
              >
                <ExternalLink class="mr-1 inline h-3 w-3" />
                {{ locale === "ja" ? "MulmoScript作成方法5選" : "5 Ways to Create MulmoScript" }}
              </a>
              - {{ locale === "ja" ? "Zenn記事" : "Zenn article (Japanese)" }}
            </li>
          </ul>
        </div>
      </section>

      <!-- Step 5: AI Script Creation -->
      <section class="mb-12">
        <div class="mb-4 flex items-center gap-3">
          <div
            class="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full font-bold"
          >
            5
          </div>
          <h2 class="text-foreground text-2xl font-semibold">
            {{ locale === "ja" ? "AIと対話して台本を作成" : "Create Script with AI" }}
          </h2>
        </div>

        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">
              {{ locale === "ja" ? "何が起きるか" : "What happens" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground text-sm">
              {{
                locale === "ja"
                  ? "JSONを手書きする代わりに、AIと会話しながら台本を作成できます。「3分のプレゼンを作りたい」「子供向けの物語を作りたい」など、自然な言葉で伝えるだけで台本が完成します。"
                  : "Instead of writing JSON manually, you can create scripts by chatting with AI. Just describe what you want in natural language like 'I want to create a 3-minute presentation' or 'I want to make a children's story'."
              }}
            </p>
          </CardContent>
        </Card>

        <h4 class="text-foreground mb-2 font-medium">
          {{ locale === "ja" ? "コマンド" : "Command" }}
        </h4>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>mulmo tool scripting -i -t presentation -o ./ -s my_video</code></pre>
        </div>

        <h4 class="text-foreground mb-2 font-medium">
          {{ locale === "ja" ? "オプションの説明" : "Option Explanation" }}
        </h4>
        <div class="mb-4 overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "オプション" : "Option" }}
                </th>
                <th class="border-border border px-3 py-2 text-left">{{ locale === "ja" ? "意味" : "Meaning" }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">-i</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "インタラクティブモード（AIと対話）" : "Interactive mode (chat with AI)" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">-t presentation</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "テンプレート：プレゼンテーション" : "Template: presentation" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">-o ./</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "出力先：現在のフォルダ" : "Output: current folder" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">-s my_video</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "出力ファイル名" : "Output filename" }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 class="text-foreground mb-2 font-medium">
          {{ locale === "ja" ? "テンプレートの種類" : "Template Types" }}
        </h4>
        <div class="mb-4 grid gap-2 md:grid-cols-3">
          <div class="bg-muted rounded p-3">
            <code class="text-primary text-sm">presentation</code>
            <p class="text-muted-foreground mt-1 text-xs">{{ locale === "ja" ? "プレゼン" : "Presentation" }}</p>
          </div>
          <div class="bg-muted rounded p-3">
            <code class="text-primary text-sm">podcast</code>
            <p class="text-muted-foreground mt-1 text-xs">{{ locale === "ja" ? "ポッドキャスト" : "Podcast" }}</p>
          </div>
          <div class="bg-muted rounded p-3">
            <code class="text-primary text-sm">children_book</code>
            <p class="text-muted-foreground mt-1 text-xs">{{ locale === "ja" ? "絵本" : "Children's book" }}</p>
          </div>
          <div class="bg-muted rounded p-3">
            <code class="text-primary text-sm">news</code>
            <p class="text-muted-foreground mt-1 text-xs">{{ locale === "ja" ? "ニュース" : "News" }}</p>
          </div>
          <div class="bg-muted rounded p-3">
            <code class="text-primary text-sm">tutorial</code>
            <p class="text-muted-foreground mt-1 text-xs">{{ locale === "ja" ? "チュートリアル" : "Tutorial" }}</p>
          </div>
          <div class="bg-muted rounded p-3">
            <code class="text-primary text-sm">story</code>
            <p class="text-muted-foreground mt-1 text-xs">{{ locale === "ja" ? "物語" : "Story" }}</p>
          </div>
        </div>
      </section>

      <!-- Step 6: Other Output Formats -->
      <section class="mb-12">
        <div class="mb-4 flex items-center gap-3">
          <div
            class="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full font-bold"
          >
            6
          </div>
          <h2 class="text-foreground text-2xl font-semibold">
            {{ locale === "ja" ? "その他の出力形式" : "Other Output Formats" }}
          </h2>
        </div>

        <p class="text-muted-foreground mb-4 text-sm">
          {{
            locale === "ja"
              ? "同じ MulmoScript から、動画以外の形式でも出力できます。"
              : "You can output in formats other than video from the same MulmoScript."
          }}
        </p>

        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre
            class="text-sm"
          ><code># {{ locale === "ja" ? "音声のみ（ポッドキャスト向け）" : "Audio only (for podcasts)" }}
mulmo audio hello.json
# → hello.mp3

# {{ locale === "ja" ? "画像のみ（スライド素材）" : "Images only (slide materials)" }}
mulmo images hello.json
# → hello/ {{ locale === "ja" ? "フォルダに画像" : "folder with images" }}

# {{ locale === "ja" ? "PDF（プレゼン資料）" : "PDF (presentation materials)" }}
mulmo pdf hello.json
# → hello.pdf</code></pre>
        </div>
      </section>

      <!-- Next Steps -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "次のステップ" : "Next Steps" }}
        </h2>
        <div class="grid gap-4 md:grid-cols-2">
          <a
            :href="localizedUrl('/docs/cli/mulmoscript')"
            class="border-border hover:border-primary group rounded-lg border p-4 transition-colors"
          >
            <h3 class="text-foreground group-hover:text-primary mb-1 font-medium">
              {{ locale === "ja" ? "MulmoScriptを学ぶ" : "Learn MulmoScript" }}
            </h3>
            <p class="text-muted-foreground text-sm">
              {{
                locale === "ja"
                  ? "台本フォーマットの詳細を理解して、より複雑な動画を作成"
                  : "Understand the script format to create more complex videos"
              }}
            </p>
          </a>
          <a
            :href="localizedUrl('/docs/cli/providers')"
            class="border-border hover:border-primary group rounded-lg border p-4 transition-colors"
          >
            <h3 class="text-foreground group-hover:text-primary mb-1 font-medium">
              {{ locale === "ja" ? "プロバイダーを変更" : "Change Providers" }}
            </h3>
            <p class="text-muted-foreground text-sm">
              {{
                locale === "ja"
                  ? "音声や画像の生成に使うAIサービスをカスタマイズ"
                  : "Customize the AI services used for audio and image generation"
              }}
            </p>
          </a>
          <a
            :href="localizedUrl('/docs/cli/advanced')"
            class="border-border hover:border-primary group rounded-lg border p-4 transition-colors"
          >
            <h3 class="text-foreground group-hover:text-primary mb-1 font-medium">
              {{ locale === "ja" ? "高度な機能" : "Advanced Features" }}
            </h3>
            <p class="text-muted-foreground text-sm">
              {{
                locale === "ja"
                  ? "リップシンク、トランジション、フィルターなどを使う"
                  : "Use lip sync, transitions, filters, and more"
              }}
            </p>
          </a>
          <a
            :href="localizedUrl('/docs/app')"
            class="border-border hover:border-primary group rounded-lg border p-4 transition-colors"
          >
            <h3 class="text-foreground group-hover:text-primary mb-1 font-medium">
              {{ locale === "ja" ? "GUIアプリを使う" : "Use the GUI App" }}
            </h3>
            <p class="text-muted-foreground text-sm">
              {{
                locale === "ja"
                  ? "コマンドラインが苦手ならMulmoCast Appがおすすめ"
                  : "MulmoCast App is recommended if you prefer not using command line"
              }}
            </p>
          </a>
        </div>
      </section>

      <!-- Navigation -->
      <div class="border-border flex items-center justify-between border-t pt-6">
        <a
          :href="localizedUrl('/docs/cli')"
          class="text-muted-foreground hover:text-primary inline-flex items-center text-sm"
        >
          <ChevronLeft class="mr-1 h-4 w-4" />
          {{ locale === "ja" ? "CLI概要" : "CLI Overview" }}
        </a>
        <a
          :href="localizedUrl('/docs/cli/mulmoscript')"
          class="text-muted-foreground hover:text-primary inline-flex items-center text-sm"
        >
          MulmoScript
          <ChevronRight class="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import Navigation from "../../../components/Navigation.vue";
import { useLocalizedUrl } from "../../../i18n/utils";
import { ChevronLeft, ChevronRight, CheckCircle, Play, ExternalLink, AlertTriangle } from "lucide-vue-next";

const { locale } = useI18n();
const localizedUrl = useLocalizedUrl();
</script>
