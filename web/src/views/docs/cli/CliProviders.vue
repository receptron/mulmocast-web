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
          <span class="text-foreground">{{ locale === "ja" ? "プロバイダー設定" : "Provider Settings" }}</span>
        </div>
        <h1 class="text-foreground text-3xl font-bold">
          {{ locale === "ja" ? "プロバイダー設定" : "Provider Settings" }}
        </h1>
        <p class="text-muted-foreground mt-2 text-lg">
          {{
            locale === "ja"
              ? "音声・画像・動画を生成するAIサービスを選ぶ"
              : "Choose AI services for generating audio, images, and video"
          }}
        </p>
      </div>

      <!-- What is Provider -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "プロバイダーとは" : "What is a Provider?" }}
        </h2>
        <Card>
          <CardContent class="pt-6">
            <p class="text-muted-foreground mb-4">
              {{
                locale === "ja"
                  ? "MulmoCastは、音声・画像・動画を自分で生成するのではなく、「外部のAIサービス」を呼び出して生成してもらいます。この外部サービスのことを「プロバイダー」と呼びます。"
                  : "MulmoCast doesn't generate audio, images, and video itself - it calls 'external AI services' to generate them. These external services are called 'providers'."
              }}
            </p>
            <p class="text-muted-foreground mb-4">
              {{
                locale === "ja"
                  ? "プロバイダーを変更することで、異なる声質、異なる画風、異なる動画スタイルを使い分けることができます。"
                  : "By changing providers, you can use different voice qualities, different art styles, and different video styles."
              }}
            </p>
            <div class="bg-muted rounded-lg p-4">
              <h4 class="text-foreground mb-3 text-sm font-medium">
                {{ locale === "ja" ? "3種類のプロバイダー" : "3 Types of Providers" }}
              </h4>
              <div class="grid gap-4 md:grid-cols-3">
                <div class="bg-background rounded-lg p-4 text-center">
                  <Volume2 class="text-primary mx-auto mb-2 h-8 w-8" />
                  <p class="text-foreground text-sm font-medium">
                    {{ locale === "ja" ? "音声（TTS）" : "Audio (TTS)" }}
                  </p>
                  <p class="text-muted-foreground text-xs">
                    {{ locale === "ja" ? "テキスト → 音声" : "Text → Speech" }}
                  </p>
                  <p class="text-muted-foreground mt-1 text-xs">OpenAI, ElevenLabs, Kotodama...</p>
                </div>
                <div class="bg-background rounded-lg p-4 text-center">
                  <ImageIcon class="text-primary mx-auto mb-2 h-8 w-8" />
                  <p class="text-foreground text-sm font-medium">
                    {{ locale === "ja" ? "画像" : "Image" }}
                  </p>
                  <p class="text-muted-foreground text-xs">
                    {{ locale === "ja" ? "テキスト → 画像" : "Text → Image" }}
                  </p>
                  <p class="text-muted-foreground mt-1 text-xs">DALL-E, Imagen...</p>
                </div>
                <div class="bg-background rounded-lg p-4 text-center">
                  <Video class="text-primary mx-auto mb-2 h-8 w-8" />
                  <p class="text-foreground text-sm font-medium">
                    {{ locale === "ja" ? "動画" : "Video" }}
                  </p>
                  <p class="text-muted-foreground text-xs">
                    {{ locale === "ja" ? "テキスト/画像 → 動画" : "Text/Image → Video" }}
                  </p>
                  <p class="text-muted-foreground mt-1 text-xs">Veo, Replicate...</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="mt-4 border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950">
          <CardContent class="pt-6">
            <h4 class="text-foreground mb-2 font-medium">
              {{ locale === "ja" ? "デフォルト設定で始められます" : "You Can Start with Default Settings" }}
            </h4>
            <p class="text-muted-foreground text-sm">
              {{
                locale === "ja"
                  ? "最初はOpenAIのAPIキーだけあれば、音声（TTS）と画像（DALL-E）の両方が使えます。他のプロバイダーは必要に応じて後から追加できます。"
                  : "To start, you only need an OpenAI API key to use both audio (TTS) and images (DALL-E). You can add other providers later as needed."
              }}
            </p>
          </CardContent>
        </Card>

        <!-- External Links -->
        <div class="text-muted-foreground mt-4 rounded-lg border border-dashed p-4 text-sm">
          <p class="mb-2 font-medium">{{ locale === "ja" ? "参考リンク" : "Reference Links" }}</p>
          <ul class="space-y-1">
            <li>
              <a
                href="https://github.com/receptron/mulmocast-cli/blob/main/docs/tts.md"
                target="_blank"
                rel="noopener"
                class="text-primary hover:underline"
              >
                <ExternalLink class="mr-1 inline h-3 w-3" />
                {{ locale === "ja" ? "TTSプロバイダー詳細ドキュメント" : "TTS Provider Detailed Documentation" }}
              </a>
            </li>
            <li>
              <a
                href="https://github.com/receptron/mulmocast-cli/blob/main/docs/feature.md"
                target="_blank"
                rel="noopener"
                class="text-primary hover:underline"
              >
                <ExternalLink class="mr-1 inline h-3 w-3" />
                {{ locale === "ja" ? "全機能リファレンス" : "Full Feature Reference" }}
              </a>
            </li>
          </ul>
        </div>
      </section>

      <!-- TTS Providers -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "音声（TTS）プロバイダー" : "Audio (TTS) Providers" }}
        </h2>

        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "TTS（Text-to-Speech）は、テキストを音声に変換するサービスです。MulmoScriptの各beatの「text」を読み上げるために使われます。プロバイダーによって声の質感、対応言語、感情表現が異なります。"
              : "TTS (Text-to-Speech) is a service that converts text to speech. It's used to narrate the 'text' in each beat of your MulmoScript. Different providers offer different voice qualities, supported languages, and emotional expression."
          }}
        </p>

        <!-- OpenAI TTS -->
        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="flex items-center gap-2 text-base">
              <div class="bg-primary/10 flex h-8 w-8 items-center justify-center rounded">
                <span class="text-primary text-xs font-bold">AI</span>
              </div>
              OpenAI TTS
              <span class="text-primary-foreground bg-primary ml-2 rounded px-2 py-0.5 text-xs">{{
                locale === "ja" ? "デフォルト" : "Default"
              }}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-3 text-sm">
              {{
                locale === "ja"
                  ? "OpenAIの音声合成サービスです。設定不要でデフォルトで使えます。多言語対応で安定しており、日本語・英語どちらも自然に読み上げます。"
                  : "OpenAI's text-to-speech service. Works by default without configuration. Multi-language support and stable, producing natural speech in both Japanese and English."
              }}
            </p>

            <div class="mb-4">
              <h4 class="text-foreground mb-2 text-sm font-medium">
                {{ locale === "ja" ? "利用できる声（6種類）" : "Available Voices (6 types)" }}
              </h4>
              <div class="grid gap-2 md:grid-cols-3">
                <div class="bg-muted rounded p-2 text-center">
                  <code class="text-primary text-xs">shimmer</code>
                  <p class="text-muted-foreground text-xs">
                    {{ locale === "ja" ? "やさしい女性声" : "Soft female" }}
                  </p>
                </div>
                <div class="bg-muted rounded p-2 text-center">
                  <code class="text-primary text-xs">nova</code>
                  <p class="text-muted-foreground text-xs">
                    {{ locale === "ja" ? "明るい女性声" : "Bright female" }}
                  </p>
                </div>
                <div class="bg-muted rounded p-2 text-center">
                  <code class="text-primary text-xs">alloy</code>
                  <p class="text-muted-foreground text-xs">
                    {{ locale === "ja" ? "中性的" : "Neutral" }}
                  </p>
                </div>
                <div class="bg-muted rounded p-2 text-center">
                  <code class="text-primary text-xs">echo</code>
                  <p class="text-muted-foreground text-xs">
                    {{ locale === "ja" ? "落ち着いた男性声" : "Calm male" }}
                  </p>
                </div>
                <div class="bg-muted rounded p-2 text-center">
                  <code class="text-primary text-xs">fable</code>
                  <p class="text-muted-foreground text-xs">
                    {{ locale === "ja" ? "物語向き" : "Storytelling" }}
                  </p>
                </div>
                <div class="bg-muted rounded p-2 text-center">
                  <code class="text-primary text-xs">onyx</code>
                  <p class="text-muted-foreground text-xs">
                    {{ locale === "ja" ? "深みのある男性声" : "Deep male" }}
                  </p>
                </div>
              </div>
            </div>

            <div class="border-border mb-4 rounded border p-3">
              <h4 class="text-foreground mb-2 text-sm font-medium">
                {{ locale === "ja" ? "必要なもの" : "Requirements" }}
              </h4>
              <p class="text-muted-foreground text-sm">
                {{ locale === "ja" ? "環境変数：" : "Environment variable:" }}
                <code class="text-primary">OPENAI_API_KEY</code>
              </p>
            </div>

            <h4 class="text-foreground mb-2 text-sm font-medium">
              {{ locale === "ja" ? "設定例" : "Configuration Example" }}
            </h4>
            <div class="bg-muted overflow-x-auto rounded-lg p-3">
              <pre class="text-xs"><code>{
  "speechParams": {
    "speakers": {
      "Narrator": {
        "provider": "openai",
        "voiceId": "shimmer"  // {{ locale === "ja" ? "声の種類を指定" : "Specify voice type" }}
      },
      "Host": {
        "provider": "openai",
        "voiceId": "nova"
      }
    }
  }
}</code></pre>
            </div>
          </CardContent>
        </Card>

        <!-- ElevenLabs -->
        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="flex items-center gap-2 text-base">
              <div class="bg-primary/10 flex h-8 w-8 items-center justify-center rounded">
                <span class="text-primary text-xs font-bold">11</span>
              </div>
              ElevenLabs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-3 text-sm">
              {{
                locale === "ja"
                  ? "非常に高品質で感情表現が豊かな音声合成サービスです。声優のようなリアルな音声を生成でき、自分の声をクローンしてカスタム音声を作ることもできます。"
                  : "A very high-quality voice synthesis service with rich emotional expression. Can generate voice-actor-like realistic audio, and you can clone your own voice to create custom voices."
              }}
            </p>

            <div class="mb-4 rounded border border-green-200 bg-green-50 p-3 dark:border-green-900 dark:bg-green-950">
              <p class="text-sm text-green-800 dark:text-green-200">
                <strong>{{ locale === "ja" ? "おすすめユースケース：" : "Recommended Use Cases:" }}</strong>
                {{
                  locale === "ja"
                    ? "感情的なナレーション、プロフェッショナルな広告、高品質ポッドキャスト"
                    : "Emotional narration, professional ads, high-quality podcasts"
                }}
              </p>
            </div>

            <div class="border-border mb-4 rounded border p-3">
              <h4 class="text-foreground mb-2 text-sm font-medium">
                {{ locale === "ja" ? "必要なもの" : "Requirements" }}
              </h4>
              <ul class="text-muted-foreground space-y-1 text-sm">
                <li>
                  {{ locale === "ja" ? "環境変数：" : "Environment variable:" }}
                  <code class="text-primary">ELEVENLABS_API_KEY</code>
                </li>
                <li>
                  {{ locale === "ja" ? "取得先：" : "Get from:" }}
                  <a href="https://elevenlabs.io" target="_blank" rel="noopener" class="text-primary hover:underline"
                    >elevenlabs.io</a
                  >
                  {{ locale === "ja" ? "（無料枠あり）" : "(free tier available)" }}
                </li>
              </ul>
            </div>

            <h4 class="text-foreground mb-2 text-sm font-medium">
              {{ locale === "ja" ? "設定例" : "Configuration Example" }}
            </h4>
            <div class="bg-muted overflow-x-auto rounded-lg p-3">
              <pre class="text-xs"><code>{
  "speechParams": {
    "speakers": {
      "Narrator": {
        "provider": "elevenlabs",
        "voiceId": "your-voice-id"  // {{ locale === "ja" ? "ElevenLabsの声IDを指定" : "Specify ElevenLabs voice ID" }}
      }
    }
  }
}</code></pre>
            </div>
            <p class="text-muted-foreground mt-2 text-xs">
              {{
                locale === "ja"
                  ? "※ voiceIdはElevenLabsの管理画面で確認できます"
                  : "※ You can find voiceId in ElevenLabs dashboard"
              }}
            </p>
          </CardContent>
        </Card>

        <!-- Kotodama -->
        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="flex items-center gap-2 text-base">
              <div class="bg-primary/10 flex h-8 w-8 items-center justify-center rounded">
                <span class="text-primary text-xs font-bold">言</span>
              </div>
              {{ locale === "ja" ? "ことだま" : "Kotodama" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-3 text-sm">
              {{
                locale === "ja"
                  ? "日本語TTSサービス。デコレーション機能により、感情や強調を細かく制御できます。"
                  : "Japanese TTS service. Decoration feature allows fine control over emotion and emphasis."
              }}
            </p>

            <div class="mb-4">
              <h4 class="text-foreground mb-2 text-sm font-medium">
                {{ locale === "ja" ? "デフォルト設定" : "Default Settings" }}
              </h4>
              <div class="grid gap-2 md:grid-cols-2">
                <div class="bg-muted rounded p-2">
                  <p class="text-muted-foreground text-xs">{{ locale === "ja" ? "声" : "Voice" }}</p>
                  <code class="text-primary text-sm">Atla</code>
                </div>
                <div class="bg-muted rounded p-2">
                  <p class="text-muted-foreground text-xs">decoration</p>
                  <code class="text-primary text-sm">neutral</code>
                </div>
              </div>
            </div>

            <div class="border-border mb-4 rounded border p-3">
              <h4 class="text-foreground mb-2 text-sm font-medium">
                {{ locale === "ja" ? "必要なもの" : "Requirements" }}
              </h4>
              <ul class="text-muted-foreground space-y-1 text-sm">
                <li>
                  {{ locale === "ja" ? "環境変数：" : "Environment variable:" }}
                  <code class="text-primary">KOTODAMA_API_KEY</code>
                </li>
              </ul>
            </div>

            <h4 class="text-foreground mb-2 text-sm font-medium">
              {{ locale === "ja" ? "設定例" : "Configuration Example" }}
            </h4>
            <div class="bg-muted overflow-x-auto rounded-lg p-3">
              <pre class="text-xs"><code>{
  "speechParams": {
    "speakers": {
      "Narrator": {
        "provider": "kotodama",
        "voiceId": "Atla",
        "decoration": "happy"  // {{ locale === "ja" ? "感情を指定" : "Specify emotion" }}
      }
    }
  }
}</code></pre>
            </div>
          </CardContent>
        </Card>

        <!-- Google Gemini TTS -->
        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="flex items-center gap-2 text-base">
              <div class="bg-primary/10 flex h-8 w-8 items-center justify-center rounded">
                <span class="text-primary text-xs font-bold">G</span>
              </div>
              Google Gemini TTS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-3 text-sm">
              {{
                locale === "ja"
                  ? "Google Gemini APIを使った音声合成。PCMからMP3への変換が自動で行われます。"
                  : "Voice synthesis using Google Gemini API. PCM to MP3 conversion is done automatically."
              }}
            </p>

            <div class="mb-4">
              <h4 class="text-foreground mb-2 text-sm font-medium">
                {{ locale === "ja" ? "利用できる声（5種類）" : "Available Voices (5 types)" }}
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="voice in ['Kore', 'Puck', 'Charon', 'Fenrir', 'Aoede']"
                  :key="voice"
                  class="bg-muted text-foreground rounded px-2 py-1 text-xs"
                >
                  {{ voice }}
                </span>
              </div>
            </div>

            <div class="border-border mb-4 rounded border p-3">
              <h4 class="text-foreground mb-2 text-sm font-medium">
                {{ locale === "ja" ? "必要なもの" : "Requirements" }}
              </h4>
              <ul class="text-muted-foreground space-y-1 text-sm">
                <li>
                  {{ locale === "ja" ? "環境変数：" : "Environment variable:" }}
                  <code class="text-primary">GEMINI_API_KEY</code>
                </li>
                <li>
                  {{ locale === "ja" ? "取得先：" : "Get from:" }}
                  <a
                    href="https://aistudio.google.com/app/apikey"
                    target="_blank"
                    rel="noopener"
                    class="text-primary hover:underline"
                    >Google AI Studio</a
                  >
                </li>
              </ul>
            </div>

            <h4 class="text-foreground mb-2 text-sm font-medium">
              {{ locale === "ja" ? "設定例" : "Configuration Example" }}
            </h4>
            <div class="bg-muted overflow-x-auto rounded-lg p-3">
              <pre class="text-xs"><code>{
  "speechParams": {
    "speakers": {
      "Host": {
        "provider": "gemini",
        "voiceId": "Kore"  // {{ locale === "ja" ? "デフォルト声" : "Default voice" }}
      }
    }
  }
}</code></pre>
            </div>
          </CardContent>
        </Card>

        <!-- Speaker Relationship -->
        <Card class="mt-6 border-purple-200 bg-purple-50 dark:border-purple-900 dark:bg-purple-950">
          <CardHeader>
            <CardTitle class="flex items-center gap-2 text-base">
              <Users class="h-5 w-5 text-purple-600 dark:text-purple-400" />
              {{ locale === "ja" ? "スピーカーとTTSプロバイダーの関係" : "Speaker and TTS Provider Relationship" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4 text-sm">
              {{
                locale === "ja"
                  ? "MulmoScriptでは、「誰が話すか」（speaker）と「どの声で話すか」（TTS設定）を分けて管理します。これにより、同じスピーカー名でも簡単に声を変更できます。"
                  : "MulmoScript separates 'who speaks' (speaker) from 'what voice to use' (TTS settings). This allows you to easily change voices while keeping the same speaker names."
              }}
            </p>

            <div class="bg-background mb-4 rounded-lg p-4">
              <h4 class="text-foreground mb-3 text-sm font-medium">
                {{ locale === "ja" ? "仕組み" : "How It Works" }}
              </h4>
              <div class="grid gap-4 md:grid-cols-2">
                <div class="rounded border p-3">
                  <p class="text-primary mb-2 text-xs font-medium">1. speechParams.speakers</p>
                  <p class="text-muted-foreground text-xs">
                    {{
                      locale === "ja"
                        ? "スピーカー名とTTS設定（プロバイダー、声ID）を定義"
                        : "Define speaker names and TTS settings (provider, voice ID)"
                    }}
                  </p>
                </div>
                <div class="rounded border p-3">
                  <p class="text-primary mb-2 text-xs font-medium">2. beat.speaker</p>
                  <p class="text-muted-foreground text-xs">
                    {{
                      locale === "ja"
                        ? "各beatで話すスピーカー名を指定（speakers で定義した名前を参照）"
                        : "Specify which speaker talks in each beat (references name defined in speakers)"
                    }}
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-muted overflow-x-auto rounded-lg p-3">
              <pre class="text-xs"><code>{
  "speechParams": {
    "speakers": {
      "Host": { "provider": "openai", "voiceId": "nova" },    <span class="text-green-600 dark:text-green-400">// {{ locale === "ja" ? "Hostの声を定義" : "Define Host's voice" }}</span>
      "Guest": { "provider": "openai", "voiceId": "echo" }    <span class="text-green-600 dark:text-green-400">// {{ locale === "ja" ? "Guestの声を定義" : "Define Guest's voice" }}</span>
    }
  },
  "beats": [
    { "speaker": "Host", "text": "{{ locale === "ja" ? "こんにちは！" : "Hello!" }}" },   <span class="text-green-600 dark:text-green-400">// {{ locale === "ja" ? "nova で読み上げ" : "Read with nova" }}</span>
    { "speaker": "Guest", "text": "{{ locale === "ja" ? "よろしく！" : "Nice to meet you!" }}" }  <span class="text-green-600 dark:text-green-400">// {{ locale === "ja" ? "echo で読み上げ" : "Read with echo" }}</span>
  ]
}</code></pre>
            </div>
          </CardContent>
        </Card>

        <!-- Practical Examples -->
        <h3 class="text-foreground mt-8 mb-4 text-lg font-medium">
          {{ locale === "ja" ? "実用的なサンプル" : "Practical Examples" }}
        </h3>

        <!-- OpenAI TTS Example -->
        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-sm">
              {{ locale === "ja" ? "OpenAI TTS サンプル（対話形式）" : "OpenAI TTS Sample (Dialogue)" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-3 text-xs">
              {{
                locale === "ja"
                  ? "2人のスピーカーが会話する形式。OpenAI TTSは設定不要でOPENAI_API_KEYがあれば動作します。"
                  : "Two speakers having a conversation. OpenAI TTS works with just OPENAI_API_KEY, no additional setup needed."
              }}
            </p>
            <div class="bg-muted overflow-x-auto rounded-lg p-3">
              <pre class="text-xs"><code>{
  "$mulmocast": { "version": "1.1" },
  "title": "{{ locale === "ja" ? "対話サンプル" : "Dialogue Sample" }}",
  "lang": "{{ locale === "ja" ? "ja" : "en" }}",
  "speechParams": {
    "speakers": {
      "{{ locale === "ja" ? "先生" : "Teacher" }}": { "provider": "openai", "voiceId": "nova" },
      "{{ locale === "ja" ? "生徒" : "Student" }}": { "provider": "openai", "voiceId": "echo" }
    }
  },
  "imageParams": { "provider": "openai", "model": "dall-e-3" },
  "beats": [
    {
      "speaker": "{{ locale === "ja" ? "先生" : "Teacher" }}",
      "text": "{{ locale === "ja" ? "今日はMulmoScriptについて学びましょう。" : "Today, let's learn about MulmoScript." }}",
      "imagePrompt": "{{ locale === "ja" ? "教室で授業をする先生のイラスト" : "Illustration of a teacher giving a lesson in a classroom" }}"
    },
    {
      "speaker": "{{ locale === "ja" ? "生徒" : "Student" }}",
      "text": "{{ locale === "ja" ? "MulmoScriptって何ですか？" : "What is MulmoScript?" }}",
      "image": { "type": "beat" }
    },
    {
      "speaker": "{{ locale === "ja" ? "先生" : "Teacher" }}",
      "text": "{{ locale === "ja" ? "動画やスライドを自動生成するためのJSON形式の台本です。" : "It's a JSON-format script for automatically generating videos and slides." }}",
      "imagePrompt": "{{ locale === "ja" ? "コードとビデオが連携するイメージ図" : "Diagram showing code and video connection" }}"
    }
  ]
}</code></pre>
            </div>
            <p class="text-muted-foreground mt-2 text-xs">
              <code class="text-primary">mulmo movie dialogue.json</code>
              {{ locale === "ja" ? "で実行できます。" : "to run." }}
            </p>
          </CardContent>
        </Card>

        <!-- ElevenLabs Example -->
        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-sm">
              {{
                locale === "ja"
                  ? "ElevenLabs サンプル（高品質ナレーション）"
                  : "ElevenLabs Sample (High-Quality Narration)"
              }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-3 text-xs">
              {{
                locale === "ja"
                  ? "プロフェッショナルなナレーション向け。voiceIdはElevenLabsの管理画面から取得します。"
                  : "For professional narration. Get voiceId from ElevenLabs dashboard."
              }}
            </p>
            <div class="bg-muted overflow-x-auto rounded-lg p-3">
              <pre class="text-xs"><code>{
  "$mulmocast": { "version": "1.1" },
  "title": "{{ locale === "ja" ? "製品紹介" : "Product Introduction" }}",
  "lang": "{{ locale === "ja" ? "ja" : "en" }}",
  "speechParams": {
    "speakers": {
      "Narrator": {
        "provider": "elevenlabs",
        "voiceId": "pNInz6obpgDQGcFmaJgB"  <span class="text-green-600 dark:text-green-400">// {{ locale === "ja" ? "ElevenLabsの声ID（Adamの例）" : "ElevenLabs voice ID (Adam example)" }}</span>
      }
    }
  },
  "imageParams": { "provider": "openai", "model": "dall-e-3" },
  "beats": [
    {
      "speaker": "Narrator",
      "text": "{{ locale === "ja" ? "革新的なAI技術で、あなたのアイデアを動画に変換します。" : "Transform your ideas into videos with innovative AI technology." }}",
      "imagePrompt": "{{ locale === "ja" ? "未来的なAI技術のイメージ、青い光" : "Futuristic AI technology concept, blue light" }}"
    },
    {
      "speaker": "Narrator",
      "text": "{{ locale === "ja" ? "MulmoCastは、テキストから高品質な動画を自動生成します。" : "MulmoCast automatically generates high-quality videos from text." }}",
      "imagePrompt": "{{ locale === "ja" ? "テキストが動画に変換される様子" : "Text transforming into video" }}"
    }
  ]
}</code></pre>
            </div>
            <div class="text-muted-foreground mt-2 text-xs">
              <p class="mb-1">
                {{ locale === "ja" ? "必要な環境変数：" : "Required environment variable:" }}
                <code class="text-primary">ELEVENLABS_API_KEY</code>
              </p>
              <p>
                {{ locale === "ja" ? "voiceIdの取得方法：" : "How to get voiceId:" }}
                <a
                  href="https://elevenlabs.io/app/voice-library"
                  target="_blank"
                  rel="noopener"
                  class="text-primary hover:underline"
                >
                  Voice Library
                  <ExternalLink class="inline h-3 w-3" />
                </a>
                {{ locale === "ja" ? "から声を選び、Voice IDをコピー" : "- select a voice and copy Voice ID" }}
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Gemini TTS Example -->
        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-sm">
              {{ locale === "ja" ? "Google Gemini TTS サンプル" : "Google Gemini TTS Sample" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-3 text-xs">
              {{
                locale === "ja"
                  ? "Gemini APIを使った音声合成。Kore, Puck, Charon, Fenrir, Aoedeなどの声が使えます。"
                  : "Voice synthesis using Gemini API. Voices like Kore, Puck, Charon, Fenrir, Aoede are available."
              }}
            </p>
            <div class="bg-muted overflow-x-auto rounded-lg p-3">
              <pre class="text-xs"><code>{
  "$mulmocast": { "version": "1.1" },
  "title": "{{ locale === "ja" ? "Gemini TTSデモ" : "Gemini TTS Demo" }}",
  "lang": "{{ locale === "ja" ? "ja" : "en" }}",
  "speechParams": {
    "speakers": {
      "Host": { "provider": "gemini", "voiceId": "Kore" },
      "Assistant": { "provider": "gemini", "voiceId": "Puck" }
    }
  },
  "imageParams": { "provider": "openai", "model": "dall-e-3" },
  "beats": [
    {
      "speaker": "Host",
      "text": "{{ locale === "ja" ? "Gemini TTSを試してみましょう。" : "Let's try Gemini TTS." }}",
      "imagePrompt": "{{ locale === "ja" ? "マイクとスピーカーのイラスト" : "Illustration of microphone and speaker" }}"
    },
    {
      "speaker": "Assistant",
      "text": "{{ locale === "ja" ? "自然な音声が生成できます。" : "Natural speech can be generated." }}",
      "image": { "type": "beat" }
    }
  ]
}</code></pre>
            </div>
            <div class="mt-3">
              <p class="text-muted-foreground mb-2 text-xs">
                {{ locale === "ja" ? "利用できる声：" : "Available voices:" }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="voice in ['Kore', 'Puck', 'Charon', 'Fenrir', 'Aoede']"
                  :key="voice"
                  class="bg-muted text-foreground rounded px-2 py-1 text-xs"
                >
                  {{ voice }}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Kotodama Example -->
        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-sm">
              {{ locale === "ja" ? "ことだま サンプル（日本語特化）" : "Kotodama Sample (Japanese Specialized)" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-3 text-xs">
              {{
                locale === "ja"
                  ? "日本語に特化したTTS。デコレーション機能で感情や強調を細かく制御できます。"
                  : "Japanese-specialized TTS. Decoration feature allows fine control over emotion and emphasis."
              }}
            </p>
            <div class="bg-muted overflow-x-auto rounded-lg p-3">
              <pre class="text-xs"><code>{
  "$mulmocast": { "version": "1.1" },
  "title": "{{ locale === "ja" ? "ことだまデモ" : "Kotodama Demo" }}",
  "lang": "ja",
  "speechParams": {
    "speakers": {
      "{{ locale === "ja" ? "ナレーター" : "Narrator" }}": {
        "provider": "kotodama",
        "voiceId": "Atla",           <span class="text-green-600 dark:text-green-400">// {{ locale === "ja" ? "デフォルト声" : "Default voice" }}</span>
        "decoration": "neutral"      <span class="text-green-600 dark:text-green-400">// {{ locale === "ja" ? "感情：neutral, happy, sad等" : "Emotion: neutral, happy, sad, etc." }}</span>
      }
    }
  },
  "imageParams": { "provider": "openai", "model": "dall-e-3" },
  "beats": [
    {
      "speaker": "{{ locale === "ja" ? "ナレーター" : "Narrator" }}",
      "text": "{{ locale === "ja" ? "こんにちは、ことだまの音声合成をお試しください。" : "Hello, please try Kotodama's voice synthesis." }}",
      "imagePrompt": "{{ locale === "ja" ? "和風のデジタルアート" : "Japanese style digital art" }}"
    }
  ]
}</code></pre>
            </div>
            <div class="text-muted-foreground mt-2 text-xs">
              <p class="mb-1">
                {{ locale === "ja" ? "必要な環境変数：" : "Required environment variable:" }}
                <code class="text-primary">KOTODAMA_API_KEY</code>
              </p>
              <p>
                {{ locale === "ja" ? "decorationオプション：" : "decoration options:" }}
                <code class="bg-muted rounded px-1">neutral</code>, <code class="bg-muted rounded px-1">happy</code>,
                <code class="bg-muted rounded px-1">sad</code>,
                {{ locale === "ja" ? "など" : "etc." }}
              </p>
            </div>
          </CardContent>
        </Card>

        <!-- Mixed Providers Example -->
        <Card class="mb-4 border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950">
          <CardHeader>
            <CardTitle class="flex items-center gap-2 text-sm">
              <Sparkles class="h-4 w-4 text-amber-600 dark:text-amber-400" />
              {{ locale === "ja" ? "複数プロバイダーの組み合わせ" : "Combining Multiple Providers" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-3 text-xs">
              {{
                locale === "ja"
                  ? "スピーカーごとに異なるTTSプロバイダーを使うこともできます。"
                  : "You can use different TTS providers for each speaker."
              }}
            </p>
            <div class="bg-muted overflow-x-auto rounded-lg p-3">
              <pre class="text-xs"><code>{
  "speechParams": {
    "speakers": {
      "Host": { "provider": "openai", "voiceId": "nova" },        <span class="text-green-600 dark:text-green-400">// OpenAI</span>
      "Expert": { "provider": "elevenlabs", "voiceId": "..." },   <span class="text-green-600 dark:text-green-400">// ElevenLabs</span>
      "AI": { "provider": "gemini", "voiceId": "Puck" }           <span class="text-green-600 dark:text-green-400">// Gemini</span>
    }
  },
  "beats": [
    { "speaker": "Host", "text": "..." },    <span class="text-green-600 dark:text-green-400">// {{ locale === "ja" ? "OpenAI nova で読み上げ" : "Read with OpenAI nova" }}</span>
    { "speaker": "Expert", "text": "..." },  <span class="text-green-600 dark:text-green-400">// {{ locale === "ja" ? "ElevenLabs で読み上げ" : "Read with ElevenLabs" }}</span>
    { "speaker": "AI", "text": "..." }       <span class="text-green-600 dark:text-green-400">// {{ locale === "ja" ? "Gemini Puck で読み上げ" : "Read with Gemini Puck" }}</span>
  ]
}</code></pre>
            </div>
          </CardContent>
        </Card>

        <!-- Language-specific Speakers -->
        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="flex items-center gap-2 text-sm">
              <Globe class="h-4 w-4" />
              {{ locale === "ja" ? "言語別スピーカー設定" : "Language-specific Speaker Settings" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-3 text-xs">
              {{
                locale === "ja"
                  ? "speechParams.langを使うと、言語ごとに異なるスピーカー設定を指定できます。翻訳版を作るときに便利です。"
                  : "Using speechParams.lang, you can specify different speaker settings per language. Useful when creating translated versions."
              }}
            </p>
            <div class="bg-muted overflow-x-auto rounded-lg p-3">
              <pre class="text-xs"><code>{
  "lang": "ja",
  "speechParams": {
    "speakers": {
      "Narrator": { "provider": "openai", "voiceId": "nova" }
    },
    "lang": {
      "en": {
        "speakers": {
          "Narrator": { "provider": "elevenlabs", "voiceId": "..." }  <span class="text-green-600 dark:text-green-400">// {{ locale === "ja" ? "英語版は ElevenLabs を使用" : "English version uses ElevenLabs" }}</span>
        }
      }
    }
  }
}</code></pre>
            </div>
            <p class="text-muted-foreground mt-2 text-xs">
              {{
                locale === "ja"
                  ? "mulmo tool translate で翻訳すると、翻訳版は自動的に lang 設定の声を使います。"
                  : "When using mulmo tool translate, translated versions automatically use voices from lang settings."
              }}
            </p>
          </CardContent>
        </Card>
      </section>

      <!-- Image Providers -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "画像プロバイダー" : "Image Providers" }}
        </h2>

        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "imagePromptから画像を生成するサービスです。"
              : "Services that generate images from imagePrompt."
          }}
        </p>

        <!-- OpenAI DALL-E -->
        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="flex items-center gap-2 text-base">
              OpenAI DALL-E
              <span class="text-primary-foreground bg-primary ml-2 rounded px-2 py-0.5 text-xs">{{
                locale === "ja" ? "デフォルト" : "Default"
              }}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="mb-4 grid gap-4 md:grid-cols-2">
              <div class="border-border rounded border p-3">
                <h4 class="text-foreground mb-2 text-sm font-medium">gpt-image-1</h4>
                <p class="text-muted-foreground mb-2 text-xs">
                  {{ locale === "ja" ? "最高品質。参照画像も使える。" : "Highest quality. Can use reference images." }}
                </p>
                <div
                  class="rounded border border-amber-200 bg-amber-50 p-2 text-xs dark:border-amber-900 dark:bg-amber-950"
                >
                  <p class="text-amber-800 dark:text-amber-200">
                    {{ locale === "ja" ? "⚠️ OpenAIの組織認証が必要" : "⚠️ Requires OpenAI organization verification" }}
                  </p>
                </div>
              </div>
              <div class="border-border rounded border p-3">
                <h4 class="text-foreground mb-2 text-sm font-medium">dall-e-3</h4>
                <p class="text-muted-foreground mb-2 text-xs">
                  {{ locale === "ja" ? "認証不要ですぐ使える。" : "No verification required, ready to use." }}
                </p>
                <div
                  class="rounded border border-green-200 bg-green-50 p-2 text-xs dark:border-green-900 dark:bg-green-950"
                >
                  <p class="text-green-800 dark:text-green-200">
                    {{ locale === "ja" ? "✓ すぐに使える" : "✓ Ready to use" }}
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-muted rounded p-3">
              <p class="text-muted-foreground text-sm">
                {{
                  locale === "ja"
                    ? "モデルを変更するには、環境変数を設定："
                    : "To change model, set environment variable:"
                }}
              </p>
              <code class="text-primary text-xs">DEFAULT_OPENAI_IMAGE_MODEL=gpt-image-1</code>
            </div>
          </CardContent>
        </Card>

        <!-- Google Imagen -->
        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">Google Imagen</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-3 text-sm">
              {{ locale === "ja" ? "Google Cloudの画像生成AI。" : "Google Cloud's image generation AI." }}
            </p>

            <div class="mb-4">
              <h4 class="text-foreground mb-2 text-sm font-medium">
                {{ locale === "ja" ? "利用できるモデル" : "Available Models" }}
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="model in [
                    'imagen-4.0-generate-001',
                    'imagen-4.0-ultra-generate-001',
                    'imagen-4.0-fast-generate-001',
                  ]"
                  :key="model"
                  class="bg-muted text-foreground rounded px-2 py-1 text-xs"
                >
                  {{ model }}
                </span>
              </div>
            </div>

            <div class="border-border rounded border p-3">
              <h4 class="text-foreground mb-2 text-sm font-medium">
                {{ locale === "ja" ? "必要なもの" : "Requirements" }}
              </h4>
              <ul class="text-muted-foreground space-y-1 text-sm">
                <li>{{ locale === "ja" ? "Google Cloudアカウント" : "Google Cloud account" }}</li>
                <li>
                  {{ locale === "ja" ? "認証設定：" : "Authentication:" }}
                  <code class="text-primary text-xs">gcloud auth application-default login</code>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <!-- Image Provider Samples -->
        <h3 class="text-foreground mt-8 mb-4 text-lg font-medium">
          {{ locale === "ja" ? "画像プロバイダーサンプル" : "Image Provider Samples" }}
        </h3>

        <!-- OpenAI DALL-E Sample -->
        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-sm">
              {{ locale === "ja" ? "OpenAI DALL-E サンプル" : "OpenAI DALL-E Sample" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="bg-muted overflow-x-auto rounded-lg p-3">
              <pre class="text-xs"><code>{
  "$mulmocast": { "version": "1.1" },
  "title": "{{ locale === "ja" ? "DALL-E画像生成" : "DALL-E Image Generation" }}",
  "lang": "{{ locale === "ja" ? "ja" : "en" }}",
  "imageParams": {
    "provider": "openai",
    "model": "dall-e-3"  <span class="text-green-600 dark:text-green-400">// {{ locale === "ja" ? "または gpt-image-1（認証必要）" : "or gpt-image-1 (verification required)" }}</span>
  },
  "speechParams": {
    "speakers": { "Narrator": { "provider": "openai", "voiceId": "nova" } }
  },
  "beats": [
    {
      "speaker": "Narrator",
      "text": "{{ locale === "ja" ? "美しい夕焼けの風景です。" : "A beautiful sunset landscape." }}",
      "imagePrompt": "{{ locale === "ja" ? "オレンジと紫のグラデーションの夕焼け空、海に反射する光、シルエットの椰子の木" : "Orange and purple gradient sunset sky, light reflecting on the ocean, silhouette of palm trees" }}"
    }
  ]
}</code></pre>
            </div>
          </CardContent>
        </Card>

        <!-- Google Imagen Sample -->
        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-sm">
              {{ locale === "ja" ? "Google Imagen サンプル" : "Google Imagen Sample" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="bg-muted overflow-x-auto rounded-lg p-3">
              <pre class="text-xs"><code>{
  "$mulmocast": { "version": "1.1" },
  "title": "{{ locale === "ja" ? "Imagen画像生成" : "Imagen Image Generation" }}",
  "lang": "{{ locale === "ja" ? "ja" : "en" }}",
  "imageParams": {
    "provider": "google",
    "model": "imagen-4.0-generate-001"
  },
  "speechParams": {
    "speakers": { "Narrator": { "provider": "openai", "voiceId": "nova" } }
  },
  "beats": [
    {
      "speaker": "Narrator",
      "text": "{{ locale === "ja" ? "未来都市のイメージです。" : "An image of a futuristic city." }}",
      "imagePrompt": "{{ locale === "ja" ? "未来都市、空飛ぶ車、ネオンライト、高層ビル、サイバーパンク風" : "Futuristic city, flying cars, neon lights, skyscrapers, cyberpunk style" }}"
    }
  ]
}</code></pre>
            </div>
            <p class="text-muted-foreground mt-2 text-xs">
              {{ locale === "ja" ? "必要：" : "Required:" }}
              <code class="text-primary">gcloud auth application-default login</code>
            </p>
          </CardContent>
        </Card>
      </section>

      <!-- Video Providers -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "動画プロバイダー" : "Video Providers" }}
        </h2>

        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "moviePromptから動画を生成するサービスです。リップシンク（口パク）にも使います。"
              : "Services that generate video from moviePrompt. Also used for lip sync."
          }}
        </p>

        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">Google Veo</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-3 text-sm">
              {{
                locale === "ja"
                  ? "Googleの動画生成AI。最大8秒の動画を生成。"
                  : "Google's video generation AI. Generates up to 8-second videos."
              }}
            </p>

            <div class="mb-3 grid gap-2 md:grid-cols-2">
              <div class="bg-muted rounded p-2">
                <code class="text-primary text-xs">veo-2.0</code>
                <p class="text-muted-foreground text-xs">{{ locale === "ja" ? "標準" : "Standard" }}</p>
              </div>
              <div class="bg-muted rounded p-2">
                <code class="text-primary text-xs">veo-3.0</code>
                <p class="text-muted-foreground text-xs">{{ locale === "ja" ? "高品質" : "High quality" }}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">Replicate</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-3 text-sm">
              {{
                locale === "ja"
                  ? "様々なAIモデルが使えるプラットフォーム。特にリップシンクに使います。"
                  : "Platform with various AI models. Especially used for lip sync."
              }}
            </p>

            <div class="mb-4">
              <h4 class="text-foreground mb-2 text-sm font-medium">
                {{ locale === "ja" ? "利用できるモデル" : "Available Models" }}
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="model in [
                    'bytedance/seedance-1-lite',
                    'kwaivgi/kling-v2.1',
                    'google/veo-2',
                    'minimax/hailuo-02',
                  ]"
                  :key="model"
                  class="bg-muted text-foreground rounded px-2 py-1 text-xs"
                >
                  {{ model }}
                </span>
              </div>
            </div>

            <div class="border-border rounded border p-3">
              <h4 class="text-foreground mb-2 text-sm font-medium">
                {{ locale === "ja" ? "必要なもの" : "Requirements" }}
              </h4>
              <ul class="text-muted-foreground space-y-1 text-sm">
                <li>
                  {{ locale === "ja" ? "環境変数：" : "Environment variable:" }}
                  <code class="text-primary">REPLICATE_API_TOKEN</code>
                </li>
                <li>
                  {{ locale === "ja" ? "取得先：" : "Get from:" }}
                  <a href="https://replicate.com" target="_blank" rel="noopener" class="text-primary hover:underline"
                    >replicate.com</a
                  >
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <!-- Video Provider Samples -->
        <h3 class="text-foreground mt-8 mb-4 text-lg font-medium">
          {{ locale === "ja" ? "動画プロバイダーサンプル" : "Video Provider Samples" }}
        </h3>

        <!-- Google Veo Sample -->
        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-sm">
              {{ locale === "ja" ? "Google Veo サンプル" : "Google Veo Sample" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-3 text-xs">
              {{
                locale === "ja"
                  ? "Google Veoで動画を生成。moviePromptを指定すると、画像の代わりに動画が生成されます。"
                  : "Generate video with Google Veo. Specifying moviePrompt generates video instead of images."
              }}
            </p>
            <div class="bg-muted overflow-x-auto rounded-lg p-3">
              <pre class="text-xs"><code>{
  "$mulmocast": { "version": "1.1" },
  "title": "{{ locale === "ja" ? "Veo動画生成" : "Veo Video Generation" }}",
  "lang": "{{ locale === "ja" ? "ja" : "en" }}",
  "movieParams": {
    "provider": "google",
    "model": "veo-2.0-generate-001"  <span class="text-green-600 dark:text-green-400">// {{ locale === "ja" ? "veo-3.0もあり" : "veo-3.0 also available" }}</span>
  },
  "speechParams": {
    "speakers": { "Narrator": { "provider": "openai", "voiceId": "nova" } }
  },
  "beats": [
    {
      "speaker": "Narrator",
      "text": "{{ locale === "ja" ? "波が打ち寄せる海岸の風景です。" : "A scene of waves crashing on the shore." }}",
      "moviePrompt": "{{ locale === "ja" ? "穏やかな波が砂浜に打ち寄せる、夕暮れの海岸、金色の光" : "Gentle waves washing onto sandy beach, coastal sunset, golden light" }}"
    }
  ]
}</code></pre>
            </div>
            <p class="text-muted-foreground mt-2 text-xs">
              {{ locale === "ja" ? "必要：" : "Required:" }}
              <code class="text-primary">GEMINI_API_KEY</code>
            </p>
          </CardContent>
        </Card>

        <!-- Replicate Video Sample -->
        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-sm">
              {{ locale === "ja" ? "Replicate 動画サンプル" : "Replicate Video Sample" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-3 text-xs">
              {{
                locale === "ja"
                  ? "Replicateで様々な動画生成モデルを使用できます。"
                  : "Various video generation models available on Replicate."
              }}
            </p>
            <div class="bg-muted overflow-x-auto rounded-lg p-3">
              <pre class="text-xs"><code>{
  "$mulmocast": { "version": "1.1" },
  "title": "{{ locale === "ja" ? "Replicate動画生成" : "Replicate Video Generation" }}",
  "lang": "{{ locale === "ja" ? "ja" : "en" }}",
  "movieParams": {
    "provider": "replicate",
    "model": "bytedance/seedance-1-lite"  <span class="text-green-600 dark:text-green-400">// {{ locale === "ja" ? "コスト効率良" : "Cost efficient" }}</span>
  },
  "speechParams": {
    "speakers": { "Narrator": { "provider": "openai", "voiceId": "nova" } }
  },
  "beats": [
    {
      "speaker": "Narrator",
      "text": "{{ locale === "ja" ? "花が咲く様子を見てみましょう。" : "Let's watch a flower blooming." }}",
      "imagePrompt": "{{ locale === "ja" ? "白い花のつぼみ、庭園" : "White flower bud, garden" }}",
      "moviePrompt": "{{ locale === "ja" ? "花がゆっくりと開花する、タイムラプス風" : "Flower slowly blooming, time-lapse style" }}"
    }
  ]
}</code></pre>
            </div>
            <p class="text-muted-foreground mt-2 text-xs">
              {{ locale === "ja" ? "必要：" : "Required:" }}
              <code class="text-primary">REPLICATE_API_TOKEN</code>
            </p>
          </CardContent>
        </Card>

        <!-- Lip Sync Sample -->
        <Card class="mb-4 border-purple-200 bg-purple-50 dark:border-purple-900 dark:bg-purple-950">
          <CardHeader>
            <CardTitle class="text-sm">
              {{ locale === "ja" ? "リップシンク（口パク）サンプル" : "Lip Sync Sample" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-3 text-xs">
              {{
                locale === "ja"
                  ? "音声に合わせてキャラクターの口を動かす。Replicateのリップシンクモデルを使用。"
                  : "Animate character's mouth to match audio. Uses Replicate's lip sync models."
              }}
            </p>
            <div class="bg-muted overflow-x-auto rounded-lg p-3">
              <pre class="text-xs"><code>{
  "$mulmocast": { "version": "1.1" },
  "title": "{{ locale === "ja" ? "リップシンクデモ" : "Lip Sync Demo" }}",
  "lang": "{{ locale === "ja" ? "ja" : "en" }}",
  "imageParams": { "provider": "openai", "model": "dall-e-3" },
  "movieParams": {
    "provider": "replicate",
    "lipSyncModel": "bytedance/omni-human"  <span class="text-green-600 dark:text-green-400">// {{ locale === "ja" ? "静止画からリップシンク" : "Lip sync from static image" }}</span>
  },
  "speechParams": {
    "speakers": { "Host": { "provider": "openai", "voiceId": "nova" } }
  },
  "beats": [
    {
      "speaker": "Host",
      "text": "{{ locale === "ja" ? "こんにちは、私はAIアシスタントです。" : "Hello, I am an AI assistant." }}",
      "imagePrompt": "{{ locale === "ja" ? "笑顔の女性キャラクター、正面向き、アニメ風" : "Smiling female character, facing forward, anime style" }}",
      "lipSync": true
    }
  ]
}</code></pre>
            </div>
            <div class="mt-3">
              <p class="text-muted-foreground mb-2 text-xs">
                {{ locale === "ja" ? "利用できるリップシンクモデル：" : "Available lip sync models:" }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="model in ['bytedance/omni-human', 'bytedance/latentsync', 'tmappdev/lipsync']"
                  :key="model"
                  class="bg-muted text-foreground rounded px-2 py-1 text-xs"
                >
                  {{ model }}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <!-- Environment Variables Summary -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "環境変数まとめ" : "Environment Variables Summary" }}
        </h2>

        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? ".envファイルに設定する環境変数の一覧です。"
              : "List of environment variables to set in your .env file."
          }}
        </p>

        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "変数名" : "Variable" }}
                </th>
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "用途" : "Purpose" }}
                </th>
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "必須" : "Required" }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-border border px-4 py-2">
                  <code class="text-xs">OPENAI_API_KEY</code>
                </td>
                <td class="border-border border px-4 py-2">
                  {{ locale === "ja" ? "音声・画像生成" : "Audio & image generation" }}
                </td>
                <td class="border-border text-primary border px-4 py-2 text-center">✓</td>
              </tr>
              <tr>
                <td class="border-border border px-4 py-2">
                  <code class="text-xs">DEFAULT_OPENAI_IMAGE_MODEL</code>
                </td>
                <td class="border-border border px-4 py-2">
                  {{ locale === "ja" ? "gpt-image-1を使う場合" : "To use gpt-image-1" }}
                </td>
                <td class="border-border border px-4 py-2 text-center"></td>
              </tr>
              <tr>
                <td class="border-border border px-4 py-2">
                  <code class="text-xs">GEMINI_API_KEY</code>
                </td>
                <td class="border-border border px-4 py-2">Google Gemini TTS</td>
                <td class="border-border border px-4 py-2 text-center"></td>
              </tr>
              <tr>
                <td class="border-border border px-4 py-2">
                  <code class="text-xs">ELEVENLABS_API_KEY</code>
                </td>
                <td class="border-border border px-4 py-2">ElevenLabs TTS</td>
                <td class="border-border border px-4 py-2 text-center"></td>
              </tr>
              <tr>
                <td class="border-border border px-4 py-2">
                  <code class="text-xs">REPLICATE_API_TOKEN</code>
                </td>
                <td class="border-border border px-4 py-2">
                  {{ locale === "ja" ? "動画生成・リップシンク" : "Video generation & lip sync" }}
                </td>
                <td class="border-border border px-4 py-2 text-center"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Navigation -->
      <div class="border-border flex items-center justify-between border-t pt-6">
        <a
          :href="localizedUrl('/docs/cli/mulmoscript')"
          class="text-muted-foreground hover:text-primary inline-flex items-center text-sm"
        >
          <ChevronLeft class="mr-1 h-4 w-4" />
          MulmoScript
        </a>
        <a
          :href="localizedUrl('/docs/cli/advanced')"
          class="text-muted-foreground hover:text-primary inline-flex items-center text-sm"
        >
          {{ locale === "ja" ? "高度な機能" : "Advanced Features" }}
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
  Volume2,
  Image as ImageIcon,
  Video,
  ExternalLink,
  Users,
  Globe,
  Sparkles,
} from "lucide-vue-next";

const { locale } = useI18n();
const localizedUrl = useLocalizedUrl();
</script>
