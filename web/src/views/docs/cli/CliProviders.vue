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

            <div class="border-border rounded border p-3">
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

            <div class="border-border rounded border p-3">
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
          </CardContent>
        </Card>

        <!-- How to set TTS -->
        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "設定方法" : "How to Configure" }}
        </h3>
        <div class="bg-muted overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "speechParams": {
    "speakers": {
      "{{ locale === "ja" ? "ナレーター" : "Narrator" }}": {
        "provider": "elevenlabs",  // {{ locale === "ja" ? "使いたいプロバイダー" : "Provider you want to use" }}
        "voiceId": "your-voice-id"  // {{ locale === "ja" ? "声のID" : "Voice ID" }}
      }
    }
  }
}</code></pre>
        </div>
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
import { ChevronLeft, ChevronRight, Volume2, Image as ImageIcon, Video, ExternalLink } from "lucide-vue-next";

const { locale } = useI18n();
const localizedUrl = useLocalizedUrl();
</script>
