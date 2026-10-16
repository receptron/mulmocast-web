<template>
  <div v-if="product" class="min-h-screen">
    <Navigation />

    <!-- Hero -->
    <section class="relative overflow-hidden bg-neutral-950 text-white">
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute -top-24 left-1/4 h-96 w-96 rounded-full blur-3xl" :class="heroGlow"></div>
      </div>
      <div class="relative mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl" :class="accent.iconBox">
            <component :is="iconComponent" class="h-7 w-7" />
          </div>
          <h1 class="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">{{ base("title") }}</h1>
          <p class="mt-3 text-lg font-semibold" :class="accent.text">{{ base("tagline") }}</p>
          <p class="mt-5 text-white/70">{{ base("lead") }}</p>

          <div class="mt-7 flex flex-wrap gap-3">
            <a
              v-for="link in product.links"
              :key="link.kind"
              v-bind="linkAttrs(link)"
              class="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-105"
              :class="isPrimary(link) ? accent.button : 'text-white ring-1 ring-white/20 hover:bg-white/10'"
            >
              <component :is="linkIcon(link)" class="h-4 w-4" />
              {{ t(`products.links.${link.kind}`) }}
            </a>
          </div>

          <div v-if="product.install" class="mt-6 inline-flex rounded-lg bg-white/10 px-4 py-2">
            <code class="text-sm text-white/90">{{ product.install }}</code>
          </div>
        </div>

        <div class="relative">
          <div class="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <img
              :src="product.image"
              :alt="`${base('title')} ${t('products.screenshotAlt')}`"
              class="w-full"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>

    <div class="mx-auto max-w-3xl space-y-12 px-6 py-16">
      <!-- What it is -->
      <section>
        <h2 class="text-foreground text-2xl font-bold">{{ base("introTitle") }}</h2>
        <div class="text-muted-foreground mt-4 space-y-4 leading-relaxed">
          <p v-for="(paragraph, index) in introParagraphs" :key="index">{{ rt(paragraph) }}</p>
        </div>
      </section>

      <!-- Key features -->
      <section>
        <h2 class="text-foreground text-2xl font-bold">{{ base("featuresTitle") }}</h2>
        <ul class="mt-4 space-y-3">
          <li v-for="(feature, index) in features" :key="index" class="flex items-start gap-3">
            <Check class="mt-0.5 h-5 w-5 shrink-0" :class="accent.text" />
            <span class="text-muted-foreground">{{ rt(feature) }}</span>
          </li>
        </ul>
      </section>

      <!-- Videos -->
      <section v-if="product.videoIds.length" class="space-y-6">
        <div v-for="videoId in product.videoIds" :key="videoId" class="aspect-video w-full overflow-hidden rounded-2xl">
          <iframe
            class="h-full w-full"
            :src="`https://www.youtube.com/embed/${videoId}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <!-- MulmoCast download & install guides -->
      <MulmoCastDownload v-if="product.id === 'mulmocast'" />

      <!-- Vision -->
      <section class="relative overflow-hidden rounded-2xl bg-neutral-950 p-8 text-white">
        <span class="text-sm font-semibold" :class="accent.text">{{ t("products.visionEyebrow") }}</span>
        <p class="mt-2 text-white/80">{{ t("products.visionBody") }}</p>
        <a
          :href="RESOURCES.visionArticle"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-flex items-center gap-2 text-sm font-semibold"
          :class="accent.text"
        >
          {{ t("products.visionCta") }}
          <ArrowUpRight class="h-4 w-4" />
        </a>
      </section>

      <!-- Related apps -->
      <section>
        <h2 class="text-foreground text-2xl font-bold">{{ t("products.relatedTitle") }}</h2>
        <div class="mt-4 grid gap-3 sm:grid-cols-3">
          <a
            v-for="sibling in siblings"
            :key="sibling.id"
            :href="localizedUrl(`/${sibling.id}`)"
            class="group border-border bg-card hover:bg-muted/50 flex items-center gap-3 rounded-xl border p-4 transition-colors"
          >
            <div
              class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
              :class="ACCENTS[sibling.accent].iconBox"
            >
              <component :is="iconFor(sibling.icon)" class="h-5 w-5" />
            </div>
            <span class="text-foreground text-sm font-semibold">{{ t(`products.${sibling.id}.title`) }}</span>
          </a>
        </div>
      </section>

      <!-- Footer nav -->
      <div class="flex flex-wrap justify-center gap-3 pt-4">
        <Button as="a" :href="localizedUrl('/')" variant="outline" size="sm">{{ t("products.backHome") }}</Button>
        <Button as="a" :href="localizedUrl('/family')" variant="default" size="sm">{{
          t("products.seeFamily")
        }}</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type Component } from "vue";
import { useI18n } from "vue-i18n";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation.vue";
import { useLocalizedUrl } from "@/i18n/utils";
import { Github, Package, BookOpen, Download, ExternalLink, ArrowUpRight, Check } from "lucide-vue-next";
import { getProduct, listProducts, RESOURCES, type ProductDef, type ProductLink } from "./products";
import { ACCENTS } from "./accents";
import { iconFor } from "./icons";
import MulmoCastDownload from "./MulmoCastDownload.vue";
import { useSeo, softwareAppJsonLd, SITE_ORIGIN } from "@/lib/seo";

const props = defineProps<{ id: string }>();

const { t, tm, rt } = useI18n();
const localizedUrl = useLocalizedUrl();

const product = computed<ProductDef | undefined>(() => getProduct(props.id));

const base = (key: string): string => t(`products.${props.id}.${key}`);

const introParagraphs = computed(() => tm(`products.${props.id}.intro`));
const features = computed(() => tm(`products.${props.id}.features`));

const accent = computed(() => ACCENTS[product.value ? product.value.accent : "violet"]);
const heroGlow = computed(() => `${accent.value.glow} bg-gradient-to-br to-transparent`);
const iconComponent = computed<Component | undefined>(() => (product.value ? iconFor(product.value.icon) : undefined));

const siblings = computed<ProductDef[]>(() => listProducts().filter((candidate) => candidate.id !== props.id));

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

const isPrimary = (link: ProductLink): boolean =>
  link.kind === "download" || link.kind === "guide" || link.kind === "docs";

useSeo({
  title: `${base("title")} — ${base("tagline")} | Mulmo Family`,
  description: base("lead"),
  path: `/${props.id}`,
  image: product.value?.image,
  jsonLd: softwareAppJsonLd(base("title"), base("lead"), `${SITE_ORIGIN}/${props.id}`),
});
</script>
