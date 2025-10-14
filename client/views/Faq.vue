<template>
  <div class="min-h-screen">
    <Navigation />
    <div class="flex items-center justify-center p-4">
      <div class="w-full max-w-2xl space-y-6 py-8">
        <!-- Header -->
        <div class="text-center">
          <h1 class="text-foreground text-3xl font-extrabold sm:text-5xl md:text-6xl">FAQ</h1>
          <p class="text-muted-foreground mt-4 text-lg">よくある質問</p>
        </div>

        <!-- FAQ Items -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>MulmoCastとは何ですか？</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              MulmoCastは、台本を書くだけでAIが画像とナレーション音声を自動生成し、動画を完成させるマルチモーダルプレゼンテーションツールです。
            </p>
          </CardContent>
        </Card>

        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>料金はかかりますか？</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              アプリケーション自体は無料でご利用いただけます。ただし、利用にはOpenAI / Google / Anthropicなどの各種API
              Keyが必要です。それらのAPIの利用には料金がかかります。
            </p>
          </CardContent>
        </Card>

        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>どのプラットフォームで利用できますか？</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">MacOS、Windows、およびCLIツールで利用可能です。</p>
          </CardContent>
        </Card>

        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>どんな用途に使えますか？</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              ショート動画、学生のレポートや授業発表、ビジネスの提案資料や企画書など、様々な用途でご利用いただけます。
            </p>
          </CardContent>
        </Card>

        <!-- Back Button -->
        <div class="text-center">
          <Button as="a" href="/" variant="outline"> ホームに戻る </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation.vue";
</script>

<style scoped></style>
