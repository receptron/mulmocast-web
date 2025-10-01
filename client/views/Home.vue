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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const text = ref("");
const loading = ref(false);
const error = ref<string | null>(null);
const responseText = ref("");

async function onSubmit() {
  error.value = null;
  responseText.value = "";
  loading.value = true;
  try {
    const res = await fetch("/api/echo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text.value }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.error || "Request failed");
    }
    responseText.value = JSON.stringify(data, null, 2);
  } catch (e: any) {
    error.value = e?.message ?? "Unexpected error";
  } finally {
    loading.value = false;
  }
}

type MacData = {
  version?: string;
  updateTo?: {
    url: string;
  };
};

const currentMac = ref<MacData>({});
const currentWin = ref({});

const fetchDataMac = async () => {
  const response = await fetch("https://s3.aws.mulmocast.com/releases/prod/darwin/arm64/RELEASES.json");
  const result = await response.json();
  const { currentRelease, releases } = result;
  currentMac.value = releases.find((release: MacData) => release.version === currentRelease);
};

const fetchDataWin = async () => {
  const response = await fetch("https://s3.aws.mulmocast.com/releases/prod/win32/x64/RELEASES");
  const result = await response.text();
  console.log(result.split("\n").map((line) => line.split(/\s/)));
  // const { currentRelease, releases } = result;
  // currentWin.value = releases.find(release => release.version === currentRelease);
};

fetchDataMac();
fetchDataWin();

function onClear() {
  text.value = "";
  responseText.value = "";
  error.value = null;
}
</script>

<style scoped></style>
