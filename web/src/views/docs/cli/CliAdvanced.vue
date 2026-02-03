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
          <span class="text-foreground">{{ locale === "ja" ? "高度な機能" : "Advanced Features" }}</span>
        </div>
        <h1 class="text-foreground text-3xl font-bold">
          {{ locale === "ja" ? "高度な機能" : "Advanced Features" }}
        </h1>
        <p class="text-muted-foreground mt-2 text-lg">
          {{
            locale === "ja"
              ? "動画をもっとプロフェッショナルに仕上げる機能"
              : "Features to make your videos more professional"
          }}
        </p>
      </div>

      <!-- Feature Overview -->
      <section class="mb-12">
        <p class="text-muted-foreground mb-4">
          {{
            locale === "ja"
              ? "基本的な動画が作れるようになったら、これらの機能を使ってより魅力的な動画を作りましょう。"
              : "Once you can create basic videos, use these features to make them more engaging."
          }}
        </p>

        <div class="grid gap-3 md:grid-cols-2">
          <a
            href="#lipsync"
            class="border-border hover:border-primary group flex items-center gap-3 rounded-lg border p-3 transition-colors"
          >
            <Smile class="text-primary h-6 w-6" />
            <div>
              <p class="text-foreground group-hover:text-primary text-sm font-medium">
                {{ locale === "ja" ? "リップシンク" : "Lip Sync" }}
              </p>
              <p class="text-muted-foreground text-xs">
                {{ locale === "ja" ? "口の動きを音声に合わせる" : "Match mouth movement to audio" }}
              </p>
            </div>
          </a>
          <a
            href="#transitions"
            class="border-border hover:border-primary group flex items-center gap-3 rounded-lg border p-3 transition-colors"
          >
            <Layers class="text-primary h-6 w-6" />
            <div>
              <p class="text-foreground group-hover:text-primary text-sm font-medium">
                {{ locale === "ja" ? "トランジション" : "Transitions" }}
              </p>
              <p class="text-muted-foreground text-xs">
                {{ locale === "ja" ? "シーン切り替えの効果" : "Scene transition effects" }}
              </p>
            </div>
          </a>
          <a
            href="#filters"
            class="border-border hover:border-primary group flex items-center gap-3 rounded-lg border p-3 transition-colors"
          >
            <Palette class="text-primary h-6 w-6" />
            <div>
              <p class="text-foreground group-hover:text-primary text-sm font-medium">
                {{ locale === "ja" ? "ビデオフィルター" : "Video Filters" }}
              </p>
              <p class="text-muted-foreground text-xs">
                {{ locale === "ja" ? "セピア、グリッチなどの効果" : "Sepia, glitch, and other effects" }}
              </p>
            </div>
          </a>
          <a
            href="#captions"
            class="border-border hover:border-primary group flex items-center gap-3 rounded-lg border p-3 transition-colors"
          >
            <Subtitles class="text-primary h-6 w-6" />
            <div>
              <p class="text-foreground group-hover:text-primary text-sm font-medium">
                {{ locale === "ja" ? "字幕" : "Captions" }}
              </p>
              <p class="text-muted-foreground text-xs">
                {{ locale === "ja" ? "動画に字幕を追加" : "Add subtitles to video" }}
              </p>
            </div>
          </a>
          <a
            href="#bgm"
            class="border-border hover:border-primary group flex items-center gap-3 rounded-lg border p-3 transition-colors"
          >
            <Music class="text-primary h-6 w-6" />
            <div>
              <p class="text-foreground group-hover:text-primary text-sm font-medium">BGM</p>
              <p class="text-muted-foreground text-xs">
                {{ locale === "ja" ? "背景音楽を追加" : "Add background music" }}
              </p>
            </div>
          </a>
          <a
            href="#spillover"
            class="border-border hover:border-primary group flex items-center gap-3 rounded-lg border p-3 transition-colors"
          >
            <AudioLines class="text-primary h-6 w-6" />
            <div>
              <p class="text-foreground group-hover:text-primary text-sm font-medium">
                {{ locale === "ja" ? "スピルオーバー" : "Spillover" }}
              </p>
              <p class="text-muted-foreground text-xs">
                {{ locale === "ja" ? "長い音声を複数シーンに" : "Spread audio across scenes" }}
              </p>
            </div>
          </a>
        </div>
      </section>

      <!-- Lip Sync -->
      <section id="lipsync" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "リップシンク（口パク）" : "Lip Sync" }}
        </h2>

        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">
              {{ locale === "ja" ? "これは何？" : "What is this?" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{
                locale === "ja"
                  ? "静止画のキャラクターの口を、音声に合わせて動かす機能です。まるで本当に話しているように見えます。"
                  : "A feature that moves the mouth of a still image character in sync with the audio. It looks like they're really talking."
              }}
            </p>
          </CardContent>
        </Card>

        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">
              {{ locale === "ja" ? "必要なもの" : "Requirements" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="text-muted-foreground space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <CheckCircle class="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>
                  <code class="text-primary">REPLICATE_API_TOKEN</code>
                  {{ locale === "ja" ? "（Replicateのアカウントが必要）" : "(Replicate account required)" }}
                </span>
              </li>
              <li class="flex items-start gap-2">
                <CheckCircle class="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{{
                  locale === "ja" ? "顔が映った画像（正面向きが良い）" : "Image with a face (front-facing is best)"
                }}</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "設定方法" : "How to Set Up" }}
        </h3>
        <div class="bg-muted overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "movieParams": {
    "enableLipSync": true,  // {{ locale === "ja" ? "リップシンクを有効化" : "Enable lip sync" }}
    "lipSync": {
      "provider": "replicate",
      "model": "bytedance/omni-human"  // {{ locale === "ja" ? "おすすめモデル" : "Recommended model" }}
    }
  }
}</code></pre>
        </div>

        <div class="mt-4 grid gap-3 md:grid-cols-3">
          <div class="border-border rounded border p-3">
            <code class="text-primary text-xs">bytedance/omni-human</code>
            <p class="text-muted-foreground mt-1 text-xs">
              {{ locale === "ja" ? "最新・高品質（静止画から）" : "Latest, high quality (from still)" }}
            </p>
          </div>
          <div class="border-border rounded border p-3">
            <code class="text-primary text-xs">bytedance/latentsync</code>
            <p class="text-muted-foreground mt-1 text-xs">
              {{ locale === "ja" ? "安定（動画から）" : "Stable (from video)" }}
            </p>
          </div>
          <div class="border-border rounded border p-3">
            <code class="text-primary text-xs">tmappdev/lipsync</code>
            <p class="text-muted-foreground mt-1 text-xs">
              {{ locale === "ja" ? "レガシー（動画から）" : "Legacy (from video)" }}
            </p>
          </div>
        </div>
      </section>

      <!-- Transitions -->
      <section id="transitions" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "トランジション（17種類）" : "Transitions (17 types)" }}
        </h2>

        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">
              {{ locale === "ja" ? "これは何？" : "What is this?" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{
                locale === "ja"
                  ? "シーンが変わるときの画面切り替え効果です。フェード、スライド、ワイプなど17種類から選べます。"
                  : "Screen transition effects when scenes change. Choose from 17 types including fade, slide, and wipe."
              }}
            </p>
          </CardContent>
        </Card>

        <div
          class="mb-4 rounded border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200"
        >
          <strong>{{ locale === "ja" ? "注意：" : "Note:" }}</strong>
          {{
            locale === "ja"
              ? "トランジションは各beatの「開始時」に発生します。最初のbeat（beat[0]）にはトランジションを指定できません。"
              : "Transitions occur at the 'start' of each beat. You cannot set a transition on the first beat (beat[0])."
          }}
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "全17種類一覧" : "All 17 Types" }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "カテゴリ" : "Category" }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "タイプ名" : "Type Name" }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "説明" : "Description" }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-border border px-3 py-2">Fade</td>
                <td class="border-border border px-3 py-2"><code class="text-primary">fade</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "フェードアウト→フェードイン" : "Fade out then fade in" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2" rowspan="4">Slide Out</td>
                <td class="border-border border px-3 py-2"><code class="text-primary">slideout_left</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "左にスライドアウト" : "Slide out left" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">slideout_right</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "右にスライドアウト" : "Slide out right" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">slideout_up</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "上にスライドアウト" : "Slide out up" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">slideout_down</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "下にスライドアウト" : "Slide out down" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2" rowspan="4">Slide In</td>
                <td class="border-border border px-3 py-2"><code class="text-primary">slidein_left</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "左からスライドイン" : "Slide in from left" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">slidein_right</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "右からスライドイン" : "Slide in from right" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">slidein_up</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "上からスライドイン" : "Slide in from top" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">slidein_down</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "下からスライドイン" : "Slide in from bottom" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2" rowspan="8">Wipe</td>
                <td class="border-border border px-3 py-2"><code class="text-primary">wipeleft</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "左方向へワイプ" : "Wipe to left" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">wiperight</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "右方向へワイプ" : "Wipe to right" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">wipeup</code></td>
                <td class="border-border border px-3 py-2">{{ locale === "ja" ? "上方向へワイプ" : "Wipe up" }}</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">wipedown</code></td>
                <td class="border-border border px-3 py-2">{{ locale === "ja" ? "下方向へワイプ" : "Wipe down" }}</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">wipetl</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "左上から右下へ" : "Top-left to bottom-right" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">wipetr</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "右上から左下へ" : "Top-right to bottom-left" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">wipebl</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "左下から右上へ" : "Bottom-left to top-right" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">wipebr</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "右下から左上へ" : "Bottom-right to top-left" }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "パラメータ" : "Parameters" }}
        </h3>
        <div class="grid gap-3 md:grid-cols-2">
          <div class="border-border rounded border p-3">
            <code class="text-primary text-sm">type</code>
            <p class="text-muted-foreground mt-1 text-xs">
              {{ locale === "ja" ? "必須：上記のタイプ名" : "Required: Type name from above" }}
            </p>
          </div>
          <div class="border-border rounded border p-3">
            <code class="text-primary text-sm">duration</code>
            <p class="text-muted-foreground mt-1 text-xs">
              {{
                locale === "ja"
                  ? "任意：効果の長さ（秒）。デフォルト0.3、最大2"
                  : "Optional: Effect duration (sec). Default 0.3, max 2"
              }}
            </p>
          </div>
        </div>

        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "設定方法" : "How to Set Up" }}
        </h3>
        <div class="bg-muted overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>// {{ locale === "ja" ? "全シーンに適用" : "Apply to all scenes" }}
{
  "movieParams": {
    "transition": { "type": "fade", "duration": 0.5 }
  }
}

// {{ locale === "ja" ? "特定のシーンだけ" : "Apply to specific scene" }}
{
  "beats": [
    {
      "text": "...",
      "transition": { "type": "wipe-right", "duration": 1.0 }
    }
  ]
}</code></pre>
        </div>
      </section>

      <!-- Filters -->
      <section id="filters" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "ビデオフィルター（36種類）" : "Video Filters (36 types)" }}
        </h2>

        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">
              {{ locale === "ja" ? "これは何？" : "What is this?" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{
                locale === "ja"
                  ? "動画全体にかける映像効果です。レトロ風、ホラー風など、動画の雰囲気を変えられます。"
                  : "Visual effects applied to the entire video. Change the atmosphere to retro, horror, etc."
              }}
            </p>
          </CardContent>
        </Card>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "よく使うフィルター" : "Commonly Used Filters" }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "フィルター" : "Filter" }}
                </th>
                <th class="border-border border px-4 py-2 text-left">
                  {{ locale === "ja" ? "効果" : "Effect" }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-border border px-4 py-2"><code class="text-primary">sepia</code></td>
                <td class="border-border border px-4 py-2">
                  {{ locale === "ja" ? "セピア調（レトロ風）" : "Sepia tone (retro)" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-4 py-2"><code class="text-primary">mono</code></td>
                <td class="border-border border px-4 py-2">{{ locale === "ja" ? "モノクロ" : "Monochrome" }}</td>
              </tr>
              <tr>
                <td class="border-border border px-4 py-2"><code class="text-primary">vignette</code></td>
                <td class="border-border border px-4 py-2">
                  {{ locale === "ja" ? "周辺減光（映画風）" : "Vignette (cinematic)" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-4 py-2"><code class="text-primary">glitch</code></td>
                <td class="border-border border px-4 py-2">
                  {{ locale === "ja" ? "グリッチ（ノイズ）" : "Glitch effect" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-4 py-2"><code class="text-primary">grain</code></td>
                <td class="border-border border px-4 py-2">{{ locale === "ja" ? "フィルム粒子" : "Film grain" }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "設定方法" : "How to Set Up" }}
        </h3>
        <div class="bg-muted overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>// {{ locale === "ja" ? "単一フィルター" : "Single filter" }}
{
  "movieParams": { "filter": "sepia" }
}

// {{ locale === "ja" ? "複数フィルターを重ねる" : "Stack multiple filters" }}
{
  "movieParams": { "filter": ["sepia", "vignette", "grain"] }
}</code></pre>
        </div>
      </section>

      <!-- Captions -->
      <section id="captions" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "字幕" : "Captions" }}
        </h2>

        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">
              {{ locale === "ja" ? "これは何？" : "What is this?" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{
                locale === "ja"
                  ? "動画の下部に話している内容をテキストで表示します。音声をオフにしても内容がわかります。"
                  : "Display spoken content as text at the bottom of the video. Viewers can understand even with audio off."
              }}
            </p>
          </CardContent>
        </Card>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "設定方法" : "How to Set Up" }}
        </h3>
        <div class="bg-muted overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "captionParams": {
    "lang": "{{ locale === "ja" ? "ja" : "en" }}",  // {{ locale === "ja" ? "字幕の言語" : "Caption language" }}
    "captionSplit": "estimate",  // {{ locale === "ja" ? "自動で区切る" : "Auto split" }}
    "styles": [
      "font-size: 24px",
      "color: white",
      "text-shadow: 2px 2px 4px black"
    ]
  }
}</code></pre>
        </div>

        <div class="mt-4 grid gap-3 md:grid-cols-2">
          <div class="border-border rounded border p-3">
            <code class="text-primary text-xs">captionSplit: "none"</code>
            <p class="text-muted-foreground mt-1 text-xs">
              {{ locale === "ja" ? "全文を一度に表示" : "Show full text at once" }}
            </p>
          </div>
          <div class="border-border rounded border p-3">
            <code class="text-primary text-xs">captionSplit: "estimate"</code>
            <p class="text-muted-foreground mt-1 text-xs">
              {{ locale === "ja" ? "音声に合わせて自動分割" : "Auto split with audio timing" }}
            </p>
          </div>
        </div>
      </section>

      <!-- BGM -->
      <section id="bgm" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">BGM</h2>

        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">
              {{ locale === "ja" ? "これは何？" : "What is this?" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{
                locale === "ja"
                  ? "動画の背景に音楽を流します。ナレーションの邪魔にならないよう、自動で音量を調整できます。"
                  : "Play background music in your video. Volume can be automatically adjusted to not interfere with narration."
              }}
            </p>
          </CardContent>
        </Card>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "設定方法" : "How to Set Up" }}
        </h3>
        <div class="bg-muted overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "bgm": "./background-music.mp3",  // {{ locale === "ja" ? "音楽ファイル" : "Music file" }}
  "bgmVolume": 0.3,  // {{ locale === "ja" ? "BGMの音量（0〜1）" : "BGM volume (0-1)" }}
  "audioVolume": 1.0  // {{ locale === "ja" ? "ナレーションの音量" : "Narration volume" }}
}</code></pre>
        </div>
      </section>

      <!-- Audio Timing -->
      <section id="audio-timing" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "オーディオタイミング制御" : "Audio Timing Control" }}
        </h2>

        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">
              {{ locale === "ja" ? "これは何？" : "What is this?" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{
                locale === "ja"
                  ? "各beatの前後に無音の「間」を追加して、自然なリズムを作ります。プレゼンテーションやナレーションで効果的です。"
                  : "Add silent 'pauses' before and after each beat to create a natural rhythm. Effective for presentations and narrations."
              }}
            </p>
          </CardContent>
        </Card>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "パディングオプション" : "Padding Options" }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "オプション" : "Option" }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "説明" : "Description" }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "適用範囲" : "Scope" }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">introPadding</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "動画の最初に追加する無音" : "Silence at the beginning of video" }}
                </td>
                <td class="border-border border px-3 py-2">{{ locale === "ja" ? "グローバル" : "Global" }}</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">padding</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "各beatの後に追加する無音" : "Silence after each beat" }}
                </td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "グローバル / beat" : "Global / beat" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">closingPadding</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "最後のbeatの後に追加する無音" : "Silence after the last beat" }}
                </td>
                <td class="border-border border px-3 py-2">{{ locale === "ja" ? "グローバル" : "Global" }}</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">outroPadding</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "動画の最後に追加する無音" : "Silence at the end of video" }}
                </td>
                <td class="border-border border px-3 py-2">{{ locale === "ja" ? "グローバル" : "Global" }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "設定方法" : "How to Set Up" }}
        </h3>
        <div class="bg-muted overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>// {{ locale === "ja" ? "グローバル設定" : "Global settings" }}
{
  "audioParams": {
    "introPadding": 1.0,     // {{ locale === "ja" ? "開始前に1秒" : "1 sec before start" }}
    "padding": 0.5,          // {{ locale === "ja" ? "各beatの後0.5秒" : "0.5 sec after each beat" }}
    "closingPadding": 1.0,   // {{ locale === "ja" ? "最終beatの後1秒" : "1 sec after last beat" }}
    "outroPadding": 2.0      // {{ locale === "ja" ? "動画の最後に2秒" : "2 sec at video end" }}
  }
}

// {{ locale === "ja" ? "beat単位で上書き" : "Override per beat" }}
{
  "beats": [
    {
      "text": "{{ locale === "ja" ? "重要なポイント" : "Important point" }}",
      "audioParams": { "padding": 2.0 }  // {{ locale === "ja" ? "この後だけ2秒の間" : "2 sec pause after this" }}
    }
  ]
}</code></pre>
        </div>
      </section>

      <!-- suppressSpeech Mode -->
      <section id="suppress-speech" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "音声なしモード（suppressSpeech）" : "No Speech Mode (suppressSpeech)" }}
        </h2>

        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">
              {{ locale === "ja" ? "これは何？" : "What is this?" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{
                locale === "ja"
                  ? "TTSによる音声読み上げを無効にし、BGMだけの動画を作ります。字幕付きのミュージックビデオなどに使用します。"
                  : "Disable TTS voice narration and create videos with only BGM. Useful for music videos with subtitles."
              }}
            </p>
          </CardContent>
        </Card>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "設定方法" : "How to Set Up" }}
        </h3>
        <div class="bg-muted overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "audioParams": {
    "suppressSpeech": true  // {{ locale === "ja" ? "音声読み上げを無効化" : "Disable voice narration" }}
  },
  "bgm": "./music.mp3",
  "captionParams": {
    "lang": "{{ locale === "ja" ? "ja" : "en" }}"  // {{ locale === "ja" ? "字幕で歌詞を表示" : "Show lyrics as captions" }}
  },
  "beats": [
    {
      "text": "{{ locale === "ja" ? "歌詞テキスト（字幕用）" : "Lyrics text (for captions)" }}",
      "duration": 5,  // {{ locale === "ja" ? "音声がないのでdurationが必須" : "Duration required without audio" }}
      "imagePrompt": "..."
    }
  ]
}</code></pre>
        </div>

        <div
          class="mt-4 rounded border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200"
        >
          <strong>{{ locale === "ja" ? "注意：" : "Note:" }}</strong>
          {{
            locale === "ja"
              ? "suppressSpeechモードでは音声でタイミングが決まらないため、各beatにdurationを指定するか、動画素材の長さを使用する必要があります。"
              : "In suppressSpeech mode, since timing isn't determined by audio, you need to specify duration for each beat or use video material length."
          }}
        </div>
      </section>

      <!-- Spillover -->
      <section id="spillover" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "オーディオスピルオーバー" : "Audio Spillover" }}
        </h2>

        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">
              {{ locale === "ja" ? "これは何？" : "What is this?" }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{
                locale === "ja"
                  ? "1つの長い音声を、複数のシーンにまたがって再生する機能です。歌詞に合わせて画像を切り替えるミュージックビデオ風の動画が作れます。"
                  : "Play one long audio across multiple scenes. Create music video-style content where images change with lyrics."
              }}
            </p>
          </CardContent>
        </Card>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "仕組み" : "How it Works" }}
        </h3>
        <div class="border-border mb-4 rounded-lg border p-4">
          <ol class="text-muted-foreground space-y-2 text-sm">
            <li class="flex items-start gap-2">
              <span
                class="bg-primary/10 text-primary flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs"
                >1</span
              >
              <span>{{
                locale === "ja"
                  ? "最初のBeatにtextを設定（音声はここで生成）"
                  : "Set text on first beat (audio generated here)"
              }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span
                class="bg-primary/10 text-primary flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs"
                >2</span
              >
              <span>{{
                locale === "ja"
                  ? "続くBeatにはtextを設定しない（音声が継続再生）"
                  : "Don't set text on following beats (audio continues)"
              }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span
                class="bg-primary/10 text-primary flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs"
                >3</span
              >
              <span>{{
                locale === "ja" ? "各Beatのdurationで表示時間を調整" : "Adjust display time with duration on each beat"
              }}</span>
            </li>
          </ol>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "例：ミュージックビデオ風" : "Example: Music Video Style" }}
        </h3>
        <div class="bg-muted overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "beats": [
    {
      "speaker": "Singer",
      "text": "{{ locale === "ja" ? "長い歌詞をここに書く..." : "Write long lyrics here..." }}",
      "imagePrompt": "{{ locale === "ja" ? "シーン1の画像" : "Scene 1 image" }}"
    },
    {
      "duration": 3,  // {{ locale === "ja" ? "3秒間表示（音声は継続）" : "Show for 3 seconds (audio continues)" }}
      "imagePrompt": "{{ locale === "ja" ? "シーン2の画像" : "Scene 2 image" }}"
    },
    {
      "duration": 3,
      "imagePrompt": "{{ locale === "ja" ? "シーン3の画像" : "Scene 3 image" }}"
    },
    {
      // {{ locale === "ja" ? "duration省略 → 残り時間を全部使う" : "No duration → uses remaining time" }}
      "imagePrompt": "{{ locale === "ja" ? "シーン4の画像" : "Scene 4 image" }}"
    }
  ]
}</code></pre>
        </div>
      </section>

      <!-- More Features -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "他の機能" : "More Features" }}
        </h2>

        <div class="space-y-3">
          <Card>
            <CardContent class="pt-6">
              <h3 class="text-foreground mb-2 font-medium">
                {{ locale === "ja" ? "サウンドエフェクト" : "Sound Effects" }}
              </h3>
              <p class="text-muted-foreground mb-2 text-sm">
                {{ locale === "ja" ? "AIが効果音を自動生成します。" : "AI automatically generates sound effects." }}
              </p>
              <div class="bg-muted rounded p-2">
                <code class="text-xs"
                  >"soundEffectPrompt": "{{ locale === "ja" ? "ドアが開く音" : "Door opening sound" }}"</code
                >
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent class="pt-6">
              <h3 class="text-foreground mb-2 font-medium">
                {{ locale === "ja" ? "ボイスオーバー" : "Voice Over" }}
              </h3>
              <p class="text-muted-foreground mb-2 text-sm">
                {{ locale === "ja" ? "既存の動画にナレーションを追加します。" : "Add narration to existing video." }}
              </p>
              <div class="bg-muted rounded p-2">
                <code class="text-xs">"image": { "type": "voice_over" }</code>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent class="pt-6">
              <h3 class="text-foreground mb-2 font-medium">
                {{ locale === "ja" ? "動画速度変更" : "Video Speed" }}
              </h3>
              <p class="text-muted-foreground mb-2 text-sm">
                {{ locale === "ja" ? "動画をスロー再生や早送りにします。" : "Slow down or speed up video." }}
              </p>
              <div class="bg-muted rounded p-2">
                <code class="text-xs"
                  >"movieParams": { "speed": 0.5 } // {{ locale === "ja" ? "0.5〜2.0" : "0.5-2.0" }}</code
                >
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <!-- Navigation -->
      <div class="border-border flex items-center justify-between border-t pt-6">
        <a
          :href="localizedUrl('/docs/cli/providers')"
          class="text-muted-foreground hover:text-primary inline-flex items-center text-sm"
        >
          <ChevronLeft class="mr-1 h-4 w-4" />
          {{ locale === "ja" ? "プロバイダー設定" : "Provider Settings" }}
        </a>
        <a
          :href="localizedUrl('/docs/cli')"
          class="text-muted-foreground hover:text-primary inline-flex items-center text-sm"
        >
          {{ locale === "ja" ? "CLI概要に戻る" : "Back to CLI Overview" }}
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
  CheckCircle,
  Smile,
  Layers,
  Palette,
  Subtitles,
  Music,
  AudioLines,
} from "lucide-vue-next";

const { locale } = useI18n();
const localizedUrl = useLocalizedUrl();
</script>
