<template>
  <div class="min-h-screen">
    <Navigation />
    <div class="flex items-center justify-center p-4">
      <div class="w-full max-w-2xl space-y-6 py-8">
        <!-- Header -->
        <div class="text-center">
          <h1 class="text-foreground text-3xl font-extrabold sm:text-3xl md:text-4xl">{{ t("filmFes.title") }}</h1>
          <p class="text-muted-foreground mt-4 text-lg">{{ t("festival.subtitle") }}</p>
        </div>

        <!-- Introduction -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("festival.about.title") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{ t("festival.about.description") }}
            </p>
          </CardContent>
        </Card>

        <!-- Application Method -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("festival.applicationMethod.title") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <ol class="text-muted-foreground list-decimal space-y-2 pl-5">
              <li>{{ t("festival.applicationMethod.step1") }}</li>
              <li>
                {{ t("festival.applicationMethod.step2") }}
                <ul class="mt-2 list-disc space-y-1 pl-5">
                  <li>{{ t("festival.applicationMethod.requirements.title") }}</li>
                  <li>{{ t("festival.applicationMethod.requirements.youtubeLink") }}</li>
                  <li>{{ t("festival.applicationMethod.requirements.creator") }}</li>
                  <li>{{ t("festival.applicationMethod.requirements.contact") }}</li>
                  <li>{{ t("festival.applicationMethod.requirements.script") }}</li>
                </ul>
              </li>
            </ol>
          </CardContent>
        </Card>

        <!-- Application Requirements -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("festival.eligibility.title") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="text-muted-foreground list-disc space-y-2 pl-5">
              <li>{{ t("festival.eligibility.items.0") }}</li>
              <li>{{ t("festival.eligibility.items.1") }}</li>
              <li>{{ t("festival.eligibility.items.2") }}</li>
              <li>{{ t("festival.eligibility.items.3") }}</li>
              <li>{{ t("festival.eligibility.items.4") }}</li>
            </ul>
          </CardContent>
        </Card>

        <!-- Results Announcement -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("festival.results.title") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="text-muted-foreground list-disc space-y-2 pl-5">
              <li>
                <span class="font-semibold">{{ t("festival.results.date") }}</span>
                {{ t("festival.results.items.0", { date: "" }) }}
              </li>
              <li>{{ t("festival.results.items.1") }}</li>
              <li>{{ t("festival.results.items.2") }}</li>
            </ul>
          </CardContent>
        </Card>

        <!-- Latest Information -->
        <Card class="hover:bg-muted/50">
          <CardHeader>
            <CardTitle>{{ t("festival.latestInfo.title") }}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              {{ t("festival.latestInfo.description").split("(link)")[0] }}
              <a
                href="https://x.com/mulmocast"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary hover:underline"
              >
                {{ t("festival.latestInfo.twitterHandle") }}
              </a>
              {{ t("festival.latestInfo.description").split("(link)")[1] }}
            </p>
          </CardContent>
        </Card>

        <!-- Back Button -->
        <div class="text-center">
          <Button as="a" :href="localizedUrl('/')" variant="outline"> {{ t("festival.backButton") }} </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useHead } from "@unhead/vue";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation.vue";
import { useLocalizedUrl } from "@/i18n/utils";

const { t } = useI18n();
const localizedUrl = useLocalizedUrl();

useHead({
  title: [t("filmFes.title"), "MulmoCast"].join(" - "),
});
</script>

<style scoped></style>
