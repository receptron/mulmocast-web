<template>
  <div class="min-h-screen">
    <Navigation />

    <!-- Hero -->
    <section class="relative overflow-hidden bg-neutral-950 text-white">
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl"></div>
        <div class="absolute -top-10 right-0 h-80 w-80 rounded-full bg-rose-600/20 blur-3xl"></div>
        <div class="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl"></div>
      </div>
      <div class="relative mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">
        <a
          :href="RESOURCES.singularitySociety"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-sm text-white/80 ring-1 ring-white/15 transition-colors hover:bg-white/10"
        >
          <Sparkles class="h-3.5 w-3.5" />
          {{ t("home.hero.eyebrow") }}
        </a>
        <h1 class="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          <span class="bg-gradient-to-r from-rose-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
            {{ t("home.hero.title") }}
          </span>
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg text-white/70 sm:text-xl">{{ t("home.hero.subtitle") }}</p>
        <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#apps"
            class="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-transform hover:scale-105"
          >
            {{ t("home.hero.ctaApps") }}
            <ArrowDown class="h-4 w-4" />
          </a>
          <a
            :href="RESOURCES.visionArticle"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/10"
          >
            {{ t("home.hero.ctaVision") }}
            <ArrowUpRight class="h-4 w-4" />
          </a>
        </div>
        <div class="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/50">
          <span v-for="product in products" :key="product.id" class="inline-flex items-center gap-2">
            <span class="h-2 w-2 rounded-full" :class="ACCENTS[product.accent].dot"></span>
            {{ t(`products.${product.id}.title`) }}
          </span>
        </div>
      </div>
    </section>

    <div class="mx-auto max-w-5xl space-y-20 px-6 py-16">
      <!-- Flagship apps -->
      <section id="apps" class="scroll-mt-20">
        <div class="mb-10 text-center">
          <h2 class="text-foreground text-3xl font-bold">{{ t("home.apps.title") }}</h2>
          <p class="text-muted-foreground mx-auto mt-3 max-w-2xl">{{ t("home.apps.subtitle") }}</p>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <a
            v-for="product in products"
            :key="product.id"
            :href="localizedUrl(`/${product.id}`)"
            class="group border-border bg-card relative flex flex-col overflow-hidden rounded-3xl border ring-1 ring-transparent transition-all hover:-translate-y-1 hover:shadow-xl"
            :class="ACCENTS[product.accent].ring"
          >
            <div class="relative aspect-video overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br to-transparent opacity-60"
                :class="ACCENTS[product.accent].glow"
              ></div>
              <img
                :src="product.image"
                :alt="`${t(`products.${product.id}.title`)} ${t('home.apps.screenshotAlt')}`"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div class="flex flex-1 flex-col p-6">
              <div class="flex items-center gap-3">
                <div
                  class="flex h-11 w-11 items-center justify-center rounded-xl"
                  :class="ACCENTS[product.accent].iconBox"
                >
                  <component :is="iconFor(product.icon)" class="h-6 w-6" />
                </div>
                <div>
                  <h3 class="text-lg font-bold">{{ t(`products.${product.id}.title`) }}</h3>
                  <p class="text-sm" :class="ACCENTS[product.accent].text">{{ t(`products.${product.id}.tagline`) }}</p>
                </div>
              </div>
              <p class="text-muted-foreground mt-4 flex-1 text-sm">{{ t(`products.${product.id}.lead`) }}</p>
              <span
                class="mt-5 inline-flex items-center gap-1 text-sm font-semibold"
                :class="ACCENTS[product.accent].text"
              >
                {{ t("home.learnMore") }}
                <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </a>
        </div>
      </section>

      <!-- Which one is for you -->
      <section>
        <div class="mb-8 text-center">
          <h2 class="text-foreground text-3xl font-bold">{{ t("home.picker.title") }}</h2>
          <p class="text-muted-foreground mx-auto mt-3 max-w-2xl">{{ t("home.picker.subtitle") }}</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <a
            v-for="product in products"
            :key="product.id"
            :href="localizedUrl(`/${product.id}`)"
            class="group border-border bg-card hover:bg-muted/50 flex items-start gap-4 rounded-2xl border p-5 transition-colors"
          >
            <div
              class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
              :class="ACCENTS[product.accent].iconBox"
            >
              <component :is="iconFor(product.icon)" class="h-5 w-5" />
            </div>
            <div>
              <p class="text-foreground font-semibold">
                {{ t(`home.picker.${product.id}.need`) }}
              </p>
              <p class="text-muted-foreground mt-1 text-sm">
                <span class="font-medium" :class="ACCENTS[product.accent].text">{{
                  t(`products.${product.id}.title`)
                }}</span>
                — {{ t(`home.picker.${product.id}.reason`) }}
              </p>
            </div>
          </a>
        </div>
      </section>

      <!-- Vision / one direction -->
      <section class="relative overflow-hidden rounded-3xl bg-neutral-950 px-8 py-12 text-white sm:px-12">
        <div
          class="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl"
        ></div>
        <div class="relative max-w-2xl">
          <span class="text-sm font-semibold text-violet-300">{{ t("home.vision.eyebrow") }}</span>
          <h2 class="mt-3 text-3xl font-bold">{{ t("home.vision.title") }}</h2>
          <p class="mt-4 text-white/70">{{ t("home.vision.body") }}</p>
          <a
            :href="RESOURCES.visionArticle"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition-transform hover:scale-105"
          >
            {{ t("home.vision.cta") }}
            <ArrowUpRight class="h-4 w-4" />
          </a>
        </div>
      </section>

      <!-- The whole family -->
      <section>
        <div class="mb-8 text-center">
          <h2 class="text-foreground text-3xl font-bold">{{ t("home.familyAll.title") }}</h2>
          <p class="text-muted-foreground mx-auto mt-3 max-w-2xl">{{ t("home.familyAll.subtitle") }}</p>
        </div>
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <a
            v-for="tool in familyTools"
            :key="tool.i18nKey"
            :href="tool.external ? tool.href : localizedUrl(tool.href)"
            :target="tool.external ? '_blank' : undefined"
            :rel="tool.external ? 'noopener noreferrer' : undefined"
            class="group border-border bg-card hover:border-primary/40 hover:bg-muted/50 flex items-center gap-3 rounded-xl border p-4 transition-colors"
          >
            <div class="bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
              <component :is="iconFor(tool.icon)" class="h-5 w-5" />
            </div>
            <div class="min-w-0">
              <p class="text-foreground truncate text-sm font-semibold">{{ t(`family.${tool.i18nKey}.title`) }}</p>
              <p class="text-muted-foreground truncate text-xs">{{ t(`family.${tool.i18nKey}.tagline`) }}</p>
            </div>
          </a>
        </div>
        <div class="mt-6 text-center">
          <Button as="a" :href="localizedUrl('/family')" variant="outline">{{ t("home.familyAll.button") }}</Button>
        </div>
      </section>

      <!-- Resources & community -->
      <section>
        <div class="mb-8 text-center">
          <h2 class="text-foreground text-3xl font-bold">{{ t("home.resources.title") }}</h2>
          <p class="text-muted-foreground mx-auto mt-3 max-w-2xl">{{ t("home.resources.subtitle") }}</p>
        </div>
        <div class="grid gap-3 sm:grid-cols-2">
          <a
            v-for="resource in resourceLinks"
            :key="resource.label"
            :href="resource.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group border-border bg-card hover:bg-muted/50 flex items-center justify-between gap-3 rounded-xl border p-4 transition-colors"
          >
            <div class="flex items-center gap-3">
              <component
                :is="resource.icon"
                class="text-muted-foreground group-hover:text-foreground h-5 w-5 transition-colors"
              />
              <div>
                <p class="text-foreground text-sm font-semibold">{{ resource.label }}</p>
                <p class="text-muted-foreground text-xs">{{ resource.description }}</p>
              </div>
            </div>
            <ArrowUpRight class="text-muted-foreground h-4 w-4 shrink-0" />
          </a>
        </div>
      </section>

      <!-- Support -->
      <Card class="border-primary/20 bg-primary/5">
        <CardContent class="pt-6">
          <div class="space-y-4 text-center">
            <h2 class="text-xl font-bold">{{ t("home.support.title") }}</h2>
            <p class="text-muted-foreground">{{ t("home.support.description") }}</p>
            <div class="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                as="a"
                :href="RESOURCES.discord"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full sm:w-auto"
              >
                {{ t("home.support.joinDiscord") }}
              </Button>
              <Button as="a" :href="localizedUrl('/faq')" variant="outline" class="w-full sm:w-auto">
                {{ t("home.support.viewFaq") }}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type Component } from "vue";
import { useI18n } from "vue-i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation.vue";
import { useLocalizedUrl } from "@/i18n/utils";
import {
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  Github,
  MessageCircle,
  Twitter,
  BookText,
} from "lucide-vue-next";
import { listProducts, FAMILY_TOOLS, RESOURCES } from "./products/products";
import { ACCENTS } from "./products/accents";
import { iconFor } from "./products/icons";
import { useSeo } from "@/lib/seo";

const { t } = useI18n();
const localizedUrl = useLocalizedUrl();

const products = listProducts();
const familyTools = FAMILY_TOOLS;

const resourceLinks = computed<Array<{ label: string; description: string; href: string; icon: Component }>>(() => [
  {
    label: t("home.resources.ssName"),
    description: t("home.resources.ssDesc"),
    href: RESOURCES.singularitySociety,
    icon: BookText,
  },
  {
    label: t("home.resources.zennName"),
    description: t("home.resources.zennDesc"),
    href: RESOURCES.zenn,
    icon: BookText,
  },
  {
    label: t("home.resources.githubName"),
    description: t("home.resources.githubDesc"),
    href: RESOURCES.githubOrg,
    icon: Github,
  },
  {
    label: t("home.resources.discordName"),
    description: t("home.resources.discordDesc"),
    href: RESOURCES.discord,
    icon: MessageCircle,
  },
  {
    label: t("home.resources.xName"),
    description: t("home.resources.xDesc"),
    href: RESOURCES.xMulmocast,
    icon: Twitter,
  },
]);

useSeo({
  title: `${t("home.hero.title")} — ${t("home.seoTagline")}`,
  description: t("home.seoDescription"),
  path: "/",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mulmo Family",
    url: "https://mulmocast.com/",
    publisher: { "@type": "Organization", name: "Singularity Society", url: "https://singularitysociety.org/" },
  },
});
</script>
