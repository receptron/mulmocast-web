<template>
  <div class="min-h-screen">
    <Navigation />
    <div class="flex items-center justify-center p-4">
      <div class="w-full max-w-3xl space-y-8 py-8">
        <!-- Hero -->
        <div class="text-center">
          <h1 class="text-foreground text-3xl font-extrabold sm:text-5xl md:text-6xl">{{ t("home.hero.title") }}</h1>
          <p class="text-muted-foreground mt-4 text-lg">{{ t("home.hero.subtitle") }}</p>
        </div>

        <!-- Four flagship apps -->
        <div class="grid gap-5 sm:grid-cols-2">
          <a
            v-for="product in products"
            :key="product.id"
            :href="localizedUrl(`/${product.id}`)"
            class="group border-muted bg-card hover:border-primary/40 hover:bg-muted/50 flex flex-col rounded-2xl border p-6 transition-colors"
          >
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <component :is="iconFor(product.icon)" class="text-primary h-6 w-6" />
              </div>
              <div>
                <h2 class="group-hover:text-primary text-xl font-bold transition-colors">
                  {{ t(`products.${product.id}.title`) }}
                </h2>
                <p class="text-muted-foreground text-sm">{{ t(`products.${product.id}.tagline`) }}</p>
              </div>
            </div>
            <p class="text-muted-foreground mt-4 flex-1 text-sm">{{ t(`products.${product.id}.lead`) }}</p>
            <span class="text-primary mt-4 inline-flex items-center gap-1 text-sm font-medium">
              {{ t("home.learnMore") }}
              <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>

        <!-- Explore the whole family -->
        <Card class="hover:bg-muted/50">
          <CardContent
            class="flex flex-col items-center gap-3 pt-6 text-center sm:flex-row sm:justify-between sm:text-left"
          >
            <div>
              <h2 class="text-lg font-bold">{{ t("home.family.title") }}</h2>
              <p class="text-muted-foreground text-sm">{{ t("home.family.description") }}</p>
            </div>
            <Button as="a" :href="localizedUrl('/family')" variant="outline" class="shrink-0">
              {{ t("home.family.button") }}
            </Button>
          </CardContent>
        </Card>

        <!-- Discord & FAQ -->
        <Card class="border-primary/20 bg-primary/5">
          <CardContent class="pt-6">
            <div class="space-y-4 text-center">
              <h2 class="text-xl font-bold">{{ t("home.support.title") }}</h2>
              <p class="text-muted-foreground">{{ t("home.support.description") }}</p>
              <div class="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  as="a"
                  href="https://discord.gg/XqmAYxm2Xf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full sm:w-auto"
                >
                  <svg class="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"
                    />
                  </svg>
                  {{ t("home.support.joinDiscord") }}
                </Button>
                <Button as="a" :href="localizedUrl('/faq')" variant="outline" class="w-full sm:w-auto">
                  {{ t("home.support.viewFaq") }}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Links -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("home.links.title") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-3">
              <a
                v-for="link in socialLinks"
                :key="link.label"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="text-foreground hover:text-primary flex cursor-pointer items-center gap-3 transition-colors hover:underline"
              >
                <component :is="link.icon" class="h-5 w-5" />
                <span>{{ link.label }}</span>
              </a>
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
import { ArrowRight, Clapperboard, Mic, Brain, LayoutGrid, Github, MessageCircle, Twitter } from "lucide-vue-next";
import { listProducts } from "./products/products";

const { t } = useI18n();
const localizedUrl = useLocalizedUrl();

const products = listProducts();

const ICONS: Record<string, Component> = { Clapperboard, Mic, Brain, LayoutGrid };
const iconFor = (name: string): Component | undefined => ICONS[name];

const socialLinks = computed<Array<{ label: string; href: string; icon: Component }>>(() => [
  { label: t("home.links.twitter"), href: "https://x.com/mulmocast", icon: Twitter },
  { label: t("home.links.discord"), href: "https://discord.gg/XqmAYxm2Xf", icon: MessageCircle },
  { label: t("home.links.githubApp"), href: "https://github.com/receptron/mulmocast-app", icon: Github },
  { label: t("home.links.githubCli"), href: "https://github.com/receptron/mulmocast-cli", icon: Github },
]);
</script>
