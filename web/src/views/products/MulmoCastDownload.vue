<template>
  <div class="space-y-6">
    <!-- Mac Download -->
    <Card id="download" class="hover:bg-muted/50 scroll-mt-20">
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

    <!-- Windows Download -->
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
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { macReleaseURL, winPrefix } from "../../configs/config";

const { t } = useI18n();

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
  try {
    const response = await fetch(macReleaseURL + "?" + Date.now());
    const result = await response.json();
    const { currentRelease, releases } = result;
    currentMac.value = releases.find((release: MacData) => release.version === currentRelease);
  } catch (error) {
    console.error("Failed to fetch Mac release info from", macReleaseURL, error);
  }
};

const fetchDataWin = async () => {
  try {
    const response = await fetch(winPrefix + "/RELEASE.json");
    const result = await response.json();
    const { currentVersion } = result;
    windowsVersion.value = currentVersion;
    winReleaseURL.value = `${winPrefix}/MulmoCast-${currentVersion}-setup.exe`;
  } catch (error) {
    console.error("Failed to fetch Windows release info from", winPrefix, error);
  }
};

fetchDataMac();
fetchDataWin();
</script>
