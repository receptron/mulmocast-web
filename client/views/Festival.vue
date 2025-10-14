<template>
  <div class="min-h-screen">
    <Navigation />
    <div class="flex items-center justify-center p-4">
      <div class="w-full max-w-2xl space-y-6 py-8">
        <!-- Header -->
        <div class="text-center">
          <h1 class="text-foreground text-3xl font-extrabold sm:text-3xl md:text-4xl">AIショートフィルムフェス 2025</h1>
          <p class="text-muted-foreground mt-4 text-lg">MulmoCast AI Short Film Festival</p>
        </div>

        <!-- Introduction -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>映画祭について</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              MulmoCast AI Short Film Festivalは、AIを活用して制作された動画作品を募集・展示するイベントです。
              あなたの創造性とMulmoCastの力で、新しい映像表現に挑戦しませんか？
            </p>
          </CardContent>
        </Card>

        <!-- Application Method -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>応募方法</CardTitle>
          </CardHeader>
          <CardContent>
            <ol class="text-muted-foreground list-decimal space-y-2 pl-5">
              <li>作品をYouTubeにアップロード（限定公開可）</li>
              <li>
                応募フォーム（Googleフォーム予定）から以下の情報を申請
                <ul class="mt-2 list-disc space-y-1 pl-5">
                  <li>作品タイトル（必須）</li>
                  <li>YouTubeリンク</li>
                  <li>制作者名（個人／チーム名）</li>
                  <li>連絡先</li>
                  <li>mulmoscript.json（任意）</li>
                </ul>
              </li>
            </ol>
          </CardContent>
        </Card>

        <!-- Application Requirements -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>応募条件</CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="text-muted-foreground list-disc space-y-2 pl-5">
              <li>個人／チームいずれも可</li>
              <li>複数応募不可</li>
              <li>応募は18歳以上のみ（未成年不可）</li>
              <li>海外からの応募は可（賞金・副賞の対応は別途調整）</li>
              <li>他のコンテストとの併願不可</li>
            </ul>
          </CardContent>
        </Card>

        <!-- Results Announcement -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>結果発表</CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="text-muted-foreground list-disc space-y-2 pl-5">
              <li><span class="font-semibold">12月中旬</span> YouTubeライブで発表予定</li>
              <li>Tech Worldチャンネル＋各社配信予定</li>
              <li>参加はオンラインに限定</li>
            </ul>
          </CardContent>
        </Card>

        <!-- Latest Information -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>最新情報</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              詳細・応募フォームは近日公開予定です。最新情報はXアカウント（
              <a
                href="https://x.com/mulmocast"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary hover:underline"
              >
                @mulmocast
              </a>
              ）をご確認ください。
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
