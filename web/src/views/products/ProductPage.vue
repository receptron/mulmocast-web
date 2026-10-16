<template>
  <div v-if="product" class="min-h-screen">
    <Navigation />

    <!-- Hero -->
    <section class="relative overflow-hidden bg-neutral-950 text-white">
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute -top-24 left-1/4 h-96 w-96 rounded-full blur-3xl" :class="heroGlow"></div>
      </div>
      <div
        class="relative mx-auto grid max-w-5xl items-center gap-10 px-6 py-14 lg:py-16"
        :class="isOverview ? 'lg:grid-cols-2' : ''"
      >
        <div>
          <div class="flex items-center gap-3">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl" :class="accent.iconBox">
              <component :is="iconComponent" class="h-6 w-6" />
            </div>
            <span v-if="!isOverview" class="text-sm font-semibold text-white/60">{{ base("title") }}</span>
          </div>
          <h1 class="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {{ isOverview ? base("title") : sectionLabel }}
          </h1>
          <p class="mt-2 text-lg font-semibold" :class="accent.text">{{ base("tagline") }}</p>
          <p class="mt-4 text-white/70">{{ isOverview ? base("lead") : sectionLead }}</p>

          <div class="mt-6 flex flex-wrap gap-3">
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

          <div v-if="product.install" class="mt-5 inline-flex rounded-lg bg-white/10 px-4 py-2">
            <code class="text-sm text-white/90">{{ product.install }}</code>
          </div>
        </div>

        <div v-if="isOverview" class="relative">
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

    <!-- Product sub-navigation -->
    <nav
      class="border-border bg-background/95 supports-[backdrop-filter]:bg-background/70 sticky top-0 z-10 border-b backdrop-blur"
    >
      <div class="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4">
        <a
          v-for="tab in sections"
          :key="tab.key"
          :href="sectionHref(tab)"
          class="flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors"
          :class="
            tab.key === sectionKey
              ? 'border-primary text-foreground'
              : 'text-muted-foreground hover:text-foreground border-transparent'
          "
        >
          <component :is="tabIcon(tab.icon)" class="h-4 w-4" />
          {{ t(`products.sections.${tab.labelKey}`) }}
        </a>
      </div>
    </nav>

    <div class="mx-auto max-w-3xl space-y-12 px-6 py-14">
      <!-- OVERVIEW -->
      <template v-if="sectionKey === 'overview'">
        <section>
          <h2 class="text-foreground text-2xl font-bold">{{ base("introTitle") }}</h2>
          <div class="text-muted-foreground mt-4 space-y-4 leading-relaxed">
            <p v-for="(paragraph, index) in introParagraphs" :key="index">{{ rt(paragraph) }}</p>
          </div>
        </section>

        <section>
          <div class="grid gap-3 sm:grid-cols-3">
            <a
              v-for="tab in subPages"
              :key="tab.key"
              :href="sectionHref(tab)"
              class="group border-border bg-card hover:bg-muted/50 flex flex-col gap-2 rounded-2xl border p-5 transition-colors"
            >
              <component :is="tabIcon(tab.icon)" class="h-5 w-5" :class="accent.text" />
              <span class="text-foreground font-semibold">{{ t(`products.sections.${tab.labelKey}`) }}</span>
              <span class="text-muted-foreground inline-flex items-center gap-1 text-sm">
                {{ t("products.open") }}
                <ArrowRight class="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </section>

        <section v-if="product.videoIds.length" class="space-y-6">
          <div
            v-for="videoId in product.videoIds"
            :key="videoId"
            class="aspect-video w-full overflow-hidden rounded-2xl"
          >
            <iframe
              class="h-full w-full"
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
        </section>

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
      </template>

      <!-- FEATURES -->
      <section v-else-if="sectionKey === 'features'">
        <ul class="space-y-4">
          <li
            v-for="(feature, index) in features"
            :key="index"
            class="border-border bg-card flex items-start gap-3 rounded-2xl border p-5"
          >
            <Check class="mt-0.5 h-5 w-5 shrink-0" :class="accent.text" />
            <span class="text-foreground">{{ rt(feature) }}</span>
          </li>
        </ul>
      </section>

      <!-- USE CASES -->
      <section v-else-if="sectionKey === 'use-cases'">
        <div class="grid gap-5 sm:grid-cols-3">
          <div v-for="(useCase, index) in useCases" :key="index" class="border-border bg-card rounded-2xl border p-6">
            <div class="mb-3 h-1 w-8 rounded-full" :class="accent.dot"></div>
            <h3 class="text-foreground font-semibold">{{ rt(useCase.title) }}</h3>
            <p class="text-muted-foreground mt-2 text-sm leading-relaxed">{{ rt(useCase.body) }}</p>
          </div>
        </div>
      </section>

      <!-- GETTING STARTED -->
      <template v-else-if="sectionKey === 'getting-started'">
        <section v-if="prerequisites.length">
          <h2 class="text-foreground text-xl font-bold">{{ t("products.prerequisitesTitle") }}</h2>
          <ul class="text-muted-foreground mt-4 list-disc space-y-2 pl-5">
            <li v-for="(item, index) in prerequisites" :key="index">{{ rt(item) }}</li>
          </ul>
        </section>

        <section>
          <h2 class="text-foreground text-xl font-bold">{{ t("products.stepsTitle") }}</h2>
          <ol class="mt-4 space-y-3">
            <li v-for="(step, index) in steps" :key="index" class="flex items-start gap-3">
              <span
                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                :class="accent.dot"
              >
                {{ index + 1 }}
              </span>
              <span class="text-muted-foreground pt-0.5">{{ rt(step) }}</span>
            </li>
          </ol>
        </section>

        <MulmoCastDownload v-if="product.id === 'mulmocast'" />
      </template>

      <!-- FAQ -->
      <section v-else-if="sectionKey === 'faq'">
        <dl class="divide-border divide-y">
          <div v-for="(item, index) in faq" :key="index" class="py-5 first:pt-0">
            <dt class="text-foreground flex items-start gap-3 font-semibold">
              <HelpCircle class="mt-0.5 h-5 w-5 shrink-0" :class="accent.text" />
              <span>{{ rt(item.q) }}</span>
            </dt>
            <dd class="text-muted-foreground mt-2 pl-8 leading-relaxed">{{ rt(item.a) }}</dd>
          </div>
        </dl>
      </section>

      <!-- Common footer: related apps + explore -->
      <section>
        <h2 class="text-foreground text-xl font-bold">{{ t("products.relatedTitle") }}</h2>
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

      <section>
        <h2 class="text-foreground text-xl font-bold">{{ t("products.exploreTitle") }}</h2>
        <p class="text-muted-foreground mt-2">{{ t("products.exploreSubtitle") }}</p>
        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <a
            v-for="link in exploreLinks"
            :key="link.key"
            :href="localizedUrl(link.path)"
            class="group border-border bg-card hover:bg-muted/50 flex items-center justify-between gap-3 rounded-xl border p-4 transition-colors"
          >
            <span class="text-foreground text-sm font-semibold">{{ t(`products.docLabels.${link.key}`) }}</span>
            <ArrowRight class="text-muted-foreground h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <div class="flex flex-wrap justify-center gap-3 pt-2">
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
import {
  Github,
  Package,
  BookOpen,
  Download,
  ExternalLink,
  ArrowUpRight,
  ArrowRight,
  Check,
  House,
  Sparkles,
  Lightbulb,
  Rocket,
  HelpCircle,
} from "lucide-vue-next";
import { getProduct, listProducts, RESOURCES, type ProductDef, type ProductLink, type RelatedDoc } from "./products";
import { SECTIONS, toSectionKey, type SectionDef, type SectionKey } from "./productSections";
import { ACCENTS } from "./accents";
import { iconFor } from "./icons";
import MulmoCastDownload from "./MulmoCastDownload.vue";
import { useSeo, softwareAppJsonLd, faqPageJsonLd, SITE_ORIGIN } from "@/lib/seo";

const props = defineProps<{ id: string; section?: string }>();

const { t, tm, rt } = useI18n();
const localizedUrl = useLocalizedUrl();

const product = computed<ProductDef | undefined>(() => getProduct(props.id));
const sections = SECTIONS;
const subPages = SECTIONS.filter((section) => section.key !== "overview");

const sectionKey = computed<SectionKey>(() => toSectionKey(props.section));
const isOverview = computed(() => sectionKey.value === "overview");
const sectionDef = computed<SectionDef>(
  () => SECTIONS.find((section) => section.key === sectionKey.value) ?? SECTIONS[0],
);

const base = (key: string): string => t(`products.${props.id}.${key}`);

const introParagraphs = computed(() => tm(`products.${props.id}.intro`));
const features = computed(() => tm(`products.${props.id}.features`));
const useCases = computed(() => tm(`products.${props.id}.useCases`));
const steps = computed(() => tm(`products.${props.id}.steps`));
const prerequisites = computed(() => tm(`products.${props.id}.prerequisites`));
const faq = computed(() => tm(`products.${props.id}.faq`));
const faqEntries = computed(() =>
  faq.value.map((item: { q: string; a: string }) => ({ question: rt(item.q), answer: rt(item.a) })),
);

const sectionLabel = computed(() => t(`products.sections.${sectionDef.value.labelKey}`));
const sectionLead = computed(() => t(`products.sections.${sectionDef.value.labelKey}Lead`, { name: base("title") }));

const sectionHref = (section: SectionDef): string =>
  localizedUrl(section.slug ? `/${props.id}/${section.slug}` : `/${props.id}`);

const accent = computed(() => ACCENTS[product.value ? product.value.accent : "violet"]);
const heroGlow = computed(() => `${accent.value.glow} bg-gradient-to-br to-transparent`);
const iconComponent = computed<Component | undefined>(() => (product.value ? iconFor(product.value.icon) : undefined));

const siblings = computed<ProductDef[]>(() => listProducts().filter((candidate) => candidate.id !== props.id));

const exploreLinks = computed<RelatedDoc[]>(() => [
  ...(product.value ? product.value.relatedDocs : []),
  { path: "/family", key: "family" },
  { path: "/faq", key: "faq" },
]);

const TAB_ICONS: Record<string, Component> = { House, Sparkles, Lightbulb, Rocket, HelpCircle };
const tabIcon = (name: string): Component | undefined => TAB_ICONS[name];

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

const seoTitle = computed(() =>
  isOverview.value
    ? `${base("title")} — ${base("tagline")} | Mulmo Family`
    : `${base("title")} ${sectionLabel.value} | Mulmo Family`,
);
const seoPath = computed(() => (sectionDef.value.slug ? `/${props.id}/${sectionDef.value.slug}` : `/${props.id}`));

useSeo({
  title: seoTitle.value,
  description: isOverview.value ? base("lead") : sectionLead.value,
  path: seoPath.value,
  image: product.value?.image,
  jsonLd:
    sectionKey.value === "faq"
      ? faqPageJsonLd(faqEntries.value)
      : softwareAppJsonLd(base("title"), base("lead"), `${SITE_ORIGIN}/${props.id}`),
});
</script>
