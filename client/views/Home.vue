<template>
  <div class="flex min-h-screen items-center justify-center p-4">
    <div class="w-full max-w-2xl space-y-6">
      <!-- Hero -->
      <div class="text-center">
        <h1 class="text-foreground text-3xl font-extrabold sm:text-5xl md:text-6xl">MulmoCast</h1>
        <p class="text-muted-foreground mt-4 text-lg">
          台本を書くだけ。AIが動画まで。<br />
          学生の発表も、ビジネスの提案も、<span class="font-semibold">伝わる形に自動で</span>。
        </p>
      </div>

      <!-- Feature Card -->
      <div class="group border-muted bg-card hover:bg-muted/50 relative rounded-2xl border p-6">
        <h2 class="mb-4 text-xl font-bold">できること</h2>
        <ul class="text-muted-foreground list-disc space-y-2 pl-5">
          <li>AIに台本を作らせる、または自分で書く</li>
          <li>画像とナレーション音声を自動生成</li>
          <li>ワンクリックで動画を完成</li>
        </ul>
      </div>

      <!-- Use Case -->
      <div class="group border-muted bg-card hover:bg-muted/50 relative rounded-2xl border p-6">
        <h2 class="mb-2 text-xl font-bold">こんな人に</h2>
        <div class="text-muted-foreground group-hover:text-foreground mt-2 flex flex-col gap-2">
          <p>
            <span class="font-semibold">学生：</span>
            レポートや授業発表をわかりやすい動画に
          </p>
          <p>
            <span class="font-semibold">ビジネスパーソン：</span>
            提案資料や企画をナレーション付き動画に
          </p>
        </div>
      </div>

      <!-- Download Section -->
      <Card class="hover:bg-muted/50">
        <CardHeader>
          <CardTitle>Mac用アプリをダウンロード</CardTitle>
        </CardHeader>
        <CardContent class="space-y-4">
          <a :href="currentMac?.updateTo?.url" class="text-primary underline">
            ダウンロード {{ currentMac?.version }}
          </a>
          <p class="text-muted-foreground text-sm">
            無料で利用できます。<br />
            利用には
            <span class="font-semibold">OpenAI API Key</span> が必要です。
          </p>
        </CardContent>
        <CardFooter>
          <div class="w-full text-center">
            <Button as="a" :href="currentMac?.updateTo?.url" class="w-full"> 無料で使ってみる </Button>
          </div>
        </CardFooter>
      </Card>

      <!-- Download Section -->
      <Card class="hover:bg-muted/50">
        <CardHeader>
          <CardTitle>Windows用アプリをダウンロード</CardTitle>
        </CardHeader>
        <CardContent class="space-y-4">
          <a :href="winReleaseURL ?? ''" class="text-primary underline"> ダウンロード {{ windowsVersion }} </a>
          <p class="text-muted-foreground text-sm">
            無料で利用できます。<br />
            利用には
            <span class="font-semibold">OpenAI API Key</span> が必要です。
          </p>
        </CardContent>
        <CardFooter>
          <div class="w-full text-center">
            <Button as="a" :href="winReleaseURL ?? ''" class="w-full"> 無料で使ってみる </Button>
          </div>
        </CardFooter>
      </Card>

      <!-- Links Section -->
      <Card class="hover:bg-muted/50">
        <CardHeader>
          <CardTitle>リンク</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-3">
            <a
              href="https://x.com/mulmocast"
              target="_blank"
              rel="noopener noreferrer"
              class="text-foreground hover:text-primary hover:underline flex items-center gap-3 transition-colors cursor-pointer"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
              </svg>
              <span>X (Twitter)</span>
            </a>
            <a
              href="https://github.com/receptron/mulmocast-app"
              target="_blank"
              rel="noopener noreferrer"
              class="text-foreground hover:text-primary hover:underline flex items-center gap-3 transition-colors cursor-pointer"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
              <span>GitHub - MulmoCast App</span>
            </a>
            <a
              href="https://github.com/receptron/mulmocast-cli"
              target="_blank"
              rel="noopener noreferrer"
              class="text-foreground hover:text-primary hover:underline flex items-center gap-3 transition-colors cursor-pointer"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
              <span>GitHub - MulmoCast CLI</span>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import { RouterLink } from "vue-router";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { macReleaseURL, winPrefix } from "../configs/config";

/*
const text = ref("");
const loading = ref(false);
const error = ref<string | null>(null);
const responseText = ref("");
*/

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
  const response = await fetch(macReleaseURL);
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
