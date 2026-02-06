<template>
  <div class="min-h-screen">
    <Navigation />
    <div class="flex items-center justify-center p-4">
      <div class="w-full max-w-2xl space-y-6 py-8">
        <!-- Hero -->
        <div class="text-center">
          <h1 class="text-foreground text-3xl font-extrabold sm:text-4xl">{{ t("docs.title") }}</h1>
          <p class="text-muted-foreground mt-4 text-lg">
            {{ t("docs.subtitle") }}
          </p>
        </div>

        <!-- MulmoCast CLI -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Terminal class="text-primary h-6 w-6" />
              </div>
              <a :href="localizedUrl('/docs/cli')">
                <CardTitle class="hover:underline">{{ t("docs.cli.title") }}</CardTitle>
                <CardDescription>{{ t("docs.cli.description") }}</CardDescription>
              </a>
            </div>
          </CardHeader>
          <CardContent>
            <ul class="space-y-2 text-sm">
              <li>
                <a
                  :href="localizedUrl('/docs/cli/quickstart')"
                  class="text-muted-foreground hover:text-primary hover:underline"
                  >{{ t("docs.cli.item1") }}</a
                >
              </li>
              <li>
                <a
                  :href="localizedUrl('/docs/cli/mulmoscript')"
                  class="text-muted-foreground hover:text-primary hover:underline"
                  >{{ t("docs.cli.item2") }}</a
                >
              </li>
              <li>
                <a :href="localizedUrl('/docs/cli')" class="text-muted-foreground hover:text-primary hover:underline">{{
                  t("docs.cli.item3")
                }}</a>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button as="a" :href="localizedUrl('/docs/cli')" variant="default" size="sm">
              {{ t("docs.readMore") }}
            </Button>
          </CardFooter>
        </Card>

        <!-- MulmoCast App -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Monitor class="text-primary h-6 w-6" />
              </div>
              <a :href="localizedUrl('/docs/app')">
                <CardTitle class="hover:underline">{{ t("docs.app.title") }}</CardTitle>
                <CardDescription>{{ t("docs.app.description") }}</CardDescription>
              </a>
            </div>
          </CardHeader>
          <CardContent>
            <ul class="space-y-2 text-sm">
              <li>
                <a
                  :href="localizedUrl('/docs/app') + '#download'"
                  class="text-muted-foreground hover:text-primary hover:underline"
                  >{{ t("docs.app.item1") }}</a
                >
              </li>
              <li>
                <a
                  :href="localizedUrl('/docs/app') + '#usage'"
                  class="text-muted-foreground hover:text-primary hover:underline"
                  >{{ t("docs.app.item2") }}</a
                >
              </li>
              <li>
                <a
                  :href="localizedUrl('/docs/app') + '#settings'"
                  class="text-muted-foreground hover:text-primary hover:underline"
                  >{{ t("docs.app.item3") }}</a
                >
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button as="a" :href="localizedUrl('/docs/app')" variant="default" size="sm">
              {{ t("docs.readMore") }}
            </Button>
          </CardFooter>
        </Card>

        <!-- MulmoCast Easy -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Package class="text-primary h-6 w-6" />
              </div>
              <a :href="localizedUrl('/docs/easy')">
                <CardTitle class="hover:underline">{{ t("docs.easy.title") }}</CardTitle>
                <CardDescription>{{ t("docs.easy.description") }}</CardDescription>
              </a>
            </div>
          </CardHeader>
          <CardContent>
            <ul class="space-y-2 text-sm">
              <li>
                <a
                  :href="localizedUrl('/docs/easy') + '#install'"
                  class="text-muted-foreground hover:text-primary hover:underline"
                  >{{ t("docs.easy.item1") }}</a
                >
              </li>
              <li>
                <a
                  :href="localizedUrl('/docs/easy') + '#commands'"
                  class="text-muted-foreground hover:text-primary hover:underline"
                  >{{ t("docs.easy.item2") }}</a
                >
              </li>
              <li>
                <a
                  :href="localizedUrl('/docs/easy') + '#quickstart'"
                  class="text-muted-foreground hover:text-primary hover:underline"
                  >{{ t("docs.easy.item3") }}</a
                >
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button as="a" :href="localizedUrl('/docs/easy')" variant="default" size="sm">
              {{ t("docs.readMore") }}
            </Button>
          </CardFooter>
        </Card>

        <!-- MulmoCast Preprocessor -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Sparkles class="text-primary h-6 w-6" />
              </div>
              <a :href="localizedUrl('/docs/preprocessor')">
                <CardTitle class="hover:underline">{{ t("docs.preprocessor.title") }}</CardTitle>
                <CardDescription>{{ t("docs.preprocessor.description") }}</CardDescription>
              </a>
            </div>
          </CardHeader>
          <CardContent>
            <ul class="space-y-2 text-sm">
              <li>
                <a
                  :href="localizedUrl('/docs/preprocessor') + '#profiles'"
                  class="text-muted-foreground hover:text-primary hover:underline"
                  >{{ t("docs.preprocessor.item1") }}</a
                >
              </li>
              <li>
                <a
                  :href="localizedUrl('/docs/preprocessor') + '#ai-summarize'"
                  class="text-muted-foreground hover:text-primary hover:underline"
                  >{{ t("docs.preprocessor.item2") }}</a
                >
              </li>
              <li>
                <a
                  :href="localizedUrl('/docs/preprocessor') + '#ai-qa'"
                  class="text-muted-foreground hover:text-primary hover:underline"
                  >{{ t("docs.preprocessor.item3") }}</a
                >
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button as="a" :href="localizedUrl('/docs/preprocessor')" variant="default" size="sm">
              {{ t("docs.readMore") }}
            </Button>
          </CardFooter>
        </Card>

        <!-- MulmoChat -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <MessageCircle class="text-primary h-6 w-6" />
              </div>
              <a :href="localizedUrl('/docs/mulmochat')">
                <CardTitle class="hover:underline">{{ t("docs.mulmochat.title") }}</CardTitle>
                <CardDescription>{{ t("docs.mulmochat.description") }}</CardDescription>
              </a>
            </div>
          </CardHeader>
          <CardContent>
            <ul class="space-y-2 text-sm">
              <li>
                <a
                  :href="localizedUrl('/docs/mulmochat') + '#overview'"
                  class="text-muted-foreground hover:text-primary hover:underline"
                  >{{ t("docs.mulmochat.item1") }}</a
                >
              </li>
              <li>
                <a
                  :href="localizedUrl('/docs/mulmochat') + '#protocol'"
                  class="text-muted-foreground hover:text-primary hover:underline"
                  >{{ t("docs.mulmochat.item2") }}</a
                >
              </li>
              <li>
                <a
                  :href="localizedUrl('/docs/mulmochat') + '#plugins'"
                  class="text-muted-foreground hover:text-primary hover:underline"
                  >{{ t("docs.mulmochat.item3") }}</a
                >
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button as="a" :href="localizedUrl('/docs/mulmochat')" variant="default" size="sm">
              {{ t("docs.readMore") }}
            </Button>
          </CardFooter>
        </Card>

        <!-- Back Button -->
        <div class="text-center">
          <Button as="a" :href="localizedUrl('/')" variant="outline">
            {{ t("docs.backButton") }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import Navigation from "../../components/Navigation.vue";
import { useLocalizedUrl } from "../../i18n/utils";
import { Terminal, Monitor, Package, Sparkles, MessageCircle } from "lucide-vue-next";

const { t } = useI18n();
const localizedUrl = useLocalizedUrl();
</script>
