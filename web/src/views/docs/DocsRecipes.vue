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
        <h1 class="text-foreground text-3xl font-bold">
          {{ locale === "ja" ? "MulmoScript レシピ集" : "MulmoScript Recipe Book" }}
        </h1>
        <p class="text-muted-foreground mt-2 text-lg">
          {{
            locale === "ja"
              ? "「〜したいとき」から逆引きで、MulmoScriptの書き方を調べられるリファレンスです"
              : "A reverse-lookup reference: find MulmoScript patterns by what you want to achieve"
          }}
        </p>
        <div class="mt-3 flex gap-2">
          <Badge variant="secondary">MulmoScript</Badge>
          <Badge variant="outline">{{ locale === "ja" ? "逆引きリファレンス" : "Recipe Book" }}</Badge>
        </div>
      </div>

      <!-- Category Index -->
      <Card class="mb-8">
        <CardHeader>
          <CardTitle class="text-base">{{ locale === "ja" ? "カテゴリ一覧" : "Categories" }}</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div v-for="cat in categories" :key="cat.id">
              <h3 class="text-foreground mb-1 text-sm font-semibold">{{ cat.icon }} {{ cat.title }}</h3>
              <nav class="ml-6 space-y-0.5">
                <a
                  v-for="recipe in cat.recipes"
                  :key="recipe.id"
                  :href="'#' + recipe.id"
                  class="text-muted-foreground hover:text-primary block text-sm"
                >
                  {{ recipe.label }}
                </a>
              </nav>
            </div>
          </div>
        </CardContent>
      </Card>

      <!-- Recipe Sections -->
      <div v-for="cat in categories" :key="cat.id" class="mb-12">
        <h2 class="text-foreground mb-6 border-b pb-2 text-2xl font-bold">{{ cat.icon }} {{ cat.title }}</h2>

        <div v-for="recipe in cat.recipes" :key="recipe.id" :id="recipe.id" class="mb-10 scroll-mt-16">
          <h3 class="text-foreground mb-2 text-xl font-semibold">{{ recipe.label }}</h3>
          <p class="text-muted-foreground mb-4 text-sm">{{ recipe.description }}</p>
          <div class="bg-muted overflow-x-auto rounded-lg p-4">
            <pre class="text-sm leading-relaxed"><code>{{ recipe.json }}</code></pre>
          </div>
          <div v-if="recipe.notes" class="text-muted-foreground mt-3 space-y-1 text-sm">
            <p v-for="(note, i) in recipe.notes" :key="i">{{ note }}</p>
          </div>
        </div>
      </div>

      <!-- Back Button -->
      <div class="mt-12 text-center">
        <Button as="a" :href="localizedUrl('/docs')" variant="outline">
          {{ t("docs.backButton") }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import Navigation from "../../components/Navigation.vue";
import { useLocalizedUrl } from "../../i18n/utils";
import { ChevronLeft } from "lucide-vue-next";

const { t, locale } = useI18n();
const localizedUrl = useLocalizedUrl();

interface Recipe {
  id: string;
  label: string;
  description: string;
  json: string;
  notes?: string[];
}

interface Category {
  id: string;
  icon: string;
  title: string;
  recipes: Recipe[];
}

const categories = computed<Category[]>(() => {
  const ja = locale.value === "ja";
  return [
    basicCategory(ja),
    slideTypeCategory(ja),
    markdownCategory(ja),
    imageCategory(ja),
    audioCategory(ja),
    movieCategory(ja),
    captionCategory(ja),
    animationCategory(ja),
    advancedCategory(ja),
  ];
});

function basicCategory(ja: boolean): Category {
  return {
    id: "basics",
    icon: "📝",
    title: ja ? "基本構成" : "Basics",
    recipes: [
      {
        id: "minimum",
        label: ja ? "最小限のスクリプトを作りたい" : "Create a minimal script",
        description: ja
          ? "MulmoScriptの最小構成。テキストスライド1枚だけのシンプルな例です。"
          : "The simplest valid MulmoScript with a single text slide.",
        json: `{
  "$mulmocast": { "version": "1.1" },
  "lang": "ja",
  "beats": [
    {
      "text": "こんにちは、世界",
      "image": {
        "type": "textSlide",
        "slide": {
          "title": "Hello World",
          "bullets": ["ポイント1", "ポイント2"]
        }
      }
    }
  ]
}`,
        notes: [
          ja ? '※ "text" がTTSで読み上げられるナレーションです' : '※ "text" is the narration read by TTS',
          ja ? '※ "bullets" は箇条書きで表示されます' : '※ "bullets" are displayed as bullet points',
        ],
      },
      {
        id: "multi-speaker",
        label: ja ? "複数の話者で会話させたい" : "Use multiple speakers in a conversation",
        description: ja
          ? "speakersに話者を定義し、各beatでspeakerを指定します。"
          : "Define speakers in speechParams and assign a speaker per beat.",
        json: `{
  "$mulmocast": { "version": "1.1" },
  "lang": "ja",
  "speechParams": {
    "speakers": {
      "Host": { "voiceId": "shimmer" },
      "Guest": { "voiceId": "echo" }
    }
  },
  "beats": [
    {
      "speaker": "Host",
      "text": "今日のゲストを紹介します。",
      "image": { "type": "textSlide", "slide": { "title": "番組開始" } }
    },
    {
      "speaker": "Guest",
      "text": "よろしくお願いします！",
      "image": { "type": "textSlide", "slide": { "title": "ゲスト登場" } }
    }
  ]
}`,
      },
      {
        id: "canvas-portrait",
        label: ja ? "縦型動画（9:16）を作りたい" : "Create portrait (9:16) video",
        description: ja
          ? "canvasSizeでキャンバスサイズを指定します。デフォルトは1280x720（横型）。"
          : "Specify canvas dimensions with canvasSize. Default is 1280x720 (landscape).",
        json: `{
  "$mulmocast": { "version": "1.1" },
  "lang": "ja",
  "canvasSize": { "width": 720, "height": 1280 },
  "beats": [
    {
      "text": "縦型動画のサンプルです。",
      "image": { "type": "textSlide", "slide": { "title": "縦型動画" } }
    }
  ]
}`,
        notes: [ja ? "※ SNS向けのショート動画に最適" : "※ Ideal for short-form social media videos"],
      },
      {
        id: "credit",
        label: ja ? "エンディングにクレジットを自動生成したい" : "Auto-generate closing credits",
        description: ja
          ? '$mulmocast.credit を "closing" にすると、最後にクレジットスライドが自動追加されます。'
          : 'Set $mulmocast.credit to "closing" to auto-append a credit slide at the end.',
        json: `{
  "$mulmocast": { "version": "1.1", "credit": "closing" },
  "lang": "ja",
  "beats": [
    {
      "text": "発表は以上です。",
      "image": { "type": "textSlide", "slide": { "title": "まとめ" } }
    }
  ]
}`,
      },
    ],
  };
}

function slideTypeCategory(ja: boolean): Category {
  return {
    id: "slide-types",
    icon: "🖼️",
    title: ja ? "スライド表現" : "Slide Types",
    recipes: [
      {
        id: "text-slide",
        label: ja ? "タイトル＋箇条書きのスライドを作りたい" : "Create a title + bullets slide",
        description: ja
          ? "textSlide は最も基本的なスライド形式です。title, subtitle, bullets を指定できます。"
          : "textSlide is the most basic slide type. Supports title, subtitle, and bullets.",
        json: `"image": {
  "type": "textSlide",
  "slide": {
    "title": "プロジェクト概要",
    "subtitle": "2025年Q1レポート",
    "bullets": ["売上30%増", "新規顧客200件", "満足度4.8/5.0"]
  }
}`,
      },
      {
        id: "text-slide-style",
        label: ja ? "テキストスライドにスタイルを適用したい" : "Apply a style theme to text slides",
        description: ja ? "image.styleで名前付きテーマを指定できます。" : "Use image.style to apply a named theme.",
        json: `"image": {
  "type": "textSlide",
  "style": "corporate-blue",
  "slide": {
    "title": "ビジネスプラン",
    "subtitle": "戦略概要",
    "bullets": ["市場分析", "競合優位性", "収益モデル"]
  }
}`,
        notes: [
          ja
            ? "※ 使用可能なスタイル例: corporate-blue, cyber-neon, zen-garden 等"
            : "※ Available styles: corporate-blue, cyber-neon, zen-garden, etc.",
        ],
      },
      {
        id: "mermaid",
        label: ja ? "Mermaid図を表示したい" : "Display a Mermaid diagram",
        description: ja
          ? "フローチャート、シーケンス図、ER図などをMermaid記法で描けます。"
          : "Draw flowcharts, sequence diagrams, ER diagrams using Mermaid syntax.",
        json: `"image": {
  "type": "mermaid",
  "title": "システム構成",
  "code": {
    "kind": "text",
    "text": "graph LR\\n    Client --> Gateway\\n    Gateway --> Service\\n    Service --> Database[(DB)]"
  }
}`,
      },
      {
        id: "chart",
        label: ja ? "グラフ（棒グラフ・円グラフ）を表示したい" : "Display charts (bar, pie, etc.)",
        description: ja
          ? "Chart.js形式のchartDataを指定してグラフを生成します。"
          : "Generate charts using Chart.js chartData format.",
        json: `"image": {
  "type": "chart",
  "chartData": {
    "type": "bar",
    "data": {
      "labels": ["Q1", "Q2", "Q3", "Q4"],
      "datasets": [{
        "label": "売上（万円）",
        "data": [100, 120, 150, 180]
      }]
    }
  }
}`,
      },
      {
        id: "html-tailwind",
        label: ja ? "HTML+Tailwindで自由にデザインしたい" : "Design freely with HTML + Tailwind",
        description: ja
          ? "html_tailwindタイプでHTML+TailwindCSSを使って自由なレイアウトが可能です。"
          : "Use html_tailwind type for full creative control with HTML and Tailwind CSS.",
        json: `"image": {
  "type": "html_tailwind",
  "html": [
    "<main class='bg-gradient-to-br from-blue-900 to-purple-900 min-h-screen flex items-center justify-center'>",
    "  <div class='text-center'>",
    "    <h1 class='text-6xl font-bold text-white mb-4'>MulmoCast</h1>",
    "    <p class='text-xl text-blue-200'>AI Presentation Platform</p>",
    "  </div>",
    "</main>"
  ]
}`,
      },
    ],
  };
}

function markdownCategory(ja: boolean): Category {
  return {
    id: "markdown",
    icon: "📄",
    title: ja ? "Markdownの応用" : "Markdown Advanced",
    recipes: [
      {
        id: "markdown-basic",
        label: ja ? "Markdownでスライドを書きたい" : "Write slides in Markdown",
        description: ja
          ? "markdown タイプで、見出し・箇条書き・コードブロック・テーブルなどを使えます。"
          : "Use the markdown type for headings, bullets, code blocks, tables, etc.",
        json: `"image": {
  "type": "markdown",
  "markdown": "# 見出し\\n\\n- ポイント1\\n- ポイント2\\n\\n\`\`\`typescript\\nconst x = 1;\\n\`\`\`"
}`,
      },
      {
        id: "markdown-style",
        label: ja ? "Markdownにスタイルテーマを適用したい" : "Apply style themes to Markdown",
        description: ja
          ? "100種類の名前付きスタイルから選べます。ビジネス・テック・日本風など多彩なカテゴリ。"
          : "Choose from 100 named styles across categories like business, tech, Japanese, etc.",
        json: `"image": {
  "type": "markdown",
  "style": "sakura-pink",
  "markdown": "# 桜の季節\\n\\n春の訪れとともに、新しいプロジェクトが始まります。"
}`,
        notes: [
          ja
            ? "■ ビジネス: corporate-blue, executive-gray, finance-green"
            : "■ Business: corporate-blue, executive-gray, finance-green",
          ja
            ? "■ テック: cyber-neon, terminal-dark, matrix-green, ai-blue"
            : "■ Tech: cyber-neon, terminal-dark, matrix-green, ai-blue",
          ja
            ? "■ 日本風: washi-paper, sumi-ink, sakura-pink, matcha-green"
            : "■ Japanese: washi-paper, sumi-ink, sakura-pink, matcha-green",
          ja ? "■ ミニマル: clean-white, zen-beige, nordic-light" : "■ Minimal: clean-white, zen-beige, nordic-light",
          ja ? "※ 全100種類。各カテゴリ10種類ずつ" : "※ 100 styles total, 10 per category",
        ],
      },
      {
        id: "markdown-layout-row2",
        label: ja ? "2カラムレイアウトにしたい" : "Use a 2-column layout",
        description: ja
          ? 'markdownをオブジェクト形式にして "row-2" キーで2カラムに分割します。'
          : 'Use object format with "row-2" key to split into 2 columns.',
        json: `"image": {
  "type": "markdown",
  "markdown": {
    "row-2": [
      "# 左カラム\\n\\n- ポイント1\\n- ポイント2",
      "# 右カラム\\n\\n\`\`\`typescript\\nconst x = 1;\\n\`\`\`"
    ]
  }
}`,
      },
      {
        id: "markdown-layout-2x2",
        label: ja ? "4分割（2x2グリッド）レイアウトにしたい" : "Use a 2x2 grid layout",
        description: ja ? '"2x2" キーで4つのゾーンに分割します。' : 'Use "2x2" key to split into 4 zones.',
        json: `"image": {
  "type": "markdown",
  "markdown": {
    "2x2": [
      "## Q1\\n売上: 100万",
      "## Q2\\n売上: 120万",
      "## Q3\\n売上: 150万",
      "## Q4\\n売上: 180万"
    ]
  }
}`,
      },
      {
        id: "markdown-layout-full",
        label: ja
          ? "ヘッダー＋サイドバー＋コンテンツの複合レイアウトにしたい"
          : "Use header + sidebar + content layout",
        description: ja
          ? "header, sidebar-left, row-2/2x2/content を組み合わせたフルレイアウト。"
          : "Combine header, sidebar-left, and row-2/2x2/content for a full layout.",
        json: `"image": {
  "type": "markdown",
  "markdown": {
    "header": "# GraphAI入門",
    "sidebar-left": "**目次**\\n\\n1. 概要\\n2. 特徴\\n3. 使い方",
    "row-2": [
      "## 概要\\n\\nGraphAIはワークフローエンジンです。",
      "## コード例\\n\\n\`\`\`typescript\\nconst graph = new GraphAI({});\\n\`\`\`"
    ]
  }
}`,
      },
      {
        id: "markdown-mermaid-embed",
        label: ja ? "Markdown内にMermaid図を埋め込みたい" : "Embed Mermaid diagrams in Markdown",
        description: ja
          ? "markdownレイアウト内でfenced code blockを使ってMermaidを埋め込めます。"
          : "Use fenced code blocks within markdown layout to embed Mermaid diagrams.",
        json: `"image": {
  "type": "markdown",
  "markdown": {
    "row-2": [
      "# システム構成\\n\\n\`\`\`mermaid\\ngraph TD\\n    A[ユーザー] --> B[API]\\n    B --> C[DB]\\n\`\`\`",
      "# 説明\\n\\n- APIはHonoで構築\\n- DBはCloudflare D1"
    ]
  }
}`,
      },
      {
        id: "background-image",
        label: ja ? "スライドに背景画像を重ねたい" : "Overlay a background image on slides",
        description: ja
          ? "backgroundImageで透過度付きの背景画像を重ねられます。textSlide, markdown, mermaidに対応。"
          : "Use backgroundImage for transparent background overlays. Works with textSlide, markdown, mermaid.",
        json: `"image": {
  "type": "textSlide",
  "slide": { "title": "会社紹介", "subtitle": "Our Vision" },
  "backgroundImage": {
    "source": { "kind": "url", "url": "https://example.com/logo.png" },
    "opacity": 0.3,
    "size": "cover"
  }
}`,
        notes: [
          ja
            ? '※ size: "cover"（全面）, "contain"（収まる）, "fill"（引き伸ばし）'
            : '※ size: "cover" (fill area), "contain" (fit inside), "fill" (stretch)',
        ],
      },
    ],
  };
}

function imageCategory(ja: boolean): Category {
  return {
    id: "image-gen",
    icon: "🎨",
    title: ja ? "画像生成" : "Image Generation",
    recipes: [
      {
        id: "ai-image",
        label: ja ? "AIで画像を生成したい" : "Generate images with AI",
        description: ja
          ? "imagePromptにテキストを書くだけでAIが画像を生成します。"
          : "Write a text prompt in imagePrompt and AI generates the image.",
        json: `{
  "$mulmocast": { "version": "1.1" },
  "lang": "ja",
  "beats": [
    {
      "text": "美しい富士山の風景です。",
      "imagePrompt": "朝焼けの富士山、湖に映る逆さ富士、桜が咲いている"
    }
  ]
}`,
      },
      {
        id: "image-provider",
        label: ja ? "画像プロバイダーやモデルを指定したい" : "Specify image provider and model",
        description: ja
          ? "imageParamsでグローバルまたはビート単位でプロバイダーとモデルを指定できます。"
          : "Use imageParams to set provider and model globally or per beat.",
        json: `"imageParams": {
  "provider": "openai",
  "model": "dall-e-3"
}

// ビート単位で上書き
{
  "text": "Geminiで生成した画像",
  "imagePrompt": "未来的な都市の風景",
  "imageParams": {
    "provider": "google",
    "model": "gemini-2.5-flash-image"
  }
}`,
        notes: [
          "■ OpenAI: dall-e-3, gpt-image-1",
          "■ Google: gemini-2.5-flash-image",
          "■ Replicate: bytedance/seedream-4",
        ],
      },
      {
        id: "image-style",
        label: ja
          ? "画像のスタイル（アニメ風、写実風など）を統一したい"
          : "Unify image style (anime, photorealistic, etc.)",
        description: ja
          ? "imageParams.styleでグローバルにスタイルを指定できます。"
          : "Set imageParams.style to apply a consistent style across all images.",
        json: `"imageParams": {
  "style": "Ghibli-style, warm lighting, soft watercolor textures"
}`,
      },
      {
        id: "image-refs",
        label: ja ? "名前付き画像（キャラクター等）を使い回したい" : "Reuse named image references (characters, etc.)",
        description: ja
          ? "imageParams.imagesで名前付き画像を定義し、beatのimageNamesで選択的に参照します。"
          : "Define named images in imageParams.images and reference them per beat with imageNames.",
        json: `"imageParams": {
  "style": "Ghibli-style",
  "images": {
    "witch": {
      "type": "imagePrompt",
      "prompt": "A witch with green hair, wearing a black robe"
    },
    "cat": {
      "type": "imagePrompt",
      "prompt": "A tiny black cat with green eyes"
    }
  }
},
"beats": [
  {
    "text": "魔女と猫の冒険が始まります。",
    "imagePrompt": "Walking through a magical forest",
    "imageNames": ["witch", "cat"]
  },
  {
    "text": "猫は一人で探検に出かけました。",
    "imagePrompt": "Exploring a mysterious cave",
    "imageNames": ["cat"]
  }
]`,
        notes: [
          ja
            ? "※ imageNamesを省略すると全参照画像が使われます。[] で参照なしにできます"
            : "※ Omit imageNames to use all refs. Use [] for no references",
        ],
      },
      {
        id: "beat-reuse",
        label: ja ? "前のビートの画像を再利用したい" : "Reuse a previous beat's image",
        description: ja
          ? 'image.type: "beat" で直前のビートの画像を再利用。idで特定のビートも指定可能。'
          : 'Use image.type: "beat" to reuse the previous beat\'s image. Specify id for a specific beat.',
        json: `"beats": [
  {
    "id": "intro",
    "text": "このスライドの内容を詳しく解説します。",
    "image": { "type": "textSlide", "slide": { "title": "導入" } }
  },
  {
    "text": "先ほどのスライドを見ながら補足します。",
    "image": { "type": "beat" }
  },
  {
    "text": "最初のスライドに戻ります。",
    "image": { "type": "beat", "id": "intro" }
  }
]`,
        notes: [
          ja
            ? '※ idなしの "beat" は直前のビートの画像を使用'
            : '※ "beat" without id uses the immediately previous beat\'s image',
        ],
      },
      {
        id: "external-image",
        label: ja ? "既存の画像ファイルやURLを使いたい" : "Use existing image files or URLs",
        description: ja
          ? "AIで生成せず、手持ちの画像やURLを直接指定できます。"
          : "Use existing images by path or URL instead of AI generation.",
        json: `// URLから
"image": {
  "type": "image",
  "source": { "kind": "url", "url": "https://example.com/photo.png" }
}

// ローカルファイルから
"image": {
  "type": "image",
  "source": { "kind": "path", "path": "./images/photo.png" }
}`,
      },
    ],
  };
}

function audioCategory(ja: boolean): Category {
  return {
    id: "audio",
    icon: "🔊",
    title: ja ? "音声・TTS" : "Audio / TTS",
    recipes: [
      {
        id: "tts-provider",
        label: ja ? "TTS音声プロバイダーや声を選びたい" : "Choose TTS provider and voice",
        description: ja
          ? "speaker定義でproviderとvoiceIdを指定します。OpenAI, Google, Gemini, ElevenLabs, Kotodamaに対応。"
          : "Set provider and voiceId per speaker. Supports OpenAI, Google, Gemini, ElevenLabs, Kotodama.",
        json: `"speechParams": {
  "speakers": {
    "Narrator": {
      "provider": "openai",
      "voiceId": "shimmer"
    },
    "Assistant": {
      "provider": "gemini",
      "voiceId": "Kore"
    }
  }
}`,
        notes: [
          "■ OpenAI: shimmer, echo, alloy, fable, onyx, nova",
          ja ? "■ Gemini: Kore, Puck, Leda 等" : "■ Gemini: Kore, Puck, Leda, etc.",
          ja ? "■ Google: en-US-Studio-O, ja-JP-Standard-A 等" : "■ Google: en-US-Studio-O, ja-JP-Standard-A, etc.",
        ],
      },
      {
        id: "speech-instruction",
        label: ja ? "話し方のスタイル（陽気、ささやき等）を指定したい" : "Set speech style (cheerful, whisper, etc.)",
        description: ja
          ? "speechOptions.instructionでスピーカーごと、またはビートごとに話し方を指示できます。"
          : "Use speechOptions.instruction per speaker or per beat to control speech style.",
        json: `// スピーカーレベルで指定
"speechParams": {
  "speakers": {
    "Cheerful": {
      "provider": "openai",
      "voiceId": "shimmer",
      "speechOptions": {
        "instruction": "Speak in a cheerful and positive tone."
      }
    }
  }
}

// ビートレベルで上書き
{
  "text": "秘密をお教えしましょう。",
  "speechOptions": {
    "instruction": "Whisper softly, like a pillow talk."
  }
}`,
      },
      {
        id: "tts-speed",
        label: ja ? "話す速度を変えたい" : "Change speech speed",
        description: ja
          ? "speechOptions.speedで速度を指定。プロバイダーにより範囲が異なります。"
          : "Set speechOptions.speed. Range varies by provider.",
        json: `{
  "text": "ゆっくり話します。",
  "speechOptions": { "speed": 0.7 }
}

{
  "text": "早口で話します。",
  "speechOptions": { "speed": 1.5 }
}`,
        notes: [
          ja ? "■ OpenAI: 0.5〜4.0" : "■ OpenAI: 0.5–4.0",
          ja ? "■ Google: 0.5〜2.0" : "■ Google: 0.5–2.0",
          ja ? "■ ElevenLabs: 0.7〜1.2" : "■ ElevenLabs: 0.7–1.2",
        ],
      },
      {
        id: "no-bgm",
        label: ja ? "BGM（バックグラウンドミュージック）を消したい" : "Disable background music",
        description: ja
          ? "audioParams.bgmVolumeを0にするとBGMが無音になります。"
          : "Set audioParams.bgmVolume to 0 to silence background music.",
        json: `"audioParams": {
  "bgmVolume": 0
}`,
      },
      {
        id: "custom-bgm",
        label: ja ? "BGMを指定したい" : "Use custom background music",
        description: ja
          ? "audioParams.bgmでURLまたはローカルパスのBGMファイルを指定できます。"
          : "Set audioParams.bgm to a URL or local path for custom BGM.",
        json: `"audioParams": {
  "bgm": {
    "kind": "url",
    "url": "https://example.com/music/background.mp3"
  },
  "bgmVolume": 0.5
}`,
      },
      {
        id: "no-audio",
        label: ja ? "音声なし（サイレント）のビートを作りたい" : "Create silent beats without audio",
        description: ja
          ? "textを省略し、durationで表示時間を明示指定します。"
          : "Omit text and set duration explicitly for the display time.",
        json: `{
  "duration": 3,
  "image": { "type": "textSlide", "slide": { "title": "静かなスライド" } }
}`,
      },
      {
        id: "suppress-speech",
        label: ja ? "全ビートの音声を一括で無効にしたい" : "Suppress speech for all beats",
        description: ja
          ? "audioParams.suppressSpeechをtrueにすると全ビートでTTSが無効になります。"
          : "Set audioParams.suppressSpeech to true to disable TTS for all beats.",
        json: `"audioParams": {
  "suppressSpeech": true
}`,
      },
      {
        id: "lang-voice-switch",
        label: ja ? "言語ごとに異なる声を使いたい" : "Switch voices by language",
        description: ja
          ? "speaker.langマップで言語ごとに異なるプロバイダー/声を割り当てます。"
          : "Use speaker.lang map to assign different provider/voice per language.",
        json: `"speechParams": {
  "speakers": {
    "Presenter": {
      "provider": "openai",
      "voiceId": "shimmer",
      "lang": {
        "ja": {
          "provider": "gemini",
          "voiceId": "Leda"
        }
      }
    }
  }
}`,
        notes: [
          ja
            ? '※ langが"ja"のスクリプトではGeminiのLeda、それ以外ではOpenAIのshimmerが使われます'
            : "※ When lang is 'ja', uses Gemini Leda; otherwise uses OpenAI shimmer",
        ],
      },
    ],
  };
}

function movieCategory(ja: boolean): Category {
  return {
    id: "movie",
    icon: "🎬",
    title: ja ? "動画・トランジション" : "Movie / Transition",
    recipes: [
      {
        id: "ai-movie",
        label: ja ? "AIで動画クリップを生成したい" : "Generate video clips with AI",
        description: ja
          ? "moviePromptで動画の内容を指示。movieParamsでプロバイダーを指定します。"
          : "Describe video content in moviePrompt. Set provider in movieParams.",
        json: `{
  "$mulmocast": { "version": "1.1" },
  "lang": "ja",
  "movieParams": { "provider": "google" },
  "beats": [
    {
      "text": "ロケットが打ち上がります。",
      "imagePrompt": "発射台のロケット、星空と火星が背景",
      "moviePrompt": "Rocket lifts off from the launch pad.",
      "duration": 5
    }
  ]
}`,
        notes: [
          "■ Google: Veo (veo-2.0-generate-001)",
          "■ Replicate: bytedance/seedance-1-lite",
          ja
            ? "※ imagePromptは静止画フォールバック用。moviePromptのみでもOK"
            : "※ imagePrompt is for static fallback. moviePrompt alone is also valid",
        ],
      },
      {
        id: "existing-movie",
        label: ja ? "既存の動画ファイルを使いたい" : "Use an existing video file",
        description: ja
          ? 'image.type: "movie" で外部動画を直接使用します。'
          : 'Use image.type: "movie" to embed an external video file.',
        json: `"image": {
  "type": "movie",
  "source": {
    "kind": "url",
    "url": "https://example.com/video.mp4"
  }
}`,
      },
      {
        id: "transition",
        label: ja ? "スライド間にトランジションを付けたい" : "Add transitions between slides",
        description: ja
          ? "movieParams.transitionでグローバル/ビート単位のトランジションを指定します。"
          : "Set movieParams.transition globally or per beat.",
        json: `// グローバル（全ビート共通）
"movieParams": {
  "transition": { "type": "fade", "duration": 1.0 }
}

// ビート単位で上書き
{
  "text": "次のスライド",
  "movieParams": {
    "transition": { "type": "slideout_left", "duration": 1.0 }
  }
}`,
        notes: [
          ja ? "■ フェード: fade" : "■ Fade: fade",
          ja
            ? "■ スライド: slideout_left/right/up/down, slidein_left/right/up/down"
            : "■ Slide: slideout_left/right/up/down, slidein_left/right/up/down",
          ja ? "■ ワイプ: wipeleft/right/up/down, wipetl/tr/bl/br" : "■ Wipe: wipeleft/right/up/down, wipetl/tr/bl/br",
        ],
      },
      {
        id: "lipsync",
        label: ja ? "リップシンク（口パク）動画を作りたい" : "Create lip-sync videos",
        description: ja
          ? "enableLipSync: true でTTS音声に合わせた口の動きを生成します。"
          : "Set enableLipSync: true to generate mouth movements synced with TTS audio.",
        json: `{
  "$mulmocast": { "version": "1.1" },
  "lang": "ja",
  "lipSyncParams": {
    "provider": "replicate",
    "model": "bytedance/latentsync"
  },
  "beats": [
    {
      "text": "AIプレゼンテーションの世界を探索しましょう。",
      "moviePrompt": "A presenter speaking confidently in a modern room",
      "enableLipSync": true
    }
  ]
}`,
        notes: [
          ja
            ? "■ モデル: bytedance/latentsync, tmappdev/lipsync, bytedance/omni-human"
            : "■ Models: bytedance/latentsync, tmappdev/lipsync, bytedance/omni-human",
          ja ? "※ ビート単位でlipSyncParams.modelを上書き可能" : "※ Can override lipSyncParams.model per beat",
        ],
      },
      {
        id: "video-filter",
        label: ja ? "動画にフィルター（セピア、モノクロ等）をかけたい" : "Apply video filters (sepia, mono, etc.)",
        description: ja
          ? "movieParams.filtersで動画にエフェクトを適用します。複数フィルターの組み合わせも可能。"
          : "Use movieParams.filters to apply effects. Multiple filters can be combined.",
        json: `// セピア
{ "movieParams": { "filters": [{ "type": "sepia" }] } }

// モノクロ
{ "movieParams": { "filters": [{ "type": "mono" }] } }

// 明るさ＋コントラスト
{ "movieParams": { "filters": [{ "type": "brightness_contrast", "brightness": 0.3, "contrast": 1.2 }] } }

// ぼかし
{ "movieParams": { "filters": [{ "type": "gblur", "sigma": 3 }] } }

// 組み合わせ
{ "movieParams": { "filters": [
  { "type": "brightness_contrast", "brightness": 0.2, "contrast": 1.1 },
  { "type": "grain", "intensity": 0.3 }
] } }`,
        notes: [
          ja ? "■ 基本: mono, sepia, negate, vflip, emboss" : "■ Basic: mono, sepia, negate, vflip, emboss",
          ja ? "■ 色調: hue, vibrance, pseudocolor, chromashift" : "■ Color: hue, vibrance, pseudocolor, chromashift",
          ja
            ? "■ 効果: blur, gblur, glitch, grain, vignette, pixelize, unsharp"
            : "■ Effects: blur, gblur, glitch, grain, vignette, pixelize, unsharp",
          ja ? "■ 検出: edgedetect, sobel" : "■ Detection: edgedetect, sobel",
          ja
            ? '■ カスタム: { "type": "custom", "expression": "hflip" } でffmpegフィルターを直接指定'
            : '■ Custom: { "type": "custom", "expression": "hflip" } for raw ffmpeg filters',
        ],
      },
      {
        id: "video-speed",
        label: ja ? "動画の再生速度を変えたい" : "Change video playback speed",
        description: ja
          ? "movieParams.speedで倍速やスロー再生を指定します。"
          : "Use movieParams.speed for fast or slow playback.",
        json: `// 2倍速
{
  "movieParams": { "speed": 2.0 },
  "image": { "type": "movie", "source": { "kind": "url", "url": "https://example.com/video.mov" } }
}

// スロー再生
{
  "movieParams": { "speed": 0.5 },
  "image": { "type": "movie", "source": { "kind": "url", "url": "https://example.com/video.mov" } }
}`,
      },
      {
        id: "movie-volume",
        label: ja ? "動画クリップの音量を調整したい" : "Adjust movie clip audio volume",
        description: ja
          ? "audioParams.movieVolumeでビート単位の動画音声の音量を制御します。"
          : "Use audioParams.movieVolume per beat to control video clip audio level.",
        json: `// 動画の音声をフルで再生
{ "audioParams": { "movieVolume": 1.0 } }

// 動画の音声を小さく
{ "audioParams": { "movieVolume": 0.2 } }

// 動画の音声をミュート
{ "audioParams": { "movieVolume": 0.0 } }`,
      },
    ],
  };
}

function captionCategory(ja: boolean): Category {
  return {
    id: "captions",
    icon: "💬",
    title: ja ? "字幕" : "Captions",
    recipes: [
      {
        id: "caption-enable",
        label: ja ? "字幕を表示したい" : "Enable captions",
        description: ja
          ? "captionParams.langを指定すると字幕が表示されます。"
          : "Set captionParams.lang to enable captions.",
        json: `"captionParams": {
  "lang": "ja"
}`,
      },
      {
        id: "caption-style",
        label: ja
          ? "字幕のスタイル（色、フォント、背景等）を変えたい"
          : "Customize caption styles (color, font, background)",
        description: ja
          ? "captionParams.stylesにCSS配列でスタイルを指定。ビート単位での上書きも可能。"
          : "Set captionParams.styles as a CSS array. Can override per beat.",
        json: `// グローバル
"captionParams": {
  "lang": "ja",
  "styles": ["color: yellow"]
}

// ビート単位で上書き
{
  "text": "重要なポイントです！",
  "captionParams": {
    "styles": [
      "font-family: Helvetica, sans-serif",
      "font-weight: bold",
      "color: #000000",
      "background: rgba(255, 255, 0, 0.8)",
      "font-size: 64px",
      "text-shadow: 0px 0px 20px rgba(255, 255, 0, 1.0)"
    ]
  }
}`,
      },
      {
        id: "caption-split",
        label: ja ? "字幕の分割タイミングを制御したい" : "Control caption split timing",
        description: ja
          ? 'captionSplitとtextSplitで字幕の分割方式を制御します。"estimate"でAIが自動推定。'
          : 'Control caption splitting with captionSplit and textSplit. Use "estimate" for AI-based auto-splitting.',
        json: `"captionParams": {
  "lang": "ja",
  "captionSplit": "estimate",
  "textSplit": {
    "type": "delimiters",
    "delimiters": ["。", "！", "？"]
  }
}`,
        notes: [
          ja
            ? '※ captionSplit: "estimate"（AI推定）, "none"（分割なし）'
            : '※ captionSplit: "estimate" (AI-based), "none" (no split)',
        ],
      },
    ],
  };
}

function animationCategory(ja: boolean): Category {
  return {
    id: "animation",
    icon: "✨",
    title: ja ? "アニメーション" : "Animation",
    recipes: [
      {
        id: "html-animation",
        label: ja ? "フレームアニメーションを作りたい" : "Create frame-based animations",
        description: ja
          ? "html_tailwindにanimation: trueとscriptを追加して、MulmoAnimation APIでアニメーションを定義します。"
          : "Add animation: true and script to html_tailwind, then use MulmoAnimation API.",
        json: `{
  "duration": 3,
  "image": {
    "type": "html_tailwind",
    "html": [
      "<div class='h-full flex flex-col items-center justify-center bg-slate-900'>",
      "  <h1 id='title' class='text-5xl font-bold text-white' style='opacity:0'>Hello</h1>",
      "  <div id='line' class='h-1 bg-cyan-400 mt-4 rounded' style='width:0'></div>",
      "</div>"
    ],
    "script": [
      "const animation = new MulmoAnimation();",
      "animation.animate('#title', { opacity: [0, 1], translateY: [30, 0] }, { start: 0, end: 1, easing: 'easeOut' });",
      "animation.animate('#line', { width: [0, 400, 'px'] }, { start: 0.5, end: 2, easing: 'easeInOut' });"
    ],
    "animation": true
  }
}`,
        notes: [
          "■ API: animate(), stagger(), codeReveal(), typewriter(), blink(), counter()",
          ja ? "■ イージング: linear, easeIn, easeOut, easeInOut" : "■ Easing: linear, easeIn, easeOut, easeInOut",
          ja
            ? "※ 各フレームをPuppeteerでキャプチャし、ffmpegで動画に結合します"
            : "※ Each frame is captured by Puppeteer, then combined into video by FFmpeg",
        ],
      },
      {
        id: "animation-fps",
        label: ja ? "アニメーションのフレームレートを変えたい" : "Change animation frame rate",
        description: ja
          ? "animation をオブジェクトにしてfpsを指定します。デフォルトは30fps。"
          : "Pass an object to animation with fps. Default is 30fps.",
        json: `"image": {
  "type": "html_tailwind",
  "html": ["..."],
  "script": ["..."],
  "animation": { "fps": 15 }
}`,
      },
    ],
  };
}

function advancedCategory(ja: boolean): Category {
  return {
    id: "advanced",
    icon: "⚡",
    title: ja ? "高度な機能" : "Advanced Features",
    recipes: [
      {
        id: "spillover",
        label: ja ? "音声を次のビートにまたがらせたい（スピルオーバー）" : "Let audio spill over to the next beat",
        description: ja
          ? "音声がdurationを超えるビートの後に、textなしのビートを配置すると音声が自動的に引き継がれます。"
          : "Place beats without text after a beat whose audio exceeds its duration. Audio continues automatically.",
        json: `"beats": [
  {
    "text": "この長い文章は2秒では読み切れません。次のスライドまで音声が続きます。",
    "duration": 2,
    "image": { "type": "textSlide", "slide": { "title": "1. 長いテキスト" } }
  },
  {
    "image": { "type": "textSlide", "slide": { "title": "2. スピルオーバー受け" } }
  }
]`,
        notes: [
          ja
            ? "※ textなし＆durationなしのビートは、前のビートの余剰音声を均等に受け取ります"
            : "※ Beats without text or duration receive surplus audio evenly",
        ],
      },
      {
        id: "sound-effect",
        label: ja ? "効果音を付けたい" : "Add sound effects",
        description: ja
          ? "soundEffectPromptでAI生成の効果音をビートに追加します。"
          : "Use soundEffectPrompt to add AI-generated sound effects per beat.",
        json: `{
  "$mulmocast": { "version": "1.1" },
  "lang": "ja",
  "soundEffectParams": { "provider": "replicate" },
  "audioParams": { "suppressSpeech": true },
  "beats": [
    {
      "text": "馬が草原を駆け抜ける",
      "duration": 10,
      "imagePrompt": "A horse galloping in a field",
      "moviePrompt": "A horse galloping fast in a large field",
      "soundEffectPrompt": "galloping hooves on grass"
    }
  ]
}`,
      },
      {
        id: "voice-over",
        label: ja
          ? "既存の動画にナレーションを被せたい（ボイスオーバー）"
          : "Add narration over existing video (voice over)",
        description: ja
          ? 'image.type: "voice_over" で前の動画ビートの映像を使い、指定時刻からナレーションを重ねます。'
          : 'Use image.type: "voice_over" to overlay narration at specific timestamps on a previous video beat.',
        json: `"beats": [
  {
    "text": "動画を再生します。",
    "image": {
      "type": "movie",
      "source": { "kind": "url", "url": "https://example.com/demo.mp4" }
    }
  },
  {
    "text": "この部分でAPIを呼び出しています。",
    "image": { "type": "voice_over", "startAt": 8.0 }
  },
  {
    "image": { "type": "voice_over" }
  },
  {
    "text": "ここでデータが保存されます。",
    "image": { "type": "voice_over", "startAt": 14.5 }
  }
]`,
        notes: [
          ja
            ? "※ startAtで動画の特定時刻（秒）に合わせてナレーションを開始"
            : "※ startAt specifies the video timestamp (seconds) to start narration",
          ja
            ? "※ textなしのvoice_overビートはナレーションなしの間（ま）になります"
            : "※ voice_over beats without text create silent pauses",
        ],
      },
      {
        id: "music-video",
        label: ja ? "ミュージックビデオを作りたい" : "Create a music video",
        description: ja
          ? "BGMをメイン、音声を無効にし、AI動画＋リップシンク＋字幕を組み合わせます。"
          : "Use BGM as main audio, suppress speech, combine AI video + lip sync + captions.",
        json: `{
  "$mulmocast": { "version": "1.1", "credit": "closing" },
  "lang": "en",
  "audioParams": {
    "suppressSpeech": true,
    "bgm": { "kind": "url", "url": "https://example.com/song.mp3" },
    "bgmVolume": 1,
    "audioVolume": 0,
    "padding": 0, "introPadding": 0, "closingPadding": 0, "outroPadding": 0
  },
  "movieParams": { "provider": "replicate" },
  "soundEffectParams": { "provider": "replicate" },
  "captionParams": { "lang": "en" },
  "imageParams": { "style": "Vibrant 3D animation style" },
  "beats": [
    {
      "text": "Whispers hide in silver rain.",
      "duration": 9.0,
      "imagePrompt": "Singer walking in neon-lit rainy street",
      "enableLipSync": true
    }
  ]
}`,
        notes: [
          ja
            ? "※ text は字幕として表示されます（suppressSpeechでTTSは無効）"
            : "※ text is shown as captions (TTS is disabled by suppressSpeech)",
          ja
            ? "※ durationを曲の拍に合わせて各ビートに設定します"
            : "※ Set duration per beat to match the song's timing",
        ],
      },
      {
        id: "audio-padding",
        label: ja ? "ビート間の間（ま）やイントロの長さを調整したい" : "Adjust padding between beats and intro length",
        description: ja
          ? "audioParamsのpadding系プロパティで間の取り方を細かく制御できます。"
          : "Use padding properties in audioParams to control spacing between beats.",
        json: `"audioParams": {
  "introPadding": 1.0,
  "padding": 0.5,
  "closingPadding": 1.0,
  "outroPadding": 2.0
}`,
        notes: [
          ja ? "■ introPadding: 最初のビートの前の無音時間" : "■ introPadding: Silence before the first beat",
          ja ? "■ padding: ビート間の無音時間" : "■ padding: Silence between beats",
          ja ? "■ closingPadding: 最後のビートの後の無音時間" : "■ closingPadding: Silence after the last beat",
          ja ? "■ outroPadding: アウトロの無音時間" : "■ outroPadding: Outro silence",
          ja ? "※ ビート単位で audioParams.padding を上書き可能" : "※ Can override audioParams.padding per beat",
        ],
      },
      {
        id: "slide-dsl",
        label: ja ? "プロフェッショナルなスライドをDSLで作りたい" : "Create professional slides with Slide DSL",
        description: ja
          ? 'image.type: "slide" でテーマ・レイアウトを指定した構造化スライドを生成します。11種類のレイアウト対応。'
          : 'Use image.type: "slide" for structured slides with themes and layouts. 11 layout types available.',
        json: `"image": {
  "type": "slide",
  "theme": {
    "colors": {
      "bg": "0F172A", "bgCard": "1E293B", "bgCardAlt": "334155",
      "text": "FFFFFF", "textMuted": "CBD5E1", "textDim": "64748B",
      "primary": "3B82F6", "accent": "8B5CF6", "success": "22C55E",
      "warning": "F97316", "danger": "EF4444", "info": "14B8A6",
      "highlight": "EC4899"
    },
    "fonts": { "title": "Georgia", "body": "Calibri", "mono": "Consolas" }
  },
  "slide": {
    "layout": "title",
    "title": "プロジェクト報告",
    "subtitle": "2025年Q1",
    "author": "田中太郎"
  }
}`,
        notes: [
          ja
            ? "■ レイアウト: title, stats, timeline, columns, comparison, grid, bigQuote, split, matrix, table, funnel"
            : "■ Layouts: title, stats, timeline, columns, comparison, grid, bigQuote, split, matrix, table, funnel",
          ja
            ? "※ slideParamsでグローバルテーマを設定すると各ビートでの繰り返しを省略できます"
            : "※ Use slideParams for a global theme to avoid repeating per beat",
        ],
      },
      {
        id: "slide-branding",
        label: ja
          ? "スライドにロゴや背景画像（ブランディング）を入れたい"
          : "Add logo and background branding to slides",
        description: ja
          ? "slideParams.brandingでロゴの位置・サイズ、背景画像の不透明度を設定します。"
          : "Use slideParams.branding to configure logo position/size and background image opacity.",
        json: `"slideParams": {
  "theme": { "..." : "..." },
  "branding": {
    "logo": {
      "source": { "kind": "path", "path": "branding/logo.svg" },
      "position": "top-right",
      "width": 160
    },
    "backgroundImage": {
      "source": { "kind": "url", "url": "https://example.com/banner.jpg" },
      "size": "cover",
      "opacity": 1,
      "bgOpacity": 0.7
    }
  }
}`,
        notes: [
          ja
            ? "※ ビート単位で image.branding を指定して上書き。null でブランディングを無効化"
            : "※ Override per beat with image.branding. Set null to disable branding",
        ],
      },
    ],
  };
}
</script>
