<template>
  <div class="min-h-screen">
    <Navigation />
    <div class="flex items-center justify-center p-4">
      <div class="w-full max-w-2xl space-y-6 py-8">
        <!-- Hero -->
        <div class="text-center">
          <h1 class="text-foreground text-3xl font-extrabold sm:text-4xl">{{ t("family.title") }}</h1>
          <p class="text-muted-foreground mt-4 text-lg">
            {{ t("family.subtitle") }}
          </p>
        </div>

        <!-- 1. MulmoCast CLI -->
        <Card class="border-primary/30 hover:bg-muted/50">
          <CardHeader>
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Terminal class="text-primary h-6 w-6" />
              </div>
              <div>
                <CardTitle class="flex items-center gap-2">
                  {{ t("family.cli.title") }}
                  <Badge variant="default" class="text-xs">{{ t("family.badges.core") }}</Badge>
                </CardTitle>
                <CardDescription>{{ t("family.cli.tagline") }}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-muted-foreground">{{ t("family.cli.description") }}</p>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">npm</Badge>
              <Badge variant="outline">{{ t("family.badges.cli") }}</Badge>
              <Badge variant="outline">{{ t("family.badges.fullFeature") }}</Badge>
            </div>
            <div class="bg-muted rounded-lg p-3">
              <code class="text-sm">npx mulmocast</code>
            </div>
          </CardContent>
          <CardFooter class="flex gap-3">
            <Button
              as="a"
              href="https://www.npmjs.com/package/mulmocast"
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              size="sm"
            >
              npm
            </Button>
            <Button
              as="a"
              href="https://github.com/receptron/mulmocast-cli"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              <Github class="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </CardFooter>
        </Card>

        <!-- 2. MulmoCast App -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Monitor class="text-primary h-6 w-6" />
              </div>
              <div>
                <CardTitle>{{ t("family.app.title") }}</CardTitle>
                <CardDescription>{{ t("family.app.tagline") }}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-muted-foreground">{{ t("family.app.description") }}</p>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">macOS</Badge>
              <Badge variant="secondary">Windows</Badge>
              <Badge variant="outline">{{ t("family.badges.gui") }}</Badge>
            </div>
          </CardContent>
          <CardFooter class="flex gap-3">
            <Button as="a" :href="localizedUrl('/')" variant="default" size="sm">
              {{ t("family.app.download") }}
            </Button>
            <Button
              as="a"
              href="https://github.com/receptron/mulmocast-app"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              <Github class="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </CardFooter>
        </Card>

        <!-- 3. MulmoCast Slides -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <FileSliders class="text-primary h-6 w-6" />
              </div>
              <div>
                <CardTitle>{{ t("family.slides.title") }}</CardTitle>
                <CardDescription>{{ t("family.slides.tagline") }}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-muted-foreground">{{ t("family.slides.description") }}</p>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">Keynote</Badge>
              <Badge variant="secondary">PPTX</Badge>
              <Badge variant="secondary">PDF</Badge>
              <Badge variant="secondary">Marp</Badge>
              <Badge variant="outline">{{ t("family.badges.converter") }}</Badge>
            </div>
            <div class="bg-muted rounded-lg p-3">
              <code class="text-sm">npm install -g mulmocast-slides</code>
            </div>
          </CardContent>
          <CardFooter class="flex gap-3">
            <Button
              as="a"
              href="https://www.npmjs.com/package/mulmocast-slides"
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              size="sm"
            >
              npm
            </Button>
            <Button
              as="a"
              href="https://github.com/receptron/MulmoCast-Slides"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              <Github class="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </CardFooter>
        </Card>

        <!-- 4. MulmoCast Vision -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Presentation class="text-primary h-6 w-6" />
              </div>
              <div>
                <CardTitle>{{ t("family.vision.title") }}</CardTitle>
                <CardDescription>{{ t("family.vision.tagline") }}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-muted-foreground">{{ t("family.vision.description") }}</p>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">MCP</Badge>
              <Badge variant="secondary">npx</Badge>
              <Badge variant="outline">{{ t("family.badges.slides") }}</Badge>
            </div>
            <div class="bg-muted rounded-lg p-3">
              <code class="text-sm">npx mulmocast-vision@latest</code>
            </div>
          </CardContent>
          <CardFooter class="flex gap-3">
            <Button
              as="a"
              href="https://www.npmjs.com/package/mulmocast-vision"
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              size="sm"
            >
              npm
            </Button>
            <Button
              as="a"
              href="https://github.com/receptron/mulmocast-vision"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              <Github class="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </CardFooter>
        </Card>

        <!-- 5. MulmoCast Claude Plugin -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Plug class="text-primary h-6 w-6" />
              </div>
              <div>
                <CardTitle>{{ t("family.claudePlugin.title") }}</CardTitle>
                <CardDescription>{{ t("family.claudePlugin.tagline") }}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-muted-foreground">{{ t("family.claudePlugin.description") }}</p>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">Claude Code</Badge>
              <Badge variant="secondary">Plugin</Badge>
              <Badge variant="outline">{{ t("family.badges.integration") }}</Badge>
            </div>
            <div class="bg-muted rounded-lg p-3">
              <code class="text-sm">claude plugin install mulmocast@mulmocast-plugins</code>
            </div>
          </CardContent>
          <CardFooter class="flex gap-3">
            <Button as="a" :href="localizedUrl('/docs/claude-plugin')" variant="default" size="sm">
              {{ locale === "ja" ? "ドキュメント" : "Docs" }}
            </Button>
            <Button
              as="a"
              href="https://github.com/receptron/mulmocast-claude-plugin"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              <Github class="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </CardFooter>
        </Card>

        <!-- 6. MulmoCast MCP -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Server class="text-primary h-6 w-6" />
              </div>
              <div>
                <CardTitle>{{ t("family.mcp.title") }}</CardTitle>
                <CardDescription>{{ t("family.mcp.tagline") }}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-muted-foreground">{{ t("family.mcp.description") }}</p>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">MCP</Badge>
              <Badge variant="secondary">npx</Badge>
              <Badge variant="outline">{{ t("family.badges.integration") }}</Badge>
            </div>
            <div class="bg-muted rounded-lg p-3">
              <code class="text-sm">npx mulmocast-mcp@latest</code>
            </div>
          </CardContent>
          <CardFooter class="flex gap-3">
            <Button
              as="a"
              href="https://www.npmjs.com/package/mulmocast-mcp"
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              size="sm"
            >
              npm
            </Button>
            <Button
              as="a"
              href="https://github.com/receptron/mulmocast-mcp"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              <Github class="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </CardFooter>
        </Card>

        <!-- 6. MulmoCast Viewer -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Play class="text-primary h-6 w-6" />
              </div>
              <div>
                <CardTitle>{{ t("family.viewer.title") }}</CardTitle>
                <CardDescription>{{ t("family.viewer.tagline") }}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-muted-foreground">{{ t("family.viewer.description") }}</p>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">npm</Badge>
              <Badge variant="secondary">Vue 3</Badge>
              <Badge variant="outline">{{ t("family.badges.component") }}</Badge>
            </div>
            <div class="bg-muted rounded-lg p-3">
              <code class="text-sm">npm install mulmocast-viewer</code>
            </div>
          </CardContent>
          <CardFooter class="flex gap-3">
            <Button
              as="a"
              href="https://www.npmjs.com/package/mulmocast-viewer"
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              size="sm"
            >
              npm
            </Button>
            <Button
              as="a"
              href="https://github.com/receptron/mulmocast-viewer"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              <Github class="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </CardFooter>
        </Card>

        <!-- 7. MulmoChat -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <MessageCircle class="text-primary h-6 w-6" />
              </div>
              <div>
                <CardTitle>{{ t("family.chat.title") }}</CardTitle>
                <CardDescription>{{ t("family.chat.tagline") }}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-muted-foreground">{{ t("family.chat.description") }}</p>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">Vue 3</Badge>
              <Badge variant="secondary">Chat Protocol</Badge>
              <Badge variant="outline">{{ t("family.badges.nextGen") }}</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              as="a"
              href="https://github.com/receptron/MulmoChat"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              <Github class="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </CardFooter>
        </Card>

        <!-- 8. MulmoClaude -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Brain class="text-primary h-6 w-6" />
              </div>
              <div>
                <CardTitle>{{ t("family.mulmoclaude.title") }}</CardTitle>
                <CardDescription>{{ t("family.mulmoclaude.tagline") }}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-muted-foreground">{{ t("family.mulmoclaude.description") }}</p>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">Claude Code</Badge>
              <Badge variant="secondary">Vue 3</Badge>
              <Badge variant="outline">{{ t("family.badges.longTermMemory") }}</Badge>
            </div>
          </CardContent>
          <CardFooter class="flex gap-3">
            <Button as="a" :href="localizedUrl('/docs/mulmoclaude')" variant="default" size="sm">
              {{ locale === "ja" ? "ドキュメント" : "Docs" }}
            </Button>
            <Button
              as="a"
              href="https://github.com/receptron/mulmoclaude"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              <Github class="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </CardFooter>
        </Card>

        <!-- 9. GUI Chat Protocol -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Blocks class="text-primary h-6 w-6" />
              </div>
              <div>
                <CardTitle>{{ t("family.protocol.title") }}</CardTitle>
                <CardDescription>{{ t("family.protocol.tagline") }}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent class="space-y-4">
            <p class="text-muted-foreground">{{ t("family.protocol.description") }}</p>
            <div class="flex flex-wrap gap-2">
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Vue 3</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="outline">{{ t("family.badges.protocol") }}</Badge>
            </div>
            <div class="bg-muted rounded-lg p-3">
              <code class="text-sm">npm install gui-chat-protocol</code>
            </div>
          </CardContent>
          <CardFooter class="flex gap-3">
            <Button
              as="a"
              href="https://www.npmjs.com/package/gui-chat-protocol"
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              size="sm"
            >
              npm
            </Button>
            <Button
              as="a"
              href="https://github.com/receptron/gui-chat-protocol"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              <Github class="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </CardFooter>
        </Card>

        <!-- Back Button -->
        <div class="text-center">
          <Button as="a" :href="localizedUrl('/')" variant="outline">
            {{ t("family.backButton") }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import Navigation from "../components/Navigation.vue";
import { useLocalizedUrl } from "../i18n/utils";
import {
  Monitor,
  Terminal,
  Play,
  Github,
  MessageCircle,
  Presentation,
  Server,
  FileSliders,
  Blocks,
  Plug,
  Brain,
} from "lucide-vue-next";

const { t, locale } = useI18n();
const localizedUrl = useLocalizedUrl();
</script>

<style scoped></style>
