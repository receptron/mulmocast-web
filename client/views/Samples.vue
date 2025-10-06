<template>
  <div class="min-h-screen">
    <Navigation />
    <div class="flex items-center justify-center p-4">
      <div class="w-full max-w-2xl space-y-6 py-8">
      <!-- Header -->
      <div class="text-center">
        <h1 class="text-foreground text-3xl font-extrabold sm:text-5xl md:text-6xl">サンプルコンテンツ</h1>
        <p class="text-muted-foreground mt-4 text-lg">MulmoCastで作成された動画の例</p>
      </div>

      <!-- Sample Categories -->
      <Card class="hover:bg-muted/50">
        <CardHeader>
          <CardTitle>教育・学術</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-muted-foreground mb-4">大学の講義や研究発表など、学術的な内容をわかりやすく伝える動画です。</p>
          <div class="text-muted-foreground text-sm italic">サンプル動画は近日公開予定です</div>
        </CardContent>
      </Card>

      <Card class="hover:bg-muted/50">
        <CardHeader>
          <CardTitle>ビジネス・プレゼンテーション</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-muted-foreground mb-4">
            企画提案や製品紹介など、ビジネスシーンで活用できるプレゼンテーション動画です。
          </p>
          <div class="text-muted-foreground text-sm italic">サンプル動画は近日公開予定です</div>
        </CardContent>
      </Card>

      <Card class="hover:bg-muted/50">
        <CardHeader>
          <CardTitle>クリエイティブ</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-muted-foreground mb-4">
            ストーリーテリングやエンターテイメントなど、創造的な表現を楽しむ動画です。
          </p>
          <div class="text-muted-foreground text-sm italic">サンプル動画は近日公開予定です</div>
        </CardContent>
      </Card>

      <!-- How to Get Started -->
      <Card class="hover:bg-muted/50">
        <CardHeader>
          <CardTitle>始め方</CardTitle>
        </CardHeader>
        <CardContent>
          <ol class="text-muted-foreground list-decimal space-y-2 pl-5">
            <li>アプリをダウンロード</li>
            <li>OpenAI API Keyを設定</li>
            <li>台本を作成または生成</li>
            <li>画像とナレーションを自動生成</li>
            <li>動画を完成させる</li>
          </ol>
        </CardContent>
        <CardFooter>
          <Button as="a" href="/" class="w-full"> アプリをダウンロード </Button>
        </CardFooter>
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
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation.vue";
</script>

<style scoped></style>
