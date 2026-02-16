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
                {{ $t("docs.cli.advanced.fillOption.navTitle") }}
              </p>
              <p class="text-muted-foreground text-xs">
                {{ $t("docs.cli.advanced.fillOption.navDescription") }}
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
          {{ $t("docs.cli.advanced.lipsync.modelComparison") }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-3 py-2 text-left">
                  {{ $t("docs.cli.advanced.lipsync.model") }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ $t("docs.cli.advanced.lipsync.inputType") }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ $t("docs.cli.advanced.lipsync.features") }}
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
                    {{ $t("docs.cli.advanced.lipsync.omniHuman.input") }}
                  </span>
                </td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.lipsync.omniHuman.description") }}
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
                    {{ $t("docs.cli.advanced.lipsync.latentSync.input") }}
                  </span>
                </td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.lipsync.latentSync.description") }}
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
                    {{ $t("docs.cli.advanced.lipsync.tmappdev.input") }}
                  </span>
                </td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.lipsync.tmappdev.description") }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ $t("docs.cli.advanced.lipsync.completeConfig") }}
        </h3>
        <div class="bg-muted overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "$mulmocast": { "version": "1.1" },
  "title": "{{ $t("docs.cli.advanced.lipsync.configTitle") }}",
  "lipSyncParams": {
    "provider": "replicate",
    "model": "bytedance/omni-human"
  },
  "beats": [
    {
      "speaker": "Character",
      "text": "{{ $t("docs.cli.advanced.lipsync.configText") }}",
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
          <strong>{{ $t("docs.cli.advanced.lipsync.imageTipsLabel") }}</strong>
          {{ $t("docs.cli.advanced.lipsync.imageTips") }}
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
          {{ $t("docs.cli.advanced.filters.title") }}
        </h2>

        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">
              {{ $t("docs.cli.advanced.filters.whatIsThis") }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{ $t("docs.cli.advanced.filters.description") }}
            </p>
          </CardContent>
        </Card>

        <!-- 色調整フィルター -->
        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ $t("docs.cli.advanced.filters.color.title") }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-3 py-2 text-left">
                  {{ $t("docs.cli.advanced.filters.filter") }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ $t("docs.cli.advanced.filters.effect") }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ $t("docs.cli.advanced.filters.keyParameters") }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">mono</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.color.mono") }}
                </td>
                <td class="border-border border px-3 py-2">-</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">sepia</code></td>
                <td class="border-border border px-3 py-2">{{ $t("docs.cli.advanced.filters.color.sepia") }}</td>
                <td class="border-border border px-3 py-2">-</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">brightness_contrast</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.color.brightnessContrast") }}
                </td>
                <td class="border-border border px-3 py-2">brightness: -1~1, contrast: 0~3</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">hue</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.color.hue") }}
                </td>
                <td class="border-border border px-3 py-2">hue: -180~180, saturation: 0~3</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">colorbalance</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.color.colorbalance") }}
                </td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.color.colorbalanceParam") }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">vibrance</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.color.vibrance") }}
                </td>
                <td class="border-border border px-3 py-2">intensity: -2~2</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">negate</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.color.negate") }}
                </td>
                <td class="border-border border px-3 py-2">-</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">colorhold</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.color.colorhold") }}
                </td>
                <td class="border-border border px-3 py-2">-</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">colorkey</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.color.colorkey") }}
                </td>
                <td class="border-border border px-3 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- ブラー・シャープフィルター -->
        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ $t("docs.cli.advanced.filters.blur.title") }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-3 py-2 text-left">
                  {{ $t("docs.cli.advanced.filters.filter") }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ $t("docs.cli.advanced.filters.effect") }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ $t("docs.cli.advanced.filters.keyParameters") }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">blur</code></td>
                <td class="border-border border px-3 py-2">{{ $t("docs.cli.advanced.filters.blur.blur") }}</td>
                <td class="border-border border px-3 py-2">radius: 1-50, power: 1-10</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">gblur</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.blur.gblur") }}
                </td>
                <td class="border-border border px-3 py-2">sigma: 0-100</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">avgblur</code></td>
                <td class="border-border border px-3 py-2">{{ $t("docs.cli.advanced.filters.blur.avgblur") }}</td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.blur.avgblurParam") }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">unsharp</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.blur.unsharp") }}
                </td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.blur.unsharpParam") }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- エッジ検出フィルター -->
        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ $t("docs.cli.advanced.filters.edge.title") }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-3 py-2 text-left">
                  {{ $t("docs.cli.advanced.filters.filter") }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ $t("docs.cli.advanced.filters.effect") }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ $t("docs.cli.advanced.filters.keyParameters") }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">edgedetect</code></td>
                <td class="border-border border px-3 py-2">{{ $t("docs.cli.advanced.filters.edge.edgedetect") }}</td>
                <td class="border-border border px-3 py-2">mode: wires / colormix / canny</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">sobel</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.edge.sobel") }}
                </td>
                <td class="border-border border px-3 py-2">-</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">emboss</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.edge.emboss") }}
                </td>
                <td class="border-border border px-3 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 変形フィルター -->
        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ $t("docs.cli.advanced.filters.transform.title") }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-3 py-2 text-left">
                  {{ $t("docs.cli.advanced.filters.filter") }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ $t("docs.cli.advanced.filters.effect") }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ $t("docs.cli.advanced.filters.keyParameters") }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">hflip</code></td>
                <td class="border-border border px-3 py-2">{{ $t("docs.cli.advanced.filters.transform.hflip") }}</td>
                <td class="border-border border px-3 py-2">-</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">vflip</code></td>
                <td class="border-border border px-3 py-2">{{ $t("docs.cli.advanced.filters.transform.vflip") }}</td>
                <td class="border-border border px-3 py-2">-</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">rotate</code></td>
                <td class="border-border border px-3 py-2">{{ $t("docs.cli.advanced.filters.transform.rotate") }}</td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.transform.rotateParam") }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">transpose</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.transform.transpose") }}
                </td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.transform.transposeParam") }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 視覚効果フィルター -->
        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ $t("docs.cli.advanced.filters.visual.title") }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-3 py-2 text-left">
                  {{ $t("docs.cli.advanced.filters.filter") }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ $t("docs.cli.advanced.filters.effect") }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ $t("docs.cli.advanced.filters.keyParameters") }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">vignette</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.visual.vignette") }}
                </td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.visual.vignetteParam") }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">fade</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.visual.fade") }}
                </td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.visual.fadeParam") }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">pixelize</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.visual.pixelize") }}
                </td>
                <td class="border-border border px-3 py-2">width, height</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">pseudocolor</code></td>
                <td class="border-border border px-3 py-2">{{ $t("docs.cli.advanced.filters.visual.pseudocolor") }}</td>
                <td class="border-border border px-3 py-2">magma, inferno, plasma, viridis</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 時間効果・閾値・特殊フィルター -->
        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ $t("docs.cli.advanced.filters.temporal.title") }}
        </h3>
        <div class="overflow-x-auto">
          <table class="border-border w-full border-collapse border text-sm">
            <thead>
              <tr class="bg-muted">
                <th class="border-border border px-3 py-2 text-left">
                  {{ $t("docs.cli.advanced.filters.category") }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ $t("docs.cli.advanced.filters.filter") }}
                </th>
                <th class="border-border border px-3 py-2 text-left">
                  {{ $t("docs.cli.advanced.filters.effect") }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-border border px-3 py-2" rowspan="2">
                  {{ $t("docs.cli.advanced.filters.temporal.temporalCategory") }}
                </td>
                <td class="border-border border px-3 py-2"><code class="text-primary">tmix</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.temporal.tmix") }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">lagfun</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.temporal.lagfun") }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2" rowspan="2">
                  {{ $t("docs.cli.advanced.filters.temporal.thresholdCategory") }}
                </td>
                <td class="border-border border px-3 py-2"><code class="text-primary">threshold</code></td>
                <td class="border-border border px-3 py-2">{{ $t("docs.cli.advanced.filters.temporal.threshold") }}</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">elbg</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.temporal.elbg") }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2" rowspan="7">
                  {{ $t("docs.cli.advanced.filters.temporal.specialCategory") }}
                </td>
                <td class="border-border border px-3 py-2"><code class="text-primary">glitch</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.temporal.glitch") }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">grain</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.temporal.grain") }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">lensdistortion</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.temporal.lensdistortion") }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">chromashift</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.temporal.chromashift") }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">deflicker</code></td>
                <td class="border-border border px-3 py-2">{{ $t("docs.cli.advanced.filters.temporal.deflicker") }}</td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">dctdnoiz</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.temporal.dctdnoiz") }}
                </td>
              </tr>
              <tr>
                <td class="border-border border px-3 py-2"><code class="text-primary">custom</code></td>
                <td class="border-border border px-3 py-2">
                  {{ $t("docs.cli.advanced.filters.temporal.custom") }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- フィルター設定方法 -->
        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ $t("docs.cli.advanced.filters.setup") }}
        </h3>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>// {{ $t("docs.cli.advanced.filters.singleFilter") }}
{
  "movieParams": {
    "filters": [{ "type": "sepia" }]
  }
}

// {{ $t("docs.cli.advanced.filters.filterWithParams") }}
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
          {{ $t("docs.cli.advanced.filters.filterChain") }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{ $t("docs.cli.advanced.filters.filterChainDescription") }}
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
          {{ $t("docs.cli.advanced.filters.customFilter") }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{ $t("docs.cli.advanced.filters.customFilterDescription") }}
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
              {{ $t("docs.cli.advanced.filters.globalConfig") }}
            </p>
            <p class="text-muted-foreground mt-1 text-xs">
              {{ $t("docs.cli.advanced.filters.globalConfigDescription") }}
            </p>
          </div>
          <div class="border-border rounded border p-3">
            <p class="text-foreground text-sm font-medium">
              {{ $t("docs.cli.advanced.filters.perBeatConfig") }}
            </p>
            <p class="text-muted-foreground mt-1 text-xs">
              {{ $t("docs.cli.advanced.filters.perBeatConfigDescription") }}
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
          {{ $t("docs.cli.advanced.captions.basicSetup") }}
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

        <!-- 2つの分割概念 -->
        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ $t("docs.cli.advanced.captions.twoConcepts") }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{ $t("docs.cli.advanced.captions.twoConceptsDescription") }}
        </p>

        <div class="mb-4 grid gap-3 md:grid-cols-2">
          <Card>
            <CardContent class="pt-6">
              <p class="text-foreground text-sm font-medium">captionSplit</p>
              <p class="text-muted-foreground mt-1 text-xs">
                {{
                  locale === "ja" ? "いつ・どのくらい表示するか（タイミング）" : "When and how long to display (timing)"
                }}
              </p>
              <div class="mt-2 space-y-1">
                <div class="flex items-center gap-2">
                  <code class="text-primary text-xs">"none"</code>
                  <span class="text-muted-foreground text-xs">{{ $t("docs.cli.advanced.captions.noneMode") }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <code class="text-primary text-xs">"estimate"</code>
                  <span class="text-muted-foreground text-xs">{{ $t("docs.cli.advanced.captions.estimateMode") }}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent class="pt-6">
              <p class="text-foreground text-sm font-medium">textSplit</p>
              <p class="text-muted-foreground mt-1 text-xs">
                {{ locale === "ja" ? "何を表示するか（分割方法）" : "What to display (splitting method)" }}
              </p>
              <div class="mt-2 space-y-1">
                <div class="flex items-center gap-2">
                  <code class="text-primary text-xs">{ "type": "none" }</code>
                  <span class="text-muted-foreground text-xs">{{
                    $t("docs.cli.advanced.captions.textSplitNone")
                  }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <code class="text-primary text-xs">{ "type": "delimiters" }</code>
                  <span class="text-muted-foreground text-xs">{{
                    $t("docs.cli.advanced.captions.textSplitDelimiters")
                  }}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <!-- 自動分割の例 -->
        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ $t("docs.cli.advanced.captions.autoSplitExample") }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{ $t("docs.cli.advanced.captions.autoSplitExampleDescription") }}
        </p>
        <div class="bg-muted mb-2 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "captionParams": {
    "lang": "{{ locale === "ja" ? "ja" : "en" }}",
    "captionSplit": "estimate",
    "textSplit": {
      "type": "delimiters"
    }
  },
  "beats": [
    {
      "text": "{{ locale === "ja" ? "まずは基本の自動分割を確認します。これは長めの文章です。句点で分割されます。" : "First we confirm basic auto-splitting. This is a longer passage. It is split at sentence endings." }}"
    }
  ]
}</code></pre>
        </div>
        <p class="text-muted-foreground mb-4 text-xs">
          {{ $t("docs.cli.advanced.captions.defaultDelimiters") }}:
          <code class="text-primary">。 ？ ！ . ? !</code>
        </p>

        <!-- 手動分割 -->
        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ $t("docs.cli.advanced.captions.manualSplitTitle") }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{ $t("docs.cli.advanced.captions.manualSplitDescription") }}
        </p>
        <div class="bg-muted mb-2 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "captionParams": {
    "captionSplit": "estimate"
  },
  "beats": [
    {
      "text": "{{ locale === "ja" ? "手動分割が優先されます。区切り文字が存在しても自動分割は適用されません。" : "Manual splits take precedence. Even if delimiters exist, automatic splitting is not applied." }}",
      "texts": [
        "{{ locale === "ja" ? "手動分割が優先されます。区切り文字が存在しても、" : "Manual splits take precedence. Even if delimiters exist," }}",
        "{{ locale === "ja" ? "自動分割は適用されません。" : "automatic splitting is not applied." }}"
      ]
    }
  ]
}</code></pre>
        </div>
        <div
          class="mb-4 rounded border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200"
        >
          <strong>{{ locale === "ja" ? "注意：" : "Note:" }}</strong>
          {{ $t("docs.cli.advanced.captions.manualSplitNote") }}
        </div>

        <!-- カスタム区切り文字 -->
        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ $t("docs.cli.advanced.captions.customDelimitersTitle") }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{ $t("docs.cli.advanced.captions.customDelimitersDescription") }}
        </p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "captionParams": {
    "captionSplit": "estimate",
    "textSplit": {
      "type": "delimiters"
    }
  },
  "beats": [
    {
      "text": "{{ locale === "ja" ? "通常のbeat。デフォルトの句読点で分割されます。" : "Normal beat. Split by default punctuation." }}"
    },
    {
      "text": "{{ locale === "ja" ? "カスタム区切り文字の動作を確認します | このように分割 — さらにこのように | 完了です。" : "We verify custom delimiters | split like this — and also like this | done." }}",
      "captionParams": {
        "captionSplit": "estimate",
        "textSplit": {
          "type": "delimiters",
          "delimiters": ["|", "—"]
        }
      }
    }
  ]
}</code></pre>
        </div>

        <!-- beat単位で分割をオフ -->
        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ $t("docs.cli.advanced.captions.perBeatSplitOffTitle") }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{ $t("docs.cli.advanced.captions.perBeatSplitOffDescription") }}
        </p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "captionParams": {
    "captionSplit": "estimate",
    "textSplit": {
      "type": "delimiters"
    }
  },
  "beats": [
    {
      "text": "{{ locale === "ja" ? "このbeatは自動分割されます。句点で分割されます。" : "This beat is auto-split. It splits at sentence endings." }}"
    },
    {
      "text": "{{ locale === "ja" ? "分割なしの動作を確認します。句読点があっても一つのキャプションとして表示されます。" : "We confirm the no-split behavior. Even with punctuation, it is displayed as a single caption." }}",
      "captionParams": {
        "captionSplit": "none",
        "textSplit": { "type": "none" }
      }
    }
  ]
}</code></pre>
        </div>
        <p class="text-muted-foreground mb-4 text-xs">
          {{ $t("docs.cli.advanced.captions.perBeatSplitOffExplanation") }}
        </p>

        <!-- スタイルカスタマイズ -->
        <h3 class="text-foreground mt-6 mb-3 text-lg font-medium">
          {{ $t("docs.cli.advanced.captions.styleCustomization") }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{ $t("docs.cli.advanced.captions.styleCustomizationDescription") }}
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

        <!-- beat単位でのスタイル上書き -->
        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ $t("docs.cli.advanced.captions.perBeatOverride") }}
        </h3>
        <p class="text-muted-foreground mb-3 text-sm">
          {{ $t("docs.cli.advanced.captions.perBeatOverrideDescription") }}
        </p>
        <div class="bg-muted overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>{
  "captionParams": {
    "lang": "{{ locale === "ja" ? "ja" : "en" }}",
    "styles": ["font-size: 24px", "color: white"]
  },
  "beats": [
    {
      "text": "{{ $t("docs.cli.advanced.captions.normalText") }}"
    },
    {
      "text": "{{ $t("docs.cli.advanced.captions.emphasizedText") }}",
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
          {{ $t("docs.cli.advanced.fillOption.title") }}
        </h2>

        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">
              {{ $t("docs.cli.advanced.fillOption.whatIsThis") }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{ $t("docs.cli.advanced.fillOption.description") }}
            </p>
          </CardContent>
        </Card>

        <div class="mb-4 grid gap-3 md:grid-cols-2">
          <Card>
            <CardContent class="pt-6">
              <code class="text-primary text-sm">aspectFit</code>
              <span class="text-muted-foreground ml-2 text-xs"
                >({{ $t("docs.cli.advanced.fillOption.aspectFitDefault") }})</span
              >
              <p class="text-muted-foreground mt-2 text-sm">
                {{ $t("docs.cli.advanced.fillOption.aspectFitDescription") }}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent class="pt-6">
              <code class="text-primary text-sm">aspectFill</code>
              <p class="text-muted-foreground mt-2 text-sm">
                {{ $t("docs.cli.advanced.fillOption.aspectFillDescription") }}
              </p>
            </CardContent>
          </Card>
        </div>

        <h3 class="text-foreground mb-3 text-lg font-medium">
          {{ $t("docs.cli.advanced.fillOption.setup") }}
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
