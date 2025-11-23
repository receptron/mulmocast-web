<template>
  <div class="min-h-screen">
    <Navigation />

    <!-- Toast Notification -->
    <div
      v-if="showToast"
      class="bg-background fixed top-20 right-4 z-50 rounded-lg border px-4 py-3 shadow-lg transition-all duration-300"
      :class="toastVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'"
    >
      <div class="flex items-center gap-2">
        <svg class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="text-sm">{{ t("faq.linkCopied") }}</span>
      </div>
    </div>

    <div class="flex items-center justify-center p-4">
      <div class="w-full max-w-2xl space-y-6 py-8">
        <!-- Header -->
        <div class="text-center">
          <h1 class="text-foreground text-3xl font-extrabold sm:text-5xl md:text-6xl">{{ t("faq.title") }}</h1>
          <p class="text-muted-foreground mt-4 text-lg">{{ t("faq.subtitle") }}</p>
        </div>

        <!-- FAQ Items -->
        <Card id="what-is-mulmocast" class="hover:bg-muted/50 scroll-mt-20">
          <CardHeader>
            <CardTitle class="flex items-center justify-between gap-2">
              <a href="#what-is-mulmocast" class="hover:text-primary flex-1">{{ t("faq.items.0.question") }}</a>
              <button
                @click="copyLink('#what-is-mulmocast')"
                class="text-muted-foreground hover:text-foreground hover:bg-muted flex-shrink-0 rounded p-2 transition-colors"
                :title="t('faq.copyLink')"
              >
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{ t("faq.items.0.answer") }}
            </p>
          </CardContent>
        </Card>

        <Card id="pricing" class="hover:bg-muted/50 scroll-mt-20">
          <CardHeader>
            <CardTitle class="flex items-center justify-between gap-2">
              <a href="#pricing" class="hover:text-primary flex-1">{{ t("faq.items.1.question") }}</a>
              <button
                @click="copyLink('#pricing')"
                class="text-muted-foreground hover:text-foreground hover:bg-muted flex-shrink-0 rounded p-2 transition-colors"
                :title="t('faq.copyLink')"
              >
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground whitespace-pre-line">
              {{ t("faq.items.1.answer") }}
            </p>
          </CardContent>
        </Card>

        <Card id="platforms" class="hover:bg-muted/50 scroll-mt-20">
          <CardHeader>
            <CardTitle class="flex items-center justify-between gap-2">
              <a href="#platforms" class="hover:text-primary flex-1">{{ t("faq.items.2.question") }}</a>
              <button
                @click="copyLink('#platforms')"
                class="text-muted-foreground hover:text-foreground hover:bg-muted flex-shrink-0 rounded p-2 transition-colors"
                :title="t('faq.copyLink')"
              >
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{ t("faq.items.2.answer") }}
            </p>
          </CardContent>
        </Card>

        <Card id="use-cases" class="hover:bg-muted/50 scroll-mt-20">
          <CardHeader>
            <CardTitle class="flex items-center justify-between gap-2">
              <a href="#use-cases" class="hover:text-primary flex-1">{{ t("faq.items.3.question") }}</a>
              <button
                @click="copyLink('#use-cases')"
                class="text-muted-foreground hover:text-foreground hover:bg-muted flex-shrink-0 rounded p-2 transition-colors"
                :title="t('faq.copyLink')"
              >
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{ t("faq.items.3.answer") }}
            </p>
          </CardContent>
        </Card>

        <Card id="image-generation-error" class="hover:bg-muted/50 scroll-mt-20">
          <CardHeader>
            <CardTitle class="flex items-center justify-between gap-2">
              <a href="#image-generation-error" class="hover:text-primary flex-1">{{ t("faq.items.4.question") }}</a>
              <button
                @click="copyLink('#image-generation-error')"
                class="text-muted-foreground hover:text-foreground hover:bg-muted flex-shrink-0 rounded p-2 transition-colors"
                :title="t('faq.copyLink')"
              >
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground whitespace-pre-line">
              {{ t("faq.items.4.answer") }}
            </p>
          </CardContent>
        </Card>

        <Card id="organization-verification" class="hover:bg-muted/50 scroll-mt-20">
          <CardHeader>
            <CardTitle class="flex items-center justify-between gap-2">
              <a href="#organization-verification" class="hover:text-primary flex-1">{{ t("faq.items.5.question") }}</a>
              <button
                @click="copyLink('#organization-verification')"
                class="text-muted-foreground hover:text-foreground hover:bg-muted flex-shrink-0 rounded p-2 transition-colors"
                :title="t('faq.copyLink')"
              >
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            <p>
              {{ t("faq.items.5.answer") }}
            </p>
            <p class="mt-2 font-semibold">{{ t("faq.items.5.stepsLabel") }}</p>
            <ul class="list-disc space-y-2 pl-5">
              <li>
                <i18n-t keypath="faq.items.5.steps.0" tag="span">
                  <template #organizationSettingsPage>
                    <a
                      href="https://platform.openai.com/settings/organization/general"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-primary hover:underline"
                    >
                      {{ t("faq.items.5.organizationSettingsPageText") }}
                    </a>
                  </template>
                </i18n-t>
              </li>
              <li>
                {{ t("faq.items.5.steps.1") }}
              </li>
            </ul>
            <p class="mt-4">{{ t("faq.items.5.note") }}</p>
            <p class="mt-4">
              <i18n-t keypath="faq.items.5.support" tag="span">
                <template #openaiSupport>
                  <a
                    href="https://help.openai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-primary hover:underline"
                  >
                    {{ t("faq.items.5.openaiSupportText") }}
                  </a>
                </template>
              </i18n-t>
            </p>

            <div class="mt-6">
              <p class="font-semibold">{{ t("faq.items.5.alternative.title") }}</p>
              <p class="mt-2">{{ t("faq.items.5.alternative.description") }}</p>
              <p class="mt-2 font-semibold">{{ t("faq.items.5.alternative.stepsLabel") }}</p>
              <ul class="list-disc space-y-1 pl-5">
                <li>{{ t("faq.items.5.alternative.steps.0") }}</li>
                <li>{{ t("faq.items.5.alternative.steps.1") }}</li>
                <li>{{ t("faq.items.5.alternative.steps.2") }}</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card id="video-quality" class="hover:bg-muted/50 scroll-mt-20">
          <CardHeader>
            <CardTitle class="flex items-center justify-between gap-2">
              <a href="#video-quality" class="hover:text-primary flex-1">{{ t("faq.items.6.question") }}</a>
              <button
                @click="copyLink('#video-quality')"
                class="text-muted-foreground hover:text-foreground hover:bg-muted flex-shrink-0 rounded p-2 transition-colors"
                :title="t('faq.copyLink')"
              >
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            <p class="whitespace-pre-line">
              {{ t("faq.items.6.answer") }}
            </p>
            <ul class="mt-4 list-disc space-y-2 pl-5">
              <li>{{ t("faq.items.6.methods.0") }}</li>
              <li>{{ t("faq.items.6.methods.1") }}</li>
            </ul>
          </CardContent>
        </Card>

        <Card id="still-image-issue" class="hover:bg-muted/50 scroll-mt-20">
          <CardHeader>
            <CardTitle class="flex items-center justify-between gap-2">
              <a href="#still-image-issue" class="hover:text-primary flex-1">{{ t("faq.items.7.question") }}</a>
              <button
                @click="copyLink('#still-image-issue')"
                class="text-muted-foreground hover:text-foreground hover:bg-muted flex-shrink-0 rounded p-2 transition-colors"
                :title="t('faq.copyLink')"
              >
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            <p class="whitespace-pre-line">
              {{ t("faq.items.7.answer") }}
            </p>
            <ul class="mt-4 list-disc space-y-2 pl-5">
              <li>{{ t("faq.items.7.methods.0") }}</li>
              <li>{{ t("faq.items.7.methods.1") }}</li>
            </ul>
          </CardContent>
        </Card>

        <Card id="no-narration-slide" class="hover:bg-muted/50 scroll-mt-20">
          <CardHeader>
            <CardTitle class="flex items-center justify-between gap-2">
              <a href="#no-narration-slide" class="hover:text-primary flex-1">{{ t("faq.items.8.question") }}</a>
              <button
                @click="copyLink('#no-narration-slide')"
                class="text-muted-foreground hover:text-foreground hover:bg-muted flex-shrink-0 rounded p-2 transition-colors"
                :title="t('faq.copyLink')"
              >
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            <p class="whitespace-pre-line">
              {{ t("faq.items.8.answer") }}
            </p>
            <ul class="mt-4 list-disc space-y-2 pl-5">
              <li>{{ t("faq.items.8.steps.0") }}</li>
              <li>{{ t("faq.items.8.steps.1") }}</li>
              <li>{{ t("faq.items.8.steps.2") }}</li>
            </ul>
            <p class="mt-4 font-semibold">{{ t("faq.items.8.exampleLabel") }}</p>
            <pre class="bg-muted mt-2 overflow-x-auto rounded p-4"><code>{{ t("faq.items.8.example") }}</code></pre>
            <p class="mt-2">{{ t("faq.items.8.exampleNote") }}</p>
            <p class="mt-4 font-semibold">{{ t("faq.items.8.noteLabel") }}</p>
            <p class="mt-2">{{ t("faq.items.8.note") }}</p>
          </CardContent>
        </Card>

        <Card id="movie-cutoff" class="hover:bg-muted/50 scroll-mt-20">
          <CardHeader>
            <CardTitle class="flex items-center justify-between gap-2">
              <a href="#movie-cutoff" class="hover:text-primary flex-1">{{ t("faq.items.9.question") }}</a>
              <button
                @click="copyLink('#movie-cutoff')"
                class="text-muted-foreground hover:text-foreground hover:bg-muted flex-shrink-0 rounded p-2 transition-colors"
                :title="t('faq.copyLink')"
              >
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            <p class="whitespace-pre-line">
              {{ t("faq.items.9.answer") }}
            </p>
            <ul class="mt-4 list-disc space-y-2 pl-5">
              <li>{{ t("faq.items.9.steps.0") }}</li>
              <li>{{ t("faq.items.9.steps.1") }}</li>
              <li>{{ t("faq.items.9.steps.2") }}</li>
            </ul>
            <p class="mt-4 font-semibold">{{ t("faq.items.9.exampleLabel") }}</p>
            <pre class="bg-muted mt-2 overflow-x-auto rounded p-4"><code>{{ t("faq.items.9.example") }}</code></pre>
            <p class="mt-2">{{ t("faq.items.9.exampleNote") }}</p>
            <p class="mt-4 font-semibold">{{ t("faq.items.9.noteLabel") }}</p>
            <p class="mt-2">{{ t("faq.items.9.note") }}</p>
          </CardContent>
        </Card>

        <Card id="bug-report" class="hover:bg-muted/50 scroll-mt-20">
          <CardHeader>
            <CardTitle class="flex items-center justify-between gap-2">
              <a href="#bug-report" class="hover:text-primary flex-1">{{ t("faq.items.10.question") }}</a>
              <button
                @click="copyLink('#bug-report')"
                class="text-muted-foreground hover:text-foreground hover:bg-muted flex-shrink-0 rounded p-2 transition-colors"
                :title="t('faq.copyLink')"
              >
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            <p class="whitespace-pre-line">
              {{ t("faq.items.10.answer") }}
            </p>
          </CardContent>
        </Card>

        <Card id="bgm-customization" class="hover:bg-muted/50 scroll-mt-20">
          <CardHeader>
            <CardTitle class="flex items-center justify-between gap-2">
              <a href="#bgm-customization" class="hover:text-primary flex-1">{{ t("faq.items.11.question") }}</a>
              <button
                @click="copyLink('#bgm-customization')"
                class="text-muted-foreground hover:text-foreground hover:bg-muted flex-shrink-0 rounded p-2 transition-colors"
                :title="t('faq.copyLink')"
              >
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            <p class="whitespace-pre-line">
              {{ t("faq.items.11.answer") }}
            </p>
          </CardContent>
        </Card>

        <!-- Back Button -->
        <div class="text-center">
          <Button as="a" :href="localizedUrl('/')" variant="outline"> {{ t("faq.backButton") }} </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useHead } from "@unhead/vue";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation.vue";
import { useLocalizedUrl } from "@/i18n/utils";

const { t } = useI18n();
const localizedUrl = useLocalizedUrl();

useHead({
  title: [t("faq.title"), "MulmoCast"].join(" - "),
});

// Toast notification state
const showToast = ref(false);
const toastVisible = ref(false);

// Copy link to clipboard
const copyLink = async (hash: string) => {
  const url = `${window.location.origin}${window.location.pathname}${hash}`;
  try {
    await navigator.clipboard.writeText(url);
    // Show toast notification with animation
    showToast.value = true;
    // Trigger animation after DOM update
    setTimeout(() => {
      toastVisible.value = true;
    }, 10);
    // Hide toast after 2 seconds
    setTimeout(() => {
      toastVisible.value = false;
      // Remove from DOM after animation completes
      setTimeout(() => {
        showToast.value = false;
      }, 300);
    }, 2000);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};

// Handle hash navigation on page load
onMounted(() => {
  if (window.location.hash) {
    const element = document.querySelector(window.location.hash);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }
});
</script>
