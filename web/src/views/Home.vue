<template>
  <div class="min-h-screen">
    <Navigation />
    <div class="flex items-center justify-center p-4">
      <div class="w-full max-w-2xl space-y-6 py-8">
        <!-- Hero -->
        <div class="text-center">
          <h1 class="text-foreground text-3xl font-extrabold sm:text-5xl md:text-6xl">{{ t("home.hero.title") }}</h1>
          <p class="text-muted-foreground mt-4 text-lg">
            {{ t("home.hero.subtitle") }}<br />
            <i18n-t keypath="home.hero.description" tag="span">
              <template #emphasize>
                <span class="font-semibold">{{ t("home.hero.emphasize") }}</span>
              </template>
            </i18n-t>
          </p>
        </div>

        <!-- Discord & FAQ Links -->
        <Card class="border-primary/20 bg-primary/5">
          <CardContent class="pt-6">
            <div class="text-center space-y-4">
              <h2 class="text-xl font-bold">{{ t("home.support.title") }}</h2>
              <p class="text-muted-foreground">{{ t("home.support.description") }}</p>
              <div class="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Button as="a" href="https://discord.gg/XqmAYxm2Xf" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto">
                  <svg class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
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

        <!-- Feature Card -->
        <div class="group border-muted bg-card hover:bg-muted/50 relative rounded-2xl border p-6">
          <h2 class="mb-4 text-xl font-bold">{{ t("home.features.title") }}</h2>
          <ul class="text-muted-foreground list-disc space-y-2 pl-5">
            <li>{{ t("home.features.items.0") }}</li>
            <li>{{ t("home.features.items.1") }}</li>
            <li>{{ t("home.features.items.2") }}</li>
          </ul>
        </div>

        <!-- Use Case -->
        <div class="group border-muted bg-card hover:bg-muted/50 relative rounded-2xl border p-6">
          <h2 class="mb-2 text-xl font-bold">{{ t("home.useCases.title") }}</h2>
          <div class="text-muted-foreground group-hover:text-foreground mt-2 flex flex-col gap-2">
            <p>
              <span class="font-semibold">{{ t("home.useCases.student.label") }}</span>
              {{ t("home.useCases.student.description") }}
            </p>
            <p>
              <span class="font-semibold">{{ t("home.useCases.business.label") }}</span>
              {{ t("home.useCases.business.description") }}
            </p>
          </div>
        </div>

        <!-- Download Section -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("home.download.mac.title") }}</CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <a :href="currentMac?.updateTo?.url" class="text-primary underline">
              {{ t("home.download.mac.downloadLink", { version: currentMac?.version }) }}
            </a>
            <p class="text-muted-foreground text-sm">
              {{ t("home.download.mac.free") }}<br />
              {{ t("home.download.mac.requirement", { apiKey: t("home.download.mac.apiKey") }) }}
            </p>
          </CardContent>
          <CardFooter>
            <div class="w-full text-center">
              <Button as="a" :href="currentMac?.updateTo?.url" class="w-full">
                {{ t("home.download.mac.tryButton") }}
              </Button>
            </div>
          </CardFooter>
        </Card>

        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("home.installGuide.mac") }}</CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="aspect-video w-full">
              <iframe
                class="h-full w-full rounded-lg"
                :src="t('home.installGuide.macVideoUrl')"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </CardContent>
        </Card>

        <!-- Download Section -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("home.download.windows.title") }}</CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <a :href="winReleaseURL ?? ''" class="text-primary underline">
              {{ t("home.download.windows.downloadLink", { version: windowsVersion }) }}
            </a>
            <p class="text-muted-foreground text-sm">
              {{ t("home.download.windows.free") }}<br />
              {{ t("home.download.windows.requirement", { apiKey: t("home.download.windows.apiKey") }) }}
            </p>
          </CardContent>
          <CardFooter>
            <div class="w-full text-center">
              <Button as="a" :href="winReleaseURL ?? ''" class="w-full">
                {{ t("home.download.windows.tryButton") }}
              </Button>
            </div>
          </CardFooter>
        </Card>

        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("home.installGuide.windows") }}</CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="aspect-video w-full">
              <iframe
                class="h-full w-full rounded-lg"
                :src="t('home.installGuide.windowsVideoUrl')"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </CardContent>
        </Card>

        <!-- Links Section -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("home.links.title") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-3">
              <a
                href="https://x.com/mulmocast"
                target="_blank"
                rel="noopener noreferrer"
                class="text-foreground hover:text-primary flex cursor-pointer items-center gap-3 transition-colors hover:underline"
              >
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  />
                </svg>
                <span>{{ t("home.links.twitter") }}</span>
              </a>
              <a
                href="https://discord.gg/XqmAYxm2Xf"
                target="_blank"
                rel="noopener noreferrer"
                class="text-foreground hover:text-primary flex cursor-pointer items-center gap-3 transition-colors hover:underline"
              >
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"
                  />
                </svg>
                <span>{{ t("home.links.discord") }}</span>
              </a>
              <a
                href="https://github.com/receptron/mulmocast-app"
                target="_blank"
                rel="noopener noreferrer"
                class="text-foreground hover:text-primary flex cursor-pointer items-center gap-3 transition-colors hover:underline"
              >
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                  />
                </svg>
                <span>{{ t("home.links.githubApp") }}</span>
              </a>
              <a
                href="https://github.com/receptron/mulmocast-cli"
                target="_blank"
                rel="noopener noreferrer"
                class="text-foreground hover:text-primary flex cursor-pointer items-center gap-3 transition-colors hover:underline"
              >
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                  />
                </svg>
                <span>{{ t("home.links.githubCli") }}</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation.vue";
import { useLocalizedUrl } from "@/i18n/utils";

import { macReleaseURL, winPrefix } from "../configs/config";

const { t } = useI18n();
const localizedUrl = useLocalizedUrl();

type MacData = {
  version?: string;
  updateTo?: {
    url: string;
  };
};

const currentMac = ref<MacData>({});
const winReleaseURL = ref<null | string>(null);
const windowsVersion = ref<null | string>(null);

const fetchDataMac = async () => {
  const response = await fetch(macReleaseURL + "?" + Date.now());
  const result = await response.json();
  const { currentRelease, releases } = result;
  currentMac.value = releases.find((release: MacData) => release.version === currentRelease);
};

const fetchDataWin = async () => {
  const response = await fetch(winPrefix + "/RELEASE.json");
  const result = await response.json();

  const { currentVersion } = result;
  windowsVersion.value = currentVersion;

  winReleaseURL.value = `${winPrefix}/MulmoCast-${currentVersion}-setup.exe`;
};

fetchDataMac();
fetchDataWin();
</script>

<style scoped></style>
