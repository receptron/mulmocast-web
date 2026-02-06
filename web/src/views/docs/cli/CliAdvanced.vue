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
          <a
            href="#fill-option"
            class="border-border hover:border-primary group flex items-center gap-3 rounded-lg border p-3 transition-colors"
          >
            <Maximize class="text-primary h-6 w-6" />
            <div>
              <p class="text-foreground group-hover:text-primary text-sm font-medium">
                {{ locale === "ja" ? "フィルオプション" : "Fill Option" }}
              </p>
              <p class="text-muted-foreground text-xs">
                {{ locale === "ja" ? "アスペクト比の調整" : "Aspect ratio adjustment" }}
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
          {{ locale === "ja" ? "モデル比較" : "Model Comparison" }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "モデル" : "Model" }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "入力形式" : "Input Type" }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "特徴" : "Features" }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-border border px-3 py-2">
                  <code class="text-primary text-xs">bytedance/omni-human</code>
                </td>
                <td class="border-border border px-3 py-2">
                  <span
                    class="rounded bg-green-100 px-1.5 py-0.5 text-xs text-green-800 dark:bg-green-900 dark:text-green-200"
                  >
                    {{ locale === "ja" ? "静止画" : "Still image" }}
                  </span>
                </td>
                <td class="border-border border px-3 py-2">
                  {{
                    locale === "ja"
                      ? "推奨。最新・高品質。静止画1枚から自然な口パク動画を生成"
                      : "Recommended. Latest, high quality. Generates natural lip-sync from a single still image"
                  }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2">
                  <code class="text-primary text-xs">bytedance/latentsync</code>
                </td>
                <td class="border-border border px-3 py-2">
                  <span
                    class="rounded bg-blue-100 px-1.5 py-0.5 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {{ locale === "ja" ? "動画" : "Video" }}
                  </span>
                </td>
                <td class="border-border border px-3 py-2">
                  {{
                    locale === "ja"
                      ? "安定した品質。既存の動画の口の動きを音声に合わせて変更"
                      : "Stable quality. Modifies mouth movement in existing video to match audio"
                  }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2">
                  <code class="text-primary text-xs">tmappdev/lipsync</code>
                </td>
                <td class="border-border border px-3 py-2">
                  <span
                    class="rounded bg-blue-100 px-1.5 py-0.5 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {{ locale === "ja" ? "動画" : "Video" }}
                  </span>
                </td>
                <td class="border-border border px-3 py-2">
                  {{
                    locale === "ja"
                      ? "レガシーモデル。互換性のために維持"
                      : "Legacy model. Maintained for compatibility"
                  }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "完全な設定例" : "Complete Configuration Example" }}
        </h3>
        <div class="bg-muted overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "$mulmocast": { "version": "1.1" },
  "title": "{{ locale === "ja" ? "リップシンクデモ" : "Lip Sync Demo" }}",
  "lipSyncParams": {
    "provider": "replicate",
    "model": "bytedance/omni-human"
  },
  "beats": [
    {
      "speaker": "Character",
      "text": "{{ locale === "ja" ? "こんにちは、リップシンクのデモです" : "Hello, this is a lip sync demo" }}",
      "enableLipSync": true,
      "image": {
        "type": "image",
        "source": {
          "kind": "path",
          "path": "character.png"
        }
      }
    }
  ]
}</code></pre>
        </div>

        <div
          class="mt-4 rounded border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200"
        >
          <strong>{{ locale === "ja" ? "入力画像のコツ：" : "Image Tips:" }}</strong>
          {{
            locale === "ja"
              ? "正面を向いた顔が明確に映っている画像を使うと、最も良い結果が得られます。横顔や小さく映った顔では品質が下がることがあります。"
              : "Use images with a clear, front-facing face for best results. Side profiles or small faces may reduce quality."
          }}
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
                  ? "各beatの映像に視覚効果を適用する機能です。FFmpegのフィルター機能をJSON設定で簡単に利用できます。beat単位で異なるフィルターを適用でき、複数のフィルターをチェーン（連結）して使用することも可能です。"
                  : "Apply visual effects to each beat's video. Easily use FFmpeg's powerful filter capabilities through JSON configuration. Different filters can be applied per beat, and multiple filters can be chained together."
              }}
            </p>
          </CardContent>
        </Card>

        <!-- 色調整フィルター -->
        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "色調整フィルター（9種類）" : "Color Adjustment Filters (9 types)" }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "フィルター" : "Filter" }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "効果" : "Effect" }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "主なパラメータ" : "Key Parameters" }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">mono</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "モノクロ（グレースケール）" : "Monochrome (grayscale)" }}
                </td>
                <td class="border-border border px-3 py-2">-</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">sepia</code></td>
                <td class="border-border border px-3 py-2">{{ locale === "ja" ? "セピア調" : "Sepia tone" }}</td>
                <td class="border-border border px-3 py-2">-</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">brightness_contrast</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "明度・コントラスト調整" : "Brightness & contrast" }}
                </td>
                <td class="border-border border px-3 py-2">brightness: -1~1, contrast: 0~3</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">hue</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "色相・彩度・明度調整" : "Hue, saturation & brightness" }}
                </td>
                <td class="border-border border px-3 py-2">hue: -180~180, saturation: 0~3</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">colorbalance</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "RGB各チャンネルの微調整" : "Fine-tune RGB channels" }}
                </td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "シャドウ/ミッドトーン/ハイライト別" : "Per shadow/midtone/highlight" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">vibrance</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "彩度の強調" : "Enhance saturation" }}
                </td>
                <td class="border-border border px-3 py-2">intensity: -2~2</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">negate</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "色反転（ネガポジ）" : "Color inversion (negative)" }}
                </td>
                <td class="border-border border px-3 py-2">-</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">colorhold</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "特定の色だけ残し他を脱色" : "Keep specific color, desaturate rest" }}
                </td>
                <td class="border-border border px-3 py-2">-</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">colorkey</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "特定の色を透明化（クロマキー）" : "Chroma key (transparency)" }}
                </td>
                <td class="border-border border px-3 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- ブラー・シャープフィルター -->
        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "ブラー・シャープフィルター（4種類）" : "Blur & Sharpen Filters (4 types)" }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "フィルター" : "Filter" }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "効果" : "Effect" }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "主なパラメータ" : "Key Parameters" }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">blur</code></td>
                <td class="border-border border px-3 py-2">{{ locale === "ja" ? "ボックスブラー" : "Box blur" }}</td>
                <td class="border-border border px-3 py-2">radius: 1-50, power: 1-10</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">gblur</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "ガウシアンブラー" : "Gaussian blur" }}
                </td>
                <td class="border-border border px-3 py-2">sigma: 0-100</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">avgblur</code></td>
                <td class="border-border border px-3 py-2">{{ locale === "ja" ? "平均ブラー" : "Average blur" }}</td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "X/Yサイズ個別指定" : "X/Y size individual control" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">unsharp</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "アンシャープマスク" : "Unsharp mask" }}
                </td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "輝度・色差個別制御" : "Luma/chroma individual control" }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- エッジ検出フィルター -->
        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "エッジ検出フィルター（3種類）" : "Edge Detection Filters (3 types)" }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "フィルター" : "Filter" }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "効果" : "Effect" }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "主なパラメータ" : "Key Parameters" }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">edgedetect</code></td>
                <td class="border-border border px-3 py-2">{{ locale === "ja" ? "エッジ検出" : "Edge detection" }}</td>
                <td class="border-border border px-3 py-2">mode: wires / colormix / canny</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">sobel</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "Sobelエッジ検出" : "Sobel edge detection" }}
                </td>
                <td class="border-border border px-3 py-2">-</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">emboss</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "エンボス（3D浮き彫り）" : "Emboss (3D relief)" }}
                </td>
                <td class="border-border border px-3 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 変形フィルター -->
        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "変形フィルター（4種類）" : "Transform Filters (4 types)" }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "フィルター" : "Filter" }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "効果" : "Effect" }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "主なパラメータ" : "Key Parameters" }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">hflip</code></td>
                <td class="border-border border px-3 py-2">{{ locale === "ja" ? "左右反転" : "Horizontal flip" }}</td>
                <td class="border-border border px-3 py-2">-</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">vflip</code></td>
                <td class="border-border border px-3 py-2">{{ locale === "ja" ? "上下反転" : "Vertical flip" }}</td>
                <td class="border-border border px-3 py-2">-</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">rotate</code></td>
                <td class="border-border border px-3 py-2">{{ locale === "ja" ? "回転" : "Rotate" }}</td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "角度（ラジアン）、塗りつぶし色" : "Angle (radians), fill color" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">transpose</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "90度回転" : "90-degree rotation" }}
                </td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "反転オプション付き" : "With flip options" }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 視覚効果フィルター -->
        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "視覚効果フィルター（4種類）" : "Visual Effect Filters (4 types)" }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "フィルター" : "Filter" }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "効果" : "Effect" }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "主なパラメータ" : "Key Parameters" }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">vignette</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "周辺減光（映画風）" : "Vignette (cinematic)" }}
                </td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "角度、中心位置、モード" : "Angle, center, mode" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">fade</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "フェードイン/アウト" : "Fade in/out" }}
                </td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "フレーム単位で制御" : "Frame-level control" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">pixelize</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "ピクセル化（モザイク）" : "Pixelize (mosaic)" }}
                </td>
                <td class="border-border border px-3 py-2">width, height</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">pseudocolor</code></td>
                <td class="border-border border px-3 py-2">{{ locale === "ja" ? "疑似カラー" : "Pseudo color" }}</td>
                <td class="border-border border px-3 py-2">magma, inferno, plasma, viridis</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 時間効果・閾値・特殊フィルター -->
        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{
            locale === "ja"
              ? "時間効果・閾値・特殊フィルター（12種類）"
              : "Temporal, Threshold & Special Filters (12 types)"
          }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "カテゴリ" : "Category" }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "フィルター" : "Filter" }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ locale === "ja" ? "効果" : "Effect" }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-border border px-3 py-2" rowspan="2">
                  {{ locale === "ja" ? "時間効果" : "Temporal" }}
                </td>
                <td class="border-border border px-3 py-2"><code class="text-primary">tmix</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "時間軸ミックス（モーションブラー）" : "Temporal mix (motion blur)" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">lagfun</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "ラグエフェクト（モーショントレイル）" : "Lag effect (motion trail)" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2" rowspan="2">{{ locale === "ja" ? "閾値" : "Threshold" }}</td>
                <td class="border-border border px-3 py-2"><code class="text-primary">threshold</code></td>
                <td class="border-border border px-3 py-2">{{ locale === "ja" ? "二値化" : "Binarization" }}</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">elbg</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "色数削減（ポスタライズ）" : "Color reduction (posterize)" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2" rowspan="7">{{ locale === "ja" ? "特殊" : "Special" }}</td>
                <td class="border-border border px-3 py-2"><code class="text-primary">glitch</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "デジタルグリッチ" : "Digital glitch" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">grain</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "フィルムグレイン" : "Film grain" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">lensdistortion</code></td>
                <td class="border-border border px-3 py-2">{{ locale === "ja" ? "レンズ歪み" : "Lens distortion" }}</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">chromashift</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "色ずれ（色収差）" : "Chroma shift (chromatic aberration)" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">deflicker</code></td>
                <td class="border-border border px-3 py-2">{{ locale === "ja" ? "フリッカー除去" : "Deflicker" }}</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">dctdnoiz</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "DCTノイズ除去" : "DCT noise reduction" }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">custom</code></td>
                <td class="border-border border px-3 py-2">
                  {{ locale === "ja" ? "生のFFmpegフィルター文字列を直接指定" : "Raw FFmpeg filter string" }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- フィルター設定方法 -->
        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "設定方法" : "How to Set Up" }}
        </h3>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>// {{ locale === "ja" ? "単一フィルター" : "Single filter" }}
{
  "movieParams": {
    "filters": [{ "type": "sepia" }]
  }
}

// {{ locale === "ja" ? "パラメータ付きフィルター" : "Filter with parameters" }}
{
  "movieParams": {
    "filters": [{
      "type": "hue",
      "hue": 120,
      "saturation": 1.5
    }]
  }
}</code></pre>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "フィルターチェーン（複数連結）" : "Filter Chain (multiple)" }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{
            locale === "ja"
              ? "複数のフィルターを配列で指定すると、順番に効果が適用されます。例：ヴィンテージ風の組み合わせ"
              : "Specify multiple filters in an array to apply effects in order. Example: vintage combination"
          }}
        </p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "movieParams": {
    "filters": [
      { "type": "sepia" },
      { "type": "grain", "intensity": 25 },
      { "type": "vignette" }
    ]
  }
}</code></pre>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "カスタムフィルター" : "Custom Filter" }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{
            locale === "ja"
              ? "プリセットにない効果が必要な場合、FFmpegのフィルター文字列を直接指定できます。"
              : "For effects not available as presets, you can specify raw FFmpeg filter strings directly."
          }}
        </p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "movieParams": {
    "filters": [{
      "type": "custom",
      "filter": "hflip,negate"
    }]
  }
}</code></pre>
        </div>

        <div class="grid gap-3 md:grid-cols-2">
          <div class="border-border rounded border p-3">
            <p class="text-foreground text-sm font-medium">
              {{ locale === "ja" ? "グローバル設定" : "Global config" }}
            </p>
            <p class="text-muted-foreground mt-1 text-xs">
              {{
                locale === "ja"
                  ? "movieParams.filters をトップレベルに設定 → 全beatに適用"
                  : "Set movieParams.filters at top level → applies to all beats"
              }}
            </p>
          </div>
          <div class="border-border rounded border p-3">
            <p class="text-foreground text-sm font-medium">
              {{ locale === "ja" ? "beat単位の設定" : "Per-beat config" }}
            </p>
            <p class="text-muted-foreground mt-1 text-xs">
              {{
                locale === "ja"
                  ? "各beatの movieParams.filters に設定 → そのbeatのみ適用"
                  : "Set in each beat's movieParams.filters → applies to that beat only"
              }}
            </p>
          </div>
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
          {{ locale === "ja" ? "基本設定" : "Basic Setup" }}
        </h3>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "captionParams": {
    "lang": "{{ locale === "ja" ? "ja" : "en" }}",
    "captionSplit": "estimate",
    "styles": [
      "font-size: 24px",
      "color: white",
      "text-shadow: 2px 2px 4px black"
    ]
  }
}</code></pre>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          captionSplit {{ locale === "ja" ? "モード" : "Modes" }}
        </h3>
        <div class="grid gap-3 md:grid-cols-2">
          <Card>
            <CardContent class="pt-6">
              <code class="text-primary text-sm">captionSplit: "none"</code>
              <p class="text-muted-foreground mt-2 text-sm">
                {{
                  locale === "ja"
                    ? "全文を一度に表示します。短いテキストや、タイミング制御が不要な場合に使用します。"
                    : "Shows the full text at once. Use for short text or when timing control is not needed."
                }}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent class="pt-6">
              <code class="text-primary text-sm">captionSplit: "estimate"</code>
              <p class="text-muted-foreground mt-2 text-sm">
                {{
                  locale === "ja"
                    ? "音声のタイミングに合わせてテキストを自動的に分割・表示します。長いナレーションに最適です。"
                    : "Automatically splits and displays text in sync with audio timing. Best for long narrations."
                }}
              </p>
            </CardContent>
          </Card>
        </div>

        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ locale === "ja" ? "スタイルカスタマイズ" : "Style Customization" }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{
            locale === "ja"
              ? "stylesにCSS文字列の配列を指定して、字幕の見た目をカスタマイズできます。"
              : "Customize caption appearance by specifying an array of CSS strings in styles."
          }}
        </p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "captionParams": {
    "lang": "{{ locale === "ja" ? "ja" : "en" }}",
    "captionSplit": "estimate",
    "styles": [
      "font-size: 48px",
      "color: white",
      "text-shadow: 2px 2px 4px black",
      "font-weight: bold",
      "background: rgba(0, 0, 0, 0.5)",
      "padding: 8px 16px",
      "border-radius: 4px"
    ]
  }
}</code></pre>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "beat単位での上書き" : "Per-Beat Override" }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{
            locale === "ja"
              ? "特定のbeatだけ字幕スタイルを変更できます。グローバル設定をbeat単位で上書きします。"
              : "Override caption styles for specific beats. Per-beat settings take precedence over global settings."
          }}
        </p>
        <div class="bg-muted overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "captionParams": {
    "lang": "{{ locale === "ja" ? "ja" : "en" }}",
    "styles": ["font-size: 24px", "color: white"]
  },
  "beats": [
    {
      "text": "{{ locale === "ja" ? "通常のテキスト" : "Normal text" }}"
    },
    {
      "text": "{{ locale === "ja" ? "強調テキスト" : "Emphasized text" }}",
      "captionParams": {
        "styles": ["font-size: 64px", "color: yellow", "font-weight: bold"]
      }
    }
  ]
}</code></pre>
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

      <!-- Fill Option -->
      <section id="fill-option" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-semibold">
          {{ locale === "ja" ? "フィルオプション（アスペクト比調整）" : "Fill Option (Aspect Ratio)" }}
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
                  ? "画像・動画とキャンバスのアスペクト比が異なる場合の表示方法を制御します。例えば、正方形の画像を16:9の動画に配置するときの振る舞いを変更できます。"
                  : "Controls how images/videos are displayed when their aspect ratio doesn't match the canvas. For example, change how a square image is placed in a 16:9 video."
              }}
            </p>
          </CardContent>
        </Card>

        <div class="mb-4 grid gap-3 md:grid-cols-2">
          <Card>
            <CardContent class="pt-6">
              <code class="text-primary text-sm">aspectFit</code>
              <span class="text-muted-foreground ml-2 text-xs">({{ locale === "ja" ? "デフォルト" : "default" }})</span>
              <p class="text-muted-foreground mt-2 text-sm">
                {{
                  locale === "ja"
                    ? "画像全体を表示します。アスペクト比が合わない場合は余白（黒帯）が表示されます。"
                    : "Shows the entire image. Letterbox/pillarbox bars appear when aspect ratios don't match."
                }}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent class="pt-6">
              <code class="text-primary text-sm">aspectFill</code>
              <p class="text-muted-foreground mt-2 text-sm">
                {{
                  locale === "ja"
                    ? "画面全体を埋めます。はみ出した部分はトリミングされます。フルスクリーン表示に最適です。"
                    : "Fills the entire screen. Overflowing parts are cropped. Best for fullscreen display."
                }}
              </p>
            </CardContent>
          </Card>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ locale === "ja" ? "設定方法" : "How to Set Up" }}
        </h3>
        <div class="bg-muted overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "movieParams": {
    "fillOption": {
      "style": "aspectFill"
    }
  }
}</code></pre>
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
                {{
                  locale === "ja"
                    ? "動画の内容に合わせて、AIが効果音を自動生成します。"
                    : "AI automatically generates sound effects matching your video content."
                }}
              </p>

              <div
                class="mb-3 rounded border border-amber-200 bg-amber-50 p-3 text-sm dark:border-amber-900 dark:bg-amber-950"
              >
                <p class="text-amber-800 dark:text-amber-200">
                  <strong>{{ locale === "ja" ? "必要条件：" : "Requirements:" }}</strong>
                </p>
                <ul class="text-muted-foreground mt-1 space-y-1 text-xs">
                  <li>
                    • <code class="text-primary">REPLICATE_API_TOKEN</code>
                    {{ locale === "ja" ? "環境変数が必要" : "environment variable required" }}
                  </li>
                  <li>
                    •
                    {{
                      locale === "ja"
                        ? "動画（moviePromptまたはmovie type）が必須 - 動画を元に効果音を生成"
                        : "Video (moviePrompt or movie type) required - generates sound effects based on video"
                    }}
                  </li>
                </ul>
              </div>

              <h4 class="text-foreground mb-2 text-sm font-medium">
                {{ locale === "ja" ? "完全な設定例" : "Complete Configuration Example" }}
              </h4>
              <div class="bg-muted overflow-x-auto rounded p-3">
                <pre class="text-xs"><code>{
  "$mulmocast": { "version": "1.1" },
  "title": "{{ locale === "ja" ? "サウンドエフェクトデモ" : "Sound Effect Demo" }}",
  "soundEffectParams": {
    "provider": "replicate",
    "model": "zsxkib/mmaudio"
  },
  "beats": [
    {
      "text": "{{ locale === "ja" ? "ロケットが発射します" : "A rocket launches into space" }}",
      "soundEffectPrompt": "{{ locale === "ja" ? "ロケット発射音、炎と爆発" : "rocket launch sound with fire and explosion" }}",
      "moviePrompt": "{{ locale === "ja" ? "発射台からロケットが打ち上がる" : "A rocket launching from a launch pad" }}"
    },
    {
      "text": "{{ locale === "ja" ? "雷が落ちます" : "Lightning strikes" }}",
      "soundEffectPrompt": "{{ locale === "ja" ? "激しい雷鳴と稲妻の音" : "intense thunder and lightning sound" }}",
      "moviePrompt": "{{ locale === "ja" ? "夜空に稲妻が走る" : "Lightning striking across the night sky" }}"
    }
  ]
}</code></pre>
              </div>

              <div class="mt-3 grid gap-2 md:grid-cols-2">
                <div class="border-border rounded border p-2">
                  <code class="text-primary text-xs">soundEffectParams</code>
                  <p class="text-muted-foreground mt-1 text-xs">
                    {{
                      locale === "ja"
                        ? "グローバル設定（provider: replicate, model: zsxkib/mmaudio）"
                        : "Global config (provider: replicate, model: zsxkib/mmaudio)"
                    }}
                  </p>
                </div>
                <div class="border-border rounded border p-2">
                  <code class="text-primary text-xs">soundEffectPrompt</code>
                  <p class="text-muted-foreground mt-1 text-xs">
                    {{ locale === "ja" ? "beat単位で効果音の説明を指定" : "Describe the sound effect per beat" }}
                  </p>
                </div>
              </div>

              <p class="text-muted-foreground mt-3 text-xs">
                {{
                  locale === "ja"
                    ? "効果音はmmaudioモデルが動画を解析して生成します。soundEffectPromptの説明と動画内容を組み合わせて最適な効果音を作成します。"
                    : "The mmaudio model analyzes your video to generate sound effects. It combines the soundEffectPrompt description with video content to create optimal effects."
                }}
              </p>
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
  Maximize,
} from "lucide-vue-next";

const { locale } = useI18n();
const localizedUrl = useLocalizedUrl();
</script>
