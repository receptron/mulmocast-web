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
        <h1 class="text-foreground text-3xl font-bold">MulmoCast Slides</h1>
        <p class="text-muted-foreground mt-2 text-lg">
          {{ t("docs.slides.pageSubtitle") }}
        </p>
        <div class="mt-3 flex gap-2">
          <Badge variant="secondary">@mulmocast/slide</Badge>
          <Badge variant="outline">npm</Badge>
        </div>
      </div>

      <!-- Table of Contents -->
      <Card class="mb-8">
        <CardHeader>
          <CardTitle class="text-base">{{ t("docs.slides.toc.title") }}</CardTitle>
        </CardHeader>
        <CardContent>
          <nav class="space-y-1">
            <a href="#overview" class="text-muted-foreground hover:text-primary block text-sm">{{
              t("docs.slides.toc.overview")
            }}</a>
            <a href="#install" class="text-muted-foreground hover:text-primary block text-sm">{{
              t("docs.slides.toc.install")
            }}</a>
            <a href="#quickstart" class="text-muted-foreground hover:text-primary block text-sm">{{
              t("docs.slides.toc.quickstart")
            }}</a>
            <a href="#cli" class="text-muted-foreground hover:text-primary block text-sm">{{
              t("docs.slides.toc.cli")
            }}</a>
            <a href="#markdown" class="text-muted-foreground hover:text-primary block text-sm">{{
              t("docs.slides.toc.markdown")
            }}</a>
            <a href="#tutorial" class="text-muted-foreground hover:text-primary block text-sm">{{
              t("docs.slides.toc.tutorial")
            }}</a>
          </nav>
        </CardContent>
      </Card>

      <!-- Overview -->
      <section id="overview" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">{{ t("docs.slides.overview.title") }}</h2>
        <p class="text-muted-foreground mb-4">
          {{ t("docs.slides.overview.description") }}
        </p>

        <!-- Supported Formats Table -->
        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">{{ t("docs.slides.overview.formatHeader") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-muted-foreground py-2 text-left font-medium">
                      {{ t("docs.slides.overview.formatHeader") }}
                    </th>
                    <th class="text-muted-foreground py-2 text-left font-medium">
                      {{ t("docs.slides.overview.extensionHeader") }}
                    </th>
                    <th class="text-muted-foreground py-2 text-left font-medium">
                      {{ t("docs.slides.overview.requirementsHeader") }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="py-2">Keynote</td>
                    <td class="py-2 font-mono text-xs">.key</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.overview.keynoteReq") }}</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2">PowerPoint</td>
                    <td class="py-2 font-mono text-xs">.pptx</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.overview.pptxReq") }}</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2">PDF</td>
                    <td class="py-2 font-mono text-xs">.pdf</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.overview.pdfReq") }}</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2">Marp</td>
                    <td class="py-2 font-mono text-xs">.md</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.overview.marpReq") }}</td>
                  </tr>
                  <tr>
                    <td class="py-2">Markdown</td>
                    <td class="py-2 font-mono text-xs">.md</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.overview.markdownReq") }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <!-- Installation -->
      <section id="install" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">{{ t("docs.slides.install.title") }}</h2>

        <h3 class="text-foreground mb-2 font-semibold">{{ t("docs.slides.install.globalInstall") }}</h3>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>npm install -g @mulmocast/slide</code></pre>
        </div>

        <h3 class="text-foreground mb-2 font-semibold">{{ t("docs.slides.install.npxUsage") }}</h3>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>npx @mulmocast/slide convert presentation.pdf</code></pre>
        </div>

        <!-- System Requirements -->
        <h3 class="text-foreground mb-2 font-semibold">{{ t("docs.slides.install.requirementsTitle") }}</h3>
        <Card class="mb-4">
          <CardContent class="pt-4">
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-muted-foreground py-2 text-left font-medium">
                      {{ t("docs.slides.install.requirementHeader") }}
                    </th>
                    <th class="text-muted-foreground py-2 text-left font-medium">
                      {{ t("docs.slides.install.purposeHeader") }}
                    </th>
                    <th class="text-muted-foreground py-2 text-left font-medium">
                      {{ t("docs.slides.install.requiredHeader") }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">Node.js 22+</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.install.nodePurpose") }}</td>
                    <td class="py-2">{{ t("docs.slides.install.required") }}</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">ImageMagick</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.install.imageMagickPurpose") }}</td>
                    <td class="py-2">{{ t("docs.slides.install.required") }}</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">Ghostscript</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.install.ghostscriptPurpose") }}</td>
                    <td class="py-2">{{ t("docs.slides.install.pdfPptxOnly") }}</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">LibreOffice</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.install.libreOfficePurpose") }}</td>
                    <td class="py-2">{{ t("docs.slides.install.pptxOnly") }}</td>
                  </tr>
                  <tr>
                    <td class="py-2 font-mono text-xs">Keynote</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.install.keynotePurpose") }}</td>
                    <td class="py-2">{{ t("docs.slides.install.keynoteOnly") }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <!-- Quick Start -->
      <section id="quickstart" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">{{ t("docs.slides.quickstart.title") }}</h2>
        <p class="text-muted-foreground mb-4">{{ t("docs.slides.quickstart.description") }}</p>

        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code># {{ locale === "ja" ? "PDFからMulmoScriptに変換" : "Convert PDF to MulmoScript" }}
mulmo-slide convert presentation.pdf

# {{ locale === "ja" ? "Keynoteからの変換（macOSのみ）" : "Convert from Keynote (macOS only)" }}
mulmo-slide keynote presentation.key

# {{ locale === "ja" ? "PowerPointからの変換" : "Convert from PowerPoint" }}
mulmo-slide pptx presentation.pptx

# {{ locale === "ja" ? "Marp Markdownからの変換" : "Convert from Marp Markdown" }}
mulmo-slide marp slides.md

# {{ locale === "ja" ? "Markdownからの変換" : "Convert from Markdown" }}
mulmo-slide markdown document.md</code></pre>
        </div>

        <!-- Narration Generation -->
        <h3 class="text-foreground mb-2 font-semibold">{{ t("docs.slides.quickstart.narration") }}</h3>
        <p class="text-muted-foreground mb-3">{{ t("docs.slides.quickstart.narrationDesc") }}</p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre
            class="text-sm"
          ><code># {{ locale === "ja" ? "LLMでナレーションを自動生成（-g オプション）" : "Auto-generate narration with LLM (-g option)" }}
mulmo-slide convert presentation.pdf -g

# {{ locale === "ja" ? "Keynoteからナレーション付きで変換" : "Convert from Keynote with narration" }}
mulmo-slide keynote presentation.key -g</code></pre>
        </div>
        <Card class="mb-4">
          <CardContent class="pt-4">
            <p class="text-muted-foreground text-sm">
              <span class="font-semibold">{{ t("docs.slides.quickstart.narrationNote") }}</span>
              {{ t("docs.slides.quickstart.narrationNoteText") }}
            </p>
          </CardContent>
        </Card>
      </section>

      <!-- CLI Commands -->
      <section id="cli" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">{{ t("docs.slides.cli.title") }}</h2>
        <p class="text-muted-foreground mb-4">{{ t("docs.slides.cli.description") }}</p>

        <Card class="mb-4">
          <CardContent class="pt-4">
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-muted-foreground py-2 text-left font-medium">
                      {{ t("docs.slides.cli.commandHeader") }}
                    </th>
                    <th class="text-muted-foreground py-2 text-left font-medium">
                      {{ t("docs.slides.cli.descriptionHeader") }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">mulmo-slide convert</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.cli.convertDesc") }}</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">mulmo-slide keynote</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.cli.keynoteDesc") }}</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">mulmo-slide pptx</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.cli.pptxDesc") }}</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">mulmo-slide pdf</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.cli.pdfDesc") }}</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">mulmo-slide marp</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.cli.marpDesc") }}</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">mulmo-slide markdown</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.cli.markdownDesc") }}</td>
                  </tr>
                  <tr>
                    <td class="py-2 font-mono text-xs">mulmo-slide narrate</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.cli.narrateDesc") }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <!-- Common Options -->
        <h3 class="text-foreground mb-2 font-semibold">{{ t("docs.slides.cli.commonOptions") }}</h3>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code># {{ locale === "ja" ? "共通オプション" : "Common options" }}
-g              # {{ locale === "ja" ? "LLMでナレーション自動生成" : "Auto-generate narration with LLM" }}
-o &lt;file&gt;       # {{ locale === "ja" ? "出力ファイルを指定" : "Specify output file" }}
--lang &lt;code&gt;   # {{ locale === "ja" ? "言語を指定（ja, en, etc.）" : "Specify language (ja, en, etc.)" }}</code></pre>
        </div>
      </section>

      <!-- Markdown Converter -->
      <section id="markdown" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">{{ t("docs.slides.markdown.title") }}</h2>
        <p class="text-muted-foreground mb-4">{{ t("docs.slides.markdown.description") }}</p>

        <!-- Separator Modes -->
        <h3 class="text-foreground mb-2 font-semibold">{{ t("docs.slides.markdown.modesTitle") }}</h3>
        <Card class="mb-4">
          <CardContent class="pt-4">
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-muted-foreground py-2 text-left font-medium">
                      {{ t("docs.slides.markdown.modeHeader") }}
                    </th>
                    <th class="text-muted-foreground py-2 text-left font-medium">
                      {{ t("docs.slides.markdown.separatorHeader") }}
                    </th>
                    <th class="text-muted-foreground py-2 text-left font-medium">
                      {{ t("docs.slides.markdown.modeDescHeader") }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">horizontal-rule</td>
                    <td class="py-2 font-mono text-xs">---</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.markdown.hrDesc") }}</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">heading</td>
                    <td class="py-2 font-mono text-xs"># ## ###</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.markdown.headingDesc") }}</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">heading-1</td>
                    <td class="py-2 font-mono text-xs">#</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.markdown.heading1Desc") }}</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">heading-2</td>
                    <td class="py-2 font-mono text-xs">##</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.markdown.heading2Desc") }}</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">heading-3</td>
                    <td class="py-2 font-mono text-xs">###</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.markdown.heading3Desc") }}</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">blank-lines</td>
                    <td class="py-2 font-mono text-xs">{{ locale === "ja" ? "空行2行" : "2 blank lines" }}</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.markdown.blankDesc") }}</td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">comment</td>
                    <td class="py-2 font-mono text-xs">&lt;!-- --&gt;</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.markdown.commentDesc") }}</td>
                  </tr>
                  <tr>
                    <td class="py-2 font-mono text-xs">page-break</td>
                    <td class="py-2 font-mono text-xs">{{ locale === "ja" ? "改ページ" : "page break" }}</td>
                    <td class="text-muted-foreground py-2">{{ t("docs.slides.markdown.pageBreakDesc") }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre
            class="text-sm"
          ><code># {{ locale === "ja" ? "セパレーターモードを指定して変換" : "Convert with a specific separator mode" }}
mulmo-slide markdown document.md --separator heading-2

# {{ locale === "ja" ? "カスタム正規表現パターン" : "Custom regex pattern" }}
mulmo-slide markdown document.md --separator "^## "</code></pre>
        </div>

        <!-- Plugins -->
        <h3 class="text-foreground mb-2 font-semibold">{{ t("docs.slides.markdown.pluginsTitle") }}</h3>
        <p class="text-muted-foreground mb-3">{{ t("docs.slides.markdown.pluginsDescription") }}</p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre
            class="text-sm"
          ><code># {{ locale === "ja" ? "Mermaid図を画像に変換" : "Convert Mermaid diagrams to images" }}
mulmo-slide markdown document.md --mermaid

# {{ locale === "ja" ? "Marpディレクティブを削除" : "Remove Marp directives" }}
mulmo-slide markdown document.md --directive

# {{ locale === "ja" ? "自動レイアウト検出" : "Auto layout detection" }}
mulmo-slide markdown document.md --layout

# {{ locale === "ja" ? "スタイル適用" : "Apply styles" }}
mulmo-slide markdown document.md --style

# {{ locale === "ja" ? "複数プラグインの組み合わせ" : "Combine multiple plugins" }}
mulmo-slide markdown document.md --mermaid --layout --style</code></pre>
        </div>
      </section>

      <!-- Tutorial: PDF to Narrated Video -->
      <section id="tutorial" class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">{{ t("docs.slides.tutorial.title") }}</h2>
        <p class="text-muted-foreground mb-4">{{ t("docs.slides.tutorial.description") }}</p>

        <!-- Step 1: Setup -->
        <h3 class="text-foreground mb-2 font-semibold">{{ t("docs.slides.tutorial.step1Title") }}</h3>
        <p class="text-muted-foreground mb-3">{{ t("docs.slides.tutorial.step1Desc") }}</p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>mkdir my-narrate-project
cd my-narrate-project</code></pre>
        </div>

        <!-- Step 2: .env -->
        <h3 class="text-foreground mb-2 font-semibold">{{ t("docs.slides.tutorial.step2Title") }}</h3>
        <p class="text-muted-foreground mb-3">{{ t("docs.slides.tutorial.step2Desc") }}</p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code># .env
OPENAI_API_KEY=sk-your-openai-api-key</code></pre>
        </div>

        <!-- Step 3: Install & extend init -->
        <h3 class="text-foreground mb-2 font-semibold">{{ t("docs.slides.tutorial.step3Title") }}</h3>
        <p class="text-muted-foreground mb-3">{{ t("docs.slides.tutorial.step3Desc") }}</p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>npm install -g @mulmocast/slide

# {{ locale === "ja" ? "Claude Code スキルをインストール" : "Install Claude Code skills" }}
mulmo-slide extend init</code></pre>
        </div>

        <!-- Step 4: Place file & run /narrate -->
        <h3 class="text-foreground mb-2 font-semibold">{{ t("docs.slides.tutorial.step4Title") }}</h3>
        <p class="text-muted-foreground mb-3">{{ t("docs.slides.tutorial.step4Desc") }}</p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code># {{ locale === "ja" ? "Claude Code で実行" : "Run in Claude Code" }}
/narrate your-paper.pdf</code></pre>
        </div>

        <!-- Output structure -->
        <Card class="mb-4">
          <CardHeader>
            <CardTitle class="text-base">{{ t("docs.slides.tutorial.outputTitle") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="bg-muted overflow-x-auto rounded-lg p-4">
              <pre class="text-sm"><code>scripts/your-paper/
├── images/
│   ├── your-paper-0.png     # {{ locale === "ja" ? "1ページ目の画像" : "Page 1 image" }}
│   ├── your-paper-1.png     # {{ locale === "ja" ? "2ページ目の画像" : "Page 2 image" }}
│   └── ...
├── your-paper.json          # MulmoScript
├── extracted_texts.json     # {{ locale === "ja" ? "抽出テキスト" : "Extracted text" }}
└── extended_script.json     # {{ locale === "ja" ? "ナレーション付きスクリプト" : "Script with narration" }}</code></pre>
            </div>
          </CardContent>
        </Card>

        <!-- Step 5: Post-processing -->
        <h3 class="text-foreground mb-2 font-semibold">{{ t("docs.slides.tutorial.step5Title") }}</h3>
        <p class="text-muted-foreground mb-3">{{ t("docs.slides.tutorial.step5Desc") }}</p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre
            class="text-sm"
          ><code># {{ locale === "ja" ? "内容について対話的に質問" : "Query content interactively" }}
npx mulmocast-preprocessor query scripts/your-paper/extended_script.json -i

# {{ locale === "ja" ? "単発の質問" : "Single question" }}
npx mulmocast-preprocessor query scripts/your-paper/extended_script.json "{{ locale === "ja" ? "この論文の主題は？" : "What is the main topic?" }}"

# {{ locale === "ja" ? "要約を生成" : "Generate summary" }}
npx mulmocast-preprocessor summarize scripts/your-paper/extended_script.json -l {{ locale }}</code></pre>
        </div>

        <!-- Step 6: Generate video -->
        <h3 class="text-foreground mb-2 font-semibold">{{ t("docs.slides.tutorial.step6Title") }}</h3>
        <p class="text-muted-foreground mb-3">{{ t("docs.slides.tutorial.step6Desc") }}</p>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre
            class="text-sm"
          ><code># {{ locale === "ja" ? "ExtendedScriptからMulmoScriptに変換" : "Convert ExtendedScript to MulmoScript" }}
npx mulmocast-preprocessor scripts/your-paper/extended_script.json \
  -o scripts/your-paper/your-paper.json

# {{ locale === "ja" ? "ナレーション付き動画を生成" : "Generate narrated video" }}
npx mulmo movie scripts/your-paper/your-paper.json</code></pre>
        </div>
        <Card class="mb-4">
          <CardContent class="pt-4">
            <p class="text-muted-foreground text-sm">
              {{ t("docs.slides.tutorial.outputNote") }}
            </p>
          </CardContent>
        </Card>

        <!-- Supported formats -->
        <h3 class="text-foreground mb-2 font-semibold">{{ t("docs.slides.tutorial.formatsTitle") }}</h3>
        <div class="bg-muted mb-4 overflow-x-auto rounded-lg p-4">
          <pre class="text-sm"><code>/narrate your-paper.pdf       # PDF
/narrate your-slides.pptx     # PowerPoint
/narrate your-slides.md       # Marp Markdown
/narrate your-slides.key      # Keynote (macOS)</code></pre>
        </div>

        <!-- Troubleshooting -->
        <h3 class="text-foreground mb-2 font-semibold">{{ t("docs.slides.tutorial.troubleshootingTitle") }}</h3>
        <Card class="mb-4">
          <CardContent class="pt-4">
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b">
                    <th class="text-muted-foreground py-2 text-left font-medium">
                      {{ t("docs.slides.tutorial.symptomHeader") }}
                    </th>
                    <th class="text-muted-foreground py-2 text-left font-medium">
                      {{ t("docs.slides.tutorial.solutionHeader") }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="py-2 font-mono text-xs">Unrecognized key: scriptMeta</td>
                    <td class="text-muted-foreground py-2">
                      {{ t("docs.slides.tutorial.scriptMetaFix") }}
                    </td>
                  </tr>
                  <tr class="border-b">
                    <td class="py-2">{{ t("docs.slides.tutorial.emptyNarration") }}</td>
                    <td class="text-muted-foreground py-2">
                      {{ t("docs.slides.tutorial.emptyNarrationFix") }}
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 font-mono text-xs">magick: command not found</td>
                    <td class="text-muted-foreground py-2">
                      {{ t("docs.slides.tutorial.imageMagickFix") }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <!-- Links -->
      <section class="mb-12">
        <h2 class="text-foreground mb-4 text-2xl font-bold">{{ t("docs.slides.links") }}</h2>
        <div class="space-y-2">
          <a
            href="https://github.com/receptron/MulmoCast-Slides"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary block hover:underline"
          >
            GitHub: receptron/MulmoCast-Slides
          </a>
          <a
            href="https://www.npmjs.com/package/@mulmocast/slide"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary block hover:underline"
          >
            npm: @mulmocast/slide
          </a>
        </div>
      </section>

      <!-- Back Button -->
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
import Navigation from "../../components/Navigation.vue";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { useLocalizedUrl } from "../../i18n/utils";
import { ChevronLeft } from "lucide-vue-next";

const { t, locale } = useI18n();
const localizedUrl = useLocalizedUrl();
</script>
