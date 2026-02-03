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
          <span class="text-foreground">MulmoScript</span>
        </div>
        <h1 class="text-foreground text-3xl font-bold">MulmoScript</h1>
        <p class="text-muted-foreground mt-2 text-lg">
          {{
            locale === "ja"
              ? "動画の「設計図」となるJSON形式の台本フォーマット"
              : "JSON-based script format that serves as the 'blueprint' for your video"
          }}
        </p>
      </div>

      <!-- What is MulmoScript -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "MulmoScriptとは" : "What is MulmoScript?" }}
        </h2>
        <Card>
          <CardContent class="pt-6">
            <p class="text-muted-foreground mb-4">
              {{
                locale === "ja"
                  ? "MulmoScriptは、動画を作るための「レシピ」のようなものです。料理のレシピに材料と手順が書いてあるように、MulmoScriptには「何を話すか」「どんな画像を使うか」「誰が話すか」が書かれています。"
                  : "MulmoScript is like a 'recipe' for creating videos. Just as a cooking recipe lists ingredients and steps, MulmoScript describes 'what to say', 'what images to use', and 'who speaks'."
              }}
            </p>

            <p class="text-muted-foreground mb-4">
              {{
                locale === "ja"
                  ? "MulmoScriptはJSON形式のテキストファイルです。JSONは構造化されたデータを記述するための標準的なフォーマットで、プログラミング言語やツール間でデータをやり取りする際によく使われます。"
                  : "MulmoScript is a text file in JSON format. JSON is a standard format for describing structured data, commonly used for data exchange between programming languages and tools."
              }}
            </p>

            <div class="bg-muted mb-4 rounded-lg p-4">
              <h4 class="text-foreground mb-2 font-medium">
                {{ locale === "ja" ? "MulmoScriptワークフロー" : "MulmoScript Workflow" }}
              </h4>
              <div class="flex flex-col items-center gap-2 md:flex-row md:gap-4">
                <div class="bg-background rounded-lg p-3 text-center">
                  <p class="text-foreground text-sm font-medium">
                    1. {{ locale === "ja" ? "台本作成" : "Create Script" }}
                  </p>
                  <p class="text-muted-foreground text-xs">
                    {{ locale === "ja" ? "AIと対話 or 手動" : "Chat with AI or manual" }}
                  </p>
                </div>
                <ArrowRight class="text-muted-foreground hidden h-4 w-4 md:block" />
                <ChevronDown class="text-muted-foreground h-4 w-4 md:hidden" />
                <div class="bg-background rounded-lg p-3 text-center">
                  <p class="text-foreground text-sm font-medium">
                    2. {{ locale === "ja" ? "コマンド実行" : "Run Command" }}
                  </p>
                  <p class="text-muted-foreground text-xs">mulmo movie script.json</p>
                </div>
                <ArrowRight class="text-muted-foreground hidden h-4 w-4 md:block" />
                <ChevronDown class="text-muted-foreground h-4 w-4 md:hidden" />
                <div class="bg-background rounded-lg p-3 text-center">
                  <p class="text-foreground text-sm font-medium">
                    3. {{ locale === "ja" ? "AI自動生成" : "AI Generation" }}
                  </p>
                  <p class="text-muted-foreground text-xs">
                    {{ locale === "ja" ? "音声・画像・動画" : "Audio, images, video" }}
                  </p>
                </div>
              </div>
            </div>

            <div class="rounded border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950">
              <p class="text-sm text-blue-800 dark:text-blue-200">
                <strong>{{ locale === "ja" ? "重要：" : "Important:" }}</strong>
                {{
                  locale === "ja"
                    ? "MulmoScriptを自分で書く必要はありません。`mulmo tool scripting -i` コマンドでAIと対話しながら作成できます。手動で書くのは、細かいカスタマイズが必要な場合や、プログラムから自動生成する場合だけです。"
                    : "You don't need to write MulmoScript yourself. You can create it by chatting with AI using `mulmo tool scripting -i`. Manual writing is only needed for detailed customization or programmatic generation."
                }}
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- External Links -->
        <div class="text-muted-foreground mt-4 rounded-lg border border-dashed p-4 text-sm">
          <p class="mb-2 font-medium">{{ locale === "ja" ? "参考リンク" : "Reference Links" }}</p>
          <ul class="space-y-1">
            <li>
              <a
                href="https://github.com/receptron/mulmocast-cli/blob/main/src/types/schema.ts"
                target="_blank"
                rel="noopener"
                class="text-primary hover:underline"
              >
                <ExternalLink class="mr-1 inline h-3 w-3" />
                {{
                  locale === "ja"
                    ? "MulmoScriptスキーマ定義（TypeScript）"
                    : "MulmoScript Schema Definition (TypeScript)"
                }}
              </a>
            </li>
            <li>
              <a
                href="https://zenn.dev/snakajima/articles/mulmocast-create-methods"
                target="_blank"
                rel="noopener"
                class="text-primary hover:underline"
              >
                <ExternalLink class="mr-1 inline h-3 w-3" />
                {{
                  locale === "ja" ? "MulmoScript作成方法5選（Zenn記事）" : "5 Ways to Create MulmoScript (Zenn article)"
                }}
              </a>
            </li>
          </ul>
        </div>
      </section>

      <!-- Basic Structure -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "基本構造を理解する" : "Understanding Basic Structure" }}
        </h2>

        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "MulmoScriptの構造は非常にシンプルです。最小限の構成要素だけで動画を作ることができます。まずは最もシンプルな例を見てみましょう："
              : "The MulmoScript structure is very simple. You can create videos with just minimal components. Let's look at the simplest example:"
          }}
        </p>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "最小構成のMulmoScript" : "Minimal MulmoScript" }}
        </h3>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "$mulmocast": { "version": "1.0" },
  "title": "{{ locale === "ja" ? "自己紹介動画" : "Self Introduction Video" }}",
  "lang": "{{ locale === "ja" ? "ja" : "en" }}",
  "beats": [
    {
      "text": "{{ locale === "ja" ? "こんにちは、私の名前は太郎です。" : "Hello, my name is John." }}",
      "imagePrompt": "{{ locale === "ja" ? "笑顔の人物" : "A smiling person" }}"
    }
  ]
}</code></pre>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "各項目の詳細説明" : "Detailed Field Explanation" }}
        </h3>

        <div class="space-y-4">
          <Card>
            <CardContent class="pt-6">
              <div class="flex items-start gap-3">
                <span
                  class="bg-primary/10 text-primary flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  >1</span
                >
                <div class="flex-1">
                  <h4 class="text-foreground mb-1 font-medium">
                    <code class="text-primary">"$mulmocast"</code>
                    {{ locale === "ja" ? "バージョン情報" : "Version Info" }}
                  </h4>
                  <p class="text-muted-foreground mb-2 text-sm">
                    {{
                      locale === "ja"
                        ? "このファイルがMulmoScriptであることを示す識別子です。MulmoCastはこの項目を見て、正しいフォーマットかどうかを判断します。"
                        : "An identifier indicating this file is a MulmoScript. MulmoCast uses this to verify the correct format."
                    }}
                  </p>
                  <div class="bg-muted rounded p-2">
                    <code class="text-xs">"$mulmocast": { "version": "1.0" }</code>
                    <span class="text-muted-foreground text-xs">
                      ← {{ locale === "ja" ? "常にこの形式で固定" : "Always use this exact format" }}</span
                    >
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent class="pt-6">
              <div class="flex items-start gap-3">
                <span
                  class="bg-primary/10 text-primary flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  >2</span
                >
                <div class="flex-1">
                  <h4 class="text-foreground mb-1 font-medium">
                    <code class="text-primary">"title"</code>
                    {{ locale === "ja" ? "タイトル" : "Title" }}
                  </h4>
                  <p class="text-muted-foreground mb-2 text-sm">
                    {{
                      locale === "ja"
                        ? "動画のタイトルです。ファイル管理用の名前として使われます。出力ファイル名には影響しません（ファイル名は入力JSONのファイル名から決まります）。"
                        : "The video title. Used for file organization. Does not affect output filename (which is determined by input JSON filename)."
                    }}
                  </p>
                  <div class="bg-muted rounded p-2">
                    <code class="text-xs"
                      >"title": "{{ locale === "ja" ? "MulmoCast入門講座" : "Introduction to MulmoCast" }}"</code
                    >
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent class="pt-6">
              <div class="flex items-start gap-3">
                <span
                  class="bg-primary/10 text-primary flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  >3</span
                >
                <div class="flex-1">
                  <h4 class="text-foreground mb-1 font-medium">
                    <code class="text-primary">"lang"</code>
                    {{ locale === "ja" ? "言語コード" : "Language Code" }}
                  </h4>
                  <p class="text-muted-foreground mb-2 text-sm">
                    {{
                      locale === "ja"
                        ? "動画の言語を指定します。TTSの発音や、自動翻訳機能で使われます。ISO 639-1形式の言語コードを使用します。"
                        : "Specifies the video language. Used for TTS pronunciation and auto-translation features. Uses ISO 639-1 language codes."
                    }}
                  </p>
                  <div class="grid gap-2 md:grid-cols-4">
                    <div class="bg-muted rounded p-2 text-center">
                      <code class="text-primary text-xs">ja</code>
                      <p class="text-muted-foreground text-xs">{{ locale === "ja" ? "日本語" : "Japanese" }}</p>
                    </div>
                    <div class="bg-muted rounded p-2 text-center">
                      <code class="text-primary text-xs">en</code>
                      <p class="text-muted-foreground text-xs">{{ locale === "ja" ? "英語" : "English" }}</p>
                    </div>
                    <div class="bg-muted rounded p-2 text-center">
                      <code class="text-primary text-xs">zh</code>
                      <p class="text-muted-foreground text-xs">{{ locale === "ja" ? "中国語" : "Chinese" }}</p>
                    </div>
                    <div class="bg-muted rounded p-2 text-center">
                      <code class="text-primary text-xs">ko</code>
                      <p class="text-muted-foreground text-xs">{{ locale === "ja" ? "韓国語" : "Korean" }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent class="pt-6">
              <div class="flex items-start gap-3">
                <span
                  class="bg-primary/10 text-primary flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  >4</span
                >
                <div class="flex-1">
                  <h4 class="text-foreground mb-1 font-medium">
                    <code class="text-primary">"beats"</code>
                    {{ locale === "ja" ? "シーン配列（最も重要！）" : "Scene Array (Most Important!)" }}
                  </h4>
                  <p class="text-muted-foreground mb-2 text-sm">
                    {{
                      locale === "ja"
                        ? "動画のシーン（beat）を配列で指定します。1つのbeatが1つのシーンになり、それぞれに音声と画像が生成されます。配列の順番がそのまま動画の再生順になります。"
                        : "Specifies video scenes (beats) as an array. Each beat becomes one scene with generated audio and image. The array order becomes the video playback order."
                    }}
                  </p>
                  <div class="rounded border border-green-200 bg-green-50 p-3 dark:border-green-900 dark:bg-green-950">
                    <p class="text-xs text-green-800 dark:text-green-200">
                      <strong>{{ locale === "ja" ? "ポイント：" : "Key Point:" }}</strong>
                      {{
                        locale === "ja"
                          ? "beats配列の中身が動画のコンテンツの核心部分です。次のセクションで詳しく説明します。"
                          : "The contents of the beats array are the core of your video content. We'll explain this in detail in the next section."
                      }}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <!-- Full Structure Example -->
        <h3 class="text-foreground mt-8 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "フル構成のMulmoScript（参考）" : "Full MulmoScript Structure (Reference)" }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{
            locale === "ja"
              ? "MulmoScriptには他にも多くのオプション設定があります。以下は主要な設定を含む例です："
              : "MulmoScript has many more optional settings. Here's an example with major configurations:"
          }}
        </p>
        <div class="bg-muted overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "$mulmocast": { "version": "1.0" },
  "title": "{{ locale === "ja" ? "完全な構成例" : "Complete Structure Example" }}",
  "lang": "{{ locale === "ja" ? "ja" : "en" }}",
  "description": "{{ locale === "ja" ? "動画の説明文" : "Video description" }}",
  "reference": "{{ locale === "ja" ? "参考URL" : "Reference URL" }}",

  // {{ locale === "ja" ? "音声設定" : "Audio Settings" }}
  "speechParams": {
    "speakers": {
      "Host": { "provider": "openai", "voiceId": "nova" },
      "Guest": { "provider": "openai", "voiceId": "echo" }
    }
  },

  // {{ locale === "ja" ? "画像設定" : "Image Settings" }}
  "imageParams": {
    "model": "dall-e-3",
    "size": "1792x1024"
  },

  // {{ locale === "ja" ? "動画設定" : "Video Settings" }}
  "movieParams": {
    "fps": 30,
    "transition": { "type": "fade", "duration": 0.5 }
  },

  // {{ locale === "ja" ? "字幕設定" : "Caption Settings" }}
  "captionParams": {
    "captionSplit": "estimate"
  },

  // {{ locale === "ja" ? "BGM設定" : "BGM Settings" }}
  "bgm": "./background.mp3",
  "bgmVolume": 0.3,

  // {{ locale === "ja" ? "シーン配列" : "Scene Array" }}
  "beats": [
    // ... {{ locale === "ja" ? "各シーンの定義" : "scene definitions" }}
  ]
}</code></pre>
        </div>
        <p class="text-muted-foreground mt-3 text-sm">
          {{
            locale === "ja"
              ? "※ すべての設定はオプションです。最小構成（$mulmocast, title, lang, beats）だけでも動画は作れます。"
              : "※ All settings are optional. You can create videos with just the minimal structure ($mulmocast, title, lang, beats)."
          }}
        </p>
      </section>

      <!-- Beat (Scene) Explanation -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "Beat（シーン）を作る" : "Creating Beats (Scenes)" }}
        </h2>

        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "beatは動画の「1コマ」で、MulmoScriptの核心部分です。各beatは「話す内容」「見せる画像」「誰が話すか」を指定し、MulmoCastがこれらを組み合わせて動画を生成します。"
              : "A beat is a single 'frame' of your video and the core of MulmoScript. Each beat specifies 'what to say', 'what image to show', and 'who speaks', and MulmoCast combines these to generate video."
          }}
        </p>

        <Card class="mb-6">
          <CardHeader>
            <CardTitle class="text-base">
              {{ locale === "ja" ? "beatで指定できるプロパティ一覧" : "Properties You Can Specify in a Beat" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-5">
              <!-- text -->
              <div class="flex items-start gap-4">
                <div
                  class="bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                >
                  <MessageSquare class="h-4 w-4" />
                </div>
                <div class="flex-1">
                  <h4 class="text-foreground font-medium">
                    text <span class="text-primary text-xs">{{ locale === "ja" ? "（主要）" : "(main)" }}</span>
                  </h4>
                  <p class="text-muted-foreground mt-1 text-sm">
                    {{
                      locale === "ja"
                        ? "このシーンで話す内容です。AIがこのテキストを音声に変換します。音声の長さがそのままシーンの長さになります。"
                        : "What to say in this scene. AI converts this text to speech. The audio length determines the scene duration."
                    }}
                  </p>
                  <div class="bg-muted mt-2 rounded p-2">
                    <code class="text-xs"
                      >"text": "{{
                        locale === "ja"
                          ? "こんにちは、今日はMulmoCastの使い方を説明します。"
                          : "Hello, today I'll explain how to use MulmoCast."
                      }}"</code
                    >
                  </div>
                </div>
              </div>

              <!-- imagePrompt -->
              <div class="flex items-start gap-4">
                <div
                  class="bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                >
                  <ImageIcon class="h-4 w-4" />
                </div>
                <div class="flex-1">
                  <h4 class="text-foreground font-medium">
                    imagePrompt <span class="text-primary text-xs">{{ locale === "ja" ? "（主要）" : "(main)" }}</span>
                  </h4>
                  <p class="text-muted-foreground mt-1 text-sm">
                    {{
                      locale === "ja"
                        ? "どんな画像が欲しいかの説明です。AIがこの説明から画像を生成します。英語で書くとより良い結果が得られることがあります。"
                        : "Description of the desired image. AI generates an image from this description. Writing in English may yield better results."
                    }}
                  </p>
                  <div class="bg-muted mt-2 rounded p-2">
                    <code class="text-xs"
                      >"imagePrompt": "{{
                        locale === "ja"
                          ? "Modern office workspace with a laptop showing video editing software, bright natural lighting"
                          : "Modern office workspace with a laptop showing video editing software, bright natural lighting"
                      }}"</code
                    >
                  </div>
                  <p class="text-muted-foreground mt-2 text-xs">
                    {{
                      locale === "ja"
                        ? "💡 imagePromptは英語で書くことを推奨します。画像生成AIは英語で学習されているため、より正確な結果が得られます。"
                        : "💡 We recommend writing imagePrompt in English. Image generation AI is trained in English, so you'll get more accurate results."
                    }}
                  </p>
                </div>
              </div>

              <!-- speaker -->
              <div class="flex items-start gap-4">
                <div
                  class="bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                >
                  <User class="h-4 w-4" />
                </div>
                <div class="flex-1">
                  <h4 class="text-foreground font-medium">speaker</h4>
                  <p class="text-muted-foreground mt-1 text-sm">
                    {{
                      locale === "ja"
                        ? "誰が話すかを指定します。speechParams.speakersで定義した話者名を使います。省略すると最初に定義した話者が使われます。"
                        : "Specifies who speaks. Uses speaker names defined in speechParams.speakers. If omitted, the first defined speaker is used."
                    }}
                  </p>
                  <div class="bg-muted mt-2 rounded p-2">
                    <code class="text-xs">"speaker": "Host"</code>
                  </div>
                </div>
              </div>

              <!-- duration -->
              <div class="flex items-start gap-4">
                <div
                  class="bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                >
                  <Clock class="h-4 w-4" />
                </div>
                <div class="flex-1">
                  <h4 class="text-foreground font-medium">duration</h4>
                  <p class="text-muted-foreground mt-1 text-sm">
                    {{
                      locale === "ja"
                        ? "シーンの長さを秒単位で指定します。通常は音声の長さから自動計算されるため、手動で指定する必要はありません。スピルオーバー機能を使う場合に指定します。"
                        : "Specifies scene duration in seconds. Usually auto-calculated from audio length, so manual specification isn't needed. Used when using spillover feature."
                    }}
                  </p>
                  <div class="bg-muted mt-2 rounded p-2">
                    <code class="text-xs"
                      >"duration": 5 // {{ locale === "ja" ? "5秒間表示" : "Display for 5 seconds" }}</code
                    >
                  </div>
                </div>
              </div>

              <!-- image -->
              <div class="flex items-start gap-4">
                <div
                  class="bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                >
                  <Sparkles class="h-4 w-4" />
                </div>
                <div class="flex-1">
                  <h4 class="text-foreground font-medium">image</h4>
                  <p class="text-muted-foreground mt-1 text-sm">
                    {{
                      locale === "ja"
                        ? "imagePromptの代わりに、既存の画像ファイルやテキストスライドなどを指定できます。次のセクションで詳しく説明します。"
                        : "Instead of imagePrompt, you can specify existing image files or text slides. We'll explain this in detail in the next section."
                    }}
                  </p>
                  <div class="bg-muted mt-2 rounded p-2">
                    <code class="text-xs">"image": { "type": "image", "source": "./my-photo.png" }</code>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Duration Rules -->
        <Card class="mb-6 border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950">
          <CardContent class="pt-6">
            <h4 class="text-foreground mb-2 font-medium">
              {{ locale === "ja" ? "シーンの長さはどう決まる？" : "How is Scene Duration Determined?" }}
            </h4>
            <p class="text-muted-foreground mb-3 text-sm">
              {{
                locale === "ja"
                  ? "MulmoCastでは、各シーンの長さは以下の優先順位で決まります："
                  : "In MulmoCast, each scene's duration is determined by the following priority:"
              }}
            </p>
            <ol class="text-muted-foreground space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span
                  class="bg-primary/10 text-primary flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs"
                  >1</span
                >
                <span>
                  <strong>{{ locale === "ja" ? "音声の長さ" : "Audio length" }}</strong
                  >:
                  {{
                    locale === "ja"
                      ? "textから生成された音声の長さ + パディング"
                      : "Generated audio length from text + padding"
                  }}
                </span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="bg-primary/10 text-primary flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs"
                  >2</span
                >
                <span>
                  <strong>{{ locale === "ja" ? "明示的なduration" : "Explicit duration" }}</strong
                  >:
                  {{
                    locale === "ja" ? "durationプロパティで指定された秒数" : "Seconds specified by duration property"
                  }}
                </span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="bg-primary/10 text-primary flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs"
                  >3</span
                >
                <span>
                  <strong>{{ locale === "ja" ? "動画の長さ" : "Video length" }}</strong
                  >:
                  {{
                    locale === "ja"
                      ? "moviePromptで動画を指定した場合、その動画の長さ"
                      : "When moviePrompt specifies a video, uses that video's length"
                  }}
                </span>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="bg-primary/10 text-primary flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs"
                  >4</span
                >
                <span>
                  <strong>{{ locale === "ja" ? "デフォルト" : "Default" }}</strong
                  >:
                  {{ locale === "ja" ? "上記がない場合は1秒" : "1 second if none of the above apply" }}
                </span>
              </li>
            </ol>
          </CardContent>
        </Card>

        <!-- Example with multiple beats -->
        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "完全な例：3シーンの動画" : "Complete Example: 3-Scene Video" }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{
            locale === "ja"
              ? "以下は3つのシーンからなる完全なMulmoScriptの例です。各シーンに話者、テキスト、画像の説明が含まれています："
              : "Here's a complete MulmoScript example with 3 scenes. Each scene includes speaker, text, and image description:"
          }}
        </p>
        <div class="bg-muted overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "$mulmocast": { "version": "1.0" },
  "title": "{{ locale === "ja" ? "季節の挨拶" : "Seasonal Greetings" }}",
  "lang": "{{ locale === "ja" ? "ja" : "en" }}",
  "speechParams": {
    "speakers": {
      "Narrator": { "provider": "openai", "voiceId": "shimmer" }
    }
  },
  "beats": [
    {
      "speaker": "Narrator",
      "text": "{{ locale === "ja" ? "春が来ました。桜の花が美しく咲いています。" : "Spring has arrived. The cherry blossoms are blooming beautifully." }}",
      "imagePrompt": "{{ locale === "ja" ? "Cherry blossom trees in full bloom in a Japanese park, pink petals falling" : "Cherry blossom trees in full bloom in a Japanese park, pink petals falling" }}"
    },
    {
      "speaker": "Narrator",
      "text": "{{ locale === "ja" ? "暖かい日差しが気持ちいいですね。" : "The warm sunlight feels so nice." }}",
      "imagePrompt": "{{ locale === "ja" ? "Sunlit flower field with colorful tulips, warm golden hour lighting" : "Sunlit flower field with colorful tulips, warm golden hour lighting" }}"
    },
    {
      "speaker": "Narrator",
      "text": "{{ locale === "ja" ? "皆さんも外に出かけましょう。素敵な春を楽しんでください。" : "Let's all go outside. Enjoy the wonderful spring." }}",
      "imagePrompt": "{{ locale === "ja" ? "Happy people walking in a park, families enjoying picnic, spring atmosphere" : "Happy people walking in a park, families enjoying picnic, spring atmosphere" }}"
    }
  ]
}</code></pre>
        </div>
        <div class="border-border mt-3 rounded border p-3">
          <p class="text-foreground text-sm font-medium">
            {{ locale === "ja" ? "このスクリプトで生成されるもの" : "What This Script Generates" }}
          </p>
          <ul class="text-muted-foreground mt-2 space-y-1 text-xs">
            <li>
              • {{ locale === "ja" ? "3つのシーン（各シーンに音声と画像）" : "3 scenes (each with audio and image)" }}
            </li>
            <li>
              •
              {{
                locale === "ja"
                  ? "合計再生時間：約10〜15秒（テキストの長さによる）"
                  : "Total duration: ~10-15 seconds (depends on text length)"
              }}
            </li>
            <li>• {{ locale === "ja" ? "話者：Narrator（shimmerボイス）" : "Speaker: Narrator (shimmer voice)" }}</li>
          </ul>
        </div>

        <!-- External Link -->
        <div class="text-muted-foreground mt-4 rounded-lg border border-dashed p-4 text-sm">
          <p class="mb-2 font-medium">{{ locale === "ja" ? "参考リンク" : "Reference Links" }}</p>
          <ul class="space-y-1">
            <li>
              <a
                href="https://github.com/receptron/mulmocast-cli/blob/main/docs/image.md"
                target="_blank"
                rel="noopener"
                class="text-primary hover:underline"
              >
                <ExternalLink class="mr-1 inline h-3 w-3" />
                {{ locale === "ja" ? "Beatの長さの決まり方（詳細）" : "Beat Duration Rules (Detailed)" }}
              </a>
            </li>
            <li>
              <a
                href="https://github.com/receptron/mulmocast-cli/blob/main/docs/sound_and_voice.md"
                target="_blank"
                rel="noopener"
                class="text-primary hover:underline"
              >
                <ExternalLink class="mr-1 inline h-3 w-3" />
                {{ locale === "ja" ? "音声・スピーカー設定の詳細" : "Audio & Speaker Settings (Detailed)" }}
              </a>
            </li>
          </ul>
        </div>
      </section>

      <!-- Beat Duration Rules -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "Beatの長さの決まり方" : "How Beat Duration is Determined" }}
        </h2>

        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "各beatの長さは、音声・動画・明示的なduration指定などに基づいて自動的に計算されます。"
              : "Each beat's duration is automatically calculated based on audio, video, or explicit duration settings."
          }}
        </p>

        <div class="space-y-4">
          <!-- Audio-based -->
          <Card>
            <CardContent class="pt-6">
              <h3 class="text-foreground mb-2 font-medium">
                {{ locale === "ja" ? "音声ベース（デフォルト）" : "Audio-based (Default)" }}
              </h3>
              <p class="text-muted-foreground text-sm">
                {{
                  locale === "ja"
                    ? "TTSで生成された音声の長さがbeatの基準となります。paddingを追加して間を調整することもできます。"
                    : "The TTS-generated audio length becomes the beat's base duration. You can add padding to adjust timing."
                }}
              </p>
              <div class="bg-muted mt-3 rounded p-3">
                <code class="text-xs">beat.duration = {{ locale === "ja" ? "音声長" : "audio length" }} + padding</code>
              </div>
            </CardContent>
          </Card>

          <!-- Explicit duration -->
          <Card>
            <CardContent class="pt-6">
              <h3 class="text-foreground mb-2 font-medium">
                {{ locale === "ja" ? "明示的なduration指定" : "Explicit Duration" }}
              </h3>
              <p class="text-muted-foreground text-sm">
                {{
                  locale === "ja"
                    ? "beatにdurationを指定すると、その値が優先されます。音声より長い場合は無音で埋められ、音声の方が長い場合は音声長が優先されます。"
                    : "When you specify duration on a beat, that value takes precedence. If longer than audio, silence fills the gap. If audio is longer, audio length is used."
                }}
              </p>
              <div class="bg-muted mt-3 overflow-x-auto rounded p-3">
                <pre class="text-xs"><code>{
  "text": "{{ locale === "ja" ? "短いテキスト" : "Short text" }}",
  "duration": 5,  // {{ locale === "ja" ? "5秒間表示（音声が短くても）" : "Display for 5 seconds (even if audio is shorter)" }}
  "imagePrompt": "..."
}</code></pre>
              </div>
            </CardContent>
          </Card>

          <!-- Video-based -->
          <Card>
            <CardContent class="pt-6">
              <h3 class="text-foreground mb-2 font-medium">
                {{ locale === "ja" ? "動画ベース" : "Video-based" }}
              </h3>
              <p class="text-muted-foreground text-sm">
                {{
                  locale === "ja"
                    ? 'image.type: "movie" の場合、動画の長さが音声より長ければ動画長が採用されます。音声が長い場合は、最後のフレームが静止画として表示されます。'
                    : 'For image.type: "movie", if video is longer than audio, video length is used. If audio is longer, the last frame is displayed as a still image.'
                }}
              </p>
            </CardContent>
          </Card>

          <!-- Spillover -->
          <Card>
            <CardContent class="pt-6">
              <h3 class="text-foreground mb-2 font-medium">
                {{ locale === "ja" ? "スピルオーバー（音声の分配）" : "Spillover (Audio Distribution)" }}
              </h3>
              <p class="text-muted-foreground text-sm">
                {{
                  locale === "ja"
                    ? "あるbeatの音声が長く、次のbeat以降に画像も音声もない場合、音声が複数のbeatに分配されます。ミュージックビデオなどで使用します。"
                    : "If a beat's audio is long and subsequent beats have no images or audio, the audio is distributed across multiple beats. Useful for music videos."
                }}
              </p>
              <div
                class="mt-3 rounded border border-blue-200 bg-blue-50 p-3 text-xs text-blue-800 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-200"
              >
                {{
                  locale === "ja"
                    ? "詳細は「高度な機能」のオーディオスピルオーバーを参照してください。"
                    : "See 'Advanced Features' - Audio Spillover for details."
                }}
              </div>
            </CardContent>
          </Card>

          <!-- Default -->
          <Card>
            <CardContent class="pt-6">
              <h3 class="text-foreground mb-2 font-medium">
                {{ locale === "ja" ? "デフォルト値" : "Default Value" }}
              </h3>
              <p class="text-muted-foreground text-sm">
                {{
                  locale === "ja"
                    ? "音声・動画・durationのいずれも指定がない場合、デフォルトで1秒が設定されます。"
                    : "If no audio, video, or duration is specified, the default is 1 second."
                }}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <!-- Speakers -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "話者（スピーカー）を設定する" : "Setting Up Speakers" }}
        </h2>

        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "複数の人が話す動画を作りたい場合、speechParamsで話者を定義します。"
              : "When you want multiple people to speak in your video, define speakers in speechParams."
          }}
        </p>

        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">
              {{ locale === "ja" ? "どんな時に使う？" : "When to Use?" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="text-muted-foreground space-y-2 text-sm">
              <li class="flex items-center gap-2">
                <CheckCircle class="text-primary h-4 w-4" />
                {{ locale === "ja" ? "対談・インタビュー形式の動画" : "Interview or dialogue format videos" }}
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="text-primary h-4 w-4" />
                {{ locale === "ja" ? "キャラクターが複数登場する物語" : "Stories with multiple characters" }}
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="text-primary h-4 w-4" />
                {{
                  locale === "ja"
                    ? "ナレーターとキャラクターが別の動画"
                    : "Videos with separate narrator and characters"
                }}
              </li>
            </ul>
          </CardContent>
        </Card>

        <div class="bg-muted overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "$mulmocast": { "version": "1.0" },
  "title": "{{ locale === "ja" ? "対談番組" : "Talk Show" }}",
  "lang": "{{ locale === "ja" ? "ja" : "en" }}",
  "speechParams": {
    "speakers": {
      "Host": {
        "provider": "openai",
        "voiceId": "nova"  // {{ locale === "ja" ? "明るい声" : "Bright voice" }}
      },
      "Guest": {
        "provider": "openai",
        "voiceId": "onyx"  // {{ locale === "ja" ? "落ち着いた声" : "Calm voice" }}
      }
    }
  },
  "beats": [
    {
      "speaker": "Host",
      "text": "{{ locale === "ja" ? "今日のゲストをお迎えしました！" : "Welcome our guest today!" }}",
      "imagePrompt": "{{ locale === "ja" ? "トークショーのセット" : "Talk show set" }}"
    },
    {
      "speaker": "Guest",
      "text": "{{ locale === "ja" ? "お招きいただきありがとうございます。" : "Thank you for having me." }}",
      "imagePrompt": "{{ locale === "ja" ? "ゲストの笑顔" : "Guest smiling" }}"
    }
  ]
}</code></pre>
        </div>

        <div class="mt-4 grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent class="pt-6">
              <h4 class="text-foreground mb-2 font-medium">OpenAI{{ locale === "ja" ? "の音声" : " Voices" }}</h4>
              <ul class="text-muted-foreground space-y-1 text-sm">
                <li><code>shimmer</code> - {{ locale === "ja" ? "やさしい女性声" : "Soft female voice" }}</li>
                <li><code>nova</code> - {{ locale === "ja" ? "明るい女性声" : "Bright female voice" }}</li>
                <li><code>alloy</code> - {{ locale === "ja" ? "中性的な声" : "Neutral voice" }}</li>
                <li><code>echo</code> - {{ locale === "ja" ? "落ち着いた男性声" : "Calm male voice" }}</li>
                <li><code>fable</code> - {{ locale === "ja" ? "物語向き" : "Story-telling voice" }}</li>
                <li><code>onyx</code> - {{ locale === "ja" ? "深みのある男性声" : "Deep male voice" }}</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent class="pt-6">
              <h4 class="text-foreground mb-2 font-medium">
                {{ locale === "ja" ? "他のTTSサービス" : "Other TTS Services" }}
              </h4>
              <p class="text-muted-foreground text-sm">
                {{
                  locale === "ja"
                    ? "ElevenLabs、ことだま、Google Cloud TTSなども使えます。詳しくは"
                    : "You can also use ElevenLabs, Kotodama, Google Cloud TTS, etc. See"
                }}
                <a :href="localizedUrl('/docs/cli/providers')" class="text-primary hover:underline">{{
                  locale === "ja" ? "プロバイダー設定" : "Provider Settings"
                }}</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <!-- Image Types -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "画像の種類" : "Image Types" }}
        </h2>

        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "imagePrompt以外にも、様々な方法で画像を指定できます。"
              : "Besides imagePrompt, there are various ways to specify images."
          }}
        </p>

        <div class="space-y-4">
          <!-- AI Generated -->
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2 text-base">
                <Sparkles class="text-primary h-5 w-5" />
                {{ locale === "ja" ? "AIで生成する" : "AI Generated" }}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground mb-3 text-sm">
                {{
                  locale === "ja"
                    ? "説明文を書くと、AIが画像を生成します。"
                    : "Write a description and AI generates an image."
                }}
              </p>
              <div class="bg-muted rounded p-3">
                <code class="text-xs"
                  >"imagePrompt": "{{
                    locale === "ja" ? "夕焼けの海岸で遊ぶ子供たち" : "Children playing on a beach at sunset"
                  }}"</code
                >
              </div>
            </CardContent>
          </Card>

          <!-- Existing Image -->
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2 text-base">
                <ImageIcon class="text-primary h-5 w-5" />
                {{ locale === "ja" ? "既存の画像を使う" : "Use Existing Image" }}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground mb-3 text-sm">
                {{ locale === "ja" ? "自分で用意した画像ファイルを使います。" : "Use your own image files." }}
              </p>
              <div class="bg-muted rounded p-3">
                <code class="text-xs">"image": { "type": "image", "source": "./my-photo.png" }</code>
              </div>
            </CardContent>
          </Card>

          <!-- Text Slide -->
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2 text-base">
                <FileText class="text-primary h-5 w-5" />
                {{ locale === "ja" ? "テキストスライドを作る" : "Create Text Slide" }}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground mb-3 text-sm">
                {{
                  locale === "ja"
                    ? "タイトルや箇条書きのスライドを自動生成します。"
                    : "Automatically generate slides with titles and bullet points."
                }}
              </p>
              <div class="bg-muted rounded p-3">
                <pre class="text-xs"><code>"image": {
  "type": "textSlide",
  "title": "{{ locale === "ja" ? "今日の議題" : "Today's Agenda" }}",
  "bullets": ["{{ locale === "ja" ? "項目1" : "Item 1" }}", "{{ locale === "ja" ? "項目2" : "Item 2" }}", "{{ locale === "ja" ? "項目3" : "Item 3" }}"]
}</code></pre>
              </div>
            </CardContent>
          </Card>

          <!-- Markdown -->
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2 text-base">
                <Code class="text-primary h-5 w-5" />
                {{ locale === "ja" ? "Markdownでスライドを作る" : "Create Markdown Slide" }}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground mb-3 text-sm">
                {{
                  locale === "ja"
                    ? "100種類のスタイルから選べる、デザイン済みのスライドを作ります。"
                    : "Create pre-designed slides from 100 style options."
                }}
              </p>
              <div class="bg-muted rounded p-3">
                <pre class="text-xs"><code>"image": {
  "type": "markdown",
  "style": "corporate-blue",
  "markdown": ["# {{ locale === "ja" ? "タイトル" : "Title" }}", "{{ locale === "ja" ? "本文テキスト" : "Body text" }}"]
}</code></pre>
              </div>
            </CardContent>
          </Card>

          <!-- Chart.js -->
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2 text-base">
                <BarChart class="text-primary h-5 w-5" />
                {{ locale === "ja" ? "グラフを作る（Chart.js）" : "Create Charts (Chart.js)" }}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground mb-3 text-sm">
                {{
                  locale === "ja"
                    ? "Chart.jsの設定をそのまま使ってグラフを画像化します。棒グラフ、折れ線グラフなど様々なチャートを作成できます。"
                    : "Use Chart.js configuration directly to create chart images. Supports bar charts, line charts, and more."
                }}
              </p>
              <div class="bg-muted overflow-x-auto rounded p-3">
                <pre class="text-xs"><code>"image": {
  "type": "chart",
  "title": "{{ locale === "ja" ? "売上推移" : "Sales Trend" }}",
  "chartData": {
    "type": "bar",
    "data": {
      "labels": ["Jan", "Feb", "Mar"],
      "datasets": [{
        "label": "{{ locale === "ja" ? "売上" : "Sales" }}",
        "data": [120, 150, 180]
      }]
    }
  }
}</code></pre>
              </div>
            </CardContent>
          </Card>

          <!-- Mermaid -->
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2 text-base">
                <GitBranch class="text-primary h-5 w-5" />
                {{ locale === "ja" ? "図を作る（Mermaid）" : "Create Diagrams (Mermaid)" }}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground mb-3 text-sm">
                {{
                  locale === "ja"
                    ? "Mermaid記法でフローチャート、シーケンス図などを作成します。"
                    : "Create flowcharts, sequence diagrams, etc. using Mermaid syntax."
                }}
              </p>
              <div class="bg-muted overflow-x-auto rounded p-3">
                <pre class="text-xs"><code>"image": {
  "type": "mermaid",
  "title": "{{ locale === "ja" ? "処理フロー" : "Process Flow" }}",
  "code": {
    "kind": "text",
    "text": "graph LR\n    A[Start] --> B[Process]\n    B --> C[End]"
  }
}</code></pre>
              </div>
            </CardContent>
          </Card>

          <!-- HTML + Tailwind -->
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2 text-base">
                <Code class="text-primary h-5 w-5" />
                {{ locale === "ja" ? "HTMLでカスタムデザイン" : "Custom Design with HTML" }}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground mb-3 text-sm">
                {{
                  locale === "ja"
                    ? "HTML + Tailwind CSSで完全カスタムなスライドを作成します。デザインの自由度が最も高い方法です。"
                    : "Create fully custom slides with HTML + Tailwind CSS. This gives you the most design flexibility."
                }}
              </p>
              <div class="bg-muted overflow-x-auto rounded p-3">
                <pre class="text-xs"><code>"image": {
  "type": "html_tailwind",
  "html": [
    "&lt;div class=\"bg-blue-600 text-white p-8\"&gt;",
    "  &lt;h1 class=\"text-4xl font-bold\"&gt;{{ locale === "ja" ? "カスタムスライド" : "Custom Slide" }}&lt;/h1&gt;",
    "&lt;/div&gt;"
  ]
}</code></pre>
              </div>
            </CardContent>
          </Card>

          <!-- Movie -->
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2 text-base">
                <Video class="text-primary h-5 w-5" />
                {{ locale === "ja" ? "動画を使う" : "Use Video" }}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground mb-3 text-sm">
                {{
                  locale === "ja"
                    ? "静止画の代わりに動画ファイルを使用します。URLまたはローカルパスで指定できます。"
                    : "Use a video file instead of a still image. Specify by URL or local path."
                }}
              </p>
              <div class="bg-muted overflow-x-auto rounded p-3">
                <pre class="text-xs"><code>"image": {
  "type": "movie",
  "source": {
    "kind": "url",
    "url": "https://example.com/video.mp4"
  }
}</code></pre>
              </div>
            </CardContent>
          </Card>

          <!-- beat -->
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2 text-base">
                <Copy class="text-primary h-5 w-5" />
                {{ locale === "ja" ? "前のbeatの画像を使う" : "Use Previous Beat's Image" }}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground mb-3 text-sm">
                {{
                  locale === "ja"
                    ? "前のbeat（または指定したbeat）と同じ画像を使用します。同じ画面で話し続ける場合に便利です。"
                    : "Use the same image as the previous beat (or a specified beat). Useful when continuing to speak on the same screen."
                }}
              </p>
              <div class="bg-muted overflow-x-auto rounded p-3">
                <pre
                  class="text-xs"
                ><code>// {{ locale === "ja" ? "前のbeatの画像を使う" : "Use previous beat's image" }}
"image": { "type": "beat" }

// {{ locale === "ja" ? "idで指定したbeatの画像を使う" : "Use image from beat with specific id" }}
"image": { "type": "beat", "id": "intro-slide" }</code></pre>
              </div>
            </CardContent>
          </Card>

          <!-- voice_over -->
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-2 text-base">
                <Mic class="text-primary h-5 w-5" />
                {{ locale === "ja" ? "ナレーションオーバーレイ" : "Narration Overlay" }}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground mb-3 text-sm">
                {{
                  locale === "ja"
                    ? "既存の動画にナレーションや字幕を重ねる場合に使用します。画像は生成されず、前のbeatの動画が継続して表示されます。"
                    : "Use when overlaying narration or captions on existing video. No image is generated; the previous beat's video continues to display."
                }}
              </p>
              <div class="bg-muted overflow-x-auto rounded p-3">
                <pre class="text-xs"><code>"image": {
  "type": "voice_over",
  "startAt": 8.0  // {{ locale === "ja" ? "8秒後に音声開始" : "Start audio at 8 seconds" }}
}</code></pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <!-- Markdown Layouts -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "Markdownレイアウト" : "Markdown Layouts" }}
        </h2>

        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "markdownタイプでは、複雑なレイアウトも指定できます。"
              : "The markdown type supports complex layouts."
          }}
        </p>

        <div class="space-y-4">
          <!-- 2 columns -->
          <Card>
            <CardContent class="pt-6">
              <h3 class="text-foreground mb-2 font-medium">
                {{ locale === "ja" ? "2列レイアウト（row-2）" : "2-Column Layout (row-2)" }}
              </h3>
              <div class="bg-muted overflow-x-auto rounded p-3">
                <pre class="text-xs"><code>"image": {
  "type": "markdown",
  "markdown": {
    "row-2": [
      ["# {{ locale === "ja" ? "左カラム" : "Left Column" }}", "{{ locale === "ja" ? "左の内容" : "Left content" }}"],
      ["# {{ locale === "ja" ? "右カラム" : "Right Column" }}", "{{ locale === "ja" ? "右の内容" : "Right content" }}"]
    ]
  }
}</code></pre>
              </div>
            </CardContent>
          </Card>

          <!-- 2x2 -->
          <Card>
            <CardContent class="pt-6">
              <h3 class="text-foreground mb-2 font-medium">
                {{ locale === "ja" ? "4分割レイアウト（2x2）" : "4-Grid Layout (2x2)" }}
              </h3>
              <div class="bg-muted overflow-x-auto rounded p-3">
                <pre class="text-xs"><code>"image": {
  "type": "markdown",
  "markdown": {
    "2x2": [
      "# {{ locale === "ja" ? "左上" : "Top Left" }}",
      "# {{ locale === "ja" ? "右上" : "Top Right" }}",
      "# {{ locale === "ja" ? "左下" : "Bottom Left" }}",
      "# {{ locale === "ja" ? "右下" : "Bottom Right" }}"
    ]
  }
}</code></pre>
              </div>
            </CardContent>
          </Card>

          <!-- Header + content -->
          <Card>
            <CardContent class="pt-6">
              <h3 class="text-foreground mb-2 font-medium">
                {{ locale === "ja" ? "ヘッダー付きレイアウト" : "Header Layout" }}
              </h3>
              <div class="bg-muted overflow-x-auto rounded p-3">
                <pre class="text-xs"><code>"image": {
  "type": "markdown",
  "markdown": {
    "header": "# {{ locale === "ja" ? "ページタイトル" : "Page Title" }}",
    "row-2": [
      "{{ locale === "ja" ? "左の内容" : "Left content" }}",
      "{{ locale === "ja" ? "右の内容" : "Right content" }}"
    ]
  }
}</code></pre>
              </div>
            </CardContent>
          </Card>

          <!-- Sidebar -->
          <Card>
            <CardContent class="pt-6">
              <h3 class="text-foreground mb-2 font-medium">
                {{ locale === "ja" ? "サイドバー付きレイアウト" : "Sidebar Layout" }}
              </h3>
              <div class="bg-muted overflow-x-auto rounded p-3">
                <pre class="text-xs"><code>"image": {
  "type": "markdown",
  "markdown": {
    "sidebar-left": ["## {{ locale === "ja" ? "メニュー" : "Menu" }}", "- Item 1", "- Item 2"],
    "content": ["# {{ locale === "ja" ? "メインコンテンツ" : "Main Content" }}", "..."]
  }
}</code></pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <!-- Available Styles -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "スライドスタイル一覧" : "Available Slide Styles" }}
        </h2>

        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "textSlideとmarkdownで使える100種類のスタイル（10カテゴリ×10種類）："
              : "100 styles (10 categories × 10 styles) available for textSlide and markdown:"
          }}
        </p>

        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "カテゴリ" : "Category" }}
                </th>
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "スタイル例" : "Example Styles" }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cat in styleCategories" :key="cat.name">
                <td class="border-border border px-4 py-2">
                  <strong>{{ locale === "ja" ? cat.nameJa : cat.name }}</strong>
                </td>
                <td class="border-border border px-4 py-2">
                  <code class="text-xs">{{ cat.examples }}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="text-muted-foreground mt-3 text-sm">
          {{
            locale === "ja"
              ? "全スタイルは `mulmo tool info styles` で確認できます"
              : "See all styles with `mulmo tool info styles`"
          }}
        </p>
      </section>

      <!-- Tips -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "覚えておきたいこと" : "Things to Remember" }}
        </h2>

        <div class="space-y-4">
          <Card>
            <CardContent class="pt-6">
              <h3 class="text-foreground mb-2 font-medium">
                {{ locale === "ja" ? "シーンの長さは自動で決まる" : "Scene Duration is Automatic" }}
              </h3>
              <p class="text-muted-foreground text-sm">
                {{
                  locale === "ja"
                    ? "textの音声の長さに合わせて、各シーンの長さが自動的に決まります。長いセリフ＝長いシーン、短いセリフ＝短いシーン。"
                    : "Each scene's duration is automatically determined by the audio length of the text. Longer speech = longer scene, shorter speech = shorter scene."
                }}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent class="pt-6">
              <h3 class="text-foreground mb-2 font-medium">
                {{ locale === "ja" ? "imagePromptは英語がおすすめ" : "Use English for imagePrompt" }}
              </h3>
              <p class="text-muted-foreground text-sm">
                {{
                  locale === "ja"
                    ? "画像生成AIは英語で学習されているため、imagePromptは英語で書くとより良い結果が得られることがあります。"
                    : "Since image generation AI is trained in English, writing imagePrompt in English may yield better results."
                }}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent class="pt-6">
              <h3 class="text-foreground mb-2 font-medium">
                {{ locale === "ja" ? "AIに台本を作らせる方が楽" : "Letting AI Create the Script is Easier" }}
              </h3>
              <p class="text-muted-foreground text-sm">
                {{
                  locale === "ja"
                    ? "手でJSONを書くより、`mulmo tool scripting -i` でAIと対話しながら作る方が簡単です。"
                    : "It's easier to create with AI using `mulmo tool scripting -i` than writing JSON by hand."
                }}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <!-- Navigation -->
      <div class="border-border flex items-center justify-between border-t pt-6">
        <a
          :href="localizedUrl('/docs/cli/quickstart')"
          class="text-muted-foreground hover:text-primary inline-flex items-center text-sm"
        >
          <ChevronLeft class="mr-1 h-4 w-4" />
          {{ locale === "ja" ? "クイックスタート" : "Quick Start" }}
        </a>
        <a
          :href="localizedUrl('/docs/cli/providers')"
          class="text-muted-foreground hover:text-primary inline-flex items-center text-sm"
        >
          {{ locale === "ja" ? "プロバイダー設定" : "Provider Settings" }}
          <ChevronRight class="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import Navigation from "../../../components/Navigation.vue";
import { useLocalizedUrl } from "../../../i18n/utils";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Image as ImageIcon,
  User,
  Sparkles,
  FileText,
  Code,
  ExternalLink,
  Clock,
  BarChart,
  GitBranch,
  Video,
  Copy,
  Mic,
} from "lucide-vue-next";

const { locale } = useI18n();
const localizedUrl = useLocalizedUrl();

const styleCategories = [
  { name: "Business", nameJa: "ビジネス", examples: "corporate-blue, executive-gray, finance-green" },
  { name: "Tech", nameJa: "テック", examples: "cyber-neon, matrix-green, terminal-dark" },
  { name: "Creative", nameJa: "クリエイティブ", examples: "artistic-splash, watercolor-soft, graffiti" },
  { name: "Minimalist", nameJa: "ミニマリスト", examples: "clean-white, zen-beige, nordic-light" },
  { name: "Nature", nameJa: "自然", examples: "forest-green, ocean-blue, sunset-orange" },
  { name: "Dark", nameJa: "ダーク", examples: "charcoal-elegant, midnight-blue, obsidian" },
  { name: "Colorful", nameJa: "カラフル", examples: "vibrant-pink, candy-colors, aurora" },
  { name: "Vintage", nameJa: "ヴィンテージ", examples: "retro-70s, art-deco, typewriter" },
  { name: "Japanese", nameJa: "和風", examples: "washi-paper, sakura-pink, zen-garden" },
  { name: "Geometric", nameJa: "幾何学", examples: "hexagon-pattern, isometric, bauhaus" },
];
</script>
