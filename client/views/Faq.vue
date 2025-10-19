<template>
  <div class="min-h-screen">
    <Navigation />
    <div class="flex items-center justify-center p-4">
      <div class="w-full max-w-2xl space-y-6 py-8">
        <!-- Header -->
        <div class="text-center">
          <h1 class="text-foreground text-3xl font-extrabold sm:text-5xl md:text-6xl">{{ t("faq.title") }}</h1>
          <p class="text-muted-foreground mt-4 text-lg">{{ t("faq.subtitle") }}</p>
        </div>

        <!-- FAQ Items -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("faq.items.0.question") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{ t("faq.items.0.answer") }}
            </p>
          </CardContent>
        </Card>

        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("faq.items.1.question") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{ t("faq.items.1.answer") }}
            </p>
          </CardContent>
        </Card>

        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("faq.items.2.question") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{ t("faq.items.2.answer") }}
            </p>
          </CardContent>
        </Card>

        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("faq.items.3.question") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{ t("faq.items.3.answer") }}
            </p>
          </CardContent>
        </Card>

        <!-- Back Button -->
        <div class="text-center">
          <Button as="a" href="/" variant="outline"> {{ t("faq.backButton") }} </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation.vue";

const { t } = useI18n();
</script>

<style scoped></style>
