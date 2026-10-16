<template>
  <div class="min-h-screen">
    <Navigation />
    <div v-if="product" class="flex items-center justify-center p-4">
      <div class="w-full max-w-2xl space-y-6 py-8">
        <!-- Hero -->
        <div class="text-center">
          <div class="bg-primary/10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl">
            <component :is="iconComponent" class="text-primary h-8 w-8" />
          </div>
          <h1 class="text-foreground mt-4 text-3xl font-extrabold sm:text-4xl">{{ base("title") }}</h1>
          <p class="text-primary mt-2 text-lg font-semibold">{{ base("tagline") }}</p>
          <p class="text-muted-foreground mt-4 text-lg">{{ base("lead") }}</p>
        </div>

        <!-- Primary actions -->
        <div class="flex flex-wrap justify-center gap-3">
          <Button
            v-for="link in product.links"
            :key="link.kind"
            as="a"
            v-bind="linkAttrs(link)"
            :variant="linkVariant(link)"
            size="sm"
          >
            <component v-if="linkIcon(link)" :is="linkIcon(link)" class="mr-2 h-4 w-4" />
            {{ t(`products.links.${link.kind}`) }}
          </Button>
        </div>

        <!-- Install command -->
        <div v-if="product.install" class="bg-muted rounded-lg p-4 text-center">
          <code class="text-sm">{{ product.install }}</code>
        </div>

        <!-- What it is -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ base("introTitle") }}</CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground space-y-4">
            <p v-for="(paragraph, index) in introParagraphs" :key="index">{{ rt(paragraph) }}</p>
          </CardContent>
        </Card>

        <!-- Key features -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ base("featuresTitle") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="text-muted-foreground list-disc space-y-2 pl-5">
              <li v-for="(feature, index) in features" :key="index">{{ rt(feature) }}</li>
            </ul>
          </CardContent>
        </Card>

        <!-- Videos -->
        <Card v-for="videoId in product.videoIds" :key="videoId" class="hover:bg-muted/50">
          <CardContent class="pt-6">
            <div class="aspect-video w-full">
              <iframe
                class="h-full w-full rounded-lg"
                :src="`https://www.youtube.com/embed/${videoId}`"
                title="YouTube video player"
                frameborder="0"
                allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                  web-share;
                "
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </CardContent>
        </Card>

        <!-- MulmoCast download & install guides -->
        <MulmoCastDownload v-if="product.id === 'mulmocast'" />

        <!-- Explore the family -->
        <Card class="border-primary/20 bg-primary/5">
          <CardContent class="space-y-3 pt-6 text-center">
            <p class="text-muted-foreground">{{ t("products.familyPrompt") }}</p>
            <div class="flex flex-wrap justify-center gap-3">
              <Button as="a" :href="localizedUrl('/')" variant="outline" size="sm">{{ t("products.backHome") }}</Button>
              <Button as="a" :href="localizedUrl('/family')" variant="default" size="sm">{{
                t("products.seeFamily")
              }}</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type Component } from "vue";
import { useI18n } from "vue-i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation.vue";
import { useLocalizedUrl } from "@/i18n/utils";
import {
  Clapperboard,
  Mic,
  Brain,
  LayoutGrid,
  Github,
  Package,
  BookOpen,
  Download,
  ExternalLink,
} from "lucide-vue-next";
import { getProduct, type ProductDef, type ProductLink } from "./products";
import MulmoCastDownload from "./MulmoCastDownload.vue";

const props = defineProps<{ id: string }>();

const { t, tm, rt } = useI18n();
const localizedUrl = useLocalizedUrl();

const product = computed<ProductDef | undefined>(() => getProduct(props.id));

const base = (key: string): string => t(`products.${props.id}.${key}`);

const introParagraphs = computed(() => tm(`products.${props.id}.intro`));
const features = computed(() => tm(`products.${props.id}.features`));

const ICONS: Record<string, Component> = { Clapperboard, Mic, Brain, LayoutGrid };
const iconComponent = computed<Component | undefined>(() => (product.value ? ICONS[product.value.icon] : undefined));

const LINK_ICONS: Record<ProductLink["kind"], Component> = {
  npm: Package,
  github: Github,
  docs: BookOpen,
  guide: ExternalLink,
  download: Download,
};
const linkIcon = (link: ProductLink): Component => LINK_ICONS[link.kind];

const isExternal = (link: ProductLink): link is { kind: "npm" | "github" | "guide"; url: string } =>
  link.kind === "npm" || link.kind === "github" || link.kind === "guide";

const linkAttrs = (link: ProductLink): Record<string, string> =>
  isExternal(link)
    ? { href: link.url, target: "_blank", rel: "noopener noreferrer" }
    : { href: localizedUrl(link.path) };

const linkVariant = (link: ProductLink): "default" | "outline" =>
  link.kind === "download" || link.kind === "docs" ? "default" : "outline";
</script>
